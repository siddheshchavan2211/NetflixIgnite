import React, { useState, useEffect } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import EntryPage from "./EntryPage";
import SignPage from "./SignPage";
import ErrorPage from "./ErrorPage";
import Main from "./Main";
import { auth } from "../Utils/firebase"; // Import Firebase auth
import { onAuthStateChanged } from "firebase/auth"; // Import Firebase auth state change listener

const ParentComponent = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null); // To track user login status

  useEffect(() => {
    // Set up the Firebase authentication listener
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true); // User is logged in
      } else {
        setIsAuthenticated(false); // User is not logged in
      }
    });

    return () => {
      unsubscribe(); // Clean up the listener when the component unmounts
    };
  }, []); // Empty dependency array ensures it only runs once on mount

  if (isAuthenticated === null) {
    return <div>Loading...</div>; // Show loading state while checking authentication
  }

  // Setup router based on authentication
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
      element: isAuthenticated ? <Main /> : <Navigate to="/Signpage" replace />, // Navigate to SignPage if not authenticated
    },
  ]);

  return (
    <div>
      <RouterProvider router={AppLayout} />
    </div>
  );
};

export default ParentComponent;
