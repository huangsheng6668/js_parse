webpackJsonp([15], {
    "+BTi": function(e, t) {},
    "/jc2": function(e, t) {},
    "4WyJ": function(e, t, i) {
        e.exports = i.p + "static/img/rl_top.35edfde.png"
    },
    "5LJk": function(e, t, i) {
        "use strict";
        var s = {
            render: function() {
                var e = this
                    , t = e.$createElement
                    , s = e._self._c || t;
                return e.show ? s("div", {
                    staticClass: "mask"
                }, [s("div", {
                    class: {
                        pop: !0,
                        night: e.night,
                        loading: e.loading,
                        "dialog-color": !0
                    }
                }, [s("div", {
                    staticClass: "img-captcha-container"
                }, [s("div", {
                    staticClass: "pop-header"
                }, [s("p", {
                    staticClass: "tips"
                }, [e._v(e._s(e.submitFlag ? "验证中..." : "请完成验证"))]), e._v(" "), s("i", {
                    staticClass: "btn-close",
                    on: {
                        click: e.closeBrowser
                    }
                })]), e._v(" "), s("div", {
                    staticClass: "img-captcha border-color"
                }, [s("img", {
                    directives: [{
                        name: "lazy",
                        rawName: "v-lazy",
                        value: {
                            src: e.src,
                            error: i("dTWR"),
                            loading: i("vn/I")
                        },
                        expression: "{\n          src: src,\n          error: require('../assets/img/quickregister/ic_loadingfail@2x.png'),\n          loading: require('../assets/img/quickregister/ic_loading@2x.png')\n        }"
                    }],
                    on: {
                        click: e.reloadCaptcha
                    }
                })]), e._v(" "), s("div", {
                    staticClass: "refresh-btn primary-text-color"
                }, [s("span", {
                    on: {
                        click: e.reloadCaptcha
                    }
                }, [e._v("换一张")])]), e._v(" "), s("div", [s("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.captcha,
                        expression: "captcha"
                    }],
                    staticClass: "text-captcha",
                    attrs: {
                        type: "text",
                        placeholder: "请输入图片中的内容",
                        maxlength: "10"
                    },
                    domProps: {
                        value: e.captcha
                    },
                    on: {
                        input: [function(t) {
                            t.target.composing || (e.captcha = t.target.value)
                        }
                            , e.clearError]
                    }
                })]), e._v(" "), s("p", {
                    staticClass: "err-message error-text"
                }, [e._v(e._s(e.errorMessage))]), e._v(" "), s("div", {
                    staticClass: "btn-box Verify-btn-box clearfix"
                }, [s("div", {
                    on: {
                        click: e.closeBrowser
                    }
                }, [e._v("取消")]), e._v(" "), s("div", {
                    staticClass: "active",
                    on: {
                        click: e.submitLogin
                    }
                }, [e._v("确定")])])])])]) : e._e()
            },
            staticRenderFns: []
        };
        var n = i("VU/8")({
            name: "Verify",
            data: function() {
                return {
                    gch5: !1,
                    captcha: "",
                    night: "",
                    errorMessage: "",
                    loading: !1,
                    submitFlag: !1
                }
            },
            props: ["show", "src"],
            watch: {
                show: function(e) {
                    !1 === e && (this.captchaErr(),
                        this.captcha = "")
                }
            },
            directives: {},
            methods: {
                reloadCaptcha: function() {
                    this.$emit("refresh-event")
                },
                submitLogin: function() {
                    this.submitFlag || (this.submitFlag = !0,
                        this.$emit("res-verify", this.captcha))
                },
                closeBrowser: function() {
                    this.$emit("close-verify")
                },
                clearError: function() {
                    this.submitFlag = !1,
                        this.errorMessage = ""
                },
                captchaErr: function(e) {
                    this.submitFlag = !1;
                    var t = e || "";
                    this.captcha = "",
                        this.errorMessage = t,
                        this.reloadCaptcha()
                }
            }
        }, s, !1, function(e) {
            i("IPDc")
        }, "data-v-1a52a1cd", null);
        t.a = n.exports
    },
    "8TL4": function(e, t) {},
    "8Yml": function(e, t) {},
    AtVO: function(e, t) {},
    BHNi: function(e, t) {},
    BRnU: function(e, t) {},
    DDo8: function(e, t) {},
    DMAq: function(e, t) {},
    EC14: function(e, t, i) {
        "use strict";
        var s = {
            render: function() {
                var e = this
                    , t = e.$createElement
                    , i = e._self._c || t;
                return i("div", {
                    staticClass: "popup-mask"
                }, [i("div", {
                    staticClass: "popup-box"
                }, [i("div", {
                    staticClass: "popup-titleBar"
                }, [i("div", {
                    staticClass: "popup-title"
                }, [i("i", {
                    staticClass: "topIcon"
                }), e._v(e._s(e.title) + "\n      ")]), e._v(" "), i("a", {
                    staticClass: "popup-close",
                    attrs: {
                        href: "javascript:;"
                    },
                    on: {
                        click: e.deleteFn
                    }
                })]), e._v(" "), i("div", {
                    staticClass: "popup-main"
                }, [i("div", {
                    staticClass: "popup-content"
                }, [i("img", {
                    staticClass: "popup-captchaImg",
                    attrs: {
                        src: e.src ? e.src : e.captchaSrc
                    },
                    on: {
                        click: e.refreshCaptcha
                    }
                }), e._v(" "), i("p", {
                    staticClass: "popup-change"
                }, [i("a", {
                    attrs: {
                        href: "javascript:;",
                        id: "changeCaptcha"
                    },
                    on: {
                        click: e.refreshCaptcha
                    }
                }, [e._v("换一张")])]), e._v(" "), i("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.cacheImage,
                        expression: "cacheImage"
                    }],
                    class: {
                        "popup-text": !0,
                        "popup-error": e.popupError
                    },
                    attrs: {
                        placeholder: "请输入图片中的内容",
                        type: "text"
                    },
                    domProps: {
                        value: e.cacheImage
                    },
                    on: {
                        focus: e.clearErr,
                        input: function(t) {
                            t.target.composing || (e.cacheImage = t.target.value)
                        }
                    }
                })]), e._v(" "), i("div", {
                    staticClass: "popup-buttons"
                }, [i("input", {
                    staticClass: "popup-btn popup-btn-primary",
                    attrs: {
                        type: "button",
                        value: e.yesBtn
                    },
                    on: {
                        click: e.checkSmsCaptcha
                    }
                }), e._v(" "), i("input", {
                    staticClass: "popup-btn",
                    attrs: {
                        type: "button",
                        value: e.cancelBtn
                    },
                    on: {
                        click: e.deleteFn
                    }
                })])])])])
            },
            staticRenderFns: []
        };
        var n = i("VU/8")({
            data: function() {
                return {
                    captchaSrc: "/captcha",
                    popupError: !1,
                    cacheImage: "",
                    sonShow: this.show
                }
            },
            props: ["show", "title", "yesBtn", "cancelBtn", "src"],
            watch: {
                show: function(e) {
                    this.sonShow = e
                }
            },
            methods: {
                refreshCaptcha: function() {
                    this.$emit("refresh-event")
                },
                checkSmsCaptcha: function() {
                    this.popupError = !1,
                        this.$emit("dataFlag", {
                            _status: !0,
                            yzm: this.cacheImage,
                            check: !0,
                            event: "yes"
                        })
                },
                clearErr: function() {
                    this.popupError = !1
                },
                deleteFn: function() {
                    this.$emit("dataFlag", {
                        _status: !0,
                        check: !1,
                        event: "hide"
                    })
                }
            },
            created: function() {
                this.refreshCaptcha()
            }
        }, s, !1, function(e) {
            i("VpqJ")
        }, null, null);
        t.a = n.exports
    },
    EXyj: function(e, t, i) {
        "use strict";
        var s = {
            render: function() {
                var e = this.$createElement
                    , t = this._self._c || e;
                return t("div", {
                    staticClass: "title-line"
                }, [t("span", {
                    staticClass: "tit",
                    style: {
                        fontSize: this.title.length >= 10 ? "28px" : "38px"
                    }
                }, [this._v(this._s(this.title))])])
            },
            staticRenderFns: []
        };
        var n = i("VU/8")({
            props: ["title"]
        }, s, !1, function(e) {
            i("T9AS")
        }, null, null);
        t.a = n.exports
    },
    GXEp: function(e, t) {},
    HwDN: function(e, t) {},
    "Hzw/": function(e, t, i) {
        "use strict";
        var s = {
            render: function() {
                this.$createElement;
                this._self._c;
                return this._m(0)
            },
            staticRenderFns: [function() {
                var e = this.$createElement
                    , t = this._self._c || e;
                return t("div", {
                    staticClass: "top-banner"
                }, [t("img", {
                    attrs: {
                        src: i("4WyJ")
                    }
                })])
            }
            ]
        };
        var n = i("VU/8")(null, s, !1, function(e) {
            i("cZLh")
        }, null, null);
        t.a = n.exports
    },
    I4nB: function(e, t) {},
    IPDc: function(e, t) {},
    Ouqr: function(e, t, i) {
        "use strict";
        var s = {
            props: ["keyValue", "width", "top", "left"],
            data: function() {
                return {
                    emails: [],
                    currentSelectIndex: 0,
                    emailSource: ["qq.com", "163.com", "126.com", "gmail.com", "foxmail.com", "sina.com", "yeah.net", "sohu.com", "outlook.com", "aliyun.com", "yahoo.com"]
                }
            },
            watch: {
                keyValue: function() {
                    for (var e = 0; e < this.emails.length; e++)
                        if (this.emails[e] === this.keyValue)
                            return void (this.emails = []);
                    this.keyValue.search("@") <= 0 && (this.emails = []);
                    var t = []
                        , i = [];
                    if (this.keyValue.search("@") > 0 && 2 === this.keyValue.split("@").length) {
                        for (var s = 0; s < this.emailSource.length; s++)
                            t[s] = this.keyValue.split("@")[0] + "@" + this.emailSource[s];
                        for (var n = 0; n < t.length; n++)
                            -1 !== t[n].indexOf(this.keyValue) && i.push(t[n]);
                        this.emails = i
                    }
                }
            },
            methods: {
                resetAutoData: function() {
                    this.$emit("cb-value", {
                        value: this.emails[this.currentSelectIndex]
                    }),
                        this.currentSelectIndex = 0,
                    this.emails[this.currentSelectIndex] === this.keyValue && (this.emails = [])
                },
                selectEmail: function(e) {
                    this.currentSelectIndex = e,
                        this.resetAutoData()
                },
                bindEvent: function(e) {
                    var t = this.emails.length;
                    13 === e.keyCode && t && this.resetAutoData(),
                    38 === e.keyCode && t && (this.currentSelectIndex--,
                    this.currentSelectIndex < 0 && (this.currentSelectIndex = t - 1),
                        this.username = this.emails[this.currentSelectIndex]),
                    40 === e.keyCode && t && (this.currentSelectIndex++,
                    this.currentSelectIndex > t - 1 && (this.currentSelectIndex = 0),
                        this.username = this.emails[this.currentSelectIndex])
                }
            },
            mounted: function() {
                document.addEventListener("keydown", this.bindEvent)
            }
        }
            , n = {
            render: function() {
                var e = this
                    , t = e.$createElement
                    , i = e._self._c || t;
                return 0 != e.emails.length ? i("div", {
                    staticClass: "autocomplete",
                    style: {
                        width: e.width,
                        left: e.left,
                        top: e.top
                    }
                }, [i("ul", e._l(e.emails, function(t, s) {
                    return i("li", {
                        key: s,
                        class: s === e.currentSelectIndex ? "on" : "",
                        on: {
                            click: function(t) {
                                return e.selectEmail(s)
                            }
                        }
                    }, [e._v(e._s(t))])
                }), 0)]) : e._e()
            },
            staticRenderFns: []
        };
        var a = i("VU/8")(s, n, !1, function(e) {
            i("oIHz")
        }, "data-v-715fe70a", null);
        t.a = a.exports
    },
    P9vI: function(e, t, i) {
        "use strict";
        var s = {
            name: "SelectList",
            model: {
                prop: "checked",
                event: "input-emit"
            },
            data: function() {
                return {
                    value: "",
                    id: "select" + Math.random()
                }
            },
            watch: {
                checked: function(e) {
                    this.value = e
                }
            },
            methods: {
                changeFn: function() {
                    this.$emit("input-emit", this.value),
                        this.$emit("change", this.value)
                }
            },
            props: ["data", "name", "checked"],
            created: function() {
                this.value = this.checked
            }
        }
            , n = {
            render: function() {
                var e = this
                    , t = e.$createElement
                    , i = e._self._c || t;
                return i("div", {
                    staticClass: "select-box"
                }, [i("select", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.value,
                        expression: "value"
                    }],
                    staticClass: "select-color",
                    attrs: {
                        id: e.id,
                        name: e.name
                    },
                    on: {
                        change: [function(t) {
                            var i = Array.prototype.filter.call(t.target.options, function(e) {
                                return e.selected
                            }).map(function(e) {
                                return "_value"in e ? e._value : e.value
                            });
                            e.value = t.target.multiple ? i : i[0]
                        }
                            , e.changeFn]
                    }
                }, e._l(e.data, function(t) {
                    return i("option", {
                        key: t.id,
                        attrs: {
                            disabled: t.disabled
                        },
                        domProps: {
                            value: t.id
                        }
                    }, [e._v(e._s(t.cname))])
                }), 0), e._v(" "), i("label", {
                    staticClass: "select-arrow",
                    attrs: {
                        for: e.id
                    }
                })])
            },
            staticRenderFns: []
        };
        var a = i("VU/8")(s, n, !1, function(e) {
            i("vP2K")
        }, "data-v-9bd7ee1a", null);
        t.a = a.exports
    },
    "Q5U+": function(e, t) {},
    S1Q3: function(e, t) {},
    T9AS: function(e, t) {},
    VQ0Z: function(e, t, i) {
        "use strict";
        t.a = {
            common: [{
                id: 1,
                cname: "中国大陆",
                country_id: "86"
            }, {
                id: 5,
                cname: "中国香港特别行政区",
                country_id: "852"
            }, {
                id: 2,
                cname: "中国澳门特别行政区",
                country_id: "853"
            }, {
                id: 3,
                cname: "中国台湾",
                country_id: "886"
            }, {
                id: 4,
                cname: "美国",
                country_id: "1"
            }, {
                id: 6,
                cname: "比利时",
                country_id: "32"
            }, {
                id: 7,
                cname: "澳大利亚",
                country_id: "61"
            }, {
                id: 8,
                cname: "法国",
                country_id: "33"
            }, {
                id: 9,
                cname: "加拿大",
                country_id: "1"
            }, {
                id: 10,
                cname: "日本",
                country_id: "81"
            }, {
                id: 11,
                cname: "新加坡",
                country_id: "65"
            }, {
                id: 12,
                cname: "韩国",
                country_id: "82"
            }, {
                id: 13,
                cname: "马来西亚",
                country_id: "60"
            }, {
                id: 14,
                cname: "英国",
                country_id: "44"
            }, {
                id: 15,
                cname: "意大利",
                country_id: "39"
            }, {
                id: 16,
                cname: "德国",
                country_id: "49"
            }, {
                id: 18,
                cname: "俄罗斯",
                country_id: "7"
            }, {
                id: 19,
                cname: "新西兰",
                country_id: "64"
            }],
            others: [{
                id: 22,
                cname: "阿富汗",
                country_id: "93"
            }, {
                id: 20,
                cname: "阿尔巴尼亚",
                country_id: "355"
            }, {
                id: 21,
                cname: "阿尔及利亚",
                country_id: "213"
            }, {
                id: 31,
                cname: "安道尔",
                country_id: "376"
            }, {
                id: 32,
                cname: "安哥拉",
                country_id: "244"
            }, {
                id: 33,
                cname: "安提瓜岛和巴布达",
                country_id: "1268"
            }, {
                id: 23,
                cname: "阿根廷",
                country_id: "54"
            }, {
                id: 204,
                cname: "亚美尼亚",
                country_id: "374"
            }, {
                id: 183,
                cname: "阿森松岛",
                country_id: "247"
            }, {
                id: 34,
                cname: "奥地利",
                country_id: "43"
            }, {
                id: 26,
                cname: "阿塞拜疆",
                country_id: "994"
            }, {
                id: 37,
                cname: "巴哈马群岛",
                country_id: "1242"
            }, {
                id: 40,
                cname: "巴林",
                country_id: "973"
            }, {
                id: 131,
                cname: "孟加拉国",
                country_id: "880"
            }, {
                id: 35,
                cname: "巴巴多斯",
                country_id: "1246"
            }, {
                id: 43,
                cname: "白俄罗斯",
                country_id: "375"
            }, {
                id: 52,
                cname: "伯利兹",
                country_id: "501"
            }, {
                id: 46,
                cname: "贝宁",
                country_id: "229"
            }, {
                id: 44,
                cname: "百慕大群岛",
                country_id: "1441"
            }, {
                id: 54,
                cname: "不丹",
                country_id: "975"
            }, {
                id: 51,
                cname: "玻利维亚",
                country_id: "591"
            }, {
                id: 49,
                cname: "波黑",
                country_id: "387"
            }, {
                id: 53,
                cname: "博茨瓦纳",
                country_id: "267"
            }, {
                id: 42,
                cname: "巴西",
                country_id: "55"
            }, {
                id: 193,
                cname: "文莱",
                country_id: "673"
            }, {
                id: 45,
                cname: "保加利亚",
                country_id: "359"
            }, {
                id: 55,
                cname: "布基纳法索",
                country_id: "226"
            }, {
                id: 56,
                cname: "布隆迪",
                country_id: "257"
            }, {
                id: 96,
                cname: "柬埔寨",
                country_id: "855"
            }, {
                id: 100,
                cname: "喀麦隆",
                country_id: "237"
            }, {
                id: 72,
                cname: "佛得角",
                country_id: "238"
            }, {
                id: 102,
                cname: "开曼群岛",
                country_id: "1345"
            }, {
                id: 68,
                cname: "非洲中部",
                country_id: "236"
            }, {
                id: 214,
                cname: "乍得",
                country_id: "235"
            }, {
                id: 216,
                cname: "智利",
                country_id: "56"
            }, {
                id: 77,
                cname: "哥伦比亚",
                country_id: "57"
            }, {
                id: 103,
                cname: "科摩罗",
                country_id: "269"
            }, {
                id: 75,
                cname: "刚果",
                country_id: "242"
            }, {
                id: 76,
                cname: "刚果(金)",
                country_id: "243"
            }, {
                id: 107,
                cname: "库克岛",
                country_id: "682"
            }, {
                id: 78,
                cname: "哥斯达黎加",
                country_id: "506"
            }, {
                id: 105,
                cname: "克罗地亚",
                country_id: "385"
            }, {
                id: 81,
                cname: "古巴",
                country_id: "53"
            }, {
                id: 162,
                cname: "塞浦路斯",
                country_id: "357"
            }, {
                id: 97,
                cname: "捷克",
                country_id: "420"
            }, {
                id: 58,
                cname: "丹麦",
                country_id: "45"
            }, {
                id: 59,
                cname: "迪戈加西亚岛",
                country_id: "246"
            }, {
                id: 90,
                cname: "吉布提",
                country_id: "253"
            }, {
                id: 61,
                cname: "多米尼加",
                country_id: "1767"
            }, {
                id: 62,
                cname: "多米尼加代表",
                country_id: "1809"
            }, {
                id: 63,
                cname: "厄瓜多尔",
                country_id: "593"
            }, {
                id: 27,
                cname: "埃及",
                country_id: "20"
            }, {
                id: 157,
                cname: "萨尔瓦多",
                country_id: "503"
            }, {
                id: 57,
                cname: "赤道几内亚",
                country_id: "240"
            }, {
                id: 64,
                cname: "厄立特里亚",
                country_id: "291"
            }, {
                id: 30,
                cname: "爱沙尼亚",
                country_id: "372"
            }, {
                id: 28,
                cname: "埃塞俄比亚",
                country_id: "251"
            }, {
                id: 73,
                cname: "福克兰岛",
                country_id: "500"
            }, {
                id: 65,
                cname: "法罗岛",
                country_id: "298"
            }, {
                id: 70,
                cname: "斐济",
                country_id: "679"
            }, {
                id: 71,
                cname: "芬兰",
                country_id: "358"
            }, {
                id: 67,
                cname: "法属圭亚那",
                country_id: "594"
            }, {
                id: 66,
                cname: "法属波利尼西亚",
                country_id: "689"
            }, {
                id: 95,
                cname: "加蓬",
                country_id: "241"
            }, {
                id: 74,
                cname: "冈比亚",
                country_id: "220"
            }, {
                id: 154,
                cname: "格鲁吉亚",
                country_id: "995"
            }, {
                id: 94,
                cname: "加纳",
                country_id: "233"
            }, {
                id: 215,
                cname: "直布罗陀",
                country_id: "350"
            }, {
                id: 199,
                cname: "希腊",
                country_id: "30"
            }, {
                id: 80,
                cname: "格陵兰岛",
                country_id: "299"
            }, {
                id: 79,
                cname: "格林纳达",
                country_id: "1473"
            }, {
                id: 82,
                cname: "瓜德罗普岛",
                country_id: "590"
            }, {
                id: 83,
                cname: "关岛",
                country_id: "1671"
            }, {
                id: 92,
                cname: "几内亚",
                country_id: "224"
            }, {
                id: 93,
                cname: "几内亚比绍",
                country_id: "245"
            }, {
                id: 84,
                cname: "海地",
                country_id: "509"
            }, {
                id: 87,
                cname: "洪都拉斯",
                country_id: "504"
            }, {
                id: 201,
                cname: "匈牙利",
                country_id: "36"
            }, {
                id: 47,
                cname: "冰岛",
                country_id: "354"
            }, {
                id: 209,
                cname: "印度",
                country_id: "91"
            }, {
                id: 210,
                cname: "印尼",
                country_id: "62"
            }, {
                id: 207,
                cname: "伊朗",
                country_id: "98"
            }, {
                id: 206,
                cname: "伊拉克",
                country_id: "964"
            }, {
                id: 29,
                cname: "爱尔兰",
                country_id: "353"
            }, {
                id: 208,
                cname: "以色列",
                country_id: "972"
            }, {
                id: 200,
                cname: "科特迪瓦",
                country_id: "225"
            }, {
                id: 203,
                cname: "牙买加",
                country_id: "1876"
            }, {
                id: 211,
                cname: "约旦",
                country_id: "962"
            }, {
                id: 106,
                cname: "肯尼亚",
                country_id: "254"
            }, {
                id: 89,
                cname: "基里巴斯",
                country_id: "686"
            }, {
                id: 85,
                cname: "朝鲜",
                country_id: "850"
            }, {
                id: 104,
                cname: "科威特",
                country_id: "965"
            }, {
                id: 91,
                cname: "吉尔吉斯斯坦",
                country_id: "996"
            }, {
                id: 110,
                cname: "老挝",
                country_id: "856"
            }, {
                id: 108,
                cname: "拉脱维亚",
                country_id: "371"
            }, {
                id: 111,
                cname: "黎巴嫩",
                country_id: "961"
            }, {
                id: 109,
                cname: "莱索托",
                country_id: "266"
            }, {
                id: 113,
                cname: "利比里亚",
                country_id: "231"
            }, {
                id: 114,
                cname: "利比亚",
                country_id: "218"
            }, {
                id: 112,
                cname: "立陶宛",
                country_id: "370"
            }, {
                id: 115,
                cname: "卢森堡",
                country_id: "352"
            }, {
                id: 124,
                cname: "马其顿",
                country_id: "389"
            }, {
                id: 118,
                cname: "马达加斯加",
                country_id: "261"
            }, {
                id: 121,
                cname: "马拉维",
                country_id: "265"
            }, {
                id: 119,
                cname: "马尔代夫",
                country_id: "960"
            }, {
                id: 122,
                cname: "马里",
                country_id: "223"
            }, {
                id: 120,
                cname: "马耳他",
                country_id: "356"
            }, {
                id: 123,
                cname: "马里亚纳岛",
                country_id: "1670"
            }, {
                id: 126,
                cname: "马歇尔岛",
                country_id: "692"
            }, {
                id: 125,
                cname: "马提尼克岛",
                country_id: "596"
            }, {
                id: 128,
                cname: "毛里塔尼亚",
                country_id: "222"
            }, {
                id: 127,
                cname: "毛里求斯",
                country_id: "230"
            }, {
                id: 139,
                cname: "墨西哥",
                country_id: "52"
            }, {
                id: 133,
                cname: "密克罗尼西亚",
                country_id: "691"
            }, {
                id: 135,
                cname: "摩尔多瓦",
                country_id: "373"
            }, {
                id: 137,
                cname: "摩纳哥",
                country_id: "377"
            }, {
                id: 129,
                cname: "蒙古",
                country_id: "976"
            }, {
                id: 130,
                cname: "蒙特塞拉特岛",
                country_id: "1664"
            }, {
                id: 136,
                cname: "摩洛哥",
                country_id: "212"
            }, {
                id: 138,
                cname: "莫桑比克",
                country_id: "258"
            }, {
                id: 134,
                cname: "缅甸",
                country_id: "95"
            }, {
                id: 140,
                cname: "纳米比亚",
                country_id: "264"
            }, {
                id: 143,
                cname: "瑙鲁",
                country_id: "674"
            }, {
                id: 144,
                cname: "尼泊尔",
                country_id: "977"
            }, {
                id: 86,
                cname: "荷兰",
                country_id: "31"
            }, {
                id: 145,
                cname: "尼加拉瓜",
                country_id: "505"
            }, {
                id: 146,
                cname: "尼日尔",
                country_id: "227"
            }, {
                id: 147,
                cname: "尼日利亚",
                country_id: "234"
            }, {
                id: 148,
                cname: "纽埃岛",
                country_id: "683"
            }, {
                id: 150,
                cname: "诺福克岛",
                country_id: "672"
            }, {
                id: 149,
                cname: "挪威",
                country_id: "47"
            }, {
                id: 25,
                cname: "阿曼",
                country_id: "968"
            }, {
                id: 38,
                cname: "巴基斯坦",
                country_id: "92"
            }, {
                id: 151,
                cname: "帕劳",
                country_id: "680"
            }, {
                id: 41,
                cname: "巴拿马",
                country_id: "507"
            }, {
                id: 36,
                cname: "巴布亚新几内亚",
                country_id: "675"
            }, {
                id: 39,
                cname: "巴拉圭",
                country_id: "595"
            }, {
                id: 132,
                cname: "秘鲁",
                country_id: "51"
            }, {
                id: 69,
                cname: "菲律宾",
                country_id: "63"
            }, {
                id: 50,
                cname: "波兰",
                country_id: "48"
            }, {
                id: 152,
                cname: "葡萄牙",
                country_id: "351"
            }, {
                id: 48,
                cname: "波多黎各",
                country_id: "1787"
            }, {
                id: 101,
                cname: "卡塔尔",
                country_id: "974"
            }, {
                id: 99,
                cname: "聚会岛",
                country_id: "262"
            }, {
                id: 117,
                cname: "罗马尼亚",
                country_id: "40"
            }, {
                id: 116,
                cname: "卢旺达",
                country_id: "250"
            }, {
                id: 159,
                cname: "萨摩亚，东部",
                country_id: "684"
            }, {
                id: 158,
                cname: "萨摩亚，西部",
                country_id: "685"
            }, {
                id: 168,
                cname: "圣马力诺",
                country_id: "378"
            }, {
                id: 166,
                cname: "圣多美和普林西比",
                country_id: "239"
            }, {
                id: 165,
                cname: "沙特阿拉伯",
                country_id: "966"
            }, {
                id: 161,
                cname: "塞内加尔",
                country_id: "221"
            }, {
                id: 163,
                cname: "塞舌尔共和国",
                country_id: "248"
            }, {
                id: 160,
                cname: "塞拉利昂",
                country_id: "232"
            }, {
                id: 171,
                cname: "斯洛伐克",
                country_id: "421"
            }, {
                id: 172,
                cname: "斯洛文尼亚",
                country_id: "386"
            }, {
                id: 176,
                cname: "所罗门群岛",
                country_id: "677"
            }, {
                id: 177,
                cname: "索马里",
                country_id: "252"
            }, {
                id: 141,
                cname: "南非",
                country_id: "27"
            }, {
                id: 198,
                cname: "西班牙",
                country_id: "34"
            }, {
                id: 170,
                cname: "斯里兰卡",
                country_id: "94"
            }, {
                id: 167,
                cname: "圣卢西亚",
                country_id: "1784"
            }, {
                id: 169,
                cname: "圣皮埃尔和密克隆群岛",
                country_id: "508"
            }, {
                id: 174,
                cname: "苏丹",
                country_id: "249"
            }, {
                id: 175,
                cname: "苏里南",
                country_id: "597"
            }, {
                id: 173,
                cname: "斯威士兰",
                country_id: "268"
            }, {
                id: 155,
                cname: "瑞典",
                country_id: "46"
            }, {
                id: 156,
                cname: "瑞士",
                country_id: "41"
            }, {
                id: 202,
                cname: "叙利亚",
                country_id: "963"
            }, {
                id: 179,
                cname: "坦桑尼亚",
                country_id: "255"
            }, {
                id: 178,
                cname: "泰国",
                country_id: "66"
            }, {
                id: 60,
                cname: "多哥",
                country_id: "228"
            }, {
                id: 188,
                cname: "托克劳岛",
                country_id: "690"
            }, {
                id: 180,
                cname: "汤加",
                country_id: "676"
            }, {
                id: 182,
                cname: "特立尼达和多巴哥",
                country_id: "1868"
            }, {
                id: 184,
                cname: "突尼斯",
                country_id: "216"
            }, {
                id: 186,
                cname: "土耳其",
                country_id: "90"
            }, {
                id: 187,
                cname: "土库曼斯坦",
                country_id: "993"
            }, {
                id: 181,
                cname: "特克斯和凯科斯",
                country_id: "1649"
            }, {
                id: 185,
                cname: "图瓦卢",
                country_id: "688"
            }, {
                id: 194,
                cname: "乌干达",
                country_id: "256"
            }, {
                id: 195,
                cname: "乌克兰",
                country_id: "380"
            }, {
                id: 24,
                cname: "阿联酋",
                country_id: "971"
            }, {
                id: 196,
                cname: "乌拉圭",
                country_id: "598"
            }, {
                id: 197,
                cname: "乌兹别克斯坦",
                country_id: "998"
            }, {
                id: 189,
                cname: "瓦努阿图",
                country_id: "678"
            }, {
                id: 192,
                cname: "委内瑞拉",
                country_id: "58"
            }, {
                id: 212,
                cname: "越南",
                country_id: "84"
            }, {
                id: 191,
                cname: "维珍群岛(英属)",
                country_id: "1284"
            }, {
                id: 190,
                cname: "维珍群岛(美属)",
                country_id: "1340"
            }, {
                id: 88,
                cname: "维克岛",
                country_id: "1808"
            }, {
                id: 153,
                cname: "瓦利斯群岛和富图纳群岛",
                country_id: "1681"
            }, {
                id: 205,
                cname: "也门",
                country_id: "967"
            }, {
                id: 142,
                cname: "塞尔维亚",
                country_id: "381"
            }, {
                id: 213,
                cname: "赞比亚",
                country_id: "260"
            }, {
                id: 164,
                cname: "桑给巴尔岛",
                country_id: "259"
            }, {
                id: 98,
                cname: "津巴布韦",
                country_id: "263"
            }]
        }
    },
    VT3b: function(e, t, i) {
        "use strict";
        var s = i("//Fk")
            , n = i.n(s);
        t.a = function(e, t) {
            return new n.a(function(i, s) {
                    var n = ""
                        , a = "";
                    if (t && (n = t.params || {},
                        a = t.cbName || "cb",
                        e)) {
                        var c = "jsonp_" + Math.random();
                        c = c.replace(".", ""),
                            window[c] = function(e) {
                                i(e),
                                    o.removeEventListener("error", s, !1),
                                    r.removeChild(o)
                            }
                        ;
                        var o = document.createElement("script");
                        o.addEventListener("error", s, !1),
                            n[a] = c,
                            o.src = e + "?" + function(e) {
                                var t = [];
                                for (var i in e)
                                    t.push(i + "=" + e[i]);
                                return t.join("&")
                            }(n);
                        var r = document.getElementsByTagName("head")[0];
                        r.appendChild(o)
                    }
                }
            )
        }
    },
    VpqJ: function(e, t) {},
    "X+ky": function(e, t) {},
    cDSy: function(e, t) {},
    cZLh: function(e, t) {},
    dTWR: function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAgCAYAAAEXqgqWAAAABGdBTUEAALGPC/xhBQAABcZJREFUWAmlmG9oVWUcx++9u1tL1opGU0jbrBaO4f5aljO3ougfQlD5oqJBYaHUiwh75yLtVYRUvtBiOh0ZhPQuC4Ko1guL9q+pKEiNWis2Ai1nm7q79fk+nd/x3HPPufdOHzj7/f8+v+f3/M7znLtEgrGwsJAcGBj4R7xGcnBw8BuUHWvWrJFhwSn1R0IymTzDs21+fr4nJaUNKYxPAPG6L8A4HML6y8vLH5yZmbkgowtnog0NDQ0XzdvHHBsbK5eSqF6l9AGeL5pXRUVF5apVq85JxjavNYhX9CdivHG3OSl1c5LNedvizBtaz6JPBfXpgNHYG2DO4mRyQpXyBQxreY4Ep/ONMOkgvAys0NUY/RLE89JpZE1tU7DaDMh+meSYJUjhjRljPHouy9HSaGtrqwg6lpaWrstylNGcVXhzbmpqOp4i+R9NIao8leP09LTfUdKnGJvEeOMmIYYXIpsrJAinMd5u3mFq1QjridtL3EvSk9loK0O9dxb5+rCzJ28C7HDQBsguQF4N6oJ8mqW8R7t3B5XwlwAqC+qY+GnkQ4AF1Tl88sSJE2X2VuRYE4k+gLtMD5gKPG9ymLLsd+O6O+ybWLp06ZIVK1a4RgH0DOBq7qyhWuf0Q5aHJzDz/gDY7igwXC/J3QES8I4Xm0M0K8o/1SZeq7yc44SipKSkU3q3ZDE4D0JaxXtjK2B7TCCr9NDQ0LPQF9CtN71He/DdLN4HNAc2adns7GwHgR3oNpD9GO/ORrMXoumRkZGGubm54+bIjhvrKMAHshSewMQV+LrDTirabwt9vdc/nKOC0J1iKfVhG+V5H90rYT3y5qwDJ+wQBhsfH792ampqmqzjumNnnCFB3UqDE9B7b09OTv6bB0zuxyIBaYF2NmMuCAjQtqAcxROTfYWZUyaTCV4iTl1WVnab2eMom3JYB2LUu7lcTayaWXBjY+Mv+H5lchTF7or7fZRROtUM4MfMTl0fMD6OKsNv44ye/jM25AvzSafTy40P0R8kpyh2IUD53ac/Gs3NzRMkMfG/dPkvun2S0tXV1f0s7bIlgmOp7vuA5S8hUH2Y88pWVlb2KTRlx1IEjlNx590qBjCdSOejwGSvq6tzny553xT83qJmE4CpJ0sUWGhENrYX9Buv3nZOnlnkvGCU4ahNZIBRx3mNnKhfCmBikk2Iu1VDCzZKQ7cb7xdXteEoW8cN2Alfi4MAawCoQb7GAmLoLHfOjYX2IxxLO94P9uMcfRPMO4x9iOT/CvrpOLwFxShP3F0f9M/hWcCnVOXJHEOMYnh4uJNkekmsNsbF1B+D+5wS/BmN6zSzFEO9rbkLkJOF/KnUvSTUi1/B8yqIxRyDaf7oZQ7qi+F3kdhr+Ry5b++hUgfwueMK8A16WZpgnTS1pslHWcwfnNqtq1evjj1J2JEdYGwnuXxQRdnI7aNizlYHRnIneZrzJSdHKvsGflr0VQ/uyX3a3v5ikPCrpypT9NMFqrQlLobkFkiyE/vWOJ9i9OD0t7S0nHbHDJP+TgI3FxMY8hlhy5/Q3RrSO9E7IY4h+L9iovyidBw9XZyHfS5BgA7hpK/7KxqqGs9OVvwmNKf5KMDnFOCRRYDPsAvXgZVxJz/MVfUMkyfZ/m4SyfD2Ph9OhMkeVUXC+jzyQSUnu0uQCYrqwzyAZtrMtuw3wSiJ68bYYXIhSnI95uO2WAIgk4BUm2GRdLiqqmrdypUrdXG7wY3RrnMQzNiftuYbpCT3ExVvNp3/+QGQtvkpMxRDASNsYSP35xH5k9SdJHUQXT1fvsVARPn41ZPRTxD+a57FJPgl26nG13X5HXT9VSRFOEC8YHyP6Ur0h+tBSVRBPw1dJXxrBAPIRUDW4v+QAHlUqm7ohzwD8P42R4QXUnXxz5TzQSe/B03J9pSwVc+wVQ+jq+L5m4l/heo5Sn/od++iBpip0dHROircAq/fzHrqpYcKdw+4fcyT81HwH74wi6B5HiIvAAAAAElFTkSuQmCC"
    },
    gZWm: function(e, t) {},
    hchY: function(e, t) {},
    jeMz: function(e, t, i) {
        "use strict";
        i.d(t, "b", function() {
            return a
        }),
            i.d(t, "h", function() {
                return c
            }),
            i.d(t, "j", function() {
                return o
            }),
            i.d(t, "c", function() {
                return r
            }),
            i.d(t, "n", function() {
                return d
            }),
            i.d(t, "k", function() {
                return u
            }),
            i.d(t, "m", function() {
                return p
            }),
            i.d(t, "a", function() {
                return m
            }),
            i.d(t, "i", function() {
                return g
            }),
            i.d(t, "l", function() {
                return f
            }),
            i.d(t, "e", function() {
                return v
            }),
            i.d(t, "d", function() {
                return y
            }),
            i.d(t, "g", function() {
                return b
            }),
            i.d(t, "f", function() {
                return _
            });
        var s = i("mvHQ")
            , n = i.n(s)
            , a = {
            get: function(e) {
                var t = "" + document.cookie
                    , i = t.indexOf(e + "=");
                if (-1 == i || "" == e)
                    return "";
                var s = t.indexOf(";", i);
                return -1 == s && (s = t.length),
                    unescape(t.substring(i + e.length + 1, s))
            },
            set: function(e, t, i) {
                i = void 0 !== i ? i : 365;
                var s = new Date;
                s.setTime(s.getTime() + 24 * i * 60 * 60 * 1e3),
                    document.cookie = e + "=" + escape(t) + ";expires=" + s.toGMTString() + "; path=/; domain=.bilibili.com"
            },
            delete: function(e) {
                this.set(e, "", -1)
            }
        }
            , c = function(e) {
            var t = window.location.href
                , i = t.substring(t.indexOf("?"), t.length).replace(/#\/$/, "").match(new RegExp("[?&]" + e + "=([^&]+)","i"));
            return null === i || i.length < 0 ? "" : i[1]
        }
            , o = function(e) {
            var t = e.replace(/^http:\/\/|:\/\/|\/\/|\//, "https://");
            return t.match(/^https:\/\//) ? t : "https://" + t
        }
            , r = function(e, t, i) {
            if (!e)
                return e;
            var s = e.match(/(.*\.(jpg|jpeg|gif|png))(\?.*)?/)
                , n = -1 !== e.indexOf("/bfs/");
            if ("gif" === s[2] || !n || !s)
                return e;
            var a = t && i ? "@" + t + "w_" + i + "h" : "@"
                , c = s[3] ? s[3] : "";
            return l ? s[1] + a + ".webp" + c : s[1] + a + "." + s[2] + c
        }
            , l = function() {
            try {
                return 0 == document.createElement("canvas").toDataURL("image/webp").indexOf("data:image/webp")
            } catch (e) {
                return !1
            }
        }()
            , d = function(e) {
            for (var t = e.substring(e.indexOf("?") + 1, e.length).replace(/#\/$/, "").split("&"), i = {}, s = 0; s < t.length; s++) {
                var n = t[s].split("=");
                i[n[0]] = n[1]
            }
            return i
        }
            , u = function(e, t) {
            window.reportMsgObj && (window.reportMsgObj[e] = void 0 === t ? e : t),
            window.reportObserver && window.reportObserver.forceCommit && window.reportObserver.forceCommit()
        }
            , p = function(e) {
            for (var t = [e[0]], i = 0; i <= e.length - 1; i++) {
                for (var s = !0, n = 0; n <= t.length - 1; n++)
                    if (t[n] === e[i]) {
                        s = !1;
                        break
                    }
                s && t.push(e[i])
            }
            if (t.length <= 2)
                return !0;
            try {
                if (e.length <= 10 && e.length >= 6 && !isNaN(e)) {
                    for (var a = e[0], c = e[0], o = [e[0]], r = [e[0]], l = 1; l < e.length; l++)
                        a++,
                            c--,
                            o.push(a),
                            r.push(c);
                    var d = new RegExp(o.join(""),"g")
                        , u = new RegExp(r.join(""),"g");
                    return !!d.test(e) || !!u.test(e)
                }
                return !1
            } catch (e) {
                return !1
            }
        }
            , h = function(e, t) {
            return new RegExp("\\b" + t + "\\b").test(e.className)
        }
            , m = function(e, t) {
            e.className ? h(e, t) || (e.className += " " + t) : e.className = t
        }
            , g = function(e, t) {
            var i = new RegExp("\\b" + t + "\\b","g");
            h(e, t) && (e.className = e.className.replace(i, "").replace(/^\s+|\s+$/g, "").replace(/\s+/g, " "))
        }
            , f = function(e, t, i) {
            e.ts = (new Date).getTime(),
            i && (e.expiration = i),
            window.localStorage && (window.localStorage[t] = n()(e))
        }
            , v = function(e) {
            if (window.localStorage) {
                if (window.localStorage[e]) {
                    var t = null;
                    try {
                        t = JSON.parse(window.localStorage[e])
                    } catch (e) {
                        t = {}
                    }
                    if (t.expiration) {
                        var i = t.expiration;
                        return (new Date).getTime() - t.ts > i ? null : t
                    }
                    return t
                }
                return null
            }
        }
            , y = function(e, t) {
            var i = ""
                , s = (i = void 0 === e || null === e ? new Date : new Date(parseInt(e))).getFullYear()
                , n = i.getMonth() + 1 < 10 ? "0" + (i.getMonth() + 1) : i.getMonth() + 1
                , a = i.getDate() < 10 ? "0" + i.getDate() : i.getDate()
                , c = i.getHours() < 10 ? "0" + i.getHours() : i.getHours()
                , o = i.getMinutes() < 10 ? "0" + i.getMinutes() : i.getMinutes()
                , r = i.getSeconds() < 10 ? "0" + i.getSeconds() : i.getSeconds();
            return 0 === t || void 0 === t ? s + "-" + n + "-" + a : 1 === t ? s + "/" + n + "/" + a : 2 === t ? s + "-" + n + "-" + a + " " + c + ":" + o + ":" + r : 3 === t ? c + ":" + o : 4 === t ? n + "月" + a + "日" : 5 === t ? n + "-" + a + "  " + c + ":" + o : 6 == t ? s + "年" + n + "月" : 7 == t ? s + "." + n + "." + a : 8 == t ? s + "-" + n + "-" + a + " " + c + ":" + o : 9 == t ? s + "年" + n + "月" + a + "日" : void 0
        }
            , b = function(e) {
            return "[object Object]" === Object.prototype.toString.call(e)
        }
            , _ = function(e) {
            return "[object Array]" === Object.prototype.toString.call(e)
        }
    },
    mTzT: function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        i("GXEp"),
            i("+BTi");
        var s = i("mtrD")
            , n = i.n(s)
            , a = (i("X+ky"),
            i("HJMx"))
            , c = i.n(a)
            , o = (i("I4nB"),
            i("STLj"))
            , r = i.n(o)
            , l = (i("cDSy"),
            i("e0Bm"))
            , d = i.n(l)
            , u = i("7+uW")
            , p = i("Hzw/")
            , h = i("EXyj")
            , m = i("//Fk")
            , g = i.n(m)
            , f = i("jeMz")
            , v = i("Ouqr")
            , y = i("xXit")
            , b = (i("fLxU"),
            i("mtWM"))
            , _ = i.n(b)
            , w = i("mw3O")
            , C = {
            transformRequest: [function(e) {
                return w.stringify(e)
            }
            ],
            timeout: 3e3,
            withCredentials: !0
        }
            , k = (i("VT3b"),
            _.a.create(C));
        k.interceptors.response.use(function(e) {
            return -101 === e.data.code && (window.location.href = "https://passport.bilibili.com/login?gourl=" + encodeURIComponent(location.href)),
                e
        }, function(e) {
            return g.a.reject(e)
        });
        var T = "//passport.bilibili.com/"
            , x = {
            passport: {
                getGeeTest: T + "captcha/gc",
                countryList: T + "web/generic/country/list",
                sendTel: T + "web/sms/general/v2/send",
                geeTest: T + "web/captcha/combine",
                getCsrf: T + "captcha/dfc",
                loginV2: T + "web/login/v2",
                login: T + "web/login",
                rapid: T + "web/login/rapid",
                regRapid: T + "web/reg/rapid",
                getSSO: T + "web/sso/list",
                getExitSSO: T + "web/exit"
            },
            base: {
                checkLogin: "//api.bilibili.com/nav"
            }
        }
            , O = function(e) {
            var t = f.b.get("bili_jct");
            return e || (e = {}),
            t && (e.biliCSRF = t),
                e
        }
            , E = function(e) {
            return k.post(x.passport.sendTel, e)
        }
            , L = function(e) {
            return k.post(x.passport.rapid, e)
        }
            , j = function(e) {
            return k.post(x.passport.regRapid, e)
        }
            , F = function(e) {
            return k.get(x.passport.geeTest, {
                params: e
            })
        }
            , S = function(e) {
            return k.post(x.passport.loginV2, e)
        }
            , A = function() {
            return new g.a(function(e) {
                    var t;
                    k.get(x.passport.getSSO, {
                        params: O(t)
                    }).then(function(t) {
                        var i = t.data;
                        0 === i.code ? i.data && i.data.sso ? _.a.all(i.data.sso.map(function(e) {
                            return k.post(e.replace("https://", "//").replace("http://", "//"))
                        })).then(_.a.spread(function() {
                            for (var t = arguments.length, i = Array(t), s = 0; s < t; s++)
                                i[s] = arguments[s];
                            e({
                                type: "success",
                                response: i
                            })
                        })).catch(function() {
                            e({
                                type: "error",
                                message: "网络错误",
                                response: []
                            })
                        }) : e({
                            type: "error",
                            message: "接口返回错误",
                            response: []
                        }) : e({
                            type: "error",
                            message: i.messages,
                            response: []
                        })
                    }).catch(function() {
                        e({
                            type: "error",
                            message: "网络错误",
                            response: []
                        })
                    })
                }
            )
        }
            , q = i("EC14")
            , R = {
            components: {
                EmailSelection: v.a,
                PopupApp: q.a,
                Checkbox: y.a
            },
            data: function() {
                return {
                    checkTel: "",
                    checkCountry: "",
                    canGetCaptch: 60,
                    maskFlag: !1,
                    reqCHtml: "获取验证码",
                    tel: "",
                    checkIsPass: !1,
                    messageCode: "",
                    country_code: "",
                    countryArr: [],
                    username: "",
                    password: "",
                    captcha: "",
                    captchaSrc: "",
                    keep: !0,
                    telTip: "",
                    messageCodeTip: "",
                    messageCodeZZTip: "",
                    messageCodeSuccess: "",
                    snsErrorTips: "",
                    usernameTip: "",
                    pcPasswordTip: "",
                    passwordTip: "",
                    userAndPassError: !1,
                    publicTip: "",
                    captchaTip: "",
                    isReloadCaptcha: !0,
                    captchaType: 0,
                    gcObj: null,
                    gcData: null,
                    bFlag: !1,
                    iea: !1,
                    ieb: !1,
                    iec: !1,
                    windowHeight: window.screen.height,
                    geeTestResult: null,
                    gch5: !1,
                    key: "",
                    gourl: decodeURIComponent(Object(f.h)("gourl")) || document.referrer || "",
                    loginType: "pwd"
                }
            },
            watch: {
                username: function() {
                    this.iea || (this.iea = !0)
                },
                password: function() {
                    this.ieb || (this.ieb = !0)
                },
                captcha: function() {
                    this.iec || (this.iec = !0)
                },
                tel: function(e) {
                    this.tel = e.replace(/\D/g, ""),
                        this.telTip = ""
                },
                messageCode: function(e) {
                    this.messageCode = e.replace(/\s/g, ""),
                        this.messageCodeTip = "",
                        this.messageCodeSuccess = "",
                        this.messageCodeZZTip = ""
                },
                country_code: function() {
                    this.telTip = ""
                }
            },
            methods: {
                clearPassword: function() {
                    !0 === this.userAndPassError && (this.passwordTip = "",
                        this.userAndPassError = !1)
                },
                urlGetJson: function(e) {
                    for (var t = e.substring(e.indexOf("?") + 1, e.length).split("&"), i = {}, s = 0; s < t.length; s++) {
                        var n = t[s].split("=");
                        i[n[0]] = n[1]
                    }
                    return i
                },
                changeInit: function() {
                    this.passwordTip = "",
                        this.usernameTip = "",
                        this.password = "",
                        this.pcPasswordTip = "",
                        this.userAndPassError = !1
                },
                onUsernameInput: function() {
                    this.usernameTip = this.username ? "" : "请输入注册时用的邮箱或者手机号呀"
                },
                onPasswordInput: function() {
                    this.passwordTip = this.password ? "" : "喵，你没输入密码么？"
                },
                onCaptchaInput: function() {
                    1 === this.captchaType && (this.captchaTip = this.captcha ? "" : "请输入验证码")
                },
                onFocusCap: function(e) {
                    this.isReloadCaptcha && (this.captcha = "",
                        this.reloadCaptcha(),
                        this.isReloadCaptcha = !1)
                },
                checkoutEmpty: function() {
                    this.onUsernameInput(),
                        this.onPasswordInput(),
                        this.onCaptchaInput(),
                        this.publicTip = "",
                        this.pcPasswordTip = "",
                        this.emails = [],
                        this.userAndPassError = !1
                },
                bindEvent: function(e) {
                    13 === e.keyCode && this.username && this.password && this.submitLogin()
                },
                reloadCaptcha: function() {
                    this.captchaSrc = "//passport.bilibili.com/web/captcha/img?t=" + Math.random() + "&key=" + this.key
                },
                submitLogin: function() {
                    var e = this;
                    this.bFlag || ("pwd" === this.loginType ? (this.onUsernameInput(),
                        this.onPasswordInput(),
                    this.username && this.password && (2 === this.captchaType ? this.gcObj && this.gcObj.verify() : this.login())) : "message" === this.loginType && (Object(f.k)("smsloginweb_submit_click"),
                        this.quickCheck().then(function() {
                            return e.quickLogin()
                        })))
                },
                login: function() {
                    var e = this;
                    if (this.checkoutEmpty(),
                    this.username && this.password) {
                        if (this.bFlag)
                            return;
                        if (this.isMobile && !this.gch5)
                            return void (this.gch5 = !0);
                        var t = decodeURIComponent(Object(f.h)("gourl"))
                            , i = {}
                            , s = this.encryptPassword(this.password)
                            , n = {
                            captchaType: 6,
                            username: this.username,
                            password: s,
                            keep: this.keep,
                            key: this.key,
                            goUrl: t || (document.referrer || "")
                        };
                        if (2 === this.captchaType) {
                            if (!this.gcData)
                                return void (this.captchaTip = "请先完成验证");
                            i = $.extend(n, this.gcData)
                        } else
                            n.captcha = this.captcha,
                                i = n;
                        this.bFlag = !0,
                            S(i).then(function(t) {
                                var i = t.data;
                                if (e.bFlag = !1,
                                    i) {
                                    var s = i.code
                                        , n = i.data
                                        , a = i.message;
                                    switch (Object(f.k)("login_success", s),
                                        s) {
                                        case -105:
                                            e.captchaTip = a,
                                                e.isReloadCaptcha = !0;
                                            break;
                                        case 2400:
                                            e.initCaptcha();
                                            break;
                                        case 2401:
                                        case 2402:
                                        case 2403:
                                            e.captchaTip = a,
                                                e.isReloadCaptcha = !0;
                                            break;
                                        case 2404:
                                            e.initCaptcha();
                                            break;
                                        case -629:
                                            e.passwordTip = a,
                                                e.userAndPassError = !0;
                                            break;
                                        case -628:
                                            e.passwordTip = a;
                                            break;
                                        case -652:
                                            e.usernameTip = a;
                                            break;
                                        case 0:
                                            n.isLogin ? window.location.href = n.goUrl : window.location.href = n.redirectUrl;
                                            break;
                                        case -2100:
                                            var c = i.data
                                                , o = ""
                                                , r = 0;
                                            for (var l in c)
                                                o += (r > 0 ? "&" : "?") + l + "=" + c[l],
                                                    r++;
                                            e.isMobile ? c.tel ? window.location.href = "https://passport.bilibili.com/mobile/verifytel_h5.html" + o : !c.tel && c.email ? window.location.href = "https://passport.bilibili.com/mobile/verifymail_h5.html" + o : window.location.href = "https://passport.bilibili.com/mobile/verifyresult_h5.html" + o : c.tel ? window.location.href = "https://passport.bilibili.com/member/checklogin-phone.html" + o : !c.tel && c.email ? window.location.href = "https://passport.bilibili.com/member/checklogin-mail.html" + o : window.location.href = "https://passport.bilibili.com/member/loginsuccess.html" + o + "&type=2";
                                            break;
                                        case -2110:
                                            window.location.href = n;
                                            break;
                                        case -2111:
                                            window.location.href = n;
                                        default:
                                            e.publicTip = a
                                    }
                                    2 === e.captchaType && 0 != s && (e.gcData = null,
                                    e.isMobile && (e.gch5 = !1))
                                }
                            }).catch(function() {})
                    } else
                        2 === this.captchaType && (this.gcData = null,
                        this.isMobile && (this.gch5 = !1))
                },
                snsLogin: function(e) {
                    var t = this
                        , i = decodeURIComponent(Object(f.h)("gourl"))
                        , s = i || (document.referrer || "");
                    this.getCsrf(function(i) {
                        $.ajax({
                            url: "https://passport.bilibili.com/login/" + e,
                            dataType: "json",
                            type: "POST",
                            data: {
                                gourl: s,
                                csrf: i
                            }
                        }).done(function(i) {
                            reportMsgObj.snsback_success = e + "_" + i.status,
                            window.reportObserver && window.reportObserver.forceCommit && window.reportObserver.forceCommit(),
                                i.status ? window.location.href = i.data : t.snsErrorTips = i.message || "未知错误"
                        })
                    })
                },
                getCsrf: function(e) {
                    var t = f.b.get("_jct");
                    t ? e(t) : $.ajax({
                        url: "//passport.bilibili.com/captcha/dfc",
                        dataType: "json",
                        type: "POST"
                    }).done(function(i) {
                        t = i.data.dfc,
                            e(t)
                    })
                },
                encryptPassword: function(e, t) {
                    var i = this
                        , s = !1;
                    return $.ajax({
                        url: "//passport.bilibili.com/login?act=getkey&r=" + Math.random(),
                        async: !1
                    }).done(function(t) {
                        t && t.error && (i.publicTip = "登录失败，服务端出现异常",
                            e = null);
                        var n = new JSEncrypt;
                        n.setPublicKey(t.key);
                        var a = n.encrypt(t.hash + e);
                        e = a,
                            s = !0
                    }),
                        s ? e : ""
                },
                initCaptcha: function() {
                    //当前版本hook工具只支持Content-Type为html的自动hook
//下面是一个示例:这个示例演示了hook全局的cookie设置点
                    (function() {
                        //严谨模式 检查所有错误
                        'use strict';
                        //document 为要hook的对象   这里是hook的cookie
                        Object.defineProperty(window, 'initGeetest', {
                            //hook set方法也就是赋值的方法
                            //当前也可以hook get方法
                            set: function(val) {
                                //这样就可以快速给下面这个代码行下断点
                                //从而快速定位设置cookie的代码
                                debugger;
                                console.log('Hook捕获到cookie设置->', val);
                                return val;
                            }
                        });
                    })();
                    var e = this;
                    F({
                        plat: 6
                    }).then(function(t) {
                        debugger;
                        var i = t.data;
                        0 === i.code && (e.key = i.data.result.key,
                            reportMsgObj.geetest_success = i.code,
                            e.captcha = "",
                            1 === i.data.type ? (e.captchaType = 2,
                                e.initGeeCode(i.data.result),
                                Object(f.k)("smsloginweb_geetest")) : (e.captchaType = 1,
                                Object(f.k)("smsloginweb_captcha")))
                    }).catch(function() {
                        e.publicTip = "验证服务器错误，请刷新页面重试"
                    })
                },
                initGeeCode: function(e) {
                    var t = this;
                    initGeetest && initGeetest({
                        area: "#geetest-wrap",
                        gt: e.gt,
                        challenge: e.challenge,
                        offline: !e.success,
                        new_captcha: !0,
                        next_width: "270px",
                        product: "bind"
                    }, function(e) {
                        t.gcObj = e,
                            e.appendTo("body"),
                            e.onSuccess(function() {
                                var i = e.getValidate();
                                t.gcData = {
                                    challenge: i.geetest_challenge,
                                    validate: i.geetest_validate,
                                    seccode: i.geetest_seccode
                                },
                                    t.captchaTip = "",
                                    "pwd" === t.loginType ? t.login() : "message" === t.loginType && t.sendFn()
                            })
                    })
                },
                getNewUname: function(e) {
                    this.username = e.value
                },
                initCountry: function() {
                    var e = this;
                    k.get(x.passport.countryList).then(function(t) {
                        var i = t.data;
                        if (0 === i.code) {
                            i.data.common.push({
                                id: "",
                                cname: "--其它--",
                                country_id: "",
                                disabled: !0
                            });
                            for (var s = i.data.common.concat(i.data.others), n = 0; n < s.length; n++)
                                e.$set(e.countryArr, n, s[n]);
                            e.country_code = e.countryArr[0].id
                        }
                    })
                },
                formatTel: function() {
                    this.telTip = "",
                        this.tel ? 1 !== this.country_code || 11 === this.tel.length && "1" === this.tel[0] || (this.telTip = "手机号格式错误") : this.telTip = "手机号不能为空哦"
                },
                getMessage: function() {
                    this.formatTel(),
                    this.telTip || (Object(f.k)("smsloginweb_sms_click"),
                    "message" === this.loginType && (2 === this.captchaType && this.gcObj ? this.gcObj.verify() : this.maskFlag = !0))
                },
                sendFn: function(e) {
                    var t = this
                        , i = {
                        tel: this.tel,
                        cid: this.country_code,
                        type: 21,
                        captchaType: 6,
                        key: this.key
                    }
                        , s = {};
                    if (2 === this.captchaType) {
                        if (!this.gcData)
                            return void (this.captchaTip = "请先完成验证");
                        s = $.extend(i, this.gcData)
                    } else
                        i.captcha = e,
                            s = i;
                    this.telTip = "",
                        this.messageCodeTip = "",
                        this.messageCodeSuccess = "",
                        this.messageCodeZZTip = "",
                        E(s).then(function(e) {
                            return t.sendCb(e)
                        })
                },
                sendCb: function(e) {
                    var t = this
                        , i = e.data;
                    if (2400 === i.code)
                        this.checkIsPass = !1,
                            this.initCaptcha();
                    else if (1005 === i.code || 1003 === i.code || 1007 === i.code)
                        this.checkIsPass = !1,
                            this.reqCHtml = "重新获取验证码",
                            this.messageCodeTip = i.message;
                    else if (1002 === i.code || 66031 === i.code || 86016 === i.code)
                        this.checkIsPass = !1,
                            this.reqCHtml = "重新获取验证码",
                            this.telTip = i.message;
                    else if (0 !== i.code)
                        this.checkIsPass = !1,
                            this.reqCHtml = "重新获取验证码",
                            this.messageCodeZZTip = i.message;
                    else {
                        this.checkIsPass = !0,
                            this.messageCodeTip = "",
                            this.messageCodeSuccess = "验证码已发送，5分钟内有效",
                            this.checkTel = this.tel,
                            this.checkCountry = this.country_code;
                        var s = null;
                        s = setInterval(function() {
                            if (t.canGetCaptch--,
                            t.canGetCaptch <= 0)
                                return clearInterval(s),
                                    t.reqCHtml = "重新获取验证码",
                                    t.canGetCaptch = 60,
                                    t.checkIsPass = !1,
                                    !1;
                            t.reqCHtml = t.canGetCaptch + "s后重试"
                        }, 1e3)
                    }
                    2 === this.captchaType ? 0 === i.code ? Object(f.k)("smsloginweb_geetest_success") : Object(f.k)("smsloginweb_geetest_failure", i.code) : 0 === i.code ? Object(f.k)("smsloginweb_captcha_success") : Object(f.k)("smsloginweb_captcha_failure", i.code)
                },
                quickCheck: function() {
                    var e = this;
                    return new g.a(function(t) {
                            e.messageCodeTip = "",
                                e.messageCodeSuccess = "",
                                e.messageCodeZZTip = "",
                                e.publicTip = "",
                                e.formatTel(),
                                e.checkTel && e.checkTel !== e.tel ? e.telTip = "手机号与验证码不匹配，请重新确认" : e.checkCountry && e.checkCountry !== e.country_code && (e.telTip = "区号不一致，请重新确认"),
                            e.messageCode || (e.messageCodeTip = "短信验证码不能为空"),
                            e.telTip || e.messageCodeTip || e.publicTip || t()
                        }
                    )
                },
                quickLogin: function() {
                    var e = this;
                    this.bFlag = !0;
                    var t = decodeURIComponent(Object(f.h)("gourl"))
                        , i = {
                        cid: this.country_code,
                        tel: this.tel,
                        smsCode: this.messageCode,
                        source: "main-web",
                        goUrl: t || (document.referrer || ""),
                        keep: this.keep
                    };
                    L(i).then(function(t) {
                        var s = t.data;
                        e.bFlag = !1,
                            0 === s.code && s.data ? s.data.is_new ? j(i).then(function(t) {
                                var i = t.data;
                                0 === i.code ? (A().then(function() {
                                    window.location.href = s.data.url
                                }),
                                    Object(f.k)("smsloginweb_success", 2)) : 1101 === i.code ? e.telTip = i.message : 1006 === i.code || 1007 === i.code || 1005 === i.code ? e.messageCodeTip = i.message : e.publicTip = i.message,
                                0 !== i.code && Object(f.k)("smsloginweb_failure", i.code)
                            }).catch(function() {
                                Object(f.k)("smsloginweb_failure", "internet_error"),
                                    e.publicTip = "网络错误，登录失败"
                            }) : (2 === s.data.status ? window.location.href = s.data.url : A().then(function() {
                                window.location.href = s.data.url
                            }),
                                Object(f.k)("smsloginweb_success", 1)) : 1101 === s.code ? e.telTip = s.message : 1006 === s.code || 1007 === s.code || 1005 === s.code ? e.messageCodeTip = s.message : e.publicTip = s.message,
                        0 === s.code && s.data || Object(f.k)("smsloginweb_failure", s.code)
                    }).catch(function() {
                        Object(f.k)("smsloginweb_failure", "internet_error"),
                            e.bFlag = !1,
                            e.publicTip = "网络错误，登录失败"
                    })
                },
                showMaskFlag: function(e) {
                    this.maskFlag = !e._status,
                        this.checkIsPass = e.check,
                    this.checkIsPass && this.sendFn(e.yzm)
                }
            },
            mounted: function() {
                var e = this;
                !!window.ActiveXObject || window;
                this.initCountry(),
                    Object(f.k)("pwdloginweb_show"),
                    $(".username input").on("input propertychange", function() {
                        e.iea && e.onUsernameInput()
                    }),
                    $(".password input").on("input propertychange", function() {
                        e.ieb && e.onPasswordInput()
                    }),
                    $(".vdcode input").on("input propertychange", function() {
                        e.iec && e.onCaptchaInput()
                    }),
                    document.addEventListener("keydown", this.bindEvent),
                    $.ajax({
                        url: "//api.bilibili.com/nav",
                        type: "get",
                        dataType: "jsonp",
                        data: {
                            type: "jsonp"
                        }
                    }).done(function(e) {
                        if (e && e.data && e.data.isLogin) {
                            debugger;
                            var t = decodeURIComponent(Object(f.h)("gourl"))
                                , i = document.referrer
                                , s = t || i
                                , n = new RegExp("^http(s)?://(([a-z-0-9A-Z])*.)?(bilibili.(com|tv)|biligame.(com|cn)|(bigfunapp|bigfun).(cn))($|/|\\\\)");
                            s && -1 == s.indexOf("passport.bilibili.com/login") && -1 == s.indexOf("findpassword.html") && n.test(s) ? window.location.href = s : window.location.href = "//www.bilibili.com"
                        }
                    }),
                    this.initCaptcha()
            }
        }
            , I = {
            render: function() {
                var e = this
                    , t = e.$createElement
                    , i = e._self._c || t;
                return i("div", {
                    staticClass: "form-login"
                }, [i("div", {
                    staticClass: "input-box",
                    attrs: {
                        id: "geetest-wrap"
                    }
                }, [i("div", [i("div", {
                    staticClass: "type-tab"
                }, [i("span", {
                    directives: [{
                        name: "report",
                        rawName: "v-report",
                        value: "pwdloginweb_show",
                        expression: "'pwdloginweb_show'"
                    }],
                    class: "pwd" === e.loginType && "active",
                    on: {
                        click: function(t) {
                            e.loginType = "pwd"
                        }
                    }
                }, [e._v("密码登录")]), e._v(" "), i("span", {
                    directives: [{
                        name: "report",
                        rawName: "v-report",
                        value: "smsloginweb_show",
                        expression: "'smsloginweb_show'"
                    }],
                    class: "message" === e.loginType && "active",
                    on: {
                        click: function(t) {
                            e.loginType = "message"
                        }
                    }
                }, [e._v("短信登录")])]), e._v(" "), i("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: "pwd" === e.loginType,
                        expression: "loginType === 'pwd'"
                    }]
                }, [i("div", {
                    staticClass: "item username status-box"
                }, [i("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.username,
                        expression: "username"
                    }],
                    class: e.usernameTip || e.userAndPassError ? "error" : "",
                    attrs: {
                        type: "text",
                        value: "",
                        placeholder: "你的手机号/邮箱",
                        id: "login-username",
                        maxlength: "50",
                        autocomplete: "off"
                    },
                    domProps: {
                        value: e.username
                    },
                    on: {
                        input: [function(t) {
                            t.target.composing || (e.username = t.target.value)
                        }
                            , e.changeInit]
                    }
                }), e._v(" "), i("span", {
                    class: {
                        status: !0,
                        error: e.usernameTip || e.userAndPassError
                    }
                }), e._v(" "), i("div", {
                    staticClass: "text clearfix"
                }, [i("p", {
                    staticClass: "tips"
                }, [e._v(e._s(e.usernameTip))])]), e._v(" "), i("email-selection", {
                    attrs: {
                        keyValue: e.username,
                        top: "48px"
                    },
                    on: {
                        "cb-value": e.getNewUname
                    }
                })], 1), e._v(" "), i("div", {
                    staticClass: "item password status-box"
                }, [i("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.password,
                        expression: "password"
                    }],
                    class: e.passwordTip || e.userAndPassError ? "error" : "",
                    attrs: {
                        type: "password",
                        placeholder: "密码",
                        id: "login-passwd"
                    },
                    domProps: {
                        value: e.password
                    },
                    on: {
                        input: [function(t) {
                            t.target.composing || (e.password = t.target.value)
                        }
                            , e.clearPassword]
                    }
                }), e._v(" "), i("span", {
                    class: {
                        status: !0,
                        error: e.passwordTip || e.userAndPassError
                    }
                }), e._v(" "), i("div", {
                    staticClass: "text clearfix"
                }, [i("p", {
                    staticClass: "tips"
                }, [e._v(e._s(e.passwordTip))])])]), e._v(" "), 1 === e.captchaType ? i("div", {
                    staticClass: "item vdcode"
                }, [i("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.captcha,
                        expression: "captcha"
                    }],
                    class: e.captchaTip ? "error" : "",
                    attrs: {
                        type: "text",
                        placeholder: "验证码"
                    },
                    domProps: {
                        value: e.captcha
                    },
                    on: {
                        focus: e.onFocusCap,
                        input: function(t) {
                            t.target.composing || (e.captcha = t.target.value)
                        }
                    }
                }), e._v(" "), e.captchaSrc ? i("img", {
                    staticClass: "captcha",
                    attrs: {
                        src: e.captchaSrc,
                        alt: "点击刷新"
                    },
                    on: {
                        click: e.reloadCaptcha
                    }
                }) : e._e(), e._v(" "), e.captchaSrc ? i("a", {
                    on: {
                        click: e.reloadCaptcha
                    }
                }, [e._v("换一张")]) : e._e(), e._v(" "), e.captchaTip ? i("div", {
                    staticClass: "text clearfix"
                }, [i("p", {
                    staticClass: "tips"
                }, [e._v(e._s(e.captchaTip))])]) : e._e()]) : e._e(), e._v(" "), 2 === e.captchaType ? i("div", {
                    staticClass: "item gc clearfix"
                }, [e.captchaTip ? i("div", {
                    staticClass: "text clearfix"
                }, [i("p", {
                    staticClass: "tips"
                }, [e._v(e._s(e.captchaTip))])]) : e._e()]) : e._e()]), e._v(" "), i("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: "message" === e.loginType,
                        expression: "loginType === 'message'"
                    }]
                }, [i("div", {
                    staticClass: "form-group status-box"
                }, [i("el-input", {
                    staticClass: "input-with-select input-width",
                    class: e.telTip && "error",
                    attrs: {
                        name: "tel",
                        placeholder: "填写常用手机号",
                        maxlength: "16"
                    },
                    model: {
                        value: e.tel,
                        callback: function(t) {
                            e.tel = t
                        },
                        expression: "tel"
                    }
                }, [i("el-select", {
                    attrs: {
                        slot: "prepend",
                        name: "country_code",
                        placeholder: "请选择国家"
                    },
                    slot: "prepend",
                    model: {
                        value: e.country_code,
                        callback: function(t) {
                            e.country_code = t
                        },
                        expression: "country_code"
                    }
                }, e._l(e.countryArr, function(e) {
                    return i("el-option", {
                        key: e.id,
                        attrs: {
                            label: e.cname,
                            value: e.id,
                            disabled: e.disabled
                        }
                    })
                }), 1)], 1), e._v(" "), i("span", {
                    class: {
                        status: !0,
                        error: e.telTip
                    }
                })], 1), e._v(" "), i("div", {
                    staticClass: "text clearfix"
                }, [i("p", {
                    staticClass: "tips"
                }, [e._v(e._s(e.telTip))])]), e._v(" "), i("div", {
                    staticClass: "form-group status-box"
                }, [i("el-input", {
                    staticClass: "code-input input-width",
                    class: e.messageCodeTip && "error",
                    attrs: {
                        placeholder: "请输入短信验证码",
                        maxlength: "8"
                    },
                    model: {
                        value: e.messageCode,
                        callback: function(t) {
                            e.messageCode = t
                        },
                        expression: "messageCode"
                    }
                }), e._v(" "), i("el-button", {
                    staticClass: "captcha-buttom",
                    attrs: {
                        type: "primary",
                        disabled: e.checkIsPass
                    },
                    on: {
                        click: e.getMessage
                    }
                }, [e._v(e._s(e.reqCHtml))]), e._v(" "), i("span", {
                    class: {
                        status: !0,
                        error: e.messageCodeTip
                    }
                })], 1), e._v(" "), i("div", {
                    staticClass: "text clearfix",
                    class: !e.messageCodeTip && e.messageCodeSuccess && "success"
                }, [i("p", {
                    staticClass: "tips"
                }, [e._v(e._s(e.messageCodeTip || e.messageCodeZZTip || e.messageCodeSuccess))])])]), e._v(" "), i("div", {
                    staticClass: "remember"
                }, [i("div", {
                    staticClass: "remember-tool"
                }, [i("label", [i("checkbox", {
                    staticClass: "remember-check",
                    model: {
                        value: e.keep,
                        callback: function(t) {
                            e.keep = t
                        },
                        expression: "keep"
                    }
                }), e._v("\n              记住我\n              "), i("span", [e._v("不是自己的电脑上不要勾选此项")])], 1), e._v(" "), i("div", [i("a", {
                    staticClass: "forget-password",
                    attrs: {
                        target: "_blank",
                        href: "//passport.bilibili.com/register/findpassword.html#/verify" + (e.gourl ? "?gourl=" + e.gourl : "")
                    }
                }, [e._v("忘记密码?")]), e._v(" "), 2 === e.captchaType ? i("a", {
                    staticClass: "not-checkout",
                    attrs: {
                        target: "_blank",
                        href: "//www.bilibili.com/blackboard/help.html#%E8%B4%A6%E5%8F%B7%E7%9B%B8%E5%85%B3"
                    }
                }, [e._v("无法验证?")]) : e._e()])]), e._v(" "), e.publicTip ? i("div", {
                    staticClass: "text clearfix"
                }, [i("p", {
                    staticClass: "tips"
                }, [e._v(e._s(e.publicTip))])]) : e._e(), e._v(" "), e.pcPasswordTip ? i("div", {
                    staticClass: "text clearfix"
                }, [i("p", {
                    staticClass: "tips"
                }, [e._v(e._s(e.pcPasswordTip))])]) : e._e()]), e._v(" "), i("div", {
                    staticClass: "btn-box"
                }, [i("a", {
                    staticClass: "btn btn-login",
                    on: {
                        click: e.submitLogin
                    }
                }, [e._v(e._s(e.bFlag ? "登录中..." : "登录"))]), e._v(" "), i("a", {
                    staticClass: "btn btn-reg",
                    attrs: {
                        href: "https://passport.bilibili.com/register/phone.html#/phone"
                    }
                }, [e._v("注册")])]), e._v(" "), i("div", {
                    staticClass: "sns"
                }, [i("a", {
                    staticClass: "btn weibo",
                    on: {
                        click: function(t) {
                            return e.snsLogin("weibo")
                        }
                    }
                }, [e._v("微博账号登录")]), e._v(" "), i("a", {
                    staticClass: "btn qq",
                    on: {
                        click: function(t) {
                            return e.snsLogin("qq")
                        }
                    }
                }, [e._v("QQ账号登录")])]), e._v(" "), e.snsErrorTips ? i("div", {
                    staticClass: "sns-tips"
                }, [e._v("操作失败：" + e._s(e.snsErrorTips))]) : e._e()])]), e._v(" "), e.maskFlag ? i("popup-app", {
                    attrs: {
                        title: "请输入验证码",
                        "yes-btn": "确定",
                        "cancel-btn": "取消",
                        src: e.captchaSrc
                    },
                    on: {
                        "refresh-event": e.reloadCaptcha,
                        dataFlag: e.showMaskFlag
                    }
                }) : e._e()], 1)
            },
            staticRenderFns: []
        };
        var D = i("VU/8")(R, I, !1, function(e) {
            i("HwDN"),
                i("hchY"),
                i("gZWm")
        }, null, null).exports
            , U = i("woOf")
            , M = i.n(U)
            , P = i("yAL6")
            , V = i("5LJk")
            , N = i("wNxv")
            , H = i("P9vI")
            , G = i("VQ0Z")
            , B = i("tiJS")
            , Q = {
            components: {
                HeaderTitle: N.a,
                InputGroup: P.a,
                SelectList: H.a,
                Verify: V.a
            },
            watch: {
                selectedCountry: function(e) {
                    for (var t = 0; t < this.countryArr.length; t++)
                        this.countryArr[t].id === e && (this.messageList.tel.title = "+" + this.countryArr[t].country_id)
                },
                loginType: function(e) {
                    "message" === e && Object(f.k)("smsloginh5_show"),
                        this.checkEmpty()
                }
            },
            data: function() {
                return {
                    sendTelNumber: "",
                    checkCountry: "",
                    loginType: "message",
                    canGetCaptch: 60,
                    countryArr: [{
                        id: 1,
                        cname: "中国大陆",
                        country_id: "86"
                    }],
                    messageList: {
                        tel: {
                            key: "tel",
                            groupKey: "messageList",
                            title: "+86",
                            placeholder: "请输入常用手机号",
                            name: "tel",
                            type: "tel",
                            value: "",
                            error: !1,
                            needBtn: !0,
                            btnText: "获取验证码",
                            autocomplete: "off",
                            btnEvent: "send-sms",
                            btnDisabled: !1,
                            maxlength: 16,
                            int: !0,
                            disabled: !1
                        },
                        captcha: {
                            key: "captcha",
                            groupKey: "messageList",
                            title: "验证码",
                            placeholder: "请输入验证码",
                            autocomplete: "off",
                            name: "captcha",
                            type: "tel",
                            value: "",
                            error: !1,
                            maxlength: 6,
                            int: !0,
                            disabled: !1
                        }
                    },
                    selectedCountry: 1,
                    formList: {
                        username: {
                            key: "username",
                            groupKey: "formList",
                            title: "账号",
                            placeholder: "你的手机号/邮箱",
                            name: "username",
                            value: "",
                            error: !1
                        },
                        passport: {
                            key: "passport",
                            groupKey: "formList",
                            title: "密码",
                            placeholder: "请输入密码",
                            type: "password",
                            name: "password",
                            value: "",
                            error: !1,
                            maxlength: 20
                        }
                    },
                    submitDisabled: !0,
                    verifyShow: !1,
                    loginFlag: !0,
                    isneedregister: !0,
                    username: "",
                    password: "",
                    captchaSrc: "//passport.bilibili.com/web/captcha/img?t=",
                    randomHash: Math.random(),
                    keep: !0,
                    snsErrorTips: "",
                    usernameTip: "",
                    pcPasswordTip: "",
                    passwordTip: "",
                    userAndPassError: !1,
                    publicTip: "",
                    captchaTip: "",
                    captchaType: 1,
                    gcObj: null,
                    gcData: null,
                    urlKey: "",
                    bFlag: !1,
                    windowHeight: window.screen.height,
                    gch5: !1,
                    key: "",
                    gourl: "",
                    hasLoginChoice: !0
                }
            },
            methods: {
                showToast: B.a,
                showVerify: function() {
                    this.verifyShow = !0
                },
                showGee: function() {
                    this.gcObj.verify()
                },
                formatTel: function() {
                    var e = this
                        , t = this.messageList.tel.value;
                    return new g.a(function(i) {
                            t ? 1 !== e.selectedCountry || 11 === t.length && "1" === t[0] ? i() : (e.showToast("手机号格式错误"),
                                e.messageList.tel.error = !0) : (e.showToast("手机号不能为空哦"),
                                e.messageList.tel.error = !0)
                        }
                    )
                },
                quickCheck: function() {
                    var e = this;
                    return new g.a(function(t) {
                            e.formatTel().then(function() {
                                var i = e.messageList.tel.value
                                    , s = e.messageList.captcha.value;
                                e.sendTelNumber && e.sendTelNumber !== i ? (e.showToast("手机号与验证码不匹配，请重新确认"),
                                    e.messageList.tel.error = !0) : e.checkCountry && e.checkCountry !== e.selectedCountry ? (e.showToast("区号不一致，请重新确认"),
                                    e.messageList.tel.error = !0) : s ? t() : (e.showToast("短信验证码不能为空"),
                                    e.messageList.captcha.error = !0)
                            })
                        }
                    )
                },
                quickLogin: function() {
                    var e = this;
                    this.bFlag = !0;
                    var t = decodeURIComponent(Object(f.h)("gourl"))
                        , i = {
                        cid: this.selectedCountry,
                        tel: this.messageList.tel.value,
                        smsCode: this.messageList.captcha.value,
                        source: "main-web",
                        goUrl: t || (document.referrer || ""),
                        keep: this.keep,
                        degrade: !0
                    };
                    L(i).then(function(t) {
                        var s = t.data;
                        e.bFlag = !1,
                        0 !== s.code && Object(f.k)("smsloginh5_failure", s.code),
                            0 === s.code && s.data ? s.data.is_new ? (Object(f.k)("smsloginh5_success", 2),
                                j(i).then(function(t) {
                                    var i = t.data;
                                    0 === i.code ? window.location.href = i.data.goUrl : 1101 === i.code ? (e.messageList.tel.error = !0,
                                        e.showToast(i.message)) : 1006 === i.code || 1007 === i.code || 1005 === i.code ? (e.messageList.captcha.error = !0,
                                        e.showToast(i.message)) : e.showToast(i.message)
                                }).catch(function() {
                                    e.showToast("网络错误，登录失败")
                                })) : (Object(f.k)("smsloginh5_success", 1),
                                s.data.status,
                                window.location.href = s.data.url) : 1101 === s.code ? (e.messageList.tel.error = !0,
                                e.showToast(s.message)) : 1006 === s.code || 1007 === s.code || 1005 === s.code ? (e.messageList.captcha.error = !0,
                                e.showToast(s.message)) : e.showToast(s.message)
                    }).catch(function() {
                        e.bFlag = !1,
                            e.showToast("网络错误，登录失败")
                    })
                },
                closeVerify: function() {
                    this.verifyShow = !1
                },
                sendBtn: function() {
                    var e = this;
                    Object(f.k)("smsloginh5_sms_click"),
                        this.formatTel().then(function() {
                            1 === e.captchaType ? e.showVerify() : e.gcObj.verify()
                        })
                },
                urlGetJson: function(e) {
                    for (var t = e.substring(e.indexOf("?") + 1, e.length).split("&"), i = {}, s = 0; s < t.length; s++) {
                        var n = t[s].split("=");
                        i[n[0]] = n[1]
                    }
                    return i
                },
                checkEmpty: function() {
                    "pwds" === this.loginType ? this.formList.username.value && this.formList.passport.value ? this.submitDisabled = !1 : this.submitDisabled = !0 : "message" === this.loginType && (this.messageList.tel.value && this.messageList.captcha.value ? this.submitDisabled = !1 : this.submitDisabled = !0)
                },
                checkAll: function() {
                    var e = this;
                    return new g.a(function(t) {
                            e.formList.username.value ? e.formList.passport.value ? t() : e.showToast("密码不能为空") : e.showToast("账号不能为空")
                        }
                    )
                },
                sendHandle: function(e) {
                    var t = this;
                    if (e || 1 !== this.captchaType) {
                        var i = {}
                            , s = {
                            key: this.key,
                            captchaType: 6,
                            type: 21
                        };
                        s.cid = this.selectedCountry,
                            s.tel = this.messageList.tel.value,
                            2 === this.captchaType ? i = M()({}, s, this.gcData) : 1 === this.captchaType && (s.captcha = e,
                                i = M()({}, s)),
                            E(i).then(function(e) {
                                return t.sendCb(e)
                            }).catch(function() {
                                2 === t.captchaType ? Object(f.k)("smsloginh5_geetest_failure", "服务器出错") : 1 === t.captchaType && Object(f.k)("smsloginh5_captcha_failure", "服务器出错"),
                                    t.showToast("服务器出错")
                            })
                    } else
                        this.$refs.verify.captchaErr("验证码不能为空")
                },
                sendCb: function(e) {
                    var t = this
                        , i = e.data;
                    if (Object(f.k)("register_smscaptcha", i.code),
                    0 !== i.code && (2 === this.captchaType ? Object(f.k)("smsloginh5_geetest_failure", i.code) : 1 === this.captchaType && Object(f.k)("smsloginh5_captcha_failure", i.code)),
                    2400 === i.code)
                        this.initFn(),
                            this.closeVerify(),
                            this.showToast("验证失败，请重试");
                    else if (2403 === i.code || 2402 === i.code || 2401 === i.code)
                        this.messageList.tel.btnText = "获取验证码",
                            this.messageList.tel.btnDisabled = !1,
                            this.$refs.verify.captchaErr(i.message);
                    else if (1101 === i.code || 1002 === i.code || 1100 === i.code)
                        this.messageList.tel.btnText = "获取验证码",
                            this.messageList.tel.btnDisabled = !1,
                            this.messageList.tel.error = !0,
                            this.showToast(i.message),
                            this.closeVerify();
                    else if (0 !== i.code)
                        this.messageList.tel.btnText = "获取验证码",
                            this.messageList.tel.btnDisabled = !1,
                            this.showToast(i.message),
                            this.closeVerify();
                    else {
                        2 === this.captchaType ? Object(f.k)("smsloginh5_geetest_success") : 1 === this.captchaType && Object(f.k)("smsloginh5_captcha_success"),
                            this.showToast(i.message),
                            this.sendTelNumber = this.messageList.tel.value,
                            this.checkCountry = this.selectedCountry;
                        var s = setInterval(function() {
                            if (t.canGetCaptch-- <= 0)
                                return clearInterval(s),
                                    t.messageList.tel.btnText = "获取验证码",
                                    t.messageList.tel.btnDisabled = !1,
                                    t.canGetCaptch = 60,
                                    t.isSend = !1,
                                    !1;
                            t.messageList.tel.btnText = t.canGetCaptch + "s后重试",
                                t.messageList.tel.btnDisabled = !0,
                                t.isSend = !0
                        }, 1e3);
                        this.closeVerify()
                    }
                },
                handleVerify: function() {
                    1 === this.captchaType ? this.showVerify() : this.showGee()
                },
                reloadCaptcha: function() {
                    this.randomHash = Math.random()
                },
                login: function(e) {
                    var t = this;
                    if (e || 1 !== this.captchaType) {
                        if (!this.bFlag) {
                            this.bFlag = !0;
                            var i = decodeURIComponent(Object(f.h)("gourl"))
                                , s = {}
                                , n = this.encryptPassword(this.formList.passport.value)
                                , a = {
                                captchaType: 6,
                                key: this.key,
                                username: this.formList.username.value,
                                password: n,
                                keep: this.keep,
                                goUrl: i || document.referrer || ""
                            };
                            2 === this.captchaType ? s = M()(a, this.gcData) : (a.captcha = e,
                                s = a),
                                S(s).then(function(e) {
                                    t.bFlag = !1;
                                    var i = e.data;
                                    if (t.gcData = null,
                                    -105 !== i.code && 2401 !== i.code && 2402 !== i.code && 2403 !== i.code && t.closeVerify(),
                                        i) {
                                        var s = i.code
                                            , n = i.data
                                            , a = i.message;
                                        switch (Object(f.k)("login_success", s),
                                            s) {
                                            case -105:
                                                Object(f.k)("login_captch_fault"),
                                                    t.$refs.verify.captchaErr(a);
                                                break;
                                            case 2400:
                                                t.initCaptcha();
                                                break;
                                            case 2401:
                                            case 2402:
                                            case 2403:
                                                t.$refs.verify.captchaErr(a);
                                                break;
                                            case 2404:
                                                t.initCaptcha();
                                                break;
                                            case -629:
                                            case -628:
                                            case -652:
                                                t.showToast(a);
                                                break;
                                            case 0:
                                                n.isLogin ? window.location.href = n.goUrl : window.location.href = n.redirectUrl;
                                                break;
                                            case -2002:
                                                t.captchaType = 1;
                                                break;
                                            case -2100:
                                                var c = i.data
                                                    , o = ""
                                                    , r = 0;
                                                for (var l in c)
                                                    o += "gourl" == l ? (r > 0 ? "&" : "?") + l + "=" + encodeURIComponent(c[l]) : (r > 0 ? "&" : "?") + l + "=" + c[l],
                                                        r++;
                                                c.tel ? window.location.href = "//passport.bilibili.com/mobile/verifytel_h5.html" + o : !c.tel && c.email ? window.location.href = "//passport.bilibili.com/mobile/verifymail_h5.html" + o : window.location.href = "//passport.bilibili.com/mobile/verifyresult_h5.html" + o;
                                                break;
                                            case -2110:
                                                window.location.href = n;
                                                break;
                                            case -2111:
                                                window.location.href = n;
                                            default:
                                                t.showToast(a)
                                        }
                                    }
                                }).catch(function() {
                                    t.closeVerify(),
                                        t.showToast("网络错误"),
                                        t.bFlag = !1,
                                        t.gcData = null
                                })
                        }
                    } else
                        this.$refs.verify.captchaErr("验证码不能为空")
                },
                snsLogin: function(e) {
                    var t = this
                        , i = decodeURIComponent(Object(f.h)("gourl")) || document.referrer || "";
                    this.getCsrf(function(s) {
                        k.post("//passport.bilibili.com/login/" + e, {
                            gourl: i,
                            csrf: s
                        }).then(function(i) {
                            var s = i.data;
                            Object(f.k)("snsback_success", e + "_" + s.status),
                                s.status ? window.location.href = s.data : t.showToast(s.message)
                        })
                    })
                },
                getCsrf: function(e) {
                    var t = f.b.get("_jct");
                    t ? e(t) : k.post(x.passport.getCsrf).then(function(i) {
                        var s = i.data;
                        t = s.data.dfc,
                            e(t)
                    })
                },
                CountryList: function() {
                    G.a.common.push({
                        id: "",
                        cname: "--其它--",
                        country_id: "",
                        disabled: !0
                    });
                    for (var e = G.a.common.concat(G.a.others), t = 0; t < e.length; t++)
                        this.$set(this.countryArr, t, e[t]);
                    this.selectedCountry = this.countryArr[0].id
                },
                encryptPassword: function(e, t) {
                    var i = this
                        , s = !1;
                    return $.ajax({
                        url: "//passport.bilibili.com/login?act=getkey&r=" + Math.random(),
                        async: !1
                    }).done(function(t) {
                        t && t.error && (i.publicTip = "登录失败，服务端出现异常",
                            e = null);
                        var n = new JSEncrypt;
                        n.setPublicKey(t.key);
                        var a = n.encrypt(t.hash + e);
                        e = a,
                            s = !0
                    }),
                        s ? e : ""
                },
                initCaptcha: function() {
                    var e = this;
                    F({
                        plat: 6
                    }).then(function(t) {
                        var i = t.data;
                        0 === i.code && (e.key = i.data.result.key,
                            1 === i.data.type ? (e.captchaType = 2,
                                e.initGeeCode(i.data.result),
                                Object(f.k)("smsloginh5_geetest")) : (e.captchaType = 1,
                                Object(f.k)("login_captch_show"),
                                Object(f.k)("smsloginh5_captcha"))),
                            Object(f.k)("geetest_success", i.code)
                    }).catch(function() {
                        e.showToast("验证服务器错误，请刷新页面重试")
                    })
                },
                initGeeCode: function(e) {
                    var t = this;
                    window.initGeetest && window.initGeetest({
                        gt: e.gt,
                        challenge: e.challenge,
                        offline: !e.success,
                        new_captcha: !0,
                        next_width: "270px",
                        product: "bind"
                    }, function(e) {
                        t.gcObj = e,
                            e.onSuccess(function() {
                                var i = e.getValidate();
                                t.gcData = {
                                    challenge: i.geetest_challenge,
                                    validate: i.geetest_validate,
                                    seccode: i.geetest_seccode
                                },
                                    "pwds" === t.loginType ? t.login() : "message" === t.loginType && t.sendHandle(),
                                    setTimeout(function() {
                                        e.reset()
                                    }, 1e3)
                            }),
                            e.onError(function() {
                                t.initCaptcha(),
                                    Object(f.k)("login_geetest_error"),
                                    Object(f.k)("smsloginh5_geetest_failure")
                            })
                    })
                },
                groupErrorClear: function(e) {
                    this[e.groupKey][e.key].error = e.value
                },
                submitFn: function() {
                    var e = this;
                    this.submitDisabled || ("pwds" === this.loginType ? this.checkAll().then(function() {
                        return e.handleVerify()
                    }) : "message" === this.loginType && this.quickCheck().then(function() {
                        return e.quickLogin()
                    }))
                },
                refreshFn: function() {
                    this.randomNumber = Math.random()
                },
                verifyCaptcha: function(e) {
                    "pwds" === this.loginType ? this.login(e) : "message" === this.loginType && this.sendHandle(e)
                },
                setOnlyLoginType: function(e) {
                    this.hasLoginChoice = !1,
                        this.loginType = e
                }
            },
            created: function() {
                this.CountryList()
            },
            mounted: function() {
                $.ajax({
                    url: "//api.bilibili.com/nav",
                    type: "get",
                    dataType: "jsonp",
                    data: {
                        type: "jsonp"
                    }
                }).done(function(e) {
                    if (e && e.data && e.data.isLogin) {
                        var t = decodeURIComponent(Object(f.h)("gourl"))
                            , i = document.referrer
                            , s = t || i
                            , n = new RegExp("^http(s)?://(([a-z-0-9A-Z])*.)?(bilibili.(com|tv)|biligame.(com|cn)|(bigfunapp|bigfun).(cn))($|/|\\\\)");
                        s && -1 == s.indexOf("passport.bilibili.com/login") && -1 == s.indexOf("findpassword.html") && n.test(s) ? window.location.href = s : window.location.href = "//www.bilibili.com"
                    }
                });
                var e = window.location.toString()
                    , t = this.urlGetJson(e);
                this.urlKey = [],
                    "game" === t.type && this.isMobile ? (this.loginFlag = !1,
                        this.urlKey.push("type=game")) : "gamenoregister" === t.type && this.isMobile && (this.loginFlag = !1,
                        this.isneedregister = !1),
                "pwd" === t.logintype && this.setOnlyLoginType("pwds");
                var i = t.gourl
                    , s = document.referrer;
                e = i || s || "";
                this.gourl = e,
                e && this.urlKey.push("gourl=" + e),
                    this.urlKey = this.urlKey.join("&"),
                this.urlKey.length && (this.urlKey = "?" + this.urlKey),
                    this.initCaptcha()
            }
        }
            , z = {
            render: function() {
                var e = this
                    , t = e.$createElement
                    , i = e._self._c || t;
                return i("div", [i("div", {
                    staticClass: "container"
                }, [i("header-title", {
                    attrs: {
                        title: "登录bilibili"
                    }
                }, [i("template", {
                    slot: "right"
                }, [e.hasLoginChoice ? i("div", {
                    staticClass: "title-right"
                }, [i("span", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: "pwds" === e.loginType,
                        expression: "loginType === 'pwds'"
                    }, {
                        name: "report",
                        rawName: "v-report",
                        value: "pwdloginh5_smslogin_click",
                        expression: "'pwdloginh5_smslogin_click'"
                    }],
                    on: {
                        click: function(t) {
                            e.loginType = "message"
                        }
                    }
                }, [e._v("短信登录")]), e._v(" "), i("span", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: "message" === e.loginType,
                        expression: "loginType === 'message'"
                    }],
                    on: {
                        click: function(t) {
                            e.loginType = "pwds"
                        }
                    }
                }, [e._v("密码登录")])]) : e._e()])], 2), e._v(" "), i("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: "message" === e.loginType,
                        expression: "loginType === 'message'"
                    }]
                }, [i("div", {
                    staticClass: "form-group"
                }, [i("select-list", {
                    attrs: {
                        data: e.countryArr,
                        name: "country_code"
                    },
                    model: {
                        value: e.selectedCountry,
                        callback: function(t) {
                            e.selectedCountry = t
                        },
                        expression: "selectedCountry"
                    }
                })], 1), e._v(" "), i("div", {
                    staticClass: "form-group"
                }, [i("input-group", {
                    on: {
                        input: e.checkEmpty,
                        "clear-error": e.groupErrorClear,
                        "send-sms": e.sendBtn
                    },
                    model: {
                        value: e.messageList,
                        callback: function(t) {
                            e.messageList = t
                        },
                        expression: "messageList"
                    }
                })], 1), e._v(" "), i("div", {
                    staticClass: "btn-box clearfix"
                }, [i("div", {
                    directives: [{
                        name: "report",
                        rawName: "v-report",
                        value: "smsloginh5_submit_click",
                        expression: "'smsloginh5_submit_click'"
                    }],
                    class: ["btn-default", "btn-width", e.submitDisabled && "btn-default-disable", "btn-full"],
                    on: {
                        click: e.submitFn
                    }
                }, [e._v("验证登录")])])]), e._v(" "), i("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: "pwds" === e.loginType,
                        expression: "loginType === 'pwds'"
                    }]
                }, [i("div", {
                    staticClass: "form-group"
                }, [i("input-group", {
                    on: {
                        input: e.checkEmpty,
                        "clear-error": e.groupErrorClear
                    },
                    model: {
                        value: e.formList,
                        callback: function(t) {
                            e.formList = t
                        },
                        expression: "formList"
                    }
                })], 1), e._v(" "), e.loginFlag || e.isneedregister ? i("div", {
                    staticClass: "forget-group"
                }, [i("p", [i("a", {
                    directives: [{
                        name: "report",
                        rawName: "v-report",
                        value: "login_resetpassword_click",
                        expression: "'login_resetpassword_click'"
                    }],
                    staticClass: "pink-color",
                    attrs: {
                        href: "//passport.bilibili.com/account/findpassword.html" + (e.gourl ? "?gourl=" + e.gourl : "")
                    }
                }, [e._v("忘记密码")])])]) : e._e(), e._v(" "), i("div", {
                    staticClass: "btn-box clearfix"
                }, [e.loginFlag || e.isneedregister ? i("a", {
                    directives: [{
                        name: "report",
                        rawName: "v-report",
                        value: "login_register_click",
                        expression: "'login_register_click'"
                    }],
                    staticClass: "btn-primary btn-width",
                    attrs: {
                        href: "//passport.bilibili.com/register/phone.html#/phone" + e.urlKey
                    }
                }, [e._v("注册")]) : e._e(), e._v(" "), i("div", {
                    directives: [{
                        name: "report",
                        rawName: "v-report",
                        value: "login_click",
                        expression: "'login_click'"
                    }],
                    class: ["btn-default", "btn-width", e.submitDisabled && "btn-default-disable", !(e.loginFlag || e.isneedregister) && "btn-full"],
                    on: {
                        click: e.submitFn
                    }
                }, [e._v("登录")])])]), e._v(" "), e._m(0), e._v(" "), e.loginFlag ? i("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: "pwds" === e.loginType,
                        expression: "loginType === 'pwds'"
                    }],
                    staticClass: "sns-box"
                }, [e._m(1), e._v(" "), i("div", {
                    staticClass: "sns-btn"
                }, [i("div", {
                    directives: [{
                        name: "report",
                        rawName: "v-report",
                        value: "login_snsqq_click",
                        expression: "'login_snsqq_click'"
                    }],
                    on: {
                        click: function(t) {
                            return e.snsLogin("qq")
                        }
                    }
                }, [i("div", {
                    staticClass: "icon-qq"
                }), e._v(" "), i("span", {
                    staticClass: "tips"
                }, [e._v("QQ")])]), e._v(" "), i("div", {
                    directives: [{
                        name: "report",
                        rawName: "v-report",
                        value: "login_snsweibo_click",
                        expression: "'login_snsweibo_click'"
                    }],
                    on: {
                        click: function(t) {
                            return e.snsLogin("weibo")
                        }
                    }
                }, [i("div", {
                    staticClass: "icon-weibo"
                }), e._v(" "), i("span", {
                    staticClass: "tips"
                }, [e._v("微博")])])])]) : e._e()], 1), e._v(" "), i("verify", {
                    ref: "verify",
                    attrs: {
                        show: e.verifyShow,
                        src: e.captchaSrc + e.randomHash + "&key=" + e.key
                    },
                    on: {
                        "close-verify": e.closeVerify,
                        "res-verify": e.verifyCaptcha,
                        "refresh-event": e.reloadCaptcha
                    }
                })], 1)
            },
            staticRenderFns: [function() {
                var e = this.$createElement
                    , t = this._self._c || e;
                return t("p", {
                    staticClass: "explain tips"
                }, [this._v("登录即代表你同意"), t("a", {
                    attrs: {
                        target: "_blank",
                        href: "https://www.bilibili.com/blackboard/account-useragreement.html"
                    }
                }, [this._v("用户协议")]), this._v("和"), t("a", {
                    attrs: {
                        target: "_blank",
                        href: "https://www.bilibili.com/blackboard/privacy-h5.html"
                    }
                }, [this._v("隐私政策")])])
            }
                , function() {
                    var e = this.$createElement
                        , t = this._self._c || e;
                    return t("div", {
                        staticClass: "sns-title clearfix"
                    }, [t("div", {
                        staticClass: "line-box"
                    }, [t("span")]), this._v(" "), t("div", {
                        staticClass: "sns-content"
                    }, [t("p", {
                        staticClass: "tips"
                    }, [this._v("\n              其它登录方式\n            ")])]), this._v(" "), t("div", {
                        staticClass: "line-box"
                    }, [t("span")])])
                }
            ]
        };
        var J = i("VU/8")(Q, z, !1, function(e) {
            i("AtVO"),
                i("/jc2"),
                i("mfDR"),
                i("8Yml")
        }, "data-v-2022198d", null).exports
            , K = {
            data: function() {
                return {
                    qrcodeStatus: "normal",
                    showTips: !1,
                    loop: null,
                    cd: null,
                    key: null,
                    refer: null,
                    cdTime: 18e4,
                    loopTime: 3e3
                }
            },
            mounted: function() {
                this.getQrcode()
            },
            methods: {
                showAndHideTips: function(e) {
                    "normal" == this.qrcodeStatus && ("mouseenter" === e.type && (this.showTips = !0),
                    "mouseleave" === e.type && (this.showTips = !1))
                },
                getQrcode: function() {
                    var e = this;
                    $.ajax({
                        url: "https://passport.bilibili.com/qrcode/getLoginUrl",
                        dataType: "json"
                    }).done(function(t) {
                        if (t.status) {
                            e.refer ? (e.refer.clear(),
                                e.refer.makeCode(t.data.url)) : e.$nextTick(function() {
                                e.refer = new QRCode(e.$refs.qrcode,{
                                    text: t.data.url,
                                    width: 140,
                                    height: 140
                                })
                            }),
                                e.key = t.data.oauthKey;
                            var i = decodeURIComponent(Object(f.h)("gourl"));
                            clearTimeout(e.cd),
                                e.cd = setTimeout(e.expire, e.cdTime),
                                clearInterval(e.loop),
                                e.loop = setInterval(function() {
                                    $.ajax({
                                        url: "https://passport.bilibili.com/qrcode/getLoginInfo",
                                        dataType: "json",
                                        type: "POST",
                                        data: {
                                            oauthKey: e.key,
                                            gourl: i || (document.referrer || "")
                                        }
                                    }).done(function(t) {
                                        t.status ? (reportMsgObj.qrcodescan_login = "success",
                                        window.reportObserver && window.reportObserver.forceCommit && window.reportObserver.forceCommit(),
                                            window.location.href = t.data.url) : t.status || -2 != t.message ? t.status || -5 != t.data || e.scanSucess() : e.expire()
                                    })
                                }, e.loopTime)
                        }
                    })
                },
                expire: function() {
                    clearInterval(this.loop),
                        this.qrcodeStatus = "overdue"
                },
                scanSucess: function() {
                    this.qrcodeStatus = "success"
                },
                reloadQrcode: function() {
                    this.qrcodeStatus = "normal",
                        this.getQrcode()
                }
            }
        }
            , Y = {
            render: function() {
                var e = this
                    , t = e.$createElement
                    , i = e._self._c || t;
                return i("div", {
                    staticClass: "qrcode-login"
                }, [i("div", {
                    staticClass: "qrcode-con"
                }, [i("i", {
                    staticClass: "tv-icon"
                }), e._v(" "), i("div", {
                    staticClass: "qrcode-box",
                    on: {
                        mouseenter: e.showAndHideTips,
                        mouseleave: e.showAndHideTips
                    }
                }, [i("div", {
                    class: e.showTips ? "qrcode-tips mouseenter" : "qrcode-tips"
                }), e._v(" "), i("div", {
                    ref: "qrcode",
                    staticClass: "qrcode-img"
                }), e._v(" "), "normal" != e.qrcodeStatus ? i("div", {
                    staticClass: "status"
                }, ["overdue" === e.qrcodeStatus ? i("div", {
                    staticClass: "overdue",
                    on: {
                        click: e.reloadQrcode
                    }
                }, [e._v("点击刷新")]) : e._e(), e._v(" "), "success" === e.qrcodeStatus ? i("div", {
                    staticClass: "success"
                }) : e._e()]) : e._e()])]), e._v(" "), i("div", {
                    staticClass: "qrcode-footer"
                }, ["normal" === e.qrcodeStatus ? i("p", {
                    staticClass: "status-txt"
                }, [e._v("扫描二维码登录")]) : e._e(), e._v(" "), "overdue" === e.qrcodeStatus ? i("p", {
                    staticClass: "status-txt"
                }, [e._v("二维码已失效")]) : e._e(), e._v(" "), "success" === e.qrcodeStatus ? i("p", {
                    staticClass: "status-txt"
                }, [e._v("扫描成功")]) : e._e(), e._v(" "), "success" != e.qrcodeStatus ? i("p", {
                    staticClass: "app-link"
                }, [e._v("请使用 "), i("a", {
                    attrs: {
                        href: "//app.bilibili.com/",
                        target: "_blank"
                    }
                }, [e._v("哔哩哔哩客户端")]), i("br"), e._v("扫码登录"), i("br"), e._v("或扫码下载APP")]) : e._e(), e._v(" "), "success" === e.qrcodeStatus ? i("p", {
                    staticClass: "suc-txt"
                }, [e._v("请在手机上确认是否授权")]) : e._e()])])
            },
            staticRenderFns: []
        };
        var X = i("VU/8")(K, Y, !1, function(e) {
            i("DMAq")
        }, null, null).exports
            , Z = {
            components: {
                TopBanner: p.a,
                TitleLine: h.a,
                FormLogin: D,
                FormLoginMobile: J,
                QrcodeLogin: X
            }
        }
            , W = {
            render: function() {
                var e = this
                    , t = e.$createElement
                    , i = e._self._c || t;
                return i("div", {
                    staticClass: "login-app",
                    class: !e.isMobile && "bottom-filling"
                }, [e.isMobile ? e._e() : i("div", {
                    staticClass: "z-top-container"
                }), e._v(" "), e.isMobile ? i("form-login-mobile") : i("div", [i("top-banner"), e._v(" "), i("title-line", {
                    attrs: {
                        title: "登录"
                    }
                }), e._v(" "), i("div", {
                    staticClass: "login-box clearfix"
                }, [i("div", {
                    staticClass: "login-left"
                }, [i("qrcode-login")], 1), e._v(" "), i("div", {
                    staticClass: "line"
                }), e._v(" "), i("div", {
                    staticClass: "login-right"
                }, [i("form-login")], 1)]), e._v(" "), i("p", [e._v("登录即代表你同意"), i("a", {
                    attrs: {
                        target: "_blank",
                        href: "https://www.bilibili.com/protocal/licence.html"
                    }
                }, [e._v("用户协议")]), e._v("和"), i("a", {
                    attrs: {
                        target: "_blank",
                        href: "https://www.bilibili.com/blackboard/privacy-pc.html"
                    }
                }, [e._v("隐私政策")])])], 1), e._v(" "), e.isMobile ? e._e() : i("div", {
                    staticClass: "footer bili-footer"
                })], 1)
            },
            staticRenderFns: []
        };
        var ee = i("VU/8")(Z, W, !1, function(e) {
            i("DDo8"),
                i("S1Q3")
        }, "data-v-2c844fd9", null).exports
            , te = i("AXdl");
        i("zn0M");
        i("hKoQ").polyfill();
        var ie = /AppleWebKit.*Mobile.*/i.test(navigator.userAgent);
        if (u.default.config.productionTip = !1,
            u.default.prototype.isMobile = ie,
            u.default.use(te.a),
            u.default.use(d.a),
            u.default.use(r.a),
            u.default.use(c.a),
            u.default.use(n.a),
            u.default.directive("report", {
                bind: function(e, t) {
                    e.addEventListener("click", function() {
                        Object(f.k)(t.value)
                    }, {
                        passive: !1
                    })
                }
            }),
            ie) {
            var se = document.getElementsByTagName("BODY")[0];
            "true" === Object(f.h)("night") ? (Object(f.i)(se, "bili-day"),
                Object(f.a)(se, "bili-night")) : (Object(f.i)(se, "bili-night"),
                Object(f.a)(se, "bili-day"));
            var ne = function() {
                var e = document.documentElement.clientWidth / 10;
                document.documentElement.style.fontSize = (e >= 54 ? 54 : e) + "px"
            };
            window.addEventListener("resize", ne, !1),
                ne()
        }
        new u.default({
            el: "#login-app",
            components: {
                App: ee
            }
        })
    },
    mfDR: function(e, t) {},
    oIHz: function(e, t) {},
    oPmM: function(e, t) {},
    p80c: function(e, t) {},
    qt6u: function(e, t, i) {
        "use strict";
        i("oPmM");
        var s = {
            name: "InputText",
            model: {
                prop: "data",
                event: "input-emit"
            },
            props: ["data", "options"],
            data: function() {
                return {
                    value: "",
                    randomRef: "text_" + Math.random()
                }
            },
            watch: {
                data: function() {
                    this.value = this.data
                }
            },
            methods: {
                focusFn: function(e) {
                    this.$emit("focus", e)
                },
                blurFn: function(e) {
                    this.$emit("blur", e)
                },
                emitFn: function() {
                    this.options.btnEvent && !this.options.btnDisabled && (this.$emit(this.options.btnEvent),
                        this.$emit("btn-click-gruop", {
                            event: this.options.btnEvent
                        }))
                },
                clearValue: function() {
                    this.value = "",
                        this.handerFn()
                },
                handerFn: function(e) {
                    this.$emit("clear-error", {
                        key: this.options.key,
                        groupKey: this.options.groupKey,
                        value: !1
                    }),
                        this.$emit("input-emit", this.value),
                        e ? this.$emit("input", e) : this.$emit("input", this.value)
                },
                inputFn: function(e) {
                    var t = void 0;
                    t = this.options.int ? e.target.value = e.target.value.replace(/\D/g, "") : e.target.value,
                        this.value = t,
                        this.handerFn(e)
                }
            },
            created: function() {
                this.options.int ? this.value = this.data.replace(/\D/g, "") : this.value = this.data,
                    this.$emit("input-emit", this.value)
            }
        }
            , n = {
            render: function() {
                var e = this
                    , t = e.$createElement
                    , i = e._self._c || t;
                return i("div", {
                    class: {
                        "input-item": !0,
                        clearfix: !0,
                        "text-box-color": !0,
                        "has-button": e.options.needBtn
                    }
                }, [i("span", {
                    staticClass: "float-left input-title text-title-color"
                }, [e._v(e._s(e.options.title))]), e._v(" "), i("input", {
                    ref: e.randomRef,
                    class: {
                        "float-left": !0,
                        "input-text": !0,
                        "text-title-color": !0,
                        "long-width": !e.options.needBtn,
                        shake: e.options.error,
                        animated: e.options.error,
                        "error-text": e.options.error
                    },
                    attrs: {
                        placeholder: e.options.placeholder,
                        maxlength: e.options.maxlength,
                        type: e.options.type ? e.options.type : "text",
                        name: e.options.name,
                        disabled: e.options.disabled,
                        autocomplete: e.options.autocomplete || "on"
                    },
                    domProps: {
                        value: e.value
                    },
                    on: {
                        input: e.inputFn,
                        change: e.inputFn,
                        focus: function(t) {
                            return e.focusFn(e.options.name)
                        },
                        blur: function(t) {
                            return e.blurFn(e.options.name)
                        }
                    }
                }), e._v(" "), i("div", {
                    staticClass: "float-left input-status clearfix"
                }, [e.value ? i("span", {
                    on: {
                        click: e.clearValue
                    }
                }) : e._e()]), e._v(" "), e.options.needBtn ? i("button", {
                    class: {
                        "input-btn": !0,
                        "text-btn-color": !0,
                        "text-btn-disabled": e.options.btnDisabled,
                        "float-left": !0
                    },
                    style: {
                        color: e.options.btnColor
                    },
                    on: {
                        click: e.emitFn
                    }
                }, [e._v(e._s(e.options.btnText))]) : e._e()])
            },
            staticRenderFns: []
        };
        var a = i("VU/8")(s, n, !1, function(e) {
            i("BRnU")
        }, "data-v-15db3d56", null);
        t.a = a.exports
    },
    tiJS: function(e, t, i) {
        "use strict";
        var s = i("7+uW")
            , n = {
            name: "toast",
            data: function() {
                return {
                    text: "",
                    show: !1
                }
            },
            methods: {
                showFn: function() {
                    var e = this;
                    this.show = !0,
                        setTimeout(function() {
                            e.show = !1
                        }, 3e3)
                }
            }
        }
            , a = {
            render: function() {
                var e = this.$createElement
                    , t = this._self._c || e;
                return t("transition", {
                    attrs: {
                        name: "fade"
                    }
                }, [this.show ? t("div", {
                    staticClass: "toast-box"
                }, [this._v("\n    " + this._s(this.text) + "\n  ")]) : this._e()])
            },
            staticRenderFns: []
        };
        var c = i("VU/8")(n, a, !1, function(e) {
            i("Q5U+")
        }, "data-v-b64cb50e", null).exports
            , o = s.default.extend(c)
            , r = null;
        t.a = function(e) {
            r || (r = new o({
                el: document.createElement("div")
            }),
                document.body.appendChild(r.$el)),
                r.$data.text = e || "",
                r.showFn()
        }
    },
    vP2K: function(e, t) {},
    "vn/I": function(e, t) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAkCAYAAAGS8ngzAAAABGdBTUEAALGPC/xhBQAABjNJREFUWAnFmNtvVUUUxnt6DmpbTUMs4qutTail0Bv6YCQR8IYPbdF3E2ttjMaCD7USSRQUUUwgmgii8Bd4K5FqQkAkvqi9grXEUp980prSlKTVnvb4+6Z7trP3mbN7NCbuZDpr1vrWmnWZvfaclpR4npTLGxwczLHuKBVzeHj4Mc2tra2p0tLStGEuLy9/JKYe6O4VqtBf7FVZWWZoaOgkiw5sbWOeliCTSqUGmpubO7UYGRlpXFpa+iWD4Z/E0AP9FR6szfDn8ujoaD2MDYzQixUYf7F/TgvrN+tdodASQYR2aWYfLwJYdWEtaGtLF1QCMBEXmtyK6WhviK1LIqUiujkAFSRwPenIkZ7psbGxjVJSJtscS4aHbwfhTWmRgmhXTUn9x0bq/LH5c1irkNqK0ePCcrlcWnyXZ2gc77UC5vfyAI7QaLPO5oFcBoAzsXXODQL6STANLkZ0Js4I1n3yoLKy8qba2to/XAz8q8R1B7lOu/wIDWhRBojzuARBIg65IORrGAfEm5iYuBU6G+h0ubgITVEfiDBiCxkl1HUx9sqxkXVXkE6n725qavre5cVpIljGe/fYXTE5I/6QieE+XtrvUA55HkOHMXS9rKysqr6+/s+43Jx6djOvr4TQe6zHhL1FPOadlqc1oW7WmvG51t4HQxdcJdH2aCDrcGVeA0lMKTPakzBFyVQ1DOV1BZ9y2CmsEMUGQnHPzVZkpns4GG+O8oxxLKqp1AmrGJ/Z6Cy8R+N8rfOMcb764S/hoek6rtL4+PgNbLSDJtTo8i1tjLHbJobbxW8HUE2fu42+N8Uwh3p+fn4a+hrdbMwaYNMPLG0OLYAtNMoPMahTvV4Nk8TvX1xcnIH+FbDZFNwxDO2VMkbUn55hLDFMjiOnHMBVBDWMQxh5idn7gDOeYnxXS0vLp16QmACr8K5QazJ6YB70GUjpHCFQ+c3DblMUYdSuC832jZCcFC0RyWf6CF9kHZ4jjCmEvCpLyT56V2kG8W9zJGUW+9/Mk5OTN1LROcbhJIsqAJjeOCZ0DeE5Er+NMGco/zpmldz7gN0N9oiEmUxmY2Nj43gIZKcz2o0RfnGC3R8WyPazAPO8VcRopFVZfmQGdFyKYqpqlmY2X60I2Fl4q0YI3bx/bQ7OkJTffK2UkrhM67zDCfAkxrLk7bRPAd4m5JcKyJLZhNZuw0xGJnyBVlN05dqQtX1HO/Q2uPJ/Q+elzGeEjdWynmLo6DWx8WUXpwsbb6VhiXZlonU7zmazaoFpju8pGk1nHBNfew9GHIQjXRg8L8OMS9S7I44ptOa4t+HUD4HuhWKckq2iHBMQg9uZjonmkH1CFvtEJz0E0EufMmUlsPcJ8P4kvCsLO4aYbKYPq/keYuhrRo/7FQowPcxHRVO2nci/EG0bgb2G8T4/QnkHJMPOHgIzOlrrYa8G+EcJctsKp2QAx8NvccQxAXQeiFIKOwIFGb4G/SpOvAtdsMVZvG/GXpoMPov+K9BrLYb1eda74+c2zzGroFkXgYWFBfXTl1negpG3iPxFF1MsjVNvYqcXG9eZX+cOfyR+hy/W1v+KMxmj3roRhh/guEdEmeM83WPPT1xe7FrnkHP3LRlLqtQVylpn+hibbkXhXl8P0qY4VtS1YzUHFRjONeNYjQ+LDzq/30iW5Hmoq3sjSq28FGeJZjEU/AOCqqwhwO2MIV6i31ZTNRnzgdREiextZNXcQQ2EjL4BYe6ePp1VePux18dQqxB0Cnsv4KT3oxzJGM48jaIuu+rwepTaExUVFfvq6up+FwO5/odzgMgz0HsLZTDI0EFwi5RwH7NpM/CroF/DVBf6tsFncbIbJ09pDz0Rx4Jv2nP8MPkSY/0rkL//6spLSSfhVDLmMFajsnBuGuEPCwmvGd1RlZ9P0RSb34wjM+Xl5bU2OOHsQ5D6yfEQe77jXu0ijlmwb8apzWwyHEQ5xe/eu+zvXt3acMxckXHscZw1/4HRRXZ2dvZH7FUzlLG8C4BvL/FsKgvJDV9RsfFo4JRegDutU0mKaqBga8hYeAEgu3m3Rp+NohzDIZWvn2w8wUbenzY+45anCwC6nTh4mjf7Z8tPmosuZZKR4OxdDDD34fx0Er4Y2V+P0m/a2YSyhgAAAABJRU5ErkJggg=="
    },
    wNxv: function(e, t, i) {
        "use strict";
        var s = {
            render: function() {
                var e = this.$createElement
                    , t = this._self._c || e;
                return t("div", {
                    staticClass: "header-box text-box-color text-title-color"
                }, [t("div", [this._t("left")], 2), this._v(" "), t("h1", [this._v("\n    " + this._s(this.title) + "\n  ")]), this._v(" "), t("div", [this._t("right")], 2)])
            },
            staticRenderFns: []
        };
        var n = i("VU/8")({
            name: "headertitle",
            props: ["title"]
        }, s, !1, function(e) {
            i("p80c")
        }, "data-v-30f9b046", null);
        t.a = n.exports
    },
    xXit: function(e, t, i) {
        "use strict";
        var s = {
            render: function() {
                var e = this
                    , t = e.$createElement
                    , i = e._self._c || t;
                return i("label", {
                    class: {
                        "checkbox-bwxr": "mobile" != e.type,
                        "checkbox-m-bwxr": "mobile" == e.type,
                        active: e.flag
                    }
                }, [i("input", {
                    attrs: {
                        name: e.name,
                        type: "checkbox"
                    },
                    domProps: {
                        checked: e.flag
                    },
                    on: {
                        change: function(t) {
                            return e.getValueFn(e.flag)
                        }
                    }
                })])
            },
            staticRenderFns: []
        };
        var n = i("VU/8")({
            name: "checkbox",
            model: {
                prop: "flag",
                event: "change"
            },
            props: ["flag", "type", "name"],
            methods: {
                getValueFn: function(e) {
                    var t = !e;
                    this.$emit("change", t)
                }
            }
        }, s, !1, function(e) {
            i("BHNi")
        }, "data-v-5641f300", null);
        t.a = n.exports
    },
    yAL6: function(e, t, i) {
        "use strict";
        var s = {
            name: "InputGroup",
            model: {
                prop: "data",
                event: "input-emit"
            },
            watch: {
                data: function(e) {
                    this.$emit("input-emit", e)
                }
            },
            props: ["data"],
            methods: {
                focusFn: function(e) {
                    this.$emit("focus", e)
                },
                blurFn: function(e) {
                    this.$emit("blur", e)
                },
                emitFn: function(e) {
                    this.$emit(e.event)
                },
                textErrorClear: function(e) {
                    this.$emit("clear-error", {
                        key: e.key,
                        groupKey: e.groupKey,
                        value: e.value
                    })
                },
                inputFn: function(e) {
                    this.$emit("input", e)
                }
            },
            components: {
                InputText: i("qt6u").a
            }
        }
            , n = {
            render: function() {
                var e = this
                    , t = e.$createElement
                    , i = e._self._c || t;
                return i("ul", {
                    staticClass: "list-group list-group-border"
                }, e._l(e.data, function(t, s) {
                    return i("li", {
                        key: s,
                        staticClass: "list-group-li"
                    }, [i("input-text", {
                        attrs: {
                            options: t
                        },
                        on: {
                            "clear-error": e.textErrorClear,
                            input: e.inputFn,
                            "btn-click-gruop": e.emitFn,
                            focus: e.focusFn,
                            blur: e.blurFn
                        },
                        model: {
                            value: t.value,
                            callback: function(i) {
                                e.$set(t, "value", i)
                            },
                            expression: "item.value"
                        }
                    })], 1)
                }), 0)
            },
            staticRenderFns: []
        };
        var a = i("VU/8")(s, n, !1, function(e) {
            i("8TL4")
        }, "data-v-886c0efa", null);
        t.a = a.exports
    },
    zn0M: function(e, t) {}
}, ["mTzT"]);
