import React from "react";
import logo from "./img/troll-face-poster.png";

const Header = () => {
  return (
    <header className="bg-brand">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 c-d-flex d-between">
            <div className="header--logo c-d-flex">
              <div className="header--icon-container">
                <img src={logo} alt="troll face icon" className="img-fit" />
              </div>
              <h5 className="ms-2">Meme Generator</h5>
            </div>
            <p>React Course - Project 3</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
