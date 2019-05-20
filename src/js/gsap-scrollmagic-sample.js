// Dependencies
import TweenMax from 'gsap/src/minified/TweenMax.min'; // Probably not needed
import TimelineMax from 'gsap/src/minified/TimelineMax.min'; // Probably not needed
import ScrollMagic from 'scrollmagic/scrollmagic/minified/ScrollMagic.min';
import 'scrollmagic/scrollmagic/minified/plugins/animation.gsap.min';
// For development only
// import 'scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min';

// Execution
(() => {
  // GreenSock sample
  const tween = TweenMax.to('#webpack-img', 12, {
    duration: 2,
    ease: Power0.easeNone,
    repeat: -1,
    rotation: 360
  });
  //     // init controller
  //     const controller = new ScrollMagic.Controller();

  //     // build scene
  //     const scene = new ScrollMagic.Scene({
  //           duration: 50,
  //           offset: 50,
  //           triggerHook: 'onLeave'
  //     })
  //     .setTween("#webpack-img", 2, {css: {y: 100}})
  //     // For development only
  //     // .addIndicators({name: "2 (duration: 100)"})
  //     .addTo(controller);
})();
