(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[18],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/blog/Articles.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/blog/Articles.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Utilities

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'Feed',
  components: {
    FeedCard: function FeedCard() {
      return __webpack_require__.e(/*! import() */ 5).then(__webpack_require__.bind(null, /*! @/components/blog/FeedCard */ "./resources/js/components/blog/FeedCard.vue"));
    }
  },
  data: function data() {
    return {
      layout: [2, 2, 1, 2, 2, 3, 3, 3, 3, 3, 3],
      page: 1
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('site', ['posts', 'siteWords', 'postPages', 'paginatedArticles'])),
  watch: {
    page: function page() {
      window.scrollTo(0, 0);
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/blog/Articles.vue?vue&type=template&id=b78ad622&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/blog/Articles.vue?vue&type=template&id=b78ad622& ***!
  \****************************************************************************************************************************************************************************************************************/
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
    "v-container",
    { attrs: { "grid-list-xl": "" } },
    [
      _c(
        "v-layout",
        { attrs: { wrap: "" } },
        [
          _c("v-flex", { attrs: { xs12: "" } }, [_vm._t("default")], 2),
          _vm._v(" "),
          _vm._l(_vm.paginatedArticles, function(article, i) {
            return [
              _c("feed-card", {
                key: article.title,
                attrs: { size: _vm.layout[i], value: article }
              })
            ]
          })
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "v-layout",
        { attrs: { "align-center": "" } },
        [
          _c(
            "v-flex",
            { attrs: { xs3: "" } },
            [
              _vm.page !== 1
                ? _c(
                    "base-btn",
                    {
                      staticClass: "ml-0",
                      attrs: { title: _vm.siteWords.previousPage, square: "" },
                      on: {
                        click: function($event) {
                          _vm.page--
                        }
                      }
                    },
                    [_c("v-icon", [_vm._v("mdi-chevron-left")])],
                    1
                  )
                : _vm._e()
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "v-flex",
            { attrs: { xs6: "", "text-xs-center": "", subheading: "" } },
            [
              _vm._v(
                "\n      " +
                  _vm._s(_vm.siteWords.page) +
                  " " +
                  _vm._s(_vm.page) +
                  " " +
                  _vm._s(_vm.siteWords.of) +
                  " " +
                  _vm._s(_vm.postPages) +
                  "\n    "
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "v-flex",
            { attrs: { xs3: "", "text-xs-right": "" } },
            [
              _vm.postPages > 1 && _vm.page < _vm.postPages
                ? _c(
                    "base-btn",
                    {
                      staticClass: "mr-0",
                      attrs: { title: _vm.siteWords.nextPage, square: "" },
                      on: {
                        click: function($event) {
                          _vm.page++
                        }
                      }
                    },
                    [_c("v-icon", [_vm._v("mdi-chevron-right")])],
                    1
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/blog/Articles.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/blog/Articles.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Articles_vue_vue_type_template_id_b78ad622___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Articles.vue?vue&type=template&id=b78ad622& */ "./resources/js/components/blog/Articles.vue?vue&type=template&id=b78ad622&");
/* harmony import */ var _Articles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Articles.vue?vue&type=script&lang=js& */ "./resources/js/components/blog/Articles.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Articles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Articles_vue_vue_type_template_id_b78ad622___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Articles_vue_vue_type_template_id_b78ad622___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/blog/Articles.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/blog/Articles.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/blog/Articles.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Articles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Articles.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/blog/Articles.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Articles_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/blog/Articles.vue?vue&type=template&id=b78ad622&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/blog/Articles.vue?vue&type=template&id=b78ad622& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Articles_vue_vue_type_template_id_b78ad622___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Articles.vue?vue&type=template&id=b78ad622& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/blog/Articles.vue?vue&type=template&id=b78ad622&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Articles_vue_vue_type_template_id_b78ad622___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Articles_vue_vue_type_template_id_b78ad622___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);