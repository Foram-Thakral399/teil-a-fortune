import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
    <div className="jumbotron jumbotron-fluid bg-transparent">
      <div className="container secondary-color">
        <h1 className="display-4">Hello are you ready to know your fortune</h1>
        <p className="lead">
          If you want to know about your fortune please continue our site our
          site ask to 10 Question and you told to answer in yes or no after the
          10 Question you got your fortune predections.
        </p>
        <hr className="my-4" />
        <Link
          to="/questions"
          className="btn btn-lg custom-button"
          role="button"
        >
          Contiune
        </Link>
      </div>
    </div>
  </div>
);
