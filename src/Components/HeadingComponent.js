import React from 'react'

export default function HeadingComponent() {
  return (
    <div className="container">
  <div className="row p-5">
    <div className="col-md-6 mb-5" style={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
    <div className="display-5 text-danger" style={{fontFamily: 'Roboto', fontWeight:'bold', letterSpacing: '3px'}}>LAXMI</div>
    <div className="display-2" style={{fontFamily: 'Roboto', fontWeight:'bold', letterSpacing: '3px'}}>ENTERPRISES</div>
    <hr className="d-none d-sm-block" style={{ borderTop: '1px solid #808080'}} />
    <div className="h5 fw-normal" style={{ lineHeight: '1.5', fontStyle: 'italic' }}>
  Transforming Ideas into Visual Masterpieces.<br />
 <span className='text-danger'> Your Vision, Our Craft.</span>
</div>
    </div>
    <div className="col-md-6">
      <img src={require('../images/logo.png')} alt="" className="img-fluid" />
    </div>
  </div>
</div>
  )
}
