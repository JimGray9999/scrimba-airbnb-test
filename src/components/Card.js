import React from "react";
import star from "../images/star.png";
import ellipse from "../images/ellipse.png";
import katieZaferes from "../images/katie-zaferes.png";

/*
Challenge: Build the Card component
For now, hard-code in the data (like 
the rating, title, price, etc.)

Notes:
- Only render 1 instance (I already did this for you)
- The star icon and photo (katie-zaferes.png) are in the images 
  folder for your use
- Make sure to include:
    - image
    - star icon (star.png), rating, and review count
    - title
    - cost/person
- The main purpose of this challenge is to show you where our limitations
  currently are, so don't worry about the fact that you're hard-coding all
  this data into the component.
*/

export default function Card() {
  return (
    <div className="card">
      <img src={katieZaferes} alt="Katie Zaferes" />
      <img src={star} alt="star" />
      <h5>5.0 (6)</h5>
      <img src={ellipse} alt="ellipse" />
      <h5>USA</h5>
      <h4>Life lessons with Katie Zaferes</h4>
      <h4>
        <b>From $136</b> / person
      </h4>
    </div>
  );
}
