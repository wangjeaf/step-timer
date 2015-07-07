## Step计时器

npm install stepper

```javascript
var step = require('stepper');

step.start('Hi');

setTimeout(function() {
    step.record('Hi');
}, 300);

setTimeout(function() {
    step.record('Hi');

    for (var i = 0; i < 100000000; i++) {
    }

    step.end('Hi');
}, 3000);
```

==>

```
[Hi]第[1]步 耗时 302
[Hi]第[2]步 耗时 2699
[Hi]第[3]步 耗时 101
```