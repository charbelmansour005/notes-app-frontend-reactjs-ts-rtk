import { FC } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/styles/ErrorLinks.css";

const ErrorLinks: FC = () => {
  const navigate = useNavigate();
  return (
    <>
      {" "}
      <a className="link__style" onClick={() => navigate("/")}>
        {"←"} Go back Home
      </a>
      <a className="link__style" onClick={() => navigate("/login")}>
        {"←"} Login
      </a>
      <a className="link__style" onClick={() => navigate("/search")}>
        {"←"} Search
      </a>
    </>
  );
};

export default ErrorLinks;
