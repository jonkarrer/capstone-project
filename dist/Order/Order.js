import React, {useState} from "../../_snowpack/pkg/react.js";
import "./Order.css.proxy.js";
import menuDataBase from "../lib/menuDataBase.js";
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
  return /* @__PURE__ */ React.createElement("div", {
    className: "Order"
  }, /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement("h1", {
    id: "heading"
  }, "This Weeks Menu")), /* @__PURE__ */ React.createElement("section", {
    className: "food-menu"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "catagory-block"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "catagory-title"
  }, /* @__PURE__ */ React.createElement("h1", null, "Breakfast"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("p", null, "Save the time for coffee.")), /* @__PURE__ */ React.createElement("div", {
    className: "catagory-button"
  }, /* @__PURE__ */ React.createElement("div", {
    id: "dropdown-button",
    onClick: () => setBreakfast(!breakfastButton)
  }, "V"))), renderBreakfastItems(), /* @__PURE__ */ React.createElement("div", {
    className: "catagory-block"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "catagory-title"
  }, /* @__PURE__ */ React.createElement("h1", null, "Vegan"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("p", null, "Life starts with plants.")), /* @__PURE__ */ React.createElement("div", {
    className: "catagory-button"
  }, /* @__PURE__ */ React.createElement("div", {
    id: "dropdown-button",
    onClick: () => setVegan(!veganButton)
  }, "V"))), renderVeganItems(), /* @__PURE__ */ React.createElement("div", {
    className: "catagory-block"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "catagory-title"
  }, /* @__PURE__ */ React.createElement("h1", null, "Low-Glycemic/Paleo"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("p", null, "Fuel the body with what it needs.")), /* @__PURE__ */ React.createElement("div", {
    className: "catagory-button"
  }, /* @__PURE__ */ React.createElement("div", {
    id: "dropdown-button",
    onClick: () => setPaleo(!paleoButton)
  }, "V"))), renderPaleoItems(), /* @__PURE__ */ React.createElement("div", {
    className: "catagory-block"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "catagory-title"
  }, /* @__PURE__ */ React.createElement("h1", null, "Buy in Bulk"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("p", null, "Pounds of select items")), /* @__PURE__ */ React.createElement("div", {
    className: "catagory-button"
  }, /* @__PURE__ */ React.createElement("div", {
    id: "dropdown-button",
    onClick: () => setBulk(!bulkButton)
  }, "V"))), renderBulkItems()), /* @__PURE__ */ React.createElement(MobileCart, null));
}
function MobileCart() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "MobileCart"
  }, /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement("div", {
    id: "cart-icon"
  }, /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "40",
    height: "40",
    viewBox: "0 0 24 24"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 \n              1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 \n              1.5-1.5c0-.828-.672-1.5-1.5-1.5zm1.336-5l1.977-7h-16.813l2.938 7h11.898zm4.969-10l-3.432 \n              12h-12.597l.839 2h13.239l3.474-12h1.929l.743-2h-4.195z"
  }))), /* @__PURE__ */ React.createElement("div", {
    className: "order-now"
  }, "Submit Order"))));
}
function MenuItem({itemName, itemDescription, itemPrice, itemPicture}) {
  const [expandItemButton, setMenuItem] = useState(false);
  const renderItemPopUp = () => {
    if (expandItemButton === true) {
      console.log("heyyy");
      return /* @__PURE__ */ React.createElement(ExpandMenuItem, {
        itemName,
        itemDescription,
        itemPrice,
        itemPicture
      });
    } else {
      return;
    }
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: "MenuItem",
    onClick: () => setMenuItem(!expandItemButton)
  }, /* @__PURE__ */ React.createElement("div", {
    className: "catagory-block"
  }, renderItemPopUp(), /* @__PURE__ */ React.createElement("div", {
    className: "catagory-title"
  }, /* @__PURE__ */ React.createElement("h1", null, itemName), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("p", null, itemDescription)), /* @__PURE__ */ React.createElement("div", {
    className: "catagory-button"
  }, /* @__PURE__ */ React.createElement("div", {
    id: "price"
  }, itemPrice))));
}
function ExpandMenuItem({itemName, itemDescription, itemPrice, itemPicture}) {
  return /* @__PURE__ */ React.createElement("div", {
    className: "ExpandMenuItem"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "item-picture",
    style: {backgroundImage: `url(${itemPicture})`}
  }), /* @__PURE__ */ React.createElement("div", {
    className: "item-name"
  }, itemName, " ", itemPrice), /* @__PURE__ */ React.createElement("div", {
    className: "item-description"
  }, itemDescription), /* @__PURE__ */ React.createElement("div", {
    className: "item-cart"
  }, "+ or minus"));
}
