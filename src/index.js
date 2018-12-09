/**
 * Default Libraries
 * If you don't need some libraries, remove unnesessary imports and that's it.
 * -------------------------------------------------------------------------- */
// Importing styles
import './styles.scss';

// GreenSock tools + ScrollMagic
import TweenMax from 'gsap/src/minified/TweenMax.min';
import TimelineMax from 'gsap/src/minified/TimelineMax.min';
import ScrollMagic from 'scrollmagic/scrollmagic/minified/ScrollMagic.min';
import 'scrollmagic/scrollmagic/minified/plugins/animation.gsap.min';
// Commen this line for prodution
// import 'scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min';
/* -------------------------------------------------------------------------- */


/* Start coding here ---------------------------------------------------------*/
(() => {
    // GreenSock sample
    const tween = TweenMax.to('#webpack-img', 6, {
        duration: 2,
        ease: Power0.easeNone,
        repeat: -1,
        rotation: 360,
    });
    // init controller
    const controller = new ScrollMagic.Controller();

    // build scene
    const scene = new ScrollMagic.Scene({
          duration: 50,
          offset: 50,
          triggerHook: 'onLeave'
    })
    .setTween("#webpack-img", 2, {css: {y: 100}})
    .addIndicators({name: "2 (duration: 100)"})
    .addTo(controller);
})();
/* -------------------------------------------------------------------------- */
