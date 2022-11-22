import React, { FC, lazy, Fragment } from "react";
import { useRoutes } from "react-router-dom";
import Login from "../components/Login";
import SignUp from "../components/SignUp";
import Home from '../components/Home';

export interface IRoutesAsObjProps {}

// const Home = lazy(() => import("../components/Home"));

export const RoutesAsObj: FC = (props: IRoutesAsObjProps) => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login /> },
    { path: "/signup", element: <SignUp /> },
  ]);
  return <Fragment>{element}</Fragment>;
};
