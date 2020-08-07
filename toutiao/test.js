debugger;
webpackJsonp([2, 0], [function (t, e, i) {
    "use strict";

    function n(t) {
        return t && t.__esModule ? t : {
            default: t
        }
    }

    i(382);
    var a = i(25)
        , s = n(a)
        , o = i(300)
        , r = n(o);
    i(187);
    var l = i(759)
        , u = n(l);
    s.default.use(r.default),
        new s.default({
            el: "#app",
            template: "<App/>",
            components: {
                App: u.default
            }
        })
}
    , , , , , , , , , , , function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function a(t) {
            if (t != +t)
                return "";
            "object" !== ("undefined" == typeof t ? "undefined" : (0,
                g.default)(t)) && (t = new Date(1e3 * t));
            var e, i = Math.floor((new Date - t) / 1e3), n = Math.floor(i / 31536e3);
            return n >= 1 ? e = "年" : (n = Math.floor(i / 2592e3),
                n >= 1 ? e = "月" : (n = Math.floor(i / 86400),
                    n >= 1 ? e = "天" : (n = Math.floor(i / 3600),
                        n >= 1 ? e = "小时" : (n = Math.floor(i / 60),
                            n >= 1 ? e = "分钟" : (n = i,
                                e = "秒"))))),
                "秒" === e ? "刚刚" : n + e + "前"
        }

        function s(t) {
            if (t != +t)
                return "";
            var e = Math.pow(10, 9)
                , i = Math.pow(10, 8)
                , n = Math.pow(10, 7)
                , a = Math.pow(10, 5)
                , s = Math.pow(10, 4)
                , o = Math.pow(10, 3)
                , r = ""
                , l = void 0;
            return t - e >= 0 ? (r = "亿",
                l = Math.floor(t / i)) : t - i >= 0 ? (r = "亿",
                l = (Number(Math.floor(t / n) / 10).toFixed(1) + "").replace(/\.0$/, "")) : t - a > 0 ? (r = "万",
                l = Math.floor(t / s)) : t - s >= 0 ? (r = "万",
                l = (Number(Math.floor(t / o) / 10).toFixed(1) + "").replace(/\.0$/, "")) : l = t,
            l + r
        }

        function o(t) {
            if (t != +t)
                return "";
            var e = []
                , i = void 0;
            return t / 3600 >= 1 && (i = Math.floor(t / 3600),
                t -= 3600 * i,
                e.push(i)),
                t / 60 >= 1 ? (i = Math.floor(t / 60),
                    t -= 60 * i,
                i < 10 && (i = "0" + i),
                    e.push(i)) : e.push("00"),
            t < 10 && (t = "0" + t),
                e.push(t),
                e.join(":")
        }

        function r(t) {
            for (var e = 0, i = 0, n = t; null != n && n != document.body;)
                e += n.offsetLeft,
                    i += n.offsetTop,
                    n = n.offsetParent;
            return {
                left: e,
                top: i
            }
        }

        function l() {
            return window.innerHeight && window.innerWidth ? {
                winWidth: window.innerWidth,
                winHeight: window.innerHeight
            } : document.documentElement && document.documentElement.clientHeight && document.documentElement.clientWidth ? {
                winWidth: document.documentElement.clientWidth,
                winHeight: document.documentElement.clientHeight
            } : void 0
        }

        function u(t) {
            return t === window ? Math.max(window.pageYOffset || 0, document.documentElement.scrollTop) : t.scrollTop
        }

        function c(t, e) {
            h(t, e) || (t.className = "" === t.className ? e : t.className + " " + e)
        }

        function d(t, e) {
            if (h(t, e)) {
                for (var i = " " + t.className.replace(/[\t\r\n]/g, "") + " "; i.indexOf(" " + e + " ") >= 0;)
                    i = i.replace(" " + e + " ", " ");
                t.className = i.replace(/^\s+|\s+$/g, "")
            }
        }

        function h(t, e) {
            return e = e || "",
            0 !== e.replace(/\s/g, "").length && new RegExp(" " + e + " ").test(" " + t.className + " ")
        }

        function m(t, e, i) {
            var n = document.createElement("script");
            n.src = t,
                n.crossOrigin = "anonymous",
                n.onload = function () {
                    e && e.call()
                }
                ,
                n.onerror = function () {
                    i && i.call()
                }
                ,
                document.body.appendChild(n)
        }

        function _(t) {
            var e = window.onload;
            "function" != typeof window.onload ? window.onload = t : window.onload = function () {
                e(),
                    t()
            }
        }

        function p(t, e) {
            var i = "";
            /^http/.test(t) || (t = location.protocol + "//" + location.host + t);
            for (var n in e)
                i += "&" + n + "=" + encodeURIComponent(e[n]);
            t += t.indexOf("?") > -1 ? t.split("?")[1] ? i : i.slice(1) : "?" + i.slice(1);
            var a = {
                url: t
            }
                , s = window.byted_acrawler && window.byted_acrawler.sign ? window.byted_acrawler.sign(a) : "";
            return s
        }

        var f = i(43)
            , g = n(f)
            , v = {
            setItem: function (t, e) {
                try {
                    localStorage.setItem(t, e)
                } catch (t) {
                    console.log(t)
                }
            },
            getItem: function (t) {
                var e = void 0;
                try {
                    e = localStorage.getItem(t)
                } catch (t) {
                    console.log(t)
                }
                return e
            },
            removeItem: function (t) {
                try {
                    localStorage.removeItem(t)
                } catch (t) {
                    console.log(t)
                }
            }
        };
        t.exports = {
            timeAgo: a,
            numFormat: s,
            durationFormat: o,
            elOffset: r,
            getWinSize: l,
            getScrollTop: u,
            addClass: c,
            removeClass: d,
            hasClass: h,
            loadScript: m,
            addWinLoadEvent: _,
            storage: v,
            calcSignature: p
        }
    }
    , , , , , , function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = i(25)
            , s = n(a);
        e.default = new s.default
    }
    , , , , , , , , , , , , , , , function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = i(234)
            , s = n(a);
        e.default = s.default
    }
    , , , , , , , , , , , , , , , , , function (t, e) {
        "use strict";

        function i(t, e, n) {
            this.$children.forEach(function (a) {
                var s = a.$options.name;
                s === t ? a.$emit.apply(a, [e].concat(n)) : i.apply(a, [t, e].concat([n]))
            })
        }

        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
            e.default = {
                methods: {
                    dispatch: function (t, e, i) {
                        for (var n = this.$parent || this.$root, a = n.$options.name; n && (!a || a !== t);)
                            n = n.$parent,
                            n && (a = n.$options.name);
                        n && n.$emit.apply(n, [e].concat(i))
                    },
                    broadcast: function (t, e, n) {
                        i.call(this, t, e, n)
                    }
                }
            }
    }
    , , , , , , , , function (t, e, i) {
        i(198);
        var n = i(1)(i(137), i(257), null, null);
        t.exports = n.exports
    }
    , function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function a(t) {
            t = t || {},
            t.errorCb || (t.errorCb = function () {
                    window.location.href = "https://sso.toutiao.com/login/"
                }
            ),
                s(t)
        }

        function s(t) {
            t = t || {};
            var e = t.successCb || function () {
            }
                , i = t.errorCb || function () {
            }
                , n = t.url || "/api/pc/user/info/";
            (0,
                r.default)({
                url: n,
                method: "get",
                success: function (t) {
                    var n = t || {};
                    return "error" == n.message ? void i() : window.BASE_DATA && window.BASE_DATA.userInfo && !window.BASE_DATA.userInfo.id ? void i() : void e(n)
                },
                error: function () {
                    i()
                }
            })
        }

        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var o = i(7)
            , r = n(o);
        e.default = a
    }
    , , , , , , , , function (t, e, i) {
        i(192);
        var n = i(1)(i(136), i(251), null, null);
        t.exports = n.exports
    }
    , , , function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function a(t) {
            var e, i = 1, n = 0;
            if (t)
                for (i = 0,
                         e = t.length - 1; e >= 0; e--)
                    n = t.charCodeAt(e),
                        i = (i << 6 & 268435455) + n + (n << 14),
                        n = 266338304 & i,
                        i = 0 != n ? i ^ n >> 21 : i;
            return i
        }

        function s() {
            var t = C;
            if (t)
                return t;
            var e = new Date - 0
                , i = window.location.href
                , n = a(i);
            return t = "" + e + n + Math.random() + Math.random() + Math.random() + Math.random(),
                t = t.replace(/\./g, "").substring(0, 32),
                C = t,
                t
        }

        function o(t, e, i) {
            if (t.addEventListener)
                return t.addEventListener(e, i, !1),
                    i;
            if (t.attachEvent) {
                var n = function () {
                    var e = window.event;
                    e.target = e.srcElement,
                        i.call(t, e)
                };
                return t.attachEvent("on" + e, n),
                    n
            }
        }

        function r(t, e) {
            if (!t)
                return "";
            var i = t.getAttribute(e);
            return i ? i : ""
        }

        function l(t, e, i) {
            t && t.setAttribute(e, i)
        }

        function u(t) {
            var e = t.getBoundingClientRect();
            return e.top + 10 < L.winHeight && e.bottom > 10
        }

        function c() {
            return window.innerHeight && window.innerWidth ? {
                winWidth: window.innerWidth,
                winHeight: window.innerHeight
            } : document.documentElement && document.documentElement.clientHeight && document.documentElement.clientWidth ? {
                winWidth: document.documentElement.clientWidth,
                winHeight: document.documentElement.clientHeight
            } : {
                winWidth: 0,
                winHeight: 0
            }
        }

        function d(t) {
            var e, i = j[t];
            if (e = {
                ad_qihu_id: t,
                article_genre: "ad",
                single_mode: !0,
                ad_label: "广告",
                source_url: i.curl || "",
                image_url: i.img || "",
                title: i.title || "",
                source: i.src || "",
                behot_time: Math.floor((new Date).getTime() / 1e3)
            },
            i.assets && i.assets.length) {
                e.image_list = [];
                for (var n = 0; n < i.assets.length; n++) {
                    var a = i.assets[n];
                    e.image_list.push({
                        url: a.img,
                        source_url: a.curl
                    })
                }
                e.has_gallery = !0,
                    e.single_mode = !1
            }
            return e
        }

        function h(t) {
            var e = [];
            for (var i in t)
                e.push(encodeURIComponent(i) + "=" + encodeURIComponent(t[i]));
            return e.join("&")
        }

        function m(t) {
            if (t = t || {},
                !t.url)
                return !1;
            var e = document.getElementsByTagName("head")[0]
                , i = h(t.data)
                , n = document.createElement("script");
            n.setAttribute("async", ""),
                e.appendChild(n),
                n.src = t.url + "?" + i
        }

        function _(t) {
            m({
                url: E,
                data: {
                    jsonp: "_qihu_jsonpFun_",
                    type: 1,
                    of: 4,
                    newf: 1,
                    showid: I,
                    ref: "toutiao.com",
                    uid: s(),
                    scheme: window.location.protocol.slice(0, -1),
                    impct: t,
                    time: "ts_" + +new Date
                }
            })
        }

        function p() {
            for (var t, e = 0, i = S.length; e < i; e++)
                t = S[e],
                    u(t) ? 1 != r(t, "ad_show") && (l(t, "ad_show", 1),
                        f(r(t, "ad_qihu_id"), M, "show")) : l(t, "ad_show", 0)
        }

        function f(t, e, i, n) {
            var a, s = j[t];
            if (s) {
                a = "show" == i ? s.imptk : s.clktk;
                for (var o = 0, r = a.length; o < r; o++)
                    window._ad_qihu_img_ = new Image,
                        window._ad_qihu_img_.src = a[o];
                var l = e + "_" + i;
                n && (l += "_" + n),
                window.ttAnalysis && window.ttAnalysis.send("event", {
                    ev: l
                })
            }
        }

        function g() {
            return j.length - (k + 1) < 2 && _(5),
                k + 1 < j.length ? d(++k) : null
        }

        function v(t) {
            var e, i = g(), n = !1;
            if (i && t.length) {
                for (var a = 0, s = t.length; a < s; a++)
                    if (t[a].ad_id) {
                        n = !0,
                            t[a] = i;
                        break
                    }
                n || (e = t.length > 4 ? 4 : t.length,
                    t.splice(e, 0, i))
            }
        }

        function w(t, e) {
            S = t,
                M = e,
                p()
        }

        function y(t, e, i, n) {
            f(t, e, i, n)
        }

        var b = i(29)
            , x = n(b)
            , C = 0
            , k = -1
            , j = []
            , S = []
            , M = ""
            , I = "P5AcFE"
            , P = "http://show.g.mediav.com/s"
            , A = "https://show-g.mediav.com/s"
            , E = 0 === window.location.protocol.indexOf("https") ? A : P
            , L = c();
        window._qihu_jsonpFun_ = function (t) {
            t && t.ads && t.ads.length && (j = j.concat(t.ads),
            window.ttAnalysis && window.ttAnalysis.send("event", {
                ev: "feed_qihu_adshow_count",
                ext_id: t.ads.length
            }))
        }
            ,
            o(window, "scroll", (0,
                x.default)(function () {
                p()
            }, 200)),
            t.exports = {
                insertQihuAd: v,
                qhSetAds: w,
                qhSendMsg: y
            }
    }
    , function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = i(235)
            , s = n(a);
        e.default = s.default
    }
    , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = i(223)
            , s = n(a);
        e.default = s.default
    }
    , function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
            e.default = void 0;
        var a = i(160)
            , s = n(a)
            , o = i(161)
            , r = n(o)
            , l = i(281)
            , u = n(l)
            , c = i(7)
            , d = n(c)
            , h = i(331)
            , m = i(126)
            , _ = n(m)
            , p = i(11)
            , f = i(69)
            , g = i(127)
            , v = function () {
            function t(e) {
                (0,
                    r.default)(this, t),
                    this.list = [],
                    this.lock = !1,
                    this._stickItem = [],
                    this._refreshItem = null,
                    this._initList = null,
                    this.params = {
                        category: "__all__",
                        utm_source: "toutiao",
                        widen: 1,
                        tadrequire: !0
                    },
                    this.params.category = this._category = e.category || "__all__",
                "video" === this.params.category && (this.params.new_video_channel = 1),
                    this._url = e.url + "?",
                    this._qhAddSupport = e.qhAdSupport,
                    this._sourceFlags = {},
                    this._frequency = 0,
                    this._initList = this._feedListInit(e.initList || [])
            }

            return (0,
                u.default)(t, [{
                key: "_feedListInit",
                value: function (t) {
                    return this._dataPreHandle(t)
                }
            }, {
                key: "getList",
                value: function () {
                    var t = this.list;
                    return this._refreshItem && (t = [].concat(t.slice(0, this._refreshItem._index), [this._refreshItem], t.slice(this._refreshItem._index))),
                    this._stickItem && (t = this._stickItem.concat(t)),
                    this._initList && (t = this._initList.concat(t)),
                        t
                }
            }, {
                key: "refresh",
                value: function (t, e) {
                    this._getData("refresh", t, e)
                }
            }, {
                key: "loadMore",
                value: function (t, e) {
                    this._getData("loadmore", t, e)
                }
            }, {
                key: "unshiftItem",
                value: function (t, e, i) {
                    t = this._dataPreHandle(t),
                        this.list = t.concat(this.list),
                    e && e(this.getList(), t.length),
                    i && i()
                }
            }, {
                key: "updateTime",
                value: function () {
                    var t = this.getList();
                    return t.forEach(function (t) {
                        t.time_ago = (0,
                            p.timeAgo)(t.behot_time)
                    }),
                        t
                }
            }, {
                key: "dislikeItem",
                value: function (t) {
                    var e = -1
                        , i = function (e) {
                        var i = -1;
                        e = e || [];
                        for (var n = 0, a = e.length; n < a; n++)
                            if (e[n].group_id == t) {
                                i = n;
                                break
                            }
                        return i >= 0 && e.splice(i, 1),
                            i
                    };
                    return e = i(this._initList),
                    e === -1 && (e = i(this._stickItem)),
                    e === -1 && (e = i(this.list),
                    e !== -1 && this._refreshItem && (e >= this._refreshItem._index ? this._refreshItem._index : --this._refreshItem._index)),
                        this.getList()
                }
            }, {
                key: "_getData",
                value: function (t, e, i) {
                    var n = this;
                    if (!this.lock) {
                        this.lock = !0,
                            this._setParams(t);
                        var a = function () {
                            n.lock = !1,
                            i && i()
                        }
                            , o = (0,
                            p.calcSignature)(this.url, this.params);
                        (0,
                            d.default)({
                            url: this.url,
                            data: (0,
                                s.default)({}, this.params, {
                                _signature: o
                            }),
                            success: function (s) {
                                var o = s || {}
                                    , r = o.data || []
                                    , l = r.length
                                    , u = o.next && o.next.max_behot_time;
                                "success" === o.message && l && (n._qihuAdInsert(r),
                                    r = n._dataPreHandle(r),
                                    "refresh" === t ? (n._refreshItem = {
                                        refresh_mode: !0,
                                        behot_time: u,
                                        time_ago: (0,
                                            p.timeAgo)(u),
                                        _index: r.length
                                    },
                                        n.list = r.concat(n.list)) : n.list = n.list.concat(r),
                                e && e(n.getList(), l)),
                                n._handleCaptcha(s, {
                                    successCb: function () {
                                        n.lock = !1,
                                            n._getData(t, e, i)
                                    },
                                    closeCb: function () {
                                        a()
                                    }
                                }) || a()
                            },
                            error: function () {
                                a()
                            }
                        })
                    }
                }
            }, {
                key: "_qihuAdInsert",
                value: function (t) {
                    this._qhAddSupport && (0 !== this._frequency && this._frequency % 2 === 0 || (0,
                        f.insertQihuAd)(t),
                        this.params.tadrequire = !this.params.tadrequire,
                        this._frequency++)
                }
            }, {
                key: "_dataPreHandle",
                value: function (t) {
                    var e = this;
                    if (!Array.isArray(t) || 0 === t.length)
                        return [];
                    var i = []
                        , n = this._stickItem || [];
                    return t[t.length - 1].honey && t.pop(),
                        t.forEach(function (t, n) {
                            e._dataChange(t),
                            t.is_stick && i.push(n)
                        }),
                    i.length > 0 && (i.reverse().forEach(function (e) {
                        var i = t.splice(e, 1)[0];
                        n.unshift(i)
                    }),
                        n = (0,
                            h.unionWith)(n, function (t, e) {
                            return t.group_id === e.group_id
                        })),
                        this._stickItem = n,
                    window.ttAnalysis && window.ttAnalysis.send("event", {
                        ev: "article_show_count",
                        ext_id: t.length
                    }),
                        t
                }
            }, {
                key: "_dataChange",
                value: function (t) {
                    t.time_ago = (0,
                        p.timeAgo)(t.behot_time),
                        t.comments_count = (0,
                            p.numFormat)(t.comments_count),
                    "__all__" === this._category && this._tagHandle(t),
                        this._mediaHandle(t)
                }
            }, {
                key: "_mediaHandle",
                value: function (t) {
                    if (!t.media_url) {
                        var e = t.source && t.source.replace(/\s*/gi, "");
                        t.source_tag = e ? e.slice(0, 1) : "",
                        void 0 === this._sourceFlags[e] && (this._sourceFlags[e] = Math.floor(6 * Math.random())),
                            t.avatar_style = "avatar-style-" + this._sourceFlags[e]
                    }
                }
            }, {
                key: "_tagHandle",
                value: function (t) {
                    var e = {
                        "热点": "hot",
                        "视频": "video",
                        "图片": "image",
                        "社会": "society",
                        "汽车": "car",
                        "体育": "sport",
                        "财经": "finance",
                        "科技": "technology",
                        "娱乐": "entertainment"
                    };
                    t.chinese_tag && (t.tag_style = "tag-style-" + (e[t.chinese_tag] || "other"))
                }
            }, {
                key: "_setParams",
                value: function (t) {
                    var e = (0,
                        _.default)()
                        , i = 0;
                    this.url = this._url,
                        "refresh" === t ? (i = this.list.length > 0 ? this.list[0].behot_time : 0,
                            this.url += "min_behot_time=" + i) : (i = this.list.length > 0 ? this.list[this.list.length - 1].behot_time : 0,
                            this.url += "max_behot_time=" + i),
                        (0,
                            s.default)(this.params, {
                            as: e.as,
                            cp: e.cp
                        })
                }
            }, {
                key: "_handleCaptcha",
                value: function (t, e) {
                    return !(!t || !t.decision) && ((0,
                        g.renderCaptcha)({
                        challengeCode: t.decision.challenge_code,
                        successCb: function () {
                            e.successCb && e.successCb()
                        },
                        closeCb: function () {
                            e.closeCb && e.closeCb()
                        }
                    }),
                        !0)
                }
            }]),
                t
        }();
        e.default = v
    }
    , function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function a(t) {
            var e, i = new RegExp("(^| )" + t + "=([^;]*)(;|$)");
            return (e = document.cookie.match(i)) ? unescape(e[2]) : null
        }

        function s(t, e, i) {
            if (t.addEventListener)
                return t.addEventListener(e, i, !1),
                    i;
            if (t.attachEvent) {
                var n = function () {
                    var e = window.event;
                    e.target = e.srcElement,
                        i.call(t, e)
                };
                return t.attachEvent("on" + e, n),
                    n
            }
        }

        function o(t, e) {
            if (!t)
                return "";
            var i = t.getAttribute(e);
            return i ? i : ""
        }

        function r(t, e, i) {
            t && t.setAttribute(e, i)
        }

        function l() {
            return window.innerHeight && window.innerWidth ? {
                winWidth: window.innerWidth,
                winHeight: window.innerHeight
            } : document.documentElement && document.documentElement.clientHeight && document.documentElement.clientWidth ? {
                winWidth: document.documentElement.clientWidth,
                winHeight: document.documentElement.clientHeight
            } : void 0
        }

        function u(t) {
            var e = t.getBoundingClientRect();
            return e.top + 16 < y.winHeight && e.bottom > 16
        }

        function c(t) {
            var e = XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP")
                , i = (t.type || "get").toUpperCase()
                , n = t.url
                , a = t.data;
            if (n) {
                var s = [];
                for (var o in a)
                    s.push(o + "=" + a[o]);
                "GET" === i ? (n = n + "?" + s.join("&") + "&_=" + Math.random(),
                    e.open(i, n, !0),
                    e.send()) : (e.open(i, n, !0),
                    e.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
                    e.setRequestHeader("Content-type", "application/x-www-form-urlencoded"),
                    e.send(s.join("&"))),
                    e.onload = function () {
                        (e.status >= 200 && e.status < 300 || 304 == e.status) && t.success && t.success.call(e, e.responseText)
                    }
            }
        }

        function d(t) {
            c({
                url: v,
                type: "POST",
                data: {
                    value: t.value,
                    tag: "embeded_ad",
                    label: t.label,
                    is_ad_event: "1",
                    log_extra: t.extra,
                    category: "web",
                    utm_source: a("utm_source"),
                    csrfmiddlewaretoken: a("csrftoken")
                },
                success: function (t) {
                }
            }),
            window.ttAnalysis && window.ttAnalysis.send("event", {
                ev: "feed_ad_" + t.label
            })
        }

        function h(t) {
            var e = new Image;
            e.src = t
        }

        function m() {
            for (var t, e = 0, i = w.length; e < i; e++) {
                var n = w[e];
                u(n) ? 1 != o(n, "ad_show") && (r(n, "ad_show", 1),
                    t = {
                        value: o(n, "ad_id"),
                        extra: o(n, "ad_extra"),
                        label: "show",
                        track: o(n, "ad_track")
                    },
                t.track && h(t.track),
                    d(t)) : r(n, "ad_show", 0)
            }
        }

        function _(t) {
            w = t,
                m()
        }

        function p(t) {
            d(t)
        }

        var f = i(29)
            , g = n(f)
            , v = "/action_log/"
            , w = []
            , y = l();
        s(window, "scroll", (0,
            g.default)(function () {
            m()
        }, 150)),
            s(window, "resize", (0,
                g.default)(function () {
                y = l()
            }, 150)),
            t.exports = {
                ttSetAds: _,
                ttSendMsg: p
            }
    }
    , function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = i(230)
            , s = n(a);
        e.default = s.default
    }
    , function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = i(231)
            , s = n(a);
        e.default = s.default
    }
    , function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = i(232)
            , s = n(a);
        e.default = s.default
    }
    , function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = i(233)
            , s = n(a);
        e.default = s.default
    }
    , function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function a(t) {
            this.fileQueue = [],
                this.isUploading = !1,
                this.options = {
                    autoUpload: !1,
                    filters: [],
                    formdata: {},
                    headers: {},
                    url: "",
                    method: "POST",
                    responseType: "json",
                    withCredentials: !1,
                    progressCbk: null,
                    completeCbk: null,
                    errorCbk: null,
                    useChunk: !0,
                    chunkSize: 10485760
                },
                o.default.extend(this.options, t)
        }

        var s = i(377)
            , o = n(s)
            , r = i(372)
            , l = n(r);
        a.prototype.getAll = function () {
            return this.fileQueue
        }
            ,
            a.prototype.clearAll = function () {
                this.fileQueue = []
            }
            ,
            a.prototype.addToQueue = function (t) {
                for (var t = o.default.isFileList(t) ? o.default.toArray(t) : [t], e = 0, i = t.length; e < i; e++) {
                    var n = t[e]
                        , a = new l.default(this, n, {
                        useChunk: this.options.useChunk,
                        chunkSize: this.options.chunkSize
                    });
                    if (!this._filePreHandle(a, this.options.filters))
                        return !1;
                    this.fileQueue.push(a)
                }
                return !0
            }
            ,
            a.prototype.uploadAll = function () {
                if (this.fileQueue.length) {
                    var t = this._getNotUploadedItems();
                    t.forEach(function (t) {
                        t.onPrepareUpload()
                    }),
                    t.length && t[0].upload()
                }
            }
            ,
            a.prototype.uploadItem = function (t) {
                if (!this.isUploading) {
                    var e = o.default.isHTML5() ? "_xhrPost" : "_iframePost"
                        , t = t || this._getNotUploadedItems()[0];
                    t && (this.isUploading = !0,
                        t.onPrepareUpload(),
                        this[e](t))
                }
            }
            ,
            a.prototype.abortItem = function (t) {
                var e = o.default.isHTML5() ? "_xhr" : "_form";
                t && 2 === t.status && t[e].abort()
            }
            ,
            a.prototype.uploadContinue = function (t) {
                o.default.isOnline() && this.uploadItem(t)
            }
            ,
            a.prototype._onCompleteUpload = function (t) {
                if (this.isUploading = !1,
                t.useChunk && 2 === t.status)
                    return void this._xhrPost(t);
                this.options.completeCbk && this.options.completeCbk(t),
                5 === t.status && this.options.errorCbk && this.options.errorCbk(t);
                var e = this._getReadyItems()[0];
                o.default.isObject(e) && e.upload()
            }
            ,
            a.prototype._onAbortUpload = function (t) {
                t.onAbort()
            }
            ,
            a.prototype._onSuccessUpload = function (t) {
                t.onSuccess()
            }
            ,
            a.prototype._onErrorUpload = function (t) {
                t.onError()
            }
            ,
            a.prototype._filePreHandle = function (t, e) {
                if (!e.length)
                    return !0;
                for (var i = 0, n = e.length; i < n; i++) {
                    var a = e[i];
                    if (!a.fn.call(this, t))
                        return a.fail && a.fail.call(this),
                            !1
                }
                return !0
            }
            ,
            a.prototype._getNotUploadedItems = function () {
                return this.fileQueue.filter(function (t) {
                    return 0 === t.status
                })
            }
            ,
            a.prototype._getReadyItems = function () {
                return this.fileQueue.filter(function (t) {
                    return 1 === t.status
                })
            }
            ,
            a.prototype._parseHeaders = function (t) {
                var e = {};
                return o.default.isObject(t) ? null : (t.split("\n").forEach(function (t) {
                    var i = t.indexOf(":");
                    if (i > -1) {
                        var n = t.slice(0, i).trim()
                            , a = t.slice(i + 1).trim();
                        e[n] = e[n] ? e[n] + "," + a : a
                    }
                }),
                    e)
            }
            ,
            a.prototype._xhrPost = function (t) {
                var e = this
                    , i = t._xhr = new XMLHttpRequest
                    , n = new FormData;
                if (t.onBeforeUpload(),
                    !o.default.isEmptyObject(this.options.formData))
                    for (var a in this.options.formData)
                        n.append(a, this.options.formData[a]);
                if (i.open(this.options.method, this.options.url, !0),
                    i.responseType = this.options.responseType,
                    i.withCredentials = this.options.withCredentials,
                    !o.default.isEmptyObject(this.options.headers))
                    for (var a in this.options.headers)
                        i.setRequestHeader(a, this.options.headers[a]);
                if (t.useChunk) {
                    var s = t.getChunkFile();
                    n.append("file", s.file, t.name),
                        i.setRequestHeader("Content-Range", "bytes " + s.start + "-" + (s.end - 1) + "/" + t.size)
                } else
                    n.append("file", t.file, t.name),
                        i.setRequestHeader("Content-Range", "bytes 0-" + (t.size - 1) + "/" + t.size);
                i.upload.onprogress = function (i) {
                    var n = i.lengthComputable ? i.loaded : 0
                        , a = i.lengthComputable ? i.total : -1;
                    t.onProgress(n, a),
                    e.options.progressCbk && e.options.progressCbk(t)
                }
                    ,
                    i.onload = function (n) {
                        var a = i.response
                            , s = 200 == i.status ? "Success" : "Error"
                            , o = "_on" + s + "Upload";
                        "Success" === s && (t.responseItem = a),
                            e[o](t),
                            e._onCompleteUpload(t)
                    }
                    ,
                    i.onerror = function (i) {
                        e._onErrorUpload(t),
                            e._onCompleteUpload(t)
                    }
                    ,
                    i.onabort = function (i) {
                        e._onAbortUpload(t),
                            e._onCompleteUpload(t)
                    }
                    ,
                    i.send(n)
            }
            ,
            a.prototype._iframePost = function () {
            }
            ,
            window.FileUpload = a,
            t.exports = a
    }
    , function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = i(236)
            , s = n(a);
        e.default = s.default
    }
    , function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = i(237)
            , s = n(a);
        e.default = s.default
    }
    , function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function a() {
            debugger;
            var t = Math.floor((new Date).getTime() / 1e3)
                , e = t.toString(16).toUpperCase()
                , i = (0,
                o.default)(t).toString().toUpperCase();
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

        var s = i(128)
            , o = n(s);
        t.exports = a
    }
    , function (t, e) {
        "use strict";

        function i() {
            var t = document.createElement("div");
            return t.id = "captcha-container",
                document.body.appendChild(t),
                t
        }

        function n(t) {
            return window.renderCaptcha && "function" == typeof window.renderCaptcha ? (a || (a = i()),
                void window.renderCaptcha({
                    ele: "captcha-container",
                    aid: 24,
                    app_name: "toutiao-web",
                    iid: "0",
                    did: "0",
                    challenge_code: t.challengeCode,
                    showMode: t.showMode || "mask",
                    successCb: function (e) {
                        t.successCb && t.successCb(e)
                    },
                    errorCb: function (e) {
                        t.errorCb && t.errorCb(e)
                    },
                    closeCb: function () {
                        t.closeCb && t.closeCb()
                    }
                })) : void console.error("Have no function: window.renderCaptcha")
        }

        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
            e.renderCaptcha = n;
        var a = null
    }
    , function (t, e, i) {
        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        var a, s = i(43);
        n(s);
        !function (n) {
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

            a = function () {
                return C
            }
                .call(e, i, e, t),
                !(void 0 !== a && (t.exports = a))
        }(void 0)
    }
    , function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = i(238)
            , s = n(a);
        e.default = s.default
    }
    , function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = i(239)
            , s = n(a);
        e.default = s.default
    }
    , function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = i(240)
            , s = n(a);
        e.default = s.default
    }
    , function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = i(241)
            , s = n(a);
        e.default = s.default
    }
    , function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = i(242)
            , s = n(a);
        e.default = s.default
    }
    , function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = i(245)
            , s = n(a);
        e.default = s.default
    }
    , function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = i(25)
            , s = n(a)
            , o = i(29)
            , r = n(o)
            , l = i(11);
        e.default = {
            name: "Channel",
            props: {
                header: Object,
                channels: {
                    type: Object,
                    required: !0
                },
                isSuspended: {
                    type: Boolean,
                    default: !1
                },
                scrollHandler: {
                    type: Function,
                    default: function () {
                        return (0,
                            l.getScrollTop)(window) > 40
                    }
                }
            },
            data: function () {
                return {
                    isFixed: !1,
                    throttledScrollHandler: new Function
                }
            },
            created: function () {
                var t = this;
                this.isFixed = this.isSuspended,
                    this.channels.items.map(function (t) {
                        return t.url || (t.url = "javascript:void(0);"),
                            t
                    }),
                this.channels.more && this.channels.more.map(function (t) {
                    return t.url || (t.url = "javascript:void(0);"),
                        t
                }),
                    this.throttledScrollHandler = (0,
                        r.default)(function () {
                        t.isFixed = t.scrollHandler()
                    }, 80),
                    window.addEventListener("scroll", this.throttledScrollHandler, !1)
            },
            mounted: function () {
                var t = this;
                this.channels.more && this.channels.more.forEach(function (e, i) {
                    if (e.url === t.channels.tag) {
                        var n = t.channels.items.length
                            , a = t.channels.items[n - 1];
                        s.default.set(t.channels.items, n - 1, e),
                            s.default.set(t.channels.more, i, a)
                    }
                })
            },
            destroyed: function () {
                window.removeEventListener("scroll", this.throttledScrollHandler)
            },
            methods: {
                itemClick: function (t) {
                    this.$emit("channel-item-click", t)
                }
            }
        }
    }
    , function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = i(50)
            , s = n(a)
            , o = i(7)
            , r = n(o)
            , l = i(49)
            , u = n(l)
            , c = i(58)
            , d = n(c);
        e.default = {
            name: "Dislike",
            mixins: [u.default],
            props: {
                group_id: {
                    type: String,
                    default: ""
                },
                item_id: {
                    type: String,
                    default: ""
                },
                ad_id: {
                    type: String,
                    default: ""
                },
                getUserInfoUrl: {
                    type: String,
                    default: "/user/info/"
                },
                dispatchTarget: {
                    type: String,
                    default: "FeedBox"
                }
            },
            components: {},
            methods: {
                dislikeClick: function () {
                    var t = this;
                    (0,
                        d.default)({
                        successCb: function () {
                            t._disLike()
                        },
                        url: this.getUserInfoUrl
                    })
                },
                _disLike: function () {
                    var t = this
                        , e = this._getParams();
                    (0,
                        r.default)({
                        url: "/user_data/batch_action/?aid=24",
                        method: "post",
                        headers: {
                            "Content-Type": "application/json; charset=utf-8"
                        },
                        data: e,
                        success: function (e) {
                            var i = e || {}
                                , n = "不好意思，网络错误";
                            "success" == i.message && (t.dispatch(t.dispatchTarget, "feed-item-dislike", t.group_id),
                                n = "将减少推荐类似内容"),
                                t.$Toast({
                                    message: n,
                                    position: "middle"
                                })
                        }
                    })
                },
                _getParams: function () {
                    var t = {
                        actions: [{
                            action: "dislike",
                            aggr_type: 1,
                            id: this.group_id,
                            item_id: this.item_id,
                            ad_extra: {},
                            type: 1,
                            timestamp: Math.floor(+new Date / 1e3)
                        }]
                    };
                    if (this.ad_id)
                        for (var e = document.querySelectorAll(".feed-infinite-wrapper .J_ad") || [], i = 0, n = e.length; i < n; i++) {
                            var a = e[i]
                                , o = a.getAttribute("ad_id");
                            if (o === this.ad_id) {
                                t.actions[0].type = 3,
                                    t.actions[0].ad_id = o,
                                    t.actions[0].ad_extra.log_extra = a.getAttribute("ad_extra");
                                break
                            }
                        }
                    return t = (0,
                        s.default)(t)
                }
            }
        }
    }
    , function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = i(66)
            , s = n(a);
        e.default = {
            props: {
                item: {
                    type: Object,
                    default: {}
                },
                dislikeUrl: {
                    type: String,
                    default: "/api/dislike/"
                },
                getUserInfoUrl: {
                    type: String,
                    default: "/user/info/"
                }
            },
            computed: {},
            components: {
                Dislike: s.default
            }
        }
    }
    , function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = i(29)
            , s = n(a)
            , o = i(11)
            , r = i(49)
            , l = n(r);
        e.default = {
            name: "MsgAlert",
            mixins: [l.default],
            props: {
                category: String,
                suspensionTip: {
                    type: Boolean,
                    default: !0
                }
            },
            data: function () {
                return {
                    msgHidden: !0,
                    msgShow: !1,
                    msgFixed: !1,
                    articleCount: -1
                }
            },
            mounted: function () {
                var t = this;
                this.waitTime = 36e4,
                    this.$on("feed-refresh-count", function (t) {
                        var e = this;
                        this.msgTimer && clearTimeout(this.msgTimer),
                            this.articleCount = t,
                            this.msgHidden = !1,
                            this.msgTimer = setTimeout(function () {
                                e.msgHidden = !0
                            }, 2300)
                    }),
                    this.$on("feed-refresh", function () {
                        this.msgShow = !1
                    }),
                this.suspensionTip && (this.msgOffsetTop = 0,
                    window.addEventListener("scroll", (0,
                        s.default)(function () {
                        t._stateChange()
                    }, 50), !1),
                    this._timerUpdate())
            },
            methods: {
                closeMsgClick: function () {
                    this.msgShow = !1,
                        this._timerUpdate()
                },
                feedRefreshClick: function () {
                    this.msgShow = !1,
                        this._timerUpdate(),
                        this.dispatch("FeedBox", "feed-refresh")
                },
                _timerUpdate: function () {
                    var t = this;
                    this.refreshTimer && (clearTimeout(this.refreshTimer),
                        this.refreshTimer = null),
                        this.refreshTimer = setTimeout(function () {
                            t.msgShow = !0,
                                t.msgFixed = !1,
                                t.$nextTick(function () {
                                    t._stateChange()
                                })
                        }, this.waitTime)
                },
                _stateChange: function () {
                    if (this.msgShow) {
                        var t = (0,
                            o.elOffset)(this.$refs.msgAlertPlace).top
                            , e = (0,
                            o.getScrollTop)(window);
                        this.msgOffsetTop < t && (this.msgOffsetTop = t),
                            this.msgFixed = e > this.msgOffsetTop
                    }
                }
            }
        }
    }
    , function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = i(57)
            , s = n(a);
        e.default = {
            props: {
                item: {
                    type: Object,
                    default: {}
                }
            },
            components: {
                FooterBar: s.default
            }
        }
    }
    , function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = i(57)
            , s = n(a);
        e.default = {
            props: {
                item: {
                    type: Object,
                    default: {}
                },
                index: {
                    type: Number
                }
            },
            computed: {
                xuexi: function () {
                    return this.item.is_stick && 0 === this.index
                }
            },
            components: {
                FooterBar: s.default
            }
        }
    }
    , function (t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
            e.default = {
                props: {
                    item: {
                        type: Object,
                        default: {}
                    }
                },
                methods: {}
            }
    }
    , function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = i(57)
            , s = n(a);
        e.default = {
            props: {
                item: {
                    type: Object,
                    default: {}
                },
                dislikeUrl: {
                    type: String,
                    default: "/api/dislike/"
                },
                getUserInfoUrl: {
                    type: String,
                    default: "/user/info/"
                }
            },
            components: {
                FooterBar: s.default
            }
        }
    }
    , function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = i(66)
            , s = n(a)
            , o = i(11);
        e.default = {
            props: {
                item: {
                    type: Object,
                    default: {}
                }
            },
            computed: {
                styles: function () {
                    var t = {};
                    return this.item.ugc_data.ugc_images.length && (t.height = "179px"),
                        t
                }
            },
            components: {
                Dislike: s.default
            },
            filters: {
                formatCount: function (t) {
                    return t ? t = (0,
                        o.numFormat)(t) : "0"
                }
            }
        }
    }
    , function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = i(7)
            , s = n(a)
            , o = i(46)
            , r = n(o)
            , l = {
            success: "已提交,感谢您的意见",
            fail: "提交错误,请稍后重试",
            mail_error: "请输入正确的联系方式",
            content_error: "请输入您的意见",
            content_length_error: "意见长度超出限制"
        };
        e.default = {
            name: "Feedback",
            props: {
                show: {
                    type: Boolean,
                    default: !1
                }
            },
            data: function () {
                return {
                    feedbackDialogVisible: !1,
                    feedbackEmail: "",
                    feedbackContent: "",
                    isSubmitDisabled: !1
                }
            },
            methods: {
                submit: function () {
                    var t = this
                        , e = t.feedbackEmail
                        , i = t.feedbackContent;
                    return e.length < 5 ? (t.$Toast(l.mail_error),
                        void document.querySelector(".feedback .email").focus()) : "" === i.trim() ? (t.$Toast(l.content_error),
                        void document.querySelector(".feedback .text").focus()) : (t.isSubmitDisabled = !0,
                        void (0,
                            s.default)({
                            headers: {
                                "X-CSRFToken": r.default.get("csrftoken")
                            },
                            url: "/post_message/",
                            method: "post",
                            data: {
                                appkey: "web",
                                uuid: e,
                                content: "[" + window.location.host + "]" + i
                            },
                            success: function (e) {
                                e && "success" === e.message ? (t.feedbackEmail = "",
                                    t.feedbackContent = "",
                                    t.feedbackDialogVisible = !1) : t.$Toast(l.fail)
                            },
                            error: function () {
                                t.$Toast(l.fail)
                            },
                            complete: function () {
                                t.isSubmitDisabled = !1
                            }
                        }))
                }
            },
            created: function () {
                this.feedbackDialogVisible = this.show
            }
        }
    }
    , function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = i(125)
            , s = n(a)
            , o = i(70)
            , r = n(o)
            , l = i(119)
            , u = n(l);
        e.default = {
            name: "TtHeader",
            data: function () {
                return {
                    isShowFeedback: !1,
                    logoImg: i(213),
                    navItem: [{
                        name: "推荐",
                        url: "/",
                        en: "recommend"
                    }, {
                        name: "热点",
                        url: "/ch/news_hot/",
                        en: "hot"
                    }, {
                        name: "图片",
                        url: "/ch/news_image/",
                        en: "image"
                    }, {
                        name: "娱乐",
                        url: "/ch/news_entertainment/",
                        en: "entertainment"
                    }, {
                        name: "科技",
                        url: "/ch/news_tech/",
                        en: "tech"
                    }, {
                        name: "汽车",
                        url: "/ch/news_car/",
                        en: "car"
                    }, {
                        name: "体育",
                        url: "/ch/news_sports/",
                        en: "sports"
                    }, {
                        name: "财经",
                        url: "/ch/news_finance/",
                        en: "finance"
                    }, {
                        name: "军事",
                        url: "/ch/news_military/",
                        en: "military"
                    }, {
                        name: "国际",
                        url: "/ch/news_world/",
                        en: "world"
                    }, {
                        name: "时尚",
                        url: "/ch/news_fashion/",
                        en: "fashion"
                    }, {
                        name: "旅游",
                        url: "/ch/news_travel/",
                        en: "travel"
                    }],
                    navMore: [{
                        name: "探索",
                        url: "/ch/news_discovery/",
                        en: "discovery"
                    }, {
                        name: "育儿",
                        url: "/ch/news_baby/",
                        en: "baby"
                    }, {
                        name: "养生",
                        url: "/ch/news_regimen/",
                        en: "regimen"
                    }, {
                        name: "美文",
                        url: "/ch/news_essay/",
                        en: "essay"
                    }, {
                        name: "游戏",
                        url: "/ch/news_game/",
                        en: "game"
                    }, {
                        name: "历史",
                        url: "/ch/news_history/",
                        en: "history"
                    }, {
                        name: "美食",
                        url: "/ch/news_food/",
                        en: "food"
                    }]
                }
            },
            props: {
                showUser: {
                    type: Boolean,
                    default: !0
                },
                options: {
                    type: Object,
                    default: function () {
                        return {}
                    }
                },
                middlebarWidth: {
                    type: Number,
                    default: 1120
                }
            },
            methods: {
                closeFeedback: function () {
                    this.isShowFeedback = !1
                },
                showFeedback: function () {
                    this.isShowFeedback = !0
                },
                jumpToLogin: function () {
                    setTimeout(function () {
                        location.href = "https://sso.toutiao.com/login/"
                    }, 250)
                }
            },
            components: {
                WeatherBox: s.default,
                SearchBox: r.default,
                Feedback: u.default
            }
        }
    }
    , function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = i(7)
            , s = n(a)
            , o = i(32)
            , r = n(o);
        e.default = {
            name: "HotImages",
            data: function () {
                return {
                    list: []
                }
            },
            mounted: function () {
                var t = this;
                (0,
                    s.default)({
                    url: this.getHotImagesUrl,
                    data: {
                        widen: 1
                    },
                    method: "get",
                    success: function (e) {
                        e.data && (t.list = e.data)
                    }
                })
            },
            props: {
                count: {
                    type: Number,
                    default: 4
                },
                title: {
                    type: String,
                    default: "精彩图片"
                },
                getHotImagesUrl: {
                    type: String,
                    default: "/api/pc/hot_gallery/"
                }
            },
            computed: {
                listCount: function () {
                    var t = this.list.slice(0, this.count);
                    return t.length > 2 && t.splice(2, 0, {}),
                    t.length > 6 && t.splice(6, 0, {}),
                        t
                }
            },
            components: {
                Pane: r.default
            }
        }
    }
    , function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = i(7)
            , s = n(a)
            , o = i(11)
            , r = i(32)
            , l = n(r);
        e.default = {
            name: "HotVideos",
            data: function () {
                return {
                    list: []
                }
            },
            mounted: function () {
                var t = this;
                (0,
                    s.default)({
                    url: this.getHotVideosUrl,
                    data: {
                        widen: 1
                    },
                    method: "get",
                    success: function (e) {
                        e.data && (t.list = e.data)
                    }
                })
            },
            props: {
                count: {
                    type: Number,
                    default: 4
                },
                title: {
                    type: String,
                    default: "热门视频"
                },
                getHotVideosUrl: {
                    type: String,
                    default: "/api/pc/hot_video/"
                }
            },
            computed: {
                listCount: function () {
                    var t = this.list.slice(0, this.count);
                    return t.length > 2 && t.splice(3, 0, {}),
                        t
                }
            },
            filters: {
                formatCount: function (t) {
                    return t ? t = (0,
                        o.numFormat)(t) : "0"
                }
            },
            components: {
                Pane: l.default
            }
        }
    }
    , function (t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
            e.default = {
                name: "Pane",
                props: {
                    title: {
                        type: String
                    }
                }
            }
    }
    , function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = i(7)
            , s = n(a)
            , o = i(25)
            , r = n(o);
        r.default.component("sortable-list", {
            functional: !0,
            render: function (t, e) {
                var i = e.props.item
                    , n = e.props.index + 1;
                return t("li", e.data, [t("i", {
                    attrs: {
                        class: "search-no search-no-" + n
                    }
                }, [n]), t("span", {
                    attrs: {
                        class: "search-text"
                    }
                }, [i.value])])
            },
            props: {
                item: {
                    type: Object,
                    required: !0
                },
                index: Number
            }
        }),
            e.default = {
                name: "SearchBox",
                props: {
                    searchUrl: {
                        type: String,
                        default: "//www.toutiao.com/search/?keyword="
                    },
                    getSearchSuggestionUrl: {
                        type: String,
                        default: "/search/sug/"
                    },
                    getHotSearchUrl: {
                        type: String,
                        default: "/search/suggest/initial_page/"
                    }
                },
                data: function () {
                    return {
                        wordslist: [],
                        searchWord: "",
                        timeout: null,
                        placeHolder: "搜索站内资讯、视频或用户",
                        resultType: "sortable-list",
                        presetWord: ""
                    }
                },
                methods: {
                    querySearchAsync: function (t, e) {
                        var i = [];
                        t ? (this.resultType = "",
                            (0,
                                s.default)({
                                url: this.getSearchSuggestionUrl,
                                data: {
                                    keyword: t
                                },
                                method: "GET",
                                success: function (t) {
                                    var n = t && t.data ? t.data : [];
                                    n.forEach(function (t) {
                                        i.push({
                                            value: t
                                        })
                                    }),
                                        e(i)
                                }
                            })) : (this.resultType = "sortable-list",
                            i = this.wordslist,
                            e(i))
                    },
                    toSearchPage: function (t) {
                        t && window.open(this.searchUrl + t)
                    },
                    handleIconClick: function () {
                        this.toSearchPage(this.searchWord)
                    },
                    handleSelect: function (t) {
                        this.toSearchPage(t.value),
                        t.index && (window._czc && _czc.push(["_trackEvent", "search", "hotword" + t.index, "click"]),
                        window.ttAnalysis && window.ttAnalysis.send("event", {
                            ev: "search_hotword" + t.index + "_click"
                        }))
                    },
                    handleEnterKeydown: function () {
                        this.toSearchPage(this.searchWord)
                    },
                    handleFocus: function () {
                        this.placeHolder = ""
                    },
                    handleBlur: function () {
                    }
                },
                mounted: function () {
                }
            }
    }
    , function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = i(11)
            , s = i(29)
            , o = n(s);
        e.default = {
            name: "Toolbar",
            props: {
                showHome: {
                    type: Boolean,
                    default: !1
                },
                showReport: {
                    type: Boolean,
                    default: !1
                },
                showRefresh: {
                    type: Boolean,
                    default: !1
                },
                showTop: {
                    type: Boolean,
                    default: !0
                },
                refreshMethod: Function
            },
            data: function () {
                return {
                    hasScrolled: !1
                }
            },
            computed: {
                reallyShowTop: function () {
                    return this.showTop && this.hasScrolled
                }
            },
            mounted: function () {
                var t = this
                    , e = 0;
                window.addEventListener("scroll", (0,
                    o.default)(function () {
                    e = (0,
                        a.getScrollTop)(window),
                        e > 100 ? t.hasScrolled = !0 : t.hasScrolled = !1
                }, 500), !1)
            },
            methods: {
                scrollToTop: function () {
                    window.scrollTo(0, 0)
                },
                refresh: function () {
                    this.refreshMethod && this.refreshMethod()
                }
            }
        }
    }
    , function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function a(t) {
            return t >= 0 && t <= 100 ? "#5cbf4c" : t >= 101 && t <= 200 ? "#ff9f2d" : t >= 201 ? "#ff5f5f" : "rgba(214, 117, 3, 0.8)"
        }

        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = i(50)
            , o = n(s)
            , r = i(7)
            , l = n(r)
            , u = i(46)
            , c = n(u);
        e.default = {
            name: "WeatherBox",
            props: {
                weatherCityUrl: {
                    type: String,
                    default: "/stream/widget/local_weather/city/"
                },
                weatherDataUrl: {
                    type: String,
                    default: "/stream/widget/local_weather/data/"
                }
            },
            data: function () {
                return {
                    provinces: [],
                    citys: [],
                    rs: null,
                    province: "北京",
                    city: "北京",
                    weathercity: "",
                    weather: {},
                    iconClass: {},
                    showWeather: !0,
                    showPopup: !1,
                    selecting: !1,
                    aqiColor: ""
                }
            },
            mounted: function () {
                var t = this;
                if (window.localStorage) {
                    var e = localStorage.getItem("weather_city");
                    e && (e = JSON.parse(e),
                        this.city = e.city,
                        this.province = e.province)
                }
                this.onSubmitClick(),
                    (0,
                        l.default)({
                        url: this.weatherCityUrl,
                        method: "get",
                        success: function (i) {
                            var n = !(!i || !i.data) && i.data
                                , a = []
                                , s = [];
                            if (n) {
                                for (var o in n) {
                                    a.push({
                                        value: o,
                                        label: o
                                    }),
                                        s = n[o],
                                        n[o] = [];
                                    for (var r in s)
                                        n[o].push({
                                            value: r,
                                            label: r
                                        })
                                }
                                t.provinces = a,
                                    t.rs = n,
                                e && (t.citys = t.rs[e.province])
                            }
                        }
                    })
            },
            methods: {
                changeLocation: function () {
                    this.showWeather = !1
                },
                isSelecting: function (t) {
                    this.selecting = t
                },
                onSubmitClick: function () {
                    var t = this;
                    (0,
                        l.default)({
                        url: this.weatherDataUrl,
                        data: {
                            city: t.city
                        },
                        method: "get",
                        success: function (e) {
                            e.data && e.data.weather && (t.weathercity = e.data.city,
                                t.weather = e.data.weather,
                                t.aqiColor = a(t.weather.aqi))
                        }
                    }),
                    window.localStorage && (localStorage.setItem("weather_city", (0,
                        o.default)({
                        city: this.city,
                        province: this.province
                    })),
                        c.default.set("WEATHER_CITY", this.city, {
                            expires: 100
                        })),
                        t.showWeather = !0
                },
                onCancelClick: function () {
                    this.showWeather = !0
                },
                handleProvinceChange: function (t) {
                    this.rs && (this.citys = this.rs[t],
                        this.city = this.citys[0].value)
                },
                handleMouseEnter: function (t) {
                    this.showPopup = !0
                },
                handleMouseLeave: function (t) {
                    return !this.selecting && void (this.showPopup = !1)
                }
            },
            watch: {
                weather: function (t) {
                    this.iconClass = {
                        today: "weather-icon-" + t.weather_icon_id,
                        tom: "weather-icon-" + t.tomorrow_weather_icon_id,
                        dat: "weather-icon-" + t.dat_weather_icon_id
                    }
                }
            }
        }
    }
    , function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = i(116)
            , s = n(a);
        e.default = {
            props: {
                tag: {
                    type: String,
                    default: ""
                },
                local: {
                    type: String,
                    default: ""
                }
            },
            data: function () {
                return {
                    header: {
                        logoImg: i(216),
                        logoAlt: "今日头条",
                        logoWidth: "108px",
                        logoHeight: "27px"
                    },
                    channels: {
                        tag: this.tag,
                        items: [{
                            name: "推荐",
                            url: "/",
                            log: "recommand"
                        }, {
                            name: "西瓜视频",
                            url: "https://www.ixigua.com/",
                            log: "video",
                            target: "_blank"
                        }, {
                            name: "热点",
                            url: "/ch/news_hot/",
                            log: "hot"
                        }, {
                            name: "直播",
                            url: "https://live.ixigua.com",
                            log: "live",
                            target: "_blank"
                        }, {
                            name: "图片",
                            url: "/ch/news_image/",
                            log: "image",
                            target: "_blank"
                        }, {
                            name: "科技",
                            url: "/ch/news_tech/",
                            log: "technology"
                        }, {
                            name: "娱乐",
                            url: "/ch/news_entertainment/",
                            log: "entertainment"
                        }, {
                            name: "游戏",
                            url: "/ch/news_game/",
                            log: "game"
                        }, {
                            name: "体育",
                            url: "/ch/news_sports/",
                            log: "sports"
                        }, {
                            name: "懂车帝",
                            url: "https://www.dcdapp.com/?zt=tt_pc_home_channel",
                            log: "car",
                            target: "_blank"
                        }, {
                            name: "财经",
                            url: "/ch/news_finance/",
                            log: "finance"
                        }, {
                            name: "搞笑",
                            url: "/ch/funny/",
                            log: "funny"
                        }],
                        more: [{
                            name: "军事",
                            url: "/ch/news_military/",
                            log: "military"
                        }, {
                            name: "国际",
                            url: "/ch/news_world/",
                            log: "international"
                        }, {
                            name: "时尚",
                            url: "/ch/news_fashion/",
                            log: "fashion"
                        }, {
                            name: "旅游",
                            url: "/ch/news_travel/",
                            log: "travel"
                        }, {
                            name: "探索",
                            url: "/ch/news_discovery/",
                            log: "explore"
                        }, {
                            name: "育儿",
                            url: "/ch/news_baby/",
                            log: "childcare"
                        }, {
                            name: "养生",
                            url: "/ch/news_regimen/",
                            log: "health"
                        }, {
                            name: "美文",
                            url: "/ch/news_essay/",
                            log: "article"
                        }, {
                            name: "历史",
                            url: "/ch/news_history/",
                            log: "history"
                        }, {
                            name: "美食",
                            url: "/ch/news_food/",
                            log: "food"
                        }]
                    }
                }
            },
            components: {
                Channel: s.default
            },
            created: function () {
            }
        }
    }
    , function (t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
            e.default = {
                name: "Company",
                data: function () {
                    return {
                        gonganImg: i(214),
                        sfdfImg: i(215)
                    }
                },
                computed: {
                    year: function () {
                        var t = new Date;
                        return t.getFullYear()
                    }
                }
            }
    }
    , function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = i(32)
            , s = n(a);
        e.default = {
            name: "FriendLinks",
            data: function () {
                return {
                    friendLink: [{
                        url: "http://www.gmw.cn/",
                        name: "光明网"
                    }, {
                        url: "http://www.cnr.cn/",
                        name: "央广网"
                    }, {
                        url: "http://www.cri.cn",
                        name: "国际在线"
                    }, {
                        url: "http://www.tibet.cn/",
                        name: "中国西藏网"
                    }, {
                        url: "http://www.cankaoxiaoxi.com/",
                        name: "参考消息"
                    }, {
                        url: "http://www.huanqiu.com/",
                        name: "环球网"
                    }, {
                        url: "http://www.cyol.com",
                        name: "中青在线"
                    }, {
                        url: "http://www.youth.cn/",
                        name: "中青网"
                    }, {
                        url: "http://www.workercn.cn/",
                        name: "中工网"
                    }, {
                        url: "http://www.haiwainet.cn/",
                        name: "海外网"
                    }, {
                        url: "http://h5.china.com.cn",
                        name: "中国网"
                    }, {
                        url: "http://www.k618.cn/",
                        name: "未来网"
                    }, {
                        url: "http://qianlong.com/",
                        name: "千龙网"
                    }, {
                        url: "http://www.bjnews.com.cn/",
                        name: "新京报"
                    }, {
                        url: "http://www.ynet.com/",
                        name: "北青网"
                    }, {
                        url: "http://www.fawan.com/",
                        name: "法制晚报"
                    }, {
                        url: "http://www.morningpost.com.cn",
                        name: "北京晨报"
                    }, {
                        url: "http://www.bbtnews.com.cn/",
                        name: "北京商报"
                    }, {
                        url: "http://www.stardaily.com.cn/",
                        name: "北京娱乐信报"
                    }, {
                        url: "http://www.oeeee.com/",
                        name: "奥一网"
                    }, {
                        url: "http://www.ycwb.com/",
                        name: "金羊网"
                    }, {
                        url: "http://www.hsw.cn/",
                        name: "华商网"
                    }, {
                        url: "http://www.xinmin.cn",
                        name: "新民网"
                    }, {
                        url: "http://www.rednet.cn/index.html",
                        name: "红网"
                    }, {
                        url: "http://www.jschina.com.cn",
                        name: "中国江苏网"
                    }, {
                        url: "http://www.jxnews.com.cn/",
                        name: "中国江西网"
                    }, {
                        url: "http://www.iqilu.com/",
                        name: "齐鲁网"
                    }, {
                        url: "http://www.hinews.cn/news/",
                        name: "南海网"
                    }, {
                        url: "http://www.ahwang.cn/",
                        name: "安徽网"
                    }, {
                        url: "http://www.hebnews.cn/",
                        name: "河北新闻网"
                    }, {
                        url: "http://www.mnw.cn/",
                        name: "闽南网"
                    }, {
                        url: "http://www.hxnews.com/",
                        name: "海峡网"
                    }, {
                        url: "http://www.voc.com.cn/",
                        name: "华声在线"
                    }, {
                        url: "http://tv.cztv.com",
                        name: "中国蓝TV"
                    }, {
                        url: "http://www.lnd.com.cn/",
                        name: "北国网"
                    }, {
                        url: "http://www.longhoo.net/",
                        name: "龙虎网"
                    }, {
                        url: "http://www.timedg.com/",
                        name: "东莞时间网"
                    }, {
                        url: "https://www.dcdapp.com/?zt=tt_pc_friendly_link",
                        name: "懂车帝"
                    }, {
                        url: "http://www.autohome.com.cn/",
                        name: "汽车之家"
                    }, {
                        url: "http://www.onlylady.com/",
                        name: "Onlylady女人志"
                    }, {
                        url: "http://123.chinaso.com/",
                        name: "中国搜索"
                    }, {
                        url: "http://www.nbd.com.cn/",
                        name: "每日经济新闻"
                    }, {
                        url: "http://www.cheshi.com/",
                        name: "网上车市"
                    }, {
                        url: "http://www.news18a.com/",
                        name: "网通社汽车"
                    }, {
                        url: "http://www.enorth.com.cn/",
                        name: "北方网"
                    }, {
                        url: "http://www.hnt.gov.cn/",
                        name: "湖南省旅发委官网"
                    }, {
                        url: "http://www.leju.com/",
                        name: "乐居网"
                    }, {
                        url: "http://www.rmlt.com.cn/",
                        name: "人民论坛网"
                    }]
                }
            },
            props: {
                title: String
            },
            components: {
                PaneModule: s.default
            }
        }
    }
    , function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = i(32)
            , s = n(a)
            , o = i(7)
            , r = n(o);
        e.default = {
            name: "HotNews",
            props: {
                list: Array,
                count: {
                    type: Number,
                    default: 4
                },
                title: String
            },
            data: function () {
                return {
                    resList: []
                }
            },
            mounted: function () {
                this.list ? this.resList = this.list.slice(0, this.count) : this._getData()
            },
            methods: {
                _getData: function () {
                    var t = this;
                    (0,
                        r.default)({
                        url: "/api/pc/realtime_news/",
                        method: "get",
                        success: function (e) {
                            if ("success" === e.message) {
                                var i = e.data || [];
                                t.resList = i.slice(0, t.count)
                            }
                        },
                        error: function () {
                        }
                    })
                }
            },
            components: {
                PaneModule: s.default
            }
        }
    }
    , function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = i(32)
            , s = n(a);
        e.default = {
            name: "MoreLinks",
            data: function () {
                return {
                    moreLinks: [{
                        url: "/about/",
                        title: "关于头条"
                    }, {
                        url: "https://job.bytedance.com",
                        title: "加入头条",
                        target: "_blank"
                    }, {
                        url: "/report/",
                        title: "媒体报道"
                    }, {
                        url: "/media_partners/",
                        title: "媒体合作"
                    }, {
                        url: "/cooperation/",
                        title: "产品合作"
                    }, {
                        url: "/media_cooperation/",
                        title: "合作说明"
                    }, {
                        url: "https://www.oceanengine.com/?source=pchomemore",
                        title: "广告投放",
                        target: "_blank"
                    }, {
                        url: "/contact/",
                        title: "联系我们"
                    }, {
                        url: "/user_agreement/",
                        title: "用户协议"
                    }, {
                        url: "/privacy_protection/",
                        title: "隐私政策"
                    }, {
                        url: "/complain/",
                        title: "侵权投诉"
                    }, {
                        url: "/corrupt_report/",
                        title: "廉洁举报"
                    }, {
                        url: "http://renzheng.toutiao.com/guide?platform=%27PC%27&source=%27www.toutiao.com%27",
                        title: "企业认证"
                    }, {
                        url: "https://hys.people-health.cn/m/#/pages/ncovSuff/index",
                        title: "肺炎求助",
                        target: "_blank"
                    }, {
                        url: "http://www.piyao.org.cn/2020yqpy",
                        title: "辟谣专区",
                        target: "_blank"
                    }]
                }
            },
            props: {
                title: String
            },
            components: {
                PaneModule: s.default
            }
        }
    }
    , function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = i(17)
            , s = n(a);
        e.default = {
            name: "SlideList",
            props: {
                slideList: {
                    type: Array,
                    default: []
                },
                autoplay: {
                    type: Boolean,
                    default: !1
                },
                autoplaySpeed: {
                    type: Number,
                    default: 3e3
                }
            },
            data: function () {
                return {
                    currentIndex: 0
                }
            },
            mounted: function () {
                var t = this;
                this.setAutoplay(),
                    s.default.$on("slide-tab-change", function (e) {
                        t.currentIndex !== e && (t.currentIndex = e,
                            t.setAutoplay())
                    })
            },
            methods: {
                add: function (t) {
                    var e = this.currentIndex;
                    for (e += t; e < 0;)
                        e += this.slideList.length;
                    e %= this.slideList.length,
                        this.currentIndex = e,
                        s.default.$emit("slide-list-change", e)
                },
                setAutoplay: function () {
                    var t = this;
                    window.clearInterval(this.timer),
                    this.autoplay && (this.timer = window.setInterval(function () {
                        t.add(1)
                    }, this.autoplaySpeed))
                }
            }
        }
    }
    , function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = i(17)
            , s = n(a);
        e.default = {
            name: "SlideList",
            props: {
                slideList: {
                    type: Array,
                    default: []
                }
            },
            data: function () {
                return {
                    slideTabs: ["要闻", "社会", "娱乐", "体育", "军事", "明星"],
                    currentIndex: 0
                }
            },
            mounted: function () {
                var t = this;
                s.default.$on("slide-list-change", function (e) {
                    t.currentIndex !== e && (t.currentIndex = e)
                })
            },
            methods: {
                tabOver: function (t) {
                    this.currentIndex !== t && (this.currentIndex = t,
                        s.default.$emit("slide-tab-change", t),
                    window.ttAnalysis && window.ttAnalysis.send("event", {
                        ev: "focus_tab_hover"
                    }))
                }
            }
        }
    }
    , function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = i(7)
            , s = n(a)
            , o = i(243)
            , r = n(o)
            , l = i(244)
            , u = n(l);
        e.default = {
            name: "",
            props: {},
            data: function () {
                return {
                    slideList: [],
                    error: !1
                }
            },
            mounted: function () {
                var t = this;
                (0,
                    s.default)({
                    url: "/api/pc/focus/",
                    method: "get",
                    success: function (e) {
                        if ("success" === e.message) {
                            var i = e.data.pc_feed_focus;
                            t.slideList = i.slice(0, 6),
                            0 === t.slideList.length && t.errorHandle()
                        } else
                            t.errorHandle()
                    },
                    error: function () {
                        t.errorHandle()
                    }
                })
            },
            methods: {
                errorHandle: function () {
                    this.error = !0
                }
            },
            components: {
                slideList: r.default,
                slideTab: u.default
            }
        }
    }
    , , , , , , , , , , , , , , , , , , , , , , , , , , , , function (t, e) {
    }
    , function (t, e) {
    }
    , function (t, e) {
    }
    , function (t, e) {
    }
    , function (t, e) {
    }
    , function (t, e) {
    }
    , function (t, e) {
    }
    , function (t, e) {
    }
    , function (t, e) {
    }
    , function (t, e) {
    }
    , function (t, e) {
    }
    , function (t, e) {
    }
    , function (t, e) {
    }
    , function (t, e) {
    }
    , function (t, e) {
    }
    , function (t, e) {
    }
    , function (t, e) {
    }
    , function (t, e) {
    }
    , function (t, e) {
    }
    , function (t, e) {
    }
    , function (t, e) {
    }
    , function (t, e) {
    }
    , function (t, e) {
    }
    , function (t, e) {
    }
    , function (t, e) {
    }
    , , function (t, e, i) {
        t.exports = i.p + "static/img/logo.271e845.png"
    }
    , function (t, e, i) {
        t.exports = i.p + "static/img/gongan.d0289dc.png"
    }
    , function (t, e, i) {
        t.exports = i.p + "static/img/sfdf.776ebad.jpeg"
    }
    , function (t, e, i) {
        t.exports = i.p + "static/img/logo.271e845.png"
    }
    , , , , , , , function (t, e, i) {
        i(200);
        var n = i(1)(i(135), i(259), null, null);
        t.exports = n.exports
    }
    , function (t, e, i) {
        i(195);
        var n = i(1)(i(138), i(254), null, null);
        t.exports = n.exports
    }
    , function (t, e, i) {
        i(209);
        var n = i(1)(i(139), i(268), null, null);
        t.exports = n.exports
    }
    , function (t, e, i) {
        i(188);
        var n = i(1)(i(140), i(246), null, null);
        t.exports = n.exports
    }
    , function (t, e, i) {
        i(210);
        var n = i(1)(i(141), i(269), null, null);
        t.exports = n.exports
    }
    , function (t, e, i) {
        i(197);
        var n = i(1)(i(142), i(256), null, null);
        t.exports = n.exports
    }
    , function (t, e, i) {
        i(206);
        var n = i(1)(i(143), i(265), null, null);
        t.exports = n.exports
    }
    , function (t, e, i) {
        i(208);
        var n = i(1)(i(144), i(267), null, null);
        t.exports = n.exports
    }
    , function (t, e, i) {
        i(194);
        var n = i(1)(i(145), i(253), null, null);
        t.exports = n.exports
    }
    , function (t, e, i) {
        i(196);
        var n = i(1)(i(146), i(255), null, null);
        t.exports = n.exports
    }
    , function (t, e, i) {
        i(189);
        var n = i(1)(i(147), i(247), null, null);
        t.exports = n.exports
    }
    , function (t, e, i) {
        i(199);
        var n = i(1)(i(148), i(258), null, null);
        t.exports = n.exports
    }
    , function (t, e, i) {
        i(202);
        var n = i(1)(i(149), i(261), null, null);
        t.exports = n.exports
    }
    , function (t, e, i) {
        i(203);
        var n = i(1)(i(150), i(262), "data-v-756beef7", null);
        t.exports = n.exports
    }
    , function (t, e, i) {
        i(204);
        var n = i(1)(i(151), i(263), null, null);
        t.exports = n.exports
    }
    , function (t, e, i) {
        var n = i(1)(i(152), i(249), null, null);
        t.exports = n.exports
    }
    , function (t, e, i) {
        i(205);
        var n = i(1)(i(153), i(264), null, null);
        t.exports = n.exports
    }
    , function (t, e, i) {
        i(211);
        var n = i(1)(i(154), i(270), null, null);
        t.exports = n.exports
    }
    , function (t, e, i) {
        i(190);
        var n = i(1)(i(155), i(248), null, null);
        t.exports = n.exports
    }
    , function (t, e, i) {
        i(193);
        var n = i(1)(i(156), i(252), null, null);
        t.exports = n.exports
    }
    , function (t, e, i) {
        i(207);
        var n = i(1)(i(157), i(266), null, null);
        t.exports = n.exports
    }
    , function (t, e, i) {
        i(201);
        var n = i(1)(i(158), i(260), null, null);
        t.exports = n.exports
    }
    , function (t, e, i) {
        i(191);
        var n = i(1)(i(159), i(250), null, null);
        t.exports = n.exports
    }
    , function (t, e) {
        t.exports = {
            render: function () {
                var t = this
                    , e = t.$createElement
                    , i = t._self._c || e;
                return i("div", {
                    staticClass: "no-mode",
                    attrs: {
                        ga_event: t.item.article_genre + "_item_click"
                    }
                }, [i("div", {
                    class: ["title-box", {
                        "limit-box": t.xuexi
                    }],
                    attrs: {
                        ga_event: t.item.article_genre + "_title_click"
                    }
                }, [i("a", {
                    staticClass: "link",
                    attrs: {
                        href: t.item.source_url,
                        target: "_blank"
                    }
                }, [t._v(t._s(t.item.title))])]), t._v(" "), t.xuexi ? i("a", {
                    staticClass: "xuexi",
                    attrs: {
                        rel: "noopener noreferrer",
                        target: "_blank",
                        href: "https://www.xuexi.cn/"
                    }
                }) : t._e(), t._v(" "), i("FooterBar", {
                    attrs: {
                        item: t.item
                    }
                })], 1)
            },
            staticRenderFns: []
        }
    }
    , function (t, e) {
        t.exports = {
            render: function () {
                var t = this
                    , e = t.$createElement
                    , i = t._self._c || e;
                return t.listCount.length ? i("pane", {
                    attrs: {
                        title: t.title
                    }
                }, [i("template", {
                    slot: "content"
                }, [i("ul", {
                    staticClass: "module-content video-list",
                    attrs: {
                        ga_event: "click_video_recommend"
                    }
                }, t._l(t.listCount, function (e, n) {
                    return i("li", {
                        staticClass: "video-item",
                        class: {
                            "video-item-a": 3 === n
                        }
                    }, [3 === n ? i("div", {
                        staticStyle: {
                            display: "block !important"
                        },
                        attrs: {
                            name: "hot_video*cell_4",
                            "ad-cursor": ""
                        }
                    }) : [i("a", {
                        staticClass: "link",
                        attrs: {
                            href: e.display_url,
                            target: "_blank"
                        }
                    }, [i("dl", [i("dt", {
                        staticClass: "module-pic"
                    }, [i("img", {
                        directives: [{
                            name: "lazy",
                            rawName: "v-lazy",
                            value: e.pc_image_url,
                            expression: "item.pc_image_url"
                        }],
                        attrs: {
                            alt: e.title
                        }
                    }), t._v(" "), i("i", {
                        staticClass: "module-tag video-tag"
                    }, [i("span", [t._v(t._s(e.video_duration_format))])])]), t._v(" "), i("dd", [i("div", {
                        staticClass: "cell"
                    }, [i("h4", [t._v(t._s(e.title))]), t._v(" "), i("p", [i("span", [t._v(t._s(t._f("formatCount")(e.video_play_count)) + "次播放 ")]), i("span", [t._v("⋅ " + t._s(t._f("formatCount")(e.comment_count)) + "评论")])])])])])])]], 2)
                }), 0)])], 2) : t._e()
            },
            staticRenderFns: []
        }
    }
    , function (t, e) {
        t.exports = {
            render: function () {
                var t = this
                    , e = t.$createElement
                    , i = t._self._c || e;
                return i("pane-module", {
                    attrs: {
                        title: t.title
                    }
                }, [i("template", {
                    slot: "content"
                }, [i("ul", {
                    staticClass: "module-content article-list",
                    attrs: {
                        ga_event: "click_hot_news"
                    }
                }, t._l(t.resList, function (e) {
                    return i("li", {
                        staticClass: "article-item"
                    }, [i("a", {
                        staticClass: "news-link",
                        attrs: {
                            href: e.open_url,
                            target: "_blank"
                        }
                    }, [e.image_url ? i("div", {
                        staticClass: "module-pic news-pic"
                    }, [i("img", {
                        directives: [{
                            name: "lazy",
                            rawName: "v-lazy",
                            value: e.image_url,
                            expression: "item.image_url"
                        }]
                    })]) : t._e(), t._v(" "), i("div", {
                        staticClass: "news-inner"
                    }, [i("p", {
                        staticClass: "module-title"
                    }, [t._v(t._s(e.title))])])])])
                }), 0)])], 2)
            },
            staticRenderFns: []
        }
    }
    , function (t, e) {
        t.exports = {
            render: function () {
                var t = this
                    , e = t.$createElement
                    , i = t._self._c || e;
                return i("channel", {
                    attrs: {
                        header: t.header,
                        channels: t.channels
                    }
                })
            },
            staticRenderFns: []
        }
    }
    , function (t, e) {
        t.exports = {
            render: function () {
                var t = this
                    , e = t.$createElement
                    , i = t._self._c || e;
                return i("div", {
                    staticClass: "bui-box slide",
                    class: [t.error ? "slide-hidden" : ""]
                }, [i("slide-list", {
                    staticClass: "bui-left",
                    attrs: {
                        slideList: t.slideList,
                        autoplay: !0,
                        autoplaySpeed: 5e3
                    }
                }), t._v(" "), i("slide-tab", {
                    staticClass: "bui-right",
                    attrs: {
                        slideList: t.slideList
                    }
                })], 1)
            },
            staticRenderFns: []
        }
    }
    , function (t, e) {
        t.exports = {
            render: function () {
                var t = this
                    , e = t.$createElement
                    , i = t._self._c || e;
                return i("div", {
                    staticClass: "action-dislike",
                    attrs: {
                        ga_event: "dislike_click"
                    },
                    on: {
                        click: t.dislikeClick
                    }
                }, [i("tt-icon", {
                    attrs: {
                        type: "close_small",
                        color: "#ddd",
                        size: "16"
                    }
                }), t._v("\n  不感兴趣\n")], 1)
            },
            staticRenderFns: []
        }
    }
    , function (t, e) {
        t.exports = {
            render: function () {
                var t = this
                    , e = t.$createElement
                    , i = t._self._c || e;
                return i("pane-module", {
                    attrs: {
                        title: t.title
                    }
                }, [i("template", {
                    slot: "content"
                }, [i("ul", {
                    staticClass: "more-items-content"
                }, t._l(t.moreLinks, function (e) {
                    return i("li", {
                        staticClass: "item"
                    }, [i("a", {
                        attrs: {
                            href: e.url,
                            target: e.target
                        }
                    }, [t._v(t._s(e.title))])])
                }), 0)])], 2)
            },
            staticRenderFns: []
        }
    }
    , function (t, e) {
        t.exports = {
            render: function () {
                var t = this
                    , e = t.$createElement
                    , i = t._self._c || e;
                return i("div", {
                    staticClass: "toutiao-header"
                }, [i("div", {
                    staticClass: "topbar"
                }, [t.options.isHomePage ? i("div", {
                    staticClass: "bui-left clearfix"
                }, [i("a", {
                    staticClass: "download-app tb-link",
                    attrs: {
                        href: "//app.toutiao.com/news_article/",
                        target: "_blank",
                        ga_event: "mh_nav_others"
                    }
                }, [t._v("下载APP")]), t._v(" "), i("a", {
                    staticClass: "register-mp tb-link",
                    attrs: {
                        target: "_blank",
                        href: "//mp.toutiao.com"
                    }
                }, [t._v("注册头条号")]), t._v(" "), i("weather-box")], 1) : t._e(), t._v(" "), t.options.isHomePage ? t._e() : i("div", {
                    staticClass: "bui-left clearfix"
                }), t._v(" "), i("div", {
                    staticClass: "bui-right"
                }, [i("ul", {
                    staticClass: "user-nav-list clearfix"
                }, [t.options.id ? i("li", {
                    staticClass: "new-article"
                }, [i("a", {
                    staticClass: "tb-link",
                    attrs: {
                        href: "//mp.toutiao.com/new_article/",
                        ga_event: "mh_write",
                        target: "_blank"
                    }
                }, [t._v("发文")])]) : t._e(), t._v(" "), t.options.id && t.showUser ? i("li", [i("tt-dropdown", [i("div", {
                    staticClass: "tt-dropdown-link tb-link"
                }, [i("a", {
                    staticClass: "user-name",
                    attrs: {
                        href: "//www.toutiao.com/c/user/" + t.options.id + "/",
                        ga_event: "mh_nav_user",
                        target: "_blank",
                        rel: "nofollow"
                    }
                }, [i("img", {
                    staticClass: "user-avatar",
                    attrs: {
                        src: t.options.avatarUrl
                    }
                }), t._v("\n              " + t._s(t.options.userName))])]), t._v(" "), i("tt-dropdown-menu", {
                    attrs: {
                        slot: "dropdown"
                    },
                    slot: "dropdown"
                }, [i("tt-dropdown-item", [i("a", {
                    staticClass: "layer-item",
                    attrs: {
                        href: "//www.toutiao.com/c/user/" + t.options.id + "/?tab=favourite",
                        target: "_blank",
                        rel: "nofollow"
                    }
                }, [t._v("我的收藏")])]), t._v(" "), i("tt-dropdown-item", [i("a", {
                    staticClass: "layer-item",
                    attrs: {
                        href: "//www.toutiao.com/c/user/" + t.options.id + "/?tab=following",
                        target: "_blank",
                        rel: "nofollow"
                    }
                }, [t._v("我的关注")])]), t._v(" "), i("tt-dropdown-item", [i("a", {
                    staticClass: "layer-item",
                    attrs: {
                        href: "//www.toutiao.com/c/user/relation/" + t.options.id + "/?tab=followed",
                        target: "_blank",
                        rel: "nofollow"
                    }
                }, [t._v("我的粉丝")])]), t._v(" "), i("tt-dropdown-item", {
                    attrs: {
                        divided: ""
                    }
                }, [i("a", {
                    staticClass: "layer-item",
                    attrs: {
                        href: "https://sso.toutiao.com/logout/",
                        rel: "nofollow"
                    }
                }, [t._v("退出")])])], 1)], 1)], 1) : t._e(), t._v(" "), !t.options.id && t.showUser ? i("li", {
                    staticClass: "nav-login"
                }, [i("a", {
                    staticClass: "tb-link",
                    attrs: {
                        ga_event: "nav_login"
                    },
                    on: {
                        click: function (e) {
                            return e.preventDefault(),
                                t.jumpToLogin(e)
                        }
                    }
                }, [t._v("登录")])]) : t._e(), t._v(" "), t.options.id ? i("li", [i("feedback", {
                    attrs: {
                        show: !1
                    }
                })], 1) : t._e(), t._v(" "), t._m(0), t._v(" "), i("li", [i("tt-dropdown", [i("a", {
                    staticClass: "tt-dropdown-link tb-link",
                    attrs: {
                        href: "javascript:;"
                    }
                }, [t._v("头条产品")]), t._v(" "), i("tt-dropdown-menu", {
                    attrs: {
                        slot: "dropdown"
                    },
                    slot: "dropdown"
                }, [i("tt-dropdown-item", [i("a", {
                    staticClass: "layer-item",
                    attrs: {
                        href: "https://www.wukong.com/",
                        target: "_blank",
                        ga_event: "mh_nav_others"
                    }
                }, [t._v("问答")])]), t._v(" "), i("tt-dropdown-item", [i("a", {
                    staticClass: "layer-item",
                    attrs: {
                        href: "https://mp.toutiao.com/",
                        target: "_blank",
                        ga_event: "mh_nav_others"
                    }
                }, [t._v("头条号")])]), t._v(" "), i("tt-dropdown-item", [i("a", {
                    staticClass: "layer-item",
                    attrs: {
                        href: "https://tuchong.com?utm_source=toutiao&utm_medium=pc_header",
                        target: "_blank",
                        ga_event: "mh_nav_others"
                    }
                }, [t._v("图虫")])]), t._v(" "), i("tt-dropdown-item", [i("a", {
                    staticClass: "layer-item",
                    attrs: {
                        href: "https://stock.tuchong.com/?source=ttweb",
                        target: "_blank",
                        ga_event: "mh_nav_others"
                    }
                }, [t._v("正版图库")])]), t._v(" "), i("tt-dropdown-item", [i("a", {
                    staticClass: "layer-item",
                    attrs: {
                        href: "https://www.oceanengine.com/?source=pchometop",
                        target: "_blank",
                        ga_event: "mh_nav_ad"
                    }
                }, [t._v("广告投放")])]), t._v(" "), i("tt-dropdown-item", [i("a", {
                    staticClass: "layer-item",
                    attrs: {
                        href: "https://www.dcdapp.com/?zt=tt_pc_home_top_bar",
                        target: "_blank",
                        ga_event: "mh_nav_others"
                    }
                }, [t._v("懂车帝")])])], 1)], 1)], 1)])])]), t._v(" "), t.options.hasBar ? i("div", {
                    staticClass: "middlebar"
                }, [i("div", {
                    staticClass: "middlebar-inner clearfix",
                    style: {
                        width: t.middlebarWidth + "px"
                    }
                }, [i("div", {
                    staticClass: "bui-left logo-box"
                }, [i("a", {
                    staticClass: "logo-link",
                    attrs: {
                        href: "/",
                        ga_event: "go_home"
                    }
                }, [i("img", {
                    staticClass: "logo",
                    attrs: {
                        src: t.logoImg
                    }
                })])]), t._v(" "), t.options.chineseTag ? i("div", {
                    staticClass: "bui-left chinese-tag"
                }, [i("a", {
                    attrs: {
                        href: "/",
                        target: "_blank",
                        ga_event: "click_index"
                    }
                }, [t._v("首页")]), t._v("\n        /\n        "), i("a", {
                    attrs: {
                        href: "/" + t.options.crumbTag,
                        target: "_blank",
                        ga_event: "click_channel"
                    }
                }, [t._v(t._s(t.options.chineseTag))]), t._v("\n        /\n        "), i("span", {
                    staticClass: "text"
                }, [t._v("正文")])]) : t._e(), t._v(" "), i("div", {
                    staticClass: "bui-right",
                    attrs: {
                        ga_event: "middlebar_search"
                    }
                }, [i("search-box")], 1)])]) : t._e()])
            },
            staticRenderFns: [function () {
                var t = this
                    , e = t.$createElement
                    , i = t._self._c || e;
                return i("li", [i("a", {
                    staticClass: "tb-link",
                    attrs: {
                        href: "//www.toutiao.com/complain/",
                        ga_event: "mh_nav_complain",
                        target: "blank"
                    }
                }, [t._v("侵权投诉")])])
            }
            ]
        }
    }
    , function (t, e) {
        t.exports = {
            render: function () {
                var t = this
                    , e = t.$createElement
                    , i = t._self._c || e;
                return i("div", [i("div", {
                    staticClass: "msg-alert",
                    class: {
                        "msg-alert-hidden": t.msgHidden
                    }
                }, [t.articleCount > 0 ? i("span", [t._v("为您推荐了" + t._s(t.articleCount) + "篇文章")]) : t._e(), t._v(" "), 0 == t.articleCount ? i("span", [t._v("暂时没有更新，休息一会儿吧")]) : t._e()]), t._v(" "), i("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.msgShow,
                        expression: "msgShow"
                    }],
                    ref: "msgAlertPlace",
                    staticClass: "msgAlert-place",
                    on: {
                        click: t.feedRefreshClick
                    }
                }, [i("div", {
                    staticClass: "msg-alert",
                    class: {
                        "msg-alert-fixed": t.msgFixed
                    },
                    attrs: {
                        ga_event: "refresh_float_click"
                    }
                }, [i("span", [t._v("您有未读新闻，点击查看")]), t._v(" "), i("tt-icon", {
                    attrs: {
                        type: "close_small",
                        size: "15",
                        color: "#fff"
                    },
                    nativeOn: {
                        click: function (e) {
                            return e.stopPropagation(),
                                t.closeMsgClick(e)
                        }
                    }
                })], 1)])])
            },
            staticRenderFns: []
        }
    }
    , function (t, e) {
        t.exports = {
            render: function () {
                var t = this
                    , e = t.$createElement
                    , i = t._self._c || e;
                return t.listCount.length ? i("pane", {
                    attrs: {
                        title: t.title
                    }
                }, [i("template", {
                    slot: "content"
                }, [i("ul", {
                    staticClass: "module-content bui-box picture-list",
                    attrs: {
                        ga_event: "click_pictures_recommend"
                    }
                }, t._l(t.listCount, function (e, n) {
                    return i("li", {
                        staticClass: "bui-left picture-item",
                        class: {
                            "picture-item-a": 2 === n || 6 === n
                        }
                    }, [2 === n ? i("div", {
                        staticStyle: {
                            display: "block !important"
                        },
                        attrs: {
                            name: "hot_image*cell_5",
                            "ad-cursor": ""
                        }
                    }) : 6 === n ? i("div", {
                        staticStyle: {
                            display: "block !important"
                        },
                        attrs: {
                            name: "hot_image*cell_6",
                            "ad-cursor": ""
                        }
                    }) : [i("a", {
                        staticClass: "link",
                        attrs: {
                            href: e.article_url,
                            target: "_blank"
                        }
                    }, [i("div", {
                        staticClass: "module-pic picture-img"
                    }, [i("img", {
                        directives: [{
                            name: "lazy",
                            rawName: "v-lazy",
                            value: e.cover_image_url,
                            expression: "item.cover_image_url"
                        }],
                        attrs: {
                            alt: ""
                        }
                    }), t._v(" "), i("i", {
                        staticClass: "module-tag"
                    }, [i("span", [t._v(t._s(e.gallery_image_count) + "图")])])]), t._v(" "), i("p", [t._v(t._s(e.title))])])]], 2)
                }), 0)])], 2) : t._e()
            },
            staticRenderFns: []
        }
    }
    , function (t, e) {
        t.exports = {
            render: function () {
                var t = this
                    , e = t.$createElement
                    , i = t._self._c || e;
                return i("div", {
                    staticClass: "bui-box single-mode",
                    attrs: {
                        ga_event: t.item.article_genre + "_item_click"
                    }
                }, [i("div", {
                    staticClass: "bui-left single-mode-lbox",
                    attrs: {
                        ga_event: t.item.article_genre + "_img_click"
                    }
                }, [i("a", {
                    staticClass: "img-wrap",
                    attrs: {
                        href: t.item.source_url,
                        target: "_blank"
                    }
                }, [i("img", {
                    directives: [{
                        name: "lazy",
                        rawName: "v-lazy",
                        value: t.item.image_url,
                        expression: "item.image_url"
                    }],
                    staticClass: "lazy-load-img"
                }), t._v(" "), t.item.has_video ? i("i", {
                    staticClass: "pic-tip video-tip"
                }, [i("span", [t._v(t._s(t.item.video_duration_str))])]) : t._e()])]), t._v(" "), i("div", {
                    staticClass: "single-mode-rbox"
                }, [i("div", {
                    staticClass: "single-mode-rbox-inner"
                }, [i("div", {
                    staticClass: "title-box",
                    attrs: {
                        ga_event: t.item.article_genre + "_title_click"
                    }
                }, [i("a", {
                    staticClass: "link",
                    attrs: {
                        href: t.item.source_url,
                        target: "_blank"
                    }
                }, [t._v(t._s(t.item.title))])]), t._v(" "), i("FooterBar", {
                    attrs: {
                        item: t.item,
                        dislikeUrl: t.dislikeUrl,
                        getUserInfoUrl: t.getUserInfoUrl
                    }
                })], 1)])])
            },
            staticRenderFns: []
        }
    }
    , function (t, e) {
        t.exports = {
            render: function () {
                var t = this
                    , e = t.$createElement
                    , i = t._self._c || e;
                return i("div", {
                    staticClass: "bui-box footer-bar"
                }, [i("div", {
                    staticClass: "bui-left footer-bar-left"
                }, [t.item.tag_style ? i("a", {
                    staticClass: "footer-bar-action tag",
                    class: t.item.tag_style,
                    attrs: {
                        href: t.item.tag_url,
                        target: "_blank",
                        ga_event: "article_tag_click"
                    }
                }, [t._v(t._s(t.item.chinese_tag))]) : t._e(), t._v(" "), t.item.media_url ? [i("a", {
                    staticClass: "footer-bar-action media-avatar",
                    attrs: {
                        href: t.item.media_url,
                        target: "_blank",
                        ga_event: t.item.article_genre + "_avatar_click"
                    }
                }, [i("img", {
                    directives: [{
                        name: "lazy",
                        rawName: "v-lazy",
                        value: t.item.media_avatar_url,
                        expression: "item.media_avatar_url"
                    }]
                })]), t._v(" "), i("a", {
                    staticClass: "footer-bar-action source",
                    attrs: {
                        href: t.item.media_url,
                        target: "_blank",
                        ga_event: t.item.article_genre + "_name_click"
                    }
                }, [t._v(" " + t._s(t.item.source) + " ⋅")]), t._v(" "), i("a", {
                    staticClass: "footer-bar-action source",
                    attrs: {
                        href: t.item.source_url + "/#comment_area",
                        target: "_blank",
                        ga_event: t.item.article_genre + "_comment_click"
                    }
                }, [t._v(" " + t._s(t.item.comments_count) + "评论 ⋅")])] : [i("a", {
                    staticClass: "footer-bar-action media-avatar",
                    class: t.item.avatar_style,
                    attrs: {
                        href: "/search/?keyword=" + t.item.source,
                        ga_event: t.item.article_genre + "_avatar_click"
                    }
                }, [t._v(t._s(t.item.source_tag))]), t._v(" "), i("a", {
                    staticClass: "footer-bar-action source",
                    attrs: {
                        href: "/search/?keyword=" + t.item.source,
                        target: "_blank",
                        ga_event: t.item.article_genre + "_name_click"
                    }
                }, [t._v(" " + t._s(t.item.source) + " ⋅")])], t._v(" "), i("span", {
                    staticClass: "footer-bar-action"
                }, [t._v(" " + t._s(t.item.time_ago))]), t._v(" "), t.item.is_related ? i("span", {
                    staticClass: "footer-bar-action recommend"
                }, [t._v("相关")]) : t._e(), t._v(" "), t.item.hot ? i("span", {
                    staticClass: "footer-bar-action hot"
                }, [t._v("热")]) : t._e(), t._v(" "), t.item.ad_label ? i("a", {
                    staticClass: "footer-bar-action ad",
                    attrs: {
                        target: "_blank",
                        href: "https://www.oceanengine.com/?source=pcfeedadtag"
                    }
                }, [t._v(t._s(t.item.ad_label))]) : t._e()], 2), t._v(" "), t.item.group_id ? i("div", {
                    staticClass: "bui-right"
                }, [i("Dislike", {
                    attrs: {
                        group_id: t.item.group_id + "",
                        item_id: t.item.item_id + "",
                        ad_id: t.item.ad_id + "",
                        dislikeUrl: t.dislikeUrl,
                        getUserInfoUrl: t.getUserInfoUrl
                    }
                })], 1) : t._e()])
            },
            staticRenderFns: []
        }
    }
    , function (t, e) {
        t.exports = {
            render: function () {
                var t = this
                    , e = t.$createElement
                    , i = t._self._c || e;
                return i("div", {
                    staticClass: "pane-module"
                }, [t.title ? i("div", {
                    staticClass: "module-head"
                }, [t._v(t._s(t.title))]) : t._e(), t._v(" "), t._t("content")], 2)
            },
            staticRenderFns: []
        }
    }
    , function (t, e) {
        t.exports = {
            render: function () {
                var t = this
                    , e = t.$createElement
                    , i = t._self._c || e;
                return i("div", [i("div", {
                    staticClass: "channel",
                    class: {
                        "channel-fixed": t.isFixed
                    },
                    attrs: {
                        ga_event: "left-channel-click"
                    }
                }, [t.header && t.header.logoImg ? i("a", {
                    staticClass: "logo",
                    attrs: {
                        href: "/"
                    }
                }, [i("img", {
                    style: {
                        width: t.header.logoWidth,
                        height: t.header.logoHeight
                    },
                    attrs: {
                        src: t.header.logoImg,
                        alt: t.header.logoAlt
                    }
                })]) : t._e(), t._v(" "), t.header && t.header.title ? i("h3", {
                    staticClass: "related-header"
                }, [t._v(t._s(t.header.title))]) : t._e(), t._v(" "), i("ul", [t._l(t.channels.items, function (e) {
                    return i("li", [i("a", {
                        staticClass: "channel-item",
                        class: {
                            active: t.channels.tag === e.url || t.channels.tag === e.tag
                        },
                        attrs: {
                            href: e.url,
                            target: e.target ? e.target : "_self",
                            ga_event: e.log ? "channel_" + e.log + "_click" : ""
                        },
                        on: {
                            click: function (i) {
                                return t.itemClick(e)
                            }
                        }
                    }, [i("span", [t._v(t._s(e.name))])])])
                }), t._v(" "), t.channels.more ? i("li", {
                    staticClass: "channel-more"
                }, [t._m(0), t._v(" "), i("div", {
                    staticClass: "channel-more-layer"
                }, [i("ul", {
                    staticClass: "bui-box"
                }, t._l(t.channels.more, function (e) {
                    return i("li", {
                        staticClass: "bui-left"
                    }, [i("a", {
                        staticClass: "channel-item",
                        attrs: {
                            href: e.url,
                            target: e.target ? "_blank" : "_self",
                            ga_event: e.log ? "channel_" + e.log + "_click" : ""
                        },
                        on: {
                            click: function (i) {
                                return t.itemClick(e)
                            }
                        }
                    }, [i("span", [t._v(t._s(e.name))])])])
                }), 0)])]) : t._e()], 2)])])
            },
            staticRenderFns: [function () {
                var t = this
                    , e = t.$createElement
                    , i = t._self._c || e;
                return i("a", {
                    staticClass: "channel-item",
                    attrs: {
                        href: "javascript:void(0);"
                    }
                }, [i("span", [t._v("更多")])])
            }
            ]
        }
    }
    , function (t, e) {
        t.exports = {
            render: function () {
                var t = this
                    , e = t.$createElement
                    , i = t._self._c || e;
                return i("ul", {
                    staticClass: "slide-tab"
                }, t._l(t.slideTabs, function (e, n) {
                    return i("li", {
                        staticClass: "slide-tab-item",
                        class: [n === t.currentIndex ? "slide-tab-item-active" : ""],
                        on: {
                            mouseover: function (e) {
                                return t.tabOver(n)
                            }
                        }
                    }, [t._v("\n    " + t._s(e) + "\n  ")])
                }), 0)
            },
            staticRenderFns: []
        }
    }
    , function (t, e) {
        t.exports = {
            render: function () {
                var t = this
                    , e = t.$createElement
                    , i = t._self._c || e;
                return i("div", {
                    staticClass: "search-wrap"
                }, [i("tt-autocomplete", {
                    attrs: {
                        "fetch-suggestions": t.querySearchAsync,
                        "on-enter-keydown": t.handleEnterKeydown,
                        "custom-item": t.resultType,
                        placeholder: t.placeHolder
                    },
                    on: {
                        focus: t.handleFocus,
                        select: t.handleSelect,
                        blur: t.handleBlur
                    },
                    model: {
                        value: t.searchWord,
                        callback: function (e) {
                            t.searchWord = e
                        },
                        expression: "searchWord"
                    }
                }, [i("template", {
                    slot: "append"
                }, [i("tt-button", {
                    on: {
                        click: t.handleIconClick
                    }
                }, [t._v("搜索")])], 1)], 2)], 1)
            },
            staticRenderFns: []
        }
    }
    , function (t, e) {
        t.exports = {
            render: function () {
                var t = this
                    , e = t.$createElement
                    , i = t._self._c || e;
                return i("ul", {
                    staticClass: "toolbar"
                }, [t.showHome ? i("li", {
                    staticClass: "tool-item"
                }, [i("a", {
                    attrs: {
                        href: "//www.toutiao.com"
                    }
                }, [i("tt-icon", {
                    attrs: {
                        type: "house",
                        size: "16",
                        color: "#fff"
                    }
                })], 1)]) : t._e(), t._v(" "), t.showReport ? i("li", {
                    staticClass: "tool-item report-item"
                }, [t._m(0)]) : t._e(), t._v(" "), t.showRefresh ? i("li", {
                    staticClass: "tool-item",
                    on: {
                        click: t.refresh
                    }
                }, [i("a", {
                    attrs: {
                        href: "javascript:void(0);"
                    }
                }, [i("tt-icon", {
                    attrs: {
                        type: "refresh",
                        size: "16",
                        color: "#fff"
                    }
                })], 1)]) : t._e(), t._v(" "), t.reallyShowTop ? i("li", {
                    staticClass: "tool-item",
                    on: {
                        click: t.scrollToTop
                    }
                }, [i("a", {
                    attrs: {
                        href: "javascript:void(0);"
                    }
                }, [i("tt-icon", {
                    attrs: {
                        type: "arrow_up_big",
                        size: "16",
                        color: "#fff"
                    }
                })], 1)]) : t._e()])
            },
            staticRenderFns: [function () {
                var t = this
                    , e = t.$createElement
                    , i = t._self._c || e;
                return i("a", {
                    attrs: {
                        href: "https://www.12377.cn/",
                        target: "_blank"
                    }
                }, [i("img", {
                    attrs: {
                        src: "//s3a.pstatp.com/toutiao/resource/ntoutiao_web/static/image/other/report_logo_15cc24e.png"
                    }
                }), t._v(" "), i("span", [t._v("网上有害信息举报")])])
            }
            ]
        }
    }
    , function (t, e) {
        t.exports = {
            render: function () {
                var t = this
                    , e = t.$createElement
                    , i = t._self._c || e;
                return i("div", {
                    staticClass: "weather-tool",
                    on: {
                        mouseenter: t.handleMouseEnter,
                        mouseleave: t.handleMouseLeave
                    }
                }, [i("div", {
                    staticClass: "weather-abstract"
                }, [i("span", [t._v(" " + t._s(t.weathercity))]), t._v(" "), i("span", {
                    staticClass: "city_state"
                }, [t._v(t._s(t.weather.current_condition))]), t._v(" "), i("span", {
                    staticClass: "city_temperature"
                }, [i("em", [t._v(t._s(t.weather.low_temperature))]), t._v("℃  /  "), i("em", [t._v(t._s(t.weather.high_temperature))]), t._v("℃\n    ")]), t._v(" "), i("tt-icon", {
                    attrs: {
                        type: "arrow_down",
                        color: "#fff",
                        size: "14"
                    }
                })], 1), t._v(" "), i("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.showPopup,
                        expression: "showPopup"
                    }],
                    staticClass: "y-weather"
                }, [i("div", {
                    staticClass: "w-header"
                }, [i("span", {
                    staticClass: "bui-icon icon-locationweather bui-vm",
                    attrs: {
                        ga_event: "mh_change_city"
                    },
                    on: {
                        click: t.changeLocation
                    }
                }, [t._v(" " + t._s(t.weathercity))]), t._v(" "), i("span", {
                    staticClass: "wind bui-vm"
                }, [t._v(t._s(t.weather.wind_direction) + t._s(t.weather.wind_level) + "级")]), t._v(" "), i("span", {
                    staticClass: "air vm",
                    style: {
                        backgroundColor: t.aqiColor
                    }
                }, [t._v(t._s(t.weather.quality_level) + " " + t._s(t.weather.aqi))])]), t._v(" "), t.showWeather ? i("ul", {
                    staticClass: "days-weather"
                }, [i("li", {
                    staticClass: "bui-left day"
                }, [i("span", {
                    staticClass: "title"
                }, [t._v("今天")]), t._v(" "), i("div", {
                    staticClass: "weather-icon",
                    class: [t.iconClass.today],
                    attrs: {
                        title: t.weather.current_condition
                    }
                }), t._v(" "), i("span", {
                    staticClass: "temperature"
                }, [i("em", [t._v(t._s(t.weather.low_temperature))]), t._v("℃\n            /\n            "), i("em", [t._v(t._s(t.weather.high_temperature))]), t._v("℃\n        ")])]), t._v(" "), i("li", {
                    staticClass: "bui-left day"
                }, [i("span", {
                    staticClass: "title"
                }, [t._v("明天")]), t._v(" "), i("div", {
                    staticClass: "weather-icon",
                    class: [t.iconClass.tom],
                    attrs: {
                        title: t.weather.tomorrow_condition
                    }
                }), t._v(" "), i("span", {
                    staticClass: "temperature"
                }, [i("em", [t._v(t._s(t.weather.tomorrow_low_temperature))]), t._v("℃\n            /\n            "), i("em", [t._v(t._s(t.weather.tomorrow_high_temperature))]), t._v("℃\n        ")])]), t._v(" "), i("li", {
                    staticClass: "bui-left day"
                }, [i("span", {
                    staticClass: "title"
                }, [t._v("后天")]), t._v(" "), i("div", {
                    staticClass: "weather-icon",
                    class: [t.iconClass.dat],
                    attrs: {
                        title: t.weather.dat_condition
                    }
                }), t._v(" "), i("span", {
                    staticClass: "temperature"
                }, [i("em", [t._v(t._s(t.weather.dat_low_temperature))]), t._v("℃\n            /\n            "), i("em", [t._v(t._s(t.weather.dat_high_temperature))]), t._v("℃\n        ")])])]) : i("div", {
                    staticClass: "city-select"
                }, [i("div", {
                    staticClass: "clearfix"
                }, [i("div", {
                    staticClass: "bui-left select-style"
                }, [i("tt-select", {
                    attrs: {
                        placeholder: "省份"
                    },
                    on: {
                        change: t.handleProvinceChange,
                        "visible-change": t.isSelecting
                    },
                    model: {
                        value: t.province,
                        callback: function (e) {
                            t.province = e
                        },
                        expression: "province"
                    }
                }, t._l(t.provinces, function (t) {
                    return i("tt-option", {
                        key: t.value,
                        attrs: {
                            label: t.label,
                            value: t.value
                        }
                    })
                }), 1)], 1), t._v(" "), i("div", {
                    staticClass: "bui-right select-style"
                }, [i("tt-select", {
                    attrs: {
                        placeholder: "城市"
                    },
                    on: {
                        "visible-change": t.isSelecting
                    },
                    model: {
                        value: t.city,
                        callback: function (e) {
                            t.city = e
                        },
                        expression: "city"
                    }
                }, t._l(t.citys, function (t) {
                    return i("tt-option", {
                        key: t.value,
                        attrs: {
                            label: t.label,
                            value: t.value
                        }
                    })
                }), 1)], 1)]), t._v(" "), i("div", {
                    staticClass: "action clearfix"
                }, [i("a", {
                    staticClass: "bui-left ok-btn",
                    attrs: {
                        href: "javascript:;"
                    },
                    on: {
                        click: t.onSubmitClick
                    }
                }, [t._v("确定")]), t._v(" "), i("a", {
                    staticClass: "bui-right cancel-btn",
                    attrs: {
                        href: "javascript:;"
                    },
                    on: {
                        click: t.onCancelClick
                    }
                }, [t._v("取消")])])])])])
            },
            staticRenderFns: []
        }
    }
    , function (t, e) {
        t.exports = {
            render: function () {
                var t = this
                    , e = t.$createElement
                    , i = t._self._c || e;
                return i("div", {
                    staticClass: "company"
                }, [i("p", {
                    staticClass: "J-company-name"
                }, [t._v(" © " + t._s(t.year) + " 今日头条")]), t._v(" "), i("p", [i("a", {
                    attrs: {
                        href: "http://www.shdf.gov.cn/shdf/channels/740.html",
                        target: "_blank"
                    }
                }, [i("img", {
                    attrs: {
                        src: t.sfdfImg
                    }
                }), t._v(" 扫黄打非网上举报\n    ")])]), t._v(" "), i("a", {
                    attrs: {
                        href: "http://www.12377.cn/",
                        target: "_blank",
                        ga_event: "click_about"
                    }
                }, [t._v("中国互联网举报中心")]), t._v(" "), i("a", {
                    attrs: {
                        href: "https://tsm.miit.gov.cn/dxxzsp/",
                        target: "_blank",
                        ga_event: "click_about"
                    }
                }, [t._v("京ICP证140141号")]), t._v(" "), t._m(0), t._v(" "), i("a", {
                    attrs: {
                        href: "/business_license/",
                        target: "_blank"
                    }
                }, [t._v("营业执照")]), t._v(" "), i("p", [t._v("京-非经营性-2016-0081")]), t._v(" "), i("p", [t._v("互联网药品信息服务资格证书")]), t._v(" "), t._m(1), t._v(" "), i("span", [t._v("违法和不良信息举报：400-140-2108")]), t._v(" "), i("span", [t._v("举报邮箱：jubao@toutiao.com")]), t._v(" "), i("span", [t._v("公司名称：北京字节跳动科技有限公司")]), t._v(" "), i("a", {
                    attrs: {
                        href: "http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11000002002023",
                        target: "_blank",
                        ga_event: "click_about"
                    }
                }, [i("img", {
                    attrs: {
                        src: t.gonganImg
                    }
                }), t._v(" 京公网安备 11000002002023号")])])
            },
            staticRenderFns: [function () {
                var t = this
                    , e = t.$createElement
                    , i = t._self._c || e;
                return i("div", [i("a", {
                    attrs: {
                        href: "http://beian.miit.gov.cn",
                        target: "_blank",
                        ga_event: "click_about"
                    }
                }, [t._v("京ICP备12025439号-3\n    ")]), t._v(" "), i("a", {
                    staticClass: "icp",
                    attrs: {
                        href: "/license/",
                        target: "_blank"
                    }
                }, [t._v("网络文化经营许可证")])])
            }
                , function () {
                    var t = this
                        , e = t.$createElement
                        , i = t._self._c || e;
                    return i("p", [i("a", {
                        attrs: {
                            href: "/a3642705768/",
                            target: "_blank"
                        }
                    }, [t._v("跟帖评论自律管理承诺书")])])
                }
            ]
        }
    }
    , function (t, e) {
        t.exports = {
            render: function () {
                var t = this
                    , e = t.$createElement
                    , i = t._self._c || e;
                return i("div", {
                    staticClass: "bui-box ugc-mode",
                    style: t.styles,
                    attrs: {
                        ga_event: "ugc_item_click"
                    }
                }, [t.item.ugc_data.ugc_images.length ? i("div", {
                    staticClass: "bui-left ugc-mode-lbox",
                    attrs: {
                        ga_event: "ugc_img_click"
                    }
                }, [i("a", {
                    staticClass: "img-wrap",
                    attrs: {
                        href: t.item.source_url,
                        target: "_blank"
                    }
                }, [i("img", {
                    directives: [{
                        name: "lazy",
                        rawName: "v-lazy",
                        value: t.item.ugc_data.ugc_images[0],
                        expression: "item.ugc_data.ugc_images[0]"
                    }],
                    staticClass: "lazy-load-img"
                })]), t._v(" "), t.item.ugc_data.ugc_images.length > 1 ? i("span", {
                    staticClass: "pic-tip"
                }, [t._v(t._s(t.item.ugc_data.ugc_images.length) + "图")]) : t._e()]) : t._e(), t._v(" "), i("div", {
                    staticClass: "ugc-mode-right ugc-mode-rbox"
                }, [i("div", {
                    staticClass: "ugc-mode-rbox-inner"
                }, [i("div", {
                    staticClass: "ugc-mode-user"
                }, [i("a", {
                    staticClass: "ugc-avatar",
                    attrs: {
                        href: t.item.ugc_data.ugc_user.open_url,
                        target: "_blank",
                        ga_event: "ugc_avatar_click"
                    }
                }, [i("img", {
                    directives: [{
                        name: "lazy",
                        rawName: "v-lazy",
                        value: t.item.ugc_data.ugc_user.avatar_url,
                        expression: "item.ugc_data.ugc_user.avatar_url"
                    }]
                })]), t._v(" "), i("div", {
                    staticClass: "ugc-desc"
                }, [i("a", {
                    staticClass: "ugc-name",
                    attrs: {
                        href: t.item.ugc_data.ugc_user.open_url,
                        target: "_blank",
                        ga_event: "ugc_name_click"
                    }
                }, [i("span", [t._v(t._s(t.item.ugc_data.ugc_user.name))]), t._v(" "), t.item.ugc_data.ugc_user.user_verified ? [i("tt-icon", {
                    attrs: {
                        type: "symbolv",
                        size: "16",
                        color: "#FEC346"
                    }
                })] : t._e(), t._v(" "), i("tt-icon", {
                    attrs: {
                        type: "vtt",
                        size: "20",
                        color: "#FF9818"
                    }
                })], 2), t._v(" "), i("p", {
                    staticClass: "ugc-meta"
                }, [t.item.ugc_data.ugc_user.is_following ? i("span", [t._v("已关注")]) : i("span", [t._v("未关注")]), t._v(" "), t.item.ugc_data.ugc_user.user_auth_info.auth_info ? i("span", [t._v(" · " + t._s(t.item.ugc_data.ugc_user.user_auth_info.auth_info))]) : t._e()])])]), t._v(" "), i("div", {
                    staticClass: "ugc-mode-content",
                    attrs: {
                        ga_event: "ugc_content_click"
                    }
                }, [t.item.ugc_data.rich_content ? i("a", {
                    attrs: {
                        href: t.item.source_url,
                        target: "_blank"
                    },
                    domProps: {
                        innerHTML: t._s(t.item.ugc_data.rich_content)
                    }
                }) : i("a", {
                    attrs: {
                        href: t.item.source_url,
                        target: "_blank"
                    }
                }, [t._v(t._s(t.item.ugc_data.content))])]), t._v(" "), i("div", {
                    staticClass: "bui-box ugc-mode-footer"
                }, [i("div", {
                    staticClass: "bui-left ugc-mode-footer-left",
                    attrs: {
                        ga_event: "ugc_comment_click"
                    }
                }, [i("a", {
                    staticClass: "ugc-mode-action source",
                    attrs: {
                        href: t.item.source_url,
                        target: "_blank"
                    }
                }, [t._v(t._s(t._f("formatCount")(t.item.ugc_data.digg_count)) + "赞")]), t._v(" "), i("a", {
                    staticClass: "ugc-mode-action source",
                    attrs: {
                        href: t.item.source_url + "/#comment_area",
                        target: "_blank"
                    }
                }, [t._v(" · " + t._s(t._f("formatCount")(t.item.ugc_data.comment_count)) + "评论")]), t._v(" "), i("a", {
                    staticClass: "ugc-mode-action source",
                    attrs: {
                        href: t.item.source_url,
                        target: "_blank"
                    }
                }, [t._v(" · " + t._s(t._f("formatCount")(t.item.ugc_data.show_count || t.item.ugc_data.read_count)) + t._s(t.item.ugc_data.show_text || "阅读"))]), t._v(" "), i("span", {
                    staticClass: "ugc-mode-action"
                }, [t._v(" · " + t._s(t.item.time_ago))])]), t._v(" "), i("div", {
                    staticClass: "bui-right"
                }, [i("Dislike", {
                    attrs: {
                        group_id: t.item.group_id
                    }
                })], 1)])])])])
            },
            staticRenderFns: []
        }
    }
    , function (t, e) {
        t.exports = {
            render: function () {
                var t = this
                    , e = t.$createElement
                    , i = t._self._c || e;
                return i("ul", {
                    staticClass: "slide-list"
                }, t._l(t.slideList, function (e, n) {
                    return i("li", {
                        staticClass: "slide-item",
                        class: [n === t.currentIndex ? "slide-item-active" : ""],
                        attrs: {
                            ga_event: "focus_list_click"
                        }
                    }, [i("a", {
                        attrs: {
                            href: e.display_url,
                            target: "_blank"
                        }
                    }, [i("img", {
                        attrs: {
                            src: e.image_url,
                            alt: ""
                        }
                    }), t._v(" "), i("p", {
                        staticClass: "title"
                    }, [t._v(t._s(e.title))])])])
                }), 0)
            },
            staticRenderFns: []
        }
    }
    , function (t, e) {
        t.exports = {
            render: function () {
                var t = this
                    , e = t.$createElement
                    , i = t._self._c || e;
                return i("div", {
                    staticClass: "feedback"
                }, [i("a", {
                    staticClass: "feedback-text",
                    attrs: {
                        href: "javascript:void(0)"
                    },
                    on: {
                        click: function (e) {
                            t.feedbackDialogVisible = !0
                        }
                    }
                }, [t._v("反馈")]), t._v(" "), i("tt-dialog", {
                    attrs: {
                        title: "意见反馈",
                        size: "tiny"
                    },
                    model: {
                        value: t.feedbackDialogVisible,
                        callback: function (e) {
                            t.feedbackDialogVisible = e
                        },
                        expression: "feedbackDialogVisible"
                    }
                }, [i("div", {
                    staticClass: "content"
                }, [i("p", {
                    staticClass: "label"
                }, [t._v("联系方式（必填）")]), t._v(" "), i("div", {
                    staticClass: "input-group"
                }, [i("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.feedbackEmail,
                        expression: "feedbackEmail"
                    }],
                    staticClass: "email",
                    attrs: {
                        placeholder: "您的邮箱/QQ号",
                        type: "text"
                    },
                    domProps: {
                        value: t.feedbackEmail
                    },
                    on: {
                        input: function (e) {
                            e.target.composing || (t.feedbackEmail = e.target.value)
                        }
                    }
                })]), t._v(" "), i("p", {
                    staticClass: "label"
                }, [t._v("您的意见（必填）")]), t._v(" "), i("div", {
                    staticClass: "input-group"
                }, [i("textarea", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.feedbackContent,
                        expression: "feedbackContent"
                    }],
                    staticClass: "text",
                    attrs: {
                        maxlength: "140",
                        placeholder: "请填写您的意见，不超过140字"
                    },
                    domProps: {
                        value: t.feedbackContent
                    },
                    on: {
                        input: function (e) {
                            e.target.composing || (t.feedbackContent = e.target.value)
                        }
                    }
                })])]), t._v(" "), i("span", {
                    staticClass: "dialog-footer",
                    attrs: {
                        slot: "footer"
                    },
                    slot: "footer"
                }, [i("tt-button", {
                    on: {
                        click: function (e) {
                            t.feedbackDialogVisible = !1
                        }
                    }
                }, [t._v("取消")]), t._v(" "), i("tt-button", {
                    staticClass: "submit",
                    attrs: {
                        type: "primary",
                        disabled: t.isSubmitDisabled
                    },
                    on: {
                        click: t.submit
                    }
                }, [t._v("确认")])], 1)])], 1)
            },
            staticRenderFns: []
        }
    }
    , function (t, e) {
        t.exports = {
            render: function () {
                var t = this
                    , e = t.$createElement
                    , i = t._self._c || e;
                return i("div", {
                    staticClass: "more-mode",
                    attrs: {
                        ga_event: t.item.article_genre + "_item_click"
                    }
                }, [i("div", {
                    staticClass: "title-box",
                    attrs: {
                        ga_event: t.item.article_genre + "_title_click"
                    }
                }, [i("a", {
                    staticClass: "link",
                    attrs: {
                        href: t.item.source_url,
                        target: "_blank"
                    }
                }, [t._v(t._s(t.item.title))])]), t._v(" "), i("div", {
                    staticClass: "bui-box img-list",
                    attrs: {
                        ga_event: t.item.article_genre + "_img_click"
                    }
                }, [t._l(t.item.image_list, function (e, n) {
                    return i("a", {
                        staticClass: "img-wrap img-item",
                        attrs: {
                            href: e.source_url || t.item.source_url,
                            target: "_blank"
                        }
                    }, [i("img", {
                        directives: [{
                            name: "lazy",
                            rawName: "v-lazy",
                            value: e.url,
                            expression: "img.url"
                        }],
                        staticClass: "lazy-load-img"
                    })])
                }), t._v(" "), t.item.image_list.length < 4 ? i("a", {
                    staticClass: "img-wrap img-item",
                    attrs: {
                        href: t.item.source_url,
                        target: "_blank"
                    }
                }, [i("span", {
                    staticClass: "more-info"
                }, [t._v("\n        查看详情 "), i("tt-icon", {
                    attrs: {
                        type: "nextpagetool",
                        color: "#406599",
                        size: "12"
                    }
                })], 1)]) : t._e(), t._v(" "), t.item.ad_label ? t._e() : i("i", {
                    staticClass: "pic-tip"
                }, [i("span", [t._v(t._s(t.item.gallary_image_count) + "图")])])], 2), t._v(" "), i("FooterBar", {
                    attrs: {
                        item: t.item
                    }
                })], 1)
            },
            staticRenderFns: []
        }
    }
    , function (t, e) {
        t.exports = {
            render: function () {
                var t = this
                    , e = t.$createElement
                    , i = t._self._c || e;
                return i("div", {
                    staticClass: "refresh-mode",
                    attrs: {
                        ga_event: "refresh_item_click"
                    }
                }, [i("span", [t._v(t._s(t.item.time_ago) + "看到这里")]), t._v("\n   点击刷新 "), i("tt-icon", {
                    attrs: {
                        type: "refresh",
                        size: "12",
                        color: "#2A90D7"
                    }
                })], 1)
            },
            staticRenderFns: []
        }
    }
    , function (t, e) {
        t.exports = {
            render: function () {
                var t = this
                    , e = t.$createElement
                    , i = t._self._c || e;
                return i("pane-module", {
                    attrs: {
                        title: t.title
                    }
                }, [i("template", {
                    slot: "content"
                }, [i("ul", {
                    staticClass: "friend-links-content"
                }, t._l(t.friendLink, function (e) {
                    return i("li", {
                        key: e.name,
                        staticClass: "item"
                    }, [i("a", {
                        attrs: {
                            rel: "noopener noreferrer",
                            target: "_blank",
                            href: e.url
                        }
                    }, [t._v(t._s(e.name))])])
                }), 0)])], 2)
            },
            staticRenderFns: []
        }
    }
    , , , , , , , , function (t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var i = "/pgc"
            , n = i + "/thread/get_suggest_words/"
            ,
            a = "/mp/agw/article_material/photo/upload_picture/?without_check=1&type=ueditor&pgc_watermark=1&action=uploadimage&encode=utf-8"
            , s = function (t) {
                return "/mp/agw/article_material/photo/upload_picture/?without_check=1&type=ueditor&pgc_watermark=1&pic_url=" + t
            }
            , o = i + "/get_bind_mobile/"
            , r = i + "/media/permissions/article/post/"
            , l = "/mp/agw/media/add_media_account"
            , u = "/mp/agw/article/publish/?source=toutiaoPC&type=article&app_name=toutiao.com";
        e.urlPrefix = i,
            e.getSuggestWordsUrl = n,
            e.mpUploadImg = a,
            e.getBindMobile = o,
            e.getMediaPermissions = r,
            e.getMediaAccount = l,
            e.publishArticleUrl = u,
            e.mpUploadImgByUrl = s
    }
    , function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
            e.ImageCommon = void 0;
        var a = i(43)
            , s = n(a)
            , o = i(67);
        e.ImageCommon = {
            props: {
                attrs: {
                    validator: function (t) {
                        return "string" == typeof t.src && "string" == typeof t.alt
                    },
                    default: function () {
                        return {
                            src: "",
                            alt: "",
                            width: void 0,
                            height: void 0,
                            align: "center",
                            "data-height:": void 0,
                            "data-width": void 0,
                            image_type: 1,
                            mime_type: "",
                            web_uri: "",
                            img_width: void 0,
                            img_height: void 0
                        }
                    }
                },
                adapter: {
                    validator: function (t) {
                        return "object" === ("undefined" == typeof t ? "undefined" : (0,
                            s.default)(t))
                    },
                    default: null
                },
                dispatchUpdate: {
                    validator: function (t) {
                        return "function" == typeof t
                    },
                    default: o.Types.noop
                },
                isSelected: {
                    validator: function (t) {
                        return "boolean" == typeof t || "undefined" == typeof t
                    },
                    default: !1
                },
                position: {
                    validator: function (t) {
                        return null === t || "function" == typeof t
                    },
                    default: null
                }
            },
            data: function () {
                return {
                    objectURL: null
                }
            },
            computed: {
                fixerStyle: function () {
                    var t = this.$props.attrs
                        , e = t.align
                        , i = t.height
                        ,
                        n = "\n        width: 375px;\n        height: " + (i + 50) + "px;\n        margin-left: " + ("left" === e ? 0 : "auto") + ";\n        margin-right: " + ("right" === e ? 0 : "auto") + ";\n      ";
                    return n
                }
            }
        }
    }
    , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function (t, e) {
    }
    , , , , , , , , , , , , , , , , , , , function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = i(741)
            , s = n(a);
        e.default = s.default
    }
    , function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = i(369)
            , s = n(a);
        e.default = s.default
    }
    , function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function a() {
        }

        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
            e.Mask = void 0;
        var s = i(25)
            , o = n(s)
            , r = i(743)
            , l = n(r)
            , u = void 0
            , c = o.default.extend(l.default);
        a.show = function (t) {
            var e = t.onOk
                , i = t.onCancel;
            u = new c({
                el: document.createElement("div")
            }),
            e && (u.onOk = e),
            i && (u.onCancel = i),
                document.body.appendChild(u.$el)
        }
            ,
            a.close = function () {
                document.body.removeChild(u.$el)
            }
            ,
            e.default = a,
            e.Mask = a
    }
    , function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = i(744)
            , s = n(a);
        e.default = s.default
    }
    , function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = i(746)
            , s = n(a);
        e.default = s.default
    }
    , function (t, e) {
        "use strict";

        function i(t, e, i) {
            this.uploader = t,
                this.file = e,
                this.status = 0,
                this.progress = 0,
                this.uploadedBytes = 0,
                this.useChunk = i.useChunk || !1,
                this.chunkSize = i.chunkSize || 0,
                uploadUtils.isFile(e) ? this._createFile(e) : this._createFileFromInput(e.value),
                this.useChunk = this.useChunk && this.size > this.chunkSize
        }

        var n = 1
            , a = 2
            , s = 3
            , o = 4
            , r = 5;
        i.prototype._createFileFromInput = function (t) {
            this.lastModifiedDate = null,
                this.size = null,
                this.type = "file/" + t.slice(t.lastIndexOf(".") + 1).toLowerCase(),
                this.name = t.slice(t.lastIndexOf("/") + t.lastIndexOf("\\") + 2)
        }
            ,
            i.prototype._createFile = function (t) {
                this.lastModifiedDate = t.lastModifiedDate,
                    this.size = t.size,
                    this.type = t.type,
                    this.name = t.name
            }
            ,
            i.prototype._slice = function (t, e) {
                var i = this.file.slice || this.file.mozSlice || this.file.webkitSlice;
                return i ? i.call(this.file, t, e, this.type) : this.file
            }
            ,
            i.prototype.getChunkFile = function () {
                var t = this.uploadedBytes
                    , e = t + this.chunkSize;
                return e > this.size && (e = this.size,
                    this.chunkSize = e - this.uploadedBytes),
                    {
                        start: t,
                        end: e,
                        file: this._slice(t, e)
                    }
            }
            ,
            i.prototype.upload = function () {
                try {
                    this.uploader.uploadItem(this)
                } catch (t) {
                    throw t
                }
            }
            ,
            i.prototype.cancel = function () {
                this.uploader.abortItem(this)
            }
            ,
            i.prototype.onPrepareUpload = function () {
                this.status = n
            }
            ,
            i.prototype.onBeforeUpload = function () {
                this.status = a
            }
            ,
            i.prototype.onProgress = function (t, e) {
                this.status === a && (this.useChunk ? this.progress = Math.round((this.uploadedBytes + t) / this.size * 100) : this.progress = Math.round(t / e * 100))
            }
            ,
            i.prototype.onAbort = function () {
                this.status = s
            }
            ,
            i.prototype.onSuccess = function () {
                this.useChunk ? (this.uploadedBytes += this.chunkSize,
                this.uploadedBytes === this.size && (this.status = o)) : this.status = o
            }
            ,
            i.prototype.onError = function () {
                this.status = r
            }
            ,
            window.FileItem = i,
            t.exports = i
    }
    , function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = i(280)
            , s = n(a)
            , o = i(68)
            , r = i(114)
            , l = i(750)
            , u = n(l)
            , c = i(272)
            , d = n(c)
            , h = i(7)
            , m = n(h)
            , _ = i(376)
            , p = i(278)
            , f = 5242880;
        (0,
            r.setTweetConfiguration)({
            component: u.default,
            searchHandler: function (t, e, i, n, a) {
                (0,
                    m.default)({
                    url: p.getSuggestWordsUrl + "?type=" + e + "&words="
                }).then(function (s) {
                    s && s.data && "success" === s.message && t.emit("suggest", e, s.data.suggest_words, n, i, a)
                })
            }
        });
        var g = function (t) {
            if ("string" == typeof t && t.indexOf("/pgc-image") === -1)
                return new s.default(function (e) {
                        (0,
                            d.default)({
                            method: "post",
                            url: (0,
                                p.mpUploadImgByUrl)(t)
                        }).then(function (t) {
                            if (t.data && "SUCCESS" === t.data.state) {
                                window.TEA("toutiao_pictures_add_success", {
                                    multi_publisher_type: "write_article"
                                });
                                var i = t.data
                                    , n = i.url
                                    , a = i.height
                                    , s = i.width
                                    , o = i.web_uri
                                    , r = i.image_type
                                    , l = i.mime_type
                                    , u = v(s, a);
                                e({
                                    src: n,
                                    height: u.height,
                                    width: u.width,
                                    "data-height": a || 0,
                                    "data-width": s || 0,
                                    image_type: r || 1,
                                    mime_type: l,
                                    web_uri: o,
                                    img_width: s || 0,
                                    img_height: a || 0
                                })
                            } else
                                alert("图片上传失败，请重新上传"),
                                    e({
                                        destory: !0
                                    })
                        }).catch(function () {
                            alert("图片上传失败，请重新上传"),
                                e({
                                    destory: !0
                                })
                        })
                    }
                );
            if (t.size > f)
                return alert("图片过大，上传失败"),
                    s.default.resolve({
                        destory: !0
                    });
            var e = new FormData;
            return e.append("upfile", t),
                e.append("type", t.type),
                new s.default(function (t) {
                        return (0,
                            d.default)({
                            method: "post",
                            url: p.mpUploadImg,
                            data: e,
                            config: {
                                headers: {
                                    "Content-Type": "multipart/form-data"
                                }
                            }
                        }).then(function (e) {
                            if (e.data && "SUCCESS" === e.data.state) {
                                window.TEA("toutiao_pictures_add_success", {
                                    multi_publisher_type: "write_article"
                                });
                                var i = e.data
                                    , n = i.url
                                    , a = i.height
                                    , s = i.width
                                    , o = i.web_uri
                                    , r = i.image_type
                                    , l = i.mime_type
                                    , u = v(s, a);
                                t({
                                    src: n,
                                    height: u.height,
                                    width: u.width,
                                    "data-height": a || 0,
                                    "data-width": s || 0,
                                    image_type: r || 1,
                                    mime_type: l,
                                    web_uri: o,
                                    img_width: s || 0,
                                    img_height: a || 0
                                })
                            } else
                                t({
                                    destory: !0
                                })
                        }).catch(function () {
                            alert("图片上传失败，请重新上传"),
                                t({
                                    destory: !0
                                })
                        })
                    }
                )
        }
            , v = function (t, e) {
            var i = 375
                , n = 300
                , a = t
                , s = e
                , o = a / s
                , r = 0
                , l = 0;
            return r = a > i ? i : a < 50 ? 50 : a,
                l = r / o,
            l > n && (l = n,
                r = n * o),
                {
                    height: l,
                    width: r
                }
        }
            , w = function () {
            return (0,
                r.setImageConfiguration)({
                uploader: function (t) {
                    return g(t)
                },
                allowDomains: ["https://p"]
            })
        }
            , y = function () {
            w();
            var t = {
                Plugins: [o.BackgroundPlugin, o.BlockQuotePlugin, o.BoldPlugin, o.BulletListPlugin, o.ColorPlugin, o.FontSizePlugin, o.HrPlugin, o.ListItemPlugin, o.MarkPlugin, o.SubPlugin, o.OrderedListPlugin, o.UnderlinePlugin, o.HeaderPlugin, _.ImagePlugin, r.TweetPlugin],
                Modules: [{
                    Ctor: o.ToolbarLoader,
                    option: {
                        themeColor: "#3C8BFF",
                        className: "syl-toolbar",
                        scrollTop: 145,
                        fixedTop: 60,
                        Component: r.Toolbar,
                        RenderBridge: r.VueRenderer,
                        tools: ["bold", "underline", "header", "block_quote", "bullet_list", "ordered_list", "hr", "|", "image", "redo", "undo"],
                        tooltips: {
                            redo: "重做",
                            bold: "加粗",
                            underline: "下划线",
                            block_quote: "引用",
                            bullet_list: "无序列表",
                            ordered_list: "有序列表",
                            hr: "分割线",
                            image: "插入图片",
                            undo: "撤销"
                        }
                    }
                }]
            };
            return t
        };
        e.default = y
    }
    , function (t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        e.config = {
            name: "image",
            tagName: function () {
                return "img"
            },
            parseDOM: [{
                tag: "img",
                getAttrs: function (t) {
                    return !!t.src && {
                        src: t.src || "",
                        alt: t.alt || "",
                        width: t.width,
                        height: t.height,
                        image_type: t.getAttribute("image_type"),
                        mime_type: t.getAttribute("mime_type")
                    }
                }
            }, {
                tag: ".sylimage-wrapper",
                getAttrs: function (t) {
                    var e = t.querySelector("img")
                        , i = t.querySelector(".sylimage-caption")
                        , n = t.querySelector("sylimage-fixer")
                        , a = i && (i.innerText || i.value) || ""
                        , s = e && e.src || ""
                        , o = e.width
                        , r = e.height
                        , l = void 0;
                    return l = n && n.classList.contains("left") ? "left" : n && n.classList.contains("right") ? "right" : "center",
                        {
                            src: s,
                            alt: a,
                            width: o,
                            height: r,
                            align: l
                        }
                }
            }],
            attrs: {
                src: {
                    default: ""
                },
                alt: {
                    default: ""
                },
                width: {
                    default: 0
                },
                height: {
                    default: 0
                },
                align: {
                    default: "center"
                },
                "data-height": {
                    default: 0
                },
                "data-width": {
                    default: 0
                },
                image_type: {
                    default: 1
                },
                mime_type: {
                    default: ""
                },
                web_uri: {
                    default: ""
                },
                img_width: {
                    default: 0
                },
                img_height: {
                    default: 0
                }
            }
        }
    }
    , function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
            e.ImagePlugin = void 0;
        var a, s, o = i(405), r = n(o), l = i(161), u = n(l), c = i(413), d = n(c), h = i(412), m = n(h), _ = i(67),
            p = i(68), f = i(114), g = i(747), v = n(g), w = i(748), y = n(w), b = i(374), x = function (t) {
                function e(t, i) {
                    (0,
                        u.default)(this, e);
                    var n = (0,
                        d.default)(this, (e.__proto__ || (0,
                        r.default)(e)).call(this, t, i));
                    return n.name = "image",
                        n.toolbar = {
                            className: "image",
                            tooltip: "image",
                            handler: function (t) {
                                n.fileInput.click()
                            }
                        },
                        n.fileInput = p.Image.ImageService.ImageFileInputFactory(t),
                        t.root.appendChild(n.fileInput),
                        n
                }

                return (0,
                    m.default)(e, t),
                    e
            }(_.SylController), C = (a = (0,
                _.configuration)(b.config),
            a(s = function (t) {
                function e() {
                    var t;
                    (0,
                        u.default)(this, e);
                    for (var i = arguments.length, n = Array(i), a = 0; a < i; a++)
                        n[a] = arguments[a];
                    var s = (0,
                        d.default)(this, (t = e.__proto__ || (0,
                        r.default)(e)).call.apply(t, [this].concat(n)));
                    return s.ViewMap = {
                        template: y.default,
                        mask: v.default
                    },
                        s.renderer = s.mount({
                            name: "image"
                        }),
                        s
                }

                return (0,
                    m.default)(e, t),
                    e
            }(f.Card)) || s);
        e.ImagePlugin = function (t) {
            function e() {
                var t;
                (0,
                    u.default)(this, e);
                for (var i = arguments.length, n = Array(i), a = 0; a < i; a++)
                    n[a] = arguments[a];
                var s = (0,
                    d.default)(this, (t = e.__proto__ || (0,
                    r.default)(e)).call.apply(t, [this].concat(n)));
                return s.Controller = x,
                    s.Schema = C,
                    s
            }

            return (0,
                m.default)(e, t),
                e
        }(_.SylPlugin)
    }
    , function (t, e, i) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
            e.setImageConfiguration = e.ImagePlugin = void 0;
        var n = i(375);
        Object.defineProperty(e, "ImagePlugin", {
            enumerable: !0,
            get: function () {
                return n.ImagePlugin
            }
        });
        var a = i(68);
        e.setImageConfiguration = a.Image.ImageService.setImageConfiguration
    }
    , function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        var a = i(43)
            , s = n(a)
            , o = {
            isOnline: function () {
                return window.navigator.onLine
            },
            isHTML5: function () {
                return !(!window.FormData || !File)
            },
            extend: function (t) {
                var e = arguments.length;
                if (e < 2 || null == t)
                    return t;
                for (var i = 1; i < e; i++) {
                    var n = arguments[i];
                    for (var a in n)
                        Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a])
                }
                return t
            },
            isFile: function (t) {
                return !!(t instanceof File && (t.size >= 0 || t.type))
            },
            isFileList: function (t) {
                return t instanceof FileList
            },
            isArray: function (t) {
                return "[object Array]" === Object.prototype.toString.call(t)
            },
            isEmptyObject: function (t) {
                if (this.isObject(t)) {
                    var e = null;
                    for (e in t)
                        if (e)
                            return !1
                }
                return !0
            },
            isObject: function (t) {
                return null !== t && "object" === ("undefined" == typeof t ? "undefined" : (0,
                    s.default)(t))
            },
            toArray: function (t) {
                if (!t || 0 === t.length)
                    return [];
                if (!t.length)
                    return t;
                try {
                    return [].slice.call(t)
                } catch (a) {
                    for (var e = 0, i = t.length, n = []; e < i; e++)
                        n.push(t[e]);
                    return n
                }
            }
        };
        window.uploadUtils = o,
            t.exports = o
    }
    , function (t, e) {
        "use strict";

        function i(t) {
            var e = /(\[[^\]]+[\]])+?/g
                , i = RegExp(e.source);
            return t && i.test(t) ? t.replace(e, function (t) {
                return n[t] ? '<i class="emoji" style="background-image:url(//s3.pstatp.com/toutiao/tt_tps/static/images/ttemoji_v2/' + n[t].image + ')"></i>' : t
            }) : t
        }

        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
            e.default = i;
        var n = e.emojiResourceList = {
            "[微笑]": {
                index: 1,
                name: "[微笑]",
                image: "emoji_1_smile@3x.png",
                key: "emoji_1_smile@3x.png",
                width: 96,
                height: 96
            },
            "[爱慕]": {
                index: 2,
                name: "[爱慕]",
                image: "emoji_2_kiss@3x.png",
                key: "emoji_2_kiss@3x.png",
                width: 96,
                height: 96
            },
            "[惊呆]": {
                index: 3,
                name: "[惊呆]",
                image: "emoji_3_daze@3x.png",
                key: "emoji_3_daze@3x.png",
                width: 96,
                height: 96
            },
            "[酷拽]": {
                index: 4,
                name: "[酷拽]",
                image: "emoji_4_smoke@3x.png",
                key: "emoji_4_smoke@3x.png",
                width: 96,
                height: 96
            },
            "[抠鼻]": {
                index: 5,
                name: "[抠鼻]",
                image: "emoji_5_pick_nose@3x.png",
                key: "emoji_5_pick_nose@3x.png",
                width: 96,
                height: 96
            },
            "[流泪]": {
                index: 6,
                name: "[流泪]",
                image: "emoji_6_cry@3x.png",
                key: "emoji_6_cry@3x.png",
                width: 96,
                height: 96
            },
            "[发怒]": {
                index: 7,
                name: "[发怒]",
                image: "emoji_7_anger@3x.png",
                key: "emoji_7_anger@3x.png",
                width: 96,
                height: 96
            },
            "[呲牙]": {
                index: 8,
                name: "[呲牙]",
                image: "emoji_8_laugh@3x.png",
                key: "emoji_8_laugh@3x.png",
                width: 96,
                height: 96
            },
            "[鼾睡]": {
                index: 9,
                name: "[鼾睡]",
                image: "emoji_9_sleep@3x.png",
                key: "emoji_9_sleep@3x.png",
                width: 96,
                height: 96
            },
            "[害羞]": {
                index: 10,
                name: "[害羞]",
                image: "emoji_10_shy@3x.png",
                key: "emoji_10_shy@3x.png",
                width: 96,
                height: 96
            },
            "[可爱]": {
                index: 11,
                name: "[可爱]",
                image: "emoji_11_naughty@3x.png",
                key: "emoji_11_naughty@3x.png",
                width: 102,
                height: 96
            },
            "[晕]": {
                index: 12,
                name: "[晕]",
                image: "emoji_12_dizzy@3x.png",
                key: "emoji_12_dizzy@3x.png",
                width: 96,
                height: 96
            },
            "[衰]": {
                index: 13,
                name: "[衰]",
                image: "emoji_13_stunned@3x.png",
                key: "emoji_13_stunned@3x.png",
                width: 96,
                height: 96
            },
            "[闭嘴]": {
                index: 14,
                name: "[闭嘴]",
                image: "emoji_14_shut_up@3x.png",
                key: "emoji_14_shut_up@3x.png",
                width: 96,
                height: 96
            },
            "[机智]": {
                index: 15,
                name: "[机智]",
                image: "emoji_15_wit@3x.png",
                key: "emoji_15_wit@3x.png",
                width: 96,
                height: 96
            },
            "[来看我]": {
                index: 16,
                name: "[来看我]",
                image: "emoji_16_attention@3x.png",
                key: "emoji_16_attention@3x.png",
                width: 108,
                height: 96
            },
            "[灵光一闪]": {
                index: 17,
                name: "[灵光一闪]",
                image: "emoji_17_hand_sample@3x.png",
                key: "emoji_17_hand_sample@3x.png",
                width: 102,
                height: 96
            },
            "[耶]": {
                index: 18,
                name: "[耶]",
                image: "emoji_18_ye@3x.png",
                key: "emoji_18_ye@3x.png",
                width: 99,
                height: 96
            },
            "[捂脸]": {
                index: 19,
                name: "[捂脸]",
                image: "emoji_19_distress_situation@3x.png",
                key: "emoji_19_distress_situation@3x.png",
                width: 96,
                height: 96
            },
            "[打脸]": {
                index: 20,
                name: "[打脸]",
                image: "emoji_20_play_face@3x.png",
                key: "emoji_20_play_face@3x.png",
                width: 102,
                height: 96
            },
            "[大笑]": {
                index: 21,
                name: "[大笑]",
                image: "emoji_21_smile@3x.png",
                key: "emoji_21_smile@3x.png",
                width: 96,
                height: 96
            },
            "[哈欠]": {
                index: 22,
                name: "[哈欠]",
                image: "emoji_22_yawn@3x.png",
                key: "emoji_22_yawn@3x.png",
                width: 96,
                height: 96
            },
            "[震惊]": {
                index: 23,
                name: "[震惊]",
                image: "emoji_23_surprise@3x.png",
                key: "emoji_23_surprise@3x.png",
                width: 96,
                height: 96
            },
            "[送心]": {
                index: 24,
                name: "[送心]",
                image: "emoji_24_take_heart@3x.png",
                key: "emoji_24_take_heart@3x.png",
                width: 96,
                height: 96
            },
            "[困]": {
                index: 25,
                name: "[困]",
                image: "emoji_25_sleepy@3x.png",
                key: "emoji_25_sleepy@3x.png",
                width: 96,
                height: 96
            },
            "[what]": {
                index: 26,
                name: "[what]",
                image: "emoji_26_what@3x.png",
                key: "emoji_26_what@3x.png",
                width: 105,
                height: 96
            },
            "[泣不成声]": {
                index: 27,
                name: "[泣不成声]",
                image: "emoji_27_sobbing@3x.png",
                key: "emoji_27_sobbing@3x.png",
                width: 96,
                height: 96
            },
            "[小鼓掌]": {
                index: 28,
                name: "[小鼓掌]",
                image: "emoji_28_handclap@3x.png",
                key: "emoji_28_handclap@3x.png",
                width: 96,
                height: 96
            },
            "[酷]": {
                index: 29,
                name: "[酷]",
                image: "emoji_29_cool@3x.png",
                key: "emoji_29_cool@3x.png",
                width: 96,
                height: 96
            },
            "[大金牙]": {
                index: 29,
                name: "[大金牙]",
                image: "emoji_29_cool@3x.png",
                key: "emoji_29_cool@3x.png",
                width: 96,
                height: 96
            },
            "[偷笑]": {
                index: 30,
                name: "[偷笑]",
                image: "emoji_30_titter@3x.png",
                key: "emoji_30_titter@3x.png",
                width: 96,
                height: 96
            },
            "[石化]": {
                index: 31,
                name: "[石化]",
                image: "emoji_31_lightning_strike@3x.png",
                key: "emoji_31_lightning_strike@3x.png",
                width: 96,
                height: 96
            },
            "[思考]": {
                index: 32,
                name: "[思考]",
                image: "emoji_32_meditation@3x.png",
                key: "emoji_32_meditation@3x.png",
                width: 96,
                height: 96
            },
            "[吐血]": {
                index: 33,
                name: "[吐血]",
                image: "emoji_33_vomiting_blood@3x.png",
                key: "emoji_33_vomiting_blood@3x.png",
                width: 96,
                height: 96
            },
            "[可怜]": {
                index: 34,
                name: "[可怜]",
                image: "emoji_34_acting_cute@3x.png",
                key: "emoji_34_acting_cute@3x.png",
                width: 96,
                height: 96
            },
            "[嘘]": {
                index: 35,
                name: "[嘘]",
                image: "emoji_35_quietly@3x.png",
                key: "emoji_35_quietly@3x.png",
                width: 96,
                height: 96
            },
            "[撇嘴]": {
                index: 36,
                name: "[撇嘴]",
                image: "emoji_36_hum@3x.png",
                key: "emoji_36_hum@3x.png",
                width: 96,
                height: 96
            },
            "[黑线]": {
                index: 37,
                name: "[黑线]",
                image: "emoji_37_khan@3x.png",
                key: "emoji_37_khan@3x.png",
                width: 96,
                height: 96
            },
            "[笑哭]": {
                index: 38,
                name: "[笑哭]",
                image: "emoji_38_forced_smile@3x.png",
                key: "emoji_38_forced_smile@3x.png",
                width: 111,
                height: 96
            },
            "[雾霾]": {
                index: 39,
                name: "[雾霾]",
                image: "emoji_39_haze@3x.png",
                key: "emoji_39_haze@3x.png",
                width: 96,
                height: 96
            },
            "[奸笑]": {
                index: 40,
                name: "[奸笑]",
                image: "emoji_40_smirk@3x.png",
                key: "emoji_40_smirk@3x.png",
                width: 96,
                height: 96
            },
            "[得意]": {
                index: 41,
                name: "[得意]",
                image: "emoji_41_cool@3x.png",
                key: "emoji_41_cool@3x.png",
                width: 96,
                height: 96
            },
            "[憨笑]": {
                index: 42,
                name: "[憨笑]",
                image: "emoji_42_bad_smile@3x.png",
                key: "emoji_42_bad_smile@3x.png",
                width: 96,
                height: 96
            },
            "[抓狂]": {
                index: 43,
                name: "[抓狂]",
                image: "emoji_43_crazy@3x.png",
                key: "emoji_43_crazy@3x.png",
                width: 96,
                height: 96
            },
            "[泪奔]": {
                index: 44,
                name: "[泪奔]",
                image: "emoji_44_tears@3x.png",
                key: "emoji_44_tears@3x.png",
                width: 96,
                height: 96
            },
            "[钱]": {
                index: 45,
                name: "[钱]",
                image: "emoji_45_money@3x.png",
                key: "emoji_45_money@3x.png",
                width: 96,
                height: 96
            },
            "[吻]": {
                index: 46,
                name: "[吻]",
                image: "emoji_46_kiss@3x.png",
                key: "emoji_46_kiss@3x.png",
                width: 96,
                height: 96
            },
            "[恐惧]": {
                index: 47,
                name: "[恐惧]",
                image: "emoji_47_fear@3x.png",
                key: "emoji_47_fear@3x.png",
                width: 96,
                height: 96
            },
            "[笑]": {
                index: 48,
                name: "[笑]",
                image: "emoji_48_smile@3x.png",
                key: "emoji_48_smile@3x.png",
                width: 96,
                height: 96
            },
            "[快哭了]": {
                index: 49,
                name: "[快哭了]",
                image: "emoji_49_injustice@3x.png",
                key: "emoji_49_injustice@3x.png",
                width: 96,
                height: 96
            },
            "[翻白眼]": {
                index: 50,
                name: "[翻白眼]",
                image: "emoji_50_their@3x.png",
                key: "emoji_50_their@3x.png",
                width: 96,
                height: 96
            },
            "[互粉]": {
                index: 51,
                name: "[互粉]",
                image: "emoji_51_focus@3x.png",
                key: "emoji_51_focus@3x.png",
                width: 96,
                height: 96
            },
            "[赞]": {
                index: 52,
                name: "[赞]",
                image: "emoji_52_like@3x.png",
                key: "emoji_52_like@3x.png",
                width: 96,
                height: 96
            },
            "[鼓掌]": {
                index: 53,
                name: "[鼓掌]",
                image: "emoji_53_handclap@3x.png",
                key: "emoji_53_handclap@3x.png",
                width: 96,
                height: 96
            },
            "[谢谢]": {
                index: 54,
                name: "[谢谢]",
                image: "emoji_54_3Q@3x.png",
                key: "emoji_54_3Q@3x.png",
                width: 96,
                height: 96
            },
            "[祈祷]": {
                index: 54,
                name: "[祈祷]",
                image: "emoji_54_3Q@3x.png",
                key: "emoji_54_3Q@3x.png",
                width: 96,
                height: 96
            },
            "[kiss]": {
                index: 55,
                name: "[kiss]",
                image: "emoji_55_kiss@3x.png",
                key: "emoji_55_kiss@3x.png",
                width: 96,
                height: 96
            },
            "[去污粉]": {
                index: 56,
                name: "[去污粉]",
                image: "emoji_56_household_cleanser@3x.png",
                key: "emoji_56_household_cleanser@3x.png",
                width: 96,
                height: 96
            },
            "[666]": {
                index: 57,
                name: "[666]",
                image: "emoji_57_666@3x.png",
                key: "emoji_57_666@3x.png",
                width: 96,
                height: 96
            },
            "[玫瑰]": {
                index: 58,
                name: "[玫瑰]",
                image: "emoji_58_rose@3x.png",
                key: "emoji_58_rose@3x.png",
                width: 96,
                height: 96
            },
            "[胡瓜]": {
                index: 59,
                name: "[胡瓜]",
                image: "emoji_59_cucumber@3x.png",
                key: "emoji_59_cucumber@3x.png",
                width: 96,
                height: 96
            },
            "[啤酒]": {
                index: 60,
                name: "[啤酒]",
                image: "emoji_60_beer@3x.png",
                key: "emoji_60_beer@3x.png",
                width: 96,
                height: 96
            },
            "[我想静静]": {
                index: 61,
                name: "[我想静静]",
                image: "emoji_61_distress_situation@3x.png",
                key: "emoji_61_distress_situation@3x.png",
                width: 105,
                height: 96
            },
            "[委屈]": {
                index: 62,
                name: "[委屈]",
                image: "emoji_62_injustice@3x.png",
                key: "emoji_62_injustice@3x.png",
                width: 96,
                height: 96
            },
            "[舔屏]": {
                index: 63,
                name: "[舔屏]",
                image: "emoji_63_lick_screen@3x.png",
                key: "emoji_63_lick_screen@3x.png",
                width: 96,
                height: 96
            },
            "[鄙视]": {
                index: 64,
                name: "[鄙视]",
                image: "emoji_64_despise@3x.png",
                key: "emoji_64_despise@3x.png",
                width: 96,
                height: 96
            },
            "[飞吻]": {
                index: 65,
                name: "[飞吻]",
                image: "emoji_65_kiss@3x.png",
                key: "emoji_65_kiss@3x.png",
                width: 96,
                height: 96
            },
            "[再见]": {
                index: 66,
                name: "[再见]",
                image: "emoji_66_bye@3x.png",
                key: "emoji_66_bye@3x.png",
                width: 96,
                height: 96
            },
            "[紫薇别走]": {
                index: 67,
                name: "[紫薇别走]",
                image: "emoji_67_erkang@3x.png",
                key: "emoji_67_erkang@3x.png",
                width: 108,
                height: 96
            },
            "[求抱抱]": {
                index: 68,
                name: "[求抱抱]",
                image: "emoji_68_hug@3x.png",
                key: "emoji_68_hug@3x.png",
                width: 108,
                height: 96
            },
            "[听歌]": {
                index: 69,
                name: "[听歌]",
                image: "emoji_69_hitler@3x.png",
                key: "emoji_69_hitler@3x.png",
                width: 96,
                height: 96
            },
            "[周冬雨的凝视]": {
                index: 70,
                name: "[周冬雨的凝视]",
                image: "emoji_70_zhoudongyu_gaze@3x.png",
                key: "emoji_70_zhoudongyu_gaze@3x.png",
                width: 96,
                height: 96
            },
            "[马思纯的微笑]": {
                index: 71,
                name: "[马思纯的微笑]",
                image: "emoji_71_masichun_smile@3x.png",
                key: "emoji_71_masichun_smile@3x.png",
                width: 96,
                height: 96
            },
            "[吐舌]": {
                index: 72,
                name: "[吐舌]",
                image: "emoji_72_dogo@3x.png",
                key: "emoji_72_dogo@3x.png",
                width: 96,
                height: 96
            },
            "[呆无辜]": {
                index: 73,
                name: "[呆无辜]",
                image: "emoji_73_cat@3x.png",
                key: "emoji_73_cat@3x.png",
                width: 96,
                height: 96
            },
            "[看]": {
                index: 74,
                name: "[看]",
                image: "emoji_74_2ha@3x.png",
                key: "emoji_74_2ha@3x.png",
                width: 96,
                height: 96
            },
            "[白眼]": {
                index: 75,
                name: "[白眼]",
                image: "emoji_75_dogo@3x.png",
                key: "emoji_75_dogo@3x.png",
                width: 96,
                height: 96
            },
            "[熊吉]": {
                index: 76,
                name: "[熊吉]",
                image: "emoji_76_bear@3x.png",
                key: "emoji_76_bear@3x.png",
                width: 96,
                height: 96
            },
            "[骷髅]": {
                index: 77,
                name: "[骷髅]",
                image: "emoji_77_skeleton@3x.png",
                key: "emoji_77_skeleton@3x.png",
                width: 96,
                height: 96
            },
            "[黑脸]": {
                index: 78,
                name: "[黑脸]",
                image: "emoji_78_black_face@3x.png",
                key: "emoji_78_black_face@3x.png",
                width: 96,
                height: 96
            },
            "[吃瓜群众]": {
                index: 79,
                name: "[吃瓜群众]",
                image: "emoji_79_eat_melon@3x.png",
                key: "emoji_79_eat_melon@3x.png",
                width: 96,
                height: 96
            },
            "[绿帽子]": {
                index: 80,
                name: "[绿帽子]",
                image: "emoji_80_green_hat@3x.png",
                key: "emoji_80_green_hat@3x.png",
                width: 96,
                height: 96
            },
            "[汗]": {
                index: 81,
                name: "[汗]",
                image: "emoji_81_sweat@3x.png",
                key: "emoji_81_sweat@3x.png",
                width: 96,
                height: 96
            },
            "[摸头]": {
                index: 82,
                name: "[摸头]",
                image: "emoji_82_lear_ropes@3x.png",
                key: "emoji_82_lear_ropes@3x.png",
                width: 96,
                height: 96
            },
            "[皱眉]": {
                index: 83,
                name: "[皱眉]",
                image: "emoji_83_frown@3x.png",
                key: "emoji_83_frown@3x.png",
                width: 96,
                height: 96
            },
            "[擦汗]": {
                index: 84,
                name: "[擦汗]",
                image: "emoji_84_wipe_sweat@3x.png",
                key: "emoji_84_wipe_sweat@3x.png",
                width: 96,
                height: 96
            },
            "[红脸]": {
                index: 85,
                name: "[红脸]",
                image: "emoji_85_redface@3x.png",
                key: "emoji_85_redface@3x.png",
                width: 96,
                height: 96
            },
            "[尬笑]": {
                index: 86,
                name: "[尬笑]",
                image: "emoji_86_orz@3x.png",
                key: "emoji_86_orz@3x.png",
                width: 96,
                height: 96
            },
            "[做鬼脸]": {
                index: 87,
                name: "[做鬼脸]",
                image: "emoji_87_makeface@3x.png",
                key: "emoji_87_makeface@3x.png",
                width: 96,
                height: 96
            },
            "[强]": {
                index: 88,
                name: "[强]",
                image: "emoji_88_intensity@3x.png",
                key: "emoji_88_intensity@3x.png",
                width: 96,
                height: 96
            },
            "[如花]": {
                index: 89,
                name: "[如花]",
                image: "emoji_89_ruhua@3x.png",
                key: "emoji_89_ruhua@3x.png",
                width: 96,
                height: 96
            },
            "[吐]": {
                index: 90,
                name: "[吐]",
                image: "emoji_90_spit@3x.png",
                key: "emoji_90_spit@3x.png",
                width: 96,
                height: 96
            },
            "[惊喜]": {
                index: 91,
                name: "[惊喜]",
                image: "emoji_91_surprise@3x.png",
                key: "emoji_91_surprise@3x.png",
                width: 96,
                height: 96
            },
            "[敲打]": {
                index: 92,
                name: "[敲打]",
                image: "emoji_92_knock@3x.png",
                key: "emoji_92_knock@3x.png",
                width: 96,
                height: 96
            },
            "[奋斗]": {
                index: 93,
                name: "[奋斗]",
                image: "emoji_93_refuel@3x.png",
                key: "emoji_93_refuel@3x.png",
                width: 96,
                height: 96
            },
            "[吐彩虹]": {
                index: 94,
                name: "[吐彩虹]",
                image: "emoji_94_rainbow@3x.png",
                key: "emoji_94_rainbow@3x.png",
                width: 96,
                height: 96
            },
            "[大哭]": {
                index: 95,
                name: "[大哭]",
                image: "emoji_95_bigcry@3x.png",
                key: "emoji_95_bigcry@3x.png",
                width: 96,
                height: 96
            },
            "[比心]": {
                index: 96,
                name: "[比心]",
                image: "emoji_96_fingerheart@3x.png",
                key: "emoji_96_fingerheart@3x.png",
                width: 96,
                height: 96
            },
            "[加油]": {
                index: 97,
                name: "[加油]",
                image: "emoji_97_refuel@3x.png",
                key: "emoji_97_refuel@3x.png",
                width: 96,
                height: 96
            },
            "[碰拳]": {
                index: 98,
                name: "[碰拳]",
                image: "emoji_98_fist@3x.png",
                key: "emoji_98_fist@3x.png",
                width: 96,
                height: 96
            },
            "[ok]": {
                index: 99,
                name: "[ok]",
                image: "emoji_99_OK@3x.png",
                key: "emoji_99_OK@3x.png",
                width: 96,
                height: 96
            },
            "[击掌]": {
                index: 100,
                name: "[击掌]",
                image: "emoji_100_highfive@3x.png",
                key: "emoji_100_highfive@3x.png",
                width: 96,
                height: 96
            },
            "[左上]": {
                index: 101,
                name: "[左上]",
                image: "emoji_101_left@3x.png",
                key: "emoji_101_left@3x.png",
                width: 96,
                height: 96
            },
            "[握手]": {
                index: 102,
                name: "[握手]",
                image: "emoji_102_shakehand@3x.png",
                key: "emoji_102_shakehand@3x.png",
                width: 96,
                height: 96
            },
            "[18禁]": {
                index: 103,
                name: "[18禁]",
                image: "emoji_103_18@3x.png",
                key: "emoji_103_18@3x.png",
                width: 96,
                height: 96
            },
            "[刀]": {
                index: 104,
                name: "[刀]",
                image: "emoji_104_knife@3x.png",
                key: "emoji_104_knife@3x.png",
                width: 96,
                height: 96
            },
            "[V5]": {
                index: 105,
                name: "[V5]",
                image: "emoji_105_V5@3x.png",
                key: "emoji_105_V5@3x.png",
                width: 96,
                height: 96
            },
            "[给力]": {
                index: 106,
                name: "[给力]",
                image: "emoji_106_awesome@3x.png",
                key: "emoji_106_awesome@3x.png",
                width: 96,
                height: 96
            },
            "[心]": {
                index: 107,
                name: "[心]",
                image: "emoji_107_heart@3x.png",
                key: "emoji_107_heart@3x.png",
                width: 96,
                height: 96
            },
            "[伤心]": {
                index: 108,
                name: "[伤心]",
                image: "emoji_108_broken_heart@3x.png",
                key: "emoji_108_broken_heart@3x.png",
                width: 96,
                height: 96
            },
            "[屎]": {
                index: 109,
                name: "[屎]",
                image: "emoji_109_shit@3x.png",
                key: "emoji_109_shit@3x.png",
                width: 96,
                height: 96
            },
            "[礼物]": {
                index: 110,
                name: "[礼物]",
                image: "emoji_110_gifts@3x.png",
                key: "emoji_110_gifts@3x.png",
                width: 96,
                height: 96
            },
            "[蛋糕]": {
                index: 111,
                name: "[蛋糕]",
                image: "emoji_111_cake@3x.png",
                key: "emoji_111_cake@3x.png",
                width: 96,
                height: 96
            },
            "[撒花]": {
                index: 112,
                name: "[撒花]",
                image: "emoji_112_flower@3x.png",
                key: "emoji_112_flower@3x.png",
                width: 96,
                height: 96
            },
            "[不看]": {
                index: 113,
                name: "[不看]",
                image: "emoji_113_lookat@3x.png",
                key: "emoji_113_lookat@3x.png",
                width: 96,
                height: 96
            },
            "[炸弹]": {
                index: 114,
                name: "[炸弹]",
                image: "emoji_114_bomb@3x.png",
                key: "emoji_114_bomb@3x.png",
                width: 96,
                height: 96
            }
        }
    }
    , function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = i(753)
            , s = n(a);
        e.default = s.default
    }
    , function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = i(754)
            , s = n(a);
        i(588),
            e.default = s.default
    }
    , , function (t, e, i) {
        "use strict";
        i(492),
            i(490),
            i(491),
            i(493),
            i(494)
    }
    , , function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = i(49)
            , s = n(a)
            , o = i(17)
            , r = n(o)
            , l = i(228)
            , u = n(l)
            , c = i(225)
            , d = n(c)
            , h = i(226)
            , m = n(h)
            , _ = i(229)
            , p = n(_)
            , f = i(742)
            , g = n(f)
            , v = i(227)
            , w = n(v)
            , y = i(224)
            , b = n(y)
            , x = i(117)
            , C = n(x)
            , k = i(118)
            , j = i(69)
            , S = i(11);
        e.default = {
            name: "FeedBox",
            mixins: [s.default],
            props: {
                category: {
                    type: String,
                    default: ""
                },
                url: {
                    type: String,
                    default: ""
                },
                qhAdSupport: {
                    type: Boolean,
                    default: !1
                },
                suspensionTip: {
                    type: Boolean,
                    default: !0
                },
                initList: {
                    type: Array,
                    default: function () {
                        return []
                    }
                },
                containerCheck: {
                    type: Boolean,
                    default: !0
                },
                containerCheckCount: {
                    type: Number,
                    default: 8
                },
                dislikeUrl: {
                    type: String,
                    default: "/api/dislike/"
                },
                getUserInfoUrl: {
                    type: String,
                    default: "/user/info/"
                },
                onInit: {
                    type: Function,
                    default: function (t, e) {
                    }
                },
                onLoadMore: {
                    type: Function,
                    default: function (t, e) {
                        window.ttAnalysis && window.ttAnalysis.send("event", {
                            ev: "article_show_count",
                            ext_id: e
                        })
                    }
                },
                onItemClick: {
                    type: Function,
                    default: function (t) {
                        t && t.ad_id && (0,
                            k.ttSendMsg)({
                            label: "click",
                            value: t.ad_id,
                            extra: t.log_extra
                        }),
                        t && t.ad_qihu_id > -1 && (0,
                            j.qhSendMsg)(t.ad_qihu_id, "feed_qihu_ad", "click")
                    }
                },
                onRefresh: {
                    type: Function,
                    default: function (t, e) {
                        window.ttAnalysis && window.ttAnalysis.send("event", {
                            ev: "article_show_count",
                            ext_id: e
                        })
                    }
                }
            },
            data: function () {
                return {
                    refreshLock: !1,
                    loadmoreLock: !1,
                    loading: !1,
                    offsetTop: 0,
                    _feedList: null,
                    list: []
                }
            },
            mounted: function () {
                this.configList(),
                    this.$on("feed-item-dislike", this._dislike),
                    this.$on("feed-refresh", this.refresh),
                    r.default.$on("feed-refresh-bus", this.refresh),
                    r.default.$on("feed-unshift-item", this.unshiftItem)
            },
            updated: function () {
                var t = document.querySelectorAll(".J_ad");
                t.length && (0,
                    k.ttSetAds)(t);
                var e = document.querySelectorAll(".J_qihu_ad");
                e.length && (0,
                    j.qhSetAds)(e, "feed_qihu_ad")
            },
            methods: {
                configList: function () {
                    var t = this;
                    this.offsetTop = (0,
                        S.elOffset)(this.$refs.wrapper).top,
                        this._feedList = new C.default({
                            url: this.url,
                            category: this.category,
                            qhAdSupport: this.qhAdSupport,
                            initList: this.initList
                        }),
                        0 === this.initList.length ? this.refresh(!0) : this.list = this._feedList.getList(),
                        this.onInit(this.list, this.list.length),
                        setInterval(function () {
                            t.list = t._feedList.updateTime()
                        }, 6e4)
                },
                refresh: function (t) {
                    var e = this;
                    t === !0 && window.scrollTo(0, 0),
                    t !== !0 && window.scrollTo(0, this.offsetTop),
                        this.broadcast("MsgAlert", "feed-refresh", {}),
                        this.loading = !0,
                        this.refreshLock = !0,
                        this._feedList.refresh(function (t, i) {
                            e.list = t,
                                e.broadcast("MsgAlert", "feed-refresh-count", i),
                                e.onRefresh(t, i)
                        }, function () {
                            e.loading = !1,
                                e.refreshLock = !1
                        })
                },
                unshiftItem: function (t) {
                    var e = this;
                    Array.isArray(t) && (this.loading = !0,
                        this.refreshLock = !0,
                        this._feedList.unshiftItem(t, function (t, i) {
                            e.list = t
                        }, function () {
                            e.loading = !1,
                                e.refreshLock = !1
                        }))
                },
                loadMore: function () {
                    var t = this;
                    this.list.length && (this.loading = !0,
                        this.loadmoreLock = !0,
                        this._feedList.loadMore(function (e, i) {
                            t.list = e,
                                t.onLoadMore(e, i)
                        }, function () {
                            t.loading = !1,
                                t.loadmoreLock = !1
                        }))
                },
                feedItemClick: function (t) {
                    this.onItemClick(t)
                },
                _dislike: function (t) {
                    this.list = this._feedList.dislikeItem(t)
                }
            },
            components: {
                singleMode: u.default,
                moreMode: d.default,
                noMode: m.default,
                ugcMode: p.default,
                refreshMode: w.default,
                videoMode: g.default,
                msgAlert: b.default
            }
        }
    }
    , function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = i(66)
            , s = n(a)
            , o = i(11)
            , r = i(17)
            , l = n(r)
            , u = i(370)
            , c = n(u);
        e.default = {
            name: "VideoMode",
            data: function () {
                return {
                    play: !1,
                    destroyCount: 0,
                    timer: null,
                    smallSize: !1,
                    dragOffset: {},
                    mute: this.muteVolume,
                    posterUrl: "",
                    defaultImg: i(672)
                }
            },
            props: {
                item: {
                    type: Object,
                    default: {}
                },
                muteVolume: null,
                dislikeUrl: {
                    type: String,
                    default: "/api/dislike/"
                },
                getUserInfoUrl: {
                    type: String,
                    default: "/user/info/"
                }
            },
            filters: {
                formatCount: function (t) {
                    return t ? t = (0,
                        o.numFormat)(t) : "0"
                }
            },
            computed: {
                labels: function t() {
                    var t = [];
                    return this.item && this.item.label && this.item.label.length > 0 && (t = this.item.label.slice(0, 4)),
                        t
                }
            },
            created: function () {
                this.item.image_url ? this.posterUrl = this.item.image_url.replace("190x124", "300x170") : this.posterUrl = this.defaultImg
            },
            mounted: function () {
                var t = this;
                l.default.$on("hover-poster", function (e) {
                    e.group_id !== t.item.group_id && t.play && !t.smallSize && t.destroyPlayer()
                }),
                    l.default.$on("minisize-player", function (e) {
                        e.group_id !== t.item.group_id && t.smallSize && t.destroyPlayer(),
                        t.smallSize || (t.mute = !0)
                    }),
                    l.default.$on("unset-volume", function (e) {
                        t.mute = !1
                    }),
                    l.default.$on("pause-minisize-player", function (e) {
                        e.group_id !== t.item.group_id && t.smallSize && (t.play = !1)
                    })
            },
            methods: {
                playHandler: function () {
                    this.play = !0,
                        l.default.$emit("hover-poster", this.item),
                        this.sendLog("video", "play", "click")
                },
                enterHandler: function () {
                    var t = this;
                    return !this.smallSize && void (this.timer = setTimeout(function () {
                        t.play = !0,
                            l.default.$emit("hover-poster", t.item),
                            t.sendLog("video", "play", "hover")
                    }, 500))
                },
                leaveHandler: function () {
                    clearTimeout(this.timer)
                },
                fullSizeHandler: function () {
                    this.sendLog("video", "fullsize", "click")
                },
                zoomChange: function () {
                    this.mute = !1,
                        this.smallSize = !0,
                        l.default.$emit("minisize-player", this.item),
                        this.$emit("init-no-volume"),
                        this.sendLog("video", "minisize", "click")
                },
                zoomRecover: function () {
                    this.destroyPlayer(),
                        l.default.$emit("unset-volume"),
                        this.$emit("init-has-volume")
                },
                videoEndHandler: function () {
                    this.smallSize && l.default.$emit("unset-volume")
                },
                volumeChangeHandler: function (t) {
                    t > 0 && (l.default.$emit("pause-minisize-player", this.item),
                        l.default.$emit("unset-volume"),
                        this.$emit("init-has-volume"))
                },
                openDetail: function () {
                    this.destroyPlayer()
                },
                destroyPlayer: function () {
                    this.smallSize = !1,
                        this.play = !1,
                        this.destroyCount += 1
                },
                sendLog: function (t, e, i, n) {
                    window._czc && _czc.push(["_trackEvent", t, e, i, n]),
                    window.ttAnalysis && window.ttAnalysis.send("event", {
                        ev: t + "_" + e + "_" + i
                    })
                }
            },
            components: {
                Dislike: s.default,
                Player: c.default
            }
        }
    }
    , function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = i(465)
            , s = n(a)
            , o = i(7)
            , r = n(o)
            , l = new s.default({
            aid: 24
        });
        e.default = {
            name: "Mask",
            data: function () {
                return {
                    visible: !0,
                    isfetching: !1,
                    code: "",
                    formatmsg: "",
                    verifymsg: "",
                    timeId: null,
                    count: 60,
                    mobile: ""
                }
            },
            created: function () {
                var t = this;
                (0,
                    r.default)({
                    url: "/mp/agw/general/user/get_mosaic_mobile",
                    method: "GET",
                    success: function (e) {
                        "success" === e.message ? t.mobile = e.data.Mobile : t.mobile = "******"
                    },
                    error: function (e) {
                        console.log("error1", e),
                            t.mobile = "******"
                    }
                })
            },
            beforeDestroy: function () {
                this.timeId && clearInterval(this.timeId),
                    _.timeId = null
            },
            methods: {
                handleClose: function (t) {
                    document.body.removeChild(this.$el),
                    this.onCancel && "function" == typeof this.onCancel && this.onCancel()
                },
                handleOk: function () {
                    document.body.removeChild(this.$el),
                    this.onOk && "function" == typeof this.onOk && this.onOk()
                },
                handleGetCode: function (t) {
                    var e = this;
                    e.isfetching = !0,
                        e.timeId = setInterval(function () {
                            e.count = e.count - 1,
                            0 === e.count && (clearInterval(e.timeId),
                                e.count = 60,
                                e.timeId = null)
                        }, 1e3),
                        l.getMobileCode({
                            type: 22
                        }).then(function (t) {
                            e.isfetching = !1;
                            var i = t || {}
                                , n = i.status
                                , a = i.message
                                , s = void 0 === a ? "" : a;
                            "success" === n ? console.log("发送成功") : this.verifymsg = s
                        }, function (t) {
                            e.isfetching = !1,
                                e.verifymsg = t.message,
                                clearInterval(e.timeId),
                                e.count = 60,
                                e.timeId = null
                        })
                },
                handleValidateCode: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                    return this.verifymsg = "",
                        "" === t ? (this.formatmsg = "请填写验证码",
                            !1) : /^\d{4}$/.test(t) ? (this.formatmsg = "",
                            !0) : (this.formatmsg = "验证码格式不合法",
                            !1)
                },
                handleVerify: function (t) {
                    var e = this;
                    e.handleValidateCode(e.code) && (e.isfetching || (e.isfetching = !0,
                        l.validateMobileCode({
                            code: e.code,
                            need_record: 1,
                            type: 22
                        }).then(function (t) {
                            e.isfetching = !1;
                            var i = t || {}
                                , n = i.status
                                , a = i.message;
                            "success" === n ? e.handleOk() : this.verifymsg = a
                        }, function (t) {
                            e.isfetching = !1,
                                e.verifymsg = t.message,
                                console.log("error", t)
                        })))
                }
            },
            watch: {
                code: function () {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                    this.handleValidateCode(t)
                }
            }
        }
    }
    , function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = i(50)
            , s = n(a)
            , o = i(29)
            , r = n(o)
            , l = i(327)
            , u = (n(l),
            i(17))
            , c = n(u)
            , d = i(470)
            , h = n(d)
            , m = "__toutiao_player_volume__"
            , _ = "__toutiao_player_muted__";
        e.default = {
            props: {
                videoId: {
                    type: String,
                    required: !0
                },
                duration: String,
                siblings: Array,
                scrollMini: {
                    type: Boolean,
                    default: !1
                },
                posterUrl: String,
                theatreBtnVisible: {
                    type: Boolean,
                    default: !0
                },
                miniBtnVisible: {
                    type: Boolean,
                    default: !1
                },
                width: {
                    type: Number,
                    default: 660
                },
                height: {
                    type: Number,
                    default: 375
                },
                mute: Boolean,
                play: {
                    type: Boolean,
                    default: !1
                },
                destroyCount: {
                    type: Number,
                    default: 0
                }
            },
            data: function () {
                return {
                    id: "",
                    isBeforeShowing: !1,
                    isNextShowing: !1,
                    isNextOneShowing: !1,
                    isNextListShowing: !1,
                    nextOneTitle: "",
                    playNextTimer: null,
                    isFloating: !1,
                    countdownAddr: "//s3a.pstatp.com/site/tt_mfsroot/v-player/img/countdown.gif",
                    moveParam: {},
                    canMini: !1,
                    showTransition: !1,
                    theatreMode: !1,
                    playerWidth: 660,
                    playerHeight: 375
                }
            },
            computed: {
                countdownAddrR: function () {
                    return this.isNextOneShowing ? this.countdownAddr : ""
                }
            },
            watch: {
                width: function (t) {
                    this.playerWidth = t,
                    this.vjsInstance && this.vjsInstance.dimensions(this.width, this.height)
                },
                height: function (t) {
                    this.theatreMode ? this.playerHeight = 478 : this.playerHeight = t,
                    this.vjsInstance && this.vjsInstance.dimensions(this.width, this.height)
                },
                play: function (t) {
                    t === !0 ? this.startPlay() : this.vjsInstance && this.vjsInstance.pause()
                },
                destroyCount: function () {
                    this.vjsInstance && this.vjsInstance.dispose(),
                        this.isBeforeShowing = !0,
                        this.canMini = !1,
                        this.isFloating = !1
                },
                mute: function (t) {
                    this.vjsInstance && this.isFloating && this.vjsInstance.muted(t)
                }
            },
            methods: {
                startPlay: function () {
                    var t = this;
                    this.isFloating || (this.isBeforeShowing = !1,
                        this.playerInstance = new h.default({
                            id: this.id,
                            vid: this.videoId,
                            autoplay: !0,
                            width: this.playerWidth,
                            height: this.playerHeight,
                            plugins: {
                                vjs_definition: {},
                                vjs_zoom: {},
                                vjs_theatre: {},
                                vjs_hotkeys: {
                                    enableVolumeScroll: !1
                                }
                            }
                        }),
                        this.playerInstance.player_tt_resources().then(function () {
                            var e = t.playerInstance.play_list;
                            e.sort(function (t, e) {
                                return t.definition.replace(/[^\d]+/g, "") - e.definition.replace(/[^\d]+/g, "") < 0
                            }),
                            e.length && t.playerInstance.play(e[0].src).then(function (i) {
                                t.vjsInstance = i;
                                var n = .65
                                    , a = !1;
                                if (window.localStorage) {
                                    var s = localStorage.getItem(m)
                                        , o = "true" === localStorage.getItem(_);
                                    s && (n = s),
                                    o && (a = o)
                                }
                                void 0 !== t.mute && (a = t.mute),
                                    i.volume(n),
                                    i.muted(a),
                                    i.vjs_definition(e),
                                    t.$emit("video-play"),
                                    i.on("vjs_zoom_change", function (e, i) {
                                        if (t.$emit("zoom-change"),
                                            window.localStorage) {
                                            var n = window.localStorage.getItem("miniplayer-offset");
                                            if (n) {
                                                n = JSON.parse(n);
                                                var a = t.$refs.playerWrap;
                                                a.style.left = n.left,
                                                    a.style.top = n.top
                                            }
                                        }
                                        t.isFloating = i,
                                            t.isBeforeShowing = !0
                                    }),
                                    i.on("vjs_theatre_change", function (e, i) {
                                        t.theatreMode = i,
                                            i ? t.playerHeight = 478 : t.playerHeight = t.height,
                                        t.vjsInstance && t.vjsInstance.dimensions(t.width, t.height),
                                            c.default.$emit("theater", i)
                                    }),
                                    i.on("fullscreenchange", function () {
                                        t.$emit("full-size")
                                    }),
                                    i.on("volumechange", function () {
                                        window.localStorage && (localStorage.setItem(m, i.volume()),
                                            localStorage.setItem(_, i.muted())),
                                        i.muted() !== !1 || t.isFloating || t.$emit("volume-change", i.volume())
                                    }),
                                    i.on("ended", function () {
                                        t.siblings && t.siblings.length > 0 && (t.isNextShowing = !0,
                                            t.isNextOneShowing = !0,
                                            t.playNextTimer = setTimeout(function () {
                                                var e = t.siblings[0].link;
                                                e ? window.location.href = e : window.location.reload()
                                            }, 5e3)),
                                            t.$emit("video-end")
                                    })
                            })
                        }, function () {
                            t.playerInstance.player_error()
                        }))
                },
                cancel: function () {
                    this.isNextOneShowing = !1,
                        this.isNextListShowing = !0,
                        clearTimeout(this.playNextTimer)
                },
                replay: function () {
                    this.isNextListShowing = !1,
                        this.isNextShowing = !1,
                    this.vjsInstance && this.vjsInstance.play()
                },
                startDrag: function (t) {
                    var e = this.moveParam;
                    e.isDragging = !0,
                        e.startX = t.clientX,
                        e.startY = t.clientY;
                    var i = this.$refs.playerWrap.getBoundingClientRect();
                    e.startLeft = i.left,
                        e.startTop = i.top,
                        e.width = i.right - i.left,
                        e.height = i.bottom - i.top,
                        document.addEventListener("mousemove", this.mouseMove),
                        document.addEventListener("mouseup", this.mouseUp)
                },
                mouseMove: function (t) {
                    var e = this.moveParam;
                    if (e.isDragging) {
                        var i = t.clientX
                            , n = t.clientY
                            , a = window.innerWidth - document.body.clientWidth
                            , s = i - e.startX
                            , o = n - e.startY
                            , r = e.startLeft + s
                            , l = e.startTop + o
                            , u = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
                            ,
                            c = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
                        r < 0 ? r = 0 : r + e.width + a > u && (r = u - e.width - a),
                            l < 0 ? l = 0 : l + e.height > c && (l = c - e.height);
                        var d = this.$refs.playerWrap;
                        d.style.left = r + "px",
                            d.style.top = l + "px"
                    }
                },
                mouseUp: function () {
                    var t = this.moveParam;
                    if (t.isDragging && (document.getSelection && document.getSelection().removeAllRanges(),
                        document.removeEventListener("mousemove", this.mouseMove),
                        document.removeEventListener("mouseup", this.mouseUp),
                        this.moveParam = {}),
                        window.localStorage) {
                        var e = this.$refs.playerWrap;
                        window.localStorage.setItem("miniplayer-offset", (0,
                            s.default)({
                            top: e.style.top,
                            left: e.style.left
                        }))
                    }
                },
                closeMini: function () {
                    this.canMini = !1,
                        this.isFloating = !1,
                        this.$emit("close-mini")
                }
            },
            created: function () {
                this.vjsInstance = null,
                    this.playerInstance = null,
                    this.id = "tt_video_" + Math.random().toString(16).slice(2, 7),
                    this.canMini = this.scrollMini,
                    this.playerWidth = this.width,
                    this.playerHeight = this.height,
                this.posterUrl && (this.isBeforeShowing = !0),
                this.siblings && this.siblings.length > 0 && (this.nextOneTitle = this.siblings[0].title)
            },
            mounted: function () {
                var t = this;
                this.posterUrl || this.startPlay(),
                    window.addEventListener("scroll", (0,
                        r.default)(function () {
                        if (t.canMini && t.playerInstance) {
                            var e = t.$refs.player
                                , i = e.getBoundingClientRect();
                            i.bottom < 0 ? (t.showTransition = !1,
                                t.isFloating = !0) : t.isFloating = !1
                        }
                    }, 200)),
                    window.addEventListener("resize", function () {
                        t.showTransition = !0
                    }),
                    document.addEventListener("mouseover", function (e) {
                        var i = document.querySelector(".vjs-theatre-btn");
                        if (i) {
                            var n = i.getBoundingClientRect()
                                , a = (n.left + n.right) / 2
                                , s = (n.top + n.bottom) / 2
                                , o = e.clientX
                                , r = e.clientY;
                            a - 50 < o && o < a + 50 && s - 50 < r && r < s + 50 && (t.showTransition = !0)
                        }
                    })
            }
        }
    }
    , function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = i(50)
            , s = n(a)
            , o = i(407)
            , r = n(o)
            , l = i(7)
            , u = n(l)
            , c = i(271)
            , d = i(46)
            , h = n(d)
            , m = i(58)
            , _ = (n(m),
            i(17))
            , p = n(_)
            , f = i(123)
            , g = n(f)
            , v = i(332)
            , w = n(v)
            , y = i(378);
        e.default = {
            name: "imgUploadBox",
            props: {},
            data: function () {
                return {
                    urlPrefix: "//www.toutiao.com/c/ugc/",
                    cpLock: !1,
                    uploadStatus: !0,
                    submiting: !1,
                    inputLength: 0,
                    image_uris: [],
                    inputContent: "",
                    inputInvalid: !1,
                    tooLong: !1,
                    uploadFiles: [],
                    uploader: null,
                    isShowPopup: !1,
                    options: {
                        statusMsg: "",
                        ctrMsg: "",
                        isTranscoding: !1,
                        imgList: [],
                        loadingList: []
                    },
                    msgTip: "",
                    timer: null,
                    isLongMode: !1,
                    canSaveArticle: !!window.localStorage,
                    isShowEmojiPanel: !1,
                    hasEmoji: !1
                }
            },
            computed: {
                uploadReady: function () {
                    return "" !== this.inputContent && this.uploadStatus && !this.inputInvalid
                },
                publishParams: function () {
                    return {
                        content: this.inputContent,
                        image_uris: this.image_uris.join(",")
                    }
                },
                emojiList: function () {
                    return (0,
                        r.default)(y.emojiResourceList).sort(function (t, e) {
                        return t.index - e.index
                    }).map(function (t) {
                        return t.backgroundImg = "//s3.pstatp.com/toutiao/tt_tps/static/images/ttemoji_v2/" + t.image,
                            t
                    })
                }
            },
            mounted: function () {
                var t = this
                    , e = this.uploader && this.uploader.getAll()[0];
                e && e.cancel(),
                    p.default.$on("uploadReady", function (e) {
                        t.uploadStatus = e.ready,
                        e.uri && t.image_uris.push(e.uri)
                    });
                var i = this.$refs.title;
                if (i.addEventListener("compositionstart", function () {
                    t.cpLock = !0
                }),
                    i.addEventListener("compositionend", function () {
                        t.cpLock = !1
                    }),
                    this.userData = window.BASE_DATA ? window.BASE_DATA.loginInfo : {},
                    this.canSaveArticle) {
                    var n = window.localStorage.getItem("tt_ugc_article");
                    n && (n = JSON.parse(n),
                        this.inputContent = n.article,
                        this.inputLength = this.inputContent.length,
                        this.isLongMode = n.isLongMode)
                }
                this.pointVerify = null,
                    this.sliderObj = null,
                    this.newVerification()
            },
            methods: {
                saveArticle: function () {
                    window.localStorage.setItem("tt_ugc_article", (0,
                        s.default)({
                        article: this.inputContent,
                        isLongMode: this.isLongMode
                    })),
                        this.$Toast({
                            message: "保存成功！"
                        })
                },
                longMode: function () {
                    this.isLongMode = !this.isLongMode,
                        this.$emit("onLongMode", this.isLongMode)
                },
                toast: function (t) {
                    var e = this;
                    this.timer && (clearTimeout(this.timer),
                        this.timer = null),
                        this.msgTip = t.message,
                        this.timer = setTimeout(function () {
                            e.msgTip = "",
                                clearTimeout(e.timer),
                                e.timer = null
                        }, 3e3)
                },
                togglePopup: function () {
                    this.isShowPopup = !this.isShowPopup,
                        this.isShowEmojiPanel = !1,
                    this.isShowPopup && window.TEA("toutiao_pictures_add", {
                        multi_publisher_type: "write_post"
                    })
                },
                clearPopup: function (t) {
                    return !(t && this.options.imgList.length && !window.confirm("确定要放弃上传图片？")) && (this.isShowPopup = !1,
                        this.options.imgList = [],
                        void (this.image_uris = []))
                },
                removeImg: function (t, e) {
                    this.image_uris.splice(e, 1),
                        this.options.imgList = (0,
                            w.default)(this.options.imgList, t)
                },
                uploadActionClick: function () {
                    this.$refs.fileElem.click()
                },
                handleFile: function () {
                    if (this.uploadFiles = this.$refs.fileElem.files,
                    this.uploadFiles.length > 0 && this.uploadFiles.length <= 9 - this.options.imgList.length) {
                        p.default.$emit("uploadReady", {
                            ready: !1,
                            type: "img"
                        }),
                            p.default.$emit("uploadPending");
                        for (var t = this.uploadFiles.length - 1; t >= 0; t--)
                            this.options.loadingList.push(t);
                        this._initUploader()
                    } else
                        this.toast({
                            message: this.uploadFiles.length > 0 ? "上传的图片过多" : "请选择正确的图片"
                        })
                },
                _initUploader: function () {
                    var t = this;
                    this.uploader = new g.default({
                        url: this.urlPrefix + "image/upload/",
                        filters: [{
                            name: "acceptType",
                            fn: function (t) {
                                var e = /image/;
                                return e.test(t.type)
                            },
                            fail: function () {
                                t.toast({
                                    message: "文件类型错误"
                                }),
                                    t.options.loadingList.pop()
                            }
                        }, {
                            name: "size",
                            fn: function (t) {
                                var e = t.size / 1048576;
                                return e < 10
                            },
                            fail: function () {
                                t.toast({
                                    message: "图片大小超过10M，请更换图片"
                                }),
                                    t.options.loadingList.pop()
                            }
                        }],
                        progressCbk: function (t) {
                        },
                        completeCbk: function (e) {
                            t.options.loadingList.pop(),
                                e && e.responseItem && e.responseItem.data && e.responseItem.data.url_list && e.responseItem.data.url_list.length && e.responseItem.data.web_uri && "none" !== e.responseItem.data.web_uri.toLowerCase() ? (t.options.imgList.push(e.responseItem.data.url_list[0].url),
                                    p.default.$emit("uploadReady", {
                                        ready: !0,
                                        type: "img",
                                        uri: e.responseItem.data.web_uri
                                    }),
                                    t.$refs.fileElemHolder.reset()) : (t.toast({
                                    message: "上传失败，请稍后再试试"
                                }),
                                    p.default.$emit("uploadReady", {
                                        ready: !0,
                                        type: "img"
                                    }),
                                    t.$refs.fileElemHolder.reset()),
                            window.ttAnalysis && window.ttAnalysis.send("event", {
                                ev: "user_ugc_img_complete"
                            }),
                                window.TEA("toutiao_pictures_add_success", {
                                    multi_publisher_type: "write_post"
                                })
                        },
                        errorCbk: function (e) {
                            t.toast({
                                message: "上传失败，请更换图片再试试"
                            }),
                                p.default.$emit("uploadReady", {
                                    ready: !0,
                                    type: "img"
                                })
                        }
                    });
                    var e = this.uploader.addToQueue(this.uploadFiles);
                    e ? this.uploader.uploadAll() : this.$refs.fileElemHolder.reset()
                },
                inputKeyup: function (t) {
                    return !this.cpLock && (this.inputLength = t.length,
                        void (this.inputLength > 2e3 ? (this.inputInvalid = !0,
                            this.tooLong = !0) : (this.inputInvalid = !1,
                            this.tooLong = !1)))
                },
                newVerification: function () {
                    var t = this
                        , e = {
                        ele: "pc_slide",
                        host: "https://verify.snssdk.com",
                        lang: "zh",
                        app_name: "toutiao.com",
                        challenge_code: 608,
                        toolbarBackColor: "#fff",
                        promptBackColor: "#F0F0F0",
                        promptFontColor: "#808080",
                        refreshFontColor: "#4A90E2",
                        refreshIconColor: "#4A90E2",
                        validatePassBackColor: "#A0CC49",
                        validateFailBackColor: "#EB2F2F",
                        successCb: function () {
                            t.sliderObj && t.sliderObj.hide(),
                                t.publishImg()
                        },
                        errorCb: function () {
                        }
                    }
                        , i = {
                        ele: "pc_slide",
                        host: "https://verify.snssdk.com",
                        lang: "zh",
                        app_name: "toutiao.com",
                        challenge_code: 607,
                        toolbarBackColor: "#fff",
                        refreshFontColor: "#4A90E2",
                        refreshIconColor: "#4A90E2",
                        subBackColor: "#4A90E2",
                        subFontColor: "#fff",
                        validatePassBackColor: "#A0CC49",
                        validateFailBackColor: "#EB2F2F",
                        successCb: function () {
                            t.pointVerify && t.pointVerify.hide(),
                                t.publishImg()
                        },
                        errorCb: function () {
                        }
                    };
                    this.sliderObj = new SliderVerification(e),
                        this.sliderObj.hide(),
                        this.pointVerify = new Points(i),
                        this.pointVerify.hide()
                },
                publishImg: function () {
                    var t = this;
                    if (window.TEA("toutiao_publish_click", {
                        multi_publisher_type: "write_post",
                        image_count: this.image_uris.length,
                        with_emoji: this.hasEmoji ? 1 : 0,
                        words_count: this.inputLength,
                        is_login: this.userData.id ? 1 : 0
                    }),
                    "" == this.inputContent)
                        return this.toast({
                            message: "请输入内容"
                        }),
                            !1;
                    if (!this.uploadReady || this.submiting)
                        return !1;
                    if (this.image_uris.length > 9)
                        return this.toast({
                            message: "图片不能多于 9 张"
                        }),
                            !1;
                    this.submiting = !0;
                    var e = {
                        bodyVal2str: !1,
                        body: this.publishParams,
                        url: "https://www.toutiao.com/toutiao/c/ugc/content/publish/"
                    }
                        , i = window.byted_acrawler && window.byted_acrawler.sign ? window.byted_acrawler.sign : c.sign
                        , n = i(e)
                        , a = e.url.indexOf("?") !== -1 ? "&_signature=" + n : "?_signature=" + n;
                    (0,
                        u.default)({
                        url: this.urlPrefix + "content/publish/" + a,
                        method: "post",
                        headers: {
                            "X-CSRFToken": h.default.get("csrftoken")
                        },
                        data: this.publishParams,
                        success: function (e) {
                            if ("success" === e.message)
                                t.$Toast({
                                    message: "发布成功！"
                                }),
                                    p.default.$emit("feed-unshift-item", [{
                                        ugc_data: {
                                            content: t.publishParams.content,
                                            comment_count: 0,
                                            digg_count: 0,
                                            read_count: 0,
                                            ugc_images: t.options.imgList,
                                            ugc_user: {
                                                open_url: "/c/user/" + t.userData.id + "/",
                                                avatar_url: t.userData.avatarUrl,
                                                name: t.userData.userName,
                                                user_verified: 0,
                                                is_following: !0,
                                                user_auth_info: {
                                                    auth_info: ""
                                                }
                                            }
                                        },
                                        behot_time: Math.floor((new Date).getTime() / 1e3),
                                        source_url: e.data.open_url,
                                        group_id: "" + e.data.group_id
                                    }]),
                                    window.TEA("toutiao_publish_success", {
                                        multi_publisher_type: "write_post",
                                        image_count: t.image_uris.length,
                                        with_emoji: t.hasEmoji ? 1 : 0,
                                        words_count: t.inputLength,
                                        group_id: e.data.group_id
                                    }),
                                    t.submiting = !1,
                                    t.clearPopup(),
                                    t.inputContent = "",
                                    t.inputLength = 0,
                                    p.default.$emit("publishSuccess"),
                                window.ttAnalysis && window.ttAnalysis.send("event", {
                                    ev: "user_ugc_img_submit"
                                }),
                                    window.localStorage.removeItem("tt_ugc_article");
                            else if ("error" == e.message) {
                                if ("用户无权限" === e.data)
                                    t.toast({
                                        message: "用户无权限, 发布失败，未登录请登录后重试"
                                    });
                                else
                                    switch (e.status_code) {
                                        case 607:
                                            t.pointVerify.init(),
                                                t.pointVerify.show();
                                            break;
                                        case 608:
                                            t.sliderObj.init(),
                                                t.sliderObj.show();
                                            break;
                                        default:
                                            t.toast({
                                                message: e.data || "发布失败，请重试"
                                            })
                                    }
                                t.submiting = !1,
                                    p.default.$emit("publishFail")
                            }
                        },
                        error: function (e) {
                            t.toast({
                                message: e.data || "服务器开了点小差，请稍后再试"
                            }),
                                t.submiting = !1,
                                p.default.$emit("publishFail")
                        }
                    })
                },
                toggleEmojiPanel: function () {
                    this.isShowEmojiPanel = !this.isShowEmojiPanel,
                        this.isShowPopup = !1,
                    this.isShowEmojiPanel && window.TEA("toutiao_emoji_add")
                },
                handleSelectEmoji: function (t) {
                    var e = this.$refs.title
                        , i = "number" == typeof e.selectionStart ? e.selectionStart : this.inputContent.length
                        , n = i + t.name.length;
                    this.inputContent = this.inputContent.substring(0, i) + t.name + this.inputContent.substring(i, this.inputContent.length),
                        this.inputKeyup(this.inputContent),
                        this.$nextTick(function () {
                            e.selectionStart = n,
                                e.selectionEnd = n,
                            e.focus && e.focus()
                        }),
                        this.hasEmoji = !0,
                        window.TEA("toutiao_emoji_add_success")
                }
            }
        }
    }
    , function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = i(7)
            , s = (n(a),
            i(46))
            , o = (n(s),
            i(17))
            , r = n(o)
            , l = i(745)
            , u = n(l)
            , c = i(751)
            , d = n(c)
            , h = i(752)
            , m = n(h)
            , _ = i(749)
            , p = n(_)
            , f = i(464)
            , g = n(f);
        window.TEA = g.default,
            e.default = {
                name: "Publisher",
                props: {
                    showPublisher: {
                        type: Boolean,
                        default: !0
                    },
                    type: {
                        type: Number,
                        default: 1
                    }
                },
                data: function () {
                    return {
                        showType: this.type,
                        isLongMode: !1,
                        options: {
                            isPending: !1
                        },
                        typeCn: {
                            1: "图文",
                            2: "视频",
                            3: "提问",
                            4: "长文"
                        },
                        typeLog: {
                            1: "img_tab_click",
                            2: "video_tab_click",
                            3: "wenda_tab_click",
                            4: "richText_tab_click"
                        },
                        teaTypeLog: {
                            1: "write_post",
                            2: "upload_video",
                            3: "write_question",
                            4: "write_article"
                        }
                    }
                },
                watch: {
                    type: function (t) {
                        this.showType = t
                    }
                },
                mounted: function () {
                    var t = this;
                    r.default.$on("uploadPending", function () {
                        t.options.isPending = !0
                    }),
                        r.default.$on("cancellUploadPending", function () {
                            t.options.isPending = !1
                        }),
                        r.default.$on("publishSuccess", function () {
                            t.options.isPending = !1
                        }),
                        window.onbeforeunload = function () {
                            if (t.options.isPending)
                                return "您有一个未完成的任务，关闭或刷新页面会导致数据丢失"
                        }
                        ,
                        g.default.init({
                            app_id: 2297,
                            channel: "cn",
                            log: !0
                        }),
                        this.userData = window.BASE_DATA ? window.BASE_DATA.loginInfo : {},
                        this.userData.id ? g.default.config({
                            _staging_flag: 0,
                            disable_auto_pv: !0,
                            evtParams: {
                                user_id: this.userData.id
                            }
                        }) : g.default.config({
                            _staging_flag: 0,
                            disable_auto_pv: !0
                        }),
                        g.default.start()
                },
                methods: {
                    changeType: function (t) {
                        var e = this.typeCn[this.showType]
                            , i = this.typeLog[t];
                        return !(this.options.isPending && !window.confirm("是否放弃" + e + "发布？")) && (this.options.isPending = !1,
                            this.showType = t || 1,
                        window.ttAnalysis && window.ttAnalysis.send("event", {
                            ev: i
                        }),
                            void (0,
                                g.default)("toutiao_article_type_click", {
                                multi_publisher_type: this.teaTypeLog[t]
                            }))
                    },
                    longModeHandler: function (t) {
                        this.isLongMode = t
                    }
                },
                components: {
                    imgUploadBox: u.default,
                    videoUploadBox: d.default,
                    wendaUploadBox: m.default,
                    editor: p.default
                }
            }
    }
    , function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = i(411)
            , s = n(a)
            , o = i(25)
            , r = n(o)
            , l = i(68)
            , u = (i(67),
            i(279))
            , c = 375
            , d = 300;
        e.default = r.default.extend({
            mixins: [u.ImageCommon],
            props: {
                width: {
                    type: Number,
                    default: c
                },
                height: {
                    type: Number,
                    default: d
                }
            },
            data: function () {
                return {
                    isImageLoaded: !1,
                    MAX_HEIGHT: d,
                    MAX_WIDTH: c
                }
            },
            methods: {
                updateCaptionValue: function (t) {
                    var e = t.target.value
                        , i = void 0 === e ? "" : e;
                    this.$props.dispatchUpdate((0,
                        s.default)({}, this.$props.attrs, {
                        alt: i
                    }))
                },
                setRatio: function () {
                    var t = this.$refs.image
                        , e = t.naturalWidth
                        , i = t.naturalHeight
                        , n = e / i
                        , a = 0
                        , o = 0;
                    a = e > c ? c : e < 50 ? 50 : e,
                        o = a / n,
                    o > d && (o = d,
                        a = d * n),
                        this.isImageLoaded = !0,
                        l.Image.ImageService.updateImageUrl((0,
                            s.default)({}, this.$props, {
                            attrs: (0,
                                s.default)({}, this.$props.attrs, {
                                width: 0,
                                height: 0
                            })
                        }), this.$props.dispatchUpdate)
                }
            },
            beforeUpdate: function () {
                (0,
                    l.isObjectURL)(this.$props.attrs.src) && (this.objectURL = this.$props.attrs.src)
            }
        })
    }
    , function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = i(25)
            , s = n(a)
            , o = i(279);
        e.default = s.default.extend({
            mixins: [o.ImageCommon]
        })
    }
    , function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        function a(t) {
            return Math.ceil(t.replace(/[^\x00-\xff]/g, "**").length / 2)
        }

        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var s = i(463)
            , o = n(s)
            , r = i(410)
            , l = n(r)
            , u = i(50)
            , c = n(u)
            , d = i(114)
            , h = i(271)
            , m = i(373)
            , _ = n(m)
            , p = i(7)
            , f = n(p)
            , g = i(46)
            , v = n(g)
            , w = i(17)
            , y = n(w)
            , b = i(11)
            , x = i(278)
            , C = i(368)
            , k = n(C)
            , j = 30;
        e.default = {
            name: "editor",
            data: function () {
                return {
                    value: null,
                    editorConfig: (0,
                        _.default)(),
                    adapter: null,
                    textLength: 0,
                    title: "",
                    msgTip: "",
                    isEditing: !1,
                    showEditor: !0
                }
            },
            watch: {
                textLength: function (t) {
                    t > 0 ? y.default.$emit("uploadPending") : y.default.$emit("cancellUploadPending")
                }
            },
            mounted: function () {
                var t = this
                    , e = b.storage.getItem("ugc_rich_text");
                try {
                    var i = JSON.parse(e) || {}
                        , n = i.title
                        , a = i.content;
                    e && (this.title = n,
                        this.adapter.setHTML(a))
                } catch (t) {
                    console.log("err:", t)
                }
                this.userData = window.BASE_DATA ? window.BASE_DATA.loginInfo : {},
                    this.updatePlaceholder(),
                    this.editorDom = this.$refs.editorWrapper,
                    this.editorDom.onscroll = function (e) {
                        t.handleScroll(e)
                    }
                    ,
                    (0,
                        b.addClass)(this.adapter.root.children[0], "relative-toolbar"),
                    this.pointVerify = null,
                    this.sliderObj = null,
                    this.newVerification()
            },
            methods: {
                handleScroll: function (t) {
                    var e = this.adapter.root.children[0].classList;
                    t.target.scrollTop >= 82 ? e.contains("fixed") || e.add("fixed") : e.contains("fixed") && e.remove("fixed")
                },
                toast: function (t) {
                    var e = this;
                    this.timer && (clearTimeout(this.timer),
                        this.timer = null),
                        this.msgTip = t.message,
                        this.timer = setTimeout(function () {
                            e.msgTip = "",
                                clearTimeout(e.timer),
                                e.timer = null
                        }, 3e3)
                },
                updateEditorValue: function (t) {
                    var e = this;
                    this.isEditing = !0,
                        this.value = t,
                        setTimeout(function () {
                            e.textLength = e.adapter.text.length,
                                e.updatePlaceholder()
                        })
                },
                getAdapter: function (t) {
                    this.adapter = t
                },
                updatePlaceholder: function (t) {
                    var e = this.adapter.getHTML()
                        , i = void 0 !== t ? t : "<p><br></p>" === e
                        , n = this.adapter.root.children[1].classList;
                    i ? n.contains("placeholeder") || n.add("placeholeder") : n.contains("placeholeder") && n.remove("placeholeder")
                },
                publishValidate: function (t) {
                    var e = t.title
                        , i = t.content;
                    if (!this.userData.id)
                        return this.toast({
                            message: "请先登录"
                        }),
                            b.storage.setItem("ugc_rich_text", (0,
                                c.default)(t)),
                            !1;
                    if (!e || "" === e.trim())
                        return this.toast({
                            message: "标题不能为空"
                        }),
                            !1;
                    var n = a(e.trim());
                    return n < 5 || n > j ? (this.toast({
                        message: "标题长度应在5-" + j + "个汉字之间"
                    }),
                        !1) : !(!i || "" === i.trim() || "<p><br></p>" === i.trim()) || (this.toast({
                        message: "正文不能为空"
                    }),
                        !1)
                },
                clearContent: function () {
                    var t = this;
                    b.storage.removeItem("ugc_rich_text"),
                        this.title = "",
                        this.textLength = 0,
                        this.showEditor = !1,
                        this.$nextTick(function () {
                            t.showEditor = !0,
                                t.$nextTick(function () {
                                    (0,
                                        b.addClass)(this.adapter.root.children[0], "relative-toolbar"),
                                        this.updatePlaceholder()
                                })
                        })
                },
                bindMobile: function () {
                    return (0,
                        f.default)({
                        url: x.getBindMobile,
                        method: "get"
                    })
                },
                isForbidAccount: function () {
                    return (0,
                        f.default)({
                        url: x.getMediaPermissions,
                        method: "get"
                    })
                },
                newMediaAccount: function () {
                    return (0,
                        f.default)({
                        url: x.getMediaAccount,
                        method: "post",
                        data: {
                            source: "toutiao_RN",
                            add_account_type: 3
                        }
                    })
                },
                publishArticle: function () {
                    var t = this
                        , e = this
                        , i = {
                        title: this.title,
                        content: this.adapter.getHTML(),
                        save: 1,
                        article_type: 0,
                        source: 21
                    }
                        , n = {
                        bodyVal2str: !0,
                        url: "https://www.toutiao.com" + x.publishArticleUrl,
                        body: i
                    }
                        , a = window.byted_acrawler && window.byted_acrawler.sign ? window.byted_acrawler.sign : h.sign
                        , s = a(n)
                        , o = n.url.indexOf("?") !== -1 ? "&_signature=" + s : "?_signature=" + s
                        , r = n.url + o;
                    return (0,
                        f.default)({
                        url: r,
                        headers: {
                            "X-CSRFToken": v.default.get("csrftoken")
                        },
                        method: "post",
                        data: n.body
                    }).then(function (n) {
                        if (0 === n.code)
                            t.$Toast({
                                message: "发布成功！"
                            }),
                                y.default.$emit("feed-unshift-item", [{
                                    title: i.title,
                                    single_mode: !1,
                                    article_genre: "article",
                                    source: t.userData.userName,
                                    media_url: "/c/user/" + t.userData.id + "/",
                                    image_url: "",
                                    behot_time: Math.floor((new Date).getTime() / 1e3),
                                    source_url: "//mp.toutiao.com/preview_article/?pgc_id=" + n.data.pgc_id,
                                    media_avatar_url: t.userData.avatarUrl,
                                    comments_count: 0
                                }]),
                                y.default.$emit("publishSuccess"),
                                window.TEA("toutiao_publish_success", {
                                    multi_publisher_type: "write_article",
                                    image_count: 0,
                                    with_emoji: 0,
                                    words_count: t.textLength,
                                    group_id: n.data.pgc_id
                                }),
                                t.clearContent();
                        else {
                            switch (n.code) {
                                case 2222:
                                    k.default.show({
                                        onOk: function () {
                                            e.publishArticle()
                                        }
                                    });
                                    break;
                                case 3001:
                                    t.pointVerify.init(),
                                        t.pointVerify.show();
                                    break;
                                case 3002:
                                    t.sliderObj.init(),
                                        t.sliderObj.show();
                                    break;
                                default:
                                    t.toast({
                                        message: "发布失败，请稍后重试"
                                    })
                            }
                            b.storage.setItem("ugc_rich_text", (0,
                                c.default)({
                                title: t.title,
                                content: t.adapter.getHTML()
                            }))
                        }
                    })
                },
                newVerification: function () {
                    var t = this
                        , e = {
                        ele: "pc_slide",
                        host: "https://verify.snssdk.com",
                        lang: "zh",
                        app_name: "toutiao.com",
                        challenge_code: 3002,
                        toolbarBackColor: "#fff",
                        promptBackColor: "#F0F0F0",
                        promptFontColor: "#808080",
                        refreshFontColor: "#4A90E2",
                        refreshIconColor: "#4A90E2",
                        validatePassBackColor: "#A0CC49",
                        validateFailBackColor: "#EB2F2F",
                        successCb: function () {
                            t.sliderObj && t.sliderObj.hide(),
                                t.publishArticle()
                        },
                        errorCb: function () {
                        }
                    }
                        , i = {
                        ele: "pc_slide",
                        host: "https://verify.snssdk.com",
                        lang: "zh",
                        app_name: "toutiao.com",
                        challenge_code: 3001,
                        toolbarBackColor: "#fff",
                        refreshFontColor: "#4A90E2",
                        refreshIconColor: "#4A90E2",
                        subBackColor: "#4A90E2",
                        subFontColor: "#fff",
                        validatePassBackColor: "#A0CC49",
                        validateFailBackColor: "#EB2F2F",
                        successCb: function () {
                            t.pointVerify && t.pointVerify.hide(),
                                t.publishArticle()
                        },
                        errorCb: function () {
                        }
                    };
                    this.sliderObj = new SliderVerification(e),
                        this.sliderObj.hide(),
                        this.pointVerify = new Points(i),
                        this.pointVerify.hide()
                },
                publish: function () {
                    function t() {
                        return e.apply(this, arguments)
                    }

                    var e = (0,
                        l.default)(o.default.mark(function t() {
                        var e, i, n, a, s, r;
                        return o.default.wrap(function (t) {
                            for (; ;)
                                switch (t.prev = t.next) {
                                    case 0:
                                        if (window.TEA("toutiao_publish_click", {
                                            multi_publisher_type: "write_article",
                                            image_count: 0,
                                            with_emoji: 0,
                                            words_count: this.textLength,
                                            is_login: this.userData.id ? 1 : 0
                                        }),
                                            e = this.publishValidate({
                                                title: this.title,
                                                content: this.adapter.getHTML()
                                            })) {
                                            t.next = 4;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 4:
                                        return t.next = 6,
                                            this.bindMobile();
                                    case 6:
                                        if (i = t.sent,
                                            n = "https://www.toutiao.com",
                                        i.code !== -1) {
                                            t.next = 11;
                                            break
                                        }
                                        return window.location.href = "https://sso.toutiao.com/bind_mobile_index/?service=" + n,
                                            t.abrupt("return");
                                    case 11:
                                        return t.next = 13,
                                            this.newMediaAccount();
                                    case 13:
                                        if (a = t.sent,
                                        a && "success" === a.message) {
                                            t.next = 17;
                                            break
                                        }
                                        return this.toast({
                                            message: a && a.reason || "发布失败，请稍后重试"
                                        }),
                                            t.abrupt("return");
                                    case 17:
                                        return t.next = 19,
                                            this.isForbidAccount();
                                    case 19:
                                        if (s = t.sent,
                                        s.data && 0 !== s.data.has_publish_article_permission) {
                                            t.next = 23;
                                            break
                                        }
                                        return this.toast({
                                            message: "发布失败，请稍后重试"
                                        }),
                                            t.abrupt("return");
                                    case 23:
                                        return t.next = 25,
                                            this.publishArticle();
                                    case 25:
                                        r = t.sent;
                                    case 26:
                                    case "end":
                                        return t.stop()
                                }
                        }, t, this)
                    }));
                    return t
                }()
            },
            components: {
                SylEditor: d.SylEditor
            }
        }
    }
    , function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = i(25)
            , s = n(a);
        e.default = s.default.extend({
            props: ["emitter"],
            data: function () {
                return {
                    suggests: [],
                    type: 0,
                    bound: null,
                    scrollTop: document.body.scrollTop || document.documentElement.scrollTop
                }
            },
            mounted: function () {
                var t = this;
                this.emitter.on("suggest", function (e, i, n, a, s) {
                    t.suggests = i,
                        t.type = e,
                        t.bound = s,
                        t.offset = n,
                        t.word = a
                }),
                    window.addEventListener("scroll", function (e) {
                        var i = document.body.scrollTop || document.documentElement.scrollTop;
                        t.bound && (t.bound.top += t.scrollTop - i),
                            t.scrollTop = i
                    })
            },
            computed: {
                selectorStyle: function () {
                    return this.bound ? {
                        position: "fixed",
                        top: this.bound.top + 20 + "px",
                        left: this.bound.left + "px"
                    } : {
                        display: "none"
                    }
                }
            },
            methods: {
                select: function (t) {
                    var e = this.$data.suggests.filter(function (e) {
                        return e.id === Number(t.target.dataset.value)
                    })[0];
                    e && this.emitter.emit("select", this.type, e, this.offset, this.word.length)
                }
            }
        })
    }
    , function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = i(7)
            , s = n(a)
            , o = i(58)
            , r = (n(o),
            i(17))
            , l = n(r)
            , u = i(123)
            , c = n(u);
        e.default = {
            name: "videoUploadBox",
            props: {},
            data: function () {
                return {
                    urlPrefix: "//www.toutiao.com/c/ugc/",
                    cpLock: !1,
                    isShowPopup: !1,
                    inputContent: "",
                    uploadStatus: !1,
                    submiting: !1,
                    inputLength: 0,
                    publishParams: {
                        video_id: "",
                        thumb_uri: "",
                        thumb_source: 1,
                        title: ""
                    },
                    inputInvalid: !1,
                    tooLong: !1,
                    fileStatus: {
                        1: "准备中...",
                        2: "上传中",
                        3: "上传取消",
                        4: "上传成功",
                        5: "上传失败"
                    },
                    fileCtrStatus: {
                        1: "",
                        2: "取消上传",
                        3: "",
                        4: "重新上传",
                        5: "继续上传"
                    },
                    fileSugStatus: {
                        1: "",
                        2: "",
                        3: "",
                        4: "",
                        5: "视频无法上传，请检查网络环境"
                    },
                    _files: [],
                    _uploader: null,
                    _uploadId: 0,
                    _status: 0,
                    options: {
                        isInitShow: !0,
                        title: "",
                        statusMsg: "准备中...",
                        ctrMsg: "",
                        sugMsg: "",
                        progress: 0,
                        poster: "",
                        isTranscoding: !1
                    },
                    msgTip: "",
                    timer: null
                }
            },
            computed: {
                uploadReady: function () {
                    return "" !== this.inputContent && this.uploadStatus && !this.inputInvalid
                }
            },
            mounted: function () {
                var t = this;
                l.default.$on("uploadReady", function (e) {
                    t.uploadStatus = e.ready,
                        t.publishParams.video_id = e.video_id
                });
                var e = this.$refs.title;
                e.addEventListener("compositionstart", function () {
                    t.cpLock = !0
                }),
                    e.addEventListener("compositionend", function () {
                        t.cpLock = !1
                    }),
                    this.userData = window.BASE_DATA ? window.BASE_DATA.loginInfo : {}
            },
            methods: {
                toast: function (t) {
                    var e = this;
                    this.timer && (clearTimeout(this.timer),
                        this.timer = null),
                        this.msgTip = t.message,
                        this.timer = setTimeout(function () {
                            e.msgTip = "",
                                clearTimeout(e.timer),
                                e.timer = null
                        }, 3e3)
                },
                togglePopup: function () {
                    this.isShowPopup = !this.isShowPopup,
                    this.isShowPopup && window.TEA("toutiao_video_add")
                },
                clearPopup: function (t) {
                    if (t && this._uploader && !window.confirm("确定要放弃上传视频？"))
                        return !1;
                    if (this.isShowPopup = !1,
                        this._uploader) {
                        var e = this._uploader.getAll()[0];
                        e.cancel()
                    }
                    this.options.isInitShow = !0,
                        this.options.poster = "",
                        this.uploadStatus = !1,
                        this.publishParams = {
                            video_id: "",
                            title: "",
                            thumb_uri: "",
                            thumb_source: 1
                        }
                },
                uploadActionClick: function () {
                    this.$refs.fileElem.click()
                },
                handleFile: function () {
                    this.options.isInitShow = !1,
                        this._files = this.$refs.fileElem.files,
                    this._files.length && (this.options.title = this._files[0].name,
                        l.default.$emit("uploadReady", {
                            ready: !1,
                            type: "video"
                        }),
                        this.options.poster = "",
                        l.default.$emit("uploadPending"),
                        this._beginUpload())
                },
                onCtrClick: function () {
                    var t = this._uploader.getAll()[0];
                    return !!t && void (2 === this._status ? window.confirm("确定取消咩") && (t.cancel(),
                        this.$refs.fileElemHolder.reset(),
                        this.options.isInitShow = !0) : 4 === this._status ? (this.$refs.fileElemHolder.reset(),
                        this.$refs.fileElem.click()) : 5 === this._status && this._uploader.uploadContinue(t))
                },
                _beginUpload: function () {
                    var t = this;
                    (0,
                        s.default)({
                        url: this.urlPrefix + "video/upload/",
                        method: "get",
                        success: function (e) {
                            if ("success" === e.message) {
                                var i = e.data;
                                t._uploadId = i.upload_id,
                                    t._initUploader({
                                        url: i.upload_url,
                                        chunkSize: i.chunk_size
                                    })
                            }
                        }
                    })
                },
                _initUploader: function (t) {
                    var e = this;
                    this._uploader = new c.default({
                        url: t.url,
                        chunk_size: t.chunk_size,
                        filters: [{
                            name: "acceptType",
                            fn: function (t) {
                                var e = /video/;
                                return e.test(t.type)
                            },
                            fail: function () {
                                e.toast({
                                    message: "文件类型错误"
                                })
                            }
                        }, {
                            name: "size",
                            fn: function (t) {
                                var e = t.size / 1048576;
                                return e < 250
                            },
                            fail: function () {
                                e.toast({
                                    message: "文件过大"
                                })
                            }
                        }],
                        progressCbk: function (t) {
                            e._updateFileStatus(2),
                                e.options.progress = t.progress
                        },
                        completeCbk: function (t) {
                            t.responseItem && (e.publishParams.thumb_uri = t.responseItem.poster_uri || "",
                                e.options.poster = t.responseItem.poster_url || ""),
                                e._updateFileStatus(t.status)
                        }
                    });
                    var i = this._uploader.addToQueue(this._files);
                    i ? this._uploader.uploadAll() : this.options.isInitShow = !0
                },
                _updateFileStatus: function (t) {
                    this._status = t,
                        this._updateMsgs(t),
                        this._getFileInfo(t)
                },
                _updateMsgs: function (t) {
                    this.options.statusMsg = this.fileStatus[t],
                        this.options.ctrMsg = this.fileCtrStatus[t],
                        this.options.sugMsg = this.fileSugStatus[t],
                    4 === parseInt(t) && window.TEA("toutiao_video_add_success")
                },
                _getFileInfo: function (t) {
                    return 4 === t && (l.default.$emit("uploadReady", {
                        ready: !0,
                        type: "video",
                        video_id: this._uploadId
                    }),
                        void (window.ttAnalysis && window.ttAnalysis.send("event", {
                            ev: "user_ugc_video_complete"
                        })))
                },
                inputKeyup: function (t) {
                    return !this.cpLock && (this.inputLength = t.length,
                        void (this.inputLength > 30 ? (this.inputInvalid = !0,
                            this.tooLong = !0) : (this.inputInvalid = !1,
                            this.tooLong = !1)))
                },
                publishVideo: function () {
                    var t = this;
                    return window.TEA("toutiao_publish_click", {
                        multi_publisher_type: "upload_video",
                        image_count: 0,
                        with_emoji: 0,
                        words_count: this.inputLength,
                        is_login: this.userData.id ? 1 : 0
                    }),
                        "" == this.inputContent ? (this.toast({
                            message: "请输入内容"
                        }),
                            !1) : this.publishParams.video_id ? !(!this.uploadReady || this.submiting) && (this.submiting = !0,
                            this.publishParams.title = this.inputContent,
                            void (0,
                                s.default)({
                                url: this.urlPrefix + "video/publish/",
                                method: "POST",
                                data: this.publishParams,
                                success: function (e) {
                                    "success" === e.message ? (t.$Toast({
                                        message: "发布成功，转码中，请稍后在个人主页中查看"
                                    }),
                                        window.TEA("toutiao_publish_success", {
                                            multi_publisher_type: "upload_video",
                                            image_count: 0,
                                            with_emoji: 0,
                                            words_count: t.inputLength,
                                            group_id: e.data.item_id,
                                            is_login: t.userData.id ? 1 : 0
                                        }),
                                        t.submiting = !1,
                                        t.clearPopup(),
                                        t.inputContent = "",
                                        t.inputLength = 0,
                                        l.default.$emit("publishSuccess"),
                                    window.ttAnalysis && window.ttAnalysis.send("event", {
                                        ev: "user_ugc_video_submit"
                                    })) : "error" == e.message && ("用户无权限" === e.data ? t.toast({
                                        message: "用户无权限, 发布失败，未登录请登录后重试"
                                    }) : t.toast({
                                        message: e.data || "发布失败，请重试"
                                    }),
                                        t.submiting = !1,
                                        l.default.$emit("publishFail"))
                                },
                                error: function (e) {
                                    t.toast({
                                        message: e.data || "服务器开了点小差，请稍后再试"
                                    }),
                                        t.submiting = !1,
                                        l.default.$emit("publishFail")
                                }
                            })) : (this.toast({
                            message: "请上传视频"
                        }),
                            !1)
                }
            }
        }
    }
    , function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = i(7)
            , s = n(a)
            , o = i(46)
            , r = (n(o),
            i(58))
            , l = (n(r),
            i(17))
            , u = n(l)
            , c = i(123)
            , d = n(c)
            , h = i(332)
            , m = n(h);
        e.default = {
            name: "wendaUploadBox",
            props: {},
            data: function () {
                return {
                    urlPrefix: "//www.toutiao.com/c/ugc/",
                    cpLock: !1,
                    uploadStatus: !1,
                    submiting: !1,
                    inputLength: 0,
                    image_uris: [],
                    inputTitle: "",
                    inputContent: "",
                    contentInvalid: !1,
                    titleInvalid: !1,
                    uploadFiles: [],
                    uploader: null,
                    isShowPopup: !1,
                    options: {
                        statusMsg: "",
                        ctrMsg: "",
                        isTranscoding: !1,
                        imgList: [],
                        loadingList: []
                    },
                    userData: {},
                    msgTip: "",
                    timer: null
                }
            },
            computed: {
                uploadReady: function () {
                    return this.inputTitle.length > 4 && this.inputTitle.length < 40 && !this.contentInvalid
                },
                publishParams: function () {
                    return {
                        title: this.inputTitle,
                        content: this.inputContent,
                        pic_list: this.image_uris,
                        t: (new Date).getTime(),
                        enter_from: "direct_toutiao"
                    }
                }
            },
            mounted: function () {
                var t = this
                    , e = this.uploader && this.uploader.getAll()[0];
                e && e.cancel(),
                    u.default.$on("uploadReady", function (e) {
                        t.uploadStatus = e.ready,
                        e.uri && t.image_uris.push(e.uri)
                    });
                var i = this.$refs.title
                    , n = this.$refs.content;
                i.addEventListener("compositionstart", function () {
                    t.cpLock = !0
                }),
                    i.addEventListener("compositionend", function () {
                        t.cpLock = !1
                    }),
                    n.addEventListener("compositionstart", function () {
                        t.cpLock = !0
                    }),
                    n.addEventListener("compositionend", function () {
                        t.cpLock = !1
                    }),
                    this.userData = window.BASE_DATA ? window.BASE_DATA.loginInfo : {}
            },
            methods: {
                toast: function (t) {
                    var e = this;
                    this.timer && (clearTimeout(this.timer),
                        this.timer = null),
                        this.msgTip = t.message,
                        this.timer = setTimeout(function () {
                            e.msgTip = "",
                                clearTimeout(e.timer),
                                e.timer = null
                        }, 3e3)
                },
                togglePopup: function () {
                    this.isShowPopup = !this.isShowPopup,
                    this.isShowPopup && window.TEA("toutiao_pictures_add", {
                        multi_publisher_type: "write_question"
                    })
                },
                jump2MoreAnswer: function () {
                    window.TEA("toutiao_more_answer")
                },
                clearPopup: function (t) {
                    return !(t && this.options.imgList.length && !window.confirm("确定要放弃上传图片？")) && (this.isShowPopup = !1,
                        this.options.imgList = [],
                        void (this.image_uris = []))
                },
                removeImg: function (t, e) {
                    this.image_uris.splice(e, 1),
                        this.options.imgList = (0,
                            m.default)(this.options.imgList, t)
                },
                uploadActionClick: function () {
                    this.$refs.fileElem.click()
                },
                handleFile: function () {
                    if (this.uploadFiles = this.$refs.fileElem.files,
                    this.uploadFiles.length > 0 && this.uploadFiles.length <= 3 - this.options.imgList.length) {
                        u.default.$emit("uploadReady", {
                            ready: !1,
                            type: "img"
                        }),
                            u.default.$emit("uploadPending");
                        for (var t = this.uploadFiles.length - 1; t >= 0; t--)
                            this.options.loadingList.push(t);
                        this._initUploader()
                    } else
                        this.$Toast({
                            message: this.uploadFiles.length > 0 ? "上传的图片过多" : "请选择正确的图片"
                        })
                },
                _initUploader: function () {
                    var t = this;
                    this.uploader = new d.default({
                        url: this.urlPrefix + "image/upload/",
                        filters: [{
                            name: "acceptType",
                            fn: function (t) {
                                var e = /image/;
                                return e.test(t.type)
                            },
                            fail: function () {
                                t.$Toast({
                                    message: "文件类型错误"
                                }),
                                    t.options.loadingList.pop()
                            }
                        }, {
                            name: "size",
                            fn: function (t) {
                                var e = t.size / 1048576;
                                return e < 10
                            },
                            fail: function () {
                                t.$Toast({
                                    message: "图片大小超过10M，请更换图片"
                                }),
                                    t.options.loadingList.pop()
                            }
                        }],
                        progressCbk: function (t) {
                        },
                        completeCbk: function (e) {
                            t.options.loadingList.pop(),
                            e && e.responseItem && e.responseItem.data && e.responseItem.data.url_list && (t.options.imgList.push(e.responseItem.data.url_list[0].url),
                                u.default.$emit("uploadReady", {
                                    ready: !0,
                                    type: "img",
                                    uri: e.responseItem.data.web_uri
                                }),
                                t.$refs.fileElemHolder.reset()),
                                window.TEA("toutiao_pictures_add_success", {
                                    multi_publisher_type: "write_question"
                                })
                        },
                        errorCbk: function (e) {
                            t.$Toast({
                                message: "上传失败，请更换图片再试试"
                            }),
                                u.default.$emit("uploadReady", {
                                    ready: !0,
                                    type: "img"
                                })
                        }
                    });
                    var e = this.uploader.addToQueue(this.uploadFiles);
                    e ? this.uploader.uploadAll() : this.$refs.fileElemHolder.reset()
                },
                contentKeyup: function (t) {
                    return !this.cpLock && (this.inputLength = t.length,
                        void (this.inputLength > 40 ? this.contentInvalid = !0 : this.contentInvalid = !1))
                },
                publishImg: function () {
                    var t = this;
                    return window.TEA("toutiao_publish_click", {
                        multi_publisher_type: "write_question",
                        image_count: this.image_uris.length,
                        with_emoji: 0,
                        words_count: this.inputLength,
                        is_login: this.userData.id ? 1 : 0
                    }),
                        this.inputTitle.length < 4 ? (this.toast({
                            message: "标题不得少于 4 字"
                        }),
                            !1) : this.inputTitle.length > 40 ? (this.toast({
                            message: "标题不得多于 40 字"
                        }),
                            !1) : !(!this.uploadReady || this.submiting) && (this.image_uris.length > 3 ? (this.$Toast({
                            message: "图片不能多于 3 张"
                        }),
                            !1) : (this.submiting = !0,
                            void (0,
                                s.default)({
                                url: "//www.toutiao.com/wenda/web/commit/postquestion/",
                                method: "post",
                                data: this.publishParams,
                                success: function (e) {
                                    0 === e.err_no ? (t.$Toast({
                                        message: "发布成功！"
                                    }),
                                        u.default.$emit("feed-unshift-item", [{
                                            title: t.publishParams.title,
                                            single_mode: !!t.options.imgList.length,
                                            article_genre: "wenda",
                                            source: "悟空问答",
                                            image_url: t.options.imgList[0],
                                            behot_time: Math.floor((new Date).getTime() / 1e3),
                                            source_url: "//www.wukong.com/question/" + e.qid + "/"
                                        }]),
                                        window.TEA("toutiao_publish_success", {
                                            multi_publisher_type: "write_question",
                                            image_count: t.image_uris.length,
                                            with_emoji: 0,
                                            words_count: t.inputLength,
                                            group_id: e.qid,
                                            is_login: t.userData.id ? 1 : 0
                                        }),
                                        t.submiting = !1,
                                        t.clearPopup(),
                                        t.inputContent = "",
                                        t.inputTitle = "",
                                        t.inputLength = 0,
                                        u.default.$emit("publishSuccess"),
                                    window.ttAnalysis && window.ttAnalysis.send("event", {
                                        ev: "user_ugc_wenda_submit"
                                    })) : (t.$Toast({
                                        message: e.err_tips || "发布失败，请重试"
                                    }),
                                        t.submiting = !1,
                                        u.default.$emit("publishFail"))
                                },
                                error: function (t) {
                                    this.$Toast({
                                        message: t.data || "服务器开了点小差，请稍后再试"
                                    }),
                                        this.submiting = !1,
                                        u.default.$emit("publishFail")
                                }
                            })))
                }
            }
        }
    }
    , function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = i(32)
            , s = n(a)
            , o = i(7)
            , r = n(o);
        e.default = {
            name: "HotSearch",
            props: {
                getHotSearchUrl: {
                    type: String,
                    default: "/2/wap/search/extra/pc_hot_search/"
                },
                title: {
                    type: String,
                    default: ""
                },
                count: {
                    type: Number,
                    default: 7
                }
            },
            data: function () {
                return {
                    data: [],
                    iconTitle: i(679),
                    iconMore: i(678),
                    iconSuffix: [null, i(673), i(674), i(675), i(676), i(677)]
                }
            },
            mounted: function () {
                var t = this;
                (0,
                    r.default)({
                    url: this.getHotSearchUrl,
                    method: "GET",
                    success: function (e) {
                        if ("success" === e.message) {
                            if (!e.data)
                                return;
                            var i = e.data.search_words;
                            if (!Array.isArray(i) || 0 === i.length)
                                return;
                            t.data = i
                        }
                    }
                })
            },
            computed: {
                listCount: function () {
                    return this.data.slice(0, this.count)
                }
            },
            components: {
                Pane: s.default
            }
        }
    }
    , function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = i(756)
            , s = n(a)
            , o = i(755)
            , r = n(o);
        e.default = {
            name: "is-login",
            props: {
                loginInfo: {}
            },
            components: {
                Login: s.default,
                Logged: r.default
            }
        }
    }
    , function (t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
            e.default = {
                name: "logged",
                props: {
                    loginInfo: {}
                },
                methods: {
                    numFormat: function (t) {
                        return t < 1e5 ? t : t < 1e8 ? (t / 1e4).toFixed(1) + "万" : (t / 1e8).toFixed(1) + "亿"
                    }
                },
                computed: {
                    following: function () {
                        return this.numFormat(this.loginInfo.following)
                    },
                    fans: function () {
                        return this.numFormat(this.loginInfo.fans)
                    }
                }
            }
    }
    , function (t, e) {
        "use strict";
        Object.defineProperty(e, "__esModule", {
            value: !0
        }),
            e.default = {
                name: "login",
                methods: {
                    snsLogin: function (t) {
                        var e = this
                            , i = t.target || t.srcElement;
                        if ("li" === i.tagName.toLowerCase()) {
                            var n = i.getAttribute("data-pid");
                            window.Slardar && window.Slardar("emit", "counter", {
                                name: "sns_login",
                                value: 1,
                                tags: {
                                    pid: n
                                }
                            }),
                                setTimeout(function () {
                                    e._snsLogin(n)
                                }, 300)
                        }
                    },
                    _snsLogin: function (t) {
                        var e = "https://www.toutiao.com/auth/connect/?type=sso";
                        e += "&platform=" + t,
                            e += "&next=https://sso.toutiao.com/auth/login_success/?service=https://www.toutiao.com/",
                            window.location.href = e
                    }
                }
            }
    }
    , , , function (t, e, i) {
        "use strict";

        function n(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }

        Object.defineProperty(e, "__esModule", {
            value: !0
        });
        var a = i(17)
            , s = n(a)
            , o = i(11)
            , r = i(29)
            , l = n(r)
            , u = i(120)
            , c = n(u)
            , d = i(371)
            , h = n(d)
            , m = i(367)
            , _ = n(m)
            , p = i(70)
            , f = n(p)
            , g = i(124)
            , v = n(g)
            , w = i(132)
            , y = n(w)
            , b = i(379)
            , x = n(b)
            , C = i(122)
            , k = n(C)
            , j = i(121)
            , S = n(j)
            , M = i(133)
            , I = n(M)
            , P = i(131)
            , A = n(P)
            , E = i(130)
            , L = n(E)
            , T = i(134)
            , F = n(T)
            , $ = i(129)
            , O = n($)
            , U = i(380)
            , z = n(U)
            , H = window.BASE_DATA || {}
            , B = window.PAGE_SWITCH || {};
        e.default = {
            name: "app",
            data: function () {
                return {
                    category: H.category,
                    url: "/toutiao/api/pc/feed/",
                    qhAdSupport: B.qihuAdShow || !1,
                    headerInfo: H.headerInfo,
                    tag: H.tag,
                    newsHover: !1,
                    isShowNewsImg: !1,
                    province: H.province,
                    isLogin: H.isLogin,
                    loginInfo: H.loginInfo
                }
            },
            methods: {
                refreshFeed: function () {
                    s.default.$emit("feed-refresh-bus")
                }
            },
            mounted: function () {
                var t = this
                    , e = document.getElementById("rightModule")
                    , i = (0,
                    o.elOffset)(e).top
                    , n = 0
                    , a = 0;
                window.addEventListener("scroll", (0,
                    l.default)(function () {
                    n = e.clientHeight,
                        a = (0,
                            o.getScrollTop)(window),
                        i + n > a ? (t.newsHover = !1,
                            t.isShowNewsImg = !1) : (t.newsHover = !0,
                            t.isShowNewsImg = !0)
                }, 60), !1)
            },
            components: {
                TtHeader: c.default,
                NewsSlide: F.default,
                FeedBox: _.default,
                Channel: O.default,
                SearchBox: f.default,
                HotNews: y.default,
                HotVideos: k.default,
                HotImages: S.default,
                HotSearch: x.default,
                MoreLinks: I.default,
                FriendLinks: A.default,
                Company: L.default,
                Toolbar: v.default,
                Publisher: h.default,
                IsLogin: z.default
            }
        }
    }
    , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function (t, e) {
    }
    , function (t, e) {
    }
    , function (t, e) {
    }
    , function (t, e) {
    }
    , function (t, e) {
    }
    , function (t, e) {
    }
    , function (t, e) {
    }
    , function (t, e) {
    }
    , , function (t, e) {
    }
    , function (t, e) {
    }
    , , , function (t, e) {
    }
    , function (t, e) {
    }
    , function (t, e) {
    }
    , function (t, e) {
    }
    , function (t, e) {
    }
    , function (t, e) {
    }
    , function (t, e) {
    }
    , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function (t, e, i) {
        t.exports = i.p + "static/img/e8e8e8.b6c0f54.png"
    }
    , function (t, e, i) {
        t.exports = i.p + "static/img/icon_hot_search_t1.a7d73d3.png"
    }
    , function (t, e, i) {
        t.exports = i.p + "static/img/icon_hot_search_t2.4c778ee.png"
    }
    , function (t, e, i) {
        t.exports = i.p + "static/img/icon_hot_search_t3.8fe6a7b.png"
    }
    , function (t, e, i) {
        t.exports = i.p + "static/img/icon_hot_search_t4.731cef5.png"
    }
    , function (t, e, i) {
        t.exports = i.p + "static/img/icon_hot_search_t5.dcedebb.png"
    }
    , function (t, e) {
        t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAeCAYAAAAhDE4sAAAAAXNSR0IArs4c6QAAAVBJREFUSA3N1T1rg0AYB3A1FWkn6Vpa0EEHv0Rp5y4Fty75gl0K3RoCnaWTg4tCuncV61uf/+EVL55J7lzygNxL7vlx8R7VMM424jhe4dLdoInEIAj8tm236Pd9v87z/AN9lbCwuOu6BwJucdHwzff9RxUEaxnkOM4r9XdD8iW1yhiD0jT9sW37fgnG7tGwEyMMQ6+u6y2N74a5ktqnU+6ZACFZF5tAupgU0sFmIVXsIKSCseNHwlxkWVbsl4Zpmu+e572Mc47uiC/GaTZN80nVf4M5whrXda+SJKkxProjLOJBCO9O2pOgUW2x3ZDyS8/nmu8G6sWE3psYIUK1F0UhvCEO3qM5RPbIzEIqCP6EFFJFpJAOMoF0EQFagvxDURRdl2X5RRPCEctOB0myYAVZVdUz/aiNAGYFaVnWhsr/GxPUan2OkMti6QeSO+fT/gGK1tWL9Et9kQAAAABJRU5ErkJggg=="
    }
    , function (t, e, i) {
        t.exports = i.p + "static/img/icon_tt_hot_search.4ccd360.png"
    }
    , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function (t, e, i) {
        i(589);
        var n = i(1)(i(384), i(760), null, null);
        t.exports = n.exports
    }
    , function (t, e, i) {
        i(604);
        var n = i(1)(i(385), i(776), null, null);
        t.exports = n.exports
    }
    , function (t, e, i) {
        i(597);
        var n = i(1)(i(386), i(768), "data-v-479ab875", null);
        t.exports = n.exports
    }
    , function (t, e, i) {
        i(592);
        var n = i(1)(i(387), i(763), null, null);
        t.exports = n.exports
    }
    , function (t, e, i) {
        i(591);
        var n = i(1)(i(388), i(762), null, null);
        t.exports = n.exports
    }
    , function (t, e, i) {
        i(590);
        var n = i(1)(i(389), i(761), null, null);
        t.exports = n.exports
    }
    , function (t, e, i) {
        i(607);
        var n = i(1)(i(390), i(779), "data-v-f1b12512", null);
        t.exports = n.exports
    }
    , function (t, e, i) {
        var n = i(1)(i(391), i(770), null, null);
        t.exports = n.exports
    }
    , function (t, e, i) {
        i(594);
        var n = i(1)(i(392), i(765), null, null);
        t.exports = n.exports
    }
    , function (t, e, i) {
        i(603);
        var n = i(1)(i(393), i(775), null, null);
        t.exports = n.exports
    }
    , function (t, e, i) {
        i(595);
        var n = i(1)(i(394), i(766), null, null);
        t.exports = n.exports
    }
    , function (t, e, i) {
        i(593);
        var n = i(1)(i(395), i(764), null, null);
        t.exports = n.exports
    }
    , function (t, e, i) {
        i(605);
        var n = i(1)(i(396), i(777), null, null);
        t.exports = n.exports
    }
    , function (t, e, i) {
        i(601);
        var n = i(1)(i(397), i(773), "data-v-73e9c86a", null);
        t.exports = n.exports
    }
    , function (t, e, i) {
        i(606);
        var n = i(1)(i(398), i(778), "data-v-e2122872", null);
        t.exports = n.exports
    }
    , function (t, e, i) {
        i(598);
        var n = i(1)(i(399), i(769), "data-v-4a7e2734", null);
        t.exports = n.exports
    }
    , , , function (t, e, i) {
        i(602);
        var n = i(1)(i(402), i(774), null, null);
        t.exports = n.exports
    }
    , function (t, e) {
        t.exports = {
            render: function () {
                var t = this
                    , e = t.$createElement
                    , i = t._self._c || e;
                return i("div", {
                    ref: "wrapper",
                    staticClass: "feed-infinite-wrapper"
                }, [i("tt-loading", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.refreshLock,
                        expression: "refreshLock"
                    }],
                    attrs: {
                        message: "推荐中"
                    }
                }), t._v(" "), i("msgAlert", {
                    attrs: {
                        category: t.category,
                        suspensionTip: t.suspensionTip
                    }
                }), t._v(" "), i("ul", {
                    directives: [{
                        name: "infinite-scroll",
                        rawName: "v-infinite-scroll",
                        value: t.loadMore,
                        expression: "loadMore"
                    }],
                    attrs: {
                        "infinite-scroll-disabled": "loading",
                        "infinite-scroll-immediate-check": "containerCheck",
                        "infinite-scroll-immediate-check-count": "containerCheckCount",
                        "infinite-scroll-distance": "80"
                    }
                }, t._l(t.list, function (e, n) {
                    return i("li", {
                        key: e.group_id,
                        class: {
                            J_ad: e.ad_id,
                            J_qihu_ad: e.ad_qihu_id > -1
                        },
                        attrs: {
                            ad_id: e.ad_id,
                            ad_qihu_id: e.ad_qihu_id,
                            ad_extra: e.log_extra,
                            ad_track: e.ad_track
                        },
                        on: {
                            click: function (i) {
                                return t.feedItemClick(e)
                            }
                        }
                    }, [e.ugc_data ? i("ugcMode", {
                        attrs: {
                            item: e
                        }
                    }) : e.is_stick ? i("noMode", {
                        attrs: {
                            item: e,
                            index: n
                        }
                    }) : e.has_video && "ad" !== e.article_genre ? i("videoMode", {
                        attrs: {
                            item: e,
                            "dislike-url": t.dislikeUrl,
                            "getUser-info-url": t.getUserInfoUrl
                        }
                    }) : e.single_mode ? i("singleMode", {
                        attrs: {
                            item: e,
                            dislikeUrl: t.dislikeUrl,
                            getUserInfoUrl: t.getUserInfoUrl
                        }
                    }) : e.has_gallery ? i("moreMode", {
                        attrs: {
                            item: e
                        }
                    }) : e.refresh_mode ? i("refreshMode", {
                        attrs: {
                            item: e
                        },
                        nativeOn: {
                            click: function (e) {
                                return e.stopPropagation(),
                                    t.refresh(e)
                            }
                        }
                    }) : i("noMode", {
                        attrs: {
                            item: e
                        }
                    })], 1)
                }), 0), t._v(" "), i("div", {
                    class: {
                        "hide-loading": !t.loadmoreLock
                    }
                }, [i("tt-loading", {
                    attrs: {
                        message: "加载中"
                    }
                })], 1)], 1)
            },
            staticRenderFns: []
        }
    }
    , function (t, e) {
        t.exports = {
            render: function () {
                var t = this
                    , e = t.$createElement
                    , i = t._self._c || e;
                return t.showPublisher ? i("div", {
                    staticClass: "ugcBox"
                }, [i("div", {
                    staticClass: "ugcBox-inner"
                }, [i("ul", {
                    staticClass: "bui-box ugc-tab-list"
                }, [i("li", {
                    staticClass: "bui-left ugc-tab-item",
                    class: {
                        current: 1 === t.showType
                    },
                    on: {
                        click: function (e) {
                            return t.changeType(1)
                        }
                    }
                }, [t._v("发微头条")]), t._v(" "), i("li", {
                    staticClass: "bui-left ugc-tab-item",
                    class: {
                        current: 4 === t.showType
                    },
                    on: {
                        click: function (e) {
                            return t.changeType(4)
                        }
                    }
                }, [t._v("写文章")]), t._v(" "), i("li", {
                    staticClass: "bui-left ugc-tab-item",
                    class: {
                        current: 3 === t.showType
                    },
                    on: {
                        click: function (e) {
                            return t.changeType(3)
                        }
                    }
                }, [t._v("提问题")]), t._v(" "), i("li", {
                    staticClass: "bui-left ugc-tab-item",
                    class: {
                        current: 2 === t.showType
                    },
                    on: {
                        click: function (e) {
                            return t.changeType(2)
                        }
                    }
                }, [t._v("发视频")])]), t._v(" "), i("div", {
                    staticClass: "ugc-content"
                }, [1 === t.showType ? i("div", [i("imgUploadBox", {
                    on: {
                        onLongMode: t.longModeHandler
                    }
                })], 1) : t._e(), t._v(" "), 2 === t.showType ? i("div", [i("videoUploadBox")], 1) : t._e(), t._v(" "), 3 === t.showType ? i("div", [i("wendaUploadBox")], 1) : t._e(), t._v(" "), 4 === t.showType ? i("div", [i("editor")], 1) : t._e()]), t._v(" "), 4 === t.showType ? i("a", {
                    staticClass: "pgc-inviter",
                    attrs: {
                        href: "//mp.toutiao.com/auth/page/register/register-type",
                        target: "_blank"
                    }
                }, [t._v("加入头条号，优质的创作值得更好的回报")]) : t._e()])]) : t._e()
            },
            staticRenderFns: []
        }
    }
    , function (t, e) {
        t.exports = {
            render: function () {
                var t = this
                    , e = t.$createElement
                    , i = t._self._c || e;
                return i("div", {
                    staticClass: "imgBox upload-box"
                }, [i("div", {
                    staticClass: "editor-verify",
                    attrs: {
                        id: "pc_text"
                    }
                }), t._v(" "), i("div", {
                    staticClass: "editor-verify",
                    attrs: {
                        id: "pc_slide"
                    }
                }), t._v(" "), i("textarea", {
                    directives: [{
                        name: "model",
                        rawName: "v-model.trim",
                        value: t.inputContent,
                        expression: "inputContent",
                        modifiers: {
                            trim: !0
                        }
                    }],
                    ref: "title",
                    staticClass: "title-input",
                    class: {
                        warning: t.inputInvalid,
                        long: t.isLongMode
                    },
                    attrs: {
                        placeholder: "有什么新鲜事想告诉大家"
                    },
                    domProps: {
                        value: t.inputContent
                    },
                    on: {
                        keyup: function (e) {
                            return t.inputKeyup(e.target.value)
                        },
                        input: function (e) {
                            e.target.composing || (t.inputContent = e.target.value.trim())
                        },
                        blur: function (e) {
                            return t.$forceUpdate()
                        }
                    }
                }), t._v(" "), i("p", {
                    staticClass: "words-number"
                }, [t._v(t._s(t.inputLength) + "/2000字")]), t._v(" "), i("div", {
                    staticClass: "bui-box upload-footer"
                }, [i("div", {
                    staticClass: "bui-left"
                }, [i("span", {
                    staticClass: "show-image-uploader show-uploader",
                    attrs: {
                        ga_event: "user_ugc_img_open"
                    },
                    on: {
                        click: t.togglePopup
                    }
                }, [i("img", {
                    staticClass: "image-icon",
                    attrs: {
                        src: "http://sf1-ttcdn-tos.pstatp.com/obj/ttfe/toutiao.com/image-icon.png"
                    }
                }), t._v(" "), i("span", [t._v("图片")])]), t._v(" "), i("span", {
                    staticClass: "show-emoji show-uploader",
                    on: {
                        click: t.toggleEmojiPanel
                    }
                }, [i("img", {
                    staticClass: "image-icon",
                    attrs: {
                        src: "http://sf1-ttcdn-tos.pstatp.com/obj/ttfe/toutiao.com/emoji-icon.png"
                    }
                }), t._v(" "), i("span", [t._v("表情")])])]), t._v(" "), i("div", {
                    staticClass: "bui-right"
                }, [i("span", {
                    staticClass: "msg-tip"
                }, [t._v(t._s(t.msgTip))]), t._v(" "), i("a", {
                    staticClass: "upload-publish",
                    class: {
                        active: t.uploadReady
                    },
                    on: {
                        click: t.publishImg
                    }
                }, [t._v("发布")])])]), t._v(" "), i("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.isShowPopup,
                        expression: "isShowPopup"
                    }],
                    staticClass: "uploader-popup"
                }, [i("div", {
                    staticClass: "imgUploadBox"
                }, [i("p", {
                    staticClass: "uploader-title"
                }, [t._v("本地上传")]), t._v(" "), i("p", {
                    staticClass: "uploader-meta"
                }, [t._v("共 " + t._s(t.options.imgList.length) + " 张，还能上传 " + t._s(9 - t.options.imgList.length) + " 张")]), t._v(" "), i("i", {
                    staticClass: "bui-icon close-popup icon-close_small",
                    on: {
                        click: function (e) {
                            return t.clearPopup(!0)
                        }
                    }
                }), t._v(" "), i("div", {
                    staticClass: "bui-box upload-box"
                }, [i("form", {
                    ref: "fileElemHolder",
                    staticStyle: {
                        display: "none"
                    }
                }, [i("input", {
                    ref: "fileElem",
                    attrs: {
                        id: "fileElem",
                        type: "file",
                        accept: "image/*",
                        multiple: "multiple"
                    },
                    on: {
                        change: t.handleFile
                    }
                })]), t._v(" "), i("ul", {
                    staticClass: "upload-img-list"
                }, [t._l(t.options.imgList, function (e, n) {
                    return i("li", {
                        staticClass: "upload-img-item"
                    }, [i("div", {
                        staticClass: "img-wrap"
                    }, [i("img", {
                        attrs: {
                            src: e
                        }
                    })]), t._v(" "), i("i", {
                        staticClass: "bui-icon remove-img icon-close_small",
                        on: {
                            click: function (i) {
                                return t.removeImg(e, n)
                            }
                        }
                    })])
                }), t._v(" "), t._l(t.options.loadingList, function (t) {
                    return i("li", {
                        staticClass: "upload-img-item upload-img-loading"
                    }, [i("img", {
                        attrs: {
                            src: "http://s3b.pstatp.com/toutiao/resource/toutiao_web/static/style/image/loading_50c5e3e.gif",
                            alt: "上传中"
                        }
                    })])
                }), t._v(" "), t.options.imgList.length < 9 ? i("li", {
                    staticClass: "upload-img-item upload-img-add",
                    attrs: {
                        ga_event: "user_ugc_img_upload"
                    },
                    on: {
                        click: t.uploadActionClick
                    }
                }, [i("tt-icon", {
                    attrs: {
                        type: "add_small",
                        size: "30",
                        color: "#ddd"
                    }
                })], 1) : t._e()], 2)])])]), t._v(" "), i("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.isShowEmojiPanel,
                        expression: "isShowEmojiPanel"
                    }],
                    staticClass: "uploader-popup emoji-panel"
                }, [i("i", {
                    staticClass: "bui-icon close-popup icon-close_small",
                    on: {
                        click: t.toggleEmojiPanel
                    }
                }), t._v(" "), i("div", {
                    staticClass: "emoji-box"
                }, [i("div", {
                    staticClass: "emoji-list"
                }, t._l(t.emojiList, function (e) {
                    return i("i", {
                        staticClass: "emoji",
                        style: {
                            "background-image": "url(" + e.backgroundImg + ")"
                        },
                        on: {
                            click: function (i) {
                                return t.handleSelectEmoji(e)
                            }
                        }
                    })
                }), 0)])])])
            },
            staticRenderFns: []
        }
    }
    , function (t, e) {
        t.exports = {
            render: function () {
                var t = this
                    , e = t.$createElement
                    , i = t._self._c || e;
                return i("div", {
                    ref: "player",
                    staticClass: "player",
                    class: {
                        "theatre-btn-visible": t.theatreBtnVisible,
                        "mini-btn-visible": t.miniBtnVisible,
                        float: t.isFloating,
                        transitionable: t.showTransition
                    },
                    style: {
                        width: t.playerWidth + "px",
                        height: t.playerHeight + "px"
                    },
                    attrs: {
                        oncontextmenu: "return false"
                    }
                }, [i("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.isBeforeShowing,
                        expression: "isBeforeShowing"
                    }],
                    staticClass: "before",
                    on: {
                        click: t.startPlay
                    }
                }, [i("img", {
                    directives: [{
                        name: "lazy",
                        rawName: "v-lazy",
                        value: t.posterUrl,
                        expression: "posterUrl"
                    }],
                    attrs: {
                        alt: ""
                    }
                }), t._v(" "), i("span", {
                    staticClass: "play-btn"
                }, [i("tt-icon", {
                    attrs: {
                        type: "playvedio",
                        color: "#fff",
                        size: "30"
                    }
                })], 1), t._v(" "), t.duration ? i("span", {
                    staticClass: "duration"
                }, [i("tt-icon", {
                    attrs: {
                        type: "playvedio",
                        size: "8"
                    }
                }), i("em", [t._v(t._s(t.duration))])], 1) : t._e()]), t._v(" "), i("div", {
                    ref: "playerWrap",
                    staticClass: "player-wrap"
                }, [i("div", {
                    staticClass: "player-inner",
                    attrs: {
                        id: t.id
                    }
                }), t._v(" "), i("div", {
                    staticClass: "action-line"
                }, [i("tt-icon", {
                    attrs: {
                        type: "close_small",
                        size: "18"
                    },
                    nativeOn: {
                        click: function (e) {
                            return t.closeMini(e)
                        }
                    }
                }), t._v(" "), i("span", {
                    on: {
                        mousedown: t.startDrag
                    }
                }, [t._v("按住该区域可拖动小窗")])], 1)]), t._v(" "), i("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.isNextShowing,
                        expression: "isNextShowing"
                    }],
                    staticClass: "next"
                }, [i("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.isNextOneShowing,
                        expression: "isNextOneShowing"
                    }],
                    staticClass: "next-one"
                }, [i("p", {
                    staticClass: "info"
                }, [t._v("接下来播放")]), t._v(" "), i("h3", {
                    staticClass: "title"
                }, [t._v(t._s(t.nextOneTitle))]), t._v(" "), i("i", {
                    on: {
                        click: t.cancel
                    }
                }, [i("img", {
                    attrs: {
                        src: t.countdownAddrR,
                        alt: "",
                        width: "78",
                        height: "78"
                    }
                })]), t._v(" "), i("div", [i("i", {
                    staticClass: "cancel",
                    on: {
                        click: t.cancel
                    }
                }, [t._v("取消播放")])])]), t._v(" "), i("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.isNextListShowing,
                        expression: "isNextListShowing"
                    }],
                    staticClass: "next-list"
                }, [i("ul", t._l(t.siblings, function (e) {
                    return i("li", {
                        key: e.link
                    }, [i("a", {
                        attrs: {
                            href: e.link,
                            ga_event: "click_relavant_video"
                        }
                    }, [i("img", {
                        directives: [{
                            name: "lazy",
                            rawName: "v-lazy",
                            value: e.img,
                            expression: "item.img"
                        }],
                        attrs: {
                            alt: "相关视频"
                        }
                    }), t._v(" "), i("div", {
                        staticClass: "title"
                    }, [i("h4", [t._v(t._s(e.title))])])])])
                }), 0), t._v(" "), i("div", {
                    staticClass: "replay-wrap"
                }, [i("i", {
                    staticClass: "replay",
                    on: {
                        click: t.replay
                    }
                }, [t._v("重播")])])])])])
            },
            staticRenderFns: []
        }
    }
    , function (t, e) {
        t.exports = {
            render: function () {
                var t = this
                    , e = t.$createElement
                    , i = t._self._c || e;
                return i("div", {
                    staticClass: "wendaBox upload-box"
                }, [i("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model.trim",
                        value: t.inputTitle,
                        expression: "inputTitle",
                        modifiers: {
                            trim: !0
                        }
                    }],
                    ref: "title",
                    staticClass: "wenda-title-input wenda-input",
                    class: {
                        warning: t.titleInvalid
                    },
                    attrs: {
                        type: "text",
                        placeholder: "请输入问题标题（4-40字）"
                    },
                    domProps: {
                        value: t.inputTitle
                    },
                    on: {
                        input: function (e) {
                            e.target.composing || (t.inputTitle = e.target.value.trim())
                        },
                        blur: function (e) {
                            return t.$forceUpdate()
                        }
                    }
                }), t._v(" "), i("textarea", {
                    directives: [{
                        name: "model",
                        rawName: "v-model.trim",
                        value: t.inputContent,
                        expression: "inputContent",
                        modifiers: {
                            trim: !0
                        }
                    }],
                    ref: "content",
                    staticClass: "wenda-content-input wenda-input",
                    class: {
                        warning: t.contentInvalid
                    },
                    attrs: {
                        placeholder: "添加问题背景描述（选填，0-40字）"
                    },
                    domProps: {
                        value: t.inputContent
                    },
                    on: {
                        keyup: function (e) {
                            return t.contentKeyup(e.target.value)
                        },
                        input: function (e) {
                            e.target.composing || (t.inputContent = e.target.value.trim())
                        },
                        blur: function (e) {
                            return t.$forceUpdate()
                        }
                    }
                }), t._v(" "), i("p", {
                    staticClass: "words-number"
                }, [t._v(t._s(t.inputLength) + "/40字")]), t._v(" "), i("div", {
                    staticClass: "bui-box upload-footer"
                }, [i("div", {
                    staticClass: "bui-left"
                }, [i("span", {
                    staticClass: "show-uploader",
                    on: {
                        click: t.togglePopup
                    }
                }, [i("tt-icon", {
                    attrs: {
                        type: "pic_tool",
                        size: "15",
                        color: "#ed4040"
                    }
                }), t._v(" "), i("span", [t._v("添加图片")])], 1), t._v(" "), i("a", {
                    staticClass: "show-uploader",
                    attrs: {
                        href: "//www.wukong.com",
                        target: "_blank"
                    },
                    on: {
                        click: t.jump2MoreAnswer
                    }
                }, [i("tt-icon", {
                    attrs: {
                        type: "ask_tool",
                        size: "15",
                        color: "#ed4040"
                    }
                }), t._v(" "), i("span", [t._v("更多问答")])], 1)]), t._v(" "), i("div", {
                    staticClass: "bui-right"
                }, [i("span", {
                    staticClass: "msg-tip"
                }, [t._v(t._s(t.msgTip))]), t._v(" "), i("a", {
                    staticClass: "upload-publish",
                    class: {
                        active: t.uploadReady
                    },
                    on: {
                        click: t.publishImg
                    }
                }, [t._v("发布")])])]), t._v(" "), i("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.isShowPopup,
                        expression: "isShowPopup"
                    }],
                    staticClass: "uploader-popup"
                }, [i("div", {
                    staticClass: "wendaUploadBox"
                }, [i("p", {
                    staticClass: "uploader-title"
                }, [t._v("本地上传")]), t._v(" "), i("p", {
                    staticClass: "uploader-meta"
                }, [t._v("共 " + t._s(t.options.imgList.length) + " 张，还能上传 " + t._s(3 - t.options.imgList.length) + " 张")]), t._v(" "), i("i", {
                    staticClass: "bui-icon close-popup icon-close_small",
                    on: {
                        click: function (e) {
                            return t.clearPopup(!0)
                        }
                    }
                }), t._v(" "), i("div", {
                    staticClass: "bui-box upload-box"
                }, [i("form", {
                    ref: "fileElemHolder",
                    staticStyle: {
                        display: "none"
                    }
                }, [i("input", {
                    ref: "fileElem",
                    attrs: {
                        id: "fileElem",
                        type: "file",
                        accept: "image/*",
                        multiple: "multiple"
                    },
                    on: {
                        change: t.handleFile
                    }
                })]), t._v(" "), i("ul", {
                    staticClass: "upload-img-list"
                }, [t._l(t.options.imgList, function (e, n) {
                    return i("li", {
                        staticClass: "upload-img-item"
                    }, [i("div", {
                        staticClass: "img-wrap"
                    }, [i("img", {
                        attrs: {
                            src: e
                        }
                    })]), t._v(" "), i("i", {
                        staticClass: "bui-icon remove-img icon-close_small",
                        on: {
                            click: function (i) {
                                return t.removeImg(e, n)
                            }
                        }
                    })])
                }), t._v(" "), t._l(t.options.loadingList, function (t) {
                    return i("li", {
                        staticClass: "upload-img-item upload-img-loading"
                    }, [i("img", {
                        attrs: {
                            src: "http://s3b.pstatp.com/toutiao/resource/toutiao_web/static/style/image/loading_50c5e3e.gif",
                            alt: "上传中"
                        }
                    })])
                }), t._v(" "), t.options.imgList.length < 3 ? i("li", {
                    staticClass: "upload-img-item upload-img-add",
                    attrs: {
                        ga_event: "user_wenda_upload"
                    },
                    on: {
                        click: t.uploadActionClick
                    }
                }, [i("tt-icon", {
                    attrs: {
                        type: "add_small",
                        size: "30",
                        color: "#ddd"
                    }
                })], 1) : t._e()], 2)])])])])
            },
            staticRenderFns: []
        }
    }
    , function (t, e) {
        t.exports = {
            render: function () {
                var t = this
                    , e = t.$createElement
                    , i = t._self._c || e;
                return i("div", {
                    staticClass: "editor-out"
                }, [i("div", {
                    staticClass: "editer-verify",
                    attrs: {
                        id: "pc_text"
                    }
                }), t._v(" "), i("div", {
                    staticClass: "editer-verify",
                    attrs: {
                        id: "pc_slide"
                    }
                }), t._v(" "), i("div", {
                    ref: "editorWrapper",
                    staticClass: "editor"
                }, [t.showEditor ? i("div", {
                    staticClass: "editor-wrapper"
                }, [i("div", {
                    staticClass: "editor-title"
                }, [i("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.title,
                        expression: "title"
                    }],
                    staticClass: "title-input",
                    attrs: {
                        placeholder: "请输入文章标题（5-30个汉字）",
                        autocomplete: "off",
                        type: "text"
                    },
                    domProps: {
                        value: t.title
                    },
                    on: {
                        input: function (e) {
                            e.target.composing || (t.title = e.target.value)
                        }
                    }
                })]), t._v(" "), i("div", {
                    staticClass: "syl-wrapper"
                }, [i("SylEditor", {
                    attrs: {
                        onChange: t.updateEditorValue,
                        getAdapter: t.getAdapter,
                        config: t.$data.editorConfig,
                        value: t.$data.value
                    }
                })], 1)]) : t._e()]), t._v(" "), i("div", {
                    staticClass: "editor-footer"
                }, [i("div", {
                    staticClass: "bui-left"
                }, [i("div", {
                    staticClass: "rest-words"
                }, [t._v("字数"), i("span", [t._v(t._s(t.textLength))])])]), t._v(" "), i("div", {
                    staticClass: "bui-right"
                }, [i("span", {
                    staticClass: "msg-tip"
                }, [t._v(t._s(t.msgTip))]), t._v(" "), i("a", {
                    staticClass: "upload-publish",
                    class: {
                        active: t.textLength > 0 && t.title.length > 0
                    },
                    on: {
                        click: t.publish
                    }
                }, [t._v("发布")])])])])
            },
            staticRenderFns: []
        }
    }
    , function (t, e) {
        t.exports = {
            render: function () {
                var t = this
                    , e = t.$createElement
                    , i = t._self._c || e;
                return i("div", {
                    staticClass: "videoBox upload-box"
                }, [i("textarea", {
                    directives: [{
                        name: "model",
                        rawName: "v-model.trim",
                        value: t.inputContent,
                        expression: "inputContent",
                        modifiers: {
                            trim: !0
                        }
                    }],
                    ref: "title",
                    staticClass: "title-input",
                    class: {
                        warning: t.inputInvalid
                    },
                    attrs: {
                        placeholder: "视频标题（30 字以内）"
                    },
                    domProps: {
                        value: t.inputContent
                    },
                    on: {
                        keyup: function (e) {
                            return t.inputKeyup(e.target.value)
                        },
                        input: function (e) {
                            e.target.composing || (t.inputContent = e.target.value.trim())
                        },
                        blur: function (e) {
                            return t.$forceUpdate()
                        }
                    }
                }), t._v(" "), i("p", {
                    staticClass: "words-number"
                }, [t._v(t._s(t.inputLength) + "/30字")]), t._v(" "), i("div", {
                    staticClass: "bui-box upload-footer"
                }, [i("div", {
                    staticClass: "bui-left"
                }, [i("span", {
                    staticClass: "show-video-uploader show-uploader",
                    attrs: {
                        ga_event: "user_ugc_video_open"
                    },
                    on: {
                        click: t.togglePopup
                    }
                }, [i("tt-icon", {
                    attrs: {
                        type: "video_tool",
                        size: "20",
                        color: "#2a90d7"
                    }
                }), t._v(" "), i("span", [t._v("添加视频")])], 1)]), t._v(" "), i("div", {
                    staticClass: "bui-right"
                }, [i("span", {
                    staticClass: "msg-tip"
                }, [t._v(t._s(t.msgTip))]), t._v(" "), i("a", {
                    staticClass: "upload-publish",
                    class: {
                        active: t.uploadReady
                    },
                    on: {
                        click: t.publishVideo
                    }
                }, [t._v("发布")])])]), t._v(" "), i("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.isShowPopup,
                        expression: "isShowPopup"
                    }],
                    staticClass: "uploader-popup"
                }, [i("div", {
                    staticClass: "videoUploadBox"
                }, [i("p", {
                    staticClass: "uploader-title"
                }, [t._v("上传视频")]), t._v(" "), i("p", {
                    staticClass: "uploader-meta"
                }, [t._v("发布后，视频将出现在首页和个人页")]), t._v(" "), i("i", {
                    staticClass: "bui-icon close-popup icon-close_small",
                    on: {
                        click: function (e) {
                            return t.clearPopup(!0)
                        }
                    }
                }), t._v(" "), i("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.options.isInitShow,
                        expression: "options.isInitShow"
                    }],
                    staticClass: "bui-box upload-box"
                }, [i("form", {
                    ref: "fileElemHolder",
                    staticStyle: {
                        display: "none"
                    }
                }, [i("input", {
                    ref: "fileElem",
                    attrs: {
                        id: "fileElem",
                        type: "file",
                        accept: "video/mp4,video/x-m4v,video/*"
                    },
                    on: {
                        change: t.handleFile
                    }
                })]), t._v(" "), i("div", {
                    staticClass: "bui-left upload-cover upload-cover-add",
                    attrs: {
                        ga_event: "user_ugc_video_upload"
                    },
                    on: {
                        click: t.uploadActionClick
                    }
                }), t._v(" "), t._m(0)]), t._v(" "), t.options.isInitShow ? t._e() : i("div", {
                    staticClass: "bui-box upload-box"
                }, [i("div", {
                    staticClass: "bui-left upload-cover upload-cover-loading"
                }, [t.options.poster ? i("img", {
                    attrs: {
                        src: t.options.poster
                    }
                }) : t._e()]), t._v(" "), i("div", {
                    staticClass: "bui-right upload-info"
                }, [i("h3", [t._v(t._s(t.options.title))]), t._v(" "), i("div", {
                    staticStyle: {
                        "font-size": "0px"
                    }
                }, [t.options.isTranscoding ? i("span", {
                    staticClass: "upload-status"
                }, [t._v("转码中...")]) : t._e(), t._v(" "), t.options.isTranscoding ? t._e() : i("span", {
                    staticClass: "upload-status"
                }, [t._v(t._s(t.options.statusMsg))]), t._v(" "), t.options.isTranscoding ? t._e() : i("span", {
                    staticClass: "upload-ctr",
                    on: {
                        click: t.onCtrClick
                    }
                }, [t._v(t._s(t.options.ctrMsg))])]), t._v(" "), i("div", {
                    staticClass: "progress"
                }, [i("div", {
                    staticClass: "progress-rate",
                    style: {
                        width: t.options.progress + "%"
                    }
                })])])])])])])
            },
            staticRenderFns: [function () {
                var t = this
                    , e = t.$createElement
                    , i = t._self._c || e;
                return i("div", {
                    staticClass: "bui-right upload-warning"
                }, [i("span", [t._v("支持绝大多数的视频格式，大小不超过250M，请勿上传反动色情等违法视频。")])])
            }
            ]
        }
    }
    , , function (t, e) {
        t.exports = {
            render: function () {
                var t = this
                    , e = t.$createElement
                    , i = t._self._c || e;
                return i("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.visible,
                        expression: "visible"
                    }],
                    staticClass: "mask-wrapper"
                }, [i("div", {
                    staticClass: "verify-container"
                }, [i("div", {
                    staticClass: "verify-header"
                }, [t._v("身份校验")]), t._v(" "), i("div", {
                    staticClass: "verify-content"
                }, [i("div", {
                    staticClass: "verify-desc"
                }, [t._v("\n        检测到您的账号存在盗号风险，为确保您的账号安全和账户收益，请校验绑定手机号\n      ")]), t._v(" "), i("div", {
                    staticClass: "verify-item-phone"
                }, [i("span", {
                    staticClass: "verify-item-label"
                }, [t._v("绑定手机号")]), t._v(" "), i("span", {
                    staticClass: "verify-item-phone-value"
                }, [t._v(t._s(t.mobile))])]), t._v(" "), i("div", {
                    staticClass: "verify-item-code"
                }, [i("span", {
                    staticClass: "verify-item-label"
                }, [t._v("手机验证码")]), t._v(" "), i("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.code,
                        expression: "code"
                    }],
                    staticClass: "verify-item-code-value",
                    attrs: {
                        disabled: t.isfetching,
                        placeholder: "输入手机验证码"
                    },
                    domProps: {
                        value: t.code
                    },
                    on: {
                        input: function (e) {
                            e.target.composing || (t.code = e.target.value)
                        }
                    }
                }), t._v(" "), i("button", {
                    staticClass: "verify-item-code-btn",
                    attrs: {
                        disabled: !!t.timeId
                    },
                    on: {
                        click: t.handleGetCode
                    }
                }, [t._v(t._s(t.timeId ? t.count + "s" : "获取验证码"))])])]), t._v(" "), i("div", {
                    staticClass: "verify-error"
                }, [t._v(t._s(t.formatmsg || t.verifymsg))]), t._v(" "), i("div", {
                    staticClass: "verify-footer"
                }, [i("button", {
                    staticClass: "cancel",
                    on: {
                        click: t.handleClose
                    }
                }, [t._v("暂不校验")]), t._v(" "), i("button", {
                    staticClass: "ok",
                    attrs: {
                        disabled: t.formatmsg || t.isfetching
                    },
                    on: {
                        click: t.handleVerify
                    }
                }, [t._v("立即校验")])]), t._v(" "), i("div", {
                    staticClass: "close",
                    on: {
                        click: t.handleClose
                    }
                })])])
            },
            staticRenderFns: []
        }
    }
    , function (t, e) {
        t.exports = {
            render: function () {
                var t = this
                    , e = t.$createElement
                    , i = t._self._c || e;
                return i("div", {
                    staticClass: "login inner"
                }, [i("p", {
                    staticClass: "login-msg"
                }, [t._v("\n    登录后可以保存您的浏览喜好、评论、收藏，并与APP同步，更可以发布微头条\n  ")]), t._v(" "), t._m(0), t._v(" "), i("ul", {
                    staticClass: "third-login",
                    on: {
                        click: t.snsLogin
                    }
                }, [t._m(1), t._v(" "), t._m(2)])])
            },
            staticRenderFns: [function () {
                var t = this
                    , e = t.$createElement
                    , i = t._self._c || e;
                return i("a", {
                    attrs: {
                        href: "https://sso.toutiao.com"
                    }
                }, [i("button", {
                    staticClass: "login-button"
                }, [t._v("登录")])])
            }
                , function () {
                    var t = this
                        , e = t.$createElement
                        , i = t._self._c || e;
                    return i("li", {
                        staticClass: "sns qq",
                        attrs: {
                            "data-pid": "qzone_sns"
                        }
                    }, [i("span", [t._v("QQ")])])
                }
                , function () {
                    var t = this
                        , e = t.$createElement
                        , i = t._self._c || e;
                    return i("li", {
                        staticClass: "sns weixin",
                        attrs: {
                            "data-pid": "weixin"
                        }
                    }, [i("span", [t._v("微信")])])
                }
            ]
        }
    }
    , function (t, e) {
        t.exports = {
            render: function () {
                var t = this
                    , e = t.$createElement
                    , i = t._self._c || e;
                return i("div", {
                    staticClass: "pgc-img"
                }, [i("img", {
                    attrs: {
                        src: t.attrs.src,
                        alt: t.attrs.alt,
                        origin_web_uri: t.$props.attrs.origin_web_uri,
                        "data-height": t.$props.attrs["data-height"],
                        "data-width": t.$props.attrs["data-width"],
                        image_type: t.$props.attrs.image_type,
                        mime_type: t.$props.attrs.mime_type,
                        web_uri: t.$props.attrs.web_uri,
                        img_width: t.$props.attrs.img_width,
                        img_height: t.$props.attrs.img_height
                    }
                }), t._v(" "), t.attrs.alt.length > 0 ? i("p", {
                    staticClass: "pgc-img-caption"
                }, [t._v(t._s(t.attrs.alt))]) : t._e()])
            },
            staticRenderFns: []
        }
    }
    , , , function (t, e) {
        t.exports = {
            render: function () {
                var t = this
                    , e = t.$createElement
                    , i = t._self._c || e;
                return i("div", {
                    staticClass: "outer"
                }, [t.loginInfo.id ? i("Logged", {
                    attrs: {
                        loginInfo: t.loginInfo
                    }
                }) : i("Login")], 1)
            },
            staticRenderFns: []
        }
    }
    , function (t, e) {
        t.exports = {
            render: function () {
                var t = this
                    , e = t.$createElement
                    , i = t._self._c || e;
                return i("div", [i("tt-header", {
                    attrs: {
                        options: t.headerInfo,
                        showUser: !1
                    }
                }), t._v(" "), i("div", {
                    staticClass: "bui-box container"
                }, [i("div", {
                    staticClass: "bui-left index-channel",
                    attrs: {
                        ga_event: "channel_click"
                    }
                }, [i("channel", {
                    attrs: {
                        tag: t.tag,
                        local: t.province
                    }
                })], 1), t._v(" "), i("div", {
                    staticClass: "bui-left index-content"
                }, [i("publisher"), t._v(" "), i("feed-box", {
                    attrs: {
                        category: t.category,
                        url: t.url,
                        qhAdSupport: t.qhAdSupport,
                        containerCheckCount: 3
                    }
                })], 1), t._v(" "), i("div", {
                    staticClass: "bui-right index-right-bar",
                    attrs: {
                        id: "rightModule"
                    }
                }, [i("div", {
                    staticClass: "search-wrapper",
                    attrs: {
                        ga_event: "index_search_click"
                    }
                }, [i("search-box")], 1), t._v(" "), i("div", [i("is-login", {
                    attrs: {
                        loginInfo: t.loginInfo
                    }
                })], 1), t._v(" "), i("div", {
                    staticClass: "right-top-1 right-iframe-img right-img",
                    attrs: {
                        name: "home_right*top_1_zy"
                    }
                }), t._v(" "), i("div", {
                    staticClass: "news-struct bui-box"
                }, [i("div", {
                    staticClass: "bui-box",
                    class: {
                        "module-fixed": t.newsHover
                    },
                    attrs: {
                        id: "hotNewsWrap"
                    }
                }, [i("hot-news", {
                    attrs: {
                        count: 4,
                        title: "24小时热闻"
                    }
                }), t._v(" "), i("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.isShowNewsImg,
                        expression: "isShowNewsImg"
                    }],
                    staticClass: "imagindexhover right-img",
                    attrs: {
                        id: "imagindexhover",
                        name: "home_right*bottom_1_zy"
                    }
                })], 1)]), t._v(" "), i("div", {
                    staticClass: "right-iframe-img right-img",
                    attrs: {
                        name: "home_right*top_2_zy"
                    }
                }), t._v(" "), i("hot-videos", {
                    attrs: {
                        count: 7
                    }
                }), t._v(" "), i("div", {
                    staticClass: "right-iframe-img right-img",
                    attrs: {
                        name: "home_right*top_3_zy"
                    }
                }), t._v(" "), i("more-links", {
                    attrs: {
                        title: "更多"
                    }
                }), t._v(" "), i("friend-links", {
                    attrs: {
                        title: "友情链接"
                    }
                }), t._v(" "), i("company")], 1)]), t._v(" "), i("toolbar", {
                    attrs: {
                        "show-refresh": !0,
                        "show-report": !0,
                        "refresh-method": t.refreshFeed
                    }
                })], 1)
            },
            staticRenderFns: []
        }
    }
    , function (t, e) {
        t.exports = {
            render: function () {
                var t = this
                    , e = t.$createElement
                    , i = t._self._c || e;
                return i("ul", {
                    staticClass: "tweetLinkSelector",
                    style: t.selectorStyle
                }, [i("li", [t._v(t._s(1 === t.type ? "选择昵称完成输入" : "想用什么话题"))]), t._v(" "), t._l(t.suggests, function (e) {
                    return i("li", {
                        key: e.id,
                        staticClass: "suggestItem",
                        attrs: {
                            "data-value": e.id
                        },
                        on: {
                            click: t.select
                        }
                    }, [t._v(t._s(e.word))])
                })], 2)
            },
            staticRenderFns: []
        }
    }
    , function (t, e) {
        t.exports = {
            render: function () {
                var t = this
                    , e = t.$createElement
                    , i = t._self._c || e;
                return t.item.video_id ? i("div", {
                    staticClass: "bui-box video-mode"
                }, [i("div", {
                    staticClass: "bui-left video-mode-lbox"
                }, [i("player", {
                    attrs: {
                        "video-id": t.item.video_id,
                        width: 325,
                        height: 183,
                        "poster-url": t.posterUrl,
                        "theatre-btn-visible": !1,
                        "mini-btn-visible": !0,
                        "destroy-count": t.destroyCount,
                        duration: t.item.video_duration_str,
                        mute: t.mute
                    },
                    on: {
                        "zoom-change": t.zoomChange,
                        "close-mini": t.zoomRecover,
                        "video-end": t.videoEndHandler,
                        "volume-change": t.volumeChangeHandler,
                        "full-size": t.fullSizeHandler,
                        "video-play": t.playHandler
                    }
                })], 1), t._v(" "), i("div", {
                    staticClass: "video-mode-rbox"
                }, [i("div", {
                    staticClass: "title-box",
                    attrs: {
                        ga_event: "video_title_click"
                    }
                }, [i("a", {
                    staticClass: "link",
                    attrs: {
                        href: t.item.source_url,
                        target: "_blank"
                    },
                    on: {
                        click: t.openDetail
                    }
                }, [t._v(t._s(t.item.title))])]), t._v(" "), i("div", {
                    staticClass: "bui-box footer-bar"
                }, [t.item.media_url ? [i("a", {
                    staticClass: "footer-bar-action media-avatar",
                    attrs: {
                        href: t.item.media_url,
                        target: "_blank",
                        ga_event: "video_avatar_click"
                    }
                }, [i("img", {
                    directives: [{
                        name: "lazy",
                        rawName: "v-lazy",
                        value: t.item.media_avatar_url,
                        expression: "item.media_avatar_url"
                    }]
                })]), t._v(" "), i("a", {
                    staticClass: "footer-bar-action source",
                    attrs: {
                        href: t.item.media_url,
                        target: "_blank",
                        ga_event: "video_name_click"
                    }
                }, [t._v(t._s(t.item.source))]), t._v(" "), i("span", {
                    staticClass: "footer-bar-action"
                }, [t._v("⋅")]), t._v(" "), i("a", {
                    staticClass: "footer-bar-action source",
                    attrs: {
                        href: t.item.source_url,
                        target: "_blank",
                        ga_event: "video_frequency_click"
                    },
                    on: {
                        click: t.openDetail
                    }
                }, [t._v(t._s(t._f("formatCount")(t.item.video_play_count)) + "次播放")])] : [i("a", {
                    staticClass: "footer-bar-action media-avatar",
                    class: t.item.avatar_style,
                    attrs: {
                        href: "/search/?keyword=" + t.item.source,
                        ga_event: "video_avatar_click"
                    }
                }, [t._v(t._s(t.item.source_tag))]), t._v(" "), i("a", {
                    staticClass: "footer-bar-action source",
                    attrs: {
                        href: "/search/?keyword=" + t.item.source,
                        target: "_blank",
                        ga_event: "video_name_click"
                    }
                }, [t._v(t._s(t.item.source))])]], 2), t._v(" "), i("dislike", {
                    attrs: {
                        group_id: t.item.group_id
                    }
                })], 1)]) : t._e()
            },
            staticRenderFns: []
        }
    }
    , function (t, e) {
        t.exports = {
            render: function () {
                var t = this
                    , e = t.$createElement
                    , i = t._self._c || e;
                return t.listCount.length ? i("pane", {
                    staticClass: "hot-words-pane",
                    attrs: {
                        title: t.title
                    }
                }, [i("template", {
                    slot: "content"
                }, [i("div", {
                    staticClass: "hot-words-title"
                }, [i("img", {
                    attrs: {
                        src: t.iconTitle,
                        alt: ""
                    }
                }), t._v(" "), i("div", {
                    staticClass: "more-hot-words"
                }, [i("a", {
                    attrs: {
                        target: "_blank",
                        href: "https://www.toutiao.com/2/wap/search/extra/hot_word_list/?from=toutiao_pc&is_new_ui=1"
                    }
                }, [t._v("更多"), i("img", {
                    staticClass: "icon_more",
                    attrs: {
                        src: t.iconMore,
                        alt: ""
                    }
                })])])]), t._v(" "), i("ul", {
                    staticClass: "module-content hot-search"
                }, t._l(t.listCount, function (e, n) {
                    return i("li", {
                        key: n
                    }, [i("a", {
                        attrs: {
                            href: e.link,
                            target: "_blank"
                        }
                    }, [i("i", {
                        staticClass: "search-no",
                        class: "search-no-" + (n + 1)
                    }, [t._v(t._s(n + 1))]), t._v(" "), i("span", {
                        staticClass: "search-text"
                    }, [t._v(t._s(e.q))])]), t._v(" "), i("div", {
                        staticClass: "suffix"
                    }, [e.t > 0 ? i("img", {
                        attrs: {
                            src: t.iconSuffix[e.t],
                            alt: ""
                        }
                    }) : t._e()])])
                }), 0)])], 2) : t._e()
            },
            staticRenderFns: []
        }
    }
    , function (t, e) {
        t.exports = {
            render: function () {
                var t = this
                    , e = t.$createElement
                    , i = t._self._c || e;
                return i("div", {
                    staticClass: "logged inner"
                }, [i("div", {
                    staticClass: "top"
                }, [t._m(0), t._v(" "), i("div", [i("a", {
                    attrs: {
                        href: "/c/user/" + t.loginInfo.id + "/",
                        target: "_blank"
                    }
                }, [i("img", {
                    staticClass: "head",
                    attrs: {
                        src: t.loginInfo.avatarUrl
                    }
                })]), t._v(" "), i("p", {
                    staticClass: "name"
                }, [i("a", {
                    attrs: {
                        href: "/c/user/" + t.loginInfo.id + "/",
                        target: "_blank"
                    }
                }, [i("span", [t._v(t._s(t.loginInfo.userName))])])])])]), t._v(" "), i("ul", {
                    staticClass: "bottom"
                }, [i("li", [i("a", {
                    attrs: {
                        href: "/c/user/" + t.loginInfo.id + "/?tab=following",
                        target: "_blank"
                    }
                }, [i("p", {
                    staticClass: "num"
                }, [t._v(t._s(t.following))]), i("br"), t._v(" "), i("p", {
                    staticClass: "word"
                }, [t._v("关注")])])]), t._v(" "), i("li", {
                    staticClass: "line"
                }), t._v(" "), i("li", [i("a", {
                    attrs: {
                        href: "/c/user/relation/" + t.loginInfo.id + "/?tab=followed",
                        target: "_blank"
                    }
                }, [i("p", {
                    staticClass: "num"
                }, [t._v(t._s(t.fans))]), i("br"), t._v(" "), i("p", {
                    staticClass: "word"
                }, [t._v("粉丝")])])])])])
            },
            staticRenderFns: [function () {
                var t = this
                    , e = t.$createElement
                    , i = t._self._c || e;
                return i("p", {
                    staticClass: "logout"
                }, [i("a", {
                    attrs: {
                        href: "https://sso.toutiao.com/logout/"
                    }
                }, [i("span", [t._v("退出登录")])])])
            }
            ]
        }
    }
    , function (t, e) {
        t.exports = {
            render: function () {
                var t = this
                    , e = t.$createElement
                    , i = t._self._c || e;
                return i("div", {
                    staticClass: "pgc-image pgc-card-fixWidth"
                }, [t.isImageLoaded ? i("div", {
                    staticClass: "pgc-img-wrapper ttcore-relative"
                }, [t.attrs.height ? i("img", {
                    attrs: {
                        src: t.attrs.src,
                        alt: t.attrs.alt,
                        origin_web_uri: t.attrs.origin_web_uri,
                        "data-height": t.attrs["data-height"],
                        "data-width": t.attrs["data-width"],
                        image_type: t.attrs.image_type,
                        mime_type: t.attrs.mime_type,
                        web_uri: t.attrs.web_uri,
                        img_width: t.attrs.img_width,
                        img_height: t.attrs.img_height,
                        width: t.attrs.width,
                        height: t.attrs.height
                    }
                }) : t._e(), t._v(" "), i("div", {
                    staticClass: "pgc-img-caption-wrapper"
                }, [i("input", {
                    staticClass: "pgc-img-caption-ipt",
                    attrs: {
                        type: "text",
                        placeholder: "图片描述(最多50字)"
                    },
                    domProps: {
                        value: t.attrs.alt
                    },
                    on: {
                        change: t.updateCaptionValue
                    }
                }), t._v(" "), i("p", {
                    staticClass: "pgc-img-caption"
                })])]) : i("div", {
                    staticClass: "sylimage-fixer"
                }, [i("img", {
                    ref: "image",
                    attrs: {
                        src: t.attrs.src,
                        alt: t.attrs.alt,
                        height: t.attrs.height,
                        width: t.attrs.width
                    },
                    on: {
                        load: t.setRatio
                    }
                })])])
            },
            staticRenderFns: []
        }
    }
    , , , , , function (t, e) {
    }
]);
