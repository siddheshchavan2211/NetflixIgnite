import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [Toggle, setToggle] = useState(true);
  const location = useLocation();
  const sign = location.pathname === "/Signpage";
  return (
    <>
      <div className="p-8 absolute w-full flex justify-between bg-gradient-to-b from-black">
        <img
          className="w-36
        "
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt="logo"
        />
        {!sign && Toggle && (
          <Link to="/Signpage">
            <button
              onClick={() => setToggle(!Toggle)}
              className="bg-white text-black px-4 py-1 rounded-full "
            >
              Sign In
            </button>
          </Link>
        )}
      </div>
    </>
  );
};
export default Header;
