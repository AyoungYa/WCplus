(window.webpackJsonp = window.webpackJsonp || []).push([
  ["chunk-04b7"],
  {
    "/JPc": function (t, e, a) {
      "use strict";
      a.r(e);
      var s = a("t3Un");
      var i = {
          name: "Login",
          data: function () {
            return { loading: !0, qr: "", keepquerying: "", query_counter: 0 };
          },
          created: function () {
            this.keepquerying = setInterval(this.queryLogin, 1e3);
          },
          methods: {
            imgUrl: function () {
              return "http://localhost:5000/header/img/" + this.qr;
            },
            queryLogin: function () {
              var t = this;
              Object(s.a)({ url: "/login", method: "get" }).then(function (e) {
                var a = e.data;
                t.query_counter++,
                  (t.qr = a.qr),
                  1 === a.online &&
                    (clearInterval(t.keepquerying),
                    console.log("登录成功"),
                    t.$router.push("/friends/friends"));
              });
            },
          },
        },
        r = (a("8tek"), a("KHd+")),
        n = Object(r.a)(
          i,
          function () {
            var t = this,
              e = t.$createElement,
              a = t._self._c || e;
            return a("div", { staticClass: "app-container" }, [
              a(
                "div",
                {
                  staticClass:
                    "w3-card w3-round-large w3-display-middle w3-black",
                  staticStyle: { padding: "10px" },
                },
                [
                  t.qr
                    ? a("div", [
                        t.qr
                          ? a("img", {
                              staticClass: "w3-border w3-round-large",
                              staticStyle: { width: "240px" },
                              attrs: { src: t.imgUrl() },
                            })
                          : t._e(),
                        t._v(" "),
                        a("p", { attrs: { align: "center" } }, [
                          t._v("微信扫一扫登录网页版微信"),
                        ]),
                      ])
                    : a("div", [
                        a("div", {
                          directives: [
                            {
                              name: "loading",
                              rawName: "v-loading",
                              value: t.loading,
                              expression: "loading",
                            },
                          ],
                          staticClass: "w3-round-large",
                          staticStyle: {
                            width: "240px",
                            height: "240px",
                            background: "white",
                          },
                        }),
                        t._v(" "),
                        t._m(0),
                      ]),
                  t._v(" "),
                  a("hr"),
                  t._v(" "),
                  a("div", { staticClass: "ad-info" }, [
                    a(
                      "a",
                      {
                        staticClass: "w3-text-blue",
                        staticStyle: { display: "block" },
                        attrs: {
                          target: "_blank",
                          href: "https://shimo.im/docs/7WsS0Vsuh1AGSzyv/",
                        },
                      },
                      [t._v("使用说明书")]
                    ),
                    t._v(" "),
                    a("p", { staticClass: "w3-text-gray" }, [
                      t._v(t._s(t.$store.state.user.code)),
                    ]),
                    t._v(" "),
                    t.$store.state.user.frank
                      ? a("p", { staticClass: "w3-text-green" }, [
                          t._v(
                            "已经获得授权 有效期至 " +
                              t._s(t.$store.state.user.frank) +
                              " "
                          ),
                        ])
                      : a("p", { staticClass: "w3-text-red" }, [
                          t._v("尚未安装证书无法群发 请阅读说明书获悉授权方法"),
                        ]),
                  ]),
                ]
              ),
            ]);
          },
          [
            function () {
              var t = this.$createElement,
                e = this._self._c || t;
              return e("p", { attrs: { align: "center" } }, [
                this._v("努力"),
                e(
                  "span",
                  { staticStyle: { color: "coral", "font-size": "large" } },
                  [this._v("搞")]
                ),
                this._v("登录二维码中..."),
              ]);
            },
          ],
          !1,
          null,
          "378bf774",
          null
        );
      n.options.__file = "login.vue";
      e.default = n.exports;
    },
    "8tek": function (t, e, a) {
      "use strict";
      var s = a("Q6cC");
      a.n(s).a;
    },
    Q6cC: function (t, e, a) {},
    t3Un: function (t, e, a) {
      "use strict";
      var s = a("vDqi"),
        i = a
          .n(s)
          .a.create({ baseURL: "http://localhost:5000/api", timeout: 5e3 });
      e.a = i;
    },
  },
]);
