import React, {useState} from "../../_snowpack/pkg/react.js";
import MobileCart from "./MobileCart.js";
import "./Order.css.proxy.js";
import menuDataBase from "../lib/menuDataBase.js";
import {TotalProvider, useArr} from "./TotalContext.js";
const firstMenu = menuDataBase["menuOne"];
export default function Order() {
  const [breakfastButton, setBreakfast] = useState(false);
  const [veganButton, setVegan] = useState(false);
  const [paleoButton, setPaleo] = useState(false);
  const [bulkButton, setBulk] = useState(false);
  const [rotateBreakfast, setRotateBr] = useState("0");
  const [rotateVegan, setRotateVeg] = useState("0");
  const [rotatePaleo, setRotatePal] = useState("0");
  const [rotateBulk, setRotateBulk] = useState("0");
  const renderBreakfastItems = () => {
    if (breakfastButton === true) {
      return /* @__PURE__ */ React.createElement(React.Fragment, null, firstMenu.breakfast.map((object) => /* @__PURE__ */ React.createElement(MenuItem, {
        itemName: object.name,
        itemDescription: object.description,
        itemPrice: object.price,
        itemPicture: object.picture
      })));
    } else {
      return /* @__PURE__ */ React.createElement(React.Fragment, null);
    }
  };
  const renderVeganItems = () => {
    if (veganButton === true) {
      return /* @__PURE__ */ React.createElement(React.Fragment, null, firstMenu.vegan.map((object) => /* @__PURE__ */ React.createElement(MenuItem, {
        itemName: object.name,
        itemDescription: object.description,
        itemPrice: object.price,
        itemPicture: object.picture
      })));
    } else {
      return /* @__PURE__ */ React.createElement(React.Fragment, null);
    }
  };
  const renderPaleoItems = () => {
    if (paleoButton === true) {
      return /* @__PURE__ */ React.createElement(React.Fragment, null, firstMenu.paleo.map((object) => /* @__PURE__ */ React.createElement(MenuItem, {
        itemName: object.name,
        itemDescription: object.description,
        itemPrice: object.price,
        itemPicture: object.picture
      })));
    } else {
      return /* @__PURE__ */ React.createElement(React.Fragment, null);
    }
  };
  const renderBulkItems = () => {
    if (bulkButton === true) {
      return /* @__PURE__ */ React.createElement(React.Fragment, null, firstMenu.bulk.map((object) => /* @__PURE__ */ React.createElement(MenuItem, {
        itemName: object.name,
        itemDescription: object.description,
        itemPrice: object.price,
        itemPicture: object.picture
      })));
    } else {
      return /* @__PURE__ */ React.createElement(React.Fragment, null);
    }
  };
  return /* @__PURE__ */ React.createElement(TotalProvider, null, /* @__PURE__ */ React.createElement("div", {
    className: "Order"
  }, /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement("h1", {
    id: "heading"
  }, "This Weeks Menu")), /* @__PURE__ */ React.createElement("section", {
    className: "food-menu"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "catagory-block",
    onClick: () => {
      setBreakfast(!breakfastButton);
      breakfastButton ? setRotateBr("0") : setRotateBr("180");
    }
  }, /* @__PURE__ */ React.createElement("div", {
    className: "catagory-title"
  }, /* @__PURE__ */ React.createElement("h1", null, "Breakfast"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("p", null, "Save the time for coffee.")), /* @__PURE__ */ React.createElement("div", {
    className: "catagory-button"
  }, /* @__PURE__ */ React.createElement("div", {
    id: "dropdown-button",
    style: {transform: `rotate(${rotateBreakfast}deg)`}
  }, "V"))), renderBreakfastItems(), /* @__PURE__ */ React.createElement("div", {
    className: "catagory-block",
    onClick: () => {
      setVegan(!veganButton);
      veganButton ? setRotateVeg("0") : setRotateVeg("180");
    }
  }, /* @__PURE__ */ React.createElement("div", {
    className: "catagory-title"
  }, /* @__PURE__ */ React.createElement("h1", null, "Vegan"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("p", null, "Life starts with plants.")), /* @__PURE__ */ React.createElement("div", {
    className: "catagory-button"
  }, /* @__PURE__ */ React.createElement("div", {
    id: "dropdown-button",
    style: {transform: `rotate(${rotateVegan}deg)`}
  }, "V"))), renderVeganItems(), /* @__PURE__ */ React.createElement("div", {
    className: "catagory-block",
    onClick: () => {
      setPaleo(!paleoButton);
      paleoButton ? setRotatePal("0") : setRotatePal("180");
    }
  }, /* @__PURE__ */ React.createElement("div", {
    className: "catagory-title"
  }, /* @__PURE__ */ React.createElement("h1", null, "Low-Glycemic/Paleo"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("p", null, "Fuel the body with what it needs.")), /* @__PURE__ */ React.createElement("div", {
    className: "catagory-button"
  }, /* @__PURE__ */ React.createElement("div", {
    id: "dropdown-button",
    style: {transform: `rotate(${rotatePaleo}deg)`}
  }, "V"))), renderPaleoItems(), /* @__PURE__ */ React.createElement("div", {
    className: "catagory-block",
    onClick: () => {
      setBulk(!bulkButton);
      bulkButton ? setRotateBulk("0") : setRotateBulk("180");
    }
  }, /* @__PURE__ */ React.createElement("div", {
    className: "catagory-title"
  }, /* @__PURE__ */ React.createElement("h1", null, "Buy in Bulk"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("p", null, "Pounds of select items")), /* @__PURE__ */ React.createElement("div", {
    className: "catagory-button"
  }, /* @__PURE__ */ React.createElement("div", {
    id: "dropdown-button",
    style: {transform: `rotate(${rotateBulk}deg)`}
  }, "V"))), renderBulkItems()), /* @__PURE__ */ React.createElement(MobileCart, null)));
}
function MenuItem({itemName, itemDescription, itemPrice, itemPicture}) {
  const [expandItemButton, setMenuItem] = useState(false);
  const renderItemPopUp = () => {
    if (expandItemButton === true) {
      return /* @__PURE__ */ React.createElement(ExpandMenuItem, {
        children: /* @__PURE__ */ React.createElement("div", {
          className: "close-this-item",
          onClick: () => setMenuItem(false)
        }, "X"),
        itemName,
        itemDescription,
        itemPrice,
        itemPicture,
        addToCart: /* @__PURE__ */ React.createElement("div", {
          id: "add-to-cart-close",
          onClick: () => setMenuItem(false)
        }, /* @__PURE__ */ React.createElement("h2", null, "Add to Cart"))
      });
    } else {
      return;
    }
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: "MenuItem"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "catagory-block"
  }, renderItemPopUp(), /* @__PURE__ */ React.createElement("div", {
    className: "catagory-title",
    onClick: () => setMenuItem(!expandItemButton)
  }, /* @__PURE__ */ React.createElement("h1", null, itemName), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("p", null, itemDescription)), /* @__PURE__ */ React.createElement("div", {
    className: "catagory-button"
  }, /* @__PURE__ */ React.createElement("div", {
    id: "price"
  }, "$", itemPrice))));
}
const ExpandMenuItem = ({itemName, itemDescription, itemPrice, itemPicture, children, addToCart}) => {
  const currentCart = useArr();
  const [orderCounter, setCounter] = useState(1);
  return /* @__PURE__ */ React.createElement("div", {
    className: "ExpandMenuItem"
  }, children, /* @__PURE__ */ React.createElement("div", {
    className: "item-picture",
    style: {backgroundImage: `url(${itemPicture})`}
  }), /* @__PURE__ */ React.createElement("div", {
    className: "item-name"
  }, /* @__PURE__ */ React.createElement("h2", null, itemName, " ", `$${itemPrice}`)), /* @__PURE__ */ React.createElement("div", {
    className: "item-description"
  }, /* @__PURE__ */ React.createElement("span", null, itemDescription)), /* @__PURE__ */ React.createElement("div", {
    className: "item-cart"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "minus-butt",
    onClick: () => setCounter(orderCounter - 1)
  }, "\u23E4"), /* @__PURE__ */ React.createElement("div", {
    className: "number-counter"
  }, orderCounter), /* @__PURE__ */ React.createElement("div", {
    className: "plus-butt",
    onClick: () => setCounter(orderCounter + 1)
  }, "+")), /* @__PURE__ */ React.createElement("div", {
    className: "add-to-cart",
    onClick: () => {
      const cartObject = {
        itemCount: orderCounter,
        item: itemName,
        itemCost: itemPrice,
        index: currentCart.length,
        key: currentCart.length
      };
      currentCart.push(cartObject);
    }
  }, addToCart));
};
