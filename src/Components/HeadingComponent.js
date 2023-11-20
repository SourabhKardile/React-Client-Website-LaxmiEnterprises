import React from "react";
// import Background from '../images/gem.png'
import video from '../images/animation.mp4'
import { fadeInLeft, zoomIn} from 'react-animations';
import { StyleSheet, css } from 'aphrodite';

import AboutUs from "./AboutUs";
import Services from "./Services/Services";


export default function HeadingComponent() {
  const styles = StyleSheet.create({

    left:{
        animationName:fadeInLeft,
        animationDuration:'3s'
    },
    ZoomIn: {
      animationName: zoomIn,
      animationDuration: '1s', // Set the duration to 1 second
    },


  });

  return (
    <>
    <div className="maincontent" style={{backgroundColor:'#dbdbdb'}}>
    <div className="mainvideo">
    <div 
    className={`titletext ${css(styles.left)}`}
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

      
      <AboutUs />
     <Services />

  
    </div>
    </>
  );
}
