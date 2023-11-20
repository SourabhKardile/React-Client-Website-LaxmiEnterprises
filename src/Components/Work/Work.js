import React from 'react'
import './work.css'
import { ImageBox } from '../ImageBox'
export default function Work() {
  return (
    <div className="container-fluid ">
        <div className="row">
          {/* Display one box on small screens */}
          <div className="col-md-4">
            <ImageBox
              imageUrl="https://www.creativecolor.in/wp-content/uploads/2021/12/QR-Visiting-card-single-side.jpg"
              text="Visiting Card"
            />
          </div>
          <div className="col-md-4">
            <ImageBox
              imageUrl="https://www.creativecolor.in/wp-content/uploads/2021/12/QR-Visiting-card-single-side.jpg"
              text="Visiting Card"
            />
          </div>
          <div className="col-md-4">
            <ImageBox
              imageUrl="https://mir-s3-cdn-cf.behance.net/projects/404/7c1e51172205163.Y3JvcCwyNTU2LDIwMDAsMjIxLDA.jpg"
              text="Visiting Card"
            />
          </div>
          <div className="col-md-4">
            <ImageBox
              imageUrl="https://www.creativecolor.in/wp-content/uploads/2021/12/QR-Visiting-card-single-side.jpg"
              text="Visiting Card"
            />
          </div>
          </div>
          </div>
  )
}
