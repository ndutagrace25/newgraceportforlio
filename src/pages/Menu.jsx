import React from "react";

const Menu = ({ scrollToDiv }) => {
  return (
    <div className="menu-mobile">
      <h1 className="text-black fw-bold menu-title">MENU</h1>
      <div className="d-flex justify-content-between mt-5 flex-wrap arrange-mobile">
        <div className="arrange-desktop">
          <a
            className="d-flex flex-row align-items-center"
            style={{ cursor: "pointer" }}
            href="mailto: ndutagrace25@gmail.com"
          >
            <i className="fa-regular fa-envelope fa-lg primary-text-color"></i>
            <div className="ps-3 fw-bold">ndutagrace25@gmail.com</div>
          </a>
          <a
            className="d-flex flex-row align-items-center py-3"
            style={{ cursor: "pointer" }}
            href="tel:+254708807403"
          >
            <i className="fa-regular fa-message fa-lg primary-text-color"></i>
            <div className="ps-3 fw-bold">+254 708 807 403</div>
          </a>
          <a
            className="d-flex flex-row align-items-center pb-3"
            style={{ cursor: "pointer" }}
            href="https://www.linkedin.com/in/grace-kigaa-2705b212b"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-linkedin fa-lg primary-text-color"></i>
            <div className="ps-3 fw-bold">Linkedin</div>
          </a>
          <a
            className="d-flex flex-row align-items-center"
            style={{ cursor: "pointer" }}
            target="_blank"
            rel="noreferrer"
            href="https://github.com/ndutagrace25"
          >
            <i className="fa-brands fa-square-github fa-lg primary-text-color"></i>
            <div className="ps-3 fw-bold">Github</div>
          </a>
        </div>
        <div className="arrange-mobile arrange-mobile">
          <ul className="text-uppercase fw-bold menu-list">
            <li
              className="pt-2"
              style={{ cursor: "pointer" }}
              onClick={() => scrollToDiv("skills")}
            >
              Skills
            </li>
            <li
              className="pt-2"
              style={{ cursor: "pointer" }}
              onClick={() => scrollToDiv("projects")}
            >
              Projects
            </li>
            <li
              className="pt-2"
              style={{ cursor: "pointer" }}
              onClick={() => scrollToDiv("about")}
            >
              About Me
            </li>
            <li
              className="pt-2"
              style={{ cursor: "pointer" }}
              onClick={() => scrollToDiv("contact")}
            >
              Contact Me
            </li>
          </ul>
        </div>
        <div className="border-line  my-4 col-md-12"></div>
        <div className="arrange-desktop">
          <ul className="text-uppercase fw-bold menu-list">
            <li
              className="pt-2"
              style={{ cursor: "pointer" }}
              onClick={() => scrollToDiv("skills")}
            >
              Skills
            </li>
            <li
              className="pt-2"
              style={{ cursor: "pointer" }}
              onClick={() => scrollToDiv("projects")}
            >
              Projects
            </li>
            <li
              className="pt-2"
              style={{ cursor: "pointer" }}
              onClick={() => scrollToDiv("about")}
            >
              About Me
            </li>
            <li
              className="pt-2"
              style={{ cursor: "pointer" }}
              onClick={() => scrollToDiv("contact")}
            >
              Contact Me
            </li>
          </ul>
        </div>
        <div className="arrange-mobile">
          <a
            className="d-flex flex-row align-items-center"
            style={{ cursor: "pointer" }}
            href="mailto: ndutagrace25@gmail.com"
          >
            <i className="fa-regular fa-envelope fa-lg primary-text-color"></i>
            <div className="ps-3 fw-bold">ndutagrace25@gmail.com</div>
          </a>
          <a
            className="d-flex flex-row align-items-center py-3"
            style={{ cursor: "pointer" }}
            href="tel:+254708807403"
          >
            <i className="fa-regular fa-message fa-lg primary-text-color"></i>
            <div className="ps-3 fw-bold">+254 708 807 403</div>
          </a>
          <a
            className="d-flex flex-row align-items-center pb-3"
            style={{ cursor: "pointer" }}
            href="https://www.linkedin.com/in/grace-kigaa-2705b212b"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-linkedin fa-lg primary-text-color"></i>
            <div className="ps-3 fw-bold">Linkedin</div>
          </a>
          <a
            className="d-flex flex-row align-items-center"
            style={{ cursor: "pointer" }}
            target="_blank"
            rel="noreferrer"
            href="https://github.com/ndutagrace25"
          >
            <i className="fa-brands fa-square-github fa-lg primary-text-color"></i>
            <div className="ps-3 fw-bold">Github</div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Menu;
