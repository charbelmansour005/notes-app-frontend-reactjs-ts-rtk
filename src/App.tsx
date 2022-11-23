import { FC, Fragment, ReactElement } from "react";
import "./App.css";
import { RoutesAsObj } from "./routes/RoutesAsObj";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App: FC = (): ReactElement => {
  return (
    <Fragment>
      <RoutesAsObj />
      <ToastContainer />
    </Fragment>
  );
};

export default App;
