import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { adduser, removeuser } from "../Utils/DataSlice";
import { Netflix_Logo } from "../Utils/Constants";
import { changelanguage, ToggleReducer } from "../Utils/GptSlice";
import { language, SUPPORTED_LANGUAGES } from "../Utils/LanguageConstants";
const Header = () => {
  const [Toggle, setToggle] = useState(true);
  const changelang = useSelector((store) => store.gpt.ToggleGpt);

  const location = useLocation();
  const sign = location.pathname === "/Signpage";
  const maintogo = location.pathname === "/browse";
  const dispatch = useDispatch();
  const users = useSelector((store) => store.data);
  const navigate = useNavigate();
  const reference = useRef();
  const Signoutfun = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
        alert("signout");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          adduser({
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
          }),
        );
        navigate("/browse");
      } else {
        dispatch(removeuser());
        // navigate("/");
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);
  const GptGugg = () => {
    dispatch(ToggleReducer());
  };
  const changelanguages = (e) => {
    dispatch(changelanguage(e.target.value));
  };
  return (
    <>
      <div className="absolute left-0 top-0 z-20 flex w-full justify-between bg-gradient-to-b from-black p-8">
        <Link to="/">
          <img
            className="w-20 md:ml-10 md:w-48"
            src={Netflix_Logo}
            alt="logo"
          />
        </Link>

        {!sign && Toggle && !maintogo && (
          <Link to="/Signpage">
            <button
              onClick={() => setToggle(!Toggle)}
              className="rounded-full bg-white px-4 py-1 text-black"
            >
              Sign In
            </button>
          </Link>
        )}
        {changelang && (
          <div className="ml-[50%]">
            <select
              onChange={changelanguages}
              className="rounded-md text-black"
            >
              {SUPPORTED_LANGUAGES.map((langu) => (
                <option key={langu.identifier} value={langu.identifier}>
                  {langu.name}
                </option>
              ))}
            </select>
          </div>
        )}
        {maintogo && (
          <div className="group relative">
            {/* User Icon */}
            <img
              src={users?.photoURL}
              alt="userlogo"
              className="flex h-10 w-10 items-center justify-center bg-gray-300 font-bold text-black focus:outline-none"
            />

            {/* Dropdown Menu */}

            <div className="absolute right-0 z-10 hidden w-40 bg-white shadow-lg group-focus-within:block group-hover:block">
              <ul className="flex flex-col">
                <Link to="/profile">
                  {" "}
                  <li className="cursor-pointer px-4 py-2 text-black hover:bg-gray-100">
                    Profile
                  </li>
                </Link>

                <li
                  onClick={GptGugg}
                  className="cursor-pointer px-4 py-2 text-black hover:bg-gray-100"
                >
                  {changelang ? "Home Page" : "Movie Suggestions"}
                </li>

                <li
                  onClick={Signoutfun}
                  className="cursor-pointer px-4 py-2 text-black hover:bg-gray-100"
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
