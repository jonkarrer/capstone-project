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
            state hook accordingly. 
