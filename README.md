## Step计时器

### 干啥的？

统计并漂亮的输出：从A到B到C到...到Z，每一步花了多少时间。

for NodeJS

### 安装

`npm install step-timer`


### 使用

```javascript
var timer = require('step-timer');

timer.start('Hi');

timer.record('Hi', 'Step1');
timer.record('Hi', 'Step2');

for (var i = 0; i < 100000000; i++) {
}

timer.end('Hi', 'EndStep-Step3', function(a,b,c, d) {
    console.log(a,timer.paddy(b, d),c)
});
```

==>

```
[Hi]第[        Step1]步 耗时 0
[Hi]第[        Step2]步 耗时 0
[Hi]第[EndStep-Step3]步 耗时 100
```


### 自定义格式

```
timer.end('Hi', 'EndStep-Step3', function(a,b,c, d) {
    console.log(a,timer.paddy(b, d),c)
});
```

==>

```
Hi         Step1 0
Hi         Step2 0
Hi EndStep-Step3 96
```

### API

- start([key]) 开始记录
- record([key], [subkey]) 记录一个
- end([key], [subkey], [formatter]) 结束记录，输出
- paddy(str, maxlen) 辅助方法：格式化字符串
- config(key, value) 配置（目前支持formatter全局配置）
- all([formatter]) 输出所有记录项目