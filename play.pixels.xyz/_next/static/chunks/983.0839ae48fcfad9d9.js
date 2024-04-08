"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [983], {
        39983: function(t, i, s) {
            s.r(i), s.d(i, {
                PixelsSound: function() {
                    return PixelsSound
                },
                phaserAudio: function() {
                    return phaserAudio
                }
            });
            var e = s(82260),
                o = s.n(e),
                n = s(34377),
                a = s(70247),
                d = s(80535),
                l = s(83928),
                u = s(82485);
            let phaserAudio = class phaserAudio extends o().Scene {
                preload() {}
                onBlur() {
                    this.allPaused = !0
                }
                onFocus() {
                    this.allPaused = !1
                }
                create() {
                    let t = d.h.getState().game.soundState;
                    this.sound.volume = t.global.volume, this.musicEnabled = !0 !== t.music.mute, t.global.mute ? this.sound.mute = !0 : (this.sound.mute = !1, this.mapReady && this.setupMap(!1)), n.rV.soundControl.subscribeScene(this, t => {
                        let {
                            soundControlKey: i,
                            mute: s,
                            volume: e
                        } = t;
                        "music" === i && void 0 !== s && !s !== this.musicEnabled && (this.musicEnabled = !s, s ? this.stopMusic() : this.startBackground()), "global" === i && (!0 === s ? this.sound.mute = !0 : !1 === s && this.sound.mute && (this.sound.mute = !1, this.setupMap(!1)), void 0 !== e && (this.sound.volume = null != e ? e : 1))
                    }), this.game.events.on(o().Core.Events.BLUR, this.onBlur, this), this.game.events.on(o().Core.Events.FOCUS, this.onFocus, this), this.handleEvent(n.fb.CHAT_MESSAGE_RCV, () => {
                        this.playAudio("snd_ui_chatmsg")
                    }), this.handleEvent(n.fb.PLAYER_COIN_INVENTORY_CHANGE, t => {
                        t.added > 0 && this.playAudio("snd_ui_coins")
                    }), this.handleEvent(n.qM.PLAYER_USED_ITEM, t => {
                        this.itemUsed(t)
                    }), this.handleEvent("CONFIRM_USEITEM", t => {
                        this.itemUseConfirmed(t)
                    }), n.rV.playSound.subscribeScene(this, t => {
                        this.playAudio(t)
                    }), this.handleEvent("STOP_SOUND", t => {
                        this.stopAudio(t)
                    }), this.loadAudio("snd_ui_click1"), this.loadAudio("snd_ui_coins"), this.loadAudio("snd_ui_inventoryopen"), this.loadAudio("snd_ui_misclick"), this.loadAudio("snd_env_intro"), this.loadAudio("snd_ui_chatmsg")
                }
                static async loadAudio(t) {
                    var i;
                    let s = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    return null === (i = phaserAudio.instance) || void 0 === i ? void 0 : i.loadAudio(t, s)
                }
                static playAudio(t) {
                    var i;
                    return null === (i = phaserAudio.instance) || void 0 === i ? void 0 : i.playAudio(t)
                }
                static fadeInAudio(t) {
                    var i;
                    return null === (i = phaserAudio.instance) || void 0 === i ? void 0 : i.fadeInAudio(t)
                }
                static stopAudio(t) {
                    var i;
                    return null === (i = phaserAudio.instance) || void 0 === i ? void 0 : i.stopAudio(t)
                }
                handleEvent(t, i) {
                    n.ZP.registerEventListener(t, i), this.handlers.push({
                        event: t,
                        callback: i
                    })
                }
                init(t) {
                    console.log("init audio"), this.data = t, this.events.once("destroy", this.destroy, this)
                }
                destroy() {
                    this.handlers.forEach(t => {
                        n.ZP.removeEventListerner(t.event, t.callback)
                    }), this.handlers = [], this.game.events.off(o().Core.Events.BLUR, this.onBlur, this), this.game.events.off(o().Core.Events.FOCUS, this.onFocus, this), phaserAudio.instance = void 0
                }
                detune(t) {
                    this.sound && this.tweens.add({
                        detune: t,
                        targets: this.sound,
                        duration: 1e3
                    })
                }
                async itemUseConfirmed(t) {
                    let i = null == t ? void 0 : t.id;
                    if (!i) return;
                    let s = a.Z.getGameItem(i);
                    s && this.playAudio("".concat(s.soundId, ".use"))
                }
                async itemUsed(t) {
                    var i, s, e, o;
                    let n = null == t ? void 0 : null === (i = t.item) || void 0 === i ? void 0 : i.id;
                    if (!n || !t.client) return;
                    let l = a.Z.getGameItem(n);
                    if (!l) return;
                    let r = ["self", "pet"].includes(null === (s = t.target) || void 0 === s ? void 0 : s.type) ? null === (e = t.target) || void 0 === e ? void 0 : e.type : null === (o = t.client) || void 0 === o ? void 0 : o.key;
                    if ((0, u.ZP)(l, r, t.client.entityType, t.client.cropState)) {
                        if (!(0, u.yC)(l, d.h.getState().game.player)) {
                            this.playAudio("snd_ui_lowenergy");
                            return
                        }
                        if (!l.soundId) return;
                        this.playAudio(l.soundId), this.playAudio("".concat(l.soundId, ".click"))
                    }
                }
                expandAudio(t) {
                    let i = t.match(/^(.*)\.([a-zA-Z0-9]{2,4})(\?.*)$/);
                    return (null == i ? void 0 : i[2]) === "ogg" ? ["ogg", "m4a", "ac3", "mp3"].map(t => "".concat(i[1], ".").concat(t).concat(i[3])) : [t]
                }
                async loadSheet(t) {
                    let i = (0, l.b7)(t),
                        s = i.lastIndexOf("/"),
                        e = i.substring(s + 1),
                        n = this.loadedAudio.get(e);
                    n || (n = new Promise(t => {
                        let s = this.expandAudio(i);
                        this.load.audio(e, s), this.load.once(o().Loader.Events.COMPLETE, () => {
                            t()
                        }), this.load.start()
                    }), this.loadedAudio.set(e, n));
                    try {
                        return await n, e
                    } catch (t) {
                        console.log("error loading audio", t)
                    }
                }
                loadFromSheet(t, i, s) {
                    let e = {
                        loop: null == i ? void 0 : i.loop
                    };
                    try {
                        let o = this.sound.add(t);
                        return s && o.addMarker({
                            name: i.id,
                            start: s.start,
                            duration: s.end - s.start,
                            config: e
                        }), o
                    } catch (t) {
                        console.log("audio not loaded", t)
                    }
                }
                wipeSound(t) {
                    let i = this.loadedSounds.get(t);
                    null == i || i.then(t => {
                        null == t || t.free()
                    }), this.backgroundLoops.delete(t), this.loadedSounds.delete(t), this.backgroundEffects.delete(t)
                }
                async setupMap(t) {
                    if (this.mapReady = !0, !this.sound) return;
                    let i = a.Z.getMapSounds();
                    if (!i || 0 === i.length) {
                        let t = a.Z.getMapLabels();
                        i = (null == t ? void 0 : t.includes("water")) ? ["snd_music_baseline", "snd_env_water", "snd_music_water_mild", "snd_music_water_wild"] : (null == t ? void 0 : t.includes("space")) ? ["snd_music_baseline", "snd_env_space", "snd_music_space_wild", "snd_music_space_mild"] : (null == t ? void 0 : t.includes("land")) ? ["snd_music_baseline", "snd_env_mountain", "snd_music_mild"] : ["snd_music_baseline"]
                    }
                    if (i) {
                        let s = Array.from(this.backgroundLoops.keys()).filter(t => !i.includes(t));
                        if (s.forEach(t => {
                                this.wipeSound(t)
                            }), (s = Array.from(this.backgroundEffects.keys()).filter(t => !i.includes(t))).forEach(t => {
                                this.wipeSound(t)
                            }), this.sound.mute && !1 !== t) {
                            console.log("sound is muted, no music starting");
                            return
                        }
                        let e = i.map(t => this.loadAudio(t)),
                            o = !1,
                            n = !1;
                        Promise.all(e).then(t => {
                            t.forEach(t => {
                                if (t && t.bits) {
                                    if ("music" === t.sounddata.kind) {
                                        var i;
                                        this.backgroundLoops.set(t.sounddata.id, t), (null === (i = t.bits) || void 0 === i ? void 0 : i.isPlaying) ? o = !0 : n = !0
                                    } else "background" === t.sounddata.kind && (t.sounddata.loop ? this.backgroundLoops.set(t.sounddata.id, t) : this.backgroundEffects.set(t.sounddata.id, t))
                                }
                            }), this.musicEnabled && o && n ? (console.log("resyncing audio"), this.backgroundLoops.forEach(t => {
                                "music" === t.sounddata.kind && t.bits.isPlaying ? t.fade(1e3, 0) : "background" === t.sounddata.kind && (t.bits.isPlaying ? t.fade(5e3) : (t.playSilent(), t.fade(5e3, void 0, 0)))
                            }), setTimeout(() => {
                                this.backgroundLoops.forEach(t => {
                                    "music" === t.sounddata.kind && t.stop(0)
                                }), this.startBackground()
                            }, 1e3)) : this.startBackground(), this.processBackground()
                        })
                    }
                    this.loadAudio("snd_ui_npctalk")
                }
                startBackground() {
                    this.backgroundLoops.forEach(t => {
                        var i, s;
                        if (!1 === t.bits.isPlaying) {
                            if (!this.musicEnabled && "music" === t.sounddata.kind) return;
                            t.playSilent(), (null === (i = t.sounddata) || void 0 === i ? void 0 : i.musictype) === "baseline" && t.fade(5e3, void 0, 0)
                        } else console.log("".concat(null === (s = t.sounddata) || void 0 === s ? void 0 : s.id, " already playing"))
                    })
                }
                stopMusic() {
                    this.backgroundLoops.forEach(t => {
                        t.bits.isPlaying && "music" === t.sounddata.kind && t.stop()
                    })
                }
                processBackground() {
                    this.timer && (clearInterval(this.timer), this.timer = void 0), this.timer = setInterval(() => {
                        let t = 0;
                        this.backgroundEffects.forEach(i => {
                            if (i.sounddata && i.bits && Math.random() * (i.sounddata.interval || 60) < 15) {
                                let s, e = i.sounddata.volume || 1;
                                i.position ? (e = this.calcVolume(i), (s = [this.calcPan(i)])[1] = s[0]) : (e *= .05 + .95 * Math.random(), (s = [Math.random() - .5])[1] = s[0] + Math.random() - .5), !i.bits.isPlaying && e > .1 && (setTimeout((t, i, s) => {
                                    t.playSilent(), t.fade(0, i), s && t.bits && t.pan(s[0], s[1], 1e3 * t.bits.totalDuration)
                                }, t, i, e, s), t += 5e3)
                            }
                        }), this.musicEnabled && this.backgroundLoops.forEach(t => {
                            var i;
                            if (t.bits && (null === (i = t.sounddata) || void 0 === i ? void 0 : i.musictype) !== "baseline") {
                                let i = t.elapsed;
                                i > 60 && .2 > Math.random() && (t.volume < .1 && !this.positionalPlaying ? t.fade(12e3) : t.fade(12e3, 0))
                            }
                        })
                    }, 15e3)
                }
                async clearPositional() {
                    let t = Array.from(this.positionalSounds.values());
                    this.positionalSounds.clear(), t.forEach(t => {
                        null == t || t.free()
                    }), this.lastPosition = void 0, this.timer && (clearInterval(this.timer), this.timer = void 0)
                }
                addPositional(t, i, s) {
                    this.loadAudio(i, !1).then(i => {
                        if (!i || !i.bits) return;
                        i.position = s, i.id = t;
                        let e = this.positionalSounds.get(t);
                        null == e || e.free(), this.positionalSounds.set(t, i), this.lastPosition && this.updatePosition(this.lastPosition)
                    })
                }
                removePositional(t) {
                    let i = this.positionalSounds.get(t);
                    i && (i.free(), this.positionalSounds.delete(t))
                }
                calcPan(t) {
                    if (!this.lastPosition || !t.position) return 0;
                    let i = (0, l._O)(this.lastPosition, t.position);
                    return i > Math.PI ? i = 2 * Math.PI - i : i < 0 && (i = -i), .5 - i / Math.PI
                }
                calcVolume(t) {
                    var i;
                    if (!this.lastPosition || !t.position) return 0;
                    let s = (0, l.DJ)(this.lastPosition, t.position),
                        e = Math.min(1, 1e4 / (1 + s)) * ((null === (i = t.sounddata) || void 0 === i ? void 0 : i.volume) || 1);
                    return e < .002 && (e = 0), e
                }
                updatePosition(t) {
                    this.lastPosition = t, this.positionalPlaying = !1, this.positionalSounds.forEach(t => {
                        if (!t.position) return;
                        let i = this.calcVolume(t);
                        if (i > 0) {
                            let e = this.calcPan(t);
                            if (!t.isPlaying) {
                                var s;
                                ((null === (s = t.sounddata) || void 0 === s ? void 0 : s.loop) || .02 >= Math.random()) && (t.playSilent(), t.volume = i)
                            }
                            t.fade(0, i), t.setPan(e), this.positionalPlaying = !0
                        } else t.stop()
                    }), this.positionalPlaying && this.fadeWildTrack()
                }
                fadeWildTrack() {
                    this.backgroundLoops.forEach(t => {
                        var i;
                        t.bits && (null === (i = t.sounddata) || void 0 === i ? void 0 : i.musictype) === "wild" && t.fade(2e3, 0)
                    })
                }
                stopAudio(t) {
                    let i = this.loadedSounds.get(t);
                    i || console.log("sound ".concat(t, " not found")), null == i || i.then(t => {
                        null == t || t.stop()
                    })
                }
                async fadeInAudio(t) {
                    let i;
                    let s = this.loadedSounds.get(t);
                    if (s) i = await s;
                    else {
                        var e, n;
                        let s = a.Z.getGameSound(t);
                        if (!s) {
                            console.log("sound ".concat(t, " not found"));
                            return
                        }
                        if ((i = new PixelsSound).sounddata = s, null === (e = s.sheet) || void 0 === e ? void 0 : e.url) {
                            let e = await this.loadSheet(null === (n = s.sheet) || void 0 === n ? void 0 : n.url);
                            e && (i.bits = this.loadFromSheet(e, s, s.sheet), i.marker = t)
                        } else if (s.url) {
                            let t = await this.loadSheet(s.url);
                            t && (i.bits = this.loadFromSheet(t, s))
                        }
                        i.bits && i.bits.once(o().Sound.Events.COMPLETE, i.bits.destroy, i.bits)
                    }
                    return (null == i ? void 0 : i.bits) && (i.playSilent(), i.fade(2e3, void 0, 0)), i
                }
                async playAudio(t) {
                    var i, s, e;
                    let n = this.loadedSounds.get(t);
                    if (n) {
                        let t = await n;
                        if (!(null == t ? void 0 : null === (s = t.sounddata) || void 0 === s ? void 0 : s.loop) && this.allPaused) return;
                        return null == t || t.play(), t
                    }
                    let d = a.Z.getGameSound(t);
                    if (!d || !d.loop && this.allPaused) return;
                    if (d.loop) {
                        let i = await this.loadAudio(t, !0);
                        null == i || i.play();
                        return
                    }
                    let l = new PixelsSound;
                    if (l.sounddata = d, null === (i = d.sheet) || void 0 === i ? void 0 : i.url) {
                        let i = await this.loadSheet(null === (e = d.sheet) || void 0 === e ? void 0 : e.url);
                        i && (l.bits = this.loadFromSheet(i, d, d.sheet), l.marker = t)
                    } else if (d.url) {
                        let t = await this.loadSheet(d.url);
                        t && (l.bits = this.loadFromSheet(t, d))
                    }
                    return l.bits && (l.bits.once(o().Sound.Events.COMPLETE, l.bits.destroy, l.bits), l.play()), l
                }
                async loadNewSound(t) {
                    var i;
                    let s = a.Z.getGameSound(t);
                    if (!s) {
                        console.log("".concat(t, " not found in sound library"));
                        return
                    }
                    let e = new PixelsSound;
                    if (e.sounddata = { ...s
                        }, null === (i = s.sheet) || void 0 === i ? void 0 : i.url) {
                        let t = await this.loadSheet(s.sheet.url);
                        t && (e.bits = this.loadFromSheet(t, s, s.sheet)), e.marker = s.id
                    } else if (s.url) {
                        console.log("".concat(t, " needs encoding"));
                        return
                    } else {
                        console.log("sound url not set for ".concat(t));
                        return
                    }
                    return e
                }
                async loadAudio(t) {
                    let i = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                    if (this.loadedSounds.has(t)) return i ? this.loadedSounds.get(t) : (console.log("WARNING. ".concat(t, " loaded more than once. Be sure second copy is disposed")), this.loadNewSound(t));
                    let s = this.loadNewSound(t);
                    return i && this.loadedSounds.set(t, s), s
                }
                constructor() {
                    super({
                        key: "audio",
                        active: !0,
                        visible: !1
                    }), this.mapReady = !1, this.positionalPlaying = !1, this.musicEnabled = !0, this.allPaused = !1, this.backgroundLoops = new Map, this.backgroundEffects = new Map, this.loadedAudio = new Map, this.positionalSounds = new Map, this.loadedSounds = new Map, this.handlers = [], phaserAudio.instance = this
                }
            };
            let PixelsSound = class PixelsSound {
                get elapsed() {
                    return (new Date().getTime() - this.lastFade) / 1e3
                }
                play() {
                    var t, i;
                    if (!this.bits) return;
                    let s = {
                        loop: null === (t = this.sounddata) || void 0 === t ? void 0 : t.loop,
                        volume: null === (i = this.sounddata) || void 0 === i ? void 0 : i.volume
                    };
                    return this.marker ? this.bits.play(this.marker, s) : this.bits.play(s), this.bits
                }
                playSilent() {
                    var t;
                    if (!this.bits) return;
                    let i = {
                        loop: null === (t = this.sounddata) || void 0 === t ? void 0 : t.loop,
                        volume: 0
                    };
                    return this.marker ? this.bits.play(this.marker, i) : this.bits.play(i), this.bits
                }
                stop() {
                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 100;
                    if (this.bits) {
                        if (0 === t) this.bits.stop();
                        else {
                            var i;
                            null === (i = phaserAudio.instance) || void 0 === i || i.tweens.add({
                                volume: 0,
                                targets: this.bits,
                                duration: t,
                                onComplete: () => {
                                    var t;
                                    null === (t = this.bits) || void 0 === t || t.stop()
                                }
                            })
                        }
                    }
                }
                fade() {
                    var t, i, s, e;
                    let o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1e3,
                        n = arguments.length > 1 ? arguments[1] : void 0,
                        a = arguments.length > 2 ? arguments[2] : void 0;
                    this.bits && (void 0 === n && (n = null !== (i = null === (t = this.sounddata) || void 0 === t ? void 0 : t.volume) && void 0 !== i ? i : 1), this.lastFade = new Date().getTime(), o ? void 0 === a ? null === (s = phaserAudio.instance) || void 0 === s || s.tweens.add({
                        volume: n,
                        targets: this.bits,
                        duration: o
                    }) : null === (e = phaserAudio.instance) || void 0 === e || e.tweens.add({
                        volume: {
                            from: a,
                            to: n
                        },
                        targets: this.bits,
                        duration: o
                    }) : this.bits.setVolume(n))
                }
                detune(t) {
                    var i;
                    let s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3;
                    this.bits && (null === (i = phaserAudio.instance) || void 0 === i || i.tweens.add({
                        detune: t,
                        targets: this.bits,
                        duration: s
                    }))
                }
                setPan(t) {
                    var i;
                    null === (i = this.bits) || void 0 === i || i.setPan(t)
                }
                pan(t, i) {
                    var s;
                    let e = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1e3;
                    this.bits && (null === (s = phaserAudio.instance) || void 0 === s || s.tweens.add({
                        pan: {
                            from: t,
                            to: i
                        },
                        targets: this.bits,
                        duration: e
                    }))
                }
                get isPlaying() {
                    return this.bits && this.bits.isPlaying
                }
                get volume() {
                    var t;
                    return (null === (t = this.bits) || void 0 === t ? void 0 : t.volume) || 0
                }
                set volume(t) {
                    this.bits && this.bits.setVolume(t)
                }
                free() {
                    var t, i;
                    let s = this.bits;
                    this.bits = void 0, s && (null === (t = phaserAudio.instance) || void 0 === t || t.tweens.killTweensOf(s)), (null == s ? void 0 : s.isPlaying) ? null === (i = phaserAudio.instance) || void 0 === i || i.tweens.add({
                        volume: 0,
                        targets: s,
                        duration: 500,
                        onComplete: () => {
                            null == s || s.stop(), null == s || s.destroy()
                        }
                    }) : null == s || s.destroy()
                }
                constructor() {
                    this.lastFade = 0
                }
            };
            i.default = phaserAudio
        }
    }
]);