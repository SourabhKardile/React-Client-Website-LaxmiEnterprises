import React from "react";
import Footer from "./Footer/Footer";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { SlLocationPin } from "react-icons/sl";
import { TfiEmail } from "react-icons/tfi";
import { IoCallOutline } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import "./contact.css"; // Import your custom CSS file

export default function ContactUs() {
  return (
    <>
      <div className="contact">
        <div className="container mt-5 mb-5 d-flex justify-content-center px-0" >
          <Card className="contact-card" >
            <div className="row m-0">
            <div className="col-md-4 col-12" style={{backgroundColor:'#dc3545', borderRadius:10}}>
                <Card.Body>
                  <Card.Title style={{ fontSize: 28, margin: 20,marginBottom:40, color:'#ffffff' }}>
                    Contact Us
                  </Card.Title>
                  <div className="row my-4">
                    <div className="col-1">
                      <SlLocationPin size={22} color="#ffffff" />
                    </div>
                    <div className="col-11" style={{color:"#ffffff", lineHeight:1.7}}>
                      Sector no. 1, plot no. 59/6, <br /> near Chaitanya park,
                      Indrayaninagar,
                      <br /> Bhosari, Pune - 411039.
                    </div>
                  </div>
                  <div className="row my-4">
                    <div className="col-1">
                      <TfiEmail size={22} color="#ffffff" />
                    </div>
                    <div className="col-11" style={{color:"#ffffff", lineHeight:1.7}}>
                      vishal@laxmi-enterprises.in <br /> vishal09@gmail.com
                    </div>
                  </div>
                  <div className="row my-4">
                    <div className="col-1">
                      <IoCallOutline size={22} color="#ffffff" />
                    </div>
                    <div className="col-11" style={{color:"#ffffff"}}>+91 8007168746</div>
                  </div>
                  <div className="row my-4">
                    <div className="col-1">
                      <FaInstagram size={22} color="#ffffff" />
                    </div>
                    <div className="col-11" style={{color:"#ffffff"}}>Vishal09</div>
                  </div>
                </Card.Body>
              </div>
              <div className="col-md-8 col-12 map-container">
                <iframe
                className="zoom-image"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7782.893797976518!2d73.84069643244769!3d18.634132328365517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c78919b460f1%3A0x8f67dd8a541279fe!2s45%2F2%2F37%2C%20Chaitanya%20Park%2C%20Sector%203%20Indrayani%20Nagar%2C%20Bhosari%2C%20Pimpri%20Chinchwad%2C%20Pimpri-Chinchwad%2C%20Maharashtra%20411026!5e0!3m2!1sen!2sin!4v1700547657560!5m2!1sen!2sin"
                  width="100%"
                  height="500"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  style={{ boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}
                ></iframe>
              </div>
              
            </div>
          </Card>
        </div>
      </div>
      <Footer />
    </>
  );
}
