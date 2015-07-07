var cache = {};

var GLOBAL_KEY = 'STEPPER_DEFAULT_KEY';

function start(key) {
    key = key || GLOBAL_KEY;
    cache[key] = {
        start: Date.now(),
        steps: []
    };
}

function record(key, subkey) {
    key = key || GLOBAL_KEY;
    var steps = cache[key].steps;
    steps.push({
        subkey: subkey || (steps.length + 1),
        time: Date.now()
    })
}

function output(key, record) {
    key = key || GLOBAL_KEY;
    var steps = record.steps;
    var start = record.start;
    steps.forEach(function(step) {
        console.log(key, step.subkey, step.time - start)
    });
}

function end(key) {
    key = key || GLOBAL_KEY;
    record(key);

    var obj = cache[key];
    output(key, obj);
}

function all() {
    for(var prop in cache) {
        output(prop, cache[prop])
    }
}

module.exports = {
    start: start,
    record: record,
    end: end,
    all: all
}
