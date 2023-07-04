import React, { Fragment } from "react";
import "./Error.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Error = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Thribble 404</title>
        <meta name="Thribble" content="solar" />
      </Helmet>
      <body className="body">
        <div id="particles" className="particles">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <main>
          <section>
            <h1>Page Not Found!</h1>
            <div>
              <span>4</span>
              <span class="circle">0</span>
              <span>4</span>
            </div>
            <p>
              We are unable to find the page
              <br />
              you're looking for.
            </p>
            <div>
              <Link to="/">Go back to home</Link>
            </div>
          </section>
        </main>
      </body>
    </Fragment>
  );
};

export default Error;
