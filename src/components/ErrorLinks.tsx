import { FC, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/styles/ErrorLinks.css";
import { CircularProgress } from "@mui/material";

const ErrorLinks: FC = () => {
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleHomeRedirect = () => {
    setIsLoading(true);
    navigate("/");
  };

  const handleLoginRedirect = () => {
    setIsLoading(true);
    navigate("Login");
  };

  const handleSearchRedirect = () => {
    setIsLoading(true);
    navigate("Search");
  };

  return (
    <>
      <a className="link__style" onClick={handleHomeRedirect}>
        {"←"} Go back Home
      </a>
      <a className="link__style" onClick={handleLoginRedirect}>
        {"←"} Login
      </a>
      <a className="link__style" onClick={handleSearchRedirect}>
        {"←"} Search
      </a>
      <div className="loader__container">
        {isLoading && <CircularProgress />}
      </div>
    </>
  );
};

export default ErrorLinks;
