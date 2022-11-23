import { FC, ReactElement, useState } from "react";
import TextField from "@mui/material/TextField";
import { Button, Paper } from "@mui/material";
import "../assets/styles/AddNotes.css";
import axios from "axios";
import { baseURL } from "../helper/app-helper";
import { Typography } from "@mui/material";

export interface IAddNotesProps {
  theme: any;
}

const AddNotes: FC = (): ReactElement => {
  const [content, setContent] = useState<string | null>(null);
  const [categoryName, setCategoryName] = useState<string | null>(null);

  type CreateNote = {
    Success: string;
  };

  const handleCreateNote = () => {
    let creator = localStorage.getItem("userId");
    const payload = {
      content: content,
      categoryName: categoryName,
    };
    try {
      axios.post<CreateNote>(baseURL + `reactnote/${creator}`, payload);
      
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Paper elevation={3}>
      <div className="center_grid">
        <Typography
          sx={{ margin: "1rem", textAlign: "center", fontSize: 17 }}
          variant="body2"
          color="text.secondary"
          gutterBottom
        >
          Add a Note
          <br />
        </Typography>
        <TextField
          id="outlined-multiline-static"
          label="Note Content *"
          multiline
          rows={4}
          sx={{ margin: 2, width: "30rem" }}
          fullWidth
          // variant="filled"
          onChange={(e) => setContent(e.target.value)}
        />
        <TextField
          id="outlined-multiline-flexible"
          label="Note Category *"
          multiline
          maxRows={4}
          sx={{ margin: 2, width: "30rem" }}
          fullWidth
          // variant="filled"
          onChange={(e) => setCategoryName(e.target.value)}
        />
        <Button
          onClick={handleCreateNote}
          sx={{ margin: 2, width: "30rem" }}
          variant="outlined"
          fullWidth
        >
          Finish
        </Button>
      </div>
    </Paper>
  );
};

export default AddNotes;
