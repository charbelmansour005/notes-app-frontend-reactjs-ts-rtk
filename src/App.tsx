import { FC, Fragment } from "react";
import "./App.css";
import { RoutesAsObj } from "./routes/RoutesAsObj";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material";
import { lightTheme, darkTheme } from "./assets/theme/theme";
import { useAppSelector } from "./app/hooks/hooks";

const App: FC = () => {
  const theme = useAppSelector((state) => state.theme);
  return (
    <Fragment>
      <ThemeProvider theme={theme.darkTheme ? darkTheme : lightTheme}>
        <RoutesAsObj />
        <CssBaseline enableColorScheme />
        <ToastContainer />
      </ThemeProvider>
    </Fragment>
  );
};

export default App;
