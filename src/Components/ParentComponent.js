import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EntryPage from "./EntryPage";
import SignPage from "./SignPage";
import ErrorPage from "./ErrorPage";

const ParentComponent = () => {
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
  ]);
  return (
    <div>
      <RouterProvider router={AppLayout} />
    </div>
  );
};

export default ParentComponent;
