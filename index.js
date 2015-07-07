require('colors');

var cache = {};

var config = {
    formatter: function (key, subkey, delta, maxKeyLen) {
        console.log('[' + key + ']第[' + paddy(subkey, maxKeyLen) + ']步 耗时 ' + delta)
    }
};

var GLOBAL_KEY = 'timer';

function start(key) {
    key = key || GLOBAL_KEY;
    cache[key] = {
        start: Date.now(),
        steps: []
    };
}

function _config(key, value) {
    config[key] = value;
}

function record(key, subkey) {
    key = key || GLOBAL_KEY;
    var steps = cache[key].steps;
    steps.push({
        subkey: subkey || (steps.length + 1),
        time: Date.now()
    })
}

function output(key, record, fn) {

    key = key || GLOBAL_KEY;

    var formatter = config.formatter;
    if (typeof fn != 'undefined' && fn.call && fn.apply) {
        formatter = fn;
    }
    var steps = record.steps;
    var start = record.start;

    var max = 0;
    var min = Number.MAX_VALUE;
    var maxKeyLen = (steps[0].subkey || '').length;

    steps[0].delta = steps[0].time - start;

    for(var i = 0; i < steps.length - 1; i++) {
        var prev = steps[i];
        var next = steps[i+1];
        next.delta = next.time - prev.time;
        if (next.delta > max) {
            max = next.delta;
        }
        if (next.delta < min) {
            min = next.delta;
        }
        var keyLen = (next.subkey || '').length;
        if (keyLen > maxKeyLen) {
            maxKeyLen = keyLen;
        }
    }

    steps.forEach(function(step) {
        var delta = '' + step.delta;
        if (delta == min) {
            delta = delta.green;
        }
        if (delta == max) {
            delta = delta.red;
        }
        formatter(key, step.subkey, delta, maxKeyLen)
    });
}

function paddy(str, maxLen) {
    if (!str) {
        return str;
    }
    str = str + '';
    var len = str.length;
    if (len >= maxLen) {
        return str;
    }
    return str + new Array(maxLen - len + 1).join(' ');
}

function end(key, subkey, fn) {
    key = key || GLOBAL_KEY;
    record(key, subkey);

    var obj = cache[key];
    output(key, obj, fn);
}

function all(fn) {
    for(var prop in cache) {
        output(prop, cache[prop], fn)
    }
}

module.exports = {
    start: start,
    record: record,
    end: end,
    paddy: paddy,
    config: _config,
    all: all
}
