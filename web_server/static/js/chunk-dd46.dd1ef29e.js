(window.webpackJsonp = window.webpackJsonp || []).push([
  ["chunk-dd46"],
  {
    "6QB5": function (t, a, e) {
      "use strict";
      e.d(a, "b", function () {
        return i;
      }),
        e.d(a, "a", function () {
          return s;
        });
      var n = e("t3Un");
      function i() {
        return Object(n.a)({ url: "/gzh", method: "get" });
      }
      function s(t) {
        return Object(n.a)({ url: "/gzh", method: "post", params: t });
      }
    },
    VRcX: function (t, a, e) {
      "use strict";
      var n = e("X6EH");
      e.n(n).a;
    },
    X6EH: function (t, a, e) {},
    lAbF: function (t, a, e) {
      "use strict";
      e.r(a);
      var n = e("Mj6V"),
        i = e.n(n),
        s = (e("pdi6"), e("sm4x")),
        r = e.n(s),
        o = e("6QB5"),
        c = {
          components: { DigitRoll: r.a },
          data: function () {
            return { total_data: { gzh_num: 0, article_num: 0 } };
          },
          created: function () {
            setTimeout(this.loadStatData, 50);
          },
          methods: {
            loadStatData: function () {
              var t = this;
              i.a.start(),
                Object(o.b)().then(function (a) {
                  t.total_data = a.data.stat_data;
                }),
                i.a.done();
            },
          },
        },
        l = (e("VRcX"), e("KHd+")),
        u = Object(l.a)(
          c,
          function () {
            var t = this.$createElement,
              a = this._self._c || t;
            return a("div", { staticClass: "app-container" }, [
              a(
                "div",
                {
                  staticClass: "center unselectable",
                  staticStyle: { width: "600px", "font-size": "100px" },
                },
                [
                  a("DigitRoll", {
                    staticClass:
                      "w3-text-red w3-card w3-border w3-border-red w3-round-large",
                    attrs: { "roll-digits": this.total_data.gzh_num },
                  }),
                  this._v(" "),
                  a("DigitRoll", {
                    staticClass:
                      "w3-text-blue w3-card w3-border w3-border-blue w3-round-large",
                    attrs: { "roll-digits": this.total_data.article_num },
                  }),
                  this._v(" "),
                  a(
                    "h5",
                    {
                      staticClass: "w3-text-gray",
                      staticStyle: { "font-size": "12px" },
                      attrs: { align: "right" },
                    },
                    [this._v("WCplus 微搜助你公众号掘金")]
                  ),
                ],
                1
              ),
            ]);
          },
          [],
          !1,
          null,
          "27d178da",
          null
        );
      u.options.__file = "index.vue";
      a.default = u.exports;
    },
    t3Un: function (t, a, e) {
      "use strict";
      var n = e("vDqi"),
        i = e
          .n(n)
          .a.create({ baseURL: "http://localhost:5000/api", timeout: 5e3 });
      a.a = i;
    },
  },
]);
