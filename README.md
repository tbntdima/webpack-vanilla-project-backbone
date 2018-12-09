# Webpack based project backbone
Simple webpack based project backbone for small projects.
Designed to work both with plain html and width php server.

## Features:
* ES6 -> ES5 (babel) -> Minimized
* SCSS -> CSS -> Prefixed -> Minimized
* Images -> Minimized
* Live Reaload + HMR -> stream to Apache

## Libraries:
* Twitter Bootstrap mixins + utilities + grid + reboot
* jQuery (you can use ```$()``` and ```jQuery()``` globally) - disabled by default
* GreenSock tools
* ScrollMagic

*Note: if you want to disable/enable some libraries see [FAQ](https://github.com/dmitriyaa/webpack-project-backbone#faq)*

## Requirements:
* Nodejs 8+
* NPM 6+

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
* Launch webpack server (localhost:5000) and start developing in [src](./src) directory.
```
npm run start
```
* Once you are ready to deploy the project on real server.
```
npm run build
```

### Use index.php with php server
* Change [index.html](./src/index.html) to ```index.php``` in [src](./src) directory.
* Update [webpack.prod.js](./webpack.prod.js) file to:
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
Use the import command in ```css/scss``` file.
Example: ```@import url("https://fonts.googleapis.com/css?family=Open+Sans:400,600,700");```

### How to enable jQuery
In all webpack configuration files [[webpack.prod.js](./webpack.prod.js), [webpack.server-for-html.js](./webpack.server-for-html.js), [webpack.server-for-php.js](./webpack.server-for-php.js)] uncomment the following lines:
```
new webpack.ProvidePlugin({
    // $: 'jquery',
    // jQuery: 'jquery'
})
```

### How to disable Twitter Bootstrap
Simply remove bootstrap related import from [styles.scss](./src/styles.scss)
```
// Bootstrap
@import './scss/bootstrap';
```

### How to use GreenSock in other files
Copy and paste to any file you want to use these tools:
```
import { TweenMax, CSSPlugin, AttrPlugin } from "gsap/all";
 // CSSPlugin and AttrPlugin may get dropped by webpack, so it's important
 // to keep below lines
const plugins = [ CSSPlugin, AttrPlugin ];
```

### How to disable Library that I don't need
By default all libraries are included into ./src/index.js file
If you don't want to use some library, simply remove an appropriate 'import'
For example if you don't want to use ScrollMagic library, just remove the
following lines
```
/**
 * Importing Scroll Magic
 */
import ScrollMagic from "ScrollMagic";
import 'scrollmagic/scrollmagic/minified/plugins/animation.gsap.min.js';
```

## Useful links
* [GreenSock cheat sheet](https://ihatetomatoes.net/greensock-cheat-sheet/)
* [ScrollMagic docs](https://github.com/janpaepke/ScrollMagic/wiki/Getting-Started-:-How-to-use-ScrollMagic)
* [ScrollMagic Scene Manipulation](http://scrollmagic.io/examples/basic/scene_manipulation.html)
