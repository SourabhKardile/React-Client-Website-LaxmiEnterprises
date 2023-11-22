import React from 'react'

import HeadingComponent from './HeadingComponent';
import Work from './Work/Work';
import Footer from './Footer/Footer';
import Team from './OurTeam/Team';
import Clients from './OurClients/Clients';



export default function Main() {
  return (
    <>
      <HeadingComponent />
      <Work />
      <Team />
      <Clients />
      <Footer />
    </>
    
  )
}
