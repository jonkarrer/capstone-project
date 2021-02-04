// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".Story {\n  display: grid;\n  grid-template-rows: auto auto auto auto;\n  width: 100vw;\n  font-family:sans-serif;\n}\n.Story #image-block {\n  background-size: cover;\n  background-position: center;\n  height: 100vh;\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.Story .overlay {\n  background: hsla(2, 10%, 50%, 0.5);\n  width: 50%;\n  height: 50%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.Story section:nth-child(even) {\n  background: #C6DE75;\n}\n.Story section:nth-child(odd) {\n  background: gainsboro;\n}\n.Story h1 {\n  font-size: 5.5em;\n  text-shadow: grey 0px 4px;\n  color: white;\n}\n.Story h2 {\n  font-size: 5.5em;\n  text-shadow: grey 0px 4px;\n}\n.Story p {\n  text-align: center;\n  width: 80%;\n  margin: 0 auto;\n  padding-top: 40px;\n  padding-bottom: 40px;\n  font-size: 1.5em;\n  font-weight: 300;\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}