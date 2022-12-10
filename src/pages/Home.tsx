import { useEffect, FC, ReactElement, useState, Fragment } from "react";
import { redirect } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../app/hooks/hooks";
import { fetchNotes } from "../features/note/noteSlice";
import AddNotes from "../components/AddNotes";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import NavBar from "../components/NavBar";
import NotesList from "../components/NotesList";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import "../assets/styles/Home.css";
import Tooltip from "@mui/material/Tooltip";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import LinearProgress from "@mui/material/LinearProgress";
import { lightTheme, darkTheme } from "../assets/theme/theme";
import { ThemeProvider } from "@mui/material/styles";

const Home: FC = (): ReactElement => {
  // clearing the localStorage from the Token after 1 hour
  var hours: number = 1;
  var now: any = new Date().getTime();
  var setupTime: any = localStorage.getItem("setupTime");
  if (setupTime == null) {
    localStorage.setItem("setupTime", now);
  } else {
    if (now - setupTime > hours * 60 * 60 * 1000) {
      localStorage.clear();
      localStorage.setItem("setupTime", now);
    }
  }

  const note = useAppSelector((state) => state.note);
  const [open, setOpen] = useState<boolean>(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchNotes());
  }, [dispatch]);

  const checkToken = () => {
    let token = localStorage.getItem("token");
    console.log("token in storage" + token);
    if (token === undefined || token === null || token.length === 0) {
      window.location.href = "/login";
    } else {
      return redirect("/");
    }
  };

  useEffect(() => {
    checkToken();
  }, []);

  const theme = useAppSelector((state) => state.theme);

  return (
    <Fragment>
      <NavBar />
      <div>
        <div className="center">
          {note.loading && (
            <Box sx={{ width: "100%", marginBottom: "5px", marginTop: "5px" }}>
              <LinearProgress />
            </Box>
          )}
        </div>
        <div className="center_btn">
          <Tooltip title="Add" arrow>
            <IconButton onClick={handleToggle}>
              <AddCircleIcon />
            </IconButton>
          </Tooltip>
        </div>
        <Backdrop
          sx={{ color: "#ffff", zIndex: (theme) => theme.zIndex.drawer + 3 }}
          open={open}
        >
          <IconButton onClick={handleClose}>
            <CloseIcon sx={{ color: "white" }} />
          </IconButton>
          <AddNotes />
        </Backdrop>
        {/* </ThemeProvider> */}
        <div>
          {note.error ? (
            <div className="center">
              <ThemeProvider theme={theme.darkTheme ? darkTheme : lightTheme}>
                <Alert severity="info">
                  <AlertTitle>Info</AlertTitle>
                  No Notes Found — <strong>Start writing some</strong>
                </Alert>
              </ThemeProvider>
            </div>
          ) : null}
          {!note.loading && note.notes.length ? (
            <div className="center">
              <NotesList />
            </div>
          ) : null}
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
