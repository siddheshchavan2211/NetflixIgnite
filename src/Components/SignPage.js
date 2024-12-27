import { useRef, useState } from "react";
import Header from "./Header";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Utils/firebase";
import {
  CheckValidationemail,
  CheckValidationpassword,
  CheckValidationname,
} from "../Utils/Validation";
import { useNavigate } from "react-router-dom";
import { adduser } from "../Utils/DataSlice";
import { useDispatch } from "react-redux";
import { User_Logo } from "../Utils/Constants";

const SignPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [signuppage, setsignuppage] = useState(false);
  const [emailerror, setemailerror] = useState();
  const [passerror, setpasserror] = useState();
  const [nameerror, setnameerror] = useState();
  const [defaulterror, setdefaulterror] = useState();
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const Handlevalidation = () => {
    let result3 = true;

    if (signuppage) {
      result3 = CheckValidationname(name.current.value);
      setnameerror(result3);
    }
    const result = CheckValidationemail(email.current.value);
    const result2 = CheckValidationpassword(password.current.value);
    setpasserror(result2);
    setemailerror(result);
    if (result && result2 && result3) return;
    if (signuppage) {
      //signup
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: User_Logo,
          }).then(() => {
            const { uid, email, displayName, photoURL } = auth.currentUser;
            dispatch(
              adduser({
                uid: uid,
                email: email,
                displayName: displayName,
                photoURL: photoURL,
              }),
            );
            // setsignuppage(false);
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setdefaulterror(errorCode, "-", errorMessage);
          // ..
        });
    } else {
      //signin
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // console.log("User signed in:", userCredential.user);
          // Do not navigate here; let onAuthStateChanged handle it
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setdefaulterror(`${errorCode} - ${errorMessage}`);
        });
    }
  };
  return (
    <div className="relative">
      {/* Header */}
      <Header />
      {/* Background Image */}
      <img
        className="h-screen w-full object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/2bcf01ee-7ef6-4930-b0d5-c6863853c461/web/IN-en-20241125-TRIFECTA-perspective_a47db038-756f-4f26-b1f7-cfc882b98746_large.jpg"
        alt="netflixbg"
      />
      {/* Form */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform rounded-lg bg-black bg-opacity-60 p-8 shadow-lg md:w-1/3"
      >
        <h1 className="mb-6 ml-16 text-3xl font-bold text-white">
          {!signuppage ? "Sign In" : "Sign Up"}
        </h1>

        <div className="flex flex-col items-center">
          {/* Enter Name Input */}
          {!signuppage ? null : (
            <>
              <div className="relative w-80">
                <input
                  ref={name}
                  type="text"
                  id="name"
                  placeholder=" "
                  className="peer my-4 block h-16 w-full rounded border border-gray-400 bg-black bg-opacity-50 px-3 pb-1 pt-5 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-white"
                />
                <label
                  htmlFor="name"
                  className="peer-focus:text-l absolute left-4 top-8 -translate-y-1/2 transform text-lg text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:transform peer-focus:top-8 peer-focus:text-gray-400"
                >
                  Enter Full Name
                </label>
              </div>
            </>
          )}
          {signuppage && (
            <div className="!container ml-32 flex !justify-start font-medium text-red-600">
              {nameerror}
            </div>
          )}
          {/* Enter Email Input */}
          <div className="relative w-80">
            <input
              ref={email}
              type="email"
              id="email"
              placeholder=" "
              className="peer my-4 block h-16 w-full rounded border border-gray-400 bg-black bg-opacity-50 px-3 pb-1 pt-5 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-white"
            />
            <label
              htmlFor="email"
              className="peer-focus:text-l absolute left-4 top-8 -translate-y-1/2 transform text-lg text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:transform peer-focus:top-8 peer-focus:text-gray-400"
            >
              Enter Email
            </label>
          </div>
          <div className="!container ml-32 flex !justify-start font-medium text-red-600">
            {emailerror}
          </div>

          {/* Enter Password Input */}
          <div className="relative w-80">
            <input
              ref={password}
              type="password"
              id="pass"
              placeholder=" "
              className="peer my-4 block h-16 w-full rounded border border-gray-400 bg-black bg-opacity-50 px-3 pb-1 pt-5 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-white"
            />
            <label
              htmlFor="pass"
              className="peer-focus:text-l absolute left-4 top-8 -translate-y-1/2 transform text-lg text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:transform peer-focus:top-8 peer-focus:text-gray-400"
            >
              Enter Password
            </label>
          </div>
          <div className="!container ml-32 flex !justify-start font-medium text-red-600">
            {passerror}
          </div>
          <div className="!container ml-32 flex !justify-start font-medium text-red-600">
            {defaulterror}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            onClick={Handlevalidation}
            className="block h-12 w-80 rounded bg-red-600 font-bold text-white transition-colors duration-300 hover:bg-red-700"
          >
            Submit
          </button>
        </div>
        <div className="left-0 right-0 flex h-16 justify-start">
          <p className="ml-14 mt-8 text-white">
            {!signuppage ? (
              <>
                New to Netflix?{" "}
                <span
                  onClick={() => setsignuppage(!signuppage)}
                  className="cursor-pointer"
                >
                  Sign up
                </span>
              </>
            ) : (
              <>
                {" "}
                Already Have an Account?{" "}
                <span
                  onClick={() => setsignuppage(!signuppage)}
                  className="cursor-pointer"
                >
                  Sign In
                </span>
              </>
            )}
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignPage;
