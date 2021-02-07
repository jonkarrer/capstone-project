import React from "../_snowpack/pkg/react.js";
import "./App.css.proxy.js";
import {BrowserRouter as Router, Route, Switch} from "../_snowpack/pkg/react-router-dom.js";
import Navbar from "./Navbar/Navbar.js";
import Home from "./Home/Home.js";
import Story from "./Story/Story.js";
import Order from "./Order/Order.js";
function App({}) {
  return /* @__PURE__ */ React.createElement("div", {
    className: "App"
  }, /* @__PURE__ */ React.createElement(Router, null, /* @__PURE__ */ React.createElement(Navbar, null), /* @__PURE__ */ React.createElement(Switch, null, /* @__PURE__ */ React.createElement(Route, {
    path: "http://jonkarrer.github.io/capstone-project/",
    exact: true,
    component: () => /* @__PURE__ */ React.createElement(Home, null)
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "http://jonkarrer.github.io/capstone-project/story",
    exact: true,
    component: () => /* @__PURE__ */ React.createElement(Story, null)
  }), /* @__PURE__ */ React.createElement(Route, {
    path: "http://jonkarrer.github.io/capstone-project/order",
    exact: true,
    component: () => /* @__PURE__ */ React.createElement(Order, null)
  }), /* @__PURE__ */ React.createElement(Story, null))));
}
export default App;
