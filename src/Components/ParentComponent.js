import React, { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EntryPage from "./EntryPage";
import SignPage from "./SignPage";
import ErrorPage from "./ErrorPage";
import Main from "./Main";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { adduser, removeuser } from "../Utils/DataSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
const ParentComponent = () => {
  const dispatch = useDispatch();
  const [user, setuser] = useState(null);
  const AppLayout = createBrowserRouter([
    {
      path: "/",
      element: <EntryPage />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/Signpage",
      element: <SignPage />,
    },
    {
      path: "/browse",
      element: user ? <Main /> : <Navigate to="/Signpage" />,
    },
  ]);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        const email = user.email;
        const displayName = user.displayName;
        const photoURL = user.photoURL;
        dispatch(
          adduser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        setuser(user);
        // ...
      } else {
        // User is signed out
        // dispatch(removeuser());
        // navigate("/");
        // ...
      }
    });
  }, []);
  return (
    <div>
      <RouterProvider router={AppLayout} />
    </div>
  );
};

export default ParentComponent;
