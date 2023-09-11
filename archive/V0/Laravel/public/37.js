(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[37],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/router/views/dashboard/admin/Translations.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/router/views/dashboard/admin/Translations.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
var _this = undefined;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ __webpack_exports__["default"] = ({
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('admin', ['translations'])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('site', ['siteWords'])),
  mounted: function mounted() {},
  data: function data() {
    return {
      valid: true,
      active: null,
      siteWord: {},
      checkbox: false
    };
  },
  watch: {
    defaultLang: function defaultLang(val) {
      _this.site.supportedLang.indexOf(val) === -1 ? _this.site.supportedLang.push(val) : console.log(val);
    }
  },
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])('admin', ['updateSettings'])), {}, {
    validate: function validate() {
      if (this.$refs.form.validate()) {
        // this.snackbar = true
        this.updateSettings(this.site).then(function (res) {});
      }
    },
    pushSocialLink: function pushSocialLink() {
      this.site.socialLinks.push({
        href: '',
        icon: ''
      });
    },
    removeSocialLink: function removeSocialLink(index) {
      this.site.socialLinks.splice(index, 1);
    }
  })
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/router/views/dashboard/admin/Translations.vue?vue&type=template&id=43cdac16&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/router/views/dashboard/admin/Translations.vue?vue&type=template&id=43cdac16& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
    "v-form",
    {
      ref: "form",
      attrs: { "lazy-validation": "" },
      model: {
        value: _vm.valid,
        callback: function($$v) {
          _vm.valid = $$v
        },
        expression: "valid"
      }
    },
    [
      _c(
        "v-tabs",
        {
          attrs: {
            color: "cyan",
            dark: "",
            grow: "",
            "slider-color": "yellow"
          },
          model: {
            value: _vm.active,
            callback: function($$v) {
              _vm.active = $$v
            },
            expression: "active"
          }
        },
        [
          _c("v-tab", [_vm._v("Langauage")]),
          _vm._v(" "),
          _c(
            "v-tab-item",
            [
              _c(
                "v-container",
                { attrs: { fluid: "" } },
                [
                  _c(
                    "v-layout",
                    [
                      _c(
                        "v-flex",
                        { attrs: { md2: "" } },
                        [
                          _c("v-select", {
                            attrs: {
                              items: _vm.availableLangs,
                              "item-text": "native_name",
                              "item-value": "abr_2",
                              label: "Default Language"
                            },
                            model: {
                              value: _vm.site.defaultLang,
                              callback: function($$v) {
                                _vm.$set(_vm.site, "defaultLang", $$v)
                              },
                              expression: "site.defaultLang"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-flex",
                        { attrs: { md10: "" } },
                        [
                          _c("v-select", {
                            attrs: {
                              items: _vm.availableLangs,
                              "item-text": "native_name",
                              "item-value": "abr_2",
                              label: "Supported Languages",
                              multiple: ""
                            },
                            model: {
                              value: _vm.site.supportedLang,
                              callback: function($$v) {
                                _vm.$set(_vm.site, "supportedLang", $$v)
                              },
                              expression: "site.supportedLang"
                            }
                          })
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
          ),
          _vm._v(" "),
          _c("v-tab", [_vm._v("Site Details")]),
          _vm._v(" "),
          _c(
            "v-tab-item",
            [
              _c(
                "v-container",
                { attrs: { fluid: "" } },
                [
                  _c("v-text-field", {
                    attrs: { label: "Site Name" },
                    model: {
                      value: _vm.site.name,
                      callback: function($$v) {
                        _vm.$set(_vm.site, "name", $$v)
                      },
                      expression: "site.name"
                    }
                  }),
                  _vm._v(" "),
                  _c("v-text-field", {
                    attrs: { label: "Site Url" },
                    model: {
                      value: _vm.site.url,
                      callback: function($$v) {
                        _vm.$set(_vm.site, "url", $$v)
                      },
                      expression: "site.url"
                    }
                  }),
                  _vm._v(" "),
                  _c("v-text-field", {
                    attrs: { label: "Site email" },
                    model: {
                      value: _vm.site.email,
                      callback: function($$v) {
                        _vm.$set(_vm.site, "email", $$v)
                      },
                      expression: "site.email"
                    }
                  }),
                  _vm._v(" "),
                  _c("v-text-field", {
                    attrs: { label: "Location" },
                    model: {
                      value: _vm.site.location,
                      callback: function($$v) {
                        _vm.$set(_vm.site, "location", $$v)
                      },
                      expression: "site.location"
                    }
                  }),
                  _vm._v(" "),
                  _c("v-text-field", {
                    attrs: { label: "Founded" },
                    model: {
                      value: _vm.site.founded,
                      callback: function($$v) {
                        _vm.$set(_vm.site, "founded", $$v)
                      },
                      expression: "site.founded"
                    }
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-tab",
            [
              _vm._v("\n      Social Links\n      "),
              _c(
                "v-btn",
                { attrs: { icon: "" }, on: { click: _vm.pushSocialLink } },
                [_c("v-icon", [_vm._v("mdi-plus")])],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-tab-item",
            [
              _c(
                "v-container",
                { attrs: { fluid: "" } },
                _vm._l(_vm.site.socialLinks, function(item, index) {
                  return _c(
                    "v-layout",
                    { key: index },
                    [
                      _c(
                        "v-flex",
                        { attrs: { md2: "" } },
                        [
                          _c("v-text-field", {
                            attrs: { label: "icon" },
                            model: {
                              value: _vm.site.socialLinks[index].icon,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.site.socialLinks[index],
                                  "icon",
                                  $$v
                                )
                              },
                              expression: "site.socialLinks[index].icon"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-flex",
                        { attrs: { md9: "" } },
                        [
                          _c("v-text-field", {
                            attrs: { label: "url" },
                            model: {
                              value: _vm.site.socialLinks[index].href,
                              callback: function($$v) {
                                _vm.$set(
                                  _vm.site.socialLinks[index],
                                  "href",
                                  $$v
                                )
                              },
                              expression: "site.socialLinks[index].href"
                            }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "v-flex",
                        { attrs: { md1: "" } },
                        [
                          _c(
                            "v-btn",
                            {
                              attrs: { icon: "" },
                              on: {
                                click: function($event) {
                                  return _vm.removeSocialLink(index)
                                }
                              }
                            },
                            [_c("v-icon", [_vm._v("mdi-close")])],
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
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "v-btn",
        {
          attrs: { color: "warning" },
          on: {
            click: function($event) {
              return _vm.validate()
            }
          }
        },
        [_vm._v("Update")]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/router/views/dashboard/admin/Translations.vue":
/*!********************************************************************!*\
  !*** ./resources/js/router/views/dashboard/admin/Translations.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Translations_vue_vue_type_template_id_43cdac16___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Translations.vue?vue&type=template&id=43cdac16& */ "./resources/js/router/views/dashboard/admin/Translations.vue?vue&type=template&id=43cdac16&");
/* harmony import */ var _Translations_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Translations.vue?vue&type=script&lang=js& */ "./resources/js/router/views/dashboard/admin/Translations.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Translations_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Translations_vue_vue_type_template_id_43cdac16___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Translations_vue_vue_type_template_id_43cdac16___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/router/views/dashboard/admin/Translations.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/router/views/dashboard/admin/Translations.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/router/views/dashboard/admin/Translations.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Translations_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Translations.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/router/views/dashboard/admin/Translations.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Translations_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/router/views/dashboard/admin/Translations.vue?vue&type=template&id=43cdac16&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/router/views/dashboard/admin/Translations.vue?vue&type=template&id=43cdac16& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Translations_vue_vue_type_template_id_43cdac16___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./Translations.vue?vue&type=template&id=43cdac16& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/router/views/dashboard/admin/Translations.vue?vue&type=template&id=43cdac16&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Translations_vue_vue_type_template_id_43cdac16___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Translations_vue_vue_type_template_id_43cdac16___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);