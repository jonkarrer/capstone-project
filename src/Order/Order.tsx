import React, {useState, useEffect} from 'react'
import MobileCart from './MobileCart'
import './Order.css';
import menuDataBase from '../lib/menuDataBase.js';
import {TotalProvider, useArr} from './TotalContext'

const firstMenu = menuDataBase["menuOne"];

export default function Order() {
  const [breakfastButton, setBreakfast] = useState(false);
  const [veganButton, setVegan] = useState(false);
  const [paleoButton, setPaleo] = useState(false);
  const [bulkButton, setBulk] = useState(false);
  const [rotateBreakfast, setRotateBr] = useState('0');
  const [rotateVegan, setRotateVeg] = useState('0');
  const [rotatePaleo, setRotatePal] = useState('0');
  const [rotateBulk, setRotateBulk] = useState('0');
  const renderBreakfastItems = () => {
    if (breakfastButton === true) {
      return (
        <React.Fragment>
        {firstMenu.breakfast.map((object) => <MenuItem itemName={object.name} itemDescription={object.description} itemPrice={object.price} itemPicture={object.picture}/>)}
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
        {firstMenu.vegan.map((object) => <MenuItem itemName={object.name} itemDescription={object.description} itemPrice={object.price} itemPicture={object.picture}/>)}
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
        {firstMenu.paleo.map((object) => <MenuItem itemName={object.name} itemDescription={object.description} itemPrice={object.price} itemPicture={object.picture}/>)}
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
        {firstMenu.bulk.map((object) => <MenuItem itemName={object.name} itemDescription={object.description} itemPrice={object.price} itemPicture={object.picture}/>)}
        </React.Fragment>
      );
    } else {
      return <React.Fragment></React.Fragment>
    }
  }
  return (
    <TotalProvider>
    <div className="Order">
      <section>
        <h1 id="heading">This Weeks Menu</h1>
      </section>
      <section className="food-menu">
        <div className="catagory-block" onClick={() => {setBreakfast(!breakfastButton); breakfastButton ? setRotateBr('0') : setRotateBr('180');}}>
          <div className="catagory-title">
            <h1>Breakfast</h1><br/>
            <p>Save the time for coffee.</p>
          </div>
          <div className="catagory-button">
            <div id="dropdown-button" style={{transform: `rotate(${rotateBreakfast}deg)`}}>V</div>
          </div>
       </div>
        {renderBreakfastItems()}
       <div className="catagory-block" onClick={() => {setVegan(!veganButton); veganButton ? setRotateVeg('0') : setRotateVeg('180');}}>
          <div className="catagory-title">
            <h1>Vegan</h1><br/>
            <p>Life starts with plants.</p>
          </div>
          <div className="catagory-button">
            <div id="dropdown-button" style={{transform: `rotate(${rotateVegan}deg)`}}>V</div>
          </div>
       </div>
        {renderVeganItems()}
       <div className="catagory-block" onClick={() => {setPaleo(!paleoButton); paleoButton ? setRotatePal('0') : setRotatePal('180');}}>
          <div className="catagory-title">
            <h1>Low-Glycemic/Paleo</h1><br/>
            <p>Fuel the body with what it needs.</p>
          </div>
          <div className="catagory-button">
            <div id="dropdown-button" style={{transform: `rotate(${rotatePaleo}deg)`}}>V</div>
          </div>
       </div>
        {renderPaleoItems()}
       <div className="catagory-block" onClick={() => {setBulk(!bulkButton); bulkButton ? setRotateBulk('0') : setRotateBulk('180');}}>
          <div className="catagory-title">
            <h1>Buy in Bulk</h1><br/>
            <p>Pounds of select items</p>
          </div>
          <div className="catagory-button">
            <div id="dropdown-button"style={{transform: `rotate(${rotateBulk}deg)`}}>V</div>
          </div>
       </div>
       {renderBulkItems()}
      </section>
      <MobileCart/>
    </div>
    </TotalProvider>
  )}
interface MenuProps {
  itemName: string;
  itemDescription: string;
  itemPrice: number;
  itemPicture: any;
}
function MenuItem({itemName, itemDescription, itemPrice, itemPicture}: MenuProps) {
  const [expandItemButton, setMenuItem] = useState(false);
  const renderItemPopUp = () => {
    if (expandItemButton === true) {
      return(
        <ExpandMenuItem 
          children={<div className="close-this-item" onClick={() => setMenuItem(false)}>X</div>} 
          itemName={itemName} 
          itemDescription={itemDescription} 
          itemPrice={itemPrice} 
          itemPicture={itemPicture}
          addToCart= {<div id="add-to-cart-close" onClick={() => setMenuItem(false)}><h2>Add to Cart</h2></div>}
        />
      )
    } else {
      return
    }
  }
  return (
    <div className="MenuItem" >
      <div className="catagory-block">
        {renderItemPopUp()}
        <div className="catagory-title" onClick={() => setMenuItem(!expandItemButton)}>
          <h1>{itemName}</h1><br/>
          <p>
            {itemDescription}
          </p>
        </div>
        <div className="catagory-button">
          <div id="price">${itemPrice}</div>
        </div>
      </div>
    </div>
  )}
  interface ExpandProps {
    itemName: string;
    itemDescription: string;
    itemPrice: number;
    itemPicture: any;
    addToCart: React.ReactNode;
  }
const ExpandMenuItem: React.FC<ExpandProps>= ({itemName, itemDescription, itemPrice, itemPicture, children, addToCart}) => {
    const currentCart: any = useArr();
    const [orderCounter, setCounter] = useState(1);
    return (
      <div className="ExpandMenuItem">
        {children}
        <div className="item-picture" style={{backgroundImage:`url(${itemPicture})`}}></div>
        <div className="item-name"><h2>{itemName} {`$${itemPrice}`}</h2></div>
        <div className="item-description"><span>{itemDescription}</span></div>
        <div className="item-cart">
          <div className="minus-butt" onClick={() => setCounter(orderCounter - 1)}>⏤</div>
          <div className="number-counter">{orderCounter}</div>
          <div className="plus-butt" onClick={() => setCounter(orderCounter + 1)}>+</div>
        </div>
        <div className="add-to-cart" onClick={() => 
        {
          const cartObject = { //Package this order, push to TotalContext.tsx variable.
              itemCount: orderCounter,
              item: itemName,
              itemCost: itemPrice,
              index: currentCart.length,
              key: currentCart.length
          };
          currentCart.push(cartObject);
        }}>
          {addToCart}
        </div>
      </div>
    )
  }