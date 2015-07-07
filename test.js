var step = require('./index');

step.start('Hi');

step.record('Hi', 'Step1');
step.record('Hi', 'Step2');

for (var i = 0; i < 100000000; i++) {
}

step.end('Hi', 'EndStep-Step3');

