// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".MobileBody {\n  display: grid;\n  grid-template-rows: auto auto auto auto;\n  width: 100vw;\n  font-family:sans-serif;\n}\n#image-block {\n  background-size: cover;\n  background-position: center;\n  height: 100vh;\n  background-blend-mode: color-dodge;\n}\n.overlay {\n  background: hsla(2, 10%, 50%, 0.5);\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n#image-block img {\n width: 100%;\n height: auto;\n}\n.MobileBody section {\n  padding: 20px;\n  letter-spacing: 2px;\n}\n.MobileBody section h1 {\n  font-size: 3.5em;\n  text-shadow: grey 0px 4px;\n  color: white;\n}\n.MobileBody section h2 {\n  font-size: 3.5em;\n  text-shadow: grey 0px 4px;\n}\n.MobileBody section p {\n  text-align: center;\n  width: 80%;\n  margin: 0 auto;\n  padding: 20px;\n  font-size: 1.5em;\n  font-weight: 300;\n}\n.MobileBody section button {\n  padding: 10px;\n  width: 30%;\n  min-width: 100px;\n  max-width: 250px;\n  height: 50px;\n  font-size: 1em;\n  margin: 10px;\n}\n.MobileBody section:nth-child(even) {\n  background: #C6DE75;\n}\n.MobileBody section:nth-child(odd) {\n  background: gainsboro;\n}\n.block h1 {\n  font-size: 40px;\n}\n";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}