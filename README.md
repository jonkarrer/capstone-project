# My Meal Prep Company

## Create react with snopack development

    1. install snowpack with typescript template
    ```bash
    npx create-snowpack-app react-snowpack --template @snowpack/app-template-react-typescript
    ```

## Install git-hub, gh-pages, webpack

    set git repo normally
    install gh-pages plugin
    
    ```bash
    npm install gh-pages
    ```
    4. check dependencies in package.json. "gh-pages" should appear
    5. instal webpack plugin
    ```bash
    npm install --save-dev @snowpack/plugin-webpack
    ```
    
## Adjust package.json
    6. add "homepage": "http://jonkarrer.github.io/capstone-project", above scripts in package.json
    7. add  "scripts": {
          "predeploy": "npx snowpack build",
          "deploy": "gh-pages -d build",
    8.  in snowpack config, build options, 
            add baseUrl: '/capstone-project'.
      
      [x] in snowpack-config, add '@snowpack/plugin-webpack' to plugins
    [x] Double check all dependencies are there. 
    [x] use "npm run deploy" to push project to gh-pages for test.
[x] Set up react production patters
    [x] delete boilerplate
    [x] move index.css to public, clean html and other files. 
[x] In App.tsx, begin planning build
    [x] Template a home component for home page
    [x] Template navbar component for header
    [x] Template body component for home
[x] Create Home page component
    [x] import navbar and body
[x] create navbar component
    [x] use flexbox on Navabar wrapper, center section
    [x] use grid on section, auto auto, seperates links
    [x] color background, set margins, size for mobile first.
    [x] add scroll up disapear effect
        [x] bring in useState, useEffect. set 2 states, the state of the 
            current windowY position, 0, and the current navebar position
            '0'.
        [x] set a reactive style onto .Navbar with 
            style={{top: ${useStateNavbarVariable}}}. 
        [x] put a window.scroll event into the useEffect hook. Compare 
            the previous postion to the current one, assign the navbar
            state hook accordingly. Make sure to remove listerner, and use the array [] at the end of use effect. Could maybe make a custom hook here;
[x] create homepage
[x] instal react-router-dom
[x] make story page and set up routes with router
    [] change the navbar to include a home button when not on home page. 
[x] re installed react dom with npm install --save because its differemt. Had to remove it from devDependent in package.json so snowpack would work?
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
