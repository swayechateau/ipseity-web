(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/_base/AddImage.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/_base/AddImage.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      imageUrl: ""
    };
  },
  props: ['value'],
  computed: {
    image: {
      get: function get() {
        if (typeof this.value === 'string') {
          this.imageUrl = this.value;
          return null;
        }

        return this.value;
      },
      set: function set(val) {
        this.$emit('input', val);
      }
    }
  },
  methods: {
    pickFile: function pickFile() {
      this.$refs.imageInput.click();
    },
    setImage: function setImage(event) {
      this.image = event.target.files[0];
      var reader = new FileReader();
      var parent = this;
      reader.addEventListener("load", function () {
        // convert image file to base64 string
        parent.imageUrl = reader.result;
      }, false);
      reader.readAsDataURL(event.target.files[0]);
      parent.image = event.target.files[0];
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/_base/AddTags.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/_base/AddTags.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      items: ['Gaming', 'Programming', 'Vue', 'Vuetify'],
      search: null
    };
  },
  props: ['value', 'label'],
  computed: {
    model: {
      get: function get() {
        this.items = this.value;
        return this.value;
      },
      set: function set(val) {
        this.$emit('input', val);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/_base/Editor.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/_base/Editor.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["value"],
  computed: {
    content: {
      get: function get() {
        return this.value;
      },
      set: function set(val) {
        this.$emit('input', val);
      }
    }
  },
  data: function data() {
    return {
      config: {
        modules: {
          toolbar: [["bold", "italic", "underline", "strike"], // toggled buttons
          ["blockquote", "code-block"], [{
            header: 1
          }, {
            header: 2
          }], // custom button values
          [{
            list: "ordered"
          }, {
            list: "bullet"
          }], [{
            script: "sub"
          }, {
            script: "super"
          }], // superscript/subscript
          [{
            indent: "-1"
          }, {
            indent: "+1"
          }], // outdent/indent
          [{
            direction: "rtl"
          }], // text direction
          [{
            size: ["small", false, "large", "huge"]
          }], // custom dropdown
          [{
            header: [1, 2, 3, 4, 5, 6, false]
          }], [{
            color: []
          }, {
            background: []
          }], // dropdown with defaults from theme
          [{
            font: []
          }], [{
            align: []
          }], ["link", "image"], ["clean"] // remove formatting button
          ]
        }
      }
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/pages/AddPage.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/pages/AddPage.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_base_Editor_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/_base/Editor.vue */ "./resources/js/components/_base/Editor.vue");
/* harmony import */ var _components_base_AddImage_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/_base/AddImage.vue */ "./resources/js/components/_base/AddImage.vue");
/* harmony import */ var _components_base_AddTags_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/_base/AddTags.vue */ "./resources/js/components/_base/AddTags.vue");



/* harmony default export */ __webpack_exports__["default"] = ({
  computed: {
    copy: {
      get: function get() {},
      set: function set(val) {
        if (val === true) {
          this.form['fr'] = this.form['en'];
          this.form['ja'] = this.form['en'];
        }

        return val;
      }
    }
  },
  data: function data() {
    return {
      dialog: false,
      form: {
        hero: null,
        name: '',
        slug: '',
        en: {
          tags: [],
          title: '',
          sub_title: '',
          name: '',
          category: '',
          description: '',
          content: {
            body: ''
          }
        },
        fr: {
          tag: [],
          title: '',
          sub_title: '',
          name: '',
          category: '',
          description: '',
          content: {
            body: ''
          }
        },
        ja: {
          tags: [],
          title: '',
          sub_title: '',
          name: '',
          category: '',
          description: '',
          content: {
            body: ''
          }
        }
      }
    };
  },
  components: {
    QuilEditor: _components_base_Editor_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    AddImage: _components_base_AddImage_vue__WEBPACK_IMPORTED_MODULE_1__["default"]
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/_base/AddImage.vue?vue&type=template&id=15a6c364&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/_base/AddImage.vue?vue&type=template&id=15a6c364& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
    "v-flex",
    {
      attrs: {
        xs12class:
          "text-xs-center text-sm-center text-md-center text-lg-center",
        width: "100%",
        height: "100%"
      },
      on: { click: _vm.pickFile }
    },
    [
      !_vm.imageUrl ? _c("v-btn", [_vm._v("Click here")]) : _vm._e(),
      _vm._v(" "),
      _vm.imageUrl
        ? _c("img", {
            ref: "imagePreview",
            attrs: { src: _vm.imageUrl, height: "100%", width: "100%" }
          })
        : _vm._e(),
      _vm._v(" "),
      _c("div", { staticStyle: { display: "none" } }, [
        _vm._v(_vm._s(_vm.image))
      ]),
      _vm._v(" "),
      _c("input", {
        directives: [
          { name: "show", rawName: "v-show", value: false, expression: "false" }
        ],
        ref: "imageInput",
        attrs: { type: "file", accept: "image/*" },
        on: { change: _vm.setImage }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/_base/AddTags.vue?vue&type=template&id=51b5c320&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/_base/AddTags.vue?vue&type=template&id=51b5c320& ***!
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
    { attrs: { fluid: "" } },
    [
      _c("v-combobox", {
        attrs: {
          items: _vm.items,
          "search-input": _vm.search,
          "hide-selected": "",
          label: _vm.label ? _vm.label : "Add some tags",
          multiple: "",
          "persistent-hint": "",
          "small-chips": ""
        },
        on: {
          "update:searchInput": function($event) {
            _vm.search = $event
          },
          "update:search-input": function($event) {
            _vm.search = $event
          }
        },
        scopedSlots: _vm._u([
          {
            key: "no-data",
            fn: function() {
              return [
                _c(
                  "v-list-item",
                  [
                    _c(
                      "v-list-item-content",
                      [
                        _c("v-list-item-title", [
                          _vm._v('\n            No results matching "'),
                          _c("strong", [_vm._v(_vm._s(_vm.search))]),
                          _vm._v('". Press '),
                          _c("kbd", [_vm._v("enter")]),
                          _vm._v(" to create a new one\n          ")
                        ])
                      ],
                      1
                    )
                  ],
                  1
                )
              ]
            },
            proxy: true
          }
        ]),
        model: {
          value: _vm.model,
          callback: function($$v) {
            _vm.model = $$v
          },
          expression: "model"
        }
      })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/_base/Editor.vue?vue&type=template&id=29a5dad2&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/_base/Editor.vue?vue&type=template&id=29a5dad2& ***!
  \***************************************************************************************************************************************************************************************************************/
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
  return _c("quill", {
    attrs: { config: _vm.config },
    model: {
      value: _vm.content,
      callback: function($$v) {
        _vm.content = $$v
      },
      expression: "content"
    }
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/pages/AddPage.vue?vue&type=template&id=0b8d142a&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/admin/pages/AddPage.vue?vue&type=template&id=0b8d142a& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
    "v-layout",
    { attrs: { row: "", "justify-end": "" } },
    [
      _c(
        "v-dialog",
        {
          attrs: {
            fullscreen: "",
            "hide-overlay": "",
            transition: "dialog-bottom-transition"
          },
          scopedSlots: _vm._u([
            {
              key: "activator",
              fn: function(ref) {
                var on = ref.on
                return [
                  _c(
                    "v-btn",
                    _vm._g(
                      { attrs: { color: "primary", dark: "", icon: "" } },
                      on
                    ),
                    [_c("v-icon", [_vm._v("mdi-plus")])],
                    1
                  )
                ]
              }
            }
          ]),
          model: {
            value: _vm.dialog,
            callback: function($$v) {
              _vm.dialog = $$v
            },
            expression: "dialog"
          }
        },
        [
          _vm._v(" "),
          _c(
            "v-card",
            [
              _c(
                "v-toolbar",
                { attrs: { dark: "", color: "primary" } },
                [
                  _c(
                    "v-btn",
                    {
                      attrs: { icon: "", dark: "" },
                      on: {
                        click: function($event) {
                          _vm.dialog = false
                        }
                      }
                    },
                    [_c("v-icon", [_vm._v("mdi-close")])],
                    1
                  ),
                  _vm._v(" "),
                  _c("v-toolbar-title", [_vm._v("New Page")]),
                  _vm._v(" "),
                  _c("v-spacer"),
                  _vm._v(" "),
                  _c(
                    "v-toolbar-items",
                    [
                      _c(
                        "v-btn",
                        {
                          attrs: { dark: "", flat: "" },
                          on: {
                            click: function($event) {
                              _vm.dialog = false
                            }
                          }
                        },
                        [_vm._v("Save")]
                      )
                    ],
                    1
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("add-image", {
                model: {
                  value: _vm.form["hero"],
                  callback: function($$v) {
                    _vm.$set(_vm.form, "hero", $$v)
                  },
                  expression: "form['hero']"
                }
              }),
              _vm._v(" "),
              _c("v-switch", {
                attrs: { label: "Page Copy en to others" },
                model: {
                  value: _vm.copy,
                  callback: function($$v) {
                    _vm.copy = $$v
                  },
                  expression: "copy"
                }
              }),
              _vm._v(" "),
              _c("v-text-field", {
                attrs: { label: "Page Name", readonly: "" },
                model: {
                  value: _vm.form["name"],
                  callback: function($$v) {
                    _vm.$set(_vm.form, "name", $$v)
                  },
                  expression: "form['name']"
                }
              }),
              _vm._v(" "),
              _c("v-text-field", {
                attrs: { label: "Page Slug", readonly: "" },
                model: {
                  value: _vm.form["slug"],
                  callback: function($$v) {
                    _vm.$set(_vm.form, "slug", $$v)
                  },
                  expression: "form['slug']"
                }
              }),
              _vm._v(" "),
              _c("v-divider"),
              _vm._v(" "),
              _c(
                "v-expansion-panel",
                _vm._l(["en", "fr", "ja"], function(item, i) {
                  return _c(
                    "v-expansion-panel-content",
                    {
                      key: i,
                      scopedSlots: _vm._u(
                        [
                          {
                            key: "header",
                            fn: function() {
                              return [_c("div", [_vm._v(_vm._s(item))])]
                            },
                            proxy: true
                          }
                        ],
                        null,
                        true
                      )
                    },
                    [
                      _vm._v(" "),
                      _c(
                        "v-card",
                        [
                          _c(
                            "v-card-text",
                            [
                              _c("add-tags", {
                                model: {
                                  value: _vm.form["" + item]["tags"],
                                  callback: function($$v) {
                                    _vm.$set(_vm.form["" + item], "tags", $$v)
                                  },
                                  expression: "form[`${item}`]['tags']"
                                }
                              }),
                              _vm._v(" "),
                              _c("v-text-field", {
                                attrs: { label: "Page Name" },
                                model: {
                                  value: _vm.form["" + item]["name"],
                                  callback: function($$v) {
                                    _vm.$set(_vm.form["" + item], "name", $$v)
                                  },
                                  expression: "form[`${item}`]['name']"
                                }
                              }),
                              _vm._v(" "),
                              _c("v-text-field", {
                                attrs: { label: "Page Title" },
                                model: {
                                  value: _vm.form["" + item]["title"],
                                  callback: function($$v) {
                                    _vm.$set(_vm.form["" + item], "title", $$v)
                                  },
                                  expression: "form[`${item}`]['title']"
                                }
                              }),
                              _vm._v(" "),
                              _c("v-text-field", {
                                attrs: { label: "Page Subtitle" },
                                model: {
                                  value: _vm.form["" + item]["sub_title"],
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.form["" + item],
                                      "sub_title",
                                      $$v
                                    )
                                  },
                                  expression: "form[`${item}`]['sub_title']"
                                }
                              }),
                              _vm._v(" "),
                              _c("v-text-field", {
                                attrs: { label: "Page Description" },
                                model: {
                                  value: _vm.form["" + item]["description"],
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.form["" + item],
                                      "description",
                                      $$v
                                    )
                                  },
                                  expression: "form[`${item}`]['description']"
                                }
                              }),
                              _vm._v(" "),
                              _c("v-text-field", {
                                attrs: { label: "Page Category" },
                                model: {
                                  value: _vm.form["" + item]["category"],
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.form["" + item],
                                      "category",
                                      $$v
                                    )
                                  },
                                  expression: "form[`${item}`]['category']"
                                }
                              }),
                              _vm._v(" "),
                              _c("quil-editor", {
                                model: {
                                  value: _vm.form["" + item]["content"]["body"],
                                  callback: function($$v) {
                                    _vm.$set(
                                      _vm.form["" + item]["content"],
                                      "body",
                                      $$v
                                    )
                                  },
                                  expression:
                                    "form[`${item}`]['content']['body']"
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
                }),
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/components/_base/AddImage.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/_base/AddImage.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddImage_vue_vue_type_template_id_15a6c364___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddImage.vue?vue&type=template&id=15a6c364& */ "./resources/js/components/_base/AddImage.vue?vue&type=template&id=15a6c364&");
/* harmony import */ var _AddImage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddImage.vue?vue&type=script&lang=js& */ "./resources/js/components/_base/AddImage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AddImage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddImage_vue_vue_type_template_id_15a6c364___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AddImage_vue_vue_type_template_id_15a6c364___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/_base/AddImage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/_base/AddImage.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/_base/AddImage.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddImage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AddImage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/_base/AddImage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddImage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/_base/AddImage.vue?vue&type=template&id=15a6c364&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/_base/AddImage.vue?vue&type=template&id=15a6c364& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddImage_vue_vue_type_template_id_15a6c364___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AddImage.vue?vue&type=template&id=15a6c364& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/_base/AddImage.vue?vue&type=template&id=15a6c364&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddImage_vue_vue_type_template_id_15a6c364___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddImage_vue_vue_type_template_id_15a6c364___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/_base/AddTags.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/_base/AddTags.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddTags_vue_vue_type_template_id_51b5c320___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddTags.vue?vue&type=template&id=51b5c320& */ "./resources/js/components/_base/AddTags.vue?vue&type=template&id=51b5c320&");
/* harmony import */ var _AddTags_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddTags.vue?vue&type=script&lang=js& */ "./resources/js/components/_base/AddTags.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AddTags_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddTags_vue_vue_type_template_id_51b5c320___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AddTags_vue_vue_type_template_id_51b5c320___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/_base/AddTags.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/_base/AddTags.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/_base/AddTags.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddTags_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AddTags.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/_base/AddTags.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddTags_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/_base/AddTags.vue?vue&type=template&id=51b5c320&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/_base/AddTags.vue?vue&type=template&id=51b5c320& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddTags_vue_vue_type_template_id_51b5c320___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AddTags.vue?vue&type=template&id=51b5c320& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/_base/AddTags.vue?vue&type=template&id=51b5c320&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddTags_vue_vue_type_template_id_51b5c320___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddTags_vue_vue_type_template_id_51b5c320___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/_base/Editor.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/_base/Editor.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Editor_vue_vue_type_template_id_29a5dad2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Editor.vue?vue&type=template&id=29a5dad2& */ "./resources/js/components/_base/Editor.vue?vue&type=template&id=29a5dad2&");
/* harmony import */ var _Editor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Editor.vue?vue&type=script&lang=js& */ "./resources/js/components/_base/Editor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Editor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Editor_vue_vue_type_template_id_29a5dad2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Editor_vue_vue_type_template_id_29a5dad2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/_base/Editor.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/_base/Editor.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/_base/Editor.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Editor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Editor.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/_base/Editor.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Editor_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/_base/Editor.vue?vue&type=template&id=29a5dad2&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/_base/Editor.vue?vue&type=template&id=29a5dad2& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Editor_vue_vue_type_template_id_29a5dad2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Editor.vue?vue&type=template&id=29a5dad2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/_base/Editor.vue?vue&type=template&id=29a5dad2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Editor_vue_vue_type_template_id_29a5dad2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Editor_vue_vue_type_template_id_29a5dad2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/admin/pages/AddPage.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/admin/pages/AddPage.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddPage_vue_vue_type_template_id_0b8d142a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddPage.vue?vue&type=template&id=0b8d142a& */ "./resources/js/components/admin/pages/AddPage.vue?vue&type=template&id=0b8d142a&");
/* harmony import */ var _AddPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddPage.vue?vue&type=script&lang=js& */ "./resources/js/components/admin/pages/AddPage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AddPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddPage_vue_vue_type_template_id_0b8d142a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AddPage_vue_vue_type_template_id_0b8d142a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/admin/pages/AddPage.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/admin/pages/AddPage.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/admin/pages/AddPage.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AddPage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/pages/AddPage.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/admin/pages/AddPage.vue?vue&type=template&id=0b8d142a&":
/*!****************************************************************************************!*\
  !*** ./resources/js/components/admin/pages/AddPage.vue?vue&type=template&id=0b8d142a& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddPage_vue_vue_type_template_id_0b8d142a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AddPage.vue?vue&type=template&id=0b8d142a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/admin/pages/AddPage.vue?vue&type=template&id=0b8d142a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddPage_vue_vue_type_template_id_0b8d142a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddPage_vue_vue_type_template_id_0b8d142a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);