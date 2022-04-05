import * as React from "react";
import { useRoutes } from "react-router-dom";
import Layout from "./Layout";
import Sample from "./Sample";

 export default function NavRoutes() {
  let element = useRoutes([
    {
      path: "/",
      element: <Layout />,
     
    },
    { path: "sample", element: <Sample /> },
  ]);

  return element;
}