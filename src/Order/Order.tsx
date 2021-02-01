import React, {useState, useEffect} from 'react'
import './Order.css';
import menuDataBase from '../lib/menuDataBase';

const firstMenu = menuDataBase["menuOne"];



export default function Order() {
  const [breakfastButton, setBreakfast] = useState(false);
  const [veganButton, setVegan] = useState(false);
  const [paleoButton, setPaleo] = useState(false);
  const [bulkButton, setBulk] = useState(false);
  const renderBreakfastItems = () => {
    if (breakfastButton === true) {
      return (
        <React.Fragment>
        {firstMenu.breakfast.map((object) => <MenuItem itemName={object.name} itemDescription={object.description} itemPrice={object.price}/>)}
        </React.Fragment>
      );
    } else {
      return <React.Fragment></React.Fragment>
    }
  }
  const renderVeganItems = () => {
    if (veganButton === true) {
      return (
        <React.Fragment>
        {firstMenu.vegan.map((object) => <MenuItem itemName={object.name} itemDescription={object.description} itemPrice={object.price}/>)}
        </React.Fragment>
      );
    } else {
      return <React.Fragment></React.Fragment>
    }
  }
  const renderPaleoItems = () => {
    if (paleoButton === true) {
      return (
        <React.Fragment>
        {firstMenu.paleo.map((object) => <MenuItem itemName={object.name} itemDescription={object.description} itemPrice={object.price}/>)}
        </React.Fragment>
      );
    } else {
      return <React.Fragment></React.Fragment>
    }
  }
  const renderBulkItems = () => {
    if (bulkButton === true) {
      return (
        <React.Fragment>
        {firstMenu.bulk.map((object) => <MenuItem itemName={object.name} itemDescription={object.description} itemPrice={object.price}/>)}
        </React.Fragment>
      );
    } else {
      return <React.Fragment></React.Fragment>
    }
  }
  return (
    
    <div className="Order">
       <ExpandMenuItem/>
      <section>
        <h1 id="heading">This Weeks Menu</h1>
      </section>
      <section className="food-menu">
        <div className="catagory-block">
          <div className="catagory-title">
            <h1>Breakfast</h1><br/>
            <p>Save the time for coffee.</p>
          </div>
          <div className="catagory-button">
            <div id="dropdown-button" onClick={() => setBreakfast(!breakfastButton)}>V</div>
          </div>
       </div>
        
        {renderBreakfastItems()}

       <div className="catagory-block">
          <div className="catagory-title">
            <h1>Vegan</h1><br/>
            <p>Life starts with plants.</p>
          </div>
          <div className="catagory-button">
            <div id="dropdown-button" onClick={() => setVegan(!veganButton)}>V</div>
          </div>
       </div>

        {renderVeganItems()}

       <div className="catagory-block">
          <div className="catagory-title">
            <h1>Low-Glycemic/Paleo</h1><br/>
            <p>Fuel the body with what it needs.</p>
          </div>
          <div className="catagory-button">
            <div id="dropdown-button" onClick={() => setPaleo(!paleoButton)}>V</div>
          </div>
       </div>
        
        {renderPaleoItems()}

       <div className="catagory-block">
          <div className="catagory-title">
            <h1>Buy in Bulk</h1><br/>
            <p>Pounds of select items</p>
          </div>
          <div className="catagory-button">
            <div id="dropdown-button" onClick={() => setBulk(!bulkButton)}>V</div>
          </div>
       </div>

       {renderBulkItems()}

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
          <div id="cart-icon">
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
    <div className="MenuItem" >
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
    </div>
  )
}
function ExpandMenuItem() {
  return (
    <div className="ExpandMenuItem">
      Hello
    </div>
  )
}