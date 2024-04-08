"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [676], {
        79676: function(t, e, s) {
            s.d(e, {
                f0: function() {
                    return f
                }
            });
            let i = Phaser.GameObjects.Mesh;
            var r = class extends i {
                get tint() {
                    return 0 === this.vertices.length ? 16777215 : this.vertices[0].color
                }
                setInteractive() {
                    var t = (function(t, e, s) {
                        for (var i = this.faces, r = 0; r < i.length; r++)
                            if (i[r].contains(e, s)) return !0;
                        return !1
                    }).bind(this);
                    return this.scene.sys.input.enable(this, t), this
                }
                forceUpdate() {
                    return this.dirtyCache[10] = 1, this
                }
            };
            let h = Phaser.Math.RotateAround;
            var LocalXYToWorldXY = function(t, e, s) {
                    var i = t.width / 2,
                        r = t.height / 2;
                    return o.x = e - i, o.y = s - r, h(o, 0, 0, t.rotation), o.x *= t.scaleX, o.y *= t.scaleY, o.x += t.x, o.y += t.y, o
                },
                WorldXYToLocalXY = function(t, e, s) {
                    var i = t.width / 2,
                        r = t.height / 2;
                    return o.x = e - t.x, o.y = s - t.y, o.x /= t.scaleX, o.y /= t.scaleY, h(o, 0, 0, -t.rotation), o.x += i, o.y += r, o
                },
                o = {
                    x: 0,
                    y: 0
                },
                a = class {
                    constructor(t, e) {
                        this.parent = t, this.vertex = e, this._localX = void 0, this._localY = void 0
                    }
                    destroy() {
                        this.parent = void 0, this.vertex = void 0
                    }
                    updateVertexPosition(t, e) {
                        var s = this.parent,
                            i = s.height,
                            r = s.frame.cutWidth / i / 2,
                            h = s.frame.cutHeight / i / 2,
                            o = this.vertex;
                        return o.x = t / i - r, o.y = -(e / i - h), s.forceUpdate(), this
                    }
                    get localX() {
                        return this._localX
                    }
                    set localX(t) {
                        this.setLocalXY(t, this._localY)
                    }
                    get localY() {
                        return this._localY
                    }
                    set localY(t) {
                        this.setLocalXY(this._localX, t)
                    }
                    get localXOrigin() {
                        return this._localXOrigin
                    }
                    get localYOrigin() {
                        return this._localYOrigin
                    }
                    resetLocalXY(t, e) {
                        return this._localXOrigin = t, this._localYOrigin = e, this._localX = t, this._localY = e, this
                    }
                    setLocalXY(t, e, s) {
                        return this._localX === t && this._localY === e || (this._localX = t, this._localY = e, s || this.updateVertexPosition(t, e)), this
                    }
                    setWorldXY(t, e) {
                        if (this._worldX === t && this._worldY === e) return this;
                        var s = WorldXYToLocalXY(this.parent, t, e);
                        return this.setLocalXY(s.x, s.y), this
                    }
                    setPosition(t, e) {
                        return this.setWorldXY(t, e), this
                    }
                    getWorldXY() {
                        return LocalXYToWorldXY(this.parent, this._localX, this._localY)
                    }
                    get x() {
                        return LocalXYToWorldXY(this.parent, this._localX, this._localY).x
                    }
                    set x(t) {
                        this.setWorldXY(t, this.y)
                    }
                    get y() {
                        return LocalXYToWorldXY(this.parent, this._localX, this._localY).y
                    }
                    set y(t) {
                        this.setWorldXY(this.x, t)
                    }
                };
            let n = Phaser.Geom.Mesh.Vertex,
                l = Phaser.Geom.Mesh.Face,
                c = [0, 2, 3, 0, 3, 1],
                u = [1, 3, 2, 1, 2, 0],
                g = [0, 3, 4, 0, 4, 1, 1, 4, 2, 4, 5, 2, 3, 6, 4, 6, 7, 4, 4, 7, 8, 4, 8, 5];
            var methods_InitFaces = function(t) {
                    for (var e, s = t.isNinePointMode, i = s ? 9 : 4, r = t.vertices, h = t.faces, o = t.controlPoints, d = 0; d < i; d++) {
                        var X = new n;
                        r.push(X), o.push(new a(t, X))
                    }
                    e = s ? g : t.fourPointsModeRTL ? u : c;
                    for (var d = 0, Y = e.length; d < Y; d += 3) {
                        var w = r[e[d + 0]],
                            k = r[e[d + 1]],
                            P = r[e[d + 2]];
                        h.push(new l(w, k, P))
                    }
                    s ? (t.topLeft = o[0], t.topCenter = o[1], t.topRight = o[2], t.centerLeft = o[3], t.center = o[4], t.centerRight = o[5], t.bottomLeft = o[6], t.bottomCenter = o[7], t.bottomRight = o[8]) : (t.topLeft = o[0], t.topRight = o[1], t.bottomLeft = o[2], t.bottomRight = o[3])
                },
                methods_GetPointPosition = function(t) {
                    var e, s = t.height,
                        i = t.width;
                    if (t.isNinePointMode) {
                        var r = (0 + i) / 2,
                            h = (0 + s) / 2;
                        e = [0, 0, r, 0, i, 0, 0, h, r, h, i, h, 0, s, r, s, i, s]
                    } else e = [0, 0, i, 0, 0, s, i, s];
                    return e
                };
            let d = Phaser.Utils.Objects.IsPlainObject,
                X = Phaser.Utils.Objects.GetValue;
            var Y = class extends r {
                constructor(t, e, s, i, r, h) {
                    d(e) && (e = X(h = e, "x", 0), s = X(h, "y", 0), i = X(h, "key", null), r = X(h, "frame", null)), super(t, e, s, i, r), this.type = "rexQuadImage", this.isNinePointMode = X(h, "ninePointMode", !1), this.fourPointsModeRTL = X(h, "rtl", !1), this.controlPoints = [], methods_InitFaces(this), this.hideCCW = !1, this.syncSize()
                }
                destroy(t) {
                    if (this.scene && !this.ignoreDestroy) {
                        super.destroy(t);
                        for (var e = 0, s = this.controlPoints.length; e < s; e++) this.controlPoints[e].destroy();
                        this.controlPoints = void 0
                    }
                }
                resetVerts() {
                    this.dirtyCache[9] = -1;
                    for (var t = methods_GetPointPosition(this), e = this.width, s = this.height, i = this.frame.cutWidth / s / 2, r = this.frame.cutHeight / s / 2, h = this.frame.u0, o = this.frame.u1, a = this.frame.v0, n = this.frame.v1, l = o - h, c = n - a, u = this.controlPoints, g = 0, d = t.length; g < d; g += 2) {
                        var X = t[g + 0],
                            Y = t[g + 1],
                            w = g / 2,
                            k = X / s - i,
                            P = Y / s - r,
                            _ = h + l * (X / e),
                            f = a + c * (Y / s);
                        this.vertices[w].set(k, -P, 0).setUVs(_, f), u[w].resetLocalXY(X, Y)
                    }
                    return this
                }
                syncSize() {
                    return this.setSizeToFrame(), this.setOrtho(this.width / this.height, 1), this.resetVerts(), this
                }
            };
            Phaser.Textures.DynamicTexture, Phaser.Geom.Rectangle, Phaser.Math.Vector2, Phaser.Math.RotateAround, Phaser.Geom.Rectangle, Phaser.Geom.Rectangle.Union, Phaser.GameObjects.GameObject, Phaser.Utils.Objects.GetValue, Phaser.Textures.DynamicTexture, Phaser.Utils.String.UUID, Phaser.Utils.Objects.IsPlainObject, Phaser.Utils.Objects.GetValue;
            var skewimage_Skew = function(t, e, s) {
                void 0 === e && (e = 0), void 0 === s && (s = 0);
                for (var i = t.width, r = t.height, h = .5 * i, o = .5 * r, a = Math.tan(e) * o, n = Math.tan(s) * h, l = t.controlPoints, c = 0, u = l.length; c < u; c++) {
                    var g = l[c],
                        d = g.localXOrigin,
                        X = g.localYOrigin;
                    g.localX = d + (X > o ? a : -a), g.localY = X + (d > h ? n : -n)
                }
            };
            let w = Phaser.Utils.Objects.IsPlainObject,
                k = Phaser.Utils.Objects.GetValue,
                P = Phaser.Math.DegToRad,
                _ = Phaser.Math.RadToDeg;
            var f = class extends Y {
                constructor(t, e, s, i, r) {
                    if (w(e)) {
                        var h = e;
                        e = k(h, "x", 0), s = k(h, "y", 0), i = k(h, "key", null), r = k(h, "frame", null)
                    }
                    super(t, e, s, i, r), this.type = "rexSkewmage", this._skewX = 0, this._skewY = 0
                }
                get skewX() {
                    return this._skewX
                }
                set skewX(t) {
                    this._skewX = t, skewimage_Skew(this, this._skewX, this._skewY)
                }
                get skewXDeg() {
                    return _(this._skewX)
                }
                set skewXDeg(t) {
                    this.skewX = P(t)
                }
                get skewY() {
                    return this._skewY
                }
                set skewY(t) {
                    this._skewY = t, skewimage_Skew(this, this._skewX, this._skewY)
                }
                get skewYDeg() {
                    return _(this._skewY)
                }
                set skewYDeg(t) {
                    this.skewY = P(t)
                }
                setSkewX(t) {
                    return this.skewX = t, this
                }
                setSkewY(t) {
                    return this.skewY = t, this
                }
                setSkew(t, e) {
                    return void 0 === e && (e = t), this.skewX = t, this.skewY = e, this
                }
                setSkewXDeg(t) {
                    return this.skewXDeg = t, this
                }
                setSkewYDeg(t) {
                    return this.skewYDeg = t, this
                }
                setSkewDeg(t, e) {
                    return void 0 === e && (e = t), this.skewXDeg = t, this.skewYDeg = e, this
                }
            };
            Phaser.Utils.Objects.IsPlainObject, Phaser.Utils.Objects.GetValue, Phaser.Utils.Objects.GetValue
        }
    }
]);