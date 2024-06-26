import React from "react";
import Image from "react-bootstrap/Image";
import profile from "../../images/dummyProfile.jpg";
import Badge from "react-bootstrap/Badge";
import Carousel from "react-bootstrap/Carousel";
import "./client.css";
import c1 from "../../images/client/c1.png";
import c2 from "../../images/client/c2.png";
import c3 from "../../images/client/c3.png";
import c4 from "../../images/client/c4.png";
import c5 from "../../images/client/c5.png";
import c6 from "../../images/client/c6.png";
import c7 from "../../images/client/c7.png";
export default function Clients() {
  return (
    <div className="container-fluid bg-danger">
      <h1
        style={{
          paddingTop: 50,
          paddingBottom: 50,
          color: "#ffffff",
          fontWeight: "300",
        }}
        align="center"
      >
        Our Clients & Testimonials
      </h1>
      <Carousel>
        <Carousel.Item>
          <div className="row">
            <div className="col-md-4">
              <div className="d-flex justify-content-center justify-content-md-end">
                <Image
                  src={profile}
                  roundedCircle
                  width={150}
                  height={150}
                  style={{ border: "4px solid #ffffff" }}
                />
                <div className="row">
                  <Badge
                    bg="dark"
                    style={{
                      height: 40,
                      width: 40,
                      fontSize: 50,
                      position: "relative",
                      top: 120,
                      left: -50,
                      borderRadius: "50%",
                      padding: 0,
                      fontFamily: "Passion One",
                      paddingTop: 7,
                    }}
                  >
                    ''
                  </Badge>
                </div>
              </div>
            </div>

            <div className="col-md-6 text-white  testimonial-text">
              <h4
                style={{
                  color: "#ffffff",
                  paddingTop: 10,
                  paddingBottom: 10,
                  margin: 0,
                  fontWeight: "400",
                }}
              >
                Vishal Pawale
              </h4>
              <h6>Designation</h6>
              <p
                className="mx-5 mx-md-0"
                style={{
                  fontWeight: "lighter",
                  textAlign: "justify",
                  marginBottom: 80,
                }}
              >
                Vishal is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five
              </p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="row ">
            <div className="col-md-4">
              <div className="d-flex justify-content-center justify-content-md-end">
                <Image
                  src={profile}
                  roundedCircle
                  width={150}
                  height={150}
                  style={{ border: "4px solid #ffffff" }}
                />
                <div className="row">
                  <Badge
                    bg="dark"
                    style={{
                      height: 40,
                      width: 40,
                      fontSize: 50,
                      position: "relative",
                      top: 120,
                      left: -50,
                      borderRadius: "50%",
                      padding: 0,
                      fontFamily: "Passion One",
                      paddingTop: 7,
                    }}
                  >
                    ''
                  </Badge>
                </div>
              </div>
            </div>

            <div className="col-md-6 text-white  testimonial-text">
              <h4
                style={{
                  color: "#ffffff",
                  paddingTop: 10,
                  paddingBottom: 10,
                  margin: 0,
                  fontWeight: "400",
                }}
              >
                Vishal Pawale
              </h4>
              <h6>Designation</h6>
              <p
                className="mx-5 mx-md-0"
                style={{
                  fontWeight: "lighter",
                  textAlign: "justify",
                  marginBottom: 80,
                }}
              >
                Vishal is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five
              </p>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
      <Carousel className="d-md-none">
        <Carousel.Item>
          <div className="row text-center">
            <div className="col-md-4 mb-5 ">
              <img src={c1} width="250" alt="my Work" />
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="row text-center">
            <div className="col-md-4 mb-5 ">
              <img src={c2} width="250" alt="my Work" />
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="row text-center">
            <div className="col-md-4 mb-5 ">
              <img src={c3} width="250" alt="my Work" />
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="row text-center">
            <div className="col-md-4 mb-5 ">
              <img src={c4} width="250" alt="my Work" />
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="row text-center">
            <div className="col-md-4 mb-5 ">
              <img src={c5} width="250" alt="my Work" />
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="row text-center">
            <div className="col-md-4 mb-5 ">
              <img src={c6} width="250" alt="my Work" />
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="row text-center">
            <div className="col-md-4 mb-5 ">
              <img src={c7} width="250" alt="my Work" />
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
      <div
        className="container pb-5 d-none d-md-block"
        style={{ marginTop: 100 }}
      >
        <div className="row text-center">
          <div className="col-md-4 mb-5 ">
            <img src={c1} width="250" alt="my Work" />
          </div>
          <div className="col-md-4 mb-5">
            <img src={c2} width="250" alt="my Work" />
          </div>
          <div className="col-md-4 mb-5">
            <img src={c3} width="250" alt="my Work" />
          </div>
          <div className="col-md-4 mb-5">
            <img src={c4} width="250" alt="my Work" />
          </div>
          <div className="col-md-4 mb-5">
            <img src={c5} width="250" alt="my Work" />
          </div>
          <div className="col-md-4 mb-5">
            <img src={c6} width="250" alt="my Work" />
          </div>
          <div className="col-md-4 mb-5 d-none d-md-block">
            {/* <img src={c7} width="250" alt="my Work" /> */}
          </div>
          <div className="col-md-4 mb-5">
            <img src={c7} width="250" alt="my Work" />
          </div>
        </div>
      </div>
    </div>
  );
}
