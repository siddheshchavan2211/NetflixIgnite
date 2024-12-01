import { useState } from "react";
import Header from "./Header";

const SignPage = () => {
  const [signuppage, setsignuppage] = useState(false);
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
      <form className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  bg-black bg-opacity-60 p-8 rounded-lg shadow-lg w-1/3">
        <h1 className="text-white font-bold text-3xl mb-6 ml-16 ">
          {!signuppage ? "Sign In" : "Sign Up"}
        </h1>

        <div className="flex flex-col items-center ">
          {/* Enter Name Input */}
          {!signuppage ? null : (
            <input
              type="text"
              placeholder="Enter Name"
              className="block w-80 h-16 mb-4 p-3 border border-gray-400 rounded bg-black bg-opacity-50 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
            />
          )}
          {/* Enter Email Input */}
          <input
            type="email"
            placeholder="Enter Email"
            className="block w-80 h-16 mb-4 p-3 border border-gray-400 rounded bg-black bg-opacity-50 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          {/* Enter Password Input */}
          <input
            type="password"
            placeholder="Enter Password"
            className="block w-80 h-16 mb-4 p-3 border border-gray-400 rounded bg-black bg-opacity-50 text-white focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          {/* Submit Button */}
          <button
            type="submit"
            className="block w-80 h-12 bg-red-600 text-white font-bold rounded hover:bg-red-700 transition-colors duration-300"
          >
            Submit
          </button>
        </div>
        <div className="flex left-0 right-0 justify-start h-24">
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
