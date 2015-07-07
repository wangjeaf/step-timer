var step = require('./index');

step.go();

setTimeout(function() {
    step.record();
}, 100);

setTimeout(function() {
    step.record();

    step.end();
}, 1000);