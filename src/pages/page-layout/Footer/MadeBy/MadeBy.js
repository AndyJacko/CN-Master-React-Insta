import React from "react";

import "./MadeBy.css";

const copyYear = new Date().toLocaleDateString("en-GB", { year: "numeric" });

const MadeBy = () => {
  return (
    <div id="footer-copy">
      &copy; {copyYear} DELAYGRAM BY&nbsp;
      <a href="https://andyjacko.com" target="_blank" rel="noreferrer">
        ANDY JACKO
      </a>
    </div>
  );
};

export default MadeBy;
