import React from "../../_snowpack/pkg/react.js";
import "./Story.css.proxy.js";
import background from "./backgroundstory.jpg.proxy.js";
import cooking from "./cooking.jpg.proxy.js";
import hefty from "./hefty.jpg.proxy.js";
import dog from "./new.jpg.proxy.js";
export default function Story() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "Story"
  }, /* @__PURE__ */ React.createElement("div", {
    id: "image-block",
    style: {backgroundImage: `url(${background})`}
  }, /* @__PURE__ */ React.createElement("div", {
    className: "overlay"
  }, /* @__PURE__ */ React.createElement("h1", null, "Our"), /* @__PURE__ */ React.createElement("h2", null, "Story"))), /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement("p", null, 'Looking down at the scale in 2015 I remember thinking, "I am too damn big". I had been "big" and trying to lose weight since 2010. The mirror was always there to remind me, too. Nothing wrong with being who I am, however, I knew the consequences of being large. I had all the motivation to drop the fat but none of the knowledge or support to achieve the goals.'), /* @__PURE__ */ React.createElement("div", {
    id: "image-block",
    style: {backgroundImage: `url(${hefty})`}
  })), /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement("p", null, `That's when I discovered "meal prep". Fresh food meticulously cooked and weighed every Sunday to meet my macros. I made myself pre portioned food for 6 months and the results were evident. 50 pounds of fat gone and 12 pounds of lean mass gained. Success! Today I have lost even more by fasting and eating plant based foods.`), /* @__PURE__ */ React.createElement("div", {
    id: "image-block",
    style: {backgroundImage: `url(${dog})`}
  })), /* @__PURE__ */ React.createElement("section", null, /* @__PURE__ */ React.createElement("p", null, "Sadly, when I looked for a company to buy local meal prep from the choices were overpriced, tiny portioned, and lacked flavor. It was nothing like the food I was making. I wanted meal prep to be accessible, delicious, and portioned correctly. I created Feed The Beast. I have made a several changes over the years to reflect how I have matured as a chef, diet enthusiast, and business owner. Hope you enjoy our new plant based and farm to table direction with Nu Leaf!"), /* @__PURE__ */ React.createElement("div", {
    id: "image-block",
    style: {backgroundImage: `url(${cooking})`}
  })));
}
