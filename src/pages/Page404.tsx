import React from "react";
import "../assets/styles/Page404.css";
import ErrorLinks from "../components/ErrorLinks";
import { Paper } from "@mui/material";

const Page404: React.FC = () => {
  const colors = ["darkgreen", "black", "purple", "darkorange", "gray"];
  const randomColor = colors[Math.floor(Math.random() * 5)];
  const color = randomColor;
  const fontWeights = ["bold", "normal", "lighter"];
  const randomFontWeight = fontWeights[Math.floor(Math.random() * 3)];
  const fontWeight = randomFontWeight;

  return (
    <div className="centered">
      <Paper sx={{ display: "grid", padding: "5vw" }}>
        <h2 style={{ color: color, fontWeight: fontWeight }}>
          404 - Page Not Found
        </h2>
        <p className="body">
          The page you are looking for might have been removed or temporarily
          unavailable.
        </p>
        <ErrorLinks />
      </Paper>
    </div>
  );
};

export default Page404;
