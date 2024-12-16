import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import Header from "./Header";

const Profile = () => {
  const [userDetails, setUserDetails] = useState({
    displayName: "",
    email: "",
    photoURL: "",
  });

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserDetails({
          displayName: user.displayName || "No Name",
          email: user.email || "No Email",
          photoURL:
            user.photoURL ||
            "https://via.placeholder.com/150/000000/FFFFFF/?text=No+Image",
        });
      } else {
        setUserDetails({
          displayName: "",
          email: "",
          photoURL: "",
        });
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-black text-white">
      {/* Header */}

      {/* Profile Card */}
      <div className="w-80 rounded-lg bg-gray-800 p-8 text-center shadow-lg md:w-96">
        <img
          src={userDetails.photoURL}
          alt="User Profile"
          className="mx-auto h-32 w-32 rounded-full border-4 border-red-600 shadow-md"
        />
        <h1 className="mt-4 text-2xl font-bold">{userDetails.displayName}</h1>
        <h2 className="mt-2 text-lg text-gray-400">{userDetails.email}</h2>

        <button className="mt-6 rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700">
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default Profile;
