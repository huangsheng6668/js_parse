var qrCodeLoginObj = {
        qrCode: null,
        qrcodeObj: null,
        qrCount: 0,
        qrTimmer: null,
        init: function () {
            this.get_qrcode(), this.qrTimmer = setInterval(function () {
                this.qrcode_login_check()
            }.bind(this), 1e3), $(".J_qrcode_reset").off("click").on("click", function (e) {
                e.stopPropagation(), this.qrCount = 0, this.qrTimmer = null, this.qrcodeObj = null, this.init()
            }.bind(this))
        },
        get_qrcode: function () {
            $.ajax({
                url: "//zhiyou.smzdm.com/user/login/jsonp_qrcode_token",
                type: "get",
                dataType: "json",
                success: function (e) {
                    0 === e.error_code && (qrCodeLoginObj.qrCode = e.data.qrcode_token, qrCodeLoginObj.reset_qrcode(
                        e.data.url))
                },
                error: function (e) {
                    console.log(e)
                }
            })
        },
        reset_qrcode: function (e) {
            $("canvas").remove(), $(".qrcode-succ").hide(), $(".mongolia").hide(), $(".qrcode").show(), this.qrcodeObj =
                $("#qrcode").qrcode({
                    render: "canvas",
                    width: 200,
                    height: 200,
                    foreground: "#000",
                    background: "#FFF",
                    text: e
                })
        },
        qrcode_login_check: function () {
            $.ajax({
                url: "https://zhiyou.smzdm.com/user/login/jsonp_qrcode_check",
                type: "post",
                dataType: "json",
                data: {
                    qrcode_token: this.qrCode
                },
                success: function (e) {
                    if (0 === e.error_code) {
                        Number(e.data.status);
                        switch (e.data.status) {
                            case "1":
                                break;
                            case "2":
                                $(".qrcode").hide(), $(".qrcode-succ").show();
                                break;
                            case "3":
                                dataLayer.push({
                                    event: "1330002",
                                    operation: "鎵嬫満鎵爜鐧诲綍_鐧诲綍鎴愬姛"
                                }), clearInterval(this.qrTimmer);
                                var r = null;
                                if (parent !== window) try {
                                    r = parent.location.href
                                } catch (e) {
                                    r = document.referrer
                                }
                                parent.window.location.href = r;
                                break;
                            case "4":
                                clearInterval(this.qrTimmer), $(".qrcode-succ").hide(), $(".mongolia").show(),
                                    $(".qrcode").show()
                        }
                        59 <= this.qrCount ? (clearInterval(this.qrTimmer), $(".qrcode-succ").hide(), $(
                            ".mongolia").show(), $(".qrcode").show()) : this.qrCount++
                    } else console.log(e.error_msg), clearInterval(this.qrTimmer), $(".qrcode-succ").hide(),
                        $(".mongolia").show(), $(".qrcode").show()
                }.bind(this),
                error: function (e) {
                    console.log(e)
                }
            })
        }
    },
    login_obj = {
        init: function (e) {
            var r = window.location.hash.split("#")[1];
            e = $.extend({
                is_use_captcha: 0
            }, e), login_obj.is_use_captcha = e.is_use_captcha, r = r.split("&");
            for (var o = 0; o < r.length; o++) {
                var t = r[o].split("=");
                login_obj.param[t[0]] = decodeURIComponent(decodeURIComponent(t[1]))
            }
            null == login_obj.param.redirect_url && (login_obj.param.redirect_url = ""), $(".co_login a").each(
                function () {
                    var e = $(this).attr("href") + encodeURIComponent(login_obj.param.redirect_url);
                    $(this).attr("href", e)
                }), login_obj.captcha_cover = CoverCtrl(".captcha_wrap", {
                coverDOM: 0 < $(".geetest_con").length ? $(".geetest_con") : $(".captcha_con"),
                speed: 300,
                beforeShow: function () {
                    login_obj.geetest_obj && login_obj.geetest_obj.reset(), 0 < $(".captcha_con").length &&
                    ("quick" == login_obj.style ? ($(".captcha_con .common").hide(), $(
                        ".captcha_con .quick").show()) : ($(".captcha_con .common").show(), $(
                        ".captcha_con .quick").hide()))
                }
            }), login_obj.handle_click_tab(), login_obj.login_click_tab(), login_obj.handle_click_submit(),
                login_obj.handle_click_mobile_code(), login_obj.handle_click_capt_confirm(), login_obj.handle_click_key_enter(),
                login_obj.initAgreeSubmit(), login_obj.handle_click_password_eye(), $(".geetest_con").length &&
            login_obj.init_geetest_captcha()
        },
        geetest_obj: null,
        validateResult: null,
        rsa: {},
        param: {},
        style: "common",
        handle_click_password_eye: function () {
            $("#password,#mobile_code").keyup(function () {
                var e = $(this),
                    r = e.val();
                0 < r.length ? e.siblings(".eye-icon").show() : e.siblings(".eye-icon").hide(), e.val(r)
            }), $(".J_eye_login").click(function () {
                var e = $(this);
                e.hasClass("pwd-eye") ? ($("#password").attr("type", "text"), e.removeClass("pwd-eye").addClass(
                    "pwdeye-open")) : ($("#password").attr("type", "password"), e.removeClass(
                    "pwdeye-open").addClass("pwd-eye"))
            })
        },
        encryptPassword: function (o) {
            var t = null;
            return $.ajax({
                url: "//zhiyou.smzdm.com/user/login/pre",
                type: "get",
                async: !1,
                dataType: "json"
            }).done(function (e) {
                if (e && 0 != e.error_code) t = null;
                else {
                    var r = new JSEncrypt;
                    r.setPublicKey(atob(e.data.pub_key)), t = r.encrypt(o)
                }
            }), t
        },
        handle_click_key_enter: function () {
            $(document).on("keypress", function (e) {
                13 == (e.keyCode || e.which) && ("common" === login_obj.style ? $(".login_submit:eq(0)").click() :
                    login_obj[login_obj.style + "_submit"]())
            })
        },
        handle_click_tab: function () {
            $("#login_tab>li").click(function (e) {
                var r = $(this);
                login_obj.style = r.data("style"), r.addClass("active").siblings("li").removeClass("active"),
                    0 === r.index() ? ($(".J_active_line").animate({
                        left: "112px"
                    }, "fast"), $("#login_cons>form").eq(0).show(0).siblings("form").hide(), $(
                        ".co_login").show()) : ($(".J_active_line").animate({
                        left: "198px"
                    }, "fast"), $("#login_cons>form").eq(2).show(0).siblings("form").hide(), $(
                        ".co_login").hide())
            })
        },
        login_click_tab: function () {
            $(".twoWeeks .loginL>a").click(function (e) {
                var r = $(this);
                login_obj.style = r.data("style"), "none" == $("#login_form").css("display") ? ($(
                    "#login_form").show(), $("#login_quick_form").hide()) : ($("#login_quick_form").show(),
                    $("#login_form").hide())
            })
        },
        login_pop_click: function () {
            $("#login_tab>li:eq(0)").trigger("click")
        },
        reg_pop_click: function () {
            $("#login_tab>li:eq(1)").trigger("click")
        },
        handle_click_submit: function () {
            $(".login_submit").click(function () {
                if ("common" == login_obj.style && login_obj.is_use_captcha) return $(
                    'input[name="captcha"]').val(""), $(".captcha_img").trigger("click"), login_obj
                    .geetest_obj.verify(), login_obj.captcha_cover.show(), !1;
                console.log("before login submit..."), login_obj[login_obj.style + "_submit"]()
            })
        },
        handle_click_mobile_code: function () {
            $("#login_mobile_code").on("click", function (e) {
                e.preventDefault();
                $(this);
                if (login_obj.is_show_captcha_err) return $('input[name="captcha"]').val(""), $(
                    'input[name="captcha"]').siblings(".notice_error").html(""), $(".captcha_img").trigger(
                    "click"), login_obj.geetest_obj.verify(), login_obj.captcha_cover.show(), !1;
                login_obj.mobile_code_submit()
            })
        },
        handle_click_capt_confirm: function () {
            $(".capt_confirm").click(function () {
                var e = $(this),
                    r = $('input[name="captcha"]');
                if (captcha = $.trim(r.val()), "" == captcha) return showError(e.siblings(".notice_error"),
                    "楠岃瘉鐮佷笉鑳戒负绌�"), !1;
                login_obj.captcha_cover.hide(), "quick" == login_obj.style ? login_obj.mobile_code_submit() :
                    login_obj.common_submit()
            })
        },
        is_use_captcha: 0,
        is_show_captcha_err: 0,
        captcha_cover: {},
        init_geetest_captcha: function () {
            $.ajax({
                url: "//zhiyou.smzdm.com/user/getgeetest/captcha_init_v3?rand=" + Math.round(100 * Math.random()),
                type: "get",
                dataType: "json",
                success: function (e) {
                    window.initGeetest({
                        gt: e.gt,
                        challenge: e.challenge,
                        offline: !e.success,
                        new_captcha: !0,
                        product: "bind"
                    }, function (r) {
                        login_obj.geetest_obj = r, login_obj.geetest_obj.onReady(function () {})
                            .onSuccess(function () {
                                var e = r.getValidate();
                                e && (login_obj.validateResult = e, login_obj.captcha_cover
                                    .hide(), "quick" == login_obj.style || "register" ==
                                login_obj.style ? login_obj.mobile_code_submit(e) :
                                    login_obj.common_submit(e))
                            }).onError(function () {
                                console.log("楠岃瘉鐮佽緭鍏ラ敊璇�!")
                            }).onClose(function () {
                                login_obj.captcha_cover.hide()
                            })
                    })
                }
            })
        },
        common_submit: function (e) {
            var r = $("#login_form .notice_error"),
                o = $.trim($("#username").val()),
                t = $.trim($("#password").val()),
                i = +document.getElementById("rememberme").checked,
                a = $("#is_third").val(),
                n = $.trim($("#redirect_to").val()),
                c = "";
            if ("" == o) return showError(r, "鎵嬫満鍙�/閭涓嶈兘涓虹┖"), !1;
            if ("" == t) return showError(r, "瀵嗙爜涓嶈兘涓虹┖"), !1;
            var s = $('input[name="captcha"]');
            if (0 < s.length && login_obj.is_use_captcha && "" == (c = $.trim(s.val()))) return showError(r,
                "楠岃瘉鐮佷笉鑳戒负绌�"), !1;
            if (!login_obj.requestRunning) {
                login_obj.requestRunning = 1;
                try {
                    var _ = login_obj.encryptPassword(t);
                    if (!_) return void showError(r, "璇锋眰澶辫触, 璇风◢鍊欓噸璇�!");
                    t = _, o = btoa(o)
                } catch (e) {}
                var l = {
                    username: o,
                    password: t,
                    rememberme: i,
                    captcha: c,
                    is_third: a,
                    redirect_to: n
                };
                e && (l.geetest_challenge = e.geetest_challenge, l.geetest_validate = e.geetest_validate, l.geetest_seccode =
                    e.geetest_seccode), $.ajax({
                    url: "/user/login/ajax_normal_check",
                    data: l,
                    type: "post",
                    cache: !1,
                    dataType: "json",
                    timeout: 3e4,
                    success: function (o) {
                        var e = o.error_code;
                        if (0 != e) {
                            if (111501 != e && 110101 != e) return o.is_use_captcha && (login_obj.is_use_captcha =
                                1), void showError(r, o.error_msg);
                            parent.window.location.href = o.redirect_to
                        } else $.ajax({
                            type: "get",
                            url: "/user/login/jsonp_is_protocol",
                            dataType: "json",
                            success: function (e) {
                                if (e.data.is_agree_protocol) {
                                    try {
                                        channel_name && (dataLayer.push({
                                            event: "鐧诲綍娴獥_鐧诲綍鎴愬姛_娆℃暟",
                                            "棰戦亾鍚�": channel_name
                                        }), l.rememberme && dataLayer.push({
                                            event: "鐧诲綍娴獥_60澶╁厤鐧诲綍_鍕鹃€夋鏁�",
                                            "棰戦亾鍚�": channel_name
                                        }))
                                    } catch (e) {}
                                    login_obj.param.redirect_url = o.redirect_to ? o.redirect_to :
                                        login_obj.param.redirect_url, login_obj.param.redirect_url =
                                        "" != login_obj.param.redirect_url && login_obj.param
                                            .redirect_url ? login_obj.param.redirect_url :
                                            "http://www.smzdm.com", login_obj.param.redirect_url =
                                        login_obj.param.redirect_url.split("#")[0], parent.window
                                        .location.href = login_obj.param.redirect_url
                                } else {
                                    var r = JSON.stringify({
                                        agreeStatusType: 1
                                    });
                                    window.parent.postMessage(r, "*"), $(".geetest_wrap").hide(),
                                        $(".agree-wrap").show(), login_obj.param.redirect_url =
                                        o.redirect_to ? o.redirect_to : login_obj.param.redirect_url,
                                        login_obj.param.redirect_url = "" != login_obj.param
                                            .redirect_url && login_obj.param.redirect_url ?
                                            login_obj.param.redirect_url :
                                            "http://www.smzdm.com", login_obj.param.redirect_url =
                                        login_obj.param.redirect_url.split("#")[0]
                                }
                            },
                            error: function (e) {
                                console.log(e)
                            }
                        })
                    },
                    error: function () {
                        alert("缃戠粶閿欒")
                    },
                    complete: function () {
                        login_obj.requestRunning = 0
                    }
                })
            }
        },
        quick_submit: function () {
            var r = $("#login_quick_form .notice_error"),
                e = $.trim($("#mobile").val()),
                o = $.trim($("#mobile_code").val()),
                t = +document.getElementById("rememberme_quick").checked,
                i = $("#is_third").val(),
                a = $.trim($("#redirect_to").val());
            if ("" == e) return showError(r, "鎵嬫満鍙蜂笉鑳戒负绌�"), !1;
            if (!/^1\d{10}$/.test(e)) return showError(r, "璇疯緭鍏ユ湁鏁堢殑鎵嬫満鍙风爜"), !1;
            if ("" == o) return showError(r, "鐭俊楠岃瘉鐮佷笉鑳戒负绌�"), !1;
            if (!login_obj.requestRunning) {
                login_obj.requestRunning = 1;
                var n = {
                    mobile: e,
                    mobile_code: o,
                    rememberme: t,
                    captcha: "",
                    is_third: i,
                    redirect_to: a
                };
                $.ajax({
                    url: "/user/login/ajax_quick_check",
                    data: n,
                    type: "post",
                    cache: !1,
                    dataType: "json",
                    timeout: 3e4,
                    success: function (o) {
                        var e = o.error_code;
                        0 != e ? (111501 != e && 110101 != e || (parent.window.location.href = o.redirect_to),
                            showError(r, o.error_msg)) : $.ajax({
                            type: "get",
                            url: "/user/login/jsonp_is_protocol",
                            dataType: "json",
                            success: function (e) {
                                if (e.data.is_agree_protocol) {
                                    try {
                                        channel_name && (dataLayer.push({
                                            event: "鐧诲綍娴獥_蹇嵎鐧婚檰_鐧诲綍鎴愬姛",
                                            "棰戦亾鍚�": channel_name
                                        }), n.rememberme && dataLayer.push({
                                            event: "鐧诲綍娴獥_60澶╁厤鐧诲綍_鍕鹃€夋鏁�",
                                            "棰戦亾鍚�": channel_name
                                        }), "register" == o.login_type ? dataLayer.push({
                                            event: "鐧诲綍娴獥_蹇嵎鐧婚檰_娉ㄥ唽_鎴愬姛鐧诲綍",
                                            "棰戦亾鍚�": channel_name
                                        }) : "login" == o.login_type && dataLayer.push({
                                            event: "鐧诲綍娴獥_蹇嵎鐧婚檰_鐧诲綍_鎴愬姛鐧诲綍",
                                            "棰戦亾鍚�": channel_name
                                        }))
                                    } catch (e) {}
                                    login_obj.param.redirect_url = o.redirect_to ? o.redirect_to :
                                        login_obj.param.redirect_url, login_obj.param.redirect_url =
                                        "" != login_obj.param.redirect_url && login_obj.param
                                            .redirect_url ? login_obj.param.redirect_url :
                                            "http://www.smzdm.com", login_obj.param.redirect_url =
                                        login_obj.param.redirect_url.split("#")[0], parent.window
                                        .location.href = login_obj.param.redirect_url
                                } else {
                                    var r = JSON.stringify({
                                        agreeStatusType: 1
                                    });
                                    window.parent.postMessage(r, "*"), $(".geetest_wrap").hide(),
                                        $(".agree-wrap").show(), login_obj.param.redirect_url =
                                        o.redirect_to ? o.redirect_to : login_obj.param.redirect_url,
                                        login_obj.param.redirect_url = "" != login_obj.param
                                            .redirect_url && login_obj.param.redirect_url ?
                                            login_obj.param.redirect_url :
                                            "http://www.smzdm.com", login_obj.param.redirect_url =
                                        login_obj.param.redirect_url.split("#")[0]
                                }
                            },
                            error: function (e) {
                                console.log(e)
                            }
                        })
                    },
                    error: function () {
                        alert("缃戠粶閿欒")
                    },
                    complete: function () {
                        login_obj.requestRunning = 0
                    }
                })
            }
        },
        mobile_code_submit: function (e) {
            var r = "",
                o = "";
            if ("quick" == login_obj.style) {
                if (showError(i = $("#login_quick_form .notice_error"), ""), o = "#login_mobile_code", "" == (a = $
                    .trim($("#mobile").val()))) return showError(i, "鎵嬫満鍙蜂笉鑳戒负绌�"), !1;
                if (!/^1\d{10}$/.test(a)) return showError(i, "璇疯緭鍏ユ湁鏁堢殑鎵嬫満鍙风爜"), !1;
                var t = {};
                $('input[name="captcha"]'), $("#geetest_captcha");
                r = "/user/login/ajax_get_mobile_code/"
            } else {
                var i, a;
                if (showError(i = $("#register_form .notice_error"), ""), o = "#register_mobile_code", "" == (a = $
                    .trim($("#mobile_reg").val()))) return showError(i, "鎵嬫満鍙蜂笉鑳戒负绌�"), !1;
                if (!/^1\d{10}$/.test(a)) return showError(i, "璇疯緭鍏ユ湁鏁堢殑鎵嬫満鍙风爜"), !1;
                t = {
                    mobile: a
                }, $('input[name="captcha"]'), $("#geetest_captcha");
                r = "/user/register/ajax_get_mobile_code/"
            }
            e && (t.geetest_challenge = e.geetest_challenge, t.geetest_validate = e.geetest_validate, t.geetest_seccode =
                e.geetest_seccode), t.mobile = a, $.ajax({
                url: r,
                data: t,
                type: "post",
                cache: !1,
                dataType: "json",
                timeout: 5e3,
                success: function (e) {
                    if (0 == e.error_code) login_obj.wait_time = 60, $(o).attr("disabled", "disabled").addClass(
                        "disabled"), login_obj.mobile_code_countdown(o, "鑾峰彇鐭俊楠岃瘉鐮�");
                    else {
                        if (!(110202 != e.error_code || login_obj.is_show_captcha_err &&
                            register_mobile_obj.is_show_captcha_err)) return login_obj.is_show_captcha_err =
                            1, register_mobile_obj.is_show_captcha_err = 1, $(
                            'input[name="captcha"]').val(""), $('input[name="captcha"]').siblings(
                            ".notice_error").html(""), $(".captcha_img").trigger("click"),
                            login_obj.geetest_obj.verify(), login_obj.captcha_cover.show(), !1;
                        showError(i, e.error_msg)
                    }
                    return !1
                },
                error: function () {
                    return alert("缃戠粶閿欒"), !1
                }
            })
        },
        wait_time: 60,
        speed: 1e3,
        mobile_code_countdown: function (e, r) {
            r = r || "鑾峰彇璇煶楠岃瘉鐮�";
            this.wait_time <= 0 ? $(e).html(r).removeAttr("disabled").removeClass("disabled") : ($(e).html(this.wait_time +
                "绉掑悗閲嶆柊鑾峰彇"), this.wait_time--, window.setTimeout("login_obj.mobile_code_countdown('" + e +
                "', '" + r + "')", this.speed))
        },
        initAgreeSubmit: function () {
            $(".J_agree_btn").click(function () {
                $.ajax({
                    type: "get",
                    url: "/user/login/jsonp_protocol",
                    dataType: "json",
                    success: function (e) {
                        if (dataLayer.push({
                            "浜嬩欢绫诲埆": "涓汉涓績",
                            "浜嬩欢鎿嶄綔": "鐢ㄦ埛鍗忚娴眰",
                            "浜嬩欢鏍囩": "纭畾骞跺悓鎰�",
                            "绫诲瀷澶囨敞": ""
                        }), "true" === $(".J_agree_btn").data("third")) {
                            var r = JSON.stringify({
                                agreeType: "receive"
                            });
                            window.parent.postMessage(r, "*")
                        } else if ("true" === $(".J_agree_btn").data("login")) {
                            r = JSON.stringify({
                                agreeType: "login_receive"
                            });
                            window.parent.postMessage(r, "*")
                        } else if ("true" === $(".J_agree_btn").data("quick")) {
                            r = JSON.stringify({
                                agreeType: "quick_receive"
                            });
                            window.parent.postMessage(r, "*")
                        } else if ("true" === $(".J_agree_btn").data("mobile")) {
                            r = JSON.stringify({
                                agreeType: "register_receive"
                            });
                            window.parent.postMessage(r, "*")
                        } else "true" === $(".J_agree_btn").data("register") ? login_obj.param.redirect_url
                            .indexOf("#follow") < 0 ? parent.window.location.href =
                            "//zhiyou.smzdm.com/guanzhu/tuijian/" : parent.window.location.href =
                            "http://www.smzdm.com/?anchor=follow" : parent.window.location.href =
                            login_obj.param.redirect_url
                    },
                    error: function (e) {
                        console.log(e)
                    }
                })
            }), $(".J_disagree_btn").click(function () {
                $.ajax({
                    type: "get",
                    url: "/user/logout/jsonp_index",
                    dataType: "json",
                    success: function (e) {
                        0 === e.error_code && (parent.window.location.href = login_obj.param.redirect_url)
                    },
                    error: function (e) {
                        console.log(e)
                    }
                })
            })
        }
    },
    register_mobile_obj = {
        init: function () {
            this.handle_click_password_eye(), this.handle_click_submit(), register_mobile_obj.captcha_cover =
                CoverCtrl(".captcha_wrap", {
                    coverDOM: 0 < $(".geetest_con").length ? $(".geetest_con") : $(".captcha_con"),
                    speed: 300,
                    beforeShow: function () {
                        $(".captcha-cover").show(), login_obj.geetest_obj && login_obj.geetest_obj.reset()
                    },
                    afterHide: function () {
                        $(".captcha-cover").hide()
                    }
                }), register_mobile_obj.handle_click_submit(), register_mobile_obj.handle_click_capt_confirm(),
                register_mobile_obj.handle_click_mobile_code()
        },
        register_url: "",
        geetest_obj: null,
        is_show_captcha_err: 0,
        captcha_cover: {},
        handle_click_password_eye: function () {
            $("#password_reg").keyup(function () {
                var e = $(this),
                    r = e.val();
                0 < r.length ? e.siblings(".eye-icon").show() : e.siblings(".eye-icon").hide(), e.val(r)
            }), $(".J_eye_register").click(function () {
                var e = $(this);
                e.hasClass("pwd-eye") ? ($("#password_reg").attr("type", "text"), e.removeClass("pwd-eye").addClass(
                    "pwdeye-open")) : ($("#password_reg").attr("type", "password"), e.removeClass(
                    "pwdeye-open").addClass("pwd-eye"))
            })
        },
        handle_click_mobile_code: function () {
            $("#register_mobile_code").on("click", function (e) {
                e.preventDefault();
                $(this);
                if (login_obj.is_show_captcha_err) return $('input[name="captcha"]').val(""), $(
                    'input[name="captcha"]').siblings(".notice_error").html(""), $("#captcha_img").trigger(
                    "click"), login_obj.geetest_obj.verify(), login_obj.captcha_cover.show(), !1;
                login_obj.mobile_code_submit()
            })
        },
        handle_click_submit: function () {
            $(".register_submit").click(function () {
                register_mobile_obj.register_submit()
            })
        },
        handle_click_capt_confirm: function () {
            $(".capt_confirm").click(function () {
                var e = $(this),
                    r = $('input[name="captcha"]');
                if (captcha = $.trim(r.val()), "" == captcha) return showError(e.siblings(".notice_error"),
                    "楠岃瘉鐮佷笉鑳戒负绌�"), !1;
                login_obj.captcha_cover.hide(), login_obj.mobile_code_submit()
            })
        },
        requestRunning: 0,
        register_submit: function () {
            if (!util_obj.checkField.mobile()) return !1;
            if (!util_obj.checkField.mobile_code()) return !1;
            if (!util_obj.checkField.password()) return !1;
            var e = $("#agreement").is(":checked"),
                r = $("#register_form .notice_error");
            if (!e) return showError(r, "鏈悓鎰忋€婁粈涔堝€煎緱涔扮敤鎴蜂娇鐢ㄥ崗璁€�"), !1;
            var o = {
                mobile: $.trim($("input[name='mobile_reg']").val()),
                mobile_code: $.trim($("input[name='mobile_code_reg']").val()),
                password: $.trim($("input[name='password_reg']").val()),
                is_third: $.trim($("input[name='is_third']").val()),
                redirect_to: $.trim($("#redirect_to").val())
            };
            $('input[name="captcha"]'), $("#geetest_captcha");
            login_obj.validateResult && (o.geetest_challenge = login_obj.validateResult.geetest_challenge, o.geetest_validate =
                    login_obj.validateResult.geetest_validate, o.geetest_seccode = login_obj.validateResult.geetest_seccode
            ), o.type = 2;
            var t = $("#register_form").find(".register_submit");
            t.attr("disabled", "disabled").addClass("btn_grey").val("娉ㄥ唽鎴愬姛锛岀櫥褰曚腑..."), setTimeout(function () {
                util_obj.notice_error(""), t.removeAttr("disabled").removeClass("btn_grey").val("娉�  鍐�")
            }, 3e3), register_mobile_obj.requestRunning || (register_mobile_obj.requestRunning = 1, $.ajax({
                url: "/user/register/ajax_check",
                data: o,
                type: "post",
                cache: !1,
                dataType: "json",
                timeout: 3e4,
                success: function (e) {
                    0 != e.error_code ? showError(r, e.error_msg) : $.ajax({
                        type: "get",
                        url: "/user/login/jsonp_is_protocol",
                        dataType: "json",
                        success: function (e) {
                            if (e.data.is_agree_protocol) "undefined" != typeof dataLayer ?
                                dataLayer.push({
                                    event: "娉ㄥ唽椤礯娉ㄥ唽鎴愬姛",
                                    "棰戦亾鍚�": "娉ㄥ唽椤�"
                                }) : console.log("dataLayer鏈畾涔�!"), login_obj.param.redirect_url =
                                e.redirect_to ? e.redirect_to : login_obj.param.redirect_url,
                                login_obj.param.redirect_url = "" != login_obj.param.redirect_url &&
                                login_obj.param.redirect_url ? login_obj.param.redirect_url :
                                    "http://www.smzdm.com", login_obj.param.redirect_url.indexOf(
                                "#follow") < 0 ? parent.window.location.href =
                                "//zhiyou.smzdm.com/guanzhu/tuijian/" : parent.window.location
                                .href = "http://www.smzdm.com/?anchor=follow";
                            else {
                                var r = JSON.stringify({
                                    agreeStatusType: 2
                                });
                                window.parent.postMessage(r, "*"), $(".geetest_wrap").hide(),
                                    $(".agree-wrap").show(), login_obj.param.redirect_url =
                                    e.redirect_to ? e.redirect_to : login_obj.param.redirect_url,
                                    login_obj.param.redirect_url = "" != login_obj.param
                                        .redirect_url && login_obj.param.redirect_url ?
                                        login_obj.param.redirect_url :
                                        "http://www.smzdm.com"
                            }
                        },
                        error: function (e) {
                            console.log(e)
                        }
                    })
                },
                error: function () {
                    alert("缃戠粶閿欒")
                },
                complete: function () {
                    register_mobile_obj.requestRunning = 0
                }
            }))
        }
    },
    util_obj = {
        notice_error: function (e, r) {
            r = r || ".notice_error", $(r).html(e)
        },
        checkField: {
            mobile: function (e) {
                e = e || "input[name='mobile_reg']";
                var r = $(e).val(),
                    o = $("#register_form .notice_error");
                if (!(r = $.trim(r))) return showError(o, "鎵嬫満鍙蜂笉鑳戒负绌�"), !1;
                return !!/^1\d{10}$/.test(r) || (showError(o, "璇疯緭鍏ユ湁鏁堢殑鎵嬫満鍙风爜"), !1)
            },
            password: function (e) {
                e = e || "input[name='password_reg']";
                var r = $.trim($(e).val()),
                    o = $("#register_form .notice_error");
                if ($(e).val(r), "" == r) return showError(o, "瀵嗙爜涓嶈兘涓虹┖"), !1;
                if (r.length < 6 || 20 < r.length) return showError(o, "璇峰皢闀垮害鎺у埗鍦�6-20浠ュ唴"), !1;
                if (/[\u4e00-\u9fa5]/.test(r)) return showError(o, "瀵嗙爜涓笉鍙寘鍚腑鏂囧瓧绗�"), !1;
                return !/^(.)\1+$/.test(r) || (showError(o, "瀵嗙爜绠€鍗曪紝璇锋洿鎹㈠叾浠栧鏉傚瘑鐮�"), !1)
            },
            password2: function (e) {
                e = e || "input[name='password2']";
                var r = $.trim($(e).val()),
                    o = $("#register_form .notice_error");
                return $(e).val(r), "" == r ? (showError(o, "瀵嗙爜涓嶈兘涓虹┖"), !1) : r == $.trim($(
                    "input[name='password_reg']").val()) || (showError(o, "瀵嗙爜涓嶄竴鑷�"), !1)
            },
            captcha: function (e, r) {
                e = e || "#captcha";
                var o = $.trim($(e).val());
                r = r || "";
                var t = $("#captcha_error_text"),
                    i = $("#captcha_success");
                return !!o || (i.hide(), t.html(r).show(), !1)
            },
            mobile_code: function (e) {
                e = e || "input[name='mobile_code_reg']";
                var r = $.trim($(e).val()),
                    o = $("#register_form .notice_error");
                return $(e).val(r), "" != r || (showError(o, "楠岃瘉鐮佷笉鑳戒负绌�"), !1)
            }
        }
    };
function showError(e, r) {
    e.html(r).animate({
        opacity: 1
    }, 400), setTimeout(function () {
        e.animate({
            opacity: 0
        }, 400)
    }, 3e3)
}
function login_reg_input(e) {
    SetInputCss(e), $(e).blur(function () {
        "" === $.trim($(this).val()) && $(this).prev().show()
    }), $(e).focus(function () {
        $(this).prev(".item-tip").hide()
    }), $(".item-tip").click(function () {
        $(this).next().focus()
    })
}
function SetInputCss(e) {
    $(e).each(function () {
        "" !== $.trim($(this).val()) && $(this).prev(".item-tip").hide()
    })
}
window.addEventListener ? window.addEventListener("message", function (e) {
    if (e.source == window.parent) {
        var r = JSON.parse(e.data);
        switch (r.type) {
            case 1:
                login_obj.reg_pop_click();
                break;
            case 2:
                login_obj.login_pop_click()
        }
        "post" === r.agreeType ? ($(".geetest_wrap").hide(), $(".agree-wrap").show(), $(".J_agree_btn").attr(
            "data-third", "true")) : "login_post" === r.agreeType ? ($(".geetest_wrap").hide(), $(
            ".agree-wrap").show(), $(".J_agree_btn").attr("data-login", "true")) : "quick_post" === r.agreeType ?
            ($(".geetest_wrap").hide(), $(".agree-wrap").show(), $(".J_agree_btn").attr("data-quick", "true")) :
            "reload_post" === r.agreeType ? ($(".geetest_wrap").hide(), $(".agree-wrap").show(), $(
                ".J_agree_btn").attr("data-reload", "true")) : "register_post" === r.agreeType ? ($(
                ".geetest_wrap").hide(), $(".agree-wrap").show(), $(".J_agree_btn").attr("data-register",
                "true")) : "register_mobile_post" === r.agreeType && ($(".geetest_wrap").hide(), $(
                ".agree-wrap").show(), $(".J_agree_btn").attr("data-mobile", "true"))
    }
}, !1) : window.attachEvent && window.attachEvent("onmessage", function () {
    if (e.source == window.parent) {
        var r = JSON.parse(e.data);
        switch (r.type) {
            case 1:
                login_obj.reg_pop_click()
        }
        "post" === r.agreeType ? ($(".geetest_wrap").hide(), $(".agree-wrap").show(), $(".J_agree_btn").attr(
            "data-third", "true")) : "login_post" === r.agreeType ? ($(".geetest_wrap").hide(), $(
            ".agree-wrap").show(), $(".J_agree_btn").attr("data-login", "true")) : "quick_post" === r.agreeType ?
            ($(".geetest_wrap").hide(), $(".agree-wrap").show(), $(".J_agree_btn").attr("data-quick", "true")) :
            "reload_post" === r.agreeType ? ($(".geetest_wrap").hide(), $(".agree-wrap").show(), $(
                ".J_agree_btn").attr("data-reload", "true")) : "register_post" === r.agreeType ? ($(
                ".geetest_wrap").hide(), $(".agree-wrap").show(), $(".J_agree_btn").attr("data-register",
                "true")) : "register_mobile_post" === r.agreeType && ($(".geetest_wrap").hide(), $(
                ".agree-wrap").show(), $(".J_agree_btn").attr("data-mobile", "true"))
    }
}), $(".J_qrcode_change").click(function () {
    var e = $(this);
    "login" === e.data("type") ? (e.data("type", "qrlogin"), e.css("background-image",
        "url(https://res.smzdm.com/resources/public/user/zhiyou/img/pc-2.png)"), qrCodeLoginObj.init(),
        $(".login").hide(), $(".qrcode-login").show(), window.dataLayer.push({
        event: "1330002",
        operation: "閫夋嫨鎵爜鐧诲綍"
    })) : (clearInterval(qrCodeLoginObj.qrTimmer), qrCodeLoginObj.qrCount = 0, e.data("type", "login"),
        e.css("background-image", "url(https://res.smzdm.com/resources/public/user/zhiyou/img/qcode-1.png)"),
        $(".qrcode-login").hide(), $(".login").show())
}), login_reg_input(), window.login_obj = login_obj, window.register_mobile_obj = register_mobile_obj;
