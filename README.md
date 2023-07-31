# React Progressive Web App

```bash
$ mkdir react-pwa
$ cd react-pwa
$ npm init -y
$ mkdir public
$ touch public/index.html
$ mkdir src
$ touch src/index.js
$ touch src/App.js
$ touch webpack.config.js
$ touch README.md
$ touch .gitignore
$ touch .babelrc
$ touch .eslintrc

$ npm i react react-dom react-router-dom
$ npm i -D webpack webpack-cli webpack-dev-server html-webpack-plugin
$ npm i -D babel-loader @babel/core @babel/preset-env @babel/preset-react @babel/plugin-proposal-class-properties
$ npm i -D style-loader css-loader sass-loader sass file-loader url-loader
$ npm i -D eslint eslint-plugin-react prettier
$ npm i -D serve @svgr/cli dot-env dotenv-webpack 
$ npm i -D workbox-webpack-plugin copy-webpack-plugin
$ npm i workbox-window workbox-core workbox-precaching workbox-routing workbox-strategies workbox-expiration

```

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="theme-color" media="(prefers-color-scheme: light)" content="#61dafb" />
    <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#282c34" />
    <meta name="mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <!-- <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" /> -->
    <meta name="apple-mobile-web-app-status-bar-style" content="#61dafb" media="(prefers-color-scheme: light)" />
    <meta name="apple-mobile-web-app-status-bar-style" content="#282c34" media="(prefers-color-scheme: dark)" />
    <meta name="apple-mobile-web-app-title" content="React PWA" />
    <meta name="msapplication-TileImage" content="./assets/logo_x512.png" />
    <!-- <meta name="msapplication-TileColor" content="#ffffff" /> -->
    <meta name="msapplication-TileColor" content="#61dafb" media="(prefers-color-scheme: light)" />
    <meta name="msapplication-TileColor" content="#282c34" media="(prefers-color-scheme: dark)" />
    <meta name="msapplication-tap-highlight" content="no" />
    <!-- Search Engine -->
    <meta name="title" content="React Progressive Web App" />
    <meta name="description" content="React Progressive Web App" />
    <meta name="keywords" content="Progressive Web App, PWA, SPA" />
    <meta name="image" content="./assets/tablet.png" />
    <link rel="icon" type="image/x-icon" href="./assets/favicon.ico" />
    <link rel="apple-touch-icon" href="./assets/logo192.png" />
    <link rel="mask-icon" href="./assets/logo512.png" color="#282c34" />
    <link rel="manifest" href="./manifest.json" />
    <title>React Progressive Web App</title>
    <!--<title>React Progressive Web App</title>-->
  <body>
    <div id="root"></div>
  </body>
</html>

```

```javascript
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles/index.scss";

import registerServiceWorker from "./registerServiceWorker";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

registerServiceWorker()
```

```javascript
import React from "react";

function App() {
  return;
  <div>
    <h1>Hello, React Progressive Web App</h1>;
  </div>;
}

export default App;
```

```json
"scripts": {
  "clean": "rm -fr dist",
  "start": "webpack serve --hot --mode development",
  "webpack-dev-server": "webpack-dev-server",
  "build-dev": "webpack serve --hot --mode=development",
  "build-prod": "NODE_ENV=production webpack --mode=development",
  "predeploy": "npm run build-prod",
  "deploy": "gh-pages -d dist && npm run clean",
  "serve": "npm run build-prod && serve -s dist",
  "svg": "svgr -d src/components/icons src/components/icons/svgs"
}
```

.babelrc
```json
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "modules": false,
        "targets": {
          browsers: [
            "last 2 Chrome versions",
            "last 2 Firefox versions",
            "last 2 Safari versions",
            "last 2 iOS versions",
            "last 1 Android version",
            "last 1 ChromeAndroid version",
            "ie 11",
          ],
        },
      },
    ],
    "@babel/preset-react",
  ],
  "plugins": [
    "@babel/plugin-proposal-class-properties",
  ]
}
```

.eslintrc
```json
{
  "rules": {},
  "env": {
    "es6": true,
    "browser": true
  },
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "extends": ["eslint:recommended", "plugin:prettier/recommended"],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly"
  },
  "plugins": ["react"]
}
```