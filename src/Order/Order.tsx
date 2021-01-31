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
       <MenuItem 
       itemName="Steak and Eggs" 
       itemDescription="Charbroiled flank steak and scrambled eggs. Topped with
roasted bell peppers." itemPrice="$11"/>
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
          <div className="cart-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
            <path 
            d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 
            1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 
            1.5-1.5c0-.828-.672-1.5-1.5-1.5zm1.336-5l1.977-7h-16.813l2.938 7h11.898zm4.969-10l-3.432 
            12h-12.597l.839 2h13.239l3.474-12h1.929l.743-2h-4.195z"/>
          </svg>
          </div>
          <div className="order-now">Submit Order</div>
        </section>
      </div>
    </React.Fragment>
  )
}
interface MenuProps {
  itemName: string;
  itemDescription: string;
  itemPrice: string;
}
function MenuItem({itemName, itemDescription, itemPrice}: MenuProps) {
  return (
      <div className="catagory-block">
        <div className="catagory-title">
          <h1>{itemName}</h1><br/>
          <p>
            {itemDescription}
          </p>
        </div>
        <div className="catagory-button">
          <div id="price">{itemPrice}</div>
          </div>
      </div>
  )
}