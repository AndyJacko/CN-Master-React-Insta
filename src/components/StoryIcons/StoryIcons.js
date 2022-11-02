import React from "react";

import StoryIcon from "./StoryIcon/StoryIcon";

import "./StoryIcons.css";

const StoryIcons = () => {
  return (
    <div id="story-icons">
      <StoryIcon image="vader-pp.jpg" name="d4rthv4d3r" />
      <StoryIcon image="cartman-pp.jpg" name="c4rtm4n" />
      <StoryIcon image="freddy-pp.jpg" name="og_krueger" />
      <StoryIcon image="odb-pp.jpg" name="oldirtyb" />
      <StoryIcon image="ultron-pp.jpg" name="ultron1968" />
      <StoryIcon image="thanos-pp.jpg" name="thanosftw" />
    </div>
  );
};

export default StoryIcons;
