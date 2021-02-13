import React from "../_snowpack/pkg/react.js";
import "./App.css.proxy.js";
import {BrowserRouter as Router, Route, Switch} from "../_snowpack/pkg/react-router-dom.js";
import Navbar from "./Navbar/Navbar.js";
import Home from "./Home/Home.js";
import Order from "./Order/Order.js";
import FAQs from "./FAQs/FAQs.js";
function App({}) {
  return /* @__PURE__ */ React.createElement("div", {
    className: "App"
  }, /* @__PURE__ */ React.createElement(Router, null, /* @__PURE__ */ React.createElement(Navbar, null), /* @__PURE__ */ React.createElement(Switch, null, /* @__PURE__ */ React.createElement(Route, {
    path: "https://jonkarrer.github.io/capstone-project",
    exact: true,
    component: () => /* @__PURE__ */ React.createElement(Home, null)
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "https://jonkarrer.github.io/capstone-project/order",
    exact: true,
    component: () => /* @__PURE__ */ React.createElement(Order, null)
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "https://jonkarrer.github.io/capstone-project/faqs",
    exact: true,
    component: () => /* @__PURE__ */ React.createElement(FAQs, null)
  }))));
}
export default App;