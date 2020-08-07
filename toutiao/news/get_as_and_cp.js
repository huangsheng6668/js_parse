"use strict";

function s(t, e) {
    var i = (65535 & t) + (65535 & e)
        , n = (t >> 16) + (e >> 16) + (i >> 16);
    return n << 16 | 65535 & i
}

function o(t, e) {
    return t << e | t >>> 32 - e
}

function r(t, e, i, n, a, r) {
    return s(o(s(s(e, t), s(n, r)), a), i)
}

function l(t, e, i, n, a, s, o) {
    return r(e & i | ~e & n, t, e, a, s, o)
}

function u(t, e, i, n, a, s, o) {
    return r(e & n | i & ~n, t, e, a, s, o)
}

function c(t, e, i, n, a, s, o) {
    return r(e ^ i ^ n, t, e, a, s, o)
}

function d(t, e, i, n, a, s, o) {
    return r(i ^ (e | ~n), t, e, a, s, o)
}

function h(t, e) {
    t[e >> 5] |= 128 << e % 32,
        t[(e + 64 >>> 9 << 4) + 14] = e;
    var i, n, a, o, r, h = 1732584193, m = -271733879, _ = -1732584194, p = 271733878;
    for (i = 0; i < t.length; i += 16)
        n = h,
            a = m,
            o = _,
            r = p,
            h = l(h, m, _, p, t[i], 7, -680876936),
            p = l(p, h, m, _, t[i + 1], 12, -389564586),
            _ = l(_, p, h, m, t[i + 2], 17, 606105819),
            m = l(m, _, p, h, t[i + 3], 22, -1044525330),
            h = l(h, m, _, p, t[i + 4], 7, -176418897),
            p = l(p, h, m, _, t[i + 5], 12, 1200080426),
            _ = l(_, p, h, m, t[i + 6], 17, -1473231341),
            m = l(m, _, p, h, t[i + 7], 22, -45705983),
            h = l(h, m, _, p, t[i + 8], 7, 1770035416),
            p = l(p, h, m, _, t[i + 9], 12, -1958414417),
            _ = l(_, p, h, m, t[i + 10], 17, -42063),
            m = l(m, _, p, h, t[i + 11], 22, -1990404162),
            h = l(h, m, _, p, t[i + 12], 7, 1804603682),
            p = l(p, h, m, _, t[i + 13], 12, -40341101),
            _ = l(_, p, h, m, t[i + 14], 17, -1502002290),
            m = l(m, _, p, h, t[i + 15], 22, 1236535329),
            h = u(h, m, _, p, t[i + 1], 5, -165796510),
            p = u(p, h, m, _, t[i + 6], 9, -1069501632),
            _ = u(_, p, h, m, t[i + 11], 14, 643717713),
            m = u(m, _, p, h, t[i], 20, -373897302),
            h = u(h, m, _, p, t[i + 5], 5, -701558691),
            p = u(p, h, m, _, t[i + 10], 9, 38016083),
            _ = u(_, p, h, m, t[i + 15], 14, -660478335),
            m = u(m, _, p, h, t[i + 4], 20, -405537848),
            h = u(h, m, _, p, t[i + 9], 5, 568446438),
            p = u(p, h, m, _, t[i + 14], 9, -1019803690),
            _ = u(_, p, h, m, t[i + 3], 14, -187363961),
            m = u(m, _, p, h, t[i + 8], 20, 1163531501),
            h = u(h, m, _, p, t[i + 13], 5, -1444681467),
            p = u(p, h, m, _, t[i + 2], 9, -51403784),
            _ = u(_, p, h, m, t[i + 7], 14, 1735328473),
            m = u(m, _, p, h, t[i + 12], 20, -1926607734),
            h = c(h, m, _, p, t[i + 5], 4, -378558),
            p = c(p, h, m, _, t[i + 8], 11, -2022574463),
            _ = c(_, p, h, m, t[i + 11], 16, 1839030562),
            m = c(m, _, p, h, t[i + 14], 23, -35309556),
            h = c(h, m, _, p, t[i + 1], 4, -1530992060),
            p = c(p, h, m, _, t[i + 4], 11, 1272893353),
            _ = c(_, p, h, m, t[i + 7], 16, -155497632),
            m = c(m, _, p, h, t[i + 10], 23, -1094730640),
            h = c(h, m, _, p, t[i + 13], 4, 681279174),
            p = c(p, h, m, _, t[i], 11, -358537222),
            _ = c(_, p, h, m, t[i + 3], 16, -722521979),
            m = c(m, _, p, h, t[i + 6], 23, 76029189),
            h = c(h, m, _, p, t[i + 9], 4, -640364487),
            p = c(p, h, m, _, t[i + 12], 11, -421815835),
            _ = c(_, p, h, m, t[i + 15], 16, 530742520),
            m = c(m, _, p, h, t[i + 2], 23, -995338651),
            h = d(h, m, _, p, t[i], 6, -198630844),
            p = d(p, h, m, _, t[i + 7], 10, 1126891415),
            _ = d(_, p, h, m, t[i + 14], 15, -1416354905),
            m = d(m, _, p, h, t[i + 5], 21, -57434055),
            h = d(h, m, _, p, t[i + 12], 6, 1700485571),
            p = d(p, h, m, _, t[i + 3], 10, -1894986606),
            _ = d(_, p, h, m, t[i + 10], 15, -1051523),
            m = d(m, _, p, h, t[i + 1], 21, -2054922799),
            h = d(h, m, _, p, t[i + 8], 6, 1873313359),
            p = d(p, h, m, _, t[i + 15], 10, -30611744),
            _ = d(_, p, h, m, t[i + 6], 15, -1560198380),
            m = d(m, _, p, h, t[i + 13], 21, 1309151649),
            h = d(h, m, _, p, t[i + 4], 6, -145523070),
            p = d(p, h, m, _, t[i + 11], 10, -1120210379),
            _ = d(_, p, h, m, t[i + 2], 15, 718787259),
            m = d(m, _, p, h, t[i + 9], 21, -343485551),
            h = s(h, n),
            m = s(m, a),
            _ = s(_, o),
            p = s(p, r);
    return [h, m, _, p]
}

function m(t) {
    var e, i = "";
    for (e = 0; e < 32 * t.length; e += 8)
        i += String.fromCharCode(t[e >> 5] >>> e % 32 & 255);
    return i
}

function _(t) {
    var e, i = [];
    for (i[(t.length >> 2) - 1] = void 0,
             e = 0; e < i.length; e += 1)
        i[e] = 0;
    for (e = 0; e < 8 * t.length; e += 8)
        i[e >> 5] |= (255 & t.charCodeAt(e / 8)) << e % 32;
    return i
}

function p(t) {
    return m(h(_(t), 8 * t.length))
}

function f(t, e) {
    var i, n, a = _(t), s = [], o = [];
    for (s[15] = o[15] = void 0,
         a.length > 16 && (a = h(a, 8 * t.length)),
             i = 0; i < 16; i += 1)
        s[i] = 909522486 ^ a[i],
            o[i] = 1549556828 ^ a[i];
    return n = h(s.concat(_(e)), 512 + 8 * e.length),
        m(h(o.concat(n), 640))
}

function g(t) {
    var e, i, n = "0123456789abcdef", a = "";
    for (i = 0; i < t.length; i += 1)
        e = t.charCodeAt(i),
            a += n.charAt(e >>> 4 & 15) + n.charAt(15 & e);
    return a
}

function v(t) {
    return unescape(encodeURIComponent(t))
}

function w(t) {
    return p(v(t))
}

function y(t) {
    return g(w(t))
}

function b(t, e) {
    return f(v(t), v(e))
}

function x(t, e) {
    return g(b(t, e))
}

function C(t, e, i) {
    return e ? i ? b(e, t) : x(e, t) : i ? w(t) : y(t)
}


function get_as_and_cp() {
    var t = Math.floor((new Date).getTime() / 1e3)
        , e = t.toString(16).toUpperCase()
        , i = (0,
        C)(t).toString().toUpperCase();
    if (8 != e.length)
        return {
            as: "479BB4B7254C150",
            cp: "7E0AC8874BB0985"
        };
    for (var n = i.slice(0, 5), a = i.slice(-5), s = "", r = 0; r < 5; r++)
        s += n[r] + e[r];
    for (var l = "", u = 0; u < 5; u++)
        l += e[u + 3] + a[u];
    return {
        as: "A1" + s + e.slice(-3),
        cp: e.slice(0, 3) + l + "E1"
    }
}

let export_obj = {
    get_as_and_cp: function () {
        var t = Math.floor((new Date).getTime() / 1e3)
            , e = t.toString(16).toUpperCase()
            , i = (0,
            C)(t).toString().toUpperCase();
        if (8 != e.length)
            return {
                as: "479BB4B7254C150",
                cp: "7E0AC8874BB0985"
            };
        for (var n = i.slice(0, 5), a = i.slice(-5), s = "", r = 0; r < 5; r++)
            s += n[r] + e[r];
        for (var l = "", u = 0; u < 5; u++)
            l += e[u + 3] + a[u];
        return {
            as: "A1" + s + e.slice(-3),
            cp: e.slice(0, 3) + l + "E1"
        }
    }
};

module.exports = export_obj;

/*
* 以上的导出形式要调用为以下方式
var app = require('./app.js');
app.get_as_and_cp();
* */
