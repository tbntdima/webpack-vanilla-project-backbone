/**
 * Importing styles
 */
import './styles.scss';

/**
 * Importing GSAP tools
 */
 import {TweenMax, CSSPlugin, ScrollToPlugin} from "gsap/all";
 // CSSPlugin and AttrPlugin may get dropped by webpack, so it's important
 // to keep below lines
const plugins = [CSSPlugin, ScrollToPlugin];

/**
 * Importing Scroll Magic
 */
import ScrollMagic from "ScrollMagic";
import 'scrollmagic/scrollmagic/minified/plugins/animation.gsap.min.js';

(() => {
    // GreenSock sample
    const tween = TweenMax.to('#webpack-img', 6, {
        duration: 2,
        ease: Power0.easeNone,
        repeat: -1,
        rotation: 360,
    });
})();
