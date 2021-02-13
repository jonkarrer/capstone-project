// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".FAQs {\n  margin-top: 55px;\n  width: 100vw;\n}\n.FAQs h1 {\n  text-align: center;\n  padding-top: 40px;\n  padding-bottom: 40px;\n  margin: 30px;\n  border-bottom: #C6DE75 solid thick;\n}\n.FAQs h2 {\n  border-bottom: gray solid thin;\n  margin-bottom: 10px;\n}\n.questions-container-grid {\n  height: 100%;\n  width: 100%;\n  display: grid;\n  grid-template-rows: repeat(7, auto);\n}\n.grid-row {\n  margin: 20px;\n  text-align: left;\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}