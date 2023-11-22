import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import image1 from '../../images/services/1.png'
export default function Team() {
    const imageStyle = {
        width: '80%',
        height: 'auto',
        margin:'auto',
        marginTop:20
        // transition: 'filter 0.3s ease-in-out',
        // filter: isHovered ? 'opacity(30%)' : ' none', // Apply hue rotation on hover
      };
  return (
    <div className='container mt-5'>
      <h1 
      className='mb-5'
        style={{marginTop:100}}
    align="center">Our Team</h1>
    <div className='row text-center'>
        <div className='col-md-6'>
        <div className="d-flex justify-content-center">
        <Card style={{ width: '18rem', border:0 }}>
<img src={image1} alt="my Work" style={imageStyle} />
      <Card.Body>
        <Card.Title>Vishal Pawale</Card.Title>
        <Card.Subtitle style={{color:'#dc3545', fontWeight:'bold'}}>Propritor</Card.Subtitle>
        <hr />
        <Card.Text>
         Designation
        </Card.Text>
        <hr />
        <Button variant="primary">Social Media Link</Button>
      </Card.Body>
    </Card>
    </div>
        </div>
        <div className='col-md-6'>
        <div className="d-flex justify-content-center">
        <Card style={{ width: '18rem', border:0 }}>
<img src={image1} alt="my Work" style={imageStyle} />
      <Card.Body>
        <Card.Title>Chaitanya Pawale</Card.Title>
        <Card.Subtitle style={{color:'#dc3545', fontWeight:'bold'}}>Video Editor</Card.Subtitle>
        <hr />
        <Card.Text>
         Designation 
        </Card.Text>
        <hr />
        <Button variant="primary">Social Media Link</Button>
      </Card.Body>
    </Card>
    </div>
        </div>
        
    </div>


    </div>
  )
}
