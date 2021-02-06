import React, {useState} from "../../_snowpack/pkg/react.js";
import MobileCart, {ExpandMenuItem} from "./MobileCart/MobileCart.js";
import "./Order.css.proxy.js";
import menuDataBase from "../lib/menuDataBase.js";
import {TotalProvider} from "./TotalContext.js";
const firstMenu = menuDataBase["menuOne"];
export default function Order() {
  const [breakfastButton, setBreakfast] = useState(false);
  const [veganButton, setVegan] = useState(false);
  const [paleoButton, setPaleo] = useState(false);
  const [bulkButton, setBulk] = useState(false);
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
    onClick: () => setBreakfast(!breakfastButton)
  }, /* @__PURE__ */ React.createElement("div", {
    className: "catagory-title"
  }, /* @__PURE__ */ React.createElement("h1", null, "Breakfast"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("p", null, "Save the time for coffee.")), /* @__PURE__ */ React.createElement("div", {
    className: "catagory-button"
  }, /* @__PURE__ */ React.createElement("div", {
    id: "dropdown-button"
  }, "V"))), renderBreakfastItems(), /* @__PURE__ */ React.createElement("div", {
    className: "catagory-block",
    onClick: () => setVegan(!veganButton)
  }, /* @__PURE__ */ React.createElement("div", {
    className: "catagory-title"
  }, /* @__PURE__ */ React.createElement("h1", null, "Vegan"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("p", null, "Life starts with plants.")), /* @__PURE__ */ React.createElement("div", {
    className: "catagory-button"
  }, /* @__PURE__ */ React.createElement("div", {
    id: "dropdown-button"
  }, "V"))), renderVeganItems(), /* @__PURE__ */ React.createElement("div", {
    className: "catagory-block",
    onClick: () => setPaleo(!paleoButton)
  }, /* @__PURE__ */ React.createElement("div", {
    className: "catagory-title"
  }, /* @__PURE__ */ React.createElement("h1", null, "Low-Glycemic/Paleo"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("p", null, "Fuel the body with what it needs.")), /* @__PURE__ */ React.createElement("div", {
    className: "catagory-button"
  }, /* @__PURE__ */ React.createElement("div", {
    id: "dropdown-button"
  }, "V"))), renderPaleoItems(), /* @__PURE__ */ React.createElement("div", {
    className: "catagory-block",
    onClick: () => setBulk(!bulkButton)
  }, /* @__PURE__ */ React.createElement("div", {
    className: "catagory-title"
  }, /* @__PURE__ */ React.createElement("h1", null, "Buy in Bulk"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("p", null, "Pounds of select items")), /* @__PURE__ */ React.createElement("div", {
    className: "catagory-button"
  }, /* @__PURE__ */ React.createElement("div", {
    id: "dropdown-button"
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
