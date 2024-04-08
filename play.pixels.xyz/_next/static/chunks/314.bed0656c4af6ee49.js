"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [314], {
        66030: function(t, e, i) {
            i.d(e, {
                r: function() {
                    return CharacterHelper
                }
            });
            var s = i(60604);
            let CharacterHelper = class CharacterHelper {
                buildNftPieceUrl(t, e, i) {
                    var s, o;
                    let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    if (null === (s = t.url) || void 0 === s ? void 0 : s.override) return t.url.override.reduce((i, s) => {
                        if (r) return "".concat(i).concat(s.text || e[s.attribute]);
                        if (void 0 !== i) {
                            if (s.attribute && !e[s.attribute]) {
                                var o;
                                let e = null === (o = t.attributes) || void 0 === o ? void 0 : o.find(t => t.id === s.attribute && t.default);
                                if (!(null == e ? void 0 : e.default)) return;
                                return "".concat(i).concat(e.default)
                            }
                            return "".concat(i).concat(s.text || e[s.attribute])
                        }
                    }, "");
                    let a = e[t.id] || (null === (o = i[t.id]) || void 0 === o ? void 0 : o.default);
                    if (a && "undefined" !== a || r) return "/".concat(t.id, "/").concat(a, ".png")
                }
                getDisplayable(t) {
                    var e, i, s;
                    return null === (s = this.characterData) || void 0 === s ? void 0 : null === (i = s.avatar) || void 0 === i ? void 0 : null === (e = i.display) || void 0 === e ? void 0 : e[t]
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
                    let e = this.avatarData.pieces.reduce((t, e) => ({ ...t,
                        [e.id]: e
                    }), {});
                    return this.avatarData.pieces.filter(t => !t.background).map(t => {
                        var i, o, r, a, l, n, h, d, c;
                        let u;
                        if (u = "".concat(s.pZ, "/game/avatars/").concat(this.avatarData.id), null === (r = this.characterData) || void 0 === r ? void 0 : null === (o = r.avatar) || void 0 === o ? void 0 : null === (i = o.display) || void 0 === i ? void 0 : i.nft) {
                            let i = this.buildNftPieceUrl(t, this.characterData.avatar.display, e);
                            if (!i) return;
                            u += i
                        } else {
                            let i = null !== (l = this.getDisplayable(t.id)) && void 0 !== l ? l : t,
                                s = e[i.type] || t;
                            if (null === (a = s.url) || void 0 === a ? void 0 : a.override) {
                                if (!(null === (n = s.url.override) || void 0 === n ? void 0 : n.every(t => t.text || s[t.attribute]))) return;
                                u += s.url.override.reduce((t, e) => "".concat(t).concat(e.text || s[e.attribute]), "")
                            } else {
                                s.id !== t.id && (i = null !== (c = this.getDisplayable(s.id)) && void 0 !== c ? c : s);
                                let e = i.type || s.id;
                                if (!e) return;
                                if (u += "/".concat(e) + ((null === (h = s.url) || void 0 === h ? void 0 : h.prefix) || ""), s.attributes) {
                                    if (!s.attributes.every(t => t.value || i[t.id] || t.default)) return;
                                    u += s.attributes.reduce((t, e) => "".concat(t, "/").concat(e.value || i[e.id] || e.default), "")
                                }
                                u += ((null === (d = s.url) || void 0 === d ? void 0 : d.suffix) || "") + ".png"
                            }
                        }
                        return u
                    })
                }
                getPiecesSpriteData() {
                    var t, e, i, o, r, a, l;
                    let n = this.getPiecesURLs(),
                        h = { ...null !== (o = this.avatarData.physics) && void 0 !== o ? o : {}
                        },
                        d = this.avatarData.sprite.size ? { ...this.avatarData.sprite.size
                        } : void 0;
                    if ((null === (t = this.avatarData.physics) || void 0 === t ? void 0 : t.offset) && h.size) {
                        let t = null !== (r = this.avatarData.sprite.scale) && void 0 !== r ? r : 1;
                        d || (d = {
                            width: h.size.width / t,
                            height: h.size.height / t
                        }), d.width * t > 32 && (d.width = Math.round(32 / t)), d.height * t > 48 && (d.height = Math.round(48 / t)), h.offset = {
                            x: h.offset.x + (d.width - h.size.width / t) / 2,
                            y: h.offset.y + (d.height - h.size.height / t) / 2
                        }
                    }
                    let c = this.makeXY(null === (i = this.characterData.avatar) || void 0 === i ? void 0 : null === (e = i.sprite) || void 0 === e ? void 0 : e.scale) || {
                            x: s.A$,
                            y: s.A$
                        },
                        u = n.filter(t => t);
                    return 0 === u.length ? [{
                        id: this.characterData.id,
                        key: "empty",
                        type: "character",
                        size: this.avatarData.sprite.size,
                        container: d,
                        scale: c,
                        flip: null === (l = this.characterData.avatar) || void 0 === l ? void 0 : null === (a = l.sprite) || void 0 === a ? void 0 : a.flip,
                        origin: this.characterData.origin,
                        position: this.characterData.position || {
                            x: s.B_,
                            y: s.B_
                        },
                        physics: h,
                        animations: this.avatarData.animations,
                        hidden: !1,
                        avatar: this.avatarData
                    }] : u.map(t => {
                        var e, i;
                        return {
                            id: this.characterData.id,
                            key: CharacterHelper.getPieceKey(t),
                            type: "character",
                            image: t,
                            size: this.avatarData.sprite.size,
                            container: d,
                            scale: c,
                            flip: null === (i = this.characterData.avatar) || void 0 === i ? void 0 : null === (e = i.sprite) || void 0 === e ? void 0 : e.flip,
                            origin: this.characterData.origin,
                            position: this.characterData.position || {
                                x: s.B_,
                                y: s.B_
                            },
                            physics: h,
                            animations: this.avatarData.animations,
                            hidden: !1,
                            avatar: this.avatarData
                        }
                    })
                }
                static getPieceKey(t) {
                    return t.replace(s.pZ, "").replace(".png", "").replace(/\\|\//g, "-")
                }
                constructor(t, e) {
                    this.characterData = t, this.avatarData = e
                }
            }
        },
        4314: function(t, e, i) {
            i.r(e), i.d(e, {
                default: function() {
                    return RoomScene
                }
            });
            var s = i(82260),
                o = i.n(s),
                r = i(34853),
                a = i(80535),
                l = i(34377),
                n = i(76873),
                h = i(60604),
                d = i(51465),
                c = i(64939);
            let BaseNode = class BaseNode {
                get properties() {
                    return this.propCache || (this.propCache = this.getProperties()), this.propCache
                }
                get type() {
                    return this.properties.type
                }
                get hitTestSprite() {
                    return this.sprite
                }
                get key() {
                    return this.properties.key
                }
                get uniqueId() {
                    return this.properties.id
                }
                get scale() {
                    return this.properties.scale || {
                        x: 1,
                        y: 1
                    }
                }
                get flip() {
                    return !!this.properties.flip
                }
                _depth() {
                    var t, e, i;
                    let {
                        physics: s
                    } = this.properties, o = null == s ? void 0 : s.depth;
                    if (o) {
                        if (o instanceof Number) return o;
                        if (o.add) return this.position.y + o.add;
                        if ("y" === o.equal) return this.position.y
                    } else if ((null == s ? void 0 : s.circular) && (null === (e = this.collision) || void 0 === e ? void 0 : null === (t = e.size) || void 0 === t ? void 0 : t.height)) return ((null === (i = this.position) || void 0 === i ? void 0 : i.y) || h.B_) + this.offsetY + this.collision.size.height / 2;
                    return this.bottom
                }
                get depth() {
                    return this._depth()
                }
                get position() {
                    return this.isCursor ? this.tempPosition : this.properties.position
                }
                get owner() {
                    return this.properties.owner
                }
                get x() {
                    var t, e;
                    return (null === (t = this.collision) || void 0 === t ? void 0 : t.origin) && this.position ? this.position.x || 0 : ((null === (e = this.position) || void 0 === e ? void 0 : e.x) || h.B_) + .5 * this.width
                }
                get y() {
                    var t, e;
                    return (null === (t = this.collision) || void 0 === t ? void 0 : t.origin) && this.position ? this.position.y || 0 : ((null === (e = this.position) || void 0 === e ? void 0 : e.y) || h.B_) + .5 * this.height
                }
                get bottom() {
                    var t, e, i, s, o, r, a, l, n;
                    return (null === (e = this.collision) || void 0 === e ? void 0 : null === (t = e.origin) || void 0 === t ? void 0 : t.y) === 1 ? (null === (i = this.position) || void 0 === i ? void 0 : i.y) || 0 : (null === (o = this.collision) || void 0 === o ? void 0 : null === (s = o.size) || void 0 === s ? void 0 : s.height) ? (null !== (n = null === (l = this.position) || void 0 === l ? void 0 : l.y) && void 0 !== n ? n : h.B_) + this.offsetY + this.collision.size.height : ((null === (r = this.position) || void 0 === r ? void 0 : r.y) || h.B_) + ((null === (a = this.sprite) || void 0 === a ? void 0 : a.height) || 10)
                }
                get width() {
                    var t, e, i, s;
                    return (null === (i = this.properties.sprite) || void 0 === i ? void 0 : null === (e = i[0]) || void 0 === e ? void 0 : null === (t = e.size) || void 0 === t ? void 0 : t.width) || (null === (s = this.sprite) || void 0 === s ? void 0 : s.width) || 0
                }
                get height() {
                    var t, e, i, s;
                    return (null === (i = this.properties.sprite) || void 0 === i ? void 0 : null === (e = i[0]) || void 0 === e ? void 0 : null === (t = e.size) || void 0 === t ? void 0 : t.height) || (null === (s = this.sprite) || void 0 === s ? void 0 : s.height) || 0
                }
                get collision() {
                    return this.properties.physics
                }
                get offsetX() {
                    var t, e;
                    return ((null === (e = this.collision) || void 0 === e ? void 0 : null === (t = e.offset) || void 0 === t ? void 0 : t.x) || 0) * this.scale.x
                }
                get offsetY() {
                    var t, e;
                    return ((null === (e = this.collision) || void 0 === e ? void 0 : null === (t = e.offset) || void 0 === t ? void 0 : t.y) || 0) * this.scale.y
                }
                get animations() {
                    return this.properties.animations
                }
                get animMode() {
                    return this.properties.animMode
                }
                get collides() {
                    var t;
                    return !this.isCursor && (null === (t = this.collision) || void 0 === t ? void 0 : t.enabled) || !1
                }
                get hidden() {
                    return this.properties.hidden || !1
                }
                get allowClick() {
                    var t;
                    return !this.isCursor && !(null === (t = this.scene) || void 0 === t ? void 0 : t.clickCaptured())
                }
                get hasClickAction() {
                    return !!(this.properties.onClick || this.animMode === c.m3.click)
                }
                get hasOnCollide() {
                    return !!(this.properties.onCollide || this.animMode & c.m3.approach)
                }
                hasHoverText() {
                    return !this.isCursor && !!this.properties.hoverText
                }
                resetProps() {
                    this.propCache = void 0
                }
                static isAnimated(t) {
                    return t.animations && Object.keys(t.animations).length > 0
                }
                static getFrameDimension(t) {
                    var e, i, s, o, r, a, l, n;
                    let h = Object.values(t.animations).find(t => t && void 0 !== t.frameHeight && void 0 !== t.frameWidth);
                    return {
                        frameWidth: (null == h ? void 0 : h.frameWidth) || (null === (e = t.size) || void 0 === e ? void 0 : e.width) || (null === (o = t.sprite) || void 0 === o ? void 0 : null === (s = o[0]) || void 0 === s ? void 0 : null === (i = s.size) || void 0 === i ? void 0 : i.width) || 32,
                        frameHeight: (null == h ? void 0 : h.frameHeight) || (null === (r = t.size) || void 0 === r ? void 0 : r.height) || (null === (n = t.sprite) || void 0 === n ? void 0 : null === (l = n[0]) || void 0 === l ? void 0 : null === (a = l.size) || void 0 === a ? void 0 : a.height) || 48
                    }
                }
                setupCollision(t) {
                    var e;
                    let i = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    this.body && this.scene.removeCollider(this.body), this.body = t, i && this.scene.addCollider(t);
                    let {
                        collision: s,
                        scale: o,
                        sprite: r
                    } = this;
                    if ((null == s ? void 0 : s.origin) && (null == r || r.setOrigin(null == s ? void 0 : s.origin.x, null == s ? void 0 : s.origin.y), null == r || r.refreshBody()), (null == s ? void 0 : null === (e = s.size) || void 0 === e ? void 0 : e.width) && s.offset) {
                        let e = this.flip ? this.width - s.offset.x * o.x - s.size.width : s.offset.x * o.x;
                        s.circular ? t.setCircle(Math.max(s.size.width, s.size.height) / 2, e, s.offset.y * o.y) : (t.setSize(s.size.width, s.size.height), t.setOffset(e, s.offset.y * o.y))
                    }
                }
                tweenTo(t) {
                    var e, i;
                    let s = null !== (i = this.body) && void 0 !== i ? i : this.sprite;
                    if (s && (null === (e = this.scene) || void 0 === e ? void 0 : e.tweens)) {
                        this.setHover(!1), console.log("tweening to ".concat(t.position.x, ", ").concat(t.position.y, " ").concat(!!this.body));
                        let e = this.scene.tweens.add({
                            targets: [s],
                            ease: t.easing,
                            duration: t.duration || 1500,
                            repeat: 0,
                            x: t.position.x,
                            y: t.position.y,
                            yoyo: !1,
                            onComplete: () => {
                                e.remove()
                            },
                            onStop: () => {
                                e.remove()
                            }
                        })
                    }
                    t.animation && this.play(t.animation)
                }
                play() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "default",
                        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
                    if (this.animations && t in this.animations) {
                        var i, s;
                        let o = {
                            key: "".concat(this.key, "-").concat(t),
                            delay: e
                        };
                        null === (s = this.sprite) || void 0 === s || null === (i = s.anims) || void 0 === i || i.play(o, !0)
                    }
                }
                stop() {
                    var t, e;
                    (null === (e = this.sprite) || void 0 === e ? void 0 : null === (t = e.anims) || void 0 === t ? void 0 : t.isPlaying) && this.sprite.anims.stop()
                }
                generateFrames(t, e) {
                    return this.scene.anims.generateFrameNumbers(t, e)
                }
                createAnimation(t, e, i, s) {
                    if (!s) return;
                    let o = !1,
                        r = {};
                    s.frames ? (r.frames = s.frames, "end" in s && -1 === s.end && (o = !0)) : (r.start = void 0 !== s.start ? s.start : 0, r.end = void 0 !== s.end ? s.end : 0);
                    let a = this.generateFrames(e, r);
                    if (null == a ? void 0 : a.length) return null == t ? void 0 : t.anims.create({
                        key: "".concat(e, "-").concat(i),
                        frames: a,
                        frameRate: s.frameRate || 6,
                        repeat: void 0 !== s.repeat ? s.repeat : 0,
                        hideOnComplete: o
                    })
                }
                setupAnimation() {
                    let t = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                    this.animations && (Object.entries(this.animations).forEach(t => {
                        let [e, i] = t;
                        this.createAnimation(this.sprite, this.key, e, i)
                    }), t && this.play("default", 1e3 * Math.random()))
                }
                contextWith(t) {
                    return { ...t
                    }
                }
                clicked(t, e) {
                    var i;
                    this.animMode === c.m3.click && this.play(), this.emmitPointerEvents(l.fb.GAME_OBJECT_CLICKED, this.properties.key, t, e, this.contextWith({
                        action: null === (i = this.properties.actions) || void 0 === i ? void 0 : i.click
                    }))
                }
                collided() {
                    var t;
                    this.animMode && this.animMode & c.m3.approach && this.play();
                    let e = {
                        key: this.properties.key,
                        onCollide: null === (t = this.properties) || void 0 === t ? void 0 : t.onCollide,
                        ...this.contextWith({})
                    };
                    return l.ZP.sendEvent(l.fb.PLAYER_COLLIDED_WITH_OBJECT, e), !0
                }
                uncollided() {
                    var t;
                    this.animMode === c.m3.approachloop && this.stop();
                    let e = {
                        key: this.properties.key,
                        onCollide: null === (t = this.properties) || void 0 === t ? void 0 : t.onCollide,
                        ...this.contextWith({})
                    };
                    return l.ZP.sendEvent(l.fb.PLAYER_UNCOLLIDED_WITH_OBJECT, e), !0
                }
                showHoverText(t, e) {
                    var i, s, o, r;
                    let a = null === (s = this.scene) || void 0 === s ? void 0 : null === (i = s.input) || void 0 === i ? void 0 : i.activePointer;
                    t ? this.emmitPointerEvents(l.fb.GAME_OBJECT_MOUSEOVER, this.properties.key, a, null === (o = this.scene.selfPlayer) || void 0 === o ? void 0 : o.position, this.contextWith({
                        text: this.properties.hoverText,
                        item: e
                    })) : this.emmitPointerEvents(l.fb.GAME_OBJECT_MOUSEOUT, this.properties.key, a, null === (r = this.scene.selfPlayer) || void 0 === r ? void 0 : r.position)
                }
                setupInteraction() {
                    var t;
                    let e = null === (t = this.hitTestSprite) || void 0 === t ? void 0 : t.setInteractive();
                    e && e.setData("pixelnode", this)
                }
                loadAsset(t) {
                    if (BaseNode.isAnimated(t)) {
                        let {
                            frameWidth: e,
                            frameHeight: i
                        } = BaseNode.getFrameDimension(t);
                        this.scene.preloadAsset(t.key, {
                            image: t.image,
                            frameWidth: e,
                            frameHeight: i,
                            hash: t.hash
                        })
                    } else this.scene.preloadAsset(t.key, {
                        image: t.image,
                        hash: t.hash
                    })
                }
                setHover(t) {
                    t && !this.isCursor ? this.outline(!0) : this.outline(!1)
                }
                magnetTo(t, e) {}
                updateHoverAnimation() {
                    var t, e;
                    if ((null === (t = this.outlineContainer) || void 0 === t ? void 0 : t.visible) && this.sprite) {
                        let t = this.sprite.depth - 1;
                        this.outlineContainer.setDepth(t).setPosition(this.sprite.x, this.sprite.y), null === (e = this.outlineContainer) || void 0 === e || e.each(t => {
                            var e;
                            let i = t.getData("cloned");
                            (null === (e = i.frame) || void 0 === e ? void 0 : e.name) && t.setFrame(i.frame.name)
                        })
                    }
                }
                addOutlineSprites(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        i = [];
                    if (null == t ? void 0 : t.texture) {
                        var s, o, r, a;
                        let l = e ? t.x : 0,
                            n = e ? t.y : 0,
                            h = null === (s = this.scene) || void 0 === s ? void 0 : s.add.sprite(l - 2, n - 2, t.texture.key);
                        return i.push(h), h = null === (o = this.scene) || void 0 === o ? void 0 : o.add.sprite(l + 2, n - 2, t.texture.key), i.push(h), h = null === (r = this.scene) || void 0 === r ? void 0 : r.add.sprite(l - 2, n + 2, t.texture.key), i.push(h), h = null === (a = this.scene) || void 0 === a ? void 0 : a.add.sprite(l + 2, n + 2, t.texture.key), i.push(h), i.forEach(e => {
                            e.setData("cloned", t).setTintFill(16769327).setScale(t.scale).setAlpha(.5).setVisible(!0).setFlipX(t.flipX).setOrigin(t.originX, t.originY)
                        }), this.outlineContainer ? this.outlineContainer.add(i) : this.outlineContainer = this.scene.add.container(this.x, this.y, i), !0
                    }
                    return !1
                }
                outline(t) {
                    if (!t) {
                        this.offOutline();
                        return
                    }!this.outlineContainer && this.sprite && this.addOutlineSprites(this.sprite), this.outlineContainer && this.sprite && this.onOutline()
                }
                offOutline() {
                    if (this.outlineContainer) {
                        let t = new Set;
                        this.outlineContainer.each(e => {
                            let i = e.getData("cloned");
                            t.add(i)
                        }), t.forEach(t => t.off("animationupdate", this.updateHoverAnimation, this)), this.outlineContainer.setVisible(!1)
                    }
                }
                onOutline() {
                    if (this.outlineContainer) {
                        this.outlineContainer.setVisible(!0), this.updateHoverAnimation();
                        let t = new Set;
                        this.outlineContainer.each(e => {
                            let i = e.getData("cloned");
                            t.add(i)
                        }), t.forEach(t => t.on("animationupdate", this.updateHoverAnimation, this))
                    }
                }
                resetOutline() {
                    var t, e;
                    this.offOutline(), null === (t = this.outlineContainer) || void 0 === t || t.each(t => {
                        null == t || t.destroy()
                    }), null === (e = this.outlineContainer) || void 0 === e || e.destroy(), this.outlineContainer = void 0
                }
                applyChanges() {}
                getSnapPosition(t, e) {
                    var i;
                    if (!this.sprite) return t;
                    let s = this.sprite.getBounds(),
                        {
                            height: o
                        } = s,
                        r = t.x,
                        a = t.y;
                    h.D9 !== e && (r -= e / 2, a -= e / 2);
                    let l = Math.floor(r / e) * e,
                        n = Math.ceil(a / e) * e,
                        d = s.height > e ? Math.round(Math.floor(s.height / e) / 2) : 0;
                    if (n = n - o + d * e, null === (i = this.getProperties().physics) || void 0 === i ? void 0 : i.origin) {
                        let t = this.getProperties().physics.origin;
                        t.x < .5 ? l -= s.width * t.x : l += s.width * t.x, t.y < .5 ? n -= s.height * t.y : n += s.height * t.y
                    }
                    return {
                        x: l,
                        y: n
                    }
                }
                updateTemporaryPosition(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : h.D9;
                    this.tempPosition = e > 0 ? this.getSnapPosition(t, e) : t
                }
                pickUp() {
                    this.isCursor = !0, this.setHover(!1)
                }
                returnCursor() {
                    this.isCursor = !1
                }
                preload() {
                    this.load()
                }
                create() {
                    this.add(), this.scene.onNodeCreated(this)
                }
                update() {
                    this.applyChanges()
                }
                destroy() {
                    var t, e;
                    this.scene && this.body && this.scene.removeCollider(this.body), this.resetOutline(), null === (t = this.body) || void 0 === t || t.destroy(), null === (e = this.sprite) || void 0 === e || e.destroy(!0)
                }
                calcTriggerArea(t) {
                    var e, i, s, o, r, a;
                    let l = (null === (e = this.body) || void 0 === e ? void 0 : e.x) || this.x,
                        n = (null === (i = this.body) || void 0 === i ? void 0 : i.y) || this.y,
                        h = (null === (s = this.body) || void 0 === s ? void 0 : s.width) || (null == t ? void 0 : null === (o = t.size) || void 0 === o ? void 0 : o.width) || this.width,
                        d = (null === (r = this.body) || void 0 === r ? void 0 : r.height) || (null == t ? void 0 : null === (a = t.size) || void 0 === a ? void 0 : a.height) || this.height,
                        c = null == t ? void 0 : t.triggerRadius;
                    return c ? {
                        x: l,
                        y: n,
                        radius: c
                    } : {
                        x: l,
                        y: n,
                        width: h,
                        height: d
                    }
                }
                getBuildArea() {
                    var t, e, i, s, o, r, a, l;
                    let {
                        buildArea: n
                    } = this.getProperties(), h = null === (t = this.collision) || void 0 === t ? void 0 : t.offset, d = null === (e = this.collision) || void 0 === e ? void 0 : e.size, c = null == n ? void 0 : n.tilelike;
                    return (null == n ? void 0 : n.offset) && (null == n ? void 0 : n.size) ? {
                        left: this.x - this.width / 2 + (null !== (i = n.offset.x) && void 0 !== i ? i : 0),
                        top: this.y - this.height / 2 + (null !== (s = n.offset.y) && void 0 !== s ? s : 0),
                        width: n.size.width,
                        height: n.size.height,
                        tilelike: c
                    } : {
                        left: this.x - this.width / 2 + (null !== (o = null == h ? void 0 : h.x) && void 0 !== o ? o : 0),
                        top: this.y - this.height / 2 + (null !== (r = null == h ? void 0 : h.y) && void 0 !== r ? r : 0),
                        width: null !== (a = null == d ? void 0 : d.width) && void 0 !== a ? a : this.width,
                        height: null !== (l = null == d ? void 0 : d.height) && void 0 !== l ? l : this.height,
                        tilelike: c
                    }
                }
                canTargetSurface(t) {
                    var e;
                    return null === (e = this.properties.targetSurfaceTypes) || void 0 === e ? void 0 : e.includes(t)
                }
                getTriggerArea() {
                    let t = this.getProperties().onCollide;
                    return (null == t ? void 0 : t.radius) ? {
                        x: this.x,
                        y: this.y,
                        radius: t.radius
                    } : this.calcTriggerArea(this.collision)
                }
                constructor(t, e = !1) {
                    this.scene = t, this.isCursor = e, this.tempPosition = {
                        x: 0,
                        y: 0
                    }, this.hoverTint = 10066176, this.emmitPointerEvents = (t, e, i, s, o) => {
                        let r = {
                            key: e,
                            mouse: {
                                x: i.x,
                                y: i.y
                            },
                            world: {
                                x: i.worldX,
                                y: i.worldY
                            },
                            object: {
                                x: this.x,
                                y: this.y,
                                width: this.width,
                                height: this.height
                            },
                            selfPlayer: s,
                            leftClick: i.leftButtonReleased(),
                            rightClick: i.rightButtonReleased(),
                            ...o
                        };
                        l.ZP.sendEvent(t, r)
                    }
                }
            };
            let HitTestObject = class HitTestObject extends o().GameObjects.Container {
                CircleContains(t, e, i) {
                    return o().Geom.Circle.ContainsPoint(t, {
                        x: e,
                        y: i
                    })
                }
                setInteractive(t, e, i) {
                    return super.setInteractive(t, e, i), this
                }
                constructor(t, e, i, s, o, r) {
                    super(t, e, i), this.depth = r, this.setSize(s, o), this.visible = !0
                }
            };
            var u = i(82485);
            let GenericNode = class GenericNode extends BaseNode {
                load() {
                    this.loadAsset(this.properties)
                }
                get hitTestSprite() {
                    var t;
                    return null !== (t = this.hittest) && void 0 !== t ? t : this.sprite
                }
                clickableWithItem(t) {
                    return (0, u.ZZ)(t, this.properties.key, this.properties.entityType)
                }
                add() {
                    let t = 0 !== this.height;
                    if (this.sprite = this.collides ? this.scene.physics.add.sprite(this.x, this.y, this.key) : this.scene.add.sprite(this.x, this.y, this.key), !t && (this.properties.size = {
                            width: this.sprite.width,
                            height: this.sprite.height
                        }, this.sprite.setPosition(this.x, this.y), this.collides && this.sprite.body.reset(this.x, this.y)), this.sprite.setDepth(this.depth), this.sprite.setScale(this.scale.x, this.scale.y), this.sprite.setFlipX(this.flip), this.collides) try {
                        this.setupCollision(this.sprite.body)
                    } catch (t) {
                        console.error(t)
                    }
                    this.hasClickAction && (this.hittest = new HitTestObject(this.scene, this.x, this.y, this.sprite.width, this.sprite.height, this.depth + 2e3), this.scene.add.existing(this.hittest));
                    let e = void 0 === this.animMode || this.animMode === c.m3.loop;
                    this.setupAnimation(e), this.setupInteraction(), this.hidden && (this.sprite.setVisible(this.isCursor), this.scene.invisibleObjects.push(this))
                }
                returnCursor() {
                    var t, e, i;
                    super.returnCursor(), null === (t = this.sprite) || void 0 === t || t.setPosition(this.x, this.y), null === (e = this.hittest) || void 0 === e || e.setPosition(this.x, this.y), null === (i = this.sprite) || void 0 === i || i.setDepth(this.depth)
                }
                applyChanges() {
                    var t, e;
                    super.applyChanges(), null === (t = this.sprite) || void 0 === t || t.setPosition(this.x, this.y), null === (e = this.hittest) || void 0 === e || e.setPosition(this.x, this.y)
                }
                destroy() {
                    var t;
                    super.destroy(), null === (t = this.hittest) || void 0 === t || t.destroy()
                }
                constructor(t, e = !1) {
                    super(t, e), this.scene = t, this.isCursor = e
                }
            };
            var p = i(39983),
                v = i(83928),
                m = i(79676);
            let ShadowNode = class ShadowNode {
                getRotatedSize(t, e, i) {
                    let s = Math.abs(Math.cos(i)),
                        o = Math.abs(Math.sin(i));
                    return {
                        w: t * s + e * o,
                        h: t * o + e * s
                    }
                }
                getSkewOffset(t, e, i) {
                    return Math.tan(i) * e
                }
                create(t, e) {
                    try {
                        let i = t.x,
                            s = t.y;
                        this.source = t, this.key = t.texture.key;
                        let o = t.height;
                        if (t.body && (o = t.height - t.body.height), this.shadow = new m.f0(this.scene, i, s, this.key), this.scene.add.existing(this.shadow), this.shadow.setScale(t.scaleX, t.scaleY), this.shadow.setTint(0), this.shadow.setAlpha(.3), t.visible || this.shadow.setVisible(!1), o < .30000000000000004 * this.source.height) {
                            this.scaleY = 1, this.skewX = 0;
                            let t = this.getSkewOffset(this.shadow.width, o, .36);
                            this.offsetX = 2 * t, this.offsetY = -this.offsetX / Math.tan(.36)
                        } else {
                            let e = this.getSkewOffset(this.shadow.width, this.shadow.height, .36);
                            this.scaleY = .7, t.flipX ? (this.shadow.scaleX = -1 * this.shadow.scaleX, this.skewX = .36, this.shadow.setSkewX(.36)) : (this.skewX = -.36, this.shadow.setSkewX(-.36)), this.offsetX = e / 2, this.offsetY = .30000000000000004 * this.shadow.height * .5
                        }
                        let r = t.anims && t.texture.frameTotal > 1;
                        r && this.source.on("animationupdate", this.updateFrame, this), this.update(e)
                    } catch (t) {
                        console.log(t)
                    }
                }
                updateFrame() {
                    var t, e;
                    let i = null === (t = this.source) || void 0 === t ? void 0 : t.frame;
                    this.shadow && (null == i ? void 0 : i.name) !== void 0 && i.name !== (null === (e = this.shadow.frame) || void 0 === e ? void 0 : e.name) && (this.shadow.setFrame(i.name), this.shadow.resetVerts(), this.skewX && this.shadow.setSkewX(this.skewX))
                }
                update(t) {
                    this.shadow && this.source && (t ? (this.shadow.setPosition(t.x + this.source.x + this.offsetX, t.y + this.source.y + this.offsetY), this.shadow.setDepth(t.depth - 1e3), this.shadow.setVisible(this.source.visible && t.visible)) : (this.shadow.setPosition(this.source.x + this.offsetX, this.source.y + this.offsetY), this.shadow.setDepth(this.source.depth - 1e3), this.shadow.setVisible(this.source.visible)), this.updateFrame(), this.source.flipX ? this.shadow.setScale(-this.source.scaleX, this.source.scaleY * this.scaleY) : this.shadow.setScale(this.source.scaleX, this.source.scaleY * this.scaleY))
                }
                destroy() {
                    var t, e;
                    null === (t = this.shadow) || void 0 === t || t.destroy(), null === (e = this.source) || void 0 === e || e.off("animationupdate", this.update, this), delete this.shadow, delete this.source
                }
                constructor(t) {
                    this.scene = t, this.offsetX = 10, this.offsetY = -10, this.scaleY = .7, this.skewX = .36, this.key = ""
                }
            };
            let ObjectNode = class ObjectNode extends GenericNode {
                getKey() {
                    return this.properties.key
                }
                add() {
                    let t = !!this.scene.renderer.gl;
                    super.add();
                    try {
                        var e, i, s, o, r, a, l, n;
                        null === (e = this.body) || void 0 === e || e.setImmovable(), null === (i = this.sprite) || void 0 === i || i.setDepth(this.depth);
                        let h = this.properties.labels;
                        if (t && (null == h ? void 0 : h.includes("bendy")) && "1" === (0, v.Ul)("enhanced_enabled")) {
                            let t = this.scene.renderer.pipelines.get("Bend");
                            null === (r = this.sprite) || void 0 === r || r.setPipeline(t)
                        }
                        if (this.properties.soundId && !this.isCursor && this.position) {
                            let t = {
                                x: this.x,
                                y: this.y
                            };
                            (null === (l = this.collision) || void 0 === l ? void 0 : null === (a = l.size) || void 0 === a ? void 0 : a.height) && (t.y = this.position.y + this.offsetY + .5 * this.collision.size.height, t.x = this.position.x + this.offsetX + .5 * this.collision.size.width), null === (n = p.default.instance) || void 0 === n || n.addPositional(this.uniqueId, this.properties.soundId, t)
                        }
                        t && (null === (o = this.properties.sprite) || void 0 === o ? void 0 : null === (s = o[0]) || void 0 === s ? void 0 : s.shadow) && this.sprite && !this.isCursor && (this.shadow = new ShadowNode(this.scene), this.shadow.create(this.sprite))
                    } catch (t) {
                        console.log(t)
                    }
                }
                applyChanges() {
                    super.applyChanges(), this.sprite && this.shadow && this.shadow.update()
                }
                editCategory() {
                    return this.properties.isWall ? "walls" : "objects"
                }
                contextWith(t) {
                    return super.contextWith({ ...t,
                        useType: "object",
                        targetId: this.getProperties().id
                    })
                }
                destroy() {
                    var t, e;
                    super.destroy(), null === (t = this.shadow) || void 0 === t || t.destroy(), delete this.shadow, null === (e = p.default.instance) || void 0 === e || e.removePositional(this.uniqueId)
                }
                getTriggerId() {
                    return this.uniqueId
                }
                constructor(t, e, i = !1) {
                    super(t, i), this.scene = t, this.getProperties = e, this.isCursor = i
                }
            };
            var y = i(71343);
            let EntityNode = class EntityNode extends GenericNode {
                editCategory() {
                    return "entities"
                }
                get uniqueId() {
                    return this.mid
                }
                static checkTimers() {
                    let t = Date.now();
                    t - EntityNode.rateLimit > 500 && (EntityNode.rateLimit = t, l.ZP.sendEvent(y.m.timerCheck))
                }
                get hasClickAction() {
                    return "storage" === this.entityType
                }
                update() {
                    super.update()
                }
                add() {
                    var t;
                    super.add(), null === (t = this.body) || void 0 === t || t.setImmovable()
                }
                contextWith(t) {
                    return super.contextWith({ ...t,
                        useType: "entity",
                        entityType: this.properties.entityType,
                        targetId: this.mid
                    })
                }
                convertToPlayerEntity(t, e) {
                    this.mid = t, this.getProperties = e
                }
                setPosition(t) {
                    var e;
                    this.properties.position = {
                        x: t.x,
                        y: t.y
                    }, null === (e = this.sprite) || void 0 === e || e.setDepth(this.depth)
                }
                getTriggerId() {
                    return this.mid
                }
                constructor(t, e, i = !1) {
                    super(t, i), this.scene = t, this.getProperties = e, this.isCursor = i, this.currentFrame = 0;
                    let s = e();
                    this.mid = s.id, this.entityType = s.entityType
                }
            };
            EntityNode.rateLimit = 0;
            var f = i(19445),
                g = i(70247);
            let SoilNode = class SoilNode extends EntityNode {
                get type() {
                    return "soil"
                }
                get collides() {
                    return !1
                }
                add() {
                    super.add();
                    let t = g.Z.getGameEntity(this.properties.key);
                    this.soilDef = null == t ? void 0 : t.soil
                }
                clickableWithItem(t) {
                    return "normal" === this.state && (0, u.ZP)(t, this.properties.key, this.entityType)
                }
                setupAnimation() {}
                update() {
                    var t;
                    this.soilDef && (this.currentFrame = this.soilDef.states[this.state].spriteFrame), null === (t = this.sprite) || void 0 === t || t.setFrame(this.currentFrame), super.update()
                }
                contextWith(t) {
                    return super.contextWith({ ...t,
                        animation: this.getAnimation()
                    })
                }
                play() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "default",
                        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : void 0;
                    if ("crop-seeding-anims" === t) {
                        var i;
                        let {
                            position: t
                        } = this.properties;
                        if (!t) return;
                        let {
                            x: e,
                            y: s
                        } = t;
                        null === (i = this.scene) || void 0 === i || i.playOneTimeAnimation({
                            spriteName: "crop-seeding",
                            animationName: "crop-seeding-anims",
                            x: e,
                            y: s
                        })
                    } else super.play(t, e)
                }
                getAnimation() {
                    var t, e;
                    let i = (0, f.B6)(a.h.getState());
                    if (!i || !(null === (t = this.scene) || void 0 === t ? void 0 : t.playOneTimeAnimation)) return;
                    let {
                        position: s
                    } = this.properties;
                    if (!s) return;
                    let {
                        x: o,
                        y: r
                    } = s, l = (0, u.ZP)(i, "ent_soil", "soil");
                    if (!l || !(0, u.yC)(i, a.h.getState().game.player)) return;
                    let n = null === (e = i.onUse) || void 0 === e ? void 0 : e.types;
                    if (!n || !n.length) return;
                    let h = "";
                    if (n.includes("plant") && (h = "crop-seeding"), h) return {
                        spriteName: h,
                        animationName: "".concat(h, "-anims"),
                        x: o,
                        y: r
                    }
                }
                constructor(t, e, i = !1) {
                    super(t, e, i), this.scene = t, this.getProperties = e, this.isCursor = i, this.state = "normal"
                }
            };
            let CropNode = class CropNode extends EntityNode {
                get collides() {
                    return !1
                }
                get formatTime() {
                    if (this.needsWater) return r.ZP.t("watercrop", {
                        ns: "ui",
                        defaultValue: "Needs Water"
                    });
                    if (this.growTime && ["seed", "healthy1", "healthy2"].includes(this.state)) {
                        var t;
                        let e = (Date.now() - (null !== (t = this.startTime) && void 0 !== t ? t : Date.now())) / 1e3,
                            i = 60 * this.growTime - e;
                        return "TIMER:".concat(i, ":").concat(this.startTime, ":").concat(this.growTime)
                    }
                    return ["ripe"].includes(this.state) ? r.ZP.t("harvestready", {
                        ns: "ui",
                        defaultValue: "Ready to Shear"
                    }) : r.ZP.t("deadcrop", {
                        ns: "ui",
                        defaultValue: "Dead - Use Shears"
                    })
                }
                updateState(t, e) {
                    this.growTime = (0, u.SB)(e, t.crop), this.startTime = Date.now(), this.state = t.crop.state, this.needsWater = (0, u.q7)(e, t.crop), this.timer && clearTimeout(this.timer), this.timer = 0;
                    let i = (0, u.N8)(e, t.crop);
                    !this.needsWater && i > 0 && (this.timer = setTimeout(EntityNode.checkTimers, 6e4 * i + 1e3))
                }
                clickableWithItem(t) {
                    return (0, u.ZP)(t, this.properties.key, this.entityType, this.state)
                }
                get hasClickAction() {
                    return !0
                }
                setHover(t) {
                    var e, i;
                    if (!this.hoverSprite) {
                        let t = null === (i = this.sprite) || void 0 === i ? void 0 : i.getBounds();
                        if (!t) return;
                        let e = "cropHover".concat(t.width, "_").concat(t.height);
                        if (!this.scene.textures.exists(e)) {
                            let i = this.scene.add.graphics();
                            i.fillStyle(52224, .2), i.fillRoundedRect(0, 0, t.width, t.height, 6), i.generateTexture(e, t.width, t.height)
                        }
                        this.hoverSprite = this.scene.add.image(t.centerX, t.centerY, e), this.hoverSprite.setDepth(this.sprite.depth - 1)
                    }
                    null === (e = this.hoverSprite) || void 0 === e || e.setVisible(t)
                }
                setupAnimation() {}
                update() {
                    var t;
                    this.cropDef && (this.currentFrame = this.cropDef.states[this.state].spriteFrame), null === (t = this.sprite) || void 0 === t || t.setFrame(this.currentFrame), super.update()
                }
                destroy() {
                    var t;
                    super.destroy(), this.timer && clearTimeout(this.timer), null === (t = this.hoverSprite) || void 0 === t || t.destroy()
                }
                contextWith(t) {
                    return super.contextWith({ ...t,
                        animation: this.getAnimation(),
                        text: this.formatTime,
                        style: "solid",
                        type: "crop",
                        cropState: this.state
                    })
                }
                hasHoverText() {
                    return !this.isCursor && !!this.formatTime
                }
                showHoverText(t, e) {
                    t && e || super.showHoverText(t, e)
                }
                getAnimation() {
                    var t, e, i;
                    let s = (0, f.B6)(a.h.getState());
                    if (!s || !(null === (t = this.scene) || void 0 === t ? void 0 : t.playOneTimeAnimation)) return;
                    let o = (0, u.ZP)(s, this.properties.key, null === (e = this.properties) || void 0 === e ? void 0 : e.entityType, this.state);
                    if (!o) return;
                    let r = this.properties.position;
                    if (!r) return;
                    let {
                        x: l,
                        y: n
                    } = r;
                    if (!(0, u.yC)(s, a.h.getState().game.player)) return;
                    let h = null === (i = s.onUse) || void 0 === i ? void 0 : i.types;
                    if (!h || !h.length) return;
                    let d = "";
                    if (h.includes("plant") ? d = "crop-seeding" : h.includes("water") ? d = "crop-watering" : h.includes("fertilize") ? d = "crop-fertilizing" : h.includes("harvest") && (d = "itm_goldenRake" === s.id ? "crop-goldenrake-harvesting" : "crop-shear-harvesting"), d) return {
                        spriteName: d,
                        animationName: "".concat(d, "-anims"),
                        x: l,
                        y: n
                    }
                }
                constructor(t, e, i = !1) {
                    super(t, e, i), this.scene = t, this.getProperties = e, this.isCursor = i, this.state = "seed";
                    let s = g.Z.getGameEntity(this.properties.key);
                    this.cropDef = null == s ? void 0 : s.crop
                }
            };
            let ItemNode = class ItemNode extends GenericNode {
                editCategory() {
                    return "items"
                }
                getTriggerId() {
                    return this.id
                }
                constructor(t, e, i = !1) {
                    super(t, i), this.scene = t, this.getProperties = e, this.isCursor = i;
                    let s = e();
                    this.id = s.id, i && (this.tempPosition = {
                        x: 0,
                        y: 0
                    })
                }
            };
            var b = i(66030);
            let LayeredNode = class LayeredNode extends BaseNode {
                get layersProperties() {
                    return this.getLayersProperties()
                }
                getProperties() {
                    return this.getLayersProperties()[0]
                }
                load() {
                    this.layersProperties.forEach(t => {
                        this.loaded.push(t.key), this.loadAsset(t)
                    })
                }
                play() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "default",
                        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
                    this.layers.forEach(s => {
                        var o;
                        let [r, a] = s, l = "".concat(r, "-").concat(t);
                        (null === (o = a.anims) || void 0 === o ? void 0 : o.exists(l)) ? (a.anims.currentAnim && -1 !== a.anims.currentAnim.repeat ? (a.anims.chain(void 0), a.anims.chain({
                            key: l,
                            delay: e,
                            timeScale: i
                        })) : (a.anims.play({
                            key: l,
                            delay: e,
                            timeScale: i
                        }, !0), a.anims.timeScale = i), a.setVisible(!0)) : a.setVisible(!1)
                    })
                }
                setHover(t) {
                    let e = t ? this.hoverTint : 16777215;
                    for (let [, t] of this.layers) null == t || t.setTint(e)
                }
                setupAnimation() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    this.layersProperties.forEach(e => {
                        e.animations && (Object.entries(e.animations).forEach(t => {
                            let [i, s] = t;
                            this.createAnimation(this.layersSprites[e.key], "".concat(e.key), i, s)
                        }), t && this.play("default", 1e3 * Math.random()))
                    })
                }
                get hitTestSprite() {
                    return this.container
                }
                add() {
                    var t, e;
                    this.tallest = 16, this.widest = 10, this.container && (console.log("LayeredNode was not destroyed before recreation"), this.destroy());
                    let i = this.scale;
                    if (this.loaded.forEach(t => {
                            let e = this.scene.add.sprite(0, 0, t).setDepth(this.depth),
                                s = e.height * i.y,
                                o = e.width * i.x;
                            e.setScale(i.x, i.y), e.setFlipX(this.flip), s > this.tallest && (this.tallest = s), o > this.widest && (this.widest = o), this.layersSprites[t] = e
                        }), this.spriteWidth = this.widest, this.layers = Object.entries(this.layersSprites), this.sprite = null === (t = this.layers[0]) || void 0 === t ? void 0 : t[1], this.container = this.scene.add.container(this.x, this.y, Object.values(this.layersSprites)), this.properties.container && (this.widest = this.properties.container.width * i.x, this.tallest = this.properties.container.height * i.y), this.container.setSize(this.widest, this.tallest), this.collides) try {
                        this.scene.physics.world.enable(this.container), this.setupCollision(null === (e = this.container) || void 0 === e ? void 0 : e.body)
                    } catch (t) {
                        console.error("Impossible to set colision for ".concat(this.key), this.properties, t)
                    }
                    this.setupAnimation(), this.setupInteraction()
                }
                destroy() {
                    var t, e, i;
                    null === (t = this.container) || void 0 === t || t.each(t => {
                        null == t || t.destroy()
                    }), null === (e = this.container) || void 0 === e || e.destroy(), this.container = void 0, null === (i = this.body) || void 0 === i || i.destroy(), this.body = void 0, this.layers.forEach(t => {
                        let [, e] = t;
                        null == e || e.destroy()
                    }), this.layersSprites = {}, this.layers = [], this.loaded = []
                }
                constructor(t, e = !1) {
                    super(t, e), this.scene = t, this.isCursor = e, this.layersSprites = {}, this.layers = [], this.tallest = 0, this.widest = 0, this.spriteWidth = 0, this.loaded = []
                }
            };
            let ParticleFX = class ParticleFX {
                static preload(t) {
                    t.load.spritesheet("fx-spritesheet", (0, v.Uk)("/game/ui/sprites/fx-spritesheet.png"), {
                        frameWidth: 8,
                        frameHeight: 8
                    }), p.default.loadAudio("snd_footstep1"), p.default.loadAudio("snd_footstep2"), t.load.spritesheet("fx-heart", (0, v.Uk)("/game/ui/sprites/fx-heart.png"), {
                        frameWidth: 32,
                        frameHeight: 32
                    })
                }
                static init(t) {
                    ParticleFX.heartEmitter = t.add.particles(0, 0, "fx-heart", {
                        frame: [0],
                        gravityY: 4,
                        scale: {
                            start: .2,
                            end: 1.2
                        },
                        alpha: {
                            start: 1,
                            end: 0
                        },
                        lifespan: {
                            min: 800,
                            max: 2200
                        },
                        quantity: 6,
                        delay: {
                            min: 0,
                            max: 500
                        },
                        angle: {
                            min: 250,
                            max: 290
                        },
                        speed: {
                            min: 20,
                            max: 40
                        }
                    }), ParticleFX.heartEmitter.setDepth(1e4), ParticleFX.footprintEmitter = t.add.particles(0, 0, "fx-spritesheet", {
                        frame: [1],
                        angle: 0,
                        speed: 0,
                        gravityY: 0,
                        scale: {
                            start: 1,
                            end: .5
                        },
                        alpha: {
                            start: .2,
                            end: 0
                        },
                        lifespan: ParticleFX.footprintLifespan,
                        maxAliveParticles: 400
                    }), ParticleFX.footprintEmitter.setDepth(0), ParticleFX.hotprintEmitter = t.add.particles(0, 0, "fx-spritesheet", {
                        frame: [0],
                        angle: -90,
                        speed: -10,
                        gravityY: 1,
                        scale: {
                            start: 1,
                            end: .5
                        },
                        alpha: {
                            start: 1,
                            end: 0
                        },
                        tint: 16752896,
                        lifespan: .9 * ParticleFX.footprintLifespan,
                        maxAliveParticles: 200
                    }), ParticleFX.hotprintEmitter.setDepth(0), ParticleFX.clickEmitter = t.add.particles(0, 0, "fx-spritesheet", {
                        frame: [8, 9, 10, 11, 12, 13, 14, 15],
                        angle: {
                            min: 180,
                            max: 360
                        },
                        speed: {
                            min: 8,
                            max: 20
                        },
                        frequency: 500,
                        gravityY: 0,
                        quantity: ParticleFX.clickParticleCount,
                        scale: {
                            start: 1,
                            end: 1
                        },
                        alpha: {
                            start: .4,
                            end: 0
                        },
                        lifespan: {
                            min: 800,
                            max: 1200
                        }
                    }), ParticleFX.clickEmitter.setDepth(1e4)
                }
                static destroy() {
                    var t, e, i;
                    null === (t = ParticleFX.footprintEmitter) || void 0 === t || t.destroy(), null === (e = ParticleFX.heartEmitter) || void 0 === e || e.destroy(), null === (i = ParticleFX.clickEmitter) || void 0 === i || i.destroy()
                }
                createFootsteps(t) {
                    this.footprintCounter = 1, this.lastFootprintX = t.x, this.lastFootprintY = t.y
                }
                emitFootsteps(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 16752896;
                    if (!ParticleFX.enabled) return;
                    let s = Math.round(t.x),
                        o = Math.round(t.y),
                        r = (this.lastFootprintX - s) ** 2 + (this.lastFootprintY - o) ** 2;
                    if (ParticleFX.debug && console.log("footprint dist:".concat(r, " at:").concat(s, ",").concat(o)), r > ParticleFX.footprintSpacing) {
                        if (this.footprintCounter += 1, e && ParticleFX.hotprintEmitter) ParticleFX.hotprintEmitter.setParticleTint(i), ParticleFX.hotprintEmitter.emitParticle(1, s, o);
                        else {
                            var a;
                            null === (a = ParticleFX.footprintEmitter) || void 0 === a || a.emitParticle(1, s, o)
                        }
                        this.lastFootprintX = s, this.lastFootprintY = o, this.isPlayer && (1 & this.footprintCounter) == 1 && p.default.playAudio("snd_footstep".concat(((2 & this.footprintCounter) >> 1) + 1))
                    }
                }
                static emitDust(t) {
                    var e;
                    if (!ParticleFX.enabled) return;
                    let i = Math.round(t.x),
                        s = Math.round(t.y);
                    ParticleFX.debug && console.log("clickFX at:".concat(i, ",").concat(s)), null === (e = ParticleFX.clickEmitter) || void 0 === e || e.explode(ParticleFX.clickParticleCount, i, s)
                }
                static emitHearts(t) {
                    if (!ParticleFX.enabled) return;
                    let e = Math.round(t.x),
                        i = Math.round(t.y);
                    ParticleFX.debug && console.log("hearts at:".concat(e, ",").concat(i)), ParticleFX.heartEmitter && 1e3 > ParticleFX.heartEmitter.getAliveParticleCount() && ParticleFX.heartEmitter.explode(6, e, i)
                }
                constructor() {
                    this.lastFootprintX = -1, this.lastFootprintY = -1, this.footprintCounter = 0, this.isPlayer = !1
                }
            };
            ParticleFX.enabled = !0, ParticleFX.debug = !1, ParticleFX.footprintSpacing = 100, ParticleFX.footprintLifespan = 2500, ParticleFX.heartLifespan = 3e3, ParticleFX.clickParticleCount = 8;
            let ChatBubble = class ChatBubble extends o().GameObjects.Container {
                createNameBubble() {
                    let t = this.scene.add.text(0, 0, this.name, {
                        fontFamily: "'Press Start 2P', Sans-Serif",
                        fontSize: "8px",
                        color: "#".concat(this.textcolor.toString(16)),
                        align: "center",
                        resolution: this.scene.cameras.main.zoom * window.devicePixelRatio * 2
                    });
                    t.setMaxLines(1);
                    let e = t.getBounds(),
                        i = Math.max(e.width + 6, 30),
                        s = this.createBubble(i, e.height + 6, this.bgcolor, .8);
                    this.objName && this.remove([this.objName, this.objNameBg], !0), this.objName = t, this.objNameBg = s, this.objName.setVisible(!1), this.objNameBg.setVisible(!1), t.setPosition(-e.width / 2, -e.height - ChatBubble.arrowHeight), s.setPosition(-i / 2, -e.height - ChatBubble.arrowHeight - 3), this.add(this.objNameBg), this.add(this.objName)
                }
                createBubble(t, e, i, s) {
                    let o = this.scene.add.graphics({
                            x: 0,
                            y: 0
                        }),
                        r = Math.min(t, e) / 4;
                    o.fillStyle(i, s), o.fillRoundedRect(0, 0, t, e, r);
                    let a = Math.floor(t / 2 - ChatBubble.arrowWidth),
                        l = Math.floor(t / 2 + ChatBubble.arrowWidth),
                        n = Math.floor(t / 2),
                        h = Math.floor(e + ChatBubble.arrowHeight);
                    return o.fillTriangle(a, e, l, e, n, h), o
                }
                createSpeechBubble(t) {
                    var e;
                    let i = this.scene.cameras.main.zoom * window.devicePixelRatio * 2,
                        s = this.scene.add.text(0, 0, this.text, {
                            fontFamily: "'Press Start 2P', Sans-Serif",
                            fontSize: "".concat(null !== (e = this.fontSize) && void 0 !== e ? e : 8, "px"),
                            color: "#".concat(ChatBubble.chatTextColor.toString(16)),
                            align: "center",
                            baselineY: 2,
                            padding: {
                                bottom: 3
                            },
                            resolution: i,
                            wordWrap: {
                                width: t - 8
                            }
                        });
                    s.setMaxLines(3);
                    let o = s.getBounds(),
                        r = o.height,
                        a = this.createBubble(o.width + 8, r + 8, ChatBubble.chatBackground, .8);
                    s.setResolution(10), s.setPosition(-o.width / 2, -r - ChatBubble.arrowHeight), a.setPosition(-o.width / 2 - 4, -r - ChatBubble.arrowHeight - 4), this.objText && this.remove([this.objText, this.objTextBg], !0), this.objTextBg = a, this.objText = s, this.add(this.objTextBg), this.add(this.objText)
                }
                updateName(t) {
                    this.name = t, this.createNameBubble()
                }
                setEnableName(t) {
                    this.enableName = t, this.toggleChat(!!this.text)
                }
                toggleChat(t) {
                    var e, i, s, o;
                    null === (e = this.objTextBg) || void 0 === e || e.setVisible(t), null === (i = this.objText) || void 0 === i || i.setVisible(t), null === (s = this.objNameBg) || void 0 === s || s.setVisible(!t && this.enableName), null === (o = this.objName) || void 0 === o || o.setVisible(!t && this.enableName)
                }
                showTyping() {
                    this.text && "..." !== this.text || this.setBubbleText("...")
                }
                setBubbleText(t) {
                    this.chatTimeout && (clearTimeout(this.chatTimeout), delete this.chatTimeout), this.text = t, this.createSpeechBubble(200), this.toggleChat(!0), this.chatTimeout = setTimeout(() => {
                        this.text = "", this.toggleChat(!1)
                    }, 4e3)
                }
                setOffset(t, e) {
                    this.offset.x = t, this.offset.y = e
                }
                updatePosition(t, e) {
                    super.setPosition(t + this.offset.x, e + this.offset.y)
                }
                destroy() {
                    super.destroy(), this.chatTimeout && clearTimeout(this.chatTimeout), this.removeAll(!0)
                }
                constructor(t, e, i, s, o, r) {
                    super(t, e, i), this.name = s, this.depth = 1e4, this.visible = !0, this.offset = {
                        x: 0,
                        y: 0
                    }, this.bgcolor = null != o ? o : 3355596, this.enableName = !1, this.textcolor = null != r ? r : 16777215, this.setSize(200, 100), this.createNameBubble()
                }
            };
            ChatBubble.arrowHeight = 4, ChatBubble.arrowWidth = 6, ChatBubble.chatBackground = 16777215, ChatBubble.chatTextColor = 0;
            let ParticleNode = class ParticleNode {
                destroy() {
                    if (this.follow) {
                        var t;
                        null === (t = this.emitter) || void 0 === t || t.destroy()
                    }
                }
                setAnimations(t) {
                    this.animations = t
                }
                play(t) {
                    if (t && this.animations) {
                        let e = this.animations.find(e => e.animation === t);
                        if (!e) {
                            this.stop();
                            return
                        }
                        if (e.frames && this.emitter.setEmitterFrame(e.frames), -1 === e.repeat) {
                            let t = e.frameRate > 0 ? 1e3 / e.frameRate : 100;
                            this.emitter.flow(t)
                        } else e.repeat > 0 ? this.emitter.emitParticle(e.repeat) : this.emitter.emitParticle(1)
                    } else this.emitter.flow(this.rate)
                }
                stop() {
                    this.emitter.stop()
                }
                setCircleZone(t) {
                    let e = 0;
                    this.emitter.setEmitterAngle(() => 90 - (360 * e + (Math.random() - .5) * 10)), this.emitter.emitZones = [], this.emitter.addEmitZone({
                        source: {
                            getRandomPoint: i => {
                                e = Math.random();
                                let s = 2 * e * Math.PI;
                                i.x = Math.sin(s) * t, i.y = Math.cos(s) * t
                            }
                        }
                    })
                }
                setFixed(t, e, i) {
                    this.emitter.setDepth(i), this.emitter.setPosition(t, e), this.follow = !1
                }
                setFollow(t, e, i) {
                    this.offset = {
                        x: t,
                        y: e
                    }, this.depthOffset = i, this.follow = !0
                }
                setGravity(t, e) {
                    this.well = this.emitter.createGravityWell({
                        x: this.emitter.x,
                        y: this.emitter.y,
                        power: t,
                        gravity: e,
                        epsilon: 16
                    })
                }
                update(t) {
                    this.follow && t && (this.emitter.startFollow(t, this.offset.x, this.offset.y), this.emitter.setDepth(t.depth + this.depthOffset), this.well && (this.well.x = t.x + this.offset.x, this.well.y = t.y + this.offset.y))
                }
                constructor(t, e, i) {
                    void 0 === i.emitZone && delete i.emitZone, this.emitter = t.add.particles(0, 0, e, i), this.depthOffset = 100, this.follow = !0, this.offset = {
                        x: 0,
                        y: 0
                    }, this.rate = this.emitter.frequency
                }
            };
            let CharacterNode = class CharacterNode extends LayeredNode {
                get scale() {
                    return this.properties.scale ? {
                        x: this.properties.scale.x * this._zoom,
                        y: this.properties.scale.y * this._zoom
                    } : {
                        x: this._zoom,
                        y: this._zoom
                    }
                }
                set zoom(t) {
                    this._zoom = t
                }
                get x() {
                    var t;
                    return (null === (t = this.properties.position) || void 0 === t ? void 0 : t.x) || h.B_
                }
                get y() {
                    var t;
                    return ((null === (t = this.properties.position) || void 0 === t ? void 0 : t.y) || h.B_) - (this.feetY - h.XX)
                }
                get position() {
                    if (this.isCursor) return {
                        x: this.tempPosition.x,
                        y: this.tempPosition.y + (this.feetY - h.XX)
                    };
                    if (this.container) {
                        let {
                            x: t,
                            y: e
                        } = this.container;
                        return {
                            x: t,
                            y: e
                        }
                    }
                    return {
                        x: this.x,
                        y: this.y
                    }
                }
                get bodyPosition() {
                    if (this.body) {
                        let {
                            x: t,
                            y: e
                        } = this.body.position;
                        return {
                            x: t,
                            y: e
                        }
                    }
                    return this.position
                }
                get isMoving() {
                    return this.moving
                }
                get hasClickAction() {
                    return !0
                }
                get username() {
                    var t;
                    return null === (t = this.playerData) || void 0 === t ? void 0 : t.label
                }
                setHover(t) {
                    var e;
                    super.setHover(t), null === (e = this.chatBubble) || void 0 === e || e.setEnableName(t)
                }
                clickableWithItem(t) {
                    return !1
                }
                editCategory() {
                    return "entities"
                }
                fadeIn() {
                    this.fadeOnCreate = !0, this.petNode && this.petNode.fadeIn()
                }
                updateSpritesToMatchMovementDirection() {
                    var t, e, i;
                    let s = this.facing;
                    (null === (e = this.body) || void 0 === e ? void 0 : null === (t = e.velocity) || void 0 === t ? void 0 : t.x) !== 0 && (s = 0 > ((null === (i = this.body) || void 0 === i ? void 0 : i.velocity.x) || 0) ? -1 : 1, this.flip && (s *= -1)), this.updateFacing(s)
                }
                updateCollision() {
                    let t = this.collision;
                    if ((null == t ? void 0 : t.offset) && this.body) {
                        var e, i;
                        let s = this.scale;
                        if (this.facing > 0) {
                            let i = t.offset.x * s.x;
                            this.body.setOffset(i, t.offset.y * s.y), null === (e = this.shadow) || void 0 === e || e.setX(4 + i + t.size.width / 2 - this.widest / 2)
                        } else {
                            let e = this.widest - t.offset.x * s.x - t.size.width;
                            this.body.setOffset(e, t.offset.y * s.y), null === (i = this.shadow) || void 0 === i || i.setX(4 + e + t.size.width / 2 - this.widest / 2)
                        }
                    }
                }
                updateFacing(t) {
                    var e;
                    if (this.facing !== t && !(null === (e = this.properties.avatar) || void 0 === e ? void 0 : e.permanentFlip)) {
                        if (this.facing = t, this.facing < 0)
                            for (let [, t] of this.layers) t.setFlipX(!0);
                        else
                            for (let [, t] of this.layers) t.setFlipX(!1);
                        this.updateCollision()
                    }
                }
                getLayersProperties() {
                    return this.characterHelper = new b.r(this.playerData, this.playerData.avatar), this.characterHelper.getPiecesSpriteData()
                }
                load() {
                    var t;
                    super.load(), this.petData && !this.petNode && (this.petNode = new PetNode(this.scene, this, this.petData)), null === (t = this.petNode) || void 0 === t || t.load()
                }
                updateName(t) {
                    if (t !== this.playerData.label) {
                        var e;
                        this.playerData.label = t, null === (e = this.chatBubble) || void 0 === e || e.updateName(t)
                    }
                }
                updateAlpha(t) {
                    var e, i;
                    this.container && t !== (null === (i = this.playerData.avatar) || void 0 === i ? void 0 : null === (e = i.sprite) || void 0 === e ? void 0 : e.alpha) && (this.playerData.avatar.sprite.alpha = t, this.container.setAlpha(t))
                }
                showChatMessage(t) {
                    var e;
                    if (!t || !this.container) return;
                    let i = (0, v.FL)(t);
                    null === (e = this.chatBubble) || void 0 === e || e.setBubbleText(i)
                }
                showChatTyping() {
                    var t;
                    this.container && (null === (t = this.chatBubble) || void 0 === t || t.showTyping())
                }
                setDefaultColors() {
                    var t;
                    (null === (t = this.playerData) || void 0 === t ? void 0 : t.kind) && ("npc" === this.playerData.kind ? (this.textbg = 4004513, this.textcolor = 16777215) : "vip" === this.playerData.kind ? (this.textbg = 16370533, this.textcolor = 9655068) : "pet" === this.playerData.kind ? (this.textbg = 2171169, this.textcolor = 16777215) : (this.textbg = 15262975, this.textcolor = 2236484))
                }
                updatePetData(t) {
                    if (t) return this.petNode ? this.petNode.updatePlayerData({ ...t,
                        position: null
                    }) : this.petNode = new PetNode(this.scene, this, t), this.petData = t, this.petNode;
                    this.petNode && (this.petNode.destroy(), delete this.petData, delete this.petNode)
                }
                updatePlayerData(t) {
                    if (t.avatar && (this.playerData.avatar = t.avatar), t.label && (this.playerData.label = t.label), t.modifiers && (this.playerData.modifiers = t.modifiers), t.kind && (this.playerData.kind = t.kind), t.position) this.playerData.position = t.position;
                    else {
                        let t = this.container;
                        t && (this.playerData.position = {
                            x: t.x,
                            y: t.y + (this.feetY - h.XX)
                        })
                    }
                    this.petNode && this.petNode.updatePlayerData({}), this.resetProps(), this.setDefaultColors()
                }
                setFacing(t) {
                    this.updateFacing(t ? -1 : 1)
                }
                handleModifiers() {
                    var t;
                    if (this.boost = 1, (null === (t = this.playerData.modifiers) || void 0 === t ? void 0 : t.length) > 0) {
                        let t;
                        this.particleNodes || (this.particleNodes = []), this.playerData.modifiers.forEach(e => {
                            var i, s, r, a, l;
                            let n = o().Display.Color.ValueToColor(null !== (i = e.colour) && void 0 !== i ? i : 0);
                            switch (e.kind) {
                                case "speed10":
                                    this.boost = 1.1, this.footstepColor = n.color;
                                    break;
                                case "speed15":
                                    this.boost = 1.15, this.footstepColor = n.color;
                                    break;
                                case "og":
                                    (t = new ParticleNode(this.scene, "fx-spritesheet", {
                                        frame: [19, 20],
                                        alpha: {
                                            start: .3,
                                            end: 1
                                        },
                                        scale: {
                                            start: 2,
                                            end: .1
                                        },
                                        lifespan: {
                                            min: 800,
                                            max: 1500
                                        },
                                        angle: {
                                            min: 0,
                                            max: 360
                                        },
                                        rotate: {
                                            min: -70,
                                            max: 70
                                        },
                                        speed: {
                                            min: 5,
                                            max: 20
                                        },
                                        tint: n.color,
                                        frequency: 50
                                    })).setCircleZone(18), t.setFollow(0, 0, 160), t.play(), t.update(this.container), null === (s = this.particleNodes) || void 0 === s || s.push(t);
                                    break;
                                case "mayor":
                                    (t = new ParticleNode(this.scene, "fx-spritesheet", {
                                        frame: [21, 22, 23],
                                        alpha: {
                                            start: 1,
                                            end: .3
                                        },
                                        scale: {
                                            start: .5,
                                            end: 2
                                        },
                                        lifespan: {
                                            min: 800,
                                            max: 1500
                                        },
                                        angle: {
                                            min: -30,
                                            max: 30
                                        },
                                        rotate: {
                                            start: 0,
                                            end: 360
                                        },
                                        speed: {
                                            min: 15,
                                            max: 30
                                        },
                                        frequency: 30
                                    })).setCircleZone(18), t.setFollow(0, 0, 160), t.play(), t.update(this.container), null === (r = this.particleNodes) || void 0 === r || r.push(t);
                                    break;
                                case "staff":
                                    (t = new ParticleNode(this.scene, "fx-spritesheet", {
                                        frame: 25,
                                        scale: {
                                            start: 1,
                                            end: 2
                                        },
                                        alpha: {
                                            start: 1,
                                            end: .3
                                        },
                                        lifespan: {
                                            min: 800,
                                            max: 1500
                                        },
                                        angle: {
                                            min: 230,
                                            max: 310
                                        },
                                        speed: {
                                            min: 25,
                                            max: 50
                                        },
                                        frequency: 500
                                    })).setGravity(.05, 2), t.setFollow(0, -this.feetY - 4, 160), t.play(), t.update(this.container), null === (a = this.particleNodes) || void 0 === a || a.push(t);
                                    break;
                                case "farmhand":
                                    (t = new ParticleNode(this.scene, "fx-spritesheet", {
                                        frame: [28, 29],
                                        scale: {
                                            start: 1,
                                            end: 2
                                        },
                                        alpha: {
                                            start: 1,
                                            end: .3
                                        },
                                        lifespan: {
                                            min: 800,
                                            max: 1500
                                        },
                                        angle: {
                                            min: 230,
                                            max: 310
                                        },
                                        speed: {
                                            min: 25,
                                            max: 50
                                        },
                                        frequency: 500
                                    })).setGravity(.05, 2), t.setFollow(0, -this.feetY - 4, 160), t.play(), t.update(this.container), null === (l = this.particleNodes) || void 0 === l || l.push(t)
                            }
                        })
                    }
                }
                create() {
                    var t, e, i, s, o, r, a, l, n, h, d, c, u, p, v;
                    super.create();
                    let m = this.scale;
                    this.tallest || (this.tallest = this.height * m.y), (null === (e = this.collision) || void 0 === e ? void 0 : null === (t = e.size) || void 0 === t ? void 0 : t.height) ? this.feetY = this.offsetY - this.tallest / 2 + this.collision.size.height : this.feetY = this.tallest / 2;
                    let y = this.x,
                        f = this.y;
                    if (null === (i = this.container) || void 0 === i || i.setPosition(y, f), this.chatBubble = new ChatBubble(this.scene, y, f, this.playerData.label, this.textbg, this.textcolor), this.scene.add.existing(this.chatBubble), this.facing = this.flip ? -1 : 1, this.fx = new ParticleFX, this.fx.createFootsteps({
                            x: y,
                            y: f + this.feetY
                        }), this.chatBubble.setOffset(0, -this.tallest / 2), (null === (o = this.collision) || void 0 === o ? void 0 : null === (s = o.size) || void 0 === s ? void 0 : s.height) && (null === (r = this.collision) || void 0 === r ? void 0 : r.offset) && (null === (l = this.collision) || void 0 === l ? void 0 : null === (a = l.size) || void 0 === a ? void 0 : a.width) < 90 && (this.shadow = this.scene.add.ellipse(4 + this.collision.offset.x * m.x + this.collision.size.width / 2 - this.widest / 2, this.feetY - 5, Math.max(this.collision.size.width, 16), 8, 854825, .25), this.shadow.setRotation(-.2), this.container.addAt(this.shadow, 0)), null === (h = this.collision) || void 0 === h ? void 0 : null === (n = h.size) || void 0 === n ? void 0 : n.height) {
                        let t = this.container.y + ((null === (d = this.collision.offset) || void 0 === d ? void 0 : d.y) || 0) + this.collision.size.height / 2;
                        null === (c = this.container) || void 0 === c || c.setDepth(t)
                    }
                    this.handleModifiers(), this.updateCollision(), this.petNode && this.petNode.create();
                    let g = null !== (u = this.playerData.avatar.sprite.alpha) && void 0 !== u ? u : 1;
                    this.fadeOnCreate && this.container ? (this.container.alpha = 0, null === (p = this.scene.tweens) || void 0 === p || p.add({
                        targets: [this.container],
                        ease: "Linear",
                        duration: 1e3,
                        alpha: g,
                        yoyo: !1,
                        delay: 0
                    })) : null === (v = this.container) || void 0 === v || v.setAlpha(g), delete this.fadeOnCreate
                }
                update() {
                    var t, e, i, s, o, r, a;
                    if (this.container) {
                        if (super.update(), this.updateZOrder(), this.updateBubble(), (null === (t = this.tween) || void 0 === t ? void 0 : t.isPlaying()) || (null === (i = this.body) || void 0 === i ? void 0 : null === (e = i.velocity) || void 0 === e ? void 0 : e.x) || (null === (o = this.body) || void 0 === o ? void 0 : null === (s = o.velocity) || void 0 === s ? void 0 : s.y)) {
                            if (null === (a = this.fx) || void 0 === a || a.emitFootsteps({
                                    x: this.position.x,
                                    y: this.position.y + this.feetY
                                }, this.boost >= 1.1, this.footstepColor), this.moving = !0, this.particleNodes)
                                for (let t of this.particleNodes) t.update(this.container)
                        } else this.moving = !1;
                        this.updateSpritesToMatchMovementDirection(), this.updateSpriteAnimation(), null === (r = this.petNode) || void 0 === r || r.update()
                    }
                }
                updateBubble() {
                    var t;
                    null === (t = this.chatBubble) || void 0 === t || t.updatePosition(this.container.x, this.container.y)
                }
                updateZOrder() {
                    if (this.container) {
                        let t = this.isCursor ? 1e4 : this.container.y + this.feetY;
                        t !== this.container.depth && this.container.setDepth(t)
                    }
                }
                fadeAndDestroy() {
                    if (this.container && this.chatBubble) {
                        var t;
                        this.tween && this.tween.stop(), this.tween = null === (t = this.scene.tweens) || void 0 === t ? void 0 : t.add({
                            targets: [this.container, this.chatBubble],
                            ease: "Linear",
                            duration: 1e3,
                            alpha: 0,
                            yoyo: !1,
                            delay: 0,
                            onComplete: () => {
                                this.destroy()
                            }
                        }), this.petNode && this.petNode.fadeAndDestroy()
                    } else this.destroy()
                }
                move(t, e) {
                    var i, s, o;
                    if (this.tween && this.tween.stop(), this.container) {
                        if (null === (i = this.body) || void 0 === i || i.setVelocity(t.x, t.y), e) {
                            let i = { ...e
                            };
                            if (0 === t.x && 0 === t.y) {
                                let o = Math.sqrt((0, v.DJ)({
                                        x: this.container.x,
                                        y: this.container.y
                                    }, e)),
                                    r = 1e3 * o / (h.Y * this.boost);
                                r < 40 || r > 3e3 ? this.container.setPosition(e.x, e.y) : (i.x += t.x * (r / 1e3), i.y += t.y * (r / 1e3), this.tween = null === (s = this.scene.tweens) || void 0 === s ? void 0 : s.add({
                                    targets: [this.container],
                                    ease: "Linear",
                                    duration: r,
                                    x: i.x,
                                    y: i.y,
                                    yoyo: !1,
                                    delay: 0
                                }))
                            } else i.x += .5 * t.x, i.y += .5 * t.y, this.tween = null === (o = this.scene.tweens) || void 0 === o ? void 0 : o.add({
                                targets: [this.container],
                                ease: "Linear",
                                duration: 500,
                                x: i.x,
                                y: i.y,
                                yoyo: !1,
                                delay: 0
                            });
                            this.playerData.position = i
                        }
                        this.updateSpritesToMatchMovementDirection()
                    }
                }
                updateSpriteAnimation() {
                    if (this.isMoving) {
                        var t;
                        let e = null === (t = this.body) || void 0 === t ? void 0 : t.velocity.length();
                        this.play("walk", 0, e ? e * h.fX : void 0)
                    } else this.play("idle")
                }
                petPlay(t, e) {
                    this.petNode && this.petNode.petPlay(t, e)
                }
                destroy() {
                    var t, e, i, s;
                    null === (t = this.chatBubble) || void 0 === t || t.destroy(), null === (e = this.shadow) || void 0 === e || e.destroy(), null === (i = this.particleNodes) || void 0 === i || i.forEach(t => t.destroy()), null === (s = this.petNode) || void 0 === s || s.destroy(), delete this.shadow, delete this.chatBubble, delete this.particleNodes, super.destroy()
                }
                constructor(t, e, i, s = !1) {
                    super(t, s), this.scene = t, this.playerData = e, this.petData = i, this.isCursor = s, this.textbg = 15262975, this.textcolor = 2236484, this.moving = !1, this.facing = 1, this.feetY = 0, this.boost = 1, this.footstepColor = 1, this._zoom = 1, this.hoverTint = 13421823, this.setDefaultColors(), this.petData && (this.petNode = new PetNode(this.scene, this, i))
                }
            };
            let x = 1.2 * h.Y;
            let PetNode = class PetNode extends CharacterNode {
                update() {
                    this.container && (this.updateFollow(), super.update())
                }
                setFollow(t, e) {
                    this.followNode = t, this.followRadius = e, this.vTemp = new Phaser.Math.Vector2
                }
                updateFollow() {
                    if (!this.followNode || !this.body) return;
                    let t = this.followNode.position,
                        e = this.position,
                        i = (0, v.DJ)(t, e),
                        s = this.followRadius || 48,
                        o = s / 2;
                    if (i > s * s) {
                        let i = this.vTemp;
                        i.x = t.x - e.x, i.y = t.y - e.y, i.normalize().scale(2), i.x += .99 * this.body.velocity.x, i.y += .99 * this.body.velocity.y, i.lengthSq() > this.max_speed * this.max_speed && i.normalize().scale(this.max_speed), this.body.setVelocity(i.x, i.y)
                    } else if (this.body.velocity.lengthSq() > 0) {
                        let t = this.vTemp;
                        t.x = this.body.velocity.x, t.y = this.body.velocity.y, t.scale(.95), i > o * o ? t.lengthSq() < h.Y * h.Y * .1 ? this.body.setVelocity(0, 0) : this.body.setVelocity(t.x, t.y) : t.lengthSq() > h.Y * h.Y * .2 && this.body.setVelocity(t.x, t.y)
                    }
                }
                clickableWithItem(t) {
                    var e;
                    if (!this.isSelf) return !1;
                    if ((0, u.ZP)(t, "pet") || (null === (e = this.handlers) || void 0 === e ? void 0 : e[t])) return !0;
                    if (this.handlersRegEx) {
                        for (let e of this.handlersRegEx)
                            if (e.test(t)) return !0
                    }
                    return !1
                }
                get hasClickAction() {
                    return this.isSelf
                }
                hasHoverText() {
                    return !0
                }
                showHoverText(t) {
                    this.setHover(t)
                }
                setupCollision(t) {
                    super.setupCollision(t, !1)
                }
                contextWith(t) {
                    return super.contextWith({ ...t,
                        useType: "pet",
                        type: "pet",
                        targetId: this.pet_mid
                    })
                }
                petPlay(t, e) {
                    e && this.showChatMessage(e), t && this.play(t)
                }
                create() {
                    var t, e, i;
                    super.create(), this.chatBubble.fontSize = 10, (null === (t = this.body) || void 0 === t ? void 0 : t.velocity) && (this.body.velocity.x = -1 * h.Y), this.updateMood(null !== (i = null === (e = this.playerData.avatar) || void 0 === e ? void 0 : e.mood) && void 0 !== i ? i : 1)
                }
                updateMood(t) {
                    this.playerData.avatar.mood = t
                }
                updatePlayerData(t) {
                    if (super.updatePlayerData(t), t.avatar) {
                        var e;
                        this.updateMood(null !== (e = t.avatar.mood) && void 0 !== e ? e : 1)
                    }
                }
                setSelfPetEntity(t) {
                    var e, i, s, o, r, a;
                    let l;
                    this.isSelf = !0, this.pet_mid = t.mid, this.updateName(t.avatar.name);
                    let n = t.happiness > 15 ? 1 : t.happiness / 15;
                    if (this.updateMood(n), !t.controlEntity) return;
                    let h = g.Z.getGameEntity(t.controlEntity);
                    if (!(null == h ? void 0 : h.generic)) return;
                    let {
                        generic: d
                    } = h, c = t.scriptInstance;
                    l = c ? c.current : null !== (r = null === (o = d.states) || void 0 === o ? void 0 : o.findIndex(t => t.name === d.defaultState)) && void 0 !== r ? r : 0;
                    let u = null === (e = d.states) || void 0 === e ? void 0 : e[l];
                    u && (this.handlers = {}, delete this.handlersRegEx, null === (a = u.handlers) || void 0 === a || a.forEach(t => {
                        if (t.name.startsWith("/") && t.name.endsWith("/")) {
                            this.handlersRegEx || (this.handlersRegEx = []);
                            try {
                                this.handlersRegEx.push(new RegExp(t.name.substring(1, t.name.length - 1)))
                            } catch (t) {
                                console.error(t)
                            }
                        } else this.handlers[t.name] = !0
                    }));
                    let p = null === (s = d.trackers) || void 0 === s ? void 0 : null === (i = s.find(t => "tiredness" === t.name)) || void 0 === i ? void 0 : i.value;
                    p && 1 * p > 50 ? this.max_speed = x / 2 : this.max_speed = x
                }
                constructor(t, e, i) {
                    super(t, i, null, !1), this.scene = t, this.max_speed = x, this.isSelf = !1, this.setFollow(e, 50)
                }
            };
            let getNpcCharacterData = (t, e) => {
                var i, s;
                return getCharacterData({
                    avatarId: e.npc.avatar,
                    pieces: e.npc.avatarPieces,
                    position: {
                        x: null !== (i = null == t ? void 0 : t.position.x) && void 0 !== i ? i : 0,
                        y: null !== (s = null == t ? void 0 : t.position.y) && void 0 !== s ? s : 0
                    },
                    label: e.npc.name,
                    flip: null == t ? void 0 : t.flip,
                    kind: "npc"
                })
            };
            let NpcNode = class NpcNode extends CharacterNode {
                setHover(t) {
                    var e;
                    super.setHover(t), null === (e = this.chatBubble) || void 0 === e || e.setEnableName(!0)
                }
                clickableWithItem() {
                    return !0
                }
                contextWith(t) {
                    return super.contextWith({ ...t,
                        entityType: "npc",
                        useType: "entity",
                        targetId: this.mid,
                        npcId: this.entityId
                    })
                }
                get hitTestSprite() {
                    var t;
                    return !this.hittest && this.container && (this.widest || console.log("dont have size for", this.entityId), this.hittest = new HitTestObject(this.scene, this.x, this.y, this.widest, this.tallest, this.depth + 2e3), this.scene.add.existing(this.hittest)), null !== (t = this.hittest) && void 0 !== t ? t : this.sprite
                }
                create() {
                    var t, e;
                    this.textbg = 4004513, this.textcolor = 16777215, super.create(), null === (t = this.body) || void 0 === t || t.setImmovable(), this.hoverTint = 16777045, this.play("idle", 500 * Math.random()), null === (e = this.chatBubble) || void 0 === e || e.setEnableName(!0)
                }
                update() {
                    if (super.update(), this.isCursor) {
                        var t;
                        let e = this.tempPosition;
                        null === (t = this.container) || void 0 === t || t.setPosition(e.x, e.y)
                    }
                    this.updateHittest()
                }
                updateHittest() {
                    this.hittest && this.container && this.hittest.setPosition(this.container.x, this.container.y)
                }
                pickUp() {
                    super.pickUp()
                }
                returnCursor() {
                    var t;
                    super.returnCursor();
                    let e = this.properties.position;
                    e && (null === (t = this.container) || void 0 === t || t.setPosition(e.x, e.y)), this.updateHittest()
                }
                move(t, e) {
                    super.move(t, {
                        x: e.x,
                        y: e.y - (this.feetY - h.XX)
                    }), this.updatePlayerData({
                        position: e
                    })
                }
                destroy() {
                    var t;
                    super.destroy(), null === (t = this.hittest) || void 0 === t || t.destroy()
                }
                getTriggerId() {
                    return this.entityId
                }
                constructor(t, e, i, s = !1) {
                    var o;
                    super(t, getNpcCharacterData(e, i), null, s), this.scene = t, this.isCursor = s, this.entityId = null !== (o = null == e ? void 0 : e.entity) && void 0 !== o ? o : i.id, this.mid = null == e ? void 0 : e.mid, (null == e ? void 0 : e.flip) && (this.facing = -1)
                }
            };
            let PlayerNode = class PlayerNode extends CharacterNode {
                get speed() {
                    return this._speed
                }
                set speed(t) {
                    t < .05 ? this._speed = .05 : t > 3 ? this._speed = 3 : this._speed = t
                }
                setupCollision(t) {
                    super.setupCollision(t, !1)
                }
                contextWith(t) {
                    return super.contextWith({ ...t,
                        useType: "self",
                        type: "self"
                    })
                }
                create() {
                    super.create(), this.container && (this.previousPosition.x = this.container.x, this.previousPosition.y = this.container.y, this.lastUpdate > 0 && this.body && this.body.width > 16 && this.scene.checkCollision(this.container) && this.body.setSize(16, this.body.height)), this.fx && (this.fx.isPlayer = !0), this.petNode && (this.petNode.isSelf = !0), this.pauseMoving = !1
                }
                get hasClickAction() {
                    return !this.stopMoving
                }
                clickableWithItem(t) {
                    return (0, u.ZP)(t, "self", "player")
                }
                updatePlayerData(t) {
                    if (t.avatar) {
                        var e;
                        this.pauseMoving = !0, null === (e = this.body) || void 0 === e || e.setVelocity(0)
                    }
                    super.updatePlayerData(t)
                }
                moveTo(t, e) {
                    var i;
                    l.ZP.sendEvent(l.Yi.PLAYER_MOVING, {
                        animation: "walk",
                        velocity: {
                            x: 0,
                            y: 0
                        },
                        position: {
                            x: t,
                            y: e
                        }
                    }), null === (i = this.container) || void 0 === i || i.setPosition(t, e)
                }
                trampoline() {
                    if (!this.container) return;
                    this.stopMoving = !0, this.container.setDepth(1e4);
                    let t = this.scene.tweens.add({
                        targets: this.container,
                        scale: {
                            from: 1,
                            to: 50
                        },
                        angle: {
                            from: 0,
                            to: 230
                        },
                        ease: o().Math.Easing.Cubic.In,
                        duration: 1500,
                        repeat: 0,
                        yoyo: !1,
                        onComplete: () => {
                            t.remove()
                        }
                    })
                }
                perfectDismount(t) {
                    if (!this.container) return;
                    this.stopMoving = !0;
                    let e = this.container.x;
                    "roadleft" === t ? (this.setFacing(!0), e += 100) : "roadright" === t && (this.setFacing(!1), e -= 100), this.container.setDepth(1e4);
                    let i = this.scene.tweens.add({
                        targets: this.container,
                        scale: {
                            from: 50,
                            to: 1
                        },
                        angle: {
                            from: 230,
                            to: 0
                        },
                        x: {
                            from: e,
                            to: this.container.x
                        },
                        ease: o().Math.Easing.Cubic.In,
                        duration: 1500,
                        repeat: 0,
                        yoyo: !1,
                        onComplete: () => {
                            this.stopMoving = !1, i.remove()
                        }
                    })
                }
                setPet(t) {
                    var e;
                    null === (e = this.petNode) || void 0 === e || e.setSelfPetEntity(t)
                }
                cliff() {
                    if (!this.container) return;
                    this.stopMoving = !0, this.container.depth = 1;
                    let t = 1 === this.facing,
                        e = this.scene.tweens.add({
                            targets: this.container,
                            scale: {
                                from: 1,
                                to: .2
                            },
                            angle: {
                                from: 0,
                                to: 620
                            },
                            x: this.container.x + (t ? 50 : -50),
                            y: this.container.y + 30,
                            ease: o().Math.Easing.Linear,
                            duration: 1500,
                            repeat: 0,
                            yoyo: !1,
                            onComplete: () => {
                                e.remove()
                            }
                        })
                }
                updateZOrder() {
                    this.stopMoving || super.updateZOrder()
                }
                update() {
                    var t, e;
                    let i = null === (t = this.container) || void 0 === t ? void 0 : t.body;
                    if (!i) return;
                    if (!this.stopMoving && !this.pauseMoving) {
                        let {
                            x: t,
                            y: s
                        } = this.container, o = (t !== this.previousPosition.x || s !== this.previousPosition.y) && (0, v.DJ)({
                            x: t,
                            y: s
                        }, this.previousPosition) >= 50, r = !this.hitwall && !(0 === i.velocity.x && 0 === i.velocity.y);
                        (!i.velocity.equals(this.previousVelocity) && Date.now() - this.lastUpdate > 200 || o && (!r || Date.now() - this.lastUpdate > 2e3)) && (l.ZP.sendEvent(l.Yi.PLAYER_MOVING, {
                            animation: "walk",
                            facing: this.facing,
                            velocity: {
                                x: i.velocity.x,
                                y: i.velocity.y
                            },
                            position: {
                                x: t,
                                y: s + (this.feetY - h.XX)
                            }
                        }), this.previousVelocity.x = i.velocity.x, this.previousVelocity.y = i.velocity.y, this.previousPosition.x = t, this.previousPosition.y = s, this.lastUpdate = Date.now()), o && (null === (e = p.default.instance) || void 0 === e || e.updatePosition(i.position))
                    }
                    let s = this.scene.mapBounds;
                    if (s) {
                        let t = i.position,
                            e = this.vTemp;
                        if (e.x = 0, e.y = 0, !this.stopMoving && !this.pauseMoving) {
                            let i = this._speed * this.boost,
                                o = this.scene.movementPosition;
                            o ? (e.x = o.x - t.x, e.y = o.y - t.y, e.x * e.x + e.y * e.y < 90 && (i = .1, e.x * e.x < 4 && (e.x = 0, e.y = 0))) : (this.scene.cursor && (this.scene.cursor.left.isDown || this.scene.cursor.leftA.isDown) || this.scene.joystickState.left ? e.x = -1 : (this.scene.cursor && (this.scene.cursor.right.isDown || this.scene.cursor.rightD.isDown) || this.scene.joystickState.right) && (e.x = 1), this.scene.cursor && (this.scene.cursor.up.isDown || this.scene.cursor.upW.isDown) || this.scene.joystickState.up ? e.y = -1 : (this.scene.cursor && (this.scene.cursor.down.isDown || this.scene.cursor.downS.isDown) || this.scene.joystickState.down) && (e.y = 1)), e.x < 0 && t.x <= s.left && (e.x = 0), e.x > 0 && t.x >= s.right && (e.x = 0), e.y < 0 && t.y <= s.top && (e.y = 0), e.y > 0 && t.y >= s.bottom && (e.y = 0), e.normalize().scale(h.Y * i)
                        }
                        i.setVelocity(e.x, e.y)
                    }
                    delete this.hitwall, super.update()
                }
                constructor(t, e, i) {
                    super(t, e, i, !1), this.scene = t, this.previousVelocity = {
                        x: 0,
                        y: 0
                    }, this.previousPosition = {
                        x: 0,
                        y: 0
                    }, this.lastUpdate = 0, this._speed = 1, this.stopMoving = !1, this.pauseMoving = !1, this.previousPosition.x = this.x, this.previousPosition.y = this.y, this.vTemp = new(o()).Math.Vector2
                }
            };
            let OtherPlayerNode = class OtherPlayerNode extends CharacterNode {
                hasHoverText() {
                    return !this.isCursor && !!this.properties.hoverText
                }
                showHoverText(t) {
                    this.setHover(t)
                }
                setupCollision(t) {
                    super.setupCollision(t, !1)
                }
                update() {
                    if (super.update(), this.body && this.moving) {
                        var t, e;
                        let i = null === (t = this.tween) || void 0 === t ? void 0 : t.isPlaying();
                        (!i || 0 !== this.playerCore.velocity.x || 0 !== this.playerCore.velocity.y) && this.scene.checkCollision(this.body.gameObject) && i && (null === (e = this.tween) || void 0 === e || e.stop())
                    }
                }
                move(t, e) {
                    e && (this.playerCore.position = {
                        x: e.x,
                        y: e.y
                    }, this.playerCore.velocity = {
                        x: t.x,
                        y: t.y
                    }), super.move(t, e)
                }
                contextWith(t) {
                    return super.contextWith({ ...t,
                        useType: "otherPlayer",
                        type: "otherPlayer",
                        mid: this.playerCore.mid,
                        username: this.playerCore.username,
                        object: {
                            x: this.position.x,
                            y: this.position.y,
                            width: this.width,
                            height: this.height
                        }
                    })
                }
                constructor(t, e, i, s) {
                    super(t, i, s), this.scene = t, this.playerCore = e
                }
            };
            var w = i(16562),
                P = i(83171),
                C = i(61036);

            function formatTime(t) {
                if (!t) return;
                let e = w.l.getInstance().serverTimeDelta,
                    i = e + t - Date.now(),
                    s = Math.floor(i / 1e3);
                if (s > 0) {
                    let t = Math.floor(s / 3600);
                    s -= 3600 * t;
                    let e = Math.floor(s / 60);
                    return s -= 60 * e, "".concat(t.toString(10).padStart(2, "0"), ":").concat(e.toString(10).padStart(2, "0"), ":") + s.toString(10).padStart(2, "0")
                }
            }
            let ParticleLayer = class ParticleLayer extends ParticleNode {
                constructor(t, e, i) {
                    var s, r, a, l, n, h, d, c, u, p, v, m, y;
                    let f;
                    super(t, i.key, ((null === (a = (r = e.effectData).emitZone) || void 0 === a ? void 0 : a.source) && ((f = { ...r.emitZone
                    }).source.radius ? f.source = new(o()).Geom.Circle(null !== (l = f.source.x) && void 0 !== l ? l : 0, null !== (n = f.source.y) && void 0 !== n ? n : 0, f.source.radius) : Object.hasOwn(f.source, "x2") ? f.source = new(o()).Geom.Line(null !== (h = f.source.x1) && void 0 !== h ? h : 0, null !== (d = f.source.y1) && void 0 !== d ? d : 0, null !== (c = f.source.x2) && void 0 !== c ? c : 0, null !== (u = f.source.y2) && void 0 !== u ? u : 0) : Object.hasOwn(f.source, "width") ? f.source = new(o()).Geom.Ellipse(null !== (p = f.source.x) && void 0 !== p ? p : 0, null !== (v = f.source.y) && void 0 !== v ? v : 0, null !== (m = f.source.width) && void 0 !== m ? m : 0, null !== (y = f.source.height) && void 0 !== y ? y : 0) : f = void 0), { ...r,
                        emitZone: f
                    })), e.animations && this.setAnimations(e.animations);
                    let g = null !== (s = e.offset) && void 0 !== s ? s : {
                        x: 0,
                        y: 0
                    };
                    e.depth >= 0 ? this.setFixed(g.x, g.y, e.depth) : this.setFollow(g.x, g.y, 100)
                }
            };
            let ToggleSprite = class ToggleSprite {
                updateSprite(t) {
                    if (this.sprite && this.effectData) {
                        var e, i, s, r, a, l;
                        if (this.sprite instanceof o().GameObjects.BitmapText) {
                            if (this.effectData.tracker) {
                                let e = "";
                                if ("entity:time" === this.effectData.tracker) e = null !== (i = formatTime(t.utcRefresh)) && void 0 !== i ? i : "";
                                else if (this.effectData.tracker in t) e = null !== (r = null === (s = t[this.effectData.tracker]) || void 0 === s ? void 0 : s.toString()) && void 0 !== r ? r : "";
                                else if (this.effectData.tracker.startsWith("timer:")) {
                                    let i = this.effectData.tracker.substring(6),
                                        s = t[i];
                                    e = null !== (a = formatTime(s)) && void 0 !== a ? a : ""
                                }
                                this.sprite.setText(e)
                            }
                            if ("string" == typeof this.effectData.color && this.effectData.color.startsWith("$")) {
                                let e = this.effectData.color.substring(1),
                                    i = t[e];
                                "string" == typeof i && (i = o().Display.Color.ValueToColor(i).color), this.sprite.setTint(null != i ? i : 16777215)
                            }
                        }
                        if (this.effectData.visible && this.effectData.visible in t && this.sprite.setVisible && this.sprite.setVisible(!!t[this.effectData.visible]), this.effectData.animation && (null === (e = this.sprite.anims) || void 0 === e ? void 0 : e.animationManager)) {
                            let e = t[this.effectData.animation],
                                i = this.sprite.getData("key"),
                                s = "".concat(i, "-").concat(e),
                                o = this.sprite,
                                r = o.anims;
                            e && (null == r ? void 0 : null === (l = r.exists) || void 0 === l ? void 0 : l.call(r, s)) ? (r.play({
                                key: s
                            }, !0), o.setVisible(!0)) : o.setVisible(!1)
                        } else if (this.effectData.frame && this.sprite instanceof o().GameObjects.Sprite) {
                            let e = t[this.effectData.frame],
                                i = this.sprite; - 1 === e ? i.setVisible(!1) : (i.setVisible(!0), i.setFrame(e))
                        }
                    }
                }
                constructor(t, e, i) {
                    this.layer = t, this.sprite = e, this.particle = i, this.effectData = t.effectData
                }
            };
            let GenericEntityNode = class GenericEntityNode extends EntityNode {
                getLayerProps(t) {
                    var e, i, s, o;
                    let r = {};
                    return null === (e = t.animations) || void 0 === e || e.forEach(t => {
                        r[t.animation] = t
                    }), {
                        image: null === (i = t.sprite) || void 0 === i ? void 0 : i.image,
                        animations: (null === (s = t.animations) || void 0 === s ? void 0 : s.length) ? r : void 0,
                        size: null === (o = t.sprite) || void 0 === o ? void 0 : o.size,
                        key: "".concat(this.gameEntity.id, "-").concat(t.depth)
                    }
                }
                get hasClickAction() {
                    return !!this.handlers.click && !this.isMagnet
                }
                get hasOnCollide() {
                    return !!(this.handlers.collide || this.handlers.uncollide)
                }
                getTriggerArea() {
                    return this.circle
                }
                checkPrechecks(t) {
                    return !t || 0 === t.length || !!this.isCursor || !(t.includes("build") && !(0, n.Vb)(a.h.getState()) || t.includes("owner") && !(0, n.Ei)(a.h.getState()) || t.includes("surplus") && !(0, n.LB)(a.h.getState()) || t.includes("vip") && !(0, P.ge)(a.h.getState()) || t.includes("private"))
                }
                setCurrentState(t) {
                    var e, i, s, o, r, a, l, n, h, d, c, u, v, m, y, f, g, b;
                    let x, {
                        playerInstance: P,
                        mapInstance: C
                    } = t;
                    if (!(null === (e = this.gameEntity) || void 0 === e ? void 0 : e.generic)) return;
                    let {
                        generic: T
                    } = this.gameEntity, S = !1, E = !1, N = T.mapStateOnly ? null != C ? C : P : null != P ? P : C, k = null != C ? C : P, M = null != P ? P : C, D = this.currentState && (null === (i = T.states) || void 0 === i ? void 0 : i[this.currentState.current]), I = null == D ? void 0 : D.soundId;
                    if (N) {
                        let t = null === (o = T.states) || void 0 === o ? void 0 : o[N.current];
                        if (I = null == t ? void 0 : t.soundId, D) {
                            let e = null == D ? void 0 : D.name,
                                i = null == t ? void 0 : t.name,
                                s = "".concat(e, "_").concat(i);
                            x = null === (a = T.transitions) || void 0 === a ? void 0 : null === (r = a.find(t => t.from_to === s)) || void 0 === r ? void 0 : r.anim, this.currentState.current !== N.current && (E = !!((null == D ? void 0 : D.physics) || (null == t ? void 0 : t.physics)), S = !!((null == D ? void 0 : D.proximity) || (null == t ? void 0 : t.proximity)))
                        } else E = !!(null == t ? void 0 : t.physics);
                        let e = null == t ? void 0 : t.animation;
                        if (x && this.play(x), e && this.play(e), t) {
                            this.handlers = {}, delete this.handlersRegEx;
                            let handlerCheck = t => {
                                if (this.checkPrechecks(t.prechecks)) {
                                    if (t.name.startsWith("/") && t.name.endsWith("/")) {
                                        this.handlersRegEx || (this.handlersRegEx = []);
                                        try {
                                            this.handlersRegEx.push(new RegExp(t.name.substring(1, t.name.length - 1)))
                                        } catch (t) {
                                            console.error(t)
                                        }
                                    } else this.handlers[t.name] = !0
                                }
                            };
                            this.isCursor || (null === (n = T.handlers) || void 0 === n || n.forEach(handlerCheck), null === (h = t.handlers) || void 0 === h || h.forEach(handlerCheck), this.checkPrechecks(t.flags) || (this.handlers = {}, this.handlersRegEx = [])), this.npcHover = null === (l = t.flags) || void 0 === l ? void 0 : l.includes("npc")
                        } else console.error("unknown state ".concat(N.state, " on ").concat(null === (d = this.gameEntity) || void 0 === d ? void 0 : d.id))
                    }
                    let A = { ...N,
                        trackers: null == M ? void 0 : M.trackers,
                        statics: null == k ? void 0 : k.statics
                    };
                    if (this.currentState = JSON.parse(JSON.stringify(A)), E && this.sprites && (this.setupCollision(), null === (c = (u = this.scene).updateCollisions) || void 0 === c || c.call(u), this.sprites.setDepth(this.depth)), this.sprites) {
                        if (null === (v = p.default.instance) || void 0 === v || v.removePositional(this.mid), I && !this.isCursor) {
                            let t = this.currentState && (null === (y = this.gameEntity.generic.states) || void 0 === y ? void 0 : null === (m = y[this.currentState.current]) || void 0 === m ? void 0 : m.proximity),
                                {
                                    x: e,
                                    y: i
                                } = this.position;
                            t ? (e += t.offset.x, i += t.offset.y) : (null === (g = this.collision) || void 0 === g ? void 0 : null === (f = g.size) || void 0 === f ? void 0 : f.height) ? (i += this.offsetY + .5 * this.collision.size.height, e += this.offsetX + .5 * this.collision.size.width) : (e += .5 * this.width, i += .5 * this.height), null === (b = p.default.instance) || void 0 === b || b.addPositional(this.mid, I, {
                                x: e,
                                y: i
                            })
                        }
                        this.updateDefaultSprite(), this.updateHoverAnimation(), this.setToggleLayers()
                    }
                    if (this.timerRefresh && clearTimeout(this.timerRefresh), this.positionHotspot(), this.positionProximity(), this.updateShadows(), S && this.scene.onNodeUpdated(this), this.handlers.timer && (null === (s = this.currentState) || void 0 === s ? void 0 : s.utcRefresh) && !(null == T ? void 0 : T.mapStateOnly)) {
                        let t = w.l.getInstance().serverTimeDelta,
                            e = t + this.currentState.utcRefresh - Date.now();
                        e > 0 ? this.timerRefresh = setTimeout(EntityNode.checkTimers, e + 1e3) : (console.log("timer already passed? trigger in 1/2 second"), this.timerRefresh = setTimeout(EntityNode.checkTimers, 500))
                    }
                }
                addTrackerToState(t) {
                    t.numeric ? this.trackerState[t.name] = Number(t.value) : this.trackerState[t.name] = t.value
                }
                updateSpriteState(t) {
                    t.updateSprite(this.trackerState)
                }
                setToggleLayers() {
                    if (this.toggleLayers) {
                        var t, e, i, s, o;
                        null === (e = this.currentState) || void 0 === e || null === (t = e.trackers) || void 0 === t || t.forEach(this.addTrackerToState, this), null === (s = this.currentState) || void 0 === s || null === (i = s.statics) || void 0 === i || i.forEach(this.addTrackerToState, this), this.trackerState.utcRefresh = null === (o = this.currentState) || void 0 === o ? void 0 : o.utcRefresh, this.toggleLayers.forEach(this.updateSpriteState, this)
                    }
                }
                setInitialState() {
                    if (this.currentState) {
                        var t, e;
                        let {
                            generic: i
                        } = this.gameEntity, s = null === (t = i.states) || void 0 === t ? void 0 : t[this.currentState.current];
                        (null == s ? void 0 : s.animation) && this.play(s.animation), (null == s ? void 0 : s.soundId) && !this.isCursor && (null === (e = p.default.instance) || void 0 === e || e.addPositional(this.mid, s.soundId, {
                            x: this.x,
                            y: this.y
                        })), this.setToggleLayers()
                    }
                }
                resetAnimation() {
                    if (this.currentState) {
                        var t;
                        let {
                            generic: e
                        } = this.gameEntity, i = null === (t = e.states) || void 0 === t ? void 0 : t[this.currentState.current];
                        (null == i ? void 0 : i.animation) && this.play(i.animation)
                    }
                }
                setHover(t) {
                    if (this.npcHover && this.sprites) {
                        var e;
                        null === (e = this.sprites) || void 0 === e || e.each(e => {
                            (null == e ? void 0 : e.setTint) && e.setTint(t ? 16777045 : 16777215)
                        })
                    } else super.setHover(t)
                }
                clickableWithItem(t) {
                    if (this.handlers[t] || (0, u.ML)(t, this.properties.key, this.properties.entityType)) return !0;
                    if (this.handlersRegEx) {
                        for (let e of this.handlersRegEx)
                            if (e.test(t)) return !0
                    }
                    return !1
                }
                collided() {
                    if (this.handlers.collide) {
                        var t;
                        if (!GenericEntityNode.collideLimiter.ready()) return !1;
                        l.ZP.sendEvent(y.m.clickEntity, {
                            mid: this.mid,
                            entity: null === (t = this.gameEntity) || void 0 === t ? void 0 : t.id,
                            impact: "collide"
                        })
                    }
                    return !0
                }
                uncollided() {
                    if (this.handlers.uncollide) {
                        var t;
                        if (!GenericEntityNode.collideLimiter.ready()) return !1;
                        l.ZP.sendEvent(y.m.clickEntity, {
                            mid: this.mid,
                            entity: null === (t = this.gameEntity) || void 0 === t ? void 0 : t.id,
                            impact: "uncollide"
                        })
                    }
                    return !0
                }
                update() {
                    var t, e, i;
                    if (this.isCursor && this.sprites && this.sprites.setPosition(this.x, this.y), this.isMagnet) {
                        let t = null === (e = this.scene.selfPlayer) || void 0 === e ? void 0 : e.position;
                        t && this.magnetTo(t.x, t.y)
                    }(null === (t = this.currentState) || void 0 === t ? void 0 : t.utcRefresh) && this.toggleLayers && Date.now() - (null !== (i = this.lastTextRefresh) && void 0 !== i ? i : 0) > 500 && (this.lastTextRefresh = Date.now(), this.setToggleLayers())
                }
                get width() {
                    return this.spriteW
                }
                get height() {
                    return this.spriteH
                }
                get depth() {
                    var t, e, i, s, o, r, a, l, n, h, d, c, u;
                    if (this.isCursor) return 1e4;
                    let p = this.currentState && (null === (e = this.gameEntity.generic.states) || void 0 === e ? void 0 : null === (t = e[this.currentState.current]) || void 0 === t ? void 0 : t.physics) || this.properties.physics;
                    if (p) {
                        if (p.depth) {
                            if ("number" == typeof p.depth) return p.depth;
                            if ("y" === p.depth.equal) return (null === (s = this.properties.position) || void 0 === s ? void 0 : s.y) || 0;
                            if (p.depth.add) return ((null === (o = this.properties.position) || void 0 === o ? void 0 : o.y) || 0) + p.depth.add
                        }
                        if (p.enabled) return (null !== (h = null === (r = this.properties.position) || void 0 === r ? void 0 : r.y) && void 0 !== h ? h : 0) + (null !== (d = null === (a = p.offset) || void 0 === a ? void 0 : a.y) && void 0 !== d ? d : 0) + (p.circular ? (null !== (c = null === (l = p.size) || void 0 === l ? void 0 : l.height) && void 0 !== c ? c : 0) / 2 : null !== (u = null === (n = p.size) || void 0 === n ? void 0 : n.height) && void 0 !== u ? u : 0)
                    }
                    return ((null === (i = this.properties.position) || void 0 === i ? void 0 : i.y) || 0) + this.spriteH
                }
                pickUp() {
                    var t;
                    super.pickUp(), null === (t = this.sprites) || void 0 === t || t.setDepth(1e4)
                }
                returnCursor() {
                    var t;
                    this.isCursor = !1;
                    let {
                        x: e,
                        y: i
                    } = this;
                    null === (t = this.sprites) || void 0 === t || t.setPosition(e, i), this.positionHotspot(), this.positionProximity(), this.updateShadows()
                }
                setPosition(t) {
                    var e, i;
                    super.setPosition(t);
                    let {
                        x: s,
                        y: o
                    } = this;
                    null === (e = this.sprites) || void 0 === e || e.setPosition(s, o), null === (i = this.sprites) || void 0 === i || i.setDepth(this.depth), this.positionHotspot(), this.positionProximity(), this.updateHoverAnimation(), this.updateShadows()
                }
                get collides() {
                    var t;
                    return !this.isCursor && !!(null === (t = this.collision) || void 0 === t ? void 0 : t.enabled)
                }
                get collision() {
                    var t, e;
                    let i = this.currentState && (null === (e = this.gameEntity.generic.states) || void 0 === e ? void 0 : null === (t = e[this.currentState.current]) || void 0 === t ? void 0 : t.physics) || this.properties.physics;
                    return i
                }
                play() {
                    var t, e;
                    let i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "default",
                        s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    if ("magneto" === i) {
                        this.isMagnet = !0, this.outline(!1);
                        return
                    }
                    i.startsWith("vibrate:"), null === (t = this.particles) || void 0 === t || t.forEach(t => {
                        t.update(this.sprites), t.play(i)
                    });
                    let o = !1;
                    this.firstSprite = void 0;
                    let r = !1;
                    i.startsWith("layer:") && (r = !0, i = i.substring(6));
                    let a = !1;
                    null === (e = this.sprites) || void 0 === e || e.each(t => {
                        var e, l, n, h, d;
                        if (!(null === (e = t.anims) || void 0 === e ? void 0 : e.animationManager) || !0 === t.getData("dynamic")) return;
                        let c = t.getData("outline"),
                            u = t.getData("key"),
                            p = "".concat(u, "-").concat(i);
                        !1 === t.getData("animated") ? (t.setVisible(!0), this.firstSprite && (!c || o) || (this.firstSprite = t, o = c)) : (null === (n = t.anims) || void 0 === n ? void 0 : null === (l = n.exists) || void 0 === l ? void 0 : l.call(n, p)) ? (t.anims.currentAnim && -1 !== t.anims.currentAnim.repeat && t.anims.isPlaying ? (t.anims.chain(void 0), t.anims.chain({
                            key: p,
                            delay: s
                        })) : t.anims.play({
                            key: p,
                            delay: s
                        }, !0), t.visible || (a = !0), t.setVisible(!0), this.firstSprite && (!c || o) || (this.firstSprite = t, o = c)) : r || ((null === (h = t.anims) || void 0 === h ? void 0 : h.isPlaying) && (null === (d = t.anims.currentAnim) || void 0 === d ? void 0 : d.repeat) === 0 ? t.anims.currentAnim.hideOnComplete = !0 : (t.visible && (a = !0), t.setVisible(!1)))
                    }), a && this.updateShadows()
                }
                addLayerAnimations(t, e, i) {
                    if (t.setData("animated", !!e.animations && e.animations.length > 0), e.outline && t.setData("outline", e.outline), e.animations && e.animations.length > 0) {
                        var s;
                        t.setData("key", i.key), null === (s = e.animations) || void 0 === s || s.forEach(e => {
                            var s;
                            let o = { ...e
                            };
                            (null === (s = e.animation) || void 0 === s ? void 0 : s.indexOf("_")) === -1 && void 0 === o.repeat && (o.repeat = -1), this.createAnimation(t, i.key, e.animation, o)
                        })
                    }
                }
                createLayerEffect(t, e, i) {
                    var s, r, a, l, n, h, d, c, u, p, m, y, f, g, b, x, P, C, T;
                    if ("wiggle" === e.effect) {
                        this.tweens || (this.tweens = []);
                        let s = e.effectData;
                        null == s || s.forEach(e => {
                            let s = this.scene.add.sprite(e.x, e.y, i.key);
                            s.setFrame(e.frame), s.setAlpha(e.alpha), s.setData("animated", !1), this.tweens.push(this.scene.tweens.add({
                                targets: s,
                                ease: o().Math.Easing.Elastic,
                                duration: 1e3 / e.speed,
                                loop: -1,
                                x: {
                                    from: e.x - e.dx,
                                    to: e.x + e.dx
                                },
                                y: {
                                    from: e.y - e.dy,
                                    to: e.y + e.dy
                                },
                                yoyo: !0
                            })), t.push(s)
                        }), 36 > this.spriteW && (this.spriteW = 36), 36 > this.spriteH && (this.spriteH = 36)
                    } else if ("text" === e.effect) {
                        let i;
                        let p = e.effectData,
                            m = null !== (s = e.offset) && void 0 !== s ? s : {
                                x: 0,
                                y: 0
                            },
                            y = p.color;
                        "string" == typeof y && (y = o().Display.Color.ValueToColor(y).color), !p.tracker || ("entity:time" === p.tracker ? i = formatTime(null === (r = this.currentState) || void 0 === r ? void 0 : r.utcRefresh) : (i = null === (n = this.currentState) || void 0 === n ? void 0 : null === (l = n.trackers) || void 0 === l ? void 0 : null === (a = l.find(t => t.name === p.tracker)) || void 0 === a ? void 0 : a.value) || (i = null === (c = this.currentState) || void 0 === c ? void 0 : null === (d = c.statics) || void 0 === d ? void 0 : null === (h = d.find(t => t.name === p.tracker)) || void 0 === h ? void 0 : h.value)), p.text && (i = p.text), "rightroad" === p.client ? i = (0, v.r5)(w.l.getInstance().peekRightMap()) : "leftroad" === p.client ? i = (0, v.r5)(w.l.getInstance().peekLeftMap()) : "gate" === p.client && (i = (0, v.r5)(w.l.getInstance().mapId));
                        let f = this.scene.add.bitmapText(m.x, m.y, "press_start", "".concat(null != i ? i : "??"), p.fontSize || 12);
                        (p.tracker || p.visible) && (this.toggleLayers || (this.toggleLayers = []), this.toggleLayers.push(new ToggleSprite(e, f))), f.setOrigin((null !== (u = p.alignment) && void 0 !== u ? u : 1) * .5, .5), f.setTint(null != y ? y : 16777215), t.push(f)
                    } else if ("particle" === e.effect) {
                        let s = new ParticleLayer(this.scene, e, i);
                        s.follow || t.push(s.emitter), this.particles || (this.particles = []), this.particles.push(s), (null === (p = e.effectData) || void 0 === p ? void 0 : p.visible) && (this.toggleLayers || (this.toggleLayers = []), this.toggleLayers.push(new ToggleSprite(e, void 0, s)))
                    } else if ("tintcycle" === e.effect) {
                        let s = {
                                x: null !== (g = null === (m = e.offset) || void 0 === m ? void 0 : m.x) && void 0 !== g ? g : 0,
                                y: null !== (b = null === (y = e.offset) || void 0 === y ? void 0 : y.y) && void 0 !== b ? b : 0
                            },
                            o = this.scene.add.sprite(s.x, s.y, i.key);
                        o.setDepth(null !== (x = e.depth) && void 0 !== x ? x : 0), (null === (f = e.sprite) || void 0 === f ? void 0 : f.flip) && o.setFlipX(!0), t.push(o), this.addLayerAnimations(o, e, i), this.tintCycle(o, e.effectData)
                    } else if ("dynamic" === e.effect) {
                        let s = this.createDefaultLayer(t, e, i);
                        return s.setData("dynamic", !0), ((null === (P = e.effectData) || void 0 === P ? void 0 : P.visible) || (null === (C = e.effectData) || void 0 === C ? void 0 : C.animation) || (null === (T = e.effectData) || void 0 === T ? void 0 : T.frame)) && (this.toggleLayers || (this.toggleLayers = []), this.toggleLayers.push(new ToggleSprite(e, s))), s
                    }
                }
                randomColor(t) {
                    let e = Math.random(),
                        i = Math.min(1, .6 + .5 * Math.random()),
                        s = .4 + .4 * Math.random();
                    return t.h = e, t.s = i, t.v = s, t.setFromHSV(e, i, s), t
                }
                tintCycle(t, e) {
                    let i = o().Display.Color.IntegerToColor(0),
                        tintAgain = () => {
                            var s, r, a, l, n, h;
                            let d;
                            let c = t.tintTopLeft,
                                u = o().Display.Color.IntegerToColor(c),
                                p = t.alpha,
                                v = "random";
                            if (null == e ? void 0 : e.dynamicColor) {
                                let t = null !== (n = null === (r = this.currentState) || void 0 === r ? void 0 : null === (s = r.trackers) || void 0 === s ? void 0 : s.find(t => t.name === e.dynamicColor)) && void 0 !== n ? n : null === (l = this.currentState) || void 0 === l ? void 0 : null === (a = l.statics) || void 0 === a ? void 0 : a.find(t => t.name === e.dynamicColor);
                                t && (v = t.value)
                            }
                            if ("random" === v) this.randomColor(i), d = Math.min(1, .6 + .5 * Math.random());
                            else {
                                let t = o().Display.Color.ValueToColor(v);
                                i.setTo(t.red, t.green, t.blue, t.alpha, !0), d = i.alpha / 255
                            }
                            let m = o().Display.Color.ColorToRGBA(c),
                                y = (i.h - u.h) / 255;
                            y > .5 ? y = (i.h - 1 - u.h) / 255 : y < -.5 && (y = (i.h + 1 - u.h) / 255), this.scene.tweens.addCounter({
                                from: 0,
                                to: 255,
                                duration: null !== (h = null == e ? void 0 : e.duration) && void 0 !== h ? h : 5e3,
                                onUpdate: function(e) {
                                    let s = Math.floor(e.getValue()),
                                        r = s / 255,
                                        a = u.h + y * s;
                                    a > 1 ? a -= 1 : a < 0 && (a += 1), o().Display.Color.HSVToRGB(a, u.s + (i.s - u.s) * r, u.v + (i.v - u.v) * r, m), t.setTint(o().Display.Color.GetColor(m.r, m.g, m.b)), t.alpha = p + (d - p) * r
                                },
                                onComplete: () => {
                                    var s;
                                    t.setTint(i.color), t.alpha = d, setTimeout(tintAgain, null !== (s = null == e ? void 0 : e.delay) && void 0 !== s ? s : 1e3)
                                }
                            })
                        };
                    t.setTint(this.randomColor(i).color), tintAgain()
                }
                createDefaultLayer(t, e, i) {
                    var s, o, r, a, l, n, h, d, c, u, p, v, m;
                    let y = {
                            x: null !== (l = null === (s = e.offset) || void 0 === s ? void 0 : s.x) && void 0 !== l ? l : 0,
                            y: null !== (n = null === (o = e.offset) || void 0 === o ? void 0 : o.y) && void 0 !== n ? n : 0
                        },
                        f = this.scene.add.sprite(y.x, y.y, i.key);
                    if (f.setDepth(null !== (h = e.depth) && void 0 !== h ? h : 0), (null === (r = e.sprite) || void 0 === r ? void 0 : r.flip) && f.setFlipX(!0), 0 === y.x && 0 === y.y) {
                        let t = null !== (p = null !== (u = null == i ? void 0 : null === (d = i.size) || void 0 === d ? void 0 : d.width) && void 0 !== u ? u : null == f ? void 0 : f.width) && void 0 !== p ? p : 0,
                            e = null !== (m = null !== (v = null == i ? void 0 : null === (c = i.size) || void 0 === c ? void 0 : c.height) && void 0 !== v ? v : null == f ? void 0 : f.height) && void 0 !== m ? m : 0;
                        t > this.spriteW && (this.spriteW = t), e > this.spriteH && (this.spriteH = e)
                    }
                    if (t.push(f), this.addLayerAnimations(f, e, i), this.hasWebGL && (null === (a = e.sprite) || void 0 === a ? void 0 : a.shadow) && !this.isCursor) {
                        let t = new ShadowNode(this.scene);
                        t.create(f, this.sprites), this.shadows || (this.shadows = []), this.shadows.push(t)
                    }
                    return f
                }
                createLayers() {
                    var t, e, i, s;
                    let o;
                    if (!this.gameEntity) return;
                    this.hasWebGL = !!this.scene.renderer.gl;
                    let r = [];
                    if (this.spriteH = 0, this.spriteW = 0, (null !== (s = null === (e = this.gameEntity.generic) || void 0 === e ? void 0 : null === (t = e.layers) || void 0 === t ? void 0 : t.length) && void 0 !== s ? s : 0) > 0) {
                        let t = this.gameEntity.generic.layers.map(t => t).sort((t, e) => t.depth - e.depth);
                        t.forEach(t => {
                            let e = this.getLayerProps(t);
                            if (t.effect) {
                                let i = this.createLayerEffect(r, t, e);
                                i && !o && (o = i)
                            } else {
                                let i = this.createDefaultLayer(r, t, e);
                                i && !o && (o = i)
                            }
                        }), o && (this.sprite = o)
                    }
                    this.sprites = this.scene.add.container(this.x, this.y, r), this.sprites.setSize(this.spriteW, this.spriteH), null === (i = this.particles) || void 0 === i || i.forEach(t => {
                        t.update(this.sprites)
                    })
                }
                magnetTo(t, e) {
                    if (this.velocity || (this.magnetTime = Date.now(), this.velocity = new(o()).Math.Vector2(0, 0)), this.sprites) {
                        let r = new(o()).Math.Vector2(this.sprites.x, this.sprites.y),
                            a = new(o()).Math.Vector2(t, e);
                        a.subtract(r);
                        let n = a.lengthSq();
                        if (this.velocity.scale(.95), a.normalize().scale(.8), this.velocity.add(a), r.add(this.velocity), this.sprites.setPosition(r.x, r.y), n <= this.velocity.lengthSq() && Date.now() - this.magnetTime > 400 && GenericEntityNode.collideLimiter.ready()) {
                            var i, s;
                            delete this.magnetTime, delete this.velocity, this.handlers.magneto && l.ZP.postEvent(y.m.clickEntity, {
                                mid: this.mid,
                                entity: null === (s = this.gameEntity) || void 0 === s ? void 0 : s.id,
                                impact: "magneto"
                            }), this.isMagnet = !1, null === (i = this.sprites) || void 0 === i || i.setDepth(this.depth), this.positionHotspot(), this.positionProximity(), this.updateShadows()
                        }
                    } else console.error("no body"), this.isMagnet = !1
                }
                setupCollision() {
                    let t = this.collision;
                    if (this.sprites) {
                        if ((null == t ? void 0 : t.size) && t.enabled) {
                            var e, i;
                            null === (e = this.scene.physics.world) || void 0 === e || e.enable(this.sprites), super.setupCollision(this.sprites.body, !0), null === (i = this.body) || void 0 === i || i.setImmovable()
                        } else super.setupCollision(this.sprites.body, !1)
                    }
                }
                positionProximity() {
                    var t, e;
                    let i = this.currentState && (null === (e = this.gameEntity.generic.states) || void 0 === e ? void 0 : null === (t = e[this.currentState.current]) || void 0 === t ? void 0 : t.proximity),
                        {
                            x: s,
                            y: o
                        } = this.position;
                    i ? this.circle = {
                        x: s + i.offset.x,
                        y: o + i.offset.y,
                        radius: i.radius
                    } : this.circle = {
                        x: this.x,
                        y: this.y,
                        radius: this.height
                    }
                }
                tweenTo(t) {
                    var e, i, s, o;
                    let r = this.sprites;
                    if (r && (null === (e = this.scene) || void 0 === e ? void 0 : e.tweens)) {
                        let e = [r],
                            a = t.position.x,
                            l = t.position.y,
                            n = a,
                            h = l;
                        this.shadows && this.shadows.forEach(t => e.push(t.shadow)), this.setHover(!1), (null === (i = this.collision) || void 0 === i ? void 0 : i.origin) || (n += .5 * this.width, h += .5 * this.height);
                        let d = this.scene.tweens.add({
                            targets: e,
                            ease: t.easing,
                            duration: t.duration || 1500,
                            repeat: 0,
                            x: {
                                from: null === (s = this.sprites) || void 0 === s ? void 0 : s.x,
                                to: n
                            },
                            y: {
                                from: null === (o = this.sprites) || void 0 === o ? void 0 : o.y,
                                to: h
                            },
                            yoyo: !1,
                            onComplete: () => {
                                this.setPosition({
                                    x: a,
                                    y: l
                                }), this.resetAnimation(), d.remove()
                            },
                            onStop: () => {
                                d.remove()
                            }
                        })
                    }
                    t.animation && this.play(t.animation)
                }
                positionHotspot() {
                    var t, e, i, s, o, r, a, l, n, h, d;
                    if (!this.hittest) return;
                    let c = this.currentState && (null === (e = this.gameEntity.generic.states) || void 0 === e ? void 0 : null === (t = e[this.currentState.current]) || void 0 === t ? void 0 : t.hittest);
                    if (null == c ? void 0 : c.size) {
                        this.hittest.setSize(null !== (r = c.size.width) && void 0 !== r ? r : 0, null !== (a = c.size.height) && void 0 !== a ? a : 0);
                        let {
                            x: t,
                            y: e
                        } = this.position;
                        this.hittest.setPosition(t + (null !== (l = null === (s = c.offset) || void 0 === s ? void 0 : s.x) && void 0 !== l ? l : 0) + (null !== (n = c.size.width) && void 0 !== n ? n : 0) / 2, e + (null !== (h = null === (o = c.offset) || void 0 === o ? void 0 : o.y) && void 0 !== h ? h : 0) + (null !== (d = c.size.height) && void 0 !== d ? d : 0) / 2)
                    } else this.hittest.setPosition(this.x, this.y), this.hittest.setSize(this.spriteW, this.spriteH);
                    (null === (i = this.hittest.input) || void 0 === i ? void 0 : i.hitArea) && (this.hittest.input.hitArea.width = this.hittest.width, this.hittest.input.hitArea.height = this.hittest.height), this.hittest.setDepth(this.depth + 2e3)
                }
                add() {
                    this.createLayers(), this.setInitialState(), this.setupCollision(), this.updateDefaultSprite(), this.sprites.setDepth(this.depth), this.hittest = new HitTestObject(this.scene, this.x, this.y, this.spriteW, this.spriteH, this.depth + 2e3), this.scene.add.existing(this.hittest), this.positionHotspot(), this.positionProximity(), this.setupInteraction(), this.updateShadows(), this.hidden && (this.sprites.setVisible(this.isCursor), this.scene.invisibleObjects.push(this))
                }
                updateDefaultSprite() {
                    var t;
                    let e = null === (t = this.outlineContainer) || void 0 === t ? void 0 : t.visible;
                    this.resetOutline(), this.firstSprite && (this.sprite = this.firstSprite, e && this.outline(!0))
                }
                updateShadows() {
                    var t;
                    null === (t = this.shadows) || void 0 === t || t.forEach(t => {
                        t.update(this.sprites)
                    })
                }
                updateHoverAnimation() {
                    var t;
                    if (super.updateHoverAnimation(), (null === (t = this.outlineContainer) || void 0 === t ? void 0 : t.visible) && this.sprites) {
                        let t = this.sprites.depth - 1;
                        this.outlineContainer.setDepth(t).setPosition(this.sprites.x, this.sprites.y)
                    }
                }
                outline(t) {
                    if (!t) {
                        this.offOutline();
                        return
                    }
                    if (!this.outlineContainer && this.sprite) {
                        var e;
                        null === (e = this.sprites) || void 0 === e || e.each(t => {
                            let e = t.getData("outline");
                            e && t.visible && this.addOutlineSprites(t, !0)
                        })
                    }
                    this.outlineContainer && this.sprite && this.onOutline()
                }
                destroy() {
                    var t, e, i, s, o, r;
                    this.sprite = void 0, super.destroy(), this.timerRefresh && clearTimeout(this.timerRefresh), this.timerRefresh = 0, this.hoverTimer && (clearInterval(this.hoverTimer), this.hoverTimer = 0), null === (t = this.ellipse) || void 0 === t || t.destroy(), delete this.toggleLayers, delete this.ellipse, null === (e = this.shadows) || void 0 === e || e.forEach(t => t.destroy()), delete this.shadows, null === (i = this.sprites) || void 0 === i || i.each(t => {
                        null == t || t.destroy()
                    }), null === (s = this.sprites) || void 0 === s || s.destroy(), null === (o = this.particles) || void 0 === o || o.forEach(t => {
                        t.destroy()
                    }), null === (r = p.default.instance) || void 0 === r || r.removePositional(this.mid)
                }
                formatHoverText() {
                    var t;
                    let e = (0, C.Kt)(this.currentState),
                        i = formatTime(null === (t = this.currentState.displayInfo) || void 0 === t ? void 0 : t.utcTarget);
                    return i && (e ? e += "\n" : e = "", e += i), e
                }
                showHoverNow() {
                    var t, e, i;
                    let s = null === (i = this.scene.cameras) || void 0 === i ? void 0 : null === (e = i.main) || void 0 === e ? void 0 : null === (t = e.worldView) || void 0 === t ? void 0 : t.top,
                        o = this.y - this.height / 2;
                    o < s && (o = s);
                    let r = this.scene.getCanvasPoint(this.x, o);
                    l.ZP.sendEvent(l.fb.GAME_OBJECT_MOUSEOVER, {
                        text: this.formatHoverText(),
                        mouse: {
                            x: r.x,
                            y: r.y
                        }
                    })
                }
                showHoverText(t, e) {
                    t ? (this.showHoverNow(), this.hoverTimer || (this.hoverTimer = setInterval(() => {
                        this.showHoverNow()
                    }, 1e3))) : (this.hoverTimer && (clearInterval(this.hoverTimer), delete this.hoverTimer), super.showHoverText(!1, e))
                }
                hasHoverText() {
                    var t;
                    return !!(!this.isCursor && (null === (t = this.currentState) || void 0 === t ? void 0 : t.displayInfo) && (this.currentState.displayInfo.format || this.currentState.displayInfo.utcTarget))
                }
                contextWith(t) {
                    var e;
                    return super.contextWith({ ...t,
                        clickable: this.handlers.click,
                        entityId: null === (e = this.gameEntity) || void 0 === e ? void 0 : e.id,
                        type: "generic",
                        text: this.formatHoverText()
                    })
                }
                constructor(t, e, i = !1) {
                    super(t, e, i), this.scene = t, this.getProperties = e, this.isCursor = i, this.trackerState = {}, this.gameEntity = g.Z.getGameEntity(this.properties.key), this.spriteW = 0, this.spriteH = 0, this.handlers = {}
                }
            };
            GenericEntityNode.collideLimiter = new class {
                ready() {
                    let t = Math.floor(Date.now() / this.ts);
                    return t === this.timeSegment ? (this.count++, this.count <= this.maxevents) : (this.timeSegment = t, this.count = 1, !0)
                }
                constructor(t, e) {
                    this.maxevents = t, this.ts = e, this.count = 0, this.timeSegment = Math.floor(Date.now() / e)
                }
            }(5, 300);
            let T = new Map;

            function customFileProcessComplete(t) {
                var e;
                t.xhrLoader && T.has(t.key) && "object" == typeof(e = t.xhrLoader.response) && "image/png" === e.type ? t.xhrLoader.response.arrayBuffer().then(e => {
                    let i = function(t) {
                        let e = new Uint8Array(t);
                        return e.reduce((t, e, i) => (t + (e << (7 & i)) & 4294967295) >>> 0, 0)
                    }(e);
                    T.get(t.key) === i || (t.state = 16), this.superfileProcessComplete(t)
                }) : this.superfileProcessComplete(t)
            }
            let NodeFactory = class NodeFactory {
                init() {
                    var t;
                    (t = this.scene.load).superfileProcessComplete || (t.superfileProcessComplete = t.fileProcessComplete, t.fileProcessComplete = customFileProcessComplete)
                }
                preloadAssetsFor(t, e) {
                    let {
                        frameWidth: i,
                        frameHeight: s,
                        image: o
                    } = e;
                    if (o) {
                        if (this.loadedAssets.has(t)) return !1;
                        e.hash && T.set(t, e.hash);
                        let r = (0, v.b7)(o);
                        i && s ? this.scene.load.spritesheet(t, r, {
                            frameWidth: i,
                            frameHeight: s
                        }) : this.scene.load.image(t, r)
                    } else e.node && e.node.preload();
                    return this.loadedAssets.add(t), !0
                }
                preloadAssetsArrayFor(t) {
                    t.forEach(t => {
                        this.preloadAssetsFor(t.key, t)
                    })
                }
                lateLoad(t) {
                    return new Promise(e => {
                        this.scene.load.once(o().Loader.Events.COMPLETE, () => {
                            console.log("late load done");
                            let i = t();
                            e(i)
                        }), this.scene.load.start()
                    })
                }
                async asyncBuilder(t, e, i, s) {
                    var o, r, a;
                    let l;
                    let n = (null == e ? void 0 : e.object) || (null == s ? void 0 : s.entity) || (null == e ? void 0 : e.entity) || i.id,
                        h = !1;
                    if ("generic" in i) {
                        let t = null === (o = i.generic.layers) || void 0 === o ? void 0 : o.filter(t => {
                            var e;
                            return (null === (e = t.sprite) || void 0 === e ? void 0 : e.image) && !this.loadedAssets.has("".concat(n, "-").concat(t.depth))
                        }).map(t => {
                            var e, i;
                            return {
                                image: t.sprite.image,
                                frameWidth: null === (e = t.sprite.size) || void 0 === e ? void 0 : e.width,
                                frameHeight: null === (i = t.sprite.size) || void 0 === i ? void 0 : i.height,
                                key: "".concat(n, "-").concat(t.depth),
                                hash: t.sprite.hash
                            }
                        });
                        t.length > 0 && (this.preloadAssetsArrayFor(t), h = !0)
                    } else "sprite" in i ? (l = {
                        image: i.sprite.image,
                        frameWidth: null === (r = i.sprite.size) || void 0 === r ? void 0 : r.width,
                        frameHeight: null === (a = i.sprite.size) || void 0 === a ? void 0 : a.height,
                        hash: i.sprite.hash
                    }, this.loadedAssets.has(n) || (this.preloadAssetsFor(n, l), h = !0)) : "image" in i && (l = {
                        image: i.image
                    }, this.loadedAssets.has(n) || (this.preloadAssetsFor(n, l), h = !0));
                    if ("npc" === t || "entity" === t && "npc" === i.type) {
                        let o = this.buildNodeInstance({
                            type: t,
                            mapConfig: e,
                            gameConfig: i,
                            playerEntity: s
                        });
                        return this.preloadAssetsFor(n, {
                            node: o
                        }), this.lateLoad(() => o)
                    }
                    return h ? this.lateLoad(() => this.buildNodeInstance({
                        type: t,
                        mapConfig: e,
                        gameConfig: i,
                        playerEntity: s
                    })) : this.buildNodeInstance({
                        type: t,
                        mapConfig: e,
                        gameConfig: i,
                        playerEntity: s
                    })
                }
                setGenericNodeState(t, e, i, s) {
                    if ((null == i ? void 0 : i.generic) || (null == s ? void 0 : s.generic)) t.setCurrentState({
                        playerInstance: null == i ? void 0 : i.generic,
                        mapInstance: null == s ? void 0 : s.generic
                    });
                    else {
                        var o, r;
                        let i = null === (r = e.generic) || void 0 === r ? void 0 : null === (o = r.states) || void 0 === o ? void 0 : o.findIndex(t => {
                            var i;
                            return (null === (i = e.generic) || void 0 === i ? void 0 : i.defaultState) === t.name
                        });
                        i && -1 !== i || (i = 0), t.setCurrentState({
                            playerInstance: {
                                current: i
                            },
                            mapInstance: {
                                current: i
                            }
                        })
                    }
                }
                getPropBuilder(t) {
                    let e = t.mapConfig;
                    if (t.playerEntity) {
                        var i;
                        e = { ...t.playerEntity
                        }, !t.playerEntity.position && (null === (i = t.mapConfig) || void 0 === i ? void 0 : i.posiiton) && (e.position = t.mapConfig.posiiton)
                    }
                    switch (t.type) {
                        case "object":
                            return () => NodeFactory.convertGameObjectToMapElementProps(e, t.gameConfig);
                        case "soil":
                            return () => NodeFactory.convertEntityToMapElementProps(e, t.gameConfig);
                        case "crop":
                            return () => NodeFactory.convertEntityToMapElementProps({ ...e,
                                entity: t.gameConfig.id
                            }, t.gameConfig, t.mid);
                        case "cookingTable":
                        case "npc":
                        case "entity":
                        case "storage":
                        case "generic":
                            let s = t.gameConfig.type;
                            if ("npc" === s) return;
                            if ("crop" === s) return () => NodeFactory.convertEntityToMapElementProps({ ...e,
                                entity: t.gameConfig.id
                            }, t.gameConfig, t.mid);
                            return () => NodeFactory.convertEntityToMapElementProps(e, t.gameConfig, t.mid);
                        case "item":
                            return () => NodeFactory.convertItemToMapElementProps(t.gameConfig)
                    }
                }
                buildNodeInstance(t) {
                    let e;
                    let i = !t.mapConfig && !t.playerEntity,
                        s = this.getPropBuilder(t);
                    switch (t.type) {
                        case "object":
                            e = new ObjectNode(this.scene, s, i);
                            break;
                        case "soil":
                            e = new SoilNode(this.scene, s, i);
                            break;
                        case "crop":
                            e = new CropNode(this.scene, s, i);
                            break;
                        case "cookingTable":
                        case "npc":
                        case "entity":
                        case "storage":
                        case "generic":
                            let o = t.gameConfig.type;
                            if ("npc" === o)(e = new NpcNode(this.scene, void 0, t.gameConfig, i)).preload();
                            else if ("generic" === o) e = new GenericEntityNode(this.scene, s, i), this.setGenericNodeState(e, t.gameConfig, t.playerEntity, t.mapConfig);
                            else if ("soil" === o) e = new SoilNode(this.scene, s, i);
                            else if ("crop" === o) e = new CropNode(this.scene, s, i);
                            else {
                                var r, a;
                                e = new EntityNode(this.scene, s, i);
                                let o = null === (r = t.gameConfig) || void 0 === r ? void 0 : r[t.gameConfig.type];
                                (null == o ? void 0 : o.defaultState) && (e.currentFrame = (null === (a = o.states[o.defaultState]) || void 0 === a ? void 0 : a.spriteFrame) || 0)
                            }
                            break;
                        case "item":
                            e = new ItemNode(this.scene, s, i)
                    }
                    return e
                }
                static convertItemToMapElementProps(t) {
                    let e = {
                        id: t.id,
                        key: t.id,
                        type: "objects",
                        image: t.image,
                        position: {
                            x: 0,
                            y: 0
                        },
                        offset: {
                            x: 0,
                            y: 0
                        },
                        hidden: !1
                    };
                    return e
                }
                static convertGameObjectToMapElementProps(t, e, i) {
                    var s, o, r, a, l, n, c, u;
                    let p = {
                        id: i || (null == t ? void 0 : t._id) || e.id,
                        key: (null == t ? void 0 : t.object) || e.id,
                        type: "objects",
                        soundId: e.soundId,
                        position: {
                            x: (null == t ? void 0 : t.x) || 0,
                            y: (null == t ? void 0 : t.y) || 0
                        },
                        image: e.sprite.image,
                        hash: e.sprite.hash,
                        size: e.sprite.size,
                        offset: {
                            x: 0,
                            y: 0
                        },
                        sprite: [e.sprite],
                        physics: e.physics,
                        hoverText: null == t ? void 0 : t.hoverText,
                        owner: null == t ? void 0 : t.player,
                        onClick: null == t ? void 0 : t.onClick,
                        onCollide: null == t ? void 0 : t.onCollide,
                        isWall: !!e.wall,
                        labels: e.labels,
                        hidden: !1,
                        animations: {},
                        animMode: null !== (a = e.anim) && void 0 !== a ? a : d.m.loop,
                        buildArea: e.buildArea,
                        targetSurfaceTypes: null !== (l = e.targetSurfaceTypes) && void 0 !== l ? l : ["floor"]
                    };
                    return e.sprite.scale && (p.scale = {
                        x: e.sprite.scale,
                        y: e.sprite.scale
                    }), !!e.sprite.flip != !!(null == t ? void 0 : t.flip) && (p.flip = !0), (null == t ? void 0 : t.onClick) && (p.actions = {
                        click: { ...t.onClick
                        }
                    }), p.hidden = (null === (s = e.wall) || void 0 === s ? void 0 : s.type) === "invisible" || (null === (o = e.sprite) || void 0 === o ? void 0 : o.invisible) || !1, (null === (r = e.sprite) || void 0 === r ? void 0 : r.isSpritesheet) && (p.animations = {
                        default: {
                            start: 0,
                            end: (null === (n = e.sprite) || void 0 === n ? void 0 : n.frames) !== void 0 ? (null === (c = e.sprite) || void 0 === c ? void 0 : c.frames) - 1 : -1,
                            frameRate: (null === (u = e.sprite) || void 0 === u ? void 0 : u.frameRate) || h.sD,
                            repeat: p.animMode & d.m.loop ? -1 : 0
                        }
                    }), p
                }
                constructor(t) {
                    this.scene = t, this.loadedAssets = new Set
                }
            };
            NodeFactory.convertEntityToMapElementProps = (t, e, i) => {
                var s, o, r, a, l, n, d, c;
                let u = {
                    id: i || (null == t ? void 0 : t.mid) || e.id,
                    key: (null == t ? void 0 : t.entity) || e.id,
                    type: "objects",
                    position: {
                        x: (null == t ? void 0 : null === (s = t.position) || void 0 === s ? void 0 : s.x) || 0,
                        y: (null == t ? void 0 : null === (o = t.position) || void 0 === o ? void 0 : o.y) || 0
                    },
                    image: e.sprite.image,
                    hash: e.sprite.hash,
                    size: e.sprite.size,
                    offset: {
                        x: 0,
                        y: 0
                    },
                    entityType: e.type,
                    owner: null == t ? void 0 : t.player,
                    sprite: [e.sprite],
                    physics: e.physics,
                    hidden: (null === (r = e.sprite) || void 0 === r ? void 0 : r.invisible) || !1,
                    buildArea: e.buildArea,
                    targetSurfaceTypes: null !== (n = e.targetSurfaceTypes) && void 0 !== n ? n : ["floor"]
                };
                return (null === (a = e.animations) || void 0 === a ? void 0 : a.default) ? u.animations = e.animations : (null === (l = e.sprite) || void 0 === l ? void 0 : l.isSpritesheet) && (u.animations = {
                    default: {
                        start: 0,
                        end: (null === (d = e.sprite) || void 0 === d ? void 0 : d.frames) !== void 0 ? e.sprite.frames - 1 : -1,
                        frameRate: (null === (c = e.sprite) || void 0 === c ? void 0 : c.frameRate) || h.sD,
                        repeat: -1
                    }
                }), u
            };
            let getCharacterData = t => {
                var e, i;
                let s = g.Z.getGameAvatar(t.avatarId || h.tU),
                    o = t.pieces;
                s && s.pieces || (s = g.Z.getGameAvatar(h.tU), o = {
                    body: {
                        species: "human",
                        color: "darkest",
                        type: "body",
                        gender: "male",
                        id: "body-human-darkest"
                    },
                    eyes: {
                        eyes: "regularfemale",
                        type: "eyes",
                        species: "human",
                        id: "eyes-human-regularfemale"
                    },
                    hair: {
                        style: "cowboy",
                        species: "human",
                        type: "hair",
                        gender: "female",
                        color: "red",
                        id: "hair-human-1-red"
                    },
                    mouth: {
                        type: "mouth",
                        species: "human",
                        mouth: "smile",
                        id: "mouth-human-smile"
                    },
                    outfit: {
                        type: "outfit",
                        style: "astronaut",
                        species: "human",
                        id: "outfit-human-astronaut"
                    }
                });
                let r = {
                    avatar: { ...s,
                        sprite: { ...null == s ? void 0 : s.sprite
                        },
                        mood: 1
                    },
                    position: t.position,
                    label: t.label,
                    modifiers: t.modifiers ? [...t.modifiers] : void 0,
                    kind: null !== (e = t.kind) && void 0 !== e ? e : "normal"
                };
                return r.avatar.display = o, r.avatar.sprite && t.flip && (r.avatar.sprite.flip = !r.avatar.sprite.flip), "fade" in t && (r.avatar.mood = null !== (i = t.fade) && void 0 !== i ? i : 0), r
            };
            let TilesetNode = class TilesetNode extends GenericNode {
                getProperties() {
                    let t = {
                        id: this.tileset._id,
                        key: this.tileset.id,
                        type: "tileset",
                        image: this.tileset.image,
                        hidden: !1,
                        tileset: {
                            sid: 0,
                            spacing: h.DY,
                            margin: h.aU,
                            ...this.tileset
                        }
                    };
                    return t
                }
                editCategory() {
                    return "floors"
                }
                load() {
                    let t = (0, v.b7)(this.properties.image);
                    this.scene.load.spritesheet(this.properties.key, t, {
                        frameWidth: this.properties.tileset.size,
                        frameHeight: this.properties.tileset.size,
                        margin: this.properties.tileset.margin,
                        spacing: this.properties.tileset.spacing
                    })
                }
                add() {}
                mapIndex(t) {
                    return this.tileset.remap && t in this.tileset.remap ? this.tileset.remap[t] : t
                }
                initTileset(t, e) {
                    var i;
                    return this.sid = e, this.tilesetImage = null !== (i = null == t ? void 0 : t.addTilesetImage(this.properties.tileset.name, this.properties.key, this.properties.tileset.size, this.properties.tileset.size, this.properties.tileset.padding, this.properties.tileset.spacing, e)) && void 0 !== i ? i : void 0, this.tilesetImage
                }
                addCollisions(t) {
                    if (this.tileset.indexes) {
                        let e = this.tileset.width * this.tileset.height,
                            i = Object.values(this.tileset.indexes).filter(t => t.impassable && t.index < e).map(t => this.sid + t.index);
                        i.length > 0 && (null == t || t.setCollision(i, !0, !1, !1))
                    }
                }
                get size() {
                    return this.properties.tileset.size
                }
                create() {
                    this.add()
                }
                getTileSurfaceType(t) {
                    var e;
                    let i = null === (e = this.tileset.indexes) || void 0 === e ? void 0 : e[t];
                    return i && i.allowBuilding ? i.wall ? "wall" : "floor" : null
                }
                getAutotileInfo() {
                    return this.tileset.autotile
                }
                constructor(t, e) {
                    super(t), this.scene = t, this.tileset = e, this.sid = 0, this.layer = 0, this.layer = e.layer || 0
                }
            };
            let TileNode = class TileNode extends GenericNode {
                getProperties() {
                    let t = this.tileInfo.tilesetId || "empty-tile-info";
                    return {
                        id: t,
                        key: t,
                        type: "tileset",
                        hidden: !1,
                        targetSurfaceTypes: ["floor"],
                        sprite: [{
                            size: {
                                width: h.D9,
                                height: h.D9
                            }
                        }]
                    }
                }
                setIndexes(t, e) {
                    this.sprite && (this.sprite.destroy(), this.sprite = void 0), this.container && this.destroyContainer(), this.container = this.scene.add.container(this.x + this.containerOffset.x, this.y + this.containerOffset.y), t.forEach((t, i) => {
                        var s, o;
                        if (!t) return;
                        let r = null !== (o = null === (s = t.node) || void 0 === s ? void 0 : s.mapIndex(t.index)) && void 0 !== o ? o : t.index,
                            a = this.scene.add.image(i % e * h.D9 + h.D9 / 2, Math.floor(i / e) * h.D9 + h.D9 / 2, t.tileset, r);
                        this.container.add(a)
                    })
                }
                setContainerOffset(t) {
                    this.containerOffset = t
                }
                applyChanges() {
                    var t;
                    super.applyChanges(), null === (t = this.container) || void 0 === t || t.setPosition(this.tempPosition.x + this.containerOffset.x, this.tempPosition.y + this.containerOffset.y)
                }
                getSnapPosition(t, e) {
                    let i = Math.floor(t.x / e) * e,
                        s = Math.floor(t.y / e) * e;
                    return {
                        x: i,
                        y: s
                    }
                }
                editCategory() {
                    return "floors"
                }
                updateTemporaryPosition(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : h.D9;
                    this.tempPosition = e > 0 ? this.getSnapPosition(t, e) : t
                }
                add() {
                    if (this.tileInfo.indexes) this.setIndexes(this.tileInfo.indexes.map(t => ({
                        index: t,
                        tileset: this.tileInfo.tilesetId,
                        node: this.tileset
                    })), this.tileInfo.width);
                    else if (void 0 !== this.tileInfo.tilesetIndex) {
                        var t, e;
                        let i = null !== (e = null === (t = this.tileset) || void 0 === t ? void 0 : t.mapIndex(this.tileInfo.tilesetIndex)) && void 0 !== e ? e : this.tileInfo.tilesetIndex;
                        this.sprite = this.scene.add.image(0, 0, this.tileInfo.tilesetId, i)
                    }
                }
                destroy() {
                    super.destroy(), this.destroyContainer(), this.tileset = void 0
                }
                destroyContainer() {
                    var t, e;
                    null === (t = this.container) || void 0 === t || t.each(t => {
                        null == t || t.destroy()
                    }), null === (e = this.container) || void 0 === e || e.destroy(), this.container = void 0
                }
                constructor(t, e, i) {
                    super(t, !0), this.scene = t, this.tileInfo = i, this.containerOffset = {
                        x: 0,
                        y: 0
                    }, this.tileset = e
                }
            };
            let GameScene = class GameScene extends o().Scene {
                resize(t, e) {
                    this.scale.resize(t, e), this.physics.world.setBounds(0, 0, t, e)
                }
                preloadPlugins() {
                    try {
                        window.matchMedia("(pointer: coarse)").matches && this.load.plugin("rexvirtualjoystickplugin", "https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexvirtualjoystickplugin.min.js", !0)
                    } catch (t) {
                        console.error(t)
                    }
                }
                preloadFonts() {
                    this.load.bitmapFont("press_start", (0, v.Uk)("/game/assets/fonts/press_start.png"), (0, v.Uk)("/game/assets/fonts/press_start.fnt"))
                }
                getSizeAttribute() {
                    return "Large"
                }
                create() {
                    this.input.on("pointerdown", t => {
                        this.pointerDown = {
                            worldX: t.worldX,
                            worldY: t.worldY
                        }
                    })
                }
                addCollider(t) {
                    this.collidingObjects.add(t)
                }
                removeCollider(t) {
                    this.collidingObjects.delete(t)
                }
                handleEvent(t, e) {
                    l.ZP.registerEventListener(t, e), this.handlers.push({
                        event: t,
                        callback: e
                    })
                }
                init(t) {
                    this.data = t, this.events.once("destroy", this.destroy, this)
                }
                destroy() {
                    console.log("[GameScene] remove handlers..."), this.handlers.forEach(t => {
                        l.ZP.removeEventListerner(t.event, t.callback)
                    }), this.handlers = []
                }
                clickCaptured() {
                    return !1
                }
                editMode() {
                    return !1
                }
                getCanvasPoint(t, e, i) {
                    var s;
                    void 0 === i && (i = new(o()).Math.Vector2);
                    let r = this.camera;
                    if (!r) return i.x = t, i.y = e, i;
                    let a = r.matrix.matrix;
                    if (!a) return i.x = t, i.y = e, i;
                    let l = a[0],
                        n = a[1],
                        h = a[2],
                        d = a[3],
                        c = a[4],
                        u = a[5];
                    if (!(l * d - n * h)) return i.x = t, i.y = e, i;
                    let p = null !== (s = r.resolution) && void 0 !== s ? s : 1,
                        v = (l * t + h * e + c) / p,
                        m = (n * t + d * e + u) / p,
                        y = Math.cos(r.rotation),
                        f = Math.sin(r.rotation),
                        {
                            zoom: g,
                            scrollX: b,
                            scrollY: x
                        } = r;
                    return i.x = v - (b * y - x * f) * g, i.y = m - (b * f + x * y) * g, i
                }
                onNodeCreated(t) {}
                onNodeUpdated(t) {}
                hasJoystick() {
                    return !1
                }
                constructor(t) {
                    super(t), this.map = {
                        size: h.WS,
                        bounds: h.BA
                    }, this.tilesetImages = [], this.animations = {}, this.collidingObjects = new Set, this.invisibleObjects = [], this.handlers = [], this.dynamicLayers = []
                }
            };
            let PlaceableCursor = class PlaceableCursor {
                blockCurrentBuildArea() {
                    this.isBuildAreaFree() && this.blockMovingNodeArea()
                }
                blockMovingNodeArea() {
                    let t = this.opts.movingNode.getBuildArea();
                    this.cache.nodeRects.find(e => this.overlapRects(e, t)) || (this.cache.nodeRects.push(t), delete this.cache.position)
                }
                updateNodeRects() {
                    var t, e, i;
                    this.cache = {
                        nodeRects: [],
                        wallRects: []
                    };
                    let s = null === (t = g.Z.getGameWallObjects()) || void 0 === t ? void 0 : t.map(t => t.id);
                    for (let t of (Object.values(this.opts.gameObjects).forEach(t => {
                            if (t !== this.opts.originalNode) {
                                if (null == s ? void 0 : s.includes(t.getKey())) {
                                    let e = t.width,
                                        i = t.height,
                                        s = t.x - e / 2,
                                        o = t.y - i / 2;
                                    this.cache.wallRects.push({
                                        left: s,
                                        top: o,
                                        width: e,
                                        height: i
                                    })
                                } else this.cache.nodeRects.push(t.getBuildArea())
                            }
                        }), this.opts.entities.values())) t !== this.opts.originalNode && this.cache.nodeRects.push(t.getBuildArea());
                    this.cache.tile = null !== (i = null === (e = this.opts.tilesetLayer) || void 0 === e ? void 0 : e.findTile(t => !!t)) && void 0 !== i ? i : void 0
                }
                updateCursorPosition() {
                    var t, e;
                    let i = this.opts.movingNode.getBuildArea();
                    if ((null === (t = this.cache.position) || void 0 === t ? void 0 : t.x) === i.left && (null === (e = this.cache.position) || void 0 === e ? void 0 : e.y) === i.top) return;
                    if (this.cache.position = {
                            x: i.left,
                            y: i.top
                        }, this._isBuildAreaFree = !0, this.graphics.clear(), this.opts.editingWithoutPermissions) {
                        this.drawRect(16711680, i), this._isBuildAreaFree = !1;
                        return
                    }
                    let s = this.calcCursorArea(i),
                        o = this.getNodesInCursorArea(s);
                    for (let t = s.top; t < s.top + s.height; t += this.opts.tileSize)
                        for (let e = s.left; e < s.left + s.width; e += this.opts.tileSize) {
                            let s = {
                                    left: e,
                                    top: t,
                                    width: this.opts.tileSize,
                                    height: this.opts.tileSize,
                                    tilelike: i.tilelike
                                },
                                r = this.overlapRects(i, s),
                                a = this.getTileSurfaceType(e, t),
                                l = this.overlapNodes(s, o.walls);
                            if (r || l.length)
                                for (let s = t; s < t + this.opts.tileSize; s += this.opts.snapSize)
                                    for (let t = e; t < e + this.opts.tileSize; t += this.opts.snapSize) {
                                        let e = {
                                                left: t,
                                                top: s,
                                                width: this.opts.snapSize,
                                                height: this.opts.snapSize,
                                                tilelike: i.tilelike
                                            },
                                            r = this.overlapRects(e, i),
                                            n = this.overlapNodes(e, l).length > 0,
                                            h = n ? "wall" : a,
                                            d = h && this.opts.movingNode.canTargetSurface(h) && !this.overlapNodes(e, o.nodes).length;
                                        r ? d ? this.drawRect(65280, e) : (this._isBuildAreaFree = !1, this.drawRect(16711680, e)) : d || this.drawRect(15781730, e)
                                    } else {
                                        let t = a && this.opts.movingNode.canTargetSurface(a);
                                        t || this.drawRect(15781730, s)
                                    }
                            this.drawBoundaries(s)
                        }
                }
                destroy() {
                    this.graphics.destroy()
                }
                isBuildAreaFree() {
                    return this._isBuildAreaFree
                }
                getSnapSize() {
                    return this.opts.snapSize
                }
                getTileInfo() {}
                calcCursorArea(t) {
                    var e;
                    let i = this.cache.tile || (null === (e = this.opts.tilesetLayer) || void 0 === e ? void 0 : e.getTileAtWorldXY(t.left, t.top)),
                        s = i ? (t.left - i.pixelX) % i.width : 0,
                        o = i ? (t.top - i.pixelY) % i.height : 0,
                        r = t.left - s,
                        a = t.top - o;
                    return {
                        left: r - 3 * this.opts.tileSize,
                        top: a - 3 * this.opts.tileSize,
                        width: (6 + Math.ceil(t.width / this.opts.tileSize)) * this.opts.tileSize,
                        height: (6 + Math.ceil(t.height / this.opts.tileSize)) * this.opts.tileSize,
                        tilelike: t.tilelike
                    }
                }
                overlapRects(t, e) {
                    return !t.tilelike == !e.tilelike && t.left < e.left + e.width && t.top < e.top + e.height && t.left + t.width > e.left && t.top + t.height > e.top
                }
                getTileSurfaceType(t, e) {
                    var i, s, o;
                    let r = null === (i = this.opts.tilesetLayer) || void 0 === i ? void 0 : i.getTileAtWorldXY(t, e);
                    if (!r) return null;
                    let a = null === (o = r.tileset) || void 0 === o ? void 0 : null === (s = o.image) || void 0 === s ? void 0 : s.key,
                        l = this.opts.tilesets[a];
                    if (!l) return null;
                    let n = r.index - l.sid;
                    return n >= 0 ? l.getTileSurfaceType(n) : null
                }
                overlapNodes(t, e) {
                    return e.filter(e => this.overlapRects(e, t))
                }
                getNodesInCursorArea(t) {
                    return {
                        nodes: this.overlapNodes(t, this.cache.nodeRects),
                        walls: this.overlapNodes(t, this.cache.wallRects)
                    }
                }
                drawRect(t, e) {
                    this.graphics.fillStyle(t, .5), this.graphics.fillRect(e.left, e.top, e.width, e.height)
                }
                drawBoundaries(t) {
                    let e = t.left,
                        i = t.top,
                        s = e + t.width,
                        o = i + t.height;
                    this.graphics.lineStyle(.5, 16777215, .5), this.graphics.lineBetween(e, i, e + 4, i), this.graphics.lineBetween(e, i, e, i + 4), this.graphics.lineBetween(s, i, s - 4, i), this.graphics.lineBetween(s, i, s, i + 4), this.graphics.lineBetween(e, o, e + 4, o), this.graphics.lineBetween(e, o, e, o - 4), this.graphics.lineBetween(s, o, s - 4, o), this.graphics.lineBetween(s, o, s, o - 4)
                }
                constructor(t) {
                    this.opts = t, this._isBuildAreaFree = !1, this.cache = {
                        nodeRects: [],
                        wallRects: []
                    }, this.graphics = this.opts.scene.add.graphics(), this.graphics.setDepth(1e5), this.updateNodeRects()
                }
            };
            let PlaceableTileCursor = class PlaceableTileCursor {
                updateNodeRects() {
                    this.baseCursor.updateNodeRects()
                }
                updateCursorPosition() {
                    this.isCacheHit() || (this.calcCache(), this.getTilesetLayer() || this.baseCursor.blockMovingNodeArea(), this.baseCursor.updateCursorPosition(), this.onCursorPositionUpdated())
                }
                blockCurrentBuildArea() {}
                isBuildAreaFree() {
                    return this.baseCursor.isBuildAreaFree()
                }
                getSnapSize() {
                    return this.baseCursor.getSnapSize()
                }
                getTileInfo() {
                    var t;
                    return null === (t = this.cache.tileInfo) || void 0 === t ? void 0 : t.filter(t => !!t).map(t => {
                        let {
                            position: e,
                            ...i
                        } = t, toTileSpace = t => Math.floor(t / this.opts.tileSize);
                        return {
                            position: {
                                x: toTileSpace(e.x),
                                y: toTileSpace(e.y)
                            },
                            ...i
                        }
                    })
                }
                destroy() {
                    this.baseCursor.destroy(), this.restoreTiles()
                }
                onCursorPositionUpdated() {
                    var t;
                    if (!this.isBuildAreaFree()) {
                        this.opts.movingTile.setIndexes([], 1);
                        return
                    }
                    let e = this.calcCenterTile(),
                        i = this.calcNeighborTile(this.offsetToWorldXY({
                            x: 0,
                            y: -1
                        }), e),
                        s = this.calcNeighborTile(this.offsetToWorldXY({
                            x: 0,
                            y: 1
                        }), e),
                        o = this.calcNeighborTile(this.offsetToWorldXY({
                            x: 1,
                            y: 0
                        }), e),
                        r = this.calcNeighborTile(this.offsetToWorldXY({
                            x: -1,
                            y: 0
                        }), e),
                        a = this.calcCornerTile(this.offsetToWorldXY({
                            x: 1,
                            y: -1
                        }), e, [i, o]),
                        l = this.calcCornerTile(this.offsetToWorldXY({
                            x: -1,
                            y: -1
                        }), e, [i, r]),
                        n = this.calcCornerTile(this.offsetToWorldXY({
                            x: 1,
                            y: 1
                        }), e, [s, o]),
                        h = this.calcCornerTile(this.offsetToWorldXY({
                            x: -1,
                            y: 1
                        }), e, [s, r]);
                    this.cache.tileInfo = [l, i, a, r, e, o, h, s, n], this.opts.movingTile.setIndexes(null === (t = this.cache.tileInfo) || void 0 === t ? void 0 : t.map(t => {
                        if (null == t ? void 0 : t.add) return {
                            index: t.add.index,
                            tileset: t.add.tileset,
                            node: this.getTilesetNode(t.add.tileset)
                        }
                    }), 3)
                }
                offsetToWorldXY(t) {
                    return {
                        x: this.opts.movingTile.x + t.x * this.opts.tileSize,
                        y: this.opts.movingTile.y + t.y * this.opts.tileSize
                    }
                }
                calcCenterTile() {
                    let t = this.offsetToWorldXY({
                        x: 0,
                        y: 0
                    });
                    return this.hideTile(t), this.calcTile(t, !0)
                }
                calcNeighborTile(t, e) {
                    var i, s, o, r;
                    let a = this.calcTile(t);
                    if ((null == a ? void 0 : null === (i = a.remove) || void 0 === i ? void 0 : i.tileset) === (null == e ? void 0 : null === (s = e.add) || void 0 === s ? void 0 : s.tileset) || (null == a ? void 0 : null === (o = a.remove) || void 0 === o ? void 0 : o.tileset) === (null == e ? void 0 : null === (r = e.remove) || void 0 === r ? void 0 : r.tileset)) return this.hideTile(t), a
                }
                calcCornerTile(t, e, i) {
                    var s, o, r, a, l, n, h, d, c, u, p, v;
                    let m = this.calcTile(t),
                        [y, f] = i;
                    if ((null == m ? void 0 : null === (s = m.remove) || void 0 === s ? void 0 : s.tileset) === (null == e ? void 0 : null === (o = e.add) || void 0 === o ? void 0 : o.tileset)) {
                        if ((null == y ? void 0 : null === (l = y.remove) || void 0 === l ? void 0 : l.tileset) !== (null == m ? void 0 : null === (n = m.remove) || void 0 === n ? void 0 : n.tileset) || (null == f ? void 0 : null === (h = f.remove) || void 0 === h ? void 0 : h.tileset) !== (null == m ? void 0 : null === (d = m.remove) || void 0 === d ? void 0 : d.tileset)) return
                    } else if ((null == m ? void 0 : null === (r = m.remove) || void 0 === r ? void 0 : r.tileset) !== (null == e ? void 0 : null === (a = e.remove) || void 0 === a ? void 0 : a.tileset) && (null == y ? void 0 : null === (c = y.remove) || void 0 === c ? void 0 : c.tileset) !== (null == m ? void 0 : null === (u = m.remove) || void 0 === u ? void 0 : u.tileset) && (null == f ? void 0 : null === (p = f.remove) || void 0 === p ? void 0 : p.tileset) !== (null == m ? void 0 : null === (v = m.remove) || void 0 === v ? void 0 : v.tileset)) return;
                    return this.hideTile(t), m
                }
                calcTile(t, e) {
                    var i;
                    let s = this.getTile(t),
                        o = this.getCurrentTilesetId(s),
                        r = e ? this.getNewTilesetId(t) : o;
                    if (!r) return s && o ? {
                        position: t,
                        remove: {
                            index: s.index,
                            tileset: o
                        },
                        isCenter: e
                    } : void 0;
                    let a = {
                            hasTileAt: (t, e) => this.getNewTilesetId({
                                x: t,
                                y: e
                            }) === r,
                            autotile: null === (i = this.getTilesetNode(r)) || void 0 === i ? void 0 : i.getAutotileInfo()
                        },
                        l = { ...t,
                            size: this.opts.tileSize
                        };
                    return {
                        position: t,
                        add: {
                            index: function(t, e) {
                                var i, s;
                                let o = function(t, e) {
                                        let i = t(e.x, e.y - e.size),
                                            s = t(e.x, e.y + e.size),
                                            o = t(e.x + e.size, e.y),
                                            r = t(e.x - e.size, e.y),
                                            a = i && o && t(e.x + e.size, e.y - e.size),
                                            l = i && r && t(e.x - e.size, e.y - e.size),
                                            n = s && o && t(e.x + e.size, e.y + e.size),
                                            h = s && r && t(e.x - e.size, e.y + e.size);
                                        return function(t) {
                                            let {
                                                n: e,
                                                s: i,
                                                e: s,
                                                w: o,
                                                ne: r,
                                                nw: a,
                                                se: l,
                                                sw: n
                                            } = t;
                                            return ((+!!e << 0) + (+!!i << 1) + (+!!s << 2) + (+!!o << 3) + ((+!!r << 4) + (+!!a << 5) + (+!!l << 6) + (+!!n << 7))).toString(2).padStart(8, "0")
                                        }({
                                            n: i,
                                            s,
                                            e: o,
                                            w: r,
                                            ne: a,
                                            nw: l,
                                            se: n,
                                            sw: h
                                        })
                                    }(t.hasTileAt, e),
                                    r = null === (i = t.autotile) || void 0 === i ? void 0 : i[o];
                                return r && (null === (s = function(t) {
                                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Math.random;
                                    if (!t.length) return;
                                    let i = 0,
                                        s = t.map(t => {
                                            var e;
                                            let s = null !== (e = t.weight) && void 0 !== e ? e : 0;
                                            if (s < 0) throw "weightedRandom.bad-weight";
                                            i += s;
                                            let o = {
                                                original: t,
                                                totalWeight: i
                                            };
                                            return o
                                        });
                                    if (!i) {
                                        let i = e() * t.length;
                                        return t[Math.floor(i)]
                                    }
                                    let o = e() * i,
                                        r = s.find(t => t.totalWeight < o);
                                    return r.original
                                }(r.indexes)) || void 0 === s ? void 0 : s.index)
                            }(a, l) || 0,
                            tileset: r
                        },
                        remove: s && o ? {
                            index: s.index,
                            tileset: o
                        } : void 0,
                        isCenter: e
                    }
                }
                getTile(t) {
                    var e;
                    let {
                        x: i,
                        y: s
                    } = t;
                    return null === (e = this.getTilesetLayer()) || void 0 === e ? void 0 : e.getTileAtWorldXY(i, s)
                }
                getCurrentTilesetId(t) {
                    var e, i;
                    return null == t ? void 0 : null === (i = t.tileset) || void 0 === i ? void 0 : null === (e = i.image) || void 0 === e ? void 0 : e.key
                }
                getNewTilesetId(t) {
                    var e, i, s;
                    return t.x !== this.opts.movingTile.x || t.y !== this.opts.movingTile.y ? this.getCurrentTilesetId(this.getTile(t)) : null === (s = this.opts.movingTile.tileset) || void 0 === s ? void 0 : null === (i = s.tilesetImage) || void 0 === i ? void 0 : null === (e = i.image) || void 0 === e ? void 0 : e.key
                }
                getTilesetNode(t) {
                    return t ? this.opts.tilesets[t] : void 0
                }
                hideTile(t) {
                    var e;
                    let {
                        x: i,
                        y: s
                    } = t, o = null === (e = this.getTilesetLayer()) || void 0 === e ? void 0 : e.getTileAtWorldXY(i, s);
                    o && (this.hiddenTiles.push({
                        x: i,
                        y: s
                    }), o.setVisible(!1))
                }
                restoreTiles() {
                    this.hiddenTiles.forEach(t => {
                        var e, i;
                        let {
                            x: s,
                            y: o
                        } = t;
                        return null === (i = this.getTilesetLayer()) || void 0 === i ? void 0 : null === (e = i.getTileAtWorldXY(s, o)) || void 0 === e ? void 0 : e.setVisible(!0)
                    }), this.hiddenTiles = []
                }
                getTilesetLayer() {
                    return this.cache.layer > 0 ? this.opts.tilesetLayers[this.cache.layer] : void 0
                }
                isCacheHit() {
                    return this.cache.position.x === this.opts.movingTile.x && this.cache.position.y === this.opts.movingTile.y
                }
                calcCache() {
                    var t;
                    this.restoreTiles();
                    let e = {
                            x: this.opts.movingTile.x,
                            y: this.opts.movingTile.y
                        },
                        i = (null === (t = this.opts.movingTile.tileset) || void 0 === t ? void 0 : t.layer) || this.getTopLayerAtPosition(e);
                    this.cache = {
                        position: e,
                        layer: i,
                        tileInfo: []
                    }
                }
                getTopLayerAtPosition(t) {
                    let {
                        x: e,
                        y: i
                    } = t, s = this.opts.tilesetLayers, o = s.length;
                    for (let t = 0; t < o; ++t) {
                        let r = o - 1 - t;
                        if (s[r].hasTileAtWorldXY(e, i)) return r
                    }
                    return -1
                }
                constructor(t) {
                    this.opts = t, this.hiddenTiles = [], this.baseCursor = new PlaceableCursor({ ...t,
                        movingNode: this.opts.movingTile,
                        originalNode: void 0,
                        snapSize: t.tileSize,
                        tilesetLayer: t.tilesetLayers[0]
                    }), this.opts.movingTile.setContainerOffset({
                        x: -t.tileSize,
                        y: -t.tileSize
                    }), this.calcCache()
                }
            };
            let EditableScene = class EditableScene extends GameScene {
                destroyGrid() {
                    if (this.gridOverlay) {
                        var t, e, i;
                        this.gridOverlay.forEach(t => {
                            null == t || t.destroy()
                        }), this.gridOverlay = [], null === (t = this.boundsRectangle) || void 0 === t || t.destroy(), (null === (e = this.physics) || void 0 === e ? void 0 : e.world) && (this.physics.world.drawDebug = !1, null === (i = this.physics.world.debugGraphic) || void 0 === i || i.clear())
                    }
                }
                destroy() {
                    var t;
                    for (let t of (super.destroy(), this.destroyGrid(), this.entities.values())) t.destroy();
                    Object.values(this.gameObjects).forEach(t => t.destroy()), null === (t = this.placeableCursor) || void 0 === t || t.destroy(), this.placeableCursor = void 0
                }
                drawGrid() {
                    try {
                        this.destroyGrid(), this.physics.world.debugGraphic || this.physics.world.createDebugGraphic(), this.physics.world.drawDebug = !0;
                        let t = h.WS.width,
                            e = h.WS.height;
                        this.getSizeAttribute() && ("Large" === this.getSizeAttribute() ? (t = h.rq, e = h.rq) : (t = h.ji, e = h.ji));
                        let i = 3e3 - t / 2,
                            s = 3e3 - e / 2,
                            o = h.D9 === this.gridSize ? 0 : this.gridSize / 2;
                        this.mapBounds && (i > this.mapBounds.left && (i = this.mapBounds.left), s > this.mapBounds.top && (s = this.mapBounds.top), this.mapBounds.width > t && (t = this.mapBounds.width), this.mapBounds.height > e && (e = this.mapBounds.height)), i = Math.floor(i / this.gridSize) * this.gridSize, s = Math.floor(s / this.gridSize) * this.gridSize, this.boundsRectangle = this.add.rectangle(i, s, t, e), this.boundsRectangle.setOrigin(0, 0).setStrokeStyle(4, 1729964);
                        let r = 10 * this.gridSize;
                        this.gridOverlay = [];
                        let a = 0;
                        for (; a < e;) {
                            let e = 0;
                            for (; e < t;) {
                                let t = this.add.grid(i + e - o, s + a - o, r, r, this.gridSize, this.gridSize, 0, .25, 16777215, .2);
                                t.setOrigin(0, 0), t.setDepth(1e4), this.gridOverlay.push(t), e += r
                            }
                            a += r
                        }
                    } catch (t) {
                        console.error(t)
                    }
                }
                update(t, e) {
                    if (super.update(t, e), this.camera) {
                        if (this.cursorNode) {
                            var i, s, o, r;
                            let t = this.editMode() && (null === (i = this.cursor) || void 0 === i ? void 0 : i.shift.isUp) || !!this.placeableCursor,
                                e = this.camera.getWorldPoint(this.input.activePointer.x, this.input.activePointer.y);
                            this.cursorNode.updateTemporaryPosition(e, t ? null !== (r = null === (s = this.placeableCursor) || void 0 === s ? void 0 : s.getSnapSize()) && void 0 !== r ? r : this.snapSize : 0), this.cursorNode.update(), null === (o = this.placeableCursor) || void 0 === o || o.updateCursorPosition(), this.outlineRect && this.updateOutline(e)
                        } else if ("erase" === this.editorMode && "floors" === this.category) {
                            let t = this.camera.getWorldPoint(this.input.activePointer.x, this.input.activePointer.y);
                            this.updateOutline(t)
                        }
                    }
                }
                updateOutline(t) {
                    if (!this.outlineRect) return;
                    let e = this.getSelectRect(t);
                    this.outlineRect.displayWidth = this.snapSize * e.width, this.outlineRect.displayHeight = this.snapSize * e.height, this.outlineRect.setPosition(e.left * this.snapSize, e.top * this.snapSize)
                }
                pickUpNodeAsCursor(t) {
                    var e;
                    this.releaseFromCursorHandler();
                    let i = null !== (e = this.entities.get(t)) && void 0 !== e ? e : this.gameObjects[t];
                    i && (this.cursorNode = i, this.cursorNode.pickUp(), this.cursorConfig = {
                        moving: !0,
                        mid: t
                    })
                }
                createDynamicCursorSupport() {
                    l.rV.attachToCursor.subscribeScene(this, t => {
                        (async () => {
                            if (this.releaseFromCursorHandler(), t) {
                                var e, i, s, o, r, a, l;
                                if (this.cursorNode = await this.addTempNodeAtCursor(t.type, t.config), this.cursorConfig = t, t.moving) {
                                    let o = this.entities.get(t.mid);
                                    if (o) {
                                        let e = this.stateManager.getEntityByUniqueId(this.cursorConfig.mid);
                                        e && "mapEntity_id" in e && (t.mid = e.mapEntity_id)
                                    }
                                    let r = null != o ? o : this.gameObjects[t.mid],
                                        a = null === (e = r.sprite) || void 0 === e ? void 0 : e.alpha;
                                    a && r.sprite.setAlpha(.5 * a);
                                    let l = null == r ? void 0 : null === (s = r.sprite) || void 0 === s ? void 0 : null === (i = s.input) || void 0 === i ? void 0 : i.enabled;
                                    l && r.sprite.disableInteractive(), this.cursorConfig.original = {
                                        node: r,
                                        wasInteractive: l,
                                        alpha: a
                                    }
                                }
                                if (this.cursorNode && (this.cursorNode.create(), null === (o = this.cursorNode.sprite) || void 0 === o || o.setDepth(1e5), null === (r = this.cursorNode.sprite) || void 0 === r || r.disableInteractive(), !this.editMode())) {
                                    if ("tile" === t.type) {
                                        let e = this.cursorNode;
                                        this.placeableCursor = new PlaceableTileCursor({
                                            entities: this.entities,
                                            gameObjects: this.gameObjects,
                                            movingTile: e,
                                            editingWithoutPermissions: t.editingWithoutPermissions,
                                            scene: this,
                                            tilesetLayers: this.dynamicLayers,
                                            tilesets: this.tilesets,
                                            tileSize: h.D9
                                        })
                                    } else "item" !== t.type && (this.placeableCursor = new PlaceableCursor({
                                        entities: this.entities,
                                        gameObjects: this.gameObjects,
                                        movingNode: this.cursorNode,
                                        originalNode: null === (l = this.cursorConfig) || void 0 === l ? void 0 : null === (a = l.original) || void 0 === a ? void 0 : a.node,
                                        editingWithoutPermissions: t.editingWithoutPermissions,
                                        scene: this,
                                        snapSize: this.snapSize,
                                        tilesetLayer: this.dynamicLayers[0],
                                        tilesets: this.tilesets,
                                        tileSize: h.D9
                                    }))
                                }
                            }
                        })()
                    }), this.handleEvent(l.qM.RELEASE_FROM_CURSOR, this.releaseFromCursorHandler)
                }
                createDynamicLayer(t) {
                    let e = [],
                        i = 0,
                        s = Object.values(this.tilesets),
                        o = s.filter(e => e.layer === t);
                    if (s.forEach(t => {
                            t.tilesetImage && (e.push(t.tilesetImage), i += t.tilesetImage.total)
                        }), o.forEach(t => {
                            if (!t.tilesetImage) {
                                let s = t.initTileset(this.dynamicMap, i);
                                s && (e.push(s), i += s.total)
                            }
                        }), this.dynamicLayers[t]) {
                        this.dynamicLayers[t].tileset = e;
                        let i = [];
                        e.forEach(t => {
                            let e = t.firstgid;
                            for (let s = 0; s < t.total; s += 1) i[e + s] = t
                        }), this.dynamicLayers[t].gidMap = i
                    } else {
                        let i = this.dynamicMap.createBlankLayer("dynamicLayer".concat(t), e);
                        i && (this.dynamicLayers[t] = i, this.dynamicLayers[t].setDepth(t - 11))
                    }
                    return this.dynamicLayers[t]
                }
                addTileset(t) {
                    let e = this.tilesets[t];
                    if (e) return e.loadPromise || Promise.resolve(e);
                    let i = g.Z.getGameTiles(),
                        s = null == i ? void 0 : i[t];
                    if (!s) return Promise.reject(Error("tileset not found ".concat(t)));
                    let r = new TilesetNode(this, s);
                    return r.preload(), this.tilesets[t] = r, r.loadPromise = new Promise(t => {
                        this.load.once(o().Loader.Events.COMPLETE, () => {
                            this.createDynamicLayer(s.layer), t(r)
                        }), this.load.start()
                    }), r.loadPromise
                }
                enumerateTiles(t, e) {
                    if (t.indexes && t.width) {
                        let i = 0;
                        t.indexes.forEach(s => {
                            s < 0 ? i -= s : (e(s, t.x + i % t.width, t.y + Math.floor(i / t.width)), i += 1)
                        })
                    } else t.index >= 0 && e(t.index, t.x, t.y)
                }
                addTileConfig(t) {
                    this.addTileset(t.tileset).then(() => {
                        this.enumerateTiles(t, (e, i, s) => {
                            this.addTile({
                                tileset: t.tileset,
                                index: e,
                                x: i,
                                y: s
                            })
                        })
                    }).catch(t => {
                        console.log("ERROR: ", t)
                    })
                }
                updateTiles(t) {
                    let e = g.Z.getGameTiles();
                    if (!this.dynamicMap) return;
                    let i = new Set;
                    t.forEach(t => {
                        i.add(t.tileset)
                    }), i.forEach(t => {
                        var i;
                        let s = this.tilesets[t];
                        if (!s) return;
                        let o = this.dynamicLayers[null !== (i = s.layer) && void 0 !== i ? i : 0];
                        if (!o) return;
                        let r = e[t],
                            a = this.dynamicMap.width,
                            l = this.dynamicMap.height,
                            n = r.width * r.height;
                        for (let t = 0; t < l; t += 1)
                            for (let e = 0; e < a; e += 1) {
                                let i = o.getTileAt(e, t);
                                i && i.index >= s.sid && i.index < s.sid + n && o.removeTileAt(e, t)
                            }
                    });
                    let s = g.Z.getMapTiles();
                    Object.values(s).forEach(t => {
                        i.has(t.tileset) && this.addTileConfig(t)
                    })
                }
                addTile(t) {
                    let e = this.tilesets[t.tileset];
                    if (e) try {
                        let i = e.sid + e.mapIndex(t.index);
                        this.dynamicLayers[e.layer].putTileAt(i, t.x, t.y)
                    } catch (t) {
                        console.log("ERROR: ", t)
                    } else console.log("".concat(t.tileset, " was not preloaded.")), this.addTileset(t.tileset).then(e => {
                        let i = e.sid + e.mapIndex(t.index);
                        this.dynamicLayers[e.layer].putTileAt(i, t.x, t.y)
                    }).catch(t => {
                        console.log("ERROR: ", null == t ? void 0 : t.message)
                    })
                }
                clickCaptured() {
                    return "paint" === this.editorMode
                }
                editMode() {
                    return !!this.editorMode
                }
                updateCollisions() {}
                setAllObjectsVisible(t) {
                    this.gameObjects && Object.values(this.gameObjects).forEach(e => {
                        var i;
                        null === (i = e.sprite) || void 0 === i || i.setVisible(t && !e.hidden)
                    })
                }
                onPointerDown(t) {
                    t.leftButtonDown() && (this.cursorDown = {
                        x: t.worldX / this.snapSize * this.snapSize,
                        y: t.worldY / this.snapSize * this.snapSize
                    })
                }
                onPointerUp(t) {
                    if (t.leftButtonReleased() && this.cursorDown) this.buildAction(t), delete this.cursorDown;
                    else if (t.rightButtonReleased()) {
                        let e = this.dynamicLayers.length - 1;
                        for (; e >= 0;) {
                            if (this.dynamicLayers[e]) {
                                let i = this.dynamicLayers[e].getTileAtWorldXY(t.worldX, t.worldY);
                                i && i.layer.tilemapLayer.tileset.forEach(s => {
                                    s.firstgid <= i.index && i.index < s.firstgid + s.columns * s.rows && (console.log("Layer ".concat(e, " tile is tileset ").concat(s.name, " index ").concat(i.index - s.firstgid)), console.log("@ ".concat(t.worldX, ", ").concat(t.worldY, " or ").concat(Math.floor(t.worldX / 32), ", ").concat(Math.floor(t.worldY / 32))))
                                })
                            }
                            e -= 1
                        }
                    }
                }
                buildTileConfig(t, e) {
                    var i, s;
                    if (!e.width || !e.indexes) return;
                    let o = (null === (i = t.add) || void 0 === i ? void 0 : i.width) || 1,
                        r = (null === (s = t.add) || void 0 === s ? void 0 : s.height) || 1;
                    if (1 === o && 1 === r) t.add.width = e.width, t.add.height = e.height, t.add.indexes = e.indexes;
                    else {
                        let i = Array(o * r),
                            s = e.indexes;
                        for (let t = 0; t < r; t += 1)
                            for (let r = 0; r < o; r += 1) i[t * o + r] = s[t % e.height * e.width + r % e.width];
                        t.add.indexes = i
                    }
                }
                getSelectRect(t) {
                    let e = {
                        left: Math.floor(t.x / this.snapSize),
                        top: Math.floor(t.y / this.snapSize),
                        width: 1,
                        height: 1
                    };
                    if (this.cursorDown) {
                        let t = Math.floor(this.cursorDown.x / this.snapSize),
                            i = Math.floor(this.cursorDown.y / this.snapSize);
                        if (e.left > t) {
                            let i = e.left;
                            e.left = t, t = i
                        }
                        if (e.top > i) {
                            let t = e.top;
                            e.top = i, i = t
                        }
                        e.width = t - e.left + 1, e.height = i - e.top + 1
                    }
                    return e
                }
                clickItemAction(t) {
                    var e, i, s, o, r, h, d;
                    switch (this.category) {
                        case "objects":
                        case "walls":
                        case "ugc":
                            {
                                let o = g.Z.getMapObject(t.targetId);
                                if (o) {
                                    let r = g.Z.getGameObject(o.object);
                                    if (!!(null == r ? void 0 : r.wall) != ("walls" === this.category)) return;
                                    switch (this.editorMode) {
                                        case "select":
                                            if (t.rightClick) {
                                                console.log("got right click on object");
                                                let t = {
                                                    type: "update",
                                                    update: {
                                                        _id: o._id,
                                                        flip: !o.flip
                                                    }
                                                };
                                                l.ZP.sendEvent(l.qM.BUILD_OBJECT, t)
                                            } else {
                                                let l = (0, n.Er)(a.h.getState());
                                                (null === (s = l.selectedItem) || void 0 === s ? void 0 : null === (i = s.object) || void 0 === i ? void 0 : null === (e = i.config) || void 0 === e ? void 0 : e._id) === (null == o ? void 0 : o._id) && (this.pickUpNodeAsCursor(t.targetId), delete this.cursorDown), a.h.dispatch((0, n.j6)({
                                                    object: r,
                                                    config: o
                                                }))
                                            }
                                            return;
                                        case "erase":
                                            let h = {
                                                type: "remove",
                                                remove: {
                                                    _id: o._id
                                                }
                                            };
                                            l.ZP.sendEvent(l.qM.BUILD_OBJECT, h)
                                    }
                                }
                            }
                            break;
                        case "entities":
                            let c = this.stateManager.getEntityByUniqueId(t.targetId);
                            if (c) {
                                let e = null !== (o = null == c ? void 0 : c.mapEntity_id) && void 0 !== o ? o : c.mid;
                                switch (e !== c.mid && (c = this.stateManager.getEntityByUniqueId(e)), this.editorMode) {
                                    case "erase":
                                        console.log("erasing mid", t.targetId, null == c ? void 0 : c.mapEntity_id), l.ZP.sendEvent(l.qM.BUILD_ENTITY, {
                                            action: "remove",
                                            remove: {
                                                _id: e
                                            }
                                        });
                                        return;
                                    case "select":
                                        if (t.rightClick) {
                                            let t = {
                                                action: "move",
                                                move: {
                                                    _id: e,
                                                    x: c.position.x,
                                                    y: c.position.y,
                                                    flip: !c.flip
                                                }
                                            };
                                            l.ZP.sendEvent(l.qM.BUILD_ENTITY, t)
                                        } else {
                                            let e = (0, n.Er)(a.h.getState());
                                            (null === (d = e.selectedItem) || void 0 === d ? void 0 : null === (h = d.entity) || void 0 === h ? void 0 : null === (r = h.config) || void 0 === r ? void 0 : r.mid) === c.mid && (this.pickUpNodeAsCursor(t.targetId), delete this.cursorDown, console.log("picked up entity"));
                                            let i = g.Z.getGameEntity(c.entity);
                                            a.h.dispatch((0, n.CL)({
                                                entity: i,
                                                config: JSON.parse(JSON.stringify(c))
                                            }))
                                        }
                                }
                            } else console.log("".concat(t.targetId, " is not an entity"))
                    }
                }
                buildAction(t) {
                    var e, i, s, o, r, h, d, c, u, p, v, m, y, f, g, b, x;
                    let w = this.category;
                    switch (this.editorMode) {
                        case "erase":
                            if ("floors" === w) {
                                let e = this.getSelectRect({
                                    x: t.worldX,
                                    y: t.worldY
                                });
                                this.removeTopTiles(e)
                            }
                            break;
                        case "select":
                            if (this.cursorNode && (null === (e = this.cursorConfig) || void 0 === e ? void 0 : e.mid)) {
                                if ("entities" === w) {
                                    let t = this.stateManager.getEntityByUniqueId(this.cursorConfig.mid),
                                        e = {
                                            action: "move",
                                            move: {
                                                _id: null !== (i = null == t ? void 0 : t.mapEntity_id) && void 0 !== i ? i : this.cursorConfig.mid,
                                                x: this.cursorNode.position.x,
                                                y: this.cursorNode.position.y
                                            }
                                        };
                                    l.ZP.sendEvent(l.qM.BUILD_ENTITY, e)
                                } else if (["objects", "walls", "ugc"].includes(w)) {
                                    let t = {
                                        type: "update",
                                        update: {
                                            _id: null === (s = this.cursorConfig) || void 0 === s ? void 0 : s.mid,
                                            x: this.cursorNode.position.x,
                                            y: this.cursorNode.position.y
                                        }
                                    };
                                    l.ZP.sendEvent(l.qM.BUILD_OBJECT, t)
                                }
                                this.releaseFromCursorHandler()
                            }
                            break;
                        case "paint":
                            let P = (0, n.Er)(a.h.getState());
                            if (P.selectedItem && this.cursorNode) switch (P.selectedItem.type) {
                                case "object":
                                    {
                                        let t = {
                                            type: "add",
                                            add: {
                                                x: this.cursorNode.position.x,
                                                y: this.cursorNode.position.y,
                                                object: null === (r = P.selectedItem) || void 0 === r ? void 0 : null === (o = r.object) || void 0 === o ? void 0 : o.def.id
                                            }
                                        };l.ZP.sendEvent(l.qM.BUILD_OBJECT, t)
                                    }
                                    break;
                                case "entity":
                                    {
                                        let t = {
                                            action: "add",
                                            add: {
                                                x: this.cursorNode.position.x,
                                                y: this.cursorNode.position.y,
                                                entity: null === (h = null === (c = P.selectedItem) || void 0 === c ? void 0 : null === (d = c.entity) || void 0 === d ? void 0 : d.def) || void 0 === h ? void 0 : h.id
                                            }
                                        };l.ZP.sendEvent(l.qM.BUILD_ENTITY, t)
                                    }
                                    break;
                                case "tile":
                                    if (this.dynamicMap) {
                                        let e = this.getSelectRect({
                                                x: t.worldX,
                                                y: t.worldY
                                            }),
                                            i = {
                                                action: "add",
                                                add: {
                                                    tileset: null === (p = P.selectedItem) || void 0 === p ? void 0 : null === (u = p.tile) || void 0 === u ? void 0 : u.tilesetId,
                                                    x: e.left,
                                                    y: e.top,
                                                    index: null === (m = P.selectedItem) || void 0 === m ? void 0 : null === (v = m.tile) || void 0 === v ? void 0 : v.tilesetIndex
                                                }
                                            };
                                        e.width * e.height > 1 && (i.add.width = e.width, i.add.height = e.height), (null === (f = P.selectedItem) || void 0 === f ? void 0 : null === (y = f.tile) || void 0 === y ? void 0 : y.indexes) && (null === (b = P.selectedItem) || void 0 === b ? void 0 : null === (g = b.tile) || void 0 === g ? void 0 : g.width) && this.buildTileConfig(i, null === (x = P.selectedItem) || void 0 === x ? void 0 : x.tile), l.ZP.sendEvent(l.qM.BUILD_TILE, i)
                                    }
                            }
                    }
                }
                static disableContextMenu(t) {
                    return t.preventDefault(), !1
                }
                createEditorSupport() {
                    l.rV.editor.on.subscribeScene(this, () => {
                        this.editorMode = "paint", this.category = "objects", this.snapSize = h.D9 / 4, this.invisibleObjects.forEach(t => {
                            var e;
                            return null === (e = t.sprite) || void 0 === e ? void 0 : e.setVisible(!0)
                        }), this.drawGrid(), this.outlineRect || (this.outlineRect = this.add.rectangle(0, 0, this.snapSize, this.snapSize, 3381759, .3), this.outlineRect.setOrigin(0, 0)), this.input.on("pointerdown", this.onPointerDown, this), this.input.on("pointerup", this.onPointerUp, this)
                    }), l.rV.editor.off.subscribeScene(this, () => {
                        var t;
                        this.editorMode = void 0, this.invisibleObjects.forEach(t => {
                            var e;
                            return null === (e = t.sprite) || void 0 === e ? void 0 : e.setVisible(!1)
                        }), this.setAllObjectsVisible(!0), this.destroyGrid(), this.input.off("pointerdown", this.onPointerDown), this.input.off("pointerup", this.onPointerUp), null === (t = this.outlineRect) || void 0 === t || t.destroy(), this.outlineRect = void 0
                    }), this.handleEvent(l.qM.SET_MODE, t => {
                        if (this.editorMode = t, "paint" !== t) {
                            var e;
                            null === (e = this.cursorNode) || void 0 === e || e.destroy(), this.cursorNode = void 0
                        }
                    }), this.handleEvent(l.fb.GAME_OBJECT_CLICKED, t => {
                        this.editorMode && this.clickItemAction(t)
                    }), this.handleEvent(l.fb.SERVER_BUILD_NODE, t => {
                        (async () => {
                            switch (t.action) {
                                case "add":
                                    "tile" === t.type ? this.addTileConfig(t.add) : "object" === t.type && await this.addObject(t);
                                    break;
                                case "remove":
                                    "tile" === t.type ? this.removeTiles(t.remove) : "object" === t.type && t._id in this.gameObjects && this.removeObject(t._id);
                                    break;
                                case "update":
                                    if ("object" === t.type) {
                                        if (t._id in this.gameObjects) {
                                            this.removeObject(t._id);
                                            let e = g.Z.getMapObject(t._id);
                                            e && (Object.assign(e, t), await this.addObject(e))
                                        }
                                    } else "tile" === t.type && t.update && this.updateTiles(t.update)
                            }
                            this.updateCollisions()
                        })()
                    }), this.handleEvent(l.qM.SET_CATEGORY, t => {
                        this.category = t;
                        let e = "floors" === t;
                        this.releaseFromCursorHandler(), this.snapSize = e ? h.D9 : h.D9 / 4, this.setAllObjectsVisible(!e), e || this.invisibleObjects.forEach(t => {
                            var e;
                            return null === (e = t.sprite) || void 0 === e ? void 0 : e.setVisible(!0)
                        }), this.drawGrid()
                    })
                }
                removeTiles(t) {
                    var e, i, s;
                    let o = this.dynamicLayers[null !== (e = t.layer) && void 0 !== e ? e : 0];
                    if (!o) return;
                    let r = null !== (i = t.width) && void 0 !== i ? i : 1,
                        a = null !== (s = t.height) && void 0 !== s ? s : 1;
                    for (let e = 0; e < a; e += 1)
                        for (let i = 0; i < r; i += 1) o.removeTileAt(t.x + i, t.y + e)
                }
                removeTopTiles(t) {
                    if (!this.dynamicMap) return;
                    let e = this.dynamicLayers.length - 1,
                        i = -1;
                    for (; e >= 0;) {
                        if (this.dynamicLayers[e]) {
                            let s = this.dynamicLayers[e].getTilesWithin(t.left, t.top, t.width, t.height);
                            if (s && s.some(t => t.index >= 0)) {
                                i = e;
                                break
                            }
                        }
                        e -= 1
                    }
                    if (i >= 0) {
                        let e = {
                            action: "remove",
                            remove: {
                                layer: i,
                                x: t.left,
                                y: t.top,
                                width: t.width,
                                height: t.height
                            }
                        };
                        l.ZP.sendEvent(l.qM.BUILD_TILE, e)
                    }
                }
                async addObject(t) {
                    var e, i;
                    let s = await this.addGameObjectElement(t);
                    s && (s.create(), null === (i = s.sprite) || void 0 === i || i.setVisible(!0), s.collides && this.updateCollisions()), this.gameObjects[t._id] = s, null === (e = this.placeableCursor) || void 0 === e || e.updateNodeRects()
                }
                removeObject(t) {
                    var e;
                    let i = this.gameObjects[t];
                    if (i) {
                        let {
                            collides: e
                        } = i;
                        delete this.gameObjects[t], i.destroy(), e && this.updateCollisions()
                    }
                    null === (e = this.placeableCursor) || void 0 === e || e.updateNodeRects()
                }
                createTilemap() {
                    this.dynamicMap = this.make.tilemap({
                        tileHeight: h.D9,
                        tileWidth: h.D9,
                        width: h.uT,
                        height: h.uT
                    })
                }
                create() {
                    this.createEditorSupport(), this.createDynamicCursorSupport(), this.input.keyboard && (this.cursor = this.input.keyboard.addKeys({
                        upW: o().Input.Keyboard.KeyCodes.W,
                        downS: o().Input.Keyboard.KeyCodes.S,
                        leftA: o().Input.Keyboard.KeyCodes.A,
                        rightD: o().Input.Keyboard.KeyCodes.D,
                        up: o().Input.Keyboard.KeyCodes.UP,
                        down: o().Input.Keyboard.KeyCodes.DOWN,
                        left: o().Input.Keyboard.KeyCodes.LEFT,
                        right: o().Input.Keyboard.KeyCodes.RIGHT,
                        space: o().Input.Keyboard.KeyCodes.SPACE,
                        shift: o().Input.Keyboard.KeyCodes.SHIFT
                    }, !1), l.rV.blur.subscribeScene(this, () => {
                        var t, e;
                        null === this || void 0 === this || null === (e = this.input) || void 0 === e || null === (t = e.keyboard) || void 0 === t || t.resetKeys()
                    }), this.input.keyboard.clearCaptures())
                }
                constructor(t) {
                    super(t), this.joystickState = {
                        up: !1,
                        down: !1,
                        left: !1,
                        right: !1
                    }, this.gridSize = h.D9, this.snapSize = h.D9 / 4, this.tilesets = {}, this.gameObjects = {}, this.entities = new Map, this.releaseFromCursorHandler = () => {
                        var t, e, i, s, o, r, a, l;
                        if (null === (t = this.cursorConfig) || void 0 === t ? void 0 : t.original) {
                            let {
                                node: t,
                                alpha: e,
                                wasInteractive: i
                            } = this.cursorConfig.original;
                            i && (null == t || null === (s = t.sprite) || void 0 === s || s.setInteractive()), e && t && (null === (o = t.sprite) || void 0 === o || o.setAlpha(e)), null === (r = this.cursorNode) || void 0 === r || r.destroy()
                        } else(null === (e = this.cursorConfig) || void 0 === e ? void 0 : e.moving) && this.cursorConfig.mid ? null === (a = this.cursorNode) || void 0 === a || a.returnCursor() : null === (l = this.cursorNode) || void 0 === l || l.destroy();
                        null === (i = this.placeableCursor) || void 0 === i || i.destroy(), this.placeableCursor = void 0, this.cursorNode = void 0, this.outlineRect && (this.outlineRect.displayWidth = 1, this.outlineRect.displayHeight = 1), this.cursorConfig = void 0
                    }, this.stateManager = w.l.getInstance()
                }
            };

            function isTriggerNode(t) {
                return !!(t.getTriggerId && t.getTriggerArea)
            }
            let TriggerSystem = class TriggerSystem {
                setPlayer(t) {
                    this.player = t
                }
                updateNode(t) {
                    if (!isTriggerNode(t)) return;
                    let e = this.triggers.indexOf(t);
                    e < 0 && t.hasOnCollide ? this.triggers.push(t) : e >= 0 && !t.hasOnCollide && this.triggers.splice(e, 1)
                }
                addNode(t) {
                    isTriggerNode(t) && t.hasOnCollide && this.triggers.push(t)
                }
                removeNode(t) {
                    if (!isTriggerNode(t)) return;
                    let e = this.triggers.indexOf(t);
                    e < 0 || this.triggers.splice(e, 1)
                }
                update() {
                    var t, e;
                    if (null === (t = this.player) || void 0 === t ? void 0 : t.stopMoving) return;
                    let i = null === (e = this.player) || void 0 === e ? void 0 : e.body;
                    if (i) {
                        this.searchIndex >= this.triggers.length && (this.searchIndex = 0);
                        for (let t = 0; t < 4 && this.searchIndex < this.triggers.length; t += 1, this.searchIndex += 1) {
                            let t = this.triggers[this.searchIndex];
                            if (!t) continue;
                            let e = t.getTriggerId();
                            if (!this.collide(i, t.getTriggerArea())) {
                                this.lastTriggerIds.has(e) && t.uncollided() && this.lastTriggerIds.delete(e);
                                continue
                            }
                            if (!this.lastTriggerIds.has(e)) {
                                this.lastTriggerIds.add(e), console.log("collided with something ".concat(e)), t.collided() || this.lastTriggerIds.delete(e);
                                break
                            }
                        }
                    }
                }
                collide(t, e) {
                    return !!e && ("radius" in e ? this.collideWithCircle(t, e) : this.collideWithRect(t, e))
                }
                collideWithCircle(t, e) {
                    var i, s, o, r;
                    let a = e.radius * e.radius;
                    return i = t.x + t.halfWidth, s = t.bottom, o = i - e.x, r = s - e.y, o * o + r * r < a
                }
                collideWithRect(t, e) {
                    return e.x - 3 < t.x + t.width && e.y - 3 < t.y + t.height && e.x + e.width > t.x - 3 && e.y + e.height > t.y - 3
                }
                constructor() {
                    this.triggers = [], this.lastTriggerIds = new Set, this.searchIndex = 0
                }
            };
            let getPlayerCharacterData = t => {
                    let e = "mute" === t.status || "restrict" === t.status || "block" === t.status,
                        i = "normal";
                    return t.memberships ? ("function" == typeof t.memberships.has ? t.memberships.has("vip") : !!t.memberships.vip) && (i = "vip") : i = void 0, getCharacterData({
                        avatarId: t.currentAvatar.id,
                        pieces: JSON.parse(t.currentAvatar.pieces || "{}"),
                        position: t.position,
                        label: e ? "(muted)" : t.username,
                        modifiers: t.modifiers,
                        kind: i
                    })
                },
                getPlayerPetData = t => {
                    var e, i, s;
                    return (null === (e = t.petAvatar) || void 0 === e ? void 0 : e.id) && (null === (i = t.petAvatar) || void 0 === i ? void 0 : i.pieces) ? getCharacterData({
                        avatarId: t.petAvatar.id,
                        pieces: JSON.parse(t.petAvatar.pieces || "{}"),
                        position: {
                            x: t.position.x - 16,
                            y: t.position.y
                        },
                        label: null !== (s = t.petAvatar.name) && void 0 !== s ? s : "Fido",
                        fade: t.petAvatar.fade,
                        kind: "pet"
                    }) : null
                };
            let RoomScene = class RoomScene extends EditableScene {
                setMapBackground() {
                    var t;
                    let e = this.stateManager.mapLabels;
                    e && (this.mapBg = "interior", (null == e ? void 0 : e.length) > 0 && (e.includes("dream") ? this.mapBg = "dream" : e.includes("land") ? this.mapBg = "land" : e.includes("space") ? this.mapBg = "space" : e.includes("water") ? this.mapBg = "water" : (e.includes("trial") || e.includes("rent")) && (this.mapBg = "land")), this.isInterior = null !== (t = null == e ? void 0 : e.includes("interior")) && void 0 !== t && t)
                }
                preloadTilesets() {
                    let t = g.Z.getGameTiles();
                    if (t) {
                        let i = new Set,
                            s = g.Z.getMapTiles();
                        if (s) {
                            var e;
                            null === (e = Object.entries(s)) || void 0 === e || e.forEach(t => {
                                let [, e] = t;
                                i.add(e.tileset)
                            }), i.forEach(e => {
                                let i = t[e];
                                if (i) {
                                    let t = new TilesetNode(this, i);
                                    t.preload(), this.tilesets[e] = t
                                }
                            })
                        } else console.warn("no tiles!")
                    }
                }
                preloadBackground() {
                    var t;
                    this.textures.exists("bg_image") && this.textures.remove("bg_image");
                    let e = g.Z.getMapBackground();
                    if (null == e ? void 0 : null === (t = e.sprite) || void 0 === t ? void 0 : t.image) {
                        this.load.image("bg_image", e.sprite.image);
                        return
                    }
                    let i = (0, v.Uk)("/game/assets/bg/spacetile.png");
                    switch (this.mapBg) {
                        case "interior":
                        default:
                            this.mapBg = void 0;
                            break;
                        case "dream":
                        case "space":
                        case "water":
                        case "land":
                            this.load.image("bg_image", i)
                    }
                }
                preloadAsset(t, e) {
                    this.nodeFactory.preloadAssetsFor(t, e)
                }
                preloadGameObjects() {
                    let t = g.Z.getMapObjects();
                    t && Object.values(t).forEach(t => {
                        if (!(null == t ? void 0 : t.object)) return;
                        let e = g.Z.getGameObject(t.object);
                        if (e) {
                            var i, s, o;
                            this.nodeFactory.preloadAssetsFor(t.object, {
                                image: e.sprite.image,
                                frameWidth: null === (i = e.sprite.size) || void 0 === i ? void 0 : i.width,
                                frameHeight: null === (s = e.sprite.size) || void 0 === s ? void 0 : s.height,
                                hash: e.sprite.hash
                            });
                            let r = this.nodeFactory.buildNodeInstance({
                                type: "object",
                                mapConfig: t,
                                gameConfig: e
                            });
                            r && (this.gameObjects[t._id] = r, null === (o = this.placeableCursor) || void 0 === o || o.updateNodeRects())
                        } else console.log("Object not found", t)
                    })
                }
                preloadGameEntities() {
                    var t;
                    let e = this.stateManager.getMapEntities(),
                        i = new Set;
                    null == e || e.forEach(t => {
                        let e = g.Z.getGameEntity(t.entity);
                        e && i.add(e)
                    });
                    let s = this.stateManager.currentPlayer;
                    (null === (t = s.full) || void 0 === t ? void 0 : t.entities) && s.full.entities.forEach(t => {
                        let e = g.Z.getGameEntity(t.entity);
                        e && i.add(e)
                    }), i.forEach(t => {
                        if ("npc" !== t.type) {
                            var e, i, s;
                            if ("generic" in t) {
                                let i = null === (e = t.generic.layers) || void 0 === e ? void 0 : e.filter(t => {
                                    var e;
                                    return null === (e = t.sprite) || void 0 === e ? void 0 : e.image
                                }).map(e => {
                                    var i, s;
                                    return {
                                        image: e.sprite.image,
                                        frameWidth: null === (i = e.sprite.size) || void 0 === i ? void 0 : i.width,
                                        frameHeight: null === (s = e.sprite.size) || void 0 === s ? void 0 : s.height,
                                        key: "".concat(t.id, "-").concat(e.depth),
                                        hash: e.sprite.hash
                                    }
                                });
                                this.nodeFactory.preloadAssetsArrayFor(i)
                            } else this.nodeFactory.preloadAssetsFor(t.id, {
                                image: t.sprite.image,
                                frameWidth: null === (i = t.sprite.size) || void 0 === i ? void 0 : i.width,
                                frameHeight: null === (s = t.sprite.size) || void 0 === s ? void 0 : s.height,
                                hash: t.sprite.hash
                            })
                        }
                    })
                }
                preloadMapEntities() {
                    var t;
                    let e = this.stateManager.getMapEntities();
                    this.entitiesToBuild || (this.entitiesToBuild = []);
                    let i = this.stateManager.currentPlayer,
                        s = new Map;
                    null === (t = i.full) || void 0 === t || t.entities.forEach(t => {
                        s.set(t.mapEntity_id, t)
                    }), e && e.forEach((t, e) => {
                        if (!s.has(t.mid)) {
                            let s = g.Z.getGameEntity(t.entity);
                            if (s) {
                                if ("npc" === s.type) {
                                    var i, o;
                                    let r = new NpcNode(this, t, s);
                                    null === (i = this.nodesPreloaded) || void 0 === i || i.push(r), this.entities.set(e, r), null === (o = this.placeableCursor) || void 0 === o || o.updateNodeRects()
                                } else "crop" === s.type || s.type, this.entitiesToBuild.push(t)
                            }
                        }
                    })
                }
                preloadGameSprites() {
                    this.load.spritesheet("tree-chopping", "".concat(h.pZ, "/entities/animations/Pixels_FX_ForagingSkill_Axe.png"), {
                        frameWidth: 32,
                        frameHeight: 32
                    }), this.load.spritesheet("crop-seeding", "".concat(h.pZ, "/entities/animations/Pixels_FX_FarmingSkill_seeds.png"), {
                        frameWidth: 32,
                        frameHeight: 32
                    }), this.load.spritesheet("crop-watering", "".concat(h.pZ, "/entities/animations/Pixels_FX_FarmingSkill_Watering.png"), {
                        frameWidth: 32,
                        frameHeight: 32
                    }), this.load.spritesheet("crop-fertilizing", "".concat(h.pZ, "/entities/animations/Pixels_FX_FarmingSkill_Fertilizing.png"), {
                        frameWidth: 32,
                        frameHeight: 32
                    }), this.load.spritesheet("crop-shear-harvesting", "".concat(h.pZ, "/entities/animations/Pixels_FX_FarmingSkill_Harvesting.png"), {
                        frameWidth: 32,
                        frameHeight: 32
                    }), this.load.spritesheet("crop-goldenrake-harvesting", "".concat(h.pZ, "/entities/animations/Pixels_FX_FarmingSkill_Golden+Rake.png"), {
                        frameWidth: 32,
                        frameHeight: 32
                    }), this.load.spritesheet("crop-maturing", "".concat(h.pZ, "/entities/animations/Pixels_FX_Farming_CropLevel.png"), {
                        frameWidth: 32,
                        frameHeight: 32
                    })
                }
                preloadJuicyGoodness() {
                    ParticleFX.preload(this)
                }
                preload() {
                    console.log("preloading scene"), this.nodesPreloaded = this.nodesToAdd, this.nodesToAdd = [], this.nodeFactory.init(), this.resize(window.innerWidth, window.innerHeight), this.preloadPlugins(), this.preloadFonts(), this.preloadTilesets(), this.preloadGameEntities(), this.preloadGameObjects(), this.preloadMapEntities(), this.preloadPlayerEntities(), this.preloadGameSprites(), this.preloadBackground(), this.preloadJuicyGoodness(), this.nodesPreloaded.forEach(t => t.preload())
                }
                onNodeCreated(t) {
                    this.triggerSystem.addNode(t)
                }
                onNodeUpdated(t) {
                    this.triggerSystem.updateNode(t)
                }
                putTile(t, e, i, s, o) {
                    if (super.addTile({
                            tileset: t,
                            index: e,
                            x: i,
                            y: s
                        }), t in this.tilesets) {
                        let e = this.tilesets[t],
                            r = e.size,
                            a = i * r,
                            l = s * r;
                        a < o.left && (o.left = a), l < o.top && (o.top = l), a + r > o.right && (o.right = a + r), l + r > o.bottom && (o.bottom = l + r)
                    } else console.warn("Tileset ".concat(t, " not found."))
                }
                addTile(t) {
                    if (super.addTile(t), this.mapBounds) {
                        let e = this.mapBounds,
                            i = this.tilesets[t.tileset],
                            s = i.size,
                            o = t.x * s,
                            r = t.y * s;
                        (o < e.left || r < e.top || o + s > e.right || r + s > e.bottom) && (o < e.left && (e.left = o), r < e.top && (e.top = r), o + s > e.right && (e.right = o + s), r + s > e.bottom && (e.bottom = r + s), this.resetCamera())
                    }
                }
                createTiles() {
                    this.dynamicMap || this.createTilemap(), Object.values(this.tilesets).forEach(t => t.create());
                    let t = g.Z.getMapTiles();
                    Object.values(this.tilesets).forEach(t => {
                        this.dynamicLayers[t.layer] || this.createDynamicLayer(t.layer), t.addCollisions(this.dynamicLayers[t.layer])
                    });
                    let e = {
                        left: h.WS.width,
                        top: h.WS.height,
                        right: 0,
                        bottom: 0
                    };
                    t && Object.values(t).forEach(t => {
                        this.enumerateTiles(t, (i, s, o) => {
                            this.putTile(t.tileset, i, s, o, e)
                        })
                    }), (e.bottom - e.top < 500 || e.right - e.left < 800) && (e.top -= 40, e.bottom += 40, e.left -= 40, e.right += 40), this.mapBounds = new(o()).Geom.Rectangle(e.left, e.top, e.right - e.left, e.bottom - e.top)
                }
                createGameObjects() {
                    Object.values(this.gameObjects).forEach(t => {
                        t.create()
                    })
                }
                hasJoystick() {
                    return !!this.joystick
                }
                createJoystick() {
                    try {
                        if (window.matchMedia("(pointer: coarse)").matches) {
                            let t = this.plugins.get("rexvirtualjoystickplugin");
                            this.joystick = t.add(this, {
                                x: 96,
                                y: window.innerHeight - 96,
                                radius: 64,
                                base: this.add.circle(0, 0, 64, 13421772, .3),
                                thumb: this.add.circle(0, 0, 32, 13421772, .6),
                                enable: !0
                            }).on("update", () => {
                                try {
                                    let t = this.joystick.createCursorKeys();
                                    this.joystickState = {
                                        left: t.left.isDown,
                                        right: t.right.isDown,
                                        up: t.up.isDown,
                                        down: t.down.isDown
                                    }
                                } catch (t) {
                                    console.error(t)
                                }
                            }), this.joystick.base.setDepth(1e5), this.joystick.thumb.setDepth(100001), this.joystick.setVisible("1" !== (0, v.Ul)("joystick_disabled")), l.rV.joystickControl.subscribeScene(this, t => {
                                this.joystick.setVisible(t.enabled)
                            }), this.repositionJoystick()
                        }
                    } catch (t) {
                        console.error(t)
                    }
                }
                createMapEntities() {
                    let t = this.entitiesToBuild;
                    if (!t) return;
                    let e = [];
                    t.forEach(t => {
                        let i = g.Z.getGameEntity(t.entity);
                        if (i) try {
                            let s;
                            "soil" === i.type ? s = this.buildSoilNode(t) : "crop" === i.type ? console.log("CROP not supported on MAP! Should only be player entity!") : s = this.buildMapEntityNode(t), s && e.push(s)
                        } catch (t) {
                            console.error("failed to build entity: ", t)
                        }
                    }), this.entitiesToBuild = void 0, e.forEach(t => t.create())
                }
                resize(t, e) {
                    super.resize(t, e), this.mapBounds && (this.resetCamera(), this.updateBackground()), this.repositionJoystick()
                }
                static isPower2(t) {
                    let e = 1;
                    for (; e < t;) e *= 2;
                    return e === t
                }
                createBackground() {
                    if (this.mapBg && this.mapBounds) {
                        var t;
                        let e = 1.41 * Math.max(this.scale.displaySize.width, this.scale.displaySize.height),
                            i = null === (t = this.textures.get("bg_image")) || void 0 === t ? void 0 : t.get(),
                            s = null == i ? void 0 : i.height;
                        if (!i || i.height !== i.width || !RoomScene.isPower2(i.width)) {
                            console.warn("specified background is not a square or not a power of 2 ".concat(null == i ? void 0 : i.width, "x").concat(null == i ? void 0 : i.height));
                            return
                        }
                        if (this.bg = this.add.tileSprite(this.scale.displaySize.width / 2, this.scale.displaySize.height / 2, e, e, "bg_image"), this.bg.tileScaleX = 2, this.bg.tileScaleY = 2, this.bg.setScrollFactor(0, 0), this.bg.setOrigin(.5, .5), this.bg.setDepth(-100), "dream" === this.mapBg) this.tweens.add({
                            targets: this.bg,
                            tilePositionY: {
                                from: 0,
                                to: -(.2 * s)
                            },
                            angle: 24,
                            loop: -1,
                            yoyo: !0,
                            ease: o().Math.Easing.Sine.InOut,
                            duration: 6e3
                        });
                        else {
                            let t = Math.trunc(270 * Math.random());
                            this.tweens.add({
                                targets: this.bg,
                                tilePositionY: {
                                    from: 0,
                                    to: -(8 * s)
                                },
                                angle: {
                                    from: t,
                                    to: 360 + t
                                },
                                loop: -1,
                                yoyo: !1,
                                duration: 4e5
                            })
                        }
                    }
                }
                createGameAnimations() {
                    this.anims.exists("crop-seeding-anims") || (this.anims.create({
                        key: "crop-seeding-anims",
                        frames: this.anims.generateFrameNumbers("crop-seeding", {
                            start: 0,
                            end: 5
                        }),
                        frameRate: 5,
                        repeat: 0
                    }), this.anims.create({
                        key: "crop-watering-anims",
                        frames: this.anims.generateFrameNumbers("crop-watering", {
                            start: 0,
                            end: 16
                        }),
                        frameRate: 16,
                        repeat: 0
                    }), this.anims.create({
                        key: "crop-fertilizing-anims",
                        frames: this.anims.generateFrameNumbers("crop-fertilizing", {
                            start: 0,
                            end: 9
                        }),
                        frameRate: 9,
                        repeat: 0
                    }), this.anims.create({
                        key: "crop-shear-harvesting-anims",
                        frames: this.anims.generateFrameNumbers("crop-shear-harvesting", {
                            start: 0,
                            end: 6
                        }),
                        frameRate: 6,
                        repeat: 0
                    }), this.anims.create({
                        key: "crop-goldenrake-harvesting-anims",
                        frames: this.anims.generateFrameNumbers("crop-goldenrake-harvesting", {
                            start: 0,
                            end: 10
                        }),
                        frameRate: 10,
                        repeat: 0
                    }), this.anims.create({
                        key: "crop-maturing-anims",
                        frames: this.anims.generateFrameNumbers("crop-maturing", {
                            start: 0,
                            end: 6
                        }),
                        frameRate: 6,
                        repeat: 0
                    }))
                }
                calcZoom() {
                    var t;
                    let {
                        width: e,
                        height: i
                    } = this.scale.displaySize, s = 1.7, o = null !== (t = window.devicePixelRatio) && void 0 !== t ? t : 1;
                    return (s *= Math.sqrt(e * i) / this._idealSize, .5 === o || 1.5 === o) ? s > 1 && s < 3.1 ? 2 : s < 6 ? 4 : Math.max(2, 2 * Math.round(s / 2)) : s > 1.4 && s < 3 ? 2 : s = Math.max(1, Math.round(s))
                }
                checkBrowserZoom(t) {
                    var e;
                    if (this.isAndroid) return !1;
                    let i = null !== (e = window.devicePixelRatio) && void 0 !== e ? e : 1,
                        s = t * i;
                    return i < 1 && .5 !== i || Math.abs(Math.round(s) - s) > .02
                }
                createZoomWarning(t) {
                    var e, i;
                    null === (e = this.tweenWarning) || void 0 === e || e.stop(), null === (i = this.labelWarning) || void 0 === i || i.setVisible(!1)
                }
                getCameraBoundsAndZoom() {
                    let t = this.calcZoom(),
                        e = {
                            left: this.mapBounds.left,
                            top: this.mapBounds.top,
                            width: this.mapBounds.width,
                            height: this.mapBounds.height
                        },
                        i = this.scale.displaySize.width / t - e.width,
                        s = this.scale.displaySize.height / t - e.height;
                    return this.scale.displaySize.width < 600 && (e.height < 700 || this.isInterior) && (s += this.scale.displaySize.height / (2 * t), i += this.scale.displaySize.width / (2 * t)), i > 0 && (e.left -= i / 2, e.width += i), s > 0 && (e.top -= s / 2, e.height += s), {
                        zoom: t,
                        bounds: e
                    }
                }
                resetCamera() {
                    if ("player" === this.camMode) {
                        let t = this.getCameraBoundsAndZoom();
                        this.camera = this.cameras.main.setBounds(t.bounds.left, t.bounds.top, t.bounds.width, t.bounds.height), this.createZoomWarning(this.checkBrowserZoom(t.zoom)), this.camera.setZoom(t.zoom), this.following && this.follow()
                    }
                }
                follow() {
                    let t = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
                    if (this.camera) {
                        if (t) {
                            var e;
                            if (null === (e = this.selfPlayer) || void 0 === e ? void 0 : e.body) {
                                let t = this.camera.height > this.camera.width;
                                this.camera.startFollow(this.selfPlayer.body, !0, h.Kp, h.Kp, 0, t ? this.camera.height / (8 * this.camera.zoom) : 0), this.following = !0
                            }
                        } else this.camera.stopFollow(), this.following = !1
                    }
                }
                createCamera() {
                    var t, e, i, s, r, a, l, n, d, c;
                    this.mapBounds || (this.mapBounds = new(o()).Geom.Rectangle(0, 0, h.WS.width, h.WS.height)), this.camMode = "player";
                    let u = this.getCameraBoundsAndZoom();
                    this.camera = this.cameras.main.setBounds(u.bounds.left, u.bounds.top, u.bounds.width, u.bounds.height), this.cameras.main.scrollX = h.WS.width / 2, this.cameras.main.scrollY = h.WS.height / 2, this.camera.setZoom(10 * h.m6), this.camera.setRoundPixels(!0), this.camera.setScroll(2e3, 2500);
                    let v = 1500;
                    "intro" === this.zoomIn ? (p.default.playAudio("snd_env_intro"), setTimeout(() => {
                        var t;
                        null === (t = p.default.instance) || void 0 === t || t.setupMap()
                    }, v = 5e3)) : "snap" !== this.zoomIn && (null === (t = p.default.instance) || void 0 === t || t.setupMap());
                    let m = this.checkBrowserZoom(u.zoom);
                    if (this.selfPlayer && (this.selfPlayer.stopMoving = !0), "snap" === this.zoomIn) this.fullZoom(!0);
                    else if ("quick" !== this.zoomIn && this.game.renderer.gl) {
                        let t;
                        this.camera.setZoom(u.zoom);
                        let h = {
                            targets: this.camera,
                            ease: o().Math.Easing.Cubic.In,
                            duration: v,
                            repeat: 0,
                            yoyo: !1,
                            onComplete: () => {
                                if (null == t || t.remove(), this.createZoomWarning(m), "roadleft" === this.zoomIn || "roadright" === this.zoomIn) {
                                    var e;
                                    null === (e = this.camera) || void 0 === e || e.shake(200, .001)
                                }
                                this.selfPlayer && (this.selfPlayer.stopMoving = !1, this.follow())
                            }
                        };
                        if ("roadleft" === this.zoomIn || "roadright" === this.zoomIn) {
                            let t = null !== (n = null !== (l = null === (e = this.selfPlayer.body) || void 0 === e ? void 0 : e.x) && void 0 !== l ? l : null === (i = this.selfPlayer.position) || void 0 === i ? void 0 : i.x) && void 0 !== n ? n : 3e3,
                                o = null !== (c = null !== (d = null === (s = this.selfPlayer.body) || void 0 === s ? void 0 : s.y) && void 0 !== d ? d : null === (r = this.selfPlayer.position) || void 0 === r ? void 0 : r.y) && void 0 !== c ? c : 3e3,
                                u = this.camera.clampX(t - this.camera.width / 2),
                                p = u,
                                v = this.camera.clampY(o - this.camera.height / 2);
                            h.scrollX = {
                                from: p,
                                to: u
                            }, null === (a = this.selfPlayer) || void 0 === a || a.perfectDismount(this.zoomIn), this.follow(!1), this.camera.scrollY = v, "roadright" === this.zoomIn ? p -= 200 : p += 200
                        } else this.follow();
                        this.camera.fadeIn(v), t = this.tweens.add(h)
                    } else "quick" === this.zoomIn ? this.camera.setZoom(u.zoom) : this.camera.zoomTo(u.zoom, v, o().Math.Easing.Linear), this.createZoomWarning(m), this.camera.fadeIn(1e3, void 0, void 0, void 0, (t, e) => {
                        1 === e && this.selfPlayer && (this.selfPlayer.stopMoving = !1)
                    }), this.follow()
                }
                playerZoom() {
                    if (this.mapBounds && this.camera && this.selfPlayer && "player" !== this.camMode) {
                        let t = this.calcPlayerZoom();
                        this.camera.zoomTo(t.zoom, 1500, o().Math.Easing.Linear, !0, (e, i, s) => {
                            if (this.bg) {
                                let e = t.zoom / s,
                                    i = 1.41 * Math.max(this.scale.displaySize.width, this.scale.displaySize.height);
                                this.bg.tileScaleX = 2 * e, this.bg.tileScaleY = 2 * e, this.bg.width = i * e, this.bg.height = i * e
                            }
                        }), this.camMode = "player", this.selfPlayer.stopMoving = !0, this.camera.pan(t.x, t.y, 2e3, o().Math.Easing.Linear, !0), this.camera.once(o().Cameras.Scene2D.Events.PAN_COMPLETE, () => {
                            "player" === this.camMode && (t.bounds && (this.camera = this.cameras.main.setBounds(t.bounds.left, t.bounds.top, t.bounds.width, t.bounds.height)), this.follow(), this.selfPlayer && (this.selfPlayer.stopMoving = !1))
                        })
                    }
                }
                fullZoom() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    if (this.mapBounds && "player" === this.camMode) {
                        var e, i, s, r;
                        let a = this.calcZoom(),
                            l = this.calcFullZoom();
                        if (a <= 1.1 * l.zoom && !t) return;
                        this.follow(!1), this.camera = this.cameras.main.removeBounds();
                        let zoomCallback = (t, e, i) => {
                            if (this.bg) {
                                let t = a / i,
                                    e = 1.41 * Math.max(this.scale.displaySize.width, this.scale.displaySize.height);
                                this.bg.tileScaleX = 2 * t, this.bg.tileScaleY = 2 * t, this.bg.width = e * t, this.bg.height = e * t
                            }
                        };
                        this.selfPlayer && (this.selfPlayer.stopMoving = !0), t ? (null === (e = this.camera) || void 0 === e || e.setZoom(l.zoom), zoomCallback(this.camera, 1, l.zoom), null === (i = this.camera) || void 0 === i || i.setScroll(l.x - this.camera.width / 2, l.y - this.camera.height / 2)) : (null === (s = this.camera) || void 0 === s || s.zoomTo(l.zoom, 2e3, o().Math.Easing.Linear, !0, zoomCallback), null === (r = this.camera) || void 0 === r || r.pan(l.x, l.y, 500, o().Math.Easing.Linear, !0)), this.camMode = "map"
                    }
                }
                calcPlayerZoom() {
                    var t, e, i;
                    this.mapBounds || (this.mapBounds = new(o()).Geom.Rectangle(0, 0, h.WS.width, h.WS.height));
                    let s = this.getCameraBoundsAndZoom(),
                        r = this.scale.displaySize.width,
                        a = this.scale.displaySize.height,
                        {
                            zoom: l
                        } = s,
                        n = null === (t = this.selfPlayer) || void 0 === t ? void 0 : t.bodyPosition,
                        d = null !== (e = null == n ? void 0 : n.x) && void 0 !== e ? e : this.mapBounds.centerX,
                        c = null !== (i = null == n ? void 0 : n.y) && void 0 !== i ? i : this.mapBounds.centerY;
                    return (d - s.bounds.left) * l * 2 < r ? d = s.bounds.left + r / (2 * l) : (s.bounds.left + s.bounds.width - d) * l * 2 < r && (d = s.bounds.left + s.bounds.width - r / (2 * l)), (c - s.bounds.top) * l * 2 < a ? c = s.bounds.top + a / (2 * l) : (this.mapBounds.bottom - c) * l * 2 < a && (c = s.bounds.top + s.bounds.height - a / (2 * l)), {
                        zoom: s.zoom,
                        x: Math.round(d),
                        y: Math.round(c),
                        bounds: s.bounds
                    }
                }
                calcFullZoom() {
                    var t, e, i;
                    this.mapBounds || (this.mapBounds = new(o()).Geom.Rectangle(0, 0, h.WS.width, h.WS.height));
                    let s = this.scale.displaySize.width,
                        r = this.scale.displaySize.height;
                    if (this.editorMode) return {
                        zoom: Math.min(s / this.mapBounds.width, r / this.mapBounds.height, .5),
                        x: this.mapBounds.centerX,
                        y: this.mapBounds.centerY
                    };
                    if (this.mapBg) return {
                        zoom: Math.min(s / this.mapBounds.width, r / this.mapBounds.height),
                        x: this.mapBounds.centerX,
                        y: this.mapBounds.centerY
                    };
                    let a = Math.max(s / this.mapBounds.width, r / this.mapBounds.height),
                        l = null === (t = this.selfPlayer) || void 0 === t ? void 0 : t.bodyPosition,
                        n = null !== (e = null == l ? void 0 : l.x) && void 0 !== e ? e : this.mapBounds.centerX,
                        d = null !== (i = null == l ? void 0 : l.y) && void 0 !== i ? i : this.mapBounds.centerY;
                    return (n - this.mapBounds.left) * a * 2 < s ? n = this.mapBounds.left + s / (2 * a) : (this.mapBounds.right - n) * a * 2 < s && (n = this.mapBounds.right - s / (2 * a)), (d - this.mapBounds.top) * a * 2 < r ? d = this.mapBounds.top + r / (2 * a) : (this.mapBounds.bottom - d) * a * 2 < r && (d = this.mapBounds.bottom - r / (2 * a)), {
                        zoom: a,
                        x: Math.round(n),
                        y: Math.round(d)
                    }
                }
                get movementPosition() {
                    var t;
                    if ((null === (t = this.joystick) || void 0 === t || !t.pointer) && this.movementPointer) return {
                        x: this.movementPointer.x,
                        y: this.movementPointer.y
                    }
                }
                mouseHandlers() {
                    this.input.on("pointerup", t => {
                        var e, i, s, o, r, a, n, h, d, c, u, v;
                        let m;
                        let y = (null === (e = this.cursorConfig) || void 0 === e ? void 0 : e.type) === "item" ? null === (i = null === (s = this.cursorConfig.config) || void 0 === s ? void 0 : s.item) || void 0 === i ? void 0 : i.id : void 0;
                        if (this.mouseDown = !1, this.movementPointer) {
                            this.movementPointer = void 0;
                            return
                        }
                        let f = !(null === (o = t.event) || void 0 === o ? void 0 : o.isTrusted),
                            g = this.input.hitTestPointer(t),
                            b = -1e3;
                        for (let t = 0; t < g.length; t += 1) {
                            let e = g[t],
                                i = null == e ? void 0 : e.getData("pixelnode");
                            if (i && this.nodeClickable(i, y)) {
                                let t = null !== (r = e.depth) && void 0 !== r ? r : 0;
                                t > b && (b = t, m = i)
                            }
                        }
                        if (m && !f) {
                            m.clicked(t, null === (a = this.selfPlayer) || void 0 === a ? void 0 : a.position);
                            return
                        }
                        if (t.leftButtonReleased()) {
                            let e = {};
                            this.cursorNode && this.cursorConfig && (e.tempNode = {
                                position: { ...this.cursorNode.position
                                },
                                isBuildAreaFree: (null === (c = this.placeableCursor) || void 0 === c ? void 0 : c.isBuildAreaFree()) || !1
                            }, e.tempNode.mid = this.cursorConfig.mid, e.tempNode.type = this.cursorConfig.type, e.tiles = null === (u = this.placeableCursor) || void 0 === u ? void 0 : u.getTileInfo());
                            let i = {
                                key: "ground",
                                mouse: {
                                    x: t.x,
                                    y: t.y
                                },
                                world: {
                                    x: t.worldX,
                                    y: t.worldY
                                },
                                selfPlayer: {
                                    x: null === (n = this.selfPlayer) || void 0 === n ? void 0 : n.x,
                                    y: null === (h = this.selfPlayer) || void 0 === h ? void 0 : h.y
                                },
                                target: "self",
                                context: e
                            };
                            null === (d = this.placeableCursor) || void 0 === d || d.blockCurrentBuildArea(), l.ZP.sendEvent(l.fb.PLAYER_CLICKED, i)
                        } else this.editMode() && t.rightButtonReleased() && (null === (v = this.selfPlayer) || void 0 === v || v.moveTo(t.worldX, t.worldY));
                        ParticleFX.emitDust({
                            x: t.worldX,
                            y: t.worldY
                        }), p.default.playAudio("snd_ui_misclick")
                    }), this.input.on("pointermove", t => {
                        this.hoverTimer && clearTimeout(this.hoverTimer), this.hoverTimer = void 0, this.handleMouseMove(t)
                    }), this.input.on("pointerdown", t => {
                        this.hoverTimer && clearTimeout(this.hoverTimer), this.mouseDown = !0, this.editorMode || (this.hoverTimer = setTimeout(() => {
                            this.hoverTimer = void 0, this.handleMouseMove(t)
                        }, 300))
                    })
                }
                handleMouseMove(t) {
                    var e, i, s, o, r, a, l, n;
                    let h, d;
                    let c = this.input.hitTestPointer(t),
                        u = (null === (e = this.cursorConfig) || void 0 === e ? void 0 : e.type) === "item" ? null === (i = null === (s = this.cursorConfig.config) || void 0 === s ? void 0 : s.item) || void 0 === i ? void 0 : i.id : void 0,
                        p = -1e3,
                        v = !this.editorMode && this.mouseDown && t.leftButtonDown();
                    if (v && this.game.getTime() - t.downTime >= 200) this.movementPointer = {
                        x: t.worldX,
                        y: t.worldY
                    }, null === (r = this.input) || void 0 === r || null === (o = r.keyboard) || void 0 === o || o.resetKeys();
                    else
                        for (let e of (this.movementPointer = void 0, t.leftButtonDown() || (this.mouseDown = !1), c)) {
                            let t = null == e ? void 0 : e.getData("pixelnode");
                            if (t && (!h && !d && t.hasHoverText() && (d = t), this.nodeClickable(t, u))) {
                                let i = null !== (a = e.depth) && void 0 !== a ? a : 0;
                                i > p && (p = i, h = t, d = t)
                            }
                        }
                    this.hoverNode !== h && (null === (l = this.hoverNode) || void 0 === l || l.setHover(!1), null == h || h.setHover(!0), this.hoverNode = h), this.hoverTextNode !== d && (null === (n = this.hoverTextNode) || void 0 === n || n.showHoverText(!1, u), null == d || d.showHoverText(!0, u), this.hoverTextNode = d), (v || this.hoverTextNode || this.hoverNode) && (this.hoverTimer = setTimeout(() => {
                        this.hoverTimer = void 0, this.handleMouseMove(this.input.activePointer)
                    }, v ? 100 : 800))
                }
                create() {
                    var t, e;
                    this.selfPlayer && "dream" === this.mapBg && (this.selfPlayer.zoom = 2), super.create(), this.physics.world.setBounds(0, 0, h.WS.width, h.WS.height), this.createTiles(), this.createGameObjects(), this.createMapEntities(), this.createBackground(), this.createGameAnimations(), ParticleFX.init(this), this.createJoystick(), null === (t = this.nodesPreloaded) || void 0 === t || t.forEach(t => t.create()), this.nodesPreloaded = void 0, this.updateCollisions(), this.createCamera(), this.createZoomHandler(), null === (e = this.input.mouse) || void 0 === e || e.disableContextMenu(), this.events.on("TRANSITION_OUT", t => {
                        this.transitionOut(t)
                    }), this.events.on("TRANSITION_IN", t => {
                        this.transitionIn(t)
                    }), this.mouseHandlers()
                }
                createZoomHandler() {
                    this.handleEvent("TOGGLE_MINIMAP", t => {
                        if (null == t ? void 0 : t.snap) {
                            this.fullZoom(!0);
                            return
                        }
                        this.selfPlayer && ("player" === this.camMode && this.selfPlayer.stopMoving || ("player" === this.camMode ? this.fullZoom() : this.playerZoom()))
                    }), this.handleEvent("TOGGLE_EDITOR", t => {
                        if (t) this.resetCamera();
                        else {
                            var e;
                            null === (e = this.camera) || void 0 === e || e.removeBounds()
                        }
                    }), this.handleEvent("EDITOR_SCROLL", t => {
                        t && t.x && t.y && this.camera && (this.camera.stopFollow(), this.camera.setScroll(t.x - this.camera.width / 2, t.y - this.camera.height / 2))
                    })
                }
                transitionIn(t) {
                    if (this.camera && ("quick" === t || "portal" === t)) {
                        if (this.camera.fadeEffect && !this.camera.fadeEffect.isComplete) {
                            let t = this.camera.fadeEffect.progress;
                            this.camera.fadeIn(1e3), this.camera.fadeEffect._elapsed = 1e3 * (1 - t), this.camera.fadeEffect.alpha = 1 - t
                        } else this.camera.fadeIn(1e3)
                    }
                }
                transitionOut(t) {
                    if (this.camera) {
                        if ("tramp" === t) this.follow(!1), p.default.playAudio("snd_env_scream"), this.camera.fadeOut(1500), this.selfPlayer && (this.selfPlayer.stopMoving = !0, this.selfPlayer.trampoline());
                        else if ("roadleft" === t || "roadright" === t) {
                            var e;
                            p.default.playAudio("snd_env_portal"), this.follow(!1), null === (e = this.selfPlayer) || void 0 === e || e.trampoline(), this.camera.shake(350, 5e-4);
                            let i = this.camera.scrollX;
                            "roadleft" === t ? i -= 300 : i += 300;
                            let s = this.tweens.add({
                                targets: this.camera,
                                scrollX: i,
                                ease: o().Math.Easing.Cubic.In,
                                duration: 1500,
                                repeat: 0,
                                yoyo: !1,
                                onComplete: () => {
                                    s.remove()
                                }
                            });
                            this.camera.fadeOut(1500)
                        } else this.camera.fadeOut(1e3)
                    }
                }
                updateBackground() {
                    if (this.bg && this.camera) {
                        let t = 1.41 * Math.max(this.scale.displaySize.width, this.scale.displaySize.height);
                        this.bg.x = this.scale.displaySize.width / 2, this.bg.y = this.scale.displaySize.height / 2, this.bg.width = t * this.bg.tileScaleX / 2, this.bg.height = t * this.bg.tileScaleY / 2
                    }
                }
                update(t, e) {
                    var i;
                    for (let s of (super.update(t, e), null === (i = this.selfPlayer) || void 0 === i || i.update(), this.otherPlayers.values())) s.update();
                    for (let t of this.crops.values()) t.update();
                    for (let t of this.entities.values()) t.update();
                    this.loadNodes(), this.triggerSystem.update()
                }
                nodeClickable(t, e) {
                    var i, s;
                    if (this.cursorConfig && (this.cursorConfig.moving || this.cursorConfig.placing || this.cursorConfig.editingWithoutPermissions && !this.cursorConfig.removing)) return !1;
                    if (this.editorMode) {
                        let e = (0, n.Y7)(a.h.getState());
                        if (["select", "erase"].includes(this.editorMode)) return t.editCategory() === e;
                        if ("paint" === this.editorMode || "floors" === e) return !1
                    } else if (null === (i = this.selfPlayer) || void 0 === i ? void 0 : i.stopMoving) return !1;
                    else if ((null === (s = this.cursorConfig) || void 0 === s ? void 0 : s.removing) && this.cursorConfig.editingWithoutPermissions && t.owner !== this.playerId) return !1;
                    return e ? t.clickableWithItem(e) : t.hasClickAction
                }
                loadNodes() {
                    var t;
                    if (this.nodesToAdd.length > 0 && (null === (t = this.load) || void 0 === t ? void 0 : t.isReady())) {
                        let t = new Set(this.nodesToAdd);
                        this.nodesToAdd = [], t.forEach(t => {
                            t.preload()
                        }), this.load.once(o().Loader.Events.COMPLETE, () => {
                            var e;
                            let i = !1,
                                s = !1;
                            t.forEach(t => {
                                t.create(), t === this.selfPlayer && (i = !0), t.collides && (s = !0)
                            }), i && (null === (e = this.selfPlayer) || void 0 === e ? void 0 : e.body) && "player" === this.camMode && this.follow(), (i || s) && this.updateCollisions()
                        }), this.load.start()
                    }
                }
                playerJoin(t, e) {
                    var i;
                    let s = g.Z.getGameAvatar((null == t ? void 0 : null === (i = t.currentAvatar) || void 0 === i ? void 0 : i.id) || h.tU);
                    if (t && s) {
                        let i = getPlayerCharacterData(t),
                            s = getPlayerPetData(t),
                            o = this.otherPlayers.get(e);
                        return o ? (o.updatePetData(s), o.updatePlayerData(i), this.removeNode(o)) : (o = new OtherPlayerNode(this, t, i, s), this.otherPlayers.set(e, o), this.playerMidToSessionId.set(t.mid, e), this.selfPlayer && o.fadeIn()), this.nodesToAdd.push(o), o
                    }
                }
                removeNode(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    this.triggerSystem.removeNode(t);
                    let i = this.nodesToAdd.indexOf(t); - 1 === i ? (e || t.destroy(), this.nodesPreloaded && (this.nodesPreloaded = this.nodesPreloaded.filter(e => e !== t))) : this.nodesToAdd.splice(i, 1)
                }
                playerLeave(t, e) {
                    if (t) {
                        let i = this.otherPlayers.get(t);
                        i && (this.otherPlayers.delete(t), this.playerMidToSessionId.delete(e), i.fadeAndDestroy(), this.removeNode(i, !0))
                    } else this.otherPlayers.forEach(t => {
                        this.removeNode(t)
                    }), this.otherPlayers.clear()
                }
                buildSoilNode(t) {
                    let e = g.Z.getGameEntity(t.entity);
                    if (e && "soil" === e.type && !this.entities.has(t.mid)) {
                        let s = this.nodeFactory.buildNodeInstance({
                            type: e.type,
                            mapConfig: t,
                            gameConfig: e
                        });
                        if ("soil" === e.type) {
                            var i;
                            return this.entities.set(t.mid, s), null === (i = this.placeableCursor) || void 0 === i || i.updateNodeRects(), s
                        }
                    }
                }
                buildCropNode(t) {
                    let e = this.stateManager.getSoilEntity(t.mapEntity_id),
                        i = g.Z.getGameEntity(t.entity);
                    if (e && i) {
                        let s = this.nodeFactory.buildNodeInstance({
                            type: "crop",
                            mapConfig: e,
                            gameConfig: i,
                            mid: t.mid
                        });
                        return s && (this.crops.set(t.mid, s), this.setCropState(s, t, i)), s
                    }
                }
                setCropState(t, e, i) {
                    e.crop && t.updateState(e, i)
                }
                buildPlayerEntityNode(t) {
                    let e = t.mapEntity_id ? this.stateManager.getEntityByUniqueId(t.mapEntity_id) : void 0,
                        i = t.position && t.position.x ? t.position : null == e ? void 0 : e.position,
                        s = g.Z.getGameEntity(t.entity);
                    if (s) {
                        let a = this.nodeFactory.buildNodeInstance({
                            type: s.type,
                            mapConfig: e,
                            playerEntity: { ...t,
                                position: i
                            },
                            gameConfig: s,
                            mid: t.mid
                        });
                        if (a) {
                            var o, r;
                            (null === (o = t[s.type]) || void 0 === o ? void 0 : o.state) && (a.state = t[s.type].state), this.entities.set(t.mid, a), null === (r = this.placeableCursor) || void 0 === r || r.updateNodeRects()
                        }
                        return a
                    }
                }
                buildMapEntityNode(t) {
                    let e = g.Z.getGameEntity(t.entity);
                    if (!e || !e.type || "npc" === e.type) return;
                    let i = this.nodeFactory.buildNodeInstance({
                        type: e.type,
                        mapConfig: t,
                        gameConfig: e
                    });
                    if (i) {
                        var s, o, r;
                        (null === (s = t[e.type]) || void 0 === s ? void 0 : s.state) && (i.state = null === (o = t[e.type]) || void 0 === o ? void 0 : o.state), this.entities.set(t.mid, i), null === (r = this.placeableCursor) || void 0 === r || r.updateNodeRects()
                    }
                    return i
                }
                getPlayerEntityFromMapEntity(t) {
                    let e, i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        s = this.stateManager.currentPlayer;
                    if (!i) {
                        var o;
                        if (!(null === (o = this.stateManager.getMapEntities()) || void 0 === o ? void 0 : o.get(t))) return
                    }
                    return (null == s ? void 0 : s.full) && s.full.entities.forEach(i => {
                        i.mapEntity_id === t && (e = i)
                    }), e
                }
                preloadPlayerEntities() {
                    let t = this.stateManager.currentPlayer;
                    (null == t ? void 0 : t.full) && (t.full.entities.forEach(t => {
                        var e, i, s;
                        let o = g.Z.getGameEntity(t.entity);
                        if ((null == o ? void 0 : o.type) === "crop") {
                            let s = this.buildCropNode(t);
                            s && (null === (e = this.nodesPreloaded) || void 0 === e || e.push(s));
                            let o = this.stateManager.getSoilEntity(t.mapEntity_id);
                            if (o) {
                                let e = this.buildSoilNode(o);
                                e && (e.state = t.crop.soilState, null === (i = this.nodesPreloaded) || void 0 === i || i.push(e))
                            }
                        } else if ((null == o ? void 0 : o.type) === "npc") {
                            let e = this.getConfigFromPlayerEntity(t);
                            if (e) {
                                let t = g.Z.getGameEntity(e.entity);
                                if (t) {
                                    let i = new NpcNode(this, e, t);
                                    this.entities.set(e.mid, i), this.nodesPreloaded.push(i)
                                }
                            }
                        } else if ((null == o ? void 0 : o.type) === "soil");
                        else {
                            if ((null == t ? void 0 : t.mapEntity_id) && !this.stateManager.getEntityByUniqueId(t.mapEntity_id)) {
                                console.log("missing map entity for", t);
                                return
                            }
                            let e = this.buildPlayerEntityNode(t);
                            e && (null === (s = this.nodesPreloaded) || void 0 === s || s.push(e))
                        }
                    }), t.full.entities.forEach(t => {
                        let e = g.Z.getGameEntity(t.entity);
                        if ((null == e ? void 0 : e.type) === "soil") {
                            let e = this.getConfigFromPlayerEntity(t);
                            if (e) {
                                let t = this.buildSoilNode(e);
                                t && (this.entities.set(e.mid, t), this.nodesPreloaded.push(t))
                            }
                        }
                    }))
                }
                initSelfPlayerState(t) {
                    var e, i;
                    let s = getPlayerCharacterData(t.core),
                        o = getPlayerPetData(t.core);
                    if (this.selfPlayer = new PlayerNode(this, s, o), t.full.pet ? this.selfPlayer.setPet(t.full.pet) : console.log("no pet when loaded"), this.nodesToAdd.push(this.selfPlayer), this.triggerSystem.setPlayer(this.selfPlayer), this.selfPlayer) {
                        let e = t.full.energy.level > h.Z6,
                            s = e ? 1 : h.p$;
                        this.selfPlayer.speed = s, null === (i = p.default.instance) || void 0 === i || i.detune(e ? 0 : -200)
                    }
                    null === (e = p.default.instance) || void 0 === e || e.updatePosition(this.selfPlayer.position), this.playerId = t.core.mid, this.handleEvent(l.fb.CHAT_MESSAGE_RCV, t => {
                        if (t.creator_id === this.playerId) this.selfPlayer.showChatMessage(t.message);
                        else {
                            let e = this.playerMidToSessionId.get(t.creator_id);
                            if (e) {
                                let i = this.otherPlayers.get(e);
                                i && i.showChatMessage(t.message)
                            }
                        }
                    }), this.handleEvent("PLAYER_MODIFIERS_CHANGE", t => {
                        this.selfPlayer && (this.selfPlayer.updatePlayerData({
                            modifiers: t.modifiers
                        }), this.removeNode(this.selfPlayer), this.nodesToAdd.push(this.selfPlayer))
                    }), this.handleEvent("PLAYER_CURRENTAVATAR_CHANGE", t => {
                        if (this.selfPlayer) {
                            let e = getPlayerCharacterData(t);
                            delete e.kind, this.selfPlayer.updatePlayerData(getPlayerCharacterData(t)), this.removeNode(this.selfPlayer), this.nodesToAdd.push(this.selfPlayer)
                        }
                    }), this.handleEvent("PLAYER_MEMBERSHIPS_CHANGE", t => {
                        if (this.selfPlayer && t.memberships) {
                            let e = !1;
                            e = "function" == typeof t.memberships.has ? t.memberships.has("vip") : !!t.memberships.vip, this.selfPlayer.updatePlayerData({
                                kind: e ? "vip" : "normal"
                            }), this.removeNode(this.selfPlayer), this.nodesToAdd.push(this.selfPlayer)
                        }
                    }), this.handleEvent("PLAYER_USERNAME_CHANGE", t => {
                        this.selfPlayer && (this.selfPlayer.updatePlayerData({
                            label: t.username
                        }), this.removeNode(this.selfPlayer), this.nodesToAdd.push(this.selfPlayer))
                    }), this.handleEvent(l.fb.PLAYER_PET_UPDATE, t => {
                        var e;
                        this.selfPlayer && (null == t ? void 0 : null === (e = t.full) || void 0 === e ? void 0 : e.pet) && this.selfPlayer.setPet(t.full.pet)
                    }), this.handleEvent(l.fb.PLAYER_PET_CHANGE, t => {
                        if (this.selfPlayer) {
                            let e = this.selfPlayer.updatePetData(getPlayerPetData(t.core));
                            e && (this.removeNode(e), t.full.pet && (this.nodesToAdd.push(e), this.selfPlayer.setPet(t.full.pet)))
                        }
                    }), this.handleEvent(l.fb.PLAYER_ENERGY_CHANGE, t => {
                        let {
                            energy: e
                        } = t;
                        if (e && this.selfPlayer) {
                            let t = e.level > h.Z6,
                                s = t ? 1 : h.p$;
                            if (s != this.selfPlayer.speed) {
                                var i;
                                this.selfPlayer.speed = s, null === (i = p.default.instance) || void 0 === i || i.detune(t ? 0 : -200)
                            }
                        }
                    })
                }
                removeEntityElement(t, e) {
                    if ("crop" === e) {
                        let e = this.crops.get(t);
                        e && (this.crops.delete(t), this.removeNode(e))
                    } else {
                        var i;
                        let s = this.entities.get(t);
                        s && (this.entities.delete(t), this.removeNode(s));
                        let o = null === (i = this.getPlayerEntityFromMapEntity(t, !0)) || void 0 === i ? void 0 : i.mid;
                        if (o) {
                            let t = this.entities.get(o);
                            t && (this.entities.delete(o), this.removeNode(t))
                        }
                        if ("soil" === e && o) {
                            let t = this.crops.get(o);
                            t && (this.crops.delete(o), this.removeNode(t))
                        }
                    }
                }
                addNPCorSoilElement(t) {
                    let e = g.Z.getGameEntity(t.entity);
                    if (!e) throw Error("Missing Entity from library: ".concat(t.entity));
                    switch (e.type) {
                        case "npc":
                            let i = new NpcNode(this, t, e);
                            return this.entities.set(t.mid, i), this.nodesToAdd.push(i), i;
                        case "soil":
                            let s = this.buildSoilNode(t);
                            return s && (this.entities.set(t.mid, s), this.nodesToAdd.push(s)), s
                    }
                }
                async addEntityElement(t, e) {
                    if (!this.load) return;
                    let i = null != t ? t : e;
                    if (!i) return;
                    let s = i.entity,
                        o = i.mid,
                        r = g.Z.getGameEntity(s);
                    if (!r) throw Error("Missing Entity from library: ".concat(s));
                    if ("npc" === r.type) return this.addNPCorSoilElement(i);
                    let a = await this.nodeFactory.asyncBuilder(r.type, e, r, t);
                    return (a && this.nodesToAdd.push(a), "crop" === r.type) ? (this.crops.set(o, a), this.setCropState(a, i, r)) : this.entities.set(o, a), this.updateEntity(i), a
                }
                getConfigFromPlayerEntity(t) {
                    var e, i;
                    if (t.entity) return {
                        position: {
                            x: (null === (e = t.position) || void 0 === e ? void 0 : e.x) || 2500,
                            y: (null === (i = t.position) || void 0 === i ? void 0 : i.y) || 2500
                        },
                        entity: t.entity,
                        mid: t.mid
                    }
                }
                async addPlayerEntityNodes(t) {
                    var e;
                    if (!this.load) return;
                    let i = t.mapEntity_id ? this.stateManager.getEntityByUniqueId(t.mapEntity_id) : void 0;
                    if (!i || (null === (e = t.position) || void 0 === e ? void 0 : e.x) || (t = { ...t,
                            position: null == i ? void 0 : i.position
                        }), t.mapEntity_id && t.generic) {
                        let e = this.entities.get(t.mapEntity_id);
                        if (e) {
                            let s = g.Z.getGameEntity(t.entity);
                            if (s) {
                                let i = this.nodeFactory.getPropBuilder({
                                    type: s.type,
                                    mapConfig: t,
                                    gameConfig: s
                                });
                                e.convertToPlayerEntity(t.mid, i)
                            }
                            e.setCurrentState({
                                playerInstance: t.generic,
                                mapInstance: null == i ? void 0 : i.generic
                            }), this.entities.delete(t.mapEntity_id), this.entities.set(t.mid, e);
                            let o = this.animationQueue.get(t.mid);
                            return o && (e.play(o.animation), this.animationQueue.delete(t.mid)), e
                        }
                    }
                    let s = await this.addEntityElement(t, i);
                    if (s && t.mapEntity_id && !t.crop) {
                        let e = this.entities.get(t.mapEntity_id);
                        e && (this.removeNode(e), this.entities.delete(t.mapEntity_id))
                    }
                    let o = this.animationQueue.get(t.mid);
                    return o && (null == s || s.play(o.animation), this.animationQueue.delete(t.mid)), s
                }
                removeEntity(t) {
                    if (!this.load) return;
                    let e = g.Z.getGameEntity(t.entity);
                    if ("crop" === e.type && this.crops.has(t.mid)) {
                        let e = this.crops.get(t.mid);
                        this.crops.delete(t.mid), this.removeNode(e);
                        let i = this.entities.get(t.mapEntity_id);
                        i && (i.state = "normal")
                    } else if (this.selfPlayer) {
                        let e = this.entities.get(t.mid);
                        if (e) this.entities.delete(t.mid), this.removeNode(e);
                        else {
                            let i = this.getPlayerEntityFromMapEntity(t.mid, !0);
                            i && (e = this.entities.get(i.mid), this.entities.delete(i.mid), e && this.removeNode(e))
                        }
                        let i = this.stateManager.getMapEntities();
                        if ((null == t ? void 0 : t.mapEntity_id) && i) {
                            let e;
                            let s = null == i ? void 0 : i.get(t.mapEntity_id);
                            if (!s) return;
                            let o = g.Z.getGameEntity(s.entity);
                            if (!o) return;
                            "soil" === o.type ? e = this.buildSoilNode(s) : "crop" === o.type ? console.log("CROP not supported on MAP! Should only be player entity!") : "npc" === o.type ? this.addNPCorSoilElement(s) : e = this.buildMapEntityNode(s), e && e.create()
                        }
                    }
                }
                updateEntity(t) {
                    let e = g.Z.getGameEntity(t.entity);
                    if ((null == e ? void 0 : e.type) === "crop") {
                        let i = this.crops.get(t.mid);
                        if (!i) return;
                        let s = i.state !== t.crop.state;
                        i.state = t.crop.state;
                        let o = this.entities.get(t.mapEntity_id);
                        if (!o || (o.state = t.crop.soilState, this.setCropState(i, t, e), !["healthy1", "healthy2", "ripe"].includes(i.state))) return;
                        let {
                            position: r
                        } = o;
                        if (!r) return;
                        s && this.playOneTimeAnimation({
                            spriteName: "crop-maturing",
                            animationName: "crop-maturing-anims",
                            x: r.x,
                            y: r.y
                        })
                    } else {
                        let o = this.entities.get(t.mid);
                        if (o) {
                            if ((null == e ? void 0 : e.type) === "npc") o.move({
                                x: 0,
                                y: 0
                            }, t.position), o.setFacing(!!t.flip);
                            else {
                                var i, s;
                                if ((null === (i = t[e.type]) || void 0 === i ? void 0 : i.state) && (o.state = t[e.type].state), (null == e ? void 0 : e.type) === "generic" && t.generic) {
                                    let e = t.mapEntity_id,
                                        i = e ? this.stateManager.getEntityByUniqueId(e) : void 0;
                                    o.setCurrentState({
                                        playerInstance: t.generic,
                                        mapInstance: null == i ? void 0 : i.generic
                                    })
                                }
                                if (t.position && (o.setPosition(t.position), this.selfPlayer && (null === (s = p.default.instance) || void 0 === s || s.updatePosition(this.selfPlayer.position)), (null == e ? void 0 : e.type) === "soil")) {
                                    let e = this.getPlayerEntityFromMapEntity(t.mid);
                                    if (e) {
                                        let i = this.crops.get(e.mid);
                                        i && (null == i || i.setPosition(t.position))
                                    }
                                }
                            }
                        } else {
                            let i = this.getPlayerEntityFromMapEntity(t.mid);
                            if (i && (o = this.entities.get(i.mid)), !o) {
                                console.log("sprite not found for ".concat(t.entity));
                                return
                            }
                            t.position && ((null == e ? void 0 : e.type) === "npc" ? o.move({
                                x: 0,
                                y: 0
                            }, t.position) : o.setPosition(t.position)), (null == e ? void 0 : e.type) === "generic" && t.generic && o.setCurrentState({
                                playerInstance: null == i ? void 0 : i.generic,
                                mapInstance: t.generic
                            })
                        }
                    }
                }
                async addGameObjectElement(t) {
                    var e;
                    let i = g.Z.getGameObject(t.object);
                    if (!i) throw Error("Missing object from library ".concat(t.object));
                    let s = await this.nodeFactory.asyncBuilder("object", t, i);
                    return this.gameObjects[t._id] = s, null === (e = this.placeableCursor) || void 0 === e || e.updateNodeRects(), s
                }
                async addTempNodeAtCursor(t, e) {
                    switch (t) {
                        case "tile":
                            let i = e.tile,
                                s = i.tilesetId ? await this.addTileset(i.tilesetId) : void 0;
                            return new TileNode(this, s, i);
                        case "object":
                            return this.nodeFactory.asyncBuilder(t, void 0, e.object);
                        case "entity":
                        case "soil":
                        case "crop":
                            return this.nodeFactory.asyncBuilder(t, void 0, e.entity);
                        case "item":
                            return;
                        default:
                            return e.entity ? this.nodeFactory.asyncBuilder(t, void 0, e.entity) : void 0
                    }
                }
                playOneTimeAnimation(t) {
                    var e;
                    let i = this.add.sprite(t.x, t.y, t.spriteName);
                    i.setOrigin(0, .5), i.setDepth(null !== (e = t.depth) && void 0 !== e ? e : 9999), i.on("animationcomplete", () => {
                        i.destroy()
                    }, i), i.anims.play(t.animationName)
                }
                playPlayerAnimation(t) {
                    if (this.supportedPlayerAnimations.includes(t)) {
                        var e;
                        null === (e = this.selfPlayer) || void 0 === e || e.play(t, 0)
                    }
                }
                playPetAnimation(t, e, i) {
                    let s = this.selfPlayer;
                    t && this.stateManager.getSessionId() !== t && (s = this.otherPlayers.get(t)), null == s || s.petPlay(e, i)
                }
                playNodeAnimation(t) {
                    var e, i;
                    let {
                        mid: s,
                        animation: o,
                        position: r,
                        emoji: a,
                        pet: l,
                        tween: n
                    } = t;
                    if (l) {
                        this.playPetAnimation(s, o, a);
                        return
                    }
                    let h = null !== (e = this.entities.get(s)) && void 0 !== e ? e : this.gameObjects[s];
                    if (!h) {
                        let t = null === (i = this.getPlayerEntityFromMapEntity(s)) || void 0 === i ? void 0 : i.mid;
                        t && (h = this.entities.get(t))
                    }
                    if (h) n ? h.tweenTo({
                        animation: o,
                        duration: n.duration,
                        position: r,
                        easing: n.easing
                    }) : h.play(o);
                    else {
                        let t = this.otherPlayers.get(s);
                        t || this.stateManager.getSessionId() !== s || (t = this.selfPlayer), t ? this.supportedPlayerAnimations.includes(o) ? t.play(o, 0) : r && ("hearts" === o ? ParticleFX.emitHearts({
                            x: r.x,
                            y: r.y - 16
                        }) : this.playOneTimeAnimation({
                            spriteName: o,
                            animationName: "".concat(o, "-anims"),
                            x: r.x,
                            y: r.y
                        })) : this.animationQueue.set(s, {
                            animation: o,
                            at: Date.now()
                        })
                    }
                }
                playerUsedItem(t) {
                    let e = null == t ? void 0 : t.id,
                        i = this.anmationItemTriggers[e];
                    e && i && (null == t ? void 0 : t.type) === "self" && this.playPlayerAnimation(i)
                }
                playerCollides() {
                    var t, e;
                    (null === (t = this.selfPlayer) || void 0 === t ? void 0 : t.isMoving) && (this.selfPlayer.hitwall = !0, null === (e = p.default.loadAudio("snd_ui_collide")) || void 0 === e || e.then(t => {
                        t && !t.isPlaying && t.play()
                    }))
                }
                checkCollision(t) {
                    return !!this.collider && this.collider.world.collide(t, this.collider.object2)
                }
                updateCollisions() {
                    var t;
                    if (super.updateCollisions(), !(null === (t = this.selfPlayer) || void 0 === t ? void 0 : t.body)) return;
                    let e = Array.from(this.collidingObjects).map(t => t.gameObject);
                    for (let t of this.dynamicLayers) e.push(t);
                    this.collider ? (this.collider.object1 = this.selfPlayer.body.gameObject, this.collider.object2 = e) : this.collider = this.physics.add.collider(this.selfPlayer.body.gameObject, e, this.playerCollides, void 0, this)
                }
                destroy() {
                    for (let t of (super.destroy(), this.hoverTimer && clearTimeout(this.hoverTimer), ParticleFX.destroy(), this.nodesToAdd = [], this.crops.values())) t.destroy()
                }
                constructor(t, e, i, s, o) {
                    super(t), this.nodeFactory = new NodeFactory(this), this.characterAnimations = {}, this.crops = new Map, this.otherPlayers = new Map, this.playerMidToSessionId = new Map, this.nodesToAdd = [], this.map = {
                        size: h.WS,
                        bounds: h.BA
                    }, this.camMode = "player", this.triggerSystem = new TriggerSystem, this.supportedPlayerAnimations = ["drink"], this.anmationItemTriggers = {
                        itm_energyDrink: "drink"
                    }, this.repositionJoystick = () => {
                        if (!this.joystick) return;
                        let t = window.innerWidth,
                            e = window.innerHeight;
                        t > e ? (this.joystick.x = 1.5 * this.joystick.radius, this.joystick.y = e - 1.5 * this.joystick.radius) : (this.joystick.x = t / 2, this.joystick.y = e - 2 * this.joystick.radius)
                    }, this._idealSize = Math.sqrt(1079200), this.following = !1, this.mouseDown = !1, this.animationQueue = new Map, this.zoomIn = o;
                    let r = a.h.getState();
                    this.hasMouse = matchMedia("(pointer:fine)").matches, this.isAndroid = -1 != navigator.userAgent.indexOf("Android"), this.stateManager.connect(e, i, s, this, r.auth.sessionToken || void 0, r.auth.playerAvatar, r.auth.username, r.auth.playerId, r.game.room.lastSavedAt).then(t => {
                        null != t && (this.setMapBackground(), l.ZP.sendEvent(l.fb.GAME_CONNECTED))
                    })
                }
            }
        }
    }
]);