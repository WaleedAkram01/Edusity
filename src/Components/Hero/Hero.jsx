import React from "react";
import "./Hero.css";
import darkArrow from "../../assets/dark-arrow.png";
function Hero() {
  return (
    // Id mention Bcz:
    // Jo Hm ny react-scroll dia navbar page pr uss ky liay Koi unique class honii chahiay otherWise id dy do.
    <div className="hero container" id="Hero">
      <div className="hero-text">
        <h1>We Ensure better education for a better world</h1>
        <p>
          Our cutting-edge curriculum is designed to empower students with the
          knowledge, skills, and experiences needed to excel in the dynamic
          field of education
        </p>
        <button>
          Explore more <img src={darkArrow} alt="" />
        </button>
      </div>
    </div>
  );
}

export default Hero;
