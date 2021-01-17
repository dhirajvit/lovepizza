# This application shows a list of pizza types to choose and add to cart.once a pizza is selected the cart is updated with the order summary.

Tech spec:
1. Webpack is chosen for bundling: Between CRA and Webpack, webpack is chosen because of flexibility and control to change. A readymade webpack template is used to start with. Webpack.test.config is created to support testing with mocha.
2. For Css, Preference was on styled-component but due to lack of time, simple css is chosen.
3. Testing is covered as much as possible. Nyc is configured but it takes bundled file for coverage report. This is an issue and needs to be fixed.
4. Instead of data from a file, a sample free api could have been consumed, required minimal addition of redux thunk. This would have given more visibility on useEffect consumption.
5. Below commands can be used to add to pipeline
To start app in dev mode: npm run start
To create package in production mode: npm run build. It will create minified file in dist folder. The content of dist folder can be put to cdn 
To test : npm run test

All the commands can be put in a bash script.# lovepizza
