import { FC, Fragment } from "react";
import "./App.css";
import { RoutesAsObj } from "./routes/RoutesAsObj";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { CssBaseline } from "@mui/material";

const App: FC = () => {
  return (
    <Fragment>
      <RoutesAsObj />
      {/* <CssBaseline enableColorScheme /> */}
      <ToastContainer />
    </Fragment>
  );
};

export default App;
