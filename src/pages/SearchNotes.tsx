import React, { useEffect, useState } from "react";
import { redirect } from "react-router-dom";
import { useAppSelector } from "../app/hooks/hooks";
import NavBar from "../components/NavBar";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { Typography } from "@mui/material";
import { Chip, IconButton } from "@mui/material";
import "../assets/styles/SearchNotes.css";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";

const SearchNotes: React.FC = () => {
  const [searchResults, setSearchResults] = useState<[] | any>([]);
  const note = useAppSelector((state) => state.note);

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

  //   const finalSearchRes = searchResults?.map(
  //     (item: { content: string; categoryName: string; _id: string }) => {
  //       return (
  //         <h1 key={item._id}>
  //           {item.content}, {item.categoryName}
  //         </h1>
  //       );
  //     }
  //   );

  const finalSearchRes = searchResults?.map(
    (item: {
      content: string;
      categoryName: string;
      _id: string;
      updated_At: string;
    }) => {
      return (
        <div className="center" key={item._id}>
          <Box
            sx={{
              minWidth: "30rem",
              maxWidth: "30rem",
              marginTop: "10px",
              marginBottom: "10px",
              marginLeft: "10px",
              marginRight: "10px",
              maxHeight: "30rem",
            }}
          >
            <Card variant="outlined">
              <CardContent>
                <Typography variant="body2">
                  {item.content}
                  <br />
                </Typography>
              </CardContent>
              <CardActions>
                <Chip label={item.categoryName} />
              </CardActions>
            </Card>
          </Box>
        </div>
      );
    }
  );

  //   const finalSearchRes = searchResults?.map(
  //     (item: { content: string; categoryName: string; _id: string }) => {
  //       return (
  //         <h1 key={item._id}>
  //           {item.content}, {item.categoryName}
  //         </h1>
  //       );
  //     }
  //   );

  return (
    <div>
      <NavBar />
      <Box
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "1rem",
          marginBottom: "1rem",
        }}
      >
        <SearchIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
        <TextField
          id="input-with-sx"
          label="Search"
          variant="standard"
          onChange={(e) => {
            let result = note.notes.filter((t) =>
              t.content.includes(e.target.value)
            );
            setSearchResults(result);
            console.log(searchResults);
          }}
        />
      </Box>
      {/* <TextField
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "10px",
        }}
        onChange={(e) => {
          let result = note.notes.filter((t) =>
            t.content.includes(e.target.value)
          );
          setSearchResults(result);
          console.log(searchResults);
        }}
      /> */}
      <>{!finalSearchRes.length ? <h1>no search</h1> : finalSearchRes}</>
    </div>
  );
};

export default SearchNotes;
