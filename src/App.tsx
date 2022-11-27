import { FC, Fragment, ReactElement } from "react";
import "./App.css";
import { RoutesAsObj } from "./routes/RoutesAsObj";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { Routes } from "react-router-dom";

const App: FC = () => {
  return (
    <Fragment>
      {/* <Routes> */}
      <RoutesAsObj />
      <ToastContainer />
      {/* </Routes> */}
    </Fragment>
  );
};

export default App;
