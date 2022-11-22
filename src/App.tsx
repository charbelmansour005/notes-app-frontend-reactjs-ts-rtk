import { FC, Fragment } from "react";
import "./App.css";
import { RoutesAsObj } from "./routes/RoutesAsObj";

const App: FC = () => {
  return (
    <Fragment>
      <RoutesAsObj />
    </Fragment>
  );
};

export default App;
