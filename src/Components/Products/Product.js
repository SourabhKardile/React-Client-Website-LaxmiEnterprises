import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import video from '../../images/animation.mp4'
export default function Product() {
    const imageStyle = {
        maxWidth: '100%', // Set the maximum width to 90% of the parent container
        height: '600px',
        margin: '0 auto', // Center the image horizontally
      };
  return (
    <Carousel data-bs-theme="dark" >
      <Carousel.Item>
      <video className="videodiv" src={video} loop autoPlay muted style={{width:'100%', height:'600px', objectFit:'cover'}}/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
          alt="First slide"
          style={imageStyle}
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg"
          alt="First slide"
          style={imageStyle}
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}



