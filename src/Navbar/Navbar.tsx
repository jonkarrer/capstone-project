import React from 'react'
import './Navbar.css';
export default function Navbar() {
  return (
    <div className="NavBar">
      <section className="links">
        <div className="Order"><h1><a>Order</a></h1></div>
        <div className="faq"><h1><a>FAQs</a></h1></div>
      </section>
    </div>
  )
}
