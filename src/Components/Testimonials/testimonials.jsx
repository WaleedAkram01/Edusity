import React, { useRef } from "react";
import "./testimonials.css";
import back_icon from "../../assets/back-icon.png";
import next_icon from "../../assets/next-icon.png";

import user1 from "../../assets/user-1.png";
import user2 from "../../assets/user-2.png";
import user3 from "../../assets/user-3.png";
import user4 from "../../assets/user-4.png";

function Testimonials() {
  const slider = useRef(null);

  // Initially the value is 0 for incremet.
  let tx = useRef(0);

  const slideForward = () => {
    if (tx.current > -50) {
      // Adjusted to accommodate all slides
      tx.current -= 25;
    }
    slider.current.style.transform = `translateX(${tx.current}%)`;
  };

  const slideBackward = () => {
    if (tx.current < 0) {
      tx.current += 25;
    }
    slider.current.style.transform = `translateX(${tx.current}%)`;
  };

  return (
    <div className="testimonials container">
      <img
        src={back_icon}
        alt="Back"
        className="back_icon"
        onClick={slideBackward} // Fixed incorrect function call
      />
      <img
        src={next_icon}
        alt="Next"
        className="next_icon"
        onClick={slideForward} // Fixed incorrect function call
      />
      <div className="slider">
        <ul ref={slider}>
          {/* 1st slide */}
          <li>
            <div className="slide">
              <div className="user_info">
                <img src={user1} alt="" />
                <div>
                  <h3>Emily Williams</h3>
                  <p>Edusity, USA</p>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
          {/* 2nd slide */}
          <li>
            <div className="slide">
              <div className="user_info">
                <img src={user2} alt="" />
                <div>
                  <h3>Emily Williams</h3>
                  <p>Edusity, USA</p>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
          {/* 3rd slide */}
          <li>
            <div className="slide">
              <div className="user_info">
                <img src={user3} alt="" />
                <div>
                  <h3>Emily Williams</h3>
                  <p>Edusity, USA</p>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
          {/* 4th slide */}
          <li>
            <div className="slide">
              <div className="user_info">
                <img src={user4} alt="" />
                <div>
                  <h3>Emily Williams</h3>
                  <p>Edusity, USA</p>
                </div>
              </div>
              <p>
                Choosing to pursue my degree at Edusity was one of the best
                decisions I've ever made. The supportive community,
                state-of-the-art facilities, and commitment to academic
                excellence have truly exceeded my expectations.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Testimonials;
