import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Frame5596 from "pages/Frame5596";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "frame5596",
      element: <Frame5596 />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
