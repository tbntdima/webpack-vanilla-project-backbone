# Webpack based project backbone


## Backbone provides the following features:
* SCSS -> CSS -> Prefixing -> Minimizing
* ES6 -> ES5 (babel) -> Minimizing
* Live Reaload + HRML -> stream to Apache

## Includes:
* Twitter Bootstrap mixins + utilities + grid + reboot

## Notes:
* By default an index file has 'php' extension, if you want to change it to 'html',
You can do it in webpack.dev.js and webpack.prod.js files here:
```
new HtmlWebpackPlugin({
  filename: 'index.php',
  template: 'src/index.php'
}),
```
