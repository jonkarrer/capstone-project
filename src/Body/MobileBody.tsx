import React from 'react'
import './MobileBody.css';
import logo from './logo.png'

export default function MobileBody() {
  return (
    <div className="MobileBody">
      <section>
        <img src={logo} alt="logo"/>
      </section>
      <section>
        <div className="title">
          <h1>Order Now</h1>
          <p>
            We have been cooking, packaging, 
            and delivering fresh foods for 3+ 
            years. Order all your food for the week 
            by clicking below.
          </p>
          <button>Order ></button>
        </div>
      </section>
    </div>
  )
}
