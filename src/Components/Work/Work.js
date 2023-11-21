import React from 'react'

import { ImageBox } from '../ImageBox'
import w1 from '../../images/work/w1.png'
import w2 from '../../images/work/w2.png'
import w3 from '../../images/work/w3.png'
import w4 from '../../images/work/w4.png'
import w5 from '../../images/work/w5.png'
export default function Work() {
  return (
    <div className="container-fluid ">
        <div className="row">
          {/* Display one box on small screens */}
          <div className="col-md-4">
            <ImageBox
              imageUrl={w1}
              text="Brochure"
              color="#00539C"

            />
          </div>
          <div className="col-md-4">
            <ImageBox
              imageUrl={w2}
              text="Visiting Card"
              color="#F96167"
            />
          </div>
          <div className="col-md-4">
            <ImageBox
              imageUrl={w5}
              text="Visiting Card"
              color=" #317773"
            />
          </div>
          <div className="col-md-4">
            <ImageBox
              imageUrl={w4}
              text="Visiting Card"
              color="#990011"
            />
          </div>
          <div className="col-md-4">
            <ImageBox
              imageUrl={w3}
              text="Visiting Card"
              color="#CBD18F"
            />
          </div>
          </div>
          </div>
  )
}
