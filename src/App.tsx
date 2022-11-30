import { FC, Fragment } from "react";
import "./App.css";
import { RoutesAsObj } from "./routes/RoutesAsObj";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App: FC = () => {
  return (
    <Fragment>
      <RoutesAsObj />
      <ToastContainer />
    </Fragment>
  );
};

export default App;
