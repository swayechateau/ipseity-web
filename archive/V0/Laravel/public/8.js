(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/router/views/_core/Projects.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/router/views/_core/Projects.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _utils_page_meta__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/page-meta */ "./resources/js/utils/page-meta.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/* harmony default export */ __webpack_exports__["default"] = ({
  head: {
    title: function title() {
      return {
        inner: Object(_utils_page_meta__WEBPACK_IMPORTED_MODULE_1__["pageTitle"])('projects')
      };
    },
    meta: function meta() {
      return [{
        name: 'description',
        content: "Log in to Swaye Chateau"
      }];
    }
  },
  data: function data() {
    return {
      dialog: false,
      proj: {}
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('site', ['projects', 'pages'])),
  methods: {
    showProject: function showProject(project) {
      this.proj = project;
      this.dialog = true;
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/stylus-loader/index.js!./node_modules/vue-loader/lib/index.js?!./resources/js/router/views/_core/Projects.vue?vue&type=style&index=0&lang=stylus&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--10-2!./node_modules/stylus-loader!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/router/views/_core/Projects.vue?vue&type=style&index=0&lang=stylus& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".bg-tint {\n  position: absolute;\n  background-color: rgba(0,0,0,0.2);\n  width: 100%;\n  height: 100%;\n  z-index: -1;\n  left: 0;\n  right: 0;\n}\n.br-actions {\n  bottom: 0px;\n  position: absolute;\n  right: 0;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/stylus-loader/index.js!./node_modules/vue-loader/lib/index.js?!./resources/js/router/views/_core/Projects.vue?vue&type=style&index=0&lang=stylus&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--10-2!./node_modules/stylus-loader!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/router/views/_core/Projects.vue?vue&type=style&index=0&lang=stylus& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--10-2!../../../../../node_modules/stylus-loader!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Projects.vue?vue&type=style&index=0&lang=stylus& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/stylus-loader/index.js!./node_modules/vue-loader/lib/index.js?!./resources/js/router/views/_core/Projects.vue?vue&type=style&index=0&lang=stylus&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/router/views/_core/Projects.vue?vue&type=template&id=338a5fc4&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/router/views/_core/Projects.vue?vue&type=template&id=338a5fc4& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    { staticClass: "projects" },
    [
      _c(
        "v-parallax",
        {
          staticStyle: { height: "40vh", "min-height": "300px" },
          attrs: { src: _vm.pages["projects"].hero }
        },
        [
          _c("div", { staticClass: "bg-tint" }),
          _vm._v(" "),
          _c(
            "v-layout",
            {
              attrs: {
                "pa-2": "",
                "ma-0": "",
                "align-center": "",
                column: "",
                "fill-height": "",
                "justify-center": ""
              }
            },
            [
              _c("h1", { staticClass: "display-2 mb-3" }, [
                _vm._v(_vm._s(_vm.pages["projects"].title))
              ]),
              _vm._v(" "),
              _c("h2", { staticClass: "font-weight-light" }, [
                _vm._v(_vm._s(_vm.pages["projects"].sub_title))
              ])
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-container",
        { attrs: { fluid: "" } },
        [
          _c(
            "v-layout",
            { attrs: { wrap: "" } },
            [
              _vm._l(_vm.projects, function(project) {
                return _c(
                  "v-flex",
                  {
                    key: project.index,
                    attrs: { "py-3": "", xs12: "", sm6: "", md4: "" }
                  },
                  [
                    _c(
                      "v-card",
                      {
                        staticClass: "ma-2",
                        attrs: { height: "100%", hover: "" },
                        on: {
                          click: function($event) {
                            $event.stopPropagation()
                            return _vm.showProject(project)
                          }
                        }
                      },
                      [
                        _c(
                          "v-img",
                          {
                            attrs: { src: project.hero, "aspect-ratio": "2.6" }
                          },
                          [
                            _c(
                              "v-layout",
                              { attrs: { "justify-end": "" } },
                              [_c("v-spacer")],
                              1
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c("v-card-title", { attrs: { "primary-title": "" } }, [
                          _c("div", [
                            _c("h3", { staticClass: "headline mb-0" }, [
                              _vm._v(_vm._s(project.name))
                            ]),
                            _vm._v(" "),
                            _c("div", [_vm._v(_vm._s(project.description))])
                          ])
                        ]),
                        _vm._v(" "),
                        project.tags
                          ? _c(
                              "v-card-actions",
                              _vm._l(project.tags, function(tag) {
                                return _c(
                                  "v-chip",
                                  {
                                    key: tag,
                                    attrs: { dark: "", color: "blue" }
                                  },
                                  [_vm._v(_vm._s(tag))]
                                )
                              }),
                              1
                            )
                          : _vm._e()
                      ],
                      1
                    )
                  ],
                  1
                )
              }),
              _vm._v(" "),
              _c(
                "v-dialog",
                {
                  attrs: { "max-width": "80%" },
                  model: {
                    value: _vm.dialog,
                    callback: function($$v) {
                      _vm.dialog = $$v
                    },
                    expression: "dialog"
                  }
                },
                [
                  _c(
                    "v-card",
                    [
                      _c(
                        "v-layout",
                        [
                          _c(
                            "v-flex",
                            { attrs: { sm12: "", md4: "" } },
                            [
                              _c(
                                "v-img",
                                {
                                  attrs: {
                                    src: _vm.proj.hero,
                                    "aspect-ratio": "1.6"
                                  }
                                },
                                [
                                  _c(
                                    "v-layout",
                                    { attrs: { "justify-end": "" } },
                                    [_c("v-spacer")],
                                    1
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "v-flex",
                            { attrs: { sm12: "", md8: "" } },
                            [
                              _c("v-card-title", { staticClass: "headline" }, [
                                _vm._v(_vm._s(_vm.proj.name))
                              ]),
                              _vm._v(" "),
                              _c(
                                "v-card-text",
                                {
                                  domProps: {
                                    innerHTML: _vm._s(
                                      _vm.proj.content
                                        ? _vm.proj.content.body
                                        : _vm.proj.description
                                    )
                                  }
                                },
                                [_vm._v(_vm._s(_vm.proj.description))]
                              ),
                              _vm._v(" "),
                              _c("v-spacer"),
                              _vm._v(" "),
                              _c(
                                "v-card-actions",
                                { staticClass: "br-actions" },
                                [
                                  _vm.proj.open_source && _vm.proj.git_url
                                    ? _c(
                                        "v-btn",
                                        {
                                          attrs: {
                                            color: "green darken-1",
                                            flat: "flat",
                                            target: "_blank",
                                            href: _vm.proj.git_url
                                          }
                                        },
                                        [_vm._v("View Code")]
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm.proj.demo_url
                                    ? _c(
                                        "v-btn",
                                        {
                                          attrs: {
                                            color: "green darken-1",
                                            flat: "flat",
                                            target: "_blank",
                                            href: _vm.proj.demo_url
                                          }
                                        },
                                        [_vm._v("View Demo")]
                                      )
                                    : _vm._e()
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
                ],
                1
              )
            ],
            2
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/router/views/_core/Projects.vue":
/*!******************************************************!*\
  !*** ./resources/js/router/views/_core/Projects.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Projects_vue_vue_type_template_id_338a5fc4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Projects.vue?vue&type=template&id=338a5fc4& */ "./resources/js/router/views/_core/Projects.vue?vue&type=template&id=338a5fc4&");
/* harmony import */ var _Projects_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Projects.vue?vue&type=script&lang=js& */ "./resources/js/router/views/_core/Projects.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Projects_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Projects.vue?vue&type=style&index=0&lang=stylus& */ "./resources/js/router/views/_core/Projects.vue?vue&type=style&index=0&lang=stylus&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Projects_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Projects_vue_vue_type_template_id_338a5fc4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Projects_vue_vue_type_template_id_338a5fc4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/router/views/_core/Projects.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/router/views/_core/Projects.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/router/views/_core/Projects.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Projects_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Projects.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/router/views/_core/Projects.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Projects_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/router/views/_core/Projects.vue?vue&type=style&index=0&lang=stylus&":
/*!******************************************************************************************!*\
  !*** ./resources/js/router/views/_core/Projects.vue?vue&type=style&index=0&lang=stylus& ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_2_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Projects_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--10-2!../../../../../node_modules/stylus-loader!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Projects.vue?vue&type=style&index=0&lang=stylus& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/stylus-loader/index.js!./node_modules/vue-loader/lib/index.js?!./resources/js/router/views/_core/Projects.vue?vue&type=style&index=0&lang=stylus&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_2_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Projects_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_2_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Projects_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_2_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Projects_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_2_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Projects_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_2_node_modules_stylus_loader_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_Projects_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/router/views/_core/Projects.vue?vue&type=template&id=338a5fc4&":
/*!*************************************************************************************!*\
  !*** ./resources/js/router/views/_core/Projects.vue?vue&type=template&id=338a5fc4& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Projects_vue_vue_type_template_id_338a5fc4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Projects.vue?vue&type=template&id=338a5fc4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/router/views/_core/Projects.vue?vue&type=template&id=338a5fc4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Projects_vue_vue_type_template_id_338a5fc4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Projects_vue_vue_type_template_id_338a5fc4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);