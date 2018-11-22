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

### Requirements:
* Nodejs 10

## Usage:
```cd path_to_webpack-project-backbone```
```npm install```

### If you want to use index.html without php server support:
* Change index.php to index.html in src folder.
* Update webpack.prod.js file to:
```
new HtmlWebpackPlugin({
  filename: 'index.html',
  template: 'src/index.html'
}),
```
* Use: ```npm run start``` to launch webpack server (localhost:5000) and start developing.
* Use: ```npm run build``` once you are ready to deploy the project on real server.

### If you want to use index.php with php server
* Use ```npm run server``` to run the webpack server. It serve assets on localhost:9000 and stream them to your php server (like localhost:8080).
* Use ```npm run build``` once you are ready to deploy the project on real server.
