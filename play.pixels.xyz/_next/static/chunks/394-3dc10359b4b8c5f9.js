(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [394], {
        22394: function(t, i, e) {
            "use strict";
            e.d(i, {
                z: function() {
                    return Character
                }
            });
            var a = e(85893),
                r = e(67294),
                n = e(60604),
                s = e(26526);
            let CharacterPiece = t => {
                let {
                    avatar: i,
                    piece: e,
                    isCharacter: r = !1,
                    scale: n = 1,
                    isLayered: l = !1,
                    animationClass: o = ""
                } = t;
                return (0, a.jsx)(s.j, {
                    size: i.sprite.size,
                    url: e,
                    isCharacter: r,
                    scale: n,
                    isLayered: l,
                    animationClass: o
                })
            };
            var l = e(66030),
                o = e(83928),
                c = e(70247),
                d = e(27760),
                _ = e(25852),
                p = e.n(_);
            let Character = t => {
                var i, e, s;
                let {
                    selectedTraits: _,
                    className: h,
                    height: u = n.LI,
                    symbol: v,
                    anim: f = "idle"
                } = t, [m, g] = (0, r.useState)([]), [S, b] = (0, r.useState)({
                    width: 0,
                    scale: 1,
                    animated: !0,
                    avatar: {}
                }), compare = (t, i) => {
                    if (t.length !== i.length) return !1;
                    for (let e = 0; e < t.length; e += 1)
                        if (t[e] !== i[e]) return !1;
                    return !0
                }, y = _;
                if ("string" == typeof y) try {
                    y = JSON.parse(y)
                } catch (t) {
                    console.log("trait problem", t)
                }(0, r.useEffect)(() => {
                    let t = v || y.avatar_id,
                        i = c.Z.getGameAvatar(t);
                    if (i) {
                        let t = u / i.sprite.size.height,
                            e = Math.round(i.sprite.size.width * t),
                            a = !!i.animations,
                            r = new l.r({ ...i,
                                avatar: {
                                    display: y
                                }
                            }, { ...i,
                                display: y
                            }),
                            n = r.getReactPiecesURLs();
                        if (n && !compare(n, m)) {
                            g([]);
                            let r = n.map(t => (0, o.b7)(t)),
                                s = r.map(async t => d.Z.preloadOneBlob(t));
                            Promise.all(s).then(t => t.filter(t => t)).then(r => {
                                b({
                                    width: e,
                                    scale: t,
                                    avatar: i,
                                    animated: a
                                }), g(r)
                            }).catch(t => {
                                console.log("".concat(t, " when loading avatar"))
                            })
                        } else b({
                            width: e,
                            scale: t,
                            avatar: i,
                            animated: a
                        })
                    } else console.log("Missing Avatar ".concat(i))
                }, [_, v, u]);
                let D = S.avatar,
                    A = S.animated && (null == D ? void 0 : null === (i = D.animations) || void 0 === i ? void 0 : i[f]) && (null === (s = D.sprite) || void 0 === s ? void 0 : null === (e = s.size) || void 0 === e ? void 0 : e.width) ? "spriteAnimation".concat(D.sprite.size.width, "_").concat(D.animations[f].start, "_").concat(D.animations[f].end) : "";
                return (0, a.jsx)("div", {
                    className: h,
                    style: {
                        width: S.width,
                        height: u,
                        margin: "0px auto"
                    },
                    children: (0, a.jsx)("div", {
                        className: p().piecesContainer,
                        style: {
                            width: "100%",
                            height: "100%"
                        },
                        children: m.map(t => (0, a.jsx)(CharacterPiece, {
                            isCharacter: !0,
                            avatar: S.avatar,
                            piece: t,
                            scale: S.scale,
                            animationClass: A
                        }, l.r.getPieceKey(t)))
                    })
                })
            }
        },
        26526: function(t, i, e) {
            "use strict";
            e.d(i, {
                j: function() {
                    return Sprite
                }
            });
            var a = e(85893);
            e(67294);
            var r = e(79598),
                n = e.n(r);
            let Sprite = t => {
                let {
                    size: i,
                    url: e,
                    isCharacter: r = !1,
                    scale: s = 1,
                    selected: l = !1,
                    onClick: o = () => {},
                    isLayered: c = !1,
                    animationClass: d = ""
                } = t, {
                    width: _,
                    height: p
                } = i, h = Math.round(_ * s), u = Math.round(p * s), v = {
                    transformOrigin: "0 0",
                    transform: "scale(".concat(s, ")")
                };
                return r || c ? (v.position = "absolute", v.top = 0, v.left = 0) : (v.position = "relative", v.width = h, v.height = u), (0, a.jsx)("div", {
                    style: {
                        width: h,
                        height: u,
                        overflow: "hidden"
                    },
                    children: (0, a.jsx)("div", {
                        style: v,
                        children: (0, a.jsx)("div", {
                            className: "pixelated ".concat(n()[d]),
                            style: {
                                width: _,
                                height: p,
                                backgroundImage: "url(".concat(e, ")"),
                                boxShadow: l ? "inset 0 0 0 1px rgba(7,30,33, 0.8)" : "none"
                            },
                            onClick: () => {
                                !r && o && o()
                            }
                        })
                    })
                })
            }
        },
        66030: function(t, i, e) {
            "use strict";
            e.d(i, {
                r: function() {
                    return CharacterHelper
                }
            });
            var a = e(60604);
            let CharacterHelper = class CharacterHelper {
                buildNftPieceUrl(t, i, e) {
                    var a, r;
                    let n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    if (null === (a = t.url) || void 0 === a ? void 0 : a.override) return t.url.override.reduce((e, a) => {
                        if (n) return "".concat(e).concat(a.text || i[a.attribute]);
                        if (void 0 !== e) {
                            if (a.attribute && !i[a.attribute]) {
                                var r;
                                let i = null === (r = t.attributes) || void 0 === r ? void 0 : r.find(t => t.id === a.attribute && t.default);
                                if (!(null == i ? void 0 : i.default)) return;
                                return "".concat(e).concat(i.default)
                            }
                            return "".concat(e).concat(a.text || i[a.attribute])
                        }
                    }, "");
                    let s = i[t.id] || (null === (r = e[t.id]) || void 0 === r ? void 0 : r.default);
                    if (s && "undefined" !== s || n) return "/".concat(t.id, "/").concat(s, ".png")
                }
                getDisplayable(t) {
                    var i, e, a;
                    return null === (a = this.characterData) || void 0 === a ? void 0 : null === (e = a.avatar) || void 0 === e ? void 0 : null === (i = e.display) || void 0 === i ? void 0 : i[t]
                }
                makeXY(t) {
                    if (t) return {
                        x: t,
                        y: t
                    }
                }
                getReactPiecesURLs() {
                    return this.getPiecesURLs().filter(t => t)
                }
                getPiecesURLs() {
                    var t;
                    if (!(null === (t = this.avatarData) || void 0 === t ? void 0 : t.pieces)) return console.log("missing avatar! should have default here."), [];
                    let i = this.avatarData.pieces.reduce((t, i) => ({ ...t,
                        [i.id]: i
                    }), {});
                    return this.avatarData.pieces.filter(t => !t.background).map(t => {
                        var e, r, n, s, l, o, c, d, _;
                        let p;
                        if (p = "".concat(a.pZ, "/game/avatars/").concat(this.avatarData.id), null === (n = this.characterData) || void 0 === n ? void 0 : null === (r = n.avatar) || void 0 === r ? void 0 : null === (e = r.display) || void 0 === e ? void 0 : e.nft) {
                            let e = this.buildNftPieceUrl(t, this.characterData.avatar.display, i);
                            if (!e) return;
                            p += e
                        } else {
                            let e = null !== (l = this.getDisplayable(t.id)) && void 0 !== l ? l : t,
                                a = i[e.type] || t;
                            if (null === (s = a.url) || void 0 === s ? void 0 : s.override) {
                                if (!(null === (o = a.url.override) || void 0 === o ? void 0 : o.every(t => t.text || a[t.attribute]))) return;
                                p += a.url.override.reduce((t, i) => "".concat(t).concat(i.text || a[i.attribute]), "")
                            } else {
                                a.id !== t.id && (e = null !== (_ = this.getDisplayable(a.id)) && void 0 !== _ ? _ : a);
                                let i = e.type || a.id;
                                if (!i) return;
                                if (p += "/".concat(i) + ((null === (c = a.url) || void 0 === c ? void 0 : c.prefix) || ""), a.attributes) {
                                    if (!a.attributes.every(t => t.value || e[t.id] || t.default)) return;
                                    p += a.attributes.reduce((t, i) => "".concat(t, "/").concat(i.value || e[i.id] || i.default), "")
                                }
                                p += ((null === (d = a.url) || void 0 === d ? void 0 : d.suffix) || "") + ".png"
                            }
                        }
                        return p
                    })
                }
                getPiecesSpriteData() {
                    var t, i, e, r, n, s, l;
                    let o = this.getPiecesURLs(),
                        c = { ...null !== (r = this.avatarData.physics) && void 0 !== r ? r : {}
                        },
                        d = this.avatarData.sprite.size ? { ...this.avatarData.sprite.size
                        } : void 0;
                    if ((null === (t = this.avatarData.physics) || void 0 === t ? void 0 : t.offset) && c.size) {
                        let t = null !== (n = this.avatarData.sprite.scale) && void 0 !== n ? n : 1;
                        d || (d = {
                            width: c.size.width / t,
                            height: c.size.height / t
                        }), d.width * t > 32 && (d.width = Math.round(32 / t)), d.height * t > 48 && (d.height = Math.round(48 / t)), c.offset = {
                            x: c.offset.x + (d.width - c.size.width / t) / 2,
                            y: c.offset.y + (d.height - c.size.height / t) / 2
                        }
                    }
                    let _ = this.makeXY(null === (e = this.characterData.avatar) || void 0 === e ? void 0 : null === (i = e.sprite) || void 0 === i ? void 0 : i.scale) || {
                            x: a.A$,
                            y: a.A$
                        },
                        p = o.filter(t => t);
                    return 0 === p.length ? [{
                        id: this.characterData.id,
                        key: "empty",
                        type: "character",
                        size: this.avatarData.sprite.size,
                        container: d,
                        scale: _,
                        flip: null === (l = this.characterData.avatar) || void 0 === l ? void 0 : null === (s = l.sprite) || void 0 === s ? void 0 : s.flip,
                        origin: this.characterData.origin,
                        position: this.characterData.position || {
                            x: a.B_,
                            y: a.B_
                        },
                        physics: c,
                        animations: this.avatarData.animations,
                        hidden: !1,
                        avatar: this.avatarData
                    }] : p.map(t => {
                        var i, e;
                        return {
                            id: this.characterData.id,
                            key: CharacterHelper.getPieceKey(t),
                            type: "character",
                            image: t,
                            size: this.avatarData.sprite.size,
                            container: d,
                            scale: _,
                            flip: null === (e = this.characterData.avatar) || void 0 === e ? void 0 : null === (i = e.sprite) || void 0 === i ? void 0 : i.flip,
                            origin: this.characterData.origin,
                            position: this.characterData.position || {
                                x: a.B_,
                                y: a.B_
                            },
                            physics: c,
                            animations: this.avatarData.animations,
                            hidden: !1,
                            avatar: this.avatarData
                        }
                    })
                }
                static getPieceKey(t) {
                    return t.replace(a.pZ, "").replace(".png", "").replace(/\\|\//g, "-")
                }
                constructor(t, i) {
                    this.characterData = t, this.avatarData = i
                }
            }
        },
        27760: function(t, i, e) {
            "use strict";
            var a = e(83928);
            i.Z = new class {
                preloadOne(t) {
                    if (this.loaded.has(t)) return this.loaded.get(t);
                    let i = (0, a.pt)(t);
                    return this.loaded.set(t, i), i
                }
                preloadedBlob(t) {
                    return this.urls.get((0, a.b7)(t))
                }
                async preloadOneBlob(t) {
                    let i = (0, a.b7)(t);
                    if (this.blobs.has(i)) return this.blobs.get(i);
                    if (i.startsWith("blob:")) return i;
                    let e = (async () => {
                        try {
                            let t = await (0, a.pt)(i);
                            if (!(null == t ? void 0 : t.ok)) return;
                            let e = await t.blob(),
                                r = URL.createObjectURL(e);
                            return this.urls.set(i, r), r
                        } catch (t) {
                            return
                        }
                    })();
                    return this.blobs.set(i, e), e
                }
                constructor() {
                    this.loaded = new Map, this.blobs = new Map, this.urls = new Map
                }
            }
        },
        25852: function(t) {
            t.exports = {
                builderContainer: "CharacterBuilder_builderContainer__mIZ00",
                scrollSelector: "CharacterBuilder_scrollSelector__vE_uh",
                piecesContainer: "CharacterBuilder_piecesContainer__uIs3y",
                choiceBox: "CharacterBuilder_choiceBox__B1wNI",
                pieceChoice: "CharacterBuilder_pieceChoice__bIx5L",
                choiceActive: "CharacterBuilder_choiceActive__3zKba"
            }
        },
        79598: function(t) {
            t.exports = {
                spriteAnimation96_0_3: "Sprite_spriteAnimation96_0_3__ingOS",
                idleSprite96_0_3: "Sprite_idleSprite96_0_3__C4Fie",
                spriteAnimation53_0_3: "Sprite_spriteAnimation53_0_3__WYLzu",
                idleSprite53_0_3: "Sprite_idleSprite53_0_3__hiBLK",
                spriteAnimation53_4_9: "Sprite_spriteAnimation53_4_9__jqfs_",
                idleSprite53_4_9: "Sprite_idleSprite53_4_9__qiimj",
                spriteAnimation53_10_14: "Sprite_spriteAnimation53_10_14__6fpRu",
                idleSprite53_10_14: "Sprite_idleSprite53_10_14__S5fXn",
                spriteAnimation53_15_16: "Sprite_spriteAnimation53_15_16__2nORA",
                idleSprite53_15_16: "Sprite_idleSprite53_15_16__ymEOK",
                spriteAnimation53_17_17: "Sprite_spriteAnimation53_17_17__EyP16",
                spriteAnimation32_0_5: "Sprite_spriteAnimation32_0_5__ypJ4Z",
                idleSprite32_0_5: "Sprite_idleSprite32_0_5__6c0mw",
                spriteAnimation64_1_8: "Sprite_spriteAnimation64_1_8__c4aPT",
                idleSprite64_1_8: "Sprite_idleSprite64_1_8__DAkvQ",
                spriteAnimation64_0_49: "Sprite_spriteAnimation64_0_49__AW6mW",
                idleSprite64_0_49: "Sprite_idleSprite64_0_49__2Dm5T",
                spriteAnimation64_0_15: "Sprite_spriteAnimation64_0_15__O9JT9",
                idleSprite64_0_15: "Sprite_idleSprite64_0_15__p4uPk",
                spriteAnimation25_0_7: "Sprite_spriteAnimation25_0_7__CW9Sq",
                idleSprite25_0_7: "Sprite_idleSprite25_0_7__PYuwa"
            }
        }
    }
]);