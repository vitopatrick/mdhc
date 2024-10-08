import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./navbar.css";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const toggle = () => {
    setActive(!active);
  };
  return (
    <React.Fragment>
      <nav>
        <div className="container">
          <Link to="/">
            <img
              src={
                "https://firebasestorage.googleapis.com/v0/b/internationalleo-d5383.appspot.com/o/logo-2.jpeg?alt=media&token=47ce89d3-e523-447c-a856-426b17c4b1ab"
              }
              alt="company logo"
              className="logo"
            />
          </Link>
          <div>
            <Link to="/" className="links text-sec">
              Home
            </Link>
            <Link to="/about" className="links text-sec">
              About
            </Link>
            <Link to="/contact" className="links text-sec">
              Contact
            </Link>
          </div>
          <div>
            <Link to="/register" className="cta-1 text-sec">
              Begin Here
            </Link>
            <Link to="/login" className="cta-2 text-sec">
              Login
            </Link>
          </div>
          <div className="bars">
            {active ? (
              <FaTimes className="bars" size="20px" onClick={toggle} />
            ) : (
              <FaBars className="bars" size="20px" onClick={toggle} />
            )}
          </div>
        </div>
        <div className={active ? "sidenav active" : "sidenav"}>
          <div className="px-4 py-3 d-flex flex-column ">
            <Link to="/" className="my-2 fs-sec w-100 text-white text-sec">
              Home
            </Link>
            <Link to="/about" className="my-2  w-100 text-white text-sec">
              About
            </Link>
            <Link to="/contact" className="my-2   w-100 text-white text-sec">
              Contact
            </Link>
            <Link
              to="/register"
              className="my-2 w-100 btn btn-primary text-white text-sec "
            >
              Begin Here
            </Link>
            <Link
              to="/login"
              className="my-2 btn btn-outline-primary w-100 text-white text-sec"
            >
              Sign In
            </Link>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
