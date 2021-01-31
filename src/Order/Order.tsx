import React from 'react'
import './Order.css';


export default function Order() {
  return (
    <div className="Order">
      <section>
        <h1>This Weeks Menu</h1>
      </section>
      <section className="food-menu">
        <div className="catagory-block">
          <div className="catagory-title">
            <h1>Breakfast</h1><br/>
            <p>Save the time for coffee.</p>
          </div>
          <div className="catagory-button">
            <div id="dropdown-button">V</div>
          </div>
       </div>
       <div className="catagory-block">
          <div className="catagory-title">
            <h1>Vegan</h1><br/>
            <p>Life starts with plants.</p>
          </div>
          <div className="catagory-button">
            <div id="dropdown-button">V</div>
          </div>
       </div>
       <div className="catagory-block">
          <div className="catagory-title">
            <h1>Low-Glycemic/Paleo</h1><br/>
            <p>Fuel the body with what it needs.</p>
          </div>
          <div className="catagory-button">
            <div id="dropdown-button">V</div>
          </div>
       </div>
       <div className="catagory-block">
          <div className="catagory-title">
            <h1>Buy in Bulk</h1><br/>
            <p>Pounds of select items</p>
          </div>
          <div className="catagory-button">
            <div id="dropdown-button">V</div>
          </div>
       </div>
      </section>
      <MobileCart/>
    </div>
  )
}
function MobileCart() {
  return (
    <React.Fragment>
      <div className="MobileCart">
        <section>
          <div className="cart-icon">ShopCart</div>
          <div className="order-now">Submit Order</div>
        </section>
      </div>
    </React.Fragment>
  )
}
