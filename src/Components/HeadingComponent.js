import React from "react";
// import Background from '../images/gem.png'
import video from '../images/animation.mp4'
import { fadeInLeft} from 'react-animations';
import { StyleSheet, css } from 'aphrodite';
import { useInView } from 'react-intersection-observer';
import AboutUs from "./AboutUs";


export default function HeadingComponent() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0, // Adjust the threshold as needed
  });
  const styles = StyleSheet.create({

    left:{
        animationName:fadeInLeft,
        animationDuration:'3s'
    },


  });

  return (
    <>
    <div className="maincontent" style={{backgroundColor:'#dbdbdb'}}>
    <div className="mainvideo">
    <div 
    ref={ref}
    className={`titletext ${inView ? css(styles.left) : ''}`}
    >

    <div
            className="display-5 text-danger"
            style={{
              fontFamily: "Roboto",
              fontWeight: "bold",
              letterSpacing: "3px",
            }}
          >
            LAXMI
          </div>
          <div
            className="display-2"
            style={{
              fontFamily: "Roboto",
              fontWeight: "bold",
              letterSpacing: "3px",
            }}
          >
            ENTERPRISES
          </div>
          <hr
            className="d-none d-sm-block"
            style={{ borderTop: "1px solid #000000" }}
          />
          <div
            className="h5 fw-normal"
            style={{ lineHeight: "1.5", fontStyle: "italic" }}
          >
            Transforming Ideas into Visual Masterpieces.
            <br />
            <span className="text-danger"> Your Vision, Our Craft.</span>
          </div>
    </div>
      <video className="videodiv" src={video} autoPlay muted style={{width:'70%', height:'100%', objectFit:'cover'}}/>
    </div>
    </div>

    <div
      data-bs-spy="scroll"
      data-bs-target="#navbar-example"
      data-bs-offset="0"
      class="scrollspy-example"
      tabindex="0"
      className="container-fluid m-0 p-0"
      style={{ overflow: "hidden" }}
    >

      {/* <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{ flex: 1, borderTop: "1px solid rgba(220, 53, 69, 0.3)" }}
        ></div>
        <img
          src={require("../images/gem.png")}
          alt=""
          width={"40"}
          style={{ margin: 15 }}
        />
        <div
          style={{ flex: 1, borderTop: "1px solid rgba(220, 53, 69, 0.3)" }}
        ></div>
      </div> */}
      
      <AboutUs />
      <div id="services" style={{marginTop:40}}><h1 align="center">Providing <b>High-Quality Services</b></h1>
      <div className="service">
      
      </div>
      </div>
      
      
    </div>
    </>
  );
}
