var step = require('./index');

step.start('Hi');
step.start('Hello');

step.record('Hi', 'Step1');
step.record('Hi', 'Step2');

step.record('Hello');

for (var i = 0; i < 100000000; i++) {
}

step.end('Hi', 'EndStep-Step3');

step.record('Hello');

step.end('Hello');
