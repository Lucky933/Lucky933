"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [967], {
        2967: function(e, n, t) {
            t.d(n, {
                phaserConfig: function() {
                    return d
                }
            });
            var i = t(82260),
                r = t.n(i);
            let o = ["uProjectionMatrix", "uMainSampler", "uTime", "uSpeed", "uBendFactor"];
            let BendPipeline = class BendPipeline extends Phaser.Renderer.WebGL.Pipelines.SinglePipeline {
                onPreRender() {
                    this.set1f("uTime", this.game.loop.time), this.set1f("uSpeed", this._speed), this.set1f("uBendFactor", this._bend)
                }
                get bend() {
                    return this._bend
                }
                set bend(e) {
                    this._bend = e
                }
                get speed() {
                    return this._speed
                }
                set speed(e) {
                    this._speed = e
                }
                constructor(e) {
                    super({
                        game: e,
                        shaders: [{
                            name: "Bend",
                            fragShader: "\n#define SHADER_NAME BEND_FS\nprecision mediump float;\nuniform sampler2D uMainSampler;\nuniform float uTime;\nuniform float uSpeed;\nuniform float uBendFactor;\nvarying vec2 outTexCoord;\nvarying float outTexId;\nvarying vec4 outTint;\nvarying vec2 fragCoord;\nvoid main()\n{\n    float height = 1.0 - outTexCoord.y;\n    float offset = pow(height, 2.5);\n    offset *= (sin(uTime * uSpeed) * sin(uTime * uSpeed / 10.0) * uBendFactor);\n    vec4 texture = texture2D(uMainSampler, fract(vec2(outTexCoord.x + offset, outTexCoord.y)));\n    gl_FragColor = texture;\n}\n",
                            uniforms: o
                        }]
                    }), this._bend = .1, this._speed = .001
                }
            };
            var s = t(60604);
            let d = {
                type: r().AUTO,
                parent: s.qO,
                pixelArt: !0,
                width: window.innerWidth,
                height: window.innerHeight,
                backgroundColor: "#101010",
                physics: {
                    default: "arcade",
                    arcade: {
                        debug: !1
                    }
                },
                loader: {
                    crossOrigin: "anonymous"
                },
                pipeline: {
                    Bend: BendPipeline
                },
                plugins: {
                    global: []
                }
            }
        }
    }
]);