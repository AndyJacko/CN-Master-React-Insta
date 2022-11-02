import React from "react";

import WTFBox from "./WTFBox/WTFBox";

import "./WhoToFollow.css";

const WhoToFollow = () => {
  return (
    <>
      <div id="who-to-follow">
        <p id="s-f-y">Suggestions for you</p>
        <p id="see-all" className="nav-icon">
          See All
        </p>
      </div>

      <div id="w-t-f-container">
        <WTFBox image="skeletor-pp.jpg" name="skeletor" />
        <WTFBox image="cow-pp.jpg" name="cowcowcow" />
        <WTFBox image="chicken-pp.jpg" name="chicken_1" />
        <WTFBox image="joker-pp.jpg" name="jok3r" />
        <WTFBox image="jason-pp.jpg" name="jason_v" />
      </div>
    </>
  );
};

export default WhoToFollow;
