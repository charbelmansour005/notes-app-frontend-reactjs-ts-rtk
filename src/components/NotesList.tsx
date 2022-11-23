import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@emotion/react";
import { lightTheme } from "../assets/theme/theme";
// import { darkTheme } from "../assets/theme/theme";
import { useAppSelector } from "../app/hooks/hooks";

export default function NotesList() {
  const note = useAppSelector((state) => state.note);
  return (
    <ThemeProvider theme={lightTheme}>
      {note.notes.map((note) => (
        <Box
          key={note._id}
          sx={{
            minWidth: "30rem",
            maxWidth: "30rem",
            marginTop: "10px",
            marginBottom: "10px",
          }}
        >
          <Card variant="outlined">
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.primary"
                gutterBottom
              >
                {note.categoryName}
              </Typography>
              <Typography variant="body2">
                {note.content}
                <br />
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                <br />
                Last updated at {note.updated_At.split("T")[0]}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Edit</Button>
              <Button size="small">Delete</Button>
            </CardActions>
          </Card>
        </Box>
      ))}
    </ThemeProvider>
  );
}
