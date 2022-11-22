import { useEffect, FC, ReactElement, useState } from "react";
import { redirect } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../app/hooks/hooks";
import { fetchNotes } from "../features/note/noteSlice";
import AddNotes from "../components/AddNotes";
import Backdrop from "@mui/material/Backdrop";
import Button from "@mui/material/Button";
import { darkTheme, lightTheme } from "../assets/theme/theme";
import { ThemeProvider } from "@mui/material/styles";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import NavBar from "../components/NavBar";
import NotesList from "../components/NotesList";
import "../assets/styles/Home.css";

const Home: FC = (): ReactElement => {
  const note = useAppSelector((state) => state.note);
  const [open, setOpen] = useState<boolean>(false);

  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };
  const dispatch = useAppDispatch();

  //done once
  useEffect(() => {
    dispatch(fetchNotes());
  }, [dispatch]);

  const checkToken = () => {
    let token = localStorage.getItem("Token");
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

  return (
    <ThemeProvider theme={darkTheme}>
      <NavBar />
      <div>
        SecureHome
        <Button onClick={handleToggle}>Show backdrop</Button>
        <Backdrop
          sx={{ color: "#ffff", zIndex: (theme) => theme.zIndex.drawer + 3 }}
          open={open}
        >
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
          <AddNotes />
        </Backdrop>
        <div>
          <h2>Your notes</h2>
          {note.loading && <div>Loading...</div>}
          {!note.loading && note.error ? <div>Error: {note.error}</div> : null}
          {!note.loading && note.notes.length ? (
            <div className="center">
              <NotesList />
            </div>
          ) : null}
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Home;
