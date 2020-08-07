// var express = require('express');
// var app = express();
// var bodyParser = require('body-parser');
// app.use(bodyParser());

// var _guiji = [];
// var _token = "";
// var _end = "";
// window = global
window.NECaptcha = function(e) {
    function t(i) {
        if (n[i])
            return n[i].exports;
        var r = n[i] = {
            exports: {},
            id: i,
            loaded: !1
        };
        return e[i].call(r.exports, r, r.exports, t),
            r.loaded = !0,
            r.exports
    }
    var n = {};
    return t.m = e,
        t.c = n,
        t.p = "/2.13.6/",
        t(0)
}([function(e, t, n) {
    n(51),
        n(42);
    var i = n(27);
    e.exports = i
}
    , function(e, t) {
        var n = {}.toString
            , i = {
            slice: function(e, t, n) {
                for (var i = [], r = t || 0, o = n || e.length; r < o; r++)
                    i.push(r);
                return i
            },
            getObjKey: function(e, t) {
                for (var n in e)
                    if (e.hasOwnProperty(n) && e[n] === t)
                        return n
            },
            typeOf: function(e) {
                return null == e ? String(e) : n.call(e).slice(8, -1).toLowerCase()
            },
            isFn: function(e) {
                return "function" == typeof e
            },
            log: function(e, t) {
                var n = ["info", "warn", "error"];
                return "string" == typeof e && ~n.indexOf(e) ? void (console && console[e]("[NECaptcha] " + t)) : void i.error('util.log(type, msg): "type" must be one string of ' + n.toString())
            },
            warn: function(e) {
                i.log("warn", e)
            },
            error: function(e) {
                i.log("error", e)
            },
            assert: function(e, t) {
                if (!e)
                    throw new Error("[NECaptcha] " + t)
            },
            msie: function r() {
                var e = navigator.userAgent
                    , r = parseInt((/msie (\d+)/.exec(e.toLowerCase()) || [])[1]);
                return isNaN(r) && (r = parseInt((/trident\/.*; rv:(\d+)/.exec(e.toLowerCase()) || [])[1])),
                    r
            },
            now: function() {
                return (new Date).getTime()
            },
            getIn: function(e, t, n) {
                if ("[object Object]" !== Object.prototype.toString.call(e))
                    return n;
                "string" == typeof t && (t = t.split("."));
                for (var i = 0, r = t.length; i < r; i++) {
                    var o = t[i];
                    if (i < r - 1 && !e[o])
                        return n || void 0;
                    e = e[o]
                }
                return e
            },
            raf: function o(e) {
                var o = window.requestAnimationFrame || window.webkitRequestAnimationFrame || function(e) {
                        window.setTimeout(e, 16)
                    }
                ;
                o(e)
            },
            nextFrame: function(e) {
                i.raf(function() {
                    return i.raf(e)
                })
            },
            sample: function(e, t) {
                var n = e.length;
                if (n <= t)
                    return e;
                for (var i = [], r = 0, o = 0; o < n; o++)
                    o >= r * (n - 1) / (t - 1) && (i.push(e[o]),
                        r += 1);
                return i
            },
            template: function(e, t) {
                var n = function(e) {
                    return e.replace(/([.*+?^${}()|[\]\/\\])/g, "\\$1")
                }
                    , i = {
                    start: "<%",
                    end: "%>",
                    interpolate: /<%=(.+?)%>/g
                }
                    , r = i
                    , o = new RegExp("'(?=[^" + r.end.substr(0, 1) + "]*" + n(r.end) + ")","g")
                    , a = new Function("obj","var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('" + e.replace(/[\r\t\n]/g, " ").replace(o, "\t").split("'").join("\\'").split("\t").join("'").replace(r.interpolate, "',$1,'").split(r.start).join("');").split(r.end).join("p.push('") + "');}return p.join('');");
                return t ? a(t) : a
            },
            uuid: function a(e, t) {
                var n = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("")
                    , a = []
                    , i = void 0;
                if (t = t || n.length,
                    e)
                    for (i = 0; i < e; i++)
                        a[i] = n[0 | Math.random() * t];
                else {
                    var r = void 0;
                    for (a[8] = a[13] = a[18] = a[23] = "-",
                             a[14] = "4",
                             i = 0; i < 36; i++)
                        a[i] || (r = 0 | 16 * Math.random(),
                            a[i] = n[19 === i ? 3 & r | 8 : r])
                }
                return a.join("")
            },
            reverse: function(e) {
                return Array.isArray(e) ? e.reverse() : "string" === i.typeOf(e) ? e.split("").reverse().join("") : e
            },
            encodeUrlParams: function(e) {
                var t = [];
                for (var n in e)
                    e.hasOwnProperty(n) && t.push(window.encodeURIComponent(n) + "=" + window.encodeURIComponent(e[n]));
                return t.join("&")
            }
        };
        e.exports = i
    }
    , function(e, t, n) {
        function i(e) {
            if (e = e || window.event,
                e[v])
                return e;
            this.event = e,
                this.target = e.target || e.srcElement;
            var t = this.type = e.type;
            if (c.test(t) && (this.clientX = e.clientX || e.changedTouches && e.changedTouches[0].clientX,
                this.clientY = e.clientY || e.changedTouches && e.changedTouches[0].clientY,
                this.pageX = null != e.pageX ? e.pageX : e.clientX + j.scrollLeft,
                this.pageY = null != e.pageX ? e.pageY : e.clientY + j.scrollTop,
            "mouseover" === t || "mouseout" === t)) {
                for (var n = e.relatedTarget || e[("mouseover" === t ? "from" : "to") + "Element"]; n && 3 === n.nodeType; )
                    n = n.parentNode;
                this.relatedTarget = n
            }
            this[v] = !0
        }
        function r(e) {
            var t = e.nodeType;
            return 1 === t || 9 === t || 11 === t ? "string" == typeof e.textContent ? e.textContent : e.innerText : 3 === t || 4 === t ? e.nodeValue : ""
        }
        var o, a, l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            , s = n(1), u = n(17), f = document.createElement("div"), c = /^(?:click|dblclick|contextmenu|DOMMouseScroll|(mouse|touch|pointer)(?:\w+))$/, j = document;
        j = j.compatMode && "CSS1Compat" !== j.compatMode ? j.body : j.documentElement;
        var d = /Mobile/i.test(window.navigator.userAgent)
            , h = function() {
            var e = 0
                , t = !1
                , n = window.navigator;
            "undefined" != typeof n.maxTouchPoints ? e = n.maxTouchPoints : "undefined" != typeof n.msMaxTouchPoints && (e = n.msMaxTouchPoints);
            try {
                document.createEvent("TouchEvent"),
                    t = !0
            } catch (i) {}
            var r = "ontouchstart"in window;
            return e > 0 || t || r
        }()
            , p = function() {
            try {
                return document.createEvent("PointerEvent"),
                    !0
            } catch (e) {
                return !1
            }
        }()
            , y = {
            click: "touchstart",
            mousedown: "touchstart",
            mousemove: "touchmove",
            mouseup: "touchend"
        }
            , v = "_fixed_" + Math.random().toString(36).slice(2, 7)
            , g = !1;
        try {
            document.createElement("div").addEventListener("test", function() {}, Object.defineProperty({}, "passive", {
                get: function() {
                    return g = !0,
                        !1
                }
            }))
        } catch (b) {}
        Object.assign(i.prototype, {
            stop: function() {
                this.preventDefault().stopPropagation()
            },
            preventDefault: function() {
                var e = this.event;
                return !h && e.preventDefault ? e.preventDefault() : e.returnValue = !1,
                    this
            },
            stopPropagation: function() {
                return this.event.stopPropagation ? this.event.stopPropagation() : this.event.cancelBubble = !0,
                    this
            },
            stopImmediatePropagation: function() {
                this.event.stopImmediatePropagation && this.event.stopImmediatePropagation()
            }
        });
        var m = {};
        m.body = document.body,
            m.doc = document,
            m.isMobile = d,
            m.supportTouch = h,
            m.supportPointer = p,
            m.supportPassive = g,
            f.addEventListener ? (o = function(e, t, n) {
                    e.addEventListener(t, n, !1)
                }
                    ,
                    a = function(e, t, n) {
                        e.removeEventListener(t, n, !1)
                    }
            ) : (o = function(e, t, n) {
                    e.attachEvent("on" + t, n)
                }
                    ,
                    a = function(e, t, n) {
                        e.detachEvent("on" + t, n)
                    }
            ),
            m.on = function(e, t, n) {
                var r = t.split(" ");
                return n.real = function(t) {
                    var r = new i(t);
                    r.origin = e,
                        n.call(e, r)
                }
                    ,
                    r.map(function(t) {
                        switch (!0) {
                            case d:
                                o(e, y[t] || t, n.real);
                                break;
                            case !d && h:
                                o(e, t, n.real),
                                "click" !== t && o(e, y[t], n.real);
                                break;
                            default:
                                o(e, t, n.real)
                        }
                    }),
                    m
            }
            ,
            m.once = function(e, t, n) {
                var i = function r() {
                    var i = n.apply(this, arguments);
                    return m.off(e, t, r),
                        i
                };
                return m.on(e, t, i)
            }
            ,
            m.off = function(e, t, n) {
                var i = t.split(" ");
                n = n.real || n,
                    i.map(function(t) {
                        switch (!0) {
                            case d:
                                a(e, y[t] || t, n);
                                break;
                            case !d && h:
                                a(e, t, n),
                                    a(e, y[t], n);
                                break;
                            default:
                                a(e, t, n)
                        }
                    })
            }
            ,
            m.find = function(e, t) {
                return "object" === ("undefined" == typeof e ? "undefined" : l(e)) && e.nodeType ? e : e ? (e = e.trim(),
                    t = t || document,
                    t.querySelector ? t.querySelector(e) : /^#[^#]+$/.test(e) ? document.getElementById(e.slice(1)) : /^\.[^.]+$/.test(e) ? m.getElementsByClassName(e.slice(1), t)[0] || null : /^[^.#]+$/.test(e) ? t.getElementsByTagName(e)[0] || null : null) : null
            }
            ,
            m.findAll = function(e, t) {
                if (t = t || document,
                    e = e.trim(),
                    t.querySelectorAll)
                    return t.querySelectorAll(e);
                if (/^#[^#]+$/.test(e)) {
                    var n = document.getElementById(e.slice(1));
                    return n ? [n] : []
                }
                return /^\.[^.]+$/.test(e) ? m.getElementsByClassName(e.slice(1), t) : /^[^.#]+$/.test(e) ? t.getElementsByTagName(e) : []
            }
            ,
            m.html = function(e, t) {
                return "undefined" === s.typeOf(t) ? e.innerHTML : void (e.innerHTML = t)
            }
            ,
            m.css = function(e, t) {
                e.style.cssText += ";" + t
            }
            ,
            m.replace = function(e, t) {
                t.parentNode && t.parentNode.replaceChild(e, t)
            }
            ,
            m.remove = function(e) {
                e.parentNode && e.parentNode.removeChild(e)
            }
            ,
            m.getComputedStyle = function(e, t) {
                var n = e.currentStyle || window.getComputedStyle(e, null);
                return t ? n[t] : n
            }
            ,
            m.addClass = function(e, t) {
                if (e) {
                    var n = e.className || "";
                    ~(" " + n + " ").indexOf(" " + t + " ") || (e.className = n ? n + " " + t : t)
                }
            }
            ,
            m.delClass = function(e, t) {
                if (e) {
                    var n = e.className || "";
                    e.className = (" " + n + " ").replace(" " + t + " ", " ").trim()
                }
            }
            ,
            m.hasClass = function(e, t) {
                if (!e)
                    return !1;
                var n = e.className || "";
                return ~(" " + n + " ").indexOf(" " + t + " ")
            }
            ,
            m.getElementsByClassName = function(e, t) {
                if (t = t || document,
                    document.getElementsByClassName)
                    return t.getElementsByClassName(e);
                for (var n, i = t.getElementsByTagName("*"), r = [], o = 0, a = i.length; o < a; o++)
                    n = i[o],
                    ~(" " + n.className + " ").indexOf(" " + e + " ") && r.push(n);
                return r
            }
            ,
            m.getBubblePath = function(e) {
                for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : document, n = [], i = e; i && i !== t; )
                    n.push(i),
                        i = i.parentNode;
                return n
            }
            ,
            m.transition = function(e, t) {
                function n() {}
                s.assert(e && e.nodeType, 'transition(el, opts) "el" must be a DOM element!');
                var i = {
                    name: "",
                    "enter-class": "",
                    "enter-active-class": "",
                    "leave-class": "",
                    "leave-active-class": "",
                    beforeEnter: n,
                    enter: n,
                    afterEnter: n,
                    enterCanceled: n,
                    beforeLeave: n,
                    leave: n,
                    afterLeave: n,
                    leaveCanceled: n,
                    insert: n
                };
                t = Object.assign({}, i, t);
                var r = t
                    , o = r.name
                    , a = r.beforeEnter
                    , l = r.enter
                    , f = r.afterEnter
                    , c = r.enterCanceled
                    , j = r.beforeLeave
                    , d = r.leave
                    , h = r.afterLeave
                    , p = r.leaveCanceled
                    , y = r.insert
                    , v = t["enter-class"] || o && o + "-enter"
                    , g = t["enter-active-class"] || o && o + "-enter-active"
                    , b = t["leave-class"] || o && o + "-leave"
                    , _ = t["leave-active-class"] || o && o + "-leave-active"
                    , T = !s.msie() || s.msie() > 9
                    , w = "transitionend"
                    , S = "animationend"
                    , E = !0
                    , R = !1
                    , C = !1;
                if (void 0 === window.ontransitionend && void 0 !== window.onwebkittransitionend && (w = "webkitTransitionEnd"),
                void 0 === !window.onanimationend && void 0 !== window.onwebkitanimationend && (S = "webkitAnimationEnd"),
                    T) {
                    var k = function() {
                        R && (E = !0,
                            R = !1,
                            m.delClass(e, g),
                            f(e)),
                        C && (C = !1,
                            m.delClass(e, _),
                            h(e))
                    };
                    e.addEventListener(w, k),
                        e.addEventListener(S, k)
                }
                return {
                    enter: function() {
                        if (e) {
                            if (!T)
                                return y(e),
                                    void f(e);
                            e.className = u(e.className.trim().split(/\s+/), v, g),
                                a(e),
                                y(e),
                                E = !1,
                                R = !0,
                                s.nextFrame(function() {
                                    m.delClass(e, v),
                                        l(e)
                                })
                        }
                    },
                    leave: function() {
                        if (e) {
                            if (!T || !E)
                                return void h(e);
                            e.className = u(e.className.trim().split(/\s+/), b, _),
                                j(e),
                                C = !0,
                                s.nextFrame(function() {
                                    m.delClass(e, b),
                                        d(e)
                                })
                        }
                    },
                    cancelEnter: function() {
                        R && (R = !1,
                            m.delClass(e, g),
                            c(e))
                    },
                    cancelLeave: function() {
                        C && (C = !1,
                            m.delClass(e, _),
                            p(e))
                    },
                    dispose: function() {
                        T && (e.removeEventListener(w, k),
                            e.removeEventListener(S, k)),
                            e = null
                    }
                }
            }
            ,
            m.text = function(e, t) {
                if (void 0 === t)
                    return r(e);
                var n = e.nodeType;
                1 !== n && 11 !== n && 9 !== n || ("string" == typeof e.textContent ? e.textContent = t : e.innerText = t)
            }
            ,
            f.className = "yidun_class",
            m.className = f.getAttribute("className") ? function(e) {
                    return e.getAttribute("className")
                }
                : function(e) {
                    return e.getAttribute("class")
                }
            ,
            m.getRect = function(e) {
                var t = e.getBoundingClientRect();
                if ("width"in t)
                    return t;
                var n = t.left
                    , i = t.top
                    , r = t.right
                    , o = t.bottom;
                return Object.assign({}, t, {
                    width: r - n,
                    height: o - i
                })
            }
            ,
            e.exports = m
    }
    , function(e, t) {
        t.CAPTCHA_TYPE = {
            JIGSAW: 2,
            POINT: 3,
            SMS: 4,
            INTELLISENSE: 5,
            ICON_POINT: 7,
            INFERENCE: 9
        },
            t.CAPTCHA_CLASS = {
                CAPTCHA: "yidun",
                PANEL: "yidun_panel",
                SLIDE_INDICATOR: "yidun_slide_indicator",
                SLIDER: "yidun_slider",
                JIGSAW: "yidun_jigsaw",
                POINT: "point",
                SMS: "yidun_sms",
                TIPS: "yidun_tips",
                REFRESH: "yidun_refresh",
                CONTROL: "yidun_control",
                BGIMG: "yidun_bgimg",
                INPUT: "yidun_input",
                LOADBOX: "yidun_loadbox",
                LOADICON: "yidun_loadicon",
                LOADTEXT: "yidun_loadtext",
                ERROR: "error",
                WARN: "warn",
                VERIFY: "verifying",
                SUCCESS: "success",
                LOADING: "loading",
                LOADFAIL: "loadfail"
            },
            t.WIDTH_LIMIT = [220, 1e4],
            t.SAMPLE_NUM = 50,
            t.DEVICE = {
                MOUSE: 1,
                TOUCH: 2,
                MOUSE_TOUCH: 3
            },
            t.MAX_VERIFICATION = 5,
            t.RTL_LANGS = ["ar", "he"],
            t.CACHE_MIN = 6e4,
            t.FILE_DETECT_KEY = {
                core: "NECaptcha",
                light: "NECaptcha_theme_light",
                dark: "NECaptcha_theme_dark",
                plugins: "NECaptcha_plugin",
                watchman: "initWatchman"
            },
            t.FEEDBACK_URL = "http://support.dun.163.com/feedback/captcha",
            t.RUN_ENV = {
                WEB: 10,
                ANDROID: 20,
                IOS: 30,
                MINIPROGRAM: 40,
                JUMPER_MINI_PROGRAM: 50,
                QUICKAPP: 60
            }
    }
    , function(e, t) {
        var n = {
            INVOKE_HOOK: "INVOKE_HOOK",
            EVENT_RESET: "EVENT_RESET",
            SWITCH_TYPE: "SWITCH_TYPE",
            SET_TYPE: "SET_TYPE",
            SWITCH_LOAD_STATUS: "SWITCH_LOAD_STATUS",
            UPDATE_VERIFY_STATUS: "UPDATE_VERIFY_STATUS",
            REFRESH: "REFRESH",
            UPDATE_COUNTS_OF_VERIFYERROR: "UPDATE_COUNTS_OF_VERIFYERROR",
            SET_TOKEN: "SET_TOKEN",
            EVENT_RESET_CLASSIC: "EVENT_RESET_CLASSIC"
        };
        e.exports = n
    }
    , function(e, t) {
        function n(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
                e
        }
        function i(e, t) {
            function n() {}
            n.prototype = t.prototype,
                e.prototype = new n,
                e.prototype.constructor = e
        }
        function r(e, t, n) {
            this.name = "CaptchaError",
                this.code = e,
                this.message = e + ("(" + b[e] + ")") + (t ? " - " + t : ""),
                Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = (new Error).stack,
                this.data = n || {}
        }
        var o, a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            , l = "prototype", s = 100, u = 200, f = 300, c = 432, j = 500, d = 501, h = 502, p = 503, y = 504, v = 600, g = 1e3, b = (o = {},
            n(o, s, "script error"),
            n(o, u, "business error"),
            n(o, f, "unpass error"),
            n(o, c, "captcha id is invalid"),
            n(o, j, "request error"),
            n(o, d, "request api error"),
            n(o, h, "request script error"),
            n(o, p, "request img error"),
            n(o, y, "request timeout error"),
            n(o, v, "request anticheat token error"),
            n(o, g, "unknown error"),
            o);
        i(r, Error),
            r[l].toString = function() {
                var e = String(this.stack);
                return 0 === e.indexOf("CaptchaError:") ? e : this.name + ": " + this.message + (e ? "\n    " + e : "")
            }
            ,
            r.set = function(e, t) {
                "number" == typeof e && "string" == typeof t && (b[e] = t),
                "object" === ("undefined" == typeof e ? "undefined" : a(e)) && e && Object.assign(b, e)
            }
            ,
            r.get = function(e) {
                return b[e]
            }
            ,
            r.remove = function(e) {
                String(e)in b && delete b[e]
            }
            ,
            t = e.exports = r,
            t.SCRIPT_ERROR = s,
            t.BUSINESS_ERROR = u,
            t.UNPASS_ERROR = f,
            t.ID_INVAILD_ERROR = c,
            t.REQUEST_ERROR = j,
            t.REQUEST_API_ERROR = d,
            t.REQUEST_SCRIPT_ERROR = h,
            t.REQUEST_IMG_ERROR = p,
            t.REQUEST_TIMEOUT_ERROR = y,
            t.ANTICHEAT_TOKEN_ERROR = v,
            t.UNKNOWN_ERROR = g
    }
    , function(e, t, n) {
        function i(e) {
            var t = {};
            return e.map(function(e) {
                t[e] = function() {
                    var t = this
                        , n = _.options.mixins || {};
                    (n[e] || []).map(function(e) {
                        return e.call(t)
                    }),
                        this.$options[e].map(function(e) {
                            return e.call(t)
                        })
                }
            }),
                t
        }
        function r(e) {
            function t() {}
            function n() {
                o.apply(this, arguments)
            }
            if (e instanceof _)
                return e;
            var i = {};
            Object.keys(e).map(function(t) {
                ["render"].indexOf(t) > -1 && (i[t] = e[t])
            }),
            f(e.methods) && Object.assign(i, e.methods);
            var o = this.extend({});
            return t.prototype = o.prototype,
                n.prototype = new t,
                Object.assign(n.prototype, i),
                n.prototype.constructor = n,
                n._options = e,
                n._extend = r,
                n
        }
        var o = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n)
                    Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
            }
            return e
        }
            , a = n(18)
            , l = n(36)
            , s = n(10)
            , u = s.getDocFragmentRegex
            , f = s.isPlainObject
            , c = s.getIn
            , j = s.parseAttrsStr
            , d = s.diffDataToUpdate
            , h = s.nextTick
            , p = s.lifeCycleHooks
            , y = n(35)
            , v = n(34)
            , g = n(38)
            , b = n(2)
            , m = 0
            , _ = a(o({
            initialize: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                    , t = this.constructor
                    , n = m++;
                this.id = "__c_" + n,
                    this.name = e.name,
                    this._isMounted = !1,
                    this.$options = y(t._options || {}, e),
                e.render && (this.render = e.render),
                e.methods && Object.assign(this, e.methods),
                    this._boundProps = e._boundProps || {};
                var i = this.$parent = e.$parent || null;
                if (i)
                    if (i.$root)
                        this.$root = i.$root;
                    else {
                        for (var r = i; r.$parent; )
                            r = r.$parent;
                        this.$root = r
                    }
                this.beforeCreate();
                var o = this.$options
                    , a = o.template
                    , s = o.propsData
                    , u = o.data;
                this.$props = this._validateProps(s, !0) || {},
                    Object.assign(this, this.$props),
                    this.$data = "function" == typeof u ? u.call(this) : u || {},
                    Object.assign(this, this.$data),
                    this._composer = l(a, this),
                    this.$children = [],
                    this._instantiateChildren(),
                    this._updater = {
                        id: n,
                        instance: this,
                        data: {}
                    },
                    this.created(),
                e.el && this.$mount(e.el)
            },
            $mount: function(e) {
                this.beforeMount(),
                    this._childrenBeforeMount(),
                    this._composeString(this._composer, this);
                var t = this._composer.toString();
                if ("string" == typeof e || e && 1 === e.nodeType)
                    e = b.find(e),
                        this.$options["abstract"] ? this.$el = e : (e.innerHTML = t,
                            this.$el = e.children[0]);
                else {
                    var n = document.createElement("div");
                    n.innerHTML = t,
                        this.$el = n.children[0],
                    "function" == typeof e && e(this.$el)
                }
                return this._childrenMounted(),
                    this._initEvents(),
                    this._isMounted = !0,
                    this.mounted(),
                    this
            }
        }, i(p), {
            $setData: function(e, t) {
                !t && (e = d(e, this.$data)),
                e && Object.keys(e).length && (this._resolveWatch(e).map(function(e) {
                    return e()
                }),
                    Object.assign(this.$data, e),
                    Object.assign(this, this.$data),
                    Object.assign(this._updater.data, e),
                    v(this._updater),
                    this._renderChildren(e))
            },
            $forceUpdate: function() {
                var e = Object.assign({}, this.$data, this.$props);
                this.$setData(e, !0)
            },
            $replaceChild: function(e, t) {
                var n = t.$el.parentElement
                    , i = t.$el.nextSibling
                    , r = void 0;
                r = null === i ? function(e) {
                        n.appendChild(e)
                    }
                    : function(e) {
                        n.insertBefore(e, i)
                    }
                    ,
                    e._boundProps = t._boundProps,
                    e.$parent = this,
                    t.$destroy();
                var o = this.$children.indexOf(t);
                o > -1 && this.$children.splice(o, 1, e),
                    e.$mount(r)
            },
            $destroy: function(e) {
                this._isMounted && (this.beforeDestroy(),
                    this._childrenBeforeDestroy(),
                !e && !this.$options["abstract"] && this.$el && this.$el.parentElement && this.$el.parentElement.removeChild(this.$el),
                this._events && (this._events.off(),
                    this._events = null),
                    this.$el = null,
                    this.$props = null,
                    this.$data = null,
                    this.$root = null,
                    this.$parent = null,
                    this.$children = null,
                    this.$options = null,
                    this._isMounted = !1)
            },
            $nextTick: h,
            render: function() {},
            _initEvents: function() {
                var e = this
                    , t = this.$el
                    , n = this.$options.on;
                if (t && f(n)) {
                    var i = {};
                    Object.keys(n).map(function(t) {
                        i[t] = n[t].bind(e)
                    }),
                        this._events = new g({
                            $el: t,
                            events: i
                        })
                }
            },
            _childrenBeforeMount: function() {
                this.$children.map(function(e) {
                    e.beforeMount(),
                        e._childrenBeforeMount()
                })
            },
            _childrenMounted: function() {
                this.$children.map(function(e) {
                    e._childrenMounted();
                    var t = e.$root.$el;
                    e.$el = b.find(e.$options.el, t) || b.find(e.$options.el, t.parentElement),
                        e._initEvents(),
                        e._isMounted = !0,
                        e.mounted()
                })
            },
            _childrenBeforeDestroy: function() {
                this.$children.map(function(e) {
                    e.$destroy(!0)
                })
            },
            _composeString: function(e, t) {
                var n = this;
                t.$children.map(function(t) {
                    e.compose(t.name, t._composer.toString()),
                        n._composeString(e, t)
                })
            },
            _setProps: function(e) {
                e = d(e, this.$props),
                e && Object.keys(e).length && (e = this._validateProps(e),
                    this._resolveWatch(e).map(function(e) {
                        return e()
                    }),
                    Object.assign(this.$props, e),
                    Object.assign(this, this.$props),
                    Object.assign(this._updater.data, e),
                    v(this._updater))
            },
            _resolveWatch: function(e) {
                var t = this
                    , n = this.$options.watch;
                if (!n)
                    return [];
                var i = [];
                return Object.keys(n).map(function(r) {
                    var o = c(e, r);
                    if (void 0 !== o) {
                        var a = n[r].bind(t, o, c(t, r));
                        i.push(a)
                    }
                }),
                    i
            },
            _renderChildren: function(e) {
                this.$children.map(function(t) {
                    var n = t._boundProps
                        , i = {};
                    Object.keys(n).map(function(t) {
                        var r = c(e, n[t]);
                        void 0 !== r && (i[t] = r)
                    }),
                        t._setProps(i),
                        t._renderChildren(i)
                })
            },
            _validateProps: function(e, t) {
                if (e) {
                    var n = this.$options.props
                        , i = {};
                    return f(n) ? (Object.keys(n).map(function(r) {
                        var o = n[r]
                            , a = e[r];
                        if (f(o) || (o = {
                            type: o
                        }),
                        void 0 !== a) {
                            var l = Object.prototype.toString;
                            if (o.type && l.call(a) !== l.call(o.type()))
                                throw new Error("[" + r + "] is not valid type.");
                            i[r] = a
                        } else
                            t && (i[r] = o["default"])
                    }),
                        i) : e
                }
            },
            _instantiateChildren: function() {
                var e = this
                    , t = this.$options.components;
                if (t) {
                    var n = this._composer.toString();
                    Object.keys(t).map(function(i) {
                        var r = n.match(u(i, !0)) || [];
                        r.map(function(n) {
                            n = n.match(u(i)) || [];
                            var r = j(n[1])
                                , o = r.props
                                , a = r.bound;
                            Object.keys(a).map(function(t) {
                                var n = c(e, a[t]);
                                o[t] = "function" == typeof n ? n.bind(e) : n
                            });
                            var l = _._extend(t[i])
                                , s = new l({
                                name: i,
                                propsData: o,
                                _boundProps: a,
                                $parent: e
                            });
                            e.$children.push(s)
                        })
                    })
                }
            }
        }));
        _.options = {},
            _._extend = r,
            _.mixin = function(e) {
                var t = _.options.mixins || {};
                _.options.mixins = y(t, e)
            }
            ,
            e.exports = _
    }
    , function(e, t) {
        function n(e, t) {
            function n(e, t) {
                return e.charCodeAt(Math.floor(t % e.length))
            }
            function i(e, t) {
                return t.split("").map(function(t, i) {
                    return t.charCodeAt(0) ^ n(e, i)
                })
            }
            return t = i(e, t),
                _(t)
        }_Nnn = n;
        __toByte = function(e) {
            function t(t) {
                return e.apply(this, arguments)
            }
            return t.toString = function() {
                return e.toString()
            }
                ,
                t
        }(function(e) {
            if (e < -128)
                return __toByte(128 - (-128 - e));
            if (e >= -128 && e <= 127)
                return e;
            if (e > 127)
                return __toByte(-129 + e - 127);
            throw new Error("1001")
        });
        var i = function(e, t) {
            return __toByte(e + t)
        }
            , r = function(e, t) {
            if (null == e)
                return null;
            if (null == t)
                return e;
            for (var n = [], r = t.length, o = 0, a = e.length; o < a; o++)
                n[o] = i(e[o], t[o % r]);
            return n
        }
            , o = function(e, t) {
            return e = __toByte(e),
                t = __toByte(t),
                __toByte(e ^ t)
        }
            , a = function(e, t) {
            if (null == e || null == t || e.length != t.length)
                return e;
            for (var n = [], i = e.length, r = 0, a = i; r < a; r++)
                n[r] = o(e[r], t[r]);
            return n
        }
            , l = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"]
            , s = function(e) {
            var t = [];
            return t.push(l[e >>> 4 & 15]),
                t.push(l[15 & e]),
                t.join("")
        }
            , u = function(e) {
            var t = e.length;
            if (null == e || t < 0)
                return new String("");
            for (var n = [], i = 0; i < t; i++)
                n.push(s(e[i]));
            return n.join("")
        }
            , f = function(e) {
            if (null == e || 0 == e.length)
                return [];
            for (var t = new String(e), n = [], i = t.length / 2, r = 0, o = 0; o < i; o++) {
                var a = parseInt(t.charAt(r++), 16) << 4
                    , l = parseInt(t.charAt(r++), 16);
                n[o] = __toByte(a + l)
            }
            return n
        }
            , c = function(e) {
            if (null == e || void 0 == e)
                return e;
            for (var t = encodeURIComponent(e), n = [], i = t.length, r = 0; r < i; r++)
                if ("%" == t.charAt(r)) {
                    if (!(r + 2 < i))
                        throw new Error("1009");
                    n.push(f(t.charAt(++r) + "" + t.charAt(++r))[0])
                } else
                    n.push(t.charCodeAt(r));
            return n
        }
            , j = function(e) {
            var t = [];
            return t[0] = e >>> 24 & 255,
                t[1] = e >>> 16 & 255,
                t[2] = e >>> 8 & 255,
                t[3] = 255 & e,
                t
        }
            , d = function(e) {
            var t = j(e);
            return u(t)
        }
            , h = function(e, t, n) {
            var i = [];
            if (null == e || 0 == e.length)
                return i;
            if (e.length < n)
                throw new Error("1003");
            for (var r = 0; r < n; r++)
                i[r] = e[t + r];
            return i
        }
            , p = function(e, t, n, i, r) {
            if (null == e || 0 == e.length)
                return n;
            if (null == n)
                throw new Error("1004");
            if (e.length < r)
                throw new Error("1003");
            for (var o = 0; o < r; o++)
                n[i + o] = e[t + o];
            return n
        }
            , y = function(e) {
            for (var t = [], n = 0; n < e; n++)
                t[n] = 0;
            return t
        }
            , v = function(e) {
            return null == e || void 0 == e || "" == e
        }
            , g = function() {
            return ["i", "/", "x", "1", "X", "g", "U", "0", "z", "7", "k", "8", "N", "+", "l", "C", "p", "O", "n", "P", "r", "v", "6", "\\", "q", "u", "2", "G", "j", "9", "H", "R", "c", "w", "T", "Y", "Z", "4", "b", "f", "S", "J", "B", "h", "a", "W", "s", "t", "A", "e", "o", "M", "I", "E", "Q", "5", "m", "D", "d", "V", "F", "L", "K", "y"]
        }
            , b = function() {
            return "3"
        }
            , m = function(e, t, n) {
            var i, r, o, a = g(), l = b(), s = [];
            if (1 == n)
                i = e[t],
                    r = 0,
                    o = 0,
                    s.push(a[i >>> 2 & 63]),
                    s.push(a[(i << 4 & 48) + (r >>> 4 & 15)]),
                    s.push(l),
                    s.push(l);
            else if (2 == n)
                i = e[t],
                    r = e[t + 1],
                    o = 0,
                    s.push(a[i >>> 2 & 63]),
                    s.push(a[(i << 4 & 48) + (r >>> 4 & 15)]),
                    s.push(a[(r << 2 & 60) + (o >>> 6 & 3)]),
                    s.push(l);
            else {
                if (3 != n)
                    throw new Error("1010");
                i = e[t],
                    r = e[t + 1],
                    o = e[t + 2],
                    s.push(a[i >>> 2 & 63]),
                    s.push(a[(i << 4 & 48) + (r >>> 4 & 15)]),
                    s.push(a[(r << 2 & 60) + (o >>> 6 & 3)]),
                    s.push(a[63 & o])
            }
            return s.join("")
        }
            , _ = function(e) {
            if (null == e || void 0 == e)
                return null;
            if (0 == e.length)
                return "";
            var t = 3;
            try {
                for (var n = [], i = 0; i < e.length; ) {
                    if (!(i + t <= e.length)) {
                        n.push(m(e, i, e.length - i));
                        break
                    }
                    n.push(m(e, i, t)),
                        i += t
                }
                return n.join("")
            } catch (r) {
                throw new Error("1010")
            }
        }
            , T = function(e) {
            return _(c(e))
        }
            , w = [0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685, 2657392035, 249268274, 2044508324, 3772115230, 2547177864, 162941995, 2125561021, 3887607047, 2428444049, 498536548, 1789927666, 4089016648, 2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990, 1684777152, 4251122042, 2321926636, 335633487, 1661365465, 4195302755, 2366115317, 997073096, 1281953886, 3579855332, 2724688242, 1006888145, 1258607687, 3524101629, 2768942443, 901097722, 1119000684, 3686517206, 2898065728, 853044451, 1172266101, 3705015759, 2882616665, 651767980, 1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705, 3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527, 1483230225, 3244367275, 3060149565, 1994146192, 31158534, 2563907772, 4023717930, 1907459465, 112637215, 2680153253, 3904427059, 2013776290, 251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719, 3865271297, 1802195444, 476864866, 2238001368, 4066508878, 1812370925, 453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202, 4240017532, 1658658271, 366619977, 2362670323, 4224994405, 1303535960, 984961486, 2747007092, 3569037538, 1256170817, 1037604311, 2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467, 855842277, 2852801631, 3708648649, 1342533948, 654459306, 3188396048, 3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054, 702138776, 2966460450, 3352799412, 1504918807, 783551873, 3082640443, 3233442989, 3988292384, 2596254646, 62317068, 1957810842, 3939845945, 2647816111, 81470997, 1943803523, 3814918930, 2489596804, 225274430, 2053790376, 3826175755, 2466906013, 167816743, 2097651377, 4027552580, 2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225, 1852507879, 4275313526, 2312317920, 282753626, 1742555852, 4189708143, 2394877945, 397917763, 1622183637, 3604390888, 2714866558, 953729732, 1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850, 2936675148, 906185462, 1090812512, 3747672003, 2825379669, 829329135, 1181335161, 3412177804, 3160834842, 628085408, 1382605366, 3423369109, 3138078467, 570562233, 1426400815, 3317316542, 2998733608, 733239954, 1555261956, 3268935591, 3050360625, 752459403, 1541320221, 2607071920, 3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877, 83908371, 2512341634, 3803740692, 2075208622, 213261112, 2463272603, 3855990285, 2094854071, 198958881, 2262029012, 4057260610, 1759359992, 534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934, 4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795, 376229701, 2685067896, 3608007406, 1308918612, 956543938, 2808555105, 3495958263, 1231636301, 1047427035, 2932959818, 3654703836, 1088359270, 936918e3, 2847714899, 3736837829, 1202900863, 817233897, 3183342108, 3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449, 601450431, 3009837614, 3294710456, 1567103746, 711928724, 3020668471, 3272380065, 1510334235, 755167117]
            , S = function(e) {
            var t = 4294967295;
            if (null != e)
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    t = t >>> 8 ^ w[255 & (t ^ i)]
                }
            return d(4294967295 ^ t, 8)
        }
            , E = function(e) {
            return S(null == e ? [] : c(e))
        }
            , R = [120, 85, -95, -84, 122, 38, -16, -53, -11, 16, 55, 3, 125, -29, 32, -128, -94, 77, 15, 106, -88, -100, -34, 88, 78, 105, -104, -90, -70, 90, -119, -28, -19, -47, -111, 117, -105, -62, -35, 2, -14, -32, 114, 23, -21, 25, -7, -92, 96, -103, 126, 112, -113, -65, -109, -44, 47, 48, 86, 75, 62, -26, 72, -56, -27, 66, -42, 63, 14, 92, 59, -101, 19, -33, 12, -18, -126, -50, -67, 42, 7, -60, -81, -93, -86, 40, -69, -37, 98, -63, -59, 108, 46, -45, 93, 102, 65, -79, 73, -23, -46, 37, -114, -15, 44, -54, 99, -10, 60, -96, 76, 26, 61, -107, 18, -116, -55, -40, 57, -76, -82, 45, 0, -112, -77, 29, 43, -30, 109, -91, -83, 107, 101, 81, -52, -71, 84, 36, -41, 68, 39, -75, -122, -6, 11, -80, -17, -74, -73, 35, 49, -49, -127, 80, 103, 79, -25, 52, -43, 56, 41, -61, -24, 17, -118, 115, -38, 8, -78, 33, -85, -106, 58, -98, -108, 94, 116, -125, -51, -9, 71, 82, 87, -115, 9, 69, -123, 123, -117, 113, -22, -124, -87, 64, 13, 21, -89, -2, -99, -97, 1, -4, 34, 20, 83, 119, 30, -12, -110, -66, 118, -48, 6, -36, 104, -58, -102, 97, 5, -20, 31, -72, 70, -39, 67, -68, -57, 110, 89, 51, 10, -120, 28, 111, 127, 22, -3, 54, 53, -1, 100, 74, 50, 91, 27, -31, -5, -64, 124, -121, 24, -13, 95, 121, -8, 4]
            , C = 4
            , k = 4
            , O = 4
            , X = 4
            , $ = function(e) {
            var t = [];
            if (null == e || void 0 == e || 0 == e.length)
                return y(k);
            if (e.length >= k)
                return h(e, 0, k);
            for (var n = 0; n < k; n++)
                t[n] = e[n % e.length];
            return t
        }
            , I = function(e) {
            if (null == e || void 0 == e || 0 == e.length)
                return y(C);
            var t = e.length
                , n = 0;
            n = t % C <= C - O ? C - t % C - O : 2 * C - t % C - O;
            var i = [];
            p(e, 0, i, 0, t);
            for (var r = 0; r < n; r++)
                i[t + r] = 0;
            var o = j(t);
            return p(o, 0, i, t + n, O),
                i
        }
            , x = function(e) {
            if (null == e || e.length % C != 0)
                throw new Error("1005");
            for (var t = [], n = 0, i = e.length / C, r = 0; r < i; r++) {
                t[r] = [];
                for (var o = 0; o < C; o++)
                    t[r][o] = e[n++]
            }
            return t
        }
            , A = function(e) {
            var t = e >>> 4 & 15
                , n = 15 & e
                , i = 16 * t + n;
            return R[i]
        }
            , N = function(e) {
            if (null == e)
                return null;
            for (var t = [], n = 0, i = e.length; n < i; n++)
                t[n] = A(e[n]);
            return t
        }
            , P = function() {
            for (var e = [], t = 0; t < X; t++) {
                var n = 256 * Math.random();
                n = Math.floor(n),
                    e[t] = __toByte(n)
            }
            return e
        }
            , M = function(e, t) {
            if (null == e)
                return null;
            for (var n = __toByte(t), i = [], r = e.length, a = 0; a < r; a++)
                i.push(o(e[a], n));
            return i
        }
            , D = function(e, t) {
            if (null == e)
                return null;
            for (var n = __toByte(t), r = [], o = e.length, a = 0; a < o; a++)
                r.push(i(e[a], n));
            return r
        }
            , M = function(e, t) {
            if (null == e)
                return null;
            for (var n = __toByte(t), i = [], r = e.length, a = 0; a < r; a++)
                i.push(o(e[a], n));
            return i
        }
            , L = function(e) {
            var t = M(e, 56)
                , n = D(t, -40)
                , i = M(n, 103);
            return i
        }
            , Y = function(e, t) {
            null == e && (e = []);
            var n = P();
            t = $(t),
                t = a(t, $(n)),
                t = $(t);
            var i = t
                , o = I(e)
                , l = x(o)
                , s = [];
            p(n, 0, s, 0, X);
            for (var u = l.length, f = 0; f < u; f++) {
                var c = L(l[f])
                    , j = a(c, t)
                    , d = r(j, i);
                j = a(d, i);
                var h = N(j);
                h = N(h),
                    p(h, 0, s, f * C + X, C),
                    i = h
            }
            return s
        }
            , B = function(e) {
            var t = "14731382d816714fC59E47De5dA0C871D3F";
            if (null == t || void 0 == t)
                throw new Error("1008");
            null != e && void 0 != e || (e = "");
            var n = e + E(e)
                , i = c(n)
                , r = c(t)
                , o = Y(i, r);
            return _(o)
        };get_cb = B;
        t.eypt = B,
            t.xor_encode = n,
            t.toByte = __toByte,
            t.str2Bytes = c,
            t.arrayCopy = h,
            t.arrayCopy2 = p,
            t.createEmptyArray = y,
            t.isEmptyString = v,
            t.base64Encode = T,
            t.getStringCRC32 = E,
            t.toByte = __toByte
    }
    , function(e, t, n) {
        function i(e, t) {
            var n = {};
            for (var i in e)
                t.indexOf(i) >= 0 || Object.prototype.hasOwnProperty.call(e, i) && (n[i] = e[i]);
            return n
        }
        var r = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n)
                    Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
            }
            return e
        }
            , o = n(57)
            , a = n(19)
            , l = n(44)
            , s = n(39)
            , u = n(1)
            , f = 0
            , c = function(e) {
            return "string" == typeof e ? [e, e] : Array.isArray(e) && 1 === e.length ? e.concat(e) : e
        }
            , j = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
            return parseInt((new Date).valueOf() / e, 10)
        }
            , d = {
            script: function(e, t) {
                var n = this;
                this.cacheTime && (e = e + "?v=" + j(this.cacheTime)),
                    o(e, {
                        charset: "UTF-8"
                    }, function(i, r) {
                        var o = n.detectKey;
                        if (i || o && !window[o]) {
                            var a = new Error("Failed to load script(" + e + ")." + (i ? i.message : "unreliable script"));
                            return a.data = {
                                url: e,
                                retry: !!n._options.retry
                            },
                                void t(a)
                        }
                        t(r)
                    })
            },
            image: function(e, t) {
                var n = this
                    , i = document.createElement("img");
                i.onload = function() {
                    i.onload = i.onerror = null,
                        t({
                            width: i.width,
                            height: i.height,
                            src: e
                        })
                }
                    ,
                    i.onerror = function(r) {
                        i.onload = i.onerror = null;
                        var o = new Error("Failed to load image(" + e + ")." + r.message);
                        o.data = {
                            url: e,
                            retry: !!n._options.retry
                        },
                            t(o)
                    }
                    ,
                    i.src = e
            },
            api: function(e, t, n) {
                var i = this;
                s(e, n, function(n, r) {
                    if (n) {
                        var o = new Error("Failed to request api(" + e + ")." + n.message);
                        return o.data = {
                            url: e,
                            retry: !!i._options.retry
                        },
                            void t(o)
                    }
                    t(r)
                }, {
                    timeout: this.timeout
                })
            }
        }
            , h = function(e) {
            this.id = e.id || "resource_" + f++,
                this.type = e.type || "script",
                this.url = e.url || "",
                this.payload = e.payload,
                this.timeout = e.timeout || 6e3,
                this.cacheTime = e.cacheTime ? parseInt(e.cacheTime, 10) : 0,
                this.detectKey = e.detectKey || "",
                this._options = e,
                a.call(this),
                this.load(),
                this.setTimeout()
        };
        l(h, a),
            Object.assign(h.prototype, {
                load: function() {
                    var e = this
                        , t = d[this.type];
                    t && t.call(this, this.url, function(t) {
                        return e.resolve(t)
                    }, this.payload)
                },
                addSupport: function(e, t, n) {
                    ("function" != typeof d[e] || n) && (d[e] = t)
                },
                setTimeout: function() {
                    var e = this;
                    window.setTimeout(function() {
                        var t = String(e.url)
                            , n = new Error("Timeout: failed to request " + e.type + "(" + t + ").");
                        n.data = {
                            url: t
                        },
                            e.resolve(n)
                    }, this.timeout)
                }
            }),
            h.SUPPORTS = d;
        var p = function(e) {
            d.hasOwnProperty(e) && (h[e] = function(t) {
                    var n = t.disableRetry
                        , o = t.onTryError
                        , l = t.checkResult
                        , s = i(t, ["disableRetry", "onTryError", "checkResult"]);
                    if (n) {
                        var f = s.url;
                        return Array.isArray(f) && (f = f[0] || ""),
                            new h(r({}, s, {
                                url: f,
                                type: e
                            }))
                    }
                    var j = c(t.url)
                        , d = new a
                        , p = function y() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
                            , n = function(n) {
                            var i = j.length;
                            t < i - 1 ? y(t + 1) : t === i - 1 && (n.data = r({}, n.data, {
                                url: String(j)
                            }),
                                d.resolve(n)),
                            "function" == typeof o && o(n, {
                                type: e,
                                urls: j,
                                url: f,
                                index: t
                            })
                        }
                            , i = function(e) {
                            var t = e instanceof Error ? e : new Error("Failed to check result of " + f);
                            t.data = {
                                url: f,
                                retry: !!s.retry
                            },
                                n(t)
                        }
                            , f = j[t]
                            , c = new h(r({}, s, {
                            type: e,
                            url: f,
                            retry: t > 0
                        }));
                        c.then(function(e) {
                            if (!u.isFn(l))
                                return d.resolve(e);
                            var t = l(e);
                            t instanceof a ? t.then(function() {
                                return d.resolve(e)
                            })["catch"](function(e) {
                                return i(e)
                            }) : t ? d.resolve(e) : i()
                        })["catch"](function(e) {
                            return n(e)
                        })
                    };
                    return p(0),
                        d
                }
            )
        };
        for (var y in d)
            p(y);
        h.all = function(e) {
            var t = 0
                , n = !1
                , i = new a
                , r = [];
            return e.map(function(o, a) {
                o.then(function(o) {
                    n || (r[a] = o,
                        t++,
                    t === e.length && i.resolve(r))
                })["catch"](function(e) {
                    n = !0,
                        i.resolve(e)
                })
            }),
                i
        }
            ,
            e.exports = h
    }
    , function(e, t, n) {
        var i = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n)
                    Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
            }
            return e
        }
            , r = n(15)
            , o = n(5)
            , a = o.REQUEST_SCRIPT_ERROR
            , l = o.REQUEST_IMG_ERROR
            , s = o.REQUEST_API_ERROR;
        e.exports = function(e, t) {
            return function(n, u) {
                var f = u.type
                    , c = u.url
                    , j = u.index
                    , d = {
                    script: a,
                    image: l,
                    api: s
                }
                    , h = new o(d[f],n.message,i({}, t, {
                    url: c
                }));
                r(h, e, {
                    times: j + 1
                })
            }
        }
    }
    , function(e, t) {
        var n = function() {
            function e(e, t) {
                var n = []
                    , i = !0
                    , r = !1
                    , o = void 0;
                try {
                    for (var a, l = e[Symbol.iterator](); !(i = (a = l.next()).done) && (n.push(a.value),
                    !t || n.length !== t); i = !0)
                        ;
                } catch (s) {
                    r = !0,
                        o = s
                } finally {
                    try {
                        !i && l["return"] && l["return"]()
                    } finally {
                        if (r)
                            throw o
                    }
                }
                return n
            }
            return function(t, n) {
                if (Array.isArray(t))
                    return t;
                if (Symbol.iterator in Object(t))
                    return e(t, n);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }();
        t.getDocFragmentRegex = function(e, t) {
            return new RegExp("<" + e + "\\s*([\\s\\S]+)?(?!%)>([\\s\\S]+)?<\\/" + e + ">",t ? "g" : "")
        }
            ,
            t.isPlainObject = function(e) {
                return "[object Object]" === Object.prototype.toString.call(e) && e && e.constructor === Object
            }
            ,
            t.getIn = function(e, t, n) {
                "string" == typeof t && (t = t.split("."));
                for (var i = 0, r = t.length; i < r; i++) {
                    var o = t[i];
                    if (i < r - 1 && !e[o])
                        return n;
                    e = e[o]
                }
                return e
            }
            ,
            t.parseAttrsStr = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
                    , t = e.match(/[^<>*+\s=]+(?:=".*?")?/g);
                if (!t)
                    return {
                        props: {},
                        bound: {}
                    };
                var i = {}
                    , r = {};
                return t.map(function(e) {
                    var t = e.split("=")
                        , o = n(t, 2)
                        , a = o[0]
                        , l = o[1];
                    void 0 === l && (l = !0);
                    try {
                        l = JSON.parse(l)
                    } catch (s) {
                        console.error(s)
                    }
                    if (0 === a.indexOf(":")) {
                        var u = !1;
                        a = a.substring(1);
                        try {
                            l = JSON.parse(l)
                        } catch (s) {
                            r[a] = l,
                                u = !0
                        }
                        !u && (i[a] = l)
                    }
                    0 === a.indexOf("@") ? (a = a.substring(1),
                        r[a] = l) : i[a] = l
                }),
                    {
                        props: i,
                        bound: r
                    }
            }
            ,
            t.nextTick = function(e) {
                window.Promise ? Promise.resolve().then(e) : window.setTimeout(e, 0)
            }
            ,
            t.diffDataToUpdate = function(e, t) {
                var n = {};
                for (var i in e) {
                    var r = e[i];
                    r !== t[i] && (n[i] = r)
                }
                return n
            }
            ,
            t.lifeCycleHooks = ["beforeCreate", "created", "beforeMount", "mounted", "beforeDestroy"]
    }
    , function(e, t, n) {
        function i(e) {
            var t = this;
            o.mixin(this);
            var n = function(e) {
                return t.resolve(e)
            }
                , i = function(e) {
                return t.resolve(e)
            };
            "function" == typeof e && e(n, i)
        }
        var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            , o = n(19);
        i.all = function(e) {
            return new i(function(t, n) {
                    var i = 0
                        , r = !1
                        , o = [];
                    e.map(function(a, l) {
                        a.then(function(n) {
                            r || (o[l] = n,
                                i++,
                            i === e.length && t(o))
                        })["catch"](function(e) {
                            r = !0,
                                n(e)
                        })
                    })
                }
            )
        }
            ,
            i.resolve = function(e) {
                return e && "object" === ("undefined" == typeof e ? "undefined" : r(e)) && "function" == typeof e.then ? e : new i(function(t) {
                        return t(e)
                    }
                )
            }
            ,
            i.reject = function(e) {
                return new i(function(t, n) {
                        return n(e)
                    }
                )
            }
            ,
            e.exports = i
    }
    , function(e, t) {
        var n = {
            FETCH_CAPTCHA: "FETCH_CAPTCHA",
            FETCH_INTELLISENSE_CAPTCHA: "FETCH_INTELLISENSE_CAPTCHA",
            VERIFY_CAPTCHA: "VERIFY_CAPTCHA",
            VERIFY_INTELLISENSE_CAPTCHA: "VERIFY_INTELLISENSE_CAPTCHA",
            RESET_STATE: "RESET_STATE"
        };
        e.exports = n
    }
    , function(e, t, n) {
        function i(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
                e
        }
        function r(e, t) {
            if (!e)
                return {};
            var n = e.customStyles
                , i = e.width
                , r = e.minWidth
                , o = parseInt(n.controlBar.height, 10)
                , a = parseInt(n.gap, 10)
                , l = Math.max(parseInt(i, 10), parseInt(r, 10)) / 2;
            return {
                controlBarHeight: o,
                imagePanelHeight: t ? 0 : l,
                gapHeight: t ? 0 : a,
                total: t ? o : o + a + l
            }
        }
        var o, a = n(1), l = n(2), s = n(3), u = s.CAPTCHA_TYPE, f = s.CAPTCHA_CLASS, c = s.WIDTH_LIMIT, j = s.MAX_VERIFICATION, d = s.RTL_LANGS, h = s.FEEDBACK_URL, p = n(17), y = n(4), v = y.SWITCH_TYPE, g = y.INVOKE_HOOK, b = y.EVENT_RESET, m = y.SWITCH_LOAD_STATUS, _ = y.UPDATE_VERIFY_STATUS, T = y.REFRESH, w = y.EVENT_RESET_CLASSIC, S = y.SET_TOKEN, E = n(12), R = E.FETCH_CAPTCHA, C = E.VERIFY_CAPTCHA, k = E.RESET_STATE, O = n(24), X = n(25), $ = n(26), I = n(23);
        e.exports = {
            el: ".yidun",
            template: n(54),
            props: {
                autoWidth: {
                    type: Boolean,
                    "default": !1
                },
                intellisense: {
                    type: Boolean,
                    "default": !1
                }
            },
            data: function() {
                var e = this.$store.state
                    , t = e.captchaType
                    , n = e.langPkg
                    , i = e.config
                    , r = e.load
                    , o = e.verifyStatus
                    , a = l.isMobile && this.intellisense && "bind" !== i.mode ? "260px" : i.width;
                return {
                    captchaId: i.captchaId,
                    captchaType: t,
                    theme: i.theme,
                    customStyles: i.customStyles,
                    feedback: {
                        url: h,
                        enable: !!i.feedbackEnable
                    },
                    mode: "bind" === i.mode ? "popup" : this.intellisense ? "embed" : i.mode,
                    width: this.autoWidth ? "auto" : a,
                    minWidth: c[0] + "px",
                    langPkg: n,
                    load: r,
                    verifyStatus: o,
                    verifyPayload: null,
                    inferences: [0, 1, 2, 3, 4, 5, 6, 7]
                }
            },
            on: (o = {},
                i(o, "." + f.REFRESH + " click", function(e) {
                    e.stopPropagation(),
                    this.$store.state.countsOfVerifyError > j || "verifying" === this.$store.state.verifyStatus && this.captchaType !== u.SMS || "loading" === this.load.status || this.refresh()
                }),
                i(o, ".yidun_tips click", function() {
                    "error" === this.$store.state.verifyStatus && this.$store.state.countsOfVerifyError > j && this.$store.commit(w)
                }),
                o),
            watch: {
                captchaType: function(e, t) {
                    e !== t && this.updateUIByType(e, t)
                }
            },
            mounted: function() {
                var e = this
                    , t = this.$store.state
                    , n = t.config
                    , i = t.token;
                this._baseClassNames = this.$el.className.trim(),
                    this._removeEvents = this.initEvents(),
                    this._unsubscribe = this.$store.subscribe(function(t, n) {
                        var r = t.type
                            , o = t.payload
                            , a = n.captchaType
                            , l = n.load
                            , s = n.verifyStatus;
                        switch (r) {
                            case v:
                                e.$setData({
                                    captchaType: a
                                });
                                break;
                            case m:
                                e.$setData({
                                    load: l
                                }),
                                l && "done" === l.status && e.$store.commit(g, {
                                    name: "onDidRefresh"
                                });
                                break;
                            case _:
                                e.$setData({
                                    verifyStatus: s,
                                    verifyPayload: o
                                });
                                break;
                            case b:
                                !e.intellisense && e.reset();
                                break;
                            case w:
                                var u = e.intellisense ? {
                                    token: i
                                } : null;
                                e.reset(u);
                                break;
                            case S:
                                e.setFeedbackUrl()
                        }
                    }),
                this.intellisense || this.reset({
                    token: i
                }),
                "bind" === n.mode && this.refresh({
                    token: i
                }),
                d.indexOf(n.lang) !== -1 && (this.$el.style.direction = "rtl")
            },
            beforeDestroy: function() {
                this._unsubscribe(),
                    this._removeEvents()
            },
            render: function(e) {
                var t = e.captchaType
                    , n = e.load
                    , i = e.verifyStatus
                    , r = e.verifyPayload;
                "undefined" != typeof t && this.switchCaptchaType(t),
                "undefined" != typeof n && this.changeLoadStatus(n),
                "undefined" != typeof i && this.updateVerifyStatus(i, r)
            },
            methods: {
                initEvents: function() {
                    var e = this
                        , t = void 0;
                    "float" === this.mode && (t = this.initFloatMode());
                    var n = function(e) {
                        /^IMG$/i.test(e.target.tagName) && e.preventDefault()
                    };
                    return l.on(this.$el, "dragstart", n),
                        function() {
                            t && t(),
                                l.off(e.$el, "dragstart", n)
                        }
                },
                initFloatMode: function() {
                    var e = this
                        , t = l.find("." + f.PANEL, this.$el)
                        , n = l.find("." + f.CONTROL, this.$el)
                        , i = !1
                        , o = null
                        , s = null
                        , u = l.transition(t, {
                        name: "panel_ease_" + this.customStyles.imagePanel.align,
                        insert: function(e) {
                            e.style.display = "block",
                                i = !0
                        },
                        afterLeave: function(e) {
                            e.style.display = "none",
                                i = !1
                        },
                        leaveCanceled: function(e) {
                            e.style.display = "none",
                                i = !1
                        }
                    })
                        , c = this
                        , j = function(e) {
                        c.panelVisible = !e,
                        c.$children && c.$children.map(function(e) {
                            e.floatStatusChange && e.floatStatusChange()
                        }),
                        l.isMobile && setTimeout(function() {
                            c._isMounted && c.$store.commit(g, {
                                name: "onFloatHeightChange",
                                args: [r(c.$data, e)]
                            })
                        }, 200)
                    }
                        , d = !0
                        , h = function(t) {
                        if (e._isMounted) {
                            var n = t.relatedTarget && e.$el.contains(t.relatedTarget);
                            if ((d || !n || "mouseover" !== t.type) && (d = !1,
                                window.clearTimeout(s),
                                u.cancelLeave(),
                            "success" !== e.$store.state.verifyStatus))
                                return i ? j() : void (o = window.setTimeout(function() {
                                    var e = document.activeElement;
                                    e && e !== document.body && e.blur(),
                                        u.enter(),
                                        j()
                                }, 300))
                        }
                    }
                        , p = function(t) {
                        if (e._isMounted) {
                            var n = t.relatedTarget && e.$el.contains(t.relatedTarget)
                                , r = !(l.isMobile || !l.supportTouch) && null === t.relatedTarget;
                            if (!n && !r || "mouseout" !== t.type) {
                                d = !0;
                                var a = l.getBubblePath(t.target);
                                if (!(~["touchstart", "pointerdown"].indexOf(t.type) && ~a.indexOf(e.$el) || ~["mouseleave", "pointerleave"].indexOf(t.type) && null === t.event.relatedTarget)) {
                                    window.clearTimeout(o),
                                        u.cancelEnter();
                                    var f = e.$children[0]
                                        , c = f && f.drag;
                                    !i || c && "dragging" === c.status || (s = window.setTimeout(function() {
                                        u.leave(),
                                            j(!0)
                                    }, 300))
                                }
                            }
                        }
                    }
                        , y = this.$store.subscribe(function(e, t) {
                        var n = e.type;
                        n === _ && "success" === t.verifyStatus && (u.leave(),
                            j(!0))
                    })
                        , v = a.msie()
                        , b = v ? "mouseenter" : "mouseover"
                        , m = v ? "mouseleave" : "mouseout";
                    switch (!0) {
                        case l.isMobile:
                            l.on(n, "touchstart", h),
                                l.on(document.body, "touchstart", p);
                            break;
                        case !l.isMobile && l.supportTouch:
                            l.on(n, "touchstart", h),
                                l.on(document.body, "touchstart", p),
                                l.on(this.$el, b, h),
                                l.on(this.$el, m, p);
                            break;
                        case l.supportPointer:
                            l.on(n, "pointerdown", h),
                                l.on(document.body, "pointerdown", p),
                                l.on(this.$el, "pointerenter", h),
                                l.on(this.$el, "pointerleave", p);
                            break;
                        default:
                            l.on(this.$el, b, h),
                                l.on(this.$el, m, p)
                    }
                    return function() {
                        l.off(e.$el, b, h),
                            l.off(e.$el, m, p),
                            l.off(n, "touchstart", h),
                            l.off(document.body, "touchstart", p),
                        l.supportPointer && (l.off(n, "pointerdown", h),
                            l.off(document.body, "pointerdown", p),
                            l.off(e.$el, "pointerenter", h),
                            l.off(e.$el, "pointerleave", p)),
                            y(),
                            u.dispose()
                    }
                },
                fetchCaptcha: function(e, t) {
                    var n = {
                        width: this.getWidth()
                    };
                    n.token = this.intellisense ? this.$store.state.token : this.$store.state.previousToken,
                        Object.assign(n, e),
                        this.$store.dispatch(R, n, t)
                },
                verifyCaptcha: function(e) {
                    var t = this;
                    this.$store.commit(_, {
                        verifyStatus: "verifying"
                    });
                    var n = this.$store.state.token
                        , i = function(i) {
                        t.$store.dispatch(C, Object.assign({
                            token: n,
                            acToken: i,
                            width: t.getWidth()
                        }, e))
                    };
                    this.$anticheatPromise ? this.$anticheatPromise.then(i) : i("")
                },
                reset: function(e) {
                    this.$store.dispatch(k),
                        this.refresh(e)
                },
                refresh: function(e, t) {
                    var n = this.$children[0];
                    n && n.reset(),
                        this.$anticheatPromise = null,
                        this.$store.commit(T),
                        this.fetchCaptcha(e, t)
                },
                updateUIByType: function(e, t) {
                    t && l.delClass(this.$el, this.getCaptchaTypeClassName(t)),
                        l.addClass(this.$el, this.getCaptchaTypeClassName(e))
                },
                getCaptchaTypeClassName: function(e) {
                    return e ? f.CAPTCHA + "--" + a.getObjKey(u, e).toLowerCase() : ""
                },
                getWidth: function() {
                    return this.$el.offsetWidth
                },
                resetClassNames: function() {
                    for (var e = this._baseClassNames.split(/\s+/), t = arguments.length, n = Array(t), i = 0; i < t; i++)
                        n[i] = arguments[i];
                    this.$el.className = p(e, this.getCaptchaTypeClassName(this.captchaType), n)
                },
                switchCaptchaType: function(e) {
                    if (e) {
                        var t = u.JIGSAW
                            , n = u.POINT
                            , i = u.SMS
                            , r = u.ICON_POINT
                            , o = u.INFERENCE
                            , a = {
                            el: this.$el,
                            propsData: {
                                loadInfo: this.load,
                                mode: this.mode,
                                type: e,
                                onVerifyCaptcha: this.verifyCaptcha.bind(this)
                            },
                            _boundProps: {
                                loadInfo: "load"
                            },
                            $parent: this
                        }
                            , l = this.$children[0];
                        switch (l && l.$destroy(),
                            e) {
                            case t:
                                l = new O(a);
                                break;
                            case n:
                            case r:
                                l = new X(a);
                                break;
                            case i:
                                l = new $(a);
                                break;
                            case o:
                                l = new I(a)
                        }
                        l.$forceUpdate(),
                            this.$children = [l]
                    }
                },
                changeLoadStatus: function(e) {
                    if (e) {
                        var t = f.CAPTCHA
                            , n = f.LOADING
                            , i = f.LOADFAIL
                            , r = f.LOADTEXT
                            , o = l.find("." + r, this.$el)
                            , a = l.find(".yidun_tips__text", this.$el)
                            , s = l.find(".yidun_tips__answer", this.$el)
                            , u = this.$store.state.langPkg
                            , c = e.status
                            , j = e.data;
                        switch (c) {
                            case "loading":
                                j || (this.resetClassNames(t + "--" + n),
                                    l.text(o, u.loading),
                                    l.text(a, u.loading),
                                    l.addClass(s, "hide"));
                                break;
                            case "done":
                                this.resetClassNames();
                                break;
                            case "fail":
                                this.resetClassNames(t + "--" + i),
                                    l.text(o, u.loadfail),
                                    l.text(a, u.loadfail),
                                    l.addClass(s, "hide")
                        }
                        "done" !== c || this.intellisense || this.isReady || (this.isReady = !0,
                            this.$store.commit(g, {
                                name: "onReady"
                            }))
                    }
                },
                updateVerifyStatus: function(e, t) {
                    var n = this
                        , i = f.CAPTCHA
                        , r = f.SUCCESS
                        , o = f.VERIFY
                        , a = f.ERROR
                        , s = l.find(".yidun_tips__text", this.$el)
                        , c = l.find(".yidun_tips__answer", this.$el)
                        , d = l.find(".yidun_slider__icon--img", this.$el)
                        , h = this.$data.customStyles
                        , p = h.controlBar
                        , y = void 0 === p ? {} : p
                        , v = h.icon
                        , g = void 0 === v ? {} : v
                        , b = this.$store.state.langPkg
                        , m = function(e) {
                        !g.slider && d && (e ? (d.src = e,
                            d.style.display = "block") : d.style.display = "none")
                    };
                    switch (e) {
                        case "verifying":
                            this.resetClassNames(i + "--" + o);
                            break;
                        case "success":
                            this.resetClassNames(i + "--" + r),
                                this.captchaType === u.JIGSAW ? l.text(s, "") : l.text(s, b.verifySuccess),
                                l.addClass(c, "hide"),
                                m(y.slideIconSuccess);
                            break;
                        case "error":
                            var _ = this.$store.state.countsOfVerifyError > j
                                , T = i + "--" + a
                                , w = _ ? T + " yidun--maxerror" : T;
                            this.resetClassNames(w),
                                _ ? l.text(s, b.verifyOutOfLimit) : this.captchaType === u.JIGSAW ? l.text(s, "") : l.text(s, b.verifyError),
                                l.addClass(c, "hide"),
                                m(y.slideIconError),
                            !_ && window.setTimeout(function() {
                                return n.refresh()
                            }, this.captchaType === u.POINT || this.captchaType === u.INFERENCE ? 1200 : 300)
                    }
                },
                setFeedbackUrl: function() {
                    var e = l.find(".yidun_feedback", this.$el);
                    if (e) {
                        var t = this.$store.state.token;
                        e.href = this.feedback.url + "?" + a.encodeUrlParams({
                            captchaId: this.captchaId,
                            token: t
                        })
                    }
                },
                getAnticheatToken: function(e) {
                    var t = e.timeout;
                    this.$anticheatPromise = this.$store.state.captchaAnticheat.getToken({
                        timeout: t
                    })
                },
                shouldHandleFloatChange: function(e) {
                    var t = this.$store.state
                        , n = t.countsOfVerifyError
                        , i = t.verifyStatus;
                    return !(n > j) && ((!e || "done" === e.status) && !i)
                }
            }
        }
    }
    , function(e, t, n) {
        function i(e) {
            e.stopPropagation(),
                e.nativeEvent.stopPropagation(),
                this.close()
        }
        function r(e, t) {
            if (!t)
                return e;
            var n = Object.assign({}, e, t)
                , i = n.capPadding
                , r = n.capBarHeight
                , o = n.width
                , a = n.top;
            i = parseFloat(i, 10),
                i = i && 0 !== i ? i : e.capPadding,
                r = parseFloat(r, 10),
                r = r && 0 !== i ? r : e.capBarHeight;
            var s = "auto" !== o;
            if (s) {
                var u = d[0] + 2 * i + 2;
                o = parseFloat(o, 10) || 0,
                    o = o > u ? o : u
            }
            var f = "auto" !== a;
            return f && ("number" === l.typeOf(a) || Number(a) || "0" === a ? a += "px" : /\d+(\.\d+)?(px|rem)/.test(a) || (a = parseFloat(a, 10) || 0,
                a = a >= 0 && a <= 100 ? a + "%" : e.top)),
                {
                    width: o,
                    top: a,
                    capPadding: i,
                    capBarHeight: r
                }
        }
        var o = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n)
                    Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
            }
            return e
        }
            , a = n(2)
            , l = n(1)
            , s = n(4)
            , u = s.UPDATE_VERIFY_STATUS
            , f = n(13)
            , c = n(3)
            , j = c.RTL_LANGS
            , d = c.WIDTH_LIMIT
            , h = {
            capPadding: 15,
            capBarHeight: 50,
            width: "auto",
            top: "20%"
        };
        e.exports = {
            el: ".yidun_popup",
            template: n(56),
            components: {
                "captcha-core": f
            },
            props: {
                autoOpen: {
                    type: Boolean,
                    "default": !0
                },
                intellisense: {
                    type: Boolean,
                    "default": !1
                },
                onClose: Function
            },
            data: function() {
                var e = this.$store.state
                    , t = e.langPkg
                    , n = e.config
                    , i = o({}, h, n.appendTo ? {
                    top: "auto"
                } : {})
                    , a = r(i, n.popupStyles)
                    , l = "auto" !== a.width
                    , s = "auto" !== a.top;
                return {
                    langPkg: t,
                    widthIsNotAuto: l,
                    width: l ? a.width + "px" : "auto",
                    topIsNotAuto: s,
                    top: s ? a.top : "auto",
                    theme: n.theme,
                    popupStyles: a,
                    appendTo: n.appendTo,
                    enableClose: n.enableClose,
                    bodyCloseModalFn: this.bodyCloseModal.bind(this)
                }
            },
            on: Object.assign({
                ".yidun_modal__close click": i
            }, a.isMobile ? null : {
                ".yidun_popup__mask click": i
            }),
            mounted: function() {
                var e = this
                    , t = a.find(".yidun_modal", this.$el)
                    , n = a.find(".yidun_popup__mask", this.$el);
                a.on(this.appendTo ? n : document, "click", this.bodyCloseModalFn),
                    this._transition = a.transition(t, {
                        name: "popup_ease",
                        beforeEnter: function() {
                            n.style.opacity = "0"
                        },
                        insert: function() {
                            e.$el.style.display = "block"
                        },
                        enter: function() {
                            n.style.opacity = ""
                        },
                        leave: function() {
                            n.style.opacity = "0"
                        },
                        afterLeave: function() {
                            var t = e.onClose;
                            e.$el.style.display = "none",
                            t && t()
                        }
                    }),
                    this._unsubscribe = this.$store.subscribe(function(t, n) {
                        var i = t.type;
                        i === u && "success" === n.verifyStatus && window.setTimeout(e.close.bind(e), 500)
                    }),
                j.indexOf(this.$store.state.config.lang) !== -1 && (this.$el.style.direction = "rtl"),
                this.autoOpen && this.open()
            },
            beforeDestroy: function() {
                this._transition.dispose(),
                    a.off(this.appendTo ? a.find(".yidun_popup__mask", this.$el) : document, "click", this.bodyCloseModalFn)
            },
            methods: {
                open: function() {
                    var e = this;
                    l.nextFrame(function() {
                        return e._transition.enter()
                    })
                },
                bodyCloseModal: function(e) {
                    var t = a.className(e.target);
                    t && t.search(/yidun/g) > -1 || this.close()
                },
                close: function() {
                    this.$store.state.config.enableClose || this.closeModal()
                },
                closeModal: function() {
                    this._isMounted && "none" !== this.$el.style.display && this._transition.leave()
                },
                refresh: function() {
                    var e = this.$children[0];
                    e && e.refresh.apply(e, arguments)
                }
            }
        }
    }
    , function(e, t, n) {
        function i(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
                e
        }
        var r, o = n(20), a = n(16), l = n(5), s = l.REQUEST_SCRIPT_ERROR, u = l.REQUEST_API_ERROR, f = l.REQUEST_IMG_ERROR, c = l.BUSINESS_ERROR, j = l.UNPASS_ERROR, d = l.ANTICHEAT_TOKEN_ERROR, h = n(19), p = n(8), y = n(1), v = y.uuid, g = (r = {},
            i(r, u, "api"),
            i(r, f, "image"),
            i(r, s, "script"),
            i(r, c, "business"),
            i(r, j, "unpass"),
            i(r, d, "anticheat"),
            r), b = null;
        e.exports = function(e, t, n) {
            var i = t.protocol
                , r = t.apiServer
                , l = t.__serverConfig__
                , s = void 0 === l ? {} : l
                , u = t.captchaId
                , f = t.timeout
                , c = new h
                , j = function(e) {
                var t = "/api/v2/collect";
                return Array.isArray(e) ? e.map(function(e) {
                    return a({
                        protocol: i,
                        host: e,
                        path: t
                    })
                }) : a({
                    protocol: i,
                    host: e,
                    path: t
                })
            }
                , d = j(r || s.apiServer || ["c.dun.163yun.com", "c.dun.163.com"])
                , y = o({
                timeout: f,
                disableRetry: !0
            })
                , m = e.data
                , _ = Object.assign({
                id: u,
                token: m.token || "",
                type: g[e.code] || "other",
                target: m.url || m.resource || "",
                message: e.toString()
            }, n);
            null == window.ip && (window.ip = function(e, t, n) {
                    b = {
                        ip: e,
                        dns: n
                    }
                }
            );
            var T = i + "://only-d-" + v(32) + "-" + (new Date).valueOf() + ".nstool.netease.com/ip.js";
            return p.script({
                url: T,
                timeout: f,
                checkResult: function(e) {
                    e && e.parentElement.removeChild(e);
                    var t = new h;
                    return b && b.dns ? (t.resolve(),
                        t) : (setTimeout(function() {
                        return t.resolve(new Error("try to collect dns again"))
                    }, 100),
                        t)
                }
            })["finally"](function() {
                Object.assign(_, b),
                    y(d, _, function(e, t) {
                        if (e || t.error) {
                            console && console.warn("Failed to collect error.");
                            var n = new Error(e ? e.message : t.msg);
                            return n.data = {
                                url: d
                            },
                                void c.resolve(n)
                        }
                        c.resolve()
                    })
            }),
                c
        }
    }
    , function(e, t) {
        e.exports = function(e) {
            var t = e.protocol
                , n = void 0 === t ? "" : t
                , i = e.host
                , r = void 0 === i ? "" : i
                , o = e.port
                , a = void 0 === o ? "" : o
                , l = e.path
                , s = void 0 === l ? "" : l
                , u = e.search
                , f = void 0 === u ? "" : u
                , c = e.hash
                , j = void 0 === c ? "" : c;
            if (n && (n = n.replace(/:?\/{0,2}$/, "://")),
                r) {
                var d = r.match(/^([-0-9a-zA-Z.:]*)(\/.*)?/);
                r = d[1],
                    s = (d[2] || "") + "/" + s
            }
            if (!r && (n = ""),
                a) {
                if (!r)
                    throw Error('"host" is required, if "port" was provided');
                a = ":" + a
            }
            return s && (s = s.replace(/^\/*|\/+/g, "/")),
            f && (f = f.replace(/^\??/, "?")),
            j && (j = j.replace(/^#?/, "#")),
            n + r + a + s + f + j
        }
    }
    , function(e, t, n) {
        var i, r, o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
        ;
        !function() {
            var a = function() {
                function e() {}
                function t(e, t) {
                    for (var n = t.length, i = 0; i < n; ++i)
                        a(e, t[i])
                }
                function n(e, t) {
                    e[t] = !0
                }
                function i(e, t) {
                    for (var n in t)
                        s.call(t, n) && (e[n] = !!t[n])
                }
                function r(e, t) {
                    for (var n = t.split(u), i = n.length, r = 0; r < i; ++r)
                        e[n[r]] = !0
                }
                function a(e, a) {
                    if (a) {
                        var l = "undefined" == typeof a ? "undefined" : o(a);
                        "string" === l ? r(e, a) : Array.isArray(a) ? t(e, a) : "object" === l ? i(e, a) : "number" === l && n(e, a)
                    }
                }
                function l() {
                    for (var n = arguments.length, i = Array(n), r = 0; r < n; r++)
                        i[r] = arguments[r];
                    var o = new e;
                    t(o, i);
                    var a = [];
                    for (var l in o)
                        o[l] && a.push(l);
                    return a.join(" ")
                }
                e.prototype = {};
                var s = {}.hasOwnProperty
                    , u = /\s+/;
                return l
            }();
            "undefined" != typeof e && e.exports ? e.exports = a : "object" === o(n(21)) && n(21) ? (i = [],
                r = function() {
                    return a
                }
                    .apply(t, i),
                !(void 0 !== r && (e.exports = r))) : window.classNames = a
        }()
    }
    , function(e, t) {
        function n() {
            function e(e) {
                return o.call(t(e) ? e : function() {}
                    , e, 1)
            }
            function t(e) {
                return ("undefined" == typeof e ? "undefined" : i(e)) === a
            }
            function n(e, t, n) {
                return function() {
                    var i = this.supr;
                    this.supr = n[s][e];
                    var r = {}.fabricatedUndefined
                        , o = r;
                    try {
                        o = t.apply(this, arguments)
                    } finally {
                        this.supr = i
                    }
                    return o
                }
            }
            function r(e, i, r) {
                for (var o in i)
                    i.hasOwnProperty(o) && (e[o] = t(i[o]) && t(r[s][o]) && l.test(i[o]) ? n(o, i[o], r) : i[o])
            }
            function o(e, n) {
                function i() {}
                function o() {
                    this.initialize ? this.initialize.apply(this, arguments) : (n || u && a.apply(this, arguments),
                        f.apply(this, arguments))
                }
                i[s] = this[s];
                var a = this
                    , l = new i
                    , u = t(e)
                    , f = u ? e : this
                    , c = u ? {} : e;
                return o.methods = function(e) {
                    return r(l, e, a),
                        o[s] = l,
                        this
                }
                    ,
                    o.methods.call(o, c).prototype.constructor = o,
                    o.extend = arguments.callee,
                    o[s].implement = o.statics = function(e, t) {
                        return e = "string" == typeof e ? function() {
                            var n = {};
                            return n[e] = t,
                                n
                        }() : e,
                            r(this, e, a),
                            this
                    }
                    ,
                    o
            }
            var a = "function"
                , l = /xyz/.test(function() {
                xyz
            }) ? /\bsupr\b/ : /.*/
                , s = "prototype";
            return e
        }
        var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
        ;
        e.exports = n()
    }
    , function(e, t) {
        function n() {
            this._state = o,
                this._arg = void 0,
                this._fullfilledCallback = [],
                this._rejectedCallback = []
        }
        function i(e) {
            window.setTimeout(e, 1)
        }
        function r(e) {
            if (e) {
                var t = new n;
                e.then = function() {
                    return t.then.apply(t, arguments)
                }
                    ,
                    e["catch"] = function() {
                        return t["catch"].apply(t, arguments)
                    }
                    ,
                    e["finally"] = function() {
                        return t["finally"].apply(t, arguments)
                    }
                    ,
                    e.resolve = function() {
                        return t.resolve.apply(t, arguments)
                    }
            }
        }
        var o = "pending"
            , a = "fullfilled"
            , l = "rejected";
        Object.assign(n.prototype, {
            then: function(e, t) {
                var n = function(e) {
                    return "function" == typeof e
                };
                return n(e) && this._fullfilledCallback.push(e),
                n(t) && this._rejectedCallback.push(t),
                this._state !== o && this._emit(this._state),
                    this
            },
            "catch": function(e) {
                return this.then(null, e)
            },
            "finally": function(e) {
                return this.then(e, e)
            },
            resolve: function(e) {
                this._state === o && (e instanceof Error ? this._state = l : this._state = a,
                    this._arg = e,
                    this._emit(this._state))
            },
            _emit: function(e) {
                var t = this;
                switch (e) {
                    case a:
                        i(function() {
                            t._fullfilledCallback.map(function(e) {
                                return e(t._arg)
                            }),
                                t._fullfilledCallback = [],
                                t._rejectedCallback = []
                        });
                        break;
                    case l:
                        i(function() {
                            t._rejectedCallback.map(function(e) {
                                return e(t._arg)
                            }),
                                t._fullfilledCallback = [],
                                t._rejectedCallback = []
                        })
                }
            }
        }),
            n.mixin = r,
            e.exports = n
    }
    , function(e, t, n) {
        var i = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var i in n)
                    Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
            }
            return e
        }
            , r = n(8)
            , o = n(31);
        e.exports = function(e) {
            return function(t, n, a, l) {
                Object.assign(n, {
                    referer: o()
                });
                var s = i({}, e, l, {
                    url: t,
                    payload: n
                });
                r.api(s).then(function(e) {
                    return a(null, e)
                })["catch"](a)
            }
        }
    }
    , function(e, t) {
        (function(t) {
                e.exports = t
            }
        ).call(t, {})
    }
    , function(e, t, n) {
        var i = n(12)
            , r = i.FETCH_INTELLISENSE_CAPTCHA
            , o = i.VERIFY_INTELLISENSE_CAPTCHA
            , a = i.RESET_STATE
            , l = n(4)
            , s = l.SWITCH_LOAD_STATUS
            , u = l.UPDATE_VERIFY_STATUS
            , f = l.INVOKE_HOOK
            , c = l.EVENT_RESET
            , j = n(3)
            , d = j.CAPTCHA_TYPE
            , h = j.SAMPLE_NUM
            , p = j.MAX_VERIFICATION
            , y = n(1)
            , v = n(7)
            , g = v.eypt
            , b = v.xor_encode
            , m = n(6)
            , _ = n(14)
            , T = n(2)
            , w = n(11);
        e.exports = {
            data: function() {
                return {
                    beginTime: y.now(),
                    traceData: [],
                    status: "normal",
                    classicVisible: !1
                }
            },
            mounted: function() {
                this._removeEvents = this.initEvents(),
                    this.fetchCaptcha()
            },
            render: function(e) {
                var t = e.status
                    , n = e.classicVisible;
                void 0 !== t && this.updateUI(t),
                void 0 !== n && this.toggleClassicVisible(n)
            },
            beforeDestroy: function() {
                this._removeEvents(),
                    this.clear()
            },
            methods: {
                fetchCaptcha: function() {
                    var e = this;
                    return new w(function(t, n) {
                            e.$store.dispatch(r, {
                                width: ""
                            }, function(i, r) {
                                if (e._isMounted) {
                                    if (i)
                                        return e.$setData({
                                            status: "loadfail"
                                        }),
                                            void n(i);
                                    e.$store.commit(f, {
                                        name: "onReady"
                                    }),
                                        e.$store.commit(f, {
                                            name: "onDidRefresh"
                                        }),
                                        t(r)
                                }
                            })
                        }
                    )
                },
                initEvents: function() {
                    var e = this
                        , t = this.$store.subscribe(function(t, n) {
                        var i = t.type
                            , r = (t.payload,
                            n.verifyStatus)
                            , o = n.load;
                        switch (i) {
                            case s:
                                o && ("loading" === o.status && e.$setData({
                                    status: "loading"
                                }),
                                "done" === o.status && e.$setData({
                                    status: "loaddone"
                                }),
                                "fail" === o.status && e.$setData({
                                    status: "loadfail"
                                }));
                                break;
                            case u:
                                "success" === r && e.$setData({
                                    status: "success"
                                }),
                                "error" === r && e.$setData({
                                    status: "error"
                                });
                                break;
                            case c:
                                e.reset()
                        }
                    });
                    return function() {
                        t()
                    }
                },
                reset: function() {
                    var e = this;
                    this.$store.dispatch(a),
                        this.fetchCaptcha().then(function() {
                            e.clear(),
                                e.$setData({
                                    status: "normal"
                                })
                        })
                },
                clear: function() {
                    var e = this;
                    this._captchaIns && (this.$setData({
                        classicVisible: !1
                    }),
                        this.$nextTick(function() {
                            e._captchaIns.$destroy(),
                                e._captchaIns = null
                        })),
                        this.beginTime = 0,
                        this.traceData = []
                },
                toggleClassicVisible: function(e) {
                    var t = this._captchaIns;
                    if (T.isMobile && t)
                        e && t.open(),
                        !e && t.close();
                    else {
                        var n = T.find(".yidun_classic-wrapper", this.$el);
                        n.style.display = e ? "block" : "none"
                    }
                },
                updateUI: function(e) {
                    var t = this
                        , n = T.find(".yidun_tips__text", this.$el)
                        , i = function(e) {
                        e.stopPropagation(),
                            t.$store.commit(c)
                    };
                    switch (n && T.off(n, "click", i),
                        e) {
                        case "error":
                            this.$store.state.countsOfVerifyError > p && n && T.on(n, "click", i)
                    }
                },
                verifyCaptcha: function() {
                    "normal" === this.status ? this.verifyIntellisenseCaptcha() : this._captchaIns && this._captchaIns.open()
                },
                verifyIntellisenseCaptcha: function() {
                    var e = this
                        , t = this.$store.state
                        , n = t.token
                        , i = t.captchaAnticheat
                        , r = y.now()
                        , a = b(n, [0, 0, r - (this.beginTime || r)] + "")
                        , l = this.traceData.map(function(e) {
                        return b(n, e)
                    })
                        , s = function(t) {
                        e.$store.dispatch(o, {
                            token: n,
                            acToken: t,
                            type: d.INTELLISENSE,
                            width: "240",
                            data: JSON.stringify({
                                d: "",
                                m: g(y.sample(l, h).join(":")),
                                p: g(a),
                                ext: g(b(n, "1," + l.length))
                            })
                        }, function(t) {
                            if (e._isMounted) {
                                if (!t)
                                    return void e.$setData({
                                        status: "success"
                                    });
                                if (!e._captchaIns) {
                                    var n = e.$store.state.config
                                        , i = m._extend(_);
                                    e._captchaIns = new i({
                                        store: e.$store,
                                        propsData: {
                                            intellisense: !0,
                                            onClose: function() {
                                                e.$store.commit(f, {
                                                    name: "onClose"
                                                })
                                            }
                                        }
                                    }).$mount(function(e) {
                                        n.appendTo ? n.appendTo.appendChild(e) : document.body.appendChild(e)
                                    }),
                                        e.$setData({
                                            status: "loading"
                                        })
                                }
                                e._captchaIns.open()
                            }
                        })
                    };
                    i.getToken({
                        timeout: 500
                    }).then(s)["catch"](s)
                },
                closeModal: function() {
                    this._captchaIns && this._captchaIns.closeModal()
                }
            }
        }
    }
    , function(e, t, n) {
        var i = n(6)
            , r = n(2)
            , o = n(1)
            , a = n(7)
            , l = a.eypt
            , s = a.xor_encode
            , u = n(3)
            , f = u.CAPTCHA_CLASS
            , c = u.SAMPLE_NUM
            , j = u.MAX_VERIFICATION
            , d = n(4)
            , h = d.SWITCH_LOAD_STATUS
            , p = d.INVOKE_HOOK
            , y = n(5)
            , v = y.REQUEST_IMG_ERROR
            , g = n(8)
            , b = n(9)
            , m = 4
            , _ = 2
            , T = {
            status: "dragend",
            beginTime: 0,
            clientX: 0,
            clientY: 0,
            startX: 0,
            startY: 0,
            startLeft: 0,
            startTop: 0,
            el: null
        };
        e.exports = i._extend({
            "abstract": !0,
            props: ["loadInfo", "mode"],
            data: function() {
                var e = this.$store.state.langPkg;
                return {
                    langPkg: e
                }
            },
            mounted: function() {
                this.initData(),
                    this._removeEvents = this.initEvents(),
                    this.initCustomStyles()
            },
            beforeDestroy: function() {
                this._removeEvents(),
                    this.$el = null,
                    this.$bgImgWrap = null,
                    this.$picViews = [],
                    this.drag = null,
                    this.traceData = null,
                    this.exchangePos = null
            },
            render: function(e) {
                var t = e.loadInfo;
                t && this.changeLoadStatus(t)
            },
            methods: {
                initData: function() {
                    this.clickCounts = 0,
                        this.traceData = [],
                        this.exchangePos = [],
                        this.drag = Object.assign({}, T)
                },
                initEvents: function() {
                    var e = this;
                    this.$bgImgWrap = r.find("." + f.BGIMG, this.$el),
                        this.$picViews = [];
                    for (var t = r.findAll(".yidun_inference", this.$el), n = function(t) {
                        t.target.className.indexOf("yidun_inference") !== -1 && e.onMouseDown(t)
                    }, i = this.onDragEnd.bind(this), o = this.onMouseMove.bind(this), a = 0, l = t.length; a < l; a++)
                        this.$picViews.push({
                            view: t[a],
                            img: r.find(".yidun_inference__img", t[a])
                        });
                    var s = r.supportPointer ? "pointer" : "mouse";
                    return r.on(this.$bgImgWrap, s + "down", n),
                        r.on(document, s + "up", i),
                        r.on(document, s + "move", o),
                        function() {
                            r.off(e.$bgImgWrap, s + "down", n),
                                r.off(document, s + "up", i),
                                r.off(document, s + "move", o)
                        }
                },
                initCustomStyles: function() {
                    var e = this.$store.state.config.customStyles.imagePanel;
                    this.$picViews[0].view.style.borderTopLeftRadius = e.borderRadius,
                        this.$picViews[m - 1].view.style.borderTopRightRadius = e.borderRadius,
                        this.$picViews[m].view.style.borderBottomLeftRadius = e.borderRadius,
                        this.$picViews[m * _ - 1].view.style.borderBottomRightRadius = e.borderRadius
                },
                reset: function() {
                    var e = this.$store.state.countsOfVerifyError > j;
                    if (!e) {
                        var t = this.$picViews;
                        this.initData(),
                            r.delClass(this.$bgImgWrap, "yidun_bgimg--dragging");
                        for (var n = 0, i = t.length; n < i; n++) {
                            this.cleanInferenceCls(n);
                            var o = t[n].img;
                            o.style.top = "",
                                o.style.left = ""
                        }
                    }
                },
                cleanInferenceCls: function(e) {
                    this.$picViews[e] && (this.$picViews[e].view.className = "yidun_inference yidun_inference--" + e)
                },
                floatStatusChange: function() {
                    this.$parent.shouldHandleFloatChange(this.loadInfo) && this.changeTipElText()
                },
                changeTipElText: function() {
                    var e = r.find(".yidun_tips__text", this.$el)
                        , t = this.$store.state.config;
                    "float" !== (this.mode || t.mode) || this.$parent.panelVisible ? (r.text(e, this.langPkg.inferenceTip),
                        r.delClass(this.$el, "yidun--button")) : (r.text(e, this.langPkg.clickButton),
                        r.addClass(this.$el, "yidun--button"))
                },
                changeLoadStatus: function(e) {
                    var t = this
                        , n = e.status
                        , i = e.data;
                    if ("loading" === n && i) {
                        var o = r.find(".yidun_bg-img", this.$el)
                            , a = r.find(".yidun_tips__text", this.$el)
                            , l = this.$store
                            , s = l.commit
                            , u = l.state
                            , f = u.langPkg
                            , c = u.config;
                        g.image({
                            url: i.bg,
                            timeout: c.timeout,
                            onTryError: b(c, {
                                token: i.token
                            })
                        }).then(function(e) {
                            if (t._isMounted) {
                                o.src = e.src;
                                for (var n = 0, l = t.$picViews.length; n < l; n++)
                                    t.$picViews[n].img.src = e.src;
                                r.text(a, f.inferenceTip),
                                    s(h, {
                                        status: "done",
                                        data: i
                                    })
                            }
                        })["catch"](function(e) {
                            if (t._isMounted) {
                                var n = Object.assign({}, e.data, {
                                    token: i.token
                                });
                                s(h, {
                                    status: "fail"
                                }),
                                    s(p, {
                                        name: "onError",
                                        args: [new y(v,e.message,n)]
                                    })
                            }
                        })
                    } else
                        "done" === n && this.changeTipElText()
                },
                onMouseDown: function(e) {
                    if (e.preventDefault(),
                    this.handleDown() && "dragend" === this.drag.status) {
                        var t = e.clientX
                            , n = e.clientY;
                        Object.assign(this.drag, {
                            beginTime: o.now(),
                            clientX: t,
                            clientY: n,
                            startX: t,
                            startY: n
                        })
                    }
                    return !1
                },
                onDragEnd: function(e) {
                    if ("dragend" === this.drag.status)
                        return void Object.assign(this.drag, {
                            beginTime: 0
                        });
                    var t = this.drag.el;
                    Object.assign(this.drag, T);
                    var n = this.exchangePos[0]
                        , i = this.$picViews[n].view;
                    t.style.display = "none",
                        this.cleanInferenceCls(n);
                    var a = i.cloneNode(!0);
                    if (r.replace(a, i),
                        this.$picViews[n].view = a,
                        this.$picViews[n].img = r.find(".yidun_inference__img", a),
                        r.delClass(this.$bgImgWrap, "yidun_bgimg--dragging"),
                    this.exchangePos[1] || 0 === this.exchangePos[1]) {
                        var u = this.$picViews[this.exchangePos[1]].img
                            , f = this.getImgPos(n)
                            , j = f.top
                            , d = f.left;
                        u.style.top = j,
                            u.style.left = d,
                            this.onVerifyCaptcha({
                                data: JSON.stringify({
                                    d: "",
                                    m: l(o.sample(this.traceData, c).join(":")),
                                    p: l(s(this.$store.state.token, this.exchangePos.join(","))),
                                    ext: l(s(this.$store.state.token, this.clickCounts + "," + this.traceData.length))
                                })
                            })
                    } else {
                        var h = this.$picViews[n].img;
                        h.style.top = "",
                            h.style.left = ""
                    }
                },
                onMouseMove: function(e) {
                    var t = e.clientX
                        , n = e.clientY
                        , i = this.drag
                        , r = i.status
                        , a = i.beginTime
                        , l = i.startX
                        , u = i.startY
                        , f = t - l
                        , c = n - u;
                    if ("dragend" === r && a && (this.drag.status = "dragstart"),
                    "dragend" !== this.drag.status) {
                        Object.assign(this.drag, {
                            clientX: t,
                            clientY: n
                        });
                        var j = this.$store.state.token
                            , d = s(j, [Math.round(f), Math.round(c), o.now() - this.drag.beginTime] + "");
                        this.traceData.push(d),
                        "dragstart" === this.drag.status && this.startDrag(e),
                        "dragging" === this.drag.status && this.dragging(e)
                    }
                },
                handleDown: function() {
                    this.clickCounts++;
                    var e = this.$store.state
                        , t = e.load
                        , n = e.verifyStatus;
                    return "done" === t.status && !n && "dragend" === this.drag.status
                },
                startDrag: function(e) {
                    var t = e.target;
                    r.addClass(this.$bgImgWrap, "yidun_bgimg--dragging");
                    var n = t.parentNode
                        , i = n.cloneNode(!0);
                    i.draggable = !1,
                        i.removeAttribute("style");
                    for (var o = r.findAll(".yidun_inference--drag", this.$bgImgWrap), a = 0, l = o.length; a < l; a++)
                        r.remove(o[a]);
                    r.addClass(i, "yidun_inference--drag"),
                        this.$bgImgWrap.appendChild(i),
                        r.addClass(n, "yidun_inference--origin"),
                        Object.assign(this.drag, {
                            status: "dragging",
                            el: i,
                            startLeft: i.offsetLeft,
                            startTop: i.offsetTop
                        });
                    for (var s = 0, u = this.$picViews.length; s < u; s++)
                        if (this.$picViews[s].view === n) {
                            this.exchangePos[0] = s;
                            break
                        }
                    this.$parent.getAnticheatToken({
                        timeout: 750
                    })
                },
                dragging: function() {
                    var e = this.drag
                        , t = e.clientX
                        , n = e.clientY
                        , i = e.startX
                        , r = e.startY
                        , o = e.el
                        , a = this.computeOffset(t - i, n - r)
                        , l = a.x
                        , s = a.y;
                    o.style.left = l + "px",
                        o.style.top = s + "px",
                        this.readyExchange(l, s)
                },
                readyExchange: function(e, t) {
                    var n = this.getDragCenterIndex(e, t)
                        , i = this.exchangePos[0]
                        , o = this.$picViews[i].view;
                    if (n !== this.exchangePos[1]) {
                        for (var a = 0, l = this.$picViews.length; a < l; a++)
                            r.delClass(this.$picViews[a].view, "yidun_inference--target");
                        if (n === -1 || i === n)
                            return r.delClass(o, "yidun_inference--swap"),
                                void (this.exchangePos[1] = void 0);
                        this.exchangePos[1] = n,
                            r.addClass(this.$picViews[n].view, "yidun_inference--target"),
                            r.addClass(o, "yidun_inference--swap");
                        var s = this.$picViews[i].img
                            , u = this.getImgPos(n)
                            , f = u.top
                            , c = u.left;
                        s.style.top = f,
                            s.style.left = c
                    }
                },
                computeOffset: function(e, t) {
                    var n = this.drag
                        , i = n.startLeft
                        , r = n.startTop
                        , o = n.el
                        , a = this.$bgImgWrap.offsetWidth - o.offsetWidth
                        , l = this.$bgImgWrap.offsetHeight - o.offsetHeight
                        , s = e + i
                        , u = t + r;
                    return s < 0 ? s = 0 : s > a && (s = a),
                        u < 0 ? u = 0 : u > l && (u = l),
                        {
                            x: s,
                            y: u
                        }
                },
                getDragCenterIndex: function(e, t) {
                    var n = r.getRect(this.drag.el)
                        , i = n.width
                        , o = n.height
                        , a = e + i / 2
                        , l = t + o / 2
                        , s = parseInt(a / i, 10)
                        , u = parseInt(l / o, 10);
                    return a % i === 0 || l % o === 0 ? -1 : s + u * m
                },
                getImgPos: function(e) {
                    var t = e - m;
                    return {
                        top: (t < 0 ? 0 : -100) + "%",
                        left: (t < 0 ? e * -100 : t * -100) + "%"
                    }
                }
            }
        })
    }
    , function(e, t, n) {
        var i = function() {
            function e(e, t) {
                var n = []
                    , i = !0
                    , r = !1
                    , o = void 0;
                try {
                    for (var a, l = e[Symbol.iterator](); !(i = (a = l.next()).done) && (n.push(a.value),
                    !t || n.length !== t); i = !0)
                        ;
                } catch (s) {
                    r = !0,
                        o = s
                } finally {
                    try {
                        !i && l["return"] && l["return"]()
                    } finally {
                        if (r)
                            throw o
                    }
                }
                return n
            }
            return function(t, n) {
                if (Array.isArray(t))
                    return t;
                if (Symbol.iterator in Object(t))
                    return e(t, n);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }()
            , r = n(6)
            , o = n(2)
            , a = n(1)
            , l = n(3)
            , s = l.CAPTCHA_CLASS
            , u = l.SAMPLE_NUM
            , f = l.MAX_VERIFICATION
            , c = n(4)
            , j = c.SWITCH_LOAD_STATUS
            , d = c.INVOKE_HOOK
            , h = n(7)
            , p = h.eypt
            , y = h.xor_encode
            , v = n(5)
            , g = v.REQUEST_IMG_ERROR
            , b = n(8)
            , m = n(9)
            , _ = document
            , T = {
            status: "dragend",
            beginTime: 0,
            clientX: 0,
            startX: 0,
            clientY: 0,
            startY: 0,
            left: 0,
            startLeft: 0,
            dragX: 0
        };
        e.exports = r._extend({
            "abstract": !0,
            props: ["loadInfo"],
            mounted: function() {
                this.initData(),
                    this._removeEvents = this.initEvents()
            },
            beforeDestroy: function() {
                this._removeEvents(),
                    this.sliderTransition = null,
                    this.$slider.style.transition = "",
                    this.$el = null,
                    this.$slideIndicator = null,
                    this.$slider = null,
                    this.$jigsaw = null,
                    this.drag = null
            },
            render: function(e) {
                var t = e.loadInfo;
                t && this.changeLoadStatus(t)
            },
            methods: {
                initData: function() {
                    this.drag = Object.assign({}, T),
                        this.traceData = [],
                        this.mouseDownCounts = 0
                },
                changeSlideIcon: function(e) {
                    !this.$store.state.config.customStyles.icon.slider && this.$slideIcon && (e ? (this.$slideIcon.src = e,
                        this.$slideIcon.style.display = "block") : this.$slideIcon.style.display = "none")
                },
                initEvents: function() {
                    var e = this;
                    this.$slideIndicator = o.find("." + s.SLIDE_INDICATOR, this.$el),
                        this.$jigsaw = o.find("." + s.JIGSAW, this.$el),
                        this.$control = o.find("." + s.CONTROL, this.$el),
                        this.$slider = o.find("." + s.SLIDER, this.$el),
                        this.$slideIcon = o.find(".yidun_slider__icon--img", this.$el);
                    var t = this.$parent.$data.customStyles.controlBar
                        , n = void 0 === t ? {} : t;
                    this.controlBar = n;
                    var i = this.onMouseDown.bind(this)
                        , r = this.onMouseDown.bind(this)
                        , a = this.onMouseMove.bind(this)
                        , l = this.onMouseUp.bind(this)
                        , u = o.supportPointer ? "pointer" : "mouse";
                    return o.on(this.$slider, u + "down", i),
                        o.on(this.$jigsaw, u + "down", r),
                        o.on(_, u + "move", a),
                        o.on(_, u + "up", l),
                        this.sliderTransition = o.transition(this.$slider, {
                            beforeLeave: function(e) {
                                e.style.transition = "left .3s ease-out"
                            },
                            afterLeave: function(e) {
                                e.style.transition = ""
                            }
                        }),
                    o.supportPointer && (document.documentElement.style.touchAction = "none"),
                        function() {
                            o.off(e.$slider, u + "down", i),
                                o.off(e.$jigsaw, u + "down", r),
                                o.off(_, u + "move", a),
                                o.off(_, u + "up", l),
                                e.sliderTransition.dispose(),
                            o.supportPointer && (document.documentElement.style.touchAction = "auto")
                        }
                },
                reset: function() {
                    var e = this.$store.state.countsOfVerifyError > f;
                    e || (this.initData(),
                        o.delClass(this.$control, "yidun_control--moving"),
                    parseInt(this.$slider.style.left) && this.sliderTransition.leave(),
                        this.$slideIndicator.style.width = 0,
                        this.$slider.style.left = 0,
                        this.$jigsaw.style.left = 0)
                },
                changeLoadStatus: function(e) {
                    var t = this
                        , n = e.data;
                    if (this.changeSlideIcon(this.controlBar.slideIcon),
                    "loading" === e.status && n) {
                        var r = this.$store.state
                            , a = r.langPkg
                            , l = r.config
                            , u = o.find(".yidun_tips__text", this.$el)
                            , f = o.find(".yidun_bg-img", this.$el)
                            , c = o.find("." + s.JIGSAW, this.$el)
                            , h = this.$store.commit
                            , p = m(l, {
                            token: n.token
                        });
                        b.all([b.image({
                            url: n.bg,
                            timeout: l.timeout,
                            onTryError: p
                        }), b.image({
                            url: n.front,
                            timeout: l.timeout,
                            onTryError: p
                        })]).then(function(e) {
                            if (t._isMounted) {
                                var r = i(e, 2)
                                    , l = r[0]
                                    , s = r[1];
                                f.src = l.src,
                                    c.src = s.src,
                                    o.text(u, a.slideTip),
                                    h(j, {
                                        status: "done",
                                        data: n
                                    })
                            }
                        })["catch"](function(e) {
                            if (t._isMounted) {
                                var i = Object.assign({}, e.data, {
                                    token: n.token
                                });
                                h(j, {
                                    status: "fail"
                                }),
                                    h(d, {
                                        name: "onError",
                                        args: [new v(g,e.message,i)]
                                    })
                            }
                        })
                    }
                },
                onMouseDown: function(e) {
                    e.preventDefault(),
                        this.mouseDownCounts++,
                        this.width = this.$el.offsetWidth;
                    var t = this.$store.state
                        , n = t.load
                        , i = t.verifyStatus;
                    if ("done" === n.status && !i) {
                        var r = e.clientX
                            , o = e.clientY
                            , l = this.drag;
                        "dragend" === l.status && Object.assign(l, {
                            beginTime: a.now(),
                            clientX: r,
                            startX: r,
                            clientY: o,
                            startY: o,
                            dragX: 0
                        })
                    }
                },
                onMouseMove: function(e) {
                    var t = e.clientX
                        , n = e.clientY
                        , i = this.drag
                        , r = i.status
                        , l = i.beginTime
                        , s = i.startX;
                    if (i.status = l && t - s > 3 && "dragend" === r ? "dragstart" : r,
                    "dragend" !== i.status) {
                        !(e.type.indexOf("touch") !== -1 && o.supportPassive) && e.preventDefault(),
                            Object.assign(i, {
                                clientX: t,
                                clientY: n,
                                dragX: t - i.startX
                            });
                        var u = this.$store.state.token,
                            _token = u
                            , f = y(u, [Math.round(i.dragX < 0 ? 0 : i.dragX), Math.round(i.clientY - i.startY), a.now() - i.beginTime] + "");
                        _guiji.push([Math.round(i.dragX < 0 ? 0 : i.dragX), Math.round(i.clientY - i.startY), a.now() - i.beginTime]);
                        console.log([Math.round(i.dragX < 0 ? 0 : i.dragX), Math.round(i.clientY - i.startY), a.now() - i.beginTime]);
                        this.traceData.push(f),
                        "dragstart" === i.status && this.onMouseMoveStart(e),
                        "dragging" === i.status && this.onMouseMoving(e)
                    }
                },
                onMouseMoveStart: function(e) {
                    var t = o.getComputedStyle(this.$slider, "left")
                        , n = o.find(".yidun_tips__text", this.$el);
                    o.text(n, ""),
                        Object.assign(this.drag, {
                            status: "dragging",
                            startLeft: parseInt(t.slice(0, -2), 10)
                        }),
                        this.$parent.getAnticheatToken({
                            timeout: 750
                        })
                },
                onMouseMoving: function() {
                    var e = this.$slider.offsetWidth
                        , t = this.$jigsaw.offsetWidth
                        , n = this.drag.left = this.restrict(this.$slider);
                    this.$slider.style.left = n + "px",
                        this.$jigsaw.style.left = this.restrict(this.$jigsaw, e - t) + "px",
                        o.addClass(this.$control, "yidun_control--moving"),
                        this.$slideIndicator.style.width = n + e + "px",
                        this.changeSlideIcon(this.controlBar.slideIconMoving)
                },
                onMouseUp: function(e) {
                    var t = this.drag;
                    if ("dragend" === t.status)
                        return void Object.assign(t, {
                            beginTime: 0
                        });
                    Object.assign(t, T);
                    var n = a.sample(this.traceData, u)
                        , i = this.$store.state.token
                        , r = p(y(i, parseInt(this.$jigsaw.style.left, 10) / this.width * 100 + ""));
                    console.log("实际滑块需要距离：",this.$jigsaw.style.left);

                    _end = this.$jigsaw.style.left;
                    _guiji = [];
                    this.onVerifyCaptcha({
                        data: JSON.stringify({
                            d: p(n.join(":")),
                            m: "",
                            p: r,
                            ext: p(y(i, this.mouseDownCounts + "," + this.traceData.length))
                        })
                    })
                },
                restrict: function(e, t) {
                    if (e) {
                        var n, i, r = this.drag, o = r.startLeft, a = r.dragX, l = this.width, s = e.offsetWidth, u = this.$slider.offsetWidth, f = l - s, c = o + a, j = t < 0 ? -t : t / 2;
                        return e === this.$jigsaw && (a <= j ? (n = a,
                            i = t < 0 ? -n / 2 : n,
                            c += i) : l - a - u <= j ? (n = a - (l - u - j),
                            i = t < 0 ? -n / 2 : n,
                            c += t / 2 + i) : c += t / 2),
                        c <= 0 && (c = 0),
                        c >= f && (c = f),
                            c
                    }
                }
            }
        })
    }
    , function(e, t, n) {
        function i(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
                e
        }
        var r, o = n(6), a = n(2), l = n(1), s = n(7), u = s.eypt, f = s.xor_encode, c = n(3), j = c.CAPTCHA_TYPE, d = c.CAPTCHA_CLASS, h = c.SAMPLE_NUM, p = c.MAX_VERIFICATION, y = c.RTL_LANGS, v = n(4), g = v.SWITCH_LOAD_STATUS, b = v.INVOKE_HOOK, m = n(5), _ = m.REQUEST_IMG_ERROR, T = n(8), w = n(9);
        e.exports = o._extend({
            "abstract": !0,
            props: ["loadInfo", "mode", "type"],
            data: function() {
                var e = this.$store.state.langPkg;
                return {
                    langPkg: e
                }
            },
            on: (r = {},
                i(r, "." + d.BGIMG + " click", function(e) {
                    this.onClick(e)
                }),
                i(r, "." + d.BGIMG + " mousemove", function(e) {
                    this.trackMoving(e)
                }),
                r),
            mounted: function() {
                this.initData(),
                    this.$bgImg = a.find("." + d.BGIMG, this.$el)
            },
            beforeDestroy: function() {
                this.$bgImg = null
            },
            render: function(e) {
                var t = e.loadInfo;
                if (t && "done" === t.status) {
                    var n = t.data && t.data.front;
                    Array.isArray(n) && (n = n[0],
                        t.data.front = n)
                }
                t && this.changeLoadStatus(t)
            },
            methods: {
                initData: function() {
                    this.pointsStack = [],
                        this.MAX_POINTS = 0,
                        this.traceData = [],
                        this.beginTime = 0,
                        this.clickCounts = 0
                },
                reset: function() {
                    var e = this.$store.state.countsOfVerifyError > p;
                    e || (this.cleanPoints(),
                        this.initData())
                },
                floatStatusChange: function() {
                    if (this.$parent.shouldHandleFloatChange(this.loadInfo)) {
                        var e = this.loadInfo.data.front || "";
                        this.changeTipElText({
                            message: e
                        })
                    }
                },
                changeTipElText: function(e) {
                    var t = e.message
                        , n = void 0 === t ? "" : t
                        , i = this.$store.state.config
                        , r = this.langPkg
                        , o = this.$parent.panelVisible
                        , s = "float" === (this.mode || i.mode)
                        , u = a.find(".yidun_tips__text", this.$el)
                        , f = a.find(".yidun_tips__answer", this.$el)
                        , c = a.find(".yidun_tips__point", this.$el);
                    if (s && !o)
                        a.text(u, r.clickButton),
                            a.addClass(this.$el, "yidun--button"),
                            a.addClass(f, "hide");
                    else {
                        var d = y.indexOf(i.lang) > -1;
                        this.type === j.ICON_POINT ? d && a.addClass(f, "yidun_answer--r2l") : (d && (n = l.reverse(n)),
                            a.text(c, n.replace(/./g, ' "$&"'))),
                            a.text(u, r.clickInTurn),
                            a.delClass(f, "hide"),
                            a.delClass(this.$el, "yidun--button")
                    }
                },
                changeLoadStatus: function(e) {
                    var t = this
                        , n = e.status
                        , i = e.data;
                    switch (n) {
                        case "loading":
                            if (i) {
                                var r = a.find(".yidun_bg-img", this.$el)
                                    , o = a.find(".yidun_tips__img", this.$el)
                                    , l = this.$store
                                    , s = l.commit
                                    , u = l.state
                                    , f = T.image({
                                    url: i.bg,
                                    timeout: u.config.timeout,
                                    onTryError: w(u.config, {
                                        token: i.token
                                    })
                                });
                                f.then(function(e) {
                                    t._isMounted && (r.src = e.src,
                                    t.type === j.ICON_POINT && (o.src = e.src),
                                        s(g, {
                                            status: "done",
                                            data: i
                                        }))
                                })["catch"](function(e) {
                                    if (t._isMounted) {
                                        var n = Object.assign({}, e.data, {
                                            token: i.token
                                        });
                                        s(g, {
                                            status: "fail"
                                        }),
                                            s(b, {
                                                name: "onError",
                                                args: [new m(_,e.message,n)]
                                            })
                                    }
                                })
                            }
                            break;
                        case "done":
                            var c = i.front || "";
                            this.MAX_POINTS = this.type === j.ICON_POINT ? 3 : c.length,
                                this.changeTipElText({
                                    message: c
                                })
                    }
                },
                onClick: function(e) {
                    var t = this
                        , n = this.$store.state.countsOfVerifyError > p;
                    if (!n) {
                        this.clickCounts++;
                        var i = this.$bgImg.getBoundingClientRect()
                            , r = i.left
                            , o = i.top;
                        this.pointsStack.length || (this.beginTime = l.now());
                        var a = this.pointsStack.slice(-1)[0];
                        return a && e.target === a.el && !this.$store.state.verifyStatus ? void l.raf(function() {
                            return t.$bgImg.removeChild(t.pointsStack.pop().el)
                        }) : void this.addPoint({
                            left: e.clientX - r,
                            top: e.clientY - o
                        })
                    }
                },
                trackMoving: function(e) {
                    if (this.beginTime) {
                        var t = this.$bgImg.getBoundingClientRect()
                            , n = t.left
                            , i = t.top
                            , r = f(this.$store.state.token, [Math.round(e.clientX - n), Math.round(e.clientY - i), l.now() - this.beginTime] + "");
                        this.traceData.push(r)
                    }
                },
                addPoint: function(e) {
                    var t = e.left
                        , n = e.top;
                    this.pointsStack.length || this.$parent.getAnticheatToken({
                        timeout: 1e3
                    });
                    var i = this.pointsStack.length + 1;
                    if (!(i > this.MAX_POINTS)) {
                        var r = document.createElement("div");
                        r.className = "yidun_icon-point yidun_point-" + i,
                            a.css(r, "left: " + (t - 10) + "px; top: " + (n - 25) + "px;"),
                            this.$bgImg.appendChild(r),
                            this.pointsStack.push({
                                el: r,
                                coord: f(this.$store.state.token, [Math.round(t), Math.round(n), l.now() - this.beginTime] + "")
                            }),
                            this.shouldVerifyCaptcha()
                    }
                },
                shouldVerifyCaptcha: function() {
                    var e = this.pointsStack;
                    if (e.length === this.MAX_POINTS) {
                        var t = e.map(function(e) {
                            return e.coord
                        })
                            , n = this.traceData;
                        this.onVerifyCaptcha({
                            data: JSON.stringify({
                                d: "",
                                m: u(l.sample(n, h).join(":")),
                                p: u(t.join(":")),
                                ext: u(f(this.$store.state.token, this.clickCounts + "," + n.length))
                            })
                        })
                    }
                },
                cleanPoints: function() {
                    for (var e; e = this.pointsStack.pop(); )
                        this.$bgImg.removeChild(e.el)
                }
            }
        })
    }
    , function(e, t, n) {
        var i = n(6)
            , r = n(2)
            , o = n(4)
            , a = o.SWITCH_LOAD_STATUS
            , l = o.UPDATE_VERIFY_STATUS
            , s = o.INVOKE_HOOK
            , u = n(5)
            , f = u.REQUEST_IMG_ERROR
            , c = n(8)
            , j = n(9);
        e.exports = i._extend({
            "abstract": !0,
            props: ["loadInfo"],
            data: function() {
                var e = this.$store.state
                    , t = e.langPkg
                    , n = e.config.lang;
                return {
                    langPkg: t,
                    lang: n
                }
            },
            mounted: function() {
                var e = this;
                this.TIMEOUT_SECONDS = 300,
                    this._unsubscribe = this.$store.subscribe(function(t, n) {
                        var i = t.type
                            , r = n.verifyStatus;
                        switch (i) {
                            case l:
                                switch (r) {
                                    case "success":
                                    case "error":
                                        e.clearTimers()
                                }
                        }
                    })
            },
            beforeDestroy: function() {
                this._unsubscribe(),
                    this.clearTimers()
            },
            render: function(e) {
                var t = e.loadInfo;
                t && this.changeLoadStatus(t)
            },
            methods: {
                changeLoadStatus: function(e) {
                    var t = e.status
                        , n = e.data;
                    switch (t) {
                        case "loading":
                            if (n) {
                                var i = r.find(".yidun_bg-img", this.$el)
                                    , o = this.$store
                                    , l = o.commit
                                    , d = o.state
                                    , h = c.image({
                                    url: n.bg,
                                    timeout: d.config.timeout,
                                    onTryError: j(d.config, {
                                        token: n.token
                                    })
                                });
                                h.then(function(e) {
                                    i.src = e.src,
                                        l(a, {
                                            status: "done",
                                            data: n
                                        })
                                })["catch"](function(e) {
                                    var t = Object.assign({}, e.data, {
                                        token: n.token
                                    });
                                    l(a, {
                                        status: "fail"
                                    }),
                                        l(s, {
                                            name: "onError",
                                            args: [new u(f,e.message,t)]
                                        })
                                })
                            }
                            break;
                        case "done":
                            var p = r.find(".yidun_tips__text", this.$el)
                                , y = this.langPkg;
                            p.innerHTML = y.waitForSMS + '\n          <span class="yidun_sms-counter"></span>',
                                this.countDown(),
                                this.pollingToVerify()
                    }
                },
                pollingToVerify: function() {
                    var e = this
                        , t = this.TIMEOUT_SECONDS
                        , n = 5
                        , i = 0
                        , r = function o() {
                        return n * i >= t ? void e.$store.commit(l, {
                            verifyStatus: "error",
                            error: new Error("SMS is outdated")
                        }) : (i++,
                            e.onVerifyCaptcha({
                                data: ""
                            }),
                            void (e.pollingTimer = setTimeout(o, 1e3 * n)))
                    };
                    r()
                },
                countDown: function() {
                    var e = this
                        , t = this.TIMEOUT_SECONDS
                        , n = r.find(".yidun_sms-counter", this.$el)
                        , i = function o() {
                        r.text(n, t-- + "s"),
                        0 !== t && (e.countTimer = setTimeout(o, 1e3))
                    };
                    i()
                },
                clearTimers: function() {
                    this.countTimer && (clearTimeout(this.countTimer),
                        this.countTimer = null),
                    this.pollingTimer && (clearTimeout(this.pollingTimer),
                        this.pollingTimer = null)
                },
                reset: function() {
                    this.clearTimers()
                }
            }
        })
    }
    , function(e, t, n) {
        function i(e) {
            var t = this;
            e = h(e),
                j(e.__theme__, {
                    protocol: e.protocol,
                    staticServer: Array.isArray(e.staticServer) ? e.staticServer[0] : e.staticServer,
                    theme: e.theme
                });
            var n = window.gdxidpyhxde
                , i = Object.assign({}, c.state, {
                config: e,
                fingerprint: n,
                langPkg: e.customTexts,
                $fetch: d({
                    timeout: e.timeout,
                    captchaConfig: e
                }),
                captchaAnticheat: new k(e)
            })
                , o = new f(Object.assign({}, c, {
                state: i
            }))
                , E = e.__serverConfig__.smart
                , O = null
                , X = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                if (e && e.nodeType) {
                    var n = p.find(".yidun_input", e);
                    n ? n.value = t : (n = document.createElement("input"),
                        n.type = "hidden",
                        n.name = "NECaptchaValidate",
                        n.value = t,
                        n.className = "yidun_input",
                        e.appendChild(n))
                }
            }
                , $ = {
                onVerify: function(t, n) {
                    if (t) {
                        var i = t.data;
                        if (i && i.counts > C) {
                            var r = new m(_,"verify failed more then " + C + " times--" + t.message,Object.assign({
                                token: i.token
                            }, t.data));
                            return void w(r, e)
                        }
                        return void (t.code === T && w(t, e))
                    }
                    var o = n.validate;
                    X(e.element, o)
                },
                onError: function(t) {
                    t && "get" === t.data.api && t.code === T && w(t, e)
                }
            };
            this.version = o.state.version,
                this.captchaId = e.captchaId,
                this.captchaType = o.state.captchaType,
                this.mode = e.mode,
                this.theme = e.theme,
                this.protocol = e.protocol,
                this.lang = e.lang;
            var I = o.subscribe(function(n, i) {
                var r = n.type
                    , o = n.payload;
                switch (r) {
                    case a:
                        t.captchaType = i.captchaType;
                        break;
                    case u:
                    case s:
                        X(e.element, "");
                        break;
                    case l:
                        var f = o.name
                            , c = o.args;
                        window.setTimeout(function() {
                            var n = $[f];
                            !c && (c = [t]),
                            n && n.apply(null, c),
                            "function" == typeof e[f] && e[f].apply(null, c)
                        })
                }
            });
            r.mixin({
                beforeCreate: function() {
                    this.$store = this.$parent && this.$parent.$store || this.$options.store
                }
            }),
                this.popUp = function() {
                    S.assert(!1, "popUp function could only be invoked in not intellisense and mode is popup")
                }
                ,
                this.close = function() {
                    S.assert(!1, 'close function could only be invoked in only "enableClose" is true and intellisense on mobile devices or mode is bind/popup')
                }
                ,
                this.verify = function() {
                    S.assert(!1, "verify function could only be invoked in intellisense and mode is bind")
                }
            ;
            var x = function(n, i) {
                e.enableClose && (i && !p.isMobile || (t.close = function() {
                        var e = n || O;
                        e && e.closeModal()
                    }
                ))
            };
            switch (E) {
                case !0:
                    if ("bind" === this.mode) {
                        var A = r._extend(b);
                        O = new A({
                            "abstract": !0,
                            el: e.element,
                            store: o
                        }),
                            this.verify = function() {
                                return O.verifyCaptcha()
                            }
                            ,
                            x(O),
                            this._captchaIns = O
                    } else {
                        O = new r({
                            el: e.element,
                            store: o,
                            template: "<captcha-intellisense></captcha-intellisense>",
                            components: {
                                "captcha-intellisense": g
                            }
                        });
                        var N = O && O.$children && O.$children[0];
                        x(N, !0),
                            this._captchaIns = N
                    }
                    break;
                case !1:
                default:
                    "popup" === this.mode ? (this.popUp = function() {
                        if (!O) {
                            var t = r._extend(v);
                            O = new t({
                                store: o,
                                propsData: {
                                    onClose: function() {
                                        o.commit(l, {
                                            name: "onClose"
                                        })
                                    }
                                }
                            }).$mount(function(t) {
                                e.appendTo ? e.appendTo.appendChild(t) : document.body.appendChild(t)
                            })
                        }
                        O.open(),
                            this._captchaIns = O
                    }
                        ,
                        x()) : (O = new r({
                        el: e.element,
                        store: o,
                        template: "<captcha-core></captcha-core>",
                        components: {
                            "captcha-core": y
                        }
                    }),
                        this._captchaIns = O)
            }
            X(e.element),
                this.getCaptchaType = function() {
                    for (var e in R)
                        if (R[e] === o.state.type)
                            return e.toLowerCase();
                    return ""
                }
                ,
                this.refresh = function() {
                    o.commit(s)
                }
                ,
                this.destroy = function() {
                    I(),
                    O && (O.$destroy(),
                        O = null);
                    var t = e.element;
                    if (t) {
                        var n = p.find(".yidun_input", t);
                        n && t.removeChild(n)
                    }
                }
        }
        var r = n(6)
            , o = n(4)
            , a = o.SWITCH_TYPE
            , l = o.INVOKE_HOOK
            , s = o.EVENT_RESET
            , u = o.EVENT_RESET_CLASSIC
            , f = n(40)
            , c = n(53)
            , j = n(29)
            , d = n(20)
            , h = n(32)
            , p = n(2)
            , y = n(13)
            , v = n(14)
            , g = n(28)
            , b = n(22)
            , m = n(5)
            , _ = m.UNPASS_ERROR
            , T = m.BUSINESS_ERROR
            , w = n(15)
            , S = n(1)
            , E = n(3)
            , R = E.CAPTCHA_TYPE
            , C = E.MAX_VERIFICATION
            , k = n(30);
        e.exports = window.NECaptcha || i
    }
    , function(e, t, n) {
        var i = function() {
            function e(e, t) {
                var n = []
                    , i = !0
                    , r = !1
                    , o = void 0;
                try {
                    for (var a, l = e[Symbol.iterator](); !(i = (a = l.next()).done) && (n.push(a.value),
                    !t || n.length !== t); i = !0)
                        ;
                } catch (s) {
                    r = !0,
                        o = s
                } finally {
                    try {
                        !i && l["return"] && l["return"]()
                    } finally {
                        if (r)
                            throw o
                    }
                }
                return n
            }
            return function(t, n) {
                if (Array.isArray(t))
                    return t;
                if (Symbol.iterator in Object(t))
                    return e(t, n);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }()
            , r = n(12)
            , o = r.FETCH_INTELLISENSE_CAPTCHA
            , a = r.VERIFY_INTELLISENSE_CAPTCHA
            , l = r.RESET_STATE
            , s = n(4)
            , u = s.SWITCH_LOAD_STATUS
            , f = s.UPDATE_VERIFY_STATUS
            , c = s.INVOKE_HOOK
            , j = s.EVENT_RESET
            , d = n(3)
            , h = d.CAPTCHA_TYPE
            , p = d.SAMPLE_NUM
            , y = d.MAX_VERIFICATION
            , v = d.RTL_LANGS
            , g = n(1)
            , b = n(2)
            , m = n(17)
            , _ = n(7)
            , T = _.eypt
            , w = _.xor_encode
            , S = n(6)
            , E = n(13)
            , R = n(14)
            , C = n(11);
        e.exports = {
            el: ".yidun_intellisense",
            template: n(55),
            components: {
                "captcha-core": E
            },
            data: function() {
                var e = this.$store.state
                    , t = e.langPkg
                    , n = e.config;
                return {
                    langPkg: t,
                    theme: n.theme,
                    status: "normal",
                    classicVisible: !1,
                    icon: n.customStyles.icon
                }
            },
            on: {
                ".yidun_intelli-control click": function(e) {
                    if (!(["checking", "loading", "loadfail", "success"].indexOf(this.status) > -1))
                        return "normal" === this.status ? void this.verifyIntelliCaptcha(e) : void (!this.classicVisible && this.$setData({
                            classicVisible: !0
                        }))
                },
                ".yidun_intelli-control mousemove": function(e) {
                    this.trackMoving(e)
                }
            },
            watch: {
                status: function(e) {
                    "loaddone" === e && this.firstLoad && (this.$setData({
                        classicVisible: !0
                    }),
                        this.firstLoad = !1),
                    "success" === e && this.$setData({
                        classicVisible: !1
                    })
                }
            },
            mounted: function() {
                var e = this;
                this.beginTime = 0,
                    this.traceData = [],
                    this._baseClassNames = this.$el.className.trim(),
                    this._removeEvents = this.initEvents(),
                    this.fetchCaptcha().then(function() {
                        e.$store.commit(c, {
                            name: "onReady"
                        }),
                            e.$store.commit(c, {
                                name: "onDidRefresh"
                            })
                    })["finally"](function() {
                        e.$el.style.display = ""
                    }),
                v.indexOf(this.$store.state.config.lang) !== -1 && (this.$el.style.direction = "rtl")
            },
            beforeDestroy: function() {
                this._removeEvents(),
                    this.clear()
            },
            render: function(e) {
                var t = e.status
                    , n = e.classicVisible;
                void 0 !== t && this.updateUI(t),
                void 0 !== n && this.toggleClassicVisible(n)
            },
            methods: {
                initEvents: function() {
                    var e = this
                        , t = b.find(".yidun_intelli-control", this.$el)
                        , n = function(t) {
                        e.$el.contains(t.target) || e.classicVisible && e.$setData({
                            classicVisible: !1
                        })
                    }
                        , i = function(t) {
                        e.beginTime || (e.beginTime = g.now())
                    };
                    !b.isMobile && b.on(document, "mousedown", n),
                        b.on(t, "mouseover", i);
                    var r = this.$store.subscribe(function(t, n) {
                        var i = t.type
                            , r = (t.payload,
                            n.load)
                            , o = n.verifyStatus;
                        switch (i) {
                            case u:
                                r && ("loading" === r.status && e.$setData({
                                    status: "loading"
                                }),
                                "done" === r.status && e.$setData({
                                    status: "loaddone"
                                }),
                                "fail" === r.status && e.$setData({
                                    status: "loadfail"
                                }));
                                break;
                            case f:
                                "success" === o && e.$setData({
                                    status: "success"
                                }),
                                "error" === o && e.$setData({
                                    status: "error"
                                });
                                break;
                            case j:
                                e.reset()
                        }
                    });
                    return function() {
                        !b.isMobile && b.off(document, "mousedown", n),
                            b.off(t, "mouseover", i),
                            r()
                    }
                },
                createClassicCaptcha: function() {
                    var e = this;
                    if (b.isMobile) {
                        var t = this.$store.state.config
                            , n = S._extend(R);
                        this._captchaIns = new n({
                            store: this.$store,
                            propsData: {
                                autoOpen: !1,
                                intellisense: !0,
                                onClose: function(t) {
                                    e.$setData({
                                        classicVisible: !1
                                    }),
                                        e.$store.commit(c, {
                                            name: "onClose"
                                        })
                                }
                            }
                        }).$mount(function(e) {
                            t.appendTo ? t.appendTo.appendChild(e) : document.body.appendChild(e)
                        })
                    } else {
                        var i = S._extend(E);
                        this._captchaIns = new i({
                            el: b.find(".yidun_classic-wrapper", this.$el),
                            store: this.$store,
                            propsData: {
                                intellisense: !0
                            }
                        })
                    }
                },
                fetchCaptcha: function() {
                    var e = this;
                    return new C(function(t, n) {
                            e.$store.dispatch(o, {
                                width: e.getWidth()
                            }, function(i, r) {
                                if (e._isMounted)
                                    return i ? (e.$setData({
                                        status: "loadfail"
                                    }),
                                        void n(i)) : void t(r)
                            })
                        }
                    )
                },
                clear: function() {
                    var e = this;
                    this._captchaIns && (this.$setData({
                        classicVisible: !1
                    }),
                        this.$nextTick(function() {
                            e._captchaIns.$destroy(),
                                e._captchaIns = null
                        })),
                        this.beginTime = 0,
                        this.traceData = []
                },
                reset: function() {
                    var e = this;
                    this.$store.dispatch(l),
                        this.fetchCaptcha().then(function() {
                            e.clear(),
                                e.resetClassNames(),
                                e.$setData({
                                    status: "normal"
                                })
                        })
                },
                getWidth: function() {
                    return this.$el.offsetWidth
                },
                resetClassNames: function() {
                    for (var e = this._baseClassNames.split(/\s+/), t = arguments.length, n = Array(t), i = 0; i < t; i++)
                        n[i] = arguments[i];
                    this.$el.className = m(e, n)
                },
                loadClassicCaptcha: function() {
                    this.createClassicCaptcha(),
                        this.firstLoad = !0,
                        this.$setData({
                            status: "loading"
                        }),
                        this._captchaIns.refresh()
                },
                verifyIntelliCaptcha: function(e) {
                    var t = this;
                    this.$setData({
                        status: "checking"
                    });
                    var n = function(n) {
                        C.all([new C(function(i, r) {
                                var o = t.$store.state.token
                                    , l = t.$el.getBoundingClientRect()
                                    , s = l.left
                                    , u = l.top
                                    , f = g.now()
                                    , c = w(o, [Math.round(e.clientX - s), Math.round(e.clientY - u), f - (t.beginTime || f)] + "")
                                    , j = t.traceData.map(function(e) {
                                    return w(o, e)
                                });
                                t.$store.dispatch(a, {
                                    token: o,
                                    acToken: n,
                                    type: h.INTELLISENSE,
                                    width: t.getWidth(),
                                    data: JSON.stringify({
                                        d: "",
                                        m: T(g.sample(j, p).join(":")),
                                        p: T(c),
                                        ext: T(w(o, "1," + j.length))
                                    })
                                }, function(e, n) {
                                    if (t._isMounted)
                                        return e ? void r(e) : void i(n)
                                })
                            }
                        ), new C(function(e, t) {
                                window.setTimeout(e, 300)
                            }
                        )]).then(function(e) {
                            var n = i(e, 1);
                            n[0];
                            t.$setData({
                                status: "success"
                            })
                        })["catch"](function() {
                            return t.loadClassicCaptcha()
                        })
                    };
                    this.$store.state.captchaAnticheat.getToken({
                        timeout: 500
                    }).then(n)["catch"](n)
                },
                trackMoving: function(e) {
                    if (this.beginTime) {
                        var t = this.$el.getBoundingClientRect()
                            , n = t.left
                            , i = t.top
                            , r = [Math.round(e.clientX - n), Math.round(e.clientY - i), g.now() - this.beginTime] + "";
                        this.traceData.push(r)
                    }
                },
                toggleClassicVisible: function(e) {
                    var t = this._captchaIns;
                    if (b.isMobile && t)
                        e && t.open(),
                        !e && t.close();
                    else {
                        var n = b.find(".yidun_classic-wrapper", this.$el);
                        n.style.display = e ? "block" : "none"
                    }
                },
                updateUI: function(e) {
                    var t = this
                        , n = b.find(".yidun_intelli-text", this.$el)
                        , i = b.find(".yidun_tips__text", this.$el)
                        , r = this.langPkg.intellisense
                        , o = "yidun_intellisense"
                        , a = function(e) {
                        e.stopPropagation(),
                            t.$store.commit(j)
                    };
                    switch (b.off(i, "click", a),
                        e) {
                        case "normal":
                            b.text(n, r.normal);
                            break;
                        case "checking":
                            this.resetClassNames(o + "--checking"),
                                b.text(n, r.checking);
                            break;
                        case "loading":
                            this.resetClassNames(o + "--loading"),
                                b.text(n, r.loading);
                            break;
                        case "loaddone":
                            this.resetClassNames(),
                                b.text(n, r.loaddone);
                            break;
                        case "loadfail":
                            this.resetClassNames(o + "--loadfail"),
                                b.text(i, r.loadfail);
                            break;
                        case "success":
                            this.resetClassNames(o + "--success"),
                                b.text(i, this.langPkg.verifySuccess);
                            break;
                        case "error":
                            var l = o + "--error";
                            this.$store.state.countsOfVerifyError > y ? (l += " " + o + "--maxerror",
                                b.text(i, this.langPkg.verifyOutOfLimit),
                                b.on(i, "click", a)) : b.text(i, this.langPkg.verifyError),
                                this.resetClassNames(l)
                    }
                },
                closeModal: function() {
                    b.isMobile && this._captchaIns && this._captchaIns.closeModal()
                }
            }
        }
    }
    , function(e, t, n) {
        var i = n(37)
            , r = n(1)
            , o = n(16)
            , a = {};
        e.exports = function(e, t) {
            e = Object.assign([], e);
            var n = t.protocol
                , l = t.staticServer
                , s = t.theme
                , u = e[0].slice(0);
            if (!a[s]) {
                r.assert(e, "apply [" + s + " theme] failed");
                var f = o({
                    protocol: n,
                    host: l
                });
                u[1] = u[1].replace(/url\(['"]?\/?([^'"\s]+?)['"]?\)/g, 'url("' + f + '/$1")'),
                    e[0] = u,
                    i(e),
                    a[s] = !0,
                    delete e.__theme__
            }
        }
    }
    , function(e, t, n) {
        function i(e) {
            this._captchaConf = e
        }
        var r = n(11)
            , o = n(15)
            , a = n(5)
            , l = a.ANTICHEAT_TOKEN_ERROR
            , s = n(1);
        i.prototype.getAnticheat = function() {
            return this._captchaConf.__anticheat__ ? this._captchaConf.__anticheat__.instance : null
        }
            ,
            i.prototype.getToken = function(e) {
                var t = this
                    , n = e.timeout
                    , i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3
                    , u = this._captchaConf
                    , f = new r(function(e) {
                        var r = function f() {
                            var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
                                , c = null
                                , j = function(t) {
                                if (clearTimeout(c),
                                r < i)
                                    setTimeout(function() {
                                        return f(r + 1)
                                    }, 200);
                                else {
                                    var n = new a(l,t.message + ";initWatchman: " + s.typeOf(window.initWatchman) + ";Watchman: " + s.typeOf(window.Watchman));
                                    o(n, u),
                                        e(u.acConfig.token || "")
                                }
                            };
                            try {
                                c = setTimeout(function() {
                                    j(new Error("get anticheat token timeout"))
                                }, n + 50),
                                    t.getAnticheat().getToken(u.acConfig.bid, function(t) {
                                        clearTimeout(c),
                                            e(t)
                                    }, n)
                            } catch (d) {
                                j(d)
                            }
                        };
                        1 === u.acConfig.enable ? r(0) : e("")
                    }
                );
                return f
            }
            ,
            e.exports = i
    }
    , function(e, t) {
        e.exports = function() {
            return location.href.replace(/\?[\s\S]*/, "").substring(0, 128)
        }
    }
    , function(e, t, n) {
        function i(e) {
            return "number" === f.typeOf(e)
        }
        function r(e, t) {
            var n = /^((\d|[1-9]\d+)(\.\d+)?)(px|rem|%)?$/
                , r = e.width
                , o = r === v.width
                , a = "popup" === e.mode || "bind" === e.mode;
            f.assert(r === v.width || n.test(r) || i(r) && r >= 0, 'config: "width" should be a valid number or string like "**px", "**rem", "**%"(except popup/bind mode) or "auto". By default, it is "auto"'),
                f.assert(!(a && /%$/.test(r)), 'config: "width" can\'t be percentage like "**%", when mode is "popup".');
            var l = f.msie();
            f.assert(!(l < 9 && /rem$/.test(r)), 'config: "width", IE' + l + ' does not support "rem", please use a valid value');
            var s = r;
            return o && a ? s = u.isMobile ? "260px" : b + "px" : (i(r) || Number(r)) && (s = r + "px"),
                s
        }
        function o(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                , n = {
                imagePanel: {},
                controlBar: {},
                gap: "",
                icon: {}
            };
            return Object.assign(n.imagePanel, e.imagePanel, t.imagePanel),
                Object.assign(n.controlBar, e.controlBar, t.controlBar),
                n.gap = t.gap || e.gap,
                Object.assign(n.icon, e.icon, t.icon),
                n
        }
        function a(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                , n = function i(e, t) {
                for (var n = {}, r = Object.keys(e), o = 0, a = r.length; o < a; o++) {
                    var l = r[o];
                    void 0 === t[l] ? n[l] = e[l] : "string" === f.typeOf(e[l]) ? n[l] = t[l] + "" : n[l] = i(e[l], t[l])
                }
                return n
            };
            return n(e, t)
        }
        function l(e) {
            e = Object.assign({}, v, e);
            var t = e.__serverConfig__.smart
                , n = e.element
                , i = "popup" === e.mode;
            f.assert(e.captchaId, 'config: "captchaId" is required!'),
                f.assert(i || n, 'config: "element" is required when "mode" is not "popup"'),
            n.nodeType || "string" !== f.typeOf(n) || (n = u.find(n),
                f.assert(n, 'config: "element ' + e.element + '" not found'),
                e.element = n),
            !t && f.assert(~["float", "embed", "popup"].indexOf(e.mode), 'config: "current captcha is not intellisense , mode "' + e.mode + '" is invalid, "float", "embed" or "popup" is expected'),
                f.assert(/^https?$/.test(e.protocol), 'config: "protocol ' + e.protocol + '" is invalid. "http", "https" is expected. By default, it depends on user\'s website'),
                f.assert(c[e.lang], 'config: "lang ' + e.lang + '" is invalid, supported lang: ' + Object.keys(c).toString() + ". By default, it's " + v.lang),
                t && "bind" !== e.mode ? e.width = v.width : e.width = r(e, n);
            var l = e.appendTo;
            return !t && "popup" === e.mode || "bind" === e.mode || t && u.isMobile ? f.assert(!l || l.nodeType || "string" === f.typeOf(l), "config: appendTo should be a elment or string") : f.assert(!l, 'config: appendTo could only be valid when aptchaType is not intellisense and mode is "popup", or mode is bind, or captchaType is intellisense on the mobile side'),
            l && !l.nodeType && "string" === f.typeOf(l) && (l = u.find(l),
                f.assert(l, 'config: "element ' + e.appendTo + '" which "appendTo" defined not found'),
                e.appendTo = l),
            l && "static" === u.getComputedStyle(l, "position") && (l.style.position = "relative"),
                e.__serverConfig__.customStyles ? (f.assert(e.customStyles && y(e.customStyles), 'config: "customStyles" must be a plain Object'),
                    e.customStyles = o(v.customStyles, e.customStyles),
                    f.assert(e.customTexts && y(e.customTexts), 'config: "customTexts" must be a plain Object'),
                    e.customTexts = a(c[e.lang], e.customTexts)) : (e.customStyles = v.customStyles,
                    e.customTexts = c[e.lang]),
                f.assert("string" === f.typeOf(e.group) && e.group.length <= 32, 'config: "group" must be a string and it\'s length less than or equal 32'),
                f.assert("string" === f.typeOf(e.scene) && e.scene.length <= 32, 'config: "scene" must be a string and it\'s length less than or equal 32'),
                e.acConfig = e.acConfig || e.__serverConfig__.ac || {},
                e
        }
        var s = function() {
            function e(e, t) {
                var n = []
                    , i = !0
                    , r = !1
                    , o = void 0;
                try {
                    for (var a, l = e[Symbol.iterator](); !(i = (a = l.next()).done) && (n.push(a.value),
                    !t || n.length !== t); i = !0)
                        ;
                } catch (s) {
                    r = !0,
                        o = s
                } finally {
                    try {
                        !i && l["return"] && l["return"]()
                    } finally {
                        if (r)
                            throw o
                    }
                }
                return n
            }
            return function(t, n) {
                if (Array.isArray(t))
                    return t;
                if (Symbol.iterator in Object(t))
                    return e(t, n);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }()
            , u = n(2)
            , f = n(1)
            , c = n(41)
            , j = n(3)
            , d = j.WIDTH_LIMIT
            , h = j.RUN_ENV
            , p = n(10)
            , y = p.isPlainObject
            , v = {
            captchaId: "",
            element: null,
            appendTo: null,
            mode: u.isMobile ? "popup" : "float",
            protocol: window.location.protocol.replace(":", ""),
            lang: "zh-CN",
            width: "auto",
            ipv6: !1,
            enableClose: !1,
            customStyles: {
                imagePanel: {
                    align: "top",
                    borderRadius: "2px"
                },
                controlBar: {
                    height: "40px",
                    borderRadius: "2px"
                },
                gap: "15px",
                icon: {
                    intellisenseLogo: "",
                    slider: ""
                }
            },
            customTexts: {},
            feedbackEnable: !0,
            runEnv: h.WEB,
            group: "",
            scene: ""
        }
            , g = s(d, 1)
            , b = g[0];
        e.exports = l
    }
    , function(e, t) {
        e.exports = function(e) {
            var t = {
                "\\": "-",
                "/": "_",
                "+": "."
            };
            return e.replace(/[\\/+]/g, function(e) {
                return t[e]
            })
        }
    }
    , function(e, t, n) {
        function i() {
            c = d.length = 0,
                j = {},
                u = f = !1
        }
        function r() {
            f = !0;
            var e = void 0
                , t = void 0;
            for (d.sort(function(e, t) {
                return e.id - t.id
            }),
                     c = 0; c < d.length; c++)
                e = d[c],
                    t = e.instance,
                    j[e.id] = null,
                t._isMounted && t.render(e.data);
            var n = d.slice();
            i(),
                o(n)
        }
        function o(e) {
            for (var t = e.length; t--; ) {
                var n = e[t]
                    , i = n.instance;
                i._updater === n && i._isMounted && (n.data = {})
            }
        }
        function a(e) {
            var t = e.id;
            if (null == j[t]) {
                if (j[t] = !0,
                    f) {
                    for (var n = d.length - 1; n > c && d[n].id > e.id; )
                        n--;
                    d.splice(n + 1, 0, e)
                } else
                    d.push(e);
                u || (u = !0,
                    s(r))
            }
        }
        var l = n(10)
            , s = l.nextTick
            , u = !1
            , f = !1
            , c = 0
            , j = {}
            , d = [];
        e.exports = a
    }
    , function(e, t, n) {
        var i = n(10)
            , r = i.lifeCycleHooks;
        e.exports = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
                , n = {}
                , i = t.el || e.el
                , o = t.template || e.template
                , a = e["abstract"]
                , l = t.components || e.components
                , s = t.on || e.on
                , u = t.render || e.render
                , f = e.props
                , c = t.propsData
                , j = t.data || e.data
                , d = e.methods || t.methods
                , h = e.watch || t.watch;
            i && (n.el = i),
            o && (n.template = o),
            a && (n["abstract"] = !!a),
            l && (n.components = l),
            s && (n.on = Object.assign({}, e.on, t.on)),
            u && (n.render = u),
            f && (n.props = f),
            c && (n.propsData = c),
            j && (n.data = j),
            d && (n.methods = Object.assign({}, e.methods, t.methods)),
            h && (n.watch = Object.assign({}, e.watch, t.watch));
            var p = function(e, t) {
                var n = [];
                return e && (n = n.concat(e)),
                t && (n = n.concat(t)),
                    n
            };
            return r.map(function(i) {
                n[i] = p(e[i], t[i])
            }),
                n = Object.assign({}, t, n)
        }
    }
    , function(e, t, n) {
        function i() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
                , t = arguments[1];
            return this instanceof i ? (this._originalTemplate = e,
                void (this._composedStr = t ? r.template(e, t) : e)) : new i(e,t)
        }
        var r = n(1)
            , o = n(10)
            , a = o.getDocFragmentRegex;
        i.prototype.compose = function(e, t, n) {
            var i = a(e)
                , o = r.template(t, n);
            return this._composedStr = this._composedStr.replace(i, o),
                this
        }
            ,
            i.prototype.toString = function() {
                return this._composedStr
            }
            ,
            i.prototype.reset = function(e) {
                return this._composedStr = r.template(this._originalTemplate, e),
                    this
            }
            ,
            e.exports = i
    }
    , function(e, t) {
        function n(e, t) {
            Object.keys(t).map(function(n) {
                e.setAttribute(n, t[n])
            })
        }
        function i(e) {
            var t = document.head || document.getElementsByTagName("head")[0];
            t.appendChild(e)
        }
        function r() {
            var e = document.createElement("style")
                , t = {
                type: "text/css"
            };
            return n(e, t),
                i(e),
                e
        }
        function o(e, t) {
            var n = t.css
                , i = t.media;
            if (i && e.setAttribute("media", i),
                e.styleSheet)
                e.styleSheet.cssText = n;
            else {
                for (; e.firstChild; )
                    e.removeChild(e.firstChild);
                e.appendChild(document.createTextNode(n))
            }
        }
        var a = {};
        e.exports = function(e) {
            var t = e[0]
                , n = t[0]
                , i = {
                css: t[1],
                media: t[2]
            };
            !a[n] && (a[n] = r()),
                o(a[n], i)
        }
    }
    , function(e, t, n) {
        var i = function() {
            function e(e, t) {
                var n = []
                    , i = !0
                    , r = !1
                    , o = void 0;
                try {
                    for (var a, l = e[Symbol.iterator](); !(i = (a = l.next()).done) && (n.push(a.value),
                    !t || n.length !== t); i = !0)
                        ;
                } catch (s) {
                    r = !0,
                        o = s
                } finally {
                    try {
                        !i && l["return"] && l["return"]()
                    } finally {
                        if (r)
                            throw o
                    }
                }
                return n
            }
            return function(t, n) {
                if (Array.isArray(t))
                    return t;
                if (Symbol.iterator in Object(t))
                    return e(t, n);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }()
            , r = n(2)
            , o = n(18)
            , a = o({
            initialize: function(e) {
                var t = this.nativeEvent = e.nativeEvent;
                this.target = t.target,
                    this.currentTarget = e.currentTarget,
                    this.pageX = t.pageX,
                    this.pageY = t.pageY,
                    this.clientX = t.clientX,
                    this.clientY = t.clientY,
                    this.defaultPrevented = !1,
                    this.cancelBubble = !1,
                    this.cancelImmediateBubble = !1,
                    this.type = t.type
            },
            preventDefault: function() {
                this.defaultPrevented = !0
            },
            stopPropagation: function() {
                this.cancelBubble = !0
            },
            stopImmediatePropagation: function() {
                this.cancelImmediateBubble = !0
            }
        })
            , l = o({
            initialize: function(e) {
                this.$el = e.$el,
                    this.initEvents(e.events)
            },
            initEvents: function(e) {
                var t = this;
                this._captureEvents = {},
                    this._bubbleEvents = {},
                    this._delegationHandlers = {};
                var n = this.normalizeEvents(e);
                Object.keys(n).map(function(e) {
                    var i = n[e];
                    i.map(function(n) {
                        t.delegate(e, n.selector, n.handler)
                    });
                    var o = t._delegationHandlers[e] = function(n) {
                            var i = n.target
                                , r = i
                                , o = !1
                                , l = function() {
                                var i = null
                                    , l = t._bubbleEvents[e];
                                Object.keys(l).map(function(e) {
                                    var t = e.match(/^([.#])([^.#\s]+)$/) || []
                                        , s = t[1]
                                        , u = t[2];
                                    if ("." === s && ~r.className.indexOf(u) || "#" === s && r.id === u) {
                                        i = r;
                                        for (var f = l[e], c = 0; c < f.length; c++) {
                                            var j = f[c]
                                                , d = new a({
                                                nativeEvent: n,
                                                currentTarget: i
                                            });
                                            if (j.call(i, d),
                                            d.defaultPrevented && n.preventDefault(),
                                                d.cancelImmediateBubble) {
                                                o = !0;
                                                break
                                            }
                                        }
                                        d.cancelBubble && (o = !0)
                                    }
                                }),
                                    r = r.parentElement,
                                r === t.$el && (o = !0)
                            };
                            do
                                l();
                            while (t.$el && !o && r)
                        }
                    ;
                    r.on(t.$el, e, o)
                })
            },
            off: function() {
                var e = this._delegationHandlers;
                for (var t in e)
                    r.off(this.$el, t, e[t]);
                this._captureEvents = {},
                    this._bubbleEvents = {},
                    this._delegationHandlers = {},
                    this.$el = null
            },
            delegate: function(e, t, n) {
                this._bubbleEvents[e] || (this._bubbleEvents[e] = {});
                var i = this._bubbleEvents[e];
                i[t] || (i[t] = []);
                var r = i[t];
                return r.push(n),
                    function() {
                        var e = r.indexOf(n);
                        e > -1 && r.splice(e, 1)
                    }
            },
            normalizeEvents: function(e) {
                var t = {};
                for (var n in e)
                    if (e.hasOwnProperty(n)) {
                        var r = n.split(/\s+/)
                            , o = i(r, 2)
                            , a = o[0]
                            , l = o[1];
                        t[l] || (t[l] = []);
                        var s = t[l];
                        s.push({
                            selector: a,
                            handler: e[n]
                        })
                    }
                return t
            }
        });
        e.exports = l
    }
    , function(e, t) {
        function n() {}
        function i(e, t, i, a) {
            function l() {
                f.parentNode && f.parentNode.removeChild(f),
                    window[h] = n,
                c && clearTimeout(c)
            }
            function s() {
                window[h] && l()
            }
            function u(e) {
                var t = [];
                for (var n in e)
                    e.hasOwnProperty(n) && t.push(v(n) + "=" + v(e[n]));
                return t.join("&")
            }
            "object" === ("undefined" == typeof i ? "undefined" : r(i)) && (a = i,
                i = null),
            "function" == typeof t && (i = t,
                t = null),
            a || (a = {});
            var f, c, j = Math.random().toString(36).slice(2, 9), d = a.prefix || "__JSONP", h = a.name || d + ("_" + j) + ("_" + o++), p = a.param || "callback", y = a.timeout || 6e3, v = window.encodeURIComponent, g = document.getElementsByTagName("script")[0] || document.head;
            return y && (c = setTimeout(function() {
                l(),
                i && i(new Error("Timeout"))
            }, y)),
                window[h] = function(e) {
                    l(),
                    i && i(null, e)
                }
                ,
            t && (e = e.split("?")[0]),
                e += (~e.indexOf("?") ? "&" : "?") + u(t) + "&" + p + "=" + v(h),
                e = e.replace("?&", "?"),
                f = document.createElement("script"),
                f.type = "text/javascript",
                f.src = e,
                g.parentNode.insertBefore(f, g),
                s
        }
        var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            , o = 0;
        e.exports = i
    }
    , function(e, t, n) {
        var i = n(18)
            , r = n(1)
            , o = n(11)
            , a = i({
            initialize: function(e) {
                this.state = e.state,
                    this._committing = !1,
                    this._subscribers = [];
                var t = this
                    , n = this.dispatch
                    , i = this.commit;
                this.dispatch = function(e, i, r) {
                    return n.call(t, e, i, r)
                }
                    ,
                    this.commit = function(e, n) {
                        return i.call(t, e, n)
                    }
                    ,
                    this.registerMutations(e.mutations),
                    this.registerActions(e.actions)
            },
            registerMutations: function(e) {
                this._mutations = Object.assign(this._mutations || {}, e)
            },
            registerActions: function(e) {
                this._actions = Object.assign(this._actions || {}, e)
            },
            commit: function(e, t) {
                var n = this
                    , i = {
                    type: e,
                    payload: t
                }
                    , o = this._mutations[e];
                return o ? (this._withCommit(function() {
                    o(n.state, t)
                }),
                    void this._subscribers.map(function(e) {
                        return e(i, n.state)
                    })) : void r.error("[Store] unknown mutation type: " + e)
            },
            _withCommit: function(e) {
                var t = this._committing;
                this._committing = !0,
                    e(),
                    this._committing = t
            },
            dispatch: function(e, t, n) {
                var i = this._actions[e];
                if (!i)
                    return void r.error("[Store] unknown action type: " + e);
                var a = {
                    state: this.state,
                    commit: this.commit,
                    dispatch: this.dispatch
                };
                return o.resolve(i(a, t, n))
            },
            subscribe: function(e) {
                var t = this._subscribers;
                return t.indexOf(e) < 0 && t.push(e),
                    function() {
                        var n = t.indexOf(e);
                        n > -1 && t.splice(n, 1)
                    }
            },
            replaceState: function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                this.state = e;
            }
        });
        e.exports = a
    }
    , function(e, t) {
        e.exports = {
            "zh-CN": {
                loading: "加载中...",
                loadfail: "加载失败",
                verifySuccess: "验证成功",
                verifyError: "验证失败，请重试",
                verifyOutOfLimit: "失败过多，点此重试",
                clickButton: "点此进行验证",
                clickInTurn: "请依次点击",
                slideTip: "向右拖动滑块填充拼图",
                smsTip: "请按照上方图片提示完成验证",
                inferenceTip: "拖动交换2个图块复原图片",
                waitForSMS: "等待短信验证，剩余",
                popupTitle: "请完成安全验证",
                intellisense: {
                    normal: "点击完成验证",
                    checking: "安全检测中",
                    loading: "正在加载验证",
                    loadfail: "加载失败",
                    loaddone: "请完成安全验证"
                }
            },
            en: {
                loading: "loading...",
                loadfail: "Load failed",
                verifySuccess: "verify success",
                verifyError: "verify failed",
                verifyOutOfLimit: "Verify failed. Please retry",
                clickButton: "Click here to verify",
                clickInTurn: "click in turn ",
                slideTip: "drag to complete puzzle",
                smsTip: "follow the prompts complete verification",
                inferenceTip: "swap 2 tiles to restore the image",
                waitForSMS: "waiting for SMS，remaining ",
                popupTitle: "Please complete verification",
                intellisense: {
                    normal: "Click the button to verify",
                    checking: "verifying...",
                    loading: "loading...",
                    loadfail: "Load failed",
                    loaddone: "Please complete verification"
                }
            },
            "zh-TW": {
                loading: "加載中...",
                loadfail: "加載失敗",
                verifySuccess: "驗證成功",
                verifyError: "驗證失敗，請重試",
                verifyOutOfLimit: "失敗過多，點此重試",
                clickButton: "點此進行驗證",
                clickInTurn: "請依次點擊",
                slideTip: "向右拖動滑塊填充拼圖",
                smsTip: "請按照上方圖片提示完成驗證",
                inferenceTip: "拖動交換2個圖塊恢復圖片",
                waitForSMS: "等待短信驗證，剩餘",
                popupTitle: "請完成安全驗證",
                intellisense: {
                    normal: "點擊完成驗證",
                    checking: "安全檢測中",
                    loading: "正在加載驗證",
                    loadfail: "加載失敗",
                    loaddone: "請完成安全驗證"
                }
            },
            ja: {
                loading: "ローディング中...",
                loadfail: "失敗を収める",
                verifySuccess: "検証の成功",
                verifyError: "失敗しました",
                verifyOutOfLimit: "失敗、再試行をクリック",
                clickButton: "確認するにはここをクリック",
                clickInTurn: "順にクリックしてください",
                slideTip: "右にドラッグ",
                smsTip: "上の写真に従って検証を完了してください。",
                inferenceTip: "2つのタイル復元図を交換する",
                waitForSMS: "メールの検証を待って、残ります。",
                popupTitle: "安全検証を完了してください。",
                intellisense: {
                    normal: "クリックして検証を完了する",
                    checking: "安全診断中",
                    loading: "検証をロードしている",
                    loadfail: "失敗を収める",
                    loaddone: "安全検証を完了してください。"
                }
            },
            ko: {
                loading: "적재 중...",
                loadfail: "실패를 거듭하다.",
                verifySuccess: "검증에 성공하다",
                verifyError: "검증 실패, 다시 시험 해 보세요.",
                verifyOutOfLimit: "실패, 다시 시도를 클릭하십시오.",
                clickButton: "확인하려면 여기를 클릭하십시오",
                clickInTurn: "순서 대로 클릭 하세요.",
                slideTip: "오른쪽으로 드래그",
                smsTip: "위쪽 사진에 따라 검증이 완성 되세요.",
                inferenceTip: "두 타일 복원 다이어그램 교환",
                waitForSMS: "문자 검증을 기다리 며 남다.",
                popupTitle: "안전 검증 완료.",
                intellisense: {
                    normal: "클릭 하여 검증하다",
                    checking: "안전 검사 중",
                    loading: "추가 검증을하고 있다.",
                    loadfail: "실패를 거듭하다.",
                    loaddone: "안전 검증 완료."
                }
            },
            th: {
                loading: "กำลังโหลด ...",
                loadfail: "ไม่สามารถโหลด",
                verifySuccess: "การยืนยันที่ประสบความสำเร็จ",
                verifyError: "การยืนยันล้มเหลวโปรดลองอีกครั้ง",
                verifyOutOfLimit: "ความล้มเหลวมากเกินไปลองอีกครั้ง",
                clickButton: "คลิกที่นี่เพื่อยืนยัน",
                clickInTurn: "โปรดคลิก",
                slideTip: "ลากตัวเลื่อนไปทางขวาเพื่อเติมปริศนา",
                smsTip: "โปรดทำตามภาพด้านบนเพื่อยืนยัน",
                inferenceTip: "แลกเปลี่ยนไพ่สองใบเพื่อคืนค่ารูปภาพ",
                waitForSMS: "รอการยืนยันทาง SMS เหลืออยู่",
                popupTitle: "โปรดกรอกข้อมูลการยืนยันความปลอดภัย",
                intellisense: {
                    normal: "คลิก Finish เพื่อยืนยัน",
                    checking: "การทดสอบความปลอดภัย",
                    loading: "กำลังโหลดการยืนยัน",
                    loadfail: "ไม่สามารถโหลด",
                    loaddone: "โปรดกรอกข้อมูลการยืนยันความปลอดภัย"
                }
            },
            vi: {
                loading: "Tải trong...",
                loadfail: "Tải thất bại",
                verifySuccess: "Xác minh thành công",
                verifyError: "Kiểm tra thất bại, hãy thử lại",
                verifyOutOfLimit: "Quá nhiều thất bại, thử lại lần nữa",
                clickButton: "Nhấp vào đây để xác minh",
                clickInTurn: "Xin vui lòng nhấp vào",
                slideTip: "Kéo sang phải để điền vào câu đố",
                smsTip: "Hãy làm theo hình ở trên để hoàn thành xác minh",
                inferenceTip: "Trao đổi hai gạch để khôi phục lại hình ảnh",
                waitForSMS: "Chờ đợi tin nhắn SMS còn lại",
                popupTitle: "Hãy hoàn thành kiểm tra an toàn",
                intellisense: {
                    normal: "Nhấp vào để hoàn thành xác nhận",
                    checking: "Kiểm tra an ninh",
                    loading: "Đang tải kiểm tra",
                    loadfail: "Tải thất bại",
                    loaddone: "Hãy hoàn thành kiểm tra an toàn"
                }
            },
            fr: {
                loading: "téléchargement en cours...",
                loadfail: "téléchargement échoué",
                verifySuccess: "vérification confirmée",
                verifyError: "vérification échouée, veuillez réessayer",
                verifyOutOfLimit: "échecs excessifs, cliquer pour réessayer",
                clickButton: "cliquer pour accomplir la vérification",
                clickInTurn: "veuillez cliquer par ordre",
                slideTip: "glisser le puzzle",
                smsTip: "veuillez accomplir la vérification en suivant l'image",
                inferenceTip: "Carte de réduction des tuiles Exchange",
                waitForSMS: "En attedant de la vérification de message, il reste encore",
                popupTitle: "veuillez accomplir la vérification",
                intellisense: {
                    normal: "cliquer pour accomplir la vérification",
                    checking: "en vérification",
                    loading: "téléchargement en cours",
                    loadfail: "téléchargement échoué",
                    loaddone: "veuillez accomplir la vérification"
                }
            },
            ru: {
                loading: "загрузка...",
                loadfail: "ошибка загрузки",
                verifySuccess: "проверка прошла успешно",
                verifyError: "ошибка проверки, повторите побытку",
                verifyOutOfLimit: "Много ошибок, повторите попытку",
                clickButton: "щелкать, чтобы завершить проверку",
                clickInTurn: "щелкать по очереди",
                slideTip: "перетащить на головоломку",
                smsTip: "завершить проверку, следуя выше изображнению",
                inferenceTip: "Обменная карта сокращения тайлов",
                waitForSMS: "Ожидание подтверждения СМС, осталось",
                popupTitle: "завершите проверку безопасности",
                intellisense: {
                    normal: "щелкать, чтобы завершить проверку",
                    checking: "Мониторинг безопасности",
                    loading: "загрузка проверки",
                    loadfail: "ошибка загрузки",
                    loaddone: "завершиите проверку безопасрость"
                }
            },
            ar: {
                loading: "جاري التحميل...",
                loadfail: "فشل التحميل",
                verifySuccess: "نجح التحقق",
                verifyError: "فشل التحقق، الرجاء المحاولة لمرة أخرى",
                verifyOutOfLimit: "الكثير من الفشل، انقر هنا للمحاولة لمرة أخرى",
                clickButton: "انقر لإكمال التحقق",
                clickInTurn: "الرجاء الضغط بالترتيب الصحيح",
                slideTip: "حرك شريط التمرير إلى اليمين لملء اللغز",
                smsTip: "يرجي إكمال التحقق حسب الصورة أعلاه",
                inferenceTip: "تبادل اثنين من البلاط لاستعادة الصورة",
                waitForSMS: "في انتظار التحقق من الرسائل القصيرة ، تبقى",
                popupTitle: "يرجى إكمال التحقق الأمني",
                intellisense: {
                    normal: "انقر لإكمال التحقق",
                    checking: "جاري التفتيش الأمني",
                    loading: "جاري تحميل التحقق",
                    loadfail: "فشل التحميل",
                    loaddone: "يرجي إكمال التحقق الأمني"
                }
            },
            de: {
                loading: "Wird geladen...",
                loadfail: "Laden fehlgeschlagen",
                verifySuccess: "Erfolg verifizieren",
                verifyError: "gescheitert. Bitte erneut versuchen",
                verifyOutOfLimit: "gescheitert. Bitte erneut versuchen",
                clickButton: "Klicken Sie auf Verifizierung",
                clickInTurn: "Klicken Sie nacheinander",
                slideTip: "ziehen sie um puzzle",
                inferenceTip: "Kachelwiederherstellungskarte austauschen",
                waitForSMS: "Warten auf SMS, bleiben",
                popupTitle: "Bitte vervollständigen Sie die Bestätigung",
                intellisense: {
                    normal: "Klicken Sie auf Verifizierung",
                    checking: "Überprüfen",
                    loading: "Wird geladen",
                    loadfail: "Laden fehlgeschlagen",
                    loaddone: "Bitte vervollständigen Sie die Bestätigung"
                }
            },
            it: {
                loading: "Caricamento in corso...",
                loadfail: "Carico fallito",
                verifySuccess: "verificare il successo",
                verifyError: "verifica fallita. Per favore riprova",
                verifyOutOfLimit: "Troppi guasti, riprova",
                clickButton: "Fai clic sul pulsante per verificare",
                clickInTurn: "clicca a turno",
                slideTip: "trascina per completare il puzzle",
                inferenceTip: "Scambia la mappa di recupero delle tessere",
                waitForSMS: "in attesa di SMS, rimanenti",
                popupTitle: "Si prega di completare la verifica",
                intellisense: {
                    normal: "Fai clic sul pulsante per verificare",
                    checking: "Nella verifica",
                    loading: "Caricamento in corso",
                    loadfail: "Carico fallito",
                    loaddone: "Si prega di completare la verifica"
                }
            },
            he: {
                loading: "טעינה...",
                loadfail: "טעינה נכשלה",
                verifySuccess: "לאמת הצלחה",
                verifyError: "טעינה נכשלה, נסה שוב",
                verifyOutOfLimit: "יותר מדי כשלים, נסה שוב",
                clickButton: "לחץ על הלחצן כדי לאמת",
                clickInTurn: "לחץ בתורו",
                slideTip: "גרור כדי להשלים את הפאזל",
                inferenceTip: "החלף שני אריחים כדי לשחזר את התמונה",
                waitForSMS: "מחכה SMS, הנותרים",
                popupTitle: "מלא את אימות האבטחה",
                intellisense: {
                    normal: "לחץ על הלחצן כדי לאמת",
                    checking: "בדיקת בטיחות",
                    loading: "טעינה",
                    loadfail: "טעינה נכשלה",
                    loaddone: "מלא את אימות האבטחה"
                }
            },
            hi: {
                loading: "लोड हो रहा है...",
                loadfail: "लोड विफल हो गया",
                verifySuccess: "सफल सत्यापन",
                verifyError: "सत्यापित विफल। कृपया पुनः प्रयास करें",
                verifyOutOfLimit: "सत्यापित विफल। कृपया पुनः प्रयास करें",
                clickButton: "सत्यापित करने के लिए बटन पर क्लिक करें",
                clickInTurn: "क्लिक पर क्लिक करें",
                slideTip: "पहेली को पूरा करने के लिए स्लाइडर खींचें",
                inferenceTip: "विनिमय दो टाइल वसूली नक्शे",
                waitForSMS: "एसएमएस की प्रतीक्षा कर रहा है, शेष",
                popupTitle: "कृपया सत्यापन पूरा करें",
                intellisense: {
                    normal: "सत्यापित करने के लिए बटन पर क्लिक करें",
                    checking: "पुष्टि करने",
                    loading: "लोड हो रहा है",
                    loadfail: "लोड विफल हो गया",
                    loaddone: "कृपया सत्यापन पूरा करें"
                }
            },
            id: {
                loading: "pemuatan...",
                loadfail: "Pemuatan gagal",
                verifySuccess: "Verifikasi yang berhasil",
                verifyError: "Verifikasi gagal, coba lagi",
                verifyOutOfLimit: "Terlalu banyak kegagalan, coba lagi",
                clickButton: "Klik untuk menyelesaikan verifikasi",
                clickInTurn: "klik pada gilirannya",
                slideTip: "Seret penggeser ke teka-teki",
                inferenceTip: "Tukar dua peta pemulihan ubin",
                waitForSMS: "Menunggu verifikasi SMS, tersisa",
                popupTitle: "Silakan lengkapi verifikasi keamanan",
                intellisense: {
                    normal: "Klik untuk menyelesaikan verifikasi",
                    checking: "Inspeksi keamanan",
                    loading: "pemuatan",
                    loadfail: "Pemuatan gagal",
                    loaddone: "Klik untuk menyelesaikan verifikasi"
                }
            },
            my: {
                loading: "တင်...",
                loadfail: "ဝန်ရန်မအောင်မြင်ခဲ့ပါ",
                verifySuccess: "စိစစ်အတည်ပြု အောင်မြင်မှု",
                verifyError: "မအောင်မြင်အတည်ပြုရန်။ ထပ်ကြိုးစားပါ",
                verifyOutOfLimit: "မအောင်မြင်အတည်ပြုရန်။ ထပ်ကြိုးစားပါ",
                clickButton: "အတည်ပြုရန်ခလုတ်ကိုကလစ်နှိပ်ပါ",
                clickInTurn: "အလှည့်အတွက်ကိုကလစ်နှိပ်ပါ",
                slideTip: "ပဟေဠိဖြည့်စွက်ဖို့ဆွဲ",
                inferenceTip: "လဲလှယ်ရေးနှစ်ခုအုပ်ကြွပ်ပြန်လည်နာလန်ထူပုံရိပ်",
                waitForSMS: "ယင်း SMS အတွက်စောင့်ဆိုင်းနေ,  ရှိနေဆဲ ",
                popupTitle: "စိစစ်အတည်ပြုဖြည့်စွက်ပေးပါ",
                intellisense: {
                    normal: "အတည်ပြုရန်ခလုတ်ကိုကလစ်နှိပ်ပါ",
                    checking: "အတည်ပြု",
                    loading: "တင်",
                    loadfail: "ဝန်ရန်မအောင်မြင်ခဲ့ပါ",
                    loaddone: "စိစစ်အတည်ပြုဖြည့်စွက်ပေးပါ"
                }
            },
            lo: {
                loading: "ກໍາລັງໂຫລດ",
                loadfail: "ກໍາລັງໂຫລດ ບໍ່ຮູ້",
                verifySuccess: "ການຢັ້ງຢືນສົບຜົນສໍາເລັດ",
                verifyError: "ການຢືນຢັນໄດ້ລົ້ມເຫລວ, ກະລຸນາລອງອີກຄັ້ງ",
                verifyOutOfLimit: "ການຢືນຢັນໄດ້ລົ້ມເຫລວ, ກະລຸນາລອງອີກຄັ້ງ",
                clickButton: "ກົດເພື່ອໃຫ້ສໍາເລັດການຢັ້ງຢືນ",
                clickInTurn: "ກະລຸນາກົດ",
                slideTip: "ລາກລາກລົງໄປທາງຂວາເພື່ອຕື່ມຂໍ້ມູນໃສ່ປິດ",
                inferenceTip: "ແລກປ່ຽນສອງໂລ້ເພື່ອເຮັດໃຫ້ຮູບພາບຄືນ",
                waitForSMS: "ລໍຖ້າການຢືນຢັນ SMS, ຍັງເຫຼືອ",
                popupTitle: "ກະລຸນາສໍາເລັດການກວດສອບຄວາມປອດໄພ",
                intellisense: {
                    normal: "ກົດເພື່ອໃຫ້ສໍາເລັດການຢັ້ງຢືນ",
                    checking: "ການກວດສອບຄວາມປອດໄພ",
                    loading: "ກໍາລັງໂຫລດ",
                    loadfail: "ກໍາລັງໂຫລດ ບໍ່ຮູ້",
                    loaddone: "ກະລຸນາສໍາເລັດການກວດສອບຄວາມປອດໄພ"
                }
            },
            ms: {
                loading: "Memuatkan",
                loadfail: "Beban gagal",
                verifySuccess: "Pengesahan yang berjaya",
                verifyError: "Pengesahan gagal, sila cuba lagi",
                verifyOutOfLimit: "Gagal beberapa kali, klik Cuba lagi",
                clickButton: "Klik untuk menyelesaikan pengesahan",
                clickInTurn: "Sila klik",
                slideTip: "Seret untuk menyelesaikan teka-teki",
                inferenceTip: "Tukar dua jubin untuk memulihkan imej",
                waitForSMS: "Menunggu pengesahan SMS, selebihnya",
                popupTitle: "Sila lengkapkan pengesahan",
                intellisense: {
                    normal: "Klik untuk menyelesaikan pengesahan",
                    checking: "Pemeriksaan keselamatan",
                    loading: "Memuatkan",
                    loadfail: "Beban gagal",
                    loaddone: "Sila lengkapkan pengesahan"
                }
            },
            pl: {
                loading: "Ładowanie...",
                loadfail: "Ładowanie nie powiodło się",
                verifySuccess: "Pomyślna weryfikacja",
                verifyError: "Błąd, spróbuj ponownie",
                verifyOutOfLimit: "Zbyt wiele błędów, spróbuj ponownie",
                clickButton: "Kliknij, aby dokończyć weryfikację",
                clickInTurn: "kliknij po kolei",
                slideTip: "przeciągnij, aby ukończyć układankę",
                inferenceTip: "Wymień dwie mapy redukcji płytek",
                waitForSMS: "czekam na SMS-y, pozostałe",
                popupTitle: "Zakończ weryfikację zabezpieczeń",
                intellisense: {
                    normal: "Kliknij, aby dokończyć weryfikację",
                    checking: "Inspekcja bezpieczeństwa",
                    loading: "Ładowanie",
                    loadfail: "Ładowanie nie powiodło się",
                    loaddone: "Zakończ weryfikację zabezpieczeń"
                }
            },
            pt: {
                loading: "Carregando...",
                loadfail: "Carga falhou",
                verifySuccess: "Verificação bem sucedida",
                verifyError: "Falhou, por favor tente novamente",
                verifyOutOfLimit: "Muitas falhas, clique em Repetir",
                clickButton: "Clique para concluir a confirmação",
                clickInTurn: "Clique por sua vez",
                slideTip: "Arraste para completar o quebra-cabeça",
                inferenceTip: "Troque dois mapas de redução de blocos",
                waitForSMS: "Aguardando SMS, permanecendo",
                popupTitle: "Por favor complete a verificação",
                intellisense: {
                    normal: "Clique para concluir a confirmação",
                    checking: "Na detecção de segurança",
                    loading: "Carregando",
                    loadfail: "Carga falhou",
                    loaddone: "Por favor complete a verificação"
                }
            },
            es: {
                loading: "Cargando...",
                loadfail: "Falló la carga",
                verifySuccess: "Verificación exitosa",
                verifyError: "Falló, por favor intente de nuevo",
                verifyOutOfLimit: "Demasiados fallos, haga clic en Reintentar",
                clickButton: "Haga clic para completar la verificación",
                clickInTurn: "Por favor haga clic",
                slideTip: "Arrastra para completar el puzzle",
                inferenceTip: "Intercambia mapas de reducción de fichas",
                waitForSMS: "esperando SMS, restantes",
                popupTitle: "Por favor complete la verificación",
                intellisense: {
                    normal: "Haga clic para completar la verificación",
                    checking: "Inspección de seguridad",
                    loading: "Cargando",
                    loadfail: "Falló la carga",
                    loaddone: "Haga clic para completar la verificación"
                }
            },
            tr: {
                loading: "Yükleniyor",
                loadfail: "Yükleme başarısız",
                verifySuccess: "Başarılı doğrulama",
                verifyError: "Başarısız, lütfen tekrar deneyin",
                verifyOutOfLimit: "Çok fazla hata var, lütfen tekrar deneyin",
                clickButton: "Doğrulamayı tamamlamak için tıklayın",
                clickInTurn: "sırayla tıkla",
                slideTip: "Bulmacayı tamamlamak için sürükleyin",
                inferenceTip: "İki kutu kurtarma haritasını değiştirin",
                waitForSMS: "SMS beklemek ， kalan",
                popupTitle: "Lütfen doğrulama işlemini tamamlayın",
                intellisense: {
                    normal: "Doğrulamayı tamamlamak için tıklayın",
                    checking: "doğrulama",
                    loading: "Yükleniyor",
                    loadfail: "Yükleme başarısız",
                    loaddone: "Lütfen doğrulama işlemini tamamlayın"
                }
            }
        }
    }
    , function(e, t) {
        var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
        ;
        !function() {
            function e() {
                var e = "bi1euljfv3Yg4RyX".split("");
                this.d = function(t) {
                    if (null == t || void 0 == t)
                        return t;
                    if (0 != t.length % 2)
                        throw Error("1100");
                    for (var n = [], i = 0; i < t.length; i++) {
                        0 == i % 2 && n.push("%");
                        for (var r = e, o = 0; o < r.length; o++)
                            if (t.charAt(i) == r[o]) {
                                n.push(o.toString(16));
                                break
                            }
                    }
                    return decodeURIComponent(n.join(""))
                }
            }
            var t = (new e).d
                , i = (new e).d
                , r = (new e).d
                , o = (new e).d
                , a = (new e).d;
            !function() {
                var e = [a("u3jyjjjXlujlfvfu"), i("f1jRjXjefv1yl1jljij4lbj4jif3jlf11bufe11buejXjyfuf1jXj4"), i("j3uRjlfejv1bfbj4fljfj3jy"), t("l1jljij4uujXffjyj4jXjijujlf11blbj4fljfj3jy"), o("lef3jRjijyfujlje1blbugu31buej4j3jljyfu"), a("lXfbjvjijyfujXjR"), o("ufuuu41buXj1jYjljefu1blfjlj11blbj4fljf1Rj3jy1beiej1yebeb"), o("ffjlj1jfj4"), t("ylvRvyyj3jvfylYyvgyugR3e"), i("fejef1jljljy"), o("j1jXjuf3"), a("lul1u3uiuyufu4ullXlelul1u3lb"), o("jyeR"), t("luj4ffjfuRjXjyjX"), t("1feY1f"), o("u4jXjfuRjlu3jy1blbj4fljfj3jy1bei1yeb1yeb1ye3eeel"), r("jjfljyjefuj3jXjy"), t("jejXjyfujlfvfu1yjvjifejvuejXjujl"), t("uif1jejvj3ueuiuu"), o("ljull1luullvlXleuvuiuuull1"), t("llj1fljyfufl"), i("ujjijejlj1jXjXjg1blbj4fljfj3jy"), a("uijefuj3fjjluejifbfuj3jXjy"), t("yfggvjyj3vvyyugR3e"), t("uRjij4jffljy1bufjXfujvj3je"), i("uyjlfffe1bufjXfujvj3je1buRlu"), i("uejifbfuj3jXjylujlfvfu"), t("jilYj1l3ebjelvjulfeijlljjje1lljfeelujveulej3l1eljYlijgejlbj4uXefjRuyjyevuRjXu4e3fbugfiuYf1u3feuvfuufflujfjulffuufvuef3u1fYui"), i("uujljYjiljfl1bu4ufue1blejijyfe1buRjXjyjX"), r("uejXfbfbjlf1fbj4jifujl1bufjXfujvj3je1bu4j3jfjvfu"), a("lejljfjXjl1blbf1j3jyfu"), t("lejiffjifejujljl"), a("u1jifljvjiflfe1be3ee"), r("uejvjij4jgjuflfefujlf1"), i("uij1jijuj31buRlu1buejXjyjujljyfejlju1bu4j3jfjvfu"), t("u4fljej3juji1bu1f1j3jfjvfu"), o("lfj3jujl1bu4jifuj3jy"), o("jjjXjyfu1bjujlfujljefu1bjlf1f1jXf1"), o("ugjXfYfljgji1bufjXfujvj3je1blbf1ejuy"), o("uvfujRj4el1bj4jXjejifuj3jXjy1bfbf1jXfjj3jujlf1"), r("uuj3fjlv1blbj4flfe1blfjlj11blbj4jif3jlf1"), r("ljj4jijuj3jRj3f11blejef1j3fbfu"), a("ujj3j4jl1buujXffjyj4jXjijujlf11blbj4fljf1Rj3jy"), r("jXj1"), o("uijujXjuj11ylefuf1jljijR"), i("uRjljyj4jX"), r("jejij4j4lbjvjijyfujXjR"), t("lfjXj4jjf1jijR1buRjifujvjljRjifuj3jeji"), t("uejifujij4j3jyjiuff1jXflfb1bllfbjujifujl"), t("ulf1jife1bu1jXj4ju1bu3luue"), r("uujlfjjij4ljl1lvuefuf1j41yuujlfjjij4ljl1lvuefuf1j41yei"), t("ylvRvyyj3jvfyfggvjy3gg3i"), t("jijujuu1jljvjifjj3jXf1"), i("fbji"), t("u1j3fufefuf1jljijR1bljjlf1ji1blejlf1j3jj"), a("1vjjfljyjefuj3jXjy1v13fgf1jlfuflf1jy1beie1eeegfR131v13eg"), o("fbj3"), t("lujljyjejljyfu1bujluuy1bfbj4fljf1Rj3jy"), t("f1jljRjXfjjluejvj3j4ju"), o("ujjXj4fv1bee1bu1f1jXfffejlf11blbj4fljfj3jy"), i("flfejllbf1jXjff1jijR"), a("jvjXfefujyjijRjl"), t("fbjvjijyfujXjR1yj3jyjYjljefuuYfe"), o("lejvjXjejgffjifjjlujj4jifejv1ylejvjXjejgffjifjjlujj4jifejv"), i("f1jfj1ji1veiebe1141be1ebeu141beb141beb1yef13"), t("uijuj1j4jXjejglbj4fljfj3jy"), i("u1jijejgjff1jXfljyju"), r("uijfuejXjyfuf1jXj41yuijfuejXjyfuf1jXj4"), a("lbjvjXfujXuejljyfujlf1lbj4fljfj3jyei1yei1ye11ye1"), o("uffljyjflejljX"), o("feeR"), a("jujljejXjujllll1u3"), a("yj3jg3yjYRYeyvvv31yugR3e"), t("ylvRvyyj3jvfyj3jgby3YRvX"), a("eie1ee"), r("ffjlj1jfj41bjlfvjejlfbfuj3jXjy"), a("f1jl"), r("lfuRlbj4jif3jlf11yuXuelv"), t("efe1fbfv"), i("uifbfblfjXf1jgfefbjijejl"), t("uvj3jfjvj4j3jfjvfu"), t("jujXjefljRjljyfu"), r("l3jijyjujlfv1buRjljuj3ji1blbj4fljfj3jy"), r("ulleuy1bu4jifljyjejv1buRjXfYj3j4j4ji1blbj4fljfj3jy"), r("efebfbfv1b1fuif1j3jij41f"), r("j3jyjYjljefuuYfe"), r("u4jXjRji"), r("u1j3fuuejXjRjlfuuijfjljyfu"), t("uejij4j3j1f1j3"), a("u1jXjXjgjRjijy1buXj4ju1blefuf3j4jl"), i("fejlfefej3jXjylefujXf1jijfjl"), i("llfujXfbj3ji"), r("jejXjRfbj3j4jllejvjijujlf1"), r("jlfejejifbjl"), t("lejef1jXj4j4j1jif1"), a("lfj3jyjujXff"), o("y33Ygjyug3Yj"), i("ugjifefbjlf1fejgf31blbjifefeffjXf1ju1buRjijyjijfjlf1"), a("uRj3jyjfu4j3ll1Rulfvfuu1"), o("jfjlfu1bfef3fefujljR1bjejXj4jXf1fe1bjlfvjejlfbfuj3jXjy"), a("lejgf3fbjl1yuujlfujljefuj3jXjy"), a("ujj3j4jlu4jij11bfbj4fljfj3jy"), o("jyfbuilbu31blbj4fljfj3jy"), r("jyjXfulXjlfvj3fefulXjvjXfefu"), t("e1ju"), r("uijefuj3fjjllvuXj1jYjljefu"), o("uujXfufljR"), t("lbuuuj1Rlvuejvjijyjfjl1bljj3jlffjlf1"), r("lbuRj3jyjfu4j3ll"), i("jejXj4jXf1uujlfbfujv"), i("uyjXjgj3ji1bleflj3fujl1buljyjij1j4jlf11blbj4fljfj3jy"), t("l1jljij4ljj3jujljX1yl1jljij4ljj3jujljX1vfujR131buijefuj3fjjllv1buejXjyfuf1jXj41b1veee11Rj1j3fu13"), t("uRjijfjyjlfujX"), a("uijujXj1jlulfvuRjijyueueuujlfujljefu"), o("lXe3efelelfvjYjujlfefvfvjulX"), o("ufjij1f1j3jXj4ji"), a("lbj4jif3j1j3j4j4"), o("jyjifjj3jfjifujXf1"), i("l1jijejvjijyji"), r("luff1buejljy1buRlu1buejXjyjujljyfejlju1bulfvfuf1ji1bu1jXj4ju"), a("liliuRj3jyj3uuu41blbj4fljfj3jy"), a("1ejjejeb"), a("jjj3j4j4l1jljefu")]
                    , l = [o("eRjyflj4j4eg1bfbjifujveR1Xeg1bjujXjRjij3jyeR"), o("uujljjjiflj4fu1bu1f1jXfffejlf11buvjlj4fbjlf1"), o("ujf1jljyjejv1blejef1j3fbfu1buRlu"), i("yjYbvfyjYlgfyugR3e"), a("jljyjejXjujllll1u3"), t("lljRfbflfejv"), i("j3jefb"), r("ylvRvyyj3jvfyf3bYlyfvXvb"), o("jef1jljifujllbf1jXjff1jijR"), i("jRjXjyjXfefbjijejl"), r("u1flfufujXjylejvjijujXff"), i("u1jXjujXjyj31buRlu"), a("leluuiluu3uelXuul1uilf"), t("y3gg3iyugR3e"), r("jujXffjyj4jXjijullfbjujifujlf1"), a("uij4j3jljuj3fu1blbj4fljf1Ru3jy"), t("lbuuuj1bj3jyfujljff1jijujX1bjujX1blfjlj1ugj3fu"), o("fljyj3jjjXf1jRuXjjjjfejlfu"), o("jljyjejXjujllll1u3uejXjRfbjXjyjljyfu"), r("lbj3jejifeji"), t("uijujXj1jl1bujjijyjffejXjyjf1blefuju"), a("j1j3jyjuu1fljjjjjlf1"), r("uiljuf1blej3fujllejijjjlfuf31bfbj4fljfj3jy"), r("uXf1j1j3fu1buujXffjyj4jXjijujlf1"), t("jejXj4jXf1"), r("jvj3jujujljy"), r("j4jXjejij4lefujXf1jijfjl"), i("ufjXjXjfj4jl1blujij4jg1buljjjjjljefufe1blbj4fljfj3jy"), a("j3jyjujlfvjljuuuu1"), a("u4fljej3juji1bujjifv"), r("uijRjifYjXjyuRlbeeuujXffjyj4jXjijujlf1lbj4fljfj3jy"), i("jef1jljifujlu1fljjjjjlf1"), o("uejifefujlj4j4jif1"), t("j4j3jyjglbf1jXjff1jijR"), o("uejij4j3jjjXf1jyj3jijy1buju1"), i("lujvf1jljluuuvj3jfjvj4j3jfjvfu"), o("jef1jljifujllejvjijujlf1"), t("ufflj4j3jR"), a("uyf3fvu4jifljyjejvjlf1"), r("l3jXflluflj1jl1blbj4fljf1Rj3jy"), a("yjYlgfyugR3elXufu1e1eeeie1"), o("lelfuefuj41ylelfuefuj4"), a("ufjXjXjfj4jl1buljif1fujv1blbj4fljf1Rj3jy"), t("liliuujXffjyj4jXjiju1blbj4fljfj3jy"), r("uyjXf1fujXjy1bu3jujljyfuj3fuf31blejijjjl"), o("fbjif1fejlu3jyfu"), i("lej3jRfbj4jl1blbjifefe"), i("uejXj4jXjyjyji1buRlu"), r("fYjijgjX"), a("jfjlfulljyj3jjjXf1jRu4jXjejifuj3jXjy"), r("fejvjijujlf1lejXflf1jejl"), o("uujXffjyj4jXjijujlf1fe1bfbj4fljfj3jy"), i("j4jXjejifuj3jXjy"), i("uvjlf1jXjlfe1b1j1bufjljyjlf1jij4fe1bj4j3fjjl"), i("ffj3jyjujXff"), i("lejvjXffjejif1ju1bufjXfujvj3je"), r("ylgyYyyvgRYXyjYRYey3gg3iyugR3e"), o("ylvRvyyj3jvfyvYiv4yjYlgf"), o("ufj3jyjfjlf1"), a("l1jXjejguRjlj4fu1bllfbjujifujl"), t("lfj3jyjujXffujf1jijRjl"), t("jljyjij1j4jlljjlf1fujlfvuifufuf1j3j1uif1f1jif3"), t("ugjijefefuuXjyjl"), t("jifufuf1j3j1flfujl1bfjjljee11bjifufuf1ljjlf1fujlfveg1bfjjif1f3j3jyjf1bfjjljee11bfjjif1f3j3jylujlfvuejXjXf1juj3jyjifujleg1bfljyj3jjjXf1jR1bfjjljee11bfljyj3jjjXf1jRuXjjjjfejlfueg1bfjjXj3ju1bjRjij3jy1v131bfg1b1b1bfjjif1f3j3jylujlfvuejXjXf1juj3jyjifujl1beR1bjifufuf1ljjlf1fujlfv1b1g1bfljyj3jjjXf1jRuXjjjjfejlfueg1b1b1bjfj4lXlbjXfej3fuj3jXjy1beR1bfjjljeeu1vjifufuf1ljjlf1fujlfv141beb141bei13eg1bfR"), a("lbjlf1fbjlfuflji"), i("jXfbjljyuujifujij1jifejl"), a("jejijyfjjife"), i("j3ufjlfufujlf1lejef1j3fbfujij1j4jllbj4fljfj3jy"), r("u3jyjjjXf1jRjij41bl1jXjRjijy"), a("uyj3fuf1jX1blbuuuj1blbj4fljf1Ru3jy"), r("uRfefvjRj4e11ylvuRu4uvlululb"), t("ylvRvyyj3jvfy3gg3iyugR3e"), o("uylbu4jifefulbjifefe"), i("lujvf1jljluuujjijejl"), o("u4jifefulbjifefe"), t("eYeY"), o("fbjif1fejlujj4jXjifu"), i("ylvRvyyj3jvfy33Ygjyug3Yj"), i("eg1b"), i("jfjlfuuifufuf1j3j1u4jXjejifuj3jXjy"), a("fg1fjyjijRjl1feY"), a("uyf3jij4ji"), i("jyjXfulXjlfvj3fefulXjvjXfefujyjijRjl"), i("l41f"), o("ufujuiueul1blbj4fljfj3jy"), r("fljyjujljjj3jyjlju"), a("yj3jgbylYyvgyugR3e"), a("l41y"), a("uRjifuflf1ji1buRlu1blejef1j3fbfu1buejifbj3fujij4fe"), i("uif1j3jij41bu1j4jijejg"), i("ujjijyjflejXjyjf"), a("jRffue1bjyjgj1jijjjYjXf1ju1bfbjvfejfj4f31bjlfvfjfu1bfYfij3fl141byigRYb1bfufbjvfefu1XeY1Xfljvj1jffuj3je1yjRjX1Xj4jlfjfjji"), r("u1f1jijfjfjijujXjej3jX"), i("uvjif1jRjXjyf31bujj3f1jljjjXfv1blbj4fljfj3jy"), t("lbjij4jijejl1blejef1j3fbfu1buRlu"), o("uyjifuj3fjjl1buej4j3jljyfu"), r("flfejlf1uijfjljyfu"), a("liflj3jejgluj3jRjl1yliflj3jejgluj3jRjl"), i("jlfvfbjlf1j3jRjljyfujij41Rffjlj1jfj4"), t("uil1l1uil3lXu1llujujull1"), a("yvvgg3yj3y34yugvgRyugvYRy3gg3i"), t("uij4j3fbjif31blejljeflf1j3fuf31buejXjyfuf1jXj41bee"), a("lejef1j3fbfu1buRlu1bu1jXj4ju"), a("141b1fj1f1jXfffejlf1lbf1jXfb1feY"), i("luuuueuefuj41yluuuueuefuj4"), a("fejlj4jj"), i("u3jyjjjXu1jijejgjff1jXfljyju"), o("lbjijyjujX1blfjlj11blbj4fljfj3jy"), a("uvjijlfufujljyfejejvffjlj3j4jlf1"), i("fefbjijy"), i("uijefuj3fjjlu1jXf1jujlf1"), r("lujvf1jljluuu4j3jfjvfulejvjijujXff"), o("ebe1ebe1"), a("ebe1ebee"), a("ebe1ebeb"), r("ebe1ebei"), i("lflbu31buujlfujljefujXf11bei1yeu"), o("eg1bjlfvfbj3f1jlfeeR"), i("lujvf1jljluuuujif1jglejvjijujXff"), t("ulfvj3jj1bulfjjlf1f3ffjvjlf1jl"), o("u1jifufuj4jlj4jXjf1bufjijRjl1bu4jifljyjejvjlf1"), o("u3jRfbjijefu"), a("lju4ue1buRflj4fuj3jRjljuj3ji1blbj4fljfj3jy"), t("uijujXj1jl1buvjlj1f1jlff"), a("u1j4fljllefujijejgfe1bu3jyfefujij4j41buujlfujljefujXf1"), i("ffffffjRjRjRjRjRjRjRjRjRjRj4j4j3"), a("jvj3fefujXf1f3"), a("fejijyfe1Rfejlf1j3jj"), o("eieuefeeeie1elele1eeeujueueieujeuje3eieeelejjuejeveuuleuulevujelujelejjeevjjeij1je"), a("lbjifbf3f1flfe"), o("u1flfufujXjylujlfvfu"), a("ebe1eiei"), o("uifbfbllfb"), o("lbjif1jXjR1ylulj1bfbj4jif3jlf11bfbj4fljfj3jy"), a("uujljij4lbj4f3u4j3fjjl1bllfbjujifujl"), i("u4jXjvj3fu1buffljYjif1jifuj3"), i("ujl1uiufuRuluylulXleuvuiuuull1"), o("uijfjljyjef31buju1"), o("uRjijef1jXjRjljuj3jiujj4jifejvlbjifbjlf11yuRjijef1jXjRjljuj3jiujj4jifejvlbjifbjlf1"), a("1e1e1e"), t("lfjXf1juuejifbfuflf1jllv"), a("jfjlfuuejXjRfbflfujljulefuf3j4jl"), r("fbj4jifujjjXf1jR"), a("ebeiebel"), t("uif1jij1j3je1bluf3fbjlfejlfufuj3jyjf"), r("ebeiebej"), a("ebeiebee"), t("ylvRvyyj3jvfyugvYRylYyvg"), i("ebeiebeu"), r("ebeiebei"), r("ebeiebe1"), o("ebeiebeb"), r("ebeiebef"), r("u1flfufujXjyuvj3jfjvj4j3jfjvfu"), i("fjjlf1fujlfvuifufuf1j3j1lbjXj3jyfujlf1"), i("ebeiebev"), r("fujlfvfuu1jifejlj4j3jyjl"), t("1eebeje3"), t("jujXflj1j4jlluffj3fefu1blfjlj11blbj4fljfj3jy"), i("fljyjlfejejifbjl"), t("lujvfljyjujlf11buujifbuefuf1j41buylbuilbu31blbj4fljfj3jy"), a("u1jifujijyjf"), i("uuujugjij31Rleu1"), i("lejyjifb1bu3luue"), t("uujifujl"), i("uRj3jyj3j1jif1lbj4fljfj3jy"), o("jujljejXjujllll1u3uejXjRfbjXjyjljyfu"), o("uylblbj4jif3jlf1lejvjlj4j4"), o("uRle1bl1jljjjlf1jljyjejl1blejijyfe1blejlf1j3jj"), a("uvj3f1jijfj3jyjX1blejijyfe1bufu1"), o("fejlf1j3jj"), r("jfjlfuuejXjyfujlfvfu"), i("fljyj3jjjXf1jRe1jj"), i("uRjXjXj4u1jXf1jijy")]
                    , s = [a(""), r("uff1jif3lujlfvfu"), a("fbjif1jljyfu"), o("ylg3g4yl34vj"), t("fbj4fljfj3jyfe"), t("uijujXj1jlulfvuRjijyuujlfujljefu"), a("ebebeieb"), a("ufjXjXjfj4jl1buljif1fujv1blbj4fljfj3jy"), o("ljjljlfuj4jl1blulj1buejXf1jl"), t("ebebebef"), t("ebebebeu"), o("ebebebe1"), o("ebebebee"), a("ebebebeb"), i("ebebebei"), r("lljyj3fuf31blbj4jif3jlf1"), a("lejgf3fbjl1blfjlj11blbj4fljfj3jy"), r("lfjlj1ugj3fu1Rj3jyfujljff1j3jlf1fujl1blbuuuj"), i("jfjufvj3jufbf3jvfvjuul"), i("u1jlj4j41buRlu"), a("ebebebev"), o("jfjlfuleflfbfbjXf1fujljuulfvfujljyfej3jXjyfe"), i("fejlfuluj3jRjl"), a("ebebebe3"), a("lejijjjllejljif1jejv"), a("11"), t("1u"), i("lljyj3fjjlf1fe"), o("1l"), a("1j"), i("1f"), i("eieieieb"), a("jfjlfu1bfbj4fljfj3jy1bfefuf1j3jyjf1bjlfvjejlfbfuj3jXjy"), o("lujvf1jljluulejvjijujXff"), o("1g"), o("14"), r("1R"), t("uif1jij1"), o("yvvgg3yj3y34yugvgRyfggvjylYyvg"), i("1y"), r("ujlllYullejvjif1jl"), a("1X"), t("eb"), r("ei"), o("e1"), i("ee"), o("eu"), a("yugggXylYyvglXufu1e1eeeie1")]
                    , u = [o("el"), i("ej"), r("u3jyjijefuj3fjjluejifbfuj3jXjylujlfvfu"), t("ef"), r("lfulu1lYuluy1bu1f1jXfffejlf11bulfvfujljyfej3jXjy"), o("ev"), a("e3"), r("eY"), i("uuj3fjlv1bu1f1jXfffejlf11blbj4fljf1Ru3jy"), r("eg"), t("eR"), t("llfbj4jif31blbue"), t("jejijyfjjife1bjlfvjejlfbfuj3jXjy"), o("ui"), a("u1"), a("ue"), r("uu"), o("ul"), r("ylgyYyyvgRYXy33gvly3gg3i"), i("uj"), i("uvjif1f1j3jyjffujXjy"), t("uf"), i("uv"), a("u3"), a("uY"), o("ufjyjXjRjl1blejvjlj4j41bu3jyfujljff1jifuj3jXjy"), o("ug"), r("u4"), r("uR"), a("uy"), a("uX"), t("lb"), r("li"), a("l1"), r("le"), t("uyj3jijfjif1ji1blejXj4j3ju"), t("lu"), i("lejljjuej4j3jljyfu1blbj4fljfj3jy"), r("ll"), r("lj"), a("eieieiei"), i("lf"), o("lv"), o("l3"), r("lY"), i("ufjXfljuf31buXj4ju1blefuf3j4jl"), a("l4"), r("l1jXj1j4jXfv1bu4jifljyjejvjlf11blbj4fljfj3jy"), r("uRj3jef1jXfejXjjfu1buXjjjjj3jejl1be1ebeiee"), i("liliuRflfej3je"), t("ji"), t("ulflf1jXfefuj3j4jl"), o("j1"), t("f1jRjXjefv1yl1jljij4lbj4jif3jlf11bufe11buejXjyfuf1jXj41yei"), r("je"), t("lejef1j3fbfuj3jyjf1yuuj3jefuj3jXjyjif1f3"), r("ju"), o("yugggXylYyvg"), a("jl"), r("jj"), o("jf"), t("jv"), t("uRji1RuejXjyjjj3jf1yjejXjR1bfbj4fljfj3jy"), i("j3"), i("eiebeieb"), i("uejifefljij4"), t("jY"), i("jg"), o("j4"), o("jR"), a("jy"), o("jX"), r("fb"), a("eiebebev"), i("jefu"), t("jujXuyjXfuluf1jijejg"), r("fi"), o("fejlfuluj3jRjljXflfu"), a("yugvgRylYyvg1blbf1jX"), t("f1"), i("ufj3fejvji"), o("jfjlfuluj3jRjlfYjXjyjluXjjjjfejlfu"), a("fe"), r("eiebebel"), i("eiebebeu"), t("fu"), i("fl"), t("eiebebee"), t("fj"), o("eiebebei"), t("ff"), r("fv"), t("juf1jiffuif1f1jif3fe"), a("f3"), a("fY"), o("fg"), t("fR"), a("fy"), r("jjjXjyfu"), t("eiebebe3"), o("eRjyflj4j4eg1bfbjifujveR1Xeg1bjlfvfbj3f1jlfeeR"), t("lejvjlj4j41yllu3uvjlj4fbjlf1"), i("fujXuujifujilll1u4"), o("lfj3jyjujXfflujlfvfu"), i("j4jijyjffljijfjl"), a("jujX"), r("yugvgRy3gg3i1blbf1jX"), o("uvj3jfjvj4j3jfjvfulujlfvfu"), i("juj3fj"), t("uRjljyfllujlfvfu"), a("uiuXu41buRjljuj3ji1blbj4jif3j1jijejg1blbj4fljfj3jy"), i("uej3fuf1j3fv1bjXjyj4j3jyjl1bfbj4fljf1Rj3jy"), o("jlje"), t("uujlfejujljRjXjyji"), t("u3jyjijefuj3fjjlu1jXf1jujlf1"), t("l1jljij4lbj4jif3jlf1"), r("uvulu4u4uX"), o("141b1fjejXjujl1feY"), o("jljR"), r("jyfblujXjyjfj1fluijujuj3jy"), i("jef1jljifujlulj4jljRjljyfu"), r("fbjvjijyfujXjR"), a("uRle1blbuRj3jyjejvjX"), t("yjYlgfyugR3e"), r("jlfjjij4"), i("jlfv"), i("uuj3fjlv1bljuXuu1buvjlj4fbjlf11blbj4fljf1Rj3jy"), a("yj3jgbyfggvjyj3vvyyugR3e"), o("liflj3jejgluj3jRjluejvjljejguXj1jYjljefu1yliflj3jejgluj3jRjluejvjljejg1yei"), r("ujj4f3uXf1uuj3jl1bufjijRjlfe1blbj4fljfj3jy"), r("jifufujijejvlejvjijujlf1"), i("lbj4jif3uXjy1blbj4fljf1Rj3jy"), r("jfjlfuluj3jRjl"), i("ei1yebei"), r("u1f1jXjijuffjif3"), r("jjfb"), o("uij4jiffjif11buylbuilbu31bflfuj3j4fe"), t("ujjXf1fujl"), a("jvjifejvuejXjujl"), t("yj3jg3yjYRYeylYf3YyugR3e"), o("ulleuy1blejXjyjif11builbu3"), i("uvlbuujlfujljefu"), r("u1j3fujujljjjljyjujlf11bliflj3jejglejejijy"), t("u3ul1blujij11bfbj4fljfj3jy"), o("1f14"), t("u1flfufujXjyujjijejl"), t("jefbfluej4jifefe"), i("uejljyfuflf1f31bufjXfujvj3je"), t("uXjyj4j3jyjl1blefujXf1jijfjl1bfbj4fljf1Rj3jy"), i("lejijjjlf11bllfbjujifujl"), a("uRfefvjRj4e11yuuuXuRuujXjefljRjljyfu"), o("uljyjff1jifjjlf1fe1buRlu"), i("lej3j4fjjlf1j4j3jfjvfu1blbj4fljf1Ru3jy"), o("ufjXjXjfj4jl1bufjljif1fe1beb1yel1yeeee1yeb"), o("uej3fuf1j3fv1bu3ueui1buej4j3jljyfu"), t("jij4fbjvjij1jlfuj3je"), t("ljuujXffjyj4jXjijujlf1"), a("ylvRvyyj3jvfyjYlgfyugR3e"), o("jifufuf1ljjlf1fujlfv"), o("ylYyvgyugR3e"), t("jejXjXjgj3jl"), o("1le1e1"), i("1le1ej"), o("uejljyfujiflf1"), t("eujfjijRjl"), a("l1jXjejgffjlj4j4"), o("u4jXjfuRjlu3jy1blbj4fljfj3jy1bei1yeb1yeb1ye3ejei"), t("uXjefujXfejvjifbjl1blefuf1jljijRj3jyjf1blejlf1fjj3jejlfe"), r("fujXufuRlulefuf1j3jyjf"), o("fujveR1X"), a("lefljRjifuf1jilbuuuj1bu1f1jXfffejlf11blbj4fljfj3jy"), a("lbuuuj1ylbjujjuefuf1j4"), r("jjj3j4j4lefuf3j4jl"), o("jYjl"), a("uijujXj1jl1buRj3jyjf1blefuju"), o("lujXf1jejvuvjlj4fbjlf1"), a("ujf1jijyjgj4j3jy1bufjXfujvj3je1buvjljifjf3"), o("ylvRvyyj3jvfyugggXylYyvg"), o("uvjif1jRjXjyf31blbj4fljf1Ru3jy"), o("ufj3jfj3"), i("fjei1yei"), i("ugj3jyjX1buRlu"), o("lej3jRuvjlj3"), t("uij4j3leleuXu4jXjfj3jy1bfbj4fljfj3jy"), r("l1jljij4lbj4jif3jlf11yl1jljij4lbj4jif3jlf11vfujR131buijefuj3fjjllv1buejXjyfuf1jXj41b1veee11Rj1j3fu13"), a("l3jijyjujlfv1blbuuuj1bljj3jlffjlf1"), r("uej3fuf1j3fv1bl1jljejlj3fjjlf11blbj4fljf1Rj3jy"), o("jRjij3"), o("fujXfb"), o("uijef1jXlbuuuj1ylbuuuj"), r("jejijyfjjife1bjifbj31bjlfvjejlfbfuj3jXjy"), o("u3jyjijefuj3fjjluejifbfuj3jXjy"), r("uRjljyfl"), r("fbf1jljej3fej3jXjy1bjRjljuj3fljRfb1bjjj4jXjifueg1bfjjif1f3j3jyjf1bfjjljee11bfjjif1f3j3jylujlfvuejXjXf1juj3jyjifujleg1bfjjXj3ju1bjRjij3jy1v131bfg1b1b1bjfj4lXujf1jijfuejXj4jXf11beR1bfjjljeeu1vfjjif1f3j3jylujlfvuejXjXf1juj3jyjifujl141beb141bei13eg1bfR"), r("lilie1ebeiee1bujj3f1jljjjXfv1blbj4fljfj3jy"), t("ufjXjXjfj4jl1bllfbjujifujl"), i("ylvRvyyj3jvfylgRY3yugY3i"), i("jluRflfej3jelbj4fljfj3jy1buuu4uRej"), r("lfjlj11buejXjRfbjXjyjljyfufe"), o("u1jij1f3j4jXjy1blujXjXj4u1jif1"), o("uejXjXffjXjy1bllfbjujifujl")];
                !function() {
                    var t = [66, 60, 79, 60, 7, 17, 33, 96, 68, 0, 2, 1423857449, -2, 3, -3, 3432918353, 1555261956, 4, 2847714899, -4, 5, -5, 2714866558, 1281953886, 6, -6, 198958881, 1141124467, 2970347812, -7, 7, 3110523913, 8, -8, 2428444049, -9, 9, 10, -10, -11, 11, 2563907772, -12, 12, 13, 2282248934, -13, 2154129355, -14, 14, 15, -15, 16, -16, 17, -17, -18, 18, 19, -19, 20, -20, 21, -21, -22, 22, -23, 23, 24, -24, 25, -25, -26, 26, 27, -27, 28, -28, 29, -29, 30, -30, 31, -31, 33, -33, -32, 32, -34, -35, 34, 35, 37, -37, 36, -36, 38, 39, -39, -38, 40, 41, -41, -40, 42, -43, -42, 43, 45, -45, -44, 44, 47, -46, -47, 46, 48, -49, -48, 49, -50, 51, -51, 50, 570562233, 53, -52, 52, -53, -54, -55, 55, 54, 503444072, 57, -56, -57, 56, 59, 58, -59, -58, 60, 61, -61, -60, 62, 63, -63, -62, -64, 711928724, -66, 67, -65, 65, -67, 66, 64, -71, -69, 69, 68, 70, -68, -70, 71, -72, 3686517206, -74, -73, 73, 75, 74, -75, 72, -79, 76, 79, 78, -78, -76, 77, -77, 3554079995, -81, 81, -82, -83, 80, -80, 82, 83, -84, 84, 85, -86, -87, 86, -85, 87, 90, -88, -89, -90, 88, 89, 91, -91, 94, 92, 95, -94, 93, -93, -95, -92, -98, 97, 98, -97, -99, 96, 99, -96, -100, 3272380065, 102, -102, -101, -103, 103, 100, 101, -107, -104, 105, 104, 106, -106, -105, 107, 109, -109, -108, -111, 110, -110, 111, 108, 251722036, 115, -115, 112, -114, -112, 113, 114, -113, -117, 119, -116, -119, 117, -118, 118, 116, 123, -120, 122, -121, 120, -122, -123, 121, 125, 127, 3412177804, -127, 126, -126, 124, -125, -124, -128, 128, -129, 1843258603, 3803740692, 984961486, 3939845945, 4195302755, 4066508878, 255, 1706088902, 256, 1969922972, 365, 2097651377, 376229701, 853044451, 752459403, 1e3, 426522225, 3772115230, 615818150, 3904427059, 4167216745, 4027552580, 3654703836, 1886057615, 879679996, 3518719985, 3244367275, 2013776290, 3373015174, 1759359992, 285281116, 1622183637, 1006888145, 1e4, 1231636301, 83908371, 1090812512, 2463272603, 1373503546, 2596254646, 2321926636, 1504918807, 2181625025, 2882616665, 2747007092, 3009837614, 3138078467, 397917763, 81470997, 829329135, 2657392035, 956543938, 2517215374, 2262029012, 40735498, 2394877945, 3266489909, 702138776, 2808555105, 2936675148, 1258607687, 1131014506, 3218104598, 3082640443, 1404277552, 565507253, 534414190, 1541320221, 1913087877, 2053790376, 1789927666, 3965973030, 3826175755, 4107580753, 4240017532, 1658658271, 3579855332, 3708648649, 3453421203, 3317316542, 1873836001, 1742555852, 461845907, 3608007406, 1996959894, 3747672003, 3485111705, 2137656763, 3352799412, 213261112, 3993919788, 1.01, 3865271297, 4139329115, 4275313526, 282753626, 1068828381, 2768942443, 2909243462, 936918e3, 3183342108, 27492, 141376813, 3050360625, 654459306, 2617837225, 1454621731, 2489596804, 2227061214, 1591671054, 2362670323, 4294967295, 1308918612, 2246822507, 795835527, 1181335161, 414664567, 4279200368, 1661365465, 1037604311, 4150417245, 3887607047, 1802195444, 4023717930, 2075208622, 1943803523, 901097722, 628085408, 755167117, 3322730930, 3462522015, 3736837829, 3604390888, 2366115317, .4, 2238001368, 2512341634, 2647816111, -.2, 314042704, 1510334235, 9e5, 58964, 1382605366, 31158534, 450548861, 3020668471, 1119000684, 3160834842, 2898065728, 1256170817, 2765210733, 3060149565, 3188396048, 2932959818, 124634137, 2797360999, 366619977, 62317068, -.26, 1202900863, 498536548, 1340076626, 2405801727, 2265490386, 1594198024, 1466479909, 2547177864, 249268274, 2680153253, 2125561021, 3294710456, 855842277, 3423369109, .732134444, 3705015759, 3569037538, 1994146192, 1711684554, 1852507879, 997073096, 733239954, 4251122042, 601450431, 4111451223, 167816743, 3855990285, 3988292384, 3369554304, 3233442989, 3495958263, 3624741850, 65535, 453092731, -.9, 2094854071, 1957810842, 325883990, 4057260610, 1684777152, 4189708143, 3915621685, 162941995, 1812370925, 3775830040, 783551873, 3134207493, 1172266101, 2998733608, 2724688242, 1303535960, 2852801631, 112637215, 1567103746, 651767980, 1426400815, 906185462, 2211677639, 1047427035, 2344532202, 2607071920, 2466906013, 225274430, 544179635, 2176718541, 2312317920, 1483230225, 1342533948, 2567524794, 2439277719, 1088359270, 671266974, 1219638859, 84e4, 953729732, 3099436303, 2966460450, 817233897, 2685067896, 2825379669, 4089016648, 4224994405, 3943577151, 3814918930, 476864866, 1634467795, 335633487, 1762050814, 1, 2044508324, -1, 3401237130, 3268935591, 3524101629, 3663771856, 1907459465];
                    !function() {
                        function i(e) {
                            if (null == e)
                                return null;
                            for (var n = [], i = t[9], r = e.length; i < r; i++) {
                                var o = e[i];
                                n[i] = ne[(o >>> t[17] & t[50]) * t[52] + (o & t[50])]
                            }
                            return n
                        }
                        function r(e) {
                            var n = [];
                            if (null == e || void 0 == e || e.length == t[9])
                                return f(re);
                            if (e.length >= re) {
                                var n = t[9]
                                    , i = [];
                                if (null != e && e.length != t[9]) {
                                    if (e.length < re)
                                        throw Error(u[87]);
                                    for (var r = t[9]; r < re; r++)
                                        i[r] = e[n + r]
                                }
                                return i
                            }
                            for (i = t[9]; i < re; i++)
                                n[i] = e[i % e.length];
                            return n
                        }
                        function o(e) {
                            var n = t[398];
                            if (null != e)
                                for (var i = t[9]; i < e.length; i++)
                                    n = n >>> t[32] ^ te[(n ^ e[i]) & t[293]];
                            if (e = j(n ^ t[398]),
                                n = e.length,
                            null == e || n < t[9])
                                e = new String(s[0]);
                            else {
                                for (var i = [], r = t[9]; r < n; r++)
                                    i.push(p(e[r]));
                                e = i.join(s[0])
                            }
                            return e
                        }
                        function a(e, n, i) {
                            var r, o = [s[44], s[46], s[42], u[50], u[43], u[22], u[63], u[32], u[91], u[27], u[46], u[44], u[86], u[59], u[39], u[68], u[60], u[5], u[82], u[31], u[28], u[33], u[1], u[56], u[21], u[67], u[42], u[88], u[30], s[41], u[15], u[52], u[90], u[6], u[41], u[16], u[66], s[43], u[17], u[36], u[93], u[23], u[34], u[54], u[69], u[58], u[71], u[24], u[94], s[45], u[3], u[76], u[85], u[61], u[14], u[79], u[38], s[34], u[26], u[29], u[13], u[0], u[72], u[70]], a = u[19], l = [];
                            if (i == t[535])
                                i = e[n],
                                    r = t[9],
                                    l.push(o[i >>> t[10] & t[147]]),
                                    l.push(o[(i << t[17] & t[116]) + (r >>> t[17] & t[50])]),
                                    l.push(a),
                                    l.push(a);
                            else if (i == t[10])
                                i = e[n],
                                    r = e[n + t[535]],
                                    e = t[9],
                                    l.push(o[i >>> t[10] & t[147]]),
                                    l.push(o[(i << t[17] & t[116]) + (r >>> t[17] & t[50])]),
                                    l.push(o[(r << t[10] & t[142]) + (e >>> t[24] & t[13])]),
                                    l.push(a);
                            else {
                                if (i != t[13])
                                    throw Error(u[64]);
                                i = e[n],
                                    r = e[n + t[535]],
                                    e = e[n + t[10]],
                                    l.push(o[i >>> t[10] & t[147]]),
                                    l.push(o[(i << t[17] & t[116]) + (r >>> t[17] & t[50])]),
                                    l.push(o[(r << t[10] & t[142]) + (e >>> t[24] & t[13])]),
                                    l.push(o[e & t[147]])
                            }
                            return l.join(s[0])
                        }
                        function f(e) {
                            for (var n = [], i = t[9]; i < e; i++)
                                n[i] = t[9];
                            return n
                        }
                        function c(e, n, i, r, o) {
                            if (null != e && e.length != t[9]) {
                                if (null == i)
                                    throw Error(u[84]);
                                if (e.length < o)
                                    throw Error(u[87]);
                                for (var a = t[9]; a < o; a++)
                                    i[r + a] = e[n + a]
                            }
                        }
                        function j(e) {
                            var n = [];
                            return n[0] = e >>> t[68] & t[293],
                                n[1] = e >>> t[52] & t[293],
                                n[2] = e >>> t[32] & t[293],
                                n[3] = e & t[293],
                                n
                        }
                        function d(e) {
                            if (null == e || void 0 == e)
                                return e;
                            e = encodeURIComponent(e);
                            for (var n = [], i = e.length, r = t[9]; r < i; r++)
                                if (e.charAt(r) == s[28]) {
                                    if (!(r + t[10] < i))
                                        throw Error(u[99]);
                                    n.push(h(e.charAt(++r) + s[0] + e.charAt(++r))[0])
                                } else
                                    n.push(e.charCodeAt(r));
                            return n
                        }
                        function h(e) {
                            if (null == e || e.length == t[9])
                                return [];
                            e = new String(e);
                            for (var n = [], i = e.length / t[10], r = t[9], o = t[9]; o < i; o++) {
                                var a = parseInt(e.charAt(r++), t[52]) << t[17]
                                    , l = parseInt(e.charAt(r++), t[52]);
                                n[o] = b(a + l)
                            }
                            return n
                        }
                        function p(e) {
                            var n = [];
                            return n.push(ee[e >>> t[17] & t[50]]),
                                n.push(ee[e & t[50]]),
                                n.join(s[0])
                        }
                        function y(e, n) {
                            if (null == e || null == n || e.length != n.length)
                                return e;
                            for (var i = [], r = t[9], o = e.length; r < o; r++)
                                i[r] = v(e[r], n[r]);
                            return i
                        }
                        function v(e, t) {
                            return e = b(e),
                                t = b(t),
                                b(e ^ t)
                        }
                        function g(e, t) {
                            return b(e + t)
                        }
                        function b(e) {
                            if (e < t[284])
                                return b(t[285] - (t[284] - e));
                            if (e >= t[284] && e <= t[276])
                                return e;
                            if (e > t[276])
                                return b(t[286] + e - t[276]);
                            throw Error(u[89])
                        }
                        function m(i) {
                            function r() {
                                for (var n = [e[34], l[20], l[123], u[174], l[137], s[37], l[144], l[89], l[161], e[32], s[19], e[54], l[11], e[89], l[92], u[134], e[88], l[34], l[32], u[65], u[163], u[147], e[33], l[47], e[29], e[28], u[113], l[162], e[106], u[151], e[49], u[51], l[90], u[137], u[176], l[2], e[115], u[179], u[80], u[45], l[37], e[69], l[108], u[20], l[169], l[121], l[68], l[62], u[181], e[38], l[135], e[86], e[35], l[29], e[112], e[24], l[88], e[45], e[98], l[173], u[122], l[168], e[25], u[35], l[81], l[94], l[129], l[64], e[116], e[108], e[118], u[165], e[31], l[102], e[30], l[55], u[182], l[163], e[13], e[119], e[20], l[5], s[27], e[91], e[41], e[36], u[57], l[147], u[177], e[8], u[196], e[73], u[157], l[7], e[51], l[57], l[77], u[159], s[3], u[18], l[86], u[139], e[72], u[123], e[96], l[13], u[127], e[23], l[3], s[47], l[40], l[56], l[71], u[106], u[78], l[100], s[38]], i = [], r = t[9]; r < n.length; r++)
                                    try {
                                        var a = n[r];
                                        o()(a) && i.push(a)
                                    } catch (f) {}
                                return i.join(u[9])
                            }
                            function o() {
                                function n(t) {
                                    var n = {};
                                    return c.style.fontFamily = t,
                                        f.appendChild(c),
                                        n.height = c.offsetHeight,
                                        n.width = c.offsetWidth,
                                        f[e[58]](c),
                                        n
                                }
                                var i = [l[9], l[127], l[170]]
                                    , r = []
                                    , o = l[125]
                                    , a = e[78]
                                    , f = q[e[10]]
                                    , c = q[u[120]](l[109]);
                                for (c.style.fontSize = a,
                                         c.style.visibility = l[25],
                                         c.innerHTML = o,
                                         o = t[9]; o < i.length; o++)
                                    r[o] = n(i[o]);
                                return function(e) {
                                    for (var o = t[9]; o < r.length; o++) {
                                        var a = n(e + s[35] + i[o])
                                            , l = r[o];
                                        if (a.height !== l.height || a.width !== l.width)
                                            return !0
                                    }
                                    return !1
                                }
                            }
                            function a() {
                                var t = null
                                    , n = null
                                    , i = [];
                                try {
                                    n = q[u[120]](l[66]),
                                        t = n[l[171]](e[7]) || n[l[171]](l[98])
                                } catch (r) {}
                                if (!t)
                                    return i;
                                try {
                                    i.push(t[s[21]]())
                                } catch (o) {}
                                try {
                                    i.push(f(t, n))
                                } catch (a) {}
                                return i.join(u[9])
                            }
                            function f(n, i) {
                                try {
                                    var r = l[63]
                                        , o = u[193]
                                        , a = n[l[31]]();
                                    n[l[21]](n[l[99]], a);
                                    var s = new Float32Array([t[425], t[481], t[9], t[421], t[446], t[9], t[9], t[461], t[9]]);
                                    n.bufferData(n[l[99]], s, n[l[12]]),
                                        a.k = t[13],
                                        a.l = t[13];
                                    var f = n[l[8]]()
                                        , c = n[l[36]](n[e[19]]);
                                    n[l[50]](c, r),
                                        n[e[92]](c);
                                    var j = n[l[36]](n[l[136]]);
                                    return n[l[50]](j, o),
                                        n[e[92]](j),
                                        n[u[130]](f, c),
                                        n[u[130]](f, j),
                                        n[l[33]](f),
                                        n[e[60]](f),
                                        f.n = n[l[79]](f, u[158]),
                                        f.m = n[l[49]](f, l[17]),
                                        n[l[61]](f.o),
                                        n[l[154]](f.n, a.k, n.FLOAT, !t[535], t[9], t[9]),
                                        n[l[172]](f.m, t[535], t[535]),
                                        n[u[92]](n[e[11]], t[9], a.l),
                                        _(i[u[102]]())
                                } catch (d) {
                                    return e[75]
                                }
                            }
                            function c() {
                                var n = q[u[120]](u[108])
                                    , i = []
                                    , r = [l[110], e[22], e[79], e[66], u[145], l[153], l[10], l[130], e[26], s[1], e[80], u[107], u[114], u[191], u[2], l[106], e[0], u[192], u[109], e[94], l[118], l[73], l[35], l[111], s[33], e[95], l[60], u[103]];
                                if (!window[l[141]])
                                    return i.join(s[0]);
                                for (var o = t[9]; o < r.length; o++)
                                    try {
                                        q[e[10]].appendChild(n),
                                            n.style.color = r[o],
                                            i.push(r[o]),
                                            i.push(window[l[141]](n).getPropertyValue(l[24])),
                                            q[e[10]][e[58]](n)
                                    } catch (a) {
                                        i.push(e[99])
                                    }
                                return i.join(u[7])
                            }
                            function j() {
                                try {
                                    var n = q[u[120]](l[66])
                                        , i = n[l[171]](e[104])
                                        , r = l[91];
                                    return i[l[156]] = u[188],
                                        i[u[98]] = e[84],
                                        i[l[156]] = u[155],
                                        i[u[172]] = e[121],
                                        i[e[122]](t[275], t[535], t[146], t[60]),
                                        i[u[172]] = l[157],
                                        i.fillText(r, t[10], t[50]),
                                        i[u[172]] = e[64],
                                        i.fillText(r, t[17], t[54]),
                                        n[u[102]]()
                                } catch (o) {
                                    return u[190]
                                }
                            }
                            function d() {
                                try {
                                    return window[e[105]] && m.h ? p() : h()
                                } catch (t) {
                                    return s[32]
                                }
                            }
                            function h() {
                                if (!J[s[4]])
                                    return s[0];
                                var n = [u[164], e[65], e[113], s[5], u[136], l[15], l[101], u[183], l[30], u[110], l[132], e[18], l[22], u[199], l[120], e[87], u[142], l[124], e[48], u[154], u[111], u[186], u[200], l[134], l[1], u[8], e[40], u[126], l[158], l[51], l[14], u[197], e[83], u[140], l[119], e[21], e[42], e[101], u[129], e[59], s[40], e[6], l[84], l[58], u[25], s[7], l[42], u[153], l[27], u[195], l[93], u[178], l[53], u[141], e[39], u[143], l[67], e[2], e[97], l[74], e[15], u[166], u[62], u[48], l[165], l[95], l[69], e[110], l[44], e[102], l[72], l[167], u[119], l[38], u[167], u[148], l[23], l[107], l[133], l[16], e[107], e[68], l[19], u[131], u[194], l[43], e[120], u[49], e[3], u[47], l[59], u[149], s[24], u[55], u[37], u[101], u[152], l[46], s[16], u[170], e[4], e[57], l[160], u[175], s[15], u[11], u[156], s[8], l[122], u[198], s[17], u[4], e[47], l[140], l[116], e[82], u[185], l[39], l[48]]
                                    , i = []
                                    , r = {};
                                return i.push(y(J[s[4]], function(e) {
                                    r[e.name] = t[535];
                                    var n = y(e, function(e) {
                                        return [e.type, e.suffixes].join(u[97])
                                    }).join(s[35]);
                                    return [e.name, e.description, n].join(l[75])
                                }, this).join(s[26])),
                                    i.push(y(n, function(e) {
                                        if (r[e])
                                            return s[0];
                                        if (e = J[s[4]][e],
                                            !e)
                                            return s[0];
                                        var t = y(e, function(e) {
                                            return [e.type, e.suffixes].join(u[97])
                                        }).join(s[35]);
                                        return [e.name, e.description, t].join(l[75])
                                    }, this).join(u[9])),
                                    i.join(u[9])
                            }
                            function p() {
                                return window[e[105]] ? y([u[189], e[44], e[67], e[50], l[138], u[150], l[70], u[171], l[97], u[128], e[1], u[53], u[115], u[184], e[111], e[1], u[55], u[101], e[63], l[41], e[100], l[104], e[77]], function(t) {
                                    try {
                                        return new window[e[105]](t),
                                            t
                                    } catch (n) {
                                        return null
                                    }
                                }).join(u[9]) : s[0]
                            }
                            function y(e, t, n) {
                                var i = [];
                                return null == e ? i : b && e.map === b ? e.map(t, n) : (v(e, function(e, r, o) {
                                    i[i.length] = t.call(n, e, r, o)
                                }),
                                    i)
                            }
                            function v(e, n) {
                                if (null !== e)
                                    if (g && e.forEach === g)
                                        e.forEach(n, void 0);
                                    else if (e.length === +e.length)
                                        for (var i = t[9], r = e.length; i < r && n.call(void 0, e[i], i, e) !== {}; i++)
                                            ;
                                    else
                                        for (i in e)
                                            if (e.hasOwnProperty(i) && n.call(void 0, e[i], i, e) === {})
                                                break
                            }
                            var g = Array.prototype.forEach
                                , b = Array.prototype.map
                                , m = {
                                e: _,
                                j: !0,
                                i: !0,
                                h: !0,
                                b: !0,
                                a: !0
                            };
                            ("undefined" == typeof i ? "undefined" : n(i)) == e[16] ? m.e = i : (null != i.b && void 0 != i.b && (m.b = i.b),
                            null != i.a && void 0 != i.a && (m.a = i.a)),
                                this.get = function() {
                                    var i = []
                                        , o = [];
                                    if (K) {
                                        var s;
                                        try {
                                            s = !!window[e[90]]
                                        } catch (f) {
                                            s = !0
                                        }
                                        i.push(s);
                                        var h;
                                        try {
                                            h = !!window[l[26]]
                                        } catch (p) {
                                            h = !0
                                        }
                                        if (i.push(h),
                                            i.push(!!window[l[28]]),
                                            q[e[10]] ? i.push(n(q[e[10]][e[52]])) : i.push("undefined"),
                                            i.push(n(window[l[65]])),
                                            i.push(J[u[146]]),
                                            i.push(J[l[142]]),
                                            s = m.i)
                                            try {
                                                var y = q[u[120]](l[66]);
                                                s = !(!y[l[171]] || !y[l[171]](e[104]))
                                            } catch (v) {
                                                s = !1
                                            }
                                        if (s)
                                            try {
                                                i.push(j()),
                                                m.b && i.push(a())
                                            } catch (g) {
                                                i.push(u[12])
                                            }
                                        i.push(c()),
                                        m.a && o.push(r()),
                                            o.push(J[l[96]]),
                                            o.push(J[u[104]]),
                                            o.push(window[e[9]][e[109]]),
                                        m.j && (y = window[e[9]] ? [window[e[9]].height, window[e[9]].width] : [t[9], t[9]],
                                        ("undefined" == typeof y ? "undefined" : n(y)) !== l[85] && o.push(y.join(u[91]))),
                                            o.push((new Date)[u[81]]()),
                                            o.push(J[u[75]]),
                                            o.push(d())
                                    }
                                    return y = [],
                                        m.e ? (y.push(m.e(i.join(l[139]))),
                                            y.push(m.e(o.join(l[139])))) : (y.push(_(i.join(l[139]))),
                                            y.push(_(o.join(l[139])))),
                                        y
                                }
                        }
                        function _(e) {
                            var n, i, r, o, a, l, u = t[82];
                            for (n = e.length & t[13],
                                     i = e.length - n,
                                     r = u,
                                     u = t[15],
                                     o = t[369],
                                     l = t[9]; l < i; )
                                a = e.charCodeAt(l) & t[293] | (e.charCodeAt(++l) & t[293]) << t[32] | (e.charCodeAt(++l) & t[293]) << t[52] | (e.charCodeAt(++l) & t[293]) << t[68],
                                    ++l,
                                    a = (a & t[479]) * u + (((a >>> t[52]) * u & t[479]) << t[52]) & t[398],
                                    a = a << t[50] | a >>> t[54],
                                    a = (a & t[479]) * o + (((a >>> t[52]) * o & t[479]) << t[52]) & t[398],
                                    r ^= a,
                                    r = r << t[44] | r >>> t[58],
                                    r = (r & t[479]) * t[20] + (((r >>> t[52]) * t[20] & t[479]) << t[52]) & t[398],
                                    r = (r & t[479]) + t[388] + (((r >>> t[52]) + t[429] & t[479]) << t[52]);
                            switch (a = t[9],
                                n) {
                                case t[13]:
                                    a ^= (e.charCodeAt(l + t[10]) & t[293]) << t[52];
                                case t[10]:
                                    a ^= (e.charCodeAt(l + t[535]) & t[293]) << t[32];
                                case t[535]:
                                    a ^= e.charCodeAt(l) & t[293],
                                        a = (a & t[479]) * u + (((a >>> t[52]) * u & t[479]) << t[52]) & t[398],
                                        a = a << t[50] | a >>> t[54],
                                        a = (a & t[479]) * o + (((a >>> t[52]) * o & t[479]) << t[52]) & t[398],
                                        r ^= a
                            }
                            r ^= e.length,
                                r ^= r >>> t[52],
                                r = (r & t[479]) * t[400] + (((r >>> t[52]) * t[400] & t[479]) << t[52]) & t[398],
                                r ^= r >>> t[44],
                                r = (r & t[479]) * t[343] + (((r >>> t[52]) * t[343] & t[479]) << t[52]) & t[398],
                                r ^= r >>> t[52],
                                e = r >>> t[9],
                                n = [],
                                n.push(e);
                            try {
                                for (var f, c = e + s[0], j = t[9], d = t[9], h = t[9]; h < c.length; h++)
                                    try {
                                        var p = parseInt(c.charAt(h) + s[0])
                                            , j = p || p === t[9] ? j + p : j + t[535];
                                        d++
                                    } catch (y) {
                                        j += t[535],
                                            d++
                                    }
                                d = d == t[9] ? t[535] : d,
                                    f = T(j * t[535] / d, Q);
                                for (var v, g = Math.floor(f / Math.pow(t[37], Q - t[535])), b = e + s[0], m = t[9], _ = t[9], E = t[9], R = t[9], C = t[9]; C < b.length; C++)
                                    try {
                                        var k = parseInt(b.charAt(C) + s[0]);
                                        k || k === t[9] ? k < g ? (_++,
                                            m += k) : (R++,
                                            E += k) : (R++,
                                            E += g)
                                    } catch (O) {
                                        R++,
                                            E += g
                                    }
                                R = R == t[9] ? t[535] : R,
                                    _ = _ == t[9] ? t[535] : _,
                                    v = T(E * t[535] / R - m * t[535] / _, Z),
                                    n.push(w(f, Q, s[42])),
                                    n.push(w(v, Z, s[42]))
                            } catch (X) {
                                n = [],
                                    n.push(e),
                                    n.push(S(Q, s[36]).join(s[0])),
                                    n.push(S(Z, s[36]).join(s[0]))
                            }
                            return n.join(s[0])
                        }
                        function T(e, n) {
                            if (e < t[9] || e >= t[37])
                                throw Error(s[31]);
                            for (var i = S(n, s[42]), r = s[0] + e, o = t[9], a = t[9]; o < i.length && a < r.length; a++)
                                r.charAt(a) != s[39] && (i[o++] = r.charAt(a));
                            return parseInt(i.join(s[0]))
                        }
                        function w(e, t, n) {
                            if (e = s[0] + e,
                            e.length > t)
                                throw Error(u[40]);
                            if (e.length == t)
                                return e;
                            for (var i = [], r = e.length; r < t; r++)
                                i.push(n);
                            return i.push(e),
                                i.join(s[0])
                        }
                        function S(e, n) {
                            if (e <= t[9])
                                return [t[9]];
                            for (var i = [], r = t[9]; r < e; r++)
                                i.push(n);
                            return i
                        }
                        function E(e) {
                            return null == e || void 0 == e
                        }
                        function R(e, t, n) {
                            this.f = e,
                                this.c = t,
                                this.g = !!E(n) || n
                        }
                        function C(e) {
                            if (E(e) || E(e.f) || E(e.c))
                                return !1;
                            try {
                                if (E(window[e.f]))
                                    return !1
                            } catch (t) {
                                return !1
                            }
                            return !0
                        }
                        function k(e, n) {
                            if (E(e))
                                return s[0];
                            for (var i = t[9]; i < e.length; i++) {
                                var r = e[i];
                                if (!E(r) && r.f == n)
                                    return r
                            }
                        }
                        function O() {
                            var n;
                            e: {
                                if (!E(z))
                                    for (n = t[9]; n < z.length; n++) {
                                        var i = z[n];
                                        if (i.g && !C(i)) {
                                            n = i;
                                            break e
                                        }
                                    }
                                n = null
                            }
                            var r;
                            if (E(n)) {
                                try {
                                    r = window.parseFloat(u[133]) === t[378] && window.isNaN(window.parseFloat(u[116]))
                                } catch (o) {
                                    r = !1
                                }
                                if (r) {
                                    var a;
                                    try {
                                        a = window.parseInt(e[74]) === t[267] && window.isNaN(window.parseInt(u[116]))
                                    } catch (f) {
                                        a = !1
                                    }
                                    if (a) {
                                        var c;
                                        try {
                                            c = window.decodeURI(u[161]) === s[25]
                                        } catch (j) {
                                            c = !1
                                        }
                                        if (c) {
                                            var d;
                                            try {
                                                d = window.decodeURIComponent(u[162]) === s[29]
                                            } catch (h) {
                                                d = !1
                                            }
                                            if (d) {
                                                var p;
                                                try {
                                                    p = window.encodeURI(s[25]) === u[161]
                                                } catch (y) {
                                                    p = !1
                                                }
                                                if (p) {
                                                    var v;
                                                    try {
                                                        v = window.encodeURIComponent(s[29]) === u[162]
                                                    } catch (g) {
                                                        v = !1
                                                    }
                                                    if (v) {
                                                        var b;
                                                        try {
                                                            b = window.escape(s[29]) === u[162]
                                                        } catch (m) {
                                                            b = !1
                                                        }
                                                        if (b) {
                                                            var _;
                                                            try {
                                                                _ = window.unescape(u[162]) === s[29]
                                                            } catch (T) {
                                                                _ = !1
                                                            }
                                                            if (_) {
                                                                var w;
                                                                try {
                                                                    w = window.eval(e[55]) === t[267]
                                                                } catch (S) {
                                                                    w = !1
                                                                }
                                                                r = w ? null : k(z, u[124])
                                                            } else
                                                                r = k(z, l[159])
                                                        } else
                                                            r = k(z, e[93])
                                                    } else
                                                        r = k(z, l[18])
                                                } else
                                                    r = k(z, l[4])
                                            } else
                                                r = k(z, l[166])
                                        } else
                                            r = k(z, e[71])
                                    } else
                                        r = k(z, l[45])
                                } else
                                    r = k(z, l[76])
                            } else
                                r = n;
                            return r
                        }
                        function X() {
                            var t = O();
                            if (!E(t))
                                return t.c;
                            try {
                                t = E(window[u[121]]) || E(window[u[121]][e[85]]) ? null : k(z, e[62])
                            } catch (n) {
                                t = null
                            }
                            if (!E(t))
                                return t.c;
                            try {
                                t = E(context) || E(context[u[138]]) ? null : k(z, e[17])
                            } catch (i) {
                                t = null
                            }
                            return E(t) ? null : t.c
                        }
                        function $(e) {
                            for (var n = [], i = t[9]; i < e; i++) {
                                var r = Math.random() * je
                                    , r = Math.floor(r);
                                n.push(ce.charAt(r))
                            }
                            return n.join(s[0])
                        }
                        function I(e) {
                            for (var n = (q[u[160]] || s[0]).split(l[78]), i = t[9]; i < n.length; i++) {
                                var r = n[i].indexOf(u[10]);
                                if (r >= t[9]) {
                                    var o = n[i].substring(r + t[535], n[i].length);
                                    if (n[i].substring(t[9], r) == e)
                                        return window.decodeURIComponent(o)
                                }
                            }
                            return null
                        }
                        function x(i) {
                            var r = [u[88], u[135], u[86], u[61], u[112], u[118], l[6]]
                                , o = s[0];
                            if (null == i || void 0 == i)
                                return i;
                            if (("undefined" == typeof i ? "undefined" : n(i)) == [e[43], u[173], u[74]].join(s[0])) {
                                for (var o = o + u[95], a = t[9]; a < r.length; a++)
                                    if (i.hasOwnProperty(r[a])) {
                                        var f, c = s[30] + r[a] + e[14];
                                        f = s[0] + i[r[a]],
                                            f = null == f || void 0 == f ? f : f.replace(/'/g, l[83]).replace(/"/g, s[25]),
                                            o += c + f + u[144]
                                    }
                                return o.charAt(o.length - t[535]) == s[35] && (o = o.substring(t[9], o.length - t[535])),
                                    o += u[96]
                            }
                            return null
                        }
                        function A(t, n, i, r) {
                            var o = [];
                            o.push(t + u[10] + encodeURIComponent(n)),
                            i && (t = new Date,
                                t = new Date(r),
                                r = t[u[168]](),
                                o.push(l[78]),
                                o.push(u[125]),
                                o.push(e[56]),
                                o.push(e[76]),
                                o.push(e[70]),
                                o.push(r)),
                                o.push(l[78]),
                                o.push(e[53]),
                                o.push(u[169]),
                            null != ge && void 0 != ge && ge != s[0] && (o.push(l[78]),
                                o.push(u[105]),
                                o.push(u[187]),
                                o.push(e[12]),
                                o.push(ge)),
                                q[u[160]] = o.join(s[0])
                        }
                        function N(e) {
                            window[be] = e
                        }
                        function P(e) {
                            window[me] = e
                        }
                        function M(e, n) {
                            for (var i = [], r = t[9]; r < n; r++)
                                i.push(e);
                            return i.join(s[0])
                        }
                        function D(e, t) {
                            var n = I(e);
                            null !== n && void 0 !== n && n !== s[0] || A(e, t, !1)
                        }
                        function L() {
                            var e = I(ue);
                            return null != e && void 0 != e && e != s[0] || (e = window[me]),
                                e
                        }
                        function Y() {
                            var e = L();
                            if (null == e || void 0 == e || e == s[0])
                                return !1;
                            try {
                                return !!((e = parseInt(e)) && e >= fe)
                            } catch (t) {
                                return !1
                            }
                        }
                        function B(e) {
                            return null == e || void 0 == e || e == s[0] ? null : (e = e.split(u[7]),
                                e.length < t[10] || !/^[0-9]+$/gi.test(e[1]) ? null : parseInt(e[1]))
                        }
                        function F() {
                            var e = I(se);
                            return null != e && void 0 != e && e != s[0] || (e = window[be]),
                                e
                        }
                        function V() {
                            var e = F();
                            return null == e || void 0 == e || e == s[0] ? t[9] : (e = B(e),
                                null == e ? t[9] : e - (de - he) - (new window[l[164]])[u[132]]())
                        }
                        function H(n, i) {
                            var r = new window[l[164]];
                            r[s[22]](r[u[132]]() - t[320]),
                                window[e[81]][u[160]] = null == i || void 0 == i || i == s[0] ? n + u[100] + r[u[168]]() : n + l[0] + i + l[117] + r[u[168]]()
                        }
                        function U() {
                            if (!(null == _e || void 0 == _e || _e.length <= t[9]))
                                for (var e = t[9]; e < _e.length; e++) {
                                    var n = _e[e];
                                    (null != ge && void 0 != ge && ge != s[0] || null != n && void 0 != n && n != s[0]) && ge != n && (H(se, n),
                                        H(ue, n))
                                }
                        }
                        function W() {
                            U(),
                                window[me] = null,
                                window[be] = null;
                            var e = !0
                                , n = {
                                v: u[180]
                            }
                                , h = X();
                            h && (n[l[6]] = h),
                                h = null,
                                n[u[61]] = G;
                            var p = (new window[l[164]])[u[132]]() + de
                                , _ = p + t[302] * t[142] * t[142] * t[68] * t[297] * t[20];
                            n[u[86]] = $(t[13]) + p + $(t[13]);
                            try {
                                var T = new m({
                                    b: ye,
                                    a: pe
                                }).get();
                                null != T && void 0 != T && T.length > t[9] ? n[u[135]] = T.join(s[35]) : (n[u[135]] = M(s[42], t[37]),
                                    n[u[112]] = s[43],
                                    e = !1)
                            } catch (w) {
                                n[u[135]] = M(s[42], t[37]),
                                    n[u[112]] = s[43],
                                    e = !1
                            }
                            try {
                                var S = h = x(n)
                                    , n = le;
                                if (null == n || void 0 == n)
                                    throw Error(u[73]);
                                null != S && void 0 != S || (S = s[0]);
                                var E, T = S;
                                E = o(null == S ? [] : d(S));
                                var R = d(T + E)
                                    , C = d(n);
                                null == R && (R = []),
                                    E = [];
                                for (var k = t[9]; k < ae; k++) {
                                    var O = Math.random() * t[295]
                                        , O = Math.floor(O);
                                    E[k] = b(O)
                                }
                                var I, C = r(C), C = y(C, r(E)), k = C = r(C);
                                if (null == R || void 0 == R || R.length == t[9])
                                    I = f(ie);
                                else {
                                    var L = R.length
                                        , Y = t[9]
                                        , Y = L % ie <= ie - oe ? ie - L % ie - oe : ie * t[10] - L % ie - oe
                                        , O = [];
                                    c(R, t[9], O, t[9], L);
                                    for (var B = t[9]; B < Y; B++)
                                        O[L + B] = t[9];
                                    c(j(L), t[9], O, L + Y, oe),
                                        I = O
                                }
                                if (L = I,
                                null == L || L.length % ie != t[9])
                                    throw Error(u[83]);
                                I = [];
                                for (var F = t[9], V = L.length / ie, H = t[9]; H < V; H++) {
                                    I[H] = [];
                                    for (var z = t[9]; z < ie; z++)
                                        I[H][z] = L[F++]
                                }
                                F = [],
                                    c(E, t[9], F, t[9], ae);
                                for (var K = I.length, q = t[9]; q < K; q++) {
                                    var J, Q, Z = I[q];
                                    if (null == Z)
                                        Q = null;
                                    else {
                                        for (var ee = b(t[92]), V = [], te = Z.length, ne = t[9]; ne < te; ne++)
                                            V.push(v(Z[ne], ee));
                                        Q = V
                                    }
                                    var re;
                                    if (V = Q,
                                    null == V)
                                        re = null;
                                    else {
                                        for (var ce = b(t[91]), H = [], je = V.length, ve = t[9]; ve < je; ve++)
                                            H.push(v(V[ve], ce--));
                                        re = H
                                    }
                                    if (V = re,
                                    null == V)
                                        J = null;
                                    else {
                                        for (var ge = b(t[110]), H = [], _e = V.length, Te = t[9]; Te < _e; Te++)
                                            H.push(g(V[Te], ge++));
                                        J = H
                                    }
                                    var we, Se = y(J, C);
                                    if (V = Se,
                                        H = k,
                                    null == V)
                                        we = null;
                                    else if (null == H)
                                        we = V;
                                    else {
                                        for (var z = [], Ee = H.length, Re = t[9], Ce = V.length; Re < Ce; Re++)
                                            z[Re] = b(V[Re] + H[Re % Ee]);
                                        we = z
                                    }
                                    var Se = y(we, k)
                                        , ke = i(Se)
                                        , ke = i(ke);
                                    c(ke, t[9], F, q * ie + ae, ie),
                                        k = ke
                                }
                                var Oe;
                                if (null == F || void 0 == F)
                                    Oe = null;
                                else if (F.length == t[9])
                                    Oe = s[0];
                                else {
                                    var Xe = t[13];
                                    try {
                                        for (var K = [], $e = t[9]; $e < F.length; ) {
                                            if (!($e + Xe <= F.length)) {
                                                K.push(a(F, $e, F.length - $e));
                                                break
                                            }
                                            K.push(a(F, $e, Xe)),
                                                $e += Xe
                                        }
                                        Oe = K.join(s[0])
                                    } catch (Ie) {
                                        throw Error(u[64])
                                    }
                                }
                                h = Oe
                            } catch (xe) {
                                h = x({
                                    ec: s[44],
                                    em: xe.message
                                }),
                                    e = !1
                            }
                            h = h + u[7] + p,
                                A(se, h, e, _),
                                D(se, h),
                                N(h),
                                A(ue, fe, e, _),
                                D(ue, fe),
                                P(fe),
                            window[u[77]] && window[u[77]](W, he)
                        }
                        R.prototype = {
                            toString: function() {
                                return l[80] + this.f + u[117] + this.c + l[103] + this.g + u[96]
                            }
                        };
                        var z = [new R(l[54],s[13]), new R(e[81],s[14]), new R(e[117],s[11]), new R(l[52],s[12]), new R(l[126],s[10]), new R(e[9],s[9]), new R(s[2],s[20]), new R(u[188],s[23]), new R(l[105],s[6]), new R(l[76],l[151]), new R(l[45],l[149]), new R(e[71],l[150]), new R(l[166],l[146]), new R(l[4],l[148]), new R(l[18],l[143]), new R(e[93],l[145]), new R(l[159],l[152]), new R(u[124],l[155]), new R(e[5],l[114],!1), new R(e[46],l[115],!1), new R(u[121],l[112],!1), new R(e[62],l[113],!1), new R(e[17],l[131],!1)]
                            , K = !O()
                            , G = window && window[l[52]] && window[l[52]].host || e[103]
                            , q = window[e[81]]
                            , J = window[e[117]]
                            , Q = t[10]
                            , Z = t[10]
                            , ee = [s[42], s[43], s[44], s[45], s[46], u[0], u[1], u[3], u[5], u[6], u[50], u[52], u[54], u[56], u[58], u[59]]
                            , te = [t[9], t[371], t[377], t[515], t[442], t[310], t[488], t[337], t[455], t[536], t[304], t[454], t[489], t[457], t[408], t[34], t[448], t[357], t[527], t[395], t[432], t[287], t[360], t[504], t[484], t[486], t[469], t[327], t[533], t[405], t[291], t[420], t[467], t[23], t[363], t[496], t[319], t[347], t[540], t[384], t[413], t[434], t[168], t[436], t[300], t[494], t[462], t[330], t[501], t[325], t[475], t[349], t[352], t[393], t[373], t[522], t[518], t[452], t[416], t[28], t[401], t[513], t[313], t[439], t[464], t[431], t[41], t[410], t[542], t[499], t[456], t[306], t[314], t[250], t[339], t[491], t[374], t[389], t[516], t[379], t[409], t[531], t[422], t[292], t[490], t[480], t[329], t[471], t[294], t[426], t[506], t[361], t[362], t[444], t[397], t[528], t[497], t[289], t[331], t[463], t[437], t[406], t[438], t[184], t[348], t[311], t[385], t[541], t[27], t[459], t[498], t[364], t[514], t[391], t[440], t[315], t[453], t[510], t[31], t[417], t[396], t[344], t[523], t[375], t[328], t[492], t[350], t[476], t[474], t[326], t[445], t[483], t[290], t[424], t[335], t[412], t[530], t[394], t[509], t[356], t[359], t[508], t[472], t[298], t[308], t[451], t[133], t[534], t[407], t[47], t[303], t[466], t[381], t[512], t[382], t[368], t[487], t[342], t[334], t[318], t[419], t[22], t[521], t[449], t[312], t[443], t[383], t[519], t[478], t[346], t[503], t[323], t[372], t[526], t[336], t[402], t[277], t[435], t[414], t[430], t[460], t[333], t[124], t[502], t[366], t[495], t[468], t[16], t[539], t[390], t[301], t[354], t[507], t[358], t[296], t[341], t[392], t[529], t[355], t[322], t[423], t[288], t[411], t[376], t[324], t[473], t[482], t[26], t[340], t[485], t[316], t[353], t[511], t[380], t[367], t[403], t[45], t[404], t[465], t[317], t[450], t[307], t[532], t[299], t[525], t[370], t[399], t[338], t[345], t[477], t[321], t[505], t[441], t[309], t[517], t[386], t[18], t[418], t[447], t[524], t[387], t[538], t[351], t[305], t[493], t[365], t[11], t[470], t[332], t[458], t[500], t[151], t[433], t[226], t[427], t[415]]
                            , ne = [t[35], t[193], t[120], t[138], t[251], t[227], t[134], t[275], t[209], t[51], t[50], t[10], t[167], t[217], t[176], t[96], t[135], t[117], t[177], t[72], t[259], t[142], t[201], t[36], t[234], t[42], t[159], t[225], t[147], t[104], t[56], t[76], t[268], t[39], t[84], t[108], t[178], t[210], t[92], t[218], t[17], t[139], t[219], t[194], t[220], t[202], t[211], t[235], t[46], t[203], t[179], t[204], t[260], t[152], t[44], t[21], t[78], t[261], t[19], t[185], t[74], t[100], t[140], t[105], t[195], t[116], t[169], t[242], t[150], t[73], t[153], t[85], t[252], t[9], t[93], t[228], t[205], t[118], t[276], t[196], t[101], t[236], t[12], t[269], t[106], t[253], t[212], t[186], t[83], t[154], t[229], t[48], t[155], t[119], t[156], t[254], t[230], t[197], t[59], t[237], t[157], t[170], t[88], t[180], t[109], t[75], t[243], t[244], t[112], t[143], t[198], t[107], t[129], t[70], t[158], t[89], t[110], t[125], t[255], t[94], t[171], t[206], t[187], t[121], t[86], t[97], t[188], t[189], t[199], t[245], t[43], t[141], t[231], t[181], t[113], t[278], t[90], t[535], t[221], t[49], t[136], t[246], t[238], t[213], t[126], t[40], t[256], t[60], t[239], t[172], t[146], t[160], t[98], t[130], t[262], t[279], t[257], t[267], t[37], t[182], t[270], t[33], t[173], t[62], t[214], t[54], t[144], t[63], t[240], t[280], t[57], t[281], t[55], t[127], t[38], t[183], t[69], t[64], t[271], t[215], t[71], t[222], t[247], t[65], t[66], t[161], t[282], t[284], t[114], t[99], t[537], t[13], t[61], t[232], t[162], t[233], t[20], t[263], t[272], t[111], t[122], t[95], t[102], t[68], t[190], t[80], t[191], t[148], t[103], t[216], t[207], t[25], t[128], t[283], t[149], t[77], t[248], t[58], t[123], t[249], t[163], t[164], t[79], t[174], t[223], t[208], t[145], t[165], t[166], t[264], t[14], t[192], t[200], t[29], t[87], t[131], t[82], t[273], t[274], t[241], t[258], t[115], t[81], t[265], t[132], t[67], t[266], t[53], t[30], t[24], t[91], t[52], t[224], t[137], t[175], t[32]]
                            , ie = t[158]
                            , re = t[158]
                            , oe = t[17]
                            , ae = t[17]
                            , le = l[128]
                            , se = s[18]
                            , ue = e[114]
                            , fe = t[87]
                            , ce = e[27]
                            , je = ce.length
                            , de = t[428]
                            , he = t[520]
                            , pe = !1
                            , ye = !1
                            , ve = window && window[l[52]] && window[l[52]][e[61]] || l[82]
                            , ge = s[0]
                            , ge = function(e, n) {
                            if (null == e || void 0 == e || e == s[0] || null == n || void 0 == n || n.length <= t[9])
                                return null;
                            n = n.split(u[9]);
                            for (var i = t[9]; i < n.length; i++) {
                                var r = new RegExp(n[i].replace(/\./g, l[87]) + s[26]);
                                if (null != e.match(r) || null != (s[39] + e).match(r))
                                    return n[i]
                            }
                            return null
                        }(ve, ge)
                            , be = se.replace(/[^a-zA-Z0-9$]/g, s[0]).toLowerCase()
                            , me = ue.replace(/[^a-zA-Z0-9$]/g, s[0]).toLowerCase()
                            , _e = function(e) {
                            var n = [];
                            if (!e)
                                return n;
                            e = e.split(s[39]);
                            for (var i = s[0], r = t[9]; r < e.length; r++)
                                r < e.length - t[535] && (i = s[39] + e[e.length - t[535] - r] + i,
                                    n.push(i));
                            return n
                        }(ve);
                        _e.push(null),
                            _e.push(s[39] + ve),
                        function(e) {
                            for (var n = t[9], i = (s[0]).split(l[78]), r = t[9]; r < i.length; r++) {
                                var o = i[r].indexOf(u[10]);
                                o >= t[9] && i[r].substring(t[9], o) == e && (n += t[535])
                            }
                            return n
                        }(se) > t[535] && U(),
                            function() {
                                var e = F();
                                if (null == e || void 0 == e || e == s[0])
                                    e = !1;
                                else {
                                    var t;
                                    (t = Y()) && (e = B(e),
                                        t = !(null == e || isNaN(e) || e - (new window[l[164]])[u[132]]() <= de - he)),
                                        e = t
                                }
                                return e
                            }() ? (N(F()),
                                P(L()),
                                ve = V(),
                            window[u[77]] && window[u[77]](W, ve)) : W()
                    }()
                }()
            }()
        }()
    }
    , function(module, exports) {
        var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
        ;
        "object" !== ("undefined" == typeof JSON ? "undefined" : _typeof(JSON)) && (JSON = {}),
            function() {
                "use strict";
                function f(e) {
                    return e < 10 ? "0" + e : e
                }
                function this_value() {
                    return this.valueOf()
                }
                function quote(e) {
                    return rx_escapable.lastIndex = 0,
                        rx_escapable.test(e) ? '"' + e.replace(rx_escapable, function(e) {
                            var t = meta[e];
                            return "string" == typeof t ? t : "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
                        }) + '"' : '"' + e + '"'
                }
                function str(e, t) {
                    var n, i, r, o, a, l = gap, s = t[e];
                    switch (s && "object" === ("undefined" == typeof s ? "undefined" : _typeof(s)) && "function" == typeof s.toJSON && (s = s.toJSON(e)),
                    "function" == typeof rep && (s = rep.call(t, e, s)),
                        "undefined" == typeof s ? "undefined" : _typeof(s)) {
                        case "string":
                            return quote(s);
                        case "number":
                            return isFinite(s) ? String(s) : "null";
                        case "boolean":
                        case "null":
                            return String(s);
                        case "object":
                            if (!s)
                                return "null";
                            if (gap += indent,
                                a = [],
                            "[object Array]" === Object.prototype.toString.apply(s)) {
                                for (o = s.length,
                                         n = 0; n < o; n += 1)
                                    a[n] = str(n, s) || "null";
                                return r = 0 === a.length ? "[]" : gap ? "[\n" + gap + a.join(",\n" + gap) + "\n" + l + "]" : "[" + a.join(",") + "]",
                                    gap = l,
                                    r
                            }
                            if (rep && "object" === ("undefined" == typeof rep ? "undefined" : _typeof(rep)))
                                for (o = rep.length,
                                         n = 0; n < o; n += 1)
                                    "string" == typeof rep[n] && (i = rep[n],
                                        r = str(i, s),
                                    r && a.push(quote(i) + (gap ? ": " : ":") + r));
                            else
                                for (i in s)
                                    Object.prototype.hasOwnProperty.call(s, i) && (r = str(i, s),
                                    r && a.push(quote(i) + (gap ? ": " : ":") + r));
                            return r = 0 === a.length ? "{}" : gap ? "{\n" + gap + a.join(",\n" + gap) + "\n" + l + "}" : "{" + a.join(",") + "}",
                                gap = l,
                                r
                    }
                }
                var rx_one = /^[\],:{}\s]*$/
                    , rx_two = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g
                    , rx_three = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g
                    , rx_four = /(?:^|:|,)(?:\s*\[)+/g
                    , rx_escapable = /[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g
                    , rx_dangerous = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
                "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function() {
                    return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
                }
                    ,
                    Boolean.prototype.toJSON = this_value,
                    Number.prototype.toJSON = this_value,
                    String.prototype.toJSON = this_value);
                var gap, indent, meta, rep;
                "function" != typeof JSON.stringify && (meta = {
                        "\b": "\\b",
                        "\t": "\\t",
                        "\n": "\\n",
                        "\f": "\\f",
                        "\r": "\\r",
                        '"': '\\"',
                        "\\": "\\\\"
                    },
                        JSON.stringify = function(e, t, n) {
                            var i;
                            if (gap = "",
                                indent = "",
                            "number" == typeof n)
                                for (i = 0; i < n; i += 1)
                                    indent += " ";
                            else
                                "string" == typeof n && (indent = n);
                            if (rep = t,
                            t && "function" != typeof t && ("object" !== ("undefined" == typeof t ? "undefined" : _typeof(t)) || "number" != typeof t.length))
                                throw new Error("JSON.stringify");
                            return str("", {
                                "": e
                            })
                        }
                ),
                "function" != typeof JSON.parse && (JSON.parse = function(text, reviver) {
                        function walk(e, t) {
                            var n, i, r = e[t];
                            if (r && "object" === ("undefined" == typeof r ? "undefined" : _typeof(r)))
                                for (n in r)
                                    Object.prototype.hasOwnProperty.call(r, n) && (i = walk(r, n),
                                        void 0 !== i ? r[n] = i : delete r[n]);
                            return reviver.call(e, t, r)
                        }
                        var j;
                        if (text = String(text),
                            rx_dangerous.lastIndex = 0,
                        rx_dangerous.test(text) && (text = text.replace(rx_dangerous, function(e) {
                            return "\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4)
                        })),
                            rx_one.test(text.replace(rx_two, "@").replace(rx_three, "]").replace(rx_four, "")))
                            return j = eval("(" + text + ")"),
                                "function" == typeof reviver ? walk({
                                    "": j
                                }, "") : j;
                        throw new SyntaxError("JSON.parse")
                    }
                )
            }()
    }
    , function(e, t) {
        e.exports = function(e, t) {
            function n() {}
            n.prototype = t.prototype,
                e.prototype = new n,
                e.prototype.constructor = e
        }
    }
    , function(e, t) {
        Array.isArray || (Array.isArray = function(e) {
                return "[object Array]" === Object.prototype.toString.call(e)
            }
        )
    }
    , function(e, t) {
        "function" != typeof Object.assign && (Object.assign = function(e) {
                if (null == e)
                    throw new TypeError("Cannot convert undefined or null to object");
                e = Object(e);
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    if (null != n)
                        for (var i in n)
                            Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
                }
                return e
            }
        )
    }
    , function(e, t) {
        var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
        ;
        Object.keys || (Object.keys = function() {
            "use strict";
            var e = Object.prototype.hasOwnProperty
                , t = !{
                toString: null
            }.propertyIsEnumerable("toString")
                , i = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"]
                , r = i.length;
            return function(o) {
                if ("function" != typeof o && ("object" !== ("undefined" == typeof o ? "undefined" : n(o)) || null === o))
                    throw new TypeError("Object.keys called on non-object");
                var a, l, s = [];
                for (a in o)
                    e.call(o, a) && s.push(a);
                if (t)
                    for (l = 0; l < r; l++)
                        e.call(o, i[l]) && s.push(i[l]);
                return s
            }
        }())
    }
    , function(e, t) {
        Array.prototype.indexOf || (Array.prototype.indexOf = function(e, t) {
                var n;
                if (null == this)
                    throw new TypeError('"this" is null or not defined');
                var i = Object(this)
                    , r = i.length >>> 0;
                if (0 === r)
                    return -1;
                var o = +t || 0;
                if (Math.abs(o) === 1 / 0 && (o = 0),
                o >= r)
                    return -1;
                for (n = Math.max(o >= 0 ? o : r - Math.abs(o), 0); n < r; ) {
                    if (n in i && i[n] === e)
                        return n;
                    n++
                }
                return -1
            }
        )
    }
    , function(e, t) {
        Array.prototype.map || (Array.prototype.map = function(e, t) {
                var n, i, r;
                if (null == this)
                    throw new TypeError(" this is null or not defined");
                var o = Object(this)
                    , a = o.length >>> 0;
                if ("[object Function]" !== Object.prototype.toString.call(e))
                    throw new TypeError(e + " is not a function");
                for (t && (n = t),
                         i = new Array(a),
                         r = 0; r < a; ) {
                    var l, s;
                    r in o && (l = o[r],
                        s = e.call(n, l, r, o),
                        i[r] = s),
                        r++
                }
                return i
            }
        )
    }
    , function(e, t) {
        Function.prototype.bind || (Function.prototype.bind = function(e) {
                if ("function" != typeof this)
                    throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
                var t = Array.prototype.slice.call(arguments, 1)
                    , n = this
                    , i = function() {}
                    , r = function() {
                    return n.apply(this instanceof i ? this : e, t.concat(Array.prototype.slice.call(arguments)))
                };
                return this.prototype && (i.prototype = this.prototype),
                    r.prototype = new i,
                    r
            }
        )
    }
    , function(e, t, n) {
        n(43),
            n(49),
            n(48),
            n(45),
            n(47),
            n(46),
            n(52),
            n(50)
    }
    , function(e, t) {
        String.prototype.trim || (String.prototype.trim = function() {
                return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
            }
        )
    }
    , function(e, t, n) {
        function i(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
                e
        }
        function r(e, t) {
            var n = e.apiServer
                , i = e.protocol
                , r = "/api/v2" + t;
            return Array.isArray(n) ? n.map(function(e) {
                return I({
                    protocol: i,
                    host: e,
                    path: r
                })
            }) : I({
                protocol: i,
                host: n,
                path: r
            })
        }
        function o(e, t, n) {
            var i = e || !t && new Error('Server error, "res" is not right.(' + n + ")") || t.error && new Error(t.error + ": " + t.msg + ".(" + n + ")") || null;
            return !e && t && t.error ? i.code = Y : !e && t || (i.code = L),
                i
        }
        function a(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 256;
            return null == e ? "" : String($.isFn(e) ? e() : e).substring(0, t)
        }
        function l() {
            var e = $.uuid(32);
            return get_cb(e)
        }
        var s, u, f = n(4), c = f.INVOKE_HOOK, j = f.EVENT_RESET, d = f.SWITCH_TYPE, h = f.SET_TYPE, p = f.SWITCH_LOAD_STATUS, y = f.UPDATE_VERIFY_STATUS, v = f.REFRESH, g = f.UPDATE_COUNTS_OF_VERIFYERROR, b = f.SET_TOKEN, m = f.EVENT_RESET_CLASSIC, _ = n(12), T = _.FETCH_CAPTCHA, w = _.FETCH_INTELLISENSE_CAPTCHA, S = _.VERIFY_CAPTCHA, E = _.VERIFY_INTELLISENSE_CAPTCHA, R = _.RESET_STATE, C = n(3), k = C.CAPTCHA_TYPE, O = C.DEVICE, X = n(2), $ = n(1), I = n(16), x = n(7), A = x.eypt, N = n(33), P = n(9), M = n(5), D = M.UNPASS_ERROR, L = M.REQUEST_API_ERROR, Y = M.BUSINESS_ERROR, B = X.isMobile ? O.TOUCH : X.supportTouch ? O.MOUSE_TOUCH : O.MOUSE, F = {
            state: {
                version: "2.13.6",
                fingerprint: "",
                config: null,
                langPkg: null,
                captchaType: null,
                type: "",
                load: null,
                verifyStatus: "",
                token: "",
                previousToken: "",
                countsOfVerifyError: 0
            },
            mutations: (s = {},
                i(s, c, function() {}),
                i(s, j, function() {}),
                i(s, m, function() {}),
                i(s, d, function(e, t) {
                    e.captchaType = t.captchaType
                }),
                i(s, h, function(e, t) {
                    e.type = t.captchaType
                }),
                i(s, p, function(e, t) {
                    e.load = t
                }),
                i(s, y, function(e, t) {
                    e.verifyStatus = t.verifyStatus
                }),
                i(s, v, function(e) {
                    e.load = null,
                        e.verifyStatus = ""
                }),
                i(s, g, function(e, t) {
                    e.countsOfVerifyError = t.counts
                }),
                i(s, b, function(e, t) {
                    t && (e.previousToken = t),
                        e.token = t
                }),
                s),
            actions: (u = {},
                i(u, R, function(e) {
                    var t = e.commit;
                    t(d, {
                        captchaType: null
                    }),
                        t(p, null),
                        t(y, {
                            verifyStatus: ""
                        }),
                        t(b, ""),
                        t(g, {
                            counts: 0
                        })
                }),
                i(u, T, function(e, t) {
                    var n = e.commit
                        , i = e.state
                        , a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function() {}
                        , s = i.fingerprint
                        , u = i.version
                        , f = i.$fetch
                        , j = i.config
                        , y = j.apiServer
                        , v = j.captchaId
                        , g = j.protocol
                        , m = j.captchaType
                        , _ = j.ipv6
                        , T = j.runEnv
                        , w = j.group
                        , S = j.scene
                        , E = Object.assign({
                        id: v,
                        fp: s,
                        https: "https" === g,
                        type: m,
                        version: u,
                        dpr: window.devicePixelRatio || 1,
                        dev: B,
                        cb: l(),
                        ipv6: _,
                        runEnv: T,
                        group: w,
                        scene: S
                    }, t)
                        , R = r({
                        apiServer: y,
                        protocol: g
                    }, "/get");
                    n(p, {
                        status: "loading"
                    }),
                        f(R, E, function(e, t) {
                            if (e = o(e, t, R)) {
                                var r = new M(e.code,e.message,{
                                    url: R,
                                    api: "get"
                                });
                                return a(r),
                                    n(p, {
                                        status: "fail",
                                        data: r
                                    }),
                                    void n(c, {
                                        name: "onError",
                                        args: [r]
                                    })
                            }
                            a(null, t);
                            var l = t.data;
                            l.type !== k.INTELLISENSE && l.type !== i.captchaType && n(d, {
                                captchaType: l.type,
                                prevCaptchaType: i.captchaType
                            }),
                                n(h, {
                                    captchaType: l.type
                                }),
                                n(b, l.token),
                                n(p, {
                                    status: "loading",
                                    data: l
                                })
                        }, {
                            onTryError: P(i.config)
                        })
                }),
                i(u, w, function(e, t) {
                    var n = e.commit
                        , i = e.state
                        , a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function() {}
                        , s = i.fingerprint
                        , u = i.version
                        , f = i.$fetch
                        , j = i.config
                        , d = j.apiServer
                        , p = j.captchaId
                        , y = j.protocol
                        , v = j.captchaType
                        , g = j.ipv6
                        , m = j.runEnv
                        , _ = j.group
                        , T = j.scene
                        , w = r({
                        apiServer: d,
                        protocol: y
                    }, "/get");
                    f(w, {
                        id: p,
                        fp: s,
                        https: "https" === y,
                        type: v,
                        width: t.width,
                        version: u,
                        dpr: window.devicePixelRatio || 1,
                        dev: B,
                        cb: l(),
                        ipv6: g,
                        runEnv: m,
                        group: _,
                        scene: T
                    }, function(e, t) {
                        if (e = o(e, t, w)) {
                            var i = new M(e.code,e.message,{
                                url: w,
                                api: "get"
                            });
                            return n(c, {
                                name: "onError",
                                args: [i]
                            }),
                                void a(i)
                        }
                        n(h, {
                            captchaType: k.INTELLISENSE
                        }),
                            n(b, t.data.token),
                            a(null, t)
                    }, {
                        onTryError: P(i.config)
                    })
                }),
                i(u, E, function(e, t, n) {
                    var i = e.commit
                        , s = e.state
                        , u = s.version
                        , f = s.type
                        , j = s.$fetch
                        , d = s.config
                        , h = d.apiServer
                        , p = d.captchaId
                        , y = d.protocol
                        , v = d.extraData
                        , g = d.runEnv
                        , b = Object.assign({
                        id: p,
                        version: u,
                        cb: l(),
                        extraData: a(v),
                        runEnv: g
                    }, t)
                        , m = r({
                        apiServer: h,
                        protocol: y
                    }, "/check");
                    j(m, b, function(e, t) {
                        if (e = o(e, t, m),
                            e ? e = new M(e.code,e.message,{
                                url: m,
                                token: b.token,
                                type: f
                            }) : $.getIn(t, "data.result") || (e = new M(D,"Failed to verify captcha.",{
                                url: m,
                                type: f,
                                token: b.token
                            })),
                            e)
                            i(c, {
                                name: "onVerify",
                                args: [e]
                            });
                        else {
                            var r = s.fingerprint
                                , a = N(A(t.data.validate + "::" + r));
                            i(c, {
                                name: "onVerify",
                                args: [null, {
                                    validate: a
                                }]
                            })
                        }
                        n && n(e, t)
                    }, {
                        onTryError: P(s.config, {
                            token: b.token
                        })
                    })
                }),
                i(u, S, function(e, t) {
                    var n = e.commit
                        , i = e.state
                        , s = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function() {}
                        , u = i.fingerprint
                        , f = i.captchaType
                        , j = i.version
                        , d = i.verifyStatus
                        , h = i.countsOfVerifyError
                        , p = i.$fetch
                        , v = i.type
                        , b = i.config
                        , m = b.apiServer
                        , _ = b.captchaId
                        , T = b.protocol
                        , w = b.extraData
                        , S = b.runEnv
                        , E = t.token
                        , R = t.data
                        , C = t.width
                        , O = t.acToken
                        , X = r({
                        apiServer: m,
                        protocol: T
                    }, "/check");
                    n(y, {
                        verifyStatus: "verifying"
                    });
                    var $ = function(e, t) {
                        var i = t && t.data;
                        if (e = o(e, t, X),
                            !(["success", "error"].indexOf(d) > -1)) {
                            if (e || !i.result && f !== k.SMS) {
                                var r = e ? e.message : "Failed to verify captcha."
                                    , a = e ? e.code : D;
                                return e = new M(a,r,{
                                    url: X,
                                    token: E,
                                    type: v,
                                    counts: h + 1
                                }),
                                    n(y, {
                                        verifyStatus: "error",
                                        error: e
                                    }),
                                    n(g, {
                                        counts: h + 1
                                    }),
                                    n(c, {
                                        name: "onVerify",
                                        args: [e]
                                    }),
                                    void s(e)
                            }
                            if (i.result) {
                                var l = N(A(i.validate + "::" + u));
                                n(y, {
                                    verifyStatus: "success",
                                    validate: i.validate
                                }),
                                    n(c, {
                                        name: "onVerify",
                                        args: [null, {
                                            validate: l
                                        }]
                                    }),
                                    s(null, t)
                            }
                        }
                    };
                    p(X, {
                        id: _,
                        token: E,
                        acToken: O,
                        data: R,
                        width: C,
                        type: f,
                        version: j,
                        cb: l(),
                        extraData: a(w),
                        runEnv: S
                    }, $, {
                        onTryError: P(i.config, {
                            token: E
                        })
                    })
                }),
                u)
        };
        e.exports = F
    }
    , function(e, t) {
        e.exports = '<div\n  class="yidun <%= \'yidun--\' + theme %> <%= \'yidun--\' + mode %>"\n  style="width: <%= width %>; min-width: <%= minWidth %>">\n  <div\n    class="yidun_panel"\n    <% if (mode === \'float\') { %>\n    style="<%= customStyles.imagePanel.align === \'top\'\n    ? \'bottom: \' + customStyles.controlBar.height + \'; padding-bottom: \' + customStyles.gap\n    : \'top: \' + customStyles.controlBar.height + \'; padding-top: \' + customStyles.gap %>"\n    <% } else { %>\n    style="padding-bottom: <%= customStyles.gap %>"\n    <% } %>\n    >\n    <div class="yidun_panel-placeholder">\n      <% if (mode === \'float\') { %>\n      <iframe class="yidun_cover-frame"></iframe>\n      <% } %>\n      <div class="yidun_bgimg" style="border-radius: <%= customStyles.imagePanel.borderRadius %>">\n        <img class="yidun_bg-img" style="border-radius: <%= customStyles.imagePanel.borderRadius %>"/>\n        <img class="yidun_jigsaw"/>\n        <% for (var i in inferences) { %>\n          <% if (inferences.hasOwnProperty(i)) { %>\n          <div class="yidun_inference <%= \'yidun_inference--\' + i %>" draggable="true">\n            <img class="yidun_inference__img" draggable="false" />\n            <span class="yidun_inference__border"></span>\n          </div>\n          <% } %>\n        <% } %>\n      </div>\n      <div class="yidun_loadbox" style="border-radius: <%= customStyles.imagePanel.borderRadius %>">\n        <div class="yidun_loadbox__inner">\n          <div class="yidun_loadicon"></div>\n          <span class="yidun_loadtext"><%= langPkg[\'loading\'] %></span>\n        </div>\n      </div>\n      <div class="yidun_top">\n        <% if (feedback.enable) { %>\n        <a class="yidun_feedback" href="<%= feedback.url + \'?captchaId=\' + captchaId %>"  target="_blank"></a>\n        <% } %>\n        <div class="yidun_refresh"></div>\n      </div>\n    </div>\n  </div>\n  <div\n    class="yidun_control"\n    style="height: <%= customStyles.controlBar.height %>; border-radius: <%= customStyles.controlBar.borderRadius %>">\n    <div class="yidun_slide_indicator" style="height: <%= customStyles.controlBar.height %>; border-radius: <%= customStyles.controlBar.borderRadius %>"></div>\n    <div class="yidun_slider" style="width: <%= customStyles.controlBar.height %>; border-radius: <%= customStyles.controlBar.borderRadius %>">\n      <!-- 分支二兼容旧接口 -->\n      <% if (customStyles.icon.slider) { %>\n      <img src="<%= customStyles.icon.slider %>" class="yidun_slider__icon" />\n      <% } else if (customStyles.controlBar.slideIcon || customStyles.controlBar.slideIconSuccess || customStyles.controlBar.slideIconError || customStyles.controlBar.slideIconMoving) { %>\n      <span class="yidun_slider__icon"></span>\n      <img src="<%= customStyles.controlBar.slideIcon %>" class="yidun_slider__icon yidun_slider__icon--img" />\n      <% } else { %>\n      <span class="yidun_slider__icon"></span>\n      <% } %>\n    </div>\n    <div class="yidun_tips" style="line-height: <%= customStyles.controlBar.height %>">\n      <span class="yidun_tips__icon"></span>\n      <span class="yidun_tips__text yidun-fallback__tip"></span>\n      <div class="yidun_tips__answer">\n        <span class="yidun_tips__point"></span>\n        <img class="yidun_tips__img" />\n      </div>\n    </div>\n  </div>\n</div>\n'
    }
    , function(e, t) {
        e.exports = '<div class="yidun_intellisense <%= \'yidun_intellisense--\' + theme %>" style="display: none">\n  <div class="yidun_intelli-control">\n    <div class="yidun_intelli-tips">\n      <div class="yidun_intelli-icon">\n        <% if (icon.intellisenseLogo) { %>\n          <img src="<%= icon.intellisenseLogo%>" class="yidun_logo" />\n        <% } else { %>\n          <span class="yidun_logo"></span>\n        <% } %>\n        <span class="yidun_intelli-loading"></span>\n        <div class="yidun_ball-scale-multiple">\n          <div></div>\n          <div></div>\n          <div></div>\n        </div>\n      </div>\n      <span class="yidun_intelli-text"><%= langPkg.intellisense.normal %></span>\n    </div>\n    <div class="yidun_classic-tips">\n      <span class="yidun_tips__icon"></span>\n      <span class="yidun_tips__text yidun-fallback__tip"></span>\n    </div>\n  </div>\n  <div class="yidun_classic-container">\n    <iframe class="yidun_cover-frame"></iframe>\n    <div class="yidun_classic-wrapper" style="display: <%= classicVisible ? \'block\' : \'none\' %>"></div>\n  </div>\n</div>\n'
    }
    , function(e, t) {
        e.exports = '<div\n  class="<%= \'yidun_popup--\' + theme %> yidun_popup <%= topIsNotAuto ? \'\' : \'yidun_popup--auto\' %> <%= appendTo ? \'yidun_popup--append\' : \'\' %>"\n  style="display: none">\n  <!-- iframe用于遮挡页面中object、embed、select等元素 -->\n  <iframe class="yidun_cover-frame"></iframe>\n  <div class="yidun_popup__mask"></div>\n  <div class="yidun_modal__wrap">\n    <div class="yidun_modal__subwrap">\n      <div \n        class="yidun_modal"\n        style="<% if (topIsNotAuto) { %> top: <%= top %>; <% } %> <% if (widthIsNotAuto) { %> width: <%= width %>; <% } %>">\n        <div\n          class="yidun_modal__title"\n          style="height: <%= popupStyles.capBarHeight %>px;line-height: <%= popupStyles.capBarHeight %>px;">\n          <%= langPkg[\'popupTitle\'] %>\n          <% if (!enableClose) { %>\n            <span\n              class="yidun_modal__close"\n              style="top: <%= (popupStyles.capBarHeight - 24) / 2 %>px">\n              <span class="yidun_icon-close"></span>\n            </span>\n          <% } %>\n        </div>\n        <div\n          class="yidun_modal__body"\n          style="padding: <%= popupStyles.capPadding %>px;">\n          <captcha-core :intellisense="intellisense" :autoWidth="widthIsNotAuto"></captcha-core>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n'
    }
    , function(e, t) {
        function n(e, t) {
            for (var n in t)
                e.setAttribute(n, t[n])
        }
        function i(e, t) {
            e.onload = function() {
                this.onerror = this.onload = null,
                    t(null, e)
            }
                ,
                e.onerror = function() {
                    this.onerror = this.onload = null,
                        t(new Error("Failed to load " + this.src), e)
                }
        }
        function r(e, t) {
            e.onreadystatechange = function() {
                "complete" != this.readyState && "loaded" != this.readyState || (this.onreadystatechange = null,
                    t(null, e))
            }
        }
        e.exports = function(e, t, o) {
            var a = document.head || document.getElementsByTagName("head")[0]
                , l = document.createElement("script");
            "function" == typeof t && (o = t,
                t = {}),
                t = t || {},
                o = o || function() {}
                ,
                l.type = t.type || "text/javascript",
                l.charset = t.charset || "utf8",
                l.async = !("async"in t) || !!t.async,
                l.src = e,
            t.attrs && n(l, t.attrs),
            t.text && (l.text = "" + t.text);
            var s = "onload"in l ? i : r;
            s(l, o),
            l.onload || i(l, o),
                a.appendChild(l)
        }
    }
]);
// 获取data的加密
function getData(splice, token, end) {
   var traceData = [];
   for (var index = 0;index < splice;index ++) {
       traceData.push(_Nnn(token, splice[i] + ""));
   }
    var r = get_cb(_Nnn(token, parseInt(end, 10) / 320 * 100 + ""));
    var data = JSON.stringify({
        d: get_cb(traceData.join(":")),
        m: "",
        p: r,
        ext: get_cb(_Nnn(token, 1 + "," + this.traceData.length))
    });
    console.log(data);
    return data;
}
getData([[4, -2, 768], [11, -5, 948], [13, -2, 975], [19, -4, 787], [21, -10, 639], [23, -8, 627], [25, -6, 209], [29, -6, 628], [33, -4, 947], [37, -2,
    916], [41, -6, 778], [42, -4, 138], [48, -6, 888], [55, -10, 547], [66, -5, 90], [66, -4, 172], [67, -10, 515], [75, -5, 748], [79, -2, 449], [82, -6, 925], [86, -10, 898], [87, -4, 907], [97, -5, 660], [100, -6, 465], [106, -3, 957], [110, -8, 817], [115, -5, 837]], "f3beae4b49eb459687dafd3cd0e6c342", 117)
// app.post('/get_guiji',function (req, res) {
//
//     let data = getData(splice, token, end);
//     res.send(JSON.stringify(data));
// })
//
// app.listen(3001, ()=>console.log('开启滑块轨迹加密服务'));
