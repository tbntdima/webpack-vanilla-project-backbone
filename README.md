# Webpack based project backbone
Simple webpack base project backbone for small projects.
Designed to work with php server

## Features:
* ES6 -> ES5 (babel) -> Minimized
* SCSS -> CSS -> Prefixed -> Minimized
* Images -> Minimized
* Live Reaload + HMR -> stream to Apache

## Libraries:
* Twitter Bootstrap mixins + utilities + grid + reboot

## Usage:
### If you want to use index.html without php server support:
* Update webpack.prod.js file:
```
new HtmlWebpackPlugin({
  filename: 'index.html',
  template: 'src/index.html'
}),
```
* Change index.php to index.html in src folder
* use: ```npm run start``` for webpack server
* use: ```npm run build``` for production

### If you want to use index.php with php server
* use ```npm run server``` to run the webpack server. It will only server assets on localhost:9000. To run the website itself run your apache server.
* use ```npm run build``` for production
