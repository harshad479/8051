webpackJsonp([1], {
	106: function (t, a, r) {
		"use strict";
		var n = function () {
			var t = this,
				a = t.$createElement,
				r = t._self._c || a;
			return r("div", {
				attrs: {
					id: "editor"
				}
			}, [r("div", {
				directives: [{
					name: "show",
					rawName: "v-show",
					value: t.isError,
					expression: "isError"
				}],
				staticClass: "ui large negative message"
			}, [r("div", {
				staticClass: "header"
			}, [t._v("\n      Error at line " + t._s(t.lineNumber) + "\n    ")]), t._v(" "), r("p", [t._v(t._s(t.errorMessage))])]), t._v(" "), r("pre", {
				attrs: {
					id: "ace-editor"
				}
			}, [t._v(t._s(t.code))]), t._v(" "), t._m(0)])
		},
			e = [function () {
				var t = this,
					a = t.$createElement,
					r = t._self._c || a;
				return r("div", {
					staticClass: "ui buttons",
					attrs: {
						id: "buttons"
					}
				}, [r("button", {
					staticClass: "ui green button",
					attrs: {
						id: "run-btn"
					}
				}, [t._v("Run")]), t._v(" "), r("div", {
					staticClass: "or"
				}), t._v(" "), r("button", {
					staticClass: "ui blue button",
					attrs: {
						id: "debug-btn"
					}
				}, [t._v("Debug")]), t._v(" "), r("div", {
					staticClass: "or"
				}), t._v(" "), r("button", {
					staticClass: "ui grey button",
					attrs: {
						id: "reset-btn"
					}
				}, [t._v("Reset")])])
			}],
			s = {
				render: n,
				staticRenderFns: e
			};
		a.a = s
	},
	107: function (t, a, r) {
		"use strict";
		var n = function () {
			var t = this,
				a = t.$createElement,
				r = t._self._c || a;
			return r("div", {
				staticClass: "", //ui two column stackable grid
				attrs: {
					id: "app"
				}
			}, [t.showModal ? r("intro-modal", {
				on: {
					closeModal: function (a) {
						t.showModal = !1
					}
				}
			}) : t._e(), t._v(" "), t._m(0),

			r("div", {
				staticClass: "heading"
			}, [r("h2", {
				staticClass: "ui header title"
			}, [t._v("8051_Simulator")]), t._v(" "), r("div", {
				staticClass: "ui stackable labels"		//title class is mine
			}, [r("span", {
				staticClass: "ui green label"
			}, [t._v("Current line")]), t._v(" "), r("span", {
				staticClass: "ui blue label"
			}, [t._v("Next line (PC)")]), t._v(" "), r("span", {
				staticClass: "ui red label"
			}, [t._v("Error line")])])]),

			t._v(" "), r("div", {
				staticClass: "row"
			}, [r("editor")], 1),

			// buttons for my extra functinality Start
			r("div", {
				staticClass: "btn-grp",
				attrs: {
					id: "buttons"
				}
			}, [r("button", {
				staticClass: "my-btn",
				attrs: {
					id: "myBtn1"
				}
			}, [t._v("Number System Converter")]), t._v(" "),  t._v(" "), r("button", {
				staticClass: "my-btn",
				attrs: {
					id: "myBtn"
				}
			}, [t._v("Notepad")]),  ]),
			// buttons for my extra functinality End

			r("div", {
				staticClass: "heading"
			}, [r("h2", {
				staticClass: "ui header title"
			}, [t._v("Memory")])]),

			r("div", {
				staticClass: "row"
			}, [r("memory")], 1),], 1)
		},

			e = [function () {
				var t = this,
					a = t.$createElement,
					r = t._self._c || a;
				return r("div", {
					staticClass: "row"
				})
			}],
			s = {
				render: n,
				staticRenderFns: e
			};
		a.a = s
	},
	108: function (t, a, r) {
		"use strict";
		var n = r(109),
			e = r(110),
			s = r(6),
			i = s(n.a, e.a, null, null, null);
		a.a = i.exports
	},
	109: function (t, a, r) {
		"use strict";
		var n = r(10),
			e = r(2);
		r.n(e);
		a.a = {
			data: function () {
				return {
					portNum: 0
				}
			},
			computed: n.b(["getP0", "getP1", "getP2", "getP3"]),
			mounted: function () {
				var t = this,
					a = this.$store.state.utils.convertToBin;
				this.$store.subscribe(function () {
					var r = a(t["getP" + t.portNum]());
					e.forEach(e.range(7), function (a) {
						t.$el.querySelector("#segment" + a).style.fill = "1" === r[7 - a] ? "red" : "none"
					})
				})
			}
		}
	},
	110: function (t, a, r) {
		"use strict";
		var n = function () {
			var t = this,
				a = t.$createElement,
				r = t._self._c || a;
			return r("div", [r("svg", {
				attrs: {
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 156 195.6",
					version: "1"
				}
			}, [r("g", {
				attrs: {
					fill: "none",
					stroke: "#000",
					transform: "translate(-82 -56.5)"
				}
			}, [r("path", {
				attrs: {
					id: "segment6",
					d: "M190.8 72.5 175.6 88h-59L101 72.5 116.7 57h59L191 72.5z"
				}
			}), t._v(" "), r("text", {
				attrs: {
					x: "141.7",
					y: "77.1",
					"font-family": "sans-serif"
				}
			}, [r("tspan", [t._v("A")])]), t._v(" "), r("path", {
				attrs: {
					id: "segment5",
					d: "M194 75.4l15.5 15.2v45L194 151l-15.5-15.4v-45L194 75.4z"
				}
			}), t._v(" "), r("text", {
				attrs: {
					x: "189.5",
					y: "117.8",
					"font-family": "sans-serif"
				}
			}, [r("tspan", [t._v("B")])]), t._v(" "), r("path", {
				attrs: {
					id: "segment4",
					d: "M194 157.4l15.5 15.3v45L194 233.2l-15.5-15.5v-45l15.5-15.3z"
				}
			}), t._v(" "), r("text", {
				attrs: {
					x: "189.6",
					y: "199.9",
					"font-family": "sans-serif"
				}
			}, [r("tspan", [t._v("C")])]), t._v(" "), r("path", {
				attrs: {
					id: "segment3",
					d: "M190.8 236l-15.2 15.6h-59L101 236l15.6-15.4h59l15.2 15.5z"
				}
			}), t._v(" "), r("text", {
				attrs: {
					x: "140.9",
					y: "240.6",
					"font-family": "sans-serif"
				}
			}, [r("tspan", [t._v("D")])]), t._v(" "), r("path", {
				attrs: {
					id: "segment2",
					d: "M98 157.4l15.5 15.3v45L98 233.2l-15.5-15.5v-45L98 157.4z"
				}
			}), t._v(" "), r("text", {
				attrs: {
					x: "93.8",
					y: "199.9",
					"font-family": "sans-serif"
				}
			}, [r("tspan", [t._v("E")])]), t._v(" "), r("path", {
				attrs: {
					id: "segment1",
					d: "M98 75.4l15.5 15.2v45L98 151l-15.5-15.4v-45L98 75.4z"
				}
			}), t._v(" "), r("text", {
				attrs: {
					x: "94.2",
					y: "117.8",
					"font-family": "sans-serif"
				}
			}, [r("tspan", [t._v("F")])]), t._v(" "), r("path", {
				attrs: {
					id: "segment0",
					d: "M190.8 154l-15.2 15.5h-59L101 154l15.6-15.5h59l15.2 15.5z"
				}
			}), t._v(" "), r("text", {
				attrs: {
					x: "141.2",
					y: "158.6",
					"font-family": "sans-serif"
				}
			}, [r("tspan", [t._v("G")])]), t._v(" "), r("circle", {
				attrs: {
					cx: "225.3",
					cy: "239.3",
					r: "12.3",
					"stroke-linecap": "round"
				}
			}), t._v(" "), r("text", {
				attrs: {
					x: "216.7",
					y: "244.7",
					"font-family": "sans-serif"
				}
			}, [r("tspan", [t._v("DP")])])])]), t._v(" "), r("select", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: t.portNum,
					expression: "portNum"
				}],
				attrs: {
					id: "port-select"
				},
				on: {
					change: function (a) {
						var r = Array.prototype.filter.call(a.target.options, function (t) {
							return t.selected
						}).map(function (t) {
							return "_value" in t ? t._value : t.value
						});
						t.portNum = a.target.multiple ? r : r[0]
					}
				}
			}, t._l(4, function (a) {
				return r("option", {
					domProps: {
						value: a - 1
					}
				}, [t._v("Port " + t._s(a - 1))])
			}))])
		},
			e = [],
			s = {
				render: n,
				staticRenderFns: e
			};
		a.a = s
	},
	111: function (t, a, r) {
		"use strict";

		function n(t) {
			r(112)
		}
		var e = r(113),
			s = r(114),
			i = r(6),
			o = n,
			c = i(e.a, s.a, o, "data-v-7dbd12a1", null);
		a.a = c.exports
	},
	112: function (t, a) { },
	113: function (t, a, r) {
		"use strict";
		var n = r(35),
			e = r.n(n),
			s = r(10),
			i = r(2);
		r.n(i);
		a.a = {
			data: function () {
				return {
					portPinNum1: 0,
					portPinNum2: .1
				}
			},
			computed: e.a({}, s.b(["getP0", "getP1", "getP2", "getP3"]), {
				portNum1: function () {
					return i.floor(this.portPinNum1)
				},
				portNum2: function () {
					return i.floor(this.portPinNum2)
				},
				pinNum1: function () {
					return i.floor(10 * (this.portPinNum1 % 1).toFixed(1))
				},
				pinNum2: function () {
					return i.floor(10 * (this.portPinNum2 % 1).toFixed(1))
				}
			}),
			mounted: function () {
				var t = this,
					a = this.$store.state.utils.convertToBin,
					r = this.$el.querySelector("#rotator");
				this.$store.subscribe(function () {
					var n = a(t["getP" + t.portNum1]())[7 - t.pinNum1],
						e = a(t["getP" + t.portNum2]())[7 - t.pinNum2],
						s = "";
					s = n === e ? "neutral" : "1" === n && "0" === e ? "clockwise" : "counter-clockwise", i.forEach(r.children, function (t) {
						t.setAttribute("class", "motor " + s), r.replaceChild(t.cloneNode(!0), t)
					})
				})
			}
		}
	},
	114: function (t, a, r) {
		"use strict";
		var n = function () {
			var t = this,
				a = t.$createElement,
				r = t._self._c || a;
			return r("div", [r("svg", {
				attrs: {
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 340 406.8",
					version: "1"
				}
			}, [r("g", {
				attrs: {
					fill: "none",
					stroke: "#000"
				}
			}, [r("g", {
				attrs: {
					transform: "rotate(-90 82.933 439.114)"
				}
			}, [r("circle", {
				attrs: {
					cx: "372",
					cy: "526.2",
					r: "149.5"
				}
			}), t._v(" "), r("path", {
				attrs: {
					d: "M115.2 695.7H372v-20m-256.8-319H372v19.7"
				}
			})]), t._v(" "), r("g", {
				attrs: {
					id: "rotator",
					"stroke-width": "10px",
					transform: "translate(-202.047 -376.18)"
				}
			}, [r("circle", {
				staticClass: "motor neutral",
				attrs: {
					cx: "372",
					cy: "526.2",
					r: "124",
					"stroke-width": ".8"
				}
			}), t._v(" "), r("path", {
				staticClass: "motor neutral",
				attrs: {
					d: "M379.7 387.5l-15 15 15 15M364.4 635l15 15-15 15"
				}
			})])])]), t._v(" "), r("select", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: t.portPinNum1,
					expression: "portPinNum1"
				}],
				attrs: {
					id: "port-pin1-select"
				},
				on: {
					change: function (a) {
						var r = Array.prototype.filter.call(a.target.options, function (t) {
							return t.selected
						}).map(function (t) {
							return "_value" in t ? t._value : t.value
						});
						t.portPinNum1 = a.target.multiple ? r : r[0]
					}
				}
			}, t._l(4, function (a) {
				return r("optgroup", {
					attrs: {
						label: "Port " + (a - 1)
					}
				}, t._l(8, function (n) {
					return r("option", {
						domProps: {
							value: a - 1 + (n - 1) / 10
						}
					}, [t._v("Pin P" + t._s(a - 1 + "." + (n - 1)))])
				}))
			})), t._v(" "), r("select", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: t.portPinNum2,
					expression: "portPinNum2"
				}],
				attrs: {
					id: "port-pin2-select"
				},
				on: {
					change: function (a) {
						var r = Array.prototype.filter.call(a.target.options, function (t) {
							return t.selected
						}).map(function (t) {
							return "_value" in t ? t._value : t.value
						});
						t.portPinNum2 = a.target.multiple ? r : r[0]
					}
				}
			}, t._l(4, function (a) {
				return r("optgroup", {
					attrs: {
						label: "Port " + (a - 1)
					}
				}, t._l(8, function (n) {
					return r("option", {
						domProps: {
							value: a - 1 + (n - 1) / 10
						}
					}, [t._v("Pin P" + t._s(a - 1 + "." + (n - 1)))])
				}))
			}))])
		},
			e = [],
			s = {
				render: n,
				staticRenderFns: e
			};
		a.a = s
	},
	115: function (t, a, r) {
		"use strict";

		function n(t) {
			r(116)
		}
		var e = r(117),
			s = r(118),
			i = r(6),
			o = n,
			c = i(e.a, s.a, o, "data-v-5eac95cb", null);
		a.a = c.exports
	},
	116: function (t, a) { },
	117: function (t, a, r) {
		"use strict";
		var n = r(35),
			e = r.n(n),
			s = r(10),
			i = r(2);
		r.n(i);
		a.a = {
			data: function () {
				return {
					negVref: 0,
					portNum: 0,
					portValue: 0,
					posVref: 5,
					vin: 0
				}
			},
			computed: e.a({}, s.b(["getP0", "getP1", "getP2", "getP3"]), {
				effVref: function () {
					return this.posVref - this.negVref
				}
			}),
			watch: {
				portValue: function (t) {
					this.vin = t * (this.effVref / 255) + this.negVref, this.setPort([this.portNum, i.round(t)])
				},
				vin: function (t) {
					this.portValue = (t - this.negVref) * (255 / this.effVref)
				}
			},
			methods: s.c(["setPort"]),
			mounted: function () {
				var t = this;
				this.$store.subscribe(function (a) {
					if ("setPort" !== a.type) {
						var r = t["getP" + t.portNum]();
						t.portValue = r
					}
				})
			}
		}
	},
	118: function (t, a, r) {
		"use strict";
		var n = function () {
			var t = this,
				a = t.$createElement,
				r = t._self._c || a;
			return r("div", {
				staticClass: "ui padded basic segment"
			}, [r("input", {
				directives: [{
					name: "model",
					rawName: "v-model.number",
					value: t.posVref,
					expression: "posVref",
					modifiers: {
						number: !0
					}
				}],
				attrs: {
					type: "number"
				},
				domProps: {
					value: t.posVref
				},
				on: {
					input: function (a) {
						a.target.composing || (t.posVref = t._n(a.target.value))
					},
					blur: function (a) {
						t.$forceUpdate()
					}
				}
			}), t._v(" "), r("input", {
				directives: [{
					name: "model",
					rawName: "v-model.number",
					value: t.portValue,
					expression: "portValue",
					modifiers: {
						number: !0
					}
				}],
				attrs: {
					type: "range",
					id: "adc-dac-range",
					max: "255"
				},
				domProps: {
					value: t.portValue
				},
				on: {
					__r: function (a) {
						t.portValue = t._n(a.target.value)
					},
					blur: function (a) {
						t.$forceUpdate()
					}
				}
			}), t._v(" "), r("input", {
				directives: [{
					name: "model",
					rawName: "v-model.number",
					value: t.vin,
					expression: "vin",
					modifiers: {
						number: !0
					}
				}],
				attrs: {
					type: "number",
					id: "vin",
					min: t.negVref,
					max: t.posVref,
					step: "any"
				},
				domProps: {
					value: t.vin
				},
				on: {
					input: function (a) {
						a.target.composing || (t.vin = t._n(a.target.value))
					},
					blur: function (a) {
						t.$forceUpdate()
					}
				}
			}), t._v(" "), r("input", {
				directives: [{
					name: "model",
					rawName: "v-model.number",
					value: t.negVref,
					expression: "negVref",
					modifiers: {
						number: !0
					}
				}],
				attrs: {
					type: "number",
					id: "negVref"
				},
				domProps: {
					value: t.negVref
				},
				on: {
					input: function (a) {
						a.target.composing || (t.negVref = t._n(a.target.value))
					},
					blur: function (a) {
						t.$forceUpdate()
					}
				}
			}), t._v(" "), r("select", {
				directives: [{
					name: "model",
					rawName: "v-model",
					value: t.portNum,
					expression: "portNum"
				}],
				attrs: {
					id: "port-select"
				},
				on: {
					change: function (a) {
						var r = Array.prototype.filter.call(a.target.options, function (t) {
							return t.selected
						}).map(function (t) {
							return "_value" in t ? t._value : t.value
						});
						t.portNum = a.target.multiple ? r : r[0]
					}
				}
			}, t._l(4, function (a) {
				return r("option", {
					domProps: {
						value: a - 1
					}
				}, [t._v("Port " + t._s(a - 1))])
			}))])
		},
			e = [],
			s = {
				render: n,
				staticRenderFns: e
			};
		a.a = s
	},
	119: function (t, a, r) {
		"use strict";

		function n(t) {
			return o.a.handleExecution(t)
		}

		function e(t) {
			return o.a.executeNextLine(t)
		}

		function s(t) {
			o.a.initValues(t)
		}
		var i = r(36),
			o = r(39);
		a.a = {
			debug: e,
			memory: i.a,
			run: n,
			utils: o.a,
			reset: s
		}
	},
	147: function (t, a, r) {
		"use strict";

		function n(t) {
			var a = Z.a.translateToBitAddressable(t),
				r = K.a(a, 2),
				n = r[0],
				e = r[1],
				s = Z.a.changeBit(n, e, 1);
			Y.a.ram[n] = Q.parseInt(s, 2)
		}

		function e(t) {
			var a = Z.a.translateToBitAddressable(t),
				r = K.a(a, 2),
				n = r[0],
				e = r[1];
			if (Q.isUndefined(e)) Y.a.ram[n] = 0;
			else {
				var s = Z.a.changeBit(n, e, 0);
				Y.a.ram[n] = Q.parseInt(s, 2)
			}
		}

		function s(t, a) {
			var r, s, i, o = Y.a.sfrMap.get("PSW") + ".7",
				c = [Y.a.sfrMap.get("PSW"), 7],
				u = c[0],
				l = c[1],
				f = Z.a.translateToBitAddressable(a),
				d = K.a(f, 2),
				m = d[0],
				v = d[1];
			t === o || a === o && (r = [Y.a.sfrMap.get("PSW"), 7], m = r[0], v = r[1], r) && (s = Z.a.translateToBitAddressable(t), i = K.a(s, 2), u = i[0], l = i[1], s) ? Z.a.isBitSet(m, v) ? n(u + "." + l) : e(u + "." + l) : Y.a.ram[t] = Y.a.ram[a]
		}

		function i(t) {
			var a = Z.a.translateToBitAddressable(t),
				r = K.a(a, 2),
				s = r[0],
				i = r[1];
			Q.isUndefined(i) ? Y.a.ram[s] = 255 - Y.a.ram[s] : Z.a.isBitSet(s, i) ? e(t) : n(t)
		}

		function o(t, a) {
			var r = Q.map([t, a], function (t) {
				return Y.a.ram[t]
			}),
				s = K.a(r, 2),
				i = s[0],
				o = s[1],
				c = Q.map([i, o], function (t) {
					return Q.parseInt(Z.a.convertToBin(t).slice(4), 2)
				}),
				u = K.a(c, 2),
				l = u[0],
				f = u[1],
				d = Y.a.sfrMap.get("PSW");
			l + f > 15 ? n(d + ".6") : e(d + ".6"), i + o > 255 ? (n(d + ".2"), n(d + ".7")) : (e(d + ".2"), e(d + ".7")), Y.a.ram[t] = i + o
		}

		function c(t, a) {
			Y.a.ram[t] += Z.a.isBitSet(Y.a.sfrMap.get("PSW"), 7) ? 1 : 0, o(t, a)
		}

		function u(t, a) {
			var r = Q.map([t, a], function (t) {
				return Y.a.ram[t]
			}),
				s = K.a(r, 2),
				i = s[0],
				o = s[1],
				c = Q.map([i, o], function (t) {
					return Q.parseInt(Z.a.convertToBin(t).slice(4), 2)
				}),
				u = K.a(c, 2),
				l = u[0],
				f = u[1],
				d = Y.a.sfrMap.get("PSW");
			l < f ? n(d + ".6") : e(d + ".6"), i < o ? n(d + ".7") : e(d + ".7"), Y.a.ram[t] = i - (Z.a.isBitSet(d, 7) ? 1 : 0) - o
		}

		function l(t) {
			var a = Y.a.sfrMap.get("PSW"),
				r = Y.a.sfrMap.get("A"),
				s = Y.a.sfrMap.get("B"),
				i = Y.a.ram[r] * Y.a.ram[s];
			if (e(a + ".7"), i > 255) {
				var o = Z.a.convertToBin(i, 16);
				n(a + ".2"), Y.a.ram[r] = Q.parseInt(o.slice(8), 2), Y.a.ram[s] = Q.parseInt(o.slice(0, 8), 2)
			} else e(a + ".2"), Y.a.ram[r] = i, Y.a.ram[s] = 0
		}

		function f(t) {
			var a = Y.a.sfrMap.get("PSW"),
				r = Y.a.sfrMap.get("A"),
				s = Y.a.sfrMap.get("B");
			if (e(a + ".7"), 0 === Y.a.ram[s]) n(a + ".2"), Y.a.ram[r] = 0, Y.a.ram[s] = 0;
			else {
				e(a + ".2");
				var i = Q.floor(Y.a.ram[r] / Y.a.ram[s]),
					o = Y.a.ram[r] % Y.a.ram[s];
				Y.a.ram[r] = i, Y.a.ram[s] = o
			}
		}

		function d(t) {
			Y.a.programCounter = Y.a.labels.get(t.toLowerCase())
		}

		function m(t) {
			d(t)
		}

		function v(t) {
			d(t)
		}

		function p(t) {
			d(t)
		}

		function g(t, a) {
			Y.a.ram[t] -= 1, Y.a.ram[t] > 0 && d(a)
		}

		function _(t, a, r, n) {
			var s = Z.a.translateToBitAddressable(t),
				i = K.a(s, 2),
				o = i[0],
				c = i[1];
			r === Z.a.isBitSet(o, c) && (n && e(t), d(a))
		}

		function h(t, a) {
			_(t, a, !0, !0)
		}

		function x(t, a) {
			_(t, a, !0, !1)
		}

		function y(t, a) {
			_(t, a, !1, !1)
		}

		function b(t) {
			x(Y.a.sfrMap.get("PSW") + ".7", t)
		}

		function P(t) {
			y(Y.a.sfrMap.get("PSW") + ".7", t)
		}

		function w(t) {
			0 === Y.a.ram[Y.a.sfrMap.get("A")] && d(t)
		}

		function M(t) {
			0 !== Y.a.ram[Y.a.sfrMap.get("A")] && d(t)
		}

		function A(t, a, r) {
			Y.a.ram[t] < Y.a.ram[a] ? n(Y.a.sfrMap.get("PSW") + ".7") : e(Y.a.sfrMap.get("PSW") + ".7"), Y.a.ram[t] !== Y.a.ram[a] && d(r)
		}

		function C(t) {
			return Y.a.ram[Y.a.sfrMap.get("SP")] + 2 > 127 ? {
				status: !1,
				msg: "Stack Overflow"
			} : (Y.a.programCounterStack.push(Y.a.programCounter), Y.a.ram[Y.a.ram[Y.a.sfrMap.get("SP")] + 1] = Y.a.programCounter, Y.a.ram[Y.a.ram[Y.a.sfrMap.get("SP")] + 2] = Y.a.programCounter, Y.a.ram[Y.a.sfrMap.get("SP")] += 2, d(t), {
				status: !0
			})
		}

		function I(t) {
			return C(t)
		}

		function S(t) {
			return C(t)
		}

		function B(t) {
			Y.a.ram[t] += 1
		}

		function E(t) {
			Y.a.ram[t] -= 1
		}

		function N() { }

		function R() {
			var t = Z.a.convertToBin(Y.a.ram[Y.a.sfrMap.get("A")]);
			(Q.countBy(Q.toArray(t))[1] || 0) % 2 == 0 ? e(Y.a.sfrMap.get("PSW") + ".0") : n(Y.a.sfrMap.get("PSW") + ".0")
		}

		function $(t, a, r) {
			var s = Z.a.convertToBin(Y.a.ram[Y.a.sfrMap.get("A")]),
				i = void 0,
				o = void 0;
			i = Z.a.isBitSet(Y.a.sfrMap.get("PSW"), 7) ? "1" : "0", a ? r ? (o = "" + i + s.slice(0, 7), "1" === s.slice(-1) ? n(Y.a.sfrMap.get("PSW") + ".7") : e(Y.a.sfrMap.get("PSW") + ".7")) : o = "" + s.slice(-1) + s.slice(0, 7) : r ? (o = "" + s.slice(1, 8) + i, "1" === s.slice(0, 1) ? n(Y.a.sfrMap.get("PSW") + ".7") : e(Y.a.sfrMap.get("PSW") + ".7")) : o = "" + s.slice(1, 8) + s.slice(0, 1), Y.a.ram[Y.a.sfrMap.get("A")] = parseInt(o, 2)
		}

		function k(t) {
			$(t, !0, !1)
		}

		function L(t) {
			$(t, !0, !0)
		}

		function T(t) {
			$(t, !1, !1)
		}

		function V(t) {
			$(t, !1, !0)
		}

		function j(t) {
			var a = Z.a.convertToBin(Y.a.ram[Y.a.sfrMap.get("A")]),
				r = a.slice(4),
				n = a.slice(0, 4);
			Y.a.ram[Y.a.sfrMap.get("A")] = parseInt("" + r + n, 2)
		}

		function O(t) {
			var a = Y.a.sfrMap.get("SP");
			Y.a.ram[a] += 1, Y.a.ram[Y.a.ram[a]] = Y.a.ram[t]
		}

		function W(t) {
			var a = Y.a.sfrMap.get("SP");
			Y.a.ram[t] = Y.a.ram[Y.a.ram[a]], Y.a.ram[a] -= 1
		}

		function z(t, a) {
			var r = Z.a.convertToBin(Y.a.ram[Y.a.sfrMap.get("A")]),
				n = Z.a.convertToBin(Y.a.ram[a]),
				e = r.slice(4),
				s = r.slice(0, 4),
				i = n.slice(4),
				o = n.slice(0, 4);
			Y.a.ram[Y.a.sfrMap.get("A")] = parseInt("" + s + i, 2), Y.a.ram[a] = parseInt("" + o + e, 2)
		}

		function U(t, a) {
			var r = Y.a.ram[t];
			Y.a.ram[t] = Y.a.ram[a], Y.a.ram[a] = r
		}

		function F(t) {
			var a = Y.a.sfrMap.get("A"),
				r = Y.a.sfrMap.get("PSW"),
				s = parseInt(Z.a.convertToBin(Y.a.ram[a]).slice(4), 2),
				i = parseInt(Z.a.convertToBin(Y.a.ram[a]).slice(0, 4), 2),
				o = 0;
			s > 9 && i > 9 ? o = 102 : s > 9 ? o = 6 : i > 9 && (o = 96), Y.a.ram[a] += o, Y.a.ram[a] > 153 ? n(r + ".7") : e(r + ".7")
		}

		function D(t, a) {
			var r = Z.a.translateToBitAddressable(t),
				s = K.a(r, 2),
				i = s[0],
				o = s[1];
			if (Q.isUndefined(o)) Y.a.ram[t] &= Y.a.ram[a];
			else {
				var c = Z.a.translateToBitAddressable(a),
					u = K.a(c, 2),
					l = u[0],
					f = u[1];
				Z.a.isBitSet(i, o) && Z.a.isBitSet(l, f) ? n(i + "." + o) : e(i + "." + o)
			}
		}

		function H(t, a) {
			var r = Z.a.translateToBitAddressable(t),
				s = K.a(r, 2),
				i = s[0],
				o = s[1];
			if (Q.isUndefined(o)) Y.a.ram[t] |= Y.a.ram[a];
			else {
				var c = Z.a.translateToBitAddressable(a),
					u = K.a(c, 2),
					l = u[0],
					f = u[1];
				Z.a.isBitSet(i, o) || Z.a.isBitSet(l, f) ? n(i + "." + o) : e(i + "." + o)
			}
		}

		function q(t, a) {
			Y.a.ram[t] ^= Y.a.ram[a]
		}

		function G() {
			var t = {
				status: !0
			};
			return Y.a.programCounterStack.length > 0 ? (Y.a.programCounter = Y.a.programCounterStack.pop(), Y.a.ram[Y.a.sfrMap.get("SP")] -= 2) : (t = {
				status: !1,
				msg: "Stack Underflow"
			}, Z.a.resetMemory = !0, Y.a.programCounter = Y.a.code.length + 1), t
		}

		function J() {
			return G()
		}
		var X = r(20),
			K = r.n(X),
			Q = r(2),
			Y = (r.n(Q), r(36)),
			Z = r(39);
		a.a = {
			setb: n,
			clr: e,
			mov: s,
			cpl: i,
			add: o,
			addc: c,
			subb: u,
			mul: l,
			div: f,
			ajmp: m,
			ljmp: v,
			sjmp: p,
			djnz: g,
			jbc: h,
			jb: x,
			jnb: y,
			jc: b,
			jnc: P,
			jz: w,
			jnz: M,
			cjne: A,
			lcall: I,
			acall: S,
			anl: D,
			orl: H,
			xrl: q,
			rl: T,
			rlc: V,
			rr: k,
			rrc: L,
			da: F,
			swap: j,
			xch: U,
			xchd: z,
			push: O,
			pop: W,
			inc: B,
			dec: E,
			nop: N,
			ret: G,
			reti: J,
			updateParity: R
		}
	},
	36: function (t, a, r) {
		"use strict";
		var n = r(48),
			e = r.n(n),
			s = r(39),
			i = new e.a([
				["A", 224],
				["B", 240],
				["PSW", 208],
				["P0", 128],
				["P1", 144],
				["P2", 160],
				["P3", 176],
				["SP", 129],
				["DPL", 130],
				["DPH", 131],
				["PCON", 135],
				["TCON", 136],
				["TMOD", 137],
				["TL0", 138],
				["TL1", 139],
				["TH0", 140],
				["TH1", 141],
				["SCON", 152],
				["SBUF", 153],
				["IE", 168],
				["IP", 184]
			]),
			o = new Uint8Array(257);
		o[i.get("SP")] = 7;
		var c = new e.a([
			["setb", function (t) {
				return 1 !== t.length ? {
					status: !1,
					msg: "Invalid number of operands"
				} : s.a.isBitAddr(t[0]) ? {
					status: !0
				} : {
							status: !1,
							msg: "Invalid operand"
						}
			}],
			["clr", function (t) {
				return 1 !== t.length ? {
					status: !1,
					msg: "Invalid number of operands"
				} : s.a.isBitAddr(t[0]) || parseInt(t[0], 10) === i.get("A") ? {
					status: !0
				} : {
							status: !1,
							msg: "Operand must be bit-address OR accumulator"
						}
			}],
			["mov", function (t) {
				if (2 !== t.length) return {
					status: !1,
					msg: "Invalid number of operands"
				};
				if (isNaN(parseInt(t[0], 10)) || isNaN(parseInt(t[1], 10))) return {
					status: !1,
					msg: "Invalid operands"
				};
				if (t[0] === i.get("PSW") + ".7" || t[1] === i.get("PSW") + ".7") {
					if (!s.a.isBitAddr(t[0]) || !s.a.isBitAddr(t[1])) return {
						status: !1,
						msg: "Invalid operands"
					}
				} else {
					if (s.a.isRtoR(t[0], t[1])) return {
						status: !1,
						msg: "Both operands cannot access register bank simultaneously"
					};
					if (s.a.isPortToPort(t[0], t[1])) return {
						status: !1,
						msg: "Cannot move data from port to port"
					};
					if (s.a.isSFRtoSFR(t[0], t[1])) return {
						status: !1,
						msg: "Both operands cannot be SFRs"
					}
				}
				return {
					status: !0
				}
			}],
			["cpl", function (t) {
				return c.get("clr")(t)
			}],
			["add", function (t) {
				return 2 !== t.length ? {
					status: !1,
					msg: "Invalid number of operands"
				} : parseInt(t[0], 10) !== i.get("A") ? {
					status: !1,
					msg: "1st operand must be accumulator"
				} : s.a.isByteAddr(t[1]) ? {
					status: !0
				} : {
								status: !1,
								msg: "Invalid 2nd operand"
							}
			}],
			["addc", function (t) {
				return c.get("add")(t)
			}],
			["subb", function (t) {
				return c.get("add")(t)
			}],
			["mul", function (t) {
				return 1 !== t.length ? {
					status: !1,
					msg: "Invalid number of operands"
				} : /^AB$/i.test(t[0]) ? {
					status: !0
				} : {
							status: !1,
							msg: "Operand must be 'AB'"
						}
			}],
			["div", function (t) {
				return c.get("mul")(t)
			}],
			["ajmp", function (t) {
				return 1 !== t.length ? {
					status: !1,
					msg: "Invalid number of operands"
				} : s.a.isLabel(t[0]) ? {
					status: !0
				} : {
							status: !1,
							msg: "Invalid label"
						}
			}],
			["ljmp", function (t) {
				return c.get("ajmp")(t)
			}],
			["sjmp", function (t) {
				return c.get("ajmp")(t)
			}],
			["djnz", function (t) {
				return 2 !== t.length ? {
					status: !1,
					msg: "Invalid number of operands"
				} : s.a.isByteAddr(t[0]) ? s.a.isLabel(t[1]) ? {
					status: !0
				} : {
						status: !1,
						msg: "Invalid label"
					} : {
							status: !1,
							msg: "Invalid 1st operand"
						}
			}],
			["jbc", function (t) {
				return 2 !== t.length ? {
					status: !1,
					msg: "Invalid number of operands"
				} : s.a.isBitAddr(t[0]) ? s.a.isLabel(t[1]) ? {
					status: !0
				} : {
						status: !1,
						msg: "Invalid label"
					} : {
							status: !1,
							msg: "Invalid 1st operand"
						}
			}],
			["jb", function (t) {
				return c.get("jbc")(t)
			}],
			["jnb", function (t) {
				return c.get("jbc")(t)
			}],
			["jc", function (t) {
				return c.get("ajmp")(t)
			}],
			["jnc", function (t) {
				return c.get("ajmp")(t)
			}],
			["jz", function (t) {
				return c.get("ajmp")(t)
			}],
			["jnz", function (t) {
				return c.get("ajmp")(t)
			}],
			["cjne", function (t) {
				if (3 !== t.length) return {
					status: !1,
					msg: "Invalid number of operands"
				};
				if (parseInt(t[0], 10) === i.get("A")) {
					if (!s.a.isByteAddr(t[1])) return {
						status: !1,
						msg: "Invalid 2nd operand"
					}
				} else {
					if (!s.a.isByteAddr(t[0])) return {
						status: !1,
						msg: "Invalid 1st operand"
					};
					if ("256" !== t[1]) return {
						status: !1,
						msg: "2nd operand must be immediate data if 1st operand is not accumulator"
					}
				}
				return s.a.isLabel(t[2]) ? {
					status: !0
				} : {
						status: !1,
						msg: "Invalid label"
					}
			}],
			["lcall", function (t) {
				return c.get("ajmp")(t)
			}],
			["acall", function (t) {
				return c.get("ajmp")(t)
			}],
			["anl", function (t) {
				if (2 !== t.length) return {
					status: !1,
					msg: "Invalid number of operands"
				};
				if (t[0] === i.get("PSW") + ".7") {
					if (!s.a.isBitAddr(t[1]) && "256.0" !== t[1]) return {
						status: !1,
						msg: "Invalid 2nd operand"
					}
				} else if (parseInt(t[0], 10) === i.get("A")) {
					if (!s.a.isByteAddr(t[1])) return {
						status: !1,
						msg: "Invalid 2nd operand"
					}
				} else {
					if (!s.a.isByteAddr(t[0])) return {
						status: !1,
						msg: "Invalid 1st operand"
					};
					if (parseInt(t[1], 10) !== i.get("A") && "256" !== t[1]) return {
						status: !1,
						msg: "Invalid 2nd operand"
					}
				}
				return {
					status: !0
				}
			}],
			["orl", function (t) {
				return c.get("anl")(t)
			}],
			["xrl", function (t) {
				if (2 !== t.length) return {
					status: !1,
					msg: "Invalid number of operands"
				};
				if (!s.a.isByteAddr(t[0])) return {
					status: !1,
					msg: "Invalid 1st operand"
				};
				if (!s.a.isByteAddr(t[1])) return {
					status: !1,
					msg: "Invalid 2nd operand"
				};
				if (parseInt(t[0], 10) === i.get("A")) {
					if (!s.a.isByteAddr(t[1])) return {
						status: !1,
						msg: "Invalid 2nd operand"
					}
				} else if (s.a.isByteAddr(t[0]) && parseInt(t[1], 10) !== i.get("A") && "256" !== t[1]) return {
					status: !1,
					msg: "Invalid 2nd operand"
				};
				return {
					status: !0
				}
			}],
			["rl", function (t) {
				return 1 !== t.length ? {
					status: !1,
					msg: "Invalid number of operands"
				} : parseInt(t[0], 10) !== i.get("A") ? {
					status: !1,
					msg: "Operand must be accumulator"
				} : {
							status: !0
						}
			}],
			["rlc", function (t) {
				return c.get("rl")(t)
			}],
			["rr", function (t) {
				return c.get("rl")(t)
			}],
			["rrc", function (t) {
				return c.get("rl")(t)
			}],
			["da", function (t) {
				return c.get("rl")(t)
			}],
			["swap", function (t) {
				return c.get("rl")(t)
			}],
			["xch", function (t) {
				return 2 !== t.length ? {
					status: !1,
					msg: "Invalid number of operands"
				} : parseInt(t[0], 10) !== i.get("A") ? {
					status: !1,
					msg: "1st operand must be accumulator"
				} : "256" === t[1] ? {
					status: !1,
					msg: "Immediate data is not allowed"
				} : s.a.isByteAddr(t[1]) ? {
					status: !0
				} : {
									status: !1,
									msg: "Invalid 2nd operand"
								}
			}],
			["xchd", function (t) {
				return c.get("xch")(t)
			}],
			["push", function (t) {
				return 1 !== t.length ? {
					status: !1,
					msg: "Invalid number of operands"
				} : s.a.isByteAddr(t[0]) ? {
					status: !0
				} : {
							status: !1,
							msg: "Invalid operand"
						}
			}],
			["pop", function (t) {
				return c.get("push")(t)
			}],
			["inc", function (t) {
				return c.get("push")(t)
			}],
			["dec", function (t) {
				return c.get("inc")(t)
			}],
			["nop", function (t) {
				return 1 !== t.length || "" !== t[0] ? {
					status: !1,
					msg: "Invalid number of operands"
				} : {
						status: !0
					}
			}],
			["ret", function (t) {
				return 1 !== t.length || "" !== t[0] ? {
					status: !1,
					msg: "Invalid number of operands"
				} : {
						status: !0
					}
			}],
			["reti", function (t) {
				return 1 !== t.length || "" !== t[0] ? {
					status: !1,
					msg: "Invalid number of operands"
				} : {
						status: !0
					}
			}]
		]);
		a.a = {
			sfrMap: i,
			ram: o,
			instructionCheck: c,
			code: "",
			labels: new e.a,
			programCounter: 0,
			programCounterStack: []
		}
	},
	39: function (t, a, r) {
		"use strict";

		function n(t) {
			for (var a = arguments.length, r = Array(a > 1 ? a - 1 : 0), n = 1; n < a; n++) r[n - 1] = arguments[n];
			var e = j.a.chain(t.raw).map(function (t, a) {
				return t + (r[a] || "")
			}).join("").value();
			return j.a.chain(e).replace(/\s+/g, "").replace(/<.*?>/g, "").value()
		}

		function e(t) {
			return -1 === t.indexOf(".")
		}

		function s(t) {
			return -1 !== t.indexOf(".")
		}

		function i(t) {
			var a = parseInt(t, 10);
			return a === O.a.sfrMap.get("P0") || a === O.a.sfrMap.get("P1") || a === O.a.sfrMap.get("P2") || a === O.a.sfrMap.get("P3")
		}

		function o(t) {
			var a = parseInt(t, 10);
			return a === O.a.sfrMap.get("A") || a === O.a.sfrMap.get("B") || t === O.a.sfrMap.get("PSW") + ".7"
		}

		function c(t) {
			var a = parseInt(t, 10);
			return a >= 0 && a <= 127
		}

		function u(t) {
			return parseInt(t, 10) <= 255 && !i(t) && !o(t) && !c(t)
		}

		function l(t, a) {
			var r = parseInt(t, 10),
				n = parseInt(a, 10);
			return r >= 0 && r <= 31 && n >= 0 && n <= 31
		}

		function f(t, a) {
			return i(t) && i(a)
		}

		function d(t, a) {
			return u(t) && u(a)
		}

		function m(t) {
			var a = parseInt(t, 10);
			return e(t) ? a >= 0 && a <= 127 : !!s(t) && (a % 8 == 0 && a >= 128 && a <= 256)
		}

		function v(t) {
			var a = parseInt(t, 10);
			return e(t) && a <= 256
		}

		function p(t) {
			return O.a.labels.has(t.toLowerCase())
		}

		function g(t) {
			var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 8,
				r = Number.prototype.toString,
				n = j.a.partialRight(r.call.bind(r), 2);
			return j.a.padStart(n(t), a, "0")
		}

		function _(t, a, r) {
			var n = g(O.a.ram[t]);
			return j.a.chain(n).toArray().reverse().tap(function (t) {
				return j.a.set(t, a, r)
			}).reverse().join("").value()
		}

		function h(t, a) {
			var r = g(O.a.ram[t]);
			return j.a.chain(r).toArray().reverse().thru(function (t) {
				return "1" === t[a]
			}).value()
		}

		function x(t, a, r) {
			var n = a.exec(t),
				e = k.a(n, 3),
				s = e[1],
				i = void 0 === s ? "" : s,
				o = e[2];
			return "" + i + j.a.parseInt(o, r)
		}

		function y(t, a, r) {
			var n, e = j.a.split(t, "."),
				s = e.pop(),
				i = a;
			return j.a.forEach(e, function (t) {
				i = i[t]
			}), (n = i)[s].apply(n, R.a(r))
		}

		function b(t) {
			return t.replace(/^C$/i, O.a.sfrMap.get("PSW") + ".7").replace(/^(@)?([a-z]{1,4}[0-3]?)(\.[0-7])?$/i, function (t) {
				var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
					r = arguments[2],
					n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "",
					e = O.a.sfrMap.get(j.a.toUpper(r));
				return j.a.isUndefined(e) && (e = r), "" + a + e + n
			}).replace(/^(@)?R([0-7])$/i, function (t) {
				var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
					r = arguments[2],
					n = j.a.parseInt(g(O.a.ram[O.a.sfrMap.get("PSW")]).slice(3, 5), 2);
				return "" + a + (j.a.parseInt(r) + 8 * n)
			})
		}

		function P(t) {
			var a = j.a.chain(t).split(".").map(j.a.parseInt).value(),
				r = k.a(a, 2),
				n = r[0],
				e = r[1];
			return j.a.inRange(n, 128) && j.a.isUndefined(e) ? [j.a.toInteger(n / 8) + 32, n % 8] : [n, e]
		}

		function w(t) {
			var a = j.a.parseInt(t.slice(1));
			if (/^#/i.test(t)) return O.a.ram[256] = a, "256";
			if (/^@/i.test(t)) return "" + O.a.ram[a];
			if (/^\//i.test(t)) {
				var r = P(t.slice(1)),
					n = k.a(r, 2),
					e = n[0],
					s = n[1];
				return O.a.ram[256] = h(e, s) ? 0 : 1, "256.0"
			}
			return t
		}

		function M(t) {
			var a = {
				status: !0
			},
				r = et.exec(t),
				n = k.a(r, 4),
				e = n[1],
				s = n[2],
				i = void 0 === s ? [] : s,
				o = n[3];
			e = j.a.replace(e, /\s+/g, "").toLowerCase(), i = j.a.chain(i).replace(/\s+/g, "").split(",").value(), o.length > 0 && !at.test(o) && (a = {
				status: !1,
				msg: "Invalid operand(s)"
			});
			var c = 0,
				u = !1;
			j.a.forEach(i, function (t, a) {
				var r = t;
				/^(?:@)?R[0-7]$/i.test(r) && (c += 1), /[\da-f]+h$/i.test(r) ? r = x(r, /(@|#|\/)?([\da-f]+)h/i, 16) : /[01]+b$/i.test(r) ? r = x(r, /(@|#|\/)?([01]+)b/i, 2) : /\d+d$/i.test(r) && (r = r.slice(0, -1)), r = b(r), r = w(r), /^224(?:\.[0-7])?$/.test(r) && (u = !0), i[a] = r
			});
			var l = O.a.instructionCheck.get(e);
			if (a.status && (a = j.a.isUndefined(l) ? {
				status: !1,
				msg: "Invalid instruction"
			} : c > 1 ? {
				status: !1,
				msg: "Both operands cannot access register bank simultaneously"
			} : l(i)), a.status) {
				var f = y(e, W.a, i);
				j.a.isUndefined(f) || (a = f), u && W.a.updateParity()
			}
			return a
		}

		function A() {
			O.a.ram.set(new Uint8Array(257)), O.a.ram[O.a.sfrMap.get("SP")] = 7, O.a.code = "", O.a.labels = new E.a, O.a.programCounter = 0, O.a.programCounterStack = []
		}

		function C(t) {
			A();
			var a = j.a.split(t, "\n");
			j.a.forEach(a, function (t, r) {
				a[r] = j.a.trim(t);
				var n = K.exec(t),
					e = k.a(n, 1),
					s = e[0];
				j.a.isUndefined(s) || "" === s || (s = j.a.trim(s.slice(0, -1)), O.a.labels.set(s.toLowerCase(), r))
			}), O.a.code = a, X = !1
		}

		function I(t) {
			X && C(t);
			var a = O.a.programCounter,
				r = {
					status: !0
				};
			return O.a.programCounter += 1, nt.test(O.a.code[O.a.programCounter - 1]) ? (X = !0, O.a.programCounter = O.a.code.length + 1) : rt.test(O.a.code[O.a.programCounter - 1]) || (r = M(O.a.code[O.a.programCounter - 1])), (O.a.programCounter >= O.a.code.length || !r.status) && (X = !0), r.line = a, r.nextLine = O.a.programCounter, r
		}

		function S(t) {
			C(t);
			for (var a = {
				status: !0
			}; O.a.programCounter < O.a.code.length && a.status;) a = I(t);
			return a
		}
		var B = r(48),
			E = r.n(B),
			N = r(133),
			R = r.n(N),
			$ = r(20),
			k = r.n($),
			L = r(139),
			T = r.n(L),
			V = r(2),
			j = r.n(V),
			O = r(36),
			W = r(147),
			z = T.a(["\n  s*\n  (?:               <Any word or number followed by a colon>\n    [a-zd]+s*?:   <with any number of spaces between>\n  )?\n"], ["\n  \\s*\n  (?:               <Any word or number followed by a colon>\n    [a-z\\d]+\\s*?:   <with any number of spaces between>\n  )?\n"]),
			U = T.a(["\n  s*?\n  (\n    [a-z]{2,5}      <Any word of length between 2 & 5>\n  )\n  s*\n"], ["\n  \\s*?\n  (\n    [a-z]{2,5}      <Any word of length between 2 & 5>\n  )\n  \\s*\n"]),
			F = T.a(["\n  (?:\n    d+[da-f]*h    <Hexadecimal numbers followed by 'h'>\n  )\n  |\n  (?:\n    [01]+b          <Binary numbers followed by 'b'>\n  )\n  |\n  (?:\n    d+d?           <Decimal numbers followed by an optional 'd'>\n  )\n"], ["\n  (?:\n    \\d+[\\da-f]*h    <Hexadecimal numbers followed by 'h'>\n  )\n  |\n  (?:\n    [01]+b          <Binary numbers followed by 'b'>\n  )\n  |\n  (?:\n    \\d+d?           <Decimal numbers followed by an optional 'd'>\n  )\n"]),
			D = T.a(["\n  [a-z]+[0-7]?      <Any word followed by an optional digit>\n  (?:\n    .[0-7]         <followed by an optional dot and digit>\n  )?\n"], ["\n  [a-z]+[0-7]?      <Any word followed by an optional digit>\n  (?:\n    \\.[0-7]         <followed by an optional dot and digit>\n  )?\n"]),
			H = T.a(["\n(\n  (?:\n    (?:\n      ", "\n    )\n    |\n    (?:\n      @R[01]        <@ followed by R0 or R1>\n    )\n    |\n    (?:\n      ", "\n    )\n  )\n  (?:\n    s*,s*         <Optional second operand>\n    (?:\n      (?:\n        (?:\n          #|/      <number optionally prefixed with # or />\n        )?\n        (?:\n          ", "\n        )\n      )\n      |\n      (?:\n        @R[01]      <@ followed by R0 or R1>\n      )\n      |\n      (?:\n        ", "\n      )\n    )\n  )?\n  (?:\n    s*,s*         <Optional third operand>\n    (?:\n      [a-z]+s*?    <which is always a label>\n    )\n  )?\n)?s*\n"], ["\n(\n  (?:\n    (?:\n      ", "\n    )\n    |\n    (?:\n      @R[01]        <@ followed by R0 or R1>\n    )\n    |\n    (?:\n      ", "\n    )\n  )\n  (?:\n    \\s*,\\s*         <Optional second operand>\n    (?:\n      (?:\n        (?:\n          #|\\/      <number optionally prefixed with # or />\n        )?\n        (?:\n          ", "\n        )\n      )\n      |\n      (?:\n        @R[01]      <@ followed by R0 or R1>\n      )\n      |\n      (?:\n        ", "\n      )\n    )\n  )?\n  (?:\n    \\s*,\\s*         <Optional third operand>\n    (?:\n      [a-z]+\\s*?    <which is always a label>\n    )\n  )?\n)?\\s*\n"]),
			q = T.a(["\n  s*\n    (?:\n      (?:           <Anything beginning with ; or //>\n        ;\n        |\n        //\n      )\n      .*\n    )\n"], ["\n  \\s*\n    (?:\n      (?:           <Anything beginning with ; or //>\n        ;\n        |\n        \\/\\/\n      )\n      .*\n    )\n"]),
			G = T.a(["\n  ^\n    s*             <Any spaces>\n      (?:           <Optional ORG directive which is ignored>\n        ORGs+\n        (?:\n          ", "\n        )\n      )?\n      (?:           <Optional comment>\n        ", "\n      )?\n    s*             <Any spaces after ORG or comment>\n  $\n"], ["\n  ^\n    \\s*             <Any spaces>\n      (?:           <Optional ORG directive which is ignored>\n        ORG\\s+\n        (?:\n          ", "\n        )\n      )?\n      (?:           <Optional comment>\n        ", "\n      )?\n    \\s*             <Any spaces after ORG or comment>\n  $\n"]),
			J = T.a(["\n  ^\n    ", "\n    s*\n    (?:\n      END\n    )\n    (?:             <Optional comment>\n      ", "\n    )?\n  $\n"], ["\n  ^\n    ", "\n    \\s*\n    (?:\n      END\n    )\n    (?:             <Optional comment>\n      ", "\n    )?\n  $\n"]),
			X = !0,
			K = new RegExp(n(z), "i"),
			Q = new RegExp(n(U), "i"),
			Y = n(F),
			Z = n(D),
			tt = new RegExp(n(H, Y, Z, Y, Z), "i"),
			at = new RegExp(n(q)),
			rt = new RegExp(n(G, Y, at.source), "i"),
			nt = new RegExp(n(J, K.source, at.source), "i"),
			et = new RegExp(K.source + Q.source + tt.source + new RegExp(/(.*)/).source, "i");
		a.a = {
			isPort: i,
			isALU: o,
			isRAM: c,
			isSFR: u,
			isRtoR: l,
			isPortToPort: f,
			isSFRtoSFR: d,
			isBitAddr: m,
			isByteAddr: v,
			isLabel: p,
			changeBit: _,
			convertToBin: g,
			parseLine: M,
			executeNextLine: I,
			handleExecution: S,
			handleRegisters: b,
			initValues: C,
			isBitSet: h,
			translateToBitAddressable: P
		}
	},
	53: function (t, a, r) {
		"use strict";
		Object.defineProperty(a, "__esModule", {
			value: !0
		});
		var n = r(21),
			e = r.n(n),
			s = r(20),
			i = r.n(s),
			o = r(73),
			c = r(10),
			u = r(74),
			l = r(75),
			f = r(108),
			d = r(111),
			m = r(115),
			v = r(119);
		o.a.use(u.a), o.a.use(c.a);
		var p = new u.a({
			routes: [{
				path: "/seven-segment",
				component: f.a
			}, {
				path: "/motor",
				component: d.a
			}, {
				path: "/adc-dac",
				component: m.a
			}]
		}),
			g = new c.a.Store({
				state: {
					memory: v.a.memory,
					utils: v.a.utils
				},
				mutations: {
					debug: function (t, a) {
						o.a.set(t, "result", v.a.debug(a))
					},
					run: function (t, a) {
						o.a.set(t, "result", v.a.run(a))
					},
					reset: function (t, a) {
						v.a.reset(a)
					},
					setPort: function (t, a) {
						var r = i.a(a, 2),
							n = r[0],
							e = r[1];
						t.memory.ram[t.memory.sfrMap.get("P" + n)] = e
					}
				}
			}),
			_ = !0,
			h = !1,
			x = void 0;
		try {
			for (var y, b = e.a(g.state.memory.sfrMap); !(_ = (y = b.next()).done); _ = !0) {
				var P = y.value,
					w = i.a(P, 2),
					M = w[0],
					A = w[1];
				! function (t, a) {
					g.getters["get" + t] = function () {
						return g.state.memory.ram[a]
					}
				}(M, A)
			}
		} catch (t) {
			h = !0, x = t
		} finally {
			try {
				!_ && b.return && b.return()
			} finally {
				if (h) throw x
			}
		}
		new o.a({
			el: "#app",
			router: p,
			store: g,
			template: "<App/>",
			components: {
				App: l.a
			}
		})
	},
	75: function (t, a, r) {
		"use strict";

		function n(t) {
			r(76)
		}
		var e = r(78),
			s = r(107),
			i = r(6),
			o = n,
			c = i(e.a, s.a, o, null, null);
		a.a = c.exports
	},
	76: function (t, a) { },
	78: function (t, a, r) {
		"use strict";
		var n = r(79),
			e = (r.n(n), r(80)),
			s = r(85),
			i = r(89),
			o = r(93);
		a.a = {
			data: function () {
				return {
					showModal: !0
				}
			},
			components: {
				IntroModal: e.a,
				PinDiagram: s.a,
				Memory: i.a,
				Editor: o.a
			}
		}
	},
	79: function (t, a) { },
	80: function (t, a, r) {
		"use strict";

		function n(t) {
			r(81)
		}
		var e = r(82),
			s = r(84),
			i = r(6),
			o = n,
			c = i(e.a, s.a, o, "data-v-5f3e8425", null);
		a.a = c.exports
	},
	81: function (t, a) { },
	82: function (t, a, r) {
		"use strict";
		var n = r(2);
		r.n(n);
		a.a = {
			methods: {
				closeModal: function () {
					document.cookie = "firstVisit=false; path=/", this.$emit("closeModal")
				}
			},
			mounted: function () {
				n.includes(document.cookie, "firstVisit") && this.closeModal()
			}
		}
	},
	84: function (t, a, r) {
		"use strict";
		var n = function () {
			var t = this,
				a = t.$createElement,
				r = t._self._c || a;
			return r("div", {
				staticClass: "ui active small modal",
				attrs: {
					id: "intro-modal"
				}
			}, [r("div", {
				staticClass: "header"
			}, [t._v("Disclaimer")]), t._v(" "), t._m(0), t._v(" "), r("div", {
				staticClass: "actions"
			}, [r("div", {
				staticClass: "ui positive button",
				on: {
					click: t.closeModal
				}
			}, [t._v("OK")])])])
		},
			e = [function () {
				var t = this,
					a = t.$createElement,
					r = t._self._c || a;
				return r("div", {
					attrs: {
						id: "content"
					}
				})
			}],
			s = {
				render: n,
				staticRenderFns: e
			};
		a.a = s
	},
	85: function (t, a, r) {
		"use strict";

		function n(t) {
			r(86)
		}
		var e = r(87),
			s = r(88),
			i = r(6),
			o = n,
			c = i(e.a, s.a, o, "data-v-75b9db82", null);
		a.a = c.exports
	},
	86: function (t, a) { },
	87: function (t, a, r) {
		"use strict";
		var n = r(10),
			e = r(2);
		r.n(e);
		a.a = {
			computed: n.b(["getP0", "getP1", "getP2", "getP3"]),
			mounted: function () {
				var t = this,
					a = this.$store.state.utils.convertToBin;
				this.$store.subscribe(function () {
					e.forEach(e.range(4), function (r) {
						var n = a(t["getP" + r]());
						e.forEach(e.range(8), function (a) {
							t.$el.querySelector("#port" + r + a).setAttribute("class", "1" === n[7 - a] ? "high" : "low")
						})
					})
				})
			}
		}
	},
	88: function (t, a, r) {
		"use strict";
		var n = function () {
			var t = this,
				a = t.$createElement,
				r = t._self._c || a;
			return r("div", [r("svg", {
				attrs: {
					xmlns: "http://www.w3.org/2000/svg",
					viewBox: "0 0 684.4 1043"
				}
			}, [r("g", {
				attrs: {
					"font-size": "40",
					"font-family": "sans-serif",
					"letter-spacing": "0",
					"word-spacing": "0"
				}
			}, [r("text", {
				attrs: {
					x: "583.4",
					y: "29.5",
					transform: "translate(1.77 .183)"
				}
			}, [r("tspan", [t._v("Vcc")])]), t._v(" "), r("text", {
				attrs: {
					x: "583.4",
					y: "1035.2",
					transform: "translate(1.77 .183)"
				}
			}, [r("tspan", [t._v("P2.0")])]), t._v(" "), r("text", {
				attrs: {
					x: "583.4",
					y: "982.6",
					transform: "translate(1.77 .183)"
				}
			}, [r("tspan", [t._v("P2.1")])]), t._v(" "), r("text", {
				attrs: {
					x: "583.4",
					y: "930",
					transform: "translate(1.77 .183)"
				}
			}, [r("tspan", [t._v("P2.2")])]), t._v(" "), r("text", {
				attrs: {
					x: "583.4",
					y: "876.9",
					transform: "translate(1.77 .183)"
				}
			}, [r("tspan", [t._v("P2.3")])]), t._v(" "), r("text", {
				attrs: {
					x: "583.4",
					y: "824.3",
					transform: "translate(1.77 .183)"
				}
			}, [r("tspan", [t._v("P2.4")])]), t._v(" "), r("text", {
				attrs: {
					x: "583.4",
					y: "771.1",
					transform: "translate(1.77 .183)"
				}
			}, [r("tspan", [t._v("P2.5")])]), t._v(" "), r("text", {
				attrs: {
					x: "583.4",
					y: "717.9",
					transform: "translate(1.77 .183)"
				}
			}, [r("tspan", [t._v("P2.6")])]), t._v(" "), r("text", {
				attrs: {
					x: "583.4",
					y: "665.3",
					transform: "translate(1.77 .183)"
				}
			}, [r("tspan", [t._v("P2.7")])]), t._v(" "), r("text", {
				attrs: {
					x: "583.4",
					y: "612.2",
					transform: "translate(1.77 .183)"
				}
			}, [r("tspan", [t._v("PSEN")])]), t._v(" "), r("text", {
				attrs: {
					x: "583.4",
					y: "559.6",
					transform: "translate(1.77 .183)"
				}
			}, [r("tspan", [t._v("ALE")])]), t._v(" "), r("text", {
				attrs: {
					x: "583.4",
					y: "507.5",
					transform: "translate(1.77 .183)"
				}
			}, [r("tspan", [t._v("EA")])]), t._v(" "), r("text", {
				attrs: {
					x: "583.4",
					y: "82.7",
					transform: "translate(1.77 .183)"
				}
			}, [r("tspan", [t._v("P0.0")])]), t._v(" "), r("text", {
				attrs: {
					x: "583.4",
					y: "135.8",
					transform: "translate(1.77 .183)"
				}
			}, [r("tspan", [t._v("P0.1")])]), t._v(" "), r("text", {
				attrs: {
					x: "583.4",
					y: "189",
					transform: "translate(1.77 .183)"
				}
			}, [r("tspan", [t._v("P0.2")])]), t._v(" "), r("text", {
				attrs: {
					x: "583.4",
					y: "242.2",
					transform: "translate(1.77 .183)"
				}
			}, [r("tspan", [t._v("P0.3")])]), t._v(" "), r("text", {
				attrs: {
					x: "583.4",
					y: "295.3",
					transform: "translate(1.77 .183)"
				}
			}, [r("tspan", [t._v("P0.4")])]), t._v(" "), r("text", {
				attrs: {
					x: "583.4",
					y: "348.5",
					transform: "translate(1.77 .183)"
				}
			}, [r("tspan", [t._v("P0.5")])]), t._v(" "), r("text", {
				attrs: {
					x: "583.4",
					y: "401.7",
					transform: "translate(1.77 .183)"
				}
			}, [r("tspan", [t._v("P0.6")])]), t._v(" "), r("text", {
				attrs: {
					x: "583.4",
					y: "454.8",
					transform: "translate(1.77 .183)"
				}
			}, [r("tspan", [t._v("P0.7")])]), t._v(" "), r("text", {
				attrs: {
					x: "583.4",
					y: "29.5",
					transform: "translate(-582.98 .182)"
				}
			}, [r("tspan", [t._v("P1.0")])]), t._v(" "), r("text", {
				attrs: {
					x: "583.4",
					y: "1035.2",
					transform: "translate(-582.98 .182)"
				}
			}, [r("tspan", [t._v("GND")])]), t._v(" "), r("text", {
				attrs: {
					x: "583.4",
					y: "982.6",
					transform: "translate(-582.98 .182)"
				}
			}, [r("tspan", [t._v("XTAL1")])]), t._v(" "), r("text", {
				attrs: {
					x: "583.4",
					y: "930",
					transform: "translate(-582.98 .182)"
				}
			}, [r("tspan", [t._v("XTAL2")])]), t._v(" "), r("text", {
				attrs: {
					x: "583.4",
					y: "876.9",
					transform: "translate(-582.98 .182)"
				}
			}, [r("tspan", [t._v("P3.7")])]), t._v(" "), r("text", {
				attrs: {
					x: "583.4",
					y: "824.3",
					transform: "translate(-582.98 .182)"
				}
			}, [r("tspan", [t._v("P3.6")])]), t._v(" "), r("text", {
				attrs: {
					x: "583.4",
					y: "771.1",
					transform: "translate(-582.98 .182)"
				}
			}, [r("tspan", [t._v("P3.5")])]), t._v(" "), r("text", {
				attrs: {
					x: "583.4",
					y: "717.9",
					transform: "translate(-582.98 .182)"
				}
			}, [r("tspan", [t._v("P3.4")])]), t._v(" "), r("text", {
				attrs: {
					x: "583.4",
					y: "665.3",
					transform: "translate(-582.98 .182)"
				}
			}, [r("tspan", [t._v("P3.3")])]), t._v(" "), r("text", {
				attrs: {
					x: "583.4",
					y: "612.2",
					transform: "translate(-582.98 .182)"
				}
			}, [r("tspan", [t._v("P3.2")])]), t._v(" "), r("text", {
				attrs: {
					x: "583.4",
					y: "559.6",
					transform: "translate(-582.98 .182)"
				}
			}, [r("tspan", [t._v("P3.1")])]), t._v(" "), r("text", {
				attrs: {
					x: "583.4",
					y: "507.5",
					transform: "translate(-582.98 .182)"
				}
			}, [r("tspan", [t._v("P3.0")])]), t._v(" "), r("text", {
				attrs: {
					x: "583.4",
					y: "82.7",
					transform: "translate(-582.98 .182)"
				}
			}, [r("tspan", [t._v("P1.1")])]), t._v(" "), r("text", {
				attrs: {
					x: "583.4",
					y: "135.8",
					transform: "translate(-582.98 .182)"
				}
			}, [r("tspan", [t._v("P1.2")])]), t._v(" "), r("text", {
				attrs: {
					x: "583.4",
					y: "189",
					transform: "translate(-582.98 .182)"
				}
			}, [r("tspan", [t._v("P1.3")])]), t._v(" "), r("text", {
				attrs: {
					x: "583.4",
					y: "242.2",
					transform: "translate(-582.98 .182)"
				}
			}, [r("tspan", [t._v("P1.4")])]), t._v(" "), r("text", {
				attrs: {
					x: "583.4",
					y: "295.3",
					transform: "translate(-582.98 .182)"
				}
			}, [r("tspan", [t._v("P1.5")])]), t._v(" "), r("text", {
				attrs: {
					x: "583.4",
					y: "348.5",
					transform: "translate(-582.98 .182)"
				}
			}, [r("tspan", [t._v("P1.6")])]), t._v(" "), r("text", {
				attrs: {
					x: "583.4",
					y: "401.7",
					transform: "translate(-582.98 .182)"
				}
			}, [r("tspan", [t._v("P1.7")])]), t._v(" "), r("text", {
				attrs: {
					x: "583.4",
					y: "454.8",
					transform: "translate(-582.98 .182)"
				}
			}, [r("tspan", [t._v("RST")])])]), t._v(" "), r("g", {
				attrs: {
					fill: "#9e9e9e",
					stroke: "#000",
					transform: "translate(-19.082 -4.887)"
				}
			}, [r("rect", {
				attrs: {
					width: "399",
					height: "1040.1",
					x: "-571.5",
					y: "7.3",
					transform: "scale(-1 1)",
					ry: "5.2",
					rx: "4.3"
				}
			})]), t._v(" "), r("text", {
				attrs: {
					x: "250.9",
					y: "565.3",
					"font-size": "107.1",
					"font-family": "sans-serif",
					transform: "translate(-19.082 -3.816)"
				}
			}, [r("tspan", [t._v("8051")])]), t._v(" "), r("g", {
				attrs: {
					fill: "none",
					stroke: "#000",
					"stroke-width": "3.1"
				}
			}, [r("g", {
				attrs: {
					transform: "translate(59.526 -.778) scale(.8422)"
				}
			}, [r("circle", {
				staticClass: "high",
				attrs: {
					cx: "607",
					cy: "19.3",
					r: "16"
				}
			})]), t._v(" "), r("g", {
				attrs: {
					transform: "translate(59.526 51.96) scale(.8422)"
				}
			}, [r("circle", {
				attrs: {
					id: "port00",
					cx: "607",
					cy: "19.3",
					r: "16"
				}
			})]), t._v(" "), r("g", {
				attrs: {
					transform: "translate(59.526 104.696) scale(.8422)"
				}
			}, [r("circle", {
				attrs: {
					id: "port01",
					cx: "607",
					cy: "19.3",
					r: "16"
				}
			})]), t._v(" "), r("g", {
				attrs: {
					transform: "translate(59.526 157.433) scale(.8422)"
				}
			}, [r("circle", {
				attrs: {
					id: "port02",
					cx: "607",
					cy: "19.3",
					r: "16"
				}
			})]), t._v(" "), r("g", {
				attrs: {
					transform: "translate(59.526 210.17) scale(.8422)"
				}
			}, [r("circle", {
				attrs: {
					id: "port03",
					cx: "607",
					cy: "19.3",
					r: "16"
				}
			})]), t._v(" "), r("g", {
				attrs: {
					transform: "translate(59.526 262.906) scale(.8422)"
				}
			}, [r("circle", {
				attrs: {
					id: "port04",
					cx: "607",
					cy: "19.3",
					r: "16"
				}
			})]), t._v(" "), r("g", {
				attrs: {
					transform: "translate(59.526 315.643) scale(.8422)"
				}
			}, [r("circle", {
				attrs: {
					id: "port05",
					cx: "607",
					cy: "19.3",
					r: "16"
				}
			})]), t._v(" "), r("g", {
				attrs: {
					transform: "translate(59.526 368.38) scale(.8422)"
				}
			}, [r("circle", {
				attrs: {
					id: "port06",
					cx: "607",
					cy: "19.3",
					r: "16"
				}
			})]), t._v(" "), r("g", {
				attrs: {
					transform: "translate(59.526 421.117) scale(.8422)"
				}
			}, [r("circle", {
				attrs: {
					id: "port07",
					cx: "607",
					cy: "19.3",
					r: "16"
				}
			})]), t._v(" "), r("g", {
				attrs: {
					transform: "translate(59.526 473.854) scale(.8422)"
				}
			}, [r("circle", {
				staticClass: "low",
				attrs: {
					cx: "607",
					cy: "19.3",
					r: "16"
				}
			})]), t._v(" "), r("g", {
				attrs: {
					transform: "translate(59.526 526.59) scale(.8422)"
				}
			}, [r("circle", {
				staticClass: "low",
				attrs: {
					cx: "607",
					cy: "19.3",
					r: "16"
				}
			})]), t._v(" "), r("g", {
				attrs: {
					transform: "translate(59.526 579.328) scale(.8422)"
				}
			}, [r("circle", {
				staticClass: "low",
				attrs: {
					cx: "607",
					cy: "19.3",
					r: "16"
				}
			})]), t._v(" "), r("g", {
				attrs: {
					transform: "translate(59.526 632.064) scale(.8422)"
				}
			}, [r("circle", {
				attrs: {
					id: "port27",
					cx: "607",
					cy: "19.3",
					r: "16"
				}
			})]), t._v(" "), r("g", {
				attrs: {
					transform: "translate(59.526 684.8) scale(.8422)"
				}
			}, [r("circle", {
				attrs: {
					id: "port26",
					cx: "607",
					cy: "19.3",
					r: "16"
				}
			})]), t._v(" "), r("g", {
				attrs: {
					transform: "translate(59.526 737.538) scale(.8422)"
				}
			}, [r("circle", {
				attrs: {
					id: "port25",
					cx: "607",
					cy: "19.3",
					r: "16"
				}
			})]), t._v(" "), r("g", {
				attrs: {
					transform: "translate(59.526 790.275) scale(.8422)"
				}
			}, [r("circle", {
				attrs: {
					id: "port24",
					cx: "607",
					cy: "19.3",
					r: "16"
				}
			})]), t._v(" "), r("g", {
				attrs: {
					transform: "translate(59.526 843.012) scale(.8422)"
				}
			}, [r("circle", {
				attrs: {
					id: "port23",
					cx: "607",
					cy: "19.3",
					r: "16"
				}
			})]), t._v(" "), r("g", {
				attrs: {
					transform: "translate(59.526 895.75) scale(.8422)"
				}
			}, [r("circle", {
				attrs: {
					id: "port22",
					cx: "607",
					cy: "19.3",
					r: "16"
				}
			})]), t._v(" "), r("g", {
				attrs: {
					transform: "translate(59.526 948.485) scale(.8422)"
				}
			}, [r("circle", {
				attrs: {
					id: "port21",
					cx: "607",
					cy: "19.3",
					r: "16"
				}
			})]), t._v(" "), r("g", {
				attrs: {
					transform: "translate(59.526 1001.222) scale(.8422)"
				}
			}, [r("circle", {
				attrs: {
					id: "port20",
					cx: "607",
					cy: "19.3",
					r: "16"
				}
			})]), t._v(" "), r("g", {
				attrs: {
					transform: "matrix(-.8422 0 0 .8422 646.404 -.778)"
				}
			}, [r("circle", {
				attrs: {
					id: "port10",
					cx: "607",
					cy: "19.3",
					r: "16"
				}
			})]), t._v(" "), r("g", {
				attrs: {
					transform: "matrix(-.8422 0 0 .8422 646.404 51.96)"
				}
			}, [r("circle", {
				attrs: {
					id: "port11",
					cx: "607",
					cy: "19.3",
					r: "16"
				}
			})]), t._v(" "), r("g", {
				attrs: {
					transform: "matrix(-.8422 0 0 .8422 646.404 104.696)"
				}
			}, [r("circle", {
				attrs: {
					id: "port12",
					cx: "607",
					cy: "19.3",
					r: "16"
				}
			})]), t._v(" "), r("g", {
				attrs: {
					transform: "matrix(-.8422 0 0 .8422 646.404 157.433)"
				}
			}, [r("circle", {
				attrs: {
					id: "port13",
					cx: "607",
					cy: "19.3",
					r: "16"
				}
			})]), t._v(" "), r("g", {
				attrs: {
					transform: "matrix(-.8422 0 0 .8422 646.404 210.17)"
				}
			}, [r("circle", {
				attrs: {
					id: "port14",
					cx: "607",
					cy: "19.3",
					r: "16"
				}
			})]), t._v(" "), r("g", {
				attrs: {
					transform: "matrix(-.8422 0 0 .8422 646.404 262.906)"
				}
			}, [r("circle", {
				attrs: {
					id: "port15",
					cx: "607",
					cy: "19.3",
					r: "16"
				}
			})]), t._v(" "), r("g", {
				attrs: {
					transform: "matrix(-.8422 0 0 .8422 646.404 315.643)"
				}
			}, [r("circle", {
				attrs: {
					id: "port16",
					cx: "607",
					cy: "19.3",
					r: "16"
				}
			})]), t._v(" "), r("g", {
				attrs: {
					transform: "matrix(-.8422 0 0 .8422 646.404 368.38)"
				}
			}, [r("circle", {
				attrs: {
					id: "port17",
					cx: "607",
					cy: "19.3",
					r: "16"
				}
			})]), t._v(" "), r("g", {
				attrs: {
					transform: "matrix(-.8422 0 0 .8422 646.404 421.117)"
				}
			}, [r("circle", {
				staticClass: "low",
				attrs: {
					cx: "607",
					cy: "19.3",
					r: "16"
				}
			})]), t._v(" "), r("g", {
				attrs: {
					transform: "matrix(-.8422 0 0 .8422 646.404 473.854)"
				}
			}, [r("circle", {
				attrs: {
					id: "port30",
					cx: "607",
					cy: "19.3",
					r: "16"
				}
			})]), t._v(" "), r("g", {
				attrs: {
					transform: "matrix(-.8422 0 0 .8422 646.404 526.59)"
				}
			}, [r("circle", {
				attrs: {
					id: "port31",
					cx: "607",
					cy: "19.3",
					r: "16"
				}
			})]), t._v(" "), r("g", {
				attrs: {
					transform: "matrix(-.8422 0 0 .8422 646.404 579.328)"
				}
			}, [r("circle", {
				attrs: {
					id: "port32",
					cx: "607",
					cy: "19.3",
					r: "16"
				}
			})]), t._v(" "), r("g", {
				attrs: {
					transform: "matrix(-.8422 0 0 .8422 646.404 632.064)"
				}
			}, [r("circle", {
				attrs: {
					id: "port33",
					cx: "607",
					cy: "19.3",
					r: "16"
				}
			})]), t._v(" "), r("g", {
				attrs: {
					transform: "matrix(-.8422 0 0 .8422 646.404 684.8)"
				}
			}, [r("circle", {
				attrs: {
					id: "port34",
					cx: "607",
					cy: "19.3",
					r: "16"
				}
			})]), t._v(" "), r("g", {
				attrs: {
					transform: "matrix(-.8422 0 0 .8422 646.404 737.538)"
				}
			}, [r("circle", {
				attrs: {
					id: "port35",
					cx: "607",
					cy: "19.3",
					r: "16"
				}
			})]), t._v(" "), r("g", {
				attrs: {
					transform: "matrix(-.8422 0 0 .8422 646.404 790.275)"
				}
			}, [r("circle", {
				attrs: {
					id: "port36",
					cx: "607",
					cy: "19.3",
					r: "16"
				}
			})]), t._v(" "), r("g", {
				attrs: {
					transform: "matrix(-.8422 0 0 .8422 646.404 843.012)"
				}
			}, [r("circle", {
				attrs: {
					id: "port37",
					cx: "607",
					cy: "19.3",
					r: "16"
				}
			})]), t._v(" "), r("g", {
				attrs: {
					transform: "matrix(-.8422 0 0 .8422 646.404 895.75)"
				}
			}, [r("circle", {
				staticClass: "low",
				attrs: {
					cx: "607",
					cy: "19.3",
					r: "16"
				}
			})]), t._v(" "), r("g", {
				attrs: {
					transform: "matrix(-.8422 0 0 .8422 646.404 948.485)"
				}
			}, [r("circle", {
				staticClass: "low",
				attrs: {
					cx: "607",
					cy: "19.3",
					r: "16"
				}
			})]), t._v(" "), r("g", {
				attrs: {
					transform: "matrix(-.8422 0 0 .8422 646.404 1001.222)"
				}
			}, [r("circle", {
				staticClass: "low",
				attrs: {
					cx: "607",
					cy: "19.3",
					r: "16"
				}
			})])])])])
		},
			e = [],
			s = {
				render: n,
				staticRenderFns: e
			};
		a.a = s
	},
	89: function (t, a, r) {
		"use strict";

		function n(t) {
			r(90)
		}
		var e = r(91),
			s = r(92),
			i = r(6),
			o = n,
			c = i(e.a, s.a, o, "data-v-c7de40f6", null);
		a.a = c.exports
	},
	90: function (t, a) { },
	91: function (t, a, r) {
		"use strict";
		var n = r(21),
			e = r.n(n),
			s = r(20),
			i = r.n(s),
			o = r(10),
			c = r(2);
		r.n(c);
		a.a = {
			data: function () {
				return {
					sfrs: []
				}
			},
			computed: o.d(["memory"]),
			methods: {
				toHex: function (t) {
					return "0x" + c.padStart(c.parseInt(t).toString(16), 2, "0")
				},
				updateMemory: function () {
					var t = [],
						a = !0,
						r = !1,
						n = void 0;
					try {
						for (var s, o = e.a(this.memory.sfrMap); !(a = (s = o.next()).done); a = !0) {
							var c = s.value,
								u = i.a(c, 2),
								l = u[0],
								f = u[1];
							t.push({
								sfr: l,
								value: this.memory.ram[f]
							})
						}
					} catch (t) {
						r = !0, n = t
					} finally {
						try {
							!a && o.return && o.return()
						} finally {
							if (r) throw n
						}
					}
					this.sfrs = t
				}
			},
			created: function () {
				this.updateMemory(), this.$store.subscribe(this.updateMemory)
			}
		}
	},
	92: function (t, a, r) {
		"use strict";
		var n = function () {
			var t = this,
				a = t.$createElement,
				r = t._self._c || a;
			return r("div", {
				staticClass: "ui grid"
			}, [r("div", {
				staticClass: "eight wide column"
			}, [r("table", {
				staticClass: "ui small very basic very compact center aligned table unstackable" // unstackable use because rows stack in android devices
			}, [t._m(0), t._v(" "), r("tbody", t._l(t.sfrs, function (a) {
				return r("tr", [r("td", [t._v(t._s(a.sfr))]), t._v(" "), r("td", [t._v(t._s(t.toHex(a.value)))])])
			}))])]), t._v(" "), r("div", {
				staticClass: "eight wide column"
			}, [r("table", {
				staticClass: "ui small very basic very compact center aligned table unstackable"
			}, [t._m(1), t._v(" "), r("tbody", t._l(t.memory.ram.slice(0, 128), function (a, n) {
				return r("tr", [r("td", [t._v(t._s(t.toHex(n)))]), t._v(" "), r("td", [t._v(t._s(t.toHex(a)))])])
			}))])])])
		},
			e = [function () {
				var t = this,
					a = t.$createElement,
					r = t._self._c || a;
				return r("thead", [r("tr", [r("th", [t._v("SFR")]), t._v(" "), r("th", [t._v("Value")])])])
			}, function () {
				var t = this,
					a = t.$createElement,
					r = t._self._c || a;
				return r("thead", [r("tr", [r("th", [t._v("Location")]), t._v(" "), r("th", [t._v("Value")])])])
			}],
			s = {
				render: n,
				staticRenderFns: e
			};
		a.a = s
	},
	93: function (t, a, r) {
		"use strict";

		function n(t) {
			r(94)
		}
		var e = r(95),
			s = r(106),
			i = r(6),
			o = n,
			c = i(e.a, s.a, o, "data-v-6e0ba41e", null);
		a.a = c.exports
	},
	94: function (t, a) { },
	95: function (t, a, r) {
		"use strict";
		var n = r(35),
			e = r.n(n),
			s = r(2),
			i = (r.n(s), r(10)),
			o = r(102),
			c = r.n(o),
			u = r(104),
			l = (r.n(u), r(105)),
			f = (r.n(l), c.a.acequire("ace/range").Range);
		a.a = {
			data: function () {
				return {
					code: "",
					errorMessage: "",
					isError: !1,
					lineNumber: 0,
					markers: []
				}
			},
			mounted: function () {
				var t = this,
					a = c.a.edit(this.$el.querySelector("#ace-editor")),
					r = a.getSession();
				this.e = r, a.setTheme("ace/theme/tomorrow"), r.setMode("ace/mode/assembly_x86"), this.$el.querySelector("#run-btn").addEventListener("click", function () {
					return t.runEditor()
				}), this.$el.querySelector("#debug-btn").addEventListener("click", function () {
					return t.debugEditor()
				}), this.$el.querySelector("#reset-btn").addEventListener("click", function () {
					return t.resetEditor()
				}), r.on("change", function () {
					return t.resetEditor()
				}), window.addEventListener("beforeunload", function (t) {
					s.isEmpty(a.getValue()) || t.preventDefault()
				}), a.focus()
			},
			methods: e.a({}, i.c(["run", "debug", "reset"]), {
				runEditor: function () {
					this.run(this.e.getValue()), this.highlightLine()
				},
				debugEditor: function () {
					this.debug(this.e.getValue()), this.highlightLine()
				},
				resetEditor: function () {
					this.removeMarkers(), this.reset(this.e.getValue())
				},
				highlightLine: function () {
					var t = this;
					this.removeMarkers();
					var a = this.$store.state.result;
					s.isUndefined(a.line) || this.markers.push(this.e.addMarker(new f(a.line, 0, a.line, 1 / 0), "highlight-line " + (a.status ? "current" : "error"), "fullLine")), s.isUndefined(a.nextLine) || this.markers.push(this.e.addMarker(new f(a.nextLine, 0, a.nextLine, 1 / 0), "highlight-line next", "fullLine")), a.status || (this.isError = !0, s.delay(function () {
						t.isError = !1
					}, 2e3), this.errorMessage = a.msg, this.lineNumber = a.line + 1)
				},
				removeMarkers: function () {
					var t = this;
					s.isUndefined(this.markers) || (s.forEach(this.markers, function (a) {
						t.e.removeMarker(a)
					}), this.markers.length = 0)
				}
			})
		}
	}
}, [53]);
