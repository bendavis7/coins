/*! For license information please see index.js.LICENSE.txt */ ! function(t, e) {
	"object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.jsPDFInvoiceTemplate = e() : t.jsPDFInvoiceTemplate = e()
}(this, (function() {
	return (() => {
		"use strict";
		var t, e, n, r, i = {
				6857: (t, e, n) => {
					n.r(e), n.d(e, {
						OutputType: () => sn,
						default: () => cn,
						jsPDF: () => Nt
					});
					var r = Uint8Array,
						i = Uint16Array,
						o = Uint32Array,
						a = new r([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]),
						s = new r([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]),
						c = new r([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
						u = function(t, e) {
							for (var n = new i(31), r = 0; r < 31; ++r) n[r] = e += 1 << t[r - 1];
							var a = new o(n[30]);
							for (r = 1; r < 30; ++r)
								for (var s = n[r]; s < n[r + 1]; ++s) a[s] = s - n[r] << 5 | r;
							return [n, a]
						},
						l = u(a, 2),
						h = l[0],
						f = l[1];
					h[28] = 258, f[258] = 28;
					for (var d = u(s, 0), p = d[0], g = d[1], v = new i(32768), m = 0; m < 32768; ++m) {
						var b;
						b = (61680 & (b = (52428 & (b = (43690 & m) >>> 1 | (21845 & m) << 1)) >>> 2 | (13107 & b) << 2)) >>> 4 | (3855 & b) << 4, v[m] = ((65280 & b) >>> 8 | (255 & b) << 8) >>> 1
					}
					var y = function(t, e, n) {
							for (var r = t.length, o = 0, a = new i(e); o < r; ++o) ++a[t[o] - 1];
							var s, c = new i(e);
							for (o = 0; o < e; ++o) c[o] = c[o - 1] + a[o - 1] << 1;
							if (n) {
								s = new i(1 << e);
								var u = 15 - e;
								for (o = 0; o < r; ++o)
									if (t[o])
										for (var l = o << 4 | t[o], h = e - t[o], f = c[t[o] - 1]++ << h, d = f | (1 << h) - 1; f <= d; ++f) s[v[f] >>> u] = l
							} else
								for (s = new i(r), o = 0; o < r; ++o) s[o] = v[c[t[o] - 1]++] >>> 15 - t[o];
							return s
						},
						w = new r(288);
					for (m = 0; m < 144; ++m) w[m] = 8;
					for (m = 144; m < 256; ++m) w[m] = 9;
					for (m = 256; m < 280; ++m) w[m] = 7;
					for (m = 280; m < 288; ++m) w[m] = 8;
					var N = new r(32);
					for (m = 0; m < 32; ++m) N[m] = 5;
					var L = y(w, 9, 0),
						x = y(w, 9, 1),
						A = y(N, 5, 0),
						S = y(N, 5, 1),
						_ = function(t) {
							for (var e = t[0], n = 1; n < t.length; ++n) t[n] > e && (e = t[n]);
							return e
						},
						P = function(t, e, n) {
							var r = e / 8 >> 0;
							return (t[r] | t[r + 1] << 8) >>> (7 & e) & n
						},
						k = function(t, e) {
							var n = e / 8 >> 0;
							return (t[n] | t[n + 1] << 8 | t[n + 2] << 16) >>> (7 & e)
						},
						F = function(t) {
							return (t / 8 >> 0) + (7 & t && 1)
						},
						I = function(t, e, n) {
							(null == e || e < 0) && (e = 0), (null == n || n > t.length) && (n = t.length);
							var a = new(t instanceof i ? i : t instanceof o ? o : r)(n - e);
							return a.set(t.subarray(e, n)), a
						},
						C = function(t, e, n) {
							n <<= 7 & e;
							var r = e / 8 >> 0;
							t[r] |= n, t[r + 1] |= n >>> 8
						},
						j = function(t, e, n) {
							n <<= 7 & e;
							var r = e / 8 >> 0;
							t[r] |= n, t[r + 1] |= n >>> 8, t[r + 2] |= n >>> 16
						},
						O = function(t, e) {
							for (var n = [], o = 0; o < t.length; ++o) t[o] && n.push({
								s: o,
								f: t[o]
							});
							var a = n.length,
								s = n.slice();
							if (!a) return [new r(0), 0];
							if (1 == a) {
								var c = new r(n[0].s + 1);
								return c[n[0].s] = 1, [c, 1]
							}
							n.sort((function(t, e) {
								return t.f - e.f
							})), n.push({
								s: -1,
								f: 25001
							});
							var u = n[0],
								l = n[1],
								h = 0,
								f = 1,
								d = 2;
							for (n[0] = {
									s: -1,
									f: u.f + l.f,
									l: u,
									r: l
								}; f != a - 1;) u = n[n[h].f < n[d].f ? h++ : d++], l = n[h != f && n[h].f < n[d].f ? h++ : d++], n[f++] = {
								s: -1,
								f: u.f + l.f,
								l: u,
								r: l
							};
							var p = s[0].s;
							for (o = 1; o < a; ++o) s[o].s > p && (p = s[o].s);
							var g = new i(p + 1),
								v = B(n[f - 1], g, 0);
							if (v > e) {
								o = 0;
								var m = 0,
									b = v - e,
									y = 1 << b;
								for (s.sort((function(t, e) {
										return g[e.s] - g[t.s] || t.f - e.f
									})); o < a; ++o) {
									var w = s[o].s;
									if (!(g[w] > e)) break;
									m += y - (1 << v - g[w]), g[w] = e
								}
								for (m >>>= b; m > 0;) {
									var N = s[o].s;
									g[N] < e ? m -= 1 << e - g[N]++ - 1 : ++o
								}
								for (; o >= 0 && m; --o) {
									var L = s[o].s;
									g[L] == e && (--g[L], ++m)
								}
								v = e
							}
							return [new r(g), v]
						},
						B = function(t, e, n) {
							return -1 == t.s ? Math.max(B(t.l, e, n + 1), B(t.r, e, n + 1)) : e[t.s] = n
						},
						M = function(t) {
							for (var e = t.length; e && !t[--e];);
							for (var n = new i(++e), r = 0, o = t[0], a = 1, s = function(t) {
									n[r++] = t
								}, c = 1; c <= e; ++c)
								if (t[c] == o && c != e) ++a;
								else {
									if (!o && a > 2) {
										for (; a > 138; a -= 138) s(32754);
										a > 2 && (s(a > 10 ? a - 11 << 5 | 28690 : a - 3 << 5 | 12305), a = 0)
									} else if (a > 3) {
										for (s(o), --a; a > 6; a -= 6) s(8304);
										a > 2 && (s(a - 3 << 5 | 8208), a = 0)
									}
									for (; a--;) s(o);
									a = 1, o = t[c]
								} return [n.subarray(0, r), e]
						},
						E = function(t, e) {
							for (var n = 0, r = 0; r < e.length; ++r) n += t[r] * e[r];
							return n
						},
						q = function(t, e, n) {
							var r = n.length,
								i = F(e + 2);
							t[i] = 255 & r, t[i + 1] = r >>> 8, t[i + 2] = 255 ^ t[i], t[i + 3] = 255 ^ t[i + 1];
							for (var o = 0; o < r; ++o) t[i + o + 4] = n[o];
							return 8 * (i + 4 + r)
						},
						T = function(t, e, n, r, o, u, l, h, f, d, p) {
							C(e, p++, n), ++o[256];
							for (var g = O(o, 15), v = g[0], m = g[1], b = O(u, 15), x = b[0], S = b[1], _ = M(v), P = _[0], k = _[1], F = M(x), I = F[0], B = F[1], T = new i(19), D = 0; D < P.length; ++D) T[31 & P[D]]++;
							for (D = 0; D < I.length; ++D) T[31 & I[D]]++;
							for (var R = O(T, 7), z = R[0], U = R[1], H = 19; H > 4 && !z[c[H - 1]]; --H);
							var W, V, G, Y, J = d + 5 << 3,
								X = E(o, w) + E(u, N) + l,
								K = E(o, v) + E(u, x) + l + 14 + 3 * H + E(T, z) + (2 * T[16] + 3 * T[17] + 7 * T[18]);
							if (J <= X && J <= K) return q(e, p, t.subarray(f, f + d));
							if (C(e, p, 1 + (K < X)), p += 2, K < X) {
								W = y(v, m, 0), V = v, G = y(x, S, 0), Y = x;
								var Z = y(z, U, 0);
								for (C(e, p, k - 257), C(e, p + 5, B - 1), C(e, p + 10, H - 4), p += 14, D = 0; D < H; ++D) C(e, p + 3 * D, z[c[D]]);
								p += 3 * H;
								for (var $ = [P, I], Q = 0; Q < 2; ++Q) {
									var tt = $[Q];
									for (D = 0; D < tt.length; ++D) {
										var et = 31 & tt[D];
										C(e, p, Z[et]), p += z[et], et > 15 && (C(e, p, tt[D] >>> 5 & 127), p += tt[D] >>> 12)
									}
								}
							} else W = L, V = w, G = A, Y = N;
							for (D = 0; D < h; ++D)
								if (r[D] > 255) {
									et = r[D] >>> 18 & 31, j(e, p, W[et + 257]), p += V[et + 257], et > 7 && (C(e, p, r[D] >>> 23 & 31), p += a[et]);
									var nt = 31 & r[D];
									j(e, p, G[nt]), p += Y[nt], nt > 3 && (j(e, p, r[D] >>> 5 & 8191), p += s[nt])
								} else j(e, p, W[r[D]]), p += V[r[D]];
							return j(e, p, W[256]), p + V[256]
						},
						D = new o([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]),
						R = new r(0),
						z = function(t, e, n, c, u) {
							return function(t, e, n, c, u, l) {
								var h = t.length,
									d = new r(c + h + 5 * (1 + Math.floor(h / 7e3)) + u),
									p = d.subarray(c, d.length - u),
									v = 0;
								if (!e || h < 8)
									for (var m = 0; m <= h; m += 65535) {
										var b = m + 65535;
										b < h ? v = q(p, v, t.subarray(m, b)) : (p[m] = l, v = q(p, v, t.subarray(m, h)))
									} else {
										for (var y = D[e - 1], w = y >>> 13, N = 8191 & y, L = (1 << n) - 1, x = new i(32768), A = new i(L + 1), S = Math.ceil(n / 3), _ = 2 * S, P = function(e) {
												return (t[e] ^ t[e + 1] << S ^ t[e + 2] << _) & L
											}, k = new o(25e3), C = new i(288), j = new i(32), O = 0, B = 0, M = (m = 0, 0), E = 0, z = 0; m < h; ++m) {
											var U = P(m),
												H = 32767 & m,
												W = A[U];
											if (x[H] = W, A[U] = H, E <= m) {
												var V = h - m;
												if ((O > 7e3 || M > 24576) && V > 423) {
													v = T(t, p, 0, k, C, j, B, M, z, m - z, v), M = O = B = 0, z = m;
													for (var G = 0; G < 286; ++G) C[G] = 0;
													for (G = 0; G < 30; ++G) j[G] = 0
												}
												var Y = 2,
													J = 0,
													X = N,
													K = H - W & 32767;
												if (V > 2 && U == P(m - K))
													for (var Z = Math.min(w, V) - 1, $ = Math.min(32767, m), Q = Math.min(258, V); K <= $ && --X && H != W;) {
														if (t[m + Y] == t[m + Y - K]) {
															for (var tt = 0; tt < Q && t[m + tt] == t[m + tt - K]; ++tt);
															if (tt > Y) {
																if (Y = tt, J = K, tt > Z) break;
																var et = Math.min(K, tt - 2),
																	nt = 0;
																for (G = 0; G < et; ++G) {
																	var rt = m - K + G + 32768 & 32767,
																		it = rt - x[rt] + 32768 & 32767;
																	it > nt && (nt = it, W = rt)
																}
															}
														}
														K += (H = W) - (W = x[H]) + 32768 & 32767
													}
												if (J) {
													k[M++] = 268435456 | f[Y] << 18 | g[J];
													var ot = 31 & f[Y],
														at = 31 & g[J];
													B += a[ot] + s[at], ++C[257 + ot], ++j[at], E = m + Y, ++O
												} else k[M++] = t[m], ++C[t[m]]
											}
										}
										v = T(t, p, l, k, C, j, B, M, z, m - z, v), l || (v = q(p, v, R))
									}
								return I(d, 0, c + F(v) + u)
							}(t, null == e.level ? 6 : e.level, null == e.mem ? Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(t.length)))) : 12 + e.mem, n, c, !u)
						};

					function U(t, e) {
						void 0 === e && (e = {});
						var n = function() {
							var t = 1,
								e = 0;
							return {
								p: function(n) {
									for (var r = t, i = e, o = n.length, a = 0; a != o;) {
										for (var s = Math.min(a + 5552, o); a < s; ++a) i += r += n[a];
										r %= 65521, i %= 65521
									}
									t = r, e = i
								},
								d: function() {
									return (t >>> 8 << 16 | (255 & e) << 8 | e >>> 8) + 2 * ((255 & t) << 23)
								}
							}
						}();
						n.p(t);
						var r = z(t, e, 2, 4);
						return function(t, e) {
								var n = e.level,
									r = 0 == n ? 0 : n < 6 ? 1 : 9 == n ? 3 : 2;
								t[0] = 120, t[1] = r << 6 | (r ? 32 - 2 * r : 1)
							}(r, e),
							function(t, e, n) {
								for (; n; ++e) t[e] = n, n >>>= 8
							}(r, r.length - 4, n.d()), r
					}

					function H(t, e) {
						return function(t, e, n) {
							var i = t.length,
								o = !e || n,
								u = !n || n.i;
							n || (n = {}), e || (e = new r(3 * i));
							var l = function(t) {
									var n = e.length;
									if (t > n) {
										var i = new r(Math.max(2 * n, t));
										i.set(e), e = i
									}
								},
								f = n.f || 0,
								d = n.p || 0,
								g = n.b || 0,
								v = n.l,
								m = n.d,
								b = n.m,
								w = n.n,
								N = 8 * i;
							do {
								if (!v) {
									n.f = f = P(t, d, 1);
									var L = P(t, d + 1, 3);
									if (d += 3, !L) {
										var A = t[(z = F(d) + 4) - 4] | t[z - 3] << 8,
											C = z + A;
										if (C > i) {
											if (u) throw "unexpected EOF";
											break
										}
										o && l(g + A), e.set(t.subarray(z, C), g), n.b = g += A, n.p = d = 8 * C;
										continue
									}
									if (1 == L) v = x, m = S, b = 9, w = 5;
									else {
										if (2 != L) throw "invalid block type";
										var j = P(t, d, 31) + 257,
											O = P(t, d + 10, 15) + 4,
											B = j + P(t, d + 5, 31) + 1;
										d += 14;
										for (var M = new r(B), E = new r(19), q = 0; q < O; ++q) E[c[q]] = P(t, d + 3 * q, 7);
										d += 3 * O;
										var T = _(E),
											D = (1 << T) - 1;
										if (!u && d + B * (T + 7) > N) break;
										var R = y(E, T, 1);
										for (q = 0; q < B;) {
											var z, U = R[P(t, d, D)];
											if (d += 15 & U, (z = U >>> 4) < 16) M[q++] = z;
											else {
												var H = 0,
													W = 0;
												for (16 == z ? (W = 3 + P(t, d, 3), d += 2, H = M[q - 1]) : 17 == z ? (W = 3 + P(t, d, 7), d += 3) : 18 == z && (W = 11 + P(t, d, 127), d += 7); W--;) M[q++] = H
											}
										}
										var V = M.subarray(0, j),
											G = M.subarray(j);
										b = _(V), w = _(G), v = y(V, b, 1), m = y(G, w, 1)
									}
									if (d > N) throw "unexpected EOF"
								}
								o && l(g + 131072);
								for (var Y = (1 << b) - 1, J = (1 << w) - 1, X = b + w + 18; u || d + X < N;) {
									var K = (H = v[k(t, d) & Y]) >>> 4;
									if ((d += 15 & H) > N) throw "unexpected EOF";
									if (!H) throw "invalid length/literal";
									if (K < 256) e[g++] = K;
									else {
										if (256 == K) {
											v = null;
											break
										}
										var Z = K - 254;
										if (K > 264) {
											var $ = a[q = K - 257];
											Z = P(t, d, (1 << $) - 1) + h[q], d += $
										}
										var Q = m[k(t, d) & J],
											tt = Q >>> 4;
										if (!Q) throw "invalid distance";
										if (d += 15 & Q, G = p[tt], tt > 3 && ($ = s[tt], G += k(t, d) & (1 << $) - 1, d += $), d > N) throw "unexpected EOF";
										o && l(g + 131072);
										for (var et = g + Z; g < et; g += 4) e[g] = e[g - G], e[g + 1] = e[g + 1 - G], e[g + 2] = e[g + 2 - G], e[g + 3] = e[g + 3 - G];
										g = et
									}
								}
								n.l = v, n.p = d, n.b = g, v && (f = 1, n.m = b, n.d = m, n.n = w)
							} while (!f);
							return g == e.length ? e : I(e, 0, g)
						}((function(t) {
							if (8 != (15 & t[0]) || t[0] >>> 4 > 7 || (t[0] << 8 | t[1]) % 31) throw "invalid zlib data";
							if (32 & t[1]) throw "invalid zlib data: preset dictionaries not supported"
						}(t), t.subarray(2, -4)), e)
					}
					var W = function() {
						return "undefined" != typeof window ? window : void 0 !== n.g ? n.g : "undefined" != typeof self ? self : this
					}();

					function V() {
						W.console && "function" == typeof W.console.log && W.console.log.apply(W.console, arguments)
					}
					var G = {
						log: V,
						warn: function(t) {
							W.console && ("function" == typeof W.console.warn ? W.console.warn.apply(W.console, arguments) : V.call(null, arguments))
						},
						error: function(t) {
							W.console && ("function" == typeof W.console.error ? W.console.error.apply(W.console, arguments) : V(t))
						}
					};

					function Y(t, e, n) {
						var r = new XMLHttpRequest;
						r.open("GET", t), r.responseType = "blob", r.onload = function() {
							$(r.response, e, n)
						}, r.onerror = function() {
							G.error("could not download file")
						}, r.send()
					}

					function J(t) {
						var e = new XMLHttpRequest;
						e.open("HEAD", t, !1);
						try {
							e.send()
						} catch (t) {}
						return e.status >= 200 && e.status <= 299
					}

					function X(t) {
						try {
							t.dispatchEvent(new MouseEvent("click"))
						} catch (n) {
							var e = document.createEvent("MouseEvents");
							e.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), t.dispatchEvent(e)
						}
					}
					var K, Z, $ = W.saveAs || ("object" != typeof window || window !== W ? function() {} : "undefined" != typeof HTMLAnchorElement && "download" in HTMLAnchorElement.prototype ? function(t, e, n) {
						var r = W.URL || W.webkitURL,
							i = document.createElement("a");
						e = e || t.name || "download", i.download = e, i.rel = "noopener", "string" == typeof t ? (i.href = t, i.origin !== location.origin ? J(i.href) ? Y(t, e, n) : X(i, i.target = "_blank") : X(i)) : (i.href = r.createObjectURL(t), setTimeout((function() {
							r.revokeObjectURL(i.href)
						}), 4e4), setTimeout((function() {
							X(i)
						}), 0))
					} : "msSaveOrOpenBlob" in navigator ? function(t, e, n) {
						if (e = e || t.name || "download", "string" == typeof t)
							if (J(t)) Y(t, e, n);
							else {
								var r = document.createElement("a");
								r.href = t, r.target = "_blank", setTimeout((function() {
									X(r)
								}))
							}
						else navigator.msSaveOrOpenBlob(function(t, e) {
							return void 0 === e ? e = {
								autoBom: !1
							} : "object" != typeof e && (G.warn("Deprecated: Expected third argument to be a object"), e = {
								autoBom: !e
							}), e.autoBom && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type) ? new Blob([String.fromCharCode(65279), t], {
								type: t.type
							}) : t
						}(t, n), e)
					} : function(t, e, n, r) {
						if ((r = r || open("", "_blank")) && (r.document.title = r.document.body.innerText = "downloading..."), "string" == typeof t) return Y(t, e, n);
						var i = "application/octet-stream" === t.type,
							o = /constructor/i.test(W.HTMLElement) || W.safari,
							a = /CriOS\/[\d]+/.test(navigator.userAgent);
						if ((a || i && o) && "object" == typeof FileReader) {
							var s = new FileReader;
							s.onloadend = function() {
								var t = s.result;
								t = a ? t : t.replace(/^data:[^;]*;/, "data:attachment/file;"), r ? r.location.href = t : location = t, r = null
							}, s.readAsDataURL(t)
						} else {
							var c = W.URL || W.webkitURL,
								u = c.createObjectURL(t);
							r ? r.location = u : location.href = u, r = null, setTimeout((function() {
								c.revokeObjectURL(u)
							}), 4e4)
						}
					});

					function Q(t) {
						var e;
						t = t || "", this.ok = !1, "#" == t.charAt(0) && (t = t.substr(1, 6)), t = {
							aliceblue: "f0f8ff",
							antiquewhite: "faebd7",
							aqua: "00ffff",
							aquamarine: "7fffd4",
							azure: "f0ffff",
							beige: "f5f5dc",
							bisque: "ffe4c4",
							black: "000000",
							blanchedalmond: "ffebcd",
							blue: "0000ff",
							blueviolet: "8a2be2",
							brown: "a52a2a",
							burlywood: "deb887",
							cadetblue: "5f9ea0",
							chartreuse: "7fff00",
							chocolate: "d2691e",
							coral: "ff7f50",
							cornflowerblue: "6495ed",
							cornsilk: "fff8dc",
							crimson: "dc143c",
							cyan: "00ffff",
							darkblue: "00008b",
							darkcyan: "008b8b",
							darkgoldenrod: "b8860b",
							darkgray: "a9a9a9",
							darkgreen: "006400",
							darkkhaki: "bdb76b",
							darkmagenta: "8b008b",
							darkolivegreen: "556b2f",
							darkorange: "ff8c00",
							darkorchid: "9932cc",
							darkred: "8b0000",
							darksalmon: "e9967a",
							darkseagreen: "8fbc8f",
							darkslateblue: "483d8b",
							darkslategray: "2f4f4f",
							darkturquoise: "00ced1",
							darkviolet: "9400d3",
							deeppink: "ff1493",
							deepskyblue: "00bfff",
							dimgray: "696969",
							dodgerblue: "1e90ff",
							feldspar: "d19275",
							firebrick: "b22222",
							floralwhite: "fffaf0",
							forestgreen: "228b22",
							fuchsia: "ff00ff",
							gainsboro: "dcdcdc",
							ghostwhite: "f8f8ff",
							gold: "ffd700",
							goldenrod: "daa520",
							gray: "808080",
							green: "008000",
							greenyellow: "adff2f",
							honeydew: "f0fff0",
							hotpink: "ff69b4",
							indianred: "cd5c5c",
							indigo: "4b0082",
							ivory: "fffff0",
							khaki: "f0e68c",
							lavender: "e6e6fa",
							lavenderblush: "fff0f5",
							lawngreen: "7cfc00",
							lemonchiffon: "fffacd",
							lightblue: "add8e6",
							lightcoral: "f08080",
							lightcyan: "e0ffff",
							lightgoldenrodyellow: "fafad2",
							lightgrey: "d3d3d3",
							lightgreen: "90ee90",
							lightpink: "ffb6c1",
							lightsalmon: "ffa07a",
							lightseagreen: "20b2aa",
							lightskyblue: "87cefa",
							lightslateblue: "8470ff",
							lightslategray: "778899",
							lightsteelblue: "b0c4de",
							lightyellow: "ffffe0",
							lime: "00ff00",
							limegreen: "32cd32",
							linen: "faf0e6",
							magenta: "ff00ff",
							maroon: "800000",
							mediumaquamarine: "66cdaa",
							mediumblue: "0000cd",
							mediumorchid: "ba55d3",
							mediumpurple: "9370d8",
							mediumseagreen: "3cb371",
							mediumslateblue: "7b68ee",
							mediumspringgreen: "00fa9a",
							mediumturquoise: "48d1cc",
							mediumvioletred: "c71585",
							midnightblue: "191970",
							mintcream: "f5fffa",
							mistyrose: "ffe4e1",
							moccasin: "ffe4b5",
							navajowhite: "ffdead",
							navy: "000080",
							oldlace: "fdf5e6",
							olive: "808000",
							olivedrab: "6b8e23",
							orange: "ffa500",
							orangered: "ff4500",
							orchid: "da70d6",
							palegoldenrod: "eee8aa",
							palegreen: "98fb98",
							paleturquoise: "afeeee",
							palevioletred: "d87093",
							papayawhip: "ffefd5",
							peachpuff: "ffdab9",
							peru: "cd853f",
							pink: "ffc0cb",
							plum: "dda0dd",
							powderblue: "b0e0e6",
							purple: "800080",
							red: "ff0000",
							rosybrown: "bc8f8f",
							royalblue: "4169e1",
							saddlebrown: "8b4513",
							salmon: "fa8072",
							sandybrown: "f4a460",
							seagreen: "2e8b57",
							seashell: "fff5ee",
							sienna: "a0522d",
							silver: "c0c0c0",
							skyblue: "87ceeb",
							slateblue: "6a5acd",
							slategray: "708090",
							snow: "fffafa",
							springgreen: "00ff7f",
							steelblue: "4682b4",
							tan: "d2b48c",
							teal: "008080",
							thistle: "d8bfd8",
							tomato: "ff6347",
							turquoise: "40e0d0",
							violet: "ee82ee",
							violetred: "d02090",
							wheat: "f5deb3",
							white: "ffffff",
							whitesmoke: "f5f5f5",
							yellow: "ffff00",
							yellowgreen: "9acd32"
						} [t = (t = t.replace(/ /g, "")).toLowerCase()] || t;
						for (var n = [{
								re: /^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$/,
								example: ["rgb(123, 234, 45)", "rgb(255,234,245)"],
								process: function(t) {
									return [parseInt(t[1]), parseInt(t[2]), parseInt(t[3])]
								}
							}, {
								re: /^(\w{2})(\w{2})(\w{2})$/,
								example: ["#00ff00", "336699"],
								process: function(t) {
									return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)]
								}
							}, {
								re: /^(\w{1})(\w{1})(\w{1})$/,
								example: ["#fb0", "f0f"],
								process: function(t) {
									return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)]
								}
							}], r = 0; r < n.length; r++) {
							var i = n[r].re,
								o = n[r].process,
								a = i.exec(t);
							a && (e = o(a), this.r = e[0], this.g = e[1], this.b = e[2], this.ok = !0)
						}
						this.r = this.r < 0 || isNaN(this.r) ? 0 : this.r > 255 ? 255 : this.r, this.g = this.g < 0 || isNaN(this.g) ? 0 : this.g > 255 ? 255 : this.g, this.b = this.b < 0 || isNaN(this.b) ? 0 : this.b > 255 ? 255 : this.b, this.toRGB = function() {
							return "rgb(" + this.r + ", " + this.g + ", " + this.b + ")"
						}, this.toHex = function() {
							var t = this.r.toString(16),
								e = this.g.toString(16),
								n = this.b.toString(16);
							return 1 == t.length && (t = "0" + t), 1 == e.length && (e = "0" + e), 1 == n.length && (n = "0" + n), "#" + t + e + n
						}
					}

					function tt(t, e) {
						var n = t[0],
							r = t[1],
							i = t[2],
							o = t[3];
						n = nt(n, r, i, o, e[0], 7, -680876936), o = nt(o, n, r, i, e[1], 12, -389564586), i = nt(i, o, n, r, e[2], 17, 606105819), r = nt(r, i, o, n, e[3], 22, -1044525330), n = nt(n, r, i, o, e[4], 7, -176418897), o = nt(o, n, r, i, e[5], 12, 1200080426), i = nt(i, o, n, r, e[6], 17, -1473231341), r = nt(r, i, o, n, e[7], 22, -45705983), n = nt(n, r, i, o, e[8], 7, 1770035416), o = nt(o, n, r, i, e[9], 12, -1958414417), i = nt(i, o, n, r, e[10], 17, -42063), r = nt(r, i, o, n, e[11], 22, -1990404162), n = nt(n, r, i, o, e[12], 7, 1804603682), o = nt(o, n, r, i, e[13], 12, -40341101), i = nt(i, o, n, r, e[14], 17, -1502002290), n = rt(n, r = nt(r, i, o, n, e[15], 22, 1236535329), i, o, e[1], 5, -165796510), o = rt(o, n, r, i, e[6], 9, -1069501632), i = rt(i, o, n, r, e[11], 14, 643717713), r = rt(r, i, o, n, e[0], 20, -373897302), n = rt(n, r, i, o, e[5], 5, -701558691), o = rt(o, n, r, i, e[10], 9, 38016083), i = rt(i, o, n, r, e[15], 14, -660478335), r = rt(r, i, o, n, e[4], 20, -405537848), n = rt(n, r, i, o, e[9], 5, 568446438), o = rt(o, n, r, i, e[14], 9, -1019803690), i = rt(i, o, n, r, e[3], 14, -187363961), r = rt(r, i, o, n, e[8], 20, 1163531501), n = rt(n, r, i, o, e[13], 5, -1444681467), o = rt(o, n, r, i, e[2], 9, -51403784), i = rt(i, o, n, r, e[7], 14, 1735328473), n = it(n, r = rt(r, i, o, n, e[12], 20, -1926607734), i, o, e[5], 4, -378558), o = it(o, n, r, i, e[8], 11, -2022574463), i = it(i, o, n, r, e[11], 16, 1839030562), r = it(r, i, o, n, e[14], 23, -35309556), n = it(n, r, i, o, e[1], 4, -1530992060), o = it(o, n, r, i, e[4], 11, 1272893353), i = it(i, o, n, r, e[7], 16, -155497632), r = it(r, i, o, n, e[10], 23, -1094730640), n = it(n, r, i, o, e[13], 4, 681279174), o = it(o, n, r, i, e[0], 11, -358537222), i = it(i, o, n, r, e[3], 16, -722521979), r = it(r, i, o, n, e[6], 23, 76029189), n = it(n, r, i, o, e[9], 4, -640364487), o = it(o, n, r, i, e[12], 11, -421815835), i = it(i, o, n, r, e[15], 16, 530742520), n = ot(n, r = it(r, i, o, n, e[2], 23, -995338651), i, o, e[0], 6, -198630844), o = ot(o, n, r, i, e[7], 10, 1126891415), i = ot(i, o, n, r, e[14], 15, -1416354905), r = ot(r, i, o, n, e[5], 21, -57434055), n = ot(n, r, i, o, e[12], 6, 1700485571), o = ot(o, n, r, i, e[3], 10, -1894986606), i = ot(i, o, n, r, e[10], 15, -1051523), r = ot(r, i, o, n, e[1], 21, -2054922799), n = ot(n, r, i, o, e[8], 6, 1873313359), o = ot(o, n, r, i, e[15], 10, -30611744), i = ot(i, o, n, r, e[6], 15, -1560198380), r = ot(r, i, o, n, e[13], 21, 1309151649), n = ot(n, r, i, o, e[4], 6, -145523070), o = ot(o, n, r, i, e[11], 10, -1120210379), i = ot(i, o, n, r, e[2], 15, 718787259), r = ot(r, i, o, n, e[9], 21, -343485551), t[0] = ft(n, t[0]), t[1] = ft(r, t[1]), t[2] = ft(i, t[2]), t[3] = ft(o, t[3])
					}

					function et(t, e, n, r, i, o) {
						return e = ft(ft(e, t), ft(r, o)), ft(e << i | e >>> 32 - i, n)
					}

					function nt(t, e, n, r, i, o, a) {
						return et(e & n | ~e & r, t, e, i, o, a)
					}

					function rt(t, e, n, r, i, o, a) {
						return et(e & r | n & ~r, t, e, i, o, a)
					}

					function it(t, e, n, r, i, o, a) {
						return et(e ^ n ^ r, t, e, i, o, a)
					}

					function ot(t, e, n, r, i, o, a) {
						return et(n ^ (e | ~r), t, e, i, o, a)
					}

					function at(t) {
						var e, n = t.length,
							r = [1732584193, -271733879, -1732584194, 271733878];
						for (e = 64; e <= t.length; e += 64) tt(r, st(t.substring(e - 64, e)));
						t = t.substring(e - 64);
						var i = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
						for (e = 0; e < t.length; e++) i[e >> 2] |= t.charCodeAt(e) << (e % 4 << 3);
						if (i[e >> 2] |= 128 << (e % 4 << 3), e > 55)
							for (tt(r, i), e = 0; e < 16; e++) i[e] = 0;
						return i[14] = 8 * n, tt(r, i), r
					}

					function st(t) {
						var e, n = [];
						for (e = 0; e < 64; e += 4) n[e >> 2] = t.charCodeAt(e) + (t.charCodeAt(e + 1) << 8) + (t.charCodeAt(e + 2) << 16) + (t.charCodeAt(e + 3) << 24);
						return n
					}
					K = W.atob.bind(W), Z = W.btoa.bind(W);
					var ct = "0123456789abcdef".split("");

					function ut(t) {
						for (var e = "", n = 0; n < 4; n++) e += ct[t >> 8 * n + 4 & 15] + ct[t >> 8 * n & 15];
						return e
					}

					function lt(t) {
						return String.fromCharCode((255 & t) >> 0, (65280 & t) >> 8, (16711680 & t) >> 16, (4278190080 & t) >> 24)
					}

					function ht(t) {
						return at(t).map(lt).join("")
					}

					function ft(t, e) {
						return t + e & 4294967295
					}
					if ("5d41402abc4b2a76b9719d911017c592" != function(t) {
							for (var e = 0; e < t.length; e++) t[e] = ut(t[e]);
							return t.join("")
						}(at("hello"))) {
						function b(t, e) {
							var n = (65535 & t) + (65535 & e);
							return (t >> 16) + (e >> 16) + (n >> 16) << 16 | 65535 & n
						}
					}

					function dt(t, e) {
						var n, r, i, o;
						if (t !== n) {
							for (var a = (i = t, o = 1 + (256 / t.length >> 0), new Array(o + 1).join(i)), s = [], c = 0; c < 256; c++) s[c] = c;
							var u = 0;
							for (c = 0; c < 256; c++) {
								var l = s[c];
								u = (u + l + a.charCodeAt(c)) % 256, s[c] = s[u], s[u] = l
							}
							n = t, r = s
						} else s = r;
						var h = e.length,
							f = 0,
							d = 0,
							p = "";
						for (c = 0; c < h; c++) d = (d + (l = s[f = (f + 1) % 256])) % 256, s[f] = s[d], s[d] = l, a = s[(s[f] + s[d]) % 256], p += String.fromCharCode(e.charCodeAt(c) ^ a);
						return p
					}
					var pt = {
						print: 4,
						modify: 8,
						copy: 16,
						"annot-forms": 32
					};

					function gt(t, e, n, r) {
						this.v = 1, this.r = 2;
						let i = 192;
						t.forEach((function(t) {
							if (void 0 !== pt.perm) throw new Error("Invalid permission: " + t);
							i += pt[t]
						})), this.padding = "(¿N^NuAd\0NVÿú\b..\0¶Ðh>/\f©þdSiz";
						let o = (e + this.padding).substr(0, 32),
							a = (n + this.padding).substr(0, 32);
						this.O = this.processOwnerPassword(o, a), this.P = -(1 + (255 ^ i)), this.encryptionKey = ht(o + this.O + this.lsbFirstWord(this.P) + this.hexToBytes(r)).substr(0, 5), this.U = dt(this.encryptionKey, this.padding)
					}

					function vt(t) {
						if ("object" != typeof t) throw new Error("Invalid Context passed to initialize PubSub (jsPDF-module)");
						var e = {};
						this.subscribe = function(t, n, r) {
							if (r = r || !1, "string" != typeof t || "function" != typeof n || "boolean" != typeof r) throw new Error("Invalid arguments passed to PubSub.subscribe (jsPDF-module)");
							e.hasOwnProperty(t) || (e[t] = {});
							var i = Math.random().toString(35);
							return e[t][i] = [n, !!r], i
						}, this.unsubscribe = function(t) {
							for (var n in e)
								if (e[n][t]) return delete e[n][t], 0 === Object.keys(e[n]).length && delete e[n], !0;
							return !1
						}, this.publish = function(n) {
							if (e.hasOwnProperty(n)) {
								var r = Array.prototype.slice.call(arguments, 1),
									i = [];
								for (var o in e[n]) {
									var a = e[n][o];
									try {
										a[0].apply(t, r)
									} catch (t) {
										W.console && G.error("jsPDF PubSub Error", t.message, t)
									}
									a[1] && i.push(o)
								}
								i.length && i.forEach(this.unsubscribe)
							}
						}, this.getTopics = function() {
							return e
						}
					}

					function mt(t) {
						if (!(this instanceof mt)) return new mt(t);
						var e = "opacity,stroke-opacity".split(",");
						for (var n in t) t.hasOwnProperty(n) && e.indexOf(n) >= 0 && (this[n] = t[n]);
						this.id = "", this.objectNumber = -1
					}

					function bt(t, e) {
						this.gState = t, this.matrix = e, this.id = "", this.objectNumber = -1
					}

					function yt(t, e, n, r, i) {
						if (!(this instanceof yt)) return new yt(t, e, n, r, i);
						this.type = "axial" === t ? 2 : 3, this.coords = e, this.colors = n, bt.call(this, r, i)
					}

					function wt(t, e, n, r, i) {
						if (!(this instanceof wt)) return new wt(t, e, n, r, i);
						this.boundingBox = t, this.xStep = e, this.yStep = n, this.stream = "", this.cloneIndex = 0, bt.call(this, r, i)
					}

					function Nt(t) {
						var e, n = "string" == typeof arguments[0] ? arguments[0] : "p",
							r = arguments[1],
							i = arguments[2],
							o = arguments[3],
							a = [],
							s = 1,
							c = 16,
							u = "S",
							l = null;
						"object" == typeof(t = t || {}) && (n = t.orientation, r = t.unit || r, i = t.format || i, o = t.compress || t.compressPdf || o, null !== (l = t.encryption || null) && (l.userPassword = l.userPassword || "", l.ownerPassword = l.ownerPassword || "", l.userPermissions = l.userPermissions || []), s = "number" == typeof t.userUnit ? Math.abs(t.userUnit) : 1, void 0 !== t.precision && (e = t.precision), void 0 !== t.floatPrecision && (c = t.floatPrecision), u = t.defaultPathOperation || "S"), a = t.filters || (!0 === o ? ["FlateEncode"] : a), r = r || "mm", n = ("" + (n || "P")).toLowerCase();
						var h = t.putOnlyUsedFonts || !1,
							f = {},
							d = {
								internal: {},
								__private__: {}
							};
						d.__private__.PubSub = vt;
						var p = "1.3",
							g = d.__private__.getPdfVersion = function() {
								return p
							};
						d.__private__.setPdfVersion = function(t) {
							p = t
						};
						var v = {
							a0: [2383.94, 3370.39],
							a1: [1683.78, 2383.94],
							a2: [1190.55, 1683.78],
							a3: [841.89, 1190.55],
							a4: [595.28, 841.89],
							a5: [419.53, 595.28],
							a6: [297.64, 419.53],
							a7: [209.76, 297.64],
							a8: [147.4, 209.76],
							a9: [104.88, 147.4],
							a10: [73.7, 104.88],
							b0: [2834.65, 4008.19],
							b1: [2004.09, 2834.65],
							b2: [1417.32, 2004.09],
							b3: [1000.63, 1417.32],
							b4: [708.66, 1000.63],
							b5: [498.9, 708.66],
							b6: [354.33, 498.9],
							b7: [249.45, 354.33],
							b8: [175.75, 249.45],
							b9: [124.72, 175.75],
							b10: [87.87, 124.72],
							c0: [2599.37, 3676.54],
							c1: [1836.85, 2599.37],
							c2: [1298.27, 1836.85],
							c3: [918.43, 1298.27],
							c4: [649.13, 918.43],
							c5: [459.21, 649.13],
							c6: [323.15, 459.21],
							c7: [229.61, 323.15],
							c8: [161.57, 229.61],
							c9: [113.39, 161.57],
							c10: [79.37, 113.39],
							dl: [311.81, 623.62],
							letter: [612, 792],
							"government-letter": [576, 756],
							legal: [612, 1008],
							"junior-legal": [576, 360],
							ledger: [1224, 792],
							tabloid: [792, 1224],
							"credit-card": [153, 243]
						};
						d.__private__.getPageFormats = function() {
							return v
						};
						var m = d.__private__.getPageFormat = function(t) {
							return v[t]
						};
						i = i || "a4";
						var b = {
								COMPAT: "compat",
								ADVANCED: "advanced"
							},
							y = b.COMPAT;

						function w() {
							this.saveGraphicsState(), rt(new Ht(At, 0, 0, -At, 0, qn() * At).toString() + " cm"), this.setFontSize(this.getFontSize() / At), u = "n", y = b.ADVANCED
						}

						function N() {
							this.restoreGraphicsState(), u = "S", y = b.COMPAT
						}
						var L = function(t, e) {
							if ("bold" == t && "normal" == e || "bold" == t && 400 == e || "normal" == t && "italic" == e || "bold" == t && "italic" == e) throw new Error("Invalid Combination of fontweight and fontstyle");
							return e && t !== e && (t = 400 == e ? "italic" == t ? "italic" : "normal" : 700 == e && "italic" !== t ? "bold" : t + "" + e), t
						};
						d.advancedAPI = function(t) {
							var e = y === b.COMPAT;
							return e && w.call(this), "function" != typeof t || (t(this), e && N.call(this)), this
						}, d.compatAPI = function(t) {
							var e = y === b.ADVANCED;
							return e && N.call(this), "function" != typeof t || (t(this), e && w.call(this)), this
						}, d.isAdvancedAPI = function() {
							return y === b.ADVANCED
						};
						var x, A = function(t) {
								if (y !== b.ADVANCED) throw new Error(t + " is only available in 'advanced' API mode. You need to call advancedAPI() first.")
							},
							S = d.roundToPrecision = d.__private__.roundToPrecision = function(t, n) {
								var r = e || n;
								if (isNaN(t) || isNaN(r)) throw new Error("Invalid argument passed to jsPDF.roundToPrecision");
								return t.toFixed(r).replace(/0+$/, "")
							};
						x = d.hpf = d.__private__.hpf = "number" == typeof c ? function(t) {
							if (isNaN(t)) throw new Error("Invalid argument passed to jsPDF.hpf");
							return S(t, c)
						} : "smart" === c ? function(t) {
							if (isNaN(t)) throw new Error("Invalid argument passed to jsPDF.hpf");
							return S(t, t > -1 && t < 1 ? 16 : 5)
						} : function(t) {
							if (isNaN(t)) throw new Error("Invalid argument passed to jsPDF.hpf");
							return S(t, 16)
						};
						var _ = d.f2 = d.__private__.f2 = function(t) {
								if (isNaN(t)) throw new Error("Invalid argument passed to jsPDF.f2");
								return S(t, 2)
							},
							P = d.__private__.f3 = function(t) {
								if (isNaN(t)) throw new Error("Invalid argument passed to jsPDF.f3");
								return S(t, 3)
							},
							k = d.scale = d.__private__.scale = function(t) {
								if (isNaN(t)) throw new Error("Invalid argument passed to jsPDF.scale");
								return y === b.COMPAT ? t * At : y === b.ADVANCED ? t : void 0
							},
							F = function(t) {
								return y === b.COMPAT ? qn() - t : y === b.ADVANCED ? t : void 0
							},
							I = function(t) {
								return k(F(t))
							};
						d.__private__.setPrecision = d.setPrecision = function(t) {
							"number" == typeof parseInt(t, 10) && (e = parseInt(t, 10))
						};
						var C, j = "00000000000000000000000000000000",
							O = d.__private__.getFileId = function() {
								return j
							},
							B = d.__private__.setFileId = function(t) {
								return j = void 0 !== t && /^[a-fA-F0-9]{32}$/.test(t) ? t.toUpperCase() : j.split("").map((function() {
									return "ABCDEF0123456789".charAt(Math.floor(16 * Math.random()))
								})).join(""), null !== l && (Ve = new gt(l.userPermissions, l.userPassword, l.ownerPassword, j)), j
							};
						d.setFileId = function(t) {
							return B(t), this
						}, d.getFileId = function() {
							return O()
						};
						var M = d.__private__.convertDateToPDFDate = function(t) {
								var e = t.getTimezoneOffset(),
									n = e < 0 ? "+" : "-",
									r = Math.floor(Math.abs(e / 60)),
									i = Math.abs(e % 60),
									o = [n, R(r), "'", R(i), "'"].join("");
								return ["D:", t.getFullYear(), R(t.getMonth() + 1), R(t.getDate()), R(t.getHours()), R(t.getMinutes()), R(t.getSeconds()), o].join("")
							},
							E = d.__private__.convertPDFDateToDate = function(t) {
								var e = parseInt(t.substr(2, 4), 10),
									n = parseInt(t.substr(6, 2), 10) - 1,
									r = parseInt(t.substr(8, 2), 10),
									i = parseInt(t.substr(10, 2), 10),
									o = parseInt(t.substr(12, 2), 10),
									a = parseInt(t.substr(14, 2), 10);
								return new Date(e, n, r, i, o, a, 0)
							},
							q = d.__private__.setCreationDate = function(t) {
								var e;
								if (void 0 === t && (t = new Date), t instanceof Date) e = M(t);
								else {
									if (!/^D:(20[0-2][0-9]|203[0-7]|19[7-9][0-9])(0[0-9]|1[0-2])([0-2][0-9]|3[0-1])(0[0-9]|1[0-9]|2[0-3])(0[0-9]|[1-5][0-9])(0[0-9]|[1-5][0-9])(\+0[0-9]|\+1[0-4]|-0[0-9]|-1[0-1])'(0[0-9]|[1-5][0-9])'?$/.test(t)) throw new Error("Invalid argument passed to jsPDF.setCreationDate");
									e = t
								}
								return C = e
							},
							T = d.__private__.getCreationDate = function(t) {
								var e = C;
								return "jsDate" === t && (e = E(C)), e
							};
						d.setCreationDate = function(t) {
							return q(t), this
						}, d.getCreationDate = function(t) {
							return T(t)
						};
						var D, R = d.__private__.padd2 = function(t) {
								return ("0" + parseInt(t)).slice(-2)
							},
							z = d.__private__.padd2Hex = function(t) {
								return ("00" + (t = t.toString())).substr(t.length)
							},
							U = 0,
							H = [],
							V = [],
							Y = 0,
							J = [],
							X = [],
							K = !1,
							tt = V,
							et = function() {
								U = 0, Y = 0, V = [], H = [], J = [], Zt = Jt(), $t = Jt()
							};
						d.__private__.setCustomOutputDestination = function(t) {
							K = !0, tt = t
						};
						var nt = function(t) {
							K || (tt = t)
						};
						d.__private__.resetCustomOutputDestination = function() {
							K = !1, tt = V
						};
						var rt = d.__private__.out = function(t) {
								return t = t.toString(), Y += t.length + 1, tt.push(t), tt
							},
							it = d.__private__.write = function(t) {
								return rt(1 === arguments.length ? t.toString() : Array.prototype.join.call(arguments, " "))
							},
							ot = d.__private__.getArrayBuffer = function(t) {
								for (var e = t.length, n = new ArrayBuffer(e), r = new Uint8Array(n); e--;) r[e] = t.charCodeAt(e);
								return n
							},
							at = [
								["Helvetica", "helvetica", "normal", "WinAnsiEncoding"],
								["Helvetica-Bold", "helvetica", "bold", "WinAnsiEncoding"],
								["Helvetica-Oblique", "helvetica", "italic", "WinAnsiEncoding"],
								["Helvetica-BoldOblique", "helvetica", "bolditalic", "WinAnsiEncoding"],
								["Courier", "courier", "normal", "WinAnsiEncoding"],
								["Courier-Bold", "courier", "bold", "WinAnsiEncoding"],
								["Courier-Oblique", "courier", "italic", "WinAnsiEncoding"],
								["Courier-BoldOblique", "courier", "bolditalic", "WinAnsiEncoding"],
								["Times-Roman", "times", "normal", "WinAnsiEncoding"],
								["Times-Bold", "times", "bold", "WinAnsiEncoding"],
								["Times-Italic", "times", "italic", "WinAnsiEncoding"],
								["Times-BoldItalic", "times", "bolditalic", "WinAnsiEncoding"],
								["ZapfDingbats", "zapfdingbats", "normal", null],
								["Symbol", "symbol", "normal", null]
							];
						d.__private__.getStandardFonts = function() {
							return at
						};
						var st = t.fontSize || 16;
						d.__private__.setFontSize = d.setFontSize = function(t) {
							return st = y === b.ADVANCED ? t / At : t, this
						};
						var ct, ut = d.__private__.getFontSize = d.getFontSize = function() {
								return y === b.COMPAT ? st : st * At
							},
							lt = t.R2L || !1;
						d.__private__.setR2L = d.setR2L = function(t) {
							return lt = t, this
						}, d.__private__.getR2L = d.getR2L = function() {
							return lt
						};
						var ht, ft = d.__private__.setZoomMode = function(t) {
							if (/^\d*\.?\d*%$/.test(t)) ct = t;
							else if (isNaN(t)) {
								if (-1 === [void 0, null, "fullwidth", "fullheight", "fullpage", "original"].indexOf(t)) throw new Error('zoom must be Integer (e.g. 2), a percentage Value (e.g. 300%) or fullwidth, fullheight, fullpage, original. "' + t + '" is not recognized.');
								ct = t
							} else ct = parseInt(t, 10)
						};
						d.__private__.getZoomMode = function() {
							return ct
						};
						var dt, pt = d.__private__.setPageMode = function(t) {
							if (-1 == [void 0, null, "UseNone", "UseOutlines", "UseThumbs", "FullScreen"].indexOf(t)) throw new Error('Page mode must be one of UseNone, UseOutlines, UseThumbs, or FullScreen. "' + t + '" is not recognized.');
							ht = t
						};
						d.__private__.getPageMode = function() {
							return ht
						};
						var bt = d.__private__.setLayoutMode = function(t) {
							if (-1 == [void 0, null, "continuous", "single", "twoleft", "tworight", "two"].indexOf(t)) throw new Error('Layout mode must be one of continuous, single, twoleft, tworight. "' + t + '" is not recognized.');
							dt = t
						};
						d.__private__.getLayoutMode = function() {
							return dt
						}, d.__private__.setDisplayMode = d.setDisplayMode = function(t, e, n) {
							return ft(t), bt(e), pt(n), this
						};
						var Lt = {
							title: "",
							subject: "",
							author: "",
							keywords: "",
							creator: ""
						};
						d.__private__.getDocumentProperty = function(t) {
							if (-1 === Object.keys(Lt).indexOf(t)) throw new Error("Invalid argument passed to jsPDF.getDocumentProperty");
							return Lt[t]
						}, d.__private__.getDocumentProperties = function() {
							return Lt
						}, d.__private__.setDocumentProperties = d.setProperties = d.setDocumentProperties = function(t) {
							for (var e in Lt) Lt.hasOwnProperty(e) && t[e] && (Lt[e] = t[e]);
							return this
						}, d.__private__.setDocumentProperty = function(t, e) {
							if (-1 === Object.keys(Lt).indexOf(t)) throw new Error("Invalid arguments passed to jsPDF.setDocumentProperty");
							return Lt[t] = e
						};
						var xt, At, St, _t, Pt, kt = {},
							Ft = {},
							It = [],
							Ct = {},
							jt = {},
							Ot = {},
							Bt = {},
							Mt = null,
							Et = 0,
							qt = [],
							Tt = new vt(d),
							Dt = t.hotfixes || [],
							Rt = {},
							zt = {},
							Ut = [],
							Ht = function(t, e, n, r, i, o) {
								if (!(this instanceof Ht)) return new Ht(t, e, n, r, i, o);
								isNaN(t) && (t = 1), isNaN(e) && (e = 0), isNaN(n) && (n = 0), isNaN(r) && (r = 1), isNaN(i) && (i = 0), isNaN(o) && (o = 0), this._matrix = [t, e, n, r, i, o]
							};
						Object.defineProperty(Ht.prototype, "sx", {
							get: function() {
								return this._matrix[0]
							},
							set: function(t) {
								this._matrix[0] = t
							}
						}), Object.defineProperty(Ht.prototype, "shy", {
							get: function() {
								return this._matrix[1]
							},
							set: function(t) {
								this._matrix[1] = t
							}
						}), Object.defineProperty(Ht.prototype, "shx", {
							get: function() {
								return this._matrix[2]
							},
							set: function(t) {
								this._matrix[2] = t
							}
						}), Object.defineProperty(Ht.prototype, "sy", {
							get: function() {
								return this._matrix[3]
							},
							set: function(t) {
								this._matrix[3] = t
							}
						}), Object.defineProperty(Ht.prototype, "tx", {
							get: function() {
								return this._matrix[4]
							},
							set: function(t) {
								this._matrix[4] = t
							}
						}), Object.defineProperty(Ht.prototype, "ty", {
							get: function() {
								return this._matrix[5]
							},
							set: function(t) {
								this._matrix[5] = t
							}
						}), Object.defineProperty(Ht.prototype, "a", {
							get: function() {
								return this._matrix[0]
							},
							set: function(t) {
								this._matrix[0] = t
							}
						}), Object.defineProperty(Ht.prototype, "b", {
							get: function() {
								return this._matrix[1]
							},
							set: function(t) {
								this._matrix[1] = t
							}
						}), Object.defineProperty(Ht.prototype, "c", {
							get: function() {
								return this._matrix[2]
							},
							set: function(t) {
								this._matrix[2] = t
							}
						}), Object.defineProperty(Ht.prototype, "d", {
							get: function() {
								return this._matrix[3]
							},
							set: function(t) {
								this._matrix[3] = t
							}
						}), Object.defineProperty(Ht.prototype, "e", {
							get: function() {
								return this._matrix[4]
							},
							set: function(t) {
								this._matrix[4] = t
							}
						}), Object.defineProperty(Ht.prototype, "f", {
							get: function() {
								return this._matrix[5]
							},
							set: function(t) {
								this._matrix[5] = t
							}
						}), Object.defineProperty(Ht.prototype, "rotation", {
							get: function() {
								return Math.atan2(this.shx, this.sx)
							}
						}), Object.defineProperty(Ht.prototype, "scaleX", {
							get: function() {
								return this.decompose().scale.sx
							}
						}), Object.defineProperty(Ht.prototype, "scaleY", {
							get: function() {
								return this.decompose().scale.sy
							}
						}), Object.defineProperty(Ht.prototype, "isIdentity", {
							get: function() {
								return 1 === this.sx && 0 === this.shy && 0 === this.shx && 1 === this.sy && 0 === this.tx && 0 === this.ty
							}
						}), Ht.prototype.join = function(t) {
							return [this.sx, this.shy, this.shx, this.sy, this.tx, this.ty].map(x).join(t)
						}, Ht.prototype.multiply = function(t) {
							var e = t.sx * this.sx + t.shy * this.shx,
								n = t.sx * this.shy + t.shy * this.sy,
								r = t.shx * this.sx + t.sy * this.shx,
								i = t.shx * this.shy + t.sy * this.sy,
								o = t.tx * this.sx + t.ty * this.shx + this.tx,
								a = t.tx * this.shy + t.ty * this.sy + this.ty;
							return new Ht(e, n, r, i, o, a)
						}, Ht.prototype.decompose = function() {
							var t = this.sx,
								e = this.shy,
								n = this.shx,
								r = this.sy,
								i = this.tx,
								o = this.ty,
								a = Math.sqrt(t * t + e * e),
								s = (t /= a) * n + (e /= a) * r;
							n -= t * s, r -= e * s;
							var c = Math.sqrt(n * n + r * r);
							return s /= c, t * (r /= c) < e * (n /= c) && (t = -t, e = -e, s = -s, a = -a), {
								scale: new Ht(a, 0, 0, c, 0, 0),
								translate: new Ht(1, 0, 0, 1, i, o),
								rotate: new Ht(t, e, -e, t, 0, 0),
								skew: new Ht(1, 0, s, 1, 0, 0)
							}
						}, Ht.prototype.toString = function(t) {
							return this.join(" ")
						}, Ht.prototype.inversed = function() {
							var t = this.sx,
								e = this.shy,
								n = this.shx,
								r = this.sy,
								i = this.tx,
								o = this.ty,
								a = 1 / (t * r - e * n),
								s = r * a,
								c = -e * a,
								u = -n * a,
								l = t * a;
							return new Ht(s, c, u, l, -s * i - u * o, -c * i - l * o)
						}, Ht.prototype.applyToPoint = function(t) {
							var e = t.x * this.sx + t.y * this.shx + this.tx,
								n = t.x * this.shy + t.y * this.sy + this.ty;
							return new Fn(e, n)
						}, Ht.prototype.applyToRectangle = function(t) {
							var e = this.applyToPoint(t),
								n = this.applyToPoint(new Fn(t.x + t.w, t.y + t.h));
							return new In(e.x, e.y, n.x - e.x, n.y - e.y)
						}, Ht.prototype.clone = function() {
							var t = this.sx,
								e = this.shy,
								n = this.shx,
								r = this.sy,
								i = this.tx,
								o = this.ty;
							return new Ht(t, e, n, r, i, o)
						}, d.Matrix = Ht;
						var Wt = d.matrixMult = function(t, e) {
								return e.multiply(t)
							},
							Vt = new Ht(1, 0, 0, 1, 0, 0);
						d.unitMatrix = d.identityMatrix = Vt;
						var Gt = function(t, e) {
							if (!jt[t]) {
								var n = (e instanceof yt ? "Sh" : "P") + (Object.keys(Ct).length + 1).toString(10);
								e.id = n, jt[t] = n, Ct[n] = e, Tt.publish("addPattern", e)
							}
						};
						d.ShadingPattern = yt, d.TilingPattern = wt, d.addShadingPattern = function(t, e) {
							return A("addShadingPattern()"), Gt(t, e), this
						}, d.beginTilingPattern = function(t) {
							A("beginTilingPattern()"), jn(t.boundingBox[0], t.boundingBox[1], t.boundingBox[2] - t.boundingBox[0], t.boundingBox[3] - t.boundingBox[1], t.matrix)
						}, d.endTilingPattern = function(t, e) {
							A("endTilingPattern()"), e.stream = X[D].join("\n"), Gt(t, e), Tt.publish("endTilingPattern", e), Ut.pop().restore()
						};
						var Yt = d.__private__.newObject = function() {
								var t = Jt();
								return Xt(t, !0), t
							},
							Jt = d.__private__.newObjectDeferred = function() {
								return U++, H[U] = function() {
									return Y
								}, U
							},
							Xt = function(t, e) {
								return e = "boolean" == typeof e && e, H[t] = Y, e && rt(t + " 0 obj"), t
							},
							Kt = d.__private__.newAdditionalObject = function() {
								var t = {
									objId: Jt(),
									content: ""
								};
								return J.push(t), t
							},
							Zt = Jt(),
							$t = Jt(),
							Qt = d.__private__.decodeColorString = function(t) {
								var e = t.split(" ");
								if (2 !== e.length || "g" !== e[1] && "G" !== e[1]) 5 !== e.length || "k" !== e[4] && "K" !== e[4] || (e = [(1 - e[0]) * (1 - e[3]), (1 - e[1]) * (1 - e[3]), (1 - e[2]) * (1 - e[3]), "r"]);
								else {
									var n = parseFloat(e[0]);
									e = [n, n, n, "r"]
								}
								for (var r = "#", i = 0; i < 3; i++) r += ("0" + Math.floor(255 * parseFloat(e[i])).toString(16)).slice(-2);
								return r
							},
							te = d.__private__.encodeColorString = function(t) {
								var e;
								"string" == typeof t && (t = {
									ch1: t
								});
								var n = t.ch1,
									r = t.ch2,
									i = t.ch3,
									o = t.ch4,
									a = "draw" === t.pdfColorType ? ["G", "RG", "K"] : ["g", "rg", "k"];
								if ("string" == typeof n && "#" !== n.charAt(0)) {
									var s = new Q(n);
									if (s.ok) n = s.toHex();
									else if (!/^\d*\.?\d*$/.test(n)) throw new Error('Invalid color "' + n + '" passed to jsPDF.encodeColorString.')
								}
								if ("string" == typeof n && /^#[0-9A-Fa-f]{3}$/.test(n) && (n = "#" + n[1] + n[1] + n[2] + n[2] + n[3] + n[3]), "string" == typeof n && /^#[0-9A-Fa-f]{6}$/.test(n)) {
									var c = parseInt(n.substr(1), 16);
									n = c >> 16 & 255, r = c >> 8 & 255, i = 255 & c
								}
								if (void 0 === r || void 0 === o && n === r && r === i)
									if ("string" == typeof n) e = n + " " + a[0];
									else switch (t.precision) {
										case 2:
											e = _(n / 255) + " " + a[0];
											break;
										case 3:
										default:
											e = P(n / 255) + " " + a[0]
									} else if (void 0 === o || "object" == typeof o) {
										if (o && !isNaN(o.a) && 0 === o.a) return ["1.", "1.", "1.", a[1]].join(" ");
										if ("string" == typeof n) e = [n, r, i, a[1]].join(" ");
										else switch (t.precision) {
											case 2:
												e = [_(n / 255), _(r / 255), _(i / 255), a[1]].join(" ");
												break;
											default:
											case 3:
												e = [P(n / 255), P(r / 255), P(i / 255), a[1]].join(" ")
										}
									} else if ("string" == typeof n) e = [n, r, i, o, a[2]].join(" ");
								else switch (t.precision) {
									case 2:
										e = [_(n), _(r), _(i), _(o), a[2]].join(" ");
										break;
									case 3:
									default:
										e = [P(n), P(r), P(i), P(o), a[2]].join(" ")
								}
								return e
							},
							ee = d.__private__.getFilters = function() {
								return a
							},
							ne = d.__private__.putStream = function(t) {
								var e = (t = t || {}).data || "",
									n = t.filters || ee(),
									r = t.alreadyAppliedFilters || [],
									i = t.addLength1 || !1,
									o = e.length,
									a = t.objectId,
									s = function(t) {
										return t
									};
								if (null !== l && void 0 === a) throw new Error("ObjectId must be passed to putStream for file encryption");
								null !== l && (s = Ve.encryptor(a, 0));
								var c = {};
								!0 === n && (n = ["FlateEncode"]);
								var u = t.additionalKeyValues || [],
									h = (c = void 0 !== Nt.API.processDataByFilters ? Nt.API.processDataByFilters(e, n) : {
										data: e,
										reverseChain: []
									}).reverseChain + (Array.isArray(r) ? r.join(" ") : r.toString());
								if (0 !== c.data.length && (u.push({
										key: "Length",
										value: c.data.length
									}), !0 === i && u.push({
										key: "Length1",
										value: o
									})), 0 != h.length)
									if (h.split("/").length - 1 == 1) u.push({
										key: "Filter",
										value: h
									});
									else {
										u.push({
											key: "Filter",
											value: "[" + h + "]"
										});
										for (var f = 0; f < u.length; f += 1)
											if ("DecodeParms" === u[f].key) {
												for (var d = [], p = 0; p < c.reverseChain.split("/").length - 1; p += 1) d.push("null");
												d.push(u[f].value), u[f].value = "[" + d.join(" ") + "]"
											}
									} rt("<<");
								for (var g = 0; g < u.length; g++) rt("/" + u[g].key + " " + u[g].value);
								rt(">>"), 0 !== c.data.length && (rt("stream"), rt(s(c.data)), rt("endstream"))
							},
							re = d.__private__.putPage = function(t) {
								var e = t.number,
									n = t.data,
									r = t.objId,
									i = t.contentsObjId;
								Xt(r, !0), rt("<</Type /Page"), rt("/Parent " + t.rootDictionaryObjId + " 0 R"), rt("/Resources " + t.resourceDictionaryObjId + " 0 R"), rt("/MediaBox [" + parseFloat(x(t.mediaBox.bottomLeftX)) + " " + parseFloat(x(t.mediaBox.bottomLeftY)) + " " + x(t.mediaBox.topRightX) + " " + x(t.mediaBox.topRightY) + "]"), null !== t.cropBox && rt("/CropBox [" + x(t.cropBox.bottomLeftX) + " " + x(t.cropBox.bottomLeftY) + " " + x(t.cropBox.topRightX) + " " + x(t.cropBox.topRightY) + "]"), null !== t.bleedBox && rt("/BleedBox [" + x(t.bleedBox.bottomLeftX) + " " + x(t.bleedBox.bottomLeftY) + " " + x(t.bleedBox.topRightX) + " " + x(t.bleedBox.topRightY) + "]"), null !== t.trimBox && rt("/TrimBox [" + x(t.trimBox.bottomLeftX) + " " + x(t.trimBox.bottomLeftY) + " " + x(t.trimBox.topRightX) + " " + x(t.trimBox.topRightY) + "]"), null !== t.artBox && rt("/ArtBox [" + x(t.artBox.bottomLeftX) + " " + x(t.artBox.bottomLeftY) + " " + x(t.artBox.topRightX) + " " + x(t.artBox.topRightY) + "]"), "number" == typeof t.userUnit && 1 !== t.userUnit && rt("/UserUnit " + t.userUnit), Tt.publish("putPage", {
									objId: r,
									pageContext: qt[e],
									pageNumber: e,
									page: n
								}), rt("/Contents " + i + " 0 R"), rt(">>"), rt("endobj");
								var o = n.join("\n");
								return y === b.ADVANCED && (o += "\nQ"), Xt(i, !0), ne({
									data: o,
									filters: ee(),
									objectId: i
								}), rt("endobj"), r
							},
							ie = d.__private__.putPages = function() {
								var t, e, n = [];
								for (t = 1; t <= Et; t++) qt[t].objId = Jt(), qt[t].contentsObjId = Jt();
								for (t = 1; t <= Et; t++) n.push(re({
									number: t,
									data: X[t],
									objId: qt[t].objId,
									contentsObjId: qt[t].contentsObjId,
									mediaBox: qt[t].mediaBox,
									cropBox: qt[t].cropBox,
									bleedBox: qt[t].bleedBox,
									trimBox: qt[t].trimBox,
									artBox: qt[t].artBox,
									userUnit: qt[t].userUnit,
									rootDictionaryObjId: Zt,
									resourceDictionaryObjId: $t
								}));
								Xt(Zt, !0), rt("<</Type /Pages");
								var r = "/Kids [";
								for (e = 0; e < Et; e++) r += n[e] + " 0 R ";
								rt(r + "]"), rt("/Count " + Et), rt(">>"), rt("endobj"), Tt.publish("postPutPages")
							},
							oe = function(t) {
								var e = function(t, e) {
									return -1 !== t.indexOf(" ") ? "(" + Fe(t, e) + ")" : Fe(t, e)
								};
								Tt.publish("putFont", {
									font: t,
									out: rt,
									newObject: Yt,
									putStream: ne,
									pdfEscapeWithNeededParanthesis: e
								}), !0 !== t.isAlreadyPutted && (t.objectNumber = Yt(), rt("<<"), rt("/Type /Font"), rt("/BaseFont /" + e(t.postScriptName)), rt("/Subtype /Type1"), "string" == typeof t.encoding && rt("/Encoding /" + t.encoding), rt("/FirstChar 32"), rt("/LastChar 255"), rt(">>"), rt("endobj"))
							},
							ae = function() {
								for (var t in kt) kt.hasOwnProperty(t) && (!1 === h || !0 === h && f.hasOwnProperty(t)) && oe(kt[t])
							},
							se = function(t) {
								t.objectNumber = Yt();
								var e = [];
								e.push({
									key: "Type",
									value: "/XObject"
								}), e.push({
									key: "Subtype",
									value: "/Form"
								}), e.push({
									key: "BBox",
									value: "[" + [x(t.x), x(t.y), x(t.x + t.width), x(t.y + t.height)].join(" ") + "]"
								}), e.push({
									key: "Matrix",
									value: "[" + t.matrix.toString() + "]"
								});
								var n = t.pages[1].join("\n");
								ne({
									data: n,
									additionalKeyValues: e,
									objectId: t.objectNumber
								}), rt("endobj")
							},
							ce = function() {
								for (var t in Rt) Rt.hasOwnProperty(t) && se(Rt[t])
							},
							ue = function(t, e) {
								var n, r = [],
									i = 1 / (e - 1);
								for (n = 0; n < 1; n += i) r.push(n);
								if (r.push(1), 0 != t[0].offset) {
									var o = {
										offset: 0,
										color: t[0].color
									};
									t.unshift(o)
								}
								if (1 != t[t.length - 1].offset) {
									var a = {
										offset: 1,
										color: t[t.length - 1].color
									};
									t.push(a)
								}
								for (var s = "", c = 0, u = 0; u < r.length; u++) {
									for (n = r[u]; n > t[c + 1].offset;) c++;
									var l = t[c].offset,
										h = (n - l) / (t[c + 1].offset - l),
										f = t[c].color,
										d = t[c + 1].color;
									s += z(Math.round((1 - h) * f[0] + h * d[0]).toString(16)) + z(Math.round((1 - h) * f[1] + h * d[1]).toString(16)) + z(Math.round((1 - h) * f[2] + h * d[2]).toString(16))
								}
								return s.trim()
							},
							le = function(t, e) {
								e || (e = 21);
								var n = Yt(),
									r = ue(t.colors, e),
									i = [];
								i.push({
									key: "FunctionType",
									value: "0"
								}), i.push({
									key: "Domain",
									value: "[0.0 1.0]"
								}), i.push({
									key: "Size",
									value: "[" + e + "]"
								}), i.push({
									key: "BitsPerSample",
									value: "8"
								}), i.push({
									key: "Range",
									value: "[0.0 1.0 0.0 1.0 0.0 1.0]"
								}), i.push({
									key: "Decode",
									value: "[0.0 1.0 0.0 1.0 0.0 1.0]"
								}), ne({
									data: r,
									additionalKeyValues: i,
									alreadyAppliedFilters: ["/ASCIIHexDecode"],
									objectId: n
								}), rt("endobj"), t.objectNumber = Yt(), rt("<< /ShadingType " + t.type), rt("/ColorSpace /DeviceRGB");
								var o = "/Coords [" + x(parseFloat(t.coords[0])) + " " + x(parseFloat(t.coords[1])) + " ";
								2 === t.type ? o += x(parseFloat(t.coords[2])) + " " + x(parseFloat(t.coords[3])) : o += x(parseFloat(t.coords[2])) + " " + x(parseFloat(t.coords[3])) + " " + x(parseFloat(t.coords[4])) + " " + x(parseFloat(t.coords[5])), rt(o += "]"), t.matrix && rt("/Matrix [" + t.matrix.toString() + "]"), rt("/Function " + n + " 0 R"), rt("/Extend [true true]"), rt(">>"), rt("endobj")
							},
							he = function(t, e) {
								var n = Jt(),
									r = Yt();
								e.push({
									resourcesOid: n,
									objectOid: r
								}), t.objectNumber = r;
								var i = [];
								i.push({
									key: "Type",
									value: "/Pattern"
								}), i.push({
									key: "PatternType",
									value: "1"
								}), i.push({
									key: "PaintType",
									value: "1"
								}), i.push({
									key: "TilingType",
									value: "1"
								}), i.push({
									key: "BBox",
									value: "[" + t.boundingBox.map(x).join(" ") + "]"
								}), i.push({
									key: "XStep",
									value: x(t.xStep)
								}), i.push({
									key: "YStep",
									value: x(t.yStep)
								}), i.push({
									key: "Resources",
									value: n + " 0 R"
								}), t.matrix && i.push({
									key: "Matrix",
									value: "[" + t.matrix.toString() + "]"
								}), ne({
									data: t.stream,
									additionalKeyValues: i,
									objectId: t.objectNumber
								}), rt("endobj")
							},
							fe = function(t) {
								var e;
								for (e in Ct) Ct.hasOwnProperty(e) && (Ct[e] instanceof yt ? le(Ct[e]) : Ct[e] instanceof wt && he(Ct[e], t))
							},
							de = function(t) {
								for (var e in t.objectNumber = Yt(), rt("<<"), t) switch (e) {
									case "opacity":
										rt("/ca " + _(t[e]));
										break;
									case "stroke-opacity":
										rt("/CA " + _(t[e]))
								}
								rt(">>"), rt("endobj")
							},
							pe = function() {
								var t;
								for (t in Ot) Ot.hasOwnProperty(t) && de(Ot[t])
							},
							ge = function() {
								for (var t in rt("/XObject <<"), Rt) Rt.hasOwnProperty(t) && Rt[t].objectNumber >= 0 && rt("/" + t + " " + Rt[t].objectNumber + " 0 R");
								Tt.publish("putXobjectDict"), rt(">>")
							},
							ve = function() {
								Ve.oid = Yt(), rt("<<"), rt("/Filter /Standard"), rt("/V " + Ve.v), rt("/R " + Ve.r), rt("/U <" + Ve.toHexString(Ve.U) + ">"), rt("/O <" + Ve.toHexString(Ve.O) + ">"), rt("/P " + Ve.P), rt(">>"), rt("endobj")
							},
							me = function() {
								for (var t in rt("/Font <<"), kt) kt.hasOwnProperty(t) && (!1 === h || !0 === h && f.hasOwnProperty(t)) && rt("/" + t + " " + kt[t].objectNumber + " 0 R");
								rt(">>")
							},
							be = function() {
								if (Object.keys(Ct).length > 0) {
									for (var t in rt("/Shading <<"), Ct) Ct.hasOwnProperty(t) && Ct[t] instanceof yt && Ct[t].objectNumber >= 0 && rt("/" + t + " " + Ct[t].objectNumber + " 0 R");
									Tt.publish("putShadingPatternDict"), rt(">>")
								}
							},
							ye = function(t) {
								if (Object.keys(Ct).length > 0) {
									for (var e in rt("/Pattern <<"), Ct) Ct.hasOwnProperty(e) && Ct[e] instanceof d.TilingPattern && Ct[e].objectNumber >= 0 && Ct[e].objectNumber < t && rt("/" + e + " " + Ct[e].objectNumber + " 0 R");
									Tt.publish("putTilingPatternDict"), rt(">>")
								}
							},
							we = function() {
								if (Object.keys(Ot).length > 0) {
									var t;
									for (t in rt("/ExtGState <<"), Ot) Ot.hasOwnProperty(t) && Ot[t].objectNumber >= 0 && rt("/" + t + " " + Ot[t].objectNumber + " 0 R");
									Tt.publish("putGStateDict"), rt(">>")
								}
							},
							Ne = function(t) {
								Xt(t.resourcesOid, !0), rt("<<"), rt("/ProcSet [/PDF /Text /ImageB /ImageC /ImageI]"), me(), be(), ye(t.objectOid), we(), ge(), rt(">>"), rt("endobj")
							},
							Le = function() {
								var t = [];
								ae(), pe(), ce(), fe(t), Tt.publish("putResources"), t.forEach(Ne), Ne({
									resourcesOid: $t,
									objectOid: Number.MAX_SAFE_INTEGER
								}), Tt.publish("postPutResources")
							},
							xe = function() {
								Tt.publish("putAdditionalObjects");
								for (var t = 0; t < J.length; t++) {
									var e = J[t];
									Xt(e.objId, !0), rt(e.content), rt("endobj")
								}
								Tt.publish("postPutAdditionalObjects")
							},
							Ae = function(t) {
								Ft[t.fontName] = Ft[t.fontName] || {}, Ft[t.fontName][t.fontStyle] = t.id
							},
							Se = function(t, e, n, r, i) {
								var o = {
									id: "F" + (Object.keys(kt).length + 1).toString(10),
									postScriptName: t,
									fontName: e,
									fontStyle: n,
									encoding: r,
									isStandardFont: i || !1,
									metadata: {}
								};
								return Tt.publish("addFont", {
									font: o,
									instance: this
								}), kt[o.id] = o, Ae(o), o.id
							},
							_e = function(t) {
								for (var e = 0, n = at.length; e < n; e++) {
									var r = Se.call(this, t[e][0], t[e][1], t[e][2], at[e][3], !0);
									!1 === h && (f[r] = !0);
									var i = t[e][0].split("-");
									Ae({
										id: r,
										fontName: i[0],
										fontStyle: i[1] || ""
									})
								}
								Tt.publish("addFonts", {
									fonts: kt,
									dictionary: Ft
								})
							},
							Pe = function(t) {
								return t.foo = function() {
									try {
										return t.apply(this, arguments)
									} catch (t) {
										var e = t.stack || "";
										~e.indexOf(" at ") && (e = e.split(" at ")[1]);
										var n = "Error in function " + e.split("\n")[0].split("<")[0] + ": " + t.message;
										if (!W.console) throw new Error(n);
										W.console.error(n, t), W.alert && alert(n)
									}
								}, t.foo.bar = t, t.foo
							},
							ke = function(t, e) {
								var n, r, i, o, a, s, c, u, l;
								if (i = (e = e || {}).sourceEncoding || "Unicode", a = e.outputEncoding, (e.autoencode || a) && kt[xt].metadata && kt[xt].metadata[i] && kt[xt].metadata[i].encoding && (o = kt[xt].metadata[i].encoding, !a && kt[xt].encoding && (a = kt[xt].encoding), !a && o.codePages && (a = o.codePages[0]), "string" == typeof a && (a = o[a]), a)) {
									for (c = !1, s = [], n = 0, r = t.length; n < r; n++)(u = a[t.charCodeAt(n)]) ? s.push(String.fromCharCode(u)) : s.push(t[n]), s[n].charCodeAt(0) >> 8 && (c = !0);
									t = s.join("")
								}
								for (n = t.length; void 0 === c && 0 !== n;) t.charCodeAt(n - 1) >> 8 && (c = !0), n--;
								if (!c) return t;
								for (s = e.noBOM ? [] : [254, 255], n = 0, r = t.length; n < r; n++) {
									if ((l = (u = t.charCodeAt(n)) >> 8) >> 8) throw new Error("Character at position " + n + " of string '" + t + "' exceeds 16bits. Cannot be encoded into UCS-2 BE");
									s.push(l), s.push(u - (l << 8))
								}
								return String.fromCharCode.apply(void 0, s)
							},
							Fe = d.__private__.pdfEscape = d.pdfEscape = function(t, e) {
								return ke(t, e).replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)")
							},
							Ie = d.__private__.beginPage = function(t) {
								X[++Et] = [], qt[Et] = {
									objId: 0,
									contentsObjId: 0,
									userUnit: Number(s),
									artBox: null,
									bleedBox: null,
									cropBox: null,
									trimBox: null,
									mediaBox: {
										bottomLeftX: 0,
										bottomLeftY: 0,
										topRightX: Number(t[0]),
										topRightY: Number(t[1])
									}
								}, Oe(Et), nt(X[D])
							},
							Ce = function(t, e) {
								var r, o, a;
								switch (n = e || n, "string" == typeof t && (r = m(t.toLowerCase()), Array.isArray(r) && (o = r[0], a = r[1])), Array.isArray(t) && (o = t[0] * At, a = t[1] * At), isNaN(o) && (o = i[0], a = i[1]), (o > 14400 || a > 14400) && (G.warn("A page in a PDF can not be wider or taller than 14400 userUnit. jsPDF limits the width/height to 14400"), o = Math.min(14400, o), a = Math.min(14400, a)), i = [o, a], n.substr(0, 1)) {
									case "l":
										a > o && (i = [a, o]);
										break;
									case "p":
										o > a && (i = [a, o])
								}
								Ie(i), fn(hn), rt(wn), 0 !== _n && rt(_n + " J"), 0 !== Pn && rt(Pn + " j"), Tt.publish("addPage", {
									pageNumber: Et
								})
							},
							je = function(t) {
								t > 0 && t <= Et && (X.splice(t, 1), qt.splice(t, 1), Et--, D > Et && (D = Et), this.setPage(D))
							},
							Oe = function(t) {
								t > 0 && t <= Et && (D = t)
							},
							Be = d.__private__.getNumberOfPages = d.getNumberOfPages = function() {
								return X.length - 1
							},
							Me = function(t, e, n) {
								var r, i = void 0;
								return n = n || {}, t = void 0 !== t ? t : kt[xt].fontName, e = void 0 !== e ? e : kt[xt].fontStyle, r = t.toLowerCase(), void 0 !== Ft[r] && void 0 !== Ft[r][e] ? i = Ft[r][e] : void 0 !== Ft[t] && void 0 !== Ft[t][e] ? i = Ft[t][e] : !1 === n.disableWarning && G.warn("Unable to look up font label for font '" + t + "', '" + e + "'. Refer to getFontList() for available fonts."), i || n.noFallback || null == (i = Ft.times[e]) && (i = Ft.times.normal), i
							},
							Ee = d.__private__.putInfo = function() {
								var t = Yt(),
									e = function(t) {
										return t
									};
								for (var n in null !== l && (e = Ve.encryptor(t, 0)), rt("<<"), rt("/Producer (" + Fe(e("jsPDF " + Nt.version)) + ")"), Lt) Lt.hasOwnProperty(n) && Lt[n] && rt("/" + n.substr(0, 1).toUpperCase() + n.substr(1) + " (" + Fe(e(Lt[n])) + ")");
								rt("/CreationDate (" + Fe(e(C)) + ")"), rt(">>"), rt("endobj")
							},
							qe = d.__private__.putCatalog = function(t) {
								var e = (t = t || {}).rootDictionaryObjId || Zt;
								switch (Yt(), rt("<<"), rt("/Type /Catalog"), rt("/Pages " + e + " 0 R"), ct || (ct = "fullwidth"), ct) {
									case "fullwidth":
										rt("/OpenAction [3 0 R /FitH null]");
										break;
									case "fullheight":
										rt("/OpenAction [3 0 R /FitV null]");
										break;
									case "fullpage":
										rt("/OpenAction [3 0 R /Fit]");
										break;
									case "original":
										rt("/OpenAction [3 0 R /XYZ null null 1]");
										break;
									default:
										var n = "" + ct;
										"%" === n.substr(n.length - 1) && (ct = parseInt(ct) / 100), "number" == typeof ct && rt("/OpenAction [3 0 R /XYZ null null " + _(ct) + "]")
								}
								switch (dt || (dt = "continuous"), dt) {
									case "continuous":
										rt("/PageLayout /OneColumn");
										break;
									case "single":
										rt("/PageLayout /SinglePage");
										break;
									case "two":
									case "twoleft":
										rt("/PageLayout /TwoColumnLeft");
										break;
									case "tworight":
										rt("/PageLayout /TwoColumnRight")
								}
								ht && rt("/PageMode /" + ht), Tt.publish("putCatalog"), rt(">>"), rt("endobj")
							},
							Te = d.__private__.putTrailer = function() {
								rt("trailer"), rt("<<"), rt("/Size " + (U + 1)), rt("/Root " + U + " 0 R"), rt("/Info " + (U - 1) + " 0 R"), null !== l && rt("/Encrypt " + Ve.oid + " 0 R"), rt("/ID [ <" + j + "> <" + j + "> ]"), rt(">>")
							},
							De = d.__private__.putHeader = function() {
								rt("%PDF-" + p), rt("%ºß¬à")
							},
							Re = d.__private__.putXRef = function() {
								var t = "0000000000";
								rt("xref"), rt("0 " + (U + 1)), rt("0000000000 65535 f ");
								for (var e = 1; e <= U; e++) "function" == typeof H[e] ? rt((t + H[e]()).slice(-10) + " 00000 n ") : void 0 !== H[e] ? rt((t + H[e]).slice(-10) + " 00000 n ") : rt("0000000000 00000 n ")
							},
							ze = d.__private__.buildDocument = function() {
								et(), nt(V), Tt.publish("buildDocument"), De(), ie(), xe(), Le(), null !== l && ve(), Ee(), qe();
								var t = Y;
								return Re(), Te(), rt("startxref"), rt("" + t), rt("%%EOF"), nt(X[D]), V.join("\n")
							},
							Ue = d.__private__.getBlob = function(t) {
								return new Blob([ot(t)], {
									type: "application/pdf"
								})
							},
							He = d.output = d.__private__.output = Pe((function(t, e) {
								switch ("string" == typeof(e = e || {}) ? e = {
										filename: e
									} : e.filename = e.filename || "generated.pdf", t) {
									case void 0:
										return ze();
									case "save":
										d.save(e.filename);
										break;
									case "arraybuffer":
										return ot(ze());
									case "blob":
										return Ue(ze());
									case "bloburi":
									case "bloburl":
										if (void 0 !== W.URL && "function" == typeof W.URL.createObjectURL) return W.URL && W.URL.createObjectURL(Ue(ze())) || void 0;
										G.warn("bloburl is not supported by your system, because URL.createObjectURL is not supported by your browser.");
										break;
									case "datauristring":
									case "dataurlstring":
										var n = "",
											r = ze();
										try {
											n = Z(r)
										} catch (t) {
											n = Z(unescape(encodeURIComponent(r)))
										}
										return "data:application/pdf;filename=" + e.filename + ";base64," + n;
									case "pdfobjectnewwindow":
										if ("[object Window]" === Object.prototype.toString.call(W)) {
											var i = '<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><script src="' + (e.pdfObjectUrl || "https://cdnjs.cloudflare.com/ajax/libs/pdfobject/2.1.1/pdfobject.min.js") + '"><\/script><script >PDFObject.embed("' + this.output("dataurlstring") + '", ' + JSON.stringify(e) + ");<\/script></body></html>",
												o = W.open();
											return null !== o && o.document.write(i), o
										}
										throw new Error("The option pdfobjectnewwindow just works in a browser-environment.");
									case "pdfjsnewwindow":
										if ("[object Window]" === Object.prototype.toString.call(W)) {
											var a = '<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><iframe id="pdfViewer" src="' + (e.pdfJsUrl || "examples/PDF.js/web/viewer.html") + "?file=&downloadName=" + e.filename + '" width="500px" height="400px" /></body></html>',
												s = W.open();
											if (null !== s) {
												s.document.write(a);
												var c = this;
												s.document.documentElement.querySelector("#pdfViewer").onload = function() {
													s.document.title = e.filename, s.document.documentElement.querySelector("#pdfViewer").contentWindow.PDFViewerApplication.open(c.output("bloburl"))
												}
											}
											return s
										}
										throw new Error("The option pdfjsnewwindow just works in a browser-environment.");
									case "dataurlnewwindow":
										if ("[object Window]" !== Object.prototype.toString.call(W)) throw new Error("The option dataurlnewwindow just works in a browser-environment.");
										var u = '<html><style>html, body { padding: 0; margin: 0; } iframe { width: 100%; height: 100%; border: 0;}  </style><body><iframe src="' + this.output("datauristring", e) + '"></iframe></body></html>',
											l = W.open();
										if (null !== l && (l.document.write(u), l.document.title = e.filename), l || "undefined" == typeof safari) return l;
										break;
									case "datauri":
									case "dataurl":
										return W.document.location.href = this.output("datauristring", e);
									default:
										return null
								}
							})),
							We = function(t) {
								return !0 === Array.isArray(Dt) && Dt.indexOf(t) > -1
							};
						switch (r) {
							case "pt":
								At = 1;
								break;
							case "mm":
								At = 72 / 25.4;
								break;
							case "cm":
								At = 72 / 2.54;
								break;
							case "in":
								At = 72;
								break;
							case "px":
								At = 1 == We("px_scaling") ? .75 : 96 / 72;
								break;
							case "pc":
							case "em":
								At = 12;
								break;
							case "ex":
								At = 6;
								break;
							default:
								throw new Error("Invalid unit: " + r)
						}
						var Ve = null;
						q(), B();
						var Ge = function(t) {
								return null !== l ? Ve.encryptor(t, 0) : function(t) {
									return t
								}
							},
							Ye = d.__private__.getPageInfo = d.getPageInfo = function(t) {
								if (isNaN(t) || t % 1 != 0) throw new Error("Invalid argument passed to jsPDF.getPageInfo");
								return {
									objId: qt[t].objId,
									pageNumber: t,
									pageContext: qt[t]
								}
							},
							Je = d.__private__.getPageInfoByObjId = function(t) {
								if (isNaN(t) || t % 1 != 0) throw new Error("Invalid argument passed to jsPDF.getPageInfoByObjId");
								for (var e in qt)
									if (qt[e].objId === t) break;
								return Ye(e)
							},
							Xe = d.__private__.getCurrentPageInfo = d.getCurrentPageInfo = function() {
								return {
									objId: qt[D].objId,
									pageNumber: D,
									pageContext: qt[D]
								}
							};
						d.addPage = function() {
							return Ce.apply(this, arguments), this
						}, d.setPage = function() {
							return Oe.apply(this, arguments), nt.call(this, X[D]), this
						}, d.insertPage = function(t) {
							return this.addPage(), this.movePage(D, t), this
						}, d.movePage = function(t, e) {
							var n, r;
							if (t > e) {
								n = X[t], r = qt[t];
								for (var i = t; i > e; i--) X[i] = X[i - 1], qt[i] = qt[i - 1];
								X[e] = n, qt[e] = r, this.setPage(e)
							} else if (t < e) {
								n = X[t], r = qt[t];
								for (var o = t; o < e; o++) X[o] = X[o + 1], qt[o] = qt[o + 1];
								X[e] = n, qt[e] = r, this.setPage(e)
							}
							return this
						}, d.deletePage = function() {
							return je.apply(this, arguments), this
						}, d.__private__.text = d.text = function(t, e, n, r, i) {
							var o, a, s, c, u, l, h, d, p = (r = r || {}).scope || this;
							if ("number" == typeof t && "number" == typeof e && ("string" == typeof n || Array.isArray(n))) {
								var g = n;
								n = e, e = t, t = g
							}
							if (arguments[3] instanceof Ht == 0 ? (s = arguments[4], c = arguments[5], "object" == typeof(h = arguments[3]) && null !== h || ("string" == typeof s && (c = s, s = null), "string" == typeof h && (c = h, h = null), "number" == typeof h && (s = h, h = null), r = {
									flags: h,
									angle: s,
									align: c
								})) : (A("The transform parameter of text() with a Matrix value"), d = i), isNaN(e) || isNaN(n) || null == t) throw new Error("Invalid arguments passed to jsPDF.text");
							if (0 === t.length) return p;
							var v = "",
								m = !1,
								w = "number" == typeof r.lineHeightFactor ? r.lineHeightFactor : ln,
								N = p.internal.scaleFactor;

							function L(t) {
								return t = t.split("\t").join(Array(r.TabLen || 9).join(" ")), Fe(t, h)
							}

							function S(t) {
								for (var e, n = t.concat(), r = [], i = n.length; i--;) "string" == typeof(e = n.shift()) ? r.push(e) : Array.isArray(t) && (1 === e.length || void 0 === e[1] && void 0 === e[2]) ? r.push(e[0]) : r.push([e[0], e[1], e[2]]);
								return r
							}

							function _(t, e) {
								var n;
								if ("string" == typeof t) n = e(t)[0];
								else if (Array.isArray(t)) {
									for (var r, i, o = t.concat(), a = [], s = o.length; s--;) "string" == typeof(r = o.shift()) ? a.push(e(r)[0]) : Array.isArray(r) && "string" == typeof r[0] && (i = e(r[0], r[1], r[2]), a.push([i[0], i[1], i[2]]));
									n = a
								}
								return n
							}
							var P = !1,
								F = !0;
							if ("string" == typeof t) P = !0;
							else if (Array.isArray(t)) {
								var I = t.concat();
								a = [];
								for (var C, j = I.length; j--;)("string" != typeof(C = I.shift()) || Array.isArray(C) && "string" != typeof C[0]) && (F = !1);
								P = F
							}
							if (!1 === P) throw new Error('Type of text must be string or Array. "' + t + '" is not recognized.');
							"string" == typeof t && (t = t.match(/[\r?\n]/) ? t.split(/\r\n|\r|\n/g) : [t]);
							var O = st / p.internal.scaleFactor,
								B = O * (ln - 1);
							switch (r.baseline) {
								case "bottom":
									n -= B;
									break;
								case "top":
									n += O - B;
									break;
								case "hanging":
									n += O - 2 * B;
									break;
								case "middle":
									n += O / 2 - B
							}
							if ((l = r.maxWidth || 0) > 0 && ("string" == typeof t ? t = p.splitTextToSize(t, l) : "[object Array]" === Object.prototype.toString.call(t) && (t = t.reduce((function(t, e) {
									return t.concat(p.splitTextToSize(e, l))
								}), []))), o = {
									text: t,
									x: e,
									y: n,
									options: r,
									mutex: {
										pdfEscape: Fe,
										activeFontKey: xt,
										fonts: kt,
										activeFontSize: st
									}
								}, Tt.publish("preProcessText", o), t = o.text, s = (r = o.options).angle, d instanceof Ht == 0 && s && "number" == typeof s) {
								s *= Math.PI / 180, 0 === r.rotationDirection && (s = -s), y === b.ADVANCED && (s = -s);
								var M = Math.cos(s),
									E = Math.sin(s);
								d = new Ht(M, E, -E, M, 0, 0)
							} else s && s instanceof Ht && (d = s);
							y !== b.ADVANCED || d || (d = Vt), void 0 !== (u = r.charSpace || An) && (v += x(k(u)) + " Tc\n", this.setCharSpace(this.getCharSpace() || 0)), r.lang;
							var q = -1,
								T = void 0 !== r.renderingMode ? r.renderingMode : r.stroke,
								D = p.internal.getCurrentPageInfo().pageContext;
							switch (T) {
								case 0:
								case !1:
								case "fill":
									q = 0;
									break;
								case 1:
								case !0:
								case "stroke":
									q = 1;
									break;
								case 2:
								case "fillThenStroke":
									q = 2;
									break;
								case 3:
								case "invisible":
									q = 3;
									break;
								case 4:
								case "fillAndAddForClipping":
									q = 4;
									break;
								case 5:
								case "strokeAndAddPathForClipping":
									q = 5;
									break;
								case 6:
								case "fillThenStrokeAndAddToPathForClipping":
									q = 6;
									break;
								case 7:
								case "addToPathForClipping":
									q = 7
							}
							var R = void 0 !== D.usedRenderingMode ? D.usedRenderingMode : -1; - 1 !== q ? v += q + " Tr\n" : -1 !== R && (v += "0 Tr\n"), -1 !== q && (D.usedRenderingMode = q), c = r.align || "left";
							var z, U = st * w,
								H = p.internal.pageSize.getWidth(),
								W = kt[xt];
							u = r.charSpace || An, l = r.maxWidth || 0, h = Object.assign({
								autoencode: !0,
								noBOM: !0
							}, r.flags);
							var V = [];
							if ("[object Array]" === Object.prototype.toString.call(t)) {
								var G;
								a = S(t), "left" !== c && (z = a.map((function(t) {
									return p.getStringUnitWidth(t, {
										font: W,
										charSpace: u,
										fontSize: st,
										doKerning: !1
									}) * st / N
								})));
								var Y, J = 0;
								if ("right" === c) {
									e -= z[0], t = [], j = a.length;
									for (var X = 0; X < j; X++) 0 === X ? (Y = vn(e), G = mn(n)) : (Y = k(J - z[X]), G = -U), t.push([a[X], Y, G]), J = z[X]
								} else if ("center" === c) {
									e -= z[0] / 2, t = [], j = a.length;
									for (var K = 0; K < j; K++) 0 === K ? (Y = vn(e), G = mn(n)) : (Y = k((J - z[K]) / 2), G = -U), t.push([a[K], Y, G]), J = z[K]
								} else if ("left" === c) {
									t = [], j = a.length;
									for (var Z = 0; Z < j; Z++) t.push(a[Z])
								} else {
									if ("justify" !== c) throw new Error('Unrecognized alignment option, use "left", "center", "right" or "justify".');
									t = [], j = a.length, l = 0 !== l ? l : H;
									for (var $ = 0; $ < j; $++) G = 0 === $ ? mn(n) : -U, Y = 0 === $ ? vn(e) : 0, $ < j - 1 && V.push(x(k((l - z[$]) / (a[$].split(" ").length - 1)))), t.push([a[$], Y, G])
								}
							}
							var Q = "boolean" == typeof r.R2L ? r.R2L : lt;
							!0 === Q && (t = _(t, (function(t, e, n) {
								return [t.split("").reverse().join(""), e, n]
							}))), o = {
								text: t,
								x: e,
								y: n,
								options: r,
								mutex: {
									pdfEscape: Fe,
									activeFontKey: xt,
									fonts: kt,
									activeFontSize: st
								}
							}, Tt.publish("postProcessText", o), t = o.text, m = o.mutex.isHex || !1;
							var tt = kt[xt].encoding;
							"WinAnsiEncoding" !== tt && "StandardEncoding" !== tt || (t = _(t, (function(t, e, n) {
								return [L(t), e, n]
							}))), a = S(t), t = [];
							for (var et, nt, it, ot = 0, at = 1, ct = Array.isArray(a[0]) ? at : ot, ut = "", ht = function(t, e, n) {
									var i = "";
									return n instanceof Ht ? (n = "number" == typeof r.angle ? Wt(n, new Ht(1, 0, 0, 1, t, e)) : Wt(new Ht(1, 0, 0, 1, t, e), n), y === b.ADVANCED && (n = Wt(new Ht(1, 0, 0, -1, 0, 0), n)), i = n.join(" ") + " Tm\n") : i = x(t) + " " + x(e) + " Td\n", i
								}, ft = 0; ft < a.length; ft++) {
								switch (ut = "", ct) {
									case at:
										it = (m ? "<" : "(") + a[ft][0] + (m ? ">" : ")"), et = parseFloat(a[ft][1]), nt = parseFloat(a[ft][2]);
										break;
									case ot:
										it = (m ? "<" : "(") + a[ft] + (m ? ">" : ")"), et = vn(e), nt = mn(n)
								}
								void 0 !== V && void 0 !== V[ft] && (ut = V[ft] + " Tw\n"), 0 === ft ? t.push(ut + ht(et, nt, d) + it) : ct === ot ? t.push(ut + it) : ct === at && t.push(ut + ht(et, nt, d) + it)
							}
							t = ct === ot ? t.join(" Tj\nT* ") : t.join(" Tj\n"), t += " Tj\n";
							var dt = "BT\n/";
							return dt += xt + " " + st + " Tf\n", dt += x(st * w) + " TL\n", dt += Ln + "\n", dt += v, dt += t, rt(dt += "ET"), f[xt] = !0, p
						};
						var Ke = d.__private__.clip = d.clip = function(t) {
							return rt("evenodd" === t ? "W*" : "W"), this
						};
						d.clipEvenOdd = function() {
							return Ke("evenodd")
						}, d.__private__.discardPath = d.discardPath = function() {
							return rt("n"), this
						};
						var Ze = d.__private__.isValidStyle = function(t) {
							var e = !1;
							return -1 !== [void 0, null, "S", "D", "F", "DF", "FD", "f", "f*", "B", "B*", "n"].indexOf(t) && (e = !0), e
						};
						d.__private__.setDefaultPathOperation = d.setDefaultPathOperation = function(t) {
							return Ze(t) && (u = t), this
						};
						var $e = d.__private__.getStyle = d.getStyle = function(t) {
								var e = u;
								switch (t) {
									case "D":
									case "S":
										e = "S";
										break;
									case "F":
										e = "f";
										break;
									case "FD":
									case "DF":
										e = "B";
										break;
									case "f":
									case "f*":
									case "B":
									case "B*":
										e = t
								}
								return e
							},
							Qe = d.close = function() {
								return rt("h"), this
							};
						d.stroke = function() {
							return rt("S"), this
						}, d.fill = function(t) {
							return tn("f", t), this
						}, d.fillEvenOdd = function(t) {
							return tn("f*", t), this
						}, d.fillStroke = function(t) {
							return tn("B", t), this
						}, d.fillStrokeEvenOdd = function(t) {
							return tn("B*", t), this
						};
						var tn = function(t, e) {
								"object" == typeof e ? rn(e, t) : rt(t)
							},
							en = function(t) {
								null === t || y === b.ADVANCED && void 0 === t || (t = $e(t), rt(t))
							};

						function nn(t, e, n, r, i) {
							var o = new wt(e || this.boundingBox, n || this.xStep, r || this.yStep, this.gState, i || this.matrix);
							o.stream = this.stream;
							var a = t + "$$" + this.cloneIndex++ + "$$";
							return Gt(a, o), o
						}
						var rn = function(t, e) {
								var n = jt[t.key],
									r = Ct[n];
								if (r instanceof yt) rt("q"), rt(on(e)), r.gState && d.setGState(r.gState), rt(t.matrix.toString() + " cm"), rt("/" + n + " sh"), rt("Q");
								else if (r instanceof wt) {
									var i = new Ht(1, 0, 0, -1, 0, qn());
									t.matrix && (i = i.multiply(t.matrix || Vt), n = nn.call(r, t.key, t.boundingBox, t.xStep, t.yStep, i).id), rt("q"), rt("/Pattern cs"), rt("/" + n + " scn"), r.gState && d.setGState(r.gState), rt(e), rt("Q")
								}
							},
							on = function(t) {
								switch (t) {
									case "f":
									case "F":
										return "W n";
									case "f*":
										return "W* n";
									case "B":
										return "W S";
									case "B*":
										return "W* S";
									case "S":
										return "W S";
									case "n":
										return "W n"
								}
							},
							an = d.moveTo = function(t, e) {
								return rt(x(k(t)) + " " + x(I(e)) + " m"), this
							},
							sn = d.lineTo = function(t, e) {
								return rt(x(k(t)) + " " + x(I(e)) + " l"), this
							},
							cn = d.curveTo = function(t, e, n, r, i, o) {
								return rt([x(k(t)), x(I(e)), x(k(n)), x(I(r)), x(k(i)), x(I(o)), "c"].join(" ")), this
							};
						d.__private__.line = d.line = function(t, e, n, r, i) {
							if (isNaN(t) || isNaN(e) || isNaN(n) || isNaN(r) || !Ze(i)) throw new Error("Invalid arguments passed to jsPDF.line");
							return y === b.COMPAT ? this.lines([
								[n - t, r - e]
							], t, e, [1, 1], i || "S") : this.lines([
								[n - t, r - e]
							], t, e, [1, 1]).stroke()
						}, d.__private__.lines = d.lines = function(t, e, n, r, i, o) {
							var a, s, c, u, l, h, f, d, p, g, v, m;
							if ("number" == typeof t && (m = n, n = e, e = t, t = m), r = r || [1, 1], o = o || !1, isNaN(e) || isNaN(n) || !Array.isArray(t) || !Array.isArray(r) || !Ze(i) || "boolean" != typeof o) throw new Error("Invalid arguments passed to jsPDF.lines");
							for (an(e, n), a = r[0], s = r[1], u = t.length, g = e, v = n, c = 0; c < u; c++) 2 === (l = t[c]).length ? (g = l[0] * a + g, v = l[1] * s + v, sn(g, v)) : (h = l[0] * a + g, f = l[1] * s + v, d = l[2] * a + g, p = l[3] * s + v, g = l[4] * a + g, v = l[5] * s + v, cn(h, f, d, p, g, v));
							return o && Qe(), en(i), this
						}, d.path = function(t) {
							for (var e = 0; e < t.length; e++) {
								var n = t[e],
									r = n.c;
								switch (n.op) {
									case "m":
										an(r[0], r[1]);
										break;
									case "l":
										sn(r[0], r[1]);
										break;
									case "c":
										cn.apply(this, r);
										break;
									case "h":
										Qe()
								}
							}
							return this
						}, d.__private__.rect = d.rect = function(t, e, n, r, i) {
							if (isNaN(t) || isNaN(e) || isNaN(n) || isNaN(r) || !Ze(i)) throw new Error("Invalid arguments passed to jsPDF.rect");
							return y === b.COMPAT && (r = -r), rt([x(k(t)), x(I(e)), x(k(n)), x(k(r)), "re"].join(" ")), en(i), this
						}, d.__private__.triangle = d.triangle = function(t, e, n, r, i, o, a) {
							if (isNaN(t) || isNaN(e) || isNaN(n) || isNaN(r) || isNaN(i) || isNaN(o) || !Ze(a)) throw new Error("Invalid arguments passed to jsPDF.triangle");
							return this.lines([
								[n - t, r - e],
								[i - n, o - r],
								[t - i, e - o]
							], t, e, [1, 1], a, !0), this
						}, d.__private__.roundedRect = d.roundedRect = function(t, e, n, r, i, o, a) {
							if (isNaN(t) || isNaN(e) || isNaN(n) || isNaN(r) || isNaN(i) || isNaN(o) || !Ze(a)) throw new Error("Invalid arguments passed to jsPDF.roundedRect");
							var s = 4 / 3 * (Math.SQRT2 - 1);
							return i = Math.min(i, .5 * n), o = Math.min(o, .5 * r), this.lines([
								[n - 2 * i, 0],
								[i * s, 0, i, o - o * s, i, o],
								[0, r - 2 * o],
								[0, o * s, -i * s, o, -i, o],
								[2 * i - n, 0],
								[-i * s, 0, -i, -o * s, -i, -o],
								[0, 2 * o - r],
								[0, -o * s, i * s, -o, i, -o]
							], t + i, e, [1, 1], a, !0), this
						}, d.__private__.ellipse = d.ellipse = function(t, e, n, r, i) {
							if (isNaN(t) || isNaN(e) || isNaN(n) || isNaN(r) || !Ze(i)) throw new Error("Invalid arguments passed to jsPDF.ellipse");
							var o = 4 / 3 * (Math.SQRT2 - 1) * n,
								a = 4 / 3 * (Math.SQRT2 - 1) * r;
							return an(t + n, e), cn(t + n, e - a, t + o, e - r, t, e - r), cn(t - o, e - r, t - n, e - a, t - n, e), cn(t - n, e + a, t - o, e + r, t, e + r), cn(t + o, e + r, t + n, e + a, t + n, e), en(i), this
						}, d.__private__.circle = d.circle = function(t, e, n, r) {
							if (isNaN(t) || isNaN(e) || isNaN(n) || !Ze(r)) throw new Error("Invalid arguments passed to jsPDF.circle");
							return this.ellipse(t, e, n, n, r)
						}, d.setFont = function(t, e, n) {
							return n && (e = L(e, n)), xt = Me(t, e, {
								disableWarning: !1
							}), this
						};
						var un = d.__private__.getFont = d.getFont = function() {
							return kt[Me.apply(d, arguments)]
						};
						d.__private__.getFontList = d.getFontList = function() {
							var t, e, n = {};
							for (t in Ft)
								if (Ft.hasOwnProperty(t))
									for (e in n[t] = [], Ft[t]) Ft[t].hasOwnProperty(e) && n[t].push(e);
							return n
						}, d.addFont = function(t, e, n, r, i) {
							var o = ["StandardEncoding", "MacRomanEncoding", "Identity-H", "WinAnsiEncoding"];
							return arguments[3] && -1 !== o.indexOf(arguments[3]) ? i = arguments[3] : arguments[3] && -1 == o.indexOf(arguments[3]) && (n = L(n, r)), i = i || "Identity-H", Se.call(this, t, e, n, i)
						};
						var ln, hn = t.lineWidth || .200025,
							fn = d.__private__.setLineWidth = d.setLineWidth = function(t) {
								return rt(x(k(t)) + " w"), this
							};
						d.__private__.setLineDash = Nt.API.setLineDash = Nt.API.setLineDashPattern = function(t, e) {
							if (t = t || [], e = e || 0, isNaN(e) || !Array.isArray(t)) throw new Error("Invalid arguments passed to jsPDF.setLineDash");
							return t = t.map((function(t) {
								return x(k(t))
							})).join(" "), e = x(k(e)), rt("[" + t + "] " + e + " d"), this
						};
						var dn = d.__private__.getLineHeight = d.getLineHeight = function() {
							return st * ln
						};
						d.__private__.getLineHeight = d.getLineHeight = function() {
							return st * ln
						};
						var pn = d.__private__.setLineHeightFactor = d.setLineHeightFactor = function(t) {
								return "number" == typeof(t = t || 1.15) && (ln = t), this
							},
							gn = d.__private__.getLineHeightFactor = d.getLineHeightFactor = function() {
								return ln
							};
						pn(t.lineHeight);
						var vn = d.__private__.getHorizontalCoordinate = function(t) {
								return k(t)
							},
							mn = d.__private__.getVerticalCoordinate = function(t) {
								return y === b.ADVANCED ? t : qt[D].mediaBox.topRightY - qt[D].mediaBox.bottomLeftY - k(t)
							},
							bn = d.__private__.getHorizontalCoordinateString = d.getHorizontalCoordinateString = function(t) {
								return x(vn(t))
							},
							yn = d.__private__.getVerticalCoordinateString = d.getVerticalCoordinateString = function(t) {
								return x(mn(t))
							},
							wn = t.strokeColor || "0 G";
						d.__private__.getStrokeColor = d.getDrawColor = function() {
							return Qt(wn)
						}, d.__private__.setStrokeColor = d.setDrawColor = function(t, e, n, r) {
							return wn = te({
								ch1: t,
								ch2: e,
								ch3: n,
								ch4: r,
								pdfColorType: "draw",
								precision: 2
							}), rt(wn), this
						};
						var Nn = t.fillColor || "0 g";
						d.__private__.getFillColor = d.getFillColor = function() {
							return Qt(Nn)
						}, d.__private__.setFillColor = d.setFillColor = function(t, e, n, r) {
							return Nn = te({
								ch1: t,
								ch2: e,
								ch3: n,
								ch4: r,
								pdfColorType: "fill",
								precision: 2
							}), rt(Nn), this
						};
						var Ln = t.textColor || "0 g",
							xn = d.__private__.getTextColor = d.getTextColor = function() {
								return Qt(Ln)
							};
						d.__private__.setTextColor = d.setTextColor = function(t, e, n, r) {
							return Ln = te({
								ch1: t,
								ch2: e,
								ch3: n,
								ch4: r,
								pdfColorType: "text",
								precision: 3
							}), this
						};
						var An = t.charSpace,
							Sn = d.__private__.getCharSpace = d.getCharSpace = function() {
								return parseFloat(An || 0)
							};
						d.__private__.setCharSpace = d.setCharSpace = function(t) {
							if (isNaN(t)) throw new Error("Invalid argument passed to jsPDF.setCharSpace");
							return An = t, this
						};
						var _n = 0;
						d.CapJoinStyles = {
							0: 0,
							butt: 0,
							but: 0,
							miter: 0,
							1: 1,
							round: 1,
							rounded: 1,
							circle: 1,
							2: 2,
							projecting: 2,
							project: 2,
							square: 2,
							bevel: 2
						}, d.__private__.setLineCap = d.setLineCap = function(t) {
							var e = d.CapJoinStyles[t];
							if (void 0 === e) throw new Error("Line cap style of '" + t + "' is not recognized. See or extend .CapJoinStyles property for valid styles");
							return _n = e, rt(e + " J"), this
						};
						var Pn = 0;
						d.__private__.setLineJoin = d.setLineJoin = function(t) {
							var e = d.CapJoinStyles[t];
							if (void 0 === e) throw new Error("Line join style of '" + t + "' is not recognized. See or extend .CapJoinStyles property for valid styles");
							return Pn = e, rt(e + " j"), this
						}, d.__private__.setLineMiterLimit = d.__private__.setMiterLimit = d.setLineMiterLimit = d.setMiterLimit = function(t) {
							if (t = t || 0, isNaN(t)) throw new Error("Invalid argument passed to jsPDF.setLineMiterLimit");
							return rt(x(k(t)) + " M"), this
						}, d.GState = mt, d.setGState = function(t) {
							(t = "string" == typeof t ? Ot[Bt[t]] : kn(null, t)).equals(Mt) || (rt("/" + t.id + " gs"), Mt = t)
						};
						var kn = function(t, e) {
							if (!t || !Bt[t]) {
								var n = !1;
								for (var r in Ot)
									if (Ot.hasOwnProperty(r) && Ot[r].equals(e)) {
										n = !0;
										break
									} if (n) e = Ot[r];
								else {
									var i = "GS" + (Object.keys(Ot).length + 1).toString(10);
									Ot[i] = e, e.id = i
								}
								return t && (Bt[t] = e.id), Tt.publish("addGState", e), e
							}
						};
						d.addGState = function(t, e) {
							return kn(t, e), this
						}, d.saveGraphicsState = function() {
							return rt("q"), It.push({
								key: xt,
								size: st,
								color: Ln
							}), this
						}, d.restoreGraphicsState = function() {
							rt("Q");
							var t = It.pop();
							return xt = t.key, st = t.size, Ln = t.color, Mt = null, this
						}, d.setCurrentTransformationMatrix = function(t) {
							return rt(t.toString() + " cm"), this
						}, d.comment = function(t) {
							return rt("#" + t), this
						};
						var Fn = function(t, e) {
								var n = t || 0;
								Object.defineProperty(this, "x", {
									enumerable: !0,
									get: function() {
										return n
									},
									set: function(t) {
										isNaN(t) || (n = parseFloat(t))
									}
								});
								var r = e || 0;
								Object.defineProperty(this, "y", {
									enumerable: !0,
									get: function() {
										return r
									},
									set: function(t) {
										isNaN(t) || (r = parseFloat(t))
									}
								});
								var i = "pt";
								return Object.defineProperty(this, "type", {
									enumerable: !0,
									get: function() {
										return i
									},
									set: function(t) {
										i = t.toString()
									}
								}), this
							},
							In = function(t, e, n, r) {
								Fn.call(this, t, e), this.type = "rect";
								var i = n || 0;
								Object.defineProperty(this, "w", {
									enumerable: !0,
									get: function() {
										return i
									},
									set: function(t) {
										isNaN(t) || (i = parseFloat(t))
									}
								});
								var o = r || 0;
								return Object.defineProperty(this, "h", {
									enumerable: !0,
									get: function() {
										return o
									},
									set: function(t) {
										isNaN(t) || (o = parseFloat(t))
									}
								}), this
							},
							Cn = function() {
								this.page = Et, this.currentPage = D, this.pages = X.slice(0), this.pagesContext = qt.slice(0), this.x = St, this.y = _t, this.matrix = Pt, this.width = Mn(D), this.height = qn(D), this.outputDestination = tt, this.id = "", this.objectNumber = -1
							};
						Cn.prototype.restore = function() {
							Et = this.page, D = this.currentPage, qt = this.pagesContext, X = this.pages, St = this.x, _t = this.y, Pt = this.matrix, En(D, this.width), Tn(D, this.height), tt = this.outputDestination
						};
						var jn = function(t, e, n, r, i) {
								Ut.push(new Cn), Et = D = 0, X = [], St = t, _t = e, Pt = i, Ie([n, r])
							},
							On = function(t) {
								if (!zt[t]) {
									var e = new Cn,
										n = "Xo" + (Object.keys(Rt).length + 1).toString(10);
									e.id = n, zt[t] = n, Rt[n] = e, Tt.publish("addFormObject", e), Ut.pop().restore()
								}
							};
						for (var Bn in d.beginFormObject = function(t, e, n, r, i) {
								return jn(t, e, n, r, i), this
							}, d.endFormObject = function(t) {
								return On(t), this
							}, d.doFormObject = function(t, e) {
								var n = Rt[zt[t]];
								return rt("q"), rt(e.toString() + " cm"), rt("/" + n.id + " Do"), rt("Q"), this
							}, d.getFormObject = function(t) {
								var e = Rt[zt[t]];
								return {
									x: e.x,
									y: e.y,
									width: e.width,
									height: e.height,
									matrix: e.matrix
								}
							}, d.save = function(t, e) {
								return t = t || "generated.pdf", (e = e || {}).returnPromise = e.returnPromise || !1, !1 === e.returnPromise ? ($(Ue(ze()), t), "function" == typeof $.unload && W.setTimeout && setTimeout($.unload, 911), this) : new Promise((function(e, n) {
									try {
										var r = $(Ue(ze()), t);
										"function" == typeof $.unload && W.setTimeout && setTimeout($.unload, 911), e(r)
									} catch (t) {
										n(t.message)
									}
								}))
							}, Nt.API) Nt.API.hasOwnProperty(Bn) && ("events" === Bn && Nt.API.events.length ? function(t, e) {
							var n, r, i;
							for (i = e.length - 1; - 1 !== i; i--) n = e[i][0], r = e[i][1], t.subscribe.apply(t, [n].concat("function" == typeof r ? [r] : r))
						}(Tt, Nt.API.events) : d[Bn] = Nt.API[Bn]);
						var Mn = d.getPageWidth = function(t) {
								return (qt[t = t || D].mediaBox.topRightX - qt[t].mediaBox.bottomLeftX) / At
							},
							En = d.setPageWidth = function(t, e) {
								qt[t].mediaBox.topRightX = e * At + qt[t].mediaBox.bottomLeftX
							},
							qn = d.getPageHeight = function(t) {
								return (qt[t = t || D].mediaBox.topRightY - qt[t].mediaBox.bottomLeftY) / At
							},
							Tn = d.setPageHeight = function(t, e) {
								qt[t].mediaBox.topRightY = e * At + qt[t].mediaBox.bottomLeftY
							};
						return d.internal = {
							pdfEscape: Fe,
							getStyle: $e,
							getFont: un,
							getFontSize: ut,
							getCharSpace: Sn,
							getTextColor: xn,
							getLineHeight: dn,
							getLineHeightFactor: gn,
							write: it,
							getHorizontalCoordinate: vn,
							getVerticalCoordinate: mn,
							getCoordinateString: bn,
							getVerticalCoordinateString: yn,
							collections: {},
							newObject: Yt,
							newAdditionalObject: Kt,
							newObjectDeferred: Jt,
							newObjectDeferredBegin: Xt,
							getFilters: ee,
							putStream: ne,
							events: Tt,
							scaleFactor: At,
							pageSize: {
								getWidth: function() {
									return Mn(D)
								},
								setWidth: function(t) {
									En(D, t)
								},
								getHeight: function() {
									return qn(D)
								},
								setHeight: function(t) {
									Tn(D, t)
								}
							},
							encryptionOptions: l,
							encryption: Ve,
							getEncryptor: Ge,
							output: He,
							getNumberOfPages: Be,
							pages: X,
							out: rt,
							f2: _,
							f3: P,
							getPageInfo: Ye,
							getPageInfoByObjId: Je,
							getCurrentPageInfo: Xe,
							getPDFVersion: g,
							Point: Fn,
							Rectangle: In,
							Matrix: Ht,
							hasHotfix: We
						}, Object.defineProperty(d.internal.pageSize, "width", {
							get: function() {
								return Mn(D)
							},
							set: function(t) {
								En(D, t)
							},
							enumerable: !0,
							configurable: !0
						}), Object.defineProperty(d.internal.pageSize, "height", {
							get: function() {
								return qn(D)
							},
							set: function(t) {
								Tn(D, t)
							},
							enumerable: !0,
							configurable: !0
						}), _e.call(d, at), xt = "F1", Ce(i, n), Tt.publish("initialized"), d
					}
					gt.prototype.lsbFirstWord = function(t) {
						return String.fromCharCode(t >> 0 & 255, t >> 8 & 255, t >> 16 & 255, t >> 24 & 255)
					}, gt.prototype.toHexString = function(t) {
						return t.split("").map((function(t) {
							return ("0" + (255 & t.charCodeAt(0)).toString(16)).slice(-2)
						})).join("")
					}, gt.prototype.hexToBytes = function(t) {
						for (var e = [], n = 0; n < t.length; n += 2) e.push(String.fromCharCode(parseInt(t.substr(n, 2), 16)));
						return e.join("")
					}, gt.prototype.processOwnerPassword = function(t, e) {
						return dt(ht(e).substr(0, 5), t)
					}, gt.prototype.encryptor = function(t, e) {
						let n = ht(this.encryptionKey + String.fromCharCode(255 & t, t >> 8 & 255, t >> 16 & 255, 255 & e, e >> 8 & 255)).substr(0, 10);
						return function(t) {
							return dt(n, t)
						}
					}, mt.prototype.equals = function(t) {
						var e, n = "id,objectNumber,equals";
						if (!t || typeof t != typeof this) return !1;
						var r = 0;
						for (e in this)
							if (!(n.indexOf(e) >= 0)) {
								if (this.hasOwnProperty(e) && !t.hasOwnProperty(e)) return !1;
								if (this[e] !== t[e]) return !1;
								r++
							} for (e in t) t.hasOwnProperty(e) && n.indexOf(e) < 0 && r--;
						return 0 === r
					}, Nt.API = {
						events: []
					}, Nt.version = "2.3.1";
					var Lt = Nt.API,
						xt = 1,
						At = function(t) {
							return t.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)")
						},
						St = function(t) {
							return t.replace(/\\\\/g, "\\").replace(/\\\(/g, "(").replace(/\\\)/g, ")")
						},
						_t = function(t) {
							return t.toFixed(2)
						},
						Pt = function(t) {
							return t.toFixed(5)
						};
					Lt.__acroform__ = {};
					var kt = function(t, e) {
							t.prototype = Object.create(e.prototype), t.prototype.constructor = t
						},
						Ft = function(t) {
							return t * xt
						},
						It = function(t) {
							var e = new Gt,
								n = ae.internal.getHeight(t) || 0,
								r = ae.internal.getWidth(t) || 0;
							return e.BBox = [0, 0, Number(_t(r)), Number(_t(n))], e
						},
						Ct = Lt.__acroform__.setBit = function(t, e) {
							if (t = t || 0, e = e || 0, isNaN(t) || isNaN(e)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.setBit");
							return t | 1 << e
						},
						jt = Lt.__acroform__.clearBit = function(t, e) {
							if (t = t || 0, e = e || 0, isNaN(t) || isNaN(e)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.clearBit");
							return t & ~(1 << e)
						},
						Ot = Lt.__acroform__.getBit = function(t, e) {
							if (isNaN(t) || isNaN(e)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.getBit");
							return 0 == (t & 1 << e) ? 0 : 1
						},
						Bt = Lt.__acroform__.getBitForPdf = function(t, e) {
							if (isNaN(t) || isNaN(e)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.getBitForPdf");
							return Ot(t, e - 1)
						},
						Mt = Lt.__acroform__.setBitForPdf = function(t, e) {
							if (isNaN(t) || isNaN(e)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.setBitForPdf");
							return Ct(t, e - 1)
						},
						Et = Lt.__acroform__.clearBitForPdf = function(t, e) {
							if (isNaN(t) || isNaN(e)) throw new Error("Invalid arguments passed to jsPDF.API.__acroform__.clearBitForPdf");
							return jt(t, e - 1)
						},
						qt = Lt.__acroform__.calculateCoordinates = function(t, e) {
							var n = e.internal.getHorizontalCoordinate,
								r = e.internal.getVerticalCoordinate,
								i = t[0],
								o = t[1],
								a = t[2],
								s = t[3],
								c = {};
							return c.lowerLeft_X = n(i) || 0, c.lowerLeft_Y = r(o + s) || 0, c.upperRight_X = n(i + a) || 0, c.upperRight_Y = r(o) || 0, [Number(_t(c.lowerLeft_X)), Number(_t(c.lowerLeft_Y)), Number(_t(c.upperRight_X)), Number(_t(c.upperRight_Y))]
						},
						Tt = function(t) {
							if (t.appearanceStreamContent) return t.appearanceStreamContent;
							if (t.V || t.DV) {
								var e = [],
									n = t._V || t.DV,
									r = Dt(t, n),
									i = t.scope.internal.getFont(t.fontName, t.fontStyle).id;
								e.push("/Tx BMC"), e.push("q"), e.push("BT"), e.push(t.scope.__private__.encodeColorString(t.color)), e.push("/" + i + " " + _t(r.fontSize) + " Tf"), e.push("1 0 0 1 0 0 Tm"), e.push(r.text), e.push("ET"), e.push("Q"), e.push("EMC");
								var o = It(t);
								return o.scope = t.scope, o.stream = e.join("\n"), o
							}
						},
						Dt = function(t, e) {
							var n = 0 === t.fontSize ? t.maxFontSize : t.fontSize,
								r = {
									text: "",
									fontSize: ""
								},
								i = (e = ")" == (e = "(" == e.substr(0, 1) ? e.substr(1) : e).substr(e.length - 1) ? e.substr(0, e.length - 1) : e).split(" "),
								o = n,
								a = ae.internal.getHeight(t) || 0;
							a = a < 0 ? -a : a;
							var s = ae.internal.getWidth(t) || 0;
							s = s < 0 ? -s : s;
							var c = function(e, n, r) {
								if (e + 1 < i.length) {
									var o = n + " " + i[e + 1];
									return Rt(o, t, r).width <= s - 4
								}
								return !1
							};
							o++;
							t: for (; o > 0;) {
								e = "", o--;
								var u, l, h = Rt("3", t, o).height,
									f = t.multiline ? a - o : (a - h) / 2,
									d = f += 2,
									p = 0,
									g = 0;
								if (o <= 0) {
									e = "(...) Tj\n", e += "% Width of Text: " + Rt(e, t, o = 12).width + ", FieldWidth:" + s + "\n";
									break
								}
								var v = "",
									m = 0;
								for (var b in i)
									if (i.hasOwnProperty(b)) {
										v = " " == (v += i[b] + " ").substr(v.length - 1) ? v.substr(0, v.length - 1) : v;
										var y = parseInt(b),
											w = c(y, v, o),
											N = b >= i.length - 1;
										if (w && !N) {
											v += " ";
											continue
										}
										if (w || N) {
											if (N) g = y;
											else if (t.multiline && (h + 2) * (m + 2) + 2 > a) continue t
										} else {
											if (!t.multiline) continue t;
											if ((h + 2) * (m + 2) + 2 > a) continue t;
											g = y
										}
										for (var L = "", x = p; x <= g; x++) L += i[x] + " ";
										switch (L = " " == L.substr(L.length - 1) ? L.substr(0, L.length - 1) : L, l = Rt(L, t, o).width, t.textAlign) {
											case "right":
												u = s - l - 2;
												break;
											case "center":
												u = (s - l) / 2;
												break;
											case "left":
											default:
												u = 2
										}
										e += _t(u) + " " + _t(d) + " Td\n", e += "(" + At(L) + ") Tj\n", e += -_t(u) + " 0 Td\n", d = -(o + 2), l = 0, p = g + 1, m++, v = ""
									} break
							}
							return r.text = e, r.fontSize = o, r
						},
						Rt = function(t, e, n) {
							var r = e.scope.internal.getFont(e.fontName, e.fontStyle),
								i = e.scope.getStringUnitWidth(t, {
									font: r,
									fontSize: parseFloat(n),
									charSpace: 0
								}) * parseFloat(n);
							return {
								height: e.scope.getStringUnitWidth("3", {
									font: r,
									fontSize: parseFloat(n),
									charSpace: 0
								}) * parseFloat(n) * 1.5,
								width: i
							}
						},
						zt = {
							fields: [],
							xForms: [],
							acroFormDictionaryRoot: null,
							printedOut: !1,
							internal: null,
							isInitialized: !1
						},
						Ut = function(t, e) {
							var n = {
								type: "reference",
								object: t
							};
							void 0 === e.internal.getPageInfo(t.page).pageContext.annotations.find((function(t) {
								return t.type === n.type && t.object === n.object
							})) && e.internal.getPageInfo(t.page).pageContext.annotations.push(n)
						},
						Ht = Lt.__acroform__.arrayToPdfArray = function(t, e, n) {
							var r = function(t) {
								return t
							};
							if (Array.isArray(t)) {
								for (var i = "[", o = 0; o < t.length; o++) switch (0 !== o && (i += " "), typeof t[o]) {
									case "boolean":
									case "number":
									case "object":
										i += t[o].toString();
										break;
									case "string":
										"/" !== t[o].substr(0, 1) ? (void 0 !== e && n && (r = n.internal.getEncryptor(e)), i += "(" + At(r(t[o].toString())) + ")") : i += t[o].toString()
								}
								return i + "]"
							}
							throw new Error("Invalid argument passed to jsPDF.__acroform__.arrayToPdfArray")
						},
						Wt = function(t, e, n) {
							var r = function(t) {
								return t
							};
							return void 0 !== e && n && (r = n.internal.getEncryptor(e)), (t = t || "").toString(), "(" + At(r(t)) + ")"
						},
						Vt = function() {
							this._objId = void 0, this._scope = void 0, Object.defineProperty(this, "objId", {
								get: function() {
									if (void 0 === this._objId) {
										if (void 0 === this.scope) return;
										this._objId = this.scope.internal.newObjectDeferred()
									}
									return this._objId
								},
								set: function(t) {
									this._objId = t
								}
							}), Object.defineProperty(this, "scope", {
								value: this._scope,
								writable: !0
							})
						};
					Vt.prototype.toString = function() {
						return this.objId + " 0 R"
					}, Vt.prototype.putStream = function() {
						var t = this.getKeyValueListForStream();
						this.scope.internal.putStream({
							data: this.stream,
							additionalKeyValues: t,
							objectId: this.objId
						}), this.scope.internal.out("endobj")
					}, Vt.prototype.getKeyValueListForStream = function() {
						var t = [],
							e = Object.getOwnPropertyNames(this).filter((function(t) {
								return "content" != t && "appearanceStreamContent" != t && "scope" != t && "objId" != t && "_" != t.substring(0, 1)
							}));
						for (var n in e)
							if (!1 === Object.getOwnPropertyDescriptor(this, e[n]).configurable) {
								var r = e[n],
									i = this[r];
								i && (Array.isArray(i) ? t.push({
									key: r,
									value: Ht(i, this.objId, this.scope)
								}) : i instanceof Vt ? (i.scope = this.scope, t.push({
									key: r,
									value: i.objId + " 0 R"
								})) : "function" != typeof i && t.push({
									key: r,
									value: i
								}))
							} return t
					};
					var Gt = function() {
						Vt.call(this), Object.defineProperty(this, "Type", {
							value: "/XObject",
							configurable: !1,
							writable: !0
						}), Object.defineProperty(this, "Subtype", {
							value: "/Form",
							configurable: !1,
							writable: !0
						}), Object.defineProperty(this, "FormType", {
							value: 1,
							configurable: !1,
							writable: !0
						});
						var t, e = [];
						Object.defineProperty(this, "BBox", {
							configurable: !1,
							get: function() {
								return e
							},
							set: function(t) {
								e = t
							}
						}), Object.defineProperty(this, "Resources", {
							value: "2 0 R",
							configurable: !1,
							writable: !0
						}), Object.defineProperty(this, "stream", {
							enumerable: !1,
							configurable: !0,
							set: function(e) {
								t = e.trim()
							},
							get: function() {
								return t || null
							}
						})
					};
					kt(Gt, Vt);
					var Yt = function() {
						Vt.call(this);
						var t, e = [];
						Object.defineProperty(this, "Kids", {
							enumerable: !1,
							configurable: !0,
							get: function() {
								return e.length > 0 ? e : void 0
							}
						}), Object.defineProperty(this, "Fields", {
							enumerable: !1,
							configurable: !1,
							get: function() {
								return e
							}
						}), Object.defineProperty(this, "DA", {
							enumerable: !1,
							configurable: !1,
							get: function() {
								if (t) {
									var e = function(t) {
										return t
									};
									return this.scope && (e = this.scope.internal.getEncryptor(this.objId)), "(" + At(e(t)) + ")"
								}
							},
							set: function(e) {
								t = e
							}
						})
					};
					kt(Yt, Vt);
					var Jt = function() {
						Vt.call(this);
						var t = 4;
						Object.defineProperty(this, "F", {
							enumerable: !1,
							configurable: !1,
							get: function() {
								return t
							},
							set: function(e) {
								if (isNaN(e)) throw new Error('Invalid value "' + e + '" for attribute F supplied.');
								t = e
							}
						}), Object.defineProperty(this, "showWhenPrinted", {
							enumerable: !0,
							configurable: !0,
							get: function() {
								return Boolean(Bt(t, 3))
							},
							set: function(e) {
								!0 === Boolean(e) ? this.F = Mt(t, 3) : this.F = Et(t, 3)
							}
						});
						var e = 0;
						Object.defineProperty(this, "Ff", {
							enumerable: !1,
							configurable: !1,
							get: function() {
								return e
							},
							set: function(t) {
								if (isNaN(t)) throw new Error('Invalid value "' + t + '" for attribute Ff supplied.');
								e = t
							}
						});
						var n = [];
						Object.defineProperty(this, "Rect", {
							enumerable: !1,
							configurable: !1,
							get: function() {
								if (0 !== n.length) return n
							},
							set: function(t) {
								n = void 0 !== t ? t : []
							}
						}), Object.defineProperty(this, "x", {
							enumerable: !0,
							configurable: !0,
							get: function() {
								return !n || isNaN(n[0]) ? 0 : n[0]
							},
							set: function(t) {
								n[0] = t
							}
						}), Object.defineProperty(this, "y", {
							enumerable: !0,
							configurable: !0,
							get: function() {
								return !n || isNaN(n[1]) ? 0 : n[1]
							},
							set: function(t) {
								n[1] = t
							}
						}), Object.defineProperty(this, "width", {
							enumerable: !0,
							configurable: !0,
							get: function() {
								return !n || isNaN(n[2]) ? 0 : n[2]
							},
							set: function(t) {
								n[2] = t
							}
						}), Object.defineProperty(this, "height", {
							enumerable: !0,
							configurable: !0,
							get: function() {
								return !n || isNaN(n[3]) ? 0 : n[3]
							},
							set: function(t) {
								n[3] = t
							}
						});
						var r = "";
						Object.defineProperty(this, "FT", {
							enumerable: !0,
							configurable: !1,
							get: function() {
								return r
							},
							set: function(t) {
								switch (t) {
									case "/Btn":
									case "/Tx":
									case "/Ch":
									case "/Sig":
										r = t;
										break;
									default:
										throw new Error('Invalid value "' + t + '" for attribute FT supplied.')
								}
							}
						});
						var i = null;
						Object.defineProperty(this, "T", {
							enumerable: !0,
							configurable: !1,
							get: function() {
								if (!i || i.length < 1) {
									if (this instanceof ne) return;
									i = "FieldObject" + Jt.FieldNum++
								}
								var t = function(t) {
									return t
								};
								return this.scope && (t = this.scope.internal.getEncryptor(this.objId)), "(" + At(t(i)) + ")"
							},
							set: function(t) {
								i = t.toString()
							}
						}), Object.defineProperty(this, "fieldName", {
							configurable: !0,
							enumerable: !0,
							get: function() {
								return i
							},
							set: function(t) {
								i = t
							}
						});
						var o = "helvetica";
						Object.defineProperty(this, "fontName", {
							enumerable: !0,
							configurable: !0,
							get: function() {
								return o
							},
							set: function(t) {
								o = t
							}
						});
						var a = "normal";
						Object.defineProperty(this, "fontStyle", {
							enumerable: !0,
							configurable: !0,
							get: function() {
								return a
							},
							set: function(t) {
								a = t
							}
						});
						var s = 0;
						Object.defineProperty(this, "fontSize", {
							enumerable: !0,
							configurable: !0,
							get: function() {
								return s
							},
							set: function(t) {
								s = t
							}
						});
						var c = void 0;
						Object.defineProperty(this, "maxFontSize", {
							enumerable: !0,
							configurable: !0,
							get: function() {
								return void 0 === c ? 50 / xt : c
							},
							set: function(t) {
								c = t
							}
						});
						var u = "black";
						Object.defineProperty(this, "color", {
							enumerable: !0,
							configurable: !0,
							get: function() {
								return u
							},
							set: function(t) {
								u = t
							}
						});
						var l = "/F1 0 Tf 0 g";
						Object.defineProperty(this, "DA", {
							enumerable: !0,
							configurable: !1,
							get: function() {
								if (!(!l || this instanceof ne || this instanceof ie)) return Wt(l, this.objId, this.scope)
							},
							set: function(t) {
								t = t.toString(), l = t
							}
						});
						var h = null;
						Object.defineProperty(this, "DV", {
							enumerable: !1,
							configurable: !1,
							get: function() {
								if (h) return this instanceof Qt == 0 ? Wt(h, this.objId, this.scope) : h
							},
							set: function(t) {
								t = t.toString(), h = this instanceof Qt == 0 ? "(" === t.substr(0, 1) ? St(t.substr(1, t.length - 2)) : St(t) : t
							}
						}), Object.defineProperty(this, "defaultValue", {
							enumerable: !0,
							configurable: !0,
							get: function() {
								return this instanceof Qt == 1 ? St(h.substr(1, h.length - 1)) : h
							},
							set: function(t) {
								t = t.toString(), h = this instanceof Qt == 1 ? "/" + t : t
							}
						});
						var f = null;
						Object.defineProperty(this, "_V", {
							enumerable: !1,
							configurable: !1,
							get: function() {
								if (f) return f
							},
							set: function(t) {
								this.V = t
							}
						}), Object.defineProperty(this, "V", {
							enumerable: !1,
							configurable: !1,
							get: function() {
								if (f) return this instanceof Qt == 0 ? Wt(f, this.objId, this.scope) : f
							},
							set: function(t) {
								t = t.toString(), f = this instanceof Qt == 0 ? "(" === t.substr(0, 1) ? St(t.substr(1, t.length - 2)) : St(t) : t
							}
						}), Object.defineProperty(this, "value", {
							enumerable: !0,
							configurable: !0,
							get: function() {
								return this instanceof Qt == 1 ? St(f.substr(1, f.length - 1)) : f
							},
							set: function(t) {
								t = t.toString(), f = this instanceof Qt == 1 ? "/" + t : t
							}
						}), Object.defineProperty(this, "hasAnnotation", {
							enumerable: !0,
							configurable: !0,
							get: function() {
								return this.Rect
							}
						}), Object.defineProperty(this, "Type", {
							enumerable: !0,
							configurable: !1,
							get: function() {
								return this.hasAnnotation ? "/Annot" : null
							}
						}), Object.defineProperty(this, "Subtype", {
							enumerable: !0,
							configurable: !1,
							get: function() {
								return this.hasAnnotation ? "/Widget" : null
							}
						});
						var d, p = !1;
						Object.defineProperty(this, "hasAppearanceStream", {
							enumerable: !0,
							configurable: !0,
							get: function() {
								return p
							},
							set: function(t) {
								t = Boolean(t), p = t
							}
						}), Object.defineProperty(this, "page", {
							enumerable: !0,
							configurable: !0,
							get: function() {
								if (d) return d
							},
							set: function(t) {
								d = t
							}
						}), Object.defineProperty(this, "readOnly", {
							enumerable: !0,
							configurable: !0,
							get: function() {
								return Boolean(Bt(this.Ff, 1))
							},
							set: function(t) {
								!0 === Boolean(t) ? this.Ff = Mt(this.Ff, 1) : this.Ff = Et(this.Ff, 1)
							}
						}), Object.defineProperty(this, "required", {
							enumerable: !0,
							configurable: !0,
							get: function() {
								return Boolean(Bt(this.Ff, 2))
							},
							set: function(t) {
								!0 === Boolean(t) ? this.Ff = Mt(this.Ff, 2) : this.Ff = Et(this.Ff, 2)
							}
						}), Object.defineProperty(this, "noExport", {
							enumerable: !0,
							configurable: !0,
							get: function() {
								return Boolean(Bt(this.Ff, 3))
							},
							set: function(t) {
								!0 === Boolean(t) ? this.Ff = Mt(this.Ff, 3) : this.Ff = Et(this.Ff, 3)
							}
						});
						var g = null;
						Object.defineProperty(this, "Q", {
							enumerable: !0,
							configurable: !1,
							get: function() {
								if (null !== g) return g
							},
							set: function(t) {
								if (-1 === [0, 1, 2].indexOf(t)) throw new Error('Invalid value "' + t + '" for attribute Q supplied.');
								g = t
							}
						}), Object.defineProperty(this, "textAlign", {
							get: function() {
								var t;
								switch (g) {
									case 0:
									default:
										t = "left";
										break;
									case 1:
										t = "center";
										break;
									case 2:
										t = "right"
								}
								return t
							},
							configurable: !0,
							enumerable: !0,
							set: function(t) {
								switch (t) {
									case "right":
									case 2:
										g = 2;
										break;
									case "center":
									case 1:
										g = 1;
										break;
									case "left":
									case 0:
									default:
										g = 0
								}
							}
						})
					};
					kt(Jt, Vt);
					var Xt = function() {
						Jt.call(this), this.FT = "/Ch", this.V = "()", this.fontName = "zapfdingbats";
						var t = 0;
						Object.defineProperty(this, "TI", {
							enumerable: !0,
							configurable: !1,
							get: function() {
								return t
							},
							set: function(e) {
								t = e
							}
						}), Object.defineProperty(this, "topIndex", {
							enumerable: !0,
							configurable: !0,
							get: function() {
								return t
							},
							set: function(e) {
								t = e
							}
						});
						var e = [];
						Object.defineProperty(this, "Opt", {
							enumerable: !0,
							configurable: !1,
							get: function() {
								return Ht(e, this.objId, this.scope)
							},
							set: function(t) {
								var n, r;
								r = [], "string" == typeof(n = t) && (r = function(t, e, n) {
									n || (n = 1);
									for (var r, i = []; r = e.exec(t);) i.push(r[n]);
									return i
								}(n, /\((.*?)\)/g)), e = r
							}
						}), this.getOptions = function() {
							return e
						}, this.setOptions = function(t) {
							e = t, this.sort && e.sort()
						}, this.addOption = function(t) {
							t = (t = t || "").toString(), e.push(t), this.sort && e.sort()
						}, this.removeOption = function(t, n) {
							for (n = n || !1, t = (t = t || "").toString(); - 1 !== e.indexOf(t) && (e.splice(e.indexOf(t), 1), !1 !== n););
						}, Object.defineProperty(this, "combo", {
							enumerable: !0,
							configurable: !0,
							get: function() {
								return Boolean(Bt(this.Ff, 18))
							},
							set: function(t) {
								!0 === Boolean(t) ? this.Ff = Mt(this.Ff, 18) : this.Ff = Et(this.Ff, 18)
							}
						}), Object.defineProperty(this, "edit", {
							enumerable: !0,
							configurable: !0,
							get: function() {
								return Boolean(Bt(this.Ff, 19))
							},
							set: function(t) {
								!0 === this.combo && (!0 === Boolean(t) ? this.Ff = Mt(this.Ff, 19) : this.Ff = Et(this.Ff, 19))
							}
						}), Object.defineProperty(this, "sort", {
							enumerable: !0,
							configurable: !0,
							get: function() {
								return Boolean(Bt(this.Ff, 20))
							},
							set: function(t) {
								!0 === Boolean(t) ? (this.Ff = Mt(this.Ff, 20), e.sort()) : this.Ff = Et(this.Ff, 20)
							}
						}), Object.defineProperty(this, "multiSelect", {
							enumerable: !0,
							configurable: !0,
							get: function() {
								return Boolean(Bt(this.Ff, 22))
							},
							set: function(t) {
								!0 === Boolean(t) ? this.Ff = Mt(this.Ff, 22) : this.Ff = Et(this.Ff, 22)
							}
						}), Object.defineProperty(this, "doNotSpellCheck", {
							enumerable: !0,
							configurable: !0,
							get: function() {
								return Boolean(Bt(this.Ff, 23))
							},
							set: function(t) {
								!0 === Boolean(t) ? this.Ff = Mt(this.Ff, 23) : this.Ff = Et(this.Ff, 23)
							}
						}), Object.defineProperty(this, "commitOnSelChange", {
							enumerable: !0,
							configurable: !0,
							get: function() {
								return Boolean(Bt(this.Ff, 27))
							},
							set: function(t) {
								!0 === Boolean(t) ? this.Ff = Mt(this.Ff, 27) : this.Ff = Et(this.Ff, 27)
							}
						}), this.hasAppearanceStream = !1
					};
					kt(Xt, Jt);
					var Kt = function() {
						Xt.call(this), this.fontName = "helvetica", this.combo = !1
					};
					kt(Kt, Xt);
					var Zt = function() {
						Kt.call(this), this.combo = !0
					};
					kt(Zt, Kt);
					var $t = function() {
						Zt.call(this), this.edit = !0
					};
					kt($t, Zt);
					var Qt = function() {
						Jt.call(this), this.FT = "/Btn", Object.defineProperty(this, "noToggleToOff", {
							enumerable: !0,
							configurable: !0,
							get: function() {
								return Boolean(Bt(this.Ff, 15))
							},
							set: function(t) {
								!0 === Boolean(t) ? this.Ff = Mt(this.Ff, 15) : this.Ff = Et(this.Ff, 15)
							}
						}), Object.defineProperty(this, "radio", {
							enumerable: !0,
							configurable: !0,
							get: function() {
								return Boolean(Bt(this.Ff, 16))
							},
							set: function(t) {
								!0 === Boolean(t) ? this.Ff = Mt(this.Ff, 16) : this.Ff = Et(this.Ff, 16)
							}
						}), Object.defineProperty(this, "pushButton", {
							enumerable: !0,
							configurable: !0,
							get: function() {
								return Boolean(Bt(this.Ff, 17))
							},
							set: function(t) {
								!0 === Boolean(t) ? this.Ff = Mt(this.Ff, 17) : this.Ff = Et(this.Ff, 17)
							}
						}), Object.defineProperty(this, "radioIsUnison", {
							enumerable: !0,
							configurable: !0,
							get: function() {
								return Boolean(Bt(this.Ff, 26))
							},
							set: function(t) {
								!0 === Boolean(t) ? this.Ff = Mt(this.Ff, 26) : this.Ff = Et(this.Ff, 26)
							}
						});
						var t, e = {};
						Object.defineProperty(this, "MK", {
							enumerable: !1,
							configurable: !1,
							get: function() {
								var t = function(t) {
									return t
								};
								if (this.scope && (t = this.scope.internal.getEncryptor(this.objId)), 0 !== Object.keys(e).length) {
									var n, r = [];
									for (n in r.push("<<"), e) r.push("/" + n + " (" + At(t(e[n])) + ")");
									return r.push(">>"), r.join("\n")
								}
							},
							set: function(t) {
								"object" == typeof t && (e = t)
							}
						}), Object.defineProperty(this, "caption", {
							enumerable: !0,
							configurable: !0,
							get: function() {
								return e.CA || ""
							},
							set: function(t) {
								"string" == typeof t && (e.CA = t)
							}
						}), Object.defineProperty(this, "AS", {
							enumerable: !1,
							configurable: !1,
							get: function() {
								return t
							},
							set: function(e) {
								t = e
							}
						}), Object.defineProperty(this, "appearanceState", {
							enumerable: !0,
							configurable: !0,
							get: function() {
								return t.substr(1, t.length - 1)
							},
							set: function(e) {
								t = "/" + e
							}
						})
					};
					kt(Qt, Jt);
					var te = function() {
						Qt.call(this), this.pushButton = !0
					};
					kt(te, Qt);
					var ee = function() {
						Qt.call(this), this.radio = !0, this.pushButton = !1;
						var t = [];
						Object.defineProperty(this, "Kids", {
							enumerable: !0,
							configurable: !1,
							get: function() {
								return t
							},
							set: function(e) {
								t = void 0 !== e ? e : []
							}
						})
					};
					kt(ee, Qt);
					var ne = function() {
						var t, e;
						Jt.call(this), Object.defineProperty(this, "Parent", {
							enumerable: !1,
							configurable: !1,
							get: function() {
								return t
							},
							set: function(e) {
								t = e
							}
						}), Object.defineProperty(this, "optionName", {
							enumerable: !1,
							configurable: !0,
							get: function() {
								return e
							},
							set: function(t) {
								e = t
							}
						});
						var n, r = {};
						Object.defineProperty(this, "MK", {
							enumerable: !1,
							configurable: !1,
							get: function() {
								var t = function(t) {
									return t
								};
								this.scope && (t = this.scope.internal.getEncryptor(this.objId));
								var e, n = [];
								for (e in n.push("<<"), r) n.push("/" + e + " (" + At(t(r[e])) + ")");
								return n.push(">>"), n.join("\n")
							},
							set: function(t) {
								"object" == typeof t && (r = t)
							}
						}), Object.defineProperty(this, "caption", {
							enumerable: !0,
							configurable: !0,
							get: function() {
								return r.CA || ""
							},
							set: function(t) {
								"string" == typeof t && (r.CA = t)
							}
						}), Object.defineProperty(this, "AS", {
							enumerable: !1,
							configurable: !1,
							get: function() {
								return n
							},
							set: function(t) {
								n = t
							}
						}), Object.defineProperty(this, "appearanceState", {
							enumerable: !0,
							configurable: !0,
							get: function() {
								return n.substr(1, n.length - 1)
							},
							set: function(t) {
								n = "/" + t
							}
						}), this.caption = "l", this.appearanceState = "Off", this._AppearanceType = ae.RadioButton.Circle, this.appearanceStreamContent = this._AppearanceType.createAppearanceStream(this.optionName)
					};
					kt(ne, Jt), ee.prototype.setAppearance = function(t) {
						if (!("createAppearanceStream" in t) || !("getCA" in t)) throw new Error("Couldn't assign Appearance to RadioButton. Appearance was Invalid!");
						for (var e in this.Kids)
							if (this.Kids.hasOwnProperty(e)) {
								var n = this.Kids[e];
								n.appearanceStreamContent = t.createAppearanceStream(n.optionName), n.caption = t.getCA()
							}
					}, ee.prototype.createOption = function(t) {
						var e = new ne;
						return e.Parent = this, e.optionName = t, this.Kids.push(e), ue.call(this.scope, e), e
					};
					var re = function() {
						Qt.call(this), this.fontName = "zapfdingbats", this.caption = "3", this.appearanceState = "On", this.value = "On", this.textAlign = "center", this.appearanceStreamContent = ae.CheckBox.createAppearanceStream()
					};
					kt(re, Qt);
					var ie = function() {
						Jt.call(this), this.FT = "/Tx", Object.defineProperty(this, "multiline", {
							enumerable: !0,
							configurable: !0,
							get: function() {
								return Boolean(Bt(this.Ff, 13))
							},
							set: function(t) {
								!0 === Boolean(t) ? this.Ff = Mt(this.Ff, 13) : this.Ff = Et(this.Ff, 13)
							}
						}), Object.defineProperty(this, "fileSelect", {
							enumerable: !0,
							configurable: !0,
							get: function() {
								return Boolean(Bt(this.Ff, 21))
							},
							set: function(t) {
								!0 === Boolean(t) ? this.Ff = Mt(this.Ff, 21) : this.Ff = Et(this.Ff, 21)
							}
						}), Object.defineProperty(this, "doNotSpellCheck", {
							enumerable: !0,
							configurable: !0,
							get: function() {
								return Boolean(Bt(this.Ff, 23))
							},
							set: function(t) {
								!0 === Boolean(t) ? this.Ff = Mt(this.Ff, 23) : this.Ff = Et(this.Ff, 23)
							}
						}), Object.defineProperty(this, "doNotScroll", {
							enumerable: !0,
							configurable: !0,
							get: function() {
								return Boolean(Bt(this.Ff, 24))
							},
							set: function(t) {
								!0 === Boolean(t) ? this.Ff = Mt(this.Ff, 24) : this.Ff = Et(this.Ff, 24)
							}
						}), Object.defineProperty(this, "comb", {
							enumerable: !0,
							configurable: !0,
							get: function() {
								return Boolean(Bt(this.Ff, 25))
							},
							set: function(t) {
								!0 === Boolean(t) ? this.Ff = Mt(this.Ff, 25) : this.Ff = Et(this.Ff, 25)
							}
						}), Object.defineProperty(this, "richText", {
							enumerable: !0,
							configurable: !0,
							get: function() {
								return Boolean(Bt(this.Ff, 26))
							},
							set: function(t) {
								!0 === Boolean(t) ? this.Ff = Mt(this.Ff, 26) : this.Ff = Et(this.Ff, 26)
							}
						});
						var t = null;
						Object.defineProperty(this, "MaxLen", {
							enumerable: !0,
							configurable: !1,
							get: function() {
								return t
							},
							set: function(e) {
								t = e
							}
						}), Object.defineProperty(this, "maxLength", {
							enumerable: !0,
							configurable: !0,
							get: function() {
								return t
							},
							set: function(e) {
								Number.isInteger(e) && (t = e)
							}
						}), Object.defineProperty(this, "hasAppearanceStream", {
							enumerable: !0,
							configurable: !0,
							get: function() {
								return this.V || this.DV
							}
						})
					};
					kt(ie, Jt);
					var oe = function() {
						ie.call(this), Object.defineProperty(this, "password", {
							enumerable: !0,
							configurable: !0,
							get: function() {
								return Boolean(Bt(this.Ff, 14))
							},
							set: function(t) {
								!0 === Boolean(t) ? this.Ff = Mt(this.Ff, 14) : this.Ff = Et(this.Ff, 14)
							}
						}), this.password = !0
					};
					kt(oe, ie);
					var ae = {
						CheckBox: {
							createAppearanceStream: function() {
								return {
									N: {
										On: ae.CheckBox.YesNormal
									},
									D: {
										On: ae.CheckBox.YesPushDown,
										Off: ae.CheckBox.OffPushDown
									}
								}
							},
							YesPushDown: function(t) {
								var e = It(t);
								e.scope = t.scope;
								var n = [],
									r = t.scope.internal.getFont(t.fontName, t.fontStyle).id,
									i = t.scope.__private__.encodeColorString(t.color),
									o = Dt(t, t.caption);
								return n.push("0.749023 g"), n.push("0 0 " + _t(ae.internal.getWidth(t)) + " " + _t(ae.internal.getHeight(t)) + " re"), n.push("f"), n.push("BMC"), n.push("q"), n.push("0 0 1 rg"), n.push("/" + r + " " + _t(o.fontSize) + " Tf " + i), n.push("BT"), n.push(o.text), n.push("ET"), n.push("Q"), n.push("EMC"), e.stream = n.join("\n"), e
							},
							YesNormal: function(t) {
								var e = It(t);
								e.scope = t.scope;
								var n = t.scope.internal.getFont(t.fontName, t.fontStyle).id,
									r = t.scope.__private__.encodeColorString(t.color),
									i = [],
									o = ae.internal.getHeight(t),
									a = ae.internal.getWidth(t),
									s = Dt(t, t.caption);
								return i.push("1 g"), i.push("0 0 " + _t(a) + " " + _t(o) + " re"), i.push("f"), i.push("q"), i.push("0 0 1 rg"), i.push("0 0 " + _t(a - 1) + " " + _t(o - 1) + " re"), i.push("W"), i.push("n"), i.push("0 g"), i.push("BT"), i.push("/" + n + " " + _t(s.fontSize) + " Tf " + r), i.push(s.text), i.push("ET"), i.push("Q"), e.stream = i.join("\n"), e
							},
							OffPushDown: function(t) {
								var e = It(t);
								e.scope = t.scope;
								var n = [];
								return n.push("0.749023 g"), n.push("0 0 " + _t(ae.internal.getWidth(t)) + " " + _t(ae.internal.getHeight(t)) + " re"), n.push("f"), e.stream = n.join("\n"), e
							}
						},
						RadioButton: {
							Circle: {
								createAppearanceStream: function(t) {
									var e = {
										D: {
											Off: ae.RadioButton.Circle.OffPushDown
										},
										N: {}
									};
									return e.N[t] = ae.RadioButton.Circle.YesNormal, e.D[t] = ae.RadioButton.Circle.YesPushDown, e
								},
								getCA: function() {
									return "l"
								},
								YesNormal: function(t) {
									var e = It(t);
									e.scope = t.scope;
									var n = [],
										r = ae.internal.getWidth(t) <= ae.internal.getHeight(t) ? ae.internal.getWidth(t) / 4 : ae.internal.getHeight(t) / 4;
									r = Number((.9 * r).toFixed(5));
									var i = ae.internal.Bezier_C,
										o = Number((r * i).toFixed(5));
									return n.push("q"), n.push("1 0 0 1 " + Pt(ae.internal.getWidth(t) / 2) + " " + Pt(ae.internal.getHeight(t) / 2) + " cm"), n.push(r + " 0 m"), n.push(r + " " + o + " " + o + " " + r + " 0 " + r + " c"), n.push("-" + o + " " + r + " -" + r + " " + o + " -" + r + " 0 c"), n.push("-" + r + " -" + o + " -" + o + " -" + r + " 0 -" + r + " c"), n.push(o + " -" + r + " " + r + " -" + o + " " + r + " 0 c"), n.push("f"), n.push("Q"), e.stream = n.join("\n"), e
								},
								YesPushDown: function(t) {
									var e = It(t);
									e.scope = t.scope;
									var n = [],
										r = ae.internal.getWidth(t) <= ae.internal.getHeight(t) ? ae.internal.getWidth(t) / 4 : ae.internal.getHeight(t) / 4;
									r = Number((.9 * r).toFixed(5));
									var i = Number((2 * r).toFixed(5)),
										o = Number((i * ae.internal.Bezier_C).toFixed(5)),
										a = Number((r * ae.internal.Bezier_C).toFixed(5));
									return n.push("0.749023 g"), n.push("q"), n.push("1 0 0 1 " + Pt(ae.internal.getWidth(t) / 2) + " " + Pt(ae.internal.getHeight(t) / 2) + " cm"), n.push(i + " 0 m"), n.push(i + " " + o + " " + o + " " + i + " 0 " + i + " c"), n.push("-" + o + " " + i + " -" + i + " " + o + " -" + i + " 0 c"), n.push("-" + i + " -" + o + " -" + o + " -" + i + " 0 -" + i + " c"), n.push(o + " -" + i + " " + i + " -" + o + " " + i + " 0 c"), n.push("f"), n.push("Q"), n.push("0 g"), n.push("q"), n.push("1 0 0 1 " + Pt(ae.internal.getWidth(t) / 2) + " " + Pt(ae.internal.getHeight(t) / 2) + " cm"), n.push(r + " 0 m"), n.push(r + " " + a + " " + a + " " + r + " 0 " + r + " c"), n.push("-" + a + " " + r + " -" + r + " " + a + " -" + r + " 0 c"), n.push("-" + r + " -" + a + " -" + a + " -" + r + " 0 -" + r + " c"), n.push(a + " -" + r + " " + r + " -" + a + " " + r + " 0 c"), n.push("f"), n.push("Q"), e.stream = n.join("\n"), e
								},
								OffPushDown: function(t) {
									var e = It(t);
									e.scope = t.scope;
									var n = [],
										r = ae.internal.getWidth(t) <= ae.internal.getHeight(t) ? ae.internal.getWidth(t) / 4 : ae.internal.getHeight(t) / 4;
									r = Number((.9 * r).toFixed(5));
									var i = Number((2 * r).toFixed(5)),
										o = Number((i * ae.internal.Bezier_C).toFixed(5));
									return n.push("0.749023 g"), n.push("q"), n.push("1 0 0 1 " + Pt(ae.internal.getWidth(t) / 2) + " " + Pt(ae.internal.getHeight(t) / 2) + " cm"), n.push(i + " 0 m"), n.push(i + " " + o + " " + o + " " + i + " 0 " + i + " c"), n.push("-" + o + " " + i + " -" + i + " " + o + " -" + i + " 0 c"), n.push("-" + i + " -" + o + " -" + o + " -" + i + " 0 -" + i + " c"), n.push(o + " -" + i + " " + i + " -" + o + " " + i + " 0 c"), n.push("f"), n.push("Q"), e.stream = n.join("\n"), e
								}
							},
							Cross: {
								createAppearanceStream: function(t) {
									var e = {
										D: {
											Off: ae.RadioButton.Cross.OffPushDown
										},
										N: {}
									};
									return e.N[t] = ae.RadioButton.Cross.YesNormal, e.D[t] = ae.RadioButton.Cross.YesPushDown, e
								},
								getCA: function() {
									return "8"
								},
								YesNormal: function(t) {
									var e = It(t);
									e.scope = t.scope;
									var n = [],
										r = ae.internal.calculateCross(t);
									return n.push("q"), n.push("1 1 " + _t(ae.internal.getWidth(t) - 2) + " " + _t(ae.internal.getHeight(t) - 2) + " re"), n.push("W"), n.push("n"), n.push(_t(r.x1.x) + " " + _t(r.x1.y) + " m"), n.push(_t(r.x2.x) + " " + _t(r.x2.y) + " l"), n.push(_t(r.x4.x) + " " + _t(r.x4.y) + " m"), n.push(_t(r.x3.x) + " " + _t(r.x3.y) + " l"), n.push("s"), n.push("Q"), e.stream = n.join("\n"), e
								},
								YesPushDown: function(t) {
									var e = It(t);
									e.scope = t.scope;
									var n = ae.internal.calculateCross(t),
										r = [];
									return r.push("0.749023 g"), r.push("0 0 " + _t(ae.internal.getWidth(t)) + " " + _t(ae.internal.getHeight(t)) + " re"), r.push("f"), r.push("q"), r.push("1 1 " + _t(ae.internal.getWidth(t) - 2) + " " + _t(ae.internal.getHeight(t) - 2) + " re"), r.push("W"), r.push("n"), r.push(_t(n.x1.x) + " " + _t(n.x1.y) + " m"), r.push(_t(n.x2.x) + " " + _t(n.x2.y) + " l"), r.push(_t(n.x4.x) + " " + _t(n.x4.y) + " m"), r.push(_t(n.x3.x) + " " + _t(n.x3.y) + " l"), r.push("s"), r.push("Q"), e.stream = r.join("\n"), e
								},
								OffPushDown: function(t) {
									var e = It(t);
									e.scope = t.scope;
									var n = [];
									return n.push("0.749023 g"), n.push("0 0 " + _t(ae.internal.getWidth(t)) + " " + _t(ae.internal.getHeight(t)) + " re"), n.push("f"), e.stream = n.join("\n"), e
								}
							}
						},
						createDefaultAppearanceStream: function(t) {
							var e = t.scope.internal.getFont(t.fontName, t.fontStyle).id,
								n = t.scope.__private__.encodeColorString(t.color);
							return "/" + e + " " + t.fontSize + " Tf " + n
						}
					};
					ae.internal = {
						Bezier_C: .551915024494,
						calculateCross: function(t) {
							var e = ae.internal.getWidth(t),
								n = ae.internal.getHeight(t),
								r = Math.min(e, n);
							return {
								x1: {
									x: (e - r) / 2,
									y: (n - r) / 2 + r
								},
								x2: {
									x: (e - r) / 2 + r,
									y: (n - r) / 2
								},
								x3: {
									x: (e - r) / 2,
									y: (n - r) / 2
								},
								x4: {
									x: (e - r) / 2 + r,
									y: (n - r) / 2 + r
								}
							}
						}
					}, ae.internal.getWidth = function(t) {
						var e = 0;
						return "object" == typeof t && (e = Ft(t.Rect[2])), e
					}, ae.internal.getHeight = function(t) {
						var e = 0;
						return "object" == typeof t && (e = Ft(t.Rect[3])), e
					};
					var se, ce, ue = Lt.addField = function(t) {
						if (function(t, e) {
								if (e.scope = t, void 0 !== t.internal && (void 0 === t.internal.acroformPlugin || !1 === t.internal.acroformPlugin.isInitialized)) {
									if (Jt.FieldNum = 0, t.internal.acroformPlugin = JSON.parse(JSON.stringify(zt)), t.internal.acroformPlugin.acroFormDictionaryRoot) throw new Error("Exception while creating AcroformDictionary");
									xt = t.internal.scaleFactor, t.internal.acroformPlugin.acroFormDictionaryRoot = new Yt, t.internal.acroformPlugin.acroFormDictionaryRoot.scope = t, t.internal.acroformPlugin.acroFormDictionaryRoot._eventID = t.internal.events.subscribe("postPutResources", (function() {
										! function(t) {
											t.internal.events.unsubscribe(t.internal.acroformPlugin.acroFormDictionaryRoot._eventID), delete t.internal.acroformPlugin.acroFormDictionaryRoot._eventID, t.internal.acroformPlugin.printedOut = !0
										}(t)
									})), t.internal.events.subscribe("buildDocument", (function() {
										! function(t) {
											t.internal.acroformPlugin.acroFormDictionaryRoot.objId = void 0;
											var e = t.internal.acroformPlugin.acroFormDictionaryRoot.Fields;
											for (var n in e)
												if (e.hasOwnProperty(n)) {
													var r = e[n];
													r.objId = void 0, r.hasAnnotation && Ut(r, t)
												}
										}(t)
									})), t.internal.events.subscribe("putCatalog", (function() {
										! function(t) {
											if (void 0 === t.internal.acroformPlugin.acroFormDictionaryRoot) throw new Error("putCatalogCallback: Root missing.");
											t.internal.write("/AcroForm " + t.internal.acroformPlugin.acroFormDictionaryRoot.objId + " 0 R")
										}(t)
									})), t.internal.events.subscribe("postPutPages", (function(e) {
										! function(t, e) {
											var n = !t;
											for (var r in t || (e.internal.newObjectDeferredBegin(e.internal.acroformPlugin.acroFormDictionaryRoot.objId, !0), e.internal.acroformPlugin.acroFormDictionaryRoot.putStream()), t = t || e.internal.acroformPlugin.acroFormDictionaryRoot.Kids)
												if (t.hasOwnProperty(r)) {
													var i = t[r],
														o = [],
														a = i.Rect;
													if (i.Rect && (i.Rect = qt(i.Rect, e)), e.internal.newObjectDeferredBegin(i.objId, !0), i.DA = ae.createDefaultAppearanceStream(i), "object" == typeof i && "function" == typeof i.getKeyValueListForStream && (o = i.getKeyValueListForStream()), i.Rect = a, i.hasAppearanceStream && !i.appearanceStreamContent) {
														var s = Tt(i);
														o.push({
															key: "AP",
															value: "<</N " + s + ">>"
														}), e.internal.acroformPlugin.xForms.push(s)
													}
													if (i.appearanceStreamContent) {
														var c = "";
														for (var u in i.appearanceStreamContent)
															if (i.appearanceStreamContent.hasOwnProperty(u)) {
																var l = i.appearanceStreamContent[u];
																if (c += "/" + u + " ", c += "<<", Object.keys(l).length >= 1 || Array.isArray(l)) {
																	for (var r in l)
																		if (l.hasOwnProperty(r)) {
																			var h = l[r];
																			"function" == typeof h && (h = h.call(e, i)), c += "/" + r + " " + h + " ", e.internal.acroformPlugin.xForms.indexOf(h) >= 0 || e.internal.acroformPlugin.xForms.push(h)
																		}
																} else "function" == typeof(h = l) && (h = h.call(e, i)), c += "/" + r + " " + h, e.internal.acroformPlugin.xForms.indexOf(h) >= 0 || e.internal.acroformPlugin.xForms.push(h);
																c += ">>"
															} o.push({
															key: "AP",
															value: "<<\n" + c + ">>"
														})
													}
													e.internal.putStream({
														additionalKeyValues: o,
														objectId: i.objId
													}), e.internal.out("endobj")
												} n && function(t, e) {
												for (var n in t)
													if (t.hasOwnProperty(n)) {
														var r = n,
															i = t[n];
														e.internal.newObjectDeferredBegin(i.objId, !0), "object" == typeof i && "function" == typeof i.putStream && i.putStream(), delete t[r]
													}
											}(e.internal.acroformPlugin.xForms, e)
										}(e, t)
									})), t.internal.acroformPlugin.isInitialized = !0
								}
							}(this, t), !(t instanceof Jt)) throw new Error("Invalid argument passed to jsPDF.addField.");
						var e;
						return (e = t).scope.internal.acroformPlugin.printedOut && (e.scope.internal.acroformPlugin.printedOut = !1, e.scope.internal.acroformPlugin.acroFormDictionaryRoot = null), e.scope.internal.acroformPlugin.acroFormDictionaryRoot.Fields.push(e), t.page = t.scope.internal.getCurrentPageInfo().pageNumber, this
					};

					function le(t) {
						return t.reduce((function(t, e, n) {
							return t[e] = n, t
						}), {})
					}
					Lt.AcroFormChoiceField = Xt, Lt.AcroFormListBox = Kt, Lt.AcroFormComboBox = Zt, Lt.AcroFormEditBox = $t, Lt.AcroFormButton = Qt, Lt.AcroFormPushButton = te, Lt.AcroFormRadioButton = ee, Lt.AcroFormCheckBox = re, Lt.AcroFormTextField = ie, Lt.AcroFormPasswordField = oe, Lt.AcroFormAppearance = ae, Lt.AcroForm = {
							ChoiceField: Xt,
							ListBox: Kt,
							ComboBox: Zt,
							EditBox: $t,
							Button: Qt,
							PushButton: te,
							RadioButton: ee,
							CheckBox: re,
							TextField: ie,
							PasswordField: oe,
							Appearance: ae
						}, Nt.AcroForm = {
							ChoiceField: Xt,
							ListBox: Kt,
							ComboBox: Zt,
							EditBox: $t,
							Button: Qt,
							PushButton: te,
							RadioButton: ee,
							CheckBox: re,
							TextField: ie,
							PasswordField: oe,
							Appearance: ae
						}, Nt.AcroForm,
						function(t) {
							t.__addimage__ = {};
							var e = "UNKNOWN",
								n = {
									PNG: [
										[137, 80, 78, 71]
									],
									TIFF: [
										[77, 77, 0, 42],
										[73, 73, 42, 0]
									],
									JPEG: [
										[255, 216, 255, 224, void 0, void 0, 74, 70, 73, 70, 0],
										[255, 216, 255, 225, void 0, void 0, 69, 120, 105, 102, 0, 0],
										[255, 216, 255, 219],
										[255, 216, 255, 238]
									],
									JPEG2000: [
										[0, 0, 0, 12, 106, 80, 32, 32]
									],
									GIF87a: [
										[71, 73, 70, 56, 55, 97]
									],
									GIF89a: [
										[71, 73, 70, 56, 57, 97]
									],
									WEBP: [
										[82, 73, 70, 70, void 0, void 0, void 0, void 0, 87, 69, 66, 80]
									],
									BMP: [
										[66, 77],
										[66, 65],
										[67, 73],
										[67, 80],
										[73, 67],
										[80, 84]
									]
								},
								r = t.__addimage__.getImageFileTypeByImageData = function(t, r) {
									var i, o;
									r = r || e;
									var a, s, c, u = e;
									if (L(t))
										for (c in n)
											for (a = n[c], i = 0; i < a.length; i += 1) {
												for (s = !0, o = 0; o < a[i].length; o += 1)
													if (void 0 !== a[i][o] && a[i][o] !== t[o]) {
														s = !1;
														break
													} if (!0 === s) {
													u = c;
													break
												}
											} else
												for (c in n)
													for (a = n[c], i = 0; i < a.length; i += 1) {
														for (s = !0, o = 0; o < a[i].length; o += 1)
															if (void 0 !== a[i][o] && a[i][o] !== t.charCodeAt(o)) {
																s = !1;
																break
															} if (!0 === s) {
															u = c;
															break
														}
													}
									return u === e && r !== e && (u = r), u
								},
								i = function(t) {
									for (var e = this.internal.write, n = this.internal.putStream, r = (0, this.internal.getFilters)(); - 1 !== r.indexOf("FlateEncode");) r.splice(r.indexOf("FlateEncode"), 1);
									t.objectId = this.internal.newObject();
									var o = [];
									if (o.push({
											key: "Type",
											value: "/XObject"
										}), o.push({
											key: "Subtype",
											value: "/Image"
										}), o.push({
											key: "Width",
											value: t.width
										}), o.push({
											key: "Height",
											value: t.height
										}), t.colorSpace === v.INDEXED ? o.push({
											key: "ColorSpace",
											value: "[/Indexed /DeviceRGB " + (t.palette.length / 3 - 1) + " " + ("sMask" in t && void 0 !== t.sMask ? t.objectId + 2 : t.objectId + 1) + " 0 R]"
										}) : (o.push({
											key: "ColorSpace",
											value: "/" + t.colorSpace
										}), t.colorSpace === v.DEVICE_CMYK && o.push({
											key: "Decode",
											value: "[1 0 1 0 1 0 1 0]"
										})), o.push({
											key: "BitsPerComponent",
											value: t.bitsPerComponent
										}), "decodeParameters" in t && void 0 !== t.decodeParameters && o.push({
											key: "DecodeParms",
											value: "<<" + t.decodeParameters + ">>"
										}), "transparency" in t && Array.isArray(t.transparency)) {
										for (var a = "", s = 0, c = t.transparency.length; s < c; s++) a += t.transparency[s] + " " + t.transparency[s] + " ";
										o.push({
											key: "Mask",
											value: "[" + a + "]"
										})
									}
									void 0 !== t.sMask && o.push({
										key: "SMask",
										value: t.objectId + 1 + " 0 R"
									});
									var u = void 0 !== t.filter ? ["/" + t.filter] : void 0;
									if (n({
											data: t.data,
											additionalKeyValues: o,
											alreadyAppliedFilters: u,
											objectId: t.objectId
										}), e("endobj"), "sMask" in t && void 0 !== t.sMask) {
										var l = "/Predictor " + t.predictor + " /Colors 1 /BitsPerComponent " + t.bitsPerComponent + " /Columns " + t.width,
											h = {
												width: t.width,
												height: t.height,
												colorSpace: "DeviceGray",
												bitsPerComponent: t.bitsPerComponent,
												decodeParameters: l,
												data: t.sMask
											};
										"filter" in t && (h.filter = t.filter), i.call(this, h)
									}
									if (t.colorSpace === v.INDEXED) {
										var f = this.internal.newObject();
										n({
											data: A(new Uint8Array(t.palette)),
											objectId: f
										}), e("endobj")
									}
								},
								o = function() {
									var t = this.internal.collections.addImage_images;
									for (var e in t) i.call(this, t[e])
								},
								a = function() {
									var t, e = this.internal.collections.addImage_images,
										n = this.internal.write;
									for (var r in e) n("/I" + (t = e[r]).index, t.objectId, "0", "R")
								},
								s = function() {
									this.internal.collections.addImage_images || (this.internal.collections.addImage_images = {}, this.internal.events.subscribe("putResources", o), this.internal.events.subscribe("putXobjectDict", a))
								},
								c = function() {
									var t = this.internal.collections.addImage_images;
									return s.call(this), t
								},
								u = function() {
									return Object.keys(this.internal.collections.addImage_images).length
								},
								l = function(e) {
									return "function" == typeof t["process" + e.toUpperCase()]
								},
								h = function(t) {
									return "object" == typeof t && 1 === t.nodeType
								},
								f = function(e, n) {
									if ("IMG" === e.nodeName && e.hasAttribute("src")) {
										var r = "" + e.getAttribute("src");
										if (0 === r.indexOf("data:image/")) return K(unescape(r).split("base64,").pop());
										var i = t.loadFile(r, !0);
										if (void 0 !== i) return i
									}
									if ("CANVAS" === e.nodeName) {
										var o;
										switch (n) {
											case "PNG":
												o = "image/png";
												break;
											case "WEBP":
												o = "image/webp";
												break;
											case "JPEG":
											case "JPG":
											default:
												o = "image/jpeg"
										}
										return K(e.toDataURL(o, 1).split("base64,").pop())
									}
								},
								d = function(t) {
									var e = this.internal.collections.addImage_images;
									if (e)
										for (var n in e)
											if (t === e[n].alias) return e[n]
								},
								p = function(t, e, n) {
									return t || e || (t = -96, e = -96), t < 0 && (t = -1 * n.width * 72 / t / this.internal.scaleFactor), e < 0 && (e = -1 * n.height * 72 / e / this.internal.scaleFactor), 0 === t && (t = e * n.width / n.height), 0 === e && (e = t * n.height / n.width), [t, e]
								},
								g = function(t, e, n, r, i, o) {
									var a = p.call(this, n, r, i),
										s = this.internal.getCoordinateString,
										u = this.internal.getVerticalCoordinateString,
										l = c.call(this);
									if (n = a[0], r = a[1], l[i.index] = i, o) {
										o *= Math.PI / 180;
										var h = Math.cos(o),
											f = Math.sin(o),
											d = function(t) {
												return t.toFixed(4)
											},
											g = [d(h), d(f), d(-1 * f), d(h), 0, 0, "cm"]
									}
									this.internal.write("q"), o ? (this.internal.write([1, "0", "0", 1, s(t), u(e + r), "cm"].join(" ")), this.internal.write(g.join(" ")), this.internal.write([s(n), "0", "0", s(r), "0", "0", "cm"].join(" "))) : this.internal.write([s(n), "0", "0", s(r), s(t), u(e + r), "cm"].join(" ")), this.isAdvancedAPI() && this.internal.write([1, 0, 0, -1, 0, 0, "cm"].join(" ")), this.internal.write("/I" + i.index + " Do"), this.internal.write("Q")
								},
								v = t.color_spaces = {
									DEVICE_RGB: "DeviceRGB",
									DEVICE_GRAY: "DeviceGray",
									DEVICE_CMYK: "DeviceCMYK",
									CAL_GREY: "CalGray",
									CAL_RGB: "CalRGB",
									LAB: "Lab",
									ICC_BASED: "ICCBased",
									INDEXED: "Indexed",
									PATTERN: "Pattern",
									SEPARATION: "Separation",
									DEVICE_N: "DeviceN"
								};
							t.decode = {
								DCT_DECODE: "DCTDecode",
								FLATE_DECODE: "FlateDecode",
								LZW_DECODE: "LZWDecode",
								JPX_DECODE: "JPXDecode",
								JBIG2_DECODE: "JBIG2Decode",
								ASCII85_DECODE: "ASCII85Decode",
								ASCII_HEX_DECODE: "ASCIIHexDecode",
								RUN_LENGTH_DECODE: "RunLengthDecode",
								CCITT_FAX_DECODE: "CCITTFaxDecode"
							};
							var m = t.image_compression = {
									NONE: "NONE",
									FAST: "FAST",
									MEDIUM: "MEDIUM",
									SLOW: "SLOW"
								},
								b = t.__addimage__.sHashCode = function(t) {
									var e, n, r = 0;
									if ("string" == typeof t)
										for (n = t.length, e = 0; e < n; e++) r = (r << 5) - r + t.charCodeAt(e), r |= 0;
									else if (L(t))
										for (n = t.byteLength / 2, e = 0; e < n; e++) r = (r << 5) - r + t[e], r |= 0;
									return r
								},
								y = t.__addimage__.validateStringAsBase64 = function(t) {
									(t = t || "").toString().trim();
									var e = !0;
									return 0 === t.length && (e = !1), t.length % 4 != 0 && (e = !1), !1 === /^[A-Za-z0-9+/]+$/.test(t.substr(0, t.length - 2)) && (e = !1), !1 === /^[A-Za-z0-9/][A-Za-z0-9+/]|[A-Za-z0-9+/]=|==$/.test(t.substr(-2)) && (e = !1), e
								},
								w = t.__addimage__.extractImageFromDataUrl = function(t) {
									var e = (t = t || "").split("base64,"),
										n = null;
									if (2 === e.length) {
										var r = /^data:(\w*\/\w*);*(charset=(?!charset=)[\w=-]*)*;*$/.exec(e[0]);
										Array.isArray(r) && (n = {
											mimeType: r[1],
											charset: r[2],
											data: e[1]
										})
									}
									return n
								},
								N = t.__addimage__.supportsArrayBuffer = function() {
									return "undefined" != typeof ArrayBuffer && "undefined" != typeof Uint8Array
								};
							t.__addimage__.isArrayBuffer = function(t) {
								return N() && t instanceof ArrayBuffer
							};
							var L = t.__addimage__.isArrayBufferView = function(t) {
									return N() && "undefined" != typeof Uint32Array && (t instanceof Int8Array || t instanceof Uint8Array || "undefined" != typeof Uint8ClampedArray && t instanceof Uint8ClampedArray || t instanceof Int16Array || t instanceof Uint16Array || t instanceof Int32Array || t instanceof Uint32Array || t instanceof Float32Array || t instanceof Float64Array)
								},
								x = t.__addimage__.binaryStringToUint8Array = function(t) {
									for (var e = t.length, n = new Uint8Array(e), r = 0; r < e; r++) n[r] = t.charCodeAt(r);
									return n
								},
								A = t.__addimage__.arrayBufferToBinaryString = function(t) {
									try {
										return K(Z(String.fromCharCode.apply(null, t)))
									} catch (e) {
										if ("undefined" != typeof Uint8Array && void 0 !== Uint8Array.prototype.reduce) return new Uint8Array(t).reduce((function(t, e) {
											return t.push(String.fromCharCode(e)), t
										}), []).join("")
									}
								};
							t.addImage = function() {
								var t, n, r, i, o, a, c, u, l;
								if ("number" == typeof arguments[1] ? (n = e, r = arguments[1], i = arguments[2], o = arguments[3], a = arguments[4], c = arguments[5], u = arguments[6], l = arguments[7]) : (n = arguments[1], r = arguments[2], i = arguments[3], o = arguments[4], a = arguments[5], c = arguments[6], u = arguments[7], l = arguments[8]), "object" == typeof(t = arguments[0]) && !h(t) && "imageData" in t) {
									var f = t;
									t = f.imageData, n = f.format || n || e, r = f.x || r || 0, i = f.y || i || 0, o = f.w || f.width || o, a = f.h || f.height || a, c = f.alias || c, u = f.compression || u, l = f.rotation || f.angle || l
								}
								var d = this.internal.getFilters();
								if (void 0 === u && -1 !== d.indexOf("FlateEncode") && (u = "SLOW"), isNaN(r) || isNaN(i)) throw new Error("Invalid coordinates passed to jsPDF.addImage");
								s.call(this);
								var p = S.call(this, t, n, c, u);
								return g.call(this, r, i, o, a, p, l), this
							};
							var S = function(n, i, o, a) {
									var s, c, p;
									if ("string" == typeof n && r(n) === e) {
										n = unescape(n);
										var g = _(n, !1);
										("" !== g || void 0 !== (g = t.loadFile(n, !0))) && (n = g)
									}
									if (h(n) && (n = f(n, i)), i = r(n, i), !l(i)) throw new Error("addImage does not support files of type '" + i + "', please ensure that a plugin for '" + i + "' support is added.");
									if ((null == (p = o) || 0 === p.length) && (o = function(t) {
											return "string" == typeof t || L(t) ? b(t) : null
										}(n)), (s = d.call(this, o)) || (N() && (n instanceof Uint8Array || (c = n, n = x(n))), s = this["process" + i.toUpperCase()](n, u.call(this), o, function(e) {
											return e && "string" == typeof e && (e = e.toUpperCase()), e in t.image_compression ? e : m.NONE
										}(a), c)), !s) throw new Error("An unknown error occurred whilst processing the image.");
									return s
								},
								_ = t.__addimage__.convertBase64ToBinaryString = function(t, e) {
									var n;
									e = "boolean" != typeof e || e;
									var r, i = "";
									if ("string" == typeof t) {
										r = null !== (n = w(t)) ? n.data : t;
										try {
											i = K(r)
										} catch (t) {
											if (e) throw y(r) ? new Error("atob-Error in jsPDF.convertBase64ToBinaryString " + t.message) : new Error("Supplied Data is not a valid base64-String jsPDF.convertBase64ToBinaryString ")
										}
									}
									return i
								};
							t.getImageProperties = function(n) {
								var i, o, a = "";
								if (h(n) && (n = f(n)), "string" == typeof n && r(n) === e && ("" === (a = _(n, !1)) && (a = t.loadFile(n) || ""), n = a), o = r(n), !l(o)) throw new Error("addImage does not support files of type '" + o + "', please ensure that a plugin for '" + o + "' support is added.");
								if (!N() || n instanceof Uint8Array || (n = x(n)), !(i = this["process" + o.toUpperCase()](n))) throw new Error("An unknown error occurred whilst processing the image");
								return i.fileType = o, i
							}
						}(Nt.API), se = Nt.API, ce = function(t) {
							if (void 0 !== t && "" != t) return !0
						}, Nt.API.events.push(["addPage", function(t) {
							this.internal.getPageInfo(t.pageNumber).pageContext.annotations = []
						}]), se.events.push(["putPage", function(t) {
							for (var e, n, r, i = this.internal.getCoordinateString, o = this.internal.getVerticalCoordinateString, a = this.internal.getPageInfoByObjId(t.objId), s = t.pageContext.annotations, c = !1, u = 0; u < s.length && !c; u++) switch ((e = s[u]).type) {
								case "link":
									(ce(e.options.url) || ce(e.options.pageNumber)) && (c = !0);
									break;
								case "reference":
								case "text":
								case "freetext":
									c = !0
							}
							if (0 != c) {
								this.internal.write("/Annots [");
								for (var l = 0; l < s.length; l++) {
									e = s[l];
									var h = this.internal.pdfEscape,
										f = this.internal.getEncryptor(t.objId);
									switch (e.type) {
										case "reference":
											this.internal.write(" " + e.object.objId + " 0 R ");
											break;
										case "text":
											var d = this.internal.newAdditionalObject(),
												p = this.internal.newAdditionalObject(),
												g = this.internal.getEncryptor(d.objId),
												v = e.title || "Note";
											r = "<</Type /Annot /Subtype /Text " + (n = "/Rect [" + i(e.bounds.x) + " " + o(e.bounds.y + e.bounds.h) + " " + i(e.bounds.x + e.bounds.w) + " " + o(e.bounds.y) + "] ") + "/Contents (" + h(g(e.contents)) + ")", r += " /Popup " + p.objId + " 0 R", r += " /P " + a.objId + " 0 R", r += " /T (" + h(g(v)) + ") >>", d.content = r;
											var m = d.objId + " 0 R";
											r = "<</Type /Annot /Subtype /Popup " + (n = "/Rect [" + i(e.bounds.x + 30) + " " + o(e.bounds.y + e.bounds.h) + " " + i(e.bounds.x + e.bounds.w + 30) + " " + o(e.bounds.y) + "] ") + " /Parent " + m, e.open && (r += " /Open true"), r += " >>", p.content = r, this.internal.write(d.objId, "0 R", p.objId, "0 R");
											break;
										case "freetext":
											n = "/Rect [" + i(e.bounds.x) + " " + o(e.bounds.y) + " " + i(e.bounds.x + e.bounds.w) + " " + o(e.bounds.y + e.bounds.h) + "] ";
											var b = e.color || "#000000";
											r = "<</Type /Annot /Subtype /FreeText " + n + "/Contents (" + h(f(e.contents)) + ")", r += " /DS(font: Helvetica,sans-serif 12.0pt; text-align:left; color:#" + b + ")", r += " /Border [0 0 0]", r += " >>", this.internal.write(r);
											break;
										case "link":
											if (e.options.name) {
												var y = this.annotations._nameMap[e.options.name];
												e.options.pageNumber = y.page, e.options.top = y.y
											} else e.options.top || (e.options.top = 0);
											if (n = "/Rect [" + e.finalBounds.x + " " + e.finalBounds.y + " " + e.finalBounds.w + " " + e.finalBounds.h + "] ", r = "", e.options.url) r = "<</Type /Annot /Subtype /Link " + n + "/Border [0 0 0] /A <</S /URI /URI (" + h(f(e.options.url)) + ") >>";
											else if (e.options.pageNumber) switch (r = "<</Type /Annot /Subtype /Link " + n + "/Border [0 0 0] /Dest [" + this.internal.getPageInfo(e.options.pageNumber).objId + " 0 R", e.options.magFactor = e.options.magFactor || "XYZ", e.options.magFactor) {
												case "Fit":
													r += " /Fit]";
													break;
												case "FitH":
													r += " /FitH " + e.options.top + "]";
													break;
												case "FitV":
													e.options.left = e.options.left || 0, r += " /FitV " + e.options.left + "]";
													break;
												case "XYZ":
												default:
													var w = o(e.options.top);
													e.options.left = e.options.left || 0, void 0 === e.options.zoom && (e.options.zoom = 0), r += " /XYZ " + e.options.left + " " + w + " " + e.options.zoom + "]"
											}
											"" != r && (r += " >>", this.internal.write(r))
									}
								}
								this.internal.write("]")
							}
						}]), se.createAnnotation = function(t) {
							var e = this.internal.getCurrentPageInfo();
							switch (t.type) {
								case "link":
									this.link(t.bounds.x, t.bounds.y, t.bounds.w, t.bounds.h, t);
									break;
								case "text":
								case "freetext":
									e.pageContext.annotations.push(t)
							}
						}, se.link = function(t, e, n, r, i) {
							var o = this.internal.getCurrentPageInfo(),
								a = this.internal.getCoordinateString,
								s = this.internal.getVerticalCoordinateString;
							o.pageContext.annotations.push({
								finalBounds: {
									x: a(t),
									y: s(e),
									w: a(t + n),
									h: s(e + r)
								},
								options: i,
								type: "link"
							})
						}, se.textWithLink = function(t, e, n, r) {
							var i = this.getTextWidth(t),
								o = this.internal.getLineHeight() / this.internal.scaleFactor;
							return this.text(t, e, n, r), n += .2 * o, "center" === r.align && (e -= i / 2), "right" === r.align && (e -= i), this.link(e, n - o, i, o, r), i
						}, se.getTextWidth = function(t) {
							var e = this.internal.getFontSize();
							return this.getStringUnitWidth(t) * e / this.internal.scaleFactor
						},
						function(t) {
							var e = {
									1569: [65152],
									1570: [65153, 65154],
									1571: [65155, 65156],
									1572: [65157, 65158],
									1573: [65159, 65160],
									1574: [65161, 65162, 65163, 65164],
									1575: [65165, 65166],
									1576: [65167, 65168, 65169, 65170],
									1577: [65171, 65172],
									1578: [65173, 65174, 65175, 65176],
									1579: [65177, 65178, 65179, 65180],
									1580: [65181, 65182, 65183, 65184],
									1581: [65185, 65186, 65187, 65188],
									1582: [65189, 65190, 65191, 65192],
									1583: [65193, 65194],
									1584: [65195, 65196],
									1585: [65197, 65198],
									1586: [65199, 65200],
									1587: [65201, 65202, 65203, 65204],
									1588: [65205, 65206, 65207, 65208],
									1589: [65209, 65210, 65211, 65212],
									1590: [65213, 65214, 65215, 65216],
									1591: [65217, 65218, 65219, 65220],
									1592: [65221, 65222, 65223, 65224],
									1593: [65225, 65226, 65227, 65228],
									1594: [65229, 65230, 65231, 65232],
									1601: [65233, 65234, 65235, 65236],
									1602: [65237, 65238, 65239, 65240],
									1603: [65241, 65242, 65243, 65244],
									1604: [65245, 65246, 65247, 65248],
									1605: [65249, 65250, 65251, 65252],
									1606: [65253, 65254, 65255, 65256],
									1607: [65257, 65258, 65259, 65260],
									1608: [65261, 65262],
									1609: [65263, 65264, 64488, 64489],
									1610: [65265, 65266, 65267, 65268],
									1649: [64336, 64337],
									1655: [64477],
									1657: [64358, 64359, 64360, 64361],
									1658: [64350, 64351, 64352, 64353],
									1659: [64338, 64339, 64340, 64341],
									1662: [64342, 64343, 64344, 64345],
									1663: [64354, 64355, 64356, 64357],
									1664: [64346, 64347, 64348, 64349],
									1667: [64374, 64375, 64376, 64377],
									1668: [64370, 64371, 64372, 64373],
									1670: [64378, 64379, 64380, 64381],
									1671: [64382, 64383, 64384, 64385],
									1672: [64392, 64393],
									1676: [64388, 64389],
									1677: [64386, 64387],
									1678: [64390, 64391],
									1681: [64396, 64397],
									1688: [64394, 64395],
									1700: [64362, 64363, 64364, 64365],
									1702: [64366, 64367, 64368, 64369],
									1705: [64398, 64399, 64400, 64401],
									1709: [64467, 64468, 64469, 64470],
									1711: [64402, 64403, 64404, 64405],
									1713: [64410, 64411, 64412, 64413],
									1715: [64406, 64407, 64408, 64409],
									1722: [64414, 64415],
									1723: [64416, 64417, 64418, 64419],
									1726: [64426, 64427, 64428, 64429],
									1728: [64420, 64421],
									1729: [64422, 64423, 64424, 64425],
									1733: [64480, 64481],
									1734: [64473, 64474],
									1735: [64471, 64472],
									1736: [64475, 64476],
									1737: [64482, 64483],
									1739: [64478, 64479],
									1740: [64508, 64509, 64510, 64511],
									1744: [64484, 64485, 64486, 64487],
									1746: [64430, 64431],
									1747: [64432, 64433]
								},
								n = {
									65247: {
										65154: 65269,
										65156: 65271,
										65160: 65273,
										65166: 65275
									},
									65248: {
										65154: 65270,
										65156: 65272,
										65160: 65274,
										65166: 65276
									},
									65165: {
										65247: {
											65248: {
												65258: 65010
											}
										}
									},
									1617: {
										1612: 64606,
										1613: 64607,
										1614: 64608,
										1615: 64609,
										1616: 64610
									}
								},
								r = {
									1612: 64606,
									1613: 64607,
									1614: 64608,
									1615: 64609,
									1616: 64610
								},
								i = [1570, 1571, 1573, 1575];
							t.__arabicParser__ = {};
							var o = t.__arabicParser__.isInArabicSubstitutionA = function(t) {
									return void 0 !== e[t.charCodeAt(0)]
								},
								a = t.__arabicParser__.isArabicLetter = function(t) {
									return "string" == typeof t && /^[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]+$/.test(t)
								},
								s = t.__arabicParser__.isArabicEndLetter = function(t) {
									return a(t) && o(t) && e[t.charCodeAt(0)].length <= 2
								},
								c = t.__arabicParser__.isArabicAlfLetter = function(t) {
									return a(t) && i.indexOf(t.charCodeAt(0)) >= 0
								};
							t.__arabicParser__.arabicLetterHasIsolatedForm = function(t) {
								return a(t) && o(t) && e[t.charCodeAt(0)].length >= 1
							};
							var u = t.__arabicParser__.arabicLetterHasFinalForm = function(t) {
								return a(t) && o(t) && e[t.charCodeAt(0)].length >= 2
							};
							t.__arabicParser__.arabicLetterHasInitialForm = function(t) {
								return a(t) && o(t) && e[t.charCodeAt(0)].length >= 3
							};
							var l = t.__arabicParser__.arabicLetterHasMedialForm = function(t) {
									return a(t) && o(t) && 4 == e[t.charCodeAt(0)].length
								},
								h = t.__arabicParser__.resolveLigatures = function(t) {
									var e = 0,
										r = n,
										i = "",
										o = 0;
									for (e = 0; e < t.length; e += 1) void 0 !== r[t.charCodeAt(e)] ? (o++, "number" == typeof(r = r[t.charCodeAt(e)]) && (i += String.fromCharCode(r), r = n, o = 0), e === t.length - 1 && (r = n, i += t.charAt(e - (o - 1)), e -= o - 1, o = 0)) : (r = n, i += t.charAt(e - o), e -= o, o = 0);
									return i
								};
							t.__arabicParser__.isArabicDiacritic = function(t) {
								return void 0 !== t && void 0 !== r[t.charCodeAt(0)]
							};
							var f = t.__arabicParser__.getCorrectForm = function(t, e, n) {
									return a(t) ? !1 === o(t) ? -1 : !u(t) || !a(e) && !a(n) || !a(n) && s(e) || s(t) && !a(e) || s(t) && c(e) || s(t) && s(e) ? 0 : l(t) && a(e) && !s(e) && a(n) && u(n) ? 3 : s(t) || !a(n) ? 1 : 2 : -1
								},
								d = function(t) {
									var n = 0,
										r = 0,
										i = 0,
										o = "",
										s = "",
										c = "",
										u = (t = t || "").split("\\s+"),
										l = [];
									for (n = 0; n < u.length; n += 1) {
										for (l.push(""), r = 0; r < u[n].length; r += 1) o = u[n][r], s = u[n][r - 1], c = u[n][r + 1], a(o) ? (i = f(o, s, c), l[n] += -1 !== i ? String.fromCharCode(e[o.charCodeAt(0)][i]) : o) : l[n] += o;
										l[n] = h(l[n])
									}
									return l.join(" ")
								},
								p = t.__arabicParser__.processArabic = t.processArabic = function() {
									var t, e = "string" == typeof arguments[0] ? arguments[0] : arguments[0].text,
										n = [];
									if (Array.isArray(e)) {
										var r = 0;
										for (n = [], r = 0; r < e.length; r += 1) Array.isArray(e[r]) ? n.push([d(e[r][0]), e[r][1], e[r][2]]) : n.push([d(e[r])]);
										t = n
									} else t = d(e);
									return "string" == typeof arguments[0] ? t : (arguments[0].text = t, arguments[0])
								};
							t.events.push(["preProcessText", p])
						}(Nt.API), Nt.API.autoPrint = function(t) {
							var e;
							switch ((t = t || {}).variant = t.variant || "non-conform", t.variant) {
								case "javascript":
									this.addJS("print({});");
									break;
								case "non-conform":
								default:
									this.internal.events.subscribe("postPutResources", (function() {
										e = this.internal.newObject(), this.internal.out("<<"), this.internal.out("/S /Named"), this.internal.out("/Type /Action"), this.internal.out("/N /Print"), this.internal.out(">>"), this.internal.out("endobj")
									})), this.internal.events.subscribe("putCatalog", (function() {
										this.internal.out("/OpenAction " + e + " 0 R")
									}))
							}
							return this
						},
						function(t) {
							var e = function() {
								var t = void 0;
								Object.defineProperty(this, "pdf", {
									get: function() {
										return t
									},
									set: function(e) {
										t = e
									}
								});
								var e = 150;
								Object.defineProperty(this, "width", {
									get: function() {
										return e
									},
									set: function(t) {
										e = isNaN(t) || !1 === Number.isInteger(t) || t < 0 ? 150 : t, this.getContext("2d").pageWrapXEnabled && (this.getContext("2d").pageWrapX = e + 1)
									}
								});
								var n = 300;
								Object.defineProperty(this, "height", {
									get: function() {
										return n
									},
									set: function(t) {
										n = isNaN(t) || !1 === Number.isInteger(t) || t < 0 ? 300 : t, this.getContext("2d").pageWrapYEnabled && (this.getContext("2d").pageWrapY = n + 1)
									}
								});
								var r = [];
								Object.defineProperty(this, "childNodes", {
									get: function() {
										return r
									},
									set: function(t) {
										r = t
									}
								});
								var i = {};
								Object.defineProperty(this, "style", {
									get: function() {
										return i
									},
									set: function(t) {
										i = t
									}
								}), Object.defineProperty(this, "parentNode", {})
							};
							e.prototype.getContext = function(t, e) {
								var n;
								if ("2d" !== (t = t || "2d")) return null;
								for (n in e) this.pdf.context2d.hasOwnProperty(n) && (this.pdf.context2d[n] = e[n]);
								return this.pdf.context2d._canvas = this, this.pdf.context2d
							}, e.prototype.toDataURL = function() {
								throw new Error("toDataURL is not implemented.")
							}, t.events.push(["initialized", function() {
								this.canvas = new e, this.canvas.pdf = this
							}])
						}(Nt.API),
						function(t) {
							var e = {
									left: 0,
									top: 0,
									bottom: 0,
									right: 0
								},
								n = !1,
								r = function() {
									void 0 === this.internal.__cell__ && (this.internal.__cell__ = {}, this.internal.__cell__.padding = 3, this.internal.__cell__.headerFunction = void 0, this.internal.__cell__.margins = Object.assign({}, e), this.internal.__cell__.margins.width = this.getPageWidth(), i.call(this))
								},
								i = function() {
									this.internal.__cell__.lastCell = new o, this.internal.__cell__.pages = 1
								},
								o = function() {
									var t = arguments[0];
									Object.defineProperty(this, "x", {
										enumerable: !0,
										get: function() {
											return t
										},
										set: function(e) {
											t = e
										}
									});
									var e = arguments[1];
									Object.defineProperty(this, "y", {
										enumerable: !0,
										get: function() {
											return e
										},
										set: function(t) {
											e = t
										}
									});
									var n = arguments[2];
									Object.defineProperty(this, "width", {
										enumerable: !0,
										get: function() {
											return n
										},
										set: function(t) {
											n = t
										}
									});
									var r = arguments[3];
									Object.defineProperty(this, "height", {
										enumerable: !0,
										get: function() {
											return r
										},
										set: function(t) {
											r = t
										}
									});
									var i = arguments[4];
									Object.defineProperty(this, "text", {
										enumerable: !0,
										get: function() {
											return i
										},
										set: function(t) {
											i = t
										}
									});
									var o = arguments[5];
									Object.defineProperty(this, "lineNumber", {
										enumerable: !0,
										get: function() {
											return o
										},
										set: function(t) {
											o = t
										}
									});
									var a = arguments[6];
									return Object.defineProperty(this, "align", {
										enumerable: !0,
										get: function() {
											return a
										},
										set: function(t) {
											a = t
										}
									}), this
								};
							o.prototype.clone = function() {
								return new o(this.x, this.y, this.width, this.height, this.text, this.lineNumber, this.align)
							}, o.prototype.toArray = function() {
								return [this.x, this.y, this.width, this.height, this.text, this.lineNumber, this.align]
							}, t.setHeaderFunction = function(t) {
								return r.call(this), this.internal.__cell__.headerFunction = "function" == typeof t ? t : void 0, this
							}, t.getTextDimensions = function(t, e) {
								r.call(this);
								var n = (e = e || {}).fontSize || this.getFontSize(),
									i = e.font || this.getFont(),
									o = e.scaleFactor || this.internal.scaleFactor,
									a = 0,
									s = 0,
									c = 0,
									u = this;
								if (!Array.isArray(t) && "string" != typeof t) {
									if ("number" != typeof t) throw new Error("getTextDimensions expects text-parameter to be of type String or type Number or an Array of Strings.");
									t = String(t)
								}
								const l = e.maxWidth;
								l > 0 ? "string" == typeof t ? t = this.splitTextToSize(t, l) : "[object Array]" === Object.prototype.toString.call(t) && (t = t.reduce((function(t, e) {
									return t.concat(u.splitTextToSize(e, l))
								}), [])) : t = Array.isArray(t) ? t : [t];
								for (var h = 0; h < t.length; h++) a < (c = this.getStringUnitWidth(t[h], {
									font: i
								}) * n) && (a = c);
								return 0 !== a && (s = t.length), {
									w: a /= o,
									h: Math.max((s * n * this.getLineHeightFactor() - n * (this.getLineHeightFactor() - 1)) / o, 0)
								}
							}, t.cellAddPage = function() {
								r.call(this), this.addPage();
								var t = this.internal.__cell__.margins || e;
								return this.internal.__cell__.lastCell = new o(t.left, t.top, void 0, void 0), this.internal.__cell__.pages += 1, this
							};
							var a = t.cell = function() {
								var t;
								t = arguments[0] instanceof o ? arguments[0] : new o(arguments[0], arguments[1], arguments[2], arguments[3], arguments[4], arguments[5]), r.call(this);
								var i = this.internal.__cell__.lastCell,
									a = this.internal.__cell__.padding,
									s = this.internal.__cell__.margins || e,
									c = this.internal.__cell__.tableHeaderRow,
									u = this.internal.__cell__.printHeaders;
								return void 0 !== i.lineNumber && (i.lineNumber === t.lineNumber ? (t.x = (i.x || 0) + (i.width || 0), t.y = i.y || 0) : i.y + i.height + t.height + s.bottom > this.getPageHeight() ? (this.cellAddPage(), t.y = s.top, u && c && (this.printHeaderRow(t.lineNumber, !0), t.y += c[0].height)) : t.y = i.y + i.height || t.y), void 0 !== t.text[0] && (this.rect(t.x, t.y, t.width, t.height, !0 === n ? "FD" : void 0), "right" === t.align ? this.text(t.text, t.x + t.width - a, t.y + a, {
									align: "right",
									baseline: "top"
								}) : "center" === t.align ? this.text(t.text, t.x + t.width / 2, t.y + a, {
									align: "center",
									baseline: "top",
									maxWidth: t.width - a - a
								}) : this.text(t.text, t.x + a, t.y + a, {
									align: "left",
									baseline: "top",
									maxWidth: t.width - a - a
								})), this.internal.__cell__.lastCell = t, this
							};
							t.table = function(t, n, c, u, l) {
								if (r.call(this), !c) throw new Error("No data for PDF table.");
								var h, f, d, p, g = [],
									v = [],
									m = [],
									b = {},
									y = {},
									w = [],
									N = [],
									L = (l = l || {}).autoSize || !1,
									x = !1 !== l.printHeaders,
									A = l.css && void 0 !== l.css["font-size"] ? 16 * l.css["font-size"] : l.fontSize || 12,
									S = l.margins || Object.assign({
										width: this.getPageWidth()
									}, e),
									_ = "number" == typeof l.padding ? l.padding : 3,
									P = l.headerBackgroundColor || "#c8c8c8";
								if (i.call(this), this.internal.__cell__.printHeaders = x, this.internal.__cell__.margins = S, this.internal.__cell__.table_font_size = A, this.internal.__cell__.padding = _, this.internal.__cell__.headerBackgroundColor = P, this.setFontSize(A), null == u) v = g = Object.keys(c[0]), m = g.map((function() {
									return "left"
								}));
								else if (Array.isArray(u) && "object" == typeof u[0])
									for (g = u.map((function(t) {
											return t.name
										})), v = u.map((function(t) {
											return t.prompt || t.name || ""
										})), m = u.map((function(t) {
											return t.align || "left"
										})), h = 0; h < u.length; h += 1) y[u[h].name] = u[h].width * (19.049976 / 25.4);
								else Array.isArray(u) && "string" == typeof u[0] && (v = g = u, m = g.map((function() {
									return "left"
								})));
								if (L || Array.isArray(u) && "string" == typeof u[0])
									for (h = 0; h < g.length; h += 1) {
										for (b[p = g[h]] = c.map((function(t) {
												return t[p]
											})), this.setFont(void 0, "bold"), w.push(this.getTextDimensions(v[h], {
												fontSize: this.internal.__cell__.table_font_size,
												scaleFactor: this.internal.scaleFactor
											}).w), f = b[p], this.setFont(void 0, "normal"), d = 0; d < f.length; d += 1) w.push(this.getTextDimensions(f[d], {
											fontSize: this.internal.__cell__.table_font_size,
											scaleFactor: this.internal.scaleFactor
										}).w);
										y[p] = Math.max.apply(null, w) + _ + _, w = []
									}
								if (x) {
									var k = {};
									for (h = 0; h < g.length; h += 1) k[g[h]] = {}, k[g[h]].text = v[h], k[g[h]].align = m[h];
									var F = s.call(this, k, y);
									N = g.map((function(e) {
										return new o(t, n, y[e], F, k[e].text, void 0, k[e].align)
									})), this.setTableHeaderRow(N), this.printHeaderRow(1, !1)
								}
								var I = u.reduce((function(t, e) {
									return t[e.name] = e.align, t
								}), {});
								for (h = 0; h < c.length; h += 1) {
									var C = s.call(this, c[h], y);
									for (d = 0; d < g.length; d += 1) a.call(this, new o(t, n, y[g[d]], C, c[h][g[d]], h + 2, I[g[d]]))
								}
								return this.internal.__cell__.table_x = t, this.internal.__cell__.table_y = n, this
							};
							var s = function(t, e) {
								var n = this.internal.__cell__.padding,
									r = this.internal.__cell__.table_font_size,
									i = this.internal.scaleFactor;
								return Object.keys(t).map((function(r) {
									var i = t[r];
									return this.splitTextToSize(i.hasOwnProperty("text") ? i.text : i, e[r] - n - n)
								}), this).map((function(t) {
									return this.getLineHeightFactor() * t.length * r / i + n + n
								}), this).reduce((function(t, e) {
									return Math.max(t, e)
								}), 0)
							};
							t.setTableHeaderRow = function(t) {
								r.call(this), this.internal.__cell__.tableHeaderRow = t
							}, t.printHeaderRow = function(t, e) {
								if (r.call(this), !this.internal.__cell__.tableHeaderRow) throw new Error("Property tableHeaderRow does not exist.");
								var i;
								if (n = !0, "function" == typeof this.internal.__cell__.headerFunction) {
									var s = this.internal.__cell__.headerFunction(this, this.internal.__cell__.pages);
									this.internal.__cell__.lastCell = new o(s[0], s[1], s[2], s[3], void 0, -1)
								}
								this.setFont(void 0, "bold");
								for (var c = [], u = 0; u < this.internal.__cell__.tableHeaderRow.length; u += 1) i = this.internal.__cell__.tableHeaderRow[u].clone(), e && (i.y = this.internal.__cell__.margins.top || 0, c.push(i)), i.lineNumber = t, this.setFillColor(this.internal.__cell__.headerBackgroundColor), a.call(this, i);
								c.length > 0 && this.setTableHeaderRow(c), this.setFont(void 0, "normal"), n = !1
							}
						}(Nt.API);
					var he = {
							italic: ["italic", "oblique", "normal"],
							oblique: ["oblique", "italic", "normal"],
							normal: ["normal", "oblique", "italic"]
						},
						fe = ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded"],
						de = le(fe),
						pe = [100, 200, 300, 400, 500, 600, 700, 800, 900],
						ge = le(pe);

					function ve(t) {
						var e = t.family.replace(/"|'/g, "").toLowerCase(),
							n = function(t) {
								return he[t = t || "normal"] ? t : "normal"
							}(t.style),
							r = function(t) {
								if (!t) return 400;
								if ("number" == typeof t) return t >= 100 && t <= 900 && t % 100 == 0 ? t : 400;
								if (/^\d00$/.test(t)) return parseInt(t);
								switch (t) {
									case "bold":
										return 700;
									case "normal":
									default:
										return 400
								}
							}(t.weight),
							i = function(t) {
								return "number" == typeof de[t = t || "normal"] ? t : "normal"
							}(t.stretch);
						return {
							family: e,
							style: n,
							weight: r,
							stretch: i,
							src: t.src || [],
							ref: t.ref || {
								name: e,
								style: [i, n, r].join(" ")
							}
						}
					}

					function me(t, e, n, r) {
						var i;
						for (i = n; i >= 0 && i < e.length; i += r)
							if (t[e[i]]) return t[e[i]];
						for (i = n; i >= 0 && i < e.length; i -= r)
							if (t[e[i]]) return t[e[i]]
					}
					var be = {
							"sans-serif": "helvetica",
							fixed: "courier",
							monospace: "courier",
							terminal: "courier",
							cursive: "times",
							fantasy: "times",
							serif: "times"
						},
						ye = {
							caption: "times",
							icon: "times",
							menu: "times",
							"message-box": "times",
							"small-caption": "times",
							"status-bar": "times"
						};

					function we(t) {
						return [t.stretch, t.style, t.weight, t.family].join(" ")
					}

					function Ne(t) {
						return t.trimLeft()
					}

					function Le(t, e) {
						for (var n = 0; n < t.length;) {
							if (t.charAt(n) === e) return [t.substring(0, n), t.substring(n + 1)];
							n += 1
						}
						return null
					}

					function xe(t) {
						var e = t.match(/^(-[a-z_]|[a-z_])[a-z0-9_-]*/i);
						return null === e ? null : [e[0], t.substring(e[0].length)]
					}
					var Ae, Se, _e, Pe = ["times"];
					! function(t) {
						var e, n, r, i, o, a, s, c, u, l = function(t) {
							return t = t || {}, this.isStrokeTransparent = t.isStrokeTransparent || !1, this.strokeOpacity = t.strokeOpacity || 1, this.strokeStyle = t.strokeStyle || "#000000", this.fillStyle = t.fillStyle || "#000000", this.isFillTransparent = t.isFillTransparent || !1, this.fillOpacity = t.fillOpacity || 1, this.font = t.font || "10px sans-serif", this.textBaseline = t.textBaseline || "alphabetic", this.textAlign = t.textAlign || "left", this.lineWidth = t.lineWidth || 1, this.lineJoin = t.lineJoin || "miter", this.lineCap = t.lineCap || "butt", this.path = t.path || [], this.transform = void 0 !== t.transform ? t.transform.clone() : new c, this.globalCompositeOperation = t.globalCompositeOperation || "normal", this.globalAlpha = t.globalAlpha || 1, this.clip_path = t.clip_path || [], this.currentPoint = t.currentPoint || new a, this.miterLimit = t.miterLimit || 10, this.lastPoint = t.lastPoint || new a, this.ignoreClearRect = "boolean" != typeof t.ignoreClearRect || t.ignoreClearRect, this
						};
						t.events.push(["initialized", function() {
							this.context2d = new h(this), e = this.internal.f2, n = this.internal.getCoordinateString, r = this.internal.getVerticalCoordinateString, i = this.internal.getHorizontalCoordinate, o = this.internal.getVerticalCoordinate, a = this.internal.Point, s = this.internal.Rectangle, c = this.internal.Matrix, u = new l
						}]);
						var h = function(t) {
							Object.defineProperty(this, "canvas", {
								get: function() {
									return {
										parentNode: !1,
										style: !1
									}
								}
							});
							var e = t;
							Object.defineProperty(this, "pdf", {
								get: function() {
									return e
								}
							});
							var n = !1;
							Object.defineProperty(this, "pageWrapXEnabled", {
								get: function() {
									return n
								},
								set: function(t) {
									n = Boolean(t)
								}
							});
							var r = !1;
							Object.defineProperty(this, "pageWrapYEnabled", {
								get: function() {
									return r
								},
								set: function(t) {
									r = Boolean(t)
								}
							});
							var i = 0;
							Object.defineProperty(this, "posX", {
								get: function() {
									return i
								},
								set: function(t) {
									isNaN(t) || (i = t)
								}
							});
							var o = 0;
							Object.defineProperty(this, "posY", {
								get: function() {
									return o
								},
								set: function(t) {
									isNaN(t) || (o = t)
								}
							});
							var a = !1;
							Object.defineProperty(this, "autoPaging", {
								get: function() {
									return a
								},
								set: function(t) {
									a = Boolean(t)
								}
							});
							var s = 0;
							Object.defineProperty(this, "lastBreak", {
								get: function() {
									return s
								},
								set: function(t) {
									s = t
								}
							});
							var c = [];
							Object.defineProperty(this, "pageBreaks", {
								get: function() {
									return c
								},
								set: function(t) {
									c = t
								}
							}), Object.defineProperty(this, "ctx", {
								get: function() {
									return u
								},
								set: function(t) {
									t instanceof l && (u = t)
								}
							}), Object.defineProperty(this, "path", {
								get: function() {
									return u.path
								},
								set: function(t) {
									u.path = t
								}
							});
							var h = [];
							Object.defineProperty(this, "ctxStack", {
								get: function() {
									return h
								},
								set: function(t) {
									h = t
								}
							}), Object.defineProperty(this, "fillStyle", {
								get: function() {
									return this.ctx.fillStyle
								},
								set: function(t) {
									var e;
									e = f(t), this.ctx.fillStyle = e.style, this.ctx.isFillTransparent = 0 === e.a, this.ctx.fillOpacity = e.a, this.pdf.setFillColor(e.r, e.g, e.b, {
										a: e.a
									}), this.pdf.setTextColor(e.r, e.g, e.b, {
										a: e.a
									})
								}
							}), Object.defineProperty(this, "strokeStyle", {
								get: function() {
									return this.ctx.strokeStyle
								},
								set: function(t) {
									var e = f(t);
									this.ctx.strokeStyle = e.style, this.ctx.isStrokeTransparent = 0 === e.a, this.ctx.strokeOpacity = e.a, 0 === e.a ? this.pdf.setDrawColor(255, 255, 255) : (e.a, this.pdf.setDrawColor(e.r, e.g, e.b))
								}
							}), Object.defineProperty(this, "lineCap", {
								get: function() {
									return this.ctx.lineCap
								},
								set: function(t) {
									-1 !== ["butt", "round", "square"].indexOf(t) && (this.ctx.lineCap = t, this.pdf.setLineCap(t))
								}
							}), Object.defineProperty(this, "lineWidth", {
								get: function() {
									return this.ctx.lineWidth
								},
								set: function(t) {
									isNaN(t) || (this.ctx.lineWidth = t, this.pdf.setLineWidth(t))
								}
							}), Object.defineProperty(this, "lineJoin", {
								get: function() {
									return this.ctx.lineJoin
								},
								set: function(t) {
									-1 !== ["bevel", "round", "miter"].indexOf(t) && (this.ctx.lineJoin = t, this.pdf.setLineJoin(t))
								}
							}), Object.defineProperty(this, "miterLimit", {
								get: function() {
									return this.ctx.miterLimit
								},
								set: function(t) {
									isNaN(t) || (this.ctx.miterLimit = t, this.pdf.setMiterLimit(t))
								}
							}), Object.defineProperty(this, "textBaseline", {
								get: function() {
									return this.ctx.textBaseline
								},
								set: function(t) {
									this.ctx.textBaseline = t
								}
							}), Object.defineProperty(this, "textAlign", {
								get: function() {
									return this.ctx.textAlign
								},
								set: function(t) {
									-1 !== ["right", "end", "center", "left", "start"].indexOf(t) && (this.ctx.textAlign = t)
								}
							});
							var d = null;

							function p(t, e) {
								if (null === d) {
									var n = function(t) {
										var e = [];
										return Object.keys(t).forEach((function(n) {
											t[n].forEach((function(t) {
												var r = null;
												switch (t) {
													case "bold":
														r = {
															family: n,
															weight: "bold"
														};
														break;
													case "italic":
														r = {
															family: n,
															style: "italic"
														};
														break;
													case "bolditalic":
														r = {
															family: n,
															weight: "bold",
															style: "italic"
														};
														break;
													case "":
													case "normal":
														r = {
															family: n
														}
												}
												null !== r && (r.ref = {
													name: n,
													style: t
												}, e.push(r))
											}))
										})), e
									}(t.getFontList());
									d = function(t) {
										for (var e = {}, n = 0; n < t.length; ++n) {
											var r = ve(t[n]),
												i = r.family,
												o = r.stretch,
												a = r.style,
												s = r.weight;
											e[i] = e[i] || {}, e[i][o] = e[i][o] || {}, e[i][o][a] = e[i][o][a] || {}, e[i][o][a][s] = r
										}
										return e
									}(n.concat(e))
								}
								return d
							}
							var g = null;
							Object.defineProperty(this, "fontFaces", {
								get: function() {
									return g
								},
								set: function(t) {
									d = null, g = t
								}
							}), Object.defineProperty(this, "font", {
								get: function() {
									return this.ctx.font
								},
								set: function(t) {
									var e;
									if (this.ctx.font = t, null !== (e = /^\s*(?=(?:(?:[-a-z]+\s*){0,2}(italic|oblique))?)(?=(?:(?:[-a-z]+\s*){0,2}(small-caps))?)(?=(?:(?:[-a-z]+\s*){0,2}(bold(?:er)?|lighter|[1-9]00))?)(?:(?:normal|\1|\2|\3)\s*){0,3}((?:xx?-)?(?:small|large)|medium|smaller|larger|[.\d]+(?:\%|in|[cem]m|ex|p[ctx]))(?:\s*\/\s*(normal|[.\d]+(?:\%|in|[cem]m|ex|p[ctx])))?\s*([-_,\"\'\sa-z]+?)\s*$/i.exec(t))) {
										var n = e[1],
											r = (e[2], e[3]),
											i = e[4],
											o = (e[5], e[6]),
											a = /^([.\d]+)((?:%|in|[cem]m|ex|p[ctx]))$/i.exec(i)[2];
										i = "px" === a ? Math.floor(parseFloat(i) * this.pdf.internal.scaleFactor) : "em" === a ? Math.floor(parseFloat(i) * this.pdf.getFontSize()) : Math.floor(parseFloat(i) * this.pdf.internal.scaleFactor), this.pdf.setFontSize(i);
										var s = function(t) {
											var e, n, r = [],
												i = t.trim();
											if ("" === i) return Pe;
											if (i in ye) return [ye[i]];
											for (;
												"" !== i;) {
												switch (n = null, e = (i = Ne(i)).charAt(0)) {
													case '"':
													case "'":
														n = Le(i.substring(1), e);
														break;
													default:
														n = xe(i)
												}
												if (null === n) return Pe;
												if (r.push(n[0]), "" !== (i = Ne(n[1])) && "," !== i.charAt(0)) return Pe;
												i = i.replace(/^,/, "")
											}
											return r
										}(o);
										if (this.fontFaces) {
											var c = function(t, e, n) {
												for (var r = (n = n || {}).defaultFontFamily || "times", i = Object.assign({}, be, n.genericFontFamilies || {}), o = null, a = null, s = 0; s < e.length; ++s)
													if (i[(o = ve(e[s])).family] && (o.family = i[o.family]), t.hasOwnProperty(o.family)) {
														a = t[o.family];
														break
													} if (!(a = a || t[r])) throw new Error("Could not find a font-family for the rule '" + we(o) + "' and default family '" + r + "'.");
												if (a = function(t, e) {
														if (e[t]) return e[t];
														var n = de[t],
															r = n <= de.normal ? -1 : 1,
															i = me(e, fe, n, r);
														if (!i) throw new Error("Could not find a matching font-stretch value for " + t);
														return i
													}(o.stretch, a), a = function(t, e) {
														if (e[t]) return e[t];
														for (var n = he[t], r = 0; r < n.length; ++r)
															if (e[n[r]]) return e[n[r]];
														throw new Error("Could not find a matching font-style for " + t)
													}(o.style, a), !(a = function(t, e) {
														if (e[t]) return e[t];
														if (400 === t && e[500]) return e[500];
														if (500 === t && e[400]) return e[400];
														var n = ge[t],
															r = me(e, pe, n, t < 400 ? -1 : 1);
														if (!r) throw new Error("Could not find a matching font-weight for value " + t);
														return r
													}(o.weight, a))) throw new Error("Failed to resolve a font for the rule '" + we(o) + "'.");
												return a
											}(p(this.pdf, this.fontFaces), s.map((function(t) {
												return {
													family: t,
													stretch: "normal",
													weight: r,
													style: n
												}
											})));
											this.pdf.setFont(c.ref.name, c.ref.style)
										} else {
											var u = "";
											("bold" === r || parseInt(r, 10) >= 700 || "bold" === n) && (u = "bold"), "italic" === n && (u += "italic"), 0 === u.length && (u = "normal");
											for (var l = "", h = {
													arial: "Helvetica",
													Arial: "Helvetica",
													verdana: "Helvetica",
													Verdana: "Helvetica",
													helvetica: "Helvetica",
													Helvetica: "Helvetica",
													"sans-serif": "Helvetica",
													fixed: "Courier",
													monospace: "Courier",
													terminal: "Courier",
													cursive: "Times",
													fantasy: "Times",
													serif: "Times"
												}, f = 0; f < s.length; f++) {
												if (void 0 !== this.pdf.internal.getFont(s[f], u, {
														noFallback: !0,
														disableWarning: !0
													})) {
													l = s[f];
													break
												}
												if ("bolditalic" === u && void 0 !== this.pdf.internal.getFont(s[f], "bold", {
														noFallback: !0,
														disableWarning: !0
													})) l = s[f], u = "bold";
												else if (void 0 !== this.pdf.internal.getFont(s[f], "normal", {
														noFallback: !0,
														disableWarning: !0
													})) {
													l = s[f], u = "normal";
													break
												}
											}
											if ("" === l)
												for (var d = 0; d < s.length; d++)
													if (h[s[d]]) {
														l = h[s[d]];
														break
													} l = "" === l ? "Times" : l, this.pdf.setFont(l, u)
										}
									}
								}
							}), Object.defineProperty(this, "globalCompositeOperation", {
								get: function() {
									return this.ctx.globalCompositeOperation
								},
								set: function(t) {
									this.ctx.globalCompositeOperation = t
								}
							}), Object.defineProperty(this, "globalAlpha", {
								get: function() {
									return this.ctx.globalAlpha
								},
								set: function(t) {
									this.ctx.globalAlpha = t
								}
							}), Object.defineProperty(this, "ignoreClearRect", {
								get: function() {
									return this.ctx.ignoreClearRect
								},
								set: function(t) {
									this.ctx.ignoreClearRect = Boolean(t)
								}
							})
						};
						h.prototype.fill = function() {
							y.call(this, "fill", !1)
						}, h.prototype.stroke = function() {
							y.call(this, "stroke", !1)
						}, h.prototype.beginPath = function() {
							this.path = [{
								type: "begin"
							}]
						}, h.prototype.moveTo = function(t, e) {
							if (isNaN(t) || isNaN(e)) throw G.error("jsPDF.context2d.moveTo: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.moveTo");
							var n = this.ctx.transform.applyToPoint(new a(t, e));
							this.path.push({
								type: "mt",
								x: n.x,
								y: n.y
							}), this.ctx.lastPoint = new a(t, e)
						}, h.prototype.closePath = function() {
							var t = new a(0, 0),
								e = 0;
							for (e = this.path.length - 1; - 1 !== e; e--)
								if ("begin" === this.path[e].type && "object" == typeof this.path[e + 1] && "number" == typeof this.path[e + 1].x) {
									t = new a(this.path[e + 1].x, this.path[e + 1].y), this.path.push({
										type: "lt",
										x: t.x,
										y: t.y
									});
									break
								}
							"object" == typeof this.path[e + 2] && "number" == typeof this.path[e + 2].x && this.path.push(JSON.parse(JSON.stringify(this.path[e + 2]))), this.path.push({
								type: "close"
							}), this.ctx.lastPoint = new a(t.x, t.y)
						}, h.prototype.lineTo = function(t, e) {
							if (isNaN(t) || isNaN(e)) throw G.error("jsPDF.context2d.lineTo: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.lineTo");
							var n = this.ctx.transform.applyToPoint(new a(t, e));
							this.path.push({
								type: "lt",
								x: n.x,
								y: n.y
							}), this.ctx.lastPoint = new a(n.x, n.y)
						}, h.prototype.clip = function() {
							this.ctx.clip_path = JSON.parse(JSON.stringify(this.path)), y.call(this, null, !0)
						}, h.prototype.quadraticCurveTo = function(t, e, n, r) {
							if (isNaN(n) || isNaN(r) || isNaN(t) || isNaN(e)) throw G.error("jsPDF.context2d.quadraticCurveTo: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.quadraticCurveTo");
							var i = this.ctx.transform.applyToPoint(new a(n, r)),
								o = this.ctx.transform.applyToPoint(new a(t, e));
							this.path.push({
								type: "qct",
								x1: o.x,
								y1: o.y,
								x: i.x,
								y: i.y
							}), this.ctx.lastPoint = new a(i.x, i.y)
						}, h.prototype.bezierCurveTo = function(t, e, n, r, i, o) {
							if (isNaN(i) || isNaN(o) || isNaN(t) || isNaN(e) || isNaN(n) || isNaN(r)) throw G.error("jsPDF.context2d.bezierCurveTo: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.bezierCurveTo");
							var s = this.ctx.transform.applyToPoint(new a(i, o)),
								c = this.ctx.transform.applyToPoint(new a(t, e)),
								u = this.ctx.transform.applyToPoint(new a(n, r));
							this.path.push({
								type: "bct",
								x1: c.x,
								y1: c.y,
								x2: u.x,
								y2: u.y,
								x: s.x,
								y: s.y
							}), this.ctx.lastPoint = new a(s.x, s.y)
						}, h.prototype.arc = function(t, e, n, r, i, o) {
							if (isNaN(t) || isNaN(e) || isNaN(n) || isNaN(r) || isNaN(i)) throw G.error("jsPDF.context2d.arc: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.arc");
							if (o = Boolean(o), !this.ctx.transform.isIdentity) {
								var s = this.ctx.transform.applyToPoint(new a(t, e));
								t = s.x, e = s.y;
								var c = this.ctx.transform.applyToPoint(new a(0, n)),
									u = this.ctx.transform.applyToPoint(new a(0, 0));
								n = Math.sqrt(Math.pow(c.x - u.x, 2) + Math.pow(c.y - u.y, 2))
							}
							Math.abs(i - r) >= 2 * Math.PI && (r = 0, i = 2 * Math.PI), this.path.push({
								type: "arc",
								x: t,
								y: e,
								radius: n,
								startAngle: r,
								endAngle: i,
								counterclockwise: o
							})
						}, h.prototype.arcTo = function(t, e, n, r, i) {
							throw new Error("arcTo not implemented.")
						}, h.prototype.rect = function(t, e, n, r) {
							if (isNaN(t) || isNaN(e) || isNaN(n) || isNaN(r)) throw G.error("jsPDF.context2d.rect: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.rect");
							this.moveTo(t, e), this.lineTo(t + n, e), this.lineTo(t + n, e + r), this.lineTo(t, e + r), this.lineTo(t, e), this.lineTo(t + n, e), this.lineTo(t, e)
						}, h.prototype.fillRect = function(t, e, n, r) {
							if (isNaN(t) || isNaN(e) || isNaN(n) || isNaN(r)) throw G.error("jsPDF.context2d.fillRect: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.fillRect");
							if (!d.call(this)) {
								var i = {};
								"butt" !== this.lineCap && (i.lineCap = this.lineCap, this.lineCap = "butt"), "miter" !== this.lineJoin && (i.lineJoin = this.lineJoin, this.lineJoin = "miter"), this.beginPath(), this.rect(t, e, n, r), this.fill(), i.hasOwnProperty("lineCap") && (this.lineCap = i.lineCap), i.hasOwnProperty("lineJoin") && (this.lineJoin = i.lineJoin)
							}
						}, h.prototype.strokeRect = function(t, e, n, r) {
							if (isNaN(t) || isNaN(e) || isNaN(n) || isNaN(r)) throw G.error("jsPDF.context2d.strokeRect: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.strokeRect");
							p.call(this) || (this.beginPath(), this.rect(t, e, n, r), this.stroke())
						}, h.prototype.clearRect = function(t, e, n, r) {
							if (isNaN(t) || isNaN(e) || isNaN(n) || isNaN(r)) throw G.error("jsPDF.context2d.clearRect: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.clearRect");
							this.ignoreClearRect || (this.fillStyle = "#ffffff", this.fillRect(t, e, n, r))
						}, h.prototype.save = function(t) {
							t = "boolean" != typeof t || t;
							for (var e = this.pdf.internal.getCurrentPageInfo().pageNumber, n = 0; n < this.pdf.internal.getNumberOfPages(); n++) this.pdf.setPage(n + 1), this.pdf.internal.out("q");
							if (this.pdf.setPage(e), t) {
								this.ctx.fontSize = this.pdf.internal.getFontSize();
								var r = new l(this.ctx);
								this.ctxStack.push(this.ctx), this.ctx = r
							}
						}, h.prototype.restore = function(t) {
							t = "boolean" != typeof t || t;
							for (var e = this.pdf.internal.getCurrentPageInfo().pageNumber, n = 0; n < this.pdf.internal.getNumberOfPages(); n++) this.pdf.setPage(n + 1), this.pdf.internal.out("Q");
							this.pdf.setPage(e), t && 0 !== this.ctxStack.length && (this.ctx = this.ctxStack.pop(), this.fillStyle = this.ctx.fillStyle, this.strokeStyle = this.ctx.strokeStyle, this.font = this.ctx.font, this.lineCap = this.ctx.lineCap, this.lineWidth = this.ctx.lineWidth, this.lineJoin = this.ctx.lineJoin)
						}, h.prototype.toDataURL = function() {
							throw new Error("toDataUrl not implemented.")
						};
						var f = function(t) {
								var e, n, r, i;
								if (!0 === t.isCanvasGradient && (t = t.getColor()), !t) return {
									r: 0,
									g: 0,
									b: 0,
									a: 0,
									style: t
								};
								if (/transparent|rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*0+\s*\)/.test(t)) e = 0, n = 0, r = 0, i = 0;
								else {
									var o = /rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)/.exec(t);
									if (null !== o) e = parseInt(o[1]), n = parseInt(o[2]), r = parseInt(o[3]), i = 1;
									else if (null !== (o = /rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([\d.]+)\s*\)/.exec(t))) e = parseInt(o[1]), n = parseInt(o[2]), r = parseInt(o[3]), i = parseFloat(o[4]);
									else {
										if (i = 1, "string" == typeof t && "#" !== t.charAt(0)) {
											var a = new Q(t);
											t = a.ok ? a.toHex() : "#000000"
										}
										4 === t.length ? (e = t.substring(1, 2), e += e, n = t.substring(2, 3), n += n, r = t.substring(3, 4), r += r) : (e = t.substring(1, 3), n = t.substring(3, 5), r = t.substring(5, 7)), e = parseInt(e, 16), n = parseInt(n, 16), r = parseInt(r, 16)
									}
								}
								return {
									r: e,
									g: n,
									b: r,
									a: i,
									style: t
								}
							},
							d = function() {
								return this.ctx.isFillTransparent || 0 == this.globalAlpha
							},
							p = function() {
								return Boolean(this.ctx.isStrokeTransparent || 0 == this.globalAlpha)
							};
						h.prototype.fillText = function(t, e, n, r) {
							if (isNaN(e) || isNaN(n) || "string" != typeof t) throw G.error("jsPDF.context2d.fillText: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.fillText");
							if (r = isNaN(r) ? void 0 : r, !d.call(this)) {
								n = N.call(this, n);
								var i = j(this.ctx.transform.rotation),
									o = this.ctx.transform.scaleX;
								_.call(this, {
									text: t,
									x: e,
									y: n,
									scale: o,
									angle: i,
									align: this.textAlign,
									maxWidth: r
								})
							}
						}, h.prototype.strokeText = function(t, e, n, r) {
							if (isNaN(e) || isNaN(n) || "string" != typeof t) throw G.error("jsPDF.context2d.strokeText: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.strokeText");
							if (!p.call(this)) {
								r = isNaN(r) ? void 0 : r, n = N.call(this, n);
								var i = j(this.ctx.transform.rotation),
									o = this.ctx.transform.scaleX;
								_.call(this, {
									text: t,
									x: e,
									y: n,
									scale: o,
									renderingMode: "stroke",
									angle: i,
									align: this.textAlign,
									maxWidth: r
								})
							}
						}, h.prototype.measureText = function(t) {
							if ("string" != typeof t) throw G.error("jsPDF.context2d.measureText: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.measureText");
							var e = this.pdf,
								n = this.pdf.internal.scaleFactor,
								r = e.internal.getFontSize(),
								i = e.getStringUnitWidth(t) * r / e.internal.scaleFactor,
								o = function(t) {
									var e = (t = t || {}).width || 0;
									return Object.defineProperty(this, "width", {
										get: function() {
											return e
										}
									}), this
								};
							return new o({
								width: i *= Math.round(96 * n / 72 * 1e4) / 1e4
							})
						}, h.prototype.scale = function(t, e) {
							if (isNaN(t) || isNaN(e)) throw G.error("jsPDF.context2d.scale: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.scale");
							var n = new c(t, 0, 0, e, 0, 0);
							this.ctx.transform = this.ctx.transform.multiply(n)
						}, h.prototype.rotate = function(t) {
							if (isNaN(t)) throw G.error("jsPDF.context2d.rotate: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.rotate");
							var e = new c(Math.cos(t), Math.sin(t), -Math.sin(t), Math.cos(t), 0, 0);
							this.ctx.transform = this.ctx.transform.multiply(e)
						}, h.prototype.translate = function(t, e) {
							if (isNaN(t) || isNaN(e)) throw G.error("jsPDF.context2d.translate: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.translate");
							var n = new c(1, 0, 0, 1, t, e);
							this.ctx.transform = this.ctx.transform.multiply(n)
						}, h.prototype.transform = function(t, e, n, r, i, o) {
							if (isNaN(t) || isNaN(e) || isNaN(n) || isNaN(r) || isNaN(i) || isNaN(o)) throw G.error("jsPDF.context2d.transform: Invalid arguments", arguments), new Error("Invalid arguments passed to jsPDF.context2d.transform");
							var a = new c(t, e, n, r, i, o);
							this.ctx.transform = this.ctx.transform.multiply(a)
						}, h.prototype.setTransform = function(t, e, n, r, i, o) {
							t = isNaN(t) ? 1 : t, e = isNaN(e) ? 0 : e, n = isNaN(n) ? 0 : n, r = isNaN(r) ? 1 : r, i = isNaN(i) ? 0 : i, o = isNaN(o) ? 0 : o, this.ctx.transform = new c(t, e, n, r, i, o)
						}, h.prototype.drawImage = function(t, e, n, r, i, o, a, u, l) {
							var h = this.pdf.getImageProperties(t),
								f = 1,
								d = 1,
								p = 1,
								v = 1;
							void 0 !== r && void 0 !== u && (p = u / r, v = l / i, f = h.width / r * u / r, d = h.height / i * l / i), void 0 === o && (o = e, a = n, e = 0, n = 0), void 0 !== r && void 0 === u && (u = r, l = i), void 0 === r && void 0 === u && (u = h.width, l = h.height);
							for (var y, N = this.ctx.transform.decompose(), L = j(N.rotate.shx), x = new c, A = (x = (x = (x = x.multiply(N.translate)).multiply(N.skew)).multiply(N.scale)).applyToRectangle(new s(o - e * p, a - n * v, r * f, i * d)), S = g.call(this, A), _ = [], P = 0; P < S.length; P += 1) - 1 === _.indexOf(S[P]) && _.push(S[P]);
							if (b(_), this.autoPaging)
								for (var k = _[0], F = _[_.length - 1], I = k; I < F + 1; I++) {
									if (this.pdf.setPage(I), 0 !== this.ctx.clip_path.length) {
										var C = this.path;
										y = JSON.parse(JSON.stringify(this.ctx.clip_path)), this.path = m(y, this.posX, -1 * this.pdf.internal.pageSize.height * (I - 1) + this.posY), w.call(this, "fill", !0), this.path = C
									}
									var O = JSON.parse(JSON.stringify(A));
									O = m([O], this.posX, -1 * this.pdf.internal.pageSize.height * (I - 1) + this.posY)[0], this.pdf.addImage(t, "JPEG", O.x, O.y, O.w, O.h, null, null, L)
								} else this.pdf.addImage(t, "JPEG", A.x, A.y, A.w, A.h, null, null, L)
						};
						var g = function(t, e, n) {
								var r = [];
								switch (e = e || this.pdf.internal.pageSize.width, n = n || this.pdf.internal.pageSize.height, t.type) {
									default:
									case "mt":
									case "lt":
										r.push(Math.floor((t.y + this.posY) / n) + 1);
										break;
									case "arc":
										r.push(Math.floor((t.y + this.posY - t.radius) / n) + 1), r.push(Math.floor((t.y + this.posY + t.radius) / n) + 1);
										break;
									case "qct":
										var i = O(this.ctx.lastPoint.x, this.ctx.lastPoint.y, t.x1, t.y1, t.x, t.y);
										r.push(Math.floor(i.y / n) + 1), r.push(Math.floor((i.y + i.h) / n) + 1);
										break;
									case "bct":
										var o = B(this.ctx.lastPoint.x, this.ctx.lastPoint.y, t.x1, t.y1, t.x2, t.y2, t.x, t.y);
										r.push(Math.floor(o.y / n) + 1), r.push(Math.floor((o.y + o.h) / n) + 1);
										break;
									case "rect":
										r.push(Math.floor((t.y + this.posY) / n) + 1), r.push(Math.floor((t.y + t.h + this.posY) / n) + 1)
								}
								for (var a = 0; a < r.length; a += 1)
									for (; this.pdf.internal.getNumberOfPages() < r[a];) v.call(this);
								return r
							},
							v = function() {
								var t = this.fillStyle,
									e = this.strokeStyle,
									n = this.font,
									r = this.lineCap,
									i = this.lineWidth,
									o = this.lineJoin;
								this.pdf.addPage(), this.fillStyle = t, this.strokeStyle = e, this.font = n, this.lineCap = r, this.lineWidth = i, this.lineJoin = o
							},
							m = function(t, e, n) {
								for (var r = 0; r < t.length; r++) switch (t[r].type) {
									case "bct":
										t[r].x2 += e, t[r].y2 += n;
									case "qct":
										t[r].x1 += e, t[r].y1 += n;
									case "mt":
									case "lt":
									case "arc":
									default:
										t[r].x += e, t[r].y += n
								}
								return t
							},
							b = function(t) {
								return t.sort((function(t, e) {
									return t - e
								}))
							},
							y = function(t, e) {
								for (var n, r, i = this.fillStyle, o = this.strokeStyle, a = this.lineCap, s = this.lineWidth, c = s * this.ctx.transform.scaleX, u = this.lineJoin, l = JSON.parse(JSON.stringify(this.path)), h = JSON.parse(JSON.stringify(this.path)), f = [], d = 0; d < h.length; d++)
									if (void 0 !== h[d].x)
										for (var p = g.call(this, h[d]), y = 0; y < p.length; y += 1) - 1 === f.indexOf(p[y]) && f.push(p[y]);
								for (var N = 0; N < f.length; N++)
									for (; this.pdf.internal.getNumberOfPages() < f[N];) v.call(this);
								if (b(f), this.autoPaging)
									for (var L = f[0], x = f[f.length - 1], A = L; A < x + 1; A++) {
										if (this.pdf.setPage(A), this.fillStyle = i, this.strokeStyle = o, this.lineCap = a, this.lineWidth = c, this.lineJoin = u, 0 !== this.ctx.clip_path.length) {
											var S = this.path;
											n = JSON.parse(JSON.stringify(this.ctx.clip_path)), this.path = m(n, this.posX, -1 * this.pdf.internal.pageSize.height * (A - 1) + this.posY), w.call(this, t, !0), this.path = S
										}
										r = JSON.parse(JSON.stringify(l)), this.path = m(r, this.posX, -1 * this.pdf.internal.pageSize.height * (A - 1) + this.posY), !1 !== e && 0 !== A || w.call(this, t, e), this.lineWidth = s
									} else this.lineWidth = c, w.call(this, t, e), this.lineWidth = s;
								this.path = l
							},
							w = function(t, e) {
								if (("stroke" !== t || e || !p.call(this)) && ("stroke" === t || e || !d.call(this))) {
									for (var n, r, i = [], o = this.path, a = 0; a < o.length; a++) {
										var s = o[a];
										switch (s.type) {
											case "begin":
												i.push({
													begin: !0
												});
												break;
											case "close":
												i.push({
													close: !0
												});
												break;
											case "mt":
												i.push({
													start: s,
													deltas: [],
													abs: []
												});
												break;
											case "lt":
												var c = i.length;
												if (!isNaN(o[a - 1].x) && (n = [s.x - o[a - 1].x, s.y - o[a - 1].y], c > 0))
													for (; c >= 0; c--)
														if (!0 !== i[c - 1].close && !0 !== i[c - 1].begin) {
															i[c - 1].deltas.push(n), i[c - 1].abs.push(s);
															break
														} break;
											case "bct":
												n = [s.x1 - o[a - 1].x, s.y1 - o[a - 1].y, s.x2 - o[a - 1].x, s.y2 - o[a - 1].y, s.x - o[a - 1].x, s.y - o[a - 1].y], i[i.length - 1].deltas.push(n);
												break;
											case "qct":
												var u = o[a - 1].x + 2 / 3 * (s.x1 - o[a - 1].x),
													l = o[a - 1].y + 2 / 3 * (s.y1 - o[a - 1].y),
													h = s.x + 2 / 3 * (s.x1 - s.x),
													f = s.y + 2 / 3 * (s.y1 - s.y),
													g = s.x,
													v = s.y;
												n = [u - o[a - 1].x, l - o[a - 1].y, h - o[a - 1].x, f - o[a - 1].y, g - o[a - 1].x, v - o[a - 1].y], i[i.length - 1].deltas.push(n);
												break;
											case "arc":
												i.push({
													deltas: [],
													abs: [],
													arc: !0
												}), Array.isArray(i[i.length - 1].abs) && i[i.length - 1].abs.push(s)
										}
									}
									r = e ? null : "stroke" === t ? "stroke" : "fill";
									for (var m = 0; m < i.length; m++) {
										if (i[m].arc) {
											for (var b = i[m].abs, y = 0; y < b.length; y++) {
												var w = b[y];
												"arc" === w.type ? L.call(this, w.x, w.y, w.radius, w.startAngle, w.endAngle, w.counterclockwise, void 0, e) : P.call(this, w.x, w.y)
											}
											x.call(this, r), this.pdf.internal.out("h")
										}
										if (!i[m].arc && !0 !== i[m].close && !0 !== i[m].begin) {
											var N = i[m].start.x,
												S = i[m].start.y;
											k.call(this, i[m].deltas, N, S)
										}
									}
									r && x.call(this, r), e && A.call(this)
								}
							},
							N = function(t) {
								var e = this.pdf.internal.getFontSize() / this.pdf.internal.scaleFactor,
									n = e * (this.pdf.internal.getLineHeightFactor() - 1);
								switch (this.ctx.textBaseline) {
									case "bottom":
										return t - n;
									case "top":
										return t + e - n;
									case "hanging":
										return t + e - 2 * n;
									case "middle":
										return t + e / 2 - n;
									case "ideographic":
										return t;
									case "alphabetic":
									default:
										return t
								}
							};
						h.prototype.createLinearGradient = function() {
							var t = function() {};
							return t.colorStops = [], t.addColorStop = function(t, e) {
								this.colorStops.push([t, e])
							}, t.getColor = function() {
								return 0 === this.colorStops.length ? "#000000" : this.colorStops[0][1]
							}, t.isCanvasGradient = !0, t
						}, h.prototype.createPattern = function() {
							return this.createLinearGradient()
						}, h.prototype.createRadialGradient = function() {
							return this.createLinearGradient()
						};
						var L = function(t, e, n, r, i, o, a, s) {
								for (var c = I.call(this, n, r, i, o), u = 0; u < c.length; u++) {
									var l = c[u];
									0 === u && S.call(this, l.x1 + t, l.y1 + e), F.call(this, t, e, l.x2, l.y2, l.x3, l.y3, l.x4, l.y4)
								}
								s ? A.call(this) : x.call(this, a)
							},
							x = function(t) {
								switch (t) {
									case "stroke":
										this.pdf.internal.out("S");
										break;
									case "fill":
										this.pdf.internal.out("f")
								}
							},
							A = function() {
								this.pdf.clip(), this.pdf.discardPath()
							},
							S = function(t, e) {
								this.pdf.internal.out(n(t) + " " + r(e) + " m")
							},
							_ = function(t) {
								var e;
								switch (t.align) {
									case "right":
									case "end":
										e = "right";
										break;
									case "center":
										e = "center";
										break;
									case "left":
									case "start":
									default:
										e = "left"
								}
								var n = this.ctx.transform.applyToPoint(new a(t.x, t.y)),
									r = this.ctx.transform.decompose(),
									i = new c;
								i = (i = (i = i.multiply(r.translate)).multiply(r.skew)).multiply(r.scale);
								for (var o, u, l, h = this.pdf.getTextDimensions(t.text), f = this.ctx.transform.applyToRectangle(new s(t.x, t.y, h.w, h.h)), d = i.applyToRectangle(new s(t.x, t.y - h.h, h.w, h.h)), p = g.call(this, d), v = [], y = 0; y < p.length; y += 1) - 1 === v.indexOf(p[y]) && v.push(p[y]);
								if (b(v), !0 === this.autoPaging)
									for (var N = v[0], L = v[v.length - 1], x = N; x < L + 1; x++) {
										if (this.pdf.setPage(x), 0 !== this.ctx.clip_path.length) {
											var A = this.path;
											o = JSON.parse(JSON.stringify(this.ctx.clip_path)), this.path = m(o, this.posX, -1 * this.pdf.internal.pageSize.height * (x - 1) + this.posY), w.call(this, "fill", !0), this.path = A
										}
										var S = JSON.parse(JSON.stringify(f));
										S = m([S], this.posX, -1 * this.pdf.internal.pageSize.height * (x - 1) + this.posY)[0], t.scale >= .01 && (u = this.pdf.internal.getFontSize(), this.pdf.setFontSize(u * t.scale), l = this.lineWidth, this.lineWidth = l * t.scale), this.pdf.text(t.text, S.x, S.y, {
											angle: t.angle,
											align: e,
											renderingMode: t.renderingMode,
											maxWidth: t.maxWidth
										}), t.scale >= .01 && (this.pdf.setFontSize(u), this.lineWidth = l)
									} else t.scale >= .01 && (u = this.pdf.internal.getFontSize(), this.pdf.setFontSize(u * t.scale), l = this.lineWidth, this.lineWidth = l * t.scale), this.pdf.text(t.text, n.x + this.posX, n.y + this.posY, {
										angle: t.angle,
										align: e,
										renderingMode: t.renderingMode,
										maxWidth: t.maxWidth
									}), t.scale >= .01 && (this.pdf.setFontSize(u), this.lineWidth = l)
							},
							P = function(t, e, i, o) {
								i = i || 0, o = o || 0, this.pdf.internal.out(n(t + i) + " " + r(e + o) + " l")
							},
							k = function(t, e, n) {
								return this.pdf.lines(t, e, n, null, null)
							},
							F = function(t, n, r, a, s, c, u, l) {
								this.pdf.internal.out([e(i(r + t)), e(o(a + n)), e(i(s + t)), e(o(c + n)), e(i(u + t)), e(o(l + n)), "c"].join(" "))
							},
							I = function(t, e, n, r) {
								for (var i = 2 * Math.PI, o = Math.PI / 2; e > n;) e -= i;
								var a = Math.abs(n - e);
								a < i && r && (a = i - a);
								for (var s = [], c = r ? -1 : 1, u = e; a > 1e-5;) {
									var l = u + c * Math.min(a, o);
									s.push(C.call(this, t, u, l)), a -= Math.abs(l - u), u = l
								}
								return s
							},
							C = function(t, e, n) {
								var r = (n - e) / 2,
									i = t * Math.cos(r),
									o = t * Math.sin(r),
									a = i,
									s = -o,
									c = a * a + s * s,
									u = c + a * i + s * o,
									l = 4 / 3 * (Math.sqrt(2 * c * u) - u) / (a * o - s * i),
									h = a - l * s,
									f = s + l * a,
									d = h,
									p = -f,
									g = r + e,
									v = Math.cos(g),
									m = Math.sin(g);
								return {
									x1: t * Math.cos(e),
									y1: t * Math.sin(e),
									x2: h * v - f * m,
									y2: h * m + f * v,
									x3: d * v - p * m,
									y3: d * m + p * v,
									x4: t * Math.cos(n),
									y4: t * Math.sin(n)
								}
							},
							j = function(t) {
								return 180 * t / Math.PI
							},
							O = function(t, e, n, r, i, o) {
								var a = t + .5 * (n - t),
									c = e + .5 * (r - e),
									u = i + .5 * (n - i),
									l = o + .5 * (r - o),
									h = Math.min(t, i, a, u),
									f = Math.max(t, i, a, u),
									d = Math.min(e, o, c, l),
									p = Math.max(e, o, c, l);
								return new s(h, d, f - h, p - d)
							},
							B = function(t, e, n, r, i, o, a, c) {
								var u, l, h, f, d, p, g, v, m, b, y, w, N, L, x = n - t,
									A = r - e,
									S = i - n,
									_ = o - r,
									P = a - i,
									k = c - o;
								for (l = 0; l < 41; l++) m = (g = (h = t + (u = l / 40) * x) + u * ((d = n + u * S) - h)) + u * (d + u * (i + u * P - d) - g), b = (v = (f = e + u * A) + u * ((p = r + u * _) - f)) + u * (p + u * (o + u * k - p) - v), 0 == l ? (y = m, w = b, N = m, L = b) : (y = Math.min(y, m), w = Math.min(w, b), N = Math.max(N, m), L = Math.max(L, b));
								return new s(Math.round(y), Math.round(w), Math.round(N - y), Math.round(L - w))
							}
					}(Nt.API),
					function(t) {
						var e = function(t) {
								var e, n, r, i, o, a, s, c, u, l;
								for (/[^\x00-\xFF]/.test(t), n = [], r = 0, i = (t += e = "\0\0\0\0".slice(t.length % 4 || 4)).length; i > r; r += 4) 0 !== (o = (t.charCodeAt(r) << 24) + (t.charCodeAt(r + 1) << 16) + (t.charCodeAt(r + 2) << 8) + t.charCodeAt(r + 3)) ? (a = (o = ((o = ((o = ((o = (o - (l = o % 85)) / 85) - (u = o % 85)) / 85) - (c = o % 85)) / 85) - (s = o % 85)) / 85) % 85, n.push(a + 33, s + 33, c + 33, u + 33, l + 33)) : n.push(122);
								return function(t, e) {
									for (var n = e; n > 0; n--) t.pop()
								}(n, e.length), String.fromCharCode.apply(String, n) + "~>"
							},
							n = function(t) {
								var e, n, r, i, o, a = String,
									s = "length",
									c = 255,
									u = "charCodeAt",
									l = "slice",
									h = "replace";
								for (t[l](-2), t = t[l](0, -2)[h](/\s/g, "")[h]("z", "!!!!!"), r = [], i = 0, o = (t += e = "uuuuu" [l](t[s] % 5 || 5))[s]; o > i; i += 5) n = 52200625 * (t[u](i) - 33) + 614125 * (t[u](i + 1) - 33) + 7225 * (t[u](i + 2) - 33) + 85 * (t[u](i + 3) - 33) + (t[u](i + 4) - 33), r.push(c & n >> 24, c & n >> 16, c & n >> 8, c & n);
								return function(t, e) {
									for (var n = e; n > 0; n--) t.pop()
								}(r, e[s]), a.fromCharCode.apply(a, r)
							},
							r = function(t) {
								var e = new RegExp(/^([0-9A-Fa-f]{2})+$/);
								if (-1 !== (t = t.replace(/\s/g, "")).indexOf(">") && (t = t.substr(0, t.indexOf(">"))), t.length % 2 && (t += "0"), !1 === e.test(t)) return "";
								for (var n = "", r = 0; r < t.length; r += 2) n += String.fromCharCode("0x" + (t[r] + t[r + 1]));
								return n
							},
							i = function(t) {
								for (var e = new Uint8Array(t.length), n = t.length; n--;) e[n] = t.charCodeAt(n);
								return (e = U(e)).reduce((function(t, e) {
									return t + String.fromCharCode(e)
								}), "")
							};
						t.processDataByFilters = function(t, o) {
							var a = 0,
								s = t || "",
								c = [];
							for ("string" == typeof(o = o || []) && (o = [o]), a = 0; a < o.length; a += 1) switch (o[a]) {
								case "ASCII85Decode":
								case "/ASCII85Decode":
									s = n(s), c.push("/ASCII85Encode");
									break;
								case "ASCII85Encode":
								case "/ASCII85Encode":
									s = e(s), c.push("/ASCII85Decode");
									break;
								case "ASCIIHexDecode":
								case "/ASCIIHexDecode":
									s = r(s), c.push("/ASCIIHexEncode");
									break;
								case "ASCIIHexEncode":
								case "/ASCIIHexEncode":
									s = s.split("").map((function(t) {
										return ("0" + t.charCodeAt().toString(16)).slice(-2)
									})).join("") + ">", c.push("/ASCIIHexDecode");
									break;
								case "FlateEncode":
								case "/FlateEncode":
									s = i(s), c.push("/FlateDecode");
									break;
								default:
									throw new Error('The filter: "' + o[a] + '" is not implemented')
							}
							return {
								data: s,
								reverseChain: c.reverse().join(" ")
							}
						}
					}(Nt.API),
					function(t) {
						t.loadFile = function(t, e, n) {
							return function(t, e, n) {
								e = !1 !== e, n = "function" == typeof n ? n : function() {};
								var r = void 0;
								try {
									r = function(t, e, n) {
										var r = new XMLHttpRequest,
											i = 0,
											o = function(t) {
												var e = t.length,
													n = [],
													r = String.fromCharCode;
												for (i = 0; i < e; i += 1) n.push(r(255 & t.charCodeAt(i)));
												return n.join("")
											};
										if (r.open("GET", t, !e), r.overrideMimeType("text/plain; charset=x-user-defined"), !1 === e && (r.onload = function() {
												200 === r.status ? n(o(this.responseText)) : n(void 0)
											}), r.send(null), e && 200 === r.status) return o(r.responseText)
									}(t, e, n)
								} catch (t) {}
								return r
							}(t, e, n)
						}, t.loadImageFile = t.loadFile
					}(Nt.API),
					function(t) {
						function e() {
							return (W.html2canvas ? Promise.resolve(W.html2canvas) : n.e(120).then(n.t.bind(n, 1120, 23))).catch((function(t) {
								return Promise.reject(new Error("Could not load html2canvas: " + t))
							})).then((function(t) {
								return t.default ? t.default : t
							}))
						}

						function r() {
							return (W.DOMPurify ? Promise.resolve(W.DOMPurify) : n.e(856).then(n.t.bind(n, 7856, 23))).catch((function(t) {
								return Promise.reject(new Error("Could not load dompurify: " + t))
							})).then((function(t) {
								return t.default ? t.default : t
							}))
						}
						var i = function(t) {
								var e = typeof t;
								return "undefined" === e ? "undefined" : "string" === e || t instanceof String ? "string" : "number" === e || t instanceof Number ? "number" : "function" === e || t instanceof Function ? "function" : t && t.constructor === Array ? "array" : t && 1 === t.nodeType ? "element" : "object" === e ? "object" : "unknown"
							},
							o = function(t, e) {
								var n = document.createElement(t);
								for (var r in e.className && (n.className = e.className), e.innerHTML && e.dompurify && (n.innerHTML = e.dompurify.sanitize(e.innerHTML)), e.style) n.style[r] = e.style[r];
								return n
							},
							a = function(t, e) {
								for (var n = 3 === t.nodeType ? document.createTextNode(t.nodeValue) : t.cloneNode(!1), r = t.firstChild; r; r = r.nextSibling) !0 !== e && 1 === r.nodeType && "SCRIPT" === r.nodeName || n.appendChild(a(r, e));
								return 1 === t.nodeType && ("CANVAS" === t.nodeName ? (n.width = t.width, n.height = t.height, n.getContext("2d").drawImage(t, 0, 0)) : "TEXTAREA" !== t.nodeName && "SELECT" !== t.nodeName || (n.value = t.value), n.addEventListener("load", (function() {
									n.scrollTop = t.scrollTop, n.scrollLeft = t.scrollLeft
								}), !0)), n
							},
							s = function t(e) {
								var n = Object.assign(t.convert(Promise.resolve()), JSON.parse(JSON.stringify(t.template))),
									r = t.convert(Promise.resolve(), n);
								return (r = r.setProgress(1, t, 1, [t])).set(e)
							};
						(s.prototype = Object.create(Promise.prototype)).constructor = s, s.convert = function(t, e) {
							return t.__proto__ = e || s.prototype, t
						}, s.template = {
							prop: {
								src: null,
								container: null,
								overlay: null,
								canvas: null,
								img: null,
								pdf: null,
								pageSize: null,
								callback: function() {}
							},
							progress: {
								val: 0,
								state: null,
								n: 0,
								stack: []
							},
							opt: {
								filename: "file.pdf",
								margin: [0, 0, 0, 0],
								enableLinks: !0,
								x: 0,
								y: 0,
								html2canvas: {},
								jsPDF: {},
								backgroundColor: "transparent"
							}
						}, s.prototype.from = function(t, e) {
							return this.then((function() {
								switch (e = e || function(t) {
										switch (i(t)) {
											case "string":
												return "string";
											case "element":
												return "canvas" === t.nodeName.toLowerCase() ? "canvas" : "element";
											default:
												return "unknown"
										}
									}(t)) {
									case "string":
										return this.then(r).then((function(e) {
											return this.set({
												src: o("div", {
													innerHTML: t,
													dompurify: e
												})
											})
										}));
									case "element":
										return this.set({
											src: t
										});
									case "canvas":
										return this.set({
											canvas: t
										});
									case "img":
										return this.set({
											img: t
										});
									default:
										return this.error("Unknown source type.")
								}
							}))
						}, s.prototype.to = function(t) {
							switch (t) {
								case "container":
									return this.toContainer();
								case "canvas":
									return this.toCanvas();
								case "img":
									return this.toImg();
								case "pdf":
									return this.toPdf();
								default:
									return this.error("Invalid target.")
							}
						}, s.prototype.toContainer = function() {
							return this.thenList([function() {
								return this.prop.src || this.error("Cannot duplicate - no source HTML.")
							}, function() {
								return this.prop.pageSize || this.setPageSize()
							}]).then((function() {
								var t = {
										position: "relative",
										display: "inline-block",
										width: Math.max(this.prop.src.clientWidth, this.prop.src.scrollWidth, this.prop.src.offsetWidth) + "px",
										left: 0,
										right: 0,
										top: 0,
										margin: "auto",
										backgroundColor: this.opt.backgroundColor
									},
									e = a(this.prop.src, this.opt.html2canvas.javascriptEnabled);
								"BODY" === e.tagName && (t.height = Math.max(document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight) + "px"), this.prop.overlay = o("div", {
									className: "html2pdf__overlay",
									style: {
										position: "fixed",
										overflow: "hidden",
										zIndex: 1e3,
										left: "-100000px",
										right: 0,
										bottom: 0,
										top: 0
									}
								}), this.prop.container = o("div", {
									className: "html2pdf__container",
									style: t
								}), this.prop.container.appendChild(e), this.prop.container.firstChild.appendChild(o("div", {
									style: {
										clear: "both",
										border: "0 none transparent",
										margin: 0,
										padding: 0,
										height: 0
									}
								})), this.prop.container.style.float = "none", this.prop.overlay.appendChild(this.prop.container), document.body.appendChild(this.prop.overlay), this.prop.container.firstChild.style.position = "relative", this.prop.container.height = Math.max(this.prop.container.firstChild.clientHeight, this.prop.container.firstChild.scrollHeight, this.prop.container.firstChild.offsetHeight) + "px"
							}))
						}, s.prototype.toCanvas = function() {
							var t = [function() {
								return document.body.contains(this.prop.container) || this.toContainer()
							}];
							return this.thenList(t).then(e).then((function(t) {
								var e = Object.assign({}, this.opt.html2canvas);
								return delete e.onrendered, t(this.prop.container, e)
							})).then((function(t) {
								(this.opt.html2canvas.onrendered || function() {})(t), this.prop.canvas = t, document.body.removeChild(this.prop.overlay)
							}))
						}, s.prototype.toContext2d = function() {
							var t = [function() {
								return document.body.contains(this.prop.container) || this.toContainer()
							}];
							return this.thenList(t).then(e).then((function(t) {
								var e = this.opt.jsPDF,
									n = this.opt.fontFaces,
									r = Object.assign({
										async: !0,
										allowTaint: !0,
										scale: 1,
										scrollX: this.opt.scrollX || 0,
										scrollY: this.opt.scrollY || 0,
										backgroundColor: "#ffffff",
										imageTimeout: 15e3,
										logging: !0,
										proxy: null,
										removeContainer: !0,
										foreignObjectRendering: !1,
										useCORS: !1
									}, this.opt.html2canvas);
								if (delete r.onrendered, e.context2d.autoPaging = !0, e.context2d.posX = this.opt.x, e.context2d.posY = this.opt.y, e.context2d.fontFaces = n, n)
									for (var i = 0; i < n.length; ++i) {
										var o = n[i],
											a = o.src.find((function(t) {
												return "truetype" === t.format
											}));
										a && e.addFont(a.url, o.ref.name, o.ref.style)
									}
								return r.windowHeight = r.windowHeight || 0, r.windowHeight = 0 == r.windowHeight ? Math.max(this.prop.container.clientHeight, this.prop.container.scrollHeight, this.prop.container.offsetHeight) : r.windowHeight, t(this.prop.container, r)
							})).then((function(t) {
								(this.opt.html2canvas.onrendered || function() {})(t), this.prop.canvas = t, document.body.removeChild(this.prop.overlay)
							}))
						}, s.prototype.toImg = function() {
							return this.thenList([function() {
								return this.prop.canvas || this.toCanvas()
							}]).then((function() {
								var t = this.prop.canvas.toDataURL("image/" + this.opt.image.type, this.opt.image.quality);
								this.prop.img = document.createElement("img"), this.prop.img.src = t
							}))
						}, s.prototype.toPdf = function() {
							return this.thenList([function() {
								return this.toContext2d()
							}]).then((function() {
								this.prop.pdf = this.prop.pdf || this.opt.jsPDF
							}))
						}, s.prototype.output = function(t, e, n) {
							return "img" === (n = n || "pdf").toLowerCase() || "image" === n.toLowerCase() ? this.outputImg(t, e) : this.outputPdf(t, e)
						}, s.prototype.outputPdf = function(t, e) {
							return this.thenList([function() {
								return this.prop.pdf || this.toPdf()
							}]).then((function() {
								return this.prop.pdf.output(t, e)
							}))
						}, s.prototype.outputImg = function(t) {
							return this.thenList([function() {
								return this.prop.img || this.toImg()
							}]).then((function() {
								switch (t) {
									case void 0:
									case "img":
										return this.prop.img;
									case "datauristring":
									case "dataurlstring":
										return this.prop.img.src;
									case "datauri":
									case "dataurl":
										return document.location.href = this.prop.img.src;
									default:
										throw 'Image output type "' + t + '" is not supported.'
								}
							}))
						}, s.prototype.save = function(t) {
							return this.thenList([function() {
								return this.prop.pdf || this.toPdf()
							}]).set(t ? {
								filename: t
							} : null).then((function() {
								this.prop.pdf.save(this.opt.filename)
							}))
						}, s.prototype.doCallback = function() {
							return this.thenList([function() {
								return this.prop.pdf || this.toPdf()
							}]).then((function() {
								this.prop.callback(this.prop.pdf)
							}))
						}, s.prototype.set = function(t) {
							if ("object" !== i(t)) return this;
							var e = Object.keys(t || {}).map((function(e) {
								if (e in s.template.prop) return function() {
									this.prop[e] = t[e]
								};
								switch (e) {
									case "margin":
										return this.setMargin.bind(this, t.margin);
									case "jsPDF":
										return function() {
											return this.opt.jsPDF = t.jsPDF, this.setPageSize()
										};
									case "pageSize":
										return this.setPageSize.bind(this, t.pageSize);
									default:
										return function() {
											this.opt[e] = t[e]
										}
								}
							}), this);
							return this.then((function() {
								return this.thenList(e)
							}))
						}, s.prototype.get = function(t, e) {
							return this.then((function() {
								var n = t in s.template.prop ? this.prop[t] : this.opt[t];
								return e ? e(n) : n
							}))
						}, s.prototype.setMargin = function(t) {
							return this.then((function() {
								switch (i(t)) {
									case "number":
										t = [t, t, t, t];
									case "array":
										if (2 === t.length && (t = [t[0], t[1], t[0], t[1]]), 4 === t.length) break;
									default:
										return this.error("Invalid margin array.")
								}
								this.opt.margin = t
							})).then(this.setPageSize)
						}, s.prototype.setPageSize = function(t) {
							function e(t, e) {
								return Math.floor(t * e / 72 * 96)
							}
							return this.then((function() {
								(t = t || Nt.getPageSize(this.opt.jsPDF)).hasOwnProperty("inner") || (t.inner = {
									width: t.width - this.opt.margin[1] - this.opt.margin[3],
									height: t.height - this.opt.margin[0] - this.opt.margin[2]
								}, t.inner.px = {
									width: e(t.inner.width, t.k),
									height: e(t.inner.height, t.k)
								}, t.inner.ratio = t.inner.height / t.inner.width), this.prop.pageSize = t
							}))
						}, s.prototype.setProgress = function(t, e, n, r) {
							return null != t && (this.progress.val = t), null != e && (this.progress.state = e), null != n && (this.progress.n = n), null != r && (this.progress.stack = r), this.progress.ratio = this.progress.val / this.progress.state, this
						}, s.prototype.updateProgress = function(t, e, n, r) {
							return this.setProgress(t ? this.progress.val + t : null, e || null, n ? this.progress.n + n : null, r ? this.progress.stack.concat(r) : null)
						}, s.prototype.then = function(t, e) {
							var n = this;
							return this.thenCore(t, e, (function(t, e) {
								return n.updateProgress(null, null, 1, [t]), Promise.prototype.then.call(this, (function(e) {
									return n.updateProgress(null, t), e
								})).then(t, e).then((function(t) {
									return n.updateProgress(1), t
								}))
							}))
						}, s.prototype.thenCore = function(t, e, n) {
							n = n || Promise.prototype.then, t && (t = t.bind(this)), e && (e = e.bind(this));
							var r = -1 !== Promise.toString().indexOf("[native code]") && "Promise" === Promise.name ? this : s.convert(Object.assign({}, this), Promise.prototype),
								i = n.call(r, t, e);
							return s.convert(i, this.__proto__)
						}, s.prototype.thenExternal = function(t, e) {
							return Promise.prototype.then.call(this, t, e)
						}, s.prototype.thenList = function(t) {
							var e = this;
							return t.forEach((function(t) {
								e = e.thenCore(t)
							})), e
						}, s.prototype.catch = function(t) {
							t && (t = t.bind(this));
							var e = Promise.prototype.catch.call(this, t);
							return s.convert(e, this)
						}, s.prototype.catchExternal = function(t) {
							return Promise.prototype.catch.call(this, t)
						}, s.prototype.error = function(t) {
							return this.then((function() {
								throw new Error(t)
							}))
						}, s.prototype.using = s.prototype.set, s.prototype.saveAs = s.prototype.save, s.prototype.export = s.prototype.output, s.prototype.run = s.prototype.then, Nt.getPageSize = function(t, e, n) {
							if ("object" == typeof t) {
								var r = t;
								t = r.orientation, e = r.unit || e, n = r.format || n
							}
							e = e || "mm", n = n || "a4", t = ("" + (t || "P")).toLowerCase();
							var i, o = ("" + n).toLowerCase(),
								a = {
									a0: [2383.94, 3370.39],
									a1: [1683.78, 2383.94],
									a2: [1190.55, 1683.78],
									a3: [841.89, 1190.55],
									a4: [595.28, 841.89],
									a5: [419.53, 595.28],
									a6: [297.64, 419.53],
									a7: [209.76, 297.64],
									a8: [147.4, 209.76],
									a9: [104.88, 147.4],
									a10: [73.7, 104.88],
									b0: [2834.65, 4008.19],
									b1: [2004.09, 2834.65],
									b2: [1417.32, 2004.09],
									b3: [1000.63, 1417.32],
									b4: [708.66, 1000.63],
									b5: [498.9, 708.66],
									b6: [354.33, 498.9],
									b7: [249.45, 354.33],
									b8: [175.75, 249.45],
									b9: [124.72, 175.75],
									b10: [87.87, 124.72],
									c0: [2599.37, 3676.54],
									c1: [1836.85, 2599.37],
									c2: [1298.27, 1836.85],
									c3: [918.43, 1298.27],
									c4: [649.13, 918.43],
									c5: [459.21, 649.13],
									c6: [323.15, 459.21],
									c7: [229.61, 323.15],
									c8: [161.57, 229.61],
									c9: [113.39, 161.57],
									c10: [79.37, 113.39],
									dl: [311.81, 623.62],
									letter: [612, 792],
									"government-letter": [576, 756],
									legal: [612, 1008],
									"junior-legal": [576, 360],
									ledger: [1224, 792],
									tabloid: [792, 1224],
									"credit-card": [153, 243]
								};
							switch (e) {
								case "pt":
									i = 1;
									break;
								case "mm":
									i = 72 / 25.4;
									break;
								case "cm":
									i = 72 / 2.54;
									break;
								case "in":
									i = 72;
									break;
								case "px":
									i = .75;
									break;
								case "pc":
								case "em":
									i = 12;
									break;
								case "ex":
									i = 6;
									break;
								default:
									throw "Invalid unit: " + e
							}
							var s, c = 0,
								u = 0;
							if (a.hasOwnProperty(o)) c = a[o][1] / i, u = a[o][0] / i;
							else try {
								c = n[1], u = n[0]
							} catch (t) {
								throw new Error("Invalid format: " + n)
							}
							if ("p" === t || "portrait" === t) t = "p", u > c && (s = u, u = c, c = s);
							else {
								if ("l" !== t && "landscape" !== t) throw "Invalid orientation: " + t;
								t = "l", c > u && (s = u, u = c, c = s)
							}
							return {
								width: u,
								height: c,
								unit: e,
								k: i,
								orientation: t
							}
						}, t.html = function(t, e) {
							(e = e || {}).callback = e.callback || function() {}, e.html2canvas = e.html2canvas || {}, e.html2canvas.canvas = e.html2canvas.canvas || this.canvas, e.jsPDF = e.jsPDF || this, e.fontFaces = e.fontFaces ? e.fontFaces.map(ve) : null;
							var n = new s(e);
							return e.worker ? n : n.from(t).doCallback()
						}
					}(Nt.API), Nt.API.addJS = function(t) {
							return _e = t, this.internal.events.subscribe("postPutResources", (function() {
								Ae = this.internal.newObject(), this.internal.out("<<"), this.internal.out("/Names [(EmbeddedJS) " + (Ae + 1) + " 0 R]"), this.internal.out(">>"), this.internal.out("endobj"), Se = this.internal.newObject(), this.internal.out("<<"), this.internal.out("/S /JavaScript"), this.internal.out("/JS (" + _e + ")"), this.internal.out(">>"), this.internal.out("endobj")
							})), this.internal.events.subscribe("putCatalog", (function() {
								void 0 !== Ae && void 0 !== Se && this.internal.out("/Names <</JavaScript " + Ae + " 0 R>>")
							})), this
						},
						function(t) {
							var e;
							t.events.push(["postPutResources", function() {
								var t = this,
									n = /^(\d+) 0 obj$/;
								if (this.outline.root.children.length > 0)
									for (var r = t.outline.render().split(/\r\n/), i = 0; i < r.length; i++) {
										var o = r[i],
											a = n.exec(o);
										if (null != a) {
											var s = a[1];
											t.internal.newObjectDeferredBegin(s, !1)
										}
										t.internal.write(o)
									}
								if (this.outline.createNamedDestinations) {
									var c = this.internal.pages.length,
										u = [];
									for (i = 0; i < c; i++) {
										var l = t.internal.newObject();
										u.push(l);
										var h = t.internal.getPageInfo(i + 1);
										t.internal.write("<< /D[" + h.objId + " 0 R /XYZ null null null]>> endobj")
									}
									var f = t.internal.newObject();
									for (t.internal.write("<< /Names [ "), i = 0; i < u.length; i++) t.internal.write("(page_" + (i + 1) + ")" + u[i] + " 0 R");
									t.internal.write(" ] >>", "endobj"), e = t.internal.newObject(), t.internal.write("<< /Dests " + f + " 0 R"), t.internal.write(">>", "endobj")
								}
							}]), t.events.push(["putCatalog", function() {
								this.outline.root.children.length > 0 && (this.internal.write("/Outlines", this.outline.makeRef(this.outline.root)), this.outline.createNamedDestinations && this.internal.write("/Names " + e + " 0 R"))
							}]), t.events.push(["initialized", function() {
								var t = this;
								t.outline = {
									createNamedDestinations: !1,
									root: {
										children: []
									}
								}, t.outline.add = function(t, e, n) {
									var r = {
										title: e,
										options: n,
										children: []
									};
									return null == t && (t = this.root), t.children.push(r), r
								}, t.outline.render = function() {
									return this.ctx = {}, this.ctx.val = "", this.ctx.pdf = t, this.genIds_r(this.root), this.renderRoot(this.root), this.renderItems(this.root), this.ctx.val
								}, t.outline.genIds_r = function(e) {
									e.id = t.internal.newObjectDeferred();
									for (var n = 0; n < e.children.length; n++) this.genIds_r(e.children[n])
								}, t.outline.renderRoot = function(t) {
									this.objStart(t), this.line("/Type /Outlines"), t.children.length > 0 && (this.line("/First " + this.makeRef(t.children[0])), this.line("/Last " + this.makeRef(t.children[t.children.length - 1]))), this.line("/Count " + this.count_r({
										count: 0
									}, t)), this.objEnd()
								}, t.outline.renderItems = function(e) {
									for (var n = this.ctx.pdf.internal.getVerticalCoordinateString, r = 0; r < e.children.length; r++) {
										var i = e.children[r];
										this.objStart(i), this.line("/Title " + this.makeString(i.title)), this.line("/Parent " + this.makeRef(e)), r > 0 && this.line("/Prev " + this.makeRef(e.children[r - 1])), r < e.children.length - 1 && this.line("/Next " + this.makeRef(e.children[r + 1])), i.children.length > 0 && (this.line("/First " + this.makeRef(i.children[0])), this.line("/Last " + this.makeRef(i.children[i.children.length - 1])));
										var o = this.count = this.count_r({
											count: 0
										}, i);
										if (o > 0 && this.line("/Count " + o), i.options && i.options.pageNumber) {
											var a = t.internal.getPageInfo(i.options.pageNumber);
											this.line("/Dest [" + a.objId + " 0 R /XYZ 0 " + n(0) + " 0]")
										}
										this.objEnd()
									}
									for (var s = 0; s < e.children.length; s++) this.renderItems(e.children[s])
								}, t.outline.line = function(t) {
									this.ctx.val += t + "\r\n"
								}, t.outline.makeRef = function(t) {
									return t.id + " 0 R"
								}, t.outline.makeString = function(e) {
									return "(" + t.internal.pdfEscape(e) + ")"
								}, t.outline.objStart = function(t) {
									this.ctx.val += "\r\n" + t.id + " 0 obj\r\n<<\r\n"
								}, t.outline.objEnd = function() {
									this.ctx.val += ">> \r\nendobj\r\n"
								}, t.outline.count_r = function(t, e) {
									for (var n = 0; n < e.children.length; n++) t.count++, this.count_r(t, e.children[n]);
									return t.count
								}
							}])
						}(Nt.API),
						function(t) {
							var e = [192, 193, 194, 195, 196, 197, 198, 199];
							t.processJPEG = function(t, n, r, i, o, a) {
								var s, c = this.decode.DCT_DECODE,
									u = null;
								if ("string" == typeof t || this.__addimage__.isArrayBuffer(t) || this.__addimage__.isArrayBufferView(t)) {
									switch (t = o || t, t = this.__addimage__.isArrayBuffer(t) ? new Uint8Array(t) : t, (s = function(t) {
											for (var n, r = 256 * t.charCodeAt(4) + t.charCodeAt(5), i = t.length, o = {
													width: 0,
													height: 0,
													numcomponents: 1
												}, a = 4; a < i; a += 2) {
												if (a += r, -1 !== e.indexOf(t.charCodeAt(a + 1))) {
													n = 256 * t.charCodeAt(a + 5) + t.charCodeAt(a + 6), o = {
														width: 256 * t.charCodeAt(a + 7) + t.charCodeAt(a + 8),
														height: n,
														numcomponents: t.charCodeAt(a + 9)
													};
													break
												}
												r = 256 * t.charCodeAt(a + 2) + t.charCodeAt(a + 3)
											}
											return o
										}(t = this.__addimage__.isArrayBufferView(t) ? this.__addimage__.arrayBufferToBinaryString(t) : t)).numcomponents) {
										case 1:
											a = this.color_spaces.DEVICE_GRAY;
											break;
										case 4:
											a = this.color_spaces.DEVICE_CMYK;
											break;
										case 3:
											a = this.color_spaces.DEVICE_RGB
									}
									u = {
										data: t,
										width: s.width,
										height: s.height,
										colorSpace: a,
										bitsPerComponent: 8,
										filter: c,
										index: n,
										alias: r
									}
								}
								return u
							}
						}(Nt.API);
					var ke, Fe, Ie, Ce, je, Oe = function() {
						var t, e, n;

						function r(t) {
							var e, n, r, i, o, a, s, c, u, l, h, f, d, p;
							for (this.data = t, this.pos = 8, this.palette = [], this.imgData = [], this.transparency = {}, this.animation = null, this.text = {}, a = null;;) {
								switch (e = this.readUInt32(), u = function() {
										var t, e;
										for (e = [], t = 0; t < 4; ++t) e.push(String.fromCharCode(this.data[this.pos++]));
										return e
									}.call(this).join("")) {
									case "IHDR":
										this.width = this.readUInt32(), this.height = this.readUInt32(), this.bits = this.data[this.pos++], this.colorType = this.data[this.pos++], this.compressionMethod = this.data[this.pos++], this.filterMethod = this.data[this.pos++], this.interlaceMethod = this.data[this.pos++];
										break;
									case "acTL":
										this.animation = {
											numFrames: this.readUInt32(),
											numPlays: this.readUInt32() || 1 / 0,
											frames: []
										};
										break;
									case "PLTE":
										this.palette = this.read(e);
										break;
									case "fcTL":
										a && this.animation.frames.push(a), this.pos += 4, a = {
											width: this.readUInt32(),
											height: this.readUInt32(),
											xOffset: this.readUInt32(),
											yOffset: this.readUInt32()
										}, o = this.readUInt16(), i = this.readUInt16() || 100, a.delay = 1e3 * o / i, a.disposeOp = this.data[this.pos++], a.blendOp = this.data[this.pos++], a.data = [];
										break;
									case "IDAT":
									case "fdAT":
										for ("fdAT" === u && (this.pos += 4, e -= 4), t = (null != a ? a.data : void 0) || this.imgData, f = 0; 0 <= e ? f < e : f > e; 0 <= e ? ++f : --f) t.push(this.data[this.pos++]);
										break;
									case "tRNS":
										switch (this.transparency = {}, this.colorType) {
											case 3:
												if (r = this.palette.length / 3, this.transparency.indexed = this.read(e), this.transparency.indexed.length > r) throw new Error("More transparent colors than palette size");
												if ((l = r - this.transparency.indexed.length) > 0)
													for (d = 0; 0 <= l ? d < l : d > l; 0 <= l ? ++d : --d) this.transparency.indexed.push(255);
												break;
											case 0:
												this.transparency.grayscale = this.read(e)[0];
												break;
											case 2:
												this.transparency.rgb = this.read(e)
										}
										break;
									case "tEXt":
										s = (h = this.read(e)).indexOf(0), c = String.fromCharCode.apply(String, h.slice(0, s)), this.text[c] = String.fromCharCode.apply(String, h.slice(s + 1));
										break;
									case "IEND":
										return a && this.animation.frames.push(a), this.colors = function() {
											switch (this.colorType) {
												case 0:
												case 3:
												case 4:
													return 1;
												case 2:
												case 6:
													return 3
											}
										}.call(this), this.hasAlphaChannel = 4 === (p = this.colorType) || 6 === p, n = this.colors + (this.hasAlphaChannel ? 1 : 0), this.pixelBitlength = this.bits * n, this.colorSpace = function() {
											switch (this.colors) {
												case 1:
													return "DeviceGray";
												case 3:
													return "DeviceRGB"
											}
										}.call(this), void(this.imgData = new Uint8Array(this.imgData));
									default:
										this.pos += e
								}
								if (this.pos += 4, this.pos > this.data.length) throw new Error("Incomplete or corrupt PNG file")
							}
						}
						r.prototype.read = function(t) {
							var e, n;
							for (n = [], e = 0; 0 <= t ? e < t : e > t; 0 <= t ? ++e : --e) n.push(this.data[this.pos++]);
							return n
						}, r.prototype.readUInt32 = function() {
							return this.data[this.pos++] << 24 | this.data[this.pos++] << 16 | this.data[this.pos++] << 8 | this.data[this.pos++]
						}, r.prototype.readUInt16 = function() {
							return this.data[this.pos++] << 8 | this.data[this.pos++]
						}, r.prototype.decodePixels = function(t) {
							var e = this.pixelBitlength / 8,
								n = new Uint8Array(this.width * this.height * e),
								r = 0,
								i = this;
							if (null == t && (t = this.imgData), 0 === t.length) return new Uint8Array(0);

							function o(o, a, s, c) {
								var u, l, h, f, d, p, g, v, m, b, y, w, N, L, x, A, S, _, P, k, F, I = Math.ceil((i.width - o) / s),
									C = Math.ceil((i.height - a) / c),
									j = i.width == I && i.height == C;
								for (L = e * I, w = j ? n : new Uint8Array(L * C), p = t.length, N = 0, l = 0; N < C && r < p;) {
									switch (t[r++]) {
										case 0:
											for (f = S = 0; S < L; f = S += 1) w[l++] = t[r++];
											break;
										case 1:
											for (f = _ = 0; _ < L; f = _ += 1) u = t[r++], d = f < e ? 0 : w[l - e], w[l++] = (u + d) % 256;
											break;
										case 2:
											for (f = P = 0; P < L; f = P += 1) u = t[r++], h = (f - f % e) / e, x = N && w[(N - 1) * L + h * e + f % e], w[l++] = (x + u) % 256;
											break;
										case 3:
											for (f = k = 0; k < L; f = k += 1) u = t[r++], h = (f - f % e) / e, d = f < e ? 0 : w[l - e], x = N && w[(N - 1) * L + h * e + f % e], w[l++] = (u + Math.floor((d + x) / 2)) % 256;
											break;
										case 4:
											for (f = F = 0; F < L; f = F += 1) u = t[r++], h = (f - f % e) / e, d = f < e ? 0 : w[l - e], 0 === N ? x = A = 0 : (x = w[(N - 1) * L + h * e + f % e], A = h && w[(N - 1) * L + (h - 1) * e + f % e]), g = d + x - A, v = Math.abs(g - d), b = Math.abs(g - x), y = Math.abs(g - A), m = v <= b && v <= y ? d : b <= y ? x : A, w[l++] = (u + m) % 256;
											break;
										default:
											throw new Error("Invalid filter algorithm: " + t[r - 1])
									}
									if (!j) {
										var O = ((a + N * c) * i.width + o) * e,
											B = N * L;
										for (f = 0; f < I; f += 1) {
											for (var M = 0; M < e; M += 1) n[O++] = w[B++];
											O += (s - 1) * e
										}
									}
									N++
								}
							}
							return t = H(t), 1 == i.interlaceMethod ? (o(0, 0, 8, 8), o(4, 0, 8, 8), o(0, 4, 4, 8), o(2, 0, 4, 4), o(0, 2, 2, 4), o(1, 0, 2, 2), o(0, 1, 1, 2)) : o(0, 0, 1, 1), n
						}, r.prototype.decodePalette = function() {
							var t, e, n, r, i, o, a, s, c;
							for (n = this.palette, o = this.transparency.indexed || [], i = new Uint8Array((o.length || 0) + n.length), r = 0, t = 0, e = a = 0, s = n.length; a < s; e = a += 3) i[r++] = n[e], i[r++] = n[e + 1], i[r++] = n[e + 2], i[r++] = null != (c = o[t++]) ? c : 255;
							return i
						}, r.prototype.copyToImageData = function(t, e) {
							var n, r, i, o, a, s, c, u, l, h, f;
							if (r = this.colors, l = null, n = this.hasAlphaChannel, this.palette.length && (l = null != (f = this._decodedPalette) ? f : this._decodedPalette = this.decodePalette(), r = 4, n = !0), u = (i = t.data || t).length, a = l || e, o = s = 0, 1 === r)
								for (; o < u;) c = l ? 4 * e[o / 4] : s, h = a[c++], i[o++] = h, i[o++] = h, i[o++] = h, i[o++] = n ? a[c++] : 255, s = c;
							else
								for (; o < u;) c = l ? 4 * e[o / 4] : s, i[o++] = a[c++], i[o++] = a[c++], i[o++] = a[c++], i[o++] = n ? a[c++] : 255, s = c
						}, r.prototype.decode = function() {
							var t;
							return t = new Uint8Array(this.width * this.height * 4), this.copyToImageData(t, this.decodePixels()), t
						};
						var i = function() {
							if ("[object Window]" === Object.prototype.toString.call(W)) {
								try {
									e = W.document.createElement("canvas"), n = e.getContext("2d")
								} catch (t) {
									return !1
								}
								return !0
							}
							return !1
						};
						return i(), t = function(t) {
							var r;
							if (!0 === i()) return n.width = t.width, n.height = t.height, n.clearRect(0, 0, t.width, t.height), n.putImageData(t, 0, 0), (r = new Image).src = e.toDataURL(), r;
							throw new Error("This method requires a Browser with Canvas-capability.")
						}, r.prototype.decodeFrames = function(e) {
							var n, r, i, o, a, s, c, u;
							if (this.animation) {
								for (u = [], r = a = 0, s = (c = this.animation.frames).length; a < s; r = ++a) n = c[r], i = e.createImageData(n.width, n.height), o = this.decodePixels(new Uint8Array(n.data)), this.copyToImageData(i, o), n.imageData = i, u.push(n.image = t(i));
								return u
							}
						}, r.prototype.renderFrame = function(t, e) {
							var n, r, i;
							return n = (r = this.animation.frames)[e], i = r[e - 1], 0 === e && t.clearRect(0, 0, this.width, this.height), 1 === (null != i ? i.disposeOp : void 0) ? t.clearRect(i.xOffset, i.yOffset, i.width, i.height) : 2 === (null != i ? i.disposeOp : void 0) && t.putImageData(i.imageData, i.xOffset, i.yOffset), 0 === n.blendOp && t.clearRect(n.xOffset, n.yOffset, n.width, n.height), t.drawImage(n.image, n.xOffset, n.yOffset)
						}, r.prototype.animate = function(t) {
							var e, n, r, i, o, a, s = this;
							return n = 0, a = this.animation, i = a.numFrames, r = a.frames, o = a.numPlays, (e = function() {
								var a, c;
								if (a = n++ % i, c = r[a], s.renderFrame(t, a), i > 1 && n / i < o) return s.animation._timeout = setTimeout(e, c.delay)
							})()
						}, r.prototype.stopAnimation = function() {
							var t;
							return clearTimeout(null != (t = this.animation) ? t._timeout : void 0)
						}, r.prototype.render = function(t) {
							var e, n;
							return t._png && t._png.stopAnimation(), t._png = this, t.width = this.width, t.height = this.height, e = t.getContext("2d"), this.animation ? (this.decodeFrames(e), this.animate(e)) : (n = e.createImageData(this.width, this.height), this.copyToImageData(n, this.decodePixels()), e.putImageData(n, 0, 0))
						}, r
					}();

					function Be(t) {
						var e = 0;
						if (71 !== t[e++] || 73 !== t[e++] || 70 !== t[e++] || 56 !== t[e++] || 56 != (t[e++] + 1 & 253) || 97 !== t[e++]) throw new Error("Invalid GIF 87a/89a header.");
						var n = t[e++] | t[e++] << 8,
							r = t[e++] | t[e++] << 8,
							i = t[e++],
							o = i >> 7,
							a = 1 << 1 + (7 & i);
						t[e++], t[e++];
						var s = null,
							c = null;
						o && (s = e, c = a, e += 3 * a);
						var u = !0,
							l = [],
							h = 0,
							f = null,
							d = 0,
							p = null;
						for (this.width = n, this.height = r; u && e < t.length;) switch (t[e++]) {
							case 33:
								switch (t[e++]) {
									case 255:
										if (11 !== t[e] || 78 == t[e + 1] && 69 == t[e + 2] && 84 == t[e + 3] && 83 == t[e + 4] && 67 == t[e + 5] && 65 == t[e + 6] && 80 == t[e + 7] && 69 == t[e + 8] && 50 == t[e + 9] && 46 == t[e + 10] && 48 == t[e + 11] && 3 == t[e + 12] && 1 == t[e + 13] && 0 == t[e + 16]) e += 14, p = t[e++] | t[e++] << 8, e++;
										else
											for (e += 12;;) {
												if (!((P = t[e++]) >= 0)) throw Error("Invalid block size");
												if (0 === P) break;
												e += P
											}
										break;
									case 249:
										if (4 !== t[e++] || 0 !== t[e + 4]) throw new Error("Invalid graphics extension block.");
										var g = t[e++];
										h = t[e++] | t[e++] << 8, f = t[e++], 0 == (1 & g) && (f = null), d = g >> 2 & 7, e++;
										break;
									case 254:
										for (;;) {
											if (!((P = t[e++]) >= 0)) throw Error("Invalid block size");
											if (0 === P) break;
											e += P
										}
										break;
									default:
										throw new Error("Unknown graphic control label: 0x" + t[e - 1].toString(16))
								}
								break;
							case 44:
								var v = t[e++] | t[e++] << 8,
									m = t[e++] | t[e++] << 8,
									b = t[e++] | t[e++] << 8,
									y = t[e++] | t[e++] << 8,
									w = t[e++],
									N = w >> 6 & 1,
									L = 1 << 1 + (7 & w),
									x = s,
									A = c,
									S = !1;
								w >> 7 && (S = !0, x = e, A = L, e += 3 * L);
								var _ = e;
								for (e++;;) {
									var P;
									if (!((P = t[e++]) >= 0)) throw Error("Invalid block size");
									if (0 === P) break;
									e += P
								}
								l.push({
									x: v,
									y: m,
									width: b,
									height: y,
									has_local_palette: S,
									palette_offset: x,
									palette_size: A,
									data_offset: _,
									data_length: e - _,
									transparent_index: f,
									interlaced: !!N,
									delay: h,
									disposal: d
								});
								break;
							case 59:
								u = !1;
								break;
							default:
								throw new Error("Unknown gif block: 0x" + t[e - 1].toString(16))
						}
						this.numFrames = function() {
							return l.length
						}, this.loopCount = function() {
							return p
						}, this.frameInfo = function(t) {
							if (t < 0 || t >= l.length) throw new Error("Frame index out of range.");
							return l[t]
						}, this.decodeAndBlitFrameBGRA = function(e, r) {
							var i = this.frameInfo(e),
								o = i.width * i.height,
								a = new Uint8Array(o);
							Me(t, i.data_offset, a, o);
							var s = i.palette_offset,
								c = i.transparent_index;
							null === c && (c = 256);
							var u = i.width,
								l = n - u,
								h = u,
								f = 4 * (i.y * n + i.x),
								d = 4 * ((i.y + i.height) * n + i.x),
								p = f,
								g = 4 * l;
							!0 === i.interlaced && (g += 4 * n * 7);
							for (var v = 8, m = 0, b = a.length; m < b; ++m) {
								var y = a[m];
								if (0 === h && (h = u, (p += g) >= d && (g = 4 * l + 4 * n * (v - 1), p = f + (u + l) * (v << 1), v >>= 1)), y === c) p += 4;
								else {
									var w = t[s + 3 * y],
										N = t[s + 3 * y + 1],
										L = t[s + 3 * y + 2];
									r[p++] = L, r[p++] = N, r[p++] = w, r[p++] = 255
								}--h
							}
						}, this.decodeAndBlitFrameRGBA = function(e, r) {
							var i = this.frameInfo(e),
								o = i.width * i.height,
								a = new Uint8Array(o);
							Me(t, i.data_offset, a, o);
							var s = i.palette_offset,
								c = i.transparent_index;
							null === c && (c = 256);
							var u = i.width,
								l = n - u,
								h = u,
								f = 4 * (i.y * n + i.x),
								d = 4 * ((i.y + i.height) * n + i.x),
								p = f,
								g = 4 * l;
							!0 === i.interlaced && (g += 4 * n * 7);
							for (var v = 8, m = 0, b = a.length; m < b; ++m) {
								var y = a[m];
								if (0 === h && (h = u, (p += g) >= d && (g = 4 * l + 4 * n * (v - 1), p = f + (u + l) * (v << 1), v >>= 1)), y === c) p += 4;
								else {
									var w = t[s + 3 * y],
										N = t[s + 3 * y + 1],
										L = t[s + 3 * y + 2];
									r[p++] = w, r[p++] = N, r[p++] = L, r[p++] = 255
								}--h
							}
						}
					}

					function Me(t, e, n, r) {
						for (var i = t[e++], o = 1 << i, a = o + 1, s = a + 1, c = i + 1, u = (1 << c) - 1, l = 0, h = 0, f = 0, d = t[e++], p = new Int32Array(4096), g = null;;) {
							for (; l < 16 && 0 !== d;) h |= t[e++] << l, l += 8, 1 === d ? d = t[e++] : --d;
							if (l < c) break;
							var v = h & u;
							if (h >>= c, l -= c, v !== o) {
								if (v === a) break;
								for (var m = v < s ? v : g, b = 0, y = m; y > o;) y = p[y] >> 8, ++b;
								var w = y;
								if (f + b + (m !== v ? 1 : 0) > r) return void G.log("Warning, gif stream longer than expected.");
								n[f++] = w;
								var N = f += b;
								for (m !== v && (n[f++] = w), y = m; b--;) y = p[y], n[--N] = 255 & y, y >>= 8;
								null !== g && s < 4096 && (p[s++] = g << 8 | w, s >= u + 1 && c < 12 && (++c, u = u << 1 | 1)), g = v
							} else s = a + 1, u = (1 << (c = i + 1)) - 1, g = null
						}
						return f !== r && G.log("Warning, gif stream shorter than expected."), n
					}

					function Ee(t) {
						var e, n, r, i, o, a = Math.floor,
							s = new Array(64),
							c = new Array(64),
							u = new Array(64),
							l = new Array(64),
							h = new Array(65535),
							f = new Array(65535),
							d = new Array(64),
							p = new Array(64),
							g = [],
							v = 0,
							m = 7,
							b = new Array(64),
							y = new Array(64),
							w = new Array(64),
							N = new Array(256),
							L = new Array(2048),
							x = [0, 1, 5, 6, 14, 15, 27, 28, 2, 4, 7, 13, 16, 26, 29, 42, 3, 8, 12, 17, 25, 30, 41, 43, 9, 11, 18, 24, 31, 40, 44, 53, 10, 19, 23, 32, 39, 45, 52, 54, 20, 22, 33, 38, 46, 51, 55, 60, 21, 34, 37, 47, 50, 56, 59, 61, 35, 36, 48, 49, 57, 58, 62, 63],
							A = [0, 0, 1, 5, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0],
							S = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
							_ = [0, 0, 2, 1, 3, 3, 2, 4, 3, 5, 5, 4, 4, 0, 0, 1, 125],
							P = [1, 2, 3, 0, 4, 17, 5, 18, 33, 49, 65, 6, 19, 81, 97, 7, 34, 113, 20, 50, 129, 145, 161, 8, 35, 66, 177, 193, 21, 82, 209, 240, 36, 51, 98, 114, 130, 9, 10, 22, 23, 24, 25, 26, 37, 38, 39, 40, 41, 42, 52, 53, 54, 55, 56, 57, 58, 67, 68, 69, 70, 71, 72, 73, 74, 83, 84, 85, 86, 87, 88, 89, 90, 99, 100, 101, 102, 103, 104, 105, 106, 115, 116, 117, 118, 119, 120, 121, 122, 131, 132, 133, 134, 135, 136, 137, 138, 146, 147, 148, 149, 150, 151, 152, 153, 154, 162, 163, 164, 165, 166, 167, 168, 169, 170, 178, 179, 180, 181, 182, 183, 184, 185, 186, 194, 195, 196, 197, 198, 199, 200, 201, 202, 210, 211, 212, 213, 214, 215, 216, 217, 218, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250],
							k = [0, 0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0],
							F = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
							I = [0, 0, 2, 1, 2, 4, 4, 3, 4, 7, 5, 4, 4, 0, 1, 2, 119],
							C = [0, 1, 2, 3, 17, 4, 5, 33, 49, 6, 18, 65, 81, 7, 97, 113, 19, 34, 50, 129, 8, 20, 66, 145, 161, 177, 193, 9, 35, 51, 82, 240, 21, 98, 114, 209, 10, 22, 36, 52, 225, 37, 241, 23, 24, 25, 26, 38, 39, 40, 41, 42, 53, 54, 55, 56, 57, 58, 67, 68, 69, 70, 71, 72, 73, 74, 83, 84, 85, 86, 87, 88, 89, 90, 99, 100, 101, 102, 103, 104, 105, 106, 115, 116, 117, 118, 119, 120, 121, 122, 130, 131, 132, 133, 134, 135, 136, 137, 138, 146, 147, 148, 149, 150, 151, 152, 153, 154, 162, 163, 164, 165, 166, 167, 168, 169, 170, 178, 179, 180, 181, 182, 183, 184, 185, 186, 194, 195, 196, 197, 198, 199, 200, 201, 202, 210, 211, 212, 213, 214, 215, 216, 217, 218, 226, 227, 228, 229, 230, 231, 232, 233, 234, 242, 243, 244, 245, 246, 247, 248, 249, 250];

						function j(t, e) {
							for (var n = 0, r = 0, i = new Array, o = 1; o <= 16; o++) {
								for (var a = 1; a <= t[o]; a++) i[e[r]] = [], i[e[r]][0] = n, i[e[r]][1] = o, r++, n++;
								n *= 2
							}
							return i
						}

						function O(t) {
							for (var e = t[0], n = t[1] - 1; n >= 0;) e & 1 << n && (v |= 1 << m), n--, --m < 0 && (255 == v ? (B(255), B(0)) : B(v), m = 7, v = 0)
						}

						function B(t) {
							g.push(t)
						}

						function M(t) {
							B(t >> 8 & 255), B(255 & t)
						}

						function E(t, e, n, r, i) {
							for (var o, a = i[0], s = i[240], c = function(t, e) {
									var n, r, i, o, a, s, c, u, l, h, f = 0;
									for (l = 0; l < 8; ++l) {
										n = t[f], r = t[f + 1], i = t[f + 2], o = t[f + 3], a = t[f + 4], s = t[f + 5], c = t[f + 6];
										var p = n + (u = t[f + 7]),
											g = n - u,
											v = r + c,
											m = r - c,
											b = i + s,
											y = i - s,
											w = o + a,
											N = o - a,
											L = p + w,
											x = p - w,
											A = v + b,
											S = v - b;
										t[f] = L + A, t[f + 4] = L - A;
										var _ = .707106781 * (S + x);
										t[f + 2] = x + _, t[f + 6] = x - _;
										var P = .382683433 * ((L = N + y) - (S = m + g)),
											k = .5411961 * L + P,
											F = 1.306562965 * S + P,
											I = .707106781 * (A = y + m),
											C = g + I,
											j = g - I;
										t[f + 5] = j + k, t[f + 3] = j - k, t[f + 1] = C + F, t[f + 7] = C - F, f += 8
									}
									for (f = 0, l = 0; l < 8; ++l) {
										n = t[f], r = t[f + 8], i = t[f + 16], o = t[f + 24], a = t[f + 32], s = t[f + 40], c = t[f + 48];
										var O = n + (u = t[f + 56]),
											B = n - u,
											M = r + c,
											E = r - c,
											q = i + s,
											T = i - s,
											D = o + a,
											R = o - a,
											z = O + D,
											U = O - D,
											H = M + q,
											W = M - q;
										t[f] = z + H, t[f + 32] = z - H;
										var V = .707106781 * (W + U);
										t[f + 16] = U + V, t[f + 48] = U - V;
										var G = .382683433 * ((z = R + T) - (W = E + B)),
											Y = .5411961 * z + G,
											J = 1.306562965 * W + G,
											X = .707106781 * (H = T + E),
											K = B + X,
											Z = B - X;
										t[f + 40] = Z + Y, t[f + 24] = Z - Y, t[f + 8] = K + J, t[f + 56] = K - J, f++
									}
									for (l = 0; l < 64; ++l) h = t[l] * e[l], d[l] = h > 0 ? h + .5 | 0 : h - .5 | 0;
									return d
								}(t, e), u = 0; u < 64; ++u) p[x[u]] = c[u];
							var l = p[0] - n;
							n = p[0], 0 == l ? O(r[0]) : (O(r[f[o = 32767 + l]]), O(h[o]));
							for (var g = 63; g > 0 && 0 == p[g];) g--;
							if (0 == g) return O(a), n;
							for (var v, m = 1; m <= g;) {
								for (var b = m; 0 == p[m] && m <= g;) ++m;
								var y = m - b;
								if (y >= 16) {
									v = y >> 4;
									for (var w = 1; w <= v; ++w) O(s);
									y &= 15
								}
								o = 32767 + p[m], O(i[(y << 4) + f[o]]), O(h[o]), m++
							}
							return 63 != g && O(a), n
						}

						function q(t) {
							t = Math.min(Math.max(t, 1), 100), o != t && (function(t) {
								for (var e = [16, 11, 10, 16, 24, 40, 51, 61, 12, 12, 14, 19, 26, 58, 60, 55, 14, 13, 16, 24, 40, 57, 69, 56, 14, 17, 22, 29, 51, 87, 80, 62, 18, 22, 37, 56, 68, 109, 103, 77, 24, 35, 55, 64, 81, 104, 113, 92, 49, 64, 78, 87, 103, 121, 120, 101, 72, 92, 95, 98, 112, 100, 103, 99], n = 0; n < 64; n++) {
									var r = a((e[n] * t + 50) / 100);
									r = Math.min(Math.max(r, 1), 255), s[x[n]] = r
								}
								for (var i = [17, 18, 24, 47, 99, 99, 99, 99, 18, 21, 26, 66, 99, 99, 99, 99, 24, 26, 56, 99, 99, 99, 99, 99, 47, 66, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99], o = 0; o < 64; o++) {
									var h = a((i[o] * t + 50) / 100);
									h = Math.min(Math.max(h, 1), 255), c[x[o]] = h
								}
								for (var f = [1, 1.387039845, 1.306562965, 1.175875602, 1, .785694958, .5411961, .275899379], d = 0, p = 0; p < 8; p++)
									for (var g = 0; g < 8; g++) u[d] = 1 / (s[x[d]] * f[p] * f[g] * 8), l[d] = 1 / (c[x[d]] * f[p] * f[g] * 8), d++
							}(t < 50 ? Math.floor(5e3 / t) : Math.floor(200 - 2 * t)), o = t)
						}
						this.encode = function(t, o) {
								o && q(o), g = new Array, v = 0, m = 7, M(65496), M(65504), M(16), B(74), B(70), B(73), B(70), B(0), B(1), B(1), B(0), M(1), M(1), B(0), B(0),
									function() {
										M(65499), M(132), B(0);
										for (var t = 0; t < 64; t++) B(s[t]);
										B(1);
										for (var e = 0; e < 64; e++) B(c[e])
									}(),
									function(t, e) {
										M(65472), M(17), B(8), M(e), M(t), B(3), B(1), B(17), B(0), B(2), B(17), B(1), B(3), B(17), B(1)
									}(t.width, t.height),
									function() {
										M(65476), M(418), B(0);
										for (var t = 0; t < 16; t++) B(A[t + 1]);
										for (var e = 0; e <= 11; e++) B(S[e]);
										B(16);
										for (var n = 0; n < 16; n++) B(_[n + 1]);
										for (var r = 0; r <= 161; r++) B(P[r]);
										B(1);
										for (var i = 0; i < 16; i++) B(k[i + 1]);
										for (var o = 0; o <= 11; o++) B(F[o]);
										B(17);
										for (var a = 0; a < 16; a++) B(I[a + 1]);
										for (var s = 0; s <= 161; s++) B(C[s])
									}(), M(65498), M(12), B(3), B(1), B(0), B(2), B(17), B(3), B(17), B(0), B(63), B(0);
								var a = 0,
									h = 0,
									f = 0;
								v = 0, m = 7, this.encode.displayName = "_encode_";
								for (var d, p, N, x, j, T, D, R, z, U = t.data, H = t.width, W = t.height, V = 4 * H, G = 0; G < W;) {
									for (d = 0; d < V;) {
										for (j = V * G + d, D = -1, R = 0, z = 0; z < 64; z++) T = j + (R = z >> 3) * V + (D = 4 * (7 & z)), G + R >= W && (T -= V * (G + 1 + R - W)), d + D >= V && (T -= d + D - V + 4), p = U[T++], N = U[T++], x = U[T++], b[z] = (L[p] + L[N + 256 >> 0] + L[x + 512 >> 0] >> 16) - 128, y[z] = (L[p + 768 >> 0] + L[N + 1024 >> 0] + L[x + 1280 >> 0] >> 16) - 128, w[z] = (L[p + 1280 >> 0] + L[N + 1536 >> 0] + L[x + 1792 >> 0] >> 16) - 128;
										a = E(b, u, a, e, r), h = E(y, l, h, n, i), f = E(w, l, f, n, i), d += 32
									}
									G += 8
								}
								if (m >= 0) {
									var Y = [];
									Y[1] = m + 1, Y[0] = (1 << m + 1) - 1, O(Y)
								}
								return M(65497), new Uint8Array(g)
							}, t = t || 50,
							function() {
								for (var t = String.fromCharCode, e = 0; e < 256; e++) N[e] = t(e)
							}(), e = j(A, S), n = j(k, F), r = j(_, P), i = j(I, C),
							function() {
								for (var t = 1, e = 2, n = 1; n <= 15; n++) {
									for (var r = t; r < e; r++) f[32767 + r] = n, h[32767 + r] = [], h[32767 + r][1] = n, h[32767 + r][0] = r;
									for (var i = -(e - 1); i <= -t; i++) f[32767 + i] = n, h[32767 + i] = [], h[32767 + i][1] = n, h[32767 + i][0] = e - 1 + i;
									t <<= 1, e <<= 1
								}
							}(),
							function() {
								for (var t = 0; t < 256; t++) L[t] = 19595 * t, L[t + 256 >> 0] = 38470 * t, L[t + 512 >> 0] = 7471 * t + 32768, L[t + 768 >> 0] = -11059 * t, L[t + 1024 >> 0] = -21709 * t, L[t + 1280 >> 0] = 32768 * t + 8421375, L[t + 1536 >> 0] = -27439 * t, L[t + 1792 >> 0] = -5329 * t
							}(), q(t)
					}

					function qe(t, e) {
						if (this.pos = 0, this.buffer = t, this.datav = new DataView(t.buffer), this.is_with_alpha = !!e, this.bottom_up = !0, this.flag = String.fromCharCode(this.buffer[0]) + String.fromCharCode(this.buffer[1]), this.pos += 2, -1 === ["BM", "BA", "CI", "CP", "IC", "PT"].indexOf(this.flag)) throw new Error("Invalid BMP File");
						this.parseHeader(), this.parseBGR()
					}

					function Te(t) {
						function e(t) {
							if (!t) throw Error("assert :P")
						}

						function n(t, e, n) {
							for (var r = 0; 4 > r; r++)
								if (t[e + r] != n.charCodeAt(r)) return !0;
							return !1
						}

						function r(t, e, n, r, i) {
							for (var o = 0; o < i; o++) t[e + o] = n[r + o]
						}

						function i(t, e, n, r) {
							for (var i = 0; i < r; i++) t[e + i] = n
						}

						function o(t) {
							return new Int32Array(t)
						}

						function a(t, e) {
							for (var n = [], r = 0; r < t; r++) n.push(new e);
							return n
						}

						function s(t, e) {
							var n = [];
							return function t(n, r, i) {
								for (var o = i[r], a = 0; a < o && (n.push(i.length > r + 1 ? [] : new e), !(i.length < r + 1)); a++) t(n[a], r + 1, i)
							}(n, 0, t), n
						}

						function c(t, e) {
							for (var n = "", r = 0; r < 4; r++) n += String.fromCharCode(t[e++]);
							return n
						}

						function u(t, e) {
							return (t[e + 0] << 0 | t[e + 1] << 8 | t[e + 2] << 16) >>> 0
						}

						function l(t, e) {
							return (t[e + 0] << 0 | t[e + 1] << 8 | t[e + 2] << 16 | t[e + 3] << 24) >>> 0
						}
						new(Te = function() {
							var t = this;

							function c(t, e) {
								for (var n = 1 << e - 1 >>> 0; t & n;) n >>>= 1;
								return n ? (t & n - 1) + n : t
							}

							function u(t, n, r, i, o) {
								e(!(i % r));
								do {
									t[n + (i -= r)] = o
								} while (0 < i)
							}

							function l(t, n, r, i, a) {
								if (e(2328 >= a), 512 >= a) var s = o(512);
								else if (null == (s = o(a))) return 0;
								return function(t, n, r, i, a, s) {
									var l, f, d = n,
										p = 1 << r,
										g = o(16),
										v = o(16);
									for (e(0 != a), e(null != i), e(null != t), e(0 < r), f = 0; f < a; ++f) {
										if (15 < i[f]) return 0;
										++g[i[f]]
									}
									if (g[0] == a) return 0;
									for (v[1] = 0, l = 1; 15 > l; ++l) {
										if (g[l] > 1 << l) return 0;
										v[l + 1] = v[l] + g[l]
									}
									for (f = 0; f < a; ++f) l = i[f], 0 < i[f] && (s[v[l]++] = f);
									if (1 == v[15]) return (i = new h).g = 0, i.value = s[0], u(t, d, 1, p, i), p;
									var m, b = -1,
										y = p - 1,
										w = 0,
										N = 1,
										L = 1,
										x = 1 << r;
									for (f = 0, l = 1, a = 2; l <= r; ++l, a <<= 1) {
										if (N += L <<= 1, 0 > (L -= g[l])) return 0;
										for (; 0 < g[l]; --g[l])(i = new h).g = l, i.value = s[f++], u(t, d + w, a, x, i), w = c(w, l)
									}
									for (l = r + 1, a = 2; 15 >= l; ++l, a <<= 1) {
										if (N += L <<= 1, 0 > (L -= g[l])) return 0;
										for (; 0 < g[l]; --g[l]) {
											if (i = new h, (w & y) != b) {
												for (d += x, m = 1 << (b = l) - r; 15 > b && !(0 >= (m -= g[b]));) ++b, m <<= 1;
												p += x = 1 << (m = b - r), t[n + (b = w & y)].g = m + r, t[n + b].value = d - n - b
											}
											i.g = l - r, i.value = s[f++], u(t, d + (w >> r), a, x, i), w = c(w, l)
										}
									}
									return N != 2 * v[15] - 1 ? 0 : p
								}(t, n, r, i, a, s)
							}

							function h() {
								this.value = this.g = 0
							}

							function f() {
								this.value = this.g = 0
							}

							function d() {
								this.G = a(5, h), this.H = o(5), this.jc = this.Qb = this.qb = this.nd = 0, this.pd = a(Dn, f)
							}

							function p(t, n, r, i) {
								e(null != t), e(null != n), e(2147483648 > i), t.Ca = 254, t.I = 0, t.b = -8, t.Ka = 0, t.oa = n, t.pa = r, t.Jd = n, t.Yc = r + i, t.Zc = 4 <= i ? r + i - 4 + 1 : r, _(t)
							}

							function g(t, e) {
								for (var n = 0; 0 < e--;) n |= k(t, 128) << e;
								return n
							}

							function v(t, e) {
								var n = g(t, e);
								return P(t) ? -n : n
							}

							function m(t, n, r, i) {
								var o, a = 0;
								for (e(null != t), e(null != n), e(4294967288 > i), t.Sb = i, t.Ra = 0, t.u = 0, t.h = 0, 4 < i && (i = 4), o = 0; o < i; ++o) a += n[r + o] << 8 * o;
								t.Ra = a, t.bb = i, t.oa = n, t.pa = r
							}

							function b(t) {
								for (; 8 <= t.u && t.bb < t.Sb;) t.Ra >>>= 8, t.Ra += t.oa[t.pa + t.bb] << Un - 8 >>> 0, ++t.bb, t.u -= 8;
								x(t) && (t.h = 1, t.u = 0)
							}

							function y(t, n) {
								if (e(0 <= n), !t.h && n <= zn) {
									var r = L(t) & Rn[n];
									return t.u += n, b(t), r
								}
								return t.h = 1, t.u = 0
							}

							function w() {
								this.b = this.Ca = this.I = 0, this.oa = [], this.pa = 0, this.Jd = [], this.Yc = 0, this.Zc = [], this.Ka = 0
							}

							function N() {
								this.Ra = 0, this.oa = [], this.h = this.u = this.bb = this.Sb = this.pa = 0
							}

							function L(t) {
								return t.Ra >>> (t.u & Un - 1) >>> 0
							}

							function x(t) {
								return e(t.bb <= t.Sb), t.h || t.bb == t.Sb && t.u > Un
							}

							function A(t, e) {
								t.u = e, t.h = x(t)
							}

							function S(t) {
								t.u >= Hn && (e(t.u >= Hn), b(t))
							}

							function _(t) {
								e(null != t && null != t.oa), t.pa < t.Zc ? (t.I = (t.oa[t.pa++] | t.I << 8) >>> 0, t.b += 8) : (e(null != t && null != t.oa), t.pa < t.Yc ? (t.b += 8, t.I = t.oa[t.pa++] | t.I << 8) : t.Ka ? t.b = 0 : (t.I <<= 8, t.b += 8, t.Ka = 1))
							}

							function P(t) {
								return g(t, 1)
							}

							function k(t, e) {
								var n = t.Ca;
								0 > t.b && _(t);
								var r = t.b,
									i = n * e >>> 8,
									o = (t.I >>> r > i) + 0;
								for (o ? (n -= i, t.I -= i + 1 << r >>> 0) : n = i + 1, r = n, i = 0; 256 <= r;) i += 8, r >>= 8;
								return r = 7 ^ i + Wn[r], t.b -= r, t.Ca = (n << r) - 1, o
							}

							function F(t, e, n) {
								t[e + 0] = n >> 24 & 255, t[e + 1] = n >> 16 & 255, t[e + 2] = n >> 8 & 255, t[e + 3] = n >> 0 & 255
							}

							function I(t, e) {
								return t[e + 0] << 0 | t[e + 1] << 8
							}

							function C(t, e) {
								return I(t, e) | t[e + 2] << 16
							}

							function j(t, e) {
								return I(t, e) | I(t, e + 2) << 16
							}

							function O(t, n) {
								var r = 1 << n;
								return e(null != t), e(0 < n), t.X = o(r), null == t.X ? 0 : (t.Mb = 32 - n, t.Xa = n, 1)
							}

							function B(t, n) {
								e(null != t), e(null != n), e(t.Xa == n.Xa), r(n.X, 0, t.X, 0, 1 << n.Xa)
							}

							function M() {
								this.X = [], this.Xa = this.Mb = 0
							}

							function E(t, n, r, i) {
								e(null != r), e(null != i);
								var o = r[0],
									a = i[0];
								return 0 == o && (o = (t * a + n / 2) / n), 0 == a && (a = (n * o + t / 2) / t), 0 >= o || 0 >= a ? 0 : (r[0] = o, i[0] = a, 1)
							}

							function q(t, e) {
								return t + (1 << e) - 1 >>> e
							}

							function T(t, e) {
								return ((4278255360 & t) + (4278255360 & e) >>> 0 & 4278255360) + ((16711935 & t) + (16711935 & e) >>> 0 & 16711935) >>> 0
							}

							function D(e, n) {
								t[n] = function(n, r, i, o, a, s, c) {
									var u;
									for (u = 0; u < a; ++u) {
										var l = t[e](s[c + u - 1], i, o + u);
										s[c + u] = T(n[r + u], l)
									}
								}
							}

							function R() {
								this.ud = this.hd = this.jd = 0
							}

							function z(t, e) {
								return ((4278124286 & (t ^ e)) >>> 1) + (t & e) >>> 0
							}

							function U(t) {
								return 0 <= t && 256 > t ? t : 0 > t ? 0 : 255 < t ? 255 : void 0
							}

							function H(t, e) {
								return U(t + (t - e + .5 >> 1))
							}

							function W(t, e, n) {
								return Math.abs(e - n) - Math.abs(t - n)
							}

							function V(t, e, n, r, i, o, a) {
								for (r = o[a - 1], n = 0; n < i; ++n) o[a + n] = r = T(t[e + n], r)
							}

							function G(t, e, n, r, i) {
								var o;
								for (o = 0; o < n; ++o) {
									var a = t[e + o],
										s = a >> 8 & 255,
										c = 16711935 & (c = (c = 16711935 & a) + ((s << 16) + s));
									r[i + o] = (4278255360 & a) + c >>> 0
								}
							}

							function Y(t, e) {
								e.jd = t >> 0 & 255, e.hd = t >> 8 & 255, e.ud = t >> 16 & 255
							}

							function J(t, e, n, r, i, o) {
								var a;
								for (a = 0; a < r; ++a) {
									var s = e[n + a],
										c = s >>> 8,
										u = s,
										l = 255 & (l = (l = s >>> 16) + ((t.jd << 24 >> 24) * (c << 24 >> 24) >>> 5));
									u = 255 & (u = (u += (t.hd << 24 >> 24) * (c << 24 >> 24) >>> 5) + ((t.ud << 24 >> 24) * (l << 24 >> 24) >>> 5)), i[o + a] = (4278255360 & s) + (l << 16) + u
								}
							}

							function X(e, n, r, i, o) {
								t[n] = function(t, e, n, r, a, s, c, u, l) {
									for (r = c; r < u; ++r)
										for (c = 0; c < l; ++c) a[s++] = o(n[i(t[e++])])
								}, t[e] = function(e, n, a, s, c, u, l) {
									var h = 8 >> e.b,
										f = e.Ea,
										d = e.K[0],
										p = e.w;
									if (8 > h)
										for (e = (1 << e.b) - 1, p = (1 << h) - 1; n < a; ++n) {
											var g, v = 0;
											for (g = 0; g < f; ++g) g & e || (v = i(s[c++])), u[l++] = o(d[v & p]), v >>= h
										} else t["VP8LMapColor" + r](s, c, d, p, u, l, n, a, f)
								}
							}

							function K(t, e, n, r, i) {
								for (n = e + n; e < n;) {
									var o = t[e++];
									r[i++] = o >> 16 & 255, r[i++] = o >> 8 & 255, r[i++] = o >> 0 & 255
								}
							}

							function Z(t, e, n, r, i) {
								for (n = e + n; e < n;) {
									var o = t[e++];
									r[i++] = o >> 16 & 255, r[i++] = o >> 8 & 255, r[i++] = o >> 0 & 255, r[i++] = o >> 24 & 255
								}
							}

							function $(t, e, n, r, i) {
								for (n = e + n; e < n;) {
									var o = (a = t[e++]) >> 16 & 240 | a >> 12 & 15,
										a = a >> 0 & 240 | a >> 28 & 15;
									r[i++] = o, r[i++] = a
								}
							}

							function Q(t, e, n, r, i) {
								for (n = e + n; e < n;) {
									var o = (a = t[e++]) >> 16 & 248 | a >> 13 & 7,
										a = a >> 5 & 224 | a >> 3 & 31;
									r[i++] = o, r[i++] = a
								}
							}

							function tt(t, e, n, r, i) {
								for (n = e + n; e < n;) {
									var o = t[e++];
									r[i++] = o >> 0 & 255, r[i++] = o >> 8 & 255, r[i++] = o >> 16 & 255
								}
							}

							function et(t, e, n, i, o, a) {
								if (0 == a)
									for (n = e + n; e < n;) F(i, ((a = t[e++])[0] >> 24 | a[1] >> 8 & 65280 | a[2] << 8 & 16711680 | a[3] << 24) >>> 0), o += 32;
								else r(i, o, t, e, n)
							}

							function nt(e, n) {
								t[n][0] = t[e + "0"], t[n][1] = t[e + "1"], t[n][2] = t[e + "2"], t[n][3] = t[e + "3"], t[n][4] = t[e + "4"], t[n][5] = t[e + "5"], t[n][6] = t[e + "6"], t[n][7] = t[e + "7"], t[n][8] = t[e + "8"], t[n][9] = t[e + "9"], t[n][10] = t[e + "10"], t[n][11] = t[e + "11"], t[n][12] = t[e + "12"], t[n][13] = t[e + "13"], t[n][14] = t[e + "0"], t[n][15] = t[e + "0"]
							}

							function rt(t) {
								return t == Hr || t == Wr || t == Vr || t == Gr
							}

							function it() {
								this.eb = [], this.size = this.A = this.fb = 0
							}

							function ot() {
								this.y = [], this.f = [], this.ea = [], this.F = [], this.Tc = this.Ed = this.Cd = this.Fd = this.lb = this.Db = this.Ab = this.fa = this.J = this.W = this.N = this.O = 0
							}

							function at() {
								this.Rd = this.height = this.width = this.S = 0, this.f = {}, this.f.RGBA = new it, this.f.kb = new ot, this.sd = null
							}

							function st() {
								this.width = [0], this.height = [0], this.Pd = [0], this.Qd = [0], this.format = [0]
							}

							function ct() {
								this.Id = this.fd = this.Md = this.hb = this.ib = this.da = this.bd = this.cd = this.j = this.v = this.Da = this.Sd = this.ob = 0
							}

							function ut(t) {
								return alert("todo:WebPSamplerProcessPlane"), t.T
							}

							function lt(t, e) {
								var n = t.T,
									i = e.ba.f.RGBA,
									o = i.eb,
									a = i.fb + t.ka * i.A,
									s = mi[e.ba.S],
									c = t.y,
									u = t.O,
									l = t.f,
									h = t.N,
									f = t.ea,
									d = t.W,
									p = e.cc,
									g = e.dc,
									v = e.Mc,
									m = e.Nc,
									b = t.ka,
									y = t.ka + t.T,
									w = t.U,
									N = w + 1 >> 1;
								for (0 == b ? s(c, u, null, null, l, h, f, d, l, h, f, d, o, a, null, null, w) : (s(e.ec, e.fc, c, u, p, g, v, m, l, h, f, d, o, a - i.A, o, a, w), ++n); b + 2 < y; b += 2) p = l, g = h, v = f, m = d, h += t.Rc, d += t.Rc, a += 2 * i.A, s(c, (u += 2 * t.fa) - t.fa, c, u, p, g, v, m, l, h, f, d, o, a - i.A, o, a, w);
								return u += t.fa, t.j + y < t.o ? (r(e.ec, e.fc, c, u, w), r(e.cc, e.dc, l, h, N), r(e.Mc, e.Nc, f, d, N), n--) : 1 & y || s(c, u, null, null, l, h, f, d, l, h, f, d, o, a + i.A, null, null, w), n
							}

							function ht(t, n, r) {
								var i = t.F,
									o = [t.J];
								if (null != i) {
									var a = t.U,
										s = n.ba.S,
										c = s == Rr || s == Vr;
									n = n.ba.f.RGBA;
									var u = [0],
										l = t.ka;
									u[0] = t.T, t.Kb && (0 == l ? --u[0] : (--l, o[0] -= t.width), t.j + t.ka + t.T == t.o && (u[0] = t.o - t.j - l));
									var h = n.eb;
									l = n.fb + l * n.A, t = Sr(i, o[0], t.width, a, u, h, l + (c ? 0 : 3), n.A), e(r == u), t && rt(s) && xr(h, l, c, a, u, n.A)
								}
								return 0
							}

							function ft(t) {
								var e = t.ma,
									n = e.ba.S,
									r = 11 > n,
									i = n == qr || n == Dr || n == Rr || n == zr || 12 == n || rt(n);
								if (e.memory = null, e.Ib = null, e.Jb = null, e.Nd = null, !En(e.Oa, t, i ? 11 : 12)) return 0;
								if (i && rt(n) && yn(), t.da) alert("todo:use_scaling");
								else {
									if (r) {
										if (e.Ib = ut, t.Kb) {
											if (n = t.U + 1 >> 1, e.memory = o(t.U + 2 * n), null == e.memory) return 0;
											e.ec = e.memory, e.fc = 0, e.cc = e.ec, e.dc = e.fc + t.U, e.Mc = e.cc, e.Nc = e.dc + n, e.Ib = lt, yn()
										}
									} else alert("todo:EmitYUV");
									i && (e.Jb = ht, r && mn())
								}
								if (r && !Ci) {
									for (t = 0; 256 > t; ++t) ji[t] = 89858 * (t - 128) + _i >> Si, Mi[t] = -22014 * (t - 128) + _i, Bi[t] = -45773 * (t - 128), Oi[t] = 113618 * (t - 128) + _i >> Si;
									for (t = Pi; t < ki; ++t) e = 76283 * (t - 16) + _i >> Si, Ei[t - Pi] = Vt(e, 255), qi[t - Pi] = Vt(e + 8 >> 4, 15);
									Ci = 1
								}
								return 1
							}

							function dt(t) {
								var n = t.ma,
									r = t.U,
									i = t.T;
								return e(!(1 & t.ka)), 0 >= r || 0 >= i ? 0 : (r = n.Ib(t, n), null != n.Jb && n.Jb(t, n, r), n.Dc += r, 1)
							}

							function pt(t) {
								t.ma.memory = null
							}

							function gt(t, e, n, r) {
								return 47 != y(t, 8) ? 0 : (e[0] = y(t, 14) + 1, n[0] = y(t, 14) + 1, r[0] = y(t, 1), 0 != y(t, 3) ? 0 : !t.h)
							}

							function vt(t, e) {
								if (4 > t) return t + 1;
								var n = t - 2 >> 1;
								return (2 + (1 & t) << n) + y(e, n) + 1
							}

							function mt(t, e) {
								return 120 < e ? e - 120 : 1 <= (n = ((n = $r[e - 1]) >> 4) * t + (8 - (15 & n))) ? n : 1;
								var n
							}

							function bt(t, e, n) {
								var r = L(n),
									i = t[e += 255 & r].g - 8;
								return 0 < i && (A(n, n.u + 8), r = L(n), e += t[e].value, e += r & (1 << i) - 1), A(n, n.u + t[e].g), t[e].value
							}

							function yt(t, n, r) {
								return r.g += t.g, r.value += t.value << n >>> 0, e(8 >= r.g), t.g
							}

							function wt(t, n, r) {
								var i = t.xc;
								return e((n = 0 == i ? 0 : t.vc[t.md * (r >> i) + (n >> i)]) < t.Wb), t.Ya[n]
							}

							function Nt(t, n, i, o) {
								var a = t.ab,
									s = t.c * n,
									c = t.C;
								n = c + n;
								var u = i,
									l = o;
								for (o = t.Ta, i = t.Ua; 0 < a--;) {
									var h = t.gc[a],
										f = c,
										d = n,
										p = u,
										g = l,
										v = (l = o, u = i, h.Ea);
									switch (e(f < d), e(d <= h.nc), h.hc) {
										case 2:
											Yn(p, g, (d - f) * v, l, u);
											break;
										case 0:
											var m = f,
												b = d,
												y = l,
												w = u,
												N = (_ = h).Ea;
											0 == m && (Vn(p, g, null, null, 1, y, w), V(p, g + 1, 0, 0, N - 1, y, w + 1), g += N, w += N, ++m);
											for (var L = 1 << _.b, x = L - 1, A = q(N, _.b), S = _.K, _ = _.w + (m >> _.b) * A; m < b;) {
												var P = S,
													k = _,
													F = 1;
												for (Gn(p, g, y, w - N, 1, y, w); F < N;) {
													var I = (F & ~x) + L;
													I > N && (I = N), (0, $n[P[k++] >> 8 & 15])(p, g + +F, y, w + F - N, I - F, y, w + F), F = I
												}
												g += N, w += N, ++m & x || (_ += A)
											}
											d != h.nc && r(l, u - v, l, u + (d - f - 1) * v, v);
											break;
										case 1:
											for (v = p, b = g, N = (p = h.Ea) - (w = p & ~(y = (g = 1 << h.b) - 1)), m = q(p, h.b), L = h.K, h = h.w + (f >> h.b) * m; f < d;) {
												for (x = L, A = h, S = new R, _ = b + w, P = b + p; b < _;) Y(x[A++], S), Qn(S, v, b, g, l, u), b += g, u += g;
												b < P && (Y(x[A++], S), Qn(S, v, b, N, l, u), b += N, u += N), ++f & y || (h += m)
											}
											break;
										case 3:
											if (p == l && g == u && 0 < h.b) {
												for (b = l, p = v = u + (d - f) * v - (w = (d - f) * q(h.Ea, h.b)), g = l, y = u, m = [], w = (N = w) - 1; 0 <= w; --w) m[w] = g[y + w];
												for (w = N - 1; 0 <= w; --w) b[p + w] = m[w];
												Jn(h, f, d, l, v, l, u)
											} else Jn(h, f, d, p, g, l, u)
									}
									u = o, l = i
								}
								l != i && r(o, i, u, l, s)
							}

							function Lt(t, n) {
								var r = t.V,
									i = t.Ba + t.c * t.C,
									o = n - t.C;
								if (e(n <= t.l.o), e(16 >= o), 0 < o) {
									var a = t.l,
										s = t.Ta,
										c = t.Ua,
										u = a.width;
									if (Nt(t, o, r, i), o = c = [c], e((r = t.C) < (i = n)), e(a.v < a.va), i > a.o && (i = a.o), r < a.j) {
										var l = a.j - r;
										r = a.j, o[0] += l * u
									}
									if (r >= i ? r = 0 : (o[0] += 4 * a.v, a.ka = r - a.j, a.U = a.va - a.v, a.T = i - r, r = 1), r) {
										if (c = c[0], 11 > (r = t.ca).S) {
											var h = r.f.RGBA,
												f = (i = r.S, o = a.U, a = a.T, l = h.eb, h.A),
												d = a;
											for (h = h.fb + t.Ma * h.A; 0 < d--;) {
												var p = s,
													g = c,
													v = o,
													m = l,
													b = h;
												switch (i) {
													case Er:
														tr(p, g, v, m, b);
														break;
													case qr:
														er(p, g, v, m, b);
														break;
													case Hr:
														er(p, g, v, m, b), xr(m, b, 0, v, 1, 0);
														break;
													case Tr:
														ir(p, g, v, m, b);
														break;
													case Dr:
														et(p, g, v, m, b, 1);
														break;
													case Wr:
														et(p, g, v, m, b, 1), xr(m, b, 0, v, 1, 0);
														break;
													case Rr:
														et(p, g, v, m, b, 0);
														break;
													case Vr:
														et(p, g, v, m, b, 0), xr(m, b, 1, v, 1, 0);
														break;
													case zr:
														nr(p, g, v, m, b);
														break;
													case Gr:
														nr(p, g, v, m, b), Ar(m, b, v, 1, 0);
														break;
													case Ur:
														rr(p, g, v, m, b);
														break;
													default:
														e(0)
												}
												c += u, h += f
											}
											t.Ma += a
										} else alert("todo:EmitRescaledRowsYUVA");
										e(t.Ma <= r.height)
									}
								}
								t.C = n, e(t.C <= t.i)
							}

							function xt(t) {
								var e;
								if (0 < t.ua) return 0;
								for (e = 0; e < t.Wb; ++e) {
									var n = t.Ya[e].G,
										r = t.Ya[e].H;
									if (0 < n[1][r[1] + 0].g || 0 < n[2][r[2] + 0].g || 0 < n[3][r[3] + 0].g) return 0
								}
								return 1
							}

							function At(t, n, r, i, o, a) {
								if (0 != t.Z) {
									var s = t.qd,
										c = t.rd;
									for (e(null != vi[t.Z]); n < r; ++n) vi[t.Z](s, c, i, o, i, o, a), s = i, c = o, o += a;
									t.qd = s, t.rd = c
								}
							}

							function St(t, n) {
								var r = t.l.ma,
									i = 0 == r.Z || 1 == r.Z ? t.l.j : t.C;
								if (i = t.C < i ? i : t.C, e(n <= t.l.o), n > i) {
									var o = t.l.width,
										a = r.ca,
										s = r.tb + o * i,
										c = t.V,
										u = t.Ba + t.c * i,
										l = t.gc;
									e(1 == t.ab), e(3 == l[0].hc), Kn(l[0], i, n, c, u, a, s), At(r, i, n, a, s, o)
								}
								t.C = t.Ma = n
							}

							function _t(t, n, r, i, o, a, s) {
								var c = t.$ / i,
									u = t.$ % i,
									l = t.m,
									h = t.s,
									f = r + t.$,
									d = f;
								o = r + i * o;
								var p = r + i * a,
									g = 280 + h.ua,
									v = t.Pb ? c : 16777216,
									m = 0 < h.ua ? h.Wa : null,
									b = h.wc,
									y = f < p ? wt(h, u, c) : null;
								e(t.C < a), e(p <= o);
								var w = !1;
								t: for (;;) {
									for (; w || f < p;) {
										var N = 0;
										if (c >= v) {
											var _ = f - r;
											e((v = t).Pb), v.wd = v.m, v.xd = _, 0 < v.s.ua && B(v.s.Wa, v.s.vb), v = c + ti
										}
										if (u & b || (y = wt(h, u, c)), e(null != y), y.Qb && (n[f] = y.qb, w = !0), !w)
											if (S(l), y.jc) {
												N = l, _ = n;
												var P = f,
													k = y.pd[L(N) & Dn - 1];
												e(y.jc), 256 > k.g ? (A(N, N.u + k.g), _[P] = k.value, N = 0) : (A(N, N.u + k.g - 256), e(256 <= k.value), N = k.value), 0 == N && (w = !0)
											} else N = bt(y.G[0], y.H[0], l);
										if (l.h) break;
										if (w || 256 > N) {
											if (!w)
												if (y.nd) n[f] = (y.qb | N << 8) >>> 0;
												else {
													if (S(l), w = bt(y.G[1], y.H[1], l), S(l), _ = bt(y.G[2], y.H[2], l), P = bt(y.G[3], y.H[3], l), l.h) break;
													n[f] = (P << 24 | w << 16 | N << 8 | _) >>> 0
												} if (w = !1, ++f, ++u >= i && (u = 0, ++c, null != s && c <= a && !(c % 16) && s(t, c), null != m))
												for (; d < f;) N = n[d++], m.X[(506832829 * N & 4294967295) >>> m.Mb] = N
										} else if (280 > N) {
											if (N = vt(N - 256, l), _ = bt(y.G[4], y.H[4], l), S(l), _ = mt(i, _ = vt(_, l)), l.h) break;
											if (f - r < _ || o - f < N) break t;
											for (P = 0; P < N; ++P) n[f + P] = n[f + P - _];
											for (f += N, u += N; u >= i;) u -= i, ++c, null != s && c <= a && !(c % 16) && s(t, c);
											if (e(f <= o), u & b && (y = wt(h, u, c)), null != m)
												for (; d < f;) N = n[d++], m.X[(506832829 * N & 4294967295) >>> m.Mb] = N
										} else {
											if (!(N < g)) break t;
											for (w = N - 280, e(null != m); d < f;) N = n[d++], m.X[(506832829 * N & 4294967295) >>> m.Mb] = N;
											N = f, e(!(w >>> (_ = m).Xa)), n[N] = _.X[w], w = !0
										}
										w || e(l.h == x(l))
									}
									if (t.Pb && l.h && f < o) e(t.m.h), t.a = 5, t.m = t.wd, t.$ = t.xd, 0 < t.s.ua && B(t.s.vb, t.s.Wa);
									else {
										if (l.h) break t;
										null != s && s(t, c > a ? a : c), t.a = 0, t.$ = f - r
									}
									return 1
								}
								return t.a = 3, 0
							}

							function Pt(t) {
								e(null != t), t.vc = null, t.yc = null, t.Ya = null;
								var n = t.Wa;
								null != n && (n.X = null), t.vb = null, e(null != t)
							}

							function kt() {
								var e = new sn;
								return null == e ? null : (e.a = 0, e.xb = gi, nt("Predictor", "VP8LPredictors"), nt("Predictor", "VP8LPredictors_C"), nt("PredictorAdd", "VP8LPredictorsAdd"), nt("PredictorAdd", "VP8LPredictorsAdd_C"), Yn = G, Qn = J, tr = K, er = Z, nr = $, rr = Q, ir = tt, t.VP8LMapColor32b = Xn, t.VP8LMapColor8b = Zn, e)
							}

							function Ft(t, n, r, s, c) {
								var u = 1,
									f = [t],
									p = [n],
									g = s.m,
									v = s.s,
									m = null,
									b = 0;
								t: for (;;) {
									if (r)
										for (; u && y(g, 1);) {
											var w = f,
												N = p,
												x = s,
												_ = 1,
												P = x.m,
												k = x.gc[x.ab],
												F = y(P, 2);
											if (x.Oc & 1 << F) u = 0;
											else {
												switch (x.Oc |= 1 << F, k.hc = F, k.Ea = w[0], k.nc = N[0], k.K = [null], ++x.ab, e(4 >= x.ab), F) {
													case 0:
													case 1:
														k.b = y(P, 3) + 2, _ = Ft(q(k.Ea, k.b), q(k.nc, k.b), 0, x, k.K), k.K = k.K[0];
														break;
													case 3:
														var I, C = y(P, 8) + 1,
															j = 16 < C ? 0 : 4 < C ? 1 : 2 < C ? 2 : 3;
														if (w[0] = q(k.Ea, j), k.b = j, I = _ = Ft(C, 1, 0, x, k.K)) {
															var B, M = C,
																E = k,
																D = 1 << (8 >> E.b),
																R = o(D);
															if (null == R) I = 0;
															else {
																var z = E.K[0],
																	U = E.w;
																for (R[0] = E.K[0][0], B = 1; B < 1 * M; ++B) R[B] = T(z[U + B], R[B - 1]);
																for (; B < 4 * D; ++B) R[B] = 0;
																E.K[0] = null, E.K[0] = R, I = 1
															}
														}
														_ = I;
														break;
													case 2:
														break;
													default:
														e(0)
												}
												u = _
											}
										}
									if (f = f[0], p = p[0], u && y(g, 1) && !(u = 1 <= (b = y(g, 4)) && 11 >= b)) {
										s.a = 3;
										break t
									}
									var H;
									if (H = u) e: {
										var W, V, G, Y = s,
											J = f,
											X = p,
											K = b,
											Z = r,
											$ = Y.m,
											Q = Y.s,
											tt = [null],
											et = 1,
											nt = 0,
											rt = Qr[K];n: for (;;) {
											if (Z && y($, 1)) {
												var it = y($, 3) + 2,
													ot = q(J, it),
													at = q(X, it),
													st = ot * at;
												if (!Ft(ot, at, 0, Y, tt)) break n;
												for (tt = tt[0], Q.xc = it, W = 0; W < st; ++W) {
													var ct = tt[W] >> 8 & 65535;
													tt[W] = ct, ct >= et && (et = ct + 1)
												}
											}
											if ($.h) break n;
											for (V = 0; 5 > V; ++V) {
												var ut = Xr[V];
												!V && 0 < K && (ut += 1 << K), nt < ut && (nt = ut)
											}
											var lt = a(et * rt, h),
												ht = et,
												ft = a(ht, d);
											if (null == ft) var dt = null;
											else e(65536 >= ht), dt = ft;
											var pt = o(nt);
											if (null == dt || null == pt || null == lt) {
												Y.a = 1;
												break n
											}
											var gt = lt;
											for (W = G = 0; W < et; ++W) {
												var vt = dt[W],
													mt = vt.G,
													bt = vt.H,
													wt = 0,
													Nt = 1,
													Lt = 0;
												for (V = 0; 5 > V; ++V) {
													ut = Xr[V], mt[V] = gt, bt[V] = G, !V && 0 < K && (ut += 1 << K);
													r: {
														var xt, At = ut,
															St = Y,
															kt = pt,
															It = gt,
															Ct = G,
															jt = 0,
															Ot = St.m,
															Bt = y(Ot, 1);
														if (i(kt, 0, 0, At), Bt) {
															var Mt = y(Ot, 1) + 1,
																Et = y(Ot, 1),
																qt = y(Ot, 0 == Et ? 1 : 8);
															kt[qt] = 1, 2 == Mt && (kt[qt = y(Ot, 8)] = 1);
															var Tt = 1
														} else {
															var Dt = o(19),
																Rt = y(Ot, 4) + 4;
															if (19 < Rt) {
																St.a = 3;
																var zt = 0;
																break r
															}
															for (xt = 0; xt < Rt; ++xt) Dt[Zr[xt]] = y(Ot, 3);
															var Ut = void 0,
																Ht = void 0,
																Wt = St,
																Vt = Dt,
																Gt = At,
																Yt = kt,
																Jt = 0,
																Xt = Wt.m,
																Kt = 8,
																Zt = a(128, h);
															i: for (; l(Zt, 0, 7, Vt, 19);) {
																if (y(Xt, 1)) {
																	var $t = 2 + 2 * y(Xt, 3);
																	if ((Ut = 2 + y(Xt, $t)) > Gt) break i
																} else Ut = Gt;
																for (Ht = 0; Ht < Gt && Ut--;) {
																	S(Xt);
																	var Qt = Zt[0 + (127 & L(Xt))];
																	A(Xt, Xt.u + Qt.g);
																	var te = Qt.value;
																	if (16 > te) Yt[Ht++] = te, 0 != te && (Kt = te);
																	else {
																		var ee = 16 == te,
																			ne = te - 16,
																			re = Jr[ne],
																			ie = y(Xt, Yr[ne]) + re;
																		if (Ht + ie > Gt) break i;
																		for (var oe = ee ? Kt : 0; 0 < ie--;) Yt[Ht++] = oe
																	}
																}
																Jt = 1;
																break i
															}
															Jt || (Wt.a = 3), Tt = Jt
														}(Tt = Tt && !Ot.h) && (jt = l(It, Ct, 8, kt, At)),
														Tt && 0 != jt ? zt = jt : (St.a = 3, zt = 0)
													}
													if (0 == zt) break n;
													if (Nt && 1 == Kr[V] && (Nt = 0 == gt[G].g), wt += gt[G].g, G += zt, 3 >= V) {
														var ae, se = pt[0];
														for (ae = 1; ae < ut; ++ae) pt[ae] > se && (se = pt[ae]);
														Lt += se
													}
												}
												if (vt.nd = Nt, vt.Qb = 0, Nt && (vt.qb = (mt[3][bt[3] + 0].value << 24 | mt[1][bt[1] + 0].value << 16 | mt[2][bt[2] + 0].value) >>> 0, 0 == wt && 256 > mt[0][bt[0] + 0].value && (vt.Qb = 1, vt.qb += mt[0][bt[0] + 0].value << 8)), vt.jc = !vt.Qb && 6 > Lt, vt.jc) {
													var ce, ue = vt;
													for (ce = 0; ce < Dn; ++ce) {
														var le = ce,
															he = ue.pd[le],
															fe = ue.G[0][ue.H[0] + le];
														256 <= fe.value ? (he.g = fe.g + 256, he.value = fe.value) : (he.g = 0, he.value = 0, le >>= yt(fe, 8, he), le >>= yt(ue.G[1][ue.H[1] + le], 16, he), le >>= yt(ue.G[2][ue.H[2] + le], 0, he), yt(ue.G[3][ue.H[3] + le], 24, he))
													}
												}
											}
											Q.vc = tt, Q.Wb = et, Q.Ya = dt, Q.yc = lt, H = 1;
											break e
										}
										H = 0
									}
									if (!(u = H)) {
										s.a = 3;
										break t
									}
									if (0 < b) {
										if (v.ua = 1 << b, !O(v.Wa, b)) {
											s.a = 1, u = 0;
											break t
										}
									} else v.ua = 0;
									var de = s,
										pe = f,
										ge = p,
										ve = de.s,
										me = ve.xc;
									if (de.c = pe, de.i = ge, ve.md = q(pe, me), ve.wc = 0 == me ? -1 : (1 << me) - 1, r) {
										s.xb = pi;
										break t
									}
									if (null == (m = o(f * p))) {
										s.a = 1, u = 0;
										break t
									}
									u = (u = _t(s, m, 0, f, p, p, null)) && !g.h;
									break t
								}
								return u ? (null != c ? c[0] = m : (e(null == m), e(r)), s.$ = 0, r || Pt(v)) : Pt(v), u
							}

							function It(t, n) {
								var r = t.c * t.i,
									i = r + n + 16 * n;
								return e(t.c <= n), t.V = o(i), null == t.V ? (t.Ta = null, t.Ua = 0, t.a = 1, 0) : (t.Ta = t.V, t.Ua = t.Ba + r + n, 1)
							}

							function Ct(t, n) {
								var r = t.C,
									i = n - r,
									o = t.V,
									a = t.Ba + t.c * r;
								for (e(n <= t.l.o); 0 < i;) {
									var s = 16 < i ? 16 : i,
										c = t.l.ma,
										u = t.l.width,
										l = u * s,
										h = c.ca,
										f = c.tb + u * r,
										d = t.Ta,
										p = t.Ua;
									Nt(t, s, o, a), _r(d, p, h, f, l), At(c, r, r + s, h, f, u), i -= s, o += s * t.c, r += s
								}
								e(r == n), t.C = t.Ma = n
							}

							function jt() {
								this.ub = this.yd = this.td = this.Rb = 0
							}

							function Ot() {
								this.Kd = this.Ld = this.Ud = this.Td = this.i = this.c = 0
							}

							function Bt() {
								this.Fb = this.Bb = this.Cb = 0, this.Zb = o(4), this.Lb = o(4)
							}

							function Mt() {
								this.Yb = function() {
									var t = [];
									return function t(e, n, r) {
										for (var i = r[n], o = 0; o < i && (e.push(r.length > n + 1 ? [] : 0), !(r.length < n + 1)); o++) t(e[o], n + 1, r)
									}(t, 0, [3, 11]), t
								}()
							}

							function Et() {
								this.jb = o(3), this.Wc = s([4, 8], Mt), this.Xc = s([4, 17], Mt)
							}

							function qt() {
								this.Pc = this.wb = this.Tb = this.zd = 0, this.vd = new o(4), this.od = new o(4)
							}

							function Tt() {
								this.ld = this.La = this.dd = this.tc = 0
							}

							function Dt() {
								this.Na = this.la = 0
							}

							function Rt() {
								this.Sc = [0, 0], this.Eb = [0, 0], this.Qc = [0, 0], this.ia = this.lc = 0
							}

							function zt() {
								this.ad = o(384), this.Za = 0, this.Ob = o(16), this.$b = this.Ad = this.ia = this.Gc = this.Hc = this.Dd = 0
							}

							function Ut() {
								this.uc = this.M = this.Nb = 0, this.wa = Array(new Tt), this.Y = 0, this.ya = Array(new zt), this.aa = 0, this.l = new Gt
							}

							function Ht() {
								this.y = o(16), this.f = o(8), this.ea = o(8)
							}

							function Wt() {
								this.cb = this.a = 0, this.sc = "", this.m = new w, this.Od = new jt, this.Kc = new Ot, this.ed = new qt, this.Qa = new Bt, this.Ic = this.$c = this.Aa = 0, this.D = new Ut, this.Xb = this.Va = this.Hb = this.zb = this.yb = this.Ub = this.za = 0, this.Jc = a(8, w), this.ia = 0, this.pb = a(4, Rt), this.Pa = new Et, this.Bd = this.kc = 0, this.Ac = [], this.Bc = 0, this.zc = [0, 0, 0, 0], this.Gd = Array(new Ht), this.Hd = 0, this.rb = Array(new Dt), this.sb = 0, this.wa = Array(new Tt), this.Y = 0, this.oc = [], this.pc = 0, this.sa = [], this.ta = 0, this.qa = [], this.ra = 0, this.Ha = [], this.B = this.R = this.Ia = 0, this.Ec = [], this.M = this.ja = this.Vb = this.Fc = 0, this.ya = Array(new zt), this.L = this.aa = 0, this.gd = s([4, 2], Tt), this.ga = null, this.Fa = [], this.Cc = this.qc = this.P = 0, this.Gb = [], this.Uc = 0, this.mb = [], this.nb = 0, this.rc = [], this.Ga = this.Vc = 0
							}

							function Vt(t, e) {
								return 0 > t ? 0 : t > e ? e : t
							}

							function Gt() {
								this.T = this.U = this.ka = this.height = this.width = 0, this.y = [], this.f = [], this.ea = [], this.Rc = this.fa = this.W = this.N = this.O = 0, this.ma = "void", this.put = "VP8IoPutHook", this.ac = "VP8IoSetupHook", this.bc = "VP8IoTeardownHook", this.ha = this.Kb = 0, this.data = [], this.hb = this.ib = this.da = this.o = this.j = this.va = this.v = this.Da = this.ob = this.w = 0, this.F = [], this.J = 0
							}

							function Yt() {
								var t = new Wt;
								return null != t && (t.a = 0, t.sc = "OK", t.cb = 0, t.Xb = 0, ri || (ri = Zt)), t
							}

							function Jt(t, e, n) {
								return 0 == t.a && (t.a = e, t.sc = n, t.cb = 0), 0
							}

							function Xt(t, e, n) {
								return 3 <= n && 157 == t[e + 0] && 1 == t[e + 1] && 42 == t[e + 2]
							}

							function Kt(t, n) {
								if (null == t) return 0;
								if (t.a = 0, t.sc = "OK", null == n) return Jt(t, 2, "null VP8Io passed to VP8GetHeaders()");
								var r = n.data,
									o = n.w,
									a = n.ha;
								if (4 > a) return Jt(t, 7, "Truncated header.");
								var s = r[o + 0] | r[o + 1] << 8 | r[o + 2] << 16,
									c = t.Od;
								if (c.Rb = !(1 & s), c.td = s >> 1 & 7, c.yd = s >> 4 & 1, c.ub = s >> 5, 3 < c.td) return Jt(t, 3, "Incorrect keyframe parameters.");
								if (!c.yd) return Jt(t, 4, "Frame not displayable.");
								o += 3, a -= 3;
								var u = t.Kc;
								if (c.Rb) {
									if (7 > a) return Jt(t, 7, "cannot parse picture header");
									if (!Xt(r, o, a)) return Jt(t, 3, "Bad code word");
									u.c = 16383 & (r[o + 4] << 8 | r[o + 3]), u.Td = r[o + 4] >> 6, u.i = 16383 & (r[o + 6] << 8 | r[o + 5]), u.Ud = r[o + 6] >> 6, o += 7, a -= 7, t.za = u.c + 15 >> 4, t.Ub = u.i + 15 >> 4, n.width = u.c, n.height = u.i, n.Da = 0, n.j = 0, n.v = 0, n.va = n.width, n.o = n.height, n.da = 0, n.ib = n.width, n.hb = n.height, n.U = n.width, n.T = n.height, i((s = t.Pa).jb, 0, 255, s.jb.length), e(null != (s = t.Qa)), s.Cb = 0, s.Bb = 0, s.Fb = 1, i(s.Zb, 0, 0, s.Zb.length), i(s.Lb, 0, 0, s.Lb)
								}
								if (c.ub > a) return Jt(t, 7, "bad partition length");
								p(s = t.m, r, o, c.ub), o += c.ub, a -= c.ub, c.Rb && (u.Ld = P(s), u.Kd = P(s)), u = t.Qa;
								var l, h = t.Pa;
								if (e(null != s), e(null != u), u.Cb = P(s), u.Cb) {
									if (u.Bb = P(s), P(s)) {
										for (u.Fb = P(s), l = 0; 4 > l; ++l) u.Zb[l] = P(s) ? v(s, 7) : 0;
										for (l = 0; 4 > l; ++l) u.Lb[l] = P(s) ? v(s, 6) : 0
									}
									if (u.Bb)
										for (l = 0; 3 > l; ++l) h.jb[l] = P(s) ? g(s, 8) : 255
								} else u.Bb = 0;
								if (s.Ka) return Jt(t, 3, "cannot parse segment header");
								if ((u = t.ed).zd = P(s), u.Tb = g(s, 6), u.wb = g(s, 3), u.Pc = P(s), u.Pc && P(s)) {
									for (h = 0; 4 > h; ++h) P(s) && (u.vd[h] = v(s, 6));
									for (h = 0; 4 > h; ++h) P(s) && (u.od[h] = v(s, 6))
								}
								if (t.L = 0 == u.Tb ? 0 : u.zd ? 1 : 2, s.Ka) return Jt(t, 3, "cannot parse filter header");
								var f = a;
								if (a = l = o, o = l + f, u = f, t.Xb = (1 << g(t.m, 2)) - 1, f < 3 * (h = t.Xb)) r = 7;
								else {
									for (l += 3 * h, u -= 3 * h, f = 0; f < h; ++f) {
										var d = r[a + 0] | r[a + 1] << 8 | r[a + 2] << 16;
										d > u && (d = u), p(t.Jc[+f], r, l, d), l += d, u -= d, a += 3
									}
									p(t.Jc[+h], r, l, u), r = l < o ? 0 : 5
								}
								if (0 != r) return Jt(t, r, "cannot parse partitions");
								for (r = g(l = t.m, 7), a = P(l) ? v(l, 4) : 0, o = P(l) ? v(l, 4) : 0, u = P(l) ? v(l, 4) : 0, h = P(l) ? v(l, 4) : 0, l = P(l) ? v(l, 4) : 0, f = t.Qa, d = 0; 4 > d; ++d) {
									if (f.Cb) {
										var m = f.Zb[d];
										f.Fb || (m += r)
									} else {
										if (0 < d) {
											t.pb[d] = t.pb[0];
											continue
										}
										m = r
									}
									var b = t.pb[d];
									b.Sc[0] = ei[Vt(m + a, 127)], b.Sc[1] = ni[Vt(m + 0, 127)], b.Eb[0] = 2 * ei[Vt(m + o, 127)], b.Eb[1] = 101581 * ni[Vt(m + u, 127)] >> 16, 8 > b.Eb[1] && (b.Eb[1] = 8), b.Qc[0] = ei[Vt(m + h, 117)], b.Qc[1] = ni[Vt(m + l, 127)], b.lc = m + l
								}
								if (!c.Rb) return Jt(t, 4, "Not a key frame.");
								for (P(s), c = t.Pa, r = 0; 4 > r; ++r) {
									for (a = 0; 8 > a; ++a)
										for (o = 0; 3 > o; ++o)
											for (u = 0; 11 > u; ++u) h = k(s, ui[r][a][o][u]) ? g(s, 8) : si[r][a][o][u], c.Wc[r][a].Yb[o][u] = h;
									for (a = 0; 17 > a; ++a) c.Xc[r][a] = c.Wc[r][li[a]]
								}
								return t.kc = P(s), t.kc && (t.Bd = g(s, 8)), t.cb = 1
							}

							function Zt(t, e, n, r, i, o, a) {
								var s = e[i].Yb[n];
								for (n = 0; 16 > i; ++i) {
									if (!k(t, s[n + 0])) return i;
									for (; !k(t, s[n + 1]);)
										if (s = e[++i].Yb[0], n = 0, 16 == i) return 16;
									var c = e[i + 1].Yb;
									if (k(t, s[n + 2])) {
										var u = t,
											l = 0;
										if (k(u, (f = s)[(h = n) + 3]))
											if (k(u, f[h + 6])) {
												for (s = 0, h = 2 * (l = k(u, f[h + 8])) + (f = k(u, f[h + 9 + l])), l = 0, f = ii[h]; f[s]; ++s) l += l + k(u, f[s]);
												l += 3 + (8 << h)
											} else k(u, f[h + 7]) ? (l = 7 + 2 * k(u, 165), l += k(u, 145)) : l = 5 + k(u, 159);
										else l = k(u, f[h + 4]) ? 3 + k(u, f[h + 5]) : 2;
										s = c[2]
									} else l = 1, s = c[1];
									c = a + oi[i], 0 > (u = t).b && _(u);
									var h, f = u.b,
										d = (h = u.Ca >> 1) - (u.I >> f) >> 31;
									--u.b, u.Ca += d, u.Ca |= 1, u.I -= (h + 1 & d) << f, o[c] = ((l ^ d) - d) * r[(0 < i) + 0]
								}
								return 16
							}

							function $t(t) {
								var e = t.rb[t.sb - 1];
								e.la = 0, e.Na = 0, i(t.zc, 0, 0, t.zc.length), t.ja = 0
							}

							function Qt(t, n) {
								if (null == t) return 0;
								if (null == n) return Jt(t, 2, "NULL VP8Io parameter in VP8Decode().");
								if (!t.cb && !Kt(t, n)) return 0;
								if (e(t.cb), null == n.ac || n.ac(n)) {
									n.ob && (t.L = 0);
									var s = Di[t.L];
									if (2 == t.L ? (t.yb = 0, t.zb = 0) : (t.yb = n.v - s >> 4, t.zb = n.j - s >> 4, 0 > t.yb && (t.yb = 0), 0 > t.zb && (t.zb = 0)), t.Va = n.o + 15 + s >> 4, t.Hb = n.va + 15 + s >> 4, t.Hb > t.za && (t.Hb = t.za), t.Va > t.Ub && (t.Va = t.Ub), 0 < t.L) {
										var c = t.ed;
										for (s = 0; 4 > s; ++s) {
											var u;
											if (t.Qa.Cb) {
												var l = t.Qa.Lb[s];
												t.Qa.Fb || (l += c.Tb)
											} else l = c.Tb;
											for (u = 0; 1 >= u; ++u) {
												var h = t.gd[s][u],
													f = l;
												if (c.Pc && (f += c.vd[0], u && (f += c.od[0])), 0 < (f = 0 > f ? 0 : 63 < f ? 63 : f)) {
													var d = f;
													0 < c.wb && (d = 4 < c.wb ? d >> 2 : d >> 1) > 9 - c.wb && (d = 9 - c.wb), 1 > d && (d = 1), h.dd = d, h.tc = 2 * f + d, h.ld = 40 <= f ? 2 : 15 <= f ? 1 : 0
												} else h.tc = 0;
												h.La = u
											}
										}
									}
									s = 0
								} else Jt(t, 6, "Frame setup failed"), s = t.a;
								if (s = 0 == s) {
									if (s) {
										t.$c = 0, 0 < t.Aa || (t.Ic = zi);
										t: {
											s = t.Ic,
											c = 4 * (d = t.za);
											var p = 32 * d,
												g = d + 1,
												v = 0 < t.L ? d * (0 < t.Aa ? 2 : 1) : 0,
												m = (2 == t.Aa ? 2 : 1) * d;
											if ((h = c + 832 + (u = 3 * (16 * s + Di[t.L]) / 2 * p) + (l = null != t.Fa && 0 < t.Fa.length ? t.Kc.c * t.Kc.i : 0)) != h) s = 0;
											else {
												if (h > t.Vb) {
													if (t.Vb = 0, t.Ec = o(h), t.Fc = 0, null == t.Ec) {
														s = Jt(t, 1, "no memory during frame initialization.");
														break t
													}
													t.Vb = h
												}
												h = t.Ec, f = t.Fc, t.Ac = h, t.Bc = f, f += c, t.Gd = a(p, Ht), t.Hd = 0, t.rb = a(g + 1, Dt), t.sb = 1, t.wa = v ? a(v, Tt) : null, t.Y = 0, t.D.Nb = 0, t.D.wa = t.wa, t.D.Y = t.Y, 0 < t.Aa && (t.D.Y += d), e(!0), t.oc = h, t.pc = f, f += 832, t.ya = a(m, zt), t.aa = 0, t.D.ya = t.ya, t.D.aa = t.aa, 2 == t.Aa && (t.D.aa += d), t.R = 16 * d, t.B = 8 * d, d = (p = Di[t.L]) * t.R, p = p / 2 * t.B, t.sa = h, t.ta = f + d, t.qa = t.sa, t.ra = t.ta + 16 * s * t.R + p, t.Ha = t.qa, t.Ia = t.ra + 8 * s * t.B + p, t.$c = 0, f += u, t.mb = l ? h : null, t.nb = l ? f : null, e(f + l <= t.Fc + t.Vb), $t(t), i(t.Ac, t.Bc, 0, c), s = 1
											}
										}
										if (s) {
											if (n.ka = 0, n.y = t.sa, n.O = t.ta, n.f = t.qa, n.N = t.ra, n.ea = t.Ha, n.Vd = t.Ia, n.fa = t.R, n.Rc = t.B, n.F = null, n.J = 0, !Cr) {
												for (s = -255; 255 >= s; ++s) Pr[255 + s] = 0 > s ? -s : s;
												for (s = -1020; 1020 >= s; ++s) kr[1020 + s] = -128 > s ? -128 : 127 < s ? 127 : s;
												for (s = -112; 112 >= s; ++s) Fr[112 + s] = -16 > s ? -16 : 15 < s ? 15 : s;
												for (s = -255; 510 >= s; ++s) Ir[255 + s] = 0 > s ? 0 : 255 < s ? 255 : s;
												Cr = 1
											}
											or = ue, ar = oe, cr = ae, ur = se, lr = ce, sr = ie, hr = Je, fr = Xe, dr = $e, pr = Qe, gr = Ke, vr = Ze, mr = tn, br = en, yr = Ue, wr = He, Nr = We, Lr = Ve, fi[0] = Ae, fi[1] = he, fi[2] = Le, fi[3] = xe, fi[4] = Se, fi[5] = Pe, fi[6] = _e, fi[7] = ke, fi[8] = Ie, fi[9] = Fe, hi[0] = me, hi[1] = de, hi[2] = pe, hi[3] = ge, hi[4] = be, hi[5] = ye, hi[6] = we, di[0] = Be, di[1] = fe, di[2] = Ce, di[3] = je, di[4] = Ee, di[5] = Me, di[6] = qe, s = 1
										} else s = 0
									}
									s && (s = function(t, n) {
										for (t.M = 0; t.M < t.Va; ++t.M) {
											var a, s = t.Jc[t.M & t.Xb],
												c = t.m,
												u = t;
											for (a = 0; a < u.za; ++a) {
												var l = c,
													h = u,
													f = h.Ac,
													d = h.Bc + 4 * a,
													p = h.zc,
													g = h.ya[h.aa + a];
												if (h.Qa.Bb ? g.$b = k(l, h.Pa.jb[0]) ? 2 + k(l, h.Pa.jb[2]) : k(l, h.Pa.jb[1]) : g.$b = 0, h.kc && (g.Ad = k(l, h.Bd)), g.Za = !k(l, 145) + 0, g.Za) {
													var v = g.Ob,
														m = 0;
													for (h = 0; 4 > h; ++h) {
														var b, y = p[0 + h];
														for (b = 0; 4 > b; ++b) {
															y = ci[f[d + b]][y];
															for (var w = ai[k(l, y[0])]; 0 < w;) w = ai[2 * w + k(l, y[w])];
															y = -w, f[d + b] = y
														}
														r(v, m, f, d, 4), m += 4, p[0 + h] = y
													}
												} else y = k(l, 156) ? k(l, 128) ? 1 : 3 : k(l, 163) ? 2 : 0, g.Ob[0] = y, i(f, d, y, 4), i(p, 0, y, 4);
												g.Dd = k(l, 142) ? k(l, 114) ? k(l, 183) ? 1 : 3 : 2 : 0
											}
											if (u.m.Ka) return Jt(t, 7, "Premature end-of-partition0 encountered.");
											for (; t.ja < t.za; ++t.ja) {
												if (u = s, l = (c = t).rb[c.sb - 1], f = c.rb[c.sb + c.ja], a = c.ya[c.aa + c.ja], d = c.kc ? a.Ad : 0) l.la = f.la = 0, a.Za || (l.Na = f.Na = 0), a.Hc = 0, a.Gc = 0, a.ia = 0;
												else {
													var N, L;
													if (l = f, f = u, d = c.Pa.Xc, p = c.ya[c.aa + c.ja], g = c.pb[p.$b], h = p.ad, v = 0, m = c.rb[c.sb - 1], y = b = 0, i(h, v, 0, 384), p.Za) var x = 0,
														A = d[3];
													else {
														w = o(16);
														var S = l.Na + m.Na;
														if (S = ri(f, d[1], S, g.Eb, 0, w, 0), l.Na = m.Na = (0 < S) + 0, 1 < S) or(w, 0, h, v);
														else {
															var _ = w[0] + 3 >> 3;
															for (w = 0; 256 > w; w += 16) h[v + w] = _
														}
														x = 1, A = d[0]
													}
													var P = 15 & l.la,
														F = 15 & m.la;
													for (w = 0; 4 > w; ++w) {
														var I = 1 & F;
														for (_ = L = 0; 4 > _; ++_) P = P >> 1 | (I = (S = ri(f, A, S = I + (1 & P), g.Sc, x, h, v)) > x) << 7, L = L << 2 | (3 < S ? 3 : 1 < S ? 2 : 0 != h[v + 0]), v += 16;
														P >>= 4, F = F >> 1 | I << 7, b = (b << 8 | L) >>> 0
													}
													for (A = P, x = F >> 4, N = 0; 4 > N; N += 2) {
														for (L = 0, P = l.la >> 4 + N, F = m.la >> 4 + N, w = 0; 2 > w; ++w) {
															for (I = 1 & F, _ = 0; 2 > _; ++_) S = I + (1 & P), P = P >> 1 | (I = 0 < (S = ri(f, d[2], S, g.Qc, 0, h, v))) << 3, L = L << 2 | (3 < S ? 3 : 1 < S ? 2 : 0 != h[v + 0]), v += 16;
															P >>= 2, F = F >> 1 | I << 5
														}
														y |= L << 4 * N, A |= P << 4 << N, x |= (240 & F) << N
													}
													l.la = A, m.la = x, p.Hc = b, p.Gc = y, p.ia = 43690 & y ? 0 : g.ia, d = !(b | y)
												}
												if (0 < c.L && (c.wa[c.Y + c.ja] = c.gd[a.$b][a.Za], c.wa[c.Y + c.ja].La |= !d), u.Ka) return Jt(t, 7, "Premature end-of-file encountered.")
											}
											if ($t(t), c = n, u = 1, a = (s = t).D, l = 0 < s.L && s.M >= s.zb && s.M <= s.Va, 0 == s.Aa) t: {
												if (a.M = s.M, a.uc = l, Bn(s, a), u = 1, a = (L = s.D).Nb, l = (y = Di[s.L]) * s.R, f = y / 2 * s.B, w = 16 * a * s.R, _ = 8 * a * s.B, d = s.sa, p = s.ta - l + w, g = s.qa, h = s.ra - f + _, v = s.Ha, m = s.Ia - f + _, F = 0 == (P = L.M), b = P >= s.Va - 1, 2 == s.Aa && Bn(s, L), L.uc)
													for (I = (S = s).D.M, e(S.D.uc), L = S.yb; L < S.Hb; ++L) {
														x = L, A = I;
														var C = (j = (z = S).D).Nb;
														N = z.R;
														var j = j.wa[j.Y + x],
															O = z.sa,
															B = z.ta + 16 * C * N + 16 * x,
															M = j.dd,
															E = j.tc;
														if (0 != E)
															if (e(3 <= E), 1 == z.L) 0 < x && wr(O, B, N, E + 4), j.La && Lr(O, B, N, E), 0 < A && yr(O, B, N, E + 4), j.La && Nr(O, B, N, E);
															else {
																var q = z.B,
																	T = z.qa,
																	D = z.ra + 8 * C * q + 8 * x,
																	R = z.Ha,
																	z = z.Ia + 8 * C * q + 8 * x;
																C = j.ld, 0 < x && (fr(O, B, N, E + 4, M, C), pr(T, D, R, z, q, E + 4, M, C)), j.La && (vr(O, B, N, E, M, C), br(T, D, R, z, q, E, M, C)), 0 < A && (hr(O, B, N, E + 4, M, C), dr(T, D, R, z, q, E + 4, M, C)), j.La && (gr(O, B, N, E, M, C), mr(T, D, R, z, q, E, M, C))
															}
													}
												if (s.ia && alert("todo:DitherRow"), null != c.put) {
													if (L = 16 * P, P = 16 * (P + 1), F ? (c.y = s.sa, c.O = s.ta + w, c.f = s.qa, c.N = s.ra + _, c.ea = s.Ha, c.W = s.Ia + _) : (L -= y, c.y = d, c.O = p, c.f = g, c.N = h, c.ea = v, c.W = m), b || (P -= y), P > c.o && (P = c.o), c.F = null, c.J = null, null != s.Fa && 0 < s.Fa.length && L < P && (c.J = fn(s, c, L, P - L), c.F = s.mb, null == c.F && 0 == c.F.length)) {
														u = Jt(s, 3, "Could not decode alpha data.");
														break t
													}
													L < c.j && (y = c.j - L, L = c.j, e(!(1 & y)), c.O += s.R * y, c.N += s.B * (y >> 1), c.W += s.B * (y >> 1), null != c.F && (c.J += c.width * y)), L < P && (c.O += c.v, c.N += c.v >> 1, c.W += c.v >> 1, null != c.F && (c.J += c.v), c.ka = L - c.j, c.U = c.va - c.v, c.T = P - L, u = c.put(c))
												}
												a + 1 != s.Ic || b || (r(s.sa, s.ta - l, d, p + 16 * s.R, l), r(s.qa, s.ra - f, g, h + 8 * s.B, f), r(s.Ha, s.Ia - f, v, m + 8 * s.B, f))
											}
											if (!u) return Jt(t, 6, "Output aborted.")
										}
										return 1
									}(t, n)), null != n.bc && n.bc(n), s &= 1
								}
								return s ? (t.cb = 0, s) : 0
							}

							function te(t, e, n, r, i) {
								i = t[e + n + 32 * r] + (i >> 3), t[e + n + 32 * r] = -256 & i ? 0 > i ? 0 : 255 : i
							}

							function ee(t, e, n, r, i, o) {
								te(t, e, 0, n, r + i), te(t, e, 1, n, r + o), te(t, e, 2, n, r - o), te(t, e, 3, n, r - i)
							}

							function ne(t) {
								return (20091 * t >> 16) + t
							}

							function re(t, e, n, r) {
								var i, a = 0,
									s = o(16);
								for (i = 0; 4 > i; ++i) {
									var c = t[e + 0] + t[e + 8],
										u = t[e + 0] - t[e + 8],
										l = (35468 * t[e + 4] >> 16) - ne(t[e + 12]),
										h = ne(t[e + 4]) + (35468 * t[e + 12] >> 16);
									s[a + 0] = c + h, s[a + 1] = u + l, s[a + 2] = u - l, s[a + 3] = c - h, a += 4, e++
								}
								for (i = a = 0; 4 > i; ++i) c = (t = s[a + 0] + 4) + s[a + 8], u = t - s[a + 8], l = (35468 * s[a + 4] >> 16) - ne(s[a + 12]), te(n, r, 0, 0, c + (h = ne(s[a + 4]) + (35468 * s[a + 12] >> 16))), te(n, r, 1, 0, u + l), te(n, r, 2, 0, u - l), te(n, r, 3, 0, c - h), a++, r += 32
							}

							function ie(t, e, n, r) {
								var i = t[e + 0] + 4,
									o = 35468 * t[e + 4] >> 16,
									a = ne(t[e + 4]),
									s = 35468 * t[e + 1] >> 16;
								ee(n, r, 0, i + a, t = ne(t[e + 1]), s), ee(n, r, 1, i + o, t, s), ee(n, r, 2, i - o, t, s), ee(n, r, 3, i - a, t, s)
							}

							function oe(t, e, n, r, i) {
								re(t, e, n, r), i && re(t, e + 16, n, r + 4)
							}

							function ae(t, e, n, r) {
								ar(t, e + 0, n, r, 1), ar(t, e + 32, n, r + 128, 1)
							}

							function se(t, e, n, r) {
								var i;
								for (t = t[e + 0] + 4, i = 0; 4 > i; ++i)
									for (e = 0; 4 > e; ++e) te(n, r, e, i, t)
							}

							function ce(t, e, n, r) {
								t[e + 0] && ur(t, e + 0, n, r), t[e + 16] && ur(t, e + 16, n, r + 4), t[e + 32] && ur(t, e + 32, n, r + 128), t[e + 48] && ur(t, e + 48, n, r + 128 + 4)
							}

							function ue(t, e, n, r) {
								var i, a = o(16);
								for (i = 0; 4 > i; ++i) {
									var s = t[e + 0 + i] + t[e + 12 + i],
										c = t[e + 4 + i] + t[e + 8 + i],
										u = t[e + 4 + i] - t[e + 8 + i],
										l = t[e + 0 + i] - t[e + 12 + i];
									a[0 + i] = s + c, a[8 + i] = s - c, a[4 + i] = l + u, a[12 + i] = l - u
								}
								for (i = 0; 4 > i; ++i) s = (t = a[0 + 4 * i] + 3) + a[3 + 4 * i], c = a[1 + 4 * i] + a[2 + 4 * i], u = a[1 + 4 * i] - a[2 + 4 * i], l = t - a[3 + 4 * i], n[r + 0] = s + c >> 3, n[r + 16] = l + u >> 3, n[r + 32] = s - c >> 3, n[r + 48] = l - u >> 3, r += 64
							}

							function le(t, e, n) {
								var r, i = e - 32,
									o = Br,
									a = 255 - t[i - 1];
								for (r = 0; r < n; ++r) {
									var s, c = o,
										u = a + t[e - 1];
									for (s = 0; s < n; ++s) t[e + s] = c[u + t[i + s]];
									e += 32
								}
							}

							function he(t, e) {
								le(t, e, 4)
							}

							function fe(t, e) {
								le(t, e, 8)
							}

							function de(t, e) {
								le(t, e, 16)
							}

							function pe(t, e) {
								var n;
								for (n = 0; 16 > n; ++n) r(t, e + 32 * n, t, e - 32, 16)
							}

							function ge(t, e) {
								var n;
								for (n = 16; 0 < n; --n) i(t, e, t[e - 1], 16), e += 32
							}

							function ve(t, e, n) {
								var r;
								for (r = 0; 16 > r; ++r) i(e, n + 32 * r, t, 16)
							}

							function me(t, e) {
								var n, r = 16;
								for (n = 0; 16 > n; ++n) r += t[e - 1 + 32 * n] + t[e + n - 32];
								ve(r >> 5, t, e)
							}

							function be(t, e) {
								var n, r = 8;
								for (n = 0; 16 > n; ++n) r += t[e - 1 + 32 * n];
								ve(r >> 4, t, e)
							}

							function ye(t, e) {
								var n, r = 8;
								for (n = 0; 16 > n; ++n) r += t[e + n - 32];
								ve(r >> 4, t, e)
							}

							function we(t, e) {
								ve(128, t, e)
							}

							function Ne(t, e, n) {
								return t + 2 * e + n + 2 >> 2
							}

							function Le(t, e) {
								var n, i = e - 32;
								for (i = new Uint8Array([Ne(t[i - 1], t[i + 0], t[i + 1]), Ne(t[i + 0], t[i + 1], t[i + 2]), Ne(t[i + 1], t[i + 2], t[i + 3]), Ne(t[i + 2], t[i + 3], t[i + 4])]), n = 0; 4 > n; ++n) r(t, e + 32 * n, i, 0, i.length)
							}

							function xe(t, e) {
								var n = t[e - 1],
									r = t[e - 1 + 32],
									i = t[e - 1 + 64],
									o = t[e - 1 + 96];
								F(t, e + 0, 16843009 * Ne(t[e - 1 - 32], n, r)), F(t, e + 32, 16843009 * Ne(n, r, i)), F(t, e + 64, 16843009 * Ne(r, i, o)), F(t, e + 96, 16843009 * Ne(i, o, o))
							}

							function Ae(t, e) {
								var n, r = 4;
								for (n = 0; 4 > n; ++n) r += t[e + n - 32] + t[e - 1 + 32 * n];
								for (r >>= 3, n = 0; 4 > n; ++n) i(t, e + 32 * n, r, 4)
							}

							function Se(t, e) {
								var n = t[e - 1 + 0],
									r = t[e - 1 + 32],
									i = t[e - 1 + 64],
									o = t[e - 1 - 32],
									a = t[e + 0 - 32],
									s = t[e + 1 - 32],
									c = t[e + 2 - 32],
									u = t[e + 3 - 32];
								t[e + 0 + 96] = Ne(r, i, t[e - 1 + 96]), t[e + 1 + 96] = t[e + 0 + 64] = Ne(n, r, i), t[e + 2 + 96] = t[e + 1 + 64] = t[e + 0 + 32] = Ne(o, n, r), t[e + 3 + 96] = t[e + 2 + 64] = t[e + 1 + 32] = t[e + 0 + 0] = Ne(a, o, n), t[e + 3 + 64] = t[e + 2 + 32] = t[e + 1 + 0] = Ne(s, a, o), t[e + 3 + 32] = t[e + 2 + 0] = Ne(c, s, a), t[e + 3 + 0] = Ne(u, c, s)
							}

							function _e(t, e) {
								var n = t[e + 1 - 32],
									r = t[e + 2 - 32],
									i = t[e + 3 - 32],
									o = t[e + 4 - 32],
									a = t[e + 5 - 32],
									s = t[e + 6 - 32],
									c = t[e + 7 - 32];
								t[e + 0 + 0] = Ne(t[e + 0 - 32], n, r), t[e + 1 + 0] = t[e + 0 + 32] = Ne(n, r, i), t[e + 2 + 0] = t[e + 1 + 32] = t[e + 0 + 64] = Ne(r, i, o), t[e + 3 + 0] = t[e + 2 + 32] = t[e + 1 + 64] = t[e + 0 + 96] = Ne(i, o, a), t[e + 3 + 32] = t[e + 2 + 64] = t[e + 1 + 96] = Ne(o, a, s), t[e + 3 + 64] = t[e + 2 + 96] = Ne(a, s, c), t[e + 3 + 96] = Ne(s, c, c)
							}

							function Pe(t, e) {
								var n = t[e - 1 + 0],
									r = t[e - 1 + 32],
									i = t[e - 1 + 64],
									o = t[e - 1 - 32],
									a = t[e + 0 - 32],
									s = t[e + 1 - 32],
									c = t[e + 2 - 32],
									u = t[e + 3 - 32];
								t[e + 0 + 0] = t[e + 1 + 64] = o + a + 1 >> 1, t[e + 1 + 0] = t[e + 2 + 64] = a + s + 1 >> 1, t[e + 2 + 0] = t[e + 3 + 64] = s + c + 1 >> 1, t[e + 3 + 0] = c + u + 1 >> 1, t[e + 0 + 96] = Ne(i, r, n), t[e + 0 + 64] = Ne(r, n, o), t[e + 0 + 32] = t[e + 1 + 96] = Ne(n, o, a), t[e + 1 + 32] = t[e + 2 + 96] = Ne(o, a, s), t[e + 2 + 32] = t[e + 3 + 96] = Ne(a, s, c), t[e + 3 + 32] = Ne(s, c, u)
							}

							function ke(t, e) {
								var n = t[e + 0 - 32],
									r = t[e + 1 - 32],
									i = t[e + 2 - 32],
									o = t[e + 3 - 32],
									a = t[e + 4 - 32],
									s = t[e + 5 - 32],
									c = t[e + 6 - 32],
									u = t[e + 7 - 32];
								t[e + 0 + 0] = n + r + 1 >> 1, t[e + 1 + 0] = t[e + 0 + 64] = r + i + 1 >> 1, t[e + 2 + 0] = t[e + 1 + 64] = i + o + 1 >> 1, t[e + 3 + 0] = t[e + 2 + 64] = o + a + 1 >> 1, t[e + 0 + 32] = Ne(n, r, i), t[e + 1 + 32] = t[e + 0 + 96] = Ne(r, i, o), t[e + 2 + 32] = t[e + 1 + 96] = Ne(i, o, a), t[e + 3 + 32] = t[e + 2 + 96] = Ne(o, a, s), t[e + 3 + 64] = Ne(a, s, c), t[e + 3 + 96] = Ne(s, c, u)
							}

							function Fe(t, e) {
								var n = t[e - 1 + 0],
									r = t[e - 1 + 32],
									i = t[e - 1 + 64],
									o = t[e - 1 + 96];
								t[e + 0 + 0] = n + r + 1 >> 1, t[e + 2 + 0] = t[e + 0 + 32] = r + i + 1 >> 1, t[e + 2 + 32] = t[e + 0 + 64] = i + o + 1 >> 1, t[e + 1 + 0] = Ne(n, r, i), t[e + 3 + 0] = t[e + 1 + 32] = Ne(r, i, o), t[e + 3 + 32] = t[e + 1 + 64] = Ne(i, o, o), t[e + 3 + 64] = t[e + 2 + 64] = t[e + 0 + 96] = t[e + 1 + 96] = t[e + 2 + 96] = t[e + 3 + 96] = o
							}

							function Ie(t, e) {
								var n = t[e - 1 + 0],
									r = t[e - 1 + 32],
									i = t[e - 1 + 64],
									o = t[e - 1 + 96],
									a = t[e - 1 - 32],
									s = t[e + 0 - 32],
									c = t[e + 1 - 32],
									u = t[e + 2 - 32];
								t[e + 0 + 0] = t[e + 2 + 32] = n + a + 1 >> 1, t[e + 0 + 32] = t[e + 2 + 64] = r + n + 1 >> 1, t[e + 0 + 64] = t[e + 2 + 96] = i + r + 1 >> 1, t[e + 0 + 96] = o + i + 1 >> 1, t[e + 3 + 0] = Ne(s, c, u), t[e + 2 + 0] = Ne(a, s, c), t[e + 1 + 0] = t[e + 3 + 32] = Ne(n, a, s), t[e + 1 + 32] = t[e + 3 + 64] = Ne(r, n, a), t[e + 1 + 64] = t[e + 3 + 96] = Ne(i, r, n), t[e + 1 + 96] = Ne(o, i, r)
							}

							function Ce(t, e) {
								var n;
								for (n = 0; 8 > n; ++n) r(t, e + 32 * n, t, e - 32, 8)
							}

							function je(t, e) {
								var n;
								for (n = 0; 8 > n; ++n) i(t, e, t[e - 1], 8), e += 32
							}

							function Oe(t, e, n) {
								var r;
								for (r = 0; 8 > r; ++r) i(e, n + 32 * r, t, 8)
							}

							function Be(t, e) {
								var n, r = 8;
								for (n = 0; 8 > n; ++n) r += t[e + n - 32] + t[e - 1 + 32 * n];
								Oe(r >> 4, t, e)
							}

							function Me(t, e) {
								var n, r = 4;
								for (n = 0; 8 > n; ++n) r += t[e + n - 32];
								Oe(r >> 3, t, e)
							}

							function Ee(t, e) {
								var n, r = 4;
								for (n = 0; 8 > n; ++n) r += t[e - 1 + 32 * n];
								Oe(r >> 3, t, e)
							}

							function qe(t, e) {
								Oe(128, t, e)
							}

							function Te(t, e, n) {
								var r = t[e - n],
									i = t[e + 0],
									o = 3 * (i - r) + jr[1020 + t[e - 2 * n] - t[e + n]],
									a = Or[112 + (o + 4 >> 3)];
								t[e - n] = Br[255 + r + Or[112 + (o + 3 >> 3)]], t[e + 0] = Br[255 + i - a]
							}

							function De(t, e, n, r) {
								var i = t[e + 0],
									o = t[e + n];
								return Mr[255 + t[e - 2 * n] - t[e - n]] > r || Mr[255 + o - i] > r
							}

							function Re(t, e, n, r) {
								return 4 * Mr[255 + t[e - n] - t[e + 0]] + Mr[255 + t[e - 2 * n] - t[e + n]] <= r
							}

							function ze(t, e, n, r, i) {
								var o = t[e - 3 * n],
									a = t[e - 2 * n],
									s = t[e - n],
									c = t[e + 0],
									u = t[e + n],
									l = t[e + 2 * n],
									h = t[e + 3 * n];
								return 4 * Mr[255 + s - c] + Mr[255 + a - u] > r ? 0 : Mr[255 + t[e - 4 * n] - o] <= i && Mr[255 + o - a] <= i && Mr[255 + a - s] <= i && Mr[255 + h - l] <= i && Mr[255 + l - u] <= i && Mr[255 + u - c] <= i
							}

							function Ue(t, e, n, r) {
								var i = 2 * r + 1;
								for (r = 0; 16 > r; ++r) Re(t, e + r, n, i) && Te(t, e + r, n)
							}

							function He(t, e, n, r) {
								var i = 2 * r + 1;
								for (r = 0; 16 > r; ++r) Re(t, e + r * n, 1, i) && Te(t, e + r * n, 1)
							}

							function We(t, e, n, r) {
								var i;
								for (i = 3; 0 < i; --i) Ue(t, e += 4 * n, n, r)
							}

							function Ve(t, e, n, r) {
								var i;
								for (i = 3; 0 < i; --i) He(t, e += 4, n, r)
							}

							function Ge(t, e, n, r, i, o, a, s) {
								for (o = 2 * o + 1; 0 < i--;) {
									if (ze(t, e, n, o, a))
										if (De(t, e, n, s)) Te(t, e, n);
										else {
											var c = t,
												u = e,
												l = n,
												h = c[u - 2 * l],
												f = c[u - l],
												d = c[u + 0],
												p = c[u + l],
												g = c[u + 2 * l],
												v = 27 * (b = jr[1020 + 3 * (d - f) + jr[1020 + h - p]]) + 63 >> 7,
												m = 18 * b + 63 >> 7,
												b = 9 * b + 63 >> 7;
											c[u - 3 * l] = Br[255 + c[u - 3 * l] + b], c[u - 2 * l] = Br[255 + h + m], c[u - l] = Br[255 + f + v], c[u + 0] = Br[255 + d - v], c[u + l] = Br[255 + p - m], c[u + 2 * l] = Br[255 + g - b]
										} e += r
								}
							}

							function Ye(t, e, n, r, i, o, a, s) {
								for (o = 2 * o + 1; 0 < i--;) {
									if (ze(t, e, n, o, a))
										if (De(t, e, n, s)) Te(t, e, n);
										else {
											var c = t,
												u = e,
												l = n,
												h = c[u - l],
												f = c[u + 0],
												d = c[u + l],
												p = Or[112 + (4 + (g = 3 * (f - h)) >> 3)],
												g = Or[112 + (g + 3 >> 3)],
												v = p + 1 >> 1;
											c[u - 2 * l] = Br[255 + c[u - 2 * l] + v], c[u - l] = Br[255 + h + g], c[u + 0] = Br[255 + f - p], c[u + l] = Br[255 + d - v]
										} e += r
								}
							}

							function Je(t, e, n, r, i, o) {
								Ge(t, e, n, 1, 16, r, i, o)
							}

							function Xe(t, e, n, r, i, o) {
								Ge(t, e, 1, n, 16, r, i, o)
							}

							function Ke(t, e, n, r, i, o) {
								var a;
								for (a = 3; 0 < a; --a) Ye(t, e += 4 * n, n, 1, 16, r, i, o)
							}

							function Ze(t, e, n, r, i, o) {
								var a;
								for (a = 3; 0 < a; --a) Ye(t, e += 4, 1, n, 16, r, i, o)
							}

							function $e(t, e, n, r, i, o, a, s) {
								Ge(t, e, i, 1, 8, o, a, s), Ge(n, r, i, 1, 8, o, a, s)
							}

							function Qe(t, e, n, r, i, o, a, s) {
								Ge(t, e, 1, i, 8, o, a, s), Ge(n, r, 1, i, 8, o, a, s)
							}

							function tn(t, e, n, r, i, o, a, s) {
								Ye(t, e + 4 * i, i, 1, 8, o, a, s), Ye(n, r + 4 * i, i, 1, 8, o, a, s)
							}

							function en(t, e, n, r, i, o, a, s) {
								Ye(t, e + 4, 1, i, 8, o, a, s), Ye(n, r + 4, 1, i, 8, o, a, s)
							}

							function nn() {
								this.ba = new at, this.ec = [], this.cc = [], this.Mc = [], this.Dc = this.Nc = this.dc = this.fc = 0, this.Oa = new ct, this.memory = 0, this.Ib = "OutputFunc", this.Jb = "OutputAlphaFunc", this.Nd = "OutputRowFunc"
							}

							function rn() {
								this.data = [], this.offset = this.kd = this.ha = this.w = 0, this.na = [], this.xa = this.gb = this.Ja = this.Sa = this.P = 0
							}

							function on() {
								this.nc = this.Ea = this.b = this.hc = 0, this.K = [], this.w = 0
							}

							function an() {
								this.ua = 0, this.Wa = new M, this.vb = new M, this.md = this.xc = this.wc = 0, this.vc = [], this.Wb = 0, this.Ya = new d, this.yc = new h
							}

							function sn() {
								this.xb = this.a = 0, this.l = new Gt, this.ca = new at, this.V = [], this.Ba = 0, this.Ta = [], this.Ua = 0, this.m = new N, this.Pb = 0, this.wd = new N, this.Ma = this.$ = this.C = this.i = this.c = this.xd = 0, this.s = new an, this.ab = 0, this.gc = a(4, on), this.Oc = 0
							}

							function cn() {
								this.Lc = this.Z = this.$a = this.i = this.c = 0, this.l = new Gt, this.ic = 0, this.ca = [], this.tb = 0, this.qd = null, this.rd = 0
							}

							function un(t, e, n, r, i, o, a) {
								for (t = null == t ? 0 : t[e + 0], e = 0; e < a; ++e) i[o + e] = t + n[r + e] & 255, t = i[o + e]
							}

							function ln(t, e, n, r, i, o, a) {
								var s;
								if (null == t) un(null, null, n, r, i, o, a);
								else
									for (s = 0; s < a; ++s) i[o + s] = t[e + s] + n[r + s] & 255
							}

							function hn(t, e, n, r, i, o, a) {
								if (null == t) un(null, null, n, r, i, o, a);
								else {
									var s, c = t[e + 0],
										u = c,
										l = c;
									for (s = 0; s < a; ++s) u = l + (c = t[e + s]) - u, l = n[r + s] + (-256 & u ? 0 > u ? 0 : 255 : u) & 255, u = c, i[o + s] = l
								}
							}

							function fn(t, n, i, a) {
								var s = n.width,
									c = n.o;
								if (e(null != t && null != n), 0 > i || 0 >= a || i + a > c) return null;
								if (!t.Cc) {
									if (null == t.ga) {
										var u;
										if (t.ga = new cn, (u = null == t.ga) || (u = n.width * n.o, e(0 == t.Gb.length), t.Gb = o(u), t.Uc = 0, null == t.Gb ? u = 0 : (t.mb = t.Gb, t.nb = t.Uc, t.rc = null, u = 1), u = !u), !u) {
											u = t.ga;
											var l = t.Fa,
												h = t.P,
												f = t.qc,
												d = t.mb,
												p = t.nb,
												g = h + 1,
												v = f - 1,
												b = u.l;
											if (e(null != l && null != d && null != n), vi[0] = null, vi[1] = un, vi[2] = ln, vi[3] = hn, u.ca = d, u.tb = p, u.c = n.width, u.i = n.height, e(0 < u.c && 0 < u.i), 1 >= f) n = 0;
											else if (u.$a = l[h + 0] >> 0 & 3, u.Z = l[h + 0] >> 2 & 3, u.Lc = l[h + 0] >> 4 & 3, h = l[h + 0] >> 6 & 3, 0 > u.$a || 1 < u.$a || 4 <= u.Z || 1 < u.Lc || h) n = 0;
											else if (b.put = dt, b.ac = ft, b.bc = pt, b.ma = u, b.width = n.width, b.height = n.height, b.Da = n.Da, b.v = n.v, b.va = n.va, b.j = n.j, b.o = n.o, u.$a) t: {
												e(1 == u.$a),
												n = kt();e: for (;;) {
													if (null == n) {
														n = 0;
														break t
													}
													if (e(null != u), u.mc = n, n.c = u.c, n.i = u.i, n.l = u.l, n.l.ma = u, n.l.width = u.c, n.l.height = u.i, n.a = 0, m(n.m, l, g, v), !Ft(u.c, u.i, 1, n, null)) break e;
													if (1 == n.ab && 3 == n.gc[0].hc && xt(n.s) ? (u.ic = 1, l = n.c * n.i, n.Ta = null, n.Ua = 0, n.V = o(l), n.Ba = 0, null == n.V ? (n.a = 1, n = 0) : n = 1) : (u.ic = 0, n = It(n, u.c)), !n) break e;
													n = 1;
													break t
												}
												u.mc = null,
												n = 0
											}
											else n = v >= u.c * u.i;
											u = !n
										}
										if (u) return null;
										1 != t.ga.Lc ? t.Ga = 0 : a = c - i
									}
									e(null != t.ga), e(i + a <= c);
									t: {
										if (n = (l = t.ga).c, c = l.l.o, 0 == l.$a) {
											if (g = t.rc, v = t.Vc, b = t.Fa, h = t.P + 1 + i * n, f = t.mb, d = t.nb + i * n, e(h <= t.P + t.qc), 0 != l.Z)
												for (e(null != vi[l.Z]), u = 0; u < a; ++u) vi[l.Z](g, v, b, h, f, d, n), g = f, v = d, d += n, h += n;
											else
												for (u = 0; u < a; ++u) r(f, d, b, h, n), g = f, v = d, d += n, h += n;
											t.rc = g, t.Vc = v
										} else {
											if (e(null != l.mc), n = i + a, e(null != (u = l.mc)), e(n <= u.i), u.C >= n) n = 1;
											else if (l.ic || mn(), l.ic) {
												l = u.V, g = u.Ba, v = u.c;
												var y = u.i,
													w = (b = 1, h = u.$ / v, f = u.$ % v, d = u.m, p = u.s, u.$),
													N = v * y,
													L = v * n,
													A = p.wc,
													_ = w < L ? wt(p, f, h) : null;
												e(w <= N), e(n <= y), e(xt(p));
												e: for (;;) {
													for (; !d.h && w < L;) {
														if (f & A || (_ = wt(p, f, h)), e(null != _), S(d), 256 > (y = bt(_.G[0], _.H[0], d))) l[g + w] = y, ++w, ++f >= v && (f = 0, ++h <= n && !(h % 16) && St(u, h));
														else {
															if (!(280 > y)) {
																b = 0;
																break e
															}
															y = vt(y - 256, d);
															var P, k = bt(_.G[4], _.H[4], d);
															if (S(d), !(w >= (k = mt(v, k = vt(k, d))) && N - w >= y)) {
																b = 0;
																break e
															}
															for (P = 0; P < y; ++P) l[g + w + P] = l[g + w + P - k];
															for (w += y, f += y; f >= v;) f -= v, ++h <= n && !(h % 16) && St(u, h);
															w < L && f & A && (_ = wt(p, f, h))
														}
														e(d.h == x(d))
													}
													St(u, h > n ? n : h);
													break e
												}!b || d.h && w < N ? (b = 0, u.a = d.h ? 5 : 3) : u.$ = w, n = b
											} else n = _t(u, u.V, u.Ba, u.c, u.i, n, Ct);
											if (!n) {
												a = 0;
												break t
											}
										}
										i + a >= c && (t.Cc = 1),
										a = 1
									}
									if (!a) return null;
									if (t.Cc && (null != (a = t.ga) && (a.mc = null), t.ga = null, 0 < t.Ga)) return alert("todo:WebPDequantizeLevels"), null
								}
								return t.nb + i * s
							}

							function dn(t, e, n, r, i, o) {
								for (; 0 < i--;) {
									var a, s = t,
										c = e + (n ? 1 : 0),
										u = t,
										l = e + (n ? 0 : 3);
									for (a = 0; a < r; ++a) {
										var h = u[l + 4 * a];
										255 != h && (h *= 32897, s[c + 4 * a + 0] = s[c + 4 * a + 0] * h >> 23, s[c + 4 * a + 1] = s[c + 4 * a + 1] * h >> 23, s[c + 4 * a + 2] = s[c + 4 * a + 2] * h >> 23)
									}
									e += o
								}
							}

							function pn(t, e, n, r, i) {
								for (; 0 < r--;) {
									var o;
									for (o = 0; o < n; ++o) {
										var a = t[e + 2 * o + 0],
											s = 15 & (u = t[e + 2 * o + 1]),
											c = 4369 * s,
											u = (240 & u | u >> 4) * c >> 16;
										t[e + 2 * o + 0] = (240 & a | a >> 4) * c >> 16 & 240 | (15 & a | a << 4) * c >> 16 >> 4 & 15, t[e + 2 * o + 1] = 240 & u | s
									}
									e += i
								}
							}

							function gn(t, e, n, r, i, o, a, s) {
								var c, u, l = 255;
								for (u = 0; u < i; ++u) {
									for (c = 0; c < r; ++c) {
										var h = t[e + c];
										o[a + 4 * c] = h, l &= h
									}
									e += n, a += s
								}
								return 255 != l
							}

							function vn(t, e, n, r, i) {
								var o;
								for (o = 0; o < i; ++o) n[r + o] = t[e + o] >> 8
							}

							function mn() {
								xr = dn, Ar = pn, Sr = gn, _r = vn
							}

							function bn(n, r, i) {
								t[n] = function(t, n, o, a, s, c, u, l, h, f, d, p, g, v, m, b, y) {
									var w, N = y - 1 >> 1,
										L = s[c + 0] | u[l + 0] << 16,
										x = h[f + 0] | d[p + 0] << 16;
									e(null != t);
									var A = 3 * L + x + 131074 >> 2;
									for (r(t[n + 0], 255 & A, A >> 16, g, v), null != o && (A = 3 * x + L + 131074 >> 2, r(o[a + 0], 255 & A, A >> 16, m, b)), w = 1; w <= N; ++w) {
										var S = s[c + w] | u[l + w] << 16,
											_ = h[f + w] | d[p + w] << 16,
											P = L + S + x + _ + 524296,
											k = P + 2 * (S + x) >> 3;
										A = k + L >> 1, L = (P = P + 2 * (L + _) >> 3) + S >> 1, r(t[n + 2 * w - 1], 255 & A, A >> 16, g, v + (2 * w - 1) * i), r(t[n + 2 * w - 0], 255 & L, L >> 16, g, v + (2 * w - 0) * i), null != o && (A = P + x >> 1, L = k + _ >> 1, r(o[a + 2 * w - 1], 255 & A, A >> 16, m, b + (2 * w - 1) * i), r(o[a + 2 * w + 0], 255 & L, L >> 16, m, b + (2 * w + 0) * i)), L = S, x = _
									}
									1 & y || (A = 3 * L + x + 131074 >> 2, r(t[n + y - 1], 255 & A, A >> 16, g, v + (y - 1) * i), null != o && (A = 3 * x + L + 131074 >> 2, r(o[a + y - 1], 255 & A, A >> 16, m, b + (y - 1) * i)))
								}
							}

							function yn() {
								mi[Er] = bi, mi[qr] = wi, mi[Tr] = yi, mi[Dr] = Ni, mi[Rr] = Li, mi[zr] = xi, mi[Ur] = Ai, mi[Hr] = wi, mi[Wr] = Ni, mi[Vr] = Li, mi[Gr] = xi
							}

							function wn(t) {
								return t & ~Ii ? 0 > t ? 0 : 255 : t >> Fi
							}

							function Nn(t, e) {
								return wn((19077 * t >> 8) + (26149 * e >> 8) - 14234)
							}

							function Ln(t, e, n) {
								return wn((19077 * t >> 8) - (6419 * e >> 8) - (13320 * n >> 8) + 8708)
							}

							function xn(t, e) {
								return wn((19077 * t >> 8) + (33050 * e >> 8) - 17685)
							}

							function An(t, e, n, r, i) {
								r[i + 0] = Nn(t, n), r[i + 1] = Ln(t, e, n), r[i + 2] = xn(t, e)
							}

							function Sn(t, e, n, r, i) {
								r[i + 0] = xn(t, e), r[i + 1] = Ln(t, e, n), r[i + 2] = Nn(t, n)
							}

							function _n(t, e, n, r, i) {
								var o = Ln(t, e, n);
								e = o << 3 & 224 | xn(t, e) >> 3, r[i + 0] = 248 & Nn(t, n) | o >> 5, r[i + 1] = e
							}

							function Pn(t, e, n, r, i) {
								var o = 240 & xn(t, e) | 15;
								r[i + 0] = 240 & Nn(t, n) | Ln(t, e, n) >> 4, r[i + 1] = o
							}

							function kn(t, e, n, r, i) {
								r[i + 0] = 255, An(t, e, n, r, i + 1)
							}

							function Fn(t, e, n, r, i) {
								Sn(t, e, n, r, i), r[i + 3] = 255
							}

							function In(t, e, n, r, i) {
								An(t, e, n, r, i), r[i + 3] = 255
							}

							function Vt(t, e) {
								return 0 > t ? 0 : t > e ? e : t
							}

							function Cn(e, n, r) {
								t[e] = function(t, e, i, o, a, s, c, u, l) {
									for (var h = u + (-2 & l) * r; u != h;) n(t[e + 0], i[o + 0], a[s + 0], c, u), n(t[e + 1], i[o + 0], a[s + 0], c, u + r), e += 2, ++o, ++s, u += 2 * r;
									1 & l && n(t[e + 0], i[o + 0], a[s + 0], c, u)
								}
							}

							function jn(t, e, n) {
								return 0 == n ? 0 == t ? 0 == e ? 6 : 5 : 0 == e ? 4 : 0 : n
							}

							function On(t, e, n, r, i) {
								switch (t >>> 30) {
									case 3:
										ar(e, n, r, i, 0);
										break;
									case 2:
										sr(e, n, r, i);
										break;
									case 1:
										ur(e, n, r, i)
								}
							}

							function Bn(t, e) {
								var n, o, a = e.M,
									s = e.Nb,
									c = t.oc,
									u = t.pc + 40,
									l = t.oc,
									h = t.pc + 584,
									f = t.oc,
									d = t.pc + 600;
								for (n = 0; 16 > n; ++n) c[u + 32 * n - 1] = 129;
								for (n = 0; 8 > n; ++n) l[h + 32 * n - 1] = 129, f[d + 32 * n - 1] = 129;
								for (0 < a ? c[u - 1 - 32] = l[h - 1 - 32] = f[d - 1 - 32] = 129 : (i(c, u - 32 - 1, 127, 21), i(l, h - 32 - 1, 127, 9), i(f, d - 32 - 1, 127, 9)), o = 0; o < t.za; ++o) {
									var p = e.ya[e.aa + o];
									if (0 < o) {
										for (n = -1; 16 > n; ++n) r(c, u + 32 * n - 4, c, u + 32 * n + 12, 4);
										for (n = -1; 8 > n; ++n) r(l, h + 32 * n - 4, l, h + 32 * n + 4, 4), r(f, d + 32 * n - 4, f, d + 32 * n + 4, 4)
									}
									var g = t.Gd,
										v = t.Hd + o,
										m = p.ad,
										b = p.Hc;
									if (0 < a && (r(c, u - 32, g[v].y, 0, 16), r(l, h - 32, g[v].f, 0, 8), r(f, d - 32, g[v].ea, 0, 8)), p.Za) {
										var y = c,
											w = u - 32 + 16;
										for (0 < a && (o >= t.za - 1 ? i(y, w, g[v].y[15], 4) : r(y, w, g[v + 1].y, 0, 4)), n = 0; 4 > n; n++) y[w + 128 + n] = y[w + 256 + n] = y[w + 384 + n] = y[w + 0 + n];
										for (n = 0; 16 > n; ++n, b <<= 2) y = c, w = u + Ti[n], fi[p.Ob[n]](y, w), On(b, m, 16 * +n, y, w)
									} else if (y = jn(o, a, p.Ob[0]), hi[y](c, u), 0 != b)
										for (n = 0; 16 > n; ++n, b <<= 2) On(b, m, 16 * +n, c, u + Ti[n]);
									for (n = p.Gc, y = jn(o, a, p.Dd), di[y](l, h), di[y](f, d), b = m, y = l, w = h, 255 & (p = n >> 0) && (170 & p ? cr(b, 256, y, w) : lr(b, 256, y, w)), p = f, b = d, 255 & (n >>= 8) && (170 & n ? cr(m, 320, p, b) : lr(m, 320, p, b)), a < t.Ub - 1 && (r(g[v].y, 0, c, u + 480, 16), r(g[v].f, 0, l, h + 224, 8), r(g[v].ea, 0, f, d + 224, 8)), n = 8 * s * t.B, g = t.sa, v = t.ta + 16 * o + 16 * s * t.R, m = t.qa, p = t.ra + 8 * o + n, b = t.Ha, y = t.Ia + 8 * o + n, n = 0; 16 > n; ++n) r(g, v + n * t.R, c, u + 32 * n, 16);
									for (n = 0; 8 > n; ++n) r(m, p + n * t.B, l, h + 32 * n, 8), r(b, y + n * t.B, f, d + 32 * n, 8)
								}
							}

							function Mn(t, r, i, o, a, s, c, u, l) {
								var h = [0],
									f = [0],
									d = 0,
									p = null != l ? l.kd : 0,
									g = null != l ? l : new rn;
								if (null == t || 12 > i) return 7;
								g.data = t, g.w = r, g.ha = i, r = [r], i = [i], g.gb = [g.gb];
								t: {
									var v = r,
										b = i,
										y = g.gb;
									if (e(null != t), e(null != b), e(null != y), y[0] = 0, 12 <= b[0] && !n(t, v[0], "RIFF")) {
										if (n(t, v[0] + 8, "WEBP")) {
											y = 3;
											break t
										}
										var w = j(t, v[0] + 4);
										if (12 > w || 4294967286 < w) {
											y = 3;
											break t
										}
										if (p && w > b[0] - 8) {
											y = 7;
											break t
										}
										y[0] = w, v[0] += 12, b[0] -= 12
									}
									y = 0
								}
								if (0 != y) return y;
								for (w = 0 < g.gb[0], i = i[0];;) {
									t: {
										var L = t;b = r,
										y = i;
										var x = h,
											A = f,
											S = v = [0];
										if ((k = d = [d])[0] = 0, 8 > y[0]) y = 7;
										else {
											if (!n(L, b[0], "VP8X")) {
												if (10 != j(L, b[0] + 4)) {
													y = 3;
													break t
												}
												if (18 > y[0]) {
													y = 7;
													break t
												}
												var _ = j(L, b[0] + 8),
													P = 1 + C(L, b[0] + 12);
												if (2147483648 <= P * (L = 1 + C(L, b[0] + 15))) {
													y = 3;
													break t
												}
												null != S && (S[0] = _), null != x && (x[0] = P), null != A && (A[0] = L), b[0] += 18, y[0] -= 18, k[0] = 1
											}
											y = 0
										}
									}
									if (d = d[0], v = v[0], 0 != y) return y;
									if (b = !!(2 & v), !w && d) return 3;
									if (null != s && (s[0] = !!(16 & v)), null != c && (c[0] = b), null != u && (u[0] = 0), c = h[0], v = f[0], d && b && null == l) {
										y = 0;
										break
									}
									if (4 > i) {
										y = 7;
										break
									}
									if (w && d || !w && !d && !n(t, r[0], "ALPH")) {
										i = [i], g.na = [g.na], g.P = [g.P], g.Sa = [g.Sa];
										t: {
											_ = t,
											y = r,
											w = i;
											var k = g.gb;x = g.na,
											A = g.P,
											S = g.Sa,
											P = 22,
											e(null != _),
											e(null != w),
											L = y[0];
											var F = w[0];
											for (e(null != x), e(null != S), x[0] = null, A[0] = null, S[0] = 0;;) {
												if (y[0] = L, w[0] = F, 8 > F) {
													y = 7;
													break t
												}
												var I = j(_, L + 4);
												if (4294967286 < I) {
													y = 3;
													break t
												}
												var O = 8 + I + 1 & -2;
												if (P += O, 0 < k && P > k) {
													y = 3;
													break t
												}
												if (!n(_, L, "VP8 ") || !n(_, L, "VP8L")) {
													y = 0;
													break t
												}
												if (F[0] < O) {
													y = 7;
													break t
												}
												n(_, L, "ALPH") || (x[0] = _, A[0] = L + 8, S[0] = I), L += O, F -= O
											}
										}
										if (i = i[0], g.na = g.na[0], g.P = g.P[0], g.Sa = g.Sa[0], 0 != y) break
									}
									i = [i],
									g.Ja = [g.Ja],
									g.xa = [g.xa];t: if (k = t, y = r, w = i, x = g.gb[0], A = g.Ja, S = g.xa, _ = y[0], L = !n(k, _, "VP8 "), P = !n(k, _, "VP8L"), e(null != k), e(null != w), e(null != A), e(null != S), 8 > w[0]) y = 7;
										else {
											if (L || P) {
												if (k = j(k, _ + 4), 12 <= x && k > x - 12) {
													y = 3;
													break t
												}
												if (p && k > w[0] - 8) {
													y = 7;
													break t
												}
												A[0] = k, y[0] += 8, w[0] -= 8, S[0] = P
											} else S[0] = 5 <= w[0] && 47 == k[_ + 0] && !(k[_ + 4] >> 5), A[0] = w[0];
											y = 0
										}if (i = i[0], g.Ja = g.Ja[0], g.xa = g.xa[0], r = r[0], 0 != y) break;
									if (4294967286 < g.Ja) return 3;
									if (null == u || b || (u[0] = g.xa ? 2 : 1), c = [c], v = [v], g.xa) {
										if (5 > i) {
											y = 7;
											break
										}
										u = c, p = v, b = s, null == t || 5 > i ? t = 0 : 5 <= i && 47 == t[r + 0] && !(t[r + 4] >> 5) ? (w = [0], k = [0], x = [0], m(A = new N, t, r, i), gt(A, w, k, x) ? (null != u && (u[0] = w[0]), null != p && (p[0] = k[0]), null != b && (b[0] = x[0]), t = 1) : t = 0) : t = 0
									} else {
										if (10 > i) {
											y = 7;
											break
										}
										u = v, null == t || 10 > i || !Xt(t, r + 3, i - 3) ? t = 0 : (p = t[r + 0] | t[r + 1] << 8 | t[r + 2] << 16, b = 16383 & (t[r + 7] << 8 | t[r + 6]), t = 16383 & (t[r + 9] << 8 | t[r + 8]), 1 & p || 3 < (p >> 1 & 7) || !(p >> 4 & 1) || p >> 5 >= g.Ja || !b || !t ? t = 0 : (c && (c[0] = b), u && (u[0] = t), t = 1))
									}
									if (!t) return 3;
									if (c = c[0], v = v[0], d && (h[0] != c || f[0] != v)) return 3;null != l && (l[0] = g, l.offset = r - l.w, e(4294967286 > r - l.w), e(l.offset == l.ha - i));
									break
								}
								return 0 == y || 7 == y && d && null == l ? (null != s && (s[0] |= null != g.na && 0 < g.na.length), null != o && (o[0] = c), null != a && (a[0] = v), 0) : y
							}

							function En(t, e, n) {
								var r = e.width,
									i = e.height,
									o = 0,
									a = 0,
									s = r,
									c = i;
								if (e.Da = null != t && 0 < t.Da, e.Da && (s = t.cd, c = t.bd, o = t.v, a = t.j, 11 > n || (o &= -2, a &= -2), 0 > o || 0 > a || 0 >= s || 0 >= c || o + s > r || a + c > i)) return 0;
								if (e.v = o, e.j = a, e.va = o + s, e.o = a + c, e.U = s, e.T = c, e.da = null != t && 0 < t.da, e.da) {
									if (!E(s, c, n = [t.ib], o = [t.hb])) return 0;
									e.ib = n[0], e.hb = o[0]
								}
								return e.ob = null != t && t.ob, e.Kb = null == t || !t.Sd, e.da && (e.ob = e.ib < 3 * r / 4 && e.hb < 3 * i / 4, e.Kb = 0), 1
							}

							function qn(t) {
								if (null == t) return 2;
								if (11 > t.S) {
									var e = t.f.RGBA;
									e.fb += (t.height - 1) * e.A, e.A = -e.A
								} else e = t.f.kb, t = t.height, e.O += (t - 1) * e.fa, e.fa = -e.fa, e.N += (t - 1 >> 1) * e.Ab, e.Ab = -e.Ab, e.W += (t - 1 >> 1) * e.Db, e.Db = -e.Db, null != e.F && (e.J += (t - 1) * e.lb, e.lb = -e.lb);
								return 0
							}

							function Tn(t, e, n, r) {
								if (null == r || 0 >= t || 0 >= e) return 2;
								if (null != n) {
									if (n.Da) {
										var i = n.cd,
											a = n.bd,
											s = -2 & n.v,
											c = -2 & n.j;
										if (0 > s || 0 > c || 0 >= i || 0 >= a || s + i > t || c + a > e) return 2;
										t = i, e = a
									}
									if (n.da) {
										if (!E(t, e, i = [n.ib], a = [n.hb])) return 2;
										t = i[0], e = a[0]
									}
								}
								r.width = t, r.height = e;
								t: {
									var u = r.width,
										l = r.height;
									if (t = r.S, 0 >= u || 0 >= l || !(t >= Er && 13 > t)) t = 2;
									else {
										if (0 >= r.Rd && null == r.sd) {
											s = a = i = e = 0;
											var h = (c = u * Ui[t]) * l;
											if (11 > t || (a = (l + 1) / 2 * (e = (u + 1) / 2), 12 == t && (s = (i = u) * l)), null == (l = o(h + 2 * a + s))) {
												t = 1;
												break t
											}
											r.sd = l, 11 > t ? ((u = r.f.RGBA).eb = l, u.fb = 0, u.A = c, u.size = h) : ((u = r.f.kb).y = l, u.O = 0, u.fa = c, u.Fd = h, u.f = l, u.N = 0 + h, u.Ab = e, u.Cd = a, u.ea = l, u.W = 0 + h + a, u.Db = e, u.Ed = a, 12 == t && (u.F = l, u.J = 0 + h + 2 * a), u.Tc = s, u.lb = i)
										}
										if (e = 1, i = r.S, a = r.width, s = r.height, i >= Er && 13 > i)
											if (11 > i) t = r.f.RGBA, e &= (c = Math.abs(t.A)) * (s - 1) + a <= t.size, e &= c >= a * Ui[i], e &= null != t.eb;
											else {
												t = r.f.kb, c = (a + 1) / 2, h = (s + 1) / 2, u = Math.abs(t.fa), l = Math.abs(t.Ab);
												var f = Math.abs(t.Db),
													d = Math.abs(t.lb),
													p = d * (s - 1) + a;
												e &= u * (s - 1) + a <= t.Fd, e &= l * (h - 1) + c <= t.Cd, e = (e &= f * (h - 1) + c <= t.Ed) & u >= a & l >= c & f >= c, e &= null != t.y, e &= null != t.f, e &= null != t.ea, 12 == i && (e &= d >= a, e &= p <= t.Tc, e &= null != t.F)
											}
										else e = 0;
										t = e ? 0 : 2
									}
								}
								return 0 != t || null != n && n.fd && (t = qn(r)), t
							}
							var Dn = 64,
								Rn = [0, 1, 3, 7, 15, 31, 63, 127, 255, 511, 1023, 2047, 4095, 8191, 16383, 32767, 65535, 131071, 262143, 524287, 1048575, 2097151, 4194303, 8388607, 16777215],
								zn = 24,
								Un = 32,
								Hn = 8,
								Wn = [0, 0, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7];
							D("Predictor0", "PredictorAdd0"), t.Predictor0 = function() {
								return 4278190080
							}, t.Predictor1 = function(t) {
								return t
							}, t.Predictor2 = function(t, e, n) {
								return e[n + 0]
							}, t.Predictor3 = function(t, e, n) {
								return e[n + 1]
							}, t.Predictor4 = function(t, e, n) {
								return e[n - 1]
							}, t.Predictor5 = function(t, e, n) {
								return z(z(t, e[n + 1]), e[n + 0])
							}, t.Predictor6 = function(t, e, n) {
								return z(t, e[n - 1])
							}, t.Predictor7 = function(t, e, n) {
								return z(t, e[n + 0])
							}, t.Predictor8 = function(t, e, n) {
								return z(e[n - 1], e[n + 0])
							}, t.Predictor9 = function(t, e, n) {
								return z(e[n + 0], e[n + 1])
							}, t.Predictor10 = function(t, e, n) {
								return z(z(t, e[n - 1]), z(e[n + 0], e[n + 1]))
							}, t.Predictor11 = function(t, e, n) {
								var r = e[n + 0];
								return 0 >= W(r >> 24 & 255, t >> 24 & 255, (e = e[n - 1]) >> 24 & 255) + W(r >> 16 & 255, t >> 16 & 255, e >> 16 & 255) + W(r >> 8 & 255, t >> 8 & 255, e >> 8 & 255) + W(255 & r, 255 & t, 255 & e) ? r : t
							}, t.Predictor12 = function(t, e, n) {
								var r = e[n + 0];
								return (U((t >> 24 & 255) + (r >> 24 & 255) - ((e = e[n - 1]) >> 24 & 255)) << 24 | U((t >> 16 & 255) + (r >> 16 & 255) - (e >> 16 & 255)) << 16 | U((t >> 8 & 255) + (r >> 8 & 255) - (e >> 8 & 255)) << 8 | U((255 & t) + (255 & r) - (255 & e))) >>> 0
							}, t.Predictor13 = function(t, e, n) {
								var r = e[n - 1];
								return (H((t = z(t, e[n + 0])) >> 24 & 255, r >> 24 & 255) << 24 | H(t >> 16 & 255, r >> 16 & 255) << 16 | H(t >> 8 & 255, r >> 8 & 255) << 8 | H(t >> 0 & 255, r >> 0 & 255)) >>> 0
							};
							var Vn = t.PredictorAdd0;
							t.PredictorAdd1 = V, D("Predictor2", "PredictorAdd2"), D("Predictor3", "PredictorAdd3"), D("Predictor4", "PredictorAdd4"), D("Predictor5", "PredictorAdd5"), D("Predictor6", "PredictorAdd6"), D("Predictor7", "PredictorAdd7"), D("Predictor8", "PredictorAdd8"), D("Predictor9", "PredictorAdd9"), D("Predictor10", "PredictorAdd10"), D("Predictor11", "PredictorAdd11"), D("Predictor12", "PredictorAdd12"), D("Predictor13", "PredictorAdd13");
							var Gn = t.PredictorAdd2;
							X("ColorIndexInverseTransform", "MapARGB", "32b", (function(t) {
								return t >> 8 & 255
							}), (function(t) {
								return t
							})), X("VP8LColorIndexInverseTransformAlpha", "MapAlpha", "8b", (function(t) {
								return t
							}), (function(t) {
								return t >> 8 & 255
							}));
							var Yn, Jn = t.ColorIndexInverseTransform,
								Xn = t.MapARGB,
								Kn = t.VP8LColorIndexInverseTransformAlpha,
								Zn = t.MapAlpha,
								$n = t.VP8LPredictorsAdd = [];
							$n.length = 16, (t.VP8LPredictors = []).length = 16, (t.VP8LPredictorsAdd_C = []).length = 16, (t.VP8LPredictors_C = []).length = 16;
							var Qn, tr, er, nr, rr, ir, or, ar, sr, cr, ur, lr, hr, fr, dr, pr, gr, vr, mr, br, yr, wr, Nr, Lr, xr, Ar, Sr, _r, Pr = o(511),
								kr = o(2041),
								Fr = o(225),
								Ir = o(767),
								Cr = 0,
								jr = kr,
								Or = Fr,
								Br = Ir,
								Mr = Pr,
								Er = 0,
								qr = 1,
								Tr = 2,
								Dr = 3,
								Rr = 4,
								zr = 5,
								Ur = 6,
								Hr = 7,
								Wr = 8,
								Vr = 9,
								Gr = 10,
								Yr = [2, 3, 7],
								Jr = [3, 3, 11],
								Xr = [280, 256, 256, 256, 40],
								Kr = [0, 1, 1, 1, 0],
								Zr = [17, 18, 0, 1, 2, 3, 4, 5, 16, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
								$r = [24, 7, 23, 25, 40, 6, 39, 41, 22, 26, 38, 42, 56, 5, 55, 57, 21, 27, 54, 58, 37, 43, 72, 4, 71, 73, 20, 28, 53, 59, 70, 74, 36, 44, 88, 69, 75, 52, 60, 3, 87, 89, 19, 29, 86, 90, 35, 45, 68, 76, 85, 91, 51, 61, 104, 2, 103, 105, 18, 30, 102, 106, 34, 46, 84, 92, 67, 77, 101, 107, 50, 62, 120, 1, 119, 121, 83, 93, 17, 31, 100, 108, 66, 78, 118, 122, 33, 47, 117, 123, 49, 63, 99, 109, 82, 94, 0, 116, 124, 65, 79, 16, 32, 98, 110, 48, 115, 125, 81, 95, 64, 114, 126, 97, 111, 80, 113, 127, 96, 112],
								Qr = [2954, 2956, 2958, 2962, 2970, 2986, 3018, 3082, 3212, 3468, 3980, 5004],
								ti = 8,
								ei = [4, 5, 6, 7, 8, 9, 10, 10, 11, 12, 13, 14, 15, 16, 17, 17, 18, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 25, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 91, 93, 95, 96, 98, 100, 101, 102, 104, 106, 108, 110, 112, 114, 116, 118, 122, 124, 126, 128, 130, 132, 134, 136, 138, 140, 143, 145, 148, 151, 154, 157],
								ni = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 88, 90, 92, 94, 96, 98, 100, 102, 104, 106, 108, 110, 112, 114, 116, 119, 122, 125, 128, 131, 134, 137, 140, 143, 146, 149, 152, 155, 158, 161, 164, 167, 170, 173, 177, 181, 185, 189, 193, 197, 201, 205, 209, 213, 217, 221, 225, 229, 234, 239, 245, 249, 254, 259, 264, 269, 274, 279, 284],
								ri = null,
								ii = [
									[173, 148, 140, 0],
									[176, 155, 140, 135, 0],
									[180, 157, 141, 134, 130, 0],
									[254, 254, 243, 230, 196, 177, 153, 140, 133, 130, 129, 0]
								],
								oi = [0, 1, 4, 8, 5, 2, 3, 6, 9, 12, 13, 10, 7, 11, 14, 15],
								ai = [-0, 1, -1, 2, -2, 3, 4, 6, -3, 5, -4, -5, -6, 7, -7, 8, -8, -9],
								si = [
									[
										[
											[128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128],
											[128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128],
											[128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128]
										],
										[
											[253, 136, 254, 255, 228, 219, 128, 128, 128, 128, 128],
											[189, 129, 242, 255, 227, 213, 255, 219, 128, 128, 128],
											[106, 126, 227, 252, 214, 209, 255, 255, 128, 128, 128]
										],
										[
											[1, 98, 248, 255, 236, 226, 255, 255, 128, 128, 128],
											[181, 133, 238, 254, 221, 234, 255, 154, 128, 128, 128],
											[78, 134, 202, 247, 198, 180, 255, 219, 128, 128, 128]
										],
										[
											[1, 185, 249, 255, 243, 255, 128, 128, 128, 128, 128],
											[184, 150, 247, 255, 236, 224, 128, 128, 128, 128, 128],
											[77, 110, 216, 255, 236, 230, 128, 128, 128, 128, 128]
										],
										[
											[1, 101, 251, 255, 241, 255, 128, 128, 128, 128, 128],
											[170, 139, 241, 252, 236, 209, 255, 255, 128, 128, 128],
											[37, 116, 196, 243, 228, 255, 255, 255, 128, 128, 128]
										],
										[
											[1, 204, 254, 255, 245, 255, 128, 128, 128, 128, 128],
											[207, 160, 250, 255, 238, 128, 128, 128, 128, 128, 128],
											[102, 103, 231, 255, 211, 171, 128, 128, 128, 128, 128]
										],
										[
											[1, 152, 252, 255, 240, 255, 128, 128, 128, 128, 128],
											[177, 135, 243, 255, 234, 225, 128, 128, 128, 128, 128],
											[80, 129, 211, 255, 194, 224, 128, 128, 128, 128, 128]
										],
										[
											[1, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128],
											[246, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128],
											[255, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128]
										]
									],
									[
										[
											[198, 35, 237, 223, 193, 187, 162, 160, 145, 155, 62],
											[131, 45, 198, 221, 172, 176, 220, 157, 252, 221, 1],
											[68, 47, 146, 208, 149, 167, 221, 162, 255, 223, 128]
										],
										[
											[1, 149, 241, 255, 221, 224, 255, 255, 128, 128, 128],
											[184, 141, 234, 253, 222, 220, 255, 199, 128, 128, 128],
											[81, 99, 181, 242, 176, 190, 249, 202, 255, 255, 128]
										],
										[
											[1, 129, 232, 253, 214, 197, 242, 196, 255, 255, 128],
											[99, 121, 210, 250, 201, 198, 255, 202, 128, 128, 128],
											[23, 91, 163, 242, 170, 187, 247, 210, 255, 255, 128]
										],
										[
											[1, 200, 246, 255, 234, 255, 128, 128, 128, 128, 128],
											[109, 178, 241, 255, 231, 245, 255, 255, 128, 128, 128],
											[44, 130, 201, 253, 205, 192, 255, 255, 128, 128, 128]
										],
										[
											[1, 132, 239, 251, 219, 209, 255, 165, 128, 128, 128],
											[94, 136, 225, 251, 218, 190, 255, 255, 128, 128, 128],
											[22, 100, 174, 245, 186, 161, 255, 199, 128, 128, 128]
										],
										[
											[1, 182, 249, 255, 232, 235, 128, 128, 128, 128, 128],
											[124, 143, 241, 255, 227, 234, 128, 128, 128, 128, 128],
											[35, 77, 181, 251, 193, 211, 255, 205, 128, 128, 128]
										],
										[
											[1, 157, 247, 255, 236, 231, 255, 255, 128, 128, 128],
											[121, 141, 235, 255, 225, 227, 255, 255, 128, 128, 128],
											[45, 99, 188, 251, 195, 217, 255, 224, 128, 128, 128]
										],
										[
											[1, 1, 251, 255, 213, 255, 128, 128, 128, 128, 128],
											[203, 1, 248, 255, 255, 128, 128, 128, 128, 128, 128],
											[137, 1, 177, 255, 224, 255, 128, 128, 128, 128, 128]
										]
									],
									[
										[
											[253, 9, 248, 251, 207, 208, 255, 192, 128, 128, 128],
											[175, 13, 224, 243, 193, 185, 249, 198, 255, 255, 128],
											[73, 17, 171, 221, 161, 179, 236, 167, 255, 234, 128]
										],
										[
											[1, 95, 247, 253, 212, 183, 255, 255, 128, 128, 128],
											[239, 90, 244, 250, 211, 209, 255, 255, 128, 128, 128],
											[155, 77, 195, 248, 188, 195, 255, 255, 128, 128, 128]
										],
										[
											[1, 24, 239, 251, 218, 219, 255, 205, 128, 128, 128],
											[201, 51, 219, 255, 196, 186, 128, 128, 128, 128, 128],
											[69, 46, 190, 239, 201, 218, 255, 228, 128, 128, 128]
										],
										[
											[1, 191, 251, 255, 255, 128, 128, 128, 128, 128, 128],
											[223, 165, 249, 255, 213, 255, 128, 128, 128, 128, 128],
											[141, 124, 248, 255, 255, 128, 128, 128, 128, 128, 128]
										],
										[
											[1, 16, 248, 255, 255, 128, 128, 128, 128, 128, 128],
											[190, 36, 230, 255, 236, 255, 128, 128, 128, 128, 128],
											[149, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128]
										],
										[
											[1, 226, 255, 128, 128, 128, 128, 128, 128, 128, 128],
											[247, 192, 255, 128, 128, 128, 128, 128, 128, 128, 128],
											[240, 128, 255, 128, 128, 128, 128, 128, 128, 128, 128]
										],
										[
											[1, 134, 252, 255, 255, 128, 128, 128, 128, 128, 128],
											[213, 62, 250, 255, 255, 128, 128, 128, 128, 128, 128],
											[55, 93, 255, 128, 128, 128, 128, 128, 128, 128, 128]
										],
										[
											[128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128],
											[128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128],
											[128, 128, 128, 128, 128, 128, 128, 128, 128, 128, 128]
										]
									],
									[
										[
											[202, 24, 213, 235, 186, 191, 220, 160, 240, 175, 255],
											[126, 38, 182, 232, 169, 184, 228, 174, 255, 187, 128],
											[61, 46, 138, 219, 151, 178, 240, 170, 255, 216, 128]
										],
										[
											[1, 112, 230, 250, 199, 191, 247, 159, 255, 255, 128],
											[166, 109, 228, 252, 211, 215, 255, 174, 128, 128, 128],
											[39, 77, 162, 232, 172, 180, 245, 178, 255, 255, 128]
										],
										[
											[1, 52, 220, 246, 198, 199, 249, 220, 255, 255, 128],
											[124, 74, 191, 243, 183, 193, 250, 221, 255, 255, 128],
											[24, 71, 130, 219, 154, 170, 243, 182, 255, 255, 128]
										],
										[
											[1, 182, 225, 249, 219, 240, 255, 224, 128, 128, 128],
											[149, 150, 226, 252, 216, 205, 255, 171, 128, 128, 128],
											[28, 108, 170, 242, 183, 194, 254, 223, 255, 255, 128]
										],
										[
											[1, 81, 230, 252, 204, 203, 255, 192, 128, 128, 128],
											[123, 102, 209, 247, 188, 196, 255, 233, 128, 128, 128],
											[20, 95, 153, 243, 164, 173, 255, 203, 128, 128, 128]
										],
										[
											[1, 222, 248, 255, 216, 213, 128, 128, 128, 128, 128],
											[168, 175, 246, 252, 235, 205, 255, 255, 128, 128, 128],
											[47, 116, 215, 255, 211, 212, 255, 255, 128, 128, 128]
										],
										[
											[1, 121, 236, 253, 212, 214, 255, 255, 128, 128, 128],
											[141, 84, 213, 252, 201, 202, 255, 219, 128, 128, 128],
											[42, 80, 160, 240, 162, 185, 255, 205, 128, 128, 128]
										],
										[
											[1, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128],
											[244, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128],
											[238, 1, 255, 128, 128, 128, 128, 128, 128, 128, 128]
										]
									]
								],
								ci = [
									[
										[231, 120, 48, 89, 115, 113, 120, 152, 112],
										[152, 179, 64, 126, 170, 118, 46, 70, 95],
										[175, 69, 143, 80, 85, 82, 72, 155, 103],
										[56, 58, 10, 171, 218, 189, 17, 13, 152],
										[114, 26, 17, 163, 44, 195, 21, 10, 173],
										[121, 24, 80, 195, 26, 62, 44, 64, 85],
										[144, 71, 10, 38, 171, 213, 144, 34, 26],
										[170, 46, 55, 19, 136, 160, 33, 206, 71],
										[63, 20, 8, 114, 114, 208, 12, 9, 226],
										[81, 40, 11, 96, 182, 84, 29, 16, 36]
									],
									[
										[134, 183, 89, 137, 98, 101, 106, 165, 148],
										[72, 187, 100, 130, 157, 111, 32, 75, 80],
										[66, 102, 167, 99, 74, 62, 40, 234, 128],
										[41, 53, 9, 178, 241, 141, 26, 8, 107],
										[74, 43, 26, 146, 73, 166, 49, 23, 157],
										[65, 38, 105, 160, 51, 52, 31, 115, 128],
										[104, 79, 12, 27, 217, 255, 87, 17, 7],
										[87, 68, 71, 44, 114, 51, 15, 186, 23],
										[47, 41, 14, 110, 182, 183, 21, 17, 194],
										[66, 45, 25, 102, 197, 189, 23, 18, 22]
									],
									[
										[88, 88, 147, 150, 42, 46, 45, 196, 205],
										[43, 97, 183, 117, 85, 38, 35, 179, 61],
										[39, 53, 200, 87, 26, 21, 43, 232, 171],
										[56, 34, 51, 104, 114, 102, 29, 93, 77],
										[39, 28, 85, 171, 58, 165, 90, 98, 64],
										[34, 22, 116, 206, 23, 34, 43, 166, 73],
										[107, 54, 32, 26, 51, 1, 81, 43, 31],
										[68, 25, 106, 22, 64, 171, 36, 225, 114],
										[34, 19, 21, 102, 132, 188, 16, 76, 124],
										[62, 18, 78, 95, 85, 57, 50, 48, 51]
									],
									[
										[193, 101, 35, 159, 215, 111, 89, 46, 111],
										[60, 148, 31, 172, 219, 228, 21, 18, 111],
										[112, 113, 77, 85, 179, 255, 38, 120, 114],
										[40, 42, 1, 196, 245, 209, 10, 25, 109],
										[88, 43, 29, 140, 166, 213, 37, 43, 154],
										[61, 63, 30, 155, 67, 45, 68, 1, 209],
										[100, 80, 8, 43, 154, 1, 51, 26, 71],
										[142, 78, 78, 16, 255, 128, 34, 197, 171],
										[41, 40, 5, 102, 211, 183, 4, 1, 221],
										[51, 50, 17, 168, 209, 192, 23, 25, 82]
									],
									[
										[138, 31, 36, 171, 27, 166, 38, 44, 229],
										[67, 87, 58, 169, 82, 115, 26, 59, 179],
										[63, 59, 90, 180, 59, 166, 93, 73, 154],
										[40, 40, 21, 116, 143, 209, 34, 39, 175],
										[47, 15, 16, 183, 34, 223, 49, 45, 183],
										[46, 17, 33, 183, 6, 98, 15, 32, 183],
										[57, 46, 22, 24, 128, 1, 54, 17, 37],
										[65, 32, 73, 115, 28, 128, 23, 128, 205],
										[40, 3, 9, 115, 51, 192, 18, 6, 223],
										[87, 37, 9, 115, 59, 77, 64, 21, 47]
									],
									[
										[104, 55, 44, 218, 9, 54, 53, 130, 226],
										[64, 90, 70, 205, 40, 41, 23, 26, 57],
										[54, 57, 112, 184, 5, 41, 38, 166, 213],
										[30, 34, 26, 133, 152, 116, 10, 32, 134],
										[39, 19, 53, 221, 26, 114, 32, 73, 255],
										[31, 9, 65, 234, 2, 15, 1, 118, 73],
										[75, 32, 12, 51, 192, 255, 160, 43, 51],
										[88, 31, 35, 67, 102, 85, 55, 186, 85],
										[56, 21, 23, 111, 59, 205, 45, 37, 192],
										[55, 38, 70, 124, 73, 102, 1, 34, 98]
									],
									[
										[125, 98, 42, 88, 104, 85, 117, 175, 82],
										[95, 84, 53, 89, 128, 100, 113, 101, 45],
										[75, 79, 123, 47, 51, 128, 81, 171, 1],
										[57, 17, 5, 71, 102, 57, 53, 41, 49],
										[38, 33, 13, 121, 57, 73, 26, 1, 85],
										[41, 10, 67, 138, 77, 110, 90, 47, 114],
										[115, 21, 2, 10, 102, 255, 166, 23, 6],
										[101, 29, 16, 10, 85, 128, 101, 196, 26],
										[57, 18, 10, 102, 102, 213, 34, 20, 43],
										[117, 20, 15, 36, 163, 128, 68, 1, 26]
									],
									[
										[102, 61, 71, 37, 34, 53, 31, 243, 192],
										[69, 60, 71, 38, 73, 119, 28, 222, 37],
										[68, 45, 128, 34, 1, 47, 11, 245, 171],
										[62, 17, 19, 70, 146, 85, 55, 62, 70],
										[37, 43, 37, 154, 100, 163, 85, 160, 1],
										[63, 9, 92, 136, 28, 64, 32, 201, 85],
										[75, 15, 9, 9, 64, 255, 184, 119, 16],
										[86, 6, 28, 5, 64, 255, 25, 248, 1],
										[56, 8, 17, 132, 137, 255, 55, 116, 128],
										[58, 15, 20, 82, 135, 57, 26, 121, 40]
									],
									[
										[164, 50, 31, 137, 154, 133, 25, 35, 218],
										[51, 103, 44, 131, 131, 123, 31, 6, 158],
										[86, 40, 64, 135, 148, 224, 45, 183, 128],
										[22, 26, 17, 131, 240, 154, 14, 1, 209],
										[45, 16, 21, 91, 64, 222, 7, 1, 197],
										[56, 21, 39, 155, 60, 138, 23, 102, 213],
										[83, 12, 13, 54, 192, 255, 68, 47, 28],
										[85, 26, 85, 85, 128, 128, 32, 146, 171],
										[18, 11, 7, 63, 144, 171, 4, 4, 246],
										[35, 27, 10, 146, 174, 171, 12, 26, 128]
									],
									[
										[190, 80, 35, 99, 180, 80, 126, 54, 45],
										[85, 126, 47, 87, 176, 51, 41, 20, 32],
										[101, 75, 128, 139, 118, 146, 116, 128, 85],
										[56, 41, 15, 176, 236, 85, 37, 9, 62],
										[71, 30, 17, 119, 118, 255, 17, 18, 138],
										[101, 38, 60, 138, 55, 70, 43, 26, 142],
										[146, 36, 19, 30, 171, 255, 97, 27, 20],
										[138, 45, 61, 62, 219, 1, 81, 188, 64],
										[32, 41, 20, 117, 151, 142, 20, 21, 163],
										[112, 19, 12, 61, 195, 128, 48, 4, 24]
									]
								],
								ui = [
									[
										[
											[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
											[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
											[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
										],
										[
											[176, 246, 255, 255, 255, 255, 255, 255, 255, 255, 255],
											[223, 241, 252, 255, 255, 255, 255, 255, 255, 255, 255],
											[249, 253, 253, 255, 255, 255, 255, 255, 255, 255, 255]
										],
										[
											[255, 244, 252, 255, 255, 255, 255, 255, 255, 255, 255],
											[234, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255],
											[253, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
										],
										[
											[255, 246, 254, 255, 255, 255, 255, 255, 255, 255, 255],
											[239, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255],
											[254, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255]
										],
										[
											[255, 248, 254, 255, 255, 255, 255, 255, 255, 255, 255],
											[251, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255],
											[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
										],
										[
											[255, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255],
											[251, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255],
											[254, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255]
										],
										[
											[255, 254, 253, 255, 254, 255, 255, 255, 255, 255, 255],
											[250, 255, 254, 255, 254, 255, 255, 255, 255, 255, 255],
											[254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
										],
										[
											[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
											[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
											[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
										]
									],
									[
										[
											[217, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
											[225, 252, 241, 253, 255, 255, 254, 255, 255, 255, 255],
											[234, 250, 241, 250, 253, 255, 253, 254, 255, 255, 255]
										],
										[
											[255, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255],
											[223, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255],
											[238, 253, 254, 254, 255, 255, 255, 255, 255, 255, 255]
										],
										[
											[255, 248, 254, 255, 255, 255, 255, 255, 255, 255, 255],
											[249, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255],
											[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
										],
										[
											[255, 253, 255, 255, 255, 255, 255, 255, 255, 255, 255],
											[247, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255],
											[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
										],
										[
											[255, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255],
											[252, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
											[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
										],
										[
											[255, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255],
											[253, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
											[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
										],
										[
											[255, 254, 253, 255, 255, 255, 255, 255, 255, 255, 255],
											[250, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
											[254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
										],
										[
											[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
											[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
											[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
										]
									],
									[
										[
											[186, 251, 250, 255, 255, 255, 255, 255, 255, 255, 255],
											[234, 251, 244, 254, 255, 255, 255, 255, 255, 255, 255],
											[251, 251, 243, 253, 254, 255, 254, 255, 255, 255, 255]
										],
										[
											[255, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255],
											[236, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255],
											[251, 253, 253, 254, 254, 255, 255, 255, 255, 255, 255]
										],
										[
											[255, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255],
											[254, 254, 254, 255, 255, 255, 255, 255, 255, 255, 255],
											[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
										],
										[
											[255, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255],
											[254, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255],
											[254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
										],
										[
											[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
											[254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
											[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
										],
										[
											[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
											[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
											[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
										],
										[
											[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
											[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
											[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
										],
										[
											[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
											[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
											[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
										]
									],
									[
										[
											[248, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
											[250, 254, 252, 254, 255, 255, 255, 255, 255, 255, 255],
											[248, 254, 249, 253, 255, 255, 255, 255, 255, 255, 255]
										],
										[
											[255, 253, 253, 255, 255, 255, 255, 255, 255, 255, 255],
											[246, 253, 253, 255, 255, 255, 255, 255, 255, 255, 255],
											[252, 254, 251, 254, 254, 255, 255, 255, 255, 255, 255]
										],
										[
											[255, 254, 252, 255, 255, 255, 255, 255, 255, 255, 255],
											[248, 254, 253, 255, 255, 255, 255, 255, 255, 255, 255],
											[253, 255, 254, 254, 255, 255, 255, 255, 255, 255, 255]
										],
										[
											[255, 251, 254, 255, 255, 255, 255, 255, 255, 255, 255],
											[245, 251, 254, 255, 255, 255, 255, 255, 255, 255, 255],
											[253, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255]
										],
										[
											[255, 251, 253, 255, 255, 255, 255, 255, 255, 255, 255],
											[252, 253, 254, 255, 255, 255, 255, 255, 255, 255, 255],
											[255, 254, 255, 255, 255, 255, 255, 255, 255, 255, 255]
										],
										[
											[255, 252, 255, 255, 255, 255, 255, 255, 255, 255, 255],
											[249, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255],
											[255, 255, 254, 255, 255, 255, 255, 255, 255, 255, 255]
										],
										[
											[255, 255, 253, 255, 255, 255, 255, 255, 255, 255, 255],
											[250, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
											[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
										],
										[
											[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
											[254, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255],
											[255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]
										]
									]
								],
								li = [0, 1, 2, 3, 6, 4, 5, 6, 6, 6, 6, 6, 6, 6, 6, 7, 0],
								hi = [],
								fi = [],
								di = [],
								pi = 1,
								gi = 2,
								vi = [],
								mi = [];
							bn("UpsampleRgbLinePair", An, 3), bn("UpsampleBgrLinePair", Sn, 3), bn("UpsampleRgbaLinePair", In, 4), bn("UpsampleBgraLinePair", Fn, 4), bn("UpsampleArgbLinePair", kn, 4), bn("UpsampleRgba4444LinePair", Pn, 2), bn("UpsampleRgb565LinePair", _n, 2);
							var bi = t.UpsampleRgbLinePair,
								yi = t.UpsampleBgrLinePair,
								wi = t.UpsampleRgbaLinePair,
								Ni = t.UpsampleBgraLinePair,
								Li = t.UpsampleArgbLinePair,
								xi = t.UpsampleRgba4444LinePair,
								Ai = t.UpsampleRgb565LinePair,
								Si = 16,
								_i = 1 << Si - 1,
								Pi = -227,
								ki = 482,
								Fi = 6,
								Ii = (256 << Fi) - 1,
								Ci = 0,
								ji = o(256),
								Oi = o(256),
								Bi = o(256),
								Mi = o(256),
								Ei = o(ki - Pi),
								qi = o(ki - Pi);
							Cn("YuvToRgbRow", An, 3), Cn("YuvToBgrRow", Sn, 3), Cn("YuvToRgbaRow", In, 4), Cn("YuvToBgraRow", Fn, 4), Cn("YuvToArgbRow", kn, 4), Cn("YuvToRgba4444Row", Pn, 2), Cn("YuvToRgb565Row", _n, 2);
							var Ti = [0, 4, 8, 12, 128, 132, 136, 140, 256, 260, 264, 268, 384, 388, 392, 396],
								Di = [0, 2, 8],
								Ri = [8, 7, 6, 4, 4, 2, 2, 2, 1, 1, 1, 1],
								zi = 1;
							this.WebPDecodeRGBA = function(t, n, r, i, o) {
								var a = qr,
									s = new nn,
									c = new at;
								s.ba = c, c.S = a, c.width = [c.width], c.height = [c.height];
								var u = c.width,
									l = c.height,
									h = new st;
								if (null == h || null == t) var f = 2;
								else e(null != h), f = Mn(t, n, r, h.width, h.height, h.Pd, h.Qd, h.format, null);
								if (0 != f ? u = 0 : (null != u && (u[0] = h.width[0]), null != l && (l[0] = h.height[0]), u = 1), u) {
									c.width = c.width[0], c.height = c.height[0], null != i && (i[0] = c.width), null != o && (o[0] = c.height);
									t: {
										if (i = new Gt, (o = new rn).data = t, o.w = n, o.ha = r, o.kd = 1, n = [0], e(null != o), (0 == (t = Mn(o.data, o.w, o.ha, null, null, null, n, null, o)) || 7 == t) && n[0] && (t = 4), 0 == (n = t)) {
											if (e(null != s), i.data = o.data, i.w = o.w + o.offset, i.ha = o.ha - o.offset, i.put = dt, i.ac = ft, i.bc = pt, i.ma = s, o.xa) {
												if (null == (t = kt())) {
													s = 1;
													break t
												}
												if (function(t, n) {
														var r = [0],
															i = [0],
															o = [0];
														e: for (;;) {
															if (null == t) return 0;
															if (null == n) return t.a = 2, 0;
															if (t.l = n, t.a = 0, m(t.m, n.data, n.w, n.ha), !gt(t.m, r, i, o)) {
																t.a = 3;
																break e
															}
															if (t.xb = gi, n.width = r[0], n.height = i[0], !Ft(r[0], i[0], 1, t, null)) break e;
															return 1
														}
														return e(0 != t.a), 0
													}(t, i)) {
													if (i = 0 == (n = Tn(i.width, i.height, s.Oa, s.ba))) {
														e: {
															i = t;n: for (;;) {
																if (null == i) {
																	i = 0;
																	break e
																}
																if (e(null != i.s.yc), e(null != i.s.Ya), e(0 < i.s.Wb), e(null != (r = i.l)), e(null != (o = r.ma)), 0 != i.xb) {
																	if (i.ca = o.ba, i.tb = o.tb, e(null != i.ca), !En(o.Oa, r, Dr)) {
																		i.a = 2;
																		break n
																	}
																	if (!It(i, r.width)) break n;
																	if (r.da) break n;
																	if ((r.da || rt(i.ca.S)) && mn(), 11 > i.ca.S || (alert("todo:WebPInitConvertARGBToYUV"), null != i.ca.f.kb.F && mn()), i.Pb && 0 < i.s.ua && null == i.s.vb.X && !O(i.s.vb, i.s.Wa.Xa)) {
																		i.a = 1;
																		break n
																	}
																	i.xb = 0
																}
																if (!_t(i, i.V, i.Ba, i.c, i.i, r.o, Lt)) break n;
																o.Dc = i.Ma, i = 1;
																break e
															}
															e(0 != i.a),
															i = 0
														}
														i = !i
													}
													i && (n = t.a)
												} else n = t.a
											} else {
												if (null == (t = new Yt)) {
													s = 1;
													break t
												}
												if (t.Fa = o.na, t.P = o.P, t.qc = o.Sa, Kt(t, i)) {
													if (0 == (n = Tn(i.width, i.height, s.Oa, s.ba))) {
														if (t.Aa = 0, r = s.Oa, e(null != (o = t)), null != r) {
															if (0 < (u = 0 > (u = r.Md) ? 0 : 100 < u ? 255 : 255 * u / 100)) {
																for (l = h = 0; 4 > l; ++l) 12 > (f = o.pb[l]).lc && (f.ia = u * Ri[0 > f.lc ? 0 : f.lc] >> 3), h |= f.ia;
																h && (alert("todo:VP8InitRandom"), o.ia = 1)
															}
															o.Ga = r.Id, 100 < o.Ga ? o.Ga = 100 : 0 > o.Ga && (o.Ga = 0)
														}
														Qt(t, i) || (n = t.a)
													}
												} else n = t.a
											}
											0 == n && null != s.Oa && s.Oa.fd && (n = qn(s.ba))
										}
										s = n
									}
									a = 0 != s ? null : 11 > a ? c.f.RGBA.eb : c.f.kb.y
								} else a = null;
								return a
							};
							var Ui = [3, 4, 3, 4, 4, 2, 2, 4, 4, 4, 2, 1, 1]
						});
						var h = [0],
							f = [0],
							d = [],
							p = new Te,
							g = t,
							v = function(t, e) {
								var n = {},
									r = 0,
									i = !1,
									o = 0,
									a = 0;
								if (n.frames = [], ! function(t, e, n, r) {
										for (var i = 0; i < 4; i++)
											if (t[e + i] != "RIFF".charCodeAt(i)) return !0;
										return !1
									}(t, e)) {
									var s, h;
									for (l(t, e += 4), e += 8; e < t.length;) {
										var f = c(t, e),
											d = l(t, e += 4);
										e += 4;
										var p = d + (1 & d);
										switch (f) {
											case "VP8 ":
											case "VP8L":
												void 0 === n.frames[r] && (n.frames[r] = {}), (m = n.frames[r]).src_off = i ? a : e - 8, m.src_size = o + d + 8, r++, i && (i = !1, o = 0, a = 0);
												break;
											case "VP8X":
												(m = n.header = {}).feature_flags = t[e];
												var g = e + 4;
												m.canvas_width = 1 + u(t, g), g += 3, m.canvas_height = 1 + u(t, g), g += 3;
												break;
											case "ALPH":
												i = !0, o = p + 8, a = e - 8;
												break;
											case "ANIM":
												(m = n.header).bgcolor = l(t, e), g = e + 4, m.loop_count = (s = t)[(h = g) + 0] << 0 | s[h + 1] << 8, g += 2;
												break;
											case "ANMF":
												var v, m;
												(m = n.frames[r] = {}).offset_x = 2 * u(t, e), e += 3, m.offset_y = 2 * u(t, e), e += 3, m.width = 1 + u(t, e), e += 3, m.height = 1 + u(t, e), e += 3, m.duration = u(t, e), e += 3, v = t[e++], m.dispose = 1 & v, m.blend = v >> 1 & 1
										}
										"ANMF" != f && (e += p)
									}
									return n
								}
							}(g, 0);
						v.response = g, v.rgbaoutput = !0, v.dataurl = !1;
						var m = v.header ? v.header : null,
							b = v.frames ? v.frames : null;
						if (m) {
							m.loop_counter = m.loop_count, h = [m.canvas_height], f = [m.canvas_width];
							for (var y = 0; y < b.length && 0 != b[y].blend; y++);
						}
						var w = b[0],
							N = p.WebPDecodeRGBA(g, w.src_off, w.src_size, f, h);
						w.rgba = N, w.imgwidth = f[0], w.imgheight = h[0];
						for (var L = 0; L < f[0] * h[0] * 4; L++) d[L] = N[L];
						return this.width = f, this.height = h, this.data = d, this
					}! function(t) {
						var e = function(e, r, c, u) {
								var l = 4,
									h = o;
								switch (u) {
									case t.image_compression.FAST:
										l = 1, h = i;
										break;
									case t.image_compression.MEDIUM:
										l = 6, h = a;
										break;
									case t.image_compression.SLOW:
										l = 9, h = s
								}
								var f = U(e = n(e, r, c, h), {
									level: l
								});
								return t.__addimage__.arrayBufferToBinaryString(f)
							},
							n = function(t, e, n, r) {
								for (var i, o, a, s = t.length / e, c = new Uint8Array(t.length + s), h = u(), f = 0; f < s; f += 1) {
									if (a = f * e, i = t.subarray(a, a + e), r) c.set(r(i, n, o), a + f);
									else {
										for (var d, p = h.length, g = []; d < p; d += 1) g[d] = h[d](i, n, o);
										var v = l(g.concat());
										c.set(g[v], a + f)
									}
									o = i
								}
								return c
							},
							r = function(t) {
								var e = Array.apply([], t);
								return e.unshift(0), e
							},
							i = function(t, e) {
								var n, r = [],
									i = t.length;
								r[0] = 1;
								for (var o = 0; o < i; o += 1) n = t[o - e] || 0, r[o + 1] = t[o] - n + 256 & 255;
								return r
							},
							o = function(t, e, n) {
								var r, i = [],
									o = t.length;
								i[0] = 2;
								for (var a = 0; a < o; a += 1) r = n && n[a] || 0, i[a + 1] = t[a] - r + 256 & 255;
								return i
							},
							a = function(t, e, n) {
								var r, i, o = [],
									a = t.length;
								o[0] = 3;
								for (var s = 0; s < a; s += 1) r = t[s - e] || 0, i = n && n[s] || 0, o[s + 1] = t[s] + 256 - (r + i >>> 1) & 255;
								return o
							},
							s = function(t, e, n) {
								var r, i, o, a, s = [],
									u = t.length;
								s[0] = 4;
								for (var l = 0; l < u; l += 1) r = t[l - e] || 0, i = n && n[l] || 0, o = n && n[l - e] || 0, a = c(r, i, o), s[l + 1] = t[l] - a + 256 & 255;
								return s
							},
							c = function(t, e, n) {
								if (t === e && e === n) return t;
								var r = Math.abs(e - n),
									i = Math.abs(t - n),
									o = Math.abs(t + e - n - n);
								return r <= i && r <= o ? t : i <= o ? e : n
							},
							u = function() {
								return [r, i, o, a, s]
							},
							l = function(t) {
								var e = t.map((function(t) {
									return t.reduce((function(t, e) {
										return t + Math.abs(e)
									}), 0)
								}));
								return e.indexOf(Math.min.apply(null, e))
							};
						t.processPNG = function(n, r, i, o) {
							var a, s, c, u, l, h, f, d, p, g, v, m, b, y, w, N = this.decode.FLATE_DECODE,
								L = "";
							if (this.__addimage__.isArrayBuffer(n) && (n = new Uint8Array(n)), this.__addimage__.isArrayBufferView(n)) {
								if (n = (c = new Oe(n)).imgData, s = c.bits, a = c.colorSpace, l = c.colors, -1 !== [4, 6].indexOf(c.colorType)) {
									if (8 === c.bits) {
										p = (d = 32 == c.pixelBitlength ? new Uint32Array(c.decodePixels().buffer) : 16 == c.pixelBitlength ? new Uint16Array(c.decodePixels().buffer) : new Uint8Array(c.decodePixels().buffer)).length, v = new Uint8Array(p * c.colors), g = new Uint8Array(p);
										var x, A = c.pixelBitlength - c.bits;
										for (y = 0, w = 0; y < p; y++) {
											for (b = d[y], x = 0; x < A;) v[w++] = b >>> x & 255, x += c.bits;
											g[y] = b >>> x & 255
										}
									}
									if (16 === c.bits) {
										p = (d = new Uint32Array(c.decodePixels().buffer)).length, v = new Uint8Array(p * (32 / c.pixelBitlength) * c.colors), g = new Uint8Array(p * (32 / c.pixelBitlength)), m = c.colors > 1, y = 0, w = 0;
										for (var S = 0; y < p;) b = d[y++], v[w++] = b >>> 0 & 255, m && (v[w++] = b >>> 16 & 255, b = d[y++], v[w++] = b >>> 0 & 255), g[S++] = b >>> 16 & 255;
										s = 8
									}
									o !== t.image_compression.NONE ? (n = e(v, c.width * c.colors, c.colors, o), f = e(g, c.width, 1, o)) : (n = v, f = g, N = void 0)
								}
								if (3 === c.colorType && (a = this.color_spaces.INDEXED, h = c.palette, c.transparency.indexed)) {
									var _ = c.transparency.indexed,
										P = 0;
									for (y = 0, p = _.length; y < p; ++y) P += _[y];
									if ((P /= 255) == p - 1 && -1 !== _.indexOf(0)) u = [_.indexOf(0)];
									else if (P !== p) {
										for (d = c.decodePixels(), g = new Uint8Array(d.length), y = 0, p = d.length; y < p; y++) g[y] = _[d[y]];
										f = e(g, c.width, 1)
									}
								}
								var k = function(e) {
									var n;
									switch (e) {
										case t.image_compression.FAST:
											n = 11;
											break;
										case t.image_compression.MEDIUM:
											n = 13;
											break;
										case t.image_compression.SLOW:
											n = 14;
											break;
										default:
											n = 12
									}
									return n
								}(o);
								return N === this.decode.FLATE_DECODE && (L = "/Predictor " + k + " "), L += "/Colors " + l + " /BitsPerComponent " + s + " /Columns " + c.width, (this.__addimage__.isArrayBuffer(n) || this.__addimage__.isArrayBufferView(n)) && (n = this.__addimage__.arrayBufferToBinaryString(n)), (f && this.__addimage__.isArrayBuffer(f) || this.__addimage__.isArrayBufferView(f)) && (f = this.__addimage__.arrayBufferToBinaryString(f)), {
									alias: i,
									data: n,
									index: r,
									filter: N,
									decodeParameters: L,
									transparency: u,
									palette: h,
									sMask: f,
									predictor: k,
									width: c.width,
									height: c.height,
									bitsPerComponent: s,
									colorSpace: a
								}
							}
						}
					}(Nt.API),
					function(t) {
						t.processGIF89A = function(e, n, r, i) {
							var o = new Be(e),
								a = o.width,
								s = o.height,
								c = [];
							o.decodeAndBlitFrameRGBA(0, c);
							var u = {
									data: c,
									width: a,
									height: s
								},
								l = new Ee(100).encode(u, 100);
							return t.processJPEG.call(this, l, n, r, i)
						}, t.processGIF87A = t.processGIF89A
					}(Nt.API), qe.prototype.parseHeader = function() {
							if (this.fileSize = this.datav.getUint32(this.pos, !0), this.pos += 4, this.reserved = this.datav.getUint32(this.pos, !0), this.pos += 4, this.offset = this.datav.getUint32(this.pos, !0), this.pos += 4, this.headerSize = this.datav.getUint32(this.pos, !0), this.pos += 4, this.width = this.datav.getUint32(this.pos, !0), this.pos += 4, this.height = this.datav.getInt32(this.pos, !0), this.pos += 4, this.planes = this.datav.getUint16(this.pos, !0), this.pos += 2, this.bitPP = this.datav.getUint16(this.pos, !0), this.pos += 2, this.compress = this.datav.getUint32(this.pos, !0), this.pos += 4, this.rawSize = this.datav.getUint32(this.pos, !0), this.pos += 4, this.hr = this.datav.getUint32(this.pos, !0), this.pos += 4, this.vr = this.datav.getUint32(this.pos, !0), this.pos += 4, this.colors = this.datav.getUint32(this.pos, !0), this.pos += 4, this.importantColors = this.datav.getUint32(this.pos, !0), this.pos += 4, 16 === this.bitPP && this.is_with_alpha && (this.bitPP = 15), this.bitPP < 15) {
								var t = 0 === this.colors ? 1 << this.bitPP : this.colors;
								this.palette = new Array(t);
								for (var e = 0; e < t; e++) {
									var n = this.datav.getUint8(this.pos++, !0),
										r = this.datav.getUint8(this.pos++, !0),
										i = this.datav.getUint8(this.pos++, !0),
										o = this.datav.getUint8(this.pos++, !0);
									this.palette[e] = {
										red: i,
										green: r,
										blue: n,
										quad: o
									}
								}
							}
							this.height < 0 && (this.height *= -1, this.bottom_up = !1)
						}, qe.prototype.parseBGR = function() {
							this.pos = this.offset;
							try {
								var t = "bit" + this.bitPP,
									e = this.width * this.height * 4;
								this.data = new Uint8Array(e), this[t]()
							} catch (t) {
								G.log("bit decode error:" + t)
							}
						}, qe.prototype.bit1 = function() {
							var t, e = Math.ceil(this.width / 8),
								n = e % 4;
							for (t = this.height - 1; t >= 0; t--) {
								for (var r = this.bottom_up ? t : this.height - 1 - t, i = 0; i < e; i++)
									for (var o = this.datav.getUint8(this.pos++, !0), a = r * this.width * 4 + 8 * i * 4, s = 0; s < 8 && 8 * i + s < this.width; s++) {
										var c = this.palette[o >> 7 - s & 1];
										this.data[a + 4 * s] = c.blue, this.data[a + 4 * s + 1] = c.green, this.data[a + 4 * s + 2] = c.red, this.data[a + 4 * s + 3] = 255
									}
								0 !== n && (this.pos += 4 - n)
							}
						}, qe.prototype.bit4 = function() {
							for (var t = Math.ceil(this.width / 2), e = t % 4, n = this.height - 1; n >= 0; n--) {
								for (var r = this.bottom_up ? n : this.height - 1 - n, i = 0; i < t; i++) {
									var o = this.datav.getUint8(this.pos++, !0),
										a = r * this.width * 4 + 2 * i * 4,
										s = o >> 4,
										c = 15 & o,
										u = this.palette[s];
									if (this.data[a] = u.blue, this.data[a + 1] = u.green, this.data[a + 2] = u.red, this.data[a + 3] = 255, 2 * i + 1 >= this.width) break;
									u = this.palette[c], this.data[a + 4] = u.blue, this.data[a + 4 + 1] = u.green, this.data[a + 4 + 2] = u.red, this.data[a + 4 + 3] = 255
								}
								0 !== e && (this.pos += 4 - e)
							}
						}, qe.prototype.bit8 = function() {
							for (var t = this.width % 4, e = this.height - 1; e >= 0; e--) {
								for (var n = this.bottom_up ? e : this.height - 1 - e, r = 0; r < this.width; r++) {
									var i = this.datav.getUint8(this.pos++, !0),
										o = n * this.width * 4 + 4 * r;
									if (i < this.palette.length) {
										var a = this.palette[i];
										this.data[o] = a.red, this.data[o + 1] = a.green, this.data[o + 2] = a.blue, this.data[o + 3] = 255
									} else this.data[o] = 255, this.data[o + 1] = 255, this.data[o + 2] = 255, this.data[o + 3] = 255
								}
								0 !== t && (this.pos += 4 - t)
							}
						}, qe.prototype.bit15 = function() {
							for (var t = this.width % 3, e = parseInt("11111", 2), n = this.height - 1; n >= 0; n--) {
								for (var r = this.bottom_up ? n : this.height - 1 - n, i = 0; i < this.width; i++) {
									var o = this.datav.getUint16(this.pos, !0);
									this.pos += 2;
									var a = (o & e) / e * 255 | 0,
										s = (o >> 5 & e) / e * 255 | 0,
										c = (o >> 10 & e) / e * 255 | 0,
										u = o >> 15 ? 255 : 0,
										l = r * this.width * 4 + 4 * i;
									this.data[l] = c, this.data[l + 1] = s, this.data[l + 2] = a, this.data[l + 3] = u
								}
								this.pos += t
							}
						}, qe.prototype.bit16 = function() {
							for (var t = this.width % 3, e = parseInt("11111", 2), n = parseInt("111111", 2), r = this.height - 1; r >= 0; r--) {
								for (var i = this.bottom_up ? r : this.height - 1 - r, o = 0; o < this.width; o++) {
									var a = this.datav.getUint16(this.pos, !0);
									this.pos += 2;
									var s = (a & e) / e * 255 | 0,
										c = (a >> 5 & n) / n * 255 | 0,
										u = (a >> 11) / e * 255 | 0,
										l = i * this.width * 4 + 4 * o;
									this.data[l] = u, this.data[l + 1] = c, this.data[l + 2] = s, this.data[l + 3] = 255
								}
								this.pos += t
							}
						}, qe.prototype.bit24 = function() {
							for (var t = this.height - 1; t >= 0; t--) {
								for (var e = this.bottom_up ? t : this.height - 1 - t, n = 0; n < this.width; n++) {
									var r = this.datav.getUint8(this.pos++, !0),
										i = this.datav.getUint8(this.pos++, !0),
										o = this.datav.getUint8(this.pos++, !0),
										a = e * this.width * 4 + 4 * n;
									this.data[a] = o, this.data[a + 1] = i, this.data[a + 2] = r, this.data[a + 3] = 255
								}
								this.pos += this.width % 4
							}
						}, qe.prototype.bit32 = function() {
							for (var t = this.height - 1; t >= 0; t--)
								for (var e = this.bottom_up ? t : this.height - 1 - t, n = 0; n < this.width; n++) {
									var r = this.datav.getUint8(this.pos++, !0),
										i = this.datav.getUint8(this.pos++, !0),
										o = this.datav.getUint8(this.pos++, !0),
										a = this.datav.getUint8(this.pos++, !0),
										s = e * this.width * 4 + 4 * n;
									this.data[s] = o, this.data[s + 1] = i, this.data[s + 2] = r, this.data[s + 3] = a
								}
						}, qe.prototype.getData = function() {
							return this.data
						},
						function(t) {
							t.processBMP = function(e, n, r, i) {
								var o = new qe(e, !1),
									a = o.width,
									s = o.height,
									c = {
										data: o.getData(),
										width: a,
										height: s
									},
									u = new Ee(100).encode(c, 100);
								return t.processJPEG.call(this, u, n, r, i)
							}
						}(Nt.API), Te.prototype.getData = function() {
							return this.data
						},
						function(t) {
							t.processWEBP = function(e, n, r, i) {
								var o = new Te(e, !1),
									a = o.width,
									s = o.height,
									c = {
										data: o.getData(),
										width: a,
										height: s
									},
									u = new Ee(100).encode(c, 100);
								return t.processJPEG.call(this, u, n, r, i)
							}
						}(Nt.API), Nt.API.setLanguage = function(t) {
							return void 0 === this.internal.languageSettings && (this.internal.languageSettings = {}, this.internal.languageSettings.isSubscribed = !1), void 0 !== {
								af: "Afrikaans",
								sq: "Albanian",
								ar: "Arabic (Standard)",
								"ar-DZ": "Arabic (Algeria)",
								"ar-BH": "Arabic (Bahrain)",
								"ar-EG": "Arabic (Egypt)",
								"ar-IQ": "Arabic (Iraq)",
								"ar-JO": "Arabic (Jordan)",
								"ar-KW": "Arabic (Kuwait)",
								"ar-LB": "Arabic (Lebanon)",
								"ar-LY": "Arabic (Libya)",
								"ar-MA": "Arabic (Morocco)",
								"ar-OM": "Arabic (Oman)",
								"ar-QA": "Arabic (Qatar)",
								"ar-SA": "Arabic (Saudi Arabia)",
								"ar-SY": "Arabic (Syria)",
								"ar-TN": "Arabic (Tunisia)",
								"ar-AE": "Arabic (U.A.E.)",
								"ar-YE": "Arabic (Yemen)",
								an: "Aragonese",
								hy: "Armenian",
								as: "Assamese",
								ast: "Asturian",
								az: "Azerbaijani",
								eu: "Basque",
								be: "Belarusian",
								bn: "Bengali",
								bs: "Bosnian",
								br: "Breton",
								bg: "Bulgarian",
								my: "Burmese",
								ca: "Catalan",
								ch: "Chamorro",
								ce: "Chechen",
								zh: "Chinese",
								"zh-HK": "Chinese (Hong Kong)",
								"zh-CN": "Chinese (PRC)",
								"zh-SG": "Chinese (Singapore)",
								"zh-TW": "Chinese (Taiwan)",
								cv: "Chuvash",
								co: "Corsican",
								cr: "Cree",
								hr: "Croatian",
								cs: "Czech",
								da: "Danish",
								nl: "Dutch (Standard)",
								"nl-BE": "Dutch (Belgian)",
								en: "English",
								"en-AU": "English (Australia)",
								"en-BZ": "English (Belize)",
								"en-CA": "English (Canada)",
								"en-IE": "English (Ireland)",
								"en-JM": "English (Jamaica)",
								"en-NZ": "English (New Zealand)",
								"en-PH": "English (Philippines)",
								"en-ZA": "English (South Africa)",
								"en-TT": "English (Trinidad & Tobago)",
								"en-GB": "English (United Kingdom)",
								"en-US": "English (United States)",
								"en-ZW": "English (Zimbabwe)",
								eo: "Esperanto",
								et: "Estonian",
								fo: "Faeroese",
								fj: "Fijian",
								fi: "Finnish",
								fr: "French (Standard)",
								"fr-BE": "French (Belgium)",
								"fr-CA": "French (Canada)",
								"fr-FR": "French (France)",
								"fr-LU": "French (Luxembourg)",
								"fr-MC": "French (Monaco)",
								"fr-CH": "French (Switzerland)",
								fy: "Frisian",
								fur: "Friulian",
								gd: "Gaelic (Scots)",
								"gd-IE": "Gaelic (Irish)",
								gl: "Galacian",
								ka: "Georgian",
								de: "German (Standard)",
								"de-AT": "German (Austria)",
								"de-DE": "German (Germany)",
								"de-LI": "German (Liechtenstein)",
								"de-LU": "German (Luxembourg)",
								"de-CH": "German (Switzerland)",
								el: "Greek",
								gu: "Gujurati",
								ht: "Haitian",
								he: "Hebrew",
								hi: "Hindi",
								hu: "Hungarian",
								is: "Icelandic",
								id: "Indonesian",
								iu: "Inuktitut",
								ga: "Irish",
								it: "Italian (Standard)",
								"it-CH": "Italian (Switzerland)",
								ja: "Japanese",
								kn: "Kannada",
								ks: "Kashmiri",
								kk: "Kazakh",
								km: "Khmer",
								ky: "Kirghiz",
								tlh: "Klingon",
								ko: "Korean",
								"ko-KP": "Korean (North Korea)",
								"ko-KR": "Korean (South Korea)",
								la: "Latin",
								lv: "Latvian",
								lt: "Lithuanian",
								lb: "Luxembourgish",
								mk: "FYRO Macedonian",
								ms: "Malay",
								ml: "Malayalam",
								mt: "Maltese",
								mi: "Maori",
								mr: "Marathi",
								mo: "Moldavian",
								nv: "Navajo",
								ng: "Ndonga",
								ne: "Nepali",
								no: "Norwegian",
								nb: "Norwegian (Bokmal)",
								nn: "Norwegian (Nynorsk)",
								oc: "Occitan",
								or: "Oriya",
								om: "Oromo",
								fa: "Persian",
								"fa-IR": "Persian/Iran",
								pl: "Polish",
								pt: "Portuguese",
								"pt-BR": "Portuguese (Brazil)",
								pa: "Punjabi",
								"pa-IN": "Punjabi (India)",
								"pa-PK": "Punjabi (Pakistan)",
								qu: "Quechua",
								rm: "Rhaeto-Romanic",
								ro: "Romanian",
								"ro-MO": "Romanian (Moldavia)",
								ru: "Russian",
								"ru-MO": "Russian (Moldavia)",
								sz: "Sami (Lappish)",
								sg: "Sango",
								sa: "Sanskrit",
								sc: "Sardinian",
								sd: "Sindhi",
								si: "Singhalese",
								sr: "Serbian",
								sk: "Slovak",
								sl: "Slovenian",
								so: "Somani",
								sb: "Sorbian",
								es: "Spanish",
								"es-AR": "Spanish (Argentina)",
								"es-BO": "Spanish (Bolivia)",
								"es-CL": "Spanish (Chile)",
								"es-CO": "Spanish (Colombia)",
								"es-CR": "Spanish (Costa Rica)",
								"es-DO": "Spanish (Dominican Republic)",
								"es-EC": "Spanish (Ecuador)",
								"es-SV": "Spanish (El Salvador)",
								"es-GT": "Spanish (Guatemala)",
								"es-HN": "Spanish (Honduras)",
								"es-MX": "Spanish (Mexico)",
								"es-NI": "Spanish (Nicaragua)",
								"es-PA": "Spanish (Panama)",
								"es-PY": "Spanish (Paraguay)",
								"es-PE": "Spanish (Peru)",
								"es-PR": "Spanish (Puerto Rico)",
								"es-ES": "Spanish (Spain)",
								"es-UY": "Spanish (Uruguay)",
								"es-VE": "Spanish (Venezuela)",
								sx: "Sutu",
								sw: "Swahili",
								sv: "Swedish",
								"sv-FI": "Swedish (Finland)",
								"sv-SV": "Swedish (Sweden)",
								ta: "Tamil",
								tt: "Tatar",
								te: "Teluga",
								th: "Thai",
								tig: "Tigre",
								ts: "Tsonga",
								tn: "Tswana",
								tr: "Turkish",
								tk: "Turkmen",
								uk: "Ukrainian",
								hsb: "Upper Sorbian",
								ur: "Urdu",
								ve: "Venda",
								vi: "Vietnamese",
								vo: "Volapuk",
								wa: "Walloon",
								cy: "Welsh",
								xh: "Xhosa",
								ji: "Yiddish",
								zu: "Zulu"
							} [t] && (this.internal.languageSettings.languageCode = t, !1 === this.internal.languageSettings.isSubscribed && (this.internal.events.subscribe("putCatalog", (function() {
								this.internal.write("/Lang (" + this.internal.languageSettings.languageCode + ")")
							})), this.internal.languageSettings.isSubscribed = !0)), this
						}, ke = Nt.API, Fe = ke.getCharWidthsArray = function(t, e) {
							var n, r, i = (e = e || {}).font || this.internal.getFont(),
								o = e.fontSize || this.internal.getFontSize(),
								a = e.charSpace || this.internal.getCharSpace(),
								s = e.widths ? e.widths : i.metadata.Unicode.widths,
								c = s.fof ? s.fof : 1,
								u = e.kerning ? e.kerning : i.metadata.Unicode.kerning,
								l = u.fof ? u.fof : 1,
								h = !1 !== e.doKerning,
								f = 0,
								d = t.length,
								p = 0,
								g = s[0] || c,
								v = [];
							for (n = 0; n < d; n++) r = t.charCodeAt(n), "function" == typeof i.metadata.widthOfString ? v.push((i.metadata.widthOfGlyph(i.metadata.characterToGlyph(r)) + a * (1e3 / o) || 0) / 1e3) : (f = h && "object" == typeof u[r] && !isNaN(parseInt(u[r][p], 10)) ? u[r][p] / l : 0, v.push((s[r] || g) / c + f)), p = r;
							return v
						}, Ie = ke.getStringUnitWidth = function(t, e) {
							var n = (e = e || {}).fontSize || this.internal.getFontSize(),
								r = e.font || this.internal.getFont(),
								i = e.charSpace || this.internal.getCharSpace();
							return ke.processArabic && (t = ke.processArabic(t)), "function" == typeof r.metadata.widthOfString ? r.metadata.widthOfString(t, n, i) / n : Fe.apply(this, arguments).reduce((function(t, e) {
								return t + e
							}), 0)
						}, Ce = function(t, e, n, r) {
							for (var i = [], o = 0, a = t.length, s = 0; o !== a && s + e[o] < n;) s += e[o], o++;
							i.push(t.slice(0, o));
							var c = o;
							for (s = 0; o !== a;) s + e[o] > r && (i.push(t.slice(c, o)), s = 0, c = o), s += e[o], o++;
							return c !== o && i.push(t.slice(c, o)), i
						}, je = function(t, e, n) {
							n || (n = {});
							var r, i, o, a, s, c, u, l = [],
								h = [l],
								f = n.textIndent || 0,
								d = 0,
								p = 0,
								g = t.split(" "),
								v = Fe.apply(this, [" ", n])[0];
							if (c = -1 === n.lineIndent ? g[0].length + 2 : n.lineIndent || 0) {
								var m = Array(c).join(" "),
									b = [];
								g.map((function(t) {
									(t = t.split(/\s*\n/)).length > 1 ? b = b.concat(t.map((function(t, e) {
										return (e && t.length ? "\n" : "") + t
									}))) : b.push(t[0])
								})), g = b, c = Ie.apply(this, [m, n])
							}
							for (o = 0, a = g.length; o < a; o++) {
								var y = 0;
								if (r = g[o], c && "\n" == r[0] && (r = r.substr(1), y = 1), f + d + (p = (i = Fe.apply(this, [r, n])).reduce((function(t, e) {
										return t + e
									}), 0)) > e || y) {
									if (p > e) {
										for (s = Ce.apply(this, [r, i, e - (f + d), e]), l.push(s.shift()), l = [s.pop()]; s.length;) h.push([s.shift()]);
										p = i.slice(r.length - (l[0] ? l[0].length : 0)).reduce((function(t, e) {
											return t + e
										}), 0)
									} else l = [r];
									h.push(l), f = p + c, d = v
								} else l.push(r), f += d + p, d = v
							}
							return u = c ? function(t, e) {
								return (e ? m : "") + t.join(" ")
							} : function(t) {
								return t.join(" ")
							}, h.map(u)
						}, ke.splitTextToSize = function(t, e, n) {
							var r, i = (n = n || {}).fontSize || this.internal.getFontSize(),
								o = function(t) {
									if (t.widths && t.kerning) return {
										widths: t.widths,
										kerning: t.kerning
									};
									var e = this.internal.getFont(t.fontName, t.fontStyle);
									return e.metadata.Unicode ? {
										widths: e.metadata.Unicode.widths || {
											0: 1
										},
										kerning: e.metadata.Unicode.kerning || {}
									} : {
										font: e.metadata,
										fontSize: this.internal.getFontSize(),
										charSpace: this.internal.getCharSpace()
									}
								}.call(this, n);
							r = Array.isArray(t) ? t : String(t).split(/\r?\n/);
							var a = 1 * this.internal.scaleFactor * e / i;
							o.textIndent = n.textIndent ? 1 * n.textIndent * this.internal.scaleFactor / i : 0, o.lineIndent = n.lineIndent;
							var s, c, u = [];
							for (s = 0, c = r.length; s < c; s++) u = u.concat(je.apply(this, [r[s], a, o]));
							return u
						},
						function(t) {
							t.__fontmetrics__ = t.__fontmetrics__ || {};
							for (var e = "klmnopqrstuvwxyz", n = {}, r = {}, i = 0; i < e.length; i++) n[e[i]] = "0123456789abcdef" [i], r["0123456789abcdef" [i]] = e[i];
							var o = function(t) {
									return "0x" + parseInt(t, 10).toString(16)
								},
								a = t.__fontmetrics__.compress = function(t) {
									var e, n, i, s, c = ["{"];
									for (var u in t) {
										if (e = t[u], isNaN(parseInt(u, 10)) ? n = "'" + u + "'" : (u = parseInt(u, 10), n = (n = o(u).slice(2)).slice(0, -1) + r[n.slice(-1)]), "number" == typeof e) e < 0 ? (i = o(e).slice(3), s = "-") : (i = o(e).slice(2), s = ""), i = s + i.slice(0, -1) + r[i.slice(-1)];
										else {
											if ("object" != typeof e) throw new Error("Don't know what to do with value type " + typeof e + ".");
											i = a(e)
										}
										c.push(n + i)
									}
									return c.push("}"), c.join("")
								},
								s = t.__fontmetrics__.uncompress = function(t) {
									if ("string" != typeof t) throw new Error("Invalid argument passed to uncompress.");
									for (var e, r, i, o, a = {}, s = 1, c = a, u = [], l = "", h = "", f = t.length - 1, d = 1; d < f; d += 1) "'" == (o = t[d]) ? e ? (i = e.join(""), e = void 0) : e = [] : e ? e.push(o) : "{" == o ? (u.push([c, i]), c = {}, i = void 0) : "}" == o ? ((r = u.pop())[0][r[1]] = c, i = void 0, c = r[0]) : "-" == o ? s = -1 : void 0 === i ? n.hasOwnProperty(o) ? (l += n[o], i = parseInt(l, 16) * s, s = 1, l = "") : l += o : n.hasOwnProperty(o) ? (h += n[o], c[i] = parseInt(h, 16) * s, s = 1, i = void 0, h = "") : h += o;
									return a
								},
								c = {
									codePages: ["WinAnsiEncoding"],
									WinAnsiEncoding: s("{19m8n201n9q201o9r201s9l201t9m201u8m201w9n201x9o201y8o202k8q202l8r202m9p202q8p20aw8k203k8t203t8v203u9v2cq8s212m9t15m8w15n9w2dw9s16k8u16l9u17s9z17x8y17y9y}")
								},
								u = {
									Unicode: {
										Courier: c,
										"Courier-Bold": c,
										"Courier-BoldOblique": c,
										"Courier-Oblique": c,
										Helvetica: c,
										"Helvetica-Bold": c,
										"Helvetica-BoldOblique": c,
										"Helvetica-Oblique": c,
										"Times-Roman": c,
										"Times-Bold": c,
										"Times-BoldItalic": c,
										"Times-Italic": c
									}
								},
								l = {
									Unicode: {
										"Courier-Oblique": s("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),
										"Times-BoldItalic": s("{'widths'{k3o2q4ycx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2r202m2n2n3m2o3m2p5n202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5n4l4m4m4m4n4m4o4s4p4m4q4m4r4s4s4y4t2r4u3m4v4m4w3x4x5t4y4s4z4s5k3x5l4s5m4m5n3r5o3x5p4s5q4m5r5t5s4m5t3x5u3x5v2l5w1w5x2l5y3t5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q2l6r3m6s3r6t1w6u1w6v3m6w1w6x4y6y3r6z3m7k3m7l3m7m2r7n2r7o1w7p3r7q2w7r4m7s3m7t2w7u2r7v2n7w1q7x2n7y3t202l3mcl4mal2ram3man3mao3map3mar3mas2lat4uau1uav3maw3way4uaz2lbk2sbl3t'fof'6obo2lbp3tbq3mbr1tbs2lbu1ybv3mbz3mck4m202k3mcm4mcn4mco4mcp4mcq5ycr4mcs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz2w203k6o212m6o2dw2l2cq2l3t3m3u2l17s3x19m3m}'kerning'{cl{4qu5kt5qt5rs17ss5ts}201s{201ss}201t{cks4lscmscnscoscpscls2wu2yu201ts}201x{2wu2yu}2k{201ts}2w{4qx5kx5ou5qx5rs17su5tu}2x{17su5tu5ou}2y{4qx5kx5ou5qx5rs17ss5ts}'fof'-6ofn{17sw5tw5ou5qw5rs}7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qs}3v{17su5tu5os5qs}7p{17su5tu}ck{4qu5kt5qt5rs17ss5ts}4l{4qu5kt5qt5rs17ss5ts}cm{4qu5kt5qt5rs17ss5ts}cn{4qu5kt5qt5rs17ss5ts}co{4qu5kt5qt5rs17ss5ts}cp{4qu5kt5qt5rs17ss5ts}6l{4qu5ou5qw5rt17su5tu}5q{ckuclucmucnucoucpu4lu}5r{ckuclucmucnucoucpu4lu}7q{cksclscmscnscoscps4ls}6p{4qu5ou5qw5rt17sw5tw}ek{4qu5ou5qw5rt17su5tu}el{4qu5ou5qw5rt17su5tu}em{4qu5ou5qw5rt17su5tu}en{4qu5ou5qw5rt17su5tu}eo{4qu5ou5qw5rt17su5tu}ep{4qu5ou5qw5rt17su5tu}es{17ss5ts5qs4qu}et{4qu5ou5qw5rt17sw5tw}eu{4qu5ou5qw5rt17ss5ts}ev{17ss5ts5qs4qu}6z{17sw5tw5ou5qw5rs}fm{17sw5tw5ou5qw5rs}7n{201ts}fo{17sw5tw5ou5qw5rs}fp{17sw5tw5ou5qw5rs}fq{17sw5tw5ou5qw5rs}7r{cksclscmscnscoscps4ls}fs{17sw5tw5ou5qw5rs}ft{17su5tu}fu{17su5tu}fv{17su5tu}fw{17su5tu}fz{cksclscmscnscoscps4ls}}}"),
										"Helvetica-Bold": s("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"),
										Courier: s("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),
										"Courier-BoldOblique": s("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),
										"Times-Bold": s("{'widths'{k3q2q5ncx2r201n3m201o6o201s2l201t2l201u2l201w3m201x3m201y3m2k1t2l2l202m2n2n3m2o3m2p6o202q6o2r1w2s2l2t2l2u3m2v3t2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w3t3x3t3y3t3z3m4k5x4l4s4m4m4n4s4o4s4p4m4q3x4r4y4s4y4t2r4u3m4v4y4w4m4x5y4y4s4z4y5k3x5l4y5m4s5n3r5o4m5p4s5q4s5r6o5s4s5t4s5u4m5v2l5w1w5x2l5y3u5z3m6k2l6l3m6m3r6n2w6o3r6p2w6q2l6r3m6s3r6t1w6u2l6v3r6w1w6x5n6y3r6z3m7k3r7l3r7m2w7n2r7o2l7p3r7q3m7r4s7s3m7t3m7u2w7v2r7w1q7x2r7y3o202l3mcl4sal2lam3man3mao3map3mar3mas2lat4uau1yav3maw3tay4uaz2lbk2sbl3t'fof'6obo2lbp3rbr1tbs2lbu2lbv3mbz3mck4s202k3mcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw2r2m3rcy2rcz2rdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3rek3mel3mem3men3meo3mep3meq4ser2wes2wet2weu2wev2wew1wex1wey1wez1wfl3rfm3mfn3mfo3mfp3mfq3mfr3tfs3mft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3m3u2l17s4s19m3m}'kerning'{cl{4qt5ks5ot5qy5rw17sv5tv}201t{cks4lscmscnscoscpscls4wv}2k{201ts}2w{4qu5ku7mu5os5qx5ru17su5tu}2x{17su5tu5ou5qs}2y{4qv5kv7mu5ot5qz5ru17su5tu}'fof'-6o7t{cksclscmscnscoscps4ls}3u{17su5tu5os5qu}3v{17su5tu5os5qu}fu{17su5tu5ou5qu}7p{17su5tu5ou5qu}ck{4qt5ks5ot5qy5rw17sv5tv}4l{4qt5ks5ot5qy5rw17sv5tv}cm{4qt5ks5ot5qy5rw17sv5tv}cn{4qt5ks5ot5qy5rw17sv5tv}co{4qt5ks5ot5qy5rw17sv5tv}cp{4qt5ks5ot5qy5rw17sv5tv}6l{17st5tt5ou5qu}17s{ckuclucmucnucoucpu4lu4wu}5o{ckuclucmucnucoucpu4lu4wu}5q{ckzclzcmzcnzcozcpz4lz4wu}5r{ckxclxcmxcnxcoxcpx4lx4wu}5t{ckuclucmucnucoucpu4lu4wu}7q{ckuclucmucnucoucpu4lu}6p{17sw5tw5ou5qu}ek{17st5tt5qu}el{17st5tt5ou5qu}em{17st5tt5qu}en{17st5tt5qu}eo{17st5tt5qu}ep{17st5tt5ou5qu}es{17ss5ts5qu}et{17sw5tw5ou5qu}eu{17sw5tw5ou5qu}ev{17ss5ts5qu}6z{17sw5tw5ou5qu5rs}fm{17sw5tw5ou5qu5rs}fn{17sw5tw5ou5qu5rs}fo{17sw5tw5ou5qu5rs}fp{17sw5tw5ou5qu5rs}fq{17sw5tw5ou5qu5rs}7r{cktcltcmtcntcotcpt4lt5os}fs{17sw5tw5ou5qu5rs}ft{17su5tu5ou5qu}7m{5os}fv{17su5tu5ou5qu}fw{17su5tu5ou5qu}fz{cksclscmscnscoscps4ls}}}"),
										Symbol: s("{'widths'{k3uaw4r19m3m2k1t2l2l202m2y2n3m2p5n202q6o3k3m2s2l2t2l2v3r2w1t3m3m2y1t2z1wbk2sbl3r'fof'6o3n3m3o3m3p3m3q3m3r3m3s3m3t3m3u1w3v1w3w3r3x3r3y3r3z2wbp3t3l3m5v2l5x2l5z3m2q4yfr3r7v3k7w1o7x3k}'kerning'{'fof'-6o}}"),
										Helvetica: s("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}"),
										"Helvetica-BoldOblique": s("{'widths'{k3s2q4scx1w201n3r201o6o201s1w201t1w201u1w201w3m201x3m201y3m2k1w2l2l202m2n2n3r2o3r2p5t202q6o2r1s2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v2l3w3u3x3u3y3u3z3x4k6l4l4s4m4s4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3r4v4s4w3x4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v2l5w1w5x2l5y3u5z3r6k2l6l3r6m3x6n3r6o3x6p3r6q2l6r3x6s3x6t1w6u1w6v3r6w1w6x5t6y3x6z3x7k3x7l3x7m2r7n3r7o2l7p3x7q3r7r4y7s3r7t3r7u3m7v2r7w1w7x2r7y3u202l3rcl4sal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3xbq3rbr1wbs2lbu2obv3rbz3xck4s202k3rcm4scn4sco4scp4scq6ocr4scs4mct4mcu4mcv4mcw1w2m2zcy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3res3ret3reu3rev3rew1wex1wey1wez1wfl3xfm3xfn3xfo3xfp3xfq3xfr3ufs3xft3xfu3xfv3xfw3xfz3r203k6o212m6o2dw2l2cq2l3t3r3u2l17s4m19m3r}'kerning'{cl{4qs5ku5ot5qs17sv5tv}201t{2ww4wy2yw}201w{2ks}201x{2ww4wy2yw}2k{201ts201xs}2w{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}2x{5ow5qs}2y{7qs4qu5kw5os5qw5rs17su5tu7tsfzs}'fof'-6o7p{17su5tu5ot}ck{4qs5ku5ot5qs17sv5tv}4l{4qs5ku5ot5qs17sv5tv}cm{4qs5ku5ot5qs17sv5tv}cn{4qs5ku5ot5qs17sv5tv}co{4qs5ku5ot5qs17sv5tv}cp{4qs5ku5ot5qs17sv5tv}6l{17st5tt5os}17s{2kwclvcmvcnvcovcpv4lv4wwckv}5o{2kucltcmtcntcotcpt4lt4wtckt}5q{2ksclscmscnscoscps4ls4wvcks}5r{2ks4ws}5t{2kwclvcmvcnvcovcpv4lv4wwckv}eo{17st5tt5os}fu{17su5tu5ot}6p{17ss5ts}ek{17st5tt5os}el{17st5tt5os}em{17st5tt5os}en{17st5tt5os}6o{201ts}ep{17st5tt5os}es{17ss5ts}et{17ss5ts}eu{17ss5ts}ev{17ss5ts}6z{17su5tu5os5qt}fm{17su5tu5os5qt}fn{17su5tu5os5qt}fo{17su5tu5os5qt}fp{17su5tu5os5qt}fq{17su5tu5os5qt}fs{17su5tu5os5qt}ft{17su5tu5ot}7m{5os}fv{17su5tu5ot}fw{17su5tu5ot}}}"),
										ZapfDingbats: s("{'widths'{k4u2k1w'fof'6o}'kerning'{'fof'-6o}}"),
										"Courier-Bold": s("{'widths'{k3w'fof'6o}'kerning'{'fof'-6o}}"),
										"Times-Italic": s("{'widths'{k3n2q4ycx2l201n3m201o5t201s2l201t2l201u2l201w3r201x3r201y3r2k1t2l2l202m2n2n3m2o3m2p5n202q5t2r1p2s2l2t2l2u3m2v4n2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v2l3w4n3x4n3y4n3z3m4k5w4l3x4m3x4n4m4o4s4p3x4q3x4r4s4s4s4t2l4u2w4v4m4w3r4x5n4y4m4z4s5k3x5l4s5m3x5n3m5o3r5p4s5q3x5r5n5s3x5t3r5u3r5v2r5w1w5x2r5y2u5z3m6k2l6l3m6m3m6n2w6o3m6p2w6q1w6r3m6s3m6t1w6u1w6v2w6w1w6x4s6y3m6z3m7k3m7l3m7m2r7n2r7o1w7p3m7q2w7r4m7s2w7t2w7u2r7v2s7w1v7x2s7y3q202l3mcl3xal2ram3man3mao3map3mar3mas2lat4wau1vav3maw4nay4waz2lbk2sbl4n'fof'6obo2lbp3mbq3obr1tbs2lbu1zbv3mbz3mck3x202k3mcm3xcn3xco3xcp3xcq5tcr4mcs3xct3xcu3xcv3xcw2l2m2ucy2lcz2ldl4mdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek3mel3mem3men3meo3mep3meq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr4nfs3mft3mfu3mfv3mfw3mfz2w203k6o212m6m2dw2l2cq2l3t3m3u2l17s3r19m3m}'kerning'{cl{5kt4qw}201s{201sw}201t{201tw2wy2yy6q-t}201x{2wy2yy}2k{201tw}2w{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}2x{17ss5ts5os}2y{7qs4qy7rs5ky7mw5os5qx5ru17su5tu}'fof'-6o6t{17ss5ts5qs}7t{5os}3v{5qs}7p{17su5tu5qs}ck{5kt4qw}4l{5kt4qw}cm{5kt4qw}cn{5kt4qw}co{5kt4qw}cp{5kt4qw}6l{4qs5ks5ou5qw5ru17su5tu}17s{2ks}5q{ckvclvcmvcnvcovcpv4lv}5r{ckuclucmucnucoucpu4lu}5t{2ks}6p{4qs5ks5ou5qw5ru17su5tu}ek{4qs5ks5ou5qw5ru17su5tu}el{4qs5ks5ou5qw5ru17su5tu}em{4qs5ks5ou5qw5ru17su5tu}en{4qs5ks5ou5qw5ru17su5tu}eo{4qs5ks5ou5qw5ru17su5tu}ep{4qs5ks5ou5qw5ru17su5tu}es{5ks5qs4qs}et{4qs5ks5ou5qw5ru17su5tu}eu{4qs5ks5qw5ru17su5tu}ev{5ks5qs4qs}ex{17ss5ts5qs}6z{4qv5ks5ou5qw5ru17su5tu}fm{4qv5ks5ou5qw5ru17su5tu}fn{4qv5ks5ou5qw5ru17su5tu}fo{4qv5ks5ou5qw5ru17su5tu}fp{4qv5ks5ou5qw5ru17su5tu}fq{4qv5ks5ou5qw5ru17su5tu}7r{5os}fs{4qv5ks5ou5qw5ru17su5tu}ft{17su5tu5qs}fu{17su5tu5qs}fv{17su5tu5qs}fw{17su5tu5qs}}}"),
										"Times-Roman": s("{'widths'{k3n2q4ycx2l201n3m201o6o201s2l201t2l201u2l201w2w201x2w201y2w2k1t2l2l202m2n2n3m2o3m2p5n202q6o2r1m2s2l2t2l2u3m2v3s2w1t2x2l2y1t2z1w3k3m3l3m3m3m3n3m3o3m3p3m3q3m3r3m3s3m203t2l203u2l3v1w3w3s3x3s3y3s3z2w4k5w4l4s4m4m4n4m4o4s4p3x4q3r4r4s4s4s4t2l4u2r4v4s4w3x4x5t4y4s4z4s5k3r5l4s5m4m5n3r5o3x5p4s5q4s5r5y5s4s5t4s5u3x5v2l5w1w5x2l5y2z5z3m6k2l6l2w6m3m6n2w6o3m6p2w6q2l6r3m6s3m6t1w6u1w6v3m6w1w6x4y6y3m6z3m7k3m7l3m7m2l7n2r7o1w7p3m7q3m7r4s7s3m7t3m7u2w7v3k7w1o7x3k7y3q202l3mcl4sal2lam3man3mao3map3mar3mas2lat4wau1vav3maw3say4waz2lbk2sbl3s'fof'6obo2lbp3mbq2xbr1tbs2lbu1zbv3mbz2wck4s202k3mcm4scn4sco4scp4scq5tcr4mcs3xct3xcu3xcv3xcw2l2m2tcy2lcz2ldl4sdm4sdn4sdo4sdp4sdq4sds4sdt4sdu4sdv4sdw4sdz3mek2wel2wem2wen2weo2wep2weq4mer2wes2wet2weu2wev2wew1wex1wey1wez1wfl3mfm3mfn3mfo3mfp3mfq3mfr3sfs3mft3mfu3mfv3mfw3mfz3m203k6o212m6m2dw2l2cq2l3t3m3u1w17s4s19m3m}'kerning'{cl{4qs5ku17sw5ou5qy5rw201ss5tw201ws}201s{201ss}201t{ckw4lwcmwcnwcowcpwclw4wu201ts}2k{201ts}2w{4qs5kw5os5qx5ru17sx5tx}2x{17sw5tw5ou5qu}2y{4qs5kw5os5qx5ru17sx5tx}'fof'-6o7t{ckuclucmucnucoucpu4lu5os5rs}3u{17su5tu5qs}3v{17su5tu5qs}7p{17sw5tw5qs}ck{4qs5ku17sw5ou5qy5rw201ss5tw201ws}4l{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cm{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cn{4qs5ku17sw5ou5qy5rw201ss5tw201ws}co{4qs5ku17sw5ou5qy5rw201ss5tw201ws}cp{4qs5ku17sw5ou5qy5rw201ss5tw201ws}6l{17su5tu5os5qw5rs}17s{2ktclvcmvcnvcovcpv4lv4wuckv}5o{ckwclwcmwcnwcowcpw4lw4wu}5q{ckyclycmycnycoycpy4ly4wu5ms}5r{cktcltcmtcntcotcpt4lt4ws}5t{2ktclvcmvcnvcovcpv4lv4wuckv}7q{cksclscmscnscoscps4ls}6p{17su5tu5qw5rs}ek{5qs5rs}el{17su5tu5os5qw5rs}em{17su5tu5os5qs5rs}en{17su5qs5rs}eo{5qs5rs}ep{17su5tu5os5qw5rs}es{5qs}et{17su5tu5qw5rs}eu{17su5tu5qs5rs}ev{5qs}6z{17sv5tv5os5qx5rs}fm{5os5qt5rs}fn{17sv5tv5os5qx5rs}fo{17sv5tv5os5qx5rs}fp{5os5qt5rs}fq{5os5qt5rs}7r{ckuclucmucnucoucpu4lu5os}fs{17sv5tv5os5qx5rs}ft{17ss5ts5qs}fu{17sw5tw5qs}fv{17sw5tw5qs}fw{17ss5ts5qs}fz{ckuclucmucnucoucpu4lu5os5rs}}}"),
										"Helvetica-Oblique": s("{'widths'{k3p2q4mcx1w201n3r201o6o201s1q201t1q201u1q201w2l201x2l201y2l2k1w2l1w202m2n2n3r2o3r2p5t202q6o2r1n2s2l2t2l2u2r2v3u2w1w2x2l2y1w2z1w3k3r3l3r3m3r3n3r3o3r3p3r3q3r3r3r3s3r203t2l203u2l3v1w3w3u3x3u3y3u3z3r4k6p4l4m4m4m4n4s4o4s4p4m4q3x4r4y4s4s4t1w4u3m4v4m4w3r4x5n4y4s4z4y5k4m5l4y5m4s5n4m5o3x5p4s5q4m5r5y5s4m5t4m5u3x5v1w5w1w5x1w5y2z5z3r6k2l6l3r6m3r6n3m6o3r6p3r6q1w6r3r6s3r6t1q6u1q6v3m6w1q6x5n6y3r6z3r7k3r7l3r7m2l7n3m7o1w7p3r7q3m7r4s7s3m7t3m7u3m7v2l7w1u7x2l7y3u202l3rcl4mal2lam3ran3rao3rap3rar3ras2lat4tau2pav3raw3uay4taz2lbk2sbl3u'fof'6obo2lbp3rbr1wbs2lbu2obv3rbz3xck4m202k3rcm4mcn4mco4mcp4mcq6ocr4scs4mct4mcu4mcv4mcw1w2m2ncy1wcz1wdl4sdm4ydn4ydo4ydp4ydq4yds4ydt4sdu4sdv4sdw4sdz3xek3rel3rem3ren3reo3rep3req5ter3mes3ret3reu3rev3rew1wex1wey1wez1wfl3rfm3rfn3rfo3rfp3rfq3rfr3ufs3xft3rfu3rfv3rfw3rfz3m203k6o212m6o2dw2l2cq2l3t3r3u1w17s4m19m3r}'kerning'{5q{4wv}cl{4qs5kw5ow5qs17sv5tv}201t{2wu4w1k2yu}201x{2wu4wy2yu}17s{2ktclucmucnu4otcpu4lu4wycoucku}2w{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}2x{17sy5ty5oy5qs}2y{7qs4qz5k1m17sy5ow5qx5rsfsu5ty7tufzu}'fof'-6o7p{17sv5tv5ow}ck{4qs5kw5ow5qs17sv5tv}4l{4qs5kw5ow5qs17sv5tv}cm{4qs5kw5ow5qs17sv5tv}cn{4qs5kw5ow5qs17sv5tv}co{4qs5kw5ow5qs17sv5tv}cp{4qs5kw5ow5qs17sv5tv}6l{17sy5ty5ow}do{17st5tt}4z{17st5tt}7s{fst}dm{17st5tt}dn{17st5tt}5o{ckwclwcmwcnwcowcpw4lw4wv}dp{17st5tt}dq{17st5tt}7t{5ow}ds{17st5tt}5t{2ktclucmucnu4otcpu4lu4wycoucku}fu{17sv5tv5ow}6p{17sy5ty5ow5qs}ek{17sy5ty5ow}el{17sy5ty5ow}em{17sy5ty5ow}en{5ty}eo{17sy5ty5ow}ep{17sy5ty5ow}es{17sy5ty5qs}et{17sy5ty5ow5qs}eu{17sy5ty5ow5qs}ev{17sy5ty5ow5qs}6z{17sy5ty5ow5qs}fm{17sy5ty5ow5qs}fn{17sy5ty5ow5qs}fo{17sy5ty5ow5qs}fp{17sy5ty5qs}fq{17sy5ty5ow5qs}7r{5ow}fs{17sy5ty5ow5qs}ft{17sv5tv5ow}7m{5ow}fv{17sv5tv5ow}fw{17sv5tv5ow}}}")
									}
								};
							t.events.push(["addFont", function(t) {
								var e = t.font,
									n = l.Unicode[e.postScriptName];
								n && (e.metadata.Unicode = {}, e.metadata.Unicode.widths = n.widths, e.metadata.Unicode.kerning = n.kerning);
								var r = u.Unicode[e.postScriptName];
								r && (e.metadata.Unicode.encoding = r, e.encoding = r.codePages[0])
							}])
						}(Nt.API),
						function(t) {
							var e = function(t) {
								for (var e = t.length, n = new Uint8Array(e), r = 0; r < e; r++) n[r] = t.charCodeAt(r);
								return n
							};
							t.API.events.push(["addFont", function(n) {
								var r = void 0,
									i = n.font,
									o = n.instance;
								if (!i.isStandardFont) {
									if (void 0 === o) throw new Error("Font does not exist in vFS, import fonts or remove declaration doc.addFont('" + i.postScriptName + "').");
									if ("string" != typeof(r = !1 === o.existsFileInVFS(i.postScriptName) ? o.loadFile(i.postScriptName) : o.getFileFromVFS(i.postScriptName))) throw new Error("Font is not stored as string-data in vFS, import fonts or remove declaration doc.addFont('" + i.postScriptName + "').");
									! function(n, r) {
										r = /^\x00\x01\x00\x00/.test(r) ? e(r) : e(K(r)), n.metadata = t.API.TTFFont.open(r), n.metadata.Unicode = n.metadata.Unicode || {
											encoding: {},
											kerning: {},
											widths: []
										}, n.metadata.glyIdsUsed = [0]
									}(i, r)
								}
							}])
						}(Nt),
						function(t) {
							function e() {
								return (W.canvg ? Promise.resolve(W.canvg) : n.e(608).then(n.bind(n, 1608))).catch((function(t) {
									return Promise.reject(new Error("Could not load canvg: " + t))
								})).then((function(t) {
									return t.default ? t.default : t
								}))
							}
							Nt.API.addSvgAsImage = function(t, n, r, i, o, a, s, c) {
								if (isNaN(n) || isNaN(r)) throw G.error("jsPDF.addSvgAsImage: Invalid coordinates", arguments), new Error("Invalid coordinates passed to jsPDF.addSvgAsImage");
								if (isNaN(i) || isNaN(o)) throw G.error("jsPDF.addSvgAsImage: Invalid measurements", arguments), new Error("Invalid measurements (width and/or height) passed to jsPDF.addSvgAsImage");
								var u = document.createElement("canvas");
								u.width = i, u.height = o;
								var l = u.getContext("2d");
								l.fillStyle = "#fff", l.fillRect(0, 0, u.width, u.height);
								var h = {
										ignoreMouse: !0,
										ignoreAnimation: !0,
										ignoreDimensions: !0
									},
									f = this;
								return e().then((function(e) {
									return e.fromString(l, t, h)
								}), (function() {
									return Promise.reject(new Error("Could not load canvg."))
								})).then((function(t) {
									return t.render(h)
								})).then((function() {
									f.addImage(u.toDataURL("image/jpeg", 1), n, r, i, o, s, c)
								}))
							}
						}(), Nt.API.putTotalPages = function(t) {
							var e, n = 0;
							parseInt(this.internal.getFont().id.substr(1), 10) < 15 ? (e = new RegExp(t, "g"), n = this.internal.getNumberOfPages()) : (e = new RegExp(this.pdfEscape16(t, this.internal.getFont()), "g"), n = this.pdfEscape16(this.internal.getNumberOfPages() + "", this.internal.getFont()));
							for (var r = 1; r <= this.internal.getNumberOfPages(); r++)
								for (var i = 0; i < this.internal.pages[r].length; i++) this.internal.pages[r][i] = this.internal.pages[r][i].replace(e, n);
							return this
						}, Nt.API.viewerPreferences = function(t, e) {
							var n;
							t = t || {}, e = e || !1;
							var r, i, o, a = {
									HideToolbar: {
										defaultValue: !1,
										value: !1,
										type: "boolean",
										explicitSet: !1,
										valueSet: [!0, !1],
										pdfVersion: 1.3
									},
									HideMenubar: {
										defaultValue: !1,
										value: !1,
										type: "boolean",
										explicitSet: !1,
										valueSet: [!0, !1],
										pdfVersion: 1.3
									},
									HideWindowUI: {
										defaultValue: !1,
										value: !1,
										type: "boolean",
										explicitSet: !1,
										valueSet: [!0, !1],
										pdfVersion: 1.3
									},
									FitWindow: {
										defaultValue: !1,
										value: !1,
										type: "boolean",
										explicitSet: !1,
										valueSet: [!0, !1],
										pdfVersion: 1.3
									},
									CenterWindow: {
										defaultValue: !1,
										value: !1,
										type: "boolean",
										explicitSet: !1,
										valueSet: [!0, !1],
										pdfVersion: 1.3
									},
									DisplayDocTitle: {
										defaultValue: !1,
										value: !1,
										type: "boolean",
										explicitSet: !1,
										valueSet: [!0, !1],
										pdfVersion: 1.4
									},
									NonFullScreenPageMode: {
										defaultValue: "UseNone",
										value: "UseNone",
										type: "name",
										explicitSet: !1,
										valueSet: ["UseNone", "UseOutlines", "UseThumbs", "UseOC"],
										pdfVersion: 1.3
									},
									Direction: {
										defaultValue: "L2R",
										value: "L2R",
										type: "name",
										explicitSet: !1,
										valueSet: ["L2R", "R2L"],
										pdfVersion: 1.3
									},
									ViewArea: {
										defaultValue: "CropBox",
										value: "CropBox",
										type: "name",
										explicitSet: !1,
										valueSet: ["MediaBox", "CropBox", "TrimBox", "BleedBox", "ArtBox"],
										pdfVersion: 1.4
									},
									ViewClip: {
										defaultValue: "CropBox",
										value: "CropBox",
										type: "name",
										explicitSet: !1,
										valueSet: ["MediaBox", "CropBox", "TrimBox", "BleedBox", "ArtBox"],
										pdfVersion: 1.4
									},
									PrintArea: {
										defaultValue: "CropBox",
										value: "CropBox",
										type: "name",
										explicitSet: !1,
										valueSet: ["MediaBox", "CropBox", "TrimBox", "BleedBox", "ArtBox"],
										pdfVersion: 1.4
									},
									PrintClip: {
										defaultValue: "CropBox",
										value: "CropBox",
										type: "name",
										explicitSet: !1,
										valueSet: ["MediaBox", "CropBox", "TrimBox", "BleedBox", "ArtBox"],
										pdfVersion: 1.4
									},
									PrintScaling: {
										defaultValue: "AppDefault",
										value: "AppDefault",
										type: "name",
										explicitSet: !1,
										valueSet: ["AppDefault", "None"],
										pdfVersion: 1.6
									},
									Duplex: {
										defaultValue: "",
										value: "none",
										type: "name",
										explicitSet: !1,
										valueSet: ["Simplex", "DuplexFlipShortEdge", "DuplexFlipLongEdge", "none"],
										pdfVersion: 1.7
									},
									PickTrayByPDFSize: {
										defaultValue: !1,
										value: !1,
										type: "boolean",
										explicitSet: !1,
										valueSet: [!0, !1],
										pdfVersion: 1.7
									},
									PrintPageRange: {
										defaultValue: "",
										value: "",
										type: "array",
										explicitSet: !1,
										valueSet: null,
										pdfVersion: 1.7
									},
									NumCopies: {
										defaultValue: 1,
										value: 1,
										type: "integer",
										explicitSet: !1,
										valueSet: null,
										pdfVersion: 1.7
									}
								},
								s = Object.keys(a),
								c = [],
								u = 0,
								l = 0,
								h = 0;

							function f(t, e) {
								var n, r = !1;
								for (n = 0; n < t.length; n += 1) t[n] === e && (r = !0);
								return r
							}
							if (void 0 === this.internal.viewerpreferences && (this.internal.viewerpreferences = {}, this.internal.viewerpreferences.configuration = JSON.parse(JSON.stringify(a)), this.internal.viewerpreferences.isSubscribed = !1), n = this.internal.viewerpreferences.configuration, "reset" === t || !0 === e) {
								var d = s.length;
								for (h = 0; h < d; h += 1) n[s[h]].value = n[s[h]].defaultValue, n[s[h]].explicitSet = !1
							}
							if ("object" == typeof t)
								for (i in t)
									if (o = t[i], f(s, i) && void 0 !== o) {
										if ("boolean" === n[i].type && "boolean" == typeof o) n[i].value = o;
										else if ("name" === n[i].type && f(n[i].valueSet, o)) n[i].value = o;
										else if ("integer" === n[i].type && Number.isInteger(o)) n[i].value = o;
										else if ("array" === n[i].type) {
											for (u = 0; u < o.length; u += 1)
												if (r = !0, 1 === o[u].length && "number" == typeof o[u][0]) c.push(String(o[u] - 1));
												else if (o[u].length > 1) {
												for (l = 0; l < o[u].length; l += 1) "number" != typeof o[u][l] && (r = !1);
												!0 === r && c.push([o[u][0] - 1, o[u][1] - 1].join(" "))
											}
											n[i].value = "[" + c.join(" ") + "]"
										} else n[i].value = n[i].defaultValue;
										n[i].explicitSet = !0
									} return !1 === this.internal.viewerpreferences.isSubscribed && (this.internal.events.subscribe("putCatalog", (function() {
								var t, e = [];
								for (t in n) !0 === n[t].explicitSet && ("name" === n[t].type ? e.push("/" + t + " /" + n[t].value) : e.push("/" + t + " " + n[t].value));
								0 !== e.length && this.internal.write("/ViewerPreferences\n<<\n" + e.join("\n") + "\n>>")
							})), this.internal.viewerpreferences.isSubscribed = !0), this.internal.viewerpreferences.configuration = n, this
						},
						function(t) {
							var e = function() {
									var t = '<rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"><rdf:Description rdf:about="" xmlns:jspdf="' + this.internal.__metadata__.namespaceuri + '"><jspdf:metadata>',
										e = unescape(encodeURIComponent('<x:xmpmeta xmlns:x="adobe:ns:meta/">')),
										n = unescape(encodeURIComponent(t)),
										r = unescape(encodeURIComponent(this.internal.__metadata__.metadata)),
										i = unescape(encodeURIComponent("</jspdf:metadata></rdf:Description></rdf:RDF>")),
										o = unescape(encodeURIComponent("</x:xmpmeta>")),
										a = n.length + r.length + i.length + e.length + o.length;
									this.internal.__metadata__.metadata_object_number = this.internal.newObject(), this.internal.write("<< /Type /Metadata /Subtype /XML /Length " + a + " >>"), this.internal.write("stream"), this.internal.write(e + n + r + i + o), this.internal.write("endstream"), this.internal.write("endobj")
								},
								n = function() {
									this.internal.__metadata__.metadata_object_number && this.internal.write("/Metadata " + this.internal.__metadata__.metadata_object_number + " 0 R")
								};
							t.addMetadata = function(t, r) {
								return void 0 === this.internal.__metadata__ && (this.internal.__metadata__ = {
									metadata: t,
									namespaceuri: r || "http://jspdf.default.namespaceuri/"
								}, this.internal.events.subscribe("putCatalog", n), this.internal.events.subscribe("postPutResources", e)), this
							}
						}(Nt.API),
						function(t) {
							var e = t.API,
								n = e.pdfEscape16 = function(t, e) {
									for (var n, r = e.metadata.Unicode.widths, i = ["", "0", "00", "000", "0000"], o = [""], a = 0, s = t.length; a < s; ++a) {
										if (n = e.metadata.characterToGlyph(t.charCodeAt(a)), e.metadata.glyIdsUsed.push(n), e.metadata.toUnicode[n] = t.charCodeAt(a), -1 == r.indexOf(n) && (r.push(n), r.push([parseInt(e.metadata.widthOfGlyph(n), 10)])), "0" == n) return o.join("");
										n = n.toString(16), o.push(i[4 - n.length], n)
									}
									return o.join("")
								},
								r = function(t) {
									var e, n, r, i, o, a, s;
									for (o = "/CIDInit /ProcSet findresource begin\n12 dict begin\nbegincmap\n/CIDSystemInfo <<\n  /Registry (Adobe)\n  /Ordering (UCS)\n  /Supplement 0\n>> def\n/CMapName /Adobe-Identity-UCS def\n/CMapType 2 def\n1 begincodespacerange\n<0000><ffff>\nendcodespacerange", r = [], a = 0, s = (n = Object.keys(t).sort((function(t, e) {
											return t - e
										}))).length; a < s; a++) e = n[a], r.length >= 100 && (o += "\n" + r.length + " beginbfchar\n" + r.join("\n") + "\nendbfchar", r = []), void 0 !== t[e] && null !== t[e] && "function" == typeof t[e].toString && (i = ("0000" + t[e].toString(16)).slice(-4), e = ("0000" + (+e).toString(16)).slice(-4), r.push("<" + e + "><" + i + ">"));
									return r.length && (o += "\n" + r.length + " beginbfchar\n" + r.join("\n") + "\nendbfchar\n"), o + "endcmap\nCMapName currentdict /CMap defineresource pop\nend\nend"
								};
							e.events.push(["putFont", function(e) {
								! function(e) {
									var n = e.font,
										i = e.out,
										o = e.newObject,
										a = e.putStream,
										s = e.pdfEscapeWithNeededParanthesis;
									if (n.metadata instanceof t.API.TTFFont && "Identity-H" === n.encoding) {
										for (var c = n.metadata.Unicode.widths, u = n.metadata.subset.encode(n.metadata.glyIdsUsed, 1), l = "", h = 0; h < u.length; h++) l += String.fromCharCode(u[h]);
										var f = o();
										a({
											data: l,
											addLength1: !0,
											objectId: f
										}), i("endobj");
										var d = o();
										a({
											data: r(n.metadata.toUnicode),
											addLength1: !0,
											objectId: d
										}), i("endobj");
										var p = o();
										i("<<"), i("/Type /FontDescriptor"), i("/FontName /" + s(n.fontName)), i("/FontFile2 " + f + " 0 R"), i("/FontBBox " + t.API.PDFObject.convert(n.metadata.bbox)), i("/Flags " + n.metadata.flags), i("/StemV " + n.metadata.stemV), i("/ItalicAngle " + n.metadata.italicAngle), i("/Ascent " + n.metadata.ascender), i("/Descent " + n.metadata.decender), i("/CapHeight " + n.metadata.capHeight), i(">>"), i("endobj");
										var g = o();
										i("<<"), i("/Type /Font"), i("/BaseFont /" + s(n.fontName)), i("/FontDescriptor " + p + " 0 R"), i("/W " + t.API.PDFObject.convert(c)), i("/CIDToGIDMap /Identity"), i("/DW 1000"), i("/Subtype /CIDFontType2"), i("/CIDSystemInfo"), i("<<"), i("/Supplement 0"), i("/Registry (Adobe)"), i("/Ordering (" + n.encoding + ")"), i(">>"), i(">>"), i("endobj"), n.objectNumber = o(), i("<<"), i("/Type /Font"), i("/Subtype /Type0"), i("/ToUnicode " + d + " 0 R"), i("/BaseFont /" + s(n.fontName)), i("/Encoding /" + n.encoding), i("/DescendantFonts [" + g + " 0 R]"), i(">>"), i("endobj"), n.isAlreadyPutted = !0
									}
								}(e)
							}]), e.events.push(["putFont", function(e) {
								! function(e) {
									var n = e.font,
										i = e.out,
										o = e.newObject,
										a = e.putStream,
										s = e.pdfEscapeWithNeededParanthesis;
									if (n.metadata instanceof t.API.TTFFont && "WinAnsiEncoding" === n.encoding) {
										for (var c = n.metadata.rawData, u = "", l = 0; l < c.length; l++) u += String.fromCharCode(c[l]);
										var h = o();
										a({
											data: u,
											addLength1: !0,
											objectId: h
										}), i("endobj");
										var f = o();
										a({
											data: r(n.metadata.toUnicode),
											addLength1: !0,
											objectId: f
										}), i("endobj");
										var d = o();
										i("<<"), i("/Descent " + n.metadata.decender), i("/CapHeight " + n.metadata.capHeight), i("/StemV " + n.metadata.stemV), i("/Type /FontDescriptor"), i("/FontFile2 " + h + " 0 R"), i("/Flags 96"), i("/FontBBox " + t.API.PDFObject.convert(n.metadata.bbox)), i("/FontName /" + s(n.fontName)), i("/ItalicAngle " + n.metadata.italicAngle), i("/Ascent " + n.metadata.ascender), i(">>"), i("endobj"), n.objectNumber = o();
										for (var p = 0; p < n.metadata.hmtx.widths.length; p++) n.metadata.hmtx.widths[p] = parseInt(n.metadata.hmtx.widths[p] * (1e3 / n.metadata.head.unitsPerEm));
										i("<</Subtype/TrueType/Type/Font/ToUnicode " + f + " 0 R/BaseFont/" + s(n.fontName) + "/FontDescriptor " + d + " 0 R/Encoding/" + n.encoding + " /FirstChar 29 /LastChar 255 /Widths " + t.API.PDFObject.convert(n.metadata.hmtx.widths) + ">>"), i("endobj"), n.isAlreadyPutted = !0
									}
								}(e)
							}]);
							var i = function(t) {
								var e, r = t.text || "",
									i = t.x,
									o = t.y,
									a = t.options || {},
									s = t.mutex || {},
									c = s.pdfEscape,
									u = s.activeFontKey,
									l = s.fonts,
									h = u,
									f = "",
									d = 0,
									p = "",
									g = l[h].encoding;
								if ("Identity-H" !== l[h].encoding) return {
									text: r,
									x: i,
									y: o,
									options: a,
									mutex: s
								};
								for (p = r, h = u, Array.isArray(r) && (p = r[0]), d = 0; d < p.length; d += 1) l[h].metadata.hasOwnProperty("cmap") && (e = l[h].metadata.cmap.unicode.codeMap[p[d].charCodeAt(0)]), e || p[d].charCodeAt(0) < 256 && l[h].metadata.hasOwnProperty("Unicode") ? f += p[d] : f += "";
								var v = "";
								return parseInt(h.slice(1)) < 14 || "WinAnsiEncoding" === g ? v = c(f, h).split("").map((function(t) {
									return t.charCodeAt(0).toString(16)
								})).join("") : "Identity-H" === g && (v = n(f, l[h])), s.isHex = !0, {
									text: v,
									x: i,
									y: o,
									options: a,
									mutex: s
								}
							};
							e.events.push(["postProcessText", function(t) {
								var e = t.text || "",
									n = [],
									r = {
										text: e,
										x: t.x,
										y: t.y,
										options: t.options,
										mutex: t.mutex
									};
								if (Array.isArray(e)) {
									var o = 0;
									for (o = 0; o < e.length; o += 1) Array.isArray(e[o]) && 3 === e[o].length ? n.push([i(Object.assign({}, r, {
										text: e[o][0]
									})).text, e[o][1], e[o][2]]) : n.push(i(Object.assign({}, r, {
										text: e[o]
									})).text);
									t.text = n
								} else t.text = i(Object.assign({}, r, {
									text: e
								})).text
							}])
						}(Nt),
						function(t) {
							var e = function() {
								return void 0 === this.internal.vFS && (this.internal.vFS = {}), !0
							};
							t.existsFileInVFS = function(t) {
								return e.call(this), void 0 !== this.internal.vFS[t]
							}, t.addFileToVFS = function(t, n) {
								return e.call(this), this.internal.vFS[t] = n, this
							}, t.getFileFromVFS = function(t) {
								return e.call(this), void 0 !== this.internal.vFS[t] ? this.internal.vFS[t] : null
							}
						}(Nt.API),
						function(t) {
							t.__bidiEngine__ = t.prototype.__bidiEngine__ = function(t) {
								var n, r, i, o, a, s, c, u = e,
									l = [
										[0, 3, 0, 1, 0, 0, 0],
										[0, 3, 0, 1, 2, 2, 0],
										[0, 3, 0, 17, 2, 0, 1],
										[0, 3, 5, 5, 4, 1, 0],
										[0, 3, 21, 21, 4, 0, 1],
										[0, 3, 5, 5, 4, 2, 0]
									],
									h = [
										[2, 0, 1, 1, 0, 1, 0],
										[2, 0, 1, 1, 0, 2, 0],
										[2, 0, 2, 1, 3, 2, 0],
										[2, 0, 2, 33, 3, 1, 1]
									],
									f = {
										L: 0,
										R: 1,
										EN: 2,
										AN: 3,
										N: 4,
										B: 5,
										S: 6
									},
									d = {
										0: 0,
										5: 1,
										6: 2,
										7: 3,
										32: 4,
										251: 5,
										254: 6,
										255: 7
									},
									p = ["(", ")", "(", "<", ">", "<", "[", "]", "[", "{", "}", "{", "«", "»", "«", "‹", "›", "‹", "⁅", "⁆", "⁅", "⁽", "⁾", "⁽", "₍", "₎", "₍", "≤", "≥", "≤", "〈", "〉", "〈", "﹙", "﹚", "﹙", "﹛", "﹜", "﹛", "﹝", "﹞", "﹝", "﹤", "﹥", "﹤"],
									g = new RegExp(/^([1-4|9]|1[0-9]|2[0-9]|3[0168]|4[04589]|5[012]|7[78]|159|16[0-9]|17[0-2]|21[569]|22[03489]|250)$/),
									v = !1,
									m = 0;
								this.__bidiEngine__ = {};
								var b = function(t) {
										var e = t.charCodeAt(),
											n = e >> 8,
											r = d[n];
										return void 0 !== r ? u[256 * r + (255 & e)] : 252 === n || 253 === n ? "AL" : g.test(n) ? "L" : 8 === n ? "R" : "N"
									},
									y = function(t) {
										for (var e, n = 0; n < t.length; n++) {
											if ("L" === (e = b(t.charAt(n)))) return !1;
											if ("R" === e) return !0
										}
										return !1
									},
									w = function(t, e, a, s) {
										var c, u, l, h, f = e[s];
										switch (f) {
											case "L":
											case "R":
												v = !1;
												break;
											case "N":
											case "AN":
												break;
											case "EN":
												v && (f = "AN");
												break;
											case "AL":
												v = !0, f = "R";
												break;
											case "WS":
												f = "N";
												break;
											case "CS":
												s < 1 || s + 1 >= e.length || "EN" !== (c = a[s - 1]) && "AN" !== c || "EN" !== (u = e[s + 1]) && "AN" !== u ? f = "N" : v && (u = "AN"), f = u === c ? u : "N";
												break;
											case "ES":
												f = "EN" === (c = s > 0 ? a[s - 1] : "B") && s + 1 < e.length && "EN" === e[s + 1] ? "EN" : "N";
												break;
											case "ET":
												if (s > 0 && "EN" === a[s - 1]) {
													f = "EN";
													break
												}
												if (v) {
													f = "N";
													break
												}
												for (l = s + 1, h = e.length; l < h && "ET" === e[l];) l++;
												f = l < h && "EN" === e[l] ? "EN" : "N";
												break;
											case "NSM":
												if (i && !o) {
													for (h = e.length, l = s + 1; l < h && "NSM" === e[l];) l++;
													if (l < h) {
														var d = t[s],
															p = d >= 1425 && d <= 2303 || 64286 === d;
														if (c = e[l], p && ("R" === c || "AL" === c)) {
															f = "R";
															break
														}
													}
												}
												f = s < 1 || "B" === (c = e[s - 1]) ? "N" : a[s - 1];
												break;
											case "B":
												v = !1, n = !0, f = m;
												break;
											case "S":
												r = !0, f = "N";
												break;
											case "LRE":
											case "RLE":
											case "LRO":
											case "RLO":
											case "PDF":
												v = !1;
												break;
											case "BN":
												f = "N"
										}
										return f
									},
									N = function(t, e, n) {
										var r = t.split("");
										return n && L(r, n, {
											hiLevel: m
										}), r.reverse(), e && e.reverse(), r.join("")
									},
									L = function(t, e, i) {
										var o, a, s, c, u, d = -1,
											p = t.length,
											g = 0,
											y = [],
											N = m ? h : l,
											L = [];
										for (v = !1, n = !1, r = !1, a = 0; a < p; a++) L[a] = b(t[a]);
										for (s = 0; s < p; s++) {
											if (u = g, y[s] = w(t, L, y, s), o = 240 & (g = N[u][f[y[s]]]), g &= 15, e[s] = c = N[g][5], o > 0)
												if (16 === o) {
													for (a = d; a < s; a++) e[a] = 1;
													d = -1
												} else d = -1;
											if (N[g][6]) - 1 === d && (d = s);
											else if (d > -1) {
												for (a = d; a < s; a++) e[a] = c;
												d = -1
											}
											"B" === L[s] && (e[s] = 0), i.hiLevel |= c
										}
										r && function(t, e, n) {
											for (var r = 0; r < n; r++)
												if ("S" === t[r]) {
													e[r] = m;
													for (var i = r - 1; i >= 0 && "WS" === t[i]; i--) e[i] = m
												}
										}(L, e, p)
									},
									x = function(t, e, r, i, o) {
										if (!(o.hiLevel < t)) {
											if (1 === t && 1 === m && !n) return e.reverse(), void(r && r.reverse());
											for (var a, s, c, u, l = e.length, h = 0; h < l;) {
												if (i[h] >= t) {
													for (c = h + 1; c < l && i[c] >= t;) c++;
													for (u = h, s = c - 1; u < s; u++, s--) a = e[u], e[u] = e[s], e[s] = a, r && (a = r[u], r[u] = r[s], r[s] = a);
													h = c
												}
												h++
											}
										}
									},
									A = function(t, e, n) {
										var r = t.split(""),
											i = {
												hiLevel: m
											};
										return n || (n = []), L(r, n, i),
											function(t, e, n) {
												if (0 !== n.hiLevel && c)
													for (var r, i = 0; i < t.length; i++) 1 === e[i] && (r = p.indexOf(t[i])) >= 0 && (t[i] = p[r + 1])
											}(r, n, i), x(2, r, e, n, i), x(1, r, e, n, i), r.join("")
									};
								return this.__bidiEngine__.doBidiReorder = function(t, e, n) {
									if (function(t, e) {
											if (e)
												for (var n = 0; n < t.length; n++) e[n] = n;
											void 0 === o && (o = y(t)), void 0 === s && (s = y(t))
										}(t, e), i || !a || s)
										if (i && a && o ^ s) m = o ? 1 : 0, t = N(t, e, n);
										else if (!i && a && s) m = o ? 1 : 0, t = A(t, e, n), t = N(t, e);
									else if (!i || o || a || s) {
										if (i && !a && o ^ s) t = N(t, e), o ? (m = 0, t = A(t, e, n)) : (m = 1, t = A(t, e, n), t = N(t, e));
										else if (i && o && !a && s) m = 1, t = A(t, e, n), t = N(t, e);
										else if (!i && !a && o ^ s) {
											var r = c;
											o ? (m = 1, t = A(t, e, n), m = 0, c = !1, t = A(t, e, n), c = r) : (m = 0, t = A(t, e, n), t = N(t, e), m = 1, c = !1, t = A(t, e, n), c = r, t = N(t, e))
										}
									} else m = 0, t = A(t, e, n);
									else m = o ? 1 : 0, t = A(t, e, n);
									return t
								}, this.__bidiEngine__.setOptions = function(t) {
									t && (i = t.isInputVisual, a = t.isOutputVisual, o = t.isInputRtl, s = t.isOutputRtl, c = t.isSymmetricSwapping)
								}, this.__bidiEngine__.setOptions(t), this.__bidiEngine__
							};
							var e = ["BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "S", "B", "S", "WS", "B", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "B", "B", "B", "S", "WS", "N", "N", "ET", "ET", "ET", "N", "N", "N", "N", "N", "ES", "CS", "ES", "CS", "CS", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "CS", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "N", "BN", "BN", "BN", "BN", "BN", "BN", "B", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "BN", "CS", "N", "ET", "ET", "ET", "ET", "N", "N", "N", "N", "L", "N", "N", "BN", "N", "N", "ET", "ET", "EN", "EN", "N", "L", "N", "N", "N", "EN", "L", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "L", "L", "L", "L", "L", "L", "L", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "L", "N", "N", "N", "N", "N", "ET", "N", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "R", "NSM", "R", "NSM", "NSM", "R", "NSM", "NSM", "R", "NSM", "N", "N", "N", "N", "N", "N", "N", "N", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "N", "N", "N", "N", "N", "R", "R", "R", "R", "R", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "AN", "AN", "AN", "AN", "AN", "AN", "N", "N", "AL", "ET", "ET", "AL", "CS", "AL", "N", "N", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "AL", "AL", "N", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "AN", "AN", "AN", "AN", "AN", "AN", "AN", "AN", "AN", "AN", "ET", "AN", "AN", "AL", "AL", "AL", "NSM", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "AN", "N", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "AL", "AL", "NSM", "NSM", "N", "NSM", "NSM", "NSM", "NSM", "AL", "AL", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "N", "AL", "AL", "NSM", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "N", "N", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "AL", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "R", "R", "N", "N", "N", "N", "R", "N", "N", "N", "N", "N", "WS", "WS", "WS", "WS", "WS", "WS", "WS", "WS", "WS", "WS", "WS", "BN", "BN", "BN", "L", "R", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "WS", "B", "LRE", "RLE", "PDF", "LRO", "RLO", "CS", "ET", "ET", "ET", "ET", "ET", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "CS", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "WS", "BN", "BN", "BN", "BN", "BN", "N", "LRI", "RLI", "FSI", "PDI", "BN", "BN", "BN", "BN", "BN", "BN", "EN", "L", "N", "N", "EN", "EN", "EN", "EN", "EN", "EN", "ES", "ES", "N", "N", "N", "L", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "ES", "ES", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "ET", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "N", "N", "N", "N", "N", "R", "NSM", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "ES", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "N", "R", "R", "R", "R", "R", "N", "R", "N", "R", "R", "N", "R", "R", "N", "R", "R", "R", "R", "R", "R", "R", "R", "R", "R", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "NSM", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "CS", "N", "CS", "N", "N", "CS", "N", "N", "N", "N", "N", "N", "N", "N", "N", "ET", "N", "N", "ES", "ES", "N", "N", "N", "N", "N", "ET", "ET", "N", "N", "N", "N", "N", "AL", "AL", "AL", "AL", "AL", "N", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "AL", "N", "N", "BN", "N", "N", "N", "ET", "ET", "ET", "N", "N", "N", "N", "N", "ES", "CS", "ES", "CS", "CS", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "EN", "CS", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "L", "N", "N", "N", "L", "L", "L", "L", "L", "L", "N", "N", "L", "L", "L", "L", "L", "L", "N", "N", "L", "L", "L", "L", "L", "L", "N", "N", "L", "L", "L", "N", "N", "N", "ET", "ET", "N", "N", "N", "ET", "ET", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N", "N"],
								n = new t.__bidiEngine__({
									isInputVisual: !0
								});
							t.API.events.push(["postProcessText", function(t) {
								var e = t.text,
									r = (t.x, t.y, t.options || {}),
									i = (t.mutex, r.lang, []);
								if (r.isInputVisual = "boolean" != typeof r.isInputVisual || r.isInputVisual, n.setOptions(r), "[object Array]" === Object.prototype.toString.call(e)) {
									var o = 0;
									for (i = [], o = 0; o < e.length; o += 1) "[object Array]" === Object.prototype.toString.call(e[o]) ? i.push([n.doBidiReorder(e[o][0]), e[o][1], e[o][2]]) : i.push([n.doBidiReorder(e[o])]);
									t.text = i
								} else t.text = n.doBidiReorder(e);
								n.setOptions({
									isInputVisual: !0
								})
							}])
						}(Nt), Nt.API.TTFFont = function() {
							function t(t) {
								var e;
								if (this.rawData = t, e = this.contents = new Re(t), this.contents.pos = 4, "ttcf" === e.readString(4)) throw new Error("TTCF not supported.");
								e.pos = 0, this.parse(), this.subset = new an(this), this.registerTTF()
							}
							return t.open = function(e) {
								return new t(e)
							}, t.prototype.parse = function() {
								return this.directory = new ze(this.contents), this.head = new We(this), this.name = new Ze(this), this.cmap = new Ge(this), this.toUnicode = {}, this.hhea = new Ye(this), this.maxp = new $e(this), this.hmtx = new Qe(this), this.post = new Xe(this), this.os2 = new Je(this), this.loca = new on(this), this.glyf = new en(this), this.ascender = this.os2.exists && this.os2.ascender || this.hhea.ascender, this.decender = this.os2.exists && this.os2.decender || this.hhea.decender, this.lineGap = this.os2.exists && this.os2.lineGap || this.hhea.lineGap, this.bbox = [this.head.xMin, this.head.yMin, this.head.xMax, this.head.yMax]
							}, t.prototype.registerTTF = function() {
								var t, e, n, r, i;
								if (this.scaleFactor = 1e3 / this.head.unitsPerEm, this.bbox = function() {
										var e, n, r, i;
										for (i = [], e = 0, n = (r = this.bbox).length; e < n; e++) t = r[e], i.push(Math.round(t * this.scaleFactor));
										return i
									}.call(this), this.stemV = 0, this.post.exists ? (n = 255 & (r = this.post.italic_angle), 0 != (32768 & (e = r >> 16)) && (e = -(1 + (65535 ^ e))), this.italicAngle = +(e + "." + n)) : this.italicAngle = 0, this.ascender = Math.round(this.ascender * this.scaleFactor), this.decender = Math.round(this.decender * this.scaleFactor), this.lineGap = Math.round(this.lineGap * this.scaleFactor), this.capHeight = this.os2.exists && this.os2.capHeight || this.ascender, this.xHeight = this.os2.exists && this.os2.xHeight || 0, this.familyClass = (this.os2.exists && this.os2.familyClass || 0) >> 8, this.isSerif = 1 === (i = this.familyClass) || 2 === i || 3 === i || 4 === i || 5 === i || 7 === i, this.isScript = 10 === this.familyClass, this.flags = 0, this.post.isFixedPitch && (this.flags |= 1), this.isSerif && (this.flags |= 2), this.isScript && (this.flags |= 8), 0 !== this.italicAngle && (this.flags |= 64), this.flags |= 32, !this.cmap.unicode) throw new Error("No unicode cmap for font")
							}, t.prototype.characterToGlyph = function(t) {
								var e;
								return (null != (e = this.cmap.unicode) ? e.codeMap[t] : void 0) || 0
							}, t.prototype.widthOfGlyph = function(t) {
								var e;
								return e = 1e3 / this.head.unitsPerEm, this.hmtx.forGlyph(t).advance * e
							}, t.prototype.widthOfString = function(t, e, n) {
								var r, i, o, a;
								for (o = 0, i = 0, a = (t = "" + t).length; 0 <= a ? i < a : i > a; i = 0 <= a ? ++i : --i) r = t.charCodeAt(i), o += this.widthOfGlyph(this.characterToGlyph(r)) + n * (1e3 / e) || 0;
								return o * (e / 1e3)
							}, t.prototype.lineHeight = function(t, e) {
								var n;
								return null == e && (e = !1), n = e ? this.lineGap : 0, (this.ascender + n - this.decender) / 1e3 * t
							}, t
						}();
					var De, Re = function() {
							function t(t) {
								this.data = null != t ? t : [], this.pos = 0, this.length = this.data.length
							}
							return t.prototype.readByte = function() {
								return this.data[this.pos++]
							}, t.prototype.writeByte = function(t) {
								return this.data[this.pos++] = t
							}, t.prototype.readUInt32 = function() {
								return 16777216 * this.readByte() + (this.readByte() << 16) + (this.readByte() << 8) + this.readByte()
							}, t.prototype.writeUInt32 = function(t) {
								return this.writeByte(t >>> 24 & 255), this.writeByte(t >> 16 & 255), this.writeByte(t >> 8 & 255), this.writeByte(255 & t)
							}, t.prototype.readInt32 = function() {
								var t;
								return (t = this.readUInt32()) >= 2147483648 ? t - 4294967296 : t
							}, t.prototype.writeInt32 = function(t) {
								return t < 0 && (t += 4294967296), this.writeUInt32(t)
							}, t.prototype.readUInt16 = function() {
								return this.readByte() << 8 | this.readByte()
							}, t.prototype.writeUInt16 = function(t) {
								return this.writeByte(t >> 8 & 255), this.writeByte(255 & t)
							}, t.prototype.readInt16 = function() {
								var t;
								return (t = this.readUInt16()) >= 32768 ? t - 65536 : t
							}, t.prototype.writeInt16 = function(t) {
								return t < 0 && (t += 65536), this.writeUInt16(t)
							}, t.prototype.readString = function(t) {
								var e, n;
								for (n = [], e = 0; 0 <= t ? e < t : e > t; e = 0 <= t ? ++e : --e) n[e] = String.fromCharCode(this.readByte());
								return n.join("")
							}, t.prototype.writeString = function(t) {
								var e, n, r;
								for (r = [], e = 0, n = t.length; 0 <= n ? e < n : e > n; e = 0 <= n ? ++e : --e) r.push(this.writeByte(t.charCodeAt(e)));
								return r
							}, t.prototype.readShort = function() {
								return this.readInt16()
							}, t.prototype.writeShort = function(t) {
								return this.writeInt16(t)
							}, t.prototype.readLongLong = function() {
								var t, e, n, r, i, o, a, s;
								return t = this.readByte(), e = this.readByte(), n = this.readByte(), r = this.readByte(), i = this.readByte(), o = this.readByte(), a = this.readByte(), s = this.readByte(), 128 & t ? -1 * (72057594037927940 * (255 ^ t) + 281474976710656 * (255 ^ e) + 1099511627776 * (255 ^ n) + 4294967296 * (255 ^ r) + 16777216 * (255 ^ i) + 65536 * (255 ^ o) + 256 * (255 ^ a) + (255 ^ s) + 1) : 72057594037927940 * t + 281474976710656 * e + 1099511627776 * n + 4294967296 * r + 16777216 * i + 65536 * o + 256 * a + s
							}, t.prototype.writeLongLong = function(t) {
								var e, n;
								return e = Math.floor(t / 4294967296), n = 4294967295 & t, this.writeByte(e >> 24 & 255), this.writeByte(e >> 16 & 255), this.writeByte(e >> 8 & 255), this.writeByte(255 & e), this.writeByte(n >> 24 & 255), this.writeByte(n >> 16 & 255), this.writeByte(n >> 8 & 255), this.writeByte(255 & n)
							}, t.prototype.readInt = function() {
								return this.readInt32()
							}, t.prototype.writeInt = function(t) {
								return this.writeInt32(t)
							}, t.prototype.read = function(t) {
								var e, n;
								for (e = [], n = 0; 0 <= t ? n < t : n > t; n = 0 <= t ? ++n : --n) e.push(this.readByte());
								return e
							}, t.prototype.write = function(t) {
								var e, n, r, i;
								for (i = [], n = 0, r = t.length; n < r; n++) e = t[n], i.push(this.writeByte(e));
								return i
							}, t
						}(),
						ze = function() {
							var t;

							function e(t) {
								var e, n, r;
								for (this.scalarType = t.readInt(), this.tableCount = t.readShort(), this.searchRange = t.readShort(), this.entrySelector = t.readShort(), this.rangeShift = t.readShort(), this.tables = {}, n = 0, r = this.tableCount; 0 <= r ? n < r : n > r; n = 0 <= r ? ++n : --n) e = {
									tag: t.readString(4),
									checksum: t.readInt(),
									offset: t.readInt(),
									length: t.readInt()
								}, this.tables[e.tag] = e
							}
							return e.prototype.encode = function(e) {
								var n, r, i, o, a, s, c, u, l, h, f, d, p;
								for (p in f = Object.keys(e).length, s = Math.log(2), l = 16 * Math.floor(Math.log(f) / s), o = Math.floor(l / s), u = 16 * f - l, (r = new Re).writeInt(this.scalarType), r.writeShort(f), r.writeShort(l), r.writeShort(o), r.writeShort(u), i = 16 * f, c = r.pos + i, a = null, d = [], e)
									for (h = e[p], r.writeString(p), r.writeInt(t(h)), r.writeInt(c), r.writeInt(h.length), d = d.concat(h), "head" === p && (a = c), c += h.length; c % 4;) d.push(0), c++;
								return r.write(d), n = 2981146554 - t(r.data), r.pos = a + 8, r.writeUInt32(n), r.data
							}, t = function(t) {
								var e, n, r, i;
								for (t = tn.call(t); t.length % 4;) t.push(0);
								for (r = new Re(t), n = 0, e = 0, i = t.length; e < i; e = e += 4) n += r.readUInt32();
								return 4294967295 & n
							}, e
						}(),
						Ue = {}.hasOwnProperty,
						He = function(t, e) {
							for (var n in e) Ue.call(e, n) && (t[n] = e[n]);

							function r() {
								this.constructor = t
							}
							return r.prototype = e.prototype, t.prototype = new r, t.__super__ = e.prototype, t
						};
					De = function() {
						function t(t) {
							var e;
							this.file = t, e = this.file.directory.tables[this.tag], this.exists = !!e, e && (this.offset = e.offset, this.length = e.length, this.parse(this.file.contents))
						}
						return t.prototype.parse = function() {}, t.prototype.encode = function() {}, t.prototype.raw = function() {
							return this.exists ? (this.file.contents.pos = this.offset, this.file.contents.read(this.length)) : null
						}, t
					}();
					var We = function(t) {
							function e() {
								return e.__super__.constructor.apply(this, arguments)
							}
							return He(e, De), e.prototype.tag = "head", e.prototype.parse = function(t) {
								return t.pos = this.offset, this.version = t.readInt(), this.revision = t.readInt(), this.checkSumAdjustment = t.readInt(), this.magicNumber = t.readInt(), this.flags = t.readShort(), this.unitsPerEm = t.readShort(), this.created = t.readLongLong(), this.modified = t.readLongLong(), this.xMin = t.readShort(), this.yMin = t.readShort(), this.xMax = t.readShort(), this.yMax = t.readShort(), this.macStyle = t.readShort(), this.lowestRecPPEM = t.readShort(), this.fontDirectionHint = t.readShort(), this.indexToLocFormat = t.readShort(), this.glyphDataFormat = t.readShort()
							}, e.prototype.encode = function(t) {
								var e;
								return (e = new Re).writeInt(this.version), e.writeInt(this.revision), e.writeInt(this.checkSumAdjustment), e.writeInt(this.magicNumber), e.writeShort(this.flags), e.writeShort(this.unitsPerEm), e.writeLongLong(this.created), e.writeLongLong(this.modified), e.writeShort(this.xMin), e.writeShort(this.yMin), e.writeShort(this.xMax), e.writeShort(this.yMax), e.writeShort(this.macStyle), e.writeShort(this.lowestRecPPEM), e.writeShort(this.fontDirectionHint), e.writeShort(t), e.writeShort(this.glyphDataFormat), e.data
							}, e
						}(),
						Ve = function() {
							function t(t, e) {
								var n, r, i, o, a, s, c, u, l, h, f, d, p, g, v, m, b;
								switch (this.platformID = t.readUInt16(), this.encodingID = t.readShort(), this.offset = e + t.readInt(), l = t.pos, t.pos = this.offset, this.format = t.readUInt16(), this.length = t.readUInt16(), this.language = t.readUInt16(), this.isUnicode = 3 === this.platformID && 1 === this.encodingID && 4 === this.format || 0 === this.platformID && 4 === this.format, this.codeMap = {}, this.format) {
									case 0:
										for (s = 0; s < 256; ++s) this.codeMap[s] = t.readByte();
										break;
									case 4:
										for (f = t.readUInt16(), h = f / 2, t.pos += 6, i = function() {
												var e, n;
												for (n = [], s = e = 0; 0 <= h ? e < h : e > h; s = 0 <= h ? ++e : --e) n.push(t.readUInt16());
												return n
											}(), t.pos += 2, p = function() {
												var e, n;
												for (n = [], s = e = 0; 0 <= h ? e < h : e > h; s = 0 <= h ? ++e : --e) n.push(t.readUInt16());
												return n
											}(), c = function() {
												var e, n;
												for (n = [], s = e = 0; 0 <= h ? e < h : e > h; s = 0 <= h ? ++e : --e) n.push(t.readUInt16());
												return n
											}(), u = function() {
												var e, n;
												for (n = [], s = e = 0; 0 <= h ? e < h : e > h; s = 0 <= h ? ++e : --e) n.push(t.readUInt16());
												return n
											}(), r = (this.length - t.pos + this.offset) / 2, a = function() {
												var e, n;
												for (n = [], s = e = 0; 0 <= r ? e < r : e > r; s = 0 <= r ? ++e : --e) n.push(t.readUInt16());
												return n
											}(), s = v = 0, b = i.length; v < b; s = ++v)
											for (g = i[s], n = m = d = p[s]; d <= g ? m <= g : m >= g; n = d <= g ? ++m : --m) 0 === u[s] ? o = n + c[s] : 0 !== (o = a[u[s] / 2 + (n - d) - (h - s)] || 0) && (o += c[s]), this.codeMap[n] = 65535 & o
								}
								t.pos = l
							}
							return t.encode = function(t, e) {
								var n, r, i, o, a, s, c, u, l, h, f, d, p, g, v, m, b, y, w, N, L, x, A, S, _, P, k, F, I, C, j, O, B, M, E, q, T, D, R, z, U, H, W, V, G, Y;
								switch (F = new Re, o = Object.keys(t).sort((function(t, e) {
										return t - e
									})), e) {
									case "macroman":
										for (p = 0, g = function() {
												var t = [];
												for (d = 0; d < 256; ++d) t.push(0);
												return t
											}(), m = {
												0: 0
											}, i = {}, I = 0, B = o.length; I < B; I++) null == m[W = t[r = o[I]]] && (m[W] = ++p), i[r] = {
											old: t[r],
											new: m[t[r]]
										}, g[r] = m[t[r]];
										return F.writeUInt16(1), F.writeUInt16(0), F.writeUInt32(12), F.writeUInt16(0), F.writeUInt16(262), F.writeUInt16(0), F.write(g), {
											charMap: i,
											subtable: F.data,
											maxGlyphID: p + 1
										};
									case "unicode":
										for (P = [], l = [], b = 0, m = {}, n = {}, v = c = null, C = 0, M = o.length; C < M; C++) null == m[w = t[r = o[C]]] && (m[w] = ++b), n[r] = {
											old: w,
											new: m[w]
										}, a = m[w] - r, null != v && a === c || (v && l.push(v), P.push(r), c = a), v = r;
										for (v && l.push(v), l.push(65535), P.push(65535), S = 2 * (A = P.length), x = 2 * Math.pow(Math.log(A) / Math.LN2, 2), h = Math.log(x / 2) / Math.LN2, L = 2 * A - x, s = [], N = [], f = [], d = j = 0, E = P.length; j < E; d = ++j) {
											if (_ = P[d], u = l[d], 65535 === _) {
												s.push(0), N.push(0);
												break
											}
											if (_ - (k = n[_].new) >= 32768)
												for (s.push(0), N.push(2 * (f.length + A - d)), r = O = _; _ <= u ? O <= u : O >= u; r = _ <= u ? ++O : --O) f.push(n[r].new);
											else s.push(k - _), N.push(0)
										}
										for (F.writeUInt16(3), F.writeUInt16(1), F.writeUInt32(12), F.writeUInt16(4), F.writeUInt16(16 + 8 * A + 2 * f.length), F.writeUInt16(0), F.writeUInt16(S), F.writeUInt16(x), F.writeUInt16(h), F.writeUInt16(L), U = 0, q = l.length; U < q; U++) r = l[U], F.writeUInt16(r);
										for (F.writeUInt16(0), H = 0, T = P.length; H < T; H++) r = P[H], F.writeUInt16(r);
										for (V = 0, D = s.length; V < D; V++) a = s[V], F.writeUInt16(a);
										for (G = 0, R = N.length; G < R; G++) y = N[G], F.writeUInt16(y);
										for (Y = 0, z = f.length; Y < z; Y++) p = f[Y], F.writeUInt16(p);
										return {
											charMap: n, subtable: F.data, maxGlyphID: b + 1
										}
								}
							}, t
						}(),
						Ge = function(t) {
							function e() {
								return e.__super__.constructor.apply(this, arguments)
							}
							return He(e, De), e.prototype.tag = "cmap", e.prototype.parse = function(t) {
								var e, n, r;
								for (t.pos = this.offset, this.version = t.readUInt16(), r = t.readUInt16(), this.tables = [], this.unicode = null, n = 0; 0 <= r ? n < r : n > r; n = 0 <= r ? ++n : --n) e = new Ve(t, this.offset), this.tables.push(e), e.isUnicode && null == this.unicode && (this.unicode = e);
								return !0
							}, e.encode = function(t, e) {
								var n, r;
								return null == e && (e = "macroman"), n = Ve.encode(t, e), (r = new Re).writeUInt16(0), r.writeUInt16(1), n.table = r.data.concat(n.subtable), n
							}, e
						}(),
						Ye = function(t) {
							function e() {
								return e.__super__.constructor.apply(this, arguments)
							}
							return He(e, De), e.prototype.tag = "hhea", e.prototype.parse = function(t) {
								return t.pos = this.offset, this.version = t.readInt(), this.ascender = t.readShort(), this.decender = t.readShort(), this.lineGap = t.readShort(), this.advanceWidthMax = t.readShort(), this.minLeftSideBearing = t.readShort(), this.minRightSideBearing = t.readShort(), this.xMaxExtent = t.readShort(), this.caretSlopeRise = t.readShort(), this.caretSlopeRun = t.readShort(), this.caretOffset = t.readShort(), t.pos += 8, this.metricDataFormat = t.readShort(), this.numberOfMetrics = t.readUInt16()
							}, e
						}(),
						Je = function(t) {
							function e() {
								return e.__super__.constructor.apply(this, arguments)
							}
							return He(e, De), e.prototype.tag = "OS/2", e.prototype.parse = function(t) {
								if (t.pos = this.offset, this.version = t.readUInt16(), this.averageCharWidth = t.readShort(), this.weightClass = t.readUInt16(), this.widthClass = t.readUInt16(), this.type = t.readShort(), this.ySubscriptXSize = t.readShort(), this.ySubscriptYSize = t.readShort(), this.ySubscriptXOffset = t.readShort(), this.ySubscriptYOffset = t.readShort(), this.ySuperscriptXSize = t.readShort(), this.ySuperscriptYSize = t.readShort(), this.ySuperscriptXOffset = t.readShort(), this.ySuperscriptYOffset = t.readShort(), this.yStrikeoutSize = t.readShort(), this.yStrikeoutPosition = t.readShort(), this.familyClass = t.readShort(), this.panose = function() {
										var e, n;
										for (n = [], e = 0; e < 10; ++e) n.push(t.readByte());
										return n
									}(), this.charRange = function() {
										var e, n;
										for (n = [], e = 0; e < 4; ++e) n.push(t.readInt());
										return n
									}(), this.vendorID = t.readString(4), this.selection = t.readShort(), this.firstCharIndex = t.readShort(), this.lastCharIndex = t.readShort(), this.version > 0 && (this.ascent = t.readShort(), this.descent = t.readShort(), this.lineGap = t.readShort(), this.winAscent = t.readShort(), this.winDescent = t.readShort(), this.codePageRange = function() {
										var e, n;
										for (n = [], e = 0; e < 2; e = ++e) n.push(t.readInt());
										return n
									}(), this.version > 1)) return this.xHeight = t.readShort(), this.capHeight = t.readShort(), this.defaultChar = t.readShort(), this.breakChar = t.readShort(), this.maxContext = t.readShort()
							}, e
						}(),
						Xe = function(t) {
							function e() {
								return e.__super__.constructor.apply(this, arguments)
							}
							return He(e, De), e.prototype.tag = "post", e.prototype.parse = function(t) {
								var e, n, r;
								switch (t.pos = this.offset, this.format = t.readInt(), this.italicAngle = t.readInt(), this.underlinePosition = t.readShort(), this.underlineThickness = t.readShort(), this.isFixedPitch = t.readInt(), this.minMemType42 = t.readInt(), this.maxMemType42 = t.readInt(), this.minMemType1 = t.readInt(), this.maxMemType1 = t.readInt(), this.format) {
									case 65536:
										break;
									case 131072:
										var i;
										for (n = t.readUInt16(), this.glyphNameIndex = [], i = 0; 0 <= n ? i < n : i > n; i = 0 <= n ? ++i : --i) this.glyphNameIndex.push(t.readUInt16());
										for (this.names = [], r = []; t.pos < this.offset + this.length;) e = t.readByte(), r.push(this.names.push(t.readString(e)));
										return r;
									case 151552:
										return n = t.readUInt16(), this.offsets = t.read(n);
									case 196608:
										break;
									case 262144:
										return this.map = function() {
											var e, n, r;
											for (r = [], i = e = 0, n = this.file.maxp.numGlyphs; 0 <= n ? e < n : e > n; i = 0 <= n ? ++e : --e) r.push(t.readUInt32());
											return r
										}.call(this)
								}
							}, e
						}(),
						Ke = function(t, e) {
							this.raw = t, this.length = t.length, this.platformID = e.platformID, this.encodingID = e.encodingID, this.languageID = e.languageID
						},
						Ze = function(t) {
							function e() {
								return e.__super__.constructor.apply(this, arguments)
							}
							return He(e, De), e.prototype.tag = "name", e.prototype.parse = function(t) {
								var e, n, r, i, o, a, s, c, u, l, h;
								for (t.pos = this.offset, t.readShort(), e = t.readShort(), a = t.readShort(), n = [], i = 0; 0 <= e ? i < e : i > e; i = 0 <= e ? ++i : --i) n.push({
									platformID: t.readShort(),
									encodingID: t.readShort(),
									languageID: t.readShort(),
									nameID: t.readShort(),
									length: t.readShort(),
									offset: this.offset + a + t.readShort()
								});
								for (s = {}, i = u = 0, l = n.length; u < l; i = ++u) r = n[i], t.pos = r.offset, c = t.readString(r.length), o = new Ke(c, r), null == s[h = r.nameID] && (s[h] = []), s[r.nameID].push(o);
								this.strings = s, this.copyright = s[0], this.fontFamily = s[1], this.fontSubfamily = s[2], this.uniqueSubfamily = s[3], this.fontName = s[4], this.version = s[5];
								try {
									this.postscriptName = s[6][0].raw.replace(/[\x00-\x19\x80-\xff]/g, "")
								} catch (t) {
									this.postscriptName = s[4][0].raw.replace(/[\x00-\x19\x80-\xff]/g, "")
								}
								return this.trademark = s[7], this.manufacturer = s[8], this.designer = s[9], this.description = s[10], this.vendorUrl = s[11], this.designerUrl = s[12], this.license = s[13], this.licenseUrl = s[14], this.preferredFamily = s[15], this.preferredSubfamily = s[17], this.compatibleFull = s[18], this.sampleText = s[19]
							}, e
						}(),
						$e = function(t) {
							function e() {
								return e.__super__.constructor.apply(this, arguments)
							}
							return He(e, De), e.prototype.tag = "maxp", e.prototype.parse = function(t) {
								return t.pos = this.offset, this.version = t.readInt(), this.numGlyphs = t.readUInt16(), this.maxPoints = t.readUInt16(), this.maxContours = t.readUInt16(), this.maxCompositePoints = t.readUInt16(), this.maxComponentContours = t.readUInt16(), this.maxZones = t.readUInt16(), this.maxTwilightPoints = t.readUInt16(), this.maxStorage = t.readUInt16(), this.maxFunctionDefs = t.readUInt16(), this.maxInstructionDefs = t.readUInt16(), this.maxStackElements = t.readUInt16(), this.maxSizeOfInstructions = t.readUInt16(), this.maxComponentElements = t.readUInt16(), this.maxComponentDepth = t.readUInt16()
							}, e
						}(),
						Qe = function(t) {
							function e() {
								return e.__super__.constructor.apply(this, arguments)
							}
							return He(e, De), e.prototype.tag = "hmtx", e.prototype.parse = function(t) {
								var e, n, r, i, o, a, s;
								for (t.pos = this.offset, this.metrics = [], e = 0, a = this.file.hhea.numberOfMetrics; 0 <= a ? e < a : e > a; e = 0 <= a ? ++e : --e) this.metrics.push({
									advance: t.readUInt16(),
									lsb: t.readInt16()
								});
								for (r = this.file.maxp.numGlyphs - this.file.hhea.numberOfMetrics, this.leftSideBearings = function() {
										var n, i;
										for (i = [], e = n = 0; 0 <= r ? n < r : n > r; e = 0 <= r ? ++n : --n) i.push(t.readInt16());
										return i
									}(), this.widths = function() {
										var t, e, n, r;
										for (r = [], t = 0, e = (n = this.metrics).length; t < e; t++) i = n[t], r.push(i.advance);
										return r
									}.call(this), n = this.widths[this.widths.length - 1], s = [], e = o = 0; 0 <= r ? o < r : o > r; e = 0 <= r ? ++o : --o) s.push(this.widths.push(n));
								return s
							}, e.prototype.forGlyph = function(t) {
								return t in this.metrics ? this.metrics[t] : {
									advance: this.metrics[this.metrics.length - 1].advance,
									lsb: this.leftSideBearings[t - this.metrics.length]
								}
							}, e
						}(),
						tn = [].slice,
						en = function(t) {
							function e() {
								return e.__super__.constructor.apply(this, arguments)
							}
							return He(e, De), e.prototype.tag = "glyf", e.prototype.parse = function() {
								return this.cache = {}
							}, e.prototype.glyphFor = function(t) {
								var e, n, r, i, o, a, s, c, u, l;
								return t in this.cache ? this.cache[t] : (i = this.file.loca, e = this.file.contents, n = i.indexOf(t), 0 === (r = i.lengthOf(t)) ? this.cache[t] = null : (e.pos = this.offset + n, o = (a = new Re(e.read(r))).readShort(), c = a.readShort(), l = a.readShort(), s = a.readShort(), u = a.readShort(), this.cache[t] = -1 === o ? new rn(a, c, l, s, u) : new nn(a, o, c, l, s, u), this.cache[t]))
							}, e.prototype.encode = function(t, e, n) {
								var r, i, o, a, s;
								for (o = [], i = [], a = 0, s = e.length; a < s; a++) r = t[e[a]], i.push(o.length), r && (o = o.concat(r.encode(n)));
								return i.push(o.length), {
									table: o,
									offsets: i
								}
							}, e
						}(),
						nn = function() {
							function t(t, e, n, r, i, o) {
								this.raw = t, this.numberOfContours = e, this.xMin = n, this.yMin = r, this.xMax = i, this.yMax = o, this.compound = !1
							}
							return t.prototype.encode = function() {
								return this.raw.data
							}, t
						}(),
						rn = function() {
							function t(t, e, n, r, i) {
								var o, a;
								for (this.raw = t, this.xMin = e, this.yMin = n, this.xMax = r, this.yMax = i, this.compound = !0, this.glyphIDs = [], this.glyphOffsets = [], o = this.raw; a = o.readShort(), this.glyphOffsets.push(o.pos), this.glyphIDs.push(o.readUInt16()), 32 & a;) o.pos += 1 & a ? 4 : 2, 128 & a ? o.pos += 8 : 64 & a ? o.pos += 4 : 8 & a && (o.pos += 2)
							}
							return t.prototype.encode = function() {
								var t, e, n;
								for (e = new Re(tn.call(this.raw.data)), t = 0, n = this.glyphIDs.length; t < n; ++t) e.pos = this.glyphOffsets[t];
								return e.data
							}, t
						}(),
						on = function(t) {
							function e() {
								return e.__super__.constructor.apply(this, arguments)
							}
							return He(e, De), e.prototype.tag = "loca", e.prototype.parse = function(t) {
								var e, n;
								return t.pos = this.offset, e = this.file.head.indexToLocFormat, this.offsets = 0 === e ? function() {
									var e, r;
									for (r = [], n = 0, e = this.length; n < e; n += 2) r.push(2 * t.readUInt16());
									return r
								}.call(this) : function() {
									var e, r;
									for (r = [], n = 0, e = this.length; n < e; n += 4) r.push(t.readUInt32());
									return r
								}.call(this)
							}, e.prototype.indexOf = function(t) {
								return this.offsets[t]
							}, e.prototype.lengthOf = function(t) {
								return this.offsets[t + 1] - this.offsets[t]
							}, e.prototype.encode = function(t, e) {
								for (var n = new Uint32Array(this.offsets.length), r = 0, i = 0, o = 0; o < n.length; ++o)
									if (n[o] = r, i < e.length && e[i] == o) {
										++i, n[o] = r;
										var a = this.offsets[o],
											s = this.offsets[o + 1] - a;
										s > 0 && (r += s)
									} for (var c = new Array(4 * n.length), u = 0; u < n.length; ++u) c[4 * u + 3] = 255 & n[u], c[4 * u + 2] = (65280 & n[u]) >> 8, c[4 * u + 1] = (16711680 & n[u]) >> 16, c[4 * u] = (4278190080 & n[u]) >> 24;
								return c
							}, e
						}(),
						an = function() {
							function t(t) {
								this.font = t, this.subset = {}, this.unicodes = {}, this.next = 33
							}
							return t.prototype.generateCmap = function() {
								var t, e, n, r, i;
								for (e in r = this.font.cmap.tables[0].codeMap, t = {}, i = this.subset) n = i[e], t[e] = r[n];
								return t
							}, t.prototype.glyphsFor = function(t) {
								var e, n, r, i, o, a, s;
								for (r = {}, o = 0, a = t.length; o < a; o++) r[i = t[o]] = this.font.glyf.glyphFor(i);
								for (i in e = [], r)(null != (n = r[i]) ? n.compound : void 0) && e.push.apply(e, n.glyphIDs);
								if (e.length > 0)
									for (i in s = this.glyphsFor(e)) n = s[i], r[i] = n;
								return r
							}, t.prototype.encode = function(t, e) {
								var n, r, i, o, a, s, c, u, l, h, f, d, p, g, v;
								for (r in n = Ge.encode(this.generateCmap(), "unicode"), o = this.glyphsFor(t), f = {
										0: 0
									}, v = n.charMap) f[(s = v[r]).old] = s.new;
								for (d in h = n.maxGlyphID, o) d in f || (f[d] = h++);
								return u = function(t) {
									var e, n;
									for (e in n = {}, t) n[t[e]] = e;
									return n
								}(f), l = Object.keys(u).sort((function(t, e) {
									return t - e
								})), p = function() {
									var t, e, n;
									for (n = [], t = 0, e = l.length; t < e; t++) a = l[t], n.push(u[a]);
									return n
								}(), i = this.font.glyf.encode(o, p, f), c = this.font.loca.encode(i.offsets, p), g = {
									cmap: this.font.cmap.raw(),
									glyf: i.table,
									loca: c,
									hmtx: this.font.hmtx.raw(),
									hhea: this.font.hhea.raw(),
									maxp: this.font.maxp.raw(),
									post: this.font.post.raw(),
									name: this.font.name.raw(),
									head: this.font.head.encode(e)
								}, this.font.os2.exists && (g["OS/2"] = this.font.os2.raw()), this.font.directory.encode(g)
							}, t
						}();
					Nt.API.PDFObject = function() {
						var t;

						function e() {}
						return t = function(t, e) {
							return (Array(e + 1).join("0") + t).slice(-e)
						}, e.convert = function(n) {
							var r, i, o, a;
							if (Array.isArray(n)) return "[" + function() {
								var t, i, o;
								for (o = [], t = 0, i = n.length; t < i; t++) r = n[t], o.push(e.convert(r));
								return o
							}().join(" ") + "]";
							if ("string" == typeof n) return "/" + n;
							if (null != n ? n.isString : void 0) return "(" + n + ")";
							if (n instanceof Date) return "(D:" + t(n.getUTCFullYear(), 4) + t(n.getUTCMonth(), 2) + t(n.getUTCDate(), 2) + t(n.getUTCHours(), 2) + t(n.getUTCMinutes(), 2) + t(n.getUTCSeconds(), 2) + "Z)";
							if ("[object Object]" === {}.toString.call(n)) {
								for (i in o = ["<<"], n) a = n[i], o.push("/" + i + " " + e.convert(a));
								return o.push(">>"), o.join("\n")
							}
							return "" + n
						}, e
					}();
					const sn = {
							Save: "save",
							DataUriString: "datauristring",
							DataUri: "datauri",
							DataUrlNewWindow: "dataurlnewwindow",
							Blob: "blob",
							ArrayBuffer: "arraybuffer"
						},
						cn = function(t) {
							var e, n, r, i, o, a, s, c, u, l, h, f, d, p, g, v, m, b, y, w, N, L, x, A, S, _, P, k, F, I, C, j, O, B, M, E, q, T, D, R, z, U, H, W, V, G, Y, J, X, K, Z;
							const $ = {
									outputType: t.outputType || "save",
									returnJsPDFDocObject: t.returnJsPDFDocObject || !1,
									fileName: t.fileName || "",
									orientationLandscape: t.orientationLandscape || !1,
									compress: t.compress || !1,
									logo: {
										src: (null === (e = t.logo) || void 0 === e ? void 0 : e.src) || "",
										width: (null === (n = t.logo) || void 0 === n ? void 0 : n.width) || "",
										height: (null === (r = t.logo) || void 0 === r ? void 0 : r.height) || "",
										margin: {
											top: (null === (i = t.logo) || void 0 === i || null === (o = i.margin) || void 0 === o ? void 0 : o.top) || 0,
											left: (null === (a = t.logo) || void 0 === a || null === (s = a.margin) || void 0 === s ? void 0 : s.left) || 0
										}
									},
									business: {
										name: (null === (c = t.business) || void 0 === c ? void 0 : c.name) || "",
										address: (null === (u = t.business) || void 0 === u ? void 0 : u.address) || "",
										phone: (null === (l = t.business) || void 0 === l ? void 0 : l.phone) || "",
										email: (null === (h = t.business) || void 0 === h ? void 0 : h.email) || "",
										email_1: (null === (f = t.business) || void 0 === f ? void 0 : f.email_1) || "",
										website: (null === (d = t.business) || void 0 === d ? void 0 : d.website) || ""
									},
									contact: {
										label: (null === (p = t.contact) || void 0 === p ? void 0 : p.label) || "",
										name: (null === (g = t.contact) || void 0 === g ? void 0 : g.name) || "",
										address: (null === (v = t.contact) || void 0 === v ? void 0 : v.address) || "",
										phone: (null === (m = t.contact) || void 0 === m ? void 0 : m.phone) || "",
										email: (null === (b = t.contact) || void 0 === b ? void 0 : b.email) || "",
										otherInfo: (null === (y = t.contact) || void 0 === y ? void 0 : y.otherInfo) || ""
									},
									invoice: {
										label: (null === (w = t.invoice) || void 0 === w ? void 0 : w.label) || "",
										invTotalLabel: (null === (N = t.invoice) || void 0 === N ? void 0 : N.invTotalLabel) || "",
										num: (null === (L = t.invoice) || void 0 === L ? void 0 : L.num) || "",
										invDate: (null === (x = t.invoice) || void 0 === x ? void 0 : x.invDate) || "",
										invGenDate: (null === (A = t.invoice) || void 0 === A ? void 0 : A.invGenDate) || "",
										headerBorder: (null === (S = t.invoice) || void 0 === S ? void 0 : S.headerBorder) || !1,
										tableBodyBorder: (null === (_ = t.invoice) || void 0 === _ ? void 0 : _.tableBodyBorder) || !1,
										header: (null === (P = t.invoice) || void 0 === P ? void 0 : P.header) || [],
										table: (null === (k = t.invoice) || void 0 === k ? void 0 : k.table) || [],
										invTotal: (null === (F = t.invoice) || void 0 === F ? void 0 : F.invTotal) || "",
										invCurrency: (null === (I = t.invoice) || void 0 === I ? void 0 : I.invCurrency) || "",
										invDescLabel: (null === (C = t.invoice) || void 0 === C ? void 0 : C.invDescLabel) || "",
										invDesc: (null === (j = t.invoice) || void 0 === j ? void 0 : j.invDesc) || "",
										row1: {
											col1: (null === (O = t.invoice) || void 0 === O || null === (B = O.row1) || void 0 === B ? void 0 : B.col1) || "",
											col2: (null === (M = t.invoice) || void 0 === M || null === (E = M.row1) || void 0 === E ? void 0 : E.col2) || "",
											col3: (null === (q = t.invoice) || void 0 === q || null === (T = q.row1) || void 0 === T ? void 0 : T.col3) || "",
											style: {
												fontSize: (null === (D = t.invoice) || void 0 === D || null === (R = D.row1) || void 0 === R || null === (z = R.style) || void 0 === z ? void 0 : z.fontSize) || 12
											}
										},
										row2: {
											col1: (null === (U = t.invoice) || void 0 === U || null === (H = U.row2) || void 0 === H ? void 0 : H.col1) || "",
											col2: (null === (W = t.invoice) || void 0 === W || null === (V = W.row2) || void 0 === V ? void 0 : V.col2) || "",
											col3: (null === (G = t.invoice) || void 0 === G || null === (Y = G.row2) || void 0 === Y ? void 0 : Y.col3) || "",
											style: {
												fontSize: (null === (J = t.invoice) || void 0 === J || null === (X = J.row2) || void 0 === X || null === (K = X.style) || void 0 === K ? void 0 : K.fontSize) || 12
											}
										}
									},
									footer: {
										text: (null === (Z = t.footer) || void 0 === Z ? void 0 : Z.text) || ""
									},
									pageEnable: t.pageEnable || !1,
									pageLabel: t.pageLabel || "Page"
								},
								Q = (t, e) => {
									var n = tt.splitTextToSize(t, e);
									return {
										text: n,
										height: tt.getTextDimensions(n).h
									}
								};
							if ($.invoice.table && $.invoice.table.length && $.invoice.table[0].length != $.invoice.header.length) throw Error("Length of header and table column must be equal.");
							var tt = new Nt({
									orientation: $.orientationLandscape ? "landscape" : "",
									compress: $.compress
								}),
								et = tt.internal.pageSize.width,
								nt = tt.internal.pageSize.height,
								rt = "#000000",
								it = "#4d4e53",
								ot = 15,
								at = 10;
							if (tt.setFontSize(20), tt.setTextColor(rt), tt.text(et - 10, ot, $.business.name, "right"), tt.setFontSize(at), $.logo.src) {
								var st = new Image;
								st.src = $.logo.src, tt.addImage(st, 10 + $.logo.margin.left, ot - 5 + $.logo.margin.top, $.logo.width, $.logo.height)
							}
							tt.setTextColor(it), ot += 4, ot += 4, tt.text(et - 10, ot, $.business.address, "right"), ot += 4, tt.text(et - 10, ot, $.business.phone, "right"), tt.setFontSize(at), ot += 4, tt.text(et - 10, ot, $.business.email, "right"), ot += 4, tt.text(et - 10, ot, $.business.email_1, "right"), ot += 4, tt.text(et - 10, ot, $.business.website, "right"), $.invoice.header.length && (ot += 4, tt.line(10, ot, et - 10, ot)), tt.setTextColor(it), tt.setFontSize(at), ot += 6, $.contact.label && (tt.text(10, ot, $.contact.label), ot += 6), tt.setTextColor(rt), tt.setFontSize(15), $.contact.name && tt.text(10, ot, $.contact.name), $.invoice.label && $.invoice.num && tt.text(et - 10, ot, $.invoice.label + $.invoice.num, "right"), ($.contact.name || $.invoice.label && $.invoice.num) && (ot += 4), tt.setTextColor(it), tt.setFontSize(8), ($.contact.address || $.invoice.invDate) && (tt.text(10, ot, $.contact.address), tt.text(et - 10, ot, $.invoice.invDate, "right"), ot += 4), ($.contact.phone || $.invoice.invGenDate) && (tt.text(10, ot, $.contact.phone), tt.text(et - 10, ot, $.invoice.invGenDate, "right"), ot += 4), $.contact.email && (tt.text(10, ot, $.contact.email), ot += 4), $.contact.otherInfo ? tt.text(10, ot, $.contact.otherInfo) : ot -= 4;
							var ct = (tt.getPageWidth() - 20) / $.invoice.header.length;
							if ($.invoice.header.length > 2) {
								const t = $.invoice.header.map((t => {
									var e;
									return (null == t || null === (e = t.style) || void 0 === e ? void 0 : e.width) || 0
								})).filter((t => t > 0));
								let e = t.reduce(((t, e) => t + e), 0);
								ct = (tt.getPageWidth() - 20 - e) / ($.invoice.header.length - t.length)
							}
							var ut = () => {
								$.invoice.headerBorder && (() => {
									ot += 2;
									let t = 0;
									for (let o = 0; o < $.invoice.header.length; o++) {
										var e, n;
										const a = (null === (e = $.invoice.header[o]) || void 0 === e || null === (n = e.style) || void 0 === n ? void 0 : n.width) || ct;
										if (0 === o) tt.rect(10, ot, a, 7);
										else {
											var r, i;
											const e = (null === (r = $.invoice.header[o - 1]) || void 0 === r || null === (i = r.style) || void 0 === i ? void 0 : i.width) || ct;
											t += a == e ? a : e, tt.rect(t + 10, ot, a, 7)
										}
									}
									ot -= 2
								})(), ot += 4, tt.setTextColor(rt), tt.setFontSize(at), tt.setDrawColor(it), ot += 2;
								let t = 0;
								$.invoice.header.forEach((function(e, n) {
									if (0 == n) tt.text(e.title, 11, ot);
									else {
										var r, i, o;
										const a = (null == e || null === (r = e.style) || void 0 === r ? void 0 : r.width) || ct,
											s = (null === (i = $.invoice.header[n - 1]) || void 0 === i || null === (o = i.style) || void 0 === o ? void 0 : o.width) || ct;
										t += a == s ? a : s, tt.text(e.title, t + 11, ot)
									}
								})), ot += 3, tt.setTextColor(it)
							};
							ut();
							var lt = $.invoice.table.length;
							$.invoice.table.forEach((function(t, e) {
								tt.line(10, ot, et - 10, ot);
								var n = Math.max(... function() {
									let e = [];
									return t.forEach((function(t, n) {
										var r, i;
										const o = (null === (r = $.invoice.header[n]) || void 0 === r || null === (i = r.style) || void 0 === i ? void 0 : i.width) || ct;
										let a = Q(t.toString(), o - 1);
										e.push(a.height)
									})), e
								}());
								$.invoice.tableBodyBorder && (t => {
									let e = 0;
									for (let a = 0; a < $.invoice.header.length; a++) {
										var n, r;
										const s = (null === (n = $.invoice.header[a]) || void 0 === n || null === (r = n.style) || void 0 === r ? void 0 : r.width) || ct;
										if (0 === a) tt.rect(10, ot, s, t);
										else {
											var i, o;
											const n = (null === (i = $.invoice.header[a - 1]) || void 0 === i || null === (o = i.style) || void 0 === o ? void 0 : o.width) || ct;
											e += s == n ? s : n, tt.rect(e + 10, ot, s, t)
										}
									}
								})(n + 1);
								let r = 0;
								t.forEach((function(t, e) {
									var n, i;
									const o = (null === (n = $.invoice.header[e]) || void 0 === n || null === (i = n.style) || void 0 === i ? void 0 : i.width) || ct;
									let a = Q(t.toString(), o - 1);
									if (0 == e) tt.text(a.text, 11, ot + 4);
									else {
										var s, c, u;
										const n = (null == t || null === (s = t.style) || void 0 === s ? void 0 : s.width) || ct,
											i = (null === (c = $.invoice.header[e - 1]) || void 0 === c || null === (u = c.style) || void 0 === u ? void 0 : u.width) || ct;
										r += n == i ? n : i, tt.text(a.text, 11 + r, ot + 4)
									}
								})), ot += n - 4, ot += 5, e + 1 < lt && (ot += n), $.orientationLandscape && (ot > 185 || ot > 178 && tt.getNumberOfPages() > 1) && (tt.addPage(), ot = 10, e + 1 < lt && ut()), !$.orientationLandscape && (ot > 265 || ot > 255 && tt.getNumberOfPages() > 1) && (tt.addPage(), ot = 10, e + 1 < lt && ut()), e + 1 < lt && ot > 30 && (ot -= n)
							}));
							var ht = Q($.invoice.invDesc, et / 2).height,
								ft = function() {
									!$.orientationLandscape && ot + ht > 270 && (tt.addPage(), ot = 10)
								},
								dt = function(t = 173) {
									$.orientationLandscape && ot + ht > t && (tt.addPage(), ot = 10)
								};
							if (dt(), ft(), tt.setTextColor(rt), tt.setFontSize(12), ot += 6, $.invoice.header.length && ($.invoice.invTotal || $.invoice.invTotalLabel || $.invoice.invCurrency) && (tt.line(et / 2, ot, et - 10, ot), ot += 6), tt.text(et / 1.5, ot, $.invoice.invTotalLabel, "right"), tt.text(et - 25, ot, $.invoice.invTotal, "right"), tt.text(et - 10, ot, $.invoice.invCurrency, "right"), $.invoice.row1 && ($.invoice.row1.col1 || $.invoice.row1.col2 || $.invoice.row1.col3) && (ot += 6, tt.setFontSize($.invoice.row1.style.fontSize), tt.text(et / 1.5, ot, $.invoice.row1.col1, "right"), tt.text(et - 25, ot, $.invoice.row1.col2, "right"), tt.text(et - 10, ot, $.invoice.row1.col3, "right")), $.invoice.row2 && ($.invoice.row2.col1 || $.invoice.row2.col2 || $.invoice.row2.col3) && (ot += 6, tt.setFontSize($.invoice.row2.style.fontSize), tt.text(et / 1.5, ot, $.invoice.row2.col1, "right"), tt.text(et - 25, ot, $.invoice.row2.col2, "right"), tt.text(et - 10, ot, $.invoice.row2.col3, "right")), dt(), ft(), tt.setTextColor(rt), ot += 4, ot += 4, tt.setFontSize(12), tt.getNumberOfPages() > 1)
								for (let t = 1; t <= tt.getNumberOfPages(); t++) tt.setFontSize(8), tt.setTextColor(it), $.pageEnable && (tt.text(et / 2, nt - 10, $.footer.text, "center"), tt.setPage(t), tt.text($.pageLabel + " " + t + " / " + tt.getNumberOfPages(), et - 20, tt.internal.pageSize.height - 6)), dt(183), ft();
							(() => {
								tt.setFontSize(12), tt.setTextColor(rt), tt.text($.invoice.invDescLabel, 10, ot), ot += 4, tt.setTextColor(it), tt.setFontSize(9);
								var t = tt.splitTextToSize($.invoice.invDesc, et / 2);
								tt.text(t, 10, ot), ot += tt.getTextDimensions(t).h > 5 ? tt.getTextDimensions(t).h + 6 : 6
							})(), 1 === tt.getNumberOfPages() && $.pageEnable && (tt.setFontSize(8), tt.setTextColor(it), tt.text(et / 2, nt - 10, $.footer.text, "center"), tt.text($.pageLabel + "1 / 1", et - 20, tt.internal.pageSize.height - 6));
							let pt = {
								pagesNumber: tt.getNumberOfPages()
							};
							if ($.returnJsPDFDocObject && (pt = {
									...pt,
									jsPDFDocObject: tt
								}), "save" === $.outputType) tt.save($.fileName);
							else if ("blob" === $.outputType) {
								const t = tt.output("blob");
								pt = {
									...pt,
									blob: t
								}
							} else "datauristring" === $.outputType ? pt = {
								...pt,
								dataUriString: tt.output("datauristring", {
									filename: $.fileName
								})
							} : "arraybuffer" === $.outputType ? pt = {
								...pt,
								arrayBuffer: tt.output("arraybuffer")
							} : tt.output($.outputType, {
								filename: $.fileName
							});
							return pt
						}
				}
			},
			o = {};

		function a(t) {
			if (o[t]) return o[t].exports;
			var e = o[t] = {
				exports: {}
			};
			return i[t].call(e.exports, e, e.exports, a), e.exports
		}
		return a.m = i, a.n = t => {
			var e = t && t.__esModule ? () => t.default : () => t;
			return a.d(e, {
				a: e
			}), e
		}, e = Object.getPrototypeOf ? t => Object.getPrototypeOf(t) : t => t.__proto__, a.t = function(n, r) {
			if (1 & r && (n = this(n)), 8 & r) return n;
			if ("object" == typeof n && n) {
				if (4 & r && n.__esModule) return n;
				if (16 & r && "function" == typeof n.then) return n
			}
			var i = Object.create(null);
			a.r(i);
			var o = {};
			t = t || [null, e({}), e([]), e(e)];
			for (var s = 2 & r && n;
				"object" == typeof s && !~t.indexOf(s); s = e(s)) Object.getOwnPropertyNames(s).forEach((t => o[t] = () => n[t]));
			return o.default = () => n, a.d(i, o), i
		}, a.d = (t, e) => {
			for (var n in e) a.o(e, n) && !a.o(t, n) && Object.defineProperty(t, n, {
				enumerable: !0,
				get: e[n]
			})
		}, a.f = {}, a.e = t => Promise.all(Object.keys(a.f).reduce(((e, n) => (a.f[n](t, e), e)), [])), a.u = t => t + ".index.js", a.g = function() {
			if ("object" == typeof globalThis) return globalThis;
			try {
				return this || new Function("return this")()
			} catch (t) {
				if ("object" == typeof window) return window
			}
		}(), a.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e), n = {}, r = "jsPDFInvoiceTemplate:", a.l = (t, e, i, o) => {
			if (n[t]) n[t].push(e);
			else {
				var s, c;
				if (void 0 !== i)
					for (var u = document.getElementsByTagName("script"), l = 0; l < u.length; l++) {
						var h = u[l];
						if (h.getAttribute("src") == t || h.getAttribute("data-webpack") == r + i) {
							s = h;
							break
						}
					}
				s || (c = !0, (s = document.createElement("script")).charset = "utf-8", s.timeout = 120, a.nc && s.setAttribute("nonce", a.nc), s.setAttribute("data-webpack", r + i), s.src = t), n[t] = [e];
				var f = (e, r) => {
						s.onerror = s.onload = null, clearTimeout(d);
						var i = n[t];
						if (delete n[t], s.parentNode && s.parentNode.removeChild(s), i && i.forEach((t => t(r))), e) return e(r)
					},
					d = setTimeout(f.bind(null, void 0, {
						type: "timeout",
						target: s
					}), 12e4);
				s.onerror = f.bind(null, s.onerror), s.onload = f.bind(null, s.onload), c && document.head.appendChild(s)
			}
		}, a.r = t => {
			"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
				value: "Module"
			}), Object.defineProperty(t, "__esModule", {
				value: !0
			})
		}, a.p = "", (() => {
			var t = {
				179: 0
			};
			a.f.j = (e, n) => {
				var r = a.o(t, e) ? t[e] : void 0;
				if (0 !== r)
					if (r) n.push(r[2]);
					else {
						var i = new Promise(((n, i) => {
							r = t[e] = [n, i]
						}));
						n.push(r[2] = i);
						var o = a.p + a.u(e),
							s = new Error;
						a.l(o, (n => {
							if (a.o(t, e) && (0 !== (r = t[e]) && (t[e] = void 0), r)) {
								var i = n && ("load" === n.type ? "missing" : n.type),
									o = n && n.target && n.target.src;
								s.message = "Loading chunk " + e + " failed.\n(" + i + ": " + o + ")", s.name = "ChunkLoadError", s.type = i, s.request = o, r[1](s)
							}
						}), "chunk-" + e, e)
					}
			};
			var e = (e, n) => {
					for (var r, i, [o, s, c] = n, u = 0, l = []; u < o.length; u++) i = o[u], a.o(t, i) && t[i] && l.push(t[i][0]), t[i] = 0;
					for (r in s) a.o(s, r) && (a.m[r] = s[r]);
					for (c && c(a), e && e(n); l.length;) l.shift()()
				},
				n = this.webpackChunkjsPDFInvoiceTemplate = this.webpackChunkjsPDFInvoiceTemplate || [];
			n.forEach(e.bind(null, 0)), n.push = e.bind(null, n.push.bind(n))
		})(), a(6857)
	})()
}));