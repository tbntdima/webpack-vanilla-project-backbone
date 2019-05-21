# Webpack based project backbone

Simple webpack based project backbone for small and medium projects.

## Features

- ES6 -> ES5 (babel) -> Minimized
- SCSS -> CSS -> PostCSS(autoprefixer) -> Minimized
- Images -> Minimized
- Live Reaload + HMR

## Libraries

- Twitter Bootstrap mixins + utilities + grid + reboot
- jQuery (you can use `$()` and `jQuery()` globally) - disabled by default
- GreenSock tools
- ScrollMagic

Note: if you want to disable/enable some libraries see [FAQ](https://github.com/dmitriyaa/webpack-project-backbone#faq)

## Requirements

- nodejs 8+
- npm 6+
- yarn 1.15 + `npm i -g yarn`

## Usage

Download all dependencies:

```bash
cd path/to/webpack-project-backbone
```

```bash
yarn
```

For development:

```bash
yarn start
```

For deployment:

```bash
yarn build
```

enjoy hacking 😊

## FAQ

### How to add Google Fonts

Use the import command in `css/scss` file.
Example: `@import url("https://fonts.googleapis.com/css?family=Open+Sans:400,600,700");`

### How to enable jQuery

In all webpack configuration files [[webpack.prod.js](./webpack.prod.js), [webpack.server-for-html.js](./webpack.server-for-html.js), [webpack.server-for-php.js](./webpack.server-for-php.js)] uncomment the following lines:

```js
new webpack.ProvidePlugin({
  // $: 'jquery',
  // jQuery: 'jquery'
});
```

### How to disable Twitter Bootstrap

Simply remove bootstrap related import from [styles.scss](./src/styles.scss)

```scss
// Bootstrap
@import './bootstrap';
```

### How to use GreenSock / ScrollMagic

Copy and paste to any file you want to use these tools:

```js
import TweenMax from 'gsap/src/minified/TweenMax.min';
import TimelineMax from 'gsap/src/minified/TimelineMax.min';
import ScrollMagic from 'scrollmagic/scrollmagic/minified/ScrollMagic.min';
import 'scrollmagic/scrollmagic/minified/plugins/animation.gsap.min';
// For development only
// import 'scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min';
```

## References

- [GreenSock - getting started presentation](https://greensock.com/jump-start-js)
- [GreenSock cheat sheet](https://ihatetomatoes.net/greensock-cheat-sheet/)
- [ScrollMagic docs](https://github.com/janpaepke/ScrollMagic/wiki/Getting-Started-:-How-to-use-ScrollMagic)
- [ScrollMagic Scene Manipulation](http://scrollmagic.io/examples/basic/scene_manipulation.html)
- [Scroll + GSAP config help](https://www.grzegorowski.com/scrollmagic-setup-for-webpack-commonjs/)
