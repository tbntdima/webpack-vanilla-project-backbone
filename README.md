# Webpack based project backbone
Simple webpack based project backbone for small projects.
Designed to work with php server.

## Features:
* ES6 -> ES5 (babel) -> Minimized
* SCSS -> CSS -> Prefixed -> Minimized
* Images -> Minimized
* Live Reaload + HMR -> stream to Apache

## Libraries:
* Twitter Bootstrap mixins + utilities + grid + reboot

## Requirements:
* Nodejs 10

## Usage:
First of all download all the dependencies:
```
cd path_to_webpack-project-backbone
```
```
npm install
```
Then you have two options:
### Use index.html without php server support:
* Change index.php to index.html in ```src``` folder.
* Update webpack.prod.js file to:
```
new HtmlWebpackPlugin({
  filename: 'index.html',
  template: 'src/index.html'
}),
```
* Launch webpack server (localhost:5000) and start developing in ```src``` folder.
```
npm run start
```
* Oce you are ready to deploy the project on real server.
```
npm run build
```

### Use index.php with php server
* Run the webpack server. It serve assets on localhost:9000 and stream them to your php server (like localhost:8080).
```
npm run server
```
* Once you are ready to deploy the project on real server.
 ```
 npm run build
 ```
