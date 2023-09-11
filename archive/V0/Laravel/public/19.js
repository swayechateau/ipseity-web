(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/blog/Comments.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/blog/Comments.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['comments'],
  data: function data() {
    return {
      user: 'anno',
      avatar: '/media/image/avatar/anonymous.png'
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/blog/Comments.vue?vue&type=template&id=29b225b4&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/blog/Comments.vue?vue&type=template&id=29b225b4& ***!
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
    "v-card",
    { staticClass: "mt-3" },
    [
      _c(
        "v-list",
        _vm._l(_vm.comments, function(item, i) {
          return _c(
            "v-list-tile",
            { key: i, attrs: { avatar: "" } },
            [
              _c("v-list-tile-avatar", [
                _c("img", {
                  attrs: { src: item.avatar ? item.avatar : _vm.avatar }
                })
              ]),
              _vm._v(" "),
              _c(
                "v-list-tile-content",
                [
                  _c("v-list-tile-sub-title", {
                    domProps: {
                      textContent: _vm._s(item.user ? item.user : _vm.user)
                    }
                  }),
                  _vm._v(" "),
                  _c("v-list-tile-title", {
                    domProps: { innerHTML: _vm._s(item.text) }
                  })
                ],
                1
              )
            ],
            1
          )
        }),
        1
      ),
      _vm._v(" "),
      _c(
        "v-card-title",
        [
          _c("v-spacer"),
          _vm._v(" "),
          _c("v-btn", { attrs: { outline: "" } }, [_vm._v("Comment")])
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

/***/ "./resources/js/components/blog/Comments.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/blog/Comments.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Comments_vue_vue_type_template_id_29b225b4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Comments.vue?vue&type=template&id=29b225b4& */ "./resources/js/components/blog/Comments.vue?vue&type=template&id=29b225b4&");
/* harmony import */ var _Comments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Comments.vue?vue&type=script&lang=js& */ "./resources/js/components/blog/Comments.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Comments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Comments_vue_vue_type_template_id_29b225b4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Comments_vue_vue_type_template_id_29b225b4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/blog/Comments.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/blog/Comments.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/blog/Comments.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Comments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Comments.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/blog/Comments.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Comments_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/blog/Comments.vue?vue&type=template&id=29b225b4&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/blog/Comments.vue?vue&type=template&id=29b225b4& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Comments_vue_vue_type_template_id_29b225b4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Comments.vue?vue&type=template&id=29b225b4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/blog/Comments.vue?vue&type=template&id=29b225b4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Comments_vue_vue_type_template_id_29b225b4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Comments_vue_vue_type_template_id_29b225b4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);