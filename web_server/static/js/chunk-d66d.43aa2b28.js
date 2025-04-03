(window.webpackJsonp = window.webpackJsonp || []).push([
  ["chunk-d66d"],
  {
    NLdL: function (t, s, e) {
      "use strict";
      e.d(s, "a", function () {
        return n;
      }),
        e.d(s, "b", function () {
          return i;
        });
      var a = e("t3Un");
      function n() {
        return Object(a.a)({ url: "/settings", method: "get" });
      }
      function i(t) {
        return Object(a.a)({ url: "/settings", method: "put", params: t });
      }
    },
    RNdk: function (t, s, e) {},
    TXT3: function (t, s, e) {
      "use strict";
      var a = e("RNdk");
      e.n(a).a;
    },
    XlqX: function (t, s, e) {
      "use strict";
      e.r(s);
      var a = e("NLdL"),
        n = {
          name: "Crawler",
          data: function () {
            return {
              settings: {
                proxy: "",
                save_html: void 0,
                use_proxy: void 0,
                article_list_delay: 2,
                reading_data_delay: 3,
              },
            };
          },
          created: function () {
            this.fetchSettingsData();
          },
          methods: {
            fetchSettingsData: function () {
              var t = this;
              Object(a.a)().then(function (s) {
                (t.settings = s.data),
                  (t.settings.article_list_delay = parseInt(
                    t.settings.article_list_delay
                  )),
                  (t.settings.reading_data_delay = parseInt(
                    t.settings.reading_data_delay
                  )),
                  "true" === t.settings.use_proxy
                    ? (t.settings.use_proxy = !0)
                    : (t.settings.use_proxy = !1),
                  "true" === t.settings.save_html
                    ? (t.settings.save_html = !0)
                    : (t.settings.save_html = !1);
              });
            },
            changeProxy: function () {
              Object(a.b)(this.settings),
                this.settings.use_proxy &&
                  this.$alert(
                    "优先使用真实IP可能会导致24小时内 无法使用浏览器打开公众号文章 建议配置代理IP",
                    "提示",
                    { confirmButtonText: "确定" }
                  );
            },
            changeSaveHtml: function () {
              Object(a.b)(this.settings),
                this.settings.save_html &&
                  this.$alert(
                    "保存文章原文后文章被删除后依旧可查看，不过会占用更多硬盘空间，15万文章大约需要10GB空间",
                    "提示",
                    { confirmButtonText: "确定" }
                  );
            },
            saveSettings: function () {
              Object(a.b)(this.settings),
                this.$message({ message: "保存成功", type: "success" });
            },
          },
        },
        i = (e("TXT3"), e("KHd+")),
        c = Object(i.a)(
          n,
          function () {
            var t = this,
              s = t.$createElement,
              e = t._self._c || s;
            return e("div", { staticClass: "app-container" }, [
              e("div", { staticClass: "w3-round w3-card-4 setting-card" }, [
                t._m(0),
                t._v(" "),
                e(
                  "div",
                  { staticClass: "w3-container" },
                  [
                    e("el-input", {
                      staticClass: "item-margin",
                      attrs: {
                        rows: 5,
                        type: "textarea",
                        placeholder:
                          "设置之后需要设置IP白名单 详见代理服务商官方文档 验证可返回单个字符串代理IP表示成功",
                      },
                      on: {
                        blur: function (s) {
                          t.saveSettings();
                        },
                      },
                      model: {
                        value: t.settings.proxy,
                        callback: function (s) {
                          t.$set(t.settings, "proxy", s);
                        },
                        expression: "settings.proxy",
                      },
                    }),
                    t._v(" "),
                    e(
                      "el-checkbox",
                      {
                        staticClass: "item-margin",
                        on: {
                          change: function (s) {
                            t.changeProxy();
                          },
                        },
                        model: {
                          value: t.settings.use_proxy,
                          callback: function (s) {
                            t.$set(t.settings, "use_proxy", s);
                          },
                          expression: "settings.use_proxy",
                        },
                      },
                      [t._v("优先使用真实IP")]
                    ),
                    t._v(" "),
                    e(
                      "a",
                      {
                        staticStyle: {
                          "margin-left": "20px",
                          color: "#55c3ff",
                        },
                        attrs: {
                          target: "_blank",
                          href: "https://shimo.im/docs/EPDLhbsNsvI5FrKQ/",
                        },
                      },
                      [t._v("如何购买代理")]
                    ),
                    t._v(" "),
                    e(
                      "a",
                      {
                        staticStyle: {
                          "margin-left": "20px",
                          color: "#ff6c00",
                        },
                        attrs: { href: t.settings.proxy, target: "_blank" },
                      },
                      [t._v("验证代理")]
                    ),
                  ],
                  1
                ),
              ]),
              t._v(" "),
              e("div", { staticClass: "w3-round w3-card-4 setting-card" }, [
                t._m(1),
                t._v(" "),
                e("div", { staticClass: "w3-container" }, [
                  e(
                    "div",
                    { staticClass: "block item-margin" },
                    [
                      e("span", { staticClass: "demonstration" }, [
                        t._v("历史文章列表时间间隔 建议2秒"),
                      ]),
                      t._v(" "),
                      e("el-slider", {
                        attrs: { disabled: "", "show-input": "" },
                        on: {
                          change: function (s) {
                            t.saveSettings();
                          },
                        },
                        model: {
                          value: t.settings.article_list_delay,
                          callback: function (s) {
                            t.$set(t.settings, "article_list_delay", s);
                          },
                          expression: "settings.article_list_delay",
                        },
                      }),
                    ],
                    1
                  ),
                  t._v(" "),
                  e(
                    "div",
                    { staticClass: "block item-margin" },
                    [
                      e("span", { staticClass: "demonstration" }, [
                        t._v("采集阅读数据时间间隔 建议3秒"),
                      ]),
                      t._v(" "),
                      e("el-slider", {
                        attrs: { disabled: "", "show-input": "" },
                        on: {
                          change: function (s) {
                            t.saveSettings();
                          },
                        },
                        model: {
                          value: t.settings.reading_data_delay,
                          callback: function (s) {
                            t.$set(t.settings, "reading_data_delay", s);
                          },
                          expression: "settings.reading_data_delay",
                        },
                      }),
                    ],
                    1
                  ),
                ]),
              ]),
              t._v(" "),
              e("div", { staticClass: "w3-round w3-card-4 setting-card" }, [
                t._m(2),
                t._v(" "),
                e(
                  "div",
                  { staticClass: "w3-container" },
                  [
                    e(
                      "el-checkbox",
                      {
                        staticClass: "item-margin",
                        on: {
                          change: function (s) {
                            t.changeSaveHtml();
                          },
                        },
                        model: {
                          value: t.settings.save_html,
                          callback: function (s) {
                            t.$set(t.settings, "save_html", s);
                          },
                          expression: "settings.save_html",
                        },
                      },
                      [t._v("保存文章原文")]
                    ),
                  ],
                  1
                ),
              ]),
            ]);
          },
          [
            function () {
              var t = this.$createElement,
                s = this._self._c || t;
              return s(
                "header",
                { staticClass: "w3-container w3-round w3-teal" },
                [
                  s("h5", { staticStyle: { float: "left" } }, [
                    s("i", { staticClass: "fa fa-hacker-news" }),
                    this._v(" 代理"),
                  ]),
                ]
              );
            },
            function () {
              var t = this.$createElement,
                s = this._self._c || t;
              return s(
                "header",
                { staticClass: "w3-container w3-round w3-orange" },
                [
                  s("h5", { staticStyle: { float: "left" } }, [
                    s("i", { staticClass: "fa fa-clock-o" }),
                    this._v(" 采集间隔 单位秒"),
                  ]),
                ]
              );
            },
            function () {
              var t = this.$createElement,
                s = this._self._c || t;
              return s(
                "header",
                { staticClass: "w3-container w3-round w3-black" },
                [
                  s("h5", { staticStyle: { float: "left" } }, [
                    s("i", { staticClass: "fa fa-book" }),
                    this._v(" 其它"),
                  ]),
                ]
              );
            },
          ],
          !1,
          null,
          "73aebd82",
          null
        );
      c.options.__file = "crawler.vue";
      s.default = c.exports;
    },
    t3Un: function (t, s, e) {
      "use strict";
      var a = e("vDqi"),
        n = e
          .n(a)
          .a.create({ baseURL: "http://localhost:5000/api", timeout: 5e3 });
      s.a = n;
    },
  },
]);
