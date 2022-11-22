// import * as React from "react";
// import Box from "@mui/material/Box";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import { ThemeProvider } from "@emotion/react";
// import { lightTheme, darkTheme } from "../assets/theme/theme";
// import { fetchNotes } from "../features/note/noteSlice";
// import { useAppSelector } from "../app/hooks/hooks";

// const card = (
//   <React.Fragment>
//     <CardContent>
//       <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
//         Category Name
//       </Typography>
//       <Typography variant="body2">
//         Note content
//         <br />
//       </Typography>
//     </CardContent>
//     <CardActions>
//       <Button size="small">Edit</Button>
//       <Button size="small">Delete</Button>
//     </CardActions>
//   </React.Fragment>
// );

// export default function NotesList() {
//   const note = useAppSelector((state) => state.note);
//   return (
//     <ThemeProvider theme={lightTheme}>
//       <Box
//         sx={{
//           minWidth: "30rem",
//           maxWidth: "30rem",
//           marginTop: "10px",
//           marginBottom: "10px",
//         }}
//       >
//         <Card>{card}</Card>
//       </Box>
//     </ThemeProvider>
//   );
// }

import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ThemeProvider } from "@emotion/react";
import { lightTheme, darkTheme } from "../assets/theme/theme";
import { fetchNotes } from "../features/note/noteSlice";
import { useAppSelector } from "../app/hooks/hooks";

const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Category Name
      </Typography>
      <Typography variant="body2">
        Note content
        <br />
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Edit</Button>
      <Button size="small">Delete</Button>
    </CardActions>
  </React.Fragment>
);

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
          <Card>
            {" "}
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                {note.categoryName}
              </Typography>
              <Typography variant="body2">
                {note.content}
                <br />
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

// {note.notes.map((note) => (
//     <li key={note._id}>{note.content}</li>
//   ))}
