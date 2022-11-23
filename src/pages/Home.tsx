import { useEffect, FC, ReactElement, useState, Fragment } from "react";
import { redirect } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../app/hooks/hooks";
import { fetchNotes } from "../features/note/noteSlice";
import AddNotes from "../components/AddNotes";
import Backdrop from "@mui/material/Backdrop";
import Skeleton from "@mui/material/Skeleton";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton } from "@mui/material";
import NavBar from "../components/NavBar";
import NotesList from "../components/NotesList";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import "../assets/styles/Home.css";
import Tooltip from "@mui/material/Tooltip";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import RefreshIcon from "@mui/icons-material/Refresh";

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

  const handleRefresh = () => {
    window.location.reload();
  };

  const n = note.notes.length;

  return (
    <Fragment>
      <NavBar />
      <div>
        <div className="center_btn">
          <Tooltip title="Add" arrow>
            <IconButton onClick={handleToggle}>
              <AddCircleIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="Refresh" arrow>
            <IconButton onClick={handleRefresh}>
              <RefreshIcon />
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
        <div>
          <div className="center">
            {note.loading && (
              <Fragment>
                {[...Array(n)].map(() => (
                  <Skeleton
                    className="margin__top"
                    variant="rounded"
                    width={450}
                    height={150}
                  />
                ))}
              </Fragment>
            )}
          </div>
          {note.error ? (
            <div className="center">
              <Alert severity="info">
                <AlertTitle>Info</AlertTitle>
                No Notes Found — <strong>start taking some!</strong>
              </Alert>
            </div>
          ) : null}
          {!note.loading && note.notes.length ? (
            <div className="center">
              <NotesList />
            </div>
          ) : null}
          {/* {!note.notes.length && (
            <div className="center">
              <h1>Start Creating</h1>
            </div>
          )} */}
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
