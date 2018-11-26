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
* jQuery (you can use ```$()``` and ```jQuery()``` globally)

*Note: if you want to disable these some library see [FAQ](https://github.com/dmitriyaa/webpack-project-backbone#faq)*

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
* Launch webpack server (localhost:5000) and start developing in ```src``` folder.
```
npm run start
```
* Oce you are ready to deploy the project on real server.
```
npm run build
```

### Use index.php with php server
* Change ```index.html``` to ```index.php``` in ```src``` folder.
* Update ```webpack.prod.js``` file to:
```
new HtmlWebpackPlugin({
  filename: 'index.php',
  template: 'src/index.php'
}),
```
* Run the webpack server. It serve assets on localhost:9000 and stream them to your php server (like localhost:8080).
```
npm run server
```
* Once you are ready to deploy the project on real server.
 ```
 npm run build
 ```

## FAQ
### How to add Google Fonts
Use the import command in css/scss file.
Example: @import url("https://fonts.googleapis.com/css?family=Open+Sans:400,600,700");

### How to disable Twitter Bootstrap
Simply remove bootstrap related imports from styles.scss
// Bootstrap
@import "~bootstrap/scss/functions";
@import "~bootstrap/scss/variables";
...

### How to disable jQuery
In all webpack configuration files [```webpack.prod.js```, ```webpack.server-for-html.js```, ```webpack.server-for.php.js```] remove the following lines of code:
```
new webpack.ProvidePlugin({
  $: 'jquery',
  jQuery: 'jquery'
})
```
