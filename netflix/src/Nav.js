import React, { useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  const [show, handleShow] = useState(false);
  const navigate = useNavigate()

  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavbar);
    return () => window.removeEventListener("scroll", transitionNavbar);
  }, []);

  return (
    <div className={`nav ${show && `nav__black`}`}>
      <div className="nav__contents">
        <img
          onClick={() => navigate("/")}
          className="nav__logo"
          src="https://www.edigitalagency.com.au/wp-content/uploads/netflix-logo-png-large.png"
          alt=""
        />
        <img
          onClick={() => navigate("./profile")}
          className="nav__avatar"
          src="https://www.w3schools.com/howto/img_avatar.png"
          alt="avatar"
        />
      </div>
    </div>
  );
};

export default Nav;

//https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRawRe0teFSEAWgdSzNp7s-E_XRl_p61unPKRTJi4keEg&s

//https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png