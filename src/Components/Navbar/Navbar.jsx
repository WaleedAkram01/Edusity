import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import logo from "../../assets/logo.png";
import Menu from "../../assets/menu-icon.png";
function Navbar() {
  let [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  let [mobileMenu, setMobileMenu] = useState(false);
  let ToogleMenu = () => {
    setMobileMenu((prev) => !prev);
  };

  return (
    <div className={`navbar container ${sticky ? "darknav" : ""}`}>
      <img src={logo} alt="" />
      <ul className={mobileMenu ? "show-mobile-menu" : "hide-mobile-menu"}>
        {/* npm install react-scroll */}
        {/* to -> It is page/section we wanna go to.  */}
        {/* offset -> It is the space from top. */}
        {/* We have to give id to their corresponding pages so they could scroll towards them.*/}
        <li>
          <Link to="Hero" smooth={true} offset={0} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="Program" smooth={true} offset={-240} duration={500}>
            Program
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} offset={-100} duration={500}>
            About us
          </Link>
        </li>
        <li>
          <Link to="gallery" smooth={true} offset={-200} duration={500}>
            Campus
          </Link>
        </li>
        <li>
          <Link to="testimonials" smooth={true} offset={-200} duration={500}>
            Testimonials
          </Link>
        </li>
        <li>
          {/* <button className="Btn">Contact Us</button> */}
          <Link
            to="contact"
            smooth={true}
            offset={-200}
            duration={500}
            className="Btn"
          >
            Contact Us
          </Link>
        </li>
      </ul>
      <img src={Menu} className="menu" alt="" onClick={ToogleMenu} />
    </div>
  );
}
export default Navbar;
