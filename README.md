#My Meal Prep Company

[x] Create react with snopack development. 
    [x] install snowpack with typescript template
    [x] set git repo
    [x] install gh-pages plugin
      [x] add "homepage": "http://jonkarrer.github.io/capstone-project",in package.json
      [x] add  "scripts": {
          "predeploy": "npx snowpack build",
          "deploy": "gh-pages -d build",
      [x]  in snowpack config, build options, 
            add baseUrl: '/capstone-project'.
    [x] install webpack plugin
      [x] npm install --save-dev @snowpack/plugin-webpack
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
    [x] made an onclick function that runs the map function.

