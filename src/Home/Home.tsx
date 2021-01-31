import React from 'react';
import Navbar from '../Navbar/Navbar';
import MobileBody from '../Body/MobileBody'
import './Home.css';

export default function Home() {
  return (
    <div className="Home">
      <React.Fragment>
      <Navbar/>
      <MobileBody />
      </React.Fragment>
    </div>
  )
}
