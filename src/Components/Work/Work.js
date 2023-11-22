import React from 'react'

import { ImageBox } from '../ImageBox'
import w1 from '../../images/work/w1.png'
import w2 from '../../images/work/w2.png'
import w3 from '../../images/work/w3.png'
import w4 from '../../images/work/w4.png'
import w5 from '../../images/work/w5.png'
import { fadeIn, fadeInDown, fadeInLeft, fadeInRight, fadeInUp } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';
import { useInView } from 'react-intersection-observer';
export default function Work() {

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0, // Adjust the threshold as needed
  });
  const [ref2, inView2] = useInView({
    triggerOnce: true,
    threshold: 0, // Adjust the threshold as needed
  });
  const [ref3, inView3] = useInView({
    triggerOnce: true,
    threshold: 0, // Adjust the threshold as needed
  });
  const [ref4, inView4] = useInView({
    triggerOnce: true,
    threshold: 0, // Adjust the threshold as needed
  });
  const [ref5, inView5] = useInView({
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
    top:{
      animationName:fadeInDown,
      animationDuration:'1s'
    },
    bottom:{
      animationName:fadeInUp,
      animationDuration:'1s'
    }

  });
  return (
    <div className="container-fluid ">
        <div className="row">
          {/* Display one box on small screens */}
          <div
           className={`col-md-4 ${inView ? css(styles.left) : ''}`}
           ref={ref}
           >
            <ImageBox
              imageUrl={w1}
              text="Visiting Card"
              color="#00539C"

            />
          </div>
          <div
           className={`col-md-4 ${inView2 ? css(styles.top) : ''}`}
           ref={ref2}
           >
            <ImageBox
              imageUrl={w2}
              text="Brochure"
              color="#000000"
            />
          </div>
          <div
           className={`col-md-4 ${inView3 ? css(styles.right) : ''}`}
           ref={ref3}
           >
            <ImageBox
              imageUrl={w5}
              text="Vector Design"
              color=" #317773"
            />
          </div>
          <div
           className={`col-md-4 ${inView4 ? css(styles.left) : ''}`}
           ref={ref4}
           >
            <ImageBox
              imageUrl={w4}
              text="Calligraphy Design"
              color="#990011"
            />
          </div>
          <div
           className={`col-md-4 ${inView5 ? css(styles.bottom) : ''}`}
           ref={ref5}
           >
            <ImageBox
              imageUrl={w3}
              text="Packaging Design"
              color="#CBD18F"
            />
          </div>
          </div>
          </div>
  )
}
