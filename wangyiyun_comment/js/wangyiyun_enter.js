const express = require('express');
const app = express();
var wangYiYun = require('./js_wangyiyun');

app.get('/wangyiyun', function (req, res) {
    // 参数我写死了，因为只是想逆向参数，然后在进行检测对错，没有大规模 爬取需求，需要的可以自行修改参数
    var result = new wangYiYun('{rid: "R_SO_4_1411718813", offset: "0", total: "true",' +
        ' limit: "20", csrf_token: ""}', brx0x(["流泪", "强"]), brx0x(Xs2x.md), brx0x(["爱心", "女孩", "惊恐", "大笑"]));
    res.send(JSON.stringify(result));
});

// 端口号3333
app.listen(3333, ()=>console.log("开启网易云音乐评论参数解析服务"));