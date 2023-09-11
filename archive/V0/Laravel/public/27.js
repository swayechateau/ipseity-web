(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[27],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/router/views/_core/Results.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/router/views/_core/Results.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_page_meta__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/page-meta */ "./resources/js/utils/page-meta.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  beforeCreate: function beforeCreate() {
    Object(_utils_page_meta__WEBPACK_IMPORTED_MODULE_0__["queryTitle"])(this.$route.query.q);
  },
  components: {
    Search: function Search() {
      return __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! @/components/search/SearchBox */ "./resources/js/components/search/SearchBox.vue"));
    },
    Results: function Results() {
      return __webpack_require__.e(/*! import() */ 6).then(__webpack_require__.bind(null, /*! @/components/search/SearchResults */ "./resources/js/components/search/SearchResults.vue"));
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/router/views/_core/Results.vue?vue&type=template&id=b208b8c8&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/router/views/_core/Results.vue?vue&type=template&id=b208b8c8& ***!
  \******************************************************************************************************************************************************************************************************************/
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
    [
      _c(
        "v-layout",
        { attrs: { wrap: "" } },
        [
          _c(
            "v-flex",
            { attrs: { xs12: "" } },
            [_c("search", { attrs: { label: "Search Site" } })],
            1
          )
        ],
        1
      ),
      _vm._v(" "),
      _c("results")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/router/views/_core/Results.vue":
/*!*****************************************************!*\
  !*** ./resources/js/router/views/_core/Results.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Results_vue_vue_type_template_id_b208b8c8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Results.vue?vue&type=template&id=b208b8c8& */ "./resources/js/router/views/_core/Results.vue?vue&type=template&id=b208b8c8&");
/* harmony import */ var _Results_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Results.vue?vue&type=script&lang=js& */ "./resources/js/router/views/_core/Results.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Results_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Results_vue_vue_type_template_id_b208b8c8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Results_vue_vue_type_template_id_b208b8c8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/router/views/_core/Results.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/router/views/_core/Results.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/router/views/_core/Results.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Results_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Results.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/router/views/_core/Results.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Results_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/router/views/_core/Results.vue?vue&type=template&id=b208b8c8&":
/*!************************************************************************************!*\
  !*** ./resources/js/router/views/_core/Results.vue?vue&type=template&id=b208b8c8& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Results_vue_vue_type_template_id_b208b8c8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Results.vue?vue&type=template&id=b208b8c8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/router/views/_core/Results.vue?vue&type=template&id=b208b8c8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Results_vue_vue_type_template_id_b208b8c8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Results_vue_vue_type_template_id_b208b8c8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);