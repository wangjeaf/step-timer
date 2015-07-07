var step = require('./index');

step.start('Hi');

step.record('Hi', 'H1');
step.record('Hi', 'H123');

for (var i = 0; i < 100000000; i++) {
}

step.end('Hi', function(a,b,c, d) {
    console.log(a,step.paddy(b, d),c)
});
