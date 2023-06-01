import React, { useState } from "react";

import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { BsCartFill } from "react-icons/bs";
import { ImSearch } from "react-icons/im";

function Header() {
  const [showMenu, setshowMenu] = useState(false);
  const handleShowmenu = () => {
    setshowMenu((Prev) => !Prev);
  };
  return (
    <>
      <nav
        className="navbar navbar-expand-lg fs-3 shadow-lg container"
        style={{ backgroundColor: "white" }}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Food Store
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse acctive"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
              <li className="nav-item">
                <Link className="nav-link hovver" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link hovver" to="menu">
                  Menu
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link hovver" to="about">
                  About
                </Link>
              </li>
              <li className="nav-item ">
                <Link className="nav-link hovver" to="contact">
                  Contact
                </Link>
              </li>
            </ul>
            <div className="navicons ">
              <span className="m-3 ">
                <ImSearch />
              </span>
              <span className="m-3 ">
                <BsCartFill />
                <span className="absolute top-0 right-0 cartcount">0</span>
              </span>
              <div onClick={handleShowmenu} style={{ display: "inline" }}>
                <span className="m-3 cursorp">
                  <CgProfile />
                </span>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="navhide">
        <div className="navhide1">
          {showMenu && (
            <div className="account cursorp " >
              <Link
                to="/Signup"
                style={{ textDecorationLine: "none", color: "#ff7800" }}
              >
                Signup
              </Link>
              <Link
                to="/Login"
                style={{ textDecorationLine: "none", color: "#ff7800", }}
              >
                Login
              </Link>
            </div>
          )}
        </div>
      </div>
      
    </>
  );
}

export default Header;
