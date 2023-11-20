import React from 'react';
import './footer.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scroll to the top
  };
  const lineStyle = {
    content: '',
    display: 'inline-block',
    height: '50px',          // Adjust the height as needed
    borderLeft: '1px solid #ccc', // Vertical line color
    margin: '0 10px',        // Adjust the margin as needed
  };
  const lineLink = {
    content: '',
    display: 'inline-block',
    height: '20px',          // Adjust the height as needed
    borderLeft: '1px solid #ccc', // Vertical line color
    margin: '0 10px', 
    verticalAlign: 'middle'
  }
  const linkStyle = {
    textDecoration: 'none',
    color: 'inherit',
    display: 'flex',        // Make it a flex container
    alignItems: 'center',
    transition: 'color 0.3s ease',
  }
export const Footer = () => {
  return (
    <footer className="footer text-light">
      <div className="container">
        <div className="row pt-3">
          {/* First Section: Logo and Company Name */}
          <div className="col-md-3">
            <div className="d-flex align-items-center">
            <Link to="/" style={linkStyle} onClick={scrollToTop}>
              <img
               src={require('../../images/logo.png')}
                alt="Company Logo"
                className="mr-2"
                style={{ height: '50px' }}
              />
              <h5 className="mb-0 mx-2">Laxmi Enterprises</h5>
              </Link>
            </div>
            
          </div>
          <div className="col-md-1"><span style={lineStyle}></span></div>
          <div className='col-md-4' style={{ display: 'flex', alignItems: 'center' }}>
            <nav>
              <ul className="list-inline"  >
                <li className="list-inline-item"><Link className="Link"  style={linkStyle} to="/contact-us">Contact Us</Link></li><span style={lineLink}></span>
                <li className="list-inline-item"><Link className="Link" style={linkStyle} to="/about-us">About Us</Link></li><span style={lineLink}></span>
                <li className="list-inline-item"><Link className="Link" style={linkStyle} to="/services">Services</Link></li><span style={lineLink}></span>
                <li className="list-inline-item"><Link className="Link" style={linkStyle} to="/catalog">Catalog</Link></li>
              </ul>
            </nav>
          </div>
          {/* Second Section: Social Media Icons */}
          <div className="col-md-4">
            <ul className="list-inline text-right" >
              <li  className="list-inline-item"><a href="#">facebook</a></li>
              <li className="list-inline-item"><a href="#">twitter</a></li>
              <li className="list-inline-item"><a href="#">instagram</a></li>
              {/* Add more social media icons as needed */}
            </ul>
          </div>
        </div>
        <p className="mt-3 my-0 py-1">&copy; 2023. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
