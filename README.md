# Nu Leaf Meal Prep Company

## Summary

This is a mock web-app that I drafted to run my business. This READ.Md is used to describe the process, and some of the unique quirks I encountered for learning purposes. I used this project to enhance my React.js, Typescript, and Snowpack understanding, as well as having a functional website.

## Create react with snopack development

1. install snowpack with typescript template

   ```bash
   npx create-snowpack-app react-snowpack --template @snowpack/app-template-react-typescript
   ```

## Install git-hub, gh-pages, webpack

1. Set git-hub repository normally
2. Install gh-pages plugin

   ```bash
   npm install gh-pages
   ```

3. Install webpack plugin

   ```bash
   npm install --save-dev @snowpack/plugin-webpack
   ```

## Adjust package.json

1. check dependencies in package.json. "gh-pages" should appear
2. in global package.json add this line

   ```javascript
   "homepage": "http://jonkarrer.github.io/capstone-project"
   ```

3. next add

   ```javascript
   "scripts": {
         "predeploy": "npx snowpack build",
         "deploy": "gh-pages -d build"
   }
   ```

## Adjust snowpack config

1. in snowpack config add

   ```javascript
       plugins: [
           '@snowpack/plugin-webpack'
       ],
       buildOptions: [
           baseUrl: '/capstone-project'.
       ]
   ```

2. Double check for all all dependencies.

## Deploy app to gh-pages

```bash
npm run deploy
```

## Unique building points

### Scroll up navbar effect in NavBar.tsx

1. What happens on scroll

   ```javascript
   const [navbarPosition, setNavbar] = useState('0');
   const [scrollPosition, setPosition] = useState(0);
   useEffect(() => {
     const onScroll = () => {
       const currentPosition = window.pageYOffset;
       if (scrollPosition > currentPosition || scrollPosition < 10) {
         setNavbar('0');
       } else {
         setNavbar('-100px');
       }
       setPosition(currentPosition);
     };
     window.addEventListener('scroll', onScroll);
     return () => window.removeEventListener('scroll', onScroll);
   }, [scrollPosition]);
   ```

2. Make a reactive style onto Navbar.tsx with

   ```javascript
   style={{top: ${useStateNavbarVariable}}}
   ```

### Routing to pages

1. install react-router-dom

   ```bash
   npm install --save react-router-dom
   ```

2. set up router in Navbar.tsx

   ```javascript
   import { Link, withRouter } from 'react-router-dom';

   <React.Fragment>
     <div className="NavBar" style={{ top: `${navbarPosition}` }}>
       <section className="links">
         <Link id="order" to="/order">
           <h1>Order</h1>
         </Link>
         <Link id="story" to="/story">
           <h1>Story</h1>
         </Link>
         <Link className="home" to="/">
           <h1>Home</h1>
         </Link>
       </section>
     </div>
   </React.Fragment>;
   ```

3. set up router in App.js

   ```javascript
   import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

   <div className="App">
     <Router>
       <Navbar />
       <Switch>
         <Route path="/story" exact component={() => <Story />} />
         <Route path="/" exact component={() => <Home />} />
         <Route path="/order" exact component={() => <Order />} />
         <Story />
       </Switch>
     </Router>
   </div>;
   ```

## Make a library that stores a menu

1. The library is in ./src/lib/menuDataBase.ts
2. With a map function, I render multiple Menuitem components into the dom. I pass the database info as props.

   ```javascript
   <React.Fragment>
     {firstMenu.bulk.map((object) => (
       <MenuItem
         itemName={object.name}
         itemDescription={object.description}
         itemPrice={object.price}
         itemPicture={object.picture}
       />
     ))}
   </React.Fragment>
   ```

### Had to put picrues in a public asset folder for development

1. Put the pictures in the public folder to call into the component. I put the path in the library folder
   to assign each item with a picture url. This doesnt render on gh pages however.

### Make Cart component dynamics

1. Make the height fixed, set translateY to -px. On cart click, reverse the translate to show cart.
   fix cart button with justify start property.

### Populate cart with orders

1. Created a global array to store objects in. When "Add to Cart" is clicked, move the price, name, and count of items to the shopping cart component and multiply price and count.
2. In ExpandMenuItems component, there are 2 critical click functions. One is a JSX prop!

   ```javascript
   <div
     className="add-to-cart"
     onClick={() => {
       const cartObject = {
         //Package this order, push to TotalContext.tsx variable.
         itemCount: orderCounter,
         item: itemName,
         itemCost: itemPrice,
         index: currentCart.length,
         key: currentCart.length,
       };
       currentCart.push(cartObject);
     }}
   >
     {addToCart}
   </div>
   ```

3. addToCart prop comes from

   ```javascript
   function MenuItem({itemName, itemDescription, itemPrice, itemPicture}: MenuProps) {
       const [expandItemButton, setMenuItem] = useState(false);
       const renderItemPopUp = () => {
           if (expandItemButton === true) {
           return(
               <ExpandMenuItem
               children={<div className="close-this-item" onClick={() => setMenuItem(false)}>X</div>}
               itemName={itemName}
               itemDescription={itemDescription}
               itemPrice={itemPrice}
               itemPicture={itemPicture}
               addToCart= {<div id="add-to-cart-close" onClick={() => setMenuItem(false)}><h2>Add to Cart</h2></div>}
               />
           )
   ```

### Create a subtotal, tax, and total with Context API

1. Created a new file to hold the context api framework. TotalContext.tsx
2. The subtotal is calculated by summing all item's totals. The totals need to dynamically change with the add and subtract buttons. I use a reduce function on that global shopping cart array to set subtotal.
3. This Context API allows me to update the state of the subtotal. I pass the global shopcartarr, the subtotal useState variable, and the function to update the subtotal usestate.

## Fix routing issue on page load

1. in snowpack.config, look at the baseUrl.

   ```javascript
   buildOptions: {
     baseUrl: '/capstone-project';
   }
   ```

2. This needs to be the home route in react-router component. This is only necessary post deployment. GH pages needs this to be set as follows...

   ```javascript
   <Switch>
     <Route path="/capstone-project" exact component={() => <Home />} />
     <Route path="/capstone-project/order" exact component={() => <Order />} />
     <Route path="/capstone-project/faqs" exact component={() => <FAQs />} />
   </Switch>
   ```

## Up Next

1. Add more design to the Home page.
2. Create the back-end
