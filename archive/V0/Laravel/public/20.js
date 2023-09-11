(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/blog/FeaturedPosts.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/blog/FeaturedPosts.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    full: Boolean
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('site', ['featuredPosts']))
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/blog/FeaturedPosts.vue?vue&type=template&id=7078b603&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/blog/FeaturedPosts.vue?vue&type=template&id=7078b603& ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.featuredPosts
    ? _c(
        "v-container",
        { attrs: { "pa-0": "" } },
        [
          _vm.full
            ? _c(
                "v-layout",
                { attrs: { wrap: "" } },
                _vm._l(_vm.featuredPosts.slice(0, 3), function(article, i) {
                  return _c(
                    "v-flex",
                    { key: i, attrs: { xs12: "", sm6: "", md6: "", lg4: "" } },
                    [
                      _c(
                        "v-card",
                        {
                          staticClass: "ma-2",
                          attrs: {
                            dark: "",
                            hover: "",
                            height: "30vh",
                            href: article.slug
                          }
                        },
                        [
                          _c(
                            "v-img",
                            { attrs: { src: article.hero, height: "100%" } },
                            [
                              _c(
                                "v-layout",
                                {
                                  attrs: {
                                    "align-end": "",
                                    "fill-height": "",
                                    "pa-3": "",
                                    "white--text": ""
                                  }
                                },
                                [
                                  _c("div", [
                                    _c("div", {
                                      staticClass: "title headline mb-0",
                                      domProps: {
                                        textContent: _vm._s(article.name)
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "caption" }, [
                                      _vm._v(
                                        " " +
                                          _vm._s(
                                            _vm._f("moment")(
                                              [article.posted_at],
                                              "MMMM Do YYYY"
                                            )
                                          ) +
                                          " "
                                      )
                                    ])
                                  ])
                                ]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                }),
                1
              )
            : _c(
                "v-layout",
                { attrs: { column: "", "pa-2": "" } },
                _vm._l(_vm.featuredPosts.slice(0, 3), function(article, i) {
                  return _c(
                    "v-card",
                    {
                      key: i,
                      staticClass: "ma-2",
                      attrs: {
                        flat: "",
                        dark: "",
                        hover: "",
                        height: "8vh",
                        href: article.slug
                      }
                    },
                    [
                      _c(
                        "v-layout",
                        [
                          _c(
                            "v-flex",
                            { attrs: { xs5: "" } },
                            [
                              _c("v-img", {
                                attrs: { src: article.hero, height: "8vh" }
                              })
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-flex",
                            { attrs: { xs7: "" } },
                            [
                              _c(
                                "v-card-title",
                                [
                                  _c("v-layout", { attrs: { column: "" } }, [
                                    _c("div", {
                                      staticClass: "subheading",
                                      domProps: {
                                        textContent: _vm._s(article.name)
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("div", { staticClass: "caption" }, [
                                      _vm._v(
                                        " " +
                                          _vm._s(
                                            _vm._f("moment")(
                                              [article.posted_at],
                                              "MMMM Do YYYY"
                                            )
                                          )
                                      )
                                    ])
                                  ])
                                ],
                                1
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  )
                }),
                1
              )
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/blog/FeaturedPosts.vue":
/*!********************************************************!*\
  !*** ./resources/js/components/blog/FeaturedPosts.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FeaturedPosts_vue_vue_type_template_id_7078b603___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FeaturedPosts.vue?vue&type=template&id=7078b603& */ "./resources/js/components/blog/FeaturedPosts.vue?vue&type=template&id=7078b603&");
/* harmony import */ var _FeaturedPosts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FeaturedPosts.vue?vue&type=script&lang=js& */ "./resources/js/components/blog/FeaturedPosts.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _FeaturedPosts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FeaturedPosts_vue_vue_type_template_id_7078b603___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FeaturedPosts_vue_vue_type_template_id_7078b603___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/blog/FeaturedPosts.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/blog/FeaturedPosts.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/blog/FeaturedPosts.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FeaturedPosts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./FeaturedPosts.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/blog/FeaturedPosts.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FeaturedPosts_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/blog/FeaturedPosts.vue?vue&type=template&id=7078b603&":
/*!***************************************************************************************!*\
  !*** ./resources/js/components/blog/FeaturedPosts.vue?vue&type=template&id=7078b603& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FeaturedPosts_vue_vue_type_template_id_7078b603___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./FeaturedPosts.vue?vue&type=template&id=7078b603& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/blog/FeaturedPosts.vue?vue&type=template&id=7078b603&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FeaturedPosts_vue_vue_type_template_id_7078b603___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_FeaturedPosts_vue_vue_type_template_id_7078b603___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);