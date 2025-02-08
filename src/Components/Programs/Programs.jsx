import React from "react";
import "./programs.css";
import program1 from "../../assets/program-1.png";
import program2 from "../../assets/program-2.png";
import program3 from "../../assets/program-3.png";
import programIcon1 from "../../assets/program-icon-1.png";
import programIcon2 from "../../assets/program-icon-2.png";
import programIcon3 from "../../assets/program-icon-3.png";

function Programs() {
  return (
    <div className="programs container" id="Program">
      {/* 1st Image */}
      <div className="program">
        <img src={program1} alt="" />
        <div className="caption">
          <img src={programIcon1} alt="" />
          <p>Graduation Degree</p>
        </div>
      </div>
      {/* 2nd Image */}
      <div className="program">
        <img src={program2} alt="" />
        <div className="caption">
          <img src={programIcon2} alt="" />
          <p>Master Degree</p>
        </div>
      </div>
      {/*3rd Image*/}
      <div className="program">
        <img src={program3} alt="" />
        <div className="caption">
          <img src={programIcon3} alt="" />
          <p>Post Degree</p>
        </div>
      </div>
    </div>
  );
}

export default Programs;
