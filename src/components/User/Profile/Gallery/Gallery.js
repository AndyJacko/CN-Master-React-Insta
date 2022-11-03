import React from "react";

import "./Gallery.css";

const Gallery = ({ posts }) => {
  return (
    <>
      <section id="gallery">
        {posts &&
          posts.map((post) => (
            <div key={post._id}>
              <img src={post.postimage} alt={post.alt} />
            </div>
          ))}
      </section>
    </>
  );
};

export default Gallery;
