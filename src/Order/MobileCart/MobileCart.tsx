import React, {useState, useEffect} from 'react';
import {useArr, updateSubTotal, useSubTotal} from '../TotalContext'

export default function MobileCart() {
  const [cartState, setCartState] = useState('toggle-off');
  const toggleFunction = () => {
    if (cartState === "toggle-off") {
      setCartState("toggle-on");
    } else {
      setCartState("toggle-off");
    }
  }
  return (
      <div className="MobileCart" id={cartState}>
        <section onClick={updateSubTotal()}>
          <div id="cart-icon" onClick={toggleFunction}>
            <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24">
              <path 
              d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 
              1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 
              1.5-1.5c0-.828-.672-1.5-1.5-1.5zm1.336-5l1.977-7h-16.813l2.938 7h11.898zm4.969-10l-3.432 
              12h-12.597l.839 2h13.239l3.474-12h1.929l.743-2h-4.195z"/>
            </svg>
          </div>
        </section>
        <div className="itemized-list">
          {renderItemizedList()} 
           <SubTotal />
        </div>
        <div className="order-now">Submit Order</div>
      </div>
  )
}

interface Itemized {
  itemCount: number;
  item: string;
  itemCost: any;
  index: number;
}

const ItemizedList: React.FC<Itemized> = ({index,itemCount, item, itemCost}) => {
  const [currentCount, setCount] = useState(itemCount);
  const currentCart: any = useArr();
  const updateTotal:any = updateSubTotal();
  function subCount() {
    setCount(currentCount - 1)
    currentCart[index].itemCount = currentCount - 1;
    
  }
  function addCount() {
    setCount(currentCount + 1)
    currentCart[index].itemCount = currentCount + 1;
  }
  return (
    <React.Fragment>
    <div className="item-line">
      <div className="item-count">
        <div className="minus-butt" onClick={updateTotal}><div onClick={subCount}>⏤</div></div>
        <div>x{currentCount}</div>
        <div className="plus-butt" onClick={updateTotal}><div onClick={addCount}>+</div></div>
      </div> 
      <div className="item">{item}</div>
      <div className="item-cost">${itemCost * currentCount}</div>
    </div>
    </React.Fragment>
  )
}
const renderItemizedList = () => {
  const currentCart: any = useArr();
  return(
  <React.Fragment>
  {currentCart.map((object:any) => <ItemizedList index={object.index} itemCount={object.itemCount} item={object.item} itemCost={object.itemCost}/>)}
 
  </React.Fragment>
  )
}
const SubTotal = () => {
  const currentCart: any = useArr();
  const currentSubTotal: any = useSubTotal();
    return (
      <React.Fragment>
      <div className="subtotal">
        SubTotal: $ {currentSubTotal}
      </div>
      <div className="tax">
        Tax : $ { (currentSubTotal * .1 )}
      </div>
      <div className="total">
        Total : $ {((currentSubTotal * .1) + currentSubTotal)}
      </div>
      (Click Submit Order to continue)
      </React.Fragment>
    )
}
interface ExpandProps {
  itemName: string;
  itemDescription: string;
  itemPrice: number;
  itemPicture: any;
  addToCart: React.ReactNode;
}
export const ExpandMenuItem: React.FC<ExpandProps>= ({itemName, itemDescription, itemPrice, itemPicture, children, addToCart}) => {
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
      <div className="add-to-cart" onClick={() => {
          const cartObject = {
            itemCount: orderCounter,
            item: itemName,
            itemCost: itemPrice,
            index: currentCart.length,
            key: currentCart.length
          }
          currentCart.push(cartObject);
        }}
      >
        {addToCart}
      </div>
    </div>
  )
}