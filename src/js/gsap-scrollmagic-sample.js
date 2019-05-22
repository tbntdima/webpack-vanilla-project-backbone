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
  const moveUp = element => {
    TweenMax.to(element, 2, {
      y: '-=20px',
      ease: Power0.easeNone,
      onCompleteParams: [element],
      onComplete: moveDown
    });
  };

  const moveDown = element => {
    TweenMax.to(element, 2, {
      y: '+=20px',
      ease: Power0.easeNone,
      onCompleteParams: [element],
      onComplete: moveUp
    });
  };

  const levitate = () => {
    const mob = document.querySelector('#webpack-img');
    moveDown(mob);
  };

  levitate();
})();
