# Nu Leaf Meal Prep Company

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

## Unique actions

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
            }
            window.addEventListener('scroll', onScroll)
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
    import { Link, withRouter } from "react-router-dom";

    <React.Fragment>
        <div className="NavBar" style={{top:`${navbarPosition}`}}>
        <section className="links">
            <Link id="order" to="/order"><h1>Order</h1></Link>
            <Link id="story" to="/story"><h1>Story</h1></Link>
            <Link className="home" to="/"><h1>Home</h1></Link>
        </section>
        </div>
    </React.Fragment>
    ```

3. set up router in App.js

    ```javascript
    import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

     <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route path='/story' exact component={() => <Story />}/>
          <Route path='/' exact component={() => <Home />} />
          <Route path='/order' exact component={() => <Order />}/>
          <Story />
        </Switch>
      </Router>
    </div>
    ```

[x] make order page design
    [x] simple grid and flexbox work. Made the foot a shopping cart similar to the navbar set up. Will stay fixed no move. So i need to add functionality to the dropdown arrows, and add things to the cart. 
[x] add order page funtionality
    [x] starting with the dropdown arrows, i need to render in a component with a picture and a discription and a price.
    [x] first i made a data structure in menuDataBase.ts. Imported that into order.tsx. The database holds all menus, descriptions, titles and prices. 
    [x] build a MenuItem component in order.tsx. created 3 props to pass. 
    [x] with a map function, i render multiple Menuitem components into the dom. I pass the database info as props. 
    [x] made an onclick function that runs the map function. created a map function and useState hook for each menu catagory
[x] add click event to menu items. should make a component pop up.
    [x] making a absolute position component called expandmenuitem. This will be hidden until the click function is called. The menu item will pass its info to this component and display inside of box.
    [x] put the pictures in the public folder to call into the component. i put the path in the lib folder
    to assign each item with the picture url. this doesnt render on gh pages however. 
    [x] passed the close item button to the ExpandMenuItem as a prop. I passed an entire JSX object through
    as a friggin prop. called it children and placed it inside the component. this allowed the JSX object to access the proper hook. 
[x] Make MobileCart component function
    [x] make the height fixed, set translateY to -px. On cart click, reverse the translate to show cart. 
    fix cart button with justify start property. 
[x] populate with orders
    [x] create a global array to store objects in. When "add to cart" is clicked, we need to move the price, name, and count of items to the shopping cart component and multiply price and count. 
    [x] make a prop called addToCart. this will be a react node, JSX, with a click funtion that has acess to the "close expnadedItemButton" so when you click that the pop up closes.
    [x] put the {addToCart} prop into ExpandMenuItem component. Wrap that prop in a div that has a click event. 
    This can access the counter variable and used to add the item to the cart. Essesntially, on click, both events fire. One to add item to cart and one to close the pop up.
[] create a subtotal, tax, and total
