import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <section className="header-wrapper">
      <div className="flexCenter paddings innerWidth header-container">
        <img src="./logo.png" alt="Logo" width={80} />
        <div className="flexCenter h-links">
          <a href="">Rooms </a>
          <a href="">our Value </a>
          <a href="">Contact Us </a>
          <button className="button">
            <a href="">Contact </a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
