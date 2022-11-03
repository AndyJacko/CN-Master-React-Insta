import React from "react";

import "./NotFound.css";

const NotFound = () => {
  return (
    <div id="not-found">
      <h1 className="my-5 text-danger">404 - Page Not Found</h1>
      <p>Damn bro, looks like you're in the wrong place.</p>
      <p>That sucks.</p>
      <p>You should probably leave.</p>
      <p className="text-danger fs-1 fw-bold">NOW!</p>
    </div>
  );
};

export default NotFound;
