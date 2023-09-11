(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/projects/ListProjects.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/projects/ListProjects.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])("admin", ["projects"])), Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('site', ['lang'])),
  data: function data() {
    return {
      headers: [{
        text: "Name",
        align: "left",
        value: "name"
      }, {
        text: "Slug",
        value: "slug"
      }, {
        text: "Lang",
        value: "lang"
      }, {
        text: "Actions",
        width: "152px",
        sortable: false,
        value: "protein"
      }]
    };
  },
  methods: {
    deleteProject: function deleteProject(id) {
      this.snack = true;
      this.snackColor = "success";
      this.snackText = "User Deleted";
    },
    editProject: function editProject(id) {
      this.snack = true;
      this.snackColor = "success";
      this.snackText = id;
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/projects/ListProjects.vue?vue&type=template&id=b9db02dc&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/projects/ListProjects.vue?vue&type=template&id=b9db02dc& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
      _c("v-data-table", {
        attrs: {
          headers: _vm.headers,
          items: Object.values(_vm.projects[_vm.lang])
        },
        scopedSlots: _vm._u([
          {
            key: "items",
            fn: function(props) {
              return [
                _c(
                  "td",
                  [
                    _c(
                      "v-btn",
                      {
                        attrs: { flat: "" },
                        on: {
                          click: function($event) {
                            return _vm.editProject(props.item.id)
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\n          " +
                            _vm._s(props.item.name) +
                            "\n        "
                        )
                      ]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c("td", [_c("div", [_vm._v(_vm._s(props.item.slug))])]),
                _vm._v(" "),
                _c("td", [_c("div", [_vm._v(_vm._s(props.item.lang))])]),
                _vm._v(" "),
                _c(
                  "td",
                  [
                    _c(
                      "v-btn",
                      {
                        attrs: { flat: "", icon: "" },
                        on: {
                          click: function($event) {
                            return _vm.editProject(props.item.id)
                          }
                        }
                      },
                      [_c("v-icon", [_vm._v("mdi-pencil")])],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "v-btn",
                      {
                        attrs: { flat: "", icon: "" },
                        on: {
                          click: function($event) {
                            return _vm.deleteUser(props.item.id)
                          }
                        }
                      },
                      [_c("v-icon", [_vm._v("mdi-delete")])],
                      1
                    )
                  ],
                  1
                )
              ]
            }
          }
        ])
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/admin/projects/ListProjects.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/admin/projects/ListProjects.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ListProjects_vue_vue_type_template_id_b9db02dc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ListProjects.vue?vue&type=template&id=b9db02dc& */ "./resources/js/components/admin/projects/ListProjects.vue?vue&type=template&id=b9db02dc&");
/* harmony import */ var _ListProjects_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ListProjects.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/projects/ListProjects.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ListProjects_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ListProjects_vue_vue_type_template_id_b9db02dc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ListProjects_vue_vue_type_template_id_b9db02dc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/projects/ListProjects.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/projects/ListProjects.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/admin/projects/ListProjects.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListProjects_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ListProjects.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/projects/ListProjects.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ListProjects_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/projects/ListProjects.vue?vue&type=template&id=b9db02dc&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/admin/projects/ListProjects.vue?vue&type=template&id=b9db02dc& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListProjects_vue_vue_type_template_id_b9db02dc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ListProjects.vue?vue&type=template&id=b9db02dc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/projects/ListProjects.vue?vue&type=template&id=b9db02dc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListProjects_vue_vue_type_template_id_b9db02dc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ListProjects_vue_vue_type_template_id_b9db02dc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);