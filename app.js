import Raphael from "raphael";
import begin from './src/visual/main'

if (!Raphael.svg) {
    window.location = './notsupported.html';
}

// suppress select events
$(window).bind('selectstart', function(event) {
    event.preventDefault();
});

if (module.hot) {
    module.hot.accept((err) => {
        if (err) {
            console.error('Cannot apply HMR update.', err);
        }else{
            begin()
        }
    });
}