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
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL:
              "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg", // Set the display name
          }).then(() => {
            const { uid, email, displayName, photoURL } = user;
            dispatch(
              adduser({
                uid: uid,
                email: email,
                displayName: displayName,
                photoURL: photoURL,
              })
            );

            console.log(user);
            navigate("/signpage");
            setsignuppage(false);
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
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setdefaulterror(errorCode, "-", errorMessage);
        });
    }
  };
  return (
    <div className="relative">
      {/* Header */}
      <Header />
      {/* Background Image */}
      <img
        className="w-full h-screen object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/2bcf01ee-7ef6-4930-b0d5-c6863853c461/web/IN-en-20241125-TRIFECTA-perspective_a47db038-756f-4f26-b1f7-cfc882b98746_large.jpg"
        alt="netflixbg"
      />
      {/* Form */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  bg-black bg-opacity-60 p-8 rounded-lg shadow-lg w-1/3"
      >
        <h1 className="text-white font-bold text-3xl mb-6 ml-16 ">
          {!signuppage ? "Sign In" : "Sign Up"}
        </h1>

        <div className="flex flex-col items-center ">
          {/* Enter Name Input */}
          {!signuppage ? null : (
            <>
              <div className="relative w-80">
                <input
                  ref={name}
                  type="text"
                  id="name"
                  placeholder=" "
                  className="peer my-4 block w-full h-16 px-3 pt-5 pb-1 border border-gray-400 rounded bg-black bg-opacity-50 text-white focus:outline-none focus:ring-2 focus:ring-white placeholder-transparent"
                />
                <label
                  htmlFor="name"
                  className="absolute left-4 top-8 transform -translate-y-1/2 text-gray-400 text-lg transition-all 
      peer-placeholder-shown:top-1/2 peer-placeholder-shown:transform peer-placeholder-shown:-translate-y-1/2 
      peer-focus:top-8 peer-focus:text-l peer-focus:text-gray-400"
                >
                  Enter Full Name
                </label>
              </div>
            </>
          )}
          {signuppage && (
            <div className="flex  !justify-start !container ml-32  text-red-600 font-medium ">
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
              className="peer my-4 block w-full h-16 px-3 pt-5 pb-1 border border-gray-400 rounded bg-black bg-opacity-50 text-white focus:outline-none focus:ring-2 focus:ring-white placeholder-transparent"
            />
            <label
              htmlFor="email"
              className="absolute left-4 top-8 transform -translate-y-1/2 text-gray-400 text-lg transition-all 
              peer-placeholder-shown:top-1/2 peer-placeholder-shown:transform peer-placeholder-shown:-translate-y-1/2 
              peer-focus:top-8 peer-focus:text-l peer-focus:text-gray-400"
            >
              Enter Email
            </label>
          </div>
          <div className="flex  !justify-start !container ml-32  text-red-600 font-medium ">
            {emailerror}
          </div>

          {/* Enter Password Input */}
          <div className="relative w-80 ">
            <input
              ref={password}
              type="password"
              id="pass"
              placeholder=" "
              className="peer block my-4 w-full h-16 px-3 pt-5 pb-1 border border-gray-400 rounded bg-black bg-opacity-50 text-white focus:outline-none focus:ring-2 focus:ring-white placeholder-transparent"
            />
            <label
              htmlFor="pass"
              className="absolute left-4 top-8 transform -translate-y-1/2 text-gray-400 text-lg transition-all 
              peer-placeholder-shown:top-1/2 peer-placeholder-shown:transform peer-placeholder-shown:-translate-y-1/2 
              peer-focus:top-8 peer-focus:text-l peer-focus:text-gray-400"
            >
              Enter Password
            </label>
          </div>
          <div className="flex  !justify-start !container ml-32  text-red-600 font-medium ">
            {passerror}
          </div>
          <div className="flex  !justify-start !container ml-32  text-red-600 font-medium ">
            {defaulterror}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            onClick={Handlevalidation}
            className="block w-80 h-12 bg-red-600 text-white font-bold rounded hover:bg-red-700 transition-colors duration-300"
          >
            Submit
          </button>
        </div>
        <div className="flex left-0 right-0 justify-start h-16">
          <p className="text-white mt-8 ml-14  ">
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
      <div>
        jcvdafffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
      </div>
      <div>
        jcvdafffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
      </div>{" "}
      <div>
        jcvdafffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
      </div>{" "}
      <div>
        jcvdafffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
      </div>{" "}
      <div>
        jcvdafffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
      </div>{" "}
      <div>
        jcvdafffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
      </div>{" "}
      <div>
        jcvdafffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
      </div>{" "}
      <div>
        jcvdafffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
      </div>{" "}
      <div>
        jcvdafffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
      </div>
    </div>
  );
};

export default SignPage;
