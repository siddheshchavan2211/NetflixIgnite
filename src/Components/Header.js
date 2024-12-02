import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useSelector } from "react-redux";

const Header = () => {
  const [Toggle, setToggle] = useState(true);
  const location = useLocation();
  const sign = location.pathname === "/Signpage";
  const maintogo = location.pathname === "/browse";

  const users = useSelector((store) => store.data);
  const navigate = useNavigate();

  const Signoutfun = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
        alert("signout");
      })
      .catch((error) => {
        //navigate("/error");
      });
  };
  return (
    <>
      <div className="p-8 absolute w-full flex justify-between bg-gradient-to-b from-black">
        <Link to="/">
          <img
            className="w-48 ml-10
        "
            src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
            alt="logo"
          />
        </Link>

        {!sign && Toggle && !maintogo && (
          <Link to="/Signpage">
            <button
              onClick={() => setToggle(!Toggle)}
              className="bg-white text-black px-4 py-1 rounded-full "
            >
              Sign In
            </button>
          </Link>
        )}
        {maintogo && (
          <div className="relative group">
            {/* User Icon */}
            <img
              src={users?.photoURL}
              alt="userlogo"
              className="w-10 h-10 bg-gray-300  flex items-center justify-center text-black font-bold focus:outline-none"
            />

            {/* Dropdown Menu */}

            <div className="absolute right-0 mt-2 w-40 bg-white  shadow-lg z-10 hidden group-hover:block group-focus-within:block">
              <ul className="flex flex-col">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Profile
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Settings
                </li>

                <li
                  onClick={Signoutfun}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  Logout
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default Header;
