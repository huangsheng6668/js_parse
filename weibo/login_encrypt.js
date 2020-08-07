_keys = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
_keys_urlsafe = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=";
_subp_v2_keys = "uAL715W8e3jJCcNU0lT_FSXVgxpbEDdQ4vKaIOH2GBPtfzqsmYZo-wRM9i6hynrk=";
_subp_v3_keys_3 = "5WFh28sGziZTeS1lBxCK-HgPq9IdMUwknybo.LJrQD3uj_Va7pE0XfcNR4AOYvm6t";
weibo_rsa = require('./weibo_rsa');
const express = require('express');
var bodyParser = require('body-parser');
const app = express();
app.use(bodyParser());


var makeNonce = function (a) {
    var b = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
        , c = "";
    for (var d = 0; d < a; d++)
        c += b.charAt(Math.ceil(Math.random() * 1e6) % b.length);
    return c
}


/**
 * 新浪的魔改base64
 * @param a :用户名
 */
function encode(a) {
    a = "" + a;
    if (a == "")
        return "";
    var b = "", c, d, e = "", f, g, h, i = "", j = 0;
    do {
        c = a.charCodeAt(j++);
        d = a.charCodeAt(j++);
        e = a.charCodeAt(j++);
        f = c >> 2;
        g = (c & 3) << 4 | d >> 4;
        h = (d & 15) << 2 | e >> 6;
        i = e & 63;
        isNaN(d) ? h = i = 64 : isNaN(e) && (i = 64);
        b = b + this._keys.charAt(f) + this._keys.charAt(g) + this._keys.charAt(h) + this._keys.charAt(i);
        c = d = e = "";
        f = g = h = i = ""
    } while (j < a.length);
    return b
}

function decode(a, b, c) {
    var d = function (a, b) {
        for (var c = 0; c < a.length; c++)
            if (a[c] === b)
                return c;
        return -1
    };
    typeof a == "string" && (a = a.split(""));
    var e = [], f, g, h = "", i, j, k, l = "";
    a.length % 4 == 0;
    var m = /[^A-Za-z0-9+\/=]/
        , n = this._keys.split("");
    if (b == "urlsafe") {
        m = /[^A-Za-z0-9-_=]/;
        n = this._keys_urlsafe.split("")
    }
    if (b == "subp_v2") {
        m = /[^A-Za-z0-9_=-]/;
        n = this._subp_v2_keys.split("")
    }
    if (b == "subp_v3_3") {
        m = /[^A-Za-z0-9-_.-]/;
        n = this._subp_v3_keys_3.split("")
    }
    var o = 0;
    if (b == "binnary") {
        n = [];
        for (o = 0; o <= 64; o++)
            n[o] = o + 128
    }
    if (b != "binnary" && m.test(a.join("")))
        return c == "array" ? [] : "";
    o = 0;
    do {
        i = d(n, a[o++]);
        j = d(n, a[o++]);
        k = d(n, a[o++]);
        l = d(n, a[o++]);
        f = i << 2 | j >> 4;
        g = (j & 15) << 4 | k >> 2;
        h = (k & 3) << 6 | l;
        e.push(f);
        k != 64 && k != -1 && e.push(g);
        l != 64 && l != -1 && e.push(h);
        f = g = h = "";
        i = j = k = l = ""
    } while (o < a.length);
    if (c == "array")
        return e;
    var p = ""
        , q = 0;
    for (; q < e.lenth; q++)
        p += String.fromCharCode(e[q]);
    return p
}
// var prelt = (new Date).getTime() - preloginTimeStart - (parseInt('8', 10));


app.post('/weibo', function (req, res) {
    var body = req.body;
    var content = body.content;
    var servertime = Math.round(new Date().getTime() / 1000).toString();
    var nonce = makeNonce(6);
    var sp = weibo_rsa.sp(servertime, nonce, body.passwd)

    param = {
        url: 'https://weibo.com/ajaxlogin.php?framelogin=1&callback=parent.sinaSSOController.feedBackUrlCallBack',
        qrcode_flag: 'false',
        useticket: 1,
        savestate: 7,
        from: '',
        entry: 'weibo',
        gateway: 1,
        vsnf: 1,
        service: 'miniblog',
        pwencode: 'rsa2',
        nonce: nonce,
        servertime: servertime,
        rsakv: "1330428213",
        su: encode(encodeURIComponent(body.username)),
        sp: sp,
        returntype: 'META',
        sr: '1536*864',
        encoding: 'UTF-8',
        wsseretry: 'servertime_error',
        pagerefer: "https://login.sina.com.cn/crossdomain2.php?action=logout&r=https%3A%2F%2Fpassport.weibo.com%2Fwbsso%2Flogout%3Fr%3Dhttps%253A%252F%252Fweibo.com%26returntype%3D1",
        prelt: 47
    }
    res.send(JSON.stringify(param))
});

app.listen(3000, () => console.log("开启服务！"));
