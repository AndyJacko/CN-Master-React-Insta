import React from "react";

import StoryIcons from "../StoryIcons/StoryIcons";
import PostItem from "./PostItem/PostItem";

import "./Posts.css";

const DUMMY_POSTS = [
  {
    id: 1,
    ppimage: "vader-pp.jpg",
    name: "Darth Vader",
    nickname: "d4rthv4d3r",
    postimage: "death-star.jpg",
    alt: "Crib",
    likes: 7000000000,
    comment: "Some idiots trashed my crib",
    tags: ["#rebelscum", "#battleofendor", "#jedimuppets"],
    numcomments: 300,
    timeposted: 3,
  },
  {
    id: 2,
    ppimage: "cartman-pp.jpg",
    name: "Ultron",
    nickname: "c4rtm4n",
    postimage: "south-park.jpg",
    alt: "The Crew",
    likes: 2634,
    comment: "Group photo of the crew",
    tags: ["#southparkcrew", "#kickthebaby", "#ohmygodtheykilledkenny"],
    numcomments: 128,
    timeposted: 4,
  },
  {
    id: 3,
    ppimage: "ultron-pp.jpg",
    name: "Eric Cartman",
    nickname: "ultron1968",
    postimage: "avengers.jpg",
    alt: "Avengers",
    likes: 9652,
    comment: "Feeling evil...may kill these fools later...",
    tags: ["#avengersassemble", "#bunchoffools", "#nomatchforme"],
    numcomments: 329,
    timeposted: 5,
  },
];

const Posts = () => {
  return (
    <>
      <section id="posts">
        <StoryIcons />

        <div id="post-container">
          {DUMMY_POSTS.map((post) => (
            <PostItem key={post.id} post={post} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Posts;
