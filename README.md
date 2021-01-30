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
[] In App.tsx, begin planning build
