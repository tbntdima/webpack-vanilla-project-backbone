/**
 * Importing styles
 */
import './styles.scss';

/**
 * Importaing GSAP tools
 */
import { TweenMax, CSSPlugin, AttrPlugin } from "gsap/all";
 // CSSPlugin and AttrPlugin may get dropped by webpack, so it's important
 // to keep below lines
const plugins = [ CSSPlugin, AttrPlugin ];


$(function() {
    // GreenSock sample
    const tween = TweenMax.to('#webpack-img', 6, {
        duration: 2,
        ease: Power0.easeNone,
        repeat: -1,
        rotation: 360,
    })
});
