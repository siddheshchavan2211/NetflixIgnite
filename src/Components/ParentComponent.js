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
import { auth } from "../Utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import GptSuggestion from "./GptSuggestion";
import StreamingPage from "./StreamingPage";
import Profile from "./Profile";

const ParentComponent = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  if (isAuthenticated === null) {
    return <div>Loading...</div>; // Show loading state while checking authentication
  }

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
    {
      path: "/Suggestion",
      element: <GptSuggestion />,
    },
    {
      path: "/browse/stream/:id",
      element: <StreamingPage />,
    },
    {
      path: "/profile",
      element: <Profile />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={AppLayout} />
    </div>
  );
};

export default ParentComponent;
