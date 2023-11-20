
import React from 'react';
import { fadeIn, fadeInLeft, fadeInRight, rollIn } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';
import { useInView } from 'react-intersection-observer';

export default function AboutUs() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0, // Adjust the threshold as needed
  });

  const styles = StyleSheet.create({
    fadeIn: {
      animationName: fadeIn,
      animationDuration: '2s', // Set the duration to 1 second
    },
    left:{
        animationName:fadeInLeft,
        animationDuration:'1s'
    },
    right:{
        animationName:fadeInRight,
        animationDuration:'1s'
    },

  });

  return (
    <div
    ref={ref}
      id="about"
      
      className={inView ? css(styles.fadeIn) : ''}
      style={{
        boxShadow:
          '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
        background: '#ff3334',
      }}
    >
      <div className="row mb-5">
          <div className="col-md-2"></div>
          <div className={`col-md-4 d-none d-md-block ${inView ? css(styles.left) : ''}`}
          style={{marginTop:100}}>
            <img
              src={require("../images/leftdesign.png")}
              alt="Background"
              style={{
                width: "auto",
                height: "auto",
                marginLeft: 10,
                marginTop: 40,
              }}
            />
          </div>
          <div 
          className={`col-md-5 mt-5 aboutpara ${inView ? css(styles.right) : ''}`}
          
          >
            <h2
              className="fw-normal text-white text-uppercase "
              style={{ letterSpacing: "3px" }}
            >
              Elevating Brands through Innovative Design Solutions.
            </h2>
            <p
              className="mt-5"
              style={{ lineHeight: 2, color: "#ffffff", textAlign: "justify" }}
            >
              <b>Laxmi Enterprises</b> is your partner in transforming ideas
              into stunning visual narratives.Here it's not just about designs;
              it's about your vision, meticulously curated and brought to life
              by a passionate individual. I'm <b>Vishal Pawale</b>, the driving
              force behind Laxmi Enterprises, combining creativity and printing
              expertise to transform ideas into captivating visuals. Every
              design is carefully crafted, and every print is meticulously
              handled to ensure your vision is presented with precision and
              excellence. Discover the power of personalized design and
              precision printing.
            </p>
            <button
              type="button"
              className="btn mt-4"
              style={{
                backgroundColor: "#ffffff",
                color: "#ff3334",
                fontWeight: "bold",
                width: 150,
                borderRadius: 3,
                cursor:'default',
                boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'
              }}
            >
              About Us
            </button>
          </div>
          <div className="col-md-1"></div>
        </div>
    </div>
  );
}
