import React from 'react'
import { fadeInLeft, zoomIn} from 'react-animations';
import { StyleSheet, css } from 'aphrodite';
import { useInView } from 'react-intersection-observer';
import './service.css'
import s1Image from '../../images/services/1.png';
import s2Image from '../../images/services/2.png';
import s3Image from '../../images/services/3.png';
import s4Image from '../../images/services/4.png';
import s5Image from '../../images/services/5.png';
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
export default function Services() {
    const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0, // Adjust the threshold as needed
  });
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
  const imageStyle = {
    maxWidth: '70%', // Set the maximum width to 90% of the parent container
    height: 'auto',
    margin: '0 auto', // Center the image horizontally
  };
  return (
    <div 
    id="services"
    ref={ref}
    className={inView ? css(styles.ZoomIn) : ''}
     style={{marginTop:40}}><h1 
    
     align="center">Providing <b>High-Quality Services</b></h1>
    <div className="service">
    </div>
    {/* <div className="smDeviceService">
      <div className="S1" style={{backgroundImage:`url(${s1Image})`}}>
      </div>
    </div> */}
    <div className="smDeviceService">
    <Carousel data-bs-theme="dark" indicators={false}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={s1Image}
          alt="First slide"
          style={imageStyle}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
        style={imageStyle}
          className="d-block w-100"
          src={s2Image}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
        className="d-block w-100"
        style={imageStyle}
          src={s3Image}
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
        className="d-block w-100"
        style={imageStyle}
          src={s4Image}
          alt="fourth slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
        className="d-block w-100"
        style={imageStyle}
          src={s5Image}
          alt="fifth slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
    </div>
  )
}
