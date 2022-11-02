import React from "react";

import Profile from "../../../components/Suggestions/Profile/Profile";
import WhoToFollow from "../../../components/Suggestions/WhoToFollow/WhoToFollow";
import Footer from "../Footer/Footer";

import "./Suggestions.css";

const Suggestions = () => {
  return (
    <section id="suggestions">
      <Profile />

      <WhoToFollow />

      <Footer />
    </section>
  );
};

export default Suggestions;
