// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".NavBar {\n  background-color: #728A45;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100vw;\n  height: 80px;\n  position: fixed;\n  top: 0;\n  transition: top .3s;\n}\n.NavBar section {\n  background: #ECE7D9;\n  display: grid;\n  grid-template-columns: auto auto auto;\n  border-radius: 2rem;\n  margin: 10px;\n  padding: 10px;\n  width: 100%;\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}