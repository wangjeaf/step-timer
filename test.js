var step = require('./index');

step.start();

setTimeout(function() {
    step.record();
}, 100);

setTimeout(function() {
    step.record();

    step.end();
}, 1000);