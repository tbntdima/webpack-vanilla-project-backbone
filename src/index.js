// Importing styles
import './styles.scss';

// Importing GreenSock tools
import './js/greensock';

$(function() {
    // GreenSock sample
    const tween = TweenMax.to('#webpack-img', 6, {
        duration: 2,
        ease: Power0.easeNone,
        repeat: -1,
        rotation: 360,
    })
});
