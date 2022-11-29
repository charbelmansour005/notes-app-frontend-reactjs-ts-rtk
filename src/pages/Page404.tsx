import React from "react";
import "../assets/styles/Page404.css";
import ErrorLinks from "../components/ErrorLinks";
import { Paper } from "@mui/material";

const Page404: React.FC = () => {
  const colors = ["darkgreen", "black", "purple", "darkorange", "gray"];
  const randomColor = colors[Math.floor(Math.random() * 5)];
  const color = randomColor;

  const classNames = ["body_1", "body_2", "body_3"];
  const randomClass = classNames[Math.floor(Math.random() * 3)];
  const chosenClassName = randomClass;

  return (
    <div className="centered">
      <Paper variant="outlined" sx={{ display: "grid", padding: "5vw" }}>
        <h2 style={{ color: color, textAlign: "center" }}>
          404 - Page Not Found
        </h2>
        <p className={chosenClassName}>
          The page you are looking for might have been removed or temporarily
          unavailable.
        </p>
        <ErrorLinks />
      </Paper>
    </div>
  );
};

export default Page404;
