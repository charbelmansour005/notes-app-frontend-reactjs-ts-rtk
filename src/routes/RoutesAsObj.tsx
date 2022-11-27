import React, { FC, Fragment, ReactElement } from "react";
import { useRoutes } from "react-router-dom";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Home from "../pages/Home";
import SearchNotes from "../pages/SearchNotes";
import Page404 from "../pages/Page404";
// import { Router } from "react-router-dom";

export interface IRoutesAsObjProps {}

// const Home = lazy(() => import("../components/Home"));

export const RoutesAsObj: FC = (props: IRoutesAsObjProps): ReactElement => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login /> },
    { path: "/signup", element: <SignUp /> },
    { path: "/search", element: <SearchNotes /> },
    { path: "*", element: <Page404 /> },
  ]);
  return <Fragment>{element}</Fragment>;
};
