import React from "react";
import "./footer.css";
import Nav from "react-bootstrap/Nav";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" }); // Smooth scroll to the top
};
const lineLink = {
  content: "",
  display: "inline-block",
  alignSelf: "center",
  height: "20px", // Adjust the height as needed
  borderLeft: "1px solid #ccc", // Vertical line color
  margin: "0 10px",
};
const addressLine = {
  content: "",
  display: "inline-block",
  height: "80px", // Adjust the height as needed
  borderLeft: "1px solid #ccc", // Vertical line color
  margin: "0 10px",
  verticalAlign: "bottom",
};
const linkStyle = {
  textDecoration: "none",
  color: "inherit",
  display: "flex",
  // Make it a flex container
  alignItems: "center",
  transition: "color 0.3s ease",
  fontSize: 14,
  margin: 0,
  padding: 0,
};

const address = {
  textDecoration: "none",
  color: "inherit",
  display: "flex", // Make it a flex container
  transition: "color 0.3s ease",
  flexDirection: "column",
};

export const Footer = () => {
  const emailAddress = "vishal@laxmi-enterprises.in";
  const phoneNumber = "+918007168746";
  return (
    <footer className="footer text-light">
      <div className="container-fluid px-3">
        <div className="row pt-3">
          {/* First Section: Logo and Company Name */}
          <div className="col-md-2 p-0 m-0">
            <div className="d-flex align-items-center">
              <Link to="/" style={linkStyle} onClick={scrollToTop}>
                <img
                  src={require("../../images/logo.png")}
                  alt="Company Logo"
                  className="mr-2"
                  style={{ height: "50px" }}
                />
                <h6 className="mb-0 mx-2">Laxmi Enterprises</h6>
              </Link>
            </div>
          </div>

          <div
            className="col-md-5 mt-md-0 mt-4 mb-md-0 mb-4"
            style={{ display: "flex", alignItems: "center" }}
          >
            <nav>
              <Nav
                id="navbar-example"
                variant="underline"
                className="justify-content-center flex-grow-1"
              >
                <Nav.Link href="/#about" style={linkStyle} className="Link">
                  ABOUT US
                </Nav.Link>
                <span style={lineLink}></span>
                <Nav.Link href="/#services" style={linkStyle} className="Link">
                  SERVICES
                </Nav.Link>
                <span style={lineLink}></span>
                <Nav.Link href="/catalog" style={linkStyle} className="Link">
                  CATALOG
                </Nav.Link>
                <span style={lineLink}></span>
                <Nav.Link href="contact" style={linkStyle} className="Link">
                  CONTACT US
                </Nav.Link>
              </Nav>
            </nav>
          </div>
          {/* Second Section: Social Media Icons */}
          <div className="col-md-5 ">
            <ul className="list-inline text-right">
            <div className="flex-sm-row">
              <li className="list-inline-item col-sm-5">
                <a href="/" style={address}>
                  <div>
                    <FaLocationDot color="#ffffff" />
                    <span style={{ fontSize: 14, fontWeight: "500" }}>
                      ADDRESS
                    </span>
                  </div>
                  <span style={{ fontSize: 12 }}>Near Chaitanya park, </span>
                  <span style={{ fontSize: 12 }}>
                    Indrayaninagar, Bhosari,{" "}
                  </span>
                  <span style={{ fontSize: 12 }}>Pune 411039. </span>
                </a>
              </li>
              <span className="col-sm-1" style={addressLine}></span>
              <li className="list-inline-item">
                <a href={`tel:${phoneNumber}`} style={address}>
                  <div>
                    {" "}
                    <FaPhone />
                    <span style={{ fontSize: 14, fontWeight: "500" }}>
                      {" "}
                      PHONE
                    </span>
                  </div>
                  <span style={{ fontSize: 12 }}>+91 8007168746</span>
                </a>
              </li>
              </div>
              <span className="d-none" style={addressLine}></span>
              <li className="list-inline-item col-sm-12 mt-4">
                <a href={`mailto:${emailAddress}`} style={address}>
                  <div>
                    {" "}
                    <MdEmail />
                    <span style={{ fontSize: 14, fontWeight: "500" }}>
                      {" "}
                      EMAIL
                    </span>
                  </div>
                  <span style={{ fontSize: 12 }}>{emailAddress}</span>
                </a>
              </li>
              {/* Add more social media icons as needed */}
            </ul>
          </div>
        </div>
       
      </div>
    </footer>
  );
};

export default Footer;
