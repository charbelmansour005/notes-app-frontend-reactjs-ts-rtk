import React, { FC, lazy, Fragment } from "react";
import { useRoutes } from "react-router-dom";

export interface IRoutesAsObjProps {}

const Home = lazy(() => import("../components/Home"));
const Login = lazy(() => import("../components/Login"));

export const RoutesAsObj: FC = (props: IRoutesAsObjProps) => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login /> },
  ]);
  return <Fragment>{element}</Fragment>;
};
