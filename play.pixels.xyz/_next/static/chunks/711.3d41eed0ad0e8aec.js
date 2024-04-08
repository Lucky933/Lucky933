(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [711], {
        72899: function(e, t, n) {
            "use strict";
            var a = n(85893),
                o = n(77058),
                l = n(42379);
            t.Z = e => {
                let {
                    onContinue: t,
                    onBack: n,
                    provider: s
                } = e, {
                    t: i
                } = (0, o.$)(), r = !!s && "email" !== s && "otpc" !== s;
                return (0, a.jsxs)("div", {
                    style: {
                        display: "grid",
                        placeItems: "center",
                        maxWidth: 600,
                        padding: 12
                    },
                    children: [(0, a.jsx)("br", {}), r && "ronin" !== s && l.oQ && !l.Yx ? (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("p", {
                            style: {
                                fontSize: 13
                            },
                            children: i("auth.new_account.body1", "Please use Ronin for new accounts")
                        }), (0, a.jsx)("button", {
                            onClick: () => n(),
                            style: {
                                marginBottom: 8,
                                padding: 12
                            },
                            children: i("button.back", "Back")
                        })]
                    }) : (0, a.jsx)("button", {
                        onClick: () => t(),
                        style: {
                            marginBottom: 8,
                            padding: 12
                        },
                        children: i("button.create_new_account", "Create New Account!")
                    }), (0, a.jsx)("p", {}), (0, a.jsx)("p", {}), (0, a.jsx)("p", {
                        style: {
                            fontSize: 11
                        },
                        children: i("auth.new_account.body2.prefix", "If instead you are trying to attach a new authentication method to an existing account")
                    }), (0, a.jsx)("button", {
                        onClick: () => {
                            window.location.href = r ? "https://dashboard.pixels.xyz/wallets" : "https://dashboard.pixels.xyz/social"
                        },
                        style: {
                            marginBottom: 8,
                            padding: 8,
                            fontSize: 12
                        },
                        children: i("button.create_new_account", "Update Existing Account")
                    }), (0, a.jsx)("br", {})]
                })
            }
        },
        77711: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                RoomLayout: function() {
                    return RoomLayout
                },
                default: function() {
                    return J
                }
            });
            var a = n(85893),
                o = n(67294),
                l = n(9008),
                s = n.n(l),
                i = n(47030),
                r = n.n(i),
                c = n(60604),
                d = n(34377),
                u = n(14458),
                m = n.n(u),
                h = n(94184),
                p = n.n(h);

            function windowBlur() {
                d.rV.blur.emit()
            }
            let GameContainer = () => {
                (0, o.useEffect)(() => (window.document.body.addEventListener("focusout", windowBlur), () => {
                    window.document.body.removeEventListener("focusout", windowBlur)
                }));
                let e = new Date,
                    t = 9 === e.getMonth() && 31 === e.getDate() && e.getFullYear() > 2023;
                return (0, a.jsx)("div", {
                    id: c.qO,
                    className: p()(m()["game-container"], {
                        [m()["game-container-halloween"]]: t
                    }),
                    tabIndex: -1,
                    onClick: e => {
                        e.currentTarget.focus()
                    }
                })
            };
            var g = n(35804),
                v = n(83171);
            let GameCover = () => {
                let e = (0, g.C)(v.GO),
                    t = (0, g.C)(v.iF),
                    n = (0, g.C)(v.U7);
                return (0, a.jsx)("div", {
                    className: p()(m().gameCover, {
                        [m().backdrop]: !t
                    }),
                    style: {
                        opacity: e && !n ? 1 : 0
                    }
                })
            };
            var x = n(77058),
                b = n(61036);
            let useCountdown = (e, t, n) => {
                    let [a, l] = (0, o.useState)(e);
                    return (0, o.useMemo)(() => {
                        let e = (Date.now() - (null != t ? t : Date.now())) / 1e3;
                        l(60 * n - e)
                    }, [n, t]), (0, o.useEffect)(() => {
                        let e = setInterval(() => {
                            let e = (Date.now() - (null != t ? t : Date.now())) / 1e3;
                            l(60 * n - e)
                        }, 1e3);
                        return () => clearInterval(e)
                    }, [t, n]), (0, b.Zo)(a)
                },
                TimeCounter = e => {
                    let {
                        timeElapsedString: t
                    } = e, n = t.split(":"), o = useCountdown(parseFloat(n[1]), parseFloat(n[2]), parseFloat(n[3]));
                    return (0, a.jsx)("div", {
                        children: o
                    })
                };
            var y = n(9621),
                w = n.n(y);
            let LookAtBubble = () => {
                let {
                    isActive: e,
                    text: t,
                    x: n,
                    y: o,
                    style: l
                } = (0, g.C)(v.$x), {
                    t: s
                } = (0, x.$)(["ui"]);
                if (!e || !t) return (0, a.jsx)(a.Fragment, {});
                let i = t.startsWith("hover.") ? s(t) : t,
                    r = (null == i ? void 0 : i.lastIndexOf("TIMER:", 0)) === 0,
                    c = "solid" === l,
                    d = o < window.innerHeight / 2 ? "".concat(o, "px") : void 0,
                    u = o < window.innerHeight / 2 ? void 0 : "".concat(window.innerHeight - o, "px"),
                    m = n < window.innerWidth / 2 ? "".concat(n, "px") : void 0,
                    h = n < window.innerWidth / 2 ? void 0 : "".concat(window.innerWidth - n, "px");
                return (0, a.jsx)("div", {
                    style: {
                        top: d,
                        left: m,
                        right: h,
                        bottom: u,
                        display: e ? "flex" : "none"
                    },
                    className: p()(w().lookAtBubble, {
                        [w().countDownBackground]: c
                    }, {
                        [w().lookAtBubbleBackground]: !c
                    }),
                    children: r ? (0, a.jsx)(TimeCounter, {
                        timeElapsedString: i
                    }) : i
                })
            };
            var _ = n(92217),
                f = n(27786),
                j = n(37645),
                C = n(6514),
                k = n(31425),
                I = n(42630),
                N = n.n(I),
                S = n(27335),
                P = n(83928);
            let NoticeDialog = () => {
                    let e = (0, g.T)(),
                        {
                            t
                        } = (0, x.$)(["ui"]),
                        n = (0, g.C)(_.cQ);
                    return n.visible && n.msgKey ? (0, a.jsxs)(f.Z, {
                        open: n.visible,
                        PaperProps: {
                            className: p()(N().uikit, N().pixelbox, N().purple, N().frame)
                        },
                        children: [(0, a.jsx)(j.Z, {
                            children: (0, a.jsx)("p", {
                                children: t("servicenotice.title", "Service Notice")
                            })
                        }), (0, a.jsxs)(C.Z, {
                            children: [(0, a.jsx)("div", {
                                style: {
                                    textAlign: "center"
                                },
                                children: (0, a.jsx)("img", {
                                    src: (0, P.Uk)("/game/ui/logo-navy.svg"),
                                    height: 64
                                })
                            }), (0, a.jsx)("br", {}), (0, a.jsx)("div", {
                                style: {
                                    position: "relative",
                                    padding: 10,
                                    boxSizing: "border-box",
                                    textAlign: "center"
                                },
                                className: "is-rounded",
                                children: (0, a.jsx)(S.Z, {
                                    text: t(n.msgKey)
                                })
                            })]
                        }), (0, a.jsxs)(k.Z, {
                            children: [n.allowReload && (0, a.jsx)("button", {
                                type: "button",
                                className: N().pushbutton,
                                onClick: e => {
                                    e.preventDefault(), window.location.reload()
                                },
                                children: t("servicenotice.reload", "Reload")
                            }), n.allowClose && (0, a.jsx)("button", {
                                type: "button",
                                className: N().pushbutton,
                                onClick: t => {
                                    t.preventDefault(), e((0, _.vU)())
                                },
                                children: t("close", "Close")
                            })]
                        })]
                    }) : (0, a.jsx)(a.Fragment, {})
                },
                ServiceGate = e => {
                    let {
                        children: t
                    } = e;
                    return t
                };
            var E = n(25617),
                W = n(34256),
                A = n(75786),
                B = n.n(A),
                T = n(9944),
                F = n(79750);
            let SupportLink = e => {
                let {
                    zIndex: t
                } = e, n = (0, F.F5)();
                return "pixels" !== n ? null : (0, a.jsx)("div", {
                    className: p()("clickable", B().supportlink),
                    onClick: () => {
                        window.open("https://help.pixels.xyz/", "_blank")
                    },
                    style: {
                        zIndex: t || "unset"
                    },
                    title: "Support",
                    children: (0, a.jsx)(T.Z, {
                        fontSize: "large",
                        htmlColor: "white"
                    })
                })
            };
            var Z = n(31189),
                M = n(39890),
                G = n(89733),
                R = n(39135),
                L = n(42379);

            function defaultWorld(e) {
                var t;
                if (!(null == e ? void 0 : null === (t = e.worlds) || void 0 === t ? void 0 : t.length)) return null;
                let n = e.worlds.find(t => t.players < .8 * e.maxPlayersPerWorld);
                if (n) return n;
                let a = e.worlds.reduce((e, t) => !e || t.players <= e.players ? t : e, e.worlds[0]);
                return a || null
            }
            let WorldPicker = e => {
                var t, n;
                let {
                    open: l
                } = e, s = (0, g.T)(), i = (0, g.C)(v.gx), r = (0, g.C)(v.SP), c = (0, g.C)(v.Od), d = (0, g.C)(_.Gq), u = (0, g.C)(_.ZP), m = (0, g.C)(v.px), {
                    t: h
                } = (0, x.$)(["ui"]), [b, y] = (0, o.useState)(""), [w, f] = (0, o.useState)(!1), [j, C] = (0, o.useState)(defaultWorld(i)), [k, I] = (0, o.useState)(!1), S = (0, g.C)(_.fq), E = null == S ? void 0 : S.find(e => {
                    var t;
                    return "ronin" === e.wallet || (null === (t = e.providers) || void 0 === t ? void 0 : t.includes("ronin"))
                }), A = (0, Z.dD)(), T = A ? 90 : 138, onLogout = async () => {
                    s((0, W.ni)()), (0, P.r$)()
                }, selectWorld = e => {
                    I(!1), s((0, W.uy)({
                        worldId: e.id,
                        mapId: c
                    })), s((0, _.cm)({
                        message: ""
                    }))
                };
                (0, o.useEffect)(() => {
                    G.Z.isInitialized || setTimeout(() => G.Z.initGame(), 1e3), (0, R.W)(), s((0, M.b)())
                }, [d, s, u]);
                let F = u || m.isActive && m.text,
                    z = F ? (0, a.jsx)("div", {
                        className: N().errorMessage,
                        children: h(F)
                    }) : "",
                    handleKeydown = e => {
                        if (!e.repeat) {
                            if ("Escape" === e.key || "Enter" === e.key) y("");
                            else if (e.key) {
                                let t = b + e.key;
                                y(t), "pixels" === t && f(!0)
                            }
                        }
                    };
                if ((0, o.useEffect)(() => {
                        k || C(defaultWorld(i))
                    }, [i]), (0, o.useEffect)(() => {
                        if (l) return document.body.addEventListener("keydown", handleKeydown), () => {
                            document.body.removeEventListener("keydown", handleKeydown)
                        }
                    }), !l) return (0, a.jsx)(a.Fragment, {});
                let U = [...i.worlds].filter(e => 99 != e.id),
                    D = U.sort((e, t) => e.players >= i.maxPlayersPerWorld - 2 ? 1 : t.players >= i.maxPlayersPerWorld - 2 ? -1 : 1 * e.id - 1 * t.id);
                return (w && !D.find(e => 99 == e.id) && D.push({
                    id: 99,
                    name: "Pixels World",
                    players: 0
                }), l) ? (0, a.jsxs)("div", {
                    className: p()(B().worldpicker, B().introdialog, N().uikit),
                    children: [(0, a.jsx)("div", {
                        className: B().errorText,
                        children: z
                    }), r && (null === (t = i.worlds) || void 0 === t ? void 0 : t.length) > 0 ? (0, a.jsxs)(a.Fragment, {
                        children: [!k && (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)("button", {
                                type: "button",
                                disabled: !j,
                                onClick: () => selectWorld(j),
                                className: p()(N().pushbutton, N().yellow, B().startbutton),
                                children: h("button.entergame", "Start Game")
                            }), (0, a.jsx)("div", {
                                className: p()("clickable", B().smalllink),
                                onClick: () => I(!0),
                                children: null !== (n = null == j ? void 0 : j.name) && void 0 !== n ? n : ""
                            }), !E && L.oQ && (0, a.jsxs)("div", {
                                style: {
                                    maxWidth: 400,
                                    fontSize: 11,
                                    marginTop: 4,
                                    padding: 12
                                },
                                children: ["We're moving to Ronin! Soon, you'll need a Ronin address to play Pixels.", " ", (0, a.jsx)("a", {
                                    href: "https://dashboard.pixels.xyz",
                                    children: "Click here"
                                }), " to add one to your account."]
                            })]
                        }), k && (0, a.jsx)("div", {
                            className: p()(N().brandFontTitle, B().title),
                            children: h("onboarding.pickworld")
                        }), k && (0, a.jsx)("div", {
                            className: B().worldScroller,
                            children: D.map(e => {
                                let t = e.players >= i.maxPlayersPerWorld - 2,
                                    n = 100 * Math.min(Math.max(.1, e.players / (i.maxPlayersPerWorld - 2)), 1);
                                return (0, a.jsx)("div", {
                                    className: B().worldItem,
                                    children: (0, a.jsxs)("button", {
                                        type: "button",
                                        onClick: () => selectWorld(e),
                                        className: "pixel-button",
                                        disabled: t,
                                        children: [(0, a.jsxs)("div", {
                                            className: p()(N().brandFontTitle, B().worldbar),
                                            children: [e.name, (0, a.jsxs)("div", {
                                                style: {
                                                    width: T,
                                                    height: 15,
                                                    borderRadius: 16,
                                                    opacity: t ? .5 : 1,
                                                    background: "#B5CC2C"
                                                },
                                                children: [(0, a.jsx)("div", {
                                                    style: {
                                                        position: "absolute",
                                                        zIndex: 999,
                                                        borderRadius: t ? 16 : "16px 0px 0px 16px",
                                                        border: "2px solid black",
                                                        width: n / 100 * T,
                                                        height: 15
                                                    }
                                                }), (0, a.jsx)("div", {
                                                    style: {
                                                        borderRadius: 16,
                                                        width: "100%",
                                                        height: "100%",
                                                        overflow: "hidden",
                                                        background: "linear-gradient(90deg, rgba(60,201,255,1) 0%, rgba(214,226,60,1) 60%, rgba(255,66,66,1) 100%)",
                                                        clipPath: "polygon(0 100%, 0 0, ".concat(n, "% 0, ").concat(n, "% 100%)")
                                                    }
                                                })]
                                            })]
                                        }), (0, a.jsxs)("span", {
                                            className: B().worldStatus,
                                            children: [t ? h("onboarding.full") : "", " "]
                                        })]
                                    })
                                }, "w".concat(e.id))
                            })
                        })]
                    }) : (0, a.jsxs)("div", {
                        className: N().brandFontTitle,
                        style: {
                            color: "white",
                            textAlign: "center"
                        },
                        children: [h("onboarding.loadingmap"), "...", r]
                    }), (0, a.jsx)("button", {
                        type: "button",
                        onClick: () => onLogout(),
                        className: p()(N().pushbutton, N().purple, B().logoutbutton),
                        children: h("button.logout", "Log Out")
                    })]
                }) : (0, a.jsx)(a.Fragment, {})
            };
            var z = n(70247),
                U = n(22394),
                D = n(18496),
                O = n(22181);
            let EmailPassword = e => {
                let {
                    onCancel: t,
                    Visible: n
                } = e, {
                    t: l
                } = (0, x.$)(["ui"]), [s, i] = (0, o.useState)(!0), r = (0, o.useRef)(null), c = (0, o.useRef)(null), d = (0, o.useRef)(null), u = (0, g.T)(), handleConnectEmail = () => {
                    var e, t, n;
                    let a = null === (e = r.current) || void 0 === e ? void 0 : e.value,
                        o = null === (t = c.current) || void 0 === t ? void 0 : t.value;
                    if (s) {
                        let e = null === (n = d.current) || void 0 === n ? void 0 : n.value;
                        if (o !== e) {
                            u((0, _.cm)({
                                message: ["passwordMismatch", "Passwords Must Match"]
                            }));
                            return
                        }
                    }
                    if (!a || !/[^@]+@[^. ]+\.[^. ]+/i.test(a)) {
                        u((0, _.cm)({
                            message: ["invalidEmail", "Invalid Email Address"]
                        }));
                        return
                    }
                    if (!o || o.length < 8) {
                        u((0, _.cm)({
                            message: ["passwordTooShort", "Password must be 8 characters"]
                        }));
                        return
                    }
                    u((0, _.eW)({
                        connected: !0,
                        provider: "email",
                        email: a,
                        password: o,
                        newuser: s
                    }))
                }, handleCancel = () => {
                    u((0, _.cm)({
                        message: ""
                    })), t()
                };
                return (0, a.jsxs)("div", {
                    className: B().emailConnect,
                    onKeyDown: e => {
                        n && ("Enter" === e.key ? handleConnectEmail() : "Escape" === e.key && handleCancel())
                    },
                    style: {
                        display: n ? "flex" : "none"
                    },
                    children: [(0, a.jsxs)("div", {
                        className: B().emailChoices,
                        children: [(0, a.jsxs)("label", {
                            className: "clickable",
                            children: [(0, a.jsx)("input", {
                                type: "radio",
                                name: "Signup1",
                                value: 1,
                                checked: s,
                                onChange: e => {
                                    e.target.checked && i(!0)
                                }
                            }), "New User"]
                        }), (0, a.jsxs)("label", {
                            className: "clickable",
                            children: [(0, a.jsx)("input", {
                                type: "radio",
                                name: "Login",
                                value: 2,
                                checked: !s,
                                onChange: e => {
                                    e.target.checked && i(!1)
                                }
                            }), "Log In"]
                        })]
                    }), (0, a.jsx)("label", {
                        children: "Email Address"
                    }), (0, a.jsx)("input", {
                        type: "email",
                        ref: r,
                        autoFocus: !0
                    }), (0, a.jsx)("label", {
                        children: "Password"
                    }), (0, a.jsx)("input", {
                        type: "password",
                        ref: c
                    }), s && (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("label", {
                            children: "Re-enter Password"
                        }), (0, a.jsx)("input", {
                            type: "password",
                            ref: d
                        })]
                    }), (0, a.jsxs)("div", {
                        className: B().emailbuttons,
                        children: [(0, a.jsx)("button", {
                            type: "button",
                            className: B().cancelButton,
                            onClick: handleCancel,
                            children: l("button.cancel", "Cancel")
                        }), (0, a.jsx)("button", {
                            type: "button",
                            className: B().submitButton,
                            onClick: handleConnectEmail,
                            children: l("button.submit", "Submit")
                        })]
                    })]
                })
            };
            var q = n(72899);
            let H = ["+", "+1", "+20", "+211", "+222", "+226", "+229", "+230", "+233", "+236", "+237", "+239", "+242", "+245", "+246", "+248", "+254", "+255", "+268", "+27", "+290", "+30", "+31", "+32", "+33", "+34", "+345", "+351", "+352", "+353", "+354", "+356", "+358", "+359", "+36", "+370", "+371", "+377", "+378", "+379", "+380", "+382", "+385", "+386", "+39", "+40", "+41", "+420", "+421", "+423", "+43", "+44", "+46", "+47", "+48", "+49", "+500", "+502", "+503", "+505", "+506", "+507", "+508", "+51", "+52", "+54", "+55", "+56", "+57", "+591", "+593", "+594", "+595", "+597", "+598", "+61", "+64", "+672", "+673", "+674", "+680", "+682", "+686", "+690", "+692", "+77", "+81", "+82", "+852", "+872", "+886", "+90", "+91"],
                K = ["+", "+1", "+20", "+211", "+212", "+213", "+216", "+218", "+220", "+221", "+222", "+223", "+224", "+225", "+226", "+227", "+228", "+229", "+230", "+231", "+232", "+233", "+234", "+235", "+236", "+237", "+238", "+239", "+240", "+241", "+242", "+243", "+244", "+245", "+246", "+248", "+249", "+250", "+251", "+252", "+253", "+254", "+255", "+256", "+257", "+258", "+260", "+261", "+262", "+263", "+264", "+265", "+266", "+267", "+268", "+269", "+27", "+290", "+291", "+297", "+298", "+299", "+30", "+31", "+32", "+33", "+34", "+345", "+350", "+351", "+352", "+353", "+354", "+355", "+356", "+357", "+358", "+359", "+36", "+370", "+371", "+372", "+373", "+374", "+375", "+376", "+377", "+378", "+379", "+380", "+381", "+382", "+385", "+386", "+387", "+389", "+39", "+40", "+41", "+420", "+421", "+423", "+43", "+44", "+45", "+46", "+47", "+48", "+49", "+500", "+501", "+502", "+503", "+504", "+505", "+506", "+507", "+508", "+509", "+51", "+52", "+53", "+54", "+55", "+56", "+57", "+58", "+590", "+591", "+593", "+594", "+595", "+596", "+597", "+598", "+599", "+60", "+61", "+62", "+63", "+64", "+65", "+66", "+670", "+672", "+673", "+674", "+675", "+676", "+677", "+678", "+679", "+680", "+681", "+682", "+683", "+685", "+686", "+687", "+688", "+689", "+690", "+691", "+692", "+7", "+77", "+81", "+82", "+84", "+850", "+852", "+853", "+855", "+856", "+86", "+872", "+880", "+886", "+90", "+91", "+92", "+93", "+94", "+95", "+960", "+961", "+962", "+963", "+964", "+965", "+966", "+967", "+968", "+970", "+971", "+972", "+973", "+974", "+975", "+976", "+977", "+98", "+992", "+993", "+994", "+995", "+996", "+998"],
                OneTimeCode = e => {
                    let {
                        onCancel: t,
                        Visible: n
                    } = e, {
                        t: l
                    } = (0, x.$)(["ui"]), [s, i] = (0, o.useState)("sms"), [r, c] = (0, o.useState)(!1), [d, u] = (0, o.useState)(""), [m, h] = (0, o.useState)("+1"), [p, v] = (0, o.useState)(!1), b = (0, o.useRef)(null), y = (0, o.useRef)(null), w = (0, o.useRef)(null), f = (0, g.T)(), handleConnect = async () => {
                        var e, t, n, a;
                        if (r) {
                            if (d) {
                                let e = null === (a = w.current) || void 0 === a ? void 0 : a.value;
                                if (!e || e.length < 6) {
                                    f((0, _.cm)({
                                        message: ["invalidCode", "Code must be at least 6 digits"]
                                    }));
                                    return
                                }
                                f((0, _.eW)({
                                    connected: !0,
                                    provider: "otpc",
                                    methodid: d,
                                    code: e
                                }))
                            }
                        } else {
                            let a = null === (e = b.current) || void 0 === e ? void 0 : e.value,
                                o = null !== (n = null === (t = y.current) || void 0 === t ? void 0 : t.value) && void 0 !== n ? n : "";
                            if ("email" === s && !/[^@]+@[^. ]+\.[^. ]+/i.test(null != a ? a : "")) {
                                f((0, _.cm)({
                                    message: ["invalidEmail", "Invalid Email Address"]
                                }));
                                return
                            }
                            if ("sms" === s && !/[0-9]{5,13}/i.test(null != o ? o : "")) {
                                f((0, _.cm)({
                                    message: ["invalidPhone", "Invalid Phone Number"]
                                }));
                                return
                            }
                            if (f((0, _.cm)({
                                    message: ""
                                })), u(""), c(!0), !p) try {
                                let e = await D.Z.checkForStytchAccount({
                                    kind: s,
                                    phone: m + o,
                                    email: a
                                });
                                if (!e.stytchUser) {
                                    c(!1), v(!0);
                                    return
                                }
                            } catch (e) {
                                console.log(e)
                            }
                            v(!1), D.Z.startOneTimeAuthentication(s, m + o, a).then(e => {
                                u(e)
                            }).catch(e => {
                                var t;
                                f((0, _.cm)({
                                    message: null !== (t = null == e ? void 0 : e.message) && void 0 !== t ? t : null == e ? void 0 : e.error_message
                                })), c(!1)
                            })
                        }
                    }, handleCancel = () => {
                        f((0, _.cm)({
                            message: ""
                        })), c(!1), t()
                    }, handleOptionChange = e => {
                        let {
                            checked: t,
                            value: n
                        } = e.target;
                        t && i(n)
                    };
                    return (0, a.jsxs)(a.Fragment, {
                        children: [p && (0, a.jsx)(q.Z, {
                            provider: "otpc",
                            onContinue: handleConnect,
                            onBack: () => {
                                v(!1)
                            }
                        }), (0, a.jsxs)("div", {
                            className: B().emailConnect,
                            onKeyDown: e => {
                                n && ("Enter" === e.key ? handleConnect() : "Escape" === e.key && handleCancel())
                            },
                            style: {
                                display: n ? p ? "none" : "flex" : "none"
                            },
                            children: [(0, a.jsxs)("div", {
                                className: B().emailChoices,
                                children: [(0, a.jsxs)("label", {
                                    className: "clickable",
                                    children: [(0, a.jsx)("input", {
                                        type: "radio",
                                        name: "loginOrSignup1",
                                        value: "sms",
                                        disabled: r,
                                        checked: "sms" === s,
                                        onChange: handleOptionChange
                                    }), "SMS"]
                                }), (0, a.jsx)("br", {}), (0, a.jsxs)("label", {
                                    className: "clickable",
                                    children: [(0, a.jsx)("input", {
                                        type: "radio",
                                        name: "loginOrSignup2",
                                        value: "whatsapp",
                                        disabled: r,
                                        checked: "whatsapp" === s,
                                        onChange: handleOptionChange
                                    }), "Whatsapp"]
                                }), (0, a.jsx)("br", {}), (0, a.jsxs)("label", {
                                    className: "clickable",
                                    children: [(0, a.jsx)("input", {
                                        type: "radio",
                                        name: "loginOrSignup3",
                                        value: "email",
                                        checked: "email" === s,
                                        disabled: r,
                                        onChange: handleOptionChange
                                    }), "Email"]
                                })]
                            }), (0, a.jsx)("br", {}), "email" === s && (0, a.jsxs)("div", {
                                className: B().section,
                                style: {
                                    display: r ? "none" : "flex"
                                },
                                children: [(0, a.jsx)("span", {
                                    className: B().info,
                                    children: l("onboarding.onetimecodeemail", "Have a login code sent to your email, creating a new account if the email is not already in use.")
                                }), (0, a.jsx)("label", {
                                    children: "Email Address"
                                }), (0, a.jsx)("input", {
                                    type: "email",
                                    ref: b,
                                    disabled: r,
                                    autoFocus: !0
                                })]
                            }), "sms" === s && (0, a.jsxs)("div", {
                                className: B().section,
                                style: {
                                    display: r ? "none" : "flex"
                                },
                                children: [(0, a.jsx)("span", {
                                    className: B().info,
                                    children: l("onboarding.onetimecodesms", "Have a login code sent to your phone, creating a new account if the phone number is not already in use.")
                                }), (0, a.jsx)("label", {
                                    children: "Phone Number"
                                }), (0, a.jsxs)("span", {
                                    className: B().phoneGroup,
                                    children: [(0, a.jsx)("select", {
                                        autoComplete: "tel-country-code",
                                        className: B().phoneCodes,
                                        value: m,
                                        onChange: e => h(e.target.value),
                                        children: H.map(e => (0, a.jsx)("option", {
                                            children: e
                                        }, e))
                                    }), (0, a.jsx)("input", {
                                        type: "tel",
                                        autoComplete: "tel-national",
                                        ref: y,
                                        disabled: r,
                                        autoFocus: !0
                                    })]
                                })]
                            }), "whatsapp" === s && (0, a.jsxs)("div", {
                                className: B().section,
                                style: {
                                    display: r ? "none" : "flex"
                                },
                                children: [(0, a.jsx)("span", {
                                    className: B().info,
                                    children: l("onboarding.onetimecodewhatsapp", "Have a login code sent to your whatsapp, creating a new account if the phone number is not already in use.")
                                }), (0, a.jsx)("label", {
                                    children: "Whats App Phone Number"
                                }), (0, a.jsxs)("span", {
                                    className: B().phoneGroup,
                                    children: [(0, a.jsx)("select", {
                                        autoComplete: "tel-country-code",
                                        className: B().phoneCodes,
                                        value: m,
                                        onChange: e => h(e.target.value),
                                        children: K.map(e => (0, a.jsx)("option", {
                                            children: e
                                        }, e))
                                    }), (0, a.jsx)("input", {
                                        type: "tel",
                                        autoComplete: "tel-national",
                                        ref: y,
                                        disabled: r,
                                        autoFocus: !0
                                    })]
                                })]
                            }), r && (0, a.jsxs)("div", {
                                className: B().section,
                                children: [(0, a.jsx)("span", {
                                    className: B().info,
                                    children: l("onboarding.onetimecodeenter", "Enter the login code sent to you. If you leave this page, you will need to send another code.")
                                }), (0, a.jsx)("label", {
                                    children: "Enter Code Received"
                                }), (0, a.jsx)("input", {
                                    type: "text",
                                    className: B().onetimecode,
                                    ref: w,
                                    autoFocus: !0
                                })]
                            }), (0, a.jsxs)("div", {
                                className: B().emailbuttons,
                                children: [(0, a.jsx)("button", {
                                    type: "button",
                                    className: B().cancelButton,
                                    onClick: handleCancel,
                                    children: l("button.cancel", "Cancel")
                                }), (0, a.jsx)("button", {
                                    type: "button",
                                    className: B().submitButton,
                                    onClick: handleConnect,
                                    children: l("button.submit", "Submit")
                                })]
                            }), (0, a.jsx)("div", {
                                className: B().filler
                            })]
                        })]
                    })
                };
            var $ = n(15861),
                IntroScreen_WalletNotFound = e => {
                    let {
                        provider: t
                    } = e, {
                        t: n
                    } = (0, x.$)();
                    return (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsxs)($.Z, {
                            style: {
                                fontSize: 16,
                                textAlign: "center",
                                color: "#fff",
                                marginBottom: 12
                            },
                            children: ["Please", " ", "metamask" === t ? (0, a.jsx)("a", {
                                href: "https://metamask.io",
                                target: "_blank",
                                rel: "noreferrer",
                                style: {
                                    fontWeight: 600,
                                    color: "lightBlue"
                                },
                                children: "install Metamask"
                            }) : "coinbase" === t ? (0, a.jsx)("a", {
                                href: "https://www.coinbase.com/wallet",
                                target: "_blank",
                                rel: "noreferrer",
                                style: {
                                    fontWeight: 600,
                                    color: "lightBlue"
                                },
                                children: "install Coinbase"
                            }) : (0, a.jsx)("a", {
                                href: "https://wallet.roninchain.com/",
                                target: "_blank",
                                rel: "noreferrer",
                                style: {
                                    fontWeight: 600,
                                    color: "lightBlue"
                                },
                                children: "install Ronin"
                            }), "\xa0to continue"]
                        }), (0, a.jsx)($.Z, {
                            style: {
                                fontSize: 12,
                                textAlign: "center",
                                maxWidth: 400
                            },
                            children: n("onboarding.selectedWalletNotFound", "Sorry, we couldn't find the wallet installed on your device. If you have the wallet installed, please try disabling all other wallet plugins")
                        })]
                    })
                },
                Q = n(5152),
                Y = n.n(Q);
            let V = Y()(() => Promise.all([n.e(623), n.e(329), n.e(59), n.e(216)]).then(n.bind(n, 80216)).then(e => e.RoninWalletBtn), {
                    loadableGenerated: {
                        webpack: () => [80216]
                    }
                }),
                WalletGate = e => {
                    let {
                        mapId: t
                    } = e, n = (0, g.T)(), {
                        t: l
                    } = (0, x.$)(["ui"]), s = (0, g.C)(_.H2), i = (0, g.C)(_.Gq), r = (0, g.C)(_.Ti), d = (0, g.C)(_.WS), u = (0, g.C)(_.DH), [m, h] = (0, o.useState)(), [v, b] = (0, o.useState)(null), [y, w] = (0, o.useState)(""), [f, j] = (0, o.useState)(!1), [C, k] = (0, o.useState)(!1), [I, N] = (0, o.useState)(!1), [S, E] = (0, o.useState)(!1), [W, A] = (0, o.useState)(!1);
                    (0, o.useEffect)(() => {
                        window.grecaptcha.enterprise.ready(async () => {
                            var e, a;
                            let o = await (0, P.Ye)();
                            RegExp(atob("aGVhZGxlc3syLDJ9"), "i").test(null !== (e = navigator[atob("dXNlckFnZW50")]) && void 0 !== e ? e : "") || (null == o ? void 0 : o.version) !== c.WX ? n((0, _.gz)({
                                message: "Application Update v".concat(null !== (a = null == o ? void 0 : o.version) && void 0 !== a ? a : c.WX, " Required. Please Reload."),
                                allowReload: !0,
                                allowClose: !1
                            })) : n((0, _.Kx)({
                                mapId: t
                            }))
                        })
                    }, []);
                    let T = (0, o.useMemo)(() => ({
                            otpc: {
                                image: (0, P.Uk)("/assets/images/laptop.png"),
                                text: "Phone or Email",
                                provider: {
                                    pixelsPromptType: "otpc"
                                }
                            },
                            ronin: L.oQ ? {
                                image: (0, P.Uk)("/assets/images/ronin.png"),
                                permissionSupport: !0,
                                text: "Connect with Ronin",
                                provider: {
                                    pixelsPromptType: "ronin"
                                }
                            } : {},
                            metamask: {
                                image: (0, P.Uk)("/assets/images/metamask.svg"),
                                permissionSupport: !0,
                                text: "Connect with Metamask",
                                provider: (0, P.TP)("metamask")
                            },
                            coinbase: {
                                image: (0, P.Uk)("/assets/images/coinbase_wallet.png"),
                                text: "Connect with Coinbase",
                                provider: (0, P.TP)("coinbase")
                            },
                            okx: {
                                image: (0, P.Uk)("/assets/images/okx.jpg"),
                                bgColor: "black",
                                text: "Connect with OKX",
                                provider: (0, P.TP)("okx")
                            },
                            trust: {
                                image: (0, P.Uk)("/assets/images/trust_wallet.png"),
                                text: "Connect with Trust Wallet",
                                provider: (0, P.TP)("trust")
                            }
                        }), []),
                        handleAuthError = e => {
                            (null == e ? void 0 : e.error_message) && e.error_type ? n((0, _.cm)({
                                message: [e.error_type, e.error_message]
                            })) : (null == e ? void 0 : e.message) === "no-recaptcha-available" || (null == e ? void 0 : e.message) === "no-telemetryId-available" ? n((0, _.cm)({
                                message: ["noRecaptcha", "Something seems...off. I can't find all my stuff. Please disable ad blockers or other plugins and check internet connection"]
                            })) : (null == e ? void 0 : e.message) === "no-wallet-address" ? n((0, _.cm)({
                                message: ["noWalletFound", "Wallet plug-in did not provide an address. Try metamask and disabling other plug-ins"]
                            })) : (null == e ? void 0 : e.message) === "no-crypto-token" ? n((0, _.cm)({
                                message: ["noStytchToken", "Sorry, we did not find the token we were looking for. no-crypto-token"]
                            })) : (null == e ? void 0 : e.message) === "server-unreachable" ? n((0, _.cm)({
                                message: ["serverOffline", "Network error connecting to server. Possibly offline. server-unreachable"]
                            })) : (null == e ? void 0 : e.code) === 4001 || (null == e ? void 0 : e.code) === -32603 ? n((0, _.cm)({
                                message: ["userCanceled", "User Canceled"]
                            })) : (null == e ? void 0 : e.code) === -32002 ? n((0, _.cm)({
                                message: ["pluginWaiting", "Wallet is already open. Close previous instance."]
                            })) : (null == e ? void 0 : e.message) === "Request method wallet_requestPermissions is not supported" ? n((0, _.cm)({
                                message: ["authenticationError", "Please unlock Wallet extension"]
                            })) : (null == e ? void 0 : e.message) === "bad-recaptcha" ? n((0, _.cm)({
                                message: ["robotError", "Hello, human. I am human, too. 0011000101011. You may need to disable extensions to authenticate."]
                            })) : (null == e ? void 0 : e.message) === "bad-telemetry-data" ? n((0, _.cm)({
                                message: ["robotError", "Hello, human. I am human, too. 0011000101011. You may need to disable extensions to authenticate."]
                            })) : (null == e ? void 0 : e.message) === "unsupported-wallet-provider" ? n((0, _.cm)({
                                message: ["authenticationError", "Please use a supported wallet app"]
                            })) : (null == e ? void 0 : e.message) === "wasm-required" ? n((0, _.cm)({
                                message: ["wasmRequired", "This browser does not support WebAssembly"]
                            })) : (null == e ? void 0 : e.message) === "eth-address-deleted-too-recently" ? n((0, _.cm)({
                                message: ["ethDeletedTooRecently", "This ETH Address has recently been deleted from an account. Please wait ".concat(e.threshold, " days after deleting an ETH to use it again")]
                            })) : n((0, _.cm)({
                                message: ["authenticationError", "Authentication Error Occurred. Server may not be reachable."]
                            }))
                        },
                        handleCompleteAuth = e => {
                            if (e && D.Z.sessionToken) {
                                var t;
                                let a = null == e ? void 0 : e.player,
                                    o = null == a ? void 0 : null === (t = a.location) || void 0 === t ? void 0 : t.mapId,
                                    l = null == e ? void 0 : e.targetTenant;
                                if (l && l !== (0, F.F5)()) {
                                    window.open("/".concat(l, "/").concat(o), "_self");
                                    return
                                }
                                n((0, O.R)({
                                    mapId: o
                                })), n((0, _.iM)({
                                    sessionToken: D.Z.sessionToken,
                                    provider: D.Z.walletProvider,
                                    playerId: null == a ? void 0 : a._id.toString(),
                                    currentAvatar: null == a ? void 0 : a.currentAvatar,
                                    username: null == a ? void 0 : a.username,
                                    playerAvatar: null == a ? void 0 : a.playerAvatar,
                                    lastSavedAt: null == a ? void 0 : a.lastSavedAt,
                                    mapId: o,
                                    cryptoWallets: null == a ? void 0 : a.cryptoWallets
                                }))
                            } else(null == e ? void 0 : e.message) ? n((0, _.cm)({
                                message: null == e ? void 0 : e.message
                            })) : n((0, _.cm)({
                                message: ["unknownError", "Unknown error occurred during authentication. Server returned unrecognized response."]
                            }))
                        },
                        handleClick = async e => {
                            w(""), G.Z.initGame(), connectWallet(e)
                        },
                        connectWallet = async e => {
                            var t, a, o;
                            n((0, _.cm)({
                                message: ""
                            }));
                            let l = T[e];
                            if (!(null == l ? void 0 : l.provider)) {
                                w(e);
                                return
                            }
                            if (l.provider.pixelsPromptType) {
                                b(l.provider.pixelsPromptType);
                                return
                            }
                            if (j(!0), l.permissionSupport) try {
                                await (null === (t = l.provider) || void 0 === t ? void 0 : t.request({
                                    method: "wallet_requestPermissions",
                                    params: [{
                                        eth_accounts: {}
                                    }]
                                }))
                            } catch (e) {
                                if ((null == e ? void 0 : e.code) === -32002) {
                                    n((0, _.cm)({
                                        message: ["pluginWaiting", "Wallet is already open. Close previous instance."]
                                    })), j(!1);
                                    return
                                }
                                if ((null == e ? void 0 : e.code) === 4001) {
                                    n((0, _.cm)({
                                        message: ["userCanceled", "User Canceled"]
                                    })), j(!1);
                                    return
                                }
                                console.error("metamask provider is not really metamask", e)
                            }
                            try {
                                let [t] = await l.provider.request({
                                    method: "eth_requestAccounts"
                                });
                                t && (n((0, _.eW)({
                                    connected: !0,
                                    provider: e,
                                    eth: t
                                })), h(t)), (null === (a = l.provider) || void 0 === a ? void 0 : a.on) && (null === (o = l.provider) || void 0 === o || o.on("accountsChanged", () => {
                                    n((0, _.$O)(!0))
                                }))
                            } catch (e) {
                                console.error("connectWallet() err: ", e), handleAuthError(e)
                            } finally {
                                j(!1)
                            }
                        },
                        handleAuthMethods = () => {
                            (m || v) && r && !i && "ronin" !== r && (async () => {
                                let e = (0, P.En)(t);
                                try {
                                    var n, a;
                                    let t;
                                    if ("email" === r) E(!0), t = await D.Z.completeEmailAuthentication(d.email, d.password, null === (n = d.newuser) || void 0 === n || n, e);
                                    else if ("otpc" === r) E(!0), t = await D.Z.completeOneTimeAuthentication(u.method_id, u.code, e);
                                    else if (r && m) {
                                        if (k(!0), !W) try {
                                            let e = await D.Z.checkForStytchAccount({
                                                kind: "eth",
                                                eth: m
                                            });
                                            if (!e.stytchUser) {
                                                A(!0);
                                                return
                                            }
                                        } catch (e) {
                                            console.log(e)
                                        }
                                        A(!1);
                                        let n = await D.Z.startCryptoAuthentication(m);
                                        if (!n) throw {
                                            message: "no-crypto-token"
                                        };
                                        k(!1), N(!0);
                                        let o = null === (a = T[r]) || void 0 === a ? void 0 : a.provider,
                                            l = await o.request({
                                                method: "personal_sign",
                                                params: [n, m]
                                            });
                                        N(!1), E(!0), t = await D.Z.completeAuthentication(m, l, r, e)
                                    }
                                    handleCompleteAuth(t)
                                } catch (e) {
                                    handleAuthError(e)
                                } finally {
                                    k(!1), N(!1), E(!1)
                                }
                            })()
                        };
                    (0, o.useEffect)(() => {
                        handleAuthMethods()
                    }, [m, r]);
                    let handleCancel = () => {
                        n((0, _.cm)({
                            message: ""
                        })), b(null), h(void 0), j(!1), k(!1), N(!1), E(!1), A(!1)
                    };
                    return (0, a.jsxs)(a.Fragment, {
                        children: [s && !(I || C || I) && (0, a.jsxs)("span", {
                            children: [l("onboarding.authentication", "Authenticating"), "..."]
                        }), f && (0, a.jsxs)("span", {
                            children: [l("onboarding.metamask", "Waiting for Wallet Connection"), "..."]
                        }), C && (0, a.jsxs)("span", {
                            children: [l("onboarding.startCryptoAuth", "Wallet connected. Please wait"), "..."]
                        }), I && (0, a.jsxs)("span", {
                            children: [l("onboarding.metamask", "Waiting on Communication"), "..."]
                        }), W && (0, a.jsx)(q.Z, {
                            provider: r,
                            onBack: handleCancel,
                            onContinue: () => handleAuthMethods()
                        }), !s && !y && !m && (0, a.jsxs)("div", {
                            className: B().walletGateWrapper,
                            style: {
                                display: "flex"
                            },
                            children: [!v && !f && !C && !I && !S && (0, a.jsxs)(a.Fragment, {
                                children: [(0, a.jsx)("div", {
                                    className: B().title2,
                                    children: l("onboarding.authenticationneeded", "Log In or Sign Up")
                                }), Object.keys(T).map(e => {
                                    let {
                                        provider: t,
                                        image: n,
                                        text: o
                                    } = T[e];
                                    return (t || !L.oQ && "metamask" === e) && (0, a.jsxs)("button", {
                                        type: "button",
                                        className: p()(B().connectButton),
                                        onClick: () => handleClick(e),
                                        children: [(0, a.jsx)("span", {
                                            className: B().connectIcon,
                                            children: (0, a.jsx)("img", {
                                                src: n,
                                                alt: e
                                            })
                                        }), (0, a.jsx)("span", {
                                            className: B().connectText,
                                            children: o
                                        })]
                                    }, e)
                                })]
                            }), (0, a.jsx)(EmailPassword, {
                                onCancel: handleCancel,
                                Visible: "email" === v
                            }), (0, a.jsx)(OneTimeCode, {
                                onCancel: handleCancel,
                                Visible: "otpc" === v
                            }), "ronin" === v && L.oQ && (0, a.jsx)(V, {
                                setWalletNotFound: w,
                                mapId: t,
                                onCancel: handleCancel
                            })]
                        }), (0, a.jsx)("div", {
                            className: B().actionbuttons,
                            children: m && !(s || f || C || I || S) && !W && (0, a.jsx)("button", {
                                className: B().cancelButton,
                                onClick: handleCancel,
                                children: l("button.cancel", "Cancel")
                            })
                        }), y && (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(IntroScreen_WalletNotFound, {
                                provider: y
                            }), (0, a.jsx)("br", {}), (0, a.jsxs)("div", {
                                className: B().emailbuttons,
                                children: [(0, a.jsx)("button", {
                                    className: B().cancelButton,
                                    onClick: () => w(""),
                                    children: l("button.back", "Back")
                                }), (0, a.jsx)("button", {
                                    className: B().submitButton,
                                    onClick: () => {
                                        window.location.reload()
                                    },
                                    children: l("button.reload", "Reload")
                                })]
                            })]
                        })]
                    })
                },
                SimpleAuthentication = e => {
                    let {
                        mapId: t
                    } = e, n = (0, g.C)(_.ZP), {
                        t: o
                    } = (0, x.$)(["ui"]), l = n && (0, a.jsx)("div", {
                        className: p()(N().errorMessage, B().errorText),
                        children: o(n)
                    });
                    return (0, a.jsxs)("div", {
                        className: p()(B().introdialog, B().auth),
                        children: [l, (0, a.jsx)(WalletGate, {
                            mapId: t
                        })]
                    })
                },
                NewPlayer = () => {
                    let e = (0, g.C)(v.SP),
                        t = (0, g.C)(_.cu),
                        n = (0, g.C)(_.ZP),
                        l = (0, g.C)(_.Gq),
                        s = (0, g.C)(_.Ec),
                        i = t || z.Z.getGameAvatarWithRandomTraits(c.tU),
                        [r] = (0, o.useState)(i),
                        [d, u] = (0, o.useState)(null),
                        [m, h] = (0, o.useState)(s),
                        {
                            t: b
                        } = (0, x.$)(["ui"]),
                        y = (0, g.T)(),
                        w = !s || !t;
                    if ((0, o.useEffect)(() => {
                            s && h(s)
                        }, [w, s]), !w || !e || !l) return (0, a.jsx)(a.Fragment, {});
                    let validateUsername = e => {
                            let t = e.target.value;
                            return (t = t.trim()) ? t.length >= 20 ? u(b("onboarding.charlimit", "Max {MAX} chars").replace("{MAX}", "20")) : (0, P.zB)(t) ? u(b("onboarding.dirtywords", "No Profanity, Please")) : u("") : u(b("onboarding.required")), h(t)
                        },
                        setupNewPlayer = e => {
                            if (e.preventDefault(), m) {
                                if ((0, P.zB)(m)) {
                                    console.log("".concat(m, " is not dirty?"));
                                    return
                                }
                                console.log("dispatching createPlayer", m, r), y((0, _.MD)({
                                    username: m,
                                    avatarPieces: r
                                }))
                            } else u(b("onboarding.required"))
                        },
                        f = d || n && b(n);
                    return (0, a.jsxs)("div", {
                        className: p()(B().introdialog, N().uikit),
                        children: [r && (0, a.jsx)(U.z, {
                            className: B().avatar,
                            selectedTraits: r,
                            symbol: c.tU,
                            height: 192
                        }), (0, a.jsxs)("label", {
                            htmlFor: "username",
                            className: B().label,
                            children: [f && (0, a.jsx)("div", {
                                className: N().errorMessage,
                                children: f
                            }), b("onboarding.entername", "Enter Your Name")]
                        }), (0, a.jsx)("div", {
                            style: {
                                marginBottom: "0.6rem"
                            },
                            className: B().username,
                            children: (0, a.jsx)("input", {
                                name: "username",
                                autoComplete: "off",
                                placeholder: b("onboarding.entername", "Enter Your Name"),
                                className: "pixelFont",
                                type: "text",
                                maxLength: 20,
                                defaultValue: m,
                                onChange: e => validateUsername(e)
                            })
                        }), (0, a.jsx)("button", {
                            type: "button",
                            disabled: !m,
                            onClick: e => setupNewPlayer(e),
                            className: p()(N().pushbutton, N().yellow, B().startbutton),
                            children: b("button.continue", "Continue")
                        })]
                    })
                },
                IntroBackdrop = e => {
                    let {
                        mapId: t
                    } = e, n = (0, g.C)(v.U7), l = (0, g.C)(v.qB), s = (0, g.C)(_.Gq), i = (0, g.C)(v.SP), [r, c] = (0, o.useState)(), [d, u] = (0, o.useState)();
                    return ((0, o.useEffect)(() => {
                        z.Z.loadLibraries().then(() => {
                            let e = z.Z.getGameEntity("ent_npcBarney");
                            c(e), u(e = z.Z.getGameEntity("ent_npcMargaret"))
                        }).catch(() => {})
                    }, []), n) ? (0, a.jsxs)("div", {
                        className: p()(B().backdrop, B().intro),
                        children: [(0, a.jsx)("div", {
                            className: B().logocontainer,
                            children: (0, a.jsx)("img", {
                                className: B().logo,
                                src: (0, P.Uk)("/game/ui/logo-navy.svg")
                            })
                        }), !s && (0, a.jsx)(SimpleAuthentication, {
                            mapId: t
                        }), (0, a.jsx)(WorldPicker, {
                            open: l
                        }), s && i && (0, a.jsx)(NewPlayer, {}), (0, a.jsx)(SupportLink, {
                            zIndex: 1e4
                        }), r && (0, a.jsx)(U.z, {
                            className: B().barney,
                            selectedTraits: r.npc.avatarPieces,
                            symbol: r.npc.avatar,
                            height: 320
                        }), d && (0, a.jsx)(U.z, {
                            className: B().margaret,
                            selectedTraits: d.npc.avatarPieces,
                            symbol: d.npc.avatar,
                            height: 320
                        })]
                    }) : (0, a.jsx)(a.Fragment, {})
                },
                X = Y()(() => Promise.all([n.e(989), n.e(329), n.e(290), n.e(983), n.e(474), n.e(862)]).then(n.bind(n, 63862)).then(e => e.UiContainer), {
                    loadableGenerated: {
                        webpack: () => [63862]
                    }
                }),
                RoomLayout = e => {
                    let {
                        mapId: t = "",
                        isSnapshot: n = !1
                    } = e, l = (0, E.I0)(), i = !(0, g.C)(v.U7);
                    return (0, o.useEffect)(() => {
                        n && (l((0, W.Hi)({
                            mapId: t
                        })), l((0, _.cn)({
                            mapId: t
                        })), l((0, _.MD)({
                            username: "the-traveling-tourist",
                            avatarPieces: {}
                        })), l((0, W.uy)({
                            worldId: 99,
                            mapId: t,
                            snap: !0
                        })))
                    }, [l, n, t]), (0, a.jsxs)("div", {
                        className: r().roomLayout,
                        children: [(0, a.jsxs)(s(), {
                            children: [(0, a.jsx)("title", {
                                children: "Pixels: An Infinite World of Endless Adventure"
                            }), (0, a.jsx)("meta", {
                                name: "viewport",
                                content: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
                            })]
                        }), (0, a.jsx)(GameContainer, {}), !n && (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(LookAtBubble, {}), (0, a.jsx)(GameCover, {}), (0, a.jsx)(ServiceGate, {
                                children: i ? (0, a.jsx)("div", {
                                    className: "room-layout",
                                    children: (0, a.jsx)(X, {})
                                }) : (0, a.jsx)(IntroBackdrop, {
                                    mapId: t
                                })
                            }), (0, a.jsx)(NoticeDialog, {})]
                        })]
                    })
                };
            var J = RoomLayout
        },
        27335: function(e, t, n) {
            "use strict";
            var a = n(85893),
                o = n(67294),
                l = n(34377);
            let openLink = e => {
                l.ZP.sendEvent(l.fb.LINK_OPEN, {
                    link: e
                })
            };
            t.Z = e => {
                let {
                    text: t
                } = e, n = t.split(/(\[\w[^)]*\]\(http[s]?:\/\/[a-zA-Z0-9?%./=+&_-]*\))/);
                return (0, a.jsx)(a.Fragment, {
                    children: n.map((e, t) => {
                        if ((1 & t) == 1) {
                            let o = e.match(/\[(\w[^)]*)\]\((http[s]?:\/\/[a-zA-Z0-9?%./=+&_-]*)\)/);
                            if (o && o.length >= 3) {
                                var n;
                                return (0, a.jsx)("a", {
                                    onClick: () => openLink(o[2]),
                                    children: null !== (n = o[1]) && void 0 !== n ? n : e
                                }, t)
                            }
                        }
                        return (0, a.jsx)(o.Fragment, {
                            children: e
                        }, t)
                    })
                })
            }
        },
        31189: function(e, t, n) {
            "use strict";
            n.d(t, {
                EG: function() {
                    return useIsAuthMobile
                },
                dD: function() {
                    return useIsMobile
                },
                ob: function() {
                    return useInnerSize
                },
                tq: function() {
                    return isMobile
                }
            });
            var a = n(67294);

            function isMobile(e) {
                return e < 600
            }

            function getInnerSize() {
                return {
                    width: window.innerWidth,
                    height: window.innerHeight
                }
            }

            function useInnerSize() {
                let [e, t] = a.useState(getInnerSize);
                return a.useEffect(() => {
                    let e = "resize",
                        listener = () => t(getInnerSize);
                    return window.addEventListener(e, listener), () => window.removeEventListener(e, listener)
                }, []), e
            }

            function useIsMobile() {
                let {
                    width: e
                } = useInnerSize();
                return isMobile(e)
            }

            function useIsAuthMobile() {
                let e = window.navigator.userAgent;
                return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(e) || ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].includes(window.navigator.platform) || window.navigator.userAgent.includes("Mac") && "ontouchend" in document
            }
        },
        14458: function(e) {
            e.exports = {
                "game-container": "GameContainer_game-container__gT4TM",
                "game-container-halloween": "GameContainer_game-container-halloween__xkjyP",
                gameCover: "GameContainer_gameCover___mB2c",
                backdrop: "GameContainer_backdrop__Rgpk_"
            }
        },
        75786: function(e) {
            e.exports = {
                backdrop: "Intro_backdrop__DMetW",
                intro: "Intro_intro__KSEV4",
                logocontainer: "Intro_logocontainer__8t77Q",
                logo: "Intro_logo__SOuym",
                maintitle: "Intro_maintitle___FEbb",
                barney: "Intro_barney__CmeQX",
                margaret: "Intro_margaret__W7E9Q",
                supportlink: "Intro_supportlink__FIBHL",
                introdialog: "Intro_introdialog__NFZ89",
                title: "Intro_title__ESvGC",
                title2: "Intro_title2__IBaLt",
                title3: "Intro_title3__CPsuE",
                auth: "Intro_auth__ozoZp",
                worldpicker: "Intro_worldpicker__sU5G0",
                logoutbutton: "Intro_logoutbutton__eFTHZ",
                startbutton: "Intro_startbutton__QtxEz",
                errorText: "Intro_errorText__cem6_",
                worldScroller: "Intro_worldScroller__8MR7l",
                worldItem: "Intro_worldItem__2mnq7",
                worldbar: "Intro_worldbar__jezlp",
                smalllink: "Intro_smalllink__nJ3cG",
                username: "Intro_username__vI77k",
                guestlink: "Intro_guestlink__5_pit",
                connectButton: "Intro_connectButton__l2mKZ",
                connectIcon: "Intro_connectIcon__irgCt",
                connectText: "Intro_connectText__eZXy_",
                walletList: "Intro_walletList__DZDIV",
                emailbuttons: "Intro_emailbuttons__k6_p0",
                cancelButton: "Intro_cancelButton__r8WIr",
                submitButton: "Intro_submitButton__RofMv",
                actionbuttons: "Intro_actionbuttons__i_kUC",
                walletGateWrapper: "Intro_walletGateWrapper__jFySU",
                emailConnect: "Intro_emailConnect__3AzP5",
                onetimecode: "Intro_onetimecode__T8_5y",
                phoneGroup: "Intro_phoneGroup__gy5Yy",
                phoneCodes: "Intro_phoneCodes__QUmcK",
                section: "Intro_section__ENrRY",
                info: "Intro_info___Y9pA",
                emailChoices: "Intro_emailChoices__v7oug",
                filler: "Intro_filler__MHrIS"
            }
        },
        9621: function(e) {
            e.exports = {
                lookAtBubble: "LookAtBubble_lookAtBubble___pd4a",
                countDownBackground: "LookAtBubble_countDownBackground__GCVef",
                lookAtBubbleBackground: "LookAtBubble_lookAtBubbleBackground__H6GyF"
            }
        },
        47030: function(e) {
            e.exports = {
                roomLayout: "RoomLayout_roomLayout__QU057"
            }
        }
    }
]);