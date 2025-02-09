import React from "react";
import About from "../../assets/about.png";
import Play_Icon from "../../assets/play-icon.png";
import "./about.css";
function About({ setPlayState }) {
  return (
    <div className="about container">
      <div className="left_about">
        <img className="about" src={About} alt="" />
        <img
          className="play"
          src={Play_Icon}
          alt=""
          // Set Status To be True.
          onClick={() => setPlayState(true)}
        />
      </div>
      <div className="right_about">
        <h3>ABOUT UNIVERSITY</h3>
        <h1>Nurturing Tomorrow's Leaders Today</h1>
        <p>
          Embark on a transformative educational journey with our university's
          comprehensive education programs. Our cutting-edge curriculum is
          designed to empower students with the knowledge, skills, and
          experiences needed to excel in the dynamic field of education. With a
          focus on innovation, hands-on learning, and personalized mentorship,
          our programs prepare aspiring educators to make a meaningful impact in
          classrooms, schools, and communities. Whether you aspire to become a
          teacher, administrator, counselor, or educational leader, our diverse
          range of programs offers the perfect pathway to achieve your goals and
          unlock your full potential in shaping the future of education.
        </p>
      </div>
    </div>
  );
}

export default About;
