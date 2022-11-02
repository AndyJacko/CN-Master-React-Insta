import React from "react";

import "./PST.css";

const PST = () => {
  return (
    <>
      <section id="p-s-t-sm">
        <div>
          <i className="fa-solid fa-table-cells"></i>
        </div>
        <div>
          <i className="fa-regular fa-bookmark"></i>
        </div>
        <div>
          <i className="fa-regular fa-circle-user"></i>
        </div>
      </section>

      <section id="p-s-t-lg">
        <div>
          <i className="fa-solid fa-table-cells"></i>POSTS
        </div>
        <div>
          <i className="fa-regular fa-bookmark"></i>SAVED
        </div>
        <div>
          <i className="fa-regular fa-circle-user"></i>TAGGED
        </div>
      </section>
    </>
  );
};

export default PST;
