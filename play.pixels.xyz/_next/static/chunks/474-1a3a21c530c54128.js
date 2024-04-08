"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [474], {
        95883: function(t, e, a) {
            a.d(e, {
                N: function() {
                    return formatTrackers
                },
                p: function() {
                    return getPetBackground
                }
            });
            var n = a(60604);
            let formatTrackers = t => {
                    var e;
                    return null !== (e = null == t ? void 0 : t.map(t => "".concat(t.name, ": ").concat(t.value)).join(", ")) && void 0 !== e ? e : ""
                },
                r = ["nft_terrain_land.png", "nft_terrain_space.png", "nft_terrain_water.png"],
                getPetBackground = t => {
                    var e;
                    let a = Number(t.tokenId) % 3;
                    if (null === (e = t.traits) || void 0 === e ? void 0 : e.Terrain) switch (t.traits.Terrain) {
                        case "Water":
                            a = 2;
                            break;
                        case "Space":
                            a = 1;
                            break;
                        default:
                            a = 0
                    }
                    let c = r[a];
                    return "url(".concat(n.pZ, "/nft/pets/").concat(t.avatar.id, "/backgrounds/").concat(c, ")")
                }
        },
        69956: function(t, e, a) {
            a.d(e, {
                U: function() {
                    return useNFTCollectionStats
                },
                n: function() {
                    return useSupportedNFTS
                }
            });
            var n = a(67294),
                r = a(11163),
                c = a(43851),
                o = a(70247),
                l = a(74674),
                s = a(49232),
                i = a(34377),
                d = a(35804),
                u = a(83171),
                f = a(60604);

            function useSupportedNFTS(t, e) {
                let {
                    rawData: a,
                    error: l,
                    reload: v,
                    canReload: h,
                    canReloadAt: g,
                    loading: p
                } = function(t, e) {
                    let a = (0, r.useRouter)(),
                        [c, o] = (0, n.useState)({
                            loading: !0
                        }),
                        [l, f] = (0, n.useState)(!1),
                        [v, h] = (0, n.useState)(0),
                        g = (0, d.C)(u.iF),
                        {
                            mockEthAddress: p
                        } = a.query,
                        m = (0, n.useMemo)(() => {
                            var e, a;
                            return !(null == t ? void 0 : t.core.mid) || (null == t ? void 0 : t.core.isGuest) ? [] : ! function(t) {
                                var e, a;
                                if (!t) return !1;
                                let n = null === (a = window) || void 0 === a ? void 0 : null === (e = a.location) || void 0 === e ? void 0 : e.hostname;
                                return n.includes("dev.") || n.includes("local") || n.includes("preview.") || n.includes("staging.") || n.includes("demo.")
                            }(p) ? null !== (a = null == t ? void 0 : null === (e = t.full.cryptoWallets) || void 0 === e ? void 0 : e.filter(t => {
                                let {
                                    type: e
                                } = t;
                                return "eth" === e
                            }).map(t => {
                                let {
                                    address: e
                                } = t;
                                return e
                            })) && void 0 !== a ? a : [] : [p]
                        }, [p, null == t ? void 0 : t.core.isGuest, null == t ? void 0 : t.core.mid, null == t ? void 0 : t.full.cryptoWallets]),
                        y = m.join(",");

                    function fetchAndSetTokens() {
                        i.ZP.sendEvent(i.Yi.FIND_NFT, {
                            mockEthAddress: p
                        })
                    }
                    return (0, n.useEffect)(() => {
                        var t;
                        if (0 === m.length) {
                            o({
                                loading: !1,
                                rawData: [],
                                addresses: []
                            });
                            return
                        }
                        let a = null !== (t = c.rawData) && void 0 !== t ? t : [],
                            {
                                allNfts: n,
                                canReloadTime: r,
                                loadInitialy: l
                            } = s.Z.fetchPlayerNfts(y, 108e5);

                        function foundNFTs(t) {
                            let e = t.nfts,
                                n = null != a ? a : [];
                            if (t.initial ? n = null != e ? e : [] : e && (n = n.concat(e)), a = n, o({
                                    loading: !t.final,
                                    rawData: n,
                                    addresses: m
                                }), t.final) try {
                                s.Z.savePlayerNfts(n, y)
                            } catch (t) {
                                console.error(t)
                            }
                        }
                        return l ? (console.log("doing initial load", e), g && e && (o({
                            loading: !0,
                            rawData: c.rawData,
                            addresses: m
                        }), h(Date.now() + 108e5), fetchAndSetTokens())) : (h(r), o({
                            loading: !1,
                            rawData: a = n || [],
                            addresses: m
                        })), i.ZP.registerEventListener(i.Yi.FOUND_NFT, foundNFTs), () => {
                            i.ZP.removeEventListerner(i.Yi.FOUND_NFT, foundNFTs)
                        }
                    }, [y, null == t ? void 0 : t.core.mid, g, e]), (0, n.useEffect)(() => {
                        l && (o({
                            loading: !0,
                            rawData: c.rawData,
                            addresses: m
                        }), h(Date.now() + 108e5), f(!1), fetchAndSetTokens())
                    }, [l]), { ...c,
                        canReloadAt: v,
                        canReload: Date.now() >= v,
                        reload: f
                    }
                }(t, e), m = o.Z.getTenants(), y = (0, n.useMemo)(() => {
                    if (!a || !m) return {
                        loading: !0
                    };
                    if (l) return {
                        loading: !1,
                        error: l
                    }; {
                        let t = [],
                            e = [],
                            n = [],
                            r = {},
                            o = [],
                            l = {};
                        Object.values(m).forEach(t => {
                            var e;
                            null === (e = t.contracts) || void 0 === e || e.forEach(e => {
                                l[e] = t
                            })
                        });
                        let s = new Set,
                            i = new Set,
                            d = c.Q.getRealmAvatar();
                        return a.forEach(a => {
                            let u = "".concat(a.assetContract.address.toLowerCase(), "-").concat(a.tokenId);
                            if (s.has(u)) return;
                            s.add(u);
                            let v = a.assetContract.address.toLowerCase(),
                                h = l[v];
                            if (h) r[h.name] || (r[h.name] = []), r[h.name].push(a);
                            else if ((null == d ? void 0 : d.enabled) && (null == d ? void 0 : d.contractAddress) && (null == d ? void 0 : d.contractAddress) === v) o.push(a);
                            else {
                                let r = c.Q.getAvatarByContractAddress(v, a.assetContract.symbol, a.assetContract.slug, a.traits),
                                    o = null == r ? void 0 : r.kind,
                                    l = null == r ? void 0 : r.flag;
                                a.avatarId = null == r ? void 0 : r.id, "pet" === o && (null == r ? void 0 : r.enabled) ? n.push(a) : "avatar" === o && "singular" === l ? (null == r ? void 0 : r.enabled) && !i.has(a.avatarId) ? (a.imageUrl = "".concat(f.pZ, "/game/avatars/").concat(a.avatarId, "/full/").concat(a.avatarId, ".png"), i.add(a.avatarId), t.push(a)) : e.push(a) : "avatar" === o && (null == r ? void 0 : r.enabled) && "nochain" === l ? t.push(a) : o && "avatar" !== o || ((null == r ? void 0 : r.enabled) ? t.push(a) : e.push(a))
                            }
                        }), {
                            loading: p,
                            filteredData: {
                                supported: t,
                                unsupported: e,
                                pets: n,
                                realms: o,
                                tenants: r
                            },
                            canReload: h,
                            canReloadAt: g,
                            updatedAt: Date.now(),
                            reload: v
                        }
                    }
                }, [a, m, null == m ? void 0 : m.length, l, h, g, v, p]);
                return y
            }

            function useNFTCollectionStats(t) {
                let [e, a] = (0, n.useState)(), r = (0, n.useMemo)(() => {
                    if (t === (null == e ? void 0 : e.nftcollection)) return e;
                    l.Z.fetchCollectionStats(t).then(t => {
                        t && a(t)
                    }).catch(() => {})
                }, [!0, t, e]);
                return r
            }
        },
        43851: function(t, e, a) {
            a.d(e, {
                Q: function() {
                    return OpenSeaService
                }
            });
            var n = a(70247);
            let OpenSeaService = class OpenSeaService {
                static getAvatarByContractAddress(t, e, a, r) {
                    let c = n.Z.getGameAvatars();
                    if (!c) return;
                    let o = OpenSeaService.COLLECTION_HACKS.find(n => !!(n.contract.toLowerCase() === t.toLowerCase() && (!n.symbol || n.symbol === e) && (!n.hasTrait || (null == r ? void 0 : r.some(t => t.traitKey === n.hasTrait)))) && (!n.slug || n.slug === a));
                    if (o) {
                        if ("" === o.avatarId) return;
                        return c[o.avatarId]
                    }
                    let l = Object.values(c);
                    return l.find(e => e.contractAddress === t)
                }
                static getRealmAvatar() {
                    let t = n.Z.getGameAvatars();
                    return t && t.realm || null
                }
                constructor() {}
            };
            OpenSeaService.COLLECTION_HACKS = [{
                contract: "0x495f947276749ce646f68ac8c248420045cb7b5e",
                symbol: "PIXELDOGES",
                avatarId: "pixeldoges"
            }, {
                contract: "0x495f947276749ce646f68ac8c248420045cb7b5e",
                symbol: "DUCKG",
                avatarId: "daoduckgenesis"
            }, {
                contract: "0x495f947276749ce646f68ac8c248420045cb7b5e",
                symbol: "OPENSTORE",
                slug: "pixeldoges",
                avatarId: "pixeldoges"
            }, {
                contract: "0x495f947276749ce646f68ac8c248420045cb7b5e",
                symbol: "OPENSTORE",
                slug: "daoduckgenesis",
                avatarId: "daoduckgenesis"
            }, {
                contract: "0x495f947276749ce646f68ac8c248420045cb7b5e",
                symbol: "OPENSTORE",
                slug: "dininho-adventures",
                avatarId: "dininhoopenstore"
            }, {
                contract: "0x495f947276749ce646f68ac8c248420045cb7b5e",
                avatarId: ""
            }, {
                contract: "0x8846294c1240e704c02efc803c385cc9d82efd7f",
                symbol: "SSUMERMAIDS",
                avatarId: "saltysharksmermaids"
            }, {
                contract: "0x8846294c1240e704c02efc803c385cc9d82efd7f",
                hasTrait: "Hair",
                avatarId: "saltysharksmermaids"
            }, {
                contract: "0x8846294c1240e704c02efc803c385cc9d82efd7f",
                symbol: "SSU",
                avatarId: "saltysharks"
            }, {
                contract: "0x8846294c1240e704c02efc803c385cc9d82efd7f",
                avatarId: ""
            }]
        },
        49232: function(t, e, a) {
            var n = a(95047);
            e.Z = new class {
                fetchPlayerNfts(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 36e5,
                        a = {
                            allNfts: [],
                            canReloadTime: 0,
                            loadInitialy: !1
                        };
                    try {
                        let n = this.api.getPlayerCachedNfts();
                        if (!n || (null == n ? void 0 : n.addresses) !== t) return a.loadInitialy = !0, a;
                        return a.allNfts = n.nfts || [], a.canReloadTime = n.nfts && n.timestamp ? n.timestamp + e : 0, a
                    } catch (t) {
                        return console.log(t), a.allNfts = [], a.canReloadTime = 0, a
                    }
                }
                savePlayerNfts(t, e) {
                    return this.api.savePlayerNfts(t, e)
                }
                async delay(t) {
                    return new Promise(e => {
                        setTimeout(e, t)
                    })
                }
                async getNFTTraitData(t, e, a, n) {
                    return new Promise(async (r, c) => {
                        let o = 0,
                            l = !1,
                            s = !0;
                        for (; o < 10 && !l && s;) {
                            try {
                                s = !1;
                                let c = await this.api.getNFTTraitData(null != t ? t : a, e, a, n);
                                l = !0, r(c)
                            } catch (e) {
                                var i;
                                let t = (null == e ? void 0 : null === (i = e.response) || void 0 === i ? void 0 : i.status) || 500;
                                429 == t && (s = !0), console.log("Error getOpenseaData: ".concat(e))
                            }
                            o++
                        }
                        c()
                    })
                }
                constructor(t) {
                    this.api = t
                }
            }(n.Z)
        },
        74674: function(t, e, a) {
            var n = a(95047);
            e.Z = new class {
                async fetchPlayerPets(t) {
                    try {
                        return await this.api.fetchPlayerPets(t)
                    } catch (t) {
                        return console.log(t), []
                    }
                }
                async fetchPet(t) {
                    try {
                        return await this.api.fetchPet(t)
                    } catch (t) {
                        console.log(t)
                    }
                }
                async claimPets(t) {
                    let e = [];
                    try {
                        for (let a of t) {
                            let t = await this.api.fetchPetPreview(a.avatarId, a.tokenId);
                            t && e.push(t)
                        }
                    } catch (t) {
                        console.log(t)
                    }
                    return e
                }
                async fetchPetPreview(t) {
                    try {
                        return await this.api.fetchPetPreview("pixelspets", t)
                    } catch (t) {
                        console.log(t)
                    }
                }
                async fetchCollectionStats(t) {
                    try {
                        return await this.api.fetchNFTStats(t)
                    } catch (t) {
                        console.log(t)
                    }
                }
                petImageUrl(t, e) {
                    return "".concat(this.api.baseAPIURL, "/pets/image/").concat(t, "/").concat(e)
                }
                async voteNFT(t, e, a) {
                    try {
                        return await this.api.voteForNFT(t, e, a)
                    } catch (t) {
                        console.log(t)
                    }
                }
                constructor(t) {
                    this.api = t
                }
            }(n.Z)
        }
    }
]);