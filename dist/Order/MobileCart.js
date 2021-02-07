import React, {useState} from "../../_snowpack/pkg/react.js";
import {useArr, updateSubTotal, useSubTotal} from "./TotalContext.js";
export default function MobileCart() {
  const [cartState, setCartState] = useState("toggle-off");
  const toggleFunction = () => {
    if (cartState === "toggle-off") {
      setCartState("toggle-on");
    } else {
      setCartState("toggle-off");
    }
  };
  return /* @__PURE__ */ React.createElement("div", {
    className: "MobileCart",
    id: cartState
  }, /* @__PURE__ */ React.createElement("section", {
    onClick: updateSubTotal()
  }, /* @__PURE__ */ React.createElement("div", {
    id: "cart-icon",
    onClick: toggleFunction
  }, /* @__PURE__ */ React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "40",
    height: "40",
    viewBox: "0 0 24 24"
  }, /* @__PURE__ */ React.createElement("path", {
    d: "M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 \n              1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 \n              1.5-1.5c0-.828-.672-1.5-1.5-1.5zm1.336-5l1.977-7h-16.813l2.938 7h11.898zm4.969-10l-3.432 \n              12h-12.597l.839 2h13.239l3.474-12h1.929l.743-2h-4.195z"
  })))), /* @__PURE__ */ React.createElement("div", {
    className: "itemized-list"
  }, renderItemizedList(), /* @__PURE__ */ React.createElement(SubTotal, null)), /* @__PURE__ */ React.createElement("div", {
    className: "order-now"
  }, "Submit Order"));
}
const ItemizedList = ({index, itemCount, item, itemCost}) => {
  const [currentCount, setCount] = useState(itemCount);
  const currentCart = useArr();
  const updateTotal = updateSubTotal();
  function subCount() {
    setCount(currentCount - 1);
    currentCart[index].itemCount = currentCount - 1;
  }
  function addCount() {
    setCount(currentCount + 1);
    currentCart[index].itemCount = currentCount + 1;
  }
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "item-line"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "item-count"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "minus-butt",
    onClick: updateTotal
  }, /* @__PURE__ */ React.createElement("div", {
    onClick: subCount,
    id: "cart-sub-butt"
  }, "\u23E4")), /* @__PURE__ */ React.createElement("div", null, "x", currentCount), /* @__PURE__ */ React.createElement("div", {
    className: "plus-butt",
    onClick: updateTotal
  }, /* @__PURE__ */ React.createElement("div", {
    onClick: addCount,
    id: "cart-add-butt"
  }, "+"))), /* @__PURE__ */ React.createElement("div", {
    className: "item"
  }, item), /* @__PURE__ */ React.createElement("div", {
    className: "item-cost"
  }, "$", itemCost * currentCount)));
};
const renderItemizedList = () => {
  const currentCart = useArr();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, currentCart.map((object) => /* @__PURE__ */ React.createElement(ItemizedList, {
    index: object.index,
    itemCount: object.itemCount,
    item: object.item,
    itemCost: object.itemCost
  })));
};
const SubTotal = () => {
  const currentSubTotal = useSubTotal();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "subtotal"
  }, "SubTotal: $ ", currentSubTotal), /* @__PURE__ */ React.createElement("div", {
    className: "tax"
  }, "Tax : $ ", (currentSubTotal * 0.1).toFixed(2)), /* @__PURE__ */ React.createElement("div", {
    className: "total"
  }, "Total : $ ", (currentSubTotal * 0.1 + currentSubTotal).toFixed(2)), "(Click Submit Order to continue)");
};
