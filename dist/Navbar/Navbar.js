import React, {useState, useEffect} from "../../_snowpack/pkg/react.js";
import {Link, withRouter} from "../../_snowpack/pkg/react-router-dom.js";
import "./Navbar.css.proxy.js";
function Navbar() {
  const [navbarPosition, setNavbar] = useState("0");
  const [scrollPosition, setPosition] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const currentPosition = window.pageYOffset;
      if (scrollPosition > currentPosition || scrollPosition < 10) {
        setNavbar("0");
      } else {
        setNavbar("-100px");
      }
      setPosition(currentPosition);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollPosition]);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", {
    className: "NavBar",
    style: {top: `${navbarPosition}`}
  }, /* @__PURE__ */ React.createElement("section", {
    className: "links"
  }, /* @__PURE__ */ React.createElement(Link, {
    id: "order",
    to: "/order"
  }, /* @__PURE__ */ React.createElement("h1", null, "Order")), /* @__PURE__ */ React.createElement(Link, {
    id: "story",
    to: "/story"
  }, /* @__PURE__ */ React.createElement("h1", null, "Story")), /* @__PURE__ */ React.createElement(Link, {
    className: "home",
    to: "/"
  }, /* @__PURE__ */ React.createElement("h1", null, "Home")))));
}
export default withRouter(Navbar);