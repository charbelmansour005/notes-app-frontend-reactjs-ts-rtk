import React, { FC, Fragment, ReactElement } from "react";
import { useRoutes } from "react-router-dom";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Home from "../pages/Home";
import SearchNotes from "../pages/SearchNotes";

export interface IRoutesAsObjProps {}

// const Home = lazy(() => import("../components/Home"));

export const RoutesAsObj: FC = (props: IRoutesAsObjProps): ReactElement => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login /> },
    { path: "/signup", element: <SignUp /> },
    { path: "/search", element: <SearchNotes /> },
  ]);
  return <Fragment>{element}</Fragment>;
};
