const crypto = require('crypto');
const express = require('express');
var bodyParser = require('body-parser');
var youdao = require('./my_youdao');
const app = express();
app.use(bodyParser());

app.post('/youdao', function (req, res) {
    var body = req.body;
    var content = body.content;
    var result = new youdao(content);
    res.send(JSON.stringify(result))
});

app.listen(3000, () => console.log("开启服务！"));
