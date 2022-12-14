import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { useAppSelector } from "../app/hooks/hooks";
import { Chip, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import axios from "axios";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import { toast } from "react-toastify";
import { Typography } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import ClearIcon from "@mui/icons-material/Clear";

type DeleteNoteResponse = "";

export default function NotesList() {
  const note = useAppSelector((state) => state.note);
  const [updatedContent, setUpdatedContent] = useState<string | null>(null);
  const [modalActive, setModalActive] = useState<any>(false);

  return (
    <>
      {note.notes.map((note, index) => (
        <Box
          key={note._id}
          sx={{
            minWidth: "70vw",
            maxWidth: "70vw",
            marginTop: "10px",
            marginBottom: "10px",
            marginLeft: "10px",
            marginRight: "10px",
            maxHeight: "30rem",
          }}
        >
          <Card elevation={2}>
            {modalActive === index ? (
              <></>
            ) : (
              <>
                <CardContent>
                  <Typography
                    variant="body2"
                    style={{ wordWrap: "break-word" }}
                  >
                    {note.content}
                    <br />
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    gutterBottom
                  >
                    <br />
                    Last edited at {note.updated_At.split("T")[0]}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Chip label={note.categoryName} />
                  <IconButton
                    sx={{ marginLeft: 2 }}
                    onClick={() => setModalActive(index)}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    onClick={() => {
                      const id = note._id;
                      axios.delete<DeleteNoteResponse>(`note/${id}`);
                      notifyWarning();
                      window.location.reload();
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </CardActions>
              </>
            )}

            {modalActive === index && (
              <div>
                <div className="center_grid">
                  <TextField
                    id="outlined-multiline-static"
                    label="Note Content *"
                    multiline
                    rows={4}
                    sx={{ width: "70vw" }}
                    fullWidth
                    variant="filled"
                    defaultValue={note.content}
                    focused
                    onChange={(e) => setUpdatedContent(e.target.value)}
                  />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    {" "}
                    <IconButton
                      onClick={async () => {
                        const id = note._id;
                        const payload = {
                          content: updatedContent,
                        };
                        try {
                          const response = await axios.put(
                            `note/${id}`,
                            payload
                          );
                          console.log(response);
                          notifySuccess();
                          window.location.reload();
                        } catch (error) {
                          console.log(error);
                        }
                      }}
                    >
                      <DoneIcon />
                    </IconButton>
                    <IconButton onClick={() => setModalActive(false)}>
                      <ClearIcon />
                    </IconButton>
                  </div>
                </div>
              </div>
            )}
          </Card>
        </Box>
      ))}
    </>
  );
}

const notifySuccess = () =>
  toast.success("Note Edited", {
    position: "bottom-right",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });

const notifyWarning = () =>
  toast.warning("Note Deleted", {
    position: "bottom-left",
    autoClose: 2000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
