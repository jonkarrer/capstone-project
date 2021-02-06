import React, {useContext, useState} from "../../_snowpack/pkg/react.js";
const TotalContext = React.createContext();
const updateContext = React.createContext();
const subTotalContext = React.createContext();
export function useArr() {
  return useContext(TotalContext);
}
export function useSubTotal() {
  return useContext(subTotalContext);
}
export function updateSubTotal() {
  return useContext(updateContext);
}
const shopCartItems = [];
export function TotalProvider({children}) {
  const [subTotal, setSubTotal] = useState();
  const changeSubTotal = () => {
    setSubTotal(shopCartItems.reduce(function(a, b) {
      return a + b.itemCost * b.itemCount;
    }, 0));
  };
  return /* @__PURE__ */ React.createElement(TotalContext.Provider, {
    value: shopCartItems
  }, /* @__PURE__ */ React.createElement(subTotalContext.Provider, {
    value: subTotal
  }, /* @__PURE__ */ React.createElement(updateContext.Provider, {
    value: changeSubTotal
  }, children)));
}
