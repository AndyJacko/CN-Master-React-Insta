import React from "react";

import "./Gallery.css";

const Gallery = () => {
  return (
    <>
      <section id="gallery">
        <div id="gallery-row">
          <div>
            <img src="images/myposts/1.jpg" alt="One Drop 54" />
          </div>
          <div>
            <img src="images/myposts/2.jpg" alt="Leg Tattoo" />
          </div>
          <div>
            <img src="images/myposts/3.jpg" alt="Versi" />
          </div>
        </div>

        <div id="gallery-row">
          <div>
            <img src="images/myposts/4.jpg" alt="One Drop 54" />
          </div>
          <div>
            <img src="images/myposts/5.jpg" alt="Leg Tattoo" />
          </div>
          <div>
            <img src="images/myposts/6.jpg" alt="Versi" />
          </div>
        </div>

        <div id="gallery-row">
          <div>
            <img src="images/myposts/7.jpg" alt="One Drop 54" />
          </div>
          <div>
            <img src="images/myposts/8.jpg" alt="Leg Tattoo" />
          </div>
          <div>
            <img src="images/myposts/9.jpg" alt="Versi" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
