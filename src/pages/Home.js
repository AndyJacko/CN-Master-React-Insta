import React, { useEffect } from "react";

import Posts from "../components/Posts/Posts";
import Suggestions from "./page-layout/Suggestions/Suggestions";

import "./Home.css";

const HomePage = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <div id="content-container">
      <Posts />
      <Suggestions />
    </div>
  );
};

export default HomePage;
