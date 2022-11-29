import React from "react";
import "../assets/styles/Page404.css";
import ErrorLinks from "../components/ErrorLinks";

const Page404: React.FC = () => {
  return (
    <div className="centered">
      <div className="error__container">
        <p className="title">404 - Page Not Found</p>
        <p className="body">
          The page you are looking for might have been removed or temporarily
          unavailable.
        </p>
        <ErrorLinks />
      </div>
    </div>
  );
};

export default Page404;
