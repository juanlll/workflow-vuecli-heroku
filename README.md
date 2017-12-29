# webapp

> es una app de vue cli de prueba

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```
##Step 0 How to deploy a Vue.js app to Heroku
#en la carpeta raiz -> crear archivo Procfile
```
web: npm start
```
##Step 1. Add these postinstall and start hooks to your package.json scripts section:

"postinstall": "npm run build",
"start": "node server.js"
##Step 2. Create a server.js file in the root of your app:
```
var express = require('express')
var path = require('path')
var serveStatic = require('serve-static')

var app = express()
app.use(serveStatic(path.join(__dirname, 'dist')))

var port = process.env.PORT || 5000
app.listen(port)
console.log('server started ' + port)
```
##Step 3. Configure Heroku to install dev dependencies:

#This step is required to get the necessary packages installed to run and serve the build on Heroku, since all the required packages were placed into devDependencies when the app was generated.
```
$ heroku config:set NPM_CONFIG_PRODUCTION=false
```

