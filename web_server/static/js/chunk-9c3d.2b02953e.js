(window.webpackJsonp = window.webpackJsonp || []).push([
  ["chunk-9c3d"],
  {
    "7tKO": function (t, e, n) {
      t.exports = n.p + "static/img/luntan.1e96134.png";
    },
    Mj6V: function (t, e, n) {
      var r, i;
      /* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
       * @license MIT */ void 0 ===
        (i =
          "function" ==
          typeof (r = function () {
            var t = { version: "0.2.0" },
              e = (t.settings = {
                minimum: 0.08,
                easing: "ease",
                positionUsing: "",
                speed: 200,
                trickle: !0,
                trickleRate: 0.02,
                trickleSpeed: 800,
                showSpinner: !0,
                barSelector: '[role="bar"]',
                spinnerSelector: '[role="spinner"]',
                parent: "body",
                template:
                  '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>',
              });
            function n(t, e, n) {
              return t < e ? e : t > n ? n : t;
            }
            function r(t) {
              return 100 * (-1 + t);
            }
            (t.configure = function (t) {
              var n, r;
              for (n in t)
                void 0 !== (r = t[n]) && t.hasOwnProperty(n) && (e[n] = r);
              return this;
            }),
              (t.status = null),
              (t.set = function (a) {
                var o = t.isStarted();
                (a = n(a, e.minimum, 1)), (t.status = 1 === a ? null : a);
                var c = t.render(!o),
                  u = c.querySelector(e.barSelector),
                  l = e.speed,
                  d = e.easing;
                return (
                  c.offsetWidth,
                  i(function (n) {
                    "" === e.positionUsing &&
                      (e.positionUsing = t.getPositioningCSS()),
                      s(
                        u,
                        (function (t, n, i) {
                          var s;
                          return (
                            ((s =
                              "translate3d" === e.positionUsing
                                ? {
                                    transform: "translate3d(" + r(t) + "%,0,0)",
                                  }
                                : "translate" === e.positionUsing
                                ? { transform: "translate(" + r(t) + "%,0)" }
                                : { "margin-left": r(t) + "%" }).transition =
                              "all " + n + "ms " + i),
                            s
                          );
                        })(a, l, d)
                      ),
                      1 === a
                        ? (s(c, { transition: "none", opacity: 1 }),
                          c.offsetWidth,
                          setTimeout(function () {
                            s(c, {
                              transition: "all " + l + "ms linear",
                              opacity: 0,
                            }),
                              setTimeout(function () {
                                t.remove(), n();
                              }, l);
                          }, l))
                        : setTimeout(n, l);
                  }),
                  this
                );
              }),
              (t.isStarted = function () {
                return "number" == typeof t.status;
              }),
              (t.start = function () {
                t.status || t.set(0);
                var n = function () {
                  setTimeout(function () {
                    t.status && (t.trickle(), n());
                  }, e.trickleSpeed);
                };
                return e.trickle && n(), this;
              }),
              (t.done = function (e) {
                return e || t.status
                  ? t.inc(0.3 + 0.5 * Math.random()).set(1)
                  : this;
              }),
              (t.inc = function (e) {
                var r = t.status;
                return r
                  ? ("number" != typeof e &&
                      (e = (1 - r) * n(Math.random() * r, 0.1, 0.95)),
                    (r = n(r + e, 0, 0.994)),
                    t.set(r))
                  : t.start();
              }),
              (t.trickle = function () {
                return t.inc(Math.random() * e.trickleRate);
              }),
              (function () {
                var e = 0,
                  n = 0;
                t.promise = function (r) {
                  return r && "resolved" !== r.state()
                    ? (0 === n && t.start(),
                      e++,
                      n++,
                      r.always(function () {
                        0 == --n ? ((e = 0), t.done()) : t.set((e - n) / e);
                      }),
                      this)
                    : this;
                };
              })(),
              (t.render = function (n) {
                if (t.isRendered()) return document.getElementById("nprogress");
                o(document.documentElement, "nprogress-busy");
                var i = document.createElement("div");
                (i.id = "nprogress"), (i.innerHTML = e.template);
                var a,
                  c = i.querySelector(e.barSelector),
                  u = n ? "-100" : r(t.status || 0),
                  d = document.querySelector(e.parent);
                return (
                  s(c, {
                    transition: "all 0 linear",
                    transform: "translate3d(" + u + "%,0,0)",
                  }),
                  e.showSpinner ||
                    ((a = i.querySelector(e.spinnerSelector)) && l(a)),
                  d != document.body && o(d, "nprogress-custom-parent"),
                  d.appendChild(i),
                  i
                );
              }),
              (t.remove = function () {
                c(document.documentElement, "nprogress-busy"),
                  c(
                    document.querySelector(e.parent),
                    "nprogress-custom-parent"
                  );
                var t = document.getElementById("nprogress");
                t && l(t);
              }),
              (t.isRendered = function () {
                return !!document.getElementById("nprogress");
              }),
              (t.getPositioningCSS = function () {
                var t = document.body.style,
                  e =
                    "WebkitTransform" in t
                      ? "Webkit"
                      : "MozTransform" in t
                      ? "Moz"
                      : "msTransform" in t
                      ? "ms"
                      : "OTransform" in t
                      ? "O"
                      : "";
                return e + "Perspective" in t
                  ? "translate3d"
                  : e + "Transform" in t
                  ? "translate"
                  : "margin";
              });
            var i = (function () {
                var t = [];
                function e() {
                  var n = t.shift();
                  n && n(e);
                }
                return function (n) {
                  t.push(n), 1 == t.length && e();
                };
              })(),
              s = (function () {
                var t = ["Webkit", "O", "Moz", "ms"],
                  e = {};
                function n(n) {
                  return (
                    (n = (function (t) {
                      return t
                        .replace(/^-ms-/, "ms-")
                        .replace(/-([\da-z])/gi, function (t, e) {
                          return e.toUpperCase();
                        });
                    })(n)),
                    e[n] ||
                      (e[n] = (function (e) {
                        var n = document.body.style;
                        if (e in n) return e;
                        for (
                          var r,
                            i = t.length,
                            s = e.charAt(0).toUpperCase() + e.slice(1);
                          i--;

                        )
                          if ((r = t[i] + s) in n) return r;
                        return e;
                      })(n))
                  );
                }
                function r(t, e, r) {
                  (e = n(e)), (t.style[e] = r);
                }
                return function (t, e) {
                  var n,
                    i,
                    s = arguments;
                  if (2 == s.length)
                    for (n in e)
                      void 0 !== (i = e[n]) &&
                        e.hasOwnProperty(n) &&
                        r(t, n, i);
                  else r(t, s[1], s[2]);
                };
              })();
            function a(t, e) {
              var n = "string" == typeof t ? t : u(t);
              return n.indexOf(" " + e + " ") >= 0;
            }
            function o(t, e) {
              var n = u(t),
                r = n + e;
              a(n, e) || (t.className = r.substring(1));
            }
            function c(t, e) {
              var n,
                r = u(t);
              a(t, e) &&
                ((n = r.replace(" " + e + " ", " ")),
                (t.className = n.substring(1, n.length - 1)));
            }
            function u(t) {
              return (" " + (t.className || "") + " ").replace(/\s+/gi, " ");
            }
            function l(t) {
              t && t.parentNode && t.parentNode.removeChild(t);
            }
            return t;
          })
            ? r.call(e, n, e, t)
            : r) || (t.exports = i);
    },
    NLdL: function (t, e, n) {
      "use strict";
      n.d(e, "a", function () {
        return i;
      }),
        n.d(e, "b", function () {
          return s;
        });
      var r = n("t3Un");
      function i() {
        return Object(r.a)({ url: "/settings", method: "get" });
      }
      function s(t) {
        return Object(r.a)({ url: "/settings", method: "put", params: t });
      }
    },
    Woz8: function (t, e, n) {},
    "n6/T": function (t, e, n) {
      "use strict";
      n.r(e);
      var r = n("NLdL"),
        i = n("Mj6V"),
        s = n.n(i),
        a =
          (n("pdi6"),
          {
            name: "Crawler",
            data: function () {
              return { uuid: "", passport: "", proxy: "" };
            },
            created: function () {
              s.a.start(), this.fetchSettingsData(), s.a.done();
            },
            methods: {
              fetchSettingsData: function () {
                var t = this;
                Object(r.a)().then(function (e) {
                  (t.uuid = e.data.uuid),
                    (t.passport = e.data.passport),
                    (t.proxy_server = e.data.proxy_server);
                });
              },
              showLunTanQR: function () {
                this.$alert(
                  '<div><img src="@/assets/img/zsxq.png"></div>',
                  "HTML 片段",
                  { dangerouslyUseHTMLString: !0 }
                );
              },
            },
          }),
        o = (n("oLMN"), n("KHd+")),
        c = Object(o.a)(
          a,
          function () {
            var t = this,
              e = t.$createElement,
              r = t._self._c || e;
            return r("div", { staticClass: "app-container" }, [
              r(
                "div",
                {
                  staticClass:
                    "w3-card w3-light-gray w3-padding w3-margin-bottom",
                  staticStyle: { "font-size": "14px" },
                },
                [
                  t.uuid
                    ? r("div", [
                        r("p", [t._v("3标识码@" + t._s(t.uuid))]),
                        t._v(" "),
                        t.passport
                          ? r("p", { staticClass: "w3-text-green" }, [
                              t._v("有效期至：" + t._s(t.passport)),
                            ])
                          : r(
                              "p",
                              {
                                directives: [
                                  {
                                    name: "loading",
                                    rawName: "v-loading",
                                    value: t.loading,
                                    expression: "loading",
                                  },
                                ],
                                staticClass: "w3-text-red",
                              },
                              [t._v("无授权证书 或证书无效")]
                            ),
                        t._v(" "),
                        r("p", [
                          t._v("代理IP " + t._s(t.proxy_server) + " 端口 8080"),
                        ]),
                      ])
                    : r("div", {
                        directives: [
                          {
                            name: "loading",
                            rawName: "v-loading",
                            value: !0,
                            expression: "true",
                          },
                        ],
                        staticStyle: { height: "120px" },
                        attrs: {
                          "element-loading-text": "拼命加载中",
                          "element-loading-spinner": "el-icon-loading",
                        },
                      }),
                ]
              ),
              t._v(" "),
              r(
                "div",
                {
                  staticClass:
                    "w3-card w3-light-gray w3-padding w3-margin-bottom",
                  staticStyle: { "font-size": "14px" },
                },
                [
                  t._m(0),
                  t._v(" "),
                  r(
                    "el-collapse",
                    [
                      r(
                        "el-collapse-item",
                        {
                          attrs: {
                            title:
                              "WCplus3用户专属免费小红圈 讨论玩法和创意 获取WCplus3的最新动态",
                            name: "4",
                          },
                        },
                        [
                          r("div", [
                            r("img", {
                              staticStyle: { width: "256px" },
                              attrs: { src: n("7tKO") },
                            }),
                          ]),
                        ]
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
              t._v(" "),
              t._m(1),
            ]);
          },
          [
            function () {
              var t = this,
                e = t.$createElement,
                n = t._self._c || e;
              return n(
                "ul",
                {
                  staticClass: "w3-animate-left",
                  staticStyle: { "font-size": "16px" },
                },
                [
                  n("li", [
                    n(
                      "a",
                      {
                        staticClass: "click-link",
                        attrs: {
                          href: "https://shimo.im/docs/dA7ejdOQuPwo7NZV/",
                          target: "_blank",
                        },
                      },
                      [
                        n("i", { staticClass: "fa fa-book" }),
                        t._v("《WCplus3使用说明书》"),
                      ]
                    ),
                  ]),
                  t._v(" "),
                  n("li", [
                    n(
                      "a",
                      {
                        staticClass: "click-link",
                        attrs: {
                          href: "https://shimo.im/docs/CAEV3AWF1Pw0IHju/",
                          target: "_blank",
                        },
                      },
                      [
                        n("i", { staticClass: "fa fa-list" }),
                        t._v(" 贡献者名单"),
                      ]
                    ),
                  ]),
                  t._v(" "),
                  n("li", [
                    n(
                      "a",
                      {
                        staticClass: "click-link",
                        attrs: {
                          href: " https://t.zsxq.com/EUN33Vv",
                          target: "_blank",
                        },
                      },
                      [
                        n("i", { staticClass: "fa fa-group" }),
                        t._v(" 阿呆和他的新媒体朋友"),
                      ]
                    ),
                  ]),
                  t._v(" "),
                  n("li", [
                    n(
                      "a",
                      {
                        staticClass: "click-link",
                        attrs: {
                          href: "https://shimo.im/docs/oH5HgARGTyYMETNj",
                          target: "_blank",
                        },
                      },
                      [
                        n("i", { staticClass: "fa fa-question" }),
                        t._v(" WCplus3 FAQ"),
                      ]
                    ),
                  ]),
                  t._v(" "),
                  n("li", [
                    n(
                      "a",
                      {
                        staticClass: "click-link",
                        attrs: {
                          href: "https://shimo.im/docs/1Zh9SFkzdbAOBTkI",
                          target: "_blank",
                        },
                      },
                      [
                        n("i", { staticClass: "fa fa-upload" }),
                        t._v(" 升级日志"),
                      ]
                    ),
                  ]),
                ]
              );
            },
            function () {
              var t = this,
                e = t.$createElement,
                n = t._self._c || e;
              return n(
                "div",
                {
                  staticClass: "w3-card w3-light-gray w3-padding",
                  staticStyle: { "font-size": "14px" },
                },
                [
                  n("h1", [t._v("免责声明")]),
                  t._v(" "),
                  n("p", [
                    t._v(
                      "WCplus仅用于学习和研究，搜集的数据不可用于任何商业行为"
                    ),
                  ]),
                  t._v(" "),
                  n("p", [
                    t._v(
                      "除了自己的公众号可适当搜集备份之外，请勿搜集任何其余公众号"
                    ),
                  ]),
                  t._v(" "),
                  n("p", [
                    t._v(
                      "微信公众号官方已经删除的文章请主动删除，一切后果完全由使用者承担"
                    ),
                  ]),
                  t._v(" "),
                  n("p", [
                    t._v(
                      "用户运行WCplus软件即认定无条件同意并保证遵守上述规范"
                    ),
                  ]),
                  t._v(" "),
                  n("p", [
                    t._v(
                      "由此引发的任何问题，WCplus和其开发者不承担任何法律责任"
                    ),
                  ]),
                ]
              );
            },
          ],
          !1,
          null,
          "aedd3638",
          null
        );
      c.options.__file = "general.vue";
      e.default = c.exports;
    },
    oLMN: function (t, e, n) {
      "use strict";
      var r = n("Woz8");
      n.n(r).a;
    },
    pdi6: function (t, e, n) {},
    t3Un: function (t, e, n) {
      "use strict";
      var r = n("vDqi"),
        i = n
          .n(r)
          .a.create({ baseURL: "http://localhost:5000/api", timeout: 5e3 });
      e.a = i;
    },
  },
]);
