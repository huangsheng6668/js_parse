protocol = "https://";
const express = require('express');
// express的post获取不到参数，使用body-parser辅助
var bodyParser = require('body-parser');
function randomString(len) {
    len = len || 32;
    var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
    /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
    var maxPos = $chars.length;
    var pwd = '';
    for (i = 0; i < len; i++) {
        pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return pwd;
}

var window = new Object();
window.parseFloat = parseFloat;
window.parseInt = parseInt;
window.isNaN = isNaN;
window.decodeURI = decodeURI;
window.decodeURIComponent = decodeURIComponent;
window.encodeURI = encodeURI;
window.encodeURIComponent = encodeURIComponent;
window.escape = escape;
window.unescape = unescape;
window.eval = eval;
window.Date = Date;

document = new Object();
document.createElement = function (name) {
    return "<" + name + ">" + "</" + name + ">"
};
document.createElement.toString = function () {
    return "function createElement() { [native code] }"
};
window.document = document;

var navigator = new Object();
navigator.appCodeName = "Mozilla";
navigator.appName = "Netscape";
navigator.appVersion = "5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36";
navigator.cookieEnabled = true;
navigator.connection = {
    'connection': null,
    'effectiveType': "4g",
    'rtt': 50,
    'downlink': 10,
    'saveData': false
};
navigator.deviceMemory = 8;
navigator.hardwareConcurrency;
navigator.doNotTrack = null;
navigator.language = "zh-CN";
navigator.languages = ["zh-CN", "zh"];
navigator.onLine = true;
navigator.platform = 'Win32';
navigator.product = 'Gecko';
navigator.productSub = '20030107';
navigator.userAgent = "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36";
navigator.vendor = "Google Inc.";
navigator.vendorSub = "";

plugins = [
    {
        'description': "APlayer III ActiveX hosting plugin for Firefox",
        'filename': "npaplayer.dll",
        'length': 1,
        'name': "APlayer ActiveX hosting plugin"
    },
    {
        'description': "ASUS Update",
        'filename': "npAsusUpdate3.dll",
        'length': 1,
        'name': "ASUS Update"
    }
];

any_plugins = true;

if (any_plugins) {
    for (var i = 0; i < 10; i++) {
        var p = {
            'description': randomString(parseInt(Math.random() * 20)),
            'filename': randomString(parseInt(Math.random() * 20)) + ".dll",
            'length': 1,
            'name': randomString(parseInt(Math.random() * 10))
        };

        plugins.push(p)
    }
}

navigator.plugins = plugins;

window.navigator = navigator;

location = new Object();
location.port = "";
location.protocol = "http:";

window.location = location;

history = new Object();
history.length = 5;
history.scrollRestoration = "auto";
history.state = null;
window.history = history;

screen = new Object();
screen.availHeight = 1040;
screen.availLeft = 2560;
screen.availTop = 0;
screen.availWidth = 1920;
screen.colorDepth = 24;
screen.height = 1080;
screen.pixelDepth = 24;
screen.width = 1920;
screen.orientation = {
    angle: 0,
    onchange: null,
    type: "landscape-primary"
};

window.getComputedStyle = function () {
    debugger
};

window.screen = screen;

window.parent = window;

window.top = window;

window.self = window;
window.window = window;

var RYbA = /Mobi/i["test"](navigator["userAgent"]);
var SDKb = /msie 6\.0/i["test"](navigator["userAgent"]);
var TQAA = /msie 7\.0/i["test"](navigator["userAgent"]);
var XesE = navigator["userAgent"]["indexOf"]("Android") > -1;

const app = express();
app.use(bodyParser());

function DBnu() {
    var r = Object["create"] || function () {
        function F() {}

        return function (e) {
            var t;
            F["prototype"] = e;
            t = new F();
            F["prototype"] = null;
            return t;
        };
    }();

    var e = {};
    var t = e["lib"] = {};

    var n = t["Base"] = function () {
        return {
            "mawH": function (e) {
                var t = r(this);

                if (e) {
                    t["mixIn"](e);
                }

                if (!t["hasOwnProperty"]("init") || this["init"] === t["init"]) {
                    t["init"] = function () {
                        t["$super"]["init"]["apply"](this, arguments);
                    };
                }

                t["init"]["prototype"] = t;
                t["$super"] = this;
                return t;
            },
            "create": function () {
                var e = this["mawH"]();
                e["init"]["apply"](e, arguments);
                return e;
            },
            "init": function () {},
            "mixIn": function (e) {
                for (var t in e) {
                    if (e["hasOwnProperty"](t)) {
                        this[t] = e[t];
                    }
                }

                if (e["hasOwnProperty"]("toString")) {
                    this["toString"] = e["toString"];
                }
            }
        };
    }();

    var u = t["WordArray"] = n["mawH"]({
        "init": function (e, t) {
            e = this["words"] = e || [];

            if (t != undefined) {
                this["sigBytes"] = t;
            } else {
                this["sigBytes"] = e["length"] * 4;
            }
        },
        "concat": function (e) {
            var t = this["words"];
            var r = e["words"];
            var n = this["sigBytes"];
            var i = e["sigBytes"];
            this["clamp"]();

            if (n % 4) {
                for (var o = 0; o < i; o++) {
                    var a = r[o >>> 2] >>> 24 - o % 4 * 8 & 255;
                    t[n + o >>> 2] |= a << 24 - (n + o) % 4 * 8;
                }
            } else {
                for (var o = 0; o < i; o += 4) {
                    t[n + o >>> 2] = r[o >>> 2];
                }
            }

            this["sigBytes"] += i;
            return this;
        },
        "clamp": function () {
            var e = this["words"];
            var t = this["sigBytes"];
            e[t >>> 2] &= 4294967295 << 32 - t % 4 * 8;
            e["length"] = Math["ceil"](t / 4);
        }
    });
    var i = e["enc"] = {};
    var f = i["Latin1"] = {
        "parse": function (e) {
            var t = e["length"];
            var r = [];

            for (var n = 0; n < t; n++) {
                r[n >>> 2] |= (e["charCodeAt"](n) & 255) << 24 - n % 4 * 8;
            }

            return new u["init"](r, t);
        }
    };
    var o = i["Utf8"] = {
        "parse": function (e) {
            return f["parse"](unescape(encodeURIComponent(e)));
        }
    };
    var a = t["BufferedBlockAlgorithm"] = n["mawH"]({
        "reset": function () {
            this["gJJw"] = new u["init"]();
            this["NkPp"] = 0;
        },
        "OEmq": function (e) {
            if (typeof e == "string") {
                e = o["parse"](e);
            }

            this["gJJw"]["concat"](e);
            this["NkPp"] += e["sigBytes"];
        },
        "PcvT": function (e) {
            var t = this["gJJw"];
            var r = t["words"];
            var n = t["sigBytes"];
            var i = this["blockSize"];
            var o = i * 4;
            var a = n / o;

            if (e) {
                a = Math["ceil"](a);
            } else {
                a = Math["max"]((a | 0) - this["QtU_"], 0);
            }

            var s = a * i;

            var _ = Math["min"](s * 4, n);

            if (s) {
                for (var c = 0; c < s; c += i) {
                    this["RIuC"](r, c);
                }

                var l = r["splice"](0, s);
                t["sigBytes"] -= _;
            }

            return new u["init"](l, _);
        },
        "QtU_": 0
    });
    var s = e["algo"] = {};

    var _ = t["Cipher"] = a["mawH"]({
        "cfg": n["mawH"](),
        "createEncryptor": function (e, t) {
            return this["create"](this["SrHt"], e, t);
        },
        "init": function (e, t, r) {
            this["cfg"] = this["cfg"]["mawH"](r);
            this["TpXG"] = e;
            this["UBxx"] = t;
            this["reset"]();
        },
        "reset": function () {
            a["reset"]["call"](this);
            this["VCAW"]();
        },
        "process": function (e) {
            this["OEmq"](e);
            return this["PcvT"]();
        },
        "finalize": function (e) {
            if (e) {
                this["OEmq"](e);
            }

            var t = this["WIZI"]();
            return t;
        },
        "keySize": 128 / 32,
        "ivSize": 128 / 32,
        "SrHt": 1,
        "XiUs": 2,
        "YxJB": function () {
            return function (c) {
                var l = 0,
                    u = [];
                return {
                    "encrypt": function (e, t, r) {
                        l === 0 && u["push"](e);
                        l === 0 && u["push"](e);
                        l === 0 && u["push"](e);
                        l++;
                        u["push"](e);
                        e = u["shift"]();
                        var t = f["parse"](t);

                        if (!r || !r["iv"]) {
                            r = r || {};
                            r["iv"] = f["parse"]("0000000000000000");
                        }

                        var n = m["encrypt"](c, e, t, r);
                        undefined;
                        var i = n["ciphertext"]["words"];
                        undefined;
                        var o = n["ciphertext"]["sigBytes"];
                        undefined;
                        var a = [];

                        for (var s = 0; s < o; s++) {
                            var _ = i[s >>> 2] >>> 24 - s % 4 * 8 & 255;

                            a["push"](_);
                        }

                        return a;
                    },
                    "encrypt1": function (e, t, r) {
                        var t = f["parse"](t);

                        if (!r || !r["iv"]) {
                            r = r || {};
                            r["iv"] = f["parse"]("0000000000000000");
                        }

                        var n = m["encrypt"](c, e, t, r);
                        var i = n["ciphertext"]["words"];
                        var o = n["ciphertext"]["sigBytes"];
                        var a = [];

                        for (var s = 0; s < o; s++) {
                            var _ = i[s >>> 2] >>> 24 - s % 4 * 8 & 255;

                            a["push"](_);
                        }

                        return a;
                    }
                };
            };
        }()
    });

    var c = e["mode"] = {};
    var l = t["BlockCipherMode"] = n["mawH"]({
        "createEncryptor": function (e, t) {
            return this["Encryptor"]["create"](e, t);
        },
        "init": function (e, t) {
            this["ZImT"] = e;
            this["aQHl"] = t;
        }
    });

    var p = c["CBC"] = function () {
        var e = l["mawH"]();
        e["Encryptor"] = e["mawH"]({
            "processBlock": function (e, t) {
                var r = this["ZImT"];
                var n = r["blockSize"];
                EPTM["call"](this, e, t, n);
                r["encryptBlock"](e, t);
                this["bkoV"] = e["slice"](t, t + n);
            }
        });

        function EPTM(e, t, r) {
            var n = this["aQHl"];

            if (n) {
                var i = n;
                this["aQHl"] = undefined;
            } else {
                var i = this["bkoV"];
            }

            for (var o = 0; o < r; o++) {
                e[t + o] ^= i[o];
            }
        }

        return e;
    }();

    var d = e["pad"] = {};
    var g = d["Pkcs7"] = {
        "pad": function (e, t) {
            var r = t * 4;
            var n = r - e["sigBytes"] % r;
            var i = n << 24 | n << 16 | n << 8 | n;
            var o = [];

            for (var a = 0; a < n; a += 4) {
                o["push"](i);
            }

            var s = u["create"](o, n);
            e["concat"](s);
        }
    };

    var h = t["BlockCipher"] = _["mawH"]({
        "cfg": _["cfg"]["mawH"]({
            "mode": p,
            "padding": g
        }),
        "reset": function () {
            _["reset"]["call"](this);

            var e = this["cfg"];
            var t = e["iv"];
            var r = e["mode"];

            if (this["TpXG"] == this["SrHt"]) {
                var n = r["createEncryptor"];
            }

            if (this["clgE"] && this["clgE"]["dWmK"] == n) {
                this["clgE"]["init"](this, t && t["words"]);
            } else {
                this["clgE"] = n["call"](r, this, t && t["words"]);
                this["clgE"]["dWmK"] = n;
            }
        },
        "RIuC": function (e, t) {
            this["clgE"]["processBlock"](e, t);
        },
        "WIZI": function () {
            var e = this["cfg"]["padding"];

            if (this["TpXG"] == this["SrHt"]) {
                e["pad"](this["gJJw"], this["blockSize"]);
                var t = this["PcvT"](!!"flush");
            }

            return t;
        },
        "blockSize": 128 / 32
    });

    var v = t["CipherParams"] = n["mawH"]({
        "init": function (e) {
            this["mixIn"](e);
        }
    });
    var m = t["SerializableCipher"] = n["mawH"]({
        "cfg": n["mawH"](),
        "encrypt": function (e, t, r, n) {
            n = this["cfg"]["mawH"](n);
            var i = e["createEncryptor"](r, n);
            var o = i["finalize"](t);
            var a = i["cfg"];
            return v["create"]({
                "ciphertext": o,
                "key": r,
                "iv": a["iv"],
                "algorithm": e,
                "mode": a["mode"],
                "padding": a["padding"],
                "blockSize": e["blockSize"],
                "formatter": n["format"]
            });
        }
    });
    var w = [];
    var E = [];
    var x = [];
    var y = [];
    var b = [];
    var T = [];
    var S = [];
    var R = [];
    var A = [];
    var C = [];

    (function () {
        var e = [];

        for (var t = 0; t < 256; t++) {
            if (t < 128) {
                e[t] = t << 1;
            } else {
                e[t] = t << 1 ^ 283;
            }
        }

        var r = 0;
        var n = 0;

        for (var t = 0; t < 256; t++) {
            var i = n ^ n << 1 ^ n << 2 ^ n << 3 ^ n << 4;
            i = i >>> 8 ^ i & 255 ^ 99;
            w[r] = i;
            E[i] = r;
            var o = e[r];
            var a = e[o];
            var s = e[a];

            var _ = e[i] * 257 ^ i * 16843008;

            x[r] = _ << 24 | _ >>> 8;
            y[r] = _ << 16 | _ >>> 16;
            b[r] = _ << 8 | _ >>> 24;
            T[r] = _;

            var _ = s * 16843009 ^ a * 65537 ^ o * 257 ^ r * 16843008;

            S[i] = _ << 24 | _ >>> 8;
            R[i] = _ << 16 | _ >>> 16;
            A[i] = _ << 8 | _ >>> 24;
            C[i] = _;

            if (!r) {
                r = n = 1;
            } else {
                r = o ^ e[e[e[s ^ o]]];
                n ^= e[e[n]];
            }
        }
    })();

    var D = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54];
    var I = s["AES"] = h["mawH"]({
        "VCAW": function () {
            if (this["eXay"] && this["fKsj"] === this["UBxx"]) {
                return;
            }

            var e = this["fKsj"] = this["UBxx"];
            var t = e["words"];
            var r = e["sigBytes"] / 4;
            var n = this["eXay"] = r + 6;
            var i = (n + 1) * 4;
            var o = this["gAge"] = [];

            for (var a = 0; a < i; a++) {
                if (a < r) {
                    o[a] = t[a];
                } else {
                    var s = o[a - 1];

                    if (!(a % r)) {
                        s = s << 8 | s >>> 24;
                        s = w[s >>> 24] << 24 | w[s >>> 16 & 255] << 16 | w[s >>> 8 & 255] << 8 | w[s & 255];
                        s ^= D[a / r | 0] << 24;
                    } else if (r > 6 && a % r == 4) {
                        s = w[s >>> 24] << 24 | w[s >>> 16 & 255] << 16 | w[s >>> 8 & 255] << 8 | w[s & 255];
                    }

                    o[a] = o[a - r] ^ s;
                }
            }

            var _ = this["hYNN"] = [];

            for (var c = 0; c < i; c++) {
                var a = i - c;

                if (c % 4) {
                    var s = o[a];
                } else {
                    var s = o[a - 4];
                }

                if (c < 4 || a <= 4) {
                    _[c] = s;
                } else {
                    _[c] = S[w[s >>> 24]] ^ R[w[s >>> 16 & 255]] ^ A[w[s >>> 8 & 255]] ^ C[w[s & 255]];
                }
            }
        },
        "encryptBlock": function (e, t) {
            this["ilsa"](e, t, this["gAge"], x, y, b, T, w);
        },
        "ilsa": function (e, t, r, n, i, o, a, s) {
            var _ = this["eXay"];
            var c = e[t] ^ r[0];
            var l = e[t + 1] ^ r[1];
            var u = e[t + 2] ^ r[2];
            var f = e[t + 3] ^ r[3];
            var p = 4;

            for (var d = 1; d < _; d++) {
                var g = n[c >>> 24] ^ i[l >>> 16 & 255] ^ o[u >>> 8 & 255] ^ a[f & 255] ^ r[p++];
                var h = n[l >>> 24] ^ i[u >>> 16 & 255] ^ o[f >>> 8 & 255] ^ a[c & 255] ^ r[p++];
                var v = n[u >>> 24] ^ i[f >>> 16 & 255] ^ o[c >>> 8 & 255] ^ a[l & 255] ^ r[p++];
                var m = n[f >>> 24] ^ i[c >>> 16 & 255] ^ o[l >>> 8 & 255] ^ a[u & 255] ^ r[p++];
                c = g;
                l = h;
                u = v;
                f = m;
            }

            var g = (s[c >>> 24] << 24 | s[l >>> 16 & 255] << 16 | s[u >>> 8 & 255] << 8 | s[f & 255]) ^ r[p++];
            var h = (s[l >>> 24] << 24 | s[u >>> 16 & 255] << 16 | s[f >>> 8 & 255] << 8 | s[c & 255]) ^ r[p++];
            var v = (s[u >>> 24] << 24 | s[f >>> 16 & 255] << 16 | s[c >>> 8 & 255] << 8 | s[l & 255]) ^ r[p++];
            var m = (s[f >>> 24] << 24 | s[c >>> 16 & 255] << 16 | s[l >>> 8 & 255] << 8 | s[u & 255]) ^ r[p++];
            e[t] = g;
            e[t + 1] = h;
            e[t + 2] = v;
            e[t + 3] = m;
        },
        "keySize": 256 / 32
    });
    e["AES"] = h["YxJB"](I);
    return e["AES"];
}

function Jcnh(e) {
    var t = this;
    t["oXQl"] = ijs_();
    t["jpoX"]({
        "protocol": "https://"
    })["jpoX"](e);
}

Jcnh["prototype"] = {
    "challenge": "",
    "gt": "",
    "type": "fullpage",
    "api_server": "api.geetest.com",
    "static_servers": ["static.geetest.com", "dn-staticdown.qbox.me"],
    "product": "popup",
    "lang": "zh-cn",
    "width": 300,
    "logo": true,
    "protocol": "http://",
    "https": false,
    "version": "8.9.5",
    "theme": "wind",
    "theme_version": "1.5.8",
    "homepage": "http://www.geetest.com/first_page",
    "jpoX": function (e) {
        var t = this;
        mawH(t, e);
        return t;
    }
};

function YSAn() {
    var e = this;
    e["gJJw"] = e["yvbT"]();
}

YSAn["prototype"] = {
    "AMqW": -1,
    "BhoB": 1,
    "CTWE": 0,
    "DslD": function (e) {
        var t = this;
        return e ? t["BhoB"] : t["CTWE"];
    },
    "ETLe": function (e) {
        return typeof e === "undefined";
    },
    "FMnt": ["A", "ARTICLE", "ASIDE", "AUDIO", "BASE", "BUTTON", "CANVAS", "CODE", "IFRAME", "IMG", "INPUT", "LABEL", "LINK", "NAV", "OBJECT", "OL", "PICTURE", "PRE", "SECTION", "SELECT", "SOURCE", "SPAN", "STYLE", "TABLE", "TEXTAREA", "VIDEO"],
    "GxTv": ["DIV", "P", "UL", "LI", "SCRIPT"],
    "HfEi": function () {
        return ["textLength", "HTMLLength", "documentMode"]["concat"](this["FMnt"])["concat"](["screenLeft", "screenTop", "screenAvailLeft", "screenAvailTop", "innerWidth", "innerHeight", "outerWidth", "outerHeight", "browserLanguage", "browserLanguages", "systemLanguage", "devicePixelRatio", "colorDepth", "userAgent", "cookieEnabled", "netEnabled", "screenWidth", "screenHeight", "screenAvailWidth", "screenAvailHeight", "localStorageEnabled", "sessionStorageEnabled", "indexedDBEnabled", "CPUClass", "platform", "doNotTrack", "timezone", "canvas2DFP", "canvas3DFP", "plugins", "maxTouchPoints", "flashEnabled", "javaEnabled", "hardwareConcurrency", "jsFonts", "timestamp", "performanceTiming", "internalip", "mediaDevices"])["concat"](this["GxTv"])["concat"](["deviceorientation", "touchEvent"]);
    },
    "yvbT": function () {
        var e = window;
        var t = e["screen"];
        var f = e["document"];
        var p = e["navigator"];
        var r = f["documentElement"];
        var a = 1;
        var d = this;
        var s = {};

        function _(e) {
            if (!e) {
                return;
            }

            var t = e["nodeType"];

            if (t === a) {
                var r = (e["nodeName"] || "")["toUpperCase"]();

                if (new oqaj(d["FMnt"]["concat"](d["GxTv"]))["eyOQ"](r) > -1) {
                    if (s[r]) {
                        s[r] += 1;
                    } else {
                        s[r] = 1;
                    }
                }
            }

            var n = e["childNodes"];

            for (var i = 0, o = n["length"]; i < o; i = i + 1) {
                _(n[i]);
            }
        }

        _(f);

        var n = r["textContent"] || r["innerText"];
        s["textLength"] = n["length"];

        try {
            var i = r["innerHTML"];
            s["HTMLLength"] = i["length"];
        } catch (g) {}

        s["documentMode"] = f["documentMode"] || f["compatMode"];
        s["browserLanguage"] = p["language"] || p["userLanguage"];
        s["browserLanguages"] = p["languages"] && p["languages"]["join"](",");
        s["systemLanguage"] = p["systemLanguage"];
        s["devicePixelRatio"] = e["devicePixelRatio"];
        s["colorDepth"] = t["colorDepth"];
        s["userAgent"] = p["userAgent"];
        s["cookieEnabled"] = d["DslD"](p["cookieEnabled"]);
        s["netEnabled"] = d["DslD"](p["onLine"]);
        s["innerWidth"] = e["innerWidth"];
        s["innerHeight"] = e["innerHeight"];

        try {
            s["outerWidth"] = e["outerWidth"];
            s["outerHeight"] = e["outerHeight"];
        } catch (g) {
            s["outerWidth"] = d["CTWE"];
            s["outerHeight"] = d["CTWE"];
        }

        s["screenWidth"] = t["width"];
        s["screenHeight"] = t["height"];
        s["screenAvailWidth"] = t["availWidth"];
        s["screenAvailHeight"] = t["availHeight"];
        s["screenLeft"] = t["left"] || e["screenLeft"];
        s["screenTop"] = t["top"] || e["screenTop"];
        s["screenAvailLeft"] = t["availLeft"];
        s["screenAvailTop"] = t["availTop"];

        try {
            s["localStorageEnabled"] = d["DslD"](e["localStorage"]);
        } catch (g) {
            s["localStorageEnabled"] = d["CTWE"];
        }

        try {
            s["sessionStorageEnabled"] = d["DslD"](e["sessionStorage"]);
        } catch (g) {
            s["sessionStorageEnabled"] = d["CTWE"];
        }

        s["indexedDBEnabled"] = d["DslD"](e["indexedDB"]);
        s["CPUClass"] = p["cpuClass"];
        s["platform"] = p["platform"];
        s["doNotTrack"] = d["DslD"](p["doNotTrack"]);
        s["timezone"] = new Date()["getTimezoneOffset"]() / 60;

        s["canvas2DFP"] = function () {
            var e = f["createElement"]("canvas");
            var t = e["getContext"] && e["getContext"]("2d");

            if (t) {
                var r = [];
                e["width"] = 2e3;
                e["height"] = 200;
                e["style"]["display"] = "inline";
                t["rect"](0, 0, 11, 11);
                t["rect"](3, 3, 6, 6);
                r["push"]("canvas winding:" + (t["isPointInPath"](5, 5, "evenodd") === false ? "yes" : "no"));
                t["textBaseline"] = "alphabetic";
                t["fillStyle"] = "#f60";
                t["fillRect"](125, 1, 62, 20);
                t["fillStyle"] = "#069";
                t["font"] = "11pt Arial";
                t["fillText"]("Cwm fjordbank glyphs vext quiz, \uD83D\uDE03", 2, 15);
                t["fillStyle"] = "rgba(102, 204, 0, 0.7)";
                t["font"] = "18pt Arial";
                t["fillText"]("Cwm fjordbank glyphs vext quiz, \uD83D\uDE03", 4, 45);
                t["globalCompositeOperation"] = "multiply";
                t["fillStyle"] = "rgb(255,0,255)";
                t["beginPath"]();
                t["arc"](52, 50, 50, 0, Math["PI"] * 2, true);
                t["closePath"]();
                t["fill"]();
                t["fillStyle"] = "rgb(0,255,255)";
                t["beginPath"]();
                t["arc"](100, 50, 50, 0, Math["PI"] * 2, true);
                t["closePath"]();
                t["fill"]();
                t["fillStyle"] = "rgb(255,255,0)";
                t["beginPath"]();
                t["arc"](75, 100, 50, 0, Math["PI"] * 2, true);
                t["closePath"]();
                t["fill"]();
                t["fillStyle"] = "rgb(255,0,255)";
                t["arc"](75, 75, 75, 0, Math["PI"] * 2, true);
                t["arc"](75, 75, 25, 0, Math["PI"] * 2, true);
                t["fill"]("evenodd");
                r["push"]("canvas fp:" + e["toDataURL"]());
                return AHdO(r["join"]("~"));
            } else {
                return d["CTWE"];
            }
        }();

        s["canvas3DFP"] = function () {
            try {
                if (/\(i[^;]+;( U;)? CPU.+Mac OS X/["test"](p["userAgent"])) {
                    return d["CTWE"];
                }

                var e = f["createElement"]("canvas");
                var t = e["getContext"] && (e["getContext"]("webgl") || e["getContext"]("experimental-webgl"));

                if (t) {
                    function r(e) {
                        t["clearColor"](0, 0, 0, 1);
                        t["enable"](t["DEPTH_TEST"]);
                        t["depthFunc"](t["LEQUAL"]);
                        t["clear"](t["COLOR_BUFFER_BIT"] | t["DEPTH_BUFFER_BIT"]);
                        return "[" + e[0] + ", " + e[1] + "]";
                    }

                    function n(e) {
                        var t,
                            r = e["getExtension"]("EXT_texture_filter_anisotropic") || e["getExtension"]("WEBKIT_EXT_texture_filter_anisotropic") || e["getExtension"]("MOZ_EXT_texture_filter_anisotropic");
                        return r ? (t = e["getParameter"](r["MAX_TEXTURE_MAX_ANISOTROPY_EXT"]), 0 === t && (t = 2), t) : null;
                    }

                    var i = [];
                    var o = "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}";
                    var a = "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}";
                    var s = t["createBuffer"]();
                    t["bindBuffer"](t["ARRAY_BUFFER"], s);

                    var _ = new Float32Array([-.2, -.9, 0, .4, -.26, 0, 0, .732134444, 0]);

                    t["bufferData"](t["ARRAY_BUFFER"], _, t["STATIC_DRAW"]);
                    s["itemSize"] = 3;
                    s["numItems"] = 3;
                    var c = t["createProgram"](),
                        l = t["createShader"](t["VERTEX_SHADER"]);
                    t["shaderSource"](l, o);
                    t["compileShader"](l);
                    var u = t["createShader"](t["FRAGMENT_SHADER"]);
                    t["shaderSource"](u, a);
                    t["compileShader"](u);
                    t["attachShader"](c, l);
                    t["attachShader"](c, u);
                    t["linkProgram"](c);
                    t["useProgram"](c);
                    c["vertexPosAttrib"] = t["getAttribLocation"](c, "attrVertex");
                    c["offsetUniform"] = t["getUniformLocation"](c, "uniformOffset");
                    t["enableVertexAttribArray"](c["vertexPosArray"]);
                    t["vertexAttribPointer"](c["vertexPosAttrib"], s["itemSize"], t["FLOAT"], !1, 0, 0);
                    t["uniform2f"](c["offsetUniform"], 1, 1);
                    t["drawArrays"](t["TRIANGLE_STRIP"], 0, s["numItems"]);

                    if (t["canvas"] != null) {
                        i["push"](t["canvas"]["toDataURL"]());
                    }

                    i["push"]("extensions:" + t["getSupportedExtensions"]()["join"](";"));
                    i["push"]("webgl aliased line width range:" + r(t["getParameter"](t["ALIASED_LINE_WIDTH_RANGE"])));
                    i["push"]("webgl aliased point size range:" + r(t["getParameter"](t["ALIASED_POINT_SIZE_RANGE"])));
                    i["push"]("webgl alpha bits:" + t["getParameter"](t["ALPHA_BITS"]));
                    i["push"]("webgl antialiasing:" + (t["getContextAttributes"]()["antialias"] ? "yes" : "no"));
                    i["push"]("webgl blue bits:" + t["getParameter"](t["BLUE_BITS"]));
                    i["push"]("webgl depth bits:" + t["getParameter"](t["DEPTH_BITS"]));
                    i["push"]("webgl green bits:" + t["getParameter"](t["GREEN_BITS"]));
                    i["push"]("webgl max anisotropy:" + n(t));
                    i["push"]("webgl max combined texture image units:" + t["getParameter"](t["MAX_COMBINED_TEXTURE_IMAGE_UNITS"]));
                    i["push"]("webgl max cube map texture size:" + t["getParameter"](t["MAX_CUBE_MAP_TEXTURE_SIZE"]));
                    i["push"]("webgl max fragment uniform vectors:" + t["getParameter"](t["MAX_FRAGMENT_UNIFORM_VECTORS"]));
                    i["push"]("webgl max render buffer size:" + t["getParameter"](t["MAX_RENDERBUFFER_SIZE"]));
                    i["push"]("webgl max texture image units:" + t["getParameter"](t["MAX_TEXTURE_IMAGE_UNITS"]));
                    i["push"]("webgl max texture size:" + t["getParameter"](t["MAX_TEXTURE_SIZE"]));
                    i["push"]("webgl max varying vectors:" + t["getParameter"](t["MAX_VARYING_VECTORS"]));
                    i["push"]("webgl max vertex attribs:" + t["getParameter"](t["MAX_VERTEX_ATTRIBS"]));
                    i["push"]("webgl max vertex texture image units:" + t["getParameter"](t["MAX_VERTEX_TEXTURE_IMAGE_UNITS"]));
                    i["push"]("webgl max vertex uniform vectors:" + t["getParameter"](t["MAX_VERTEX_UNIFORM_VECTORS"]));
                    i["push"]("webgl max viewport dims:" + r(t["getParameter"](t["MAX_VIEWPORT_DIMS"])));
                    i["push"]("webgl red bits:" + t["getParameter"](t["RED_BITS"]));
                    i["push"]("webgl renderer:" + t["getParameter"](t["RENDERER"]));
                    i["push"]("webgl shading language version:" + t["getParameter"](t["SHADING_LANGUAGE_VERSION"]));
                    i["push"]("webgl stencil bits:" + t["getParameter"](t["STENCIL_BITS"]));
                    i["push"]("webgl vendor:" + t["getParameter"](t["VENDOR"]));
                    i["push"]("webgl version:" + t["getParameter"](t["VERSION"]));

                    if (!t["getShaderPrecisionFormat"]) {
                        return AHdO(i["join"]("~"));
                    }

                    i["push"]("webgl vertex shader high float precision:" + t["getShaderPrecisionFormat"](t["VERTEX_SHADER"], t["HIGH_FLOAT"])["precision"]);
                    i["push"]("webgl vertex shader high float precision rangeMin:" + t["getShaderPrecisionFormat"](t["VERTEX_SHADER"], t["HIGH_FLOAT"])["rangeMin"]);
                    i["push"]("webgl vertex shader high float precision rangeMax:" + t["getShaderPrecisionFormat"](t["VERTEX_SHADER"], t["HIGH_FLOAT"])["rangeMax"]);
                    i["push"]("webgl vertex shader medium float precision:" + t["getShaderPrecisionFormat"](t["VERTEX_SHADER"], t["MEDIUM_FLOAT"])["precision"]);
                    i["push"]("webgl vertex shader medium float precision rangeMin:" + t["getShaderPrecisionFormat"](t["VERTEX_SHADER"], t["MEDIUM_FLOAT"])["rangeMin"]);
                    i["push"]("webgl vertex shader medium float precision rangeMax:" + t["getShaderPrecisionFormat"](t["VERTEX_SHADER"], t["MEDIUM_FLOAT"])["rangeMax"]);
                    i["push"]("webgl vertex shader low float precision:" + t["getShaderPrecisionFormat"](t["VERTEX_SHADER"], t["LOW_FLOAT"])["precision"]);
                    i["push"]("webgl vertex shader low float precision rangeMin:" + t["getShaderPrecisionFormat"](t["VERTEX_SHADER"], t["LOW_FLOAT"])["rangeMin"]);
                    i["push"]("webgl vertex shader low float precision rangeMax:" + t["getShaderPrecisionFormat"](t["VERTEX_SHADER"], t["LOW_FLOAT"])["rangeMax"]);
                    i["push"]("webgl fragment shader high float precision:" + t["getShaderPrecisionFormat"](t["FRAGMENT_SHADER"], t["HIGH_FLOAT"])["precision"]);
                    i["push"]("webgl fragment shader high float precision rangeMin:" + t["getShaderPrecisionFormat"](t["FRAGMENT_SHADER"], t["HIGH_FLOAT"])["rangeMin"]);
                    i["push"]("webgl fragment shader high float precision rangeMax:" + t["getShaderPrecisionFormat"](t["FRAGMENT_SHADER"], t["HIGH_FLOAT"])["rangeMax"]);
                    i["push"]("webgl fragment shader medium float precision:" + t["getShaderPrecisionFormat"](t["FRAGMENT_SHADER"], t["MEDIUM_FLOAT"])["precision"]);
                    i["push"]("webgl fragment shader medium float precision rangeMin:" + t["getShaderPrecisionFormat"](t["FRAGMENT_SHADER"], t["MEDIUM_FLOAT"])["rangeMin"]);
                    i["push"]("webgl fragment shader medium float precision rangeMax:" + t["getShaderPrecisionFormat"](t["FRAGMENT_SHADER"], t["MEDIUM_FLOAT"])["rangeMax"]);
                    i["push"]("webgl fragment shader low float precision:" + t["getShaderPrecisionFormat"](t["FRAGMENT_SHADER"], t["LOW_FLOAT"])["precision"]);
                    i["push"]("webgl fragment shader low float precision rangeMin:" + t["getShaderPrecisionFormat"](t["FRAGMENT_SHADER"], t["LOW_FLOAT"])["rangeMin"]);
                    i["push"]("webgl fragment shader low float precision rangeMax:" + t["getShaderPrecisionFormat"](t["FRAGMENT_SHADER"], t["LOW_FLOAT"])["rangeMax"]);
                    i["push"]("webgl vertex shader high int precision:" + t["getShaderPrecisionFormat"](t["VERTEX_SHADER"], t["HIGH_INT"])["precision"]);
                    i["push"]("webgl vertex shader high int precision rangeMin:" + t["getShaderPrecisionFormat"](t["VERTEX_SHADER"], t["HIGH_INT"])["rangeMin"]);
                    i["push"]("webgl vertex shader high int precision rangeMax:" + t["getShaderPrecisionFormat"](t["VERTEX_SHADER"], t["HIGH_INT"])["rangeMax"]);
                    i["push"]("webgl vertex shader medium int precision:" + t["getShaderPrecisionFormat"](t["VERTEX_SHADER"], t["MEDIUM_INT"])["precision"]);
                    i["push"]("webgl vertex shader medium int precision rangeMin:" + t["getShaderPrecisionFormat"](t["VERTEX_SHADER"], t["MEDIUM_INT"])["rangeMin"]);
                    i["push"]("webgl vertex shader medium int precision rangeMax:" + t["getShaderPrecisionFormat"](t["VERTEX_SHADER"], t["MEDIUM_INT"])["rangeMax"]);
                    i["push"]("webgl vertex shader low int precision:" + t["getShaderPrecisionFormat"](t["VERTEX_SHADER"], t["LOW_INT"])["precision"]);
                    i["push"]("webgl vertex shader low int precision rangeMin:" + t["getShaderPrecisionFormat"](t["VERTEX_SHADER"], t["LOW_INT"])["rangeMin"]);
                    i["push"]("webgl vertex shader low int precision rangeMax:" + t["getShaderPrecisionFormat"](t["VERTEX_SHADER"], t["LOW_INT"])["rangeMax"]);
                    i["push"]("webgl fragment shader high int precision:" + t["getShaderPrecisionFormat"](t["FRAGMENT_SHADER"], t["HIGH_INT"])["precision"]);
                    i["push"]("webgl fragment shader high int precision rangeMin:" + t["getShaderPrecisionFormat"](t["FRAGMENT_SHADER"], t["HIGH_INT"])["rangeMin"]);
                    i["push"]("webgl fragment shader high int precision rangeMax:" + t["getShaderPrecisionFormat"](t["FRAGMENT_SHADER"], t["HIGH_INT"])["rangeMax"]);
                    i["push"]("webgl fragment shader medium int precision:" + t["getShaderPrecisionFormat"](t["FRAGMENT_SHADER"], t["MEDIUM_INT"])["precision"]);
                    i["push"]("webgl fragment shader medium int precision rangeMin:" + t["getShaderPrecisionFormat"](t["FRAGMENT_SHADER"], t["MEDIUM_INT"])["rangeMin"]);
                    i["push"]("webgl fragment shader medium int precision rangeMax:" + t["getShaderPrecisionFormat"](t["FRAGMENT_SHADER"], t["MEDIUM_INT"])["rangeMax"]);
                    i["push"]("webgl fragment shader low int precision:" + t["getShaderPrecisionFormat"](t["FRAGMENT_SHADER"], t["LOW_INT"])["precision"]);
                    i["push"]("webgl fragment shader low int precision rangeMin:" + t["getShaderPrecisionFormat"](t["FRAGMENT_SHADER"], t["LOW_INT"])["rangeMin"]);
                    i["push"]("webgl fragment shader low int precision rangeMax:" + t["getShaderPrecisionFormat"](t["FRAGMENT_SHADER"], t["LOW_INT"])["rangeMax"]);
                    return AHdO(i["join"]("~"));
                } else {
                    return d["CTWE"];
                }
            } catch (g) {
                return d["CTWE"];
            }
        }();

        s["plugins"] = function () {
            if (!p["plugins"]) {
                return d["AMqW"];
            }

            var e = [];
            var t = 40;
            var r = p["plugins"]["length"] > t ? t : p["plugins"]["length"];

            for (var n = 0, i = r; n < i; n = n + 1) {
                var o = p["plugins"][n];
                e["push"](o["filename"] && o["filename"]["replace"](/\s/g, ""));
            }

            return e["join"](",");
        }();

        s["maxTouchPoints"] = function () {
            if (!d["ETLe"](p["maxTouchPoints"])) {
                return p["maxTouchPoints"];
            } else if (!d["ETLe"](p["msMaxTouchPoints"])) {
                return p["msMaxTouchPoints"];
            } else {
                return 0;
            }
        }();

        s["flashEnabled"] = function () {
            if (d["ETLe"](e["swfobject"])) {
                return d["AMqW"];
            } else {
                return d["DslD"](e["swfobject"]["hasFlashPlayerVersion"] && e["swfobject"]["hasFlashPlayerVersion"]("9.0.0"));
            }
        }();

        s["javaEnabled"] = function () {
            try {
                if (d["ETLe"](p["javaEnabled"])) {
                    return d["AMqW"];
                } else {
                    return d["DslD"](p["javaEnabled"]());
                }
            } catch (g) {
                return d["AMqW"];
            }
        }();

        s["hardwareConcurrency"] = p["hardwareConcurrency"];
        s["jsFonts"] = SDKb || TQAA || QYtn ? ["monospace", "sans-serif", "serif"]["join"](",") : function () {
            var s = ["monospace", "sans-serif", "serif"];
            var _ = ["Andale Mono", "Arial", "Arial Black", "Arial Hebrew", "Arial MT", "Arial Narrow", "Arial Rounded MT Bold", "Arial Unicode MS", "Bitstream Vera Sans Mono", "Book Antiqua", "Bookman Old Style", "Calibri", "Cambria", "Cambria Math", "Century", "Century Gothic", "Century Schoolbook", "Comic Sans", "Comic Sans MS", "Consolas", "Courier", "Courier New", "Garamond", "Geneva", "Georgia", "Helvetica", "Helvetica Neue", "Impact", "Lucida Bright", "Lucida Calligraphy", "Lucida Console", "Lucida Fax", "LUCIDA GRANDE", "Lucida Handwriting", "Lucida Sans", "Lucida Sans Typewriter", "Lucida Sans Unicode", "Microsoft Sans Serif", "Monaco", "Monotype Corsiva", "MS Gothic", "MS Outlook", "MS PGothic", "MS Reference Sans Serif", "MS Sans Serif", "MS Serif", "MYRIAD", "MYRIAD PRO", "Palatino", "Palatino Linotype", "Segoe Print", "Segoe Script", "Segoe UI", "Segoe UI Light", "Segoe UI Semibold", "Segoe UI Symbol", "Tahoma", "Times", "Times New Roman", "Times New Roman PS", "Trebuchet MS", "Verdana", "Wingdings", "Wingdings 2", "Wingdings 3"];
            var t = "mmmmmmmmmmlli";
            var r = "72px";
            var e = document["getElementsByTagName"]("body")[0];

            if (!e) {
                s["push"]("Aria1");
                return s["join"](",");
            }

            var i = document["createElement"]("div");
            var c = document["createElement"]("div");
            var n = {};
            var o = {};

            function a() {
                var e = document["createElement"]("span");
                e["style"]["position"] = "absolute";
                e["style"]["left"] = "-9999px";
                e["style"]["fontSize"] = r;
                e["innerHTML"] = t;
                return e;
            }

            function l(e, t) {
                var r = a();
                r["style"]["fontFamily"] = "'" + e + "'," + t;
                return r;
            }

            function u() {
                var e = [];

                for (var t = 0, r = s["length"]; t < r; t++) {
                    var n = a();
                    n["style"]["fontFamily"] = s[t];
                    i["appendChild"](n);
                    e["push"](n);
                }

                return e;
            }

            function f() {
                var e = {};

                for (var t = 0, r = _["length"]; t < r; t++) {
                    var n = [];

                    for (var i = 0, o = s["length"]; i < o; i++) {
                        var a = l(_[t], s[i]);
                        c["appendChild"](a);
                        n["push"](a);
                    }

                    e[_[t]] = n;
                }

                return e;
            }

            function p(e) {
                var t = false;

                for (var r = 0; r < s["length"]; r++) {
                    t = e[r]["offsetWidth"] !== n[s[r]] || e[r]["offsetHeight"] !== o[s[r]];

                    if (t) {
                        return t;
                    }
                }

                return t;
            }

            var d = u();
            e["appendChild"](i);

            for (var g = 0, h = s["length"]; g < h; g++) {
                n[s[g]] = d[g]["offsetWidth"];
                o[s[g]] = d[g]["offsetHeight"];
            }

            var v = f();
            e["appendChild"](c);
            var m = [];

            for (var w = 0, E = _["length"]; w < E; w++) {
                if (p(v[_[w]])) {
                    m["push"](_[w]["replace"](/\s/g, ""));
                }
            }

            var x = m["join"](",");
            e["removeChild"](c);
            e["removeChild"](i);
            return x;
        }();
        s["mediaDevices"] = d["AMqW"];
        return s;
    },
    "vczM": function () {
        return this["wheJ"]()["length"];
    },
    "xMDL": function (e, t) {
        var r = this;
        var n = "magic data";
        var i = r["gJJw"];
        var o = [];
        new oqaj(r["HfEi"]())["cgve"](function (e) {
            var t = i[e];
            o["push"](r["ETLe"](t) ? r["AMqW"] : t);
        });
        return o["join"](n);
    },
    "wheJ": function () {
        var e = window;
        var r = this;
        var n = r["gJJw"];
        n["timestamp"] = new Date()["getTime"]();
        n["deviceorientation"] = r["AMqW"];
        n["touchEvent"] = r["AMqW"];
        n["performanceTiming"] = r["AMqW"];
        n["internalip"] = r["AMqW"];
        var i = [];
        new oqaj(r["HfEi"]())["cgve"](function (e) {
            var t = n[e];
            i["push"](r["ETLe"](t) ? r["AMqW"] : t);
        });
        return i["join"]("!!");
    }
};

function Pxag(e) {
    this["KpcW"] = e;
    this["LFBG"] = {};
}

Pxag["prototype"] = {
    "MHrm": function (e, t) {
        var r = this;

        if (r["LFBG"][e]) {
            r["LFBG"][e]["push"](t);
        } else {
            r["LFBG"][e] = [t];
        }

        return r;
    },
    "NTKW": function (e, t) {
        var r = this;
        var n = r["LFBG"][e];

        if (!n) {
            return;
        }

        for (var i = 0, o = n["length"]; i < o; i = i + 1) {
            try {
                n[i](t);
            } catch (s) {
                var a = {
                    "error": s,
                    "type": e
                };
                return yXEh(vvPR("user_callback", r["KpcW"], a));
            }
        }

        return r;
    },
    "OHSz": function () {
        this["LFBG"] = {};
    }
};

function RlkK(e) {
    var t = this;
    t["PTjN"] = e;
}

RlkK["prototype"] = {
    "rpeB": function (e) {
        var t = this;
        t["QIdb"] = t["RtPY"];
        t["RtPY"] = e;
        t["PTjN"](t["RtPY"], t["QIdb"]);
        return t;
    },
    "ssRC": function () {
        var e = this;
        return e["RtPY"];
    },
    "Svvj": function (e) {
        var t = this;
        var r = oqaj["TGrk"](e) ? e : [e];

        for (var n = 0, i = r["length"]; n < i; n = n + 1) {
            if (r[n] === t["ssRC"]()) {
                return true;
            }
        }

        return false;
    }
};

function FpgG(e, t) {
    var r = this;
    var n = new Jcnh(e);

    if (n["remUnit"] && !isNaN(n["remUnit"])) {
        NcWZ = "rem";
        ODvp = n["remUnit"];
    }

    if (n["https"]) {
        n["protocol"] = "https://";
    }

    if (e["debugConfig"]) {
        n["jpoX"](e["debugConfig"]);
    }

    if (n["product"] !== "float" && n["product"] !== "popup" && n["product"] !== "custom" && n["product"] !== "bind") {
        n["product"] = "float";
    }

    if (RYbA || SDKb) {
        if (n["product"] === "float") {
            n["product"] = "popup";
        }
    }

    if (SDKb) {
        if (n["product"] === "custom") {
            n["product"] = "popup";
        }
    }

    n["cc"] = navigator["hardwareConcurrency"] || 0;
    n["supportWorker"] = typeof Worker !== "undefined";
    // 获取指纹数据并给e["gJJw"]赋值，其中这个eJJw这个属性对后续的指纹拼接有用
    r["kmZ_"] = new YSAn();
    r["uTWm"] = n;
    r["tGGi"] = e;
    r["lXXp"] = new Pxag(r);
    r["RtPY"] = new RlkK(function (e, t) {
        r["mffN"](e, t);
    });
    r["nDQV"] = t;
    r["oodf"] = RYbA ? 3 : 0;
    r["pKuL"] = -1;
    r["uTWm"]["pXsn"] = {
        "pt": r["oodf"]
    };
    r["RtPY"]["rpeB"](aUmM);
    r["qfNr"] = new QhZS();
    r["JjWc"] = new ZgUV();
}

FpgG["prototype"] = {
    "mffN": function (e, t) {
        var r = this;
        var n = r["rUoX"];
        var i = r["RtPY"];
        var o = r["lXXp"];
        var a = r["uTWm"];
        var s = a["product"] === "bind";

        if (i["Svvj"](t)) {
            return;
        }

        if (t === onLB) {
            return;
        }

        if (!i["Svvj"](aUmM)) {
            n && n["sozm"](e, t);
            n && n["tNIg"]();
        }

        if (i["Svvj"](aUmM)) {
            r["uTwk"] = r["CDBn"]()["OuEu"](function () {
                i["rpeB"](bRhv);
                o["NTKW"](aUmM);

                if (a["vip_content"]) {
                    r["vyNg"]();
                }
            });
        } else if (i["Svvj"](iYqK)) {
            n["yGDm"](r["wEWN"]);
        } else if (i["Svvj"](jUSx)) {
            n["xHvC"]();

            if (s && a["pure"]) {
                o["NTKW"](jUSx);
            }
        } else if (i["Svvj"](kV_c)) {
            n["ydrz"]();
            o["NTKW"](qSzs);
        } else if (i["Svvj"]([gxoA])) {
            n["Acbi"](r["BwKU"]);
            OiIN(function () {
                if (s) {
                    r["qfNr"] = new QhZS();
                    n["CAkX"]();

                    if (a["pure"]) {
                        OiIN(function () {
                            n["DZGG"]();
                        }, 300);
                    }
                } else {
                    r["qfNr"]["OHSz"]();
                }

                o["NTKW"](mwAE);
            }, 400);
        } else if (i["Svvj"]([hcOc, ldqb])) {
            if (s) {
                if (a["pure"]) {
                    n && n["CAkX"]();
                    OiIN(function () {
                        n && n["DZGG"]();
                    }, 300);
                } else {
                    n && n["DZGG"]();
                    n && n["EMEc"]();
                }
            }

            if (r["Fvnb"] && r["Fvnb"]["code"] === "error_21" && n) {
                n["GJYN"]();
            }

            o["NTKW"](nsV_, r["Fvnb"]);
        } else if (i["Svvj"](COMPUTE_2)) {
            if (s && !a["pure"]) {
                n["HyKS"]();
            }

            n["Iknl"]();
        } else if (i["Svvj"](rtZO)) {
            return;
        }
    },
    "CDBn": function () {
        var t = this;
        var r = t["uTWm"];

        if (!r["gt"] || !r["challenge"]) {
            return yXEh(vvPR("config_lack", t));
        }
        var e = t["kmZ_"]["wheJ"]();
        t["JjbT"] = e;
        t["tGGi"]["cc"] = r["cc"];
        t["tGGi"]["ww"] = r["supportWorker"];
        t["tGGi"]["i"] = e;
        var n = t["KAdz"]();
        var i = DBnu()["encrypt1"](JSON.stringify(t["tGGi"]), LWME());
        var o = ZApR["fLFi"](i);
        debugger;
        var a = {
            "gt": t["tGGi"]["gt"],
            "challenge": t["tGGi"]["challenge"],
            "lang": r["lang"],
            "pt": t["oodf"],
            "w": o + n
        };
        return nJFX(r, ZApR["hLsM"]("fFtZ0VaY4Gg"), a)["OuEu"](function (e) {
            if (e["status"] === nsV_) {
                return yXEh(wOKE(e, t, "/get.php"));
            }

            r["jpoX"](e["data"]);

            if (r["apiserver"]) {
                r["api_server"] = r["apiserver"];
            }

            if (r["staticservers"]) {
                r["static_servers"] = r["staticservers"];
            }

            if (r["debugConfig"]) {
                r["jpoX"](r["debugConfig"]);
            }

            t["rUoX"] = new UI(t);
            t["MljG"]();
            return t["rUoX"]["NKZO"];
        }, function () {
            return yXEh(vvPR("url_get", t));
        });
    },
    "MljG": function () {
        var e = this;
        var t = e["uTWm"];
        var r = e["RtPY"];
        var n = e["$"];

        try {
            if (document && document["getElementById"] && document["getElementById"]("geetest_data_share_plugin")) {
                var i = document["getElementById"]("geetest_data_share_plugin");
                var o = new CustomEvent("geetestPlugin", {
                    "detail": {
                        "challenge": t["challenge"],
                        "gt": t["gt"]
                    }
                });
                i["addEventListener"]("geetestEvent", function (e) {
                    if (t["product"] !== "bind") {
                        r["rpeB"](COMPUTE_2);
                    }
                });
                i["dispatchEvent"](o);
            }
        } catch (a) {}
    },
    "OHSz": function () {
        var e = this;
        e["rUoX"] && e["rUoX"]["OHSz"]();
        e["lXXp"]["OHSz"]();
        e["qfNr"]["OHSz"]();
        e["JjWc"]["OHSz"]();

        if (e["OmgV"]) {
            e["OmgV"]["OHSz"]();
        }
    },
    "veYs": function (e) {
        var t = this;
        t["Fvnb"] = e;
        t["RtPY"]["rpeB"](hcOc);
        return t;
    },
    "mxsH": function (e) {
        var t = this;

        if (t["uTWm"]["product"] === "bind") {
            return t;
        }

        t["uTwk"]["OuEu"](function () {
            t["rUoX"]["mxsH"](e);
        });
        return t;
    },
    "PTya": function (e) {
        this["Qgam"] = e;
    },
    "RWLH": function (e) {
        this["SMAy"] = e;
    },
    "TAPL": function (e) {
        var t = this;
        t["uTwk"]["OuEu"](function () {
            t["rUoX"]["TAPL"](e);
        });
    },
    "UUNb": function (e) {
        var t = this;
        t["uTwk"]["OuEu"](function () {
            t["rUoX"]["UUNb"](e);
        });
    },
    "VBIt": function () {
        var e = this;

        if (!e["uTWm"]["vip_content"]) {
            e["WPls"]();
            return;
        }

        if (e["YZgI"] === true) {
            return;
        }

        e["YZgI"] = true;
        e["ZFrj"]();
        ;
    },
    "ZFrj": function () {
        var e = this;
        PwCj(e["aExu"]);

        if (!e["powworkerdone"] && e["pow_progress"]) {
            e["aExu"] = OiIN(function () {
                e["powworkerdone"] = true;
                e["OmgV"]["cptv"]();
                e["ZFrj"]();
            }, 2e3);
        } else if (!e["powworkerdone"] && e["pow_starting"] && !e["pow_wait_once"]) {
            e["pow_wait_once"] = true;
            e["aExu"] = OiIN(function () {
                e["ZFrj"]();
            }, 500);
        } else {
            e["YZgI"] = false;
            e["pow_wait_once"] = false;
            e["WPls"]();
        }

        ;
    },
    "WPls": function () {
        var t = this;
        var e = t["uTWm"];
        t["bxfU"]();
        var r = {};
        r["gt"] = e["gt"];
        r["challenge"] = e["challenge"];
        r["lang"] = e["lang"] || "zh-cn";
        r["pt"] = t["oodf"];
        r["w"] = t["cmQn"];
        ;
        nJFX(t["uTWm"], ZApR["hLsM"]("fEkexGxOwUyY"), r)["OuEu"](function (e) {
            if (e["status"] === nsV_) {
                return yXEh(wOKE(e, t, "/ajax.php"));
            }

            t["dTy_"](e["data"]);
        }, function () {
            return yXEh(vvPR("url_ajax", t));
        });
        ;
    },
    "bxfU": function () {
        var _ = this;

        var e = _["qfNr"]["wheJ"]();

        var t = _["qfNr"]["xMDL"]();

        var r = _["kmZ_"]["xMDL"]();

        var n = _["JjWc"]["wheJ"]();

        var i = _["uTWm"];
        var o = lUJW() - Mqaf;
        _["eZBJ"] = "";
        var a = [["lang", i["lang"] || "zh-cn"], ["type", "fullpage"], ["tt", srID(e, i["c"], i["s"]) || -1], ["light", n || -1], ["s", AHdO(ZApR["eeom"](t))], ["h", AHdO(ZApR["eeom"](r))], ["hh", AHdO(r)], ["hi", AHdO(_["JjbT"])], ["vip_order", _["vip_order"] || -1], ["ct", _["ct"] || -1], ["ep", _["fpUO"]() || -1], ["passtime", o || -1], ["rp", AHdO(i["gt"] + i["challenge"] + o)]];

        for (var s = 0; s < a["length"]; s++) {
            _["eZBJ"] += "\"" + a[s][0] + "\":" + JSON.stringify(a[s][1]) + ",";
        }

        ;

        function GgAi() {
            var t = ["bbOy"];
            return function (e) {
                t["push"](e["toString"]());
                var HyWQ = "";

                (function addHash(e, t) {
                    function Ir_g(e) {
                        var t = 5381;
                        var r = e["length"],
                            n = 0;

                        while (r--) {
                            t = (t << 5) + t + e["charCodeAt"](n++);
                        }

                        t &= ~(1 << 31);
                        return t;
                    }

                    new Date()["getTime"]() - t["getTime"]() > 100 && (e = "qwe");
                    HyWQ = "{" + _["eZBJ"] + "\"captcha_token\":\"" + Ir_g(addHash["toString"]() + Ir_g(Ir_g["toString"]()) + Ir_g(e["toString"]())) + "\"" + "}";
                })(t["shift"](), new Date());

                _["cmQn"] = ZApR["fLFi"](DBnu()["encrypt"](HyWQ, LWME()));
            };
        }

        _["gngb"] = GgAi();

        _["gngb"]("");

        _["gngb"]("qnVopxEqYxiZNf1K");

        ;
    },
    "dTy_": function (e) {
        var t = this;
        var r = t["uTWm"];
        var n;

        if (e["result"] === "success") {
            var i = e["validate"]["split"]("|")[0];
            t["BwKU"] = {
                "geetest_challenge": r["challenge"],
                "geetest_validate": i,
                "geetest_seccode": i + "|jordan"
            };
            t["hAsx"] = e["score"];
            n = gxoA;
        } else if (e["result"] === "forbidden") {
            return yXEh(vvPR("server_forbidden", t));
        } else {
            n = iYqK;
            t["wEWN"] = e["result"];
        }

        t["RtPY"]["rpeB"](n);
    },
    "iXOK": function () {
        return this["BwKU"];
    },
    "jwRw": function () {
        this["BwKU"] = null;
    },
    "MHrm": function (e, t) {
        var r = this;
        r["lXXp"]["MHrm"](e, t);
        return r;
    },
    "kvq_": function () {
        var e = this;
        e["rUoX"] && e["rUoX"]["kvq_"]();
        return e;
    },
    "kuCm": function () {
        var e = this;
        var t = e["RtPY"];
        t["rpeB"](kV_c);
    },
    "leFD": function () {
        var e = this;
        var t = e["RtPY"];
        t["rpeB"](jUSx);
    },
    "lBaY": function () {
        var e = this;
        var t = e["rUoX"];
        var r = e["uTWm"];
        var n = e["RtPY"];

        if (r["product"] !== "bind") {
            return;
        }

        if (!(typeof this["SMAy"] === "function" ? this["SMAy"]() : true)) {
            return;
        }

        e["pKuL"] = 2;

        if (n["Svvj"](bRhv)) {
            n["rpeB"](COMPUTE_2);
        } else if (n["Svvj"](kV_c)) {
            n["rpeB"](jUSx);
        } else if (n["Svvj"]([hcOc, gxoA])) {
            t && t["kvq_"]()["OuEu"](function () {
                n["rpeB"](COMPUTE_2);
            });
        }
    },
    "vyNg": function () {
        var o = this;
        var e = o["uTWm"];
        o["powworkerdone"] = false;
        o["pow_starting"] = false;
        o["OmgV"] = new wYeb({
            "config": e,
            "beforeStart": function () {
                o["pow_starting"] = true;
            },
            "progress": function () {
                o["pow_progress"] = true;
            },
            "done": function (e, t) {
                o["powworkerdone"] = true;

                if (e) {
                    var r = e["join"]();

                    if (SDKb || TQAA) {
                        var n = r["split"](",");

                        for (var i = n["length"] - 1; i >= 0; i--) {
                            n[i] = Math["round"](n[i]);
                        }

                        r = n["join"]();
                    }

                    o["vip_order"] = r;
                    o["ct"] = t;
                } else {
                    o["vip_order"] = "";
                    o["ct"] = "";
                }

                if (o["YZgI"]) {
                    o["ZFrj"]();
                }
            }
        });
    },
    "mvCt": function () {
        var e = this;
        var t = e["uTWm"];

        if (e["OmgV"]) {
            e["powworkerdone"] = false;
            e["pow_starting"] = false;
            e["pow_progress"] = false;
            e["vip_order"] = "";
            e["ct"] = "";
            e["OmgV"]["bEtu"]({
                "vip_content": t["vip_content"],
                "vip_answer": t["vip_answer"],
                "vip_key": t["vip_key"]
            });
        }
    },
    "nCkz": function () {
        var e = this;
        var t = e["lXXp"];
        t["NTKW"](qSzs);
    },
    "fpUO": function () {
        var e = {};
        e["v"] = "8.9.5";
        var t = this["uTWm"] || {};
        e["de"] = JyFW["deviceorientation"];
        e["te"] = JyFW["touchEvent"];
        e["me"] = JyFW["mouseEvent"];
        var r = !RYbA && BZQx;
        e["ven"] = r["vendor"] || -1;
        e["ren"] = r["renderer"] || -1;
        e["fp"] = this["qfNr"]["joJe"];
        e["lp"] = this["qfNr"]["klUN"];
        e["em"] = {};
        SMTV([], e["em"]);
        e["tm"] = new Ipwo()["eqXy"]();
        e["by"] = this["pKuL"];
        return e;
    },
    "LWME": function (e) {
        var t = this;

        if (!t["uTWm"]["aeskey"] || e) {
            t["uTWm"]["aeskey"] = jeeq();
        }

        return t["uTWm"]["aeskey"];
    },
    "KAdz": function (e) {
        var t = this;
        var r = new GMAs()["encrypt"](LWME(e));

        while (!r || r["length"] !== 256) {
            r = new GMAs()["encrypt"](LWME(true));
        }

        return r;
    }
};

var jeeq = function () {
    /**
     * @return 该函数用于
     */
    function S4() {
        let temp = ((1 + Math.random()) * 65536 | 0).toString(16);
        return temp.substring(1);
    }

    return function () {
        return S4() + S4() + S4() + S4();
    };
};


function LWME(e, t) {
    t == undefined?this : t;
    t["uTWm"] = t["uTWm"] === undefined?{}:t["uTWm"];
    t["uTWm"]["aeskey"] = aeskey;
    if (!t["uTWm"]["aeskey"] || e) {
        t["uTWm"]["aeskey"] = jeeq();
    }

    return t["uTWm"]["aeskey"];
}

var jeeq = function () {
    /**
     * @return 该函数用于
     */
    function S4() {
        let temp = ((1 + Math.random()) * 65536 | 0).toString(16);
        return temp.substring(1);
    }

    return function () {
        return S4() + S4() + S4() + S4();
    };
};

// 生成aeskey
aeskey = jeeq()();

function kmZ_wheJ() {
    var e = window;
    var r = this;
    var n = r["gJJw"];
    n["timestamp"] = new Date()["getTime"]();
    n["deviceorientation"] = r["AMqW"];
    n["touchEvent"] = r["AMqW"];
    n["performanceTiming"] = r["AMqW"];
    n["internalip"] = r["AMqW"];
    var i = [];
    new oqaj(r["HfEi"]())["cgve"](function (e) {
        var t = n[e];
        i["push"](r["ETLe"](t) ? r["AMqW"] : t);
    });
    return i["join"]("!!");
}

function GMAs() {
    this["n"] = null;
    this["e"] = 0;
    this["d"] = null;
    this["p"] = null;
    this["q"] = null;
    this["dmp1"] = null;
    this["dmq1"] = null;
    this["coeff"] = null;
    var e = "00C1E3934D1614465B33053E7F48EE4EC87B14B95EF88947713D25EECBFF7E74C7977D02DC1D9451F79DD5D1C10C29ACB6A9B4D6FB7D0A0279B6719E1772565F09AF627715919221AEF91899CAE08C0D686D748B20A3603BE2318CA6BC2B59706592A9219D0BF05C9F65023A21D2330807252AE0066D59CEEFA5F2748EA80BAB81";
    var t = "10001";
    this["setPublic"](e, t);
}

function OyKy(e, t, r) {
    if (e != null) if ("number" == typeof e) this["fromNumber"](e, t, r);else if (t == null && "string" != typeof e) this["fromString"](e, 256);else this["fromString"](e, t);
}

function PmLW() {
    return new OyKy(null);
}

function QNwJ(e, t, r, n, i, o) {
    while (--o >= 0) {
        var a = t * this[e++] + r[n] + i;
        i = Math["floor"](a / 67108864);
        r[n++] = a & 67108863;
    }

    return i;
}

function RVWD(e, t, r, n, i, o) {
    var a = t & 32767,
        s = t >> 15;

    while (--o >= 0) {
        var _ = this[e] & 32767;

        var c = this[e++] >> 15;
        var l = s * _ + c * a;
        _ = a * _ + ((l & 32767) << 15) + r[n] + (i & 1073741823);
        i = (_ >>> 30) + (l >>> 15) + s * c + (i >>> 30);
        r[n++] = _ & 1073741823;
    }

    return i;
}

function SOLg(e, t, r, n, i, o) {
    var a = t & 16383,
        s = t >> 14;

    while (--o >= 0) {
        var _ = this[e] & 16383;

        var c = this[e++] >> 14;
        var l = s * _ + c * a;
        _ = a * _ + ((l & 16383) << 14) + r[n] + i;
        i = (_ >> 28) + (l >> 14) + s * c;
        r[n++] = _ & 268435455;
    }

    return i;
}

var c = 0xdeadbeefcafe;

var l = (c & 16777215) == 15715070;


if (l && navigator["appName"] == "Microsoft Internet Explorer") {
    OyKy["prototype"]["am"] = RVWD;
    _ = 30;
} else if (l && navigator["appName"] != "Netscape") {
    OyKy["prototype"]["am"] = QNwJ;
    _ = 26;
} else {
    OyKy["prototype"]["am"] = SOLg;
    _ = 28;
}

OyKy["prototype"]["DB"] = _;
OyKy["prototype"]["DM"] = (1 << _) - 1;
OyKy["prototype"]["DV"] = 1 << _;
var u = 52;
OyKy["prototype"]["FV"] = Math["pow"](2, u);
OyKy["prototype"]["F1"] = u - _;
OyKy["prototype"]["F2"] = 2 * _ - u;
var f = "0123456789abcdefghijklmnopqrstuvwxyz";
var p = [];
var d, g;
d = "0"["charCodeAt"](0);

for (g = 0; g <= 9; ++g) p[d++] = g;

d = "a"["charCodeAt"](0);

for (g = 10; g < 36; ++g) p[d++] = g;

d = "A"["charCodeAt"](0);

for (g = 10; g < 36; ++g) p[d++] = g;

function Tdeh(e) {
    return f["charAt"](e);
}

function UCzE(e, t) {
    var r = p[e["charCodeAt"](t)];
    return r == null ? -1 : r;
}

function VpeW(e) {
    for (var t = this["t"] - 1; t >= 0; --t) e[t] = this[t];

    e["t"] = this["t"];
    e["s"] = this["s"];
}

function WSQC(e) {
    this["t"] = 1;
    this["s"] = e < 0 ? -1 : 0;
    if (e > 0) this[0] = e;else if (e < -1) this[0] = e + this["DV"];else this["t"] = 0;
}

function XTlo(e) {
    var t = PmLW();
    t["fromInt"](e);
    return t;
}

function YnEY(e, t) {
    var r;
    if (t == 16) r = 4;else if (t == 8) r = 3;else if (t == 256) r = 8;else if (t == 2) r = 1;else if (t == 32) r = 5;else if (t == 4) r = 2;else {
        this["fromRadix"](e, t);
        return;
    }
    this["t"] = 0;
    this["s"] = 0;
    var n = e["length"],
        i = false,
        o = 0;

    while (--n >= 0) {
        var a = r == 8 ? e[n] & 255 : UCzE(e, n);

        if (a < 0) {
            if (e["charAt"](n) == "-") i = true;
            continue;
        }

        i = false;
        if (o == 0) this[this["t"]++] = a;else if (o + r > this["DB"]) {
            this[this["t"] - 1] |= (a & (1 << this["DB"] - o) - 1) << o;
            this[this["t"]++] = a >> this["DB"] - o;
        } else this[this["t"] - 1] |= a << o;
        o += r;
        if (o >= this["DB"]) o -= this["DB"];
    }

    if (r == 8 && (e[0] & 128) != 0) {
        this["s"] = -1;
        if (o > 0) this[this["t"] - 1] |= (1 << this["DB"] - o) - 1 << o;
    }

    this["clamp"]();
    if (i) OyKy["ZERO"]["subTo"](this, this);
}

function ZqvG() {
    var e = this["s"] & this["DM"];

    while (this["t"] > 0 && this[this["t"] - 1] == e) --this["t"];
}

function aaCp(e) {
    if (this["s"] < 0) return "-" + this["negate"]()["toString"](e);
    var t;
    if (e == 16) t = 4;else if (e == 8) t = 3;else if (e == 2) t = 1;else if (e == 32) t = 5;else if (e == 4) t = 2;else return this["toRadix"](e);
    var r = (1 << t) - 1,
        n,
        i = false,
        o = "",
        a = this["t"];
    var s = this["DB"] - a * this["DB"] % t;

    if (a-- > 0) {
        if (s < this["DB"] && (n = this[a] >> s) > 0) {
            i = true;
            o = Tdeh(n);
        }

        while (a >= 0) {
            if (s < t) {
                n = (this[a] & (1 << s) - 1) << t - s;
                n |= this[--a] >> (s += this["DB"] - t);
            } else {
                n = this[a] >> (s -= t) & r;

                if (s <= 0) {
                    s += this["DB"];
                    --a;
                }
            }

            if (n > 0) i = true;
            if (i) o += Tdeh(n);
        }
    }

    return i ? o : "0";
}

function bksk() {
    var e = PmLW();
    OyKy["ZERO"]["subTo"](this, e);
    return e;
}

function cWqJ() {
    return this["s"] < 0 ? this["negate"]() : this;
}

function dnsD(e) {
    var t = this["s"] - e["s"];
    if (t != 0) return t;
    var r = this["t"];
    t = r - e["t"];
    if (t != 0) return this["s"] < 0 ? -t : t;

    while (--r >= 0) if ((t = this[r] - e[r]) != 0) return t;

    return 0;
}

function eujq(e) {
    var t = 1,
        r;

    if ((r = e >>> 16) != 0) {
        e = r;
        t += 16;
    }

    if ((r = e >> 8) != 0) {
        e = r;
        t += 8;
    }

    if ((r = e >> 4) != 0) {
        e = r;
        t += 4;
    }

    if ((r = e >> 2) != 0) {
        e = r;
        t += 2;
    }

    if ((r = e >> 1) != 0) {
        e = r;
        t += 1;
    }

    return t;
}

function fYHx() {
    if (this["t"] <= 0) return 0;
    return this["DB"] * (this["t"] - 1) + eujq(this[this["t"] - 1] ^ this["s"] & this["DM"]);
}

function gfMS(e, t) {
    var r;

    for (r = this["t"] - 1; r >= 0; --r) t[r + e] = this[r];

    for (r = e - 1; r >= 0; --r) t[r] = 0;

    t["t"] = this["t"] + e;
    t["s"] = this["s"];
}

function hsVL(e, t) {
    for (var r = e; r < this["t"]; ++r) t[r - e] = this[r];

    t["t"] = Math["max"](this["t"] - e, 0);
    t["s"] = this["s"];
}

function iiJa(e, t) {
    var r = e % this["DB"];
    var n = this["DB"] - r;
    var i = (1 << n) - 1;
    var o = Math["floor"](e / this["DB"]),
        a = this["s"] << r & this["DM"],
        s;

    for (s = this["t"] - 1; s >= 0; --s) {
        t[s + o + 1] = this[s] >> n | a;
        a = (this[s] & i) << r;
    }

    for (s = o - 1; s >= 0; --s) t[s] = 0;

    t[o] = a;
    t["t"] = this["t"] + o + 1;
    t["s"] = this["s"];
    t["clamp"]();
}

function jPgV(e, t) {
    t["s"] = this["s"];
    var r = Math["floor"](e / this["DB"]);

    if (r >= this["t"]) {
        t["t"] = 0;
        return;
    }

    var n = e % this["DB"];
    var i = this["DB"] - n;
    var o = (1 << n) - 1;
    t[0] = this[r] >> n;

    for (var a = r + 1; a < this["t"]; ++a) {
        t[a - r - 1] |= (this[a] & o) << i;
        t[a - r] = this[a] >> n;
    }

    if (n > 0) t[this["t"] - r - 1] |= (this["s"] & o) << i;
    t["t"] = this["t"] - r;
    t["clamp"]();
}

function kRGn(e, t) {
    var r = 0,
        n = 0,
        i = Math["min"](e["t"], this["t"]);

    while (r < i) {
        n += this[r] - e[r];
        t[r++] = n & this["DM"];
        n >>= this["DB"];
    }

    if (e["t"] < this["t"]) {
        n -= e["s"];

        while (r < this["t"]) {
            n += this[r];
            t[r++] = n & this["DM"];
            n >>= this["DB"];
        }

        n += this["s"];
    } else {
        n += this["s"];

        while (r < e["t"]) {
            n -= e[r];
            t[r++] = n & this["DM"];
            n >>= this["DB"];
        }

        n -= e["s"];
    }

    t["s"] = n < 0 ? -1 : 0;
    if (n < -1) t[r++] = this["DV"] + n;else if (n > 0) t[r++] = n;
    t["t"] = r;
    t["clamp"]();
}

function lOBp(e, t) {
    var r = this["abs"](),
        n = e["abs"]();
    var i = r["t"];
    t["t"] = i + n["t"];

    while (--i >= 0) t[i] = 0;

    for (i = 0; i < n["t"]; ++i) t[i + r["t"]] = r["am"](0, n[i], t, i, 0, r["t"]);

    t["s"] = 0;
    t["clamp"]();
    if (this["s"] != e["s"]) OyKy["ZERO"]["subTo"](t, t);
}

function mpJQ(e) {
    var t = this["abs"]();
    var r = e["t"] = 2 * t["t"];

    while (--r >= 0) e[r] = 0;

    for (r = 0; r < t["t"] - 1; ++r) {
        var n = t["am"](r, t[r], e, 2 * r, 0, 1);

        if ((e[r + t["t"]] += t["am"](r + 1, 2 * t[r], e, 2 * r + 1, n, t["t"] - r - 1)) >= t["DV"]) {
            e[r + t["t"]] -= t["DV"];
            e[r + t["t"] + 1] = 1;
        }
    }

    if (e["t"] > 0) e[e["t"] - 1] += t["am"](r, t[r], e, 2 * r, 0, 1);
    e["s"] = 0;
    e["clamp"]();
}

function nUtf(e, t, r) {
    var n = e["abs"]();
    if (n["t"] <= 0) return;
    var i = this["abs"]();

    if (i["t"] < n["t"]) {
        if (t != null) t["fromInt"](0);
        if (r != null) this["copyTo"](r);
        return;
    }

    if (r == null) r = PmLW();
    var o = PmLW(),
        a = this["s"],
        s = e["s"];

    var _ = this["DB"] - eujq(n[n["t"] - 1]);

    if (_ > 0) {
        n["lShiftTo"](_, o);
        i["lShiftTo"](_, r);
    } else {
        n["copyTo"](o);
        i["copyTo"](r);
    }

    var c = o["t"];
    var l = o[c - 1];
    if (l == 0) return;
    var u = l * (1 << this["F1"]) + (c > 1 ? o[c - 2] >> this["F2"] : 0);
    var f = this["FV"] / u,
        p = (1 << this["F1"]) / u,
        d = 1 << this["F2"];
    var g = r["t"],
        h = g - c,
        v = t == null ? PmLW() : t;
    o["dlShiftTo"](h, v);

    if (r["compareTo"](v) >= 0) {
        r[r["t"]++] = 1;
        r["subTo"](v, r);
    }

    OyKy["ONE"]["dlShiftTo"](c, v);
    v["subTo"](o, o);

    while (o["t"] < c) o[o["t"]++] = 0;

    while (--h >= 0) {
        var m = r[--g] == l ? this["DM"] : Math["floor"](r[g] * f + (r[g - 1] + d) * p);

        if ((r[g] += o["am"](0, m, r, h, 0, c)) < m) {
            o["dlShiftTo"](h, v);
            r["subTo"](v, r);

            while (r[g] < --m) r["subTo"](v, r);
        }
    }

    if (t != null) {
        r["drShiftTo"](c, t);
        if (a != s) OyKy["ZERO"]["subTo"](t, t);
    }

    r["t"] = c;
    r["clamp"]();
    if (_ > 0) r["rShiftTo"](_, r);
    if (a < 0) OyKy["ZERO"]["subTo"](r, r);
}

function otYe(e) {
    var t = PmLW();
    this["abs"]()["divRemTo"](e, null, t);
    if (this["s"] < 0 && t["compareTo"](OyKy["ZERO"]) > 0) e["subTo"](t, t);
    return t;
}

function pKN_(e) {
    this["m"] = e;
}

function qlKQ(e) {
    if (e["s"] < 0 || e["compareTo"](this["m"]) >= 0) return e["mod"](this["m"]);else return e;
}

function rlNi(e) {
    return e;
}

function sdKI(e) {
    e["divRemTo"](this["m"], null, e);
}

function tRwk(e, t, r) {
    e["multiplyTo"](t, r);
    this["reduce"](r);
}

function uuHI(e, t) {
    e["squareTo"](t);
    this["reduce"](t);
}

pKN_["prototype"]["convert"] = qlKQ;
pKN_["prototype"]["revert"] = rlNi;
pKN_["prototype"]["reduce"] = sdKI;
pKN_["prototype"]["mulTo"] = tRwk;
pKN_["prototype"]["sqrTo"] = uuHI;

function vvCa() {
    if (this["t"] < 1) return 0;
    var e = this[0];
    if ((e & 1) == 0) return 0;
    var t = e & 3;
    t = t * (2 - (e & 15) * t) & 15;
    t = t * (2 - (e & 255) * t) & 255;
    t = t * (2 - ((e & 65535) * t & 65535)) & 65535;
    t = t * (2 - e * t % this["DV"]) % this["DV"];
    return t > 0 ? this["DV"] - t : -t;
}

function wBwQ(e) {
    this["m"] = e;
    this["mp"] = e["invDigit"]();
    this["mpl"] = this["mp"] & 32767;
    this["mph"] = this["mp"] >> 15;
    this["um"] = (1 << e["DB"] - 15) - 1;
    this["mt2"] = 2 * e["t"];
}

function xxDc(e) {
    var t = PmLW();
    e["abs"]()["dlShiftTo"](this["m"]["t"], t);
    t["divRemTo"](this["m"], null, t);
    if (e["s"] < 0 && t["compareTo"](OyKy["ZERO"]) > 0) this["m"]["subTo"](t, t);
    return t;
}

function yVlr(e) {
    var t = PmLW();
    e["copyTo"](t);
    this["reduce"](t);
    return t;
}

function AoNX(e) {
    while (e["t"] <= this["mt2"]) e[e["t"]++] = 0;

    for (var t = 0; t < this["m"]["t"]; ++t) {
        var r = e[t] & 32767;
        var n = r * this["mpl"] + ((r * this["mph"] + (e[t] >> 15) * this["mpl"] & this["um"]) << 15) & e["DM"];
        r = t + this["m"]["t"];
        e[r] += this["m"]["am"](0, n, e, t, 0, this["m"]["t"]);

        while (e[r] >= e["DV"]) {
            e[r] -= e["DV"];
            e[++r]++;
        }
    }

    e["clamp"]();
    e["drShiftTo"](this["m"]["t"], e);
    if (e["compareTo"](this["m"]) >= 0) e["subTo"](this["m"], e);
}

function BQKK(e, t) {
    e["squareTo"](t);
    this["reduce"](t);
}

function CUlA(e, t, r) {
    e["multiplyTo"](t, r);
    this["reduce"](r);
}

wBwQ["prototype"]["convert"] = xxDc;
wBwQ["prototype"]["revert"] = yVlr;
wBwQ["prototype"]["reduce"] = AoNX;
wBwQ["prototype"]["mulTo"] = CUlA;
wBwQ["prototype"]["sqrTo"] = BQKK;

function DulL() {
    return (this["t"] > 0 ? this[0] & 1 : this["s"]) == 0;
}

function ELWW(e, t) {
    if (e > 4294967295 || e < 1) return OyKy["ONE"];
    var r = PmLW(),
        n = PmLW(),
        i = t["convert"](this),
        o = eujq(e) - 1;
    i["copyTo"](r);

    while (--o >= 0) {
        t["sqrTo"](r, n);
        if ((e & 1 << o) > 0) t["mulTo"](n, i, r);else {
            var a = r;
            r = n;
            n = a;
        }
    }

    return t["revert"](r);
}

function FIAn(e, t) {
    var r;
    if (e < 256 || t["isEven"]()) r = new pKN_(t);else r = new wBwQ(t);
    return this["exp"](e, r);
}

OyKy["prototype"]["copyTo"] = VpeW;
OyKy["prototype"]["fromInt"] = WSQC;
OyKy["prototype"]["fromString"] = YnEY;
OyKy["prototype"]["clamp"] = ZqvG;
OyKy["prototype"]["dlShiftTo"] = gfMS;
OyKy["prototype"]["drShiftTo"] = hsVL;
OyKy["prototype"]["lShiftTo"] = iiJa;
OyKy["prototype"]["rShiftTo"] = jPgV;
OyKy["prototype"]["subTo"] = kRGn;
OyKy["prototype"]["multiplyTo"] = lOBp;
OyKy["prototype"]["squareTo"] = mpJQ;
OyKy["prototype"]["divRemTo"] = nUtf;
OyKy["prototype"]["invDigit"] = vvCa;
OyKy["prototype"]["isEven"] = DulL;
OyKy["prototype"]["exp"] = ELWW;
OyKy["prototype"]["toString"] = aaCp;
OyKy["prototype"]["negate"] = bksk;
OyKy["prototype"]["abs"] = cWqJ;
OyKy["prototype"]["compareTo"] = dnsD;
OyKy["prototype"]["bitLength"] = fYHx;
OyKy["prototype"]["mod"] = otYe;
OyKy["prototype"]["modPowInt"] = FIAn;
OyKy["ZERO"] = XTlo(0);
OyKy["ONE"] = XTlo(1);

function GvsQ(e, t) {
    return new OyKy(e, t);
}

function IaJW(e, t) {
    if (e != null && t != null && e["length"] > 0 && t["length"] > 0) {
        this["n"] = GvsQ(e, 16);
        this["e"] = parseInt(t, 16);
    } else console && console["error"] && console["error"]("Invalid RSA public key");
}

function JiOq(e) {
    return e["modPowInt"](this["e"], this["n"]);
}

function OyKy(e, t, r) {
    if (e != null) if ("number" == typeof e) this["fromNumber"](e, t, r);else if (t == null && "string" != typeof e) this["fromString"](e, 256);else this["fromString"](e, t);
}

function HOjo() {
    this["i"] = 0;
    this["j"] = 0;
    this["S"] = [];
}

function IyCh(e) {
    var t, r, n;

    for (t = 0; t < 256; ++t) this["S"][t] = t;

    r = 0;

    for (t = 0; t < 256; ++t) {
        r = r + this["S"][t] + e[t % e["length"]] & 255;
        n = this["S"][t];
        this["S"][t] = this["S"][r];
        this["S"][r] = n;
    }

    this["i"] = 0;
    this["j"] = 0;
}

function JVrv() {
    var e;
    this["i"] = this["i"] + 1 & 255;
    this["j"] = this["j"] + this["S"][this["i"]] & 255;
    e = this["S"][this["i"]];
    this["S"][this["i"]] = this["S"][this["j"]];
    this["S"][this["j"]] = e;
    return this["S"][e + this["S"][this["i"]] & 255];
}

HOjo["prototype"]["init"] = IyCh;
HOjo["prototype"]["next"] = JVrv;

function Kbq_() {
    return new HOjo();
}

var n = 256;
var t;
var i;
var o;

if (i == null) {
    i = [];
    o = 0;
    var e;

    if (window["crypto"] && window["crypto"]["getRandomValues"]) {
        var r = new Uint32Array(256);
        window["crypto"]["getRandomValues"](r);

        for (e = 0; e < r["length"]; ++e) i[o++] = r[e] & 255;
    }

    var a = 0;

    function s(e) {
        a = a || 0;

        if (a >= 256 || o >= n) {
            if (window["removeEventListener"]) {
                a = 0;
                window["removeEventListener"]("mousemove", s, false);
            } else if (window["detachEvent"]) {
                a = 0;
                window["detachEvent"]("onmousemove", s);
            }

            return;
        }

        try {
            var t = e["x"] + e["y"];
            i[o++] = t & 255;
            a += 1;
        } catch (r) {}
    }

    if (window["addEventListener"]) window["addEventListener"]("mousemove", s, false);else if (window["attachEvent"]) window["attachEvent"]("onmousemove", s);
}

function LVyG() {
    var t = t === undefined?null:t;
    if (t == undefined || null) {
        t = Kbq_();

        while (o < n) {
            var e = Math["floor"](65536 * Math["random"]());
            i[o++] = e & 255;
        }

        t["init"](i);

        for (o = 0; o < i["length"]; ++o) i[o] = 0;

        o = 0;
    }

    return t["next"]();
}

function MEks(e) {
    var t;

    for (t = 0; t < e["length"]; ++t) e[t] = LVyG();
}

function NikX() {}

NikX["prototype"]["nextBytes"] = MEks;

function HYaF(e, t) {
    if (t < e["length"] + 11) {
        console && console["error"] && console["error"]("Message too long for RSA");
        return null;
    }

    var r = [];
    var n = e["length"] - 1;

    while (n >= 0 && t > 0) {
        var i = e["charCodeAt"](n--);

        if (i < 128) {
            r[--t] = i;
        } else if (i > 127 && i < 2048) {
            r[--t] = i & 63 | 128;
            r[--t] = i >> 6 | 192;
        } else {
            r[--t] = i & 63 | 128;
            r[--t] = i >> 6 & 63 | 128;
            r[--t] = i >> 12 | 224;
        }
    }

    r[--t] = 0;
    var o = new NikX();
    var a = [];

    while (t > 2) {
        a[0] = 0;

        while (a[0] == 0) o["nextBytes"](a);

        r[--t] = a[0];
    }

    r[--t] = 2;
    r[--t] = 0;
    return new OyKy(r);
}

function KIMY(e) {
    var t = HYaF(e, this["n"]["bitLength"]() + 7 >> 3);
    if (t == null) return null;
    var r = this["doPublic"](t);
    if (r == null) return null;
    var n = r["toString"](16);
    if ((n["length"] & 1) == 0) return n;else return "0" + n;
}

GMAs["prototype"]["doPublic"] = JiOq;
GMAs["prototype"]["setPublic"] = IaJW;
GMAs["prototype"]["encrypt"] = KIMY;

function KAdz(e) {
    var t = this;
    var t = new GMAs();
    var r = t["encrypt"](LWME(e, t));

    while (!r || r["length"] !== 256) {
        r = new GMAs()["encrypt"](LWME(true));
    }

    return r;
}

var ZApR = {
    "QSdo": {
        "RXbJ": "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789()",
        "SHuZ": ".",
        "TnjV": 7274496,
        "UvqG": 9483264,
        "VivU": 19220,
        "Womc": 235,
        "XUlY": 24
    },
    "RXbJ": "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789()",
    "SHuZ": ".",
    "TnjV": 7274496,
    "UvqG": 9483264,
    "VivU": 19220,
    "Womc": 235,
    "XUlY": 24,
    "YbQL": function (e) {
        var t = [];

        for (var r = 0, n = e["length"]; r < n; r += 1) {
            t["push"](e["charCodeAt"](r));
        }

        return t;
    },
    "ZpCc": function (e) {
        var t = "";

        for (var r = 0, n = e["length"]; r < n; r += 1) {
            t += String["fromCharCode"](e[r]);
        }

        return t;
    },
    "afbw": function (e) {
        var t = this["RXbJ"];

        if (e < 0 || e >= t["length"]) {
            return ".";
        }

        return t["charAt"](e);
    },
    "bLAk": function (e) {
        var t = this["RXbJ"];
        return t["indexOf"](e);
    },
    "cd_Q": function (e, t) {
        return e >> t & 1;
    },
    "dvPa": function (e, i) {
        var o = this;

        if (!i) {
            i = o;
        }

        function t(e, t) {
            var r = 0;

            for (var n = i["XUlY"] - 1; n >= 0; n -= 1) {
                if (o["cd_Q"](t, n) === 1) {
                    r = (r << 1) + o["cd_Q"](e, n);
                }
            }

            return r;
        }

        var r = "",
            n = "";
        var a = e["length"];

        for (var s = 0; s < a; s += 3) {
            var _;

            if (s + 2 < a) {
                _ = (e[s] << 16) + (e[s + 1] << 8) + e[s + 2];
                r += o["afbw"](t(_, i["TnjV"])) + o["afbw"](t(_, i["UvqG"])) + o["afbw"](t(_, i["VivU"])) + o["afbw"](t(_, i["Womc"]));
            } else {
                var c = a % 3;

                if (c === 2) {
                    _ = (e[s] << 16) + (e[s + 1] << 8);
                    r += o["afbw"](t(_, i["TnjV"])) + o["afbw"](t(_, i["UvqG"])) + o["afbw"](t(_, i["VivU"]));
                    n = i["SHuZ"];
                } else if (c === 1) {
                    _ = e[s] << 16;
                    r += o["afbw"](t(_, i["TnjV"])) + o["afbw"](t(_, i["UvqG"]));
                    n = i["SHuZ"] + i["SHuZ"];
                }
            }
        }

        return {
            "res": r,
            "end": n
        };
    },
    "eeom": function (e) {
        var t = this;
        var r = t["dvPa"](t["YbQL"](e));
        return r["res"] + r["end"];
    },
    "fLFi": function (e) {
        var t = this;
        var r = t["dvPa"](e);
        return r["res"] + r["end"];
    },
    "gHhY": function (e, o) {
        var a = this;

        if (!o) {
            o = a;
        }

        function t(e, t) {
            if (e < 0) {
                return 0;
            }

            var r = 5;
            var n = 0;

            for (var i = o["XUlY"] - 1; i >= 0; i -= 1) {
                if (a["cd_Q"](t, i) === 1) {
                    n += a["cd_Q"](e, r) << i;
                    r -= 1;
                }
            }

            return n;
        }

        var r = e["length"];
        var n = "";

        for (var i = 0; i < r; i += 4) {
            var s = t(a["bLAk"](e["charAt"](i)), o["TnjV"]) + t(a["bLAk"](e["charAt"](i + 1)), o["UvqG"]) + t(a["bLAk"](e["charAt"](i + 2)), o["VivU"]) + t(a["bLAk"](e["charAt"](i + 3)), o["Womc"]);

            var _ = s >> 16 & 255;

            n += String["fromCharCode"](_);

            if (e["charAt"](i + 2) !== o["SHuZ"]) {
                var c = s >> 8 & 255;
                n += String["fromCharCode"](c);

                if (e["charAt"](i + 3) !== o["SHuZ"]) {
                    var l = s & 255;
                    n += String["fromCharCode"](l);
                }
            }
        }

        return n;
    },
    "hLsM": function (e) {
        var t = this;
        var r = 4 - e["length"] % 4;

        if (r < 4) {
            for (var n = 0; n < r; n += 1) {
                e += t["SHuZ"];
            }
        }

        return t["gHhY"](e);
    },
    "iKPC": function (e) {
        var t = this;
        return t["hLsM"](e);
    }
};

function uDnj(e, t) {
    var r = {
        "neterror": {
            "zh-cn": "\u7F51\u7EDC\u4E0D\u7ED9\u529B",
            "en": "Network failure",
            "zh-tw": "\u7DB2\u7D61\u4E0D\u7D66\u529B"
        },
        "configerror": {
            "zh-cn": "\u914D\u7F6E\u9519\u8BEF",
            "en": "Configuration Error",
            "zh-tw": "\u914D\u7F6E\u932F\u8AA4"
        }
    };
    var n = sgdj(e);
    var i = tTUk(t);
    return r[n] && r[n][i] || r[n]["en"];
}

function xAJV(e, t, r) {
    var n = t["uTWm"];
    var i = t["tGGi"];
    var o = "GeetestError";

    if (r) {
        o = "UserCallBackError";
        e["detail"] = r;
        n["error_code"] = "604";
        n["msg"] = e["msg"];
        FwdU(mxXQ(n, "./usercallback/" + (e["detail"] && e["detail"]["type"])), n["post"], n["protocol"]);
    }

    t["veYs"](e);
    return new Error(o + ": " + (e && e["msg"]));
}


function vvPR(e, t, r) {
    var n = {
        "api_appendTo": {
            "msg": "\u4F20\u7ED9appendTo\u63A5\u53E3\u7684\u53C2\u6570\u6709\u8BEF\uFF1A\u53EA\u63A5\u53D7id\u9009\u62E9\u5668\u548CDOM\u5143\u7D20\uFF0C\u5E76\u4E14\u9700\u4FDD\u8BC1\u5176\u5B58\u5728\u4E8E\u9875\u9762\u4E2D",
            "code": "error_100"
        },
        "api_bindOn": {
            "msg": "\u4F20\u7ED9bindOn\u63A5\u53E3\u7684\u53C2\u6570\u6709\u8BEF\uFF1A\u53EA\u63A5\u53D7id\u9009\u62E9\u5668\u548CDOM\u5143\u7D20\uFF0C\u5E76\u4E14\u9700\u4FDD\u8BC1\u5176\u5B58\u5728\u4E8E\u9875\u9762\u4E2D",
            "code": "error_101"
        },
        "api_onXxx": {
            "msg": "\u4F20\u7ED9\u5404\u56DE\u8C03\u7684\u53C2\u6570\u4E0D\u662F\u51FD\u6570\u7C7B\u578B\uFF1A\u8BF7\u4F20\u5165\u51FD\u6570\u7C7B\u578B\u53C2\u6570",
            "code": "error_102"
        },
        "config_gt": {
            "msg": "\u914D\u7F6E\u53C2\u6570gt\u6709\u8BEF\uFF1A\u8BF7\u68C0\u67E5\u521D\u59CB\u5316\u65F6\u4F20\u5165\u7684\u914D\u7F6E\u53C2\u6570gt\uFF08\u5BF9\u5E94\u7533\u8BF7\u65F6\u7684ID\uFF09",
            "code": "error_103"
        },
        "url_get": {
            "msg": "/get.php\u8BF7\u6C42\u62A5\u9519\uFF1A1.\u8BF7\u4FDD\u6301\u7F51\u7EDC\u7545\u901A\uFF1B2.\u68C0\u67E5\u521D\u59CB\u5316\u65F6\u4F20\u5165\u7684\u914D\u7F6E\u53C2\u6570gt\u548Cchallenge",
            "code": "error_104"
        },
        "url_ajax": {
            "msg": "/ajax.php\u8BF7\u6C42\u62A5\u9519\uFF1A1.\u8BF7\u4FDD\u6301\u7F51\u7EDC\u7545\u901A\uFF1B2.\u8BF7\u8054\u7CFB\u6781\u9A8C\u5B98\u7F51\u5BA2\u670D",
            "code": "error_105"
        },
        "url_refresh": {
            "msg": "/refresh.php\u8BF7\u6C42\u62A5\u9519\uFF1A1.\u8BF7\u4FDD\u6301\u7F51\u7EDC\u7545\u901A\uFF1B2.\u5237\u65B0\u6B21\u6570\u672C\u8EAB\u6709\u9650\u5236\uFF0810\u6B21\u4EE5\u5185\uFF09\uFF0C\u8D85\u8FC7\u9650\u5236\u8BF7\u5237\u65B0\u6574\u4E2A\u9875\u9762\u518D\u8BD5",
            "code": "error_106"
        },
        "url_skin": {
            "msg": "\u76AE\u80A4\u52A0\u8F7D\u5931\u8D25\uFF1A1.\u8BF7\u4FDD\u6301\u7F51\u7EDC\u7545\u901A\uFF1B2.\u8BF7\u8054\u7CFB\u6781\u9A8C\u5B98\u7F51\u5BA2\u670D",
            "code": "error_107"
        },
        "url_picture": {
            "msg": "\u9A8C\u8BC1\u56FE\u7247\u52A0\u8F7D\u5931\u8D25\uFF1A1.\u8BF7\u4FDD\u6301\u7F51\u7EDC\u7545\u901A\uFF1B2.\u8BF7\u8054\u7CFB\u6781\u9A8C\u5B98\u7F51\u5BA2\u670D",
            "code": "error_108"
        },
        "url_reset": {
            "msg": "/reset.php\u8BF7\u6C42\u62A5\u9519\uFF1A1.\u8BF7\u4FDD\u6301\u7F51\u7EDC\u7545\u901A\uFF1B2.\u8BF7\u8054\u7CFB\u6781\u9A8C\u5B98\u7F51\u5BA2\u670D",
            "code": "error_109"
        },
        "js_not_exist": {
            "msg": "\u9A8C\u8BC1\u7684js\u5730\u5740\u4E0D\u5B58\u5728",
            "code": "error_110"
        },
        "js_unload": {
            "msg": "\u9A8C\u8BC1\u7684js\u5730\u5740\u65E0\u6CD5\u52A0\u8F7D",
            "code": "error_111"
        },
        "config_area": {
            "msg": "\u914D\u7F6E\u53C2\u6570area\u6709\u8BEF\uFF1A\u53EA\u63A5\u53D7id\u9009\u62E9\u5668\u548CDOM\u5143\u7D20\uFF0C\u5E76\u4E14\u9700\u4FDD\u8BC1\u5176\u5B58\u5728\u4E8E\u9875\u9762\u4E2D",
            "code": "error_112"
        },
        "server_forbidden": {
            "msg": "\u670D\u52A1\u7AEFforbidden\uFF1A \u8BF7\u8054\u7CFB\u6781\u9A8C\u5B98\u7F51\u5BA2\u670D",
            "code": "error_113"
        },
        "config_lack": {
            "msg": "initGeetest\u91CC\u9762\u7684gt\u6216\u8005challenge\u53C2\u6570\u7F3A\u5C11: \u8BF7\u68C0\u67E5\u521D\u59CB\u5316\u53C2\u6570",
            "code": "error_114"
        },
        "url_voice": {
            "msg": "\u8BED\u97F3\u6587\u4EF6\u52A0\u8F7D\u5931\u8D25\uFF1A1.\u8BF7\u4FDD\u6301\u7F51\u7EDC\u7545\u901A\uFF1B2.\u8BF7\u8054\u7CFB\u6781\u9A8C\u5B98\u7F51\u5BA2\u670D",
            "code": "error_115"
        },
        "user_callback": {
            "msg": "\u7528\u6237\u56DE\u8C03\u51FD\u6570\u6267\u884C\u5F02\u5E38",
            "code": "error_116"
        },
        "unknown": {
            "msg": "\u65E0\u6B64\u7C7B\u9519\u8BEF\u7C7B\u578B",
            "code": "error_117"
        }
    };

    if (!n[e]) {
        e = "unknown";
    }

    var i = n[e];
    var o = t["tGGi"];
    i["user_error"] = uDnj(i["code"], o["lang"]);
    i["error_code"] = i["code"];
    return xAJV(i, t, r);
}

var LvjC = function (e) {
    function a(e) {
        return typeof e === "function";
    }

    function o(e) {
        return typeof e === "object" && e !== null;
    }

    function s(e) {
        e();
    }

    function MjjJ() {
        var e = this;
        e["wPRB"] = e["xvLx"] = null;
    }

    MjjJ["prototype"] = {
        "enqueue": function (e) {
            var t = this;
            var r = {
                "ele": e,
                "next": null
            };

            if (t["wPRB"] === null) {
                t["wPRB"] = this["xvLx"] = r;
            } else {
                t["xvLx"]["next"] = r;
                t["xvLx"] = t["xvLx"]["next"];
            }
        },
        "dequeue": function () {
            var e = this;

            if (e["wPRB"] === null) {
                throw new Error("queue is empty");
            }

            var t = e["wPRB"]["ele"];
            e["wPRB"] = e["wPRB"]["next"];
            return t;
        },
        "isEmpty": function () {
            var e = this;
            return e["wPRB"] === null;
        },
        "clear": function () {
            var e = this;
            e["wPRB"] = e["yGDm"] = null;
        },
        "each": function (e) {
            var t = this;

            if (!t["isEmpty"]()) {
                e(t["dequeue"]());
                t["each"](e);
            }
        }
    };

    function _(t, e) {
        if (t === e) {
            t["AVam"](new TypeError());
        } else if (e instanceof NOTC) {
            e["then"](function (e) {
                _(t, e);
            }, function (e) {
                t["AVam"](e);
            });
        } else if (a(e) || o(e)) {
            var r;

            try {
                r = e["then"];
            } catch (i) {
                NOTC["Bbhs"](i);
                t["AVam"](i);
                return;
            }

            var n = false;

            if (a(r)) {
                try {
                    r["call"](e, function (e) {
                        if (n) {
                            return;
                        }

                        n = true;

                        _(t, e);
                    }, function (e) {
                        if (n) {
                            return;
                        }

                        n = true;
                        t["AVam"](e);
                    });
                } catch (i) {
                    if (n) {
                        return;
                    }

                    n = true;
                    t["AVam"](i);
                }
            } else {
                t["CqFd"](e);
            }
        } else {
            t["CqFd"](e);
        }
    }

    function NOTC(e) {
        var t = this;
        t["Ddr_"] = t["PENDING"];
        t["EgJq"] = new MjjJ();
        t["FuqG"] = new MjjJ();

        if (a(e)) {
            try {
                e(function (e) {
                    t["CqFd"](e);
                }, function (e) {
                    t["AVam"](e);
                });
            } catch (r) {
                NOTC["Bbhs"](r);
            }
        }
    }

    var t = false;

    NOTC["debug"] = function () {
        t = true;
    };

    NOTC["Bbhs"] = function (e) {
        if (typeof JvyG === "function") {
            JvyG(e, true);
        }

        if (t && typeof console !== "undefined") {
            console["error"](e);
        }
    };

    NOTC["prototype"] = {
        "PENDING": 0,
        "RESOLVED": 1,
        "REJECTED": -1,
        "CqFd": function (e) {
            var t = this;

            if (t["Ddr_"] !== t["PENDING"]) {
                return;
            }

            t["Ddr_"] = t["RESOLVED"];
            t["GFoe"] = e;
            t["HDiq"]();
        },
        "AVam": function (e) {
            var t = this;

            if (t["Ddr_"] !== t["PENDING"]) {
                return;
            }

            t["Ddr_"] = t["REJECTED"];
            t["Ixgs"] = e;
            t["HDiq"]();
        },
        "HDiq": function () {
            var e = this;
            var t,
                r,
                n = e["Ddr_"];

            if (n === e["RESOLVED"]) {
                t = e["EgJq"];
                e["FuqG"]["clear"]();
                r = e["GFoe"];
            } else if (n === e["REJECTED"]) {
                t = e["FuqG"];
                e["EgJq"]["clear"]();
                r = e["Ixgs"];
            }

            t["each"](function (e) {
                s(function () {
                    e(n, r);
                });
            });
        },
        "Jnyk": function (r, n, i) {
            var o = this;
            s(function () {
                if (a(n)) {
                    var e;

                    try {
                        e = n(i);
                    } catch (t) {
                        NOTC["Bbhs"](t);
                        o["AVam"](t);
                        return;
                    }

                    _(o, e);
                } else {
                    if (r === o["RESOLVED"]) {
                        o["CqFd"](i);
                    } else if (r === o["REJECTED"]) {
                        o["AVam"](i);
                    }
                }
            });
        },
        "then": function (r, n) {
            var e = this;
            var i = new NOTC();
            e["EgJq"]["enqueue"](function (e, t) {
                i["Jnyk"](e, r, t);
            });
            e["FuqG"]["enqueue"](function (e, t) {
                i["Jnyk"](e, n, t);
            });

            if (e["Ddr_"] === e["RESOLVED"]) {
                e["HDiq"]();
            } else if (e["Ddr_"] === e["REJECTED"]) {
                e["HDiq"]();
            }

            return i;
        }
    };

    NOTC["all"] = function (r) {
        return new NOTC(function (n, i) {
            var o = r["length"];
            var a = 0;
            var s = false;
            var _ = [];

            function OgFm(e, t, r) {
                if (s) {
                    return;
                }

                if (e !== null) {
                    s = true;
                    i(e);
                }

                _[r] = t;
                a += 1;

                if (a === o) {
                    s = true;
                    n(_);
                }
            }

            for (var e = 0; e < o; e = e + 1) {
                (function (t) {
                    var e = r[t];

                    if (!(e instanceof NOTC)) {
                        e = new NOTC(e);
                    }

                    e["then"](function (e) {
                        OgFm(null, e, t);
                    }, function (e) {
                        OgFm(e || true);
                    });
                })(e);
            }
        });
    };

    NOTC["race"] = function (s) {
        return new NOTC(function (r, n) {
            var i = s["length"];
            var o = false;
            var a = 0;

            function OgFm(e, t) {
                if (o) {
                    return;
                }

                if (e == null) {
                    o = true;
                    r(t);
                } else {
                    a += 1;

                    if (a >= i) {
                        o = true;
                        n(e);
                    }
                }
            }

            for (var e = 0; e < i; e = e + 1) {
                (function (t) {
                    var e = s[t];

                    if (!(e instanceof NOTC)) {
                        e = new NOTC(e);
                    }

                    e["then"](function (e) {
                        OgFm(null, e, t);
                    }, function (e) {
                        OgFm(e || true);
                    });
                })(e);
            }
        });
    };

    NOTC["step"] = function (r) {
        var n = r["length"];
        var i = new NOTC();

        function o(t, e) {
            if (t >= n) {
                return i["CqFd"](e);
            }

            new NOTC(r[t])["then"](function (e) {
                o(t + 1, e);
            }, function (e) {
                i["AVam"](e);
            });
        }

        new NOTC(r[0])["then"](function (e) {
            o(1, e);
        }, function (e) {
            i["AVam"](e);
        });
        return i;
    };

    NOTC["prototype"]["OuEu"] = function (e, t) {
        return this["then"](e, t);
    };

    return NOTC;
}(this);


function yXEh(r) {
    if (console && console["error"]) {
        console["error"](r);
    }

    return new LvjC(function (e, t) {
        t(r);
    });
}

function encrypt(e){
    var t = this;
    var r = e;
    var timesteamp = new Date().getTime();
    var e = "79548!!86617!!CSS1Compat!!-1!!-1!!-1!!-1!!-1!!-1!!1!!-1!!-1!!-1!!9!!-1!!1!!-1!!-1!!-1!!-1!!-1!!-1!!2!!-1!!47!!5!!-1!!-1!!-1!!0!!0!!0!!0!!360!!440!!1920!!1030!!zh-CN!!zh-CN,zh!!-1!!1.350000023841858!!24!!Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36!!1!!1!!1920!!1080!!1920!!1030!!1!!1!!1!!-1!!Win32!!0!!-8!!ec7c335bf74657c936dd67ab696b3d97!!825a789f67b1d993670a83f19b9b6180!!npaplayer.dll,npalissologin.dll,npAliSecCtrl.dll,npaliedit.dll,npYunWebDetect.dll,internal-pdf-viewer,mhjfbmdgcfjbbpaeojofohoefgiehjai,npDeployJava1.dll,npjp2.dll,NPSPWRAP.DLL,npmeetingjoinpluginoc.dll,np-mswmp.dll,internal-nacl-plugin,npqqwebgame.dll,npQQMailWebKit.dll,npXFMiniDLPlugin.dll,npQMExtensionsMozilla.dll,npQzoneMusic.dll,pepflashplayer32_29_0_0_171.dll,NPSWF32_29_0_0_171.dll,npactivex.dll,npSSOAxCtrlForPTLogin.dll,npxluser2.0.2.3.dll,npcombrg.dll,npQQPhotoDrawEx.dll,npalicdo.dll!!0!!-1!!0!!4!!Arial,ArialBlack,ArialNarrow,BookAntiqua,BookmanOldStyle,Calibri,Cambria,CambriaMath,Century,CenturyGothic,CenturySchoolbook,ComicSansMS,Consolas,Courier,CourierNew,Garamond,Georgia,Helvetica,Impact,LucidaBright,LucidaCalligraphy,LucidaConsole,LucidaFax,LucidaHandwriting,LucidaSans,LucidaSansTypewriter,LucidaSansUnicode,MicrosoftSansSerif,MonotypeCorsiva,MSGothic,MSPGothic,MSReferenceSansSerif,MSSansSerif,MSSerif,PalatinoLinotype,SegoePrint,SegoeScript,SegoeUI,SegoeUILight,SegoeUISemibold,SegoeUISymbol,Tahoma,Times,TimesNewRoman,TrebuchetMS,Verdana,Wingdings,Wingdings2,Wingdings3!!"+timesteamp+"!!-1!!-1!!-1!!41!!2!!-1!!-1!!4!!-1!!-1";
    t["JjbT"] = e;
    r["cc"] = 4;
    r["ww"] = 4;
    r["i"] = e;
    var n = KAdz();
    var i = DBnu()["encrypt"](JSON.stringify(t["tGGi"]), aeskey);
    var o = ZApR["fLFi"](i);
    var w = o + n;
    return w;
}

function encrypt1(){
    var t = this;
    var r = t["uTWm"];


    var e = t["kmZ_"]["wheJ"]();
    t["JjbT"] = e;
    t["tGGi"]["cc"] = r["cc"];
    t["tGGi"]["ww"] = r["supportWorker"];
    t["tGGi"]["i"] = e;
    var n = t["KAdz"]();
    var i = DBnu()["encrypt1"](JSON.stringify(t["tGGi"]), LWME());
    var o = ZApR["fLFi"](i);
}

// 先传执行gettype这个接口返回的参数回来
app.post('/gettype_after', function (req, res) {
    var body = req.body;
    var e = body;
    console.log(encrypt(e));
});

app.listen(3400, ()=>console.log('获取ajax的参数服务开启'));


