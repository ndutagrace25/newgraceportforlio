import React from "react";
import website from "../images/website1.png";
import simaxis from "../images/simaxis.jpg";
import powwater from "../images/powwater.jpg";
import Fade from "react-reveal/Fade";
import ts from "../images/Typescript_logo.png";
import abe from "../images/abe.jpg";

const Projects = ({ projectsDivRef }) => {
  return (
    <div ref={projectsDivRef} className="bg-light py-5">
      <div className="container">
        <h5 className="text-uppercase fw-bold primary-text-color">
          Featured Projects
        </h5>
        <h3 className="fw-bold text-capitalize mt-3 mb-5">
          My Recent Projects
        </h3>
        <div className="">
          <Fade delay={520} bottom>
            <div className="d-flex justify-content-between flex-wrap project-card p-3 bg-white rounded shadow-sm">
              <a
                className="shadow rounded p-3 col-md-6 image-card"
                href="https://powwater.com"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  alt="project"
                  src={website}
                  className="img-fluid project-image rounded"
                  height={110}
                />
              </a>
              <div className="col-md-5 px-3">
                <div className="primary-text-color fw-bold my-3">
                  REACT and TYPESCRIPT
                </div>
                <h5 className="fw-bold">PowWater Website</h5>
                <p>
                  I initiated and completed the development of PowWater's
                  website from scratch. Using React.js and TypeScript, I ensured
                  a seamless user experience and robust codebase. This project,
                  my first at the company, showcased my proficiency in modern
                  web development technologies
                </p>
                <div className="my-2">
                  <i className="fab fa-react fa-lg text-info me-2"></i>
                  <img src={ts} alt="TS" width="20" />
                </div>
                <a
                  className="fw-bold text-uppercase"
                  href="https://powwater.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i class="fas fa-external-link"></i>
                  <span className="mx-3">View live Website</span>
                </a>
              </div>
            </div>
          </Fade>

          <Fade delay={540} bottom>
            <div className="d-flex justify-content-between flex-wrap project-card my-5 p-3 bg-white rounded shadow-sm">
              <div className="shadow rounded p-3 col-md-6 image-card">
                <img
                  alt="project"
                  src={simaxis}
                  className="img-fluid project-image rounded"
                  height={100}
                />
              </div>
              <div className="col-md-5 px-3">
                <div className="primary-text-color fw-bold my-3">
                  REACT, TYPESCRIPT and NODE
                </div>
                <h5 className="fw-bold text-capitalize">Si-Maxis Meters</h5>
                <p>
                  For Si-Maxis meters, I led the development of a comprehensive
                  customer facing portal utilizing React.js and TypeScript for
                  the frontend and Node.js for creating APIs. This portal serves
                  as a centralized hub for report generation, buying meter
                  tokens, and managing water and electricity meters. An integral
                  aspect of this project was integrating the platform with
                  M-PESA for seamless payment and statement management,
                  enhancing the portal's functionality and utility for
                  Si-Maxis's operations.
                </p>
                <div className="my-2 d-flex justify-content-between col-md-3 align-items-center">
                  <i className="fab fa-react fa-lg text-info"></i>
                  <i className="fab fa-node fa-2x"></i>
                  <img src={ts} alt="TS" width="20" />
                </div>
                {/* <div className="fw-bold text-uppercase">
                  <span className="mx-3">Request Demo</span>
                </div> */}
              </div>
            </div>
          </Fade>

          <Fade delay={560} bottom>
            <div className="d-flex justify-content-between flex-wrap project-card my-5 p-3 bg-white rounded shadow-sm">
              <a
                className="shadow rounded p-3 col-md-6 image-card"
                href="https://play.google.com/store/apps/details?id=com.powwater.customer&hl=en&gl=US"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  alt="project"
                  src={powwater}
                  className="img-fluid project-image rounded"
                  height={100}
                />
              </a>
              <div className="col-md-5 px-3">
                <div className="primary-text-color fw-bold my-3">
                  Android & iOS
                </div>
                <h5 className="fw-bold text-capitalize">PowWater Mobile App</h5>
                <p>
                  I developed a mobile app for PowWater, designed to enhance
                  user experience and streamline access to clean water
                  solutions. The app provides users with easy navigation,
                  real-time updates, and a seamless interface to manage their
                  water needs. This project contributed to improved user
                  engagement and operational efficiency for PowWater.
                </p>
                {/* <div className="my-2 d-flex justify-content-between col-md-3 align-items-center">
                  <i className="fab fa-react fa-lg text-info"></i>
                  <i className="fab fa-node fa-2x"></i>
                  <img src={ts} alt="TS" width="20" />
                </div> */}
                <a
                  className="fw-bold text-uppercase"
                  href="https://play.google.com/store/apps/details?id=com.powwater.customer&hl=en&gl=US"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i class="fas fa-external-link"></i>
                  <span className="mx-3">Download The App</span>
                </a>
              </div>
            </div>
          </Fade>

          <Fade delay={580} bottom>
            <div className="d-flex justify-content-between flex-wrap project-card my-5 p-3 bg-white rounded shadow-sm">
              <div className="shadow rounded p-3 col-md-6 image-card">
                <img
                  alt="project"
                  src={abe}
                  className="img-fluid project-image rounded"
                  height={100}
                />
              </div>
              <div className="col-md-5 px-3">
                <div className="primary-text-color fw-bold my-3">
                  REACT, TYPESCRIPT and NODE
                </div>
                <h5 className="fw-bold text-capitalize">
                  E-commerce Platform for ABE
                </h5>
                <p>
                  I developed an e-commerce platform for ABE that allows
                  customers to browse and request products effortlessly. The
                  platform was built using React.js for a responsive and dynamic
                  user interface, TypeScript for improved code quality and
                  maintainability, and Node.js for a robust back-end to handle
                  product data and customer requests. This project significantly
                  enhanced customer engagement and satisfaction, providing a
                  scalable and efficient solution with modern technologies.
                </p>
                <div className="my-2 d-flex justify-content-between col-md-3 align-items-center">
                  <i className="fab fa-react fa-lg text-info"></i>
                  <i className="fab fa-node fa-2x"></i>
                  <img src={ts} alt="TS" width="20" />
                </div>
                {/* <div className="fw-bold text-uppercase">
                  <span className="mx-3">Request Demo</span>
                </div> */}
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Projects;
