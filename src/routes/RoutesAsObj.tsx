import React, { FC, Fragment, ReactElement } from "react";
import { useRoutes } from "react-router-dom";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Home from "../pages/Home";

export interface IRoutesAsObjProps {}

// const Home = lazy(() => import("../components/Home"));

export const RoutesAsObj: FC = (props: IRoutesAsObjProps): ReactElement => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login /> },
    { path: "/signup", element: <SignUp /> },
  ]);
  return <Fragment>{element}</Fragment>;
};
