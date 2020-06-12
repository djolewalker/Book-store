function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _search_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./search/search.component */
    "./src/app/search/search.component.ts");
    /* harmony import */


    var _cart_cart_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./cart/cart.component */
    "./src/app/cart/cart.component.ts");
    /* harmony import */


    var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./checkout/checkout.component */
    "./src/app/checkout/checkout.component.ts");
    /* harmony import */


    var _thank_you_thank_you_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./thank-you/thank-you.component */
    "./src/app/thank-you/thank-you.component.ts");

    var routes = [{
      path: '',
      redirectTo: 'welcome',
      pathMatch: 'full'
    }, {
      path: 'welcome',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }, {
      path: 'search',
      component: _search_search_component__WEBPACK_IMPORTED_MODULE_3__["SearchComponent"]
    }, {
      path: 'cart',
      component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_4__["CartComponent"]
    }, {
      path: 'checkout',
      children: [{
        path: '',
        component: _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_5__["CheckoutComponent"]
      }, {
        path: 'order-recived',
        component: _thank_you_thank_you_component__WEBPACK_IMPORTED_MODULE_6__["ThankYouComponent"]
      }]
    }, {
      path: '**',
      redirectTo: 'welcome',
      pathMatch: 'full'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'Moja Knjižara';
      }

      _createClass(AppComponent, [{
        key: "goTop",
        value: function goTop() {
          window.scroll(0, 0);
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 8,
      vars: 0,
      consts: [[1, "go-top", 3, "click"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "PIN 2020");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent nulla massa, aliquet eu vestibulum mollis, tempus non felis. Nullam pulvinar vitae ante at vehicula. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi luctus nibh fringilla diam varius, malesuada semper nulla cursus. Cras id ante tempor, hendrerit nunc in, posuere ligula. Curabitur vel finibus leo. Praesent dignissim nec ante id egestas. Nunc congue sollicitudin facilisis. In id nulla eros. Suspendisse et condimentum sem, nec tempus nunc. Sed vitae nisi lorem. Suspendisse potenti. Vivamus viverra finibus nulla. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_div_click_7_listener() {
            return ctx.goTop();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["footer[_ngcontent-%COMP%] {\n    width: 100%;\n    min-height: 200px;\n    padding: 15px;\n    margin: auto;\n    background-color: rgb(241, 241, 242);\n    color: black;\n    font-size: 14px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-around;\n    position: absolute;\n}\n\nfooter[_ngcontent-%COMP%] > h2[_ngcontent-%COMP%] {\n    margin: 10px 0;\n}\n\nfooter[_ngcontent-%COMP%] > p[_ngcontent-%COMP%] {\n    max-width: 1200px;\n    letter-spacing: 1px;\n    line-height: 200%;\n    text-align: center;\n}\n\n.go-top[_ngcontent-%COMP%] {\n    width: 35px;\n    height: 35px;\n    background-image: url('Na vrh stranice.svg');\n    background-size: contain;\n    position: absolute;\n    top: 25px;\n    right: 25px;\n    cursor: pointer;\n}\n\n@media screen and (max-width:1200px) {\n    .go-top[_ngcontent-%COMP%] {\n        display: none;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixZQUFZO0lBQ1osb0NBQW9DO0lBQ3BDLFlBQVk7SUFDWixlQUFlO0lBQ2YsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsNkJBQTZCO0lBQzdCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLDRDQUFnRDtJQUNoRCx3QkFBd0I7SUFDeEIsa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxXQUFXO0lBQ1gsZUFBZTtBQUNuQjs7QUFFQTtJQUNJO1FBQ0ksYUFBYTtJQUNqQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb290ZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDEsIDI0MSwgMjQyKTtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuZm9vdGVyPmgyIHtcbiAgICBtYXJnaW46IDEwcHggMDtcbn1cblxuZm9vdGVyPnAge1xuICAgIG1heC13aWR0aDogMTIwMHB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgbGluZS1oZWlnaHQ6IDIwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZ28tdG9wIHtcbiAgICB3aWR0aDogMzVweDtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaW1nL05hIHZyaCBzdHJhbmljZS5zdmdcIik7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDI1cHg7XG4gICAgcmlnaHQ6IDI1cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjEyMDBweCkge1xuICAgIC5nby10b3Age1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _header_mobile_header_mobile_header_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./header/mobile-header/mobile-header.component */
    "./src/app/header/mobile-header/mobile-header.component.ts");
    /* harmony import */


    var _header_cart_info_cart_info_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./header/cart-info/cart-info.component */
    "./src/app/header/cart-info/cart-info.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _search_search_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./search/search.component */
    "./src/app/search/search.component.ts");
    /* harmony import */


    var _search_autocomplete_select_autocomplete_select_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./search/autocomplete-select/autocomplete-select.component */
    "./src/app/search/autocomplete-select/autocomplete-select.component.ts");
    /* harmony import */


    var _search_multi_select_multi_select_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./search/multi-select/multi-select.component */
    "./src/app/search/multi-select/multi-select.component.ts");
    /* harmony import */


    var _search_single_select_single_select_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./search/single-select/single-select.component */
    "./src/app/search/single-select/single-select.component.ts");
    /* harmony import */


    var _search_search_product_item_search_product_item_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./search/search-product-item/search-product-item.component */
    "./src/app/search/search-product-item/search-product-item.component.ts");
    /* harmony import */


    var _product_item_product_item_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./product-item/product-item.component */
    "./src/app/product-item/product-item.component.ts");
    /* harmony import */


    var _cart_cart_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./cart/cart.component */
    "./src/app/cart/cart.component.ts");
    /* harmony import */


    var _cart_cart_item_cart_item_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./cart/cart-item/cart-item.component */
    "./src/app/cart/cart-item/cart-item.component.ts");
    /* harmony import */


    var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./checkout/checkout.component */
    "./src/app/checkout/checkout.component.ts");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./confirm-modal/confirm-modal.component */
    "./src/app/confirm-modal/confirm-modal.component.ts");
    /* harmony import */


    var _thank_you_thank_you_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./thank-you/thank-you.component */
    "./src/app/thank-you/thank-you.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatNativeDateModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_24__["MatSelectModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"], _header_mobile_header_mobile_header_component__WEBPACK_IMPORTED_MODULE_12__["MobileHeaderComponent"], _header_cart_info_cart_info_component__WEBPACK_IMPORTED_MODULE_13__["CartInfoComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"], _search_search_component__WEBPACK_IMPORTED_MODULE_15__["SearchComponent"], _search_autocomplete_select_autocomplete_select_component__WEBPACK_IMPORTED_MODULE_16__["AutocompleteSelectComponent"], _search_multi_select_multi_select_component__WEBPACK_IMPORTED_MODULE_17__["MultiSelectComponent"], _search_single_select_single_select_component__WEBPACK_IMPORTED_MODULE_18__["SingleSelectComponent"], _search_search_product_item_search_product_item_component__WEBPACK_IMPORTED_MODULE_19__["SearchProductItemComponent"], _product_item_product_item_component__WEBPACK_IMPORTED_MODULE_20__["ProductItemComponent"], _cart_cart_component__WEBPACK_IMPORTED_MODULE_21__["CartComponent"], _cart_cart_item_cart_item_component__WEBPACK_IMPORTED_MODULE_22__["CartItemComponent"], _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_23__["CheckoutComponent"], _confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_25__["ConfirmModalComponent"], _thank_you_thank_you_component__WEBPACK_IMPORTED_MODULE_26__["ThankYouComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatNativeDateModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_24__["MatSelectModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"], _header_mobile_header_mobile_header_component__WEBPACK_IMPORTED_MODULE_12__["MobileHeaderComponent"], _header_cart_info_cart_info_component__WEBPACK_IMPORTED_MODULE_13__["CartInfoComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_14__["HomeComponent"], _search_search_component__WEBPACK_IMPORTED_MODULE_15__["SearchComponent"], _search_autocomplete_select_autocomplete_select_component__WEBPACK_IMPORTED_MODULE_16__["AutocompleteSelectComponent"], _search_multi_select_multi_select_component__WEBPACK_IMPORTED_MODULE_17__["MultiSelectComponent"], _search_single_select_single_select_component__WEBPACK_IMPORTED_MODULE_18__["SingleSelectComponent"], _search_search_product_item_search_product_item_component__WEBPACK_IMPORTED_MODULE_19__["SearchProductItemComponent"], _product_item_product_item_component__WEBPACK_IMPORTED_MODULE_20__["ProductItemComponent"], _cart_cart_component__WEBPACK_IMPORTED_MODULE_21__["CartComponent"], _cart_cart_item_cart_item_component__WEBPACK_IMPORTED_MODULE_22__["CartItemComponent"], _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_23__["CheckoutComponent"], _confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_25__["ConfirmModalComponent"], _thank_you_thank_you_component__WEBPACK_IMPORTED_MODULE_26__["ThankYouComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatNativeDateModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_24__["MatSelectModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/cart/cart-item/cart-item.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/cart/cart-item/cart-item.component.ts ***!
    \*******************************************************/

  /*! exports provided: CartItemComponent */

  /***/
  function srcAppCartCartItemCartItemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartItemComponent", function () {
      return CartItemComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/cart.service */
    "./src/app/services/cart.service.ts");
    /* harmony import */


    var src_app_services_book_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/book.service */
    "./src/app/services/book.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var CartItemComponent = /*#__PURE__*/function () {
      function CartItemComponent(cartService, bookService) {
        _classCallCheck(this, CartItemComponent);

        this.cartService = cartService;
        this.bookService = bookService;
        this.bookPrice = 0;
        this.showDetails = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.authors = [];
      }

      _createClass(CartItemComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.book = this.bookService.getBookByISBN(this.cartItem.bookIsbn);
          if (this.book["Autor 1"]) this.authors.push(this.book["Autor 1"]);
          if (this.book["Autor 2"]) this.authors.push(this.book["Autor 2"]);
          if (this.book["Autor 3"]) this.authors.push(this.book["Autor 3"]);
          this.bookPrice = parseFloat(this.book.Cena);
        }
      }, {
        key: "showBookDetails",
        value: function showBookDetails() {
          this.showDetails.emit(this.book);
        }
      }, {
        key: "removeFromCart",
        value: function removeFromCart() {
          this.cartService.removeAllOfItem(this.book.ISBN);
        }
      }, {
        key: "incrementItem",
        value: function incrementItem() {
          this.cartService.addItem(this.book.ISBN);
        }
      }, {
        key: "decrementItem",
        value: function decrementItem() {
          this.cartService.removeItem(this.book.ISBN);
        }
      }]);

      return CartItemComponent;
    }();

    CartItemComponent.ɵfac = function CartItemComponent_Factory(t) {
      return new (t || CartItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_book_service__WEBPACK_IMPORTED_MODULE_2__["BookService"]));
    };

    CartItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CartItemComponent,
      selectors: [["app-cart-item"]],
      inputs: {
        cartItem: "cartItem"
      },
      outputs: {
        showDetails: "showDetails"
      },
      decls: 38,
      vars: 14,
      consts: [[1, "product-img-wrapper"], ["alt", "asd", 1, "product-img", 3, "src"], [1, "product-data-wrapper"], [1, "title-description"], [1, "title"], [1, "product-description-wrapper"], [1, "product-description"], [1, "show-details", 3, "click"], [1, "show-details-icon"], [1, "product-buy-wrapper"], [1, "product-price"], [1, "product-price-value"], [1, "product-price-currency"], [1, "edit-count"], [1, "edit-count-inc", 3, "click"], [1, "edit-count-dec", 3, "click"], [1, "edit-count-count"], [1, "edit-count-count-desc"], [1, "buy-product", 3, "click"], [1, "buy-product-icon"], [1, "product-buy-total"], [1, "product-buy-total-icon"], [1, "product-buy-total-currency"]],
      template: function CartItemComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartItemComponent_Template_div_click_12_listener() {
            return ctx.showBookDetails();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Detaljinje ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "RSD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartItemComponent_Template_div_click_23_listener() {
            return ctx.incrementItem();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartItemComponent_Template_div_click_24_listener() {
            return ctx.decrementItem();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "kom");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CartItemComponent_Template_div_click_29_listener() {
            return ctx.removeFromCart();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Izbaci iz korpe ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](35, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "RSD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/img/", ctx.book.Korice, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.authors.join(", "));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.book.Naslov);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.book["Godina izdanja"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.book.Opis, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](19, 8, ctx.book.Cena, ".2"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.cartItem.count, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](35, 11, ctx.bookPrice * ctx.cartItem.count, ".2"), " ");
        }
      },
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DecimalPipe"]],
      styles: ["[_nghost-%COMP%] {\n    width: 98%;\n    min-height: 250px;\n    padding: 30px 10px 20px 10px;\n    display: grid;\n    grid-template-columns: minmax(80px, 140px) auto 180px;\n    grid-template-rows: auto auto auto;\n    -moz-column-gap: 10px;\n         column-gap: 10px;\n    row-gap: 10px;\n}\n\n.product-img-wrapper[_ngcontent-%COMP%] {\n    grid-column: 1 / 2;\n    grid-row: 1/4;\n}\n\n.product-img[_ngcontent-%COMP%] {\n    max-width: 90%;\n    margin: 0 5%;\n}\n\n.product-data-wrapper[_ngcontent-%COMP%] {\n    grid-column-start: 2;\n    grid-row: 1;\n    min-height: 80px;\n}\n\n.product-description-wrapper[_ngcontent-%COMP%] {\n    grid-column: 2/3;\n    grid-row: 2/4;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: flex-start;\n    max-width: 750px;\n}\n\n.product-buy-wrapper[_ngcontent-%COMP%] {\n    grid-column: 3 / 4;\n    grid-row: 1 / 4;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: flex-end;\n}\n\n.title[_ngcontent-%COMP%] {\n    font-weight: 400;\n    margin-bottom: 15px;\n    font-size: 1.3em;\n}\n\n.title-description[_ngcontent-%COMP%] {\n    margin-bottom: 15px;\n    font-weight: 300;\n    color: gray;\n    font-size: 1.1em;\n}\n\n.product-description[_ngcontent-%COMP%] {\n    line-height: 150%;\n    margin-bottom: 20px;\n    color: rgba(0, 0, 0, 0.8);\n    font-size: 0.95em;\n    max-height: 3em;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: -webkit-box;\n    -webkit-line-clamp: 2;\n    -webkit-box-orient: vertical;\n}\n\n.product-description[_ngcontent-%COMP%]::after {\n    content: \"...\";\n}\n\n.show-details[_ngcontent-%COMP%] {\n    width: 135px;\n    height: 35px;\n    color: rgba(0, 0, 0, 0.6);\n    border: 1px solid rgba(0, 0, 0, 0.6);\n    margin-bottom: 10px;\n    display: flex;\n    justify-content: flex-start;\n    flex-direction: row;\n    align-items: center;\n    font-size: 18px;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    cursor: pointer;\n    background-color: white;\n}\n\n.show-details-icon[_ngcontent-%COMP%] {\n    width: 25px;\n    height: 25px;\n    background-image: url('Detaljnije.svg');\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 80%;\n    margin: 0 12px;\n    border-radius: 30px;\n    background-color: white;\n}\n\n.buy-product[_ngcontent-%COMP%] {\n    width: 150px;\n    height: 35px;\n    color: rgba(0, 0, 0, 0.6);\n    border: 1px solid rgba(0, 0, 0, 0.6);\n    margin-bottom: 10px;\n    display: flex;\n    justify-content: flex-start;\n    flex-direction: row;\n    align-items: center;\n    font-size: 17px;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    cursor: pointer;\n    background-color: white;\n}\n\n.buy-product-icon[_ngcontent-%COMP%] {\n    width: 25px;\n    height: 25px;\n    background-image: url('Korpa.svg');\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 80%;\n    margin: 0 8px;\n    border-radius: 30px;\n    background-color: white !important;\n}\n\n.product-price[_ngcontent-%COMP%] {\n    width: 150px;\n    height: 30px;\n    display: flex;\n    flex-wrap: nowrap;\n    align-items: baseline;\n    margin-bottom: 40px;\n}\n\n.product-price-value[_ngcontent-%COMP%] {\n    font-size: 1.6em;\n    margin-right: 10px;\n}\n\n.product-price-currency[_ngcontent-%COMP%] {\n    font-size: 1.1em;\n    color: gray;\n}\n\n@media screen and (max-width: 800px) {\n    .product-img-wrapper[_ngcontent-%COMP%] {\n        grid-row: 1/2;\n    }\n    .title[_ngcontent-%COMP%] {\n        font-size: 1.2em;\n        font-weight: 400;\n    }\n    .title-description[_ngcontent-%COMP%] {\n        font-size: 1em;\n    }\n    .product-description[_ngcontent-%COMP%] {\n        font-size: 0.8em;\n    }\n    .product-data-wrapper[_ngcontent-%COMP%] {\n        grid-column: 2/4;\n    }\n    .product-description-wrapper[_ngcontent-%COMP%] {\n        grid-column: 1/4;\n        grid-row: 2/3;\n    }\n    .product-buy-wrapper[_ngcontent-%COMP%] {\n        grid-row: 3/4;\n    }\n    .product-price[_ngcontent-%COMP%] {\n        margin-bottom: 10px;\n    }\n    .product-description[_ngcontent-%COMP%] {\n        max-height: 4.4em;\n        -webkit-line-clamp: 3;\n    }\n}\n\n@media screen and (max-width: 400px) {\n    .product-description[_ngcontent-%COMP%] {\n        max-height: 7.5em;\n        -webkit-line-clamp: 5;\n    }\n}\n\n.edit-count[_ngcontent-%COMP%] {\n    width: 150px;\n    height: 30px;\n    display: flex;\n    flex-wrap: nowrap;\n    justify-content: space-around;\n    margin-bottom: 30px;\n}\n\n.edit-count-inc[_ngcontent-%COMP%] {\n    width: 30px;\n    height: 30px;\n    background-image: url('Povecaj kolicinu.svg');\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 100%;\n    cursor: pointer;\n}\n\n.edit-count-dec[_ngcontent-%COMP%] {\n    width: 30px;\n    height: 30px;\n    background-image: url('Smanji kolicinu.svg');\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 100%;\n    cursor: pointer;\n}\n\n.edit-count-count[_ngcontent-%COMP%] {\n    font-size: 25px;\n    font-weight: 500px;\n    color: black;\n    display: flex;\n    align-items: baseline;\n    padding-top: 2px;\n    margin-right: 20px;\n}\n\n.edit-count-count-desc[_ngcontent-%COMP%] {\n    font-size: 15px;\n    color: gray;\n    margin-left: 5px;\n}\n\n.buy-product[_ngcontent-%COMP%] {\n    flex-direction: row-reverse;\n    width: 165px;\n}\n\n.buy-product-icon[_ngcontent-%COMP%] {\n    background-image: url('Brisi iz korpe.svg');\n    background-size: 90%;\n}\n\n.product-price[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n}\n\n.product-buy-total[_ngcontent-%COMP%] {\n    padding-top: 6px;\n    margin-top: 20px;\n    height: 40px;\n    width: 180px;\n    background-color: #0098DA;\n    display: flex;\n    justify-content: center;\n    align-items: baseline;\n    font-size: 25px;\n    font-weight: 400;\n    color: white;\n}\n\n.product-buy-total-currency[_ngcontent-%COMP%] {\n    margin-left: 10px;\n    color: white;\n    font-size: 17px;\n}\n\n.product-buy-total-icon[_ngcontent-%COMP%] {\n    height: 15px;\n    width: 15px;\n    background-image: url('suma.svg');\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 60%;\n    margin-right: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoL3NlYXJjaC1wcm9kdWN0LWl0ZW0vc2VhcmNoLXByb2R1Y3QtaXRlbS5jb21wb25lbnQuY3NzIiwic3JjL2FwcC9jYXJ0L2NhcnQtaXRlbS9jYXJ0LWl0ZW0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFVBQVU7SUFDVixpQkFBaUI7SUFDakIsNEJBQTRCO0lBQzVCLGFBQWE7SUFDYixxREFBcUQ7SUFDckQsa0NBQWtDO0lBQ2xDLHFCQUFnQjtTQUFoQixnQkFBZ0I7SUFDaEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksY0FBYztJQUNkLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsV0FBVztJQUNYLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw4QkFBOEI7SUFDOUIsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsb0JBQW9CO0lBQ3BCLHFCQUFxQjtJQUNyQiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsb0NBQW9DO0lBQ3BDLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLHlCQUFpQjtPQUFqQixzQkFBaUI7UUFBakIscUJBQWlCO1lBQWpCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWix1Q0FBMkM7SUFDM0MsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QixvQkFBb0I7SUFDcEIsY0FBYztJQUNkLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixvQ0FBb0M7SUFDcEMsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YseUJBQWlCO09BQWpCLHNCQUFpQjtRQUFqQixxQkFBaUI7WUFBakIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtDQUFzQztJQUN0QywyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2Y7O0FBRUE7SUFDSTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLGdCQUFnQjtRQUNoQixnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGNBQWM7SUFDbEI7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxnQkFBZ0I7UUFDaEIsYUFBYTtJQUNqQjtJQUNBO1FBQ0ksYUFBYTtJQUNqQjtJQUNBO1FBQ0ksbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxpQkFBaUI7UUFDakIscUJBQXFCO0lBQ3pCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGlCQUFpQjtRQUNqQixxQkFBcUI7SUFDekI7QUFDSjs7QUM1TEE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsNkJBQTZCO0lBQzdCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osNkNBQWlEO0lBQ2pELDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIscUJBQXFCO0lBQ3JCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLDRDQUFnRDtJQUNoRCwyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLHFCQUFxQjtJQUNyQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtJQUNiLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0IsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLDJDQUErQztJQUMvQyxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsaUNBQXFDO0lBQ3JDLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsb0JBQW9CO0lBQ3BCLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2NhcnQvY2FydC1pdGVtL2NhcnQtaXRlbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIHdpZHRoOiA5OCU7XG4gICAgbWluLWhlaWdodDogMjUwcHg7XG4gICAgcGFkZGluZzogMzBweCAxMHB4IDIwcHggMTBweDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDgwcHgsIDE0MHB4KSBhdXRvIDE4MHB4O1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvIGF1dG87XG4gICAgY29sdW1uLWdhcDogMTBweDtcbiAgICByb3ctZ2FwOiAxMHB4O1xufVxuXG4ucHJvZHVjdC1pbWctd3JhcHBlciB7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xuICAgIGdyaWQtcm93OiAxLzQ7XG59XG5cbi5wcm9kdWN0LWltZyB7XG4gICAgbWF4LXdpZHRoOiA5MCU7XG4gICAgbWFyZ2luOiAwIDUlO1xufVxuXG4ucHJvZHVjdC1kYXRhLXdyYXBwZXIge1xuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xuICAgIGdyaWQtcm93OiAxO1xuICAgIG1pbi1oZWlnaHQ6IDgwcHg7XG59XG5cbi5wcm9kdWN0LWRlc2NyaXB0aW9uLXdyYXBwZXIge1xuICAgIGdyaWQtY29sdW1uOiAyLzM7XG4gICAgZ3JpZC1yb3c6IDIvNDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIG1heC13aWR0aDogNzUwcHg7XG59XG5cbi5wcm9kdWN0LWJ1eS13cmFwcGVyIHtcbiAgICBncmlkLWNvbHVtbjogMyAvIDQ7XG4gICAgZ3JpZC1yb3c6IDEgLyA0O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG59XG5cbi50aXRsZSB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIGZvbnQtc2l6ZTogMS4zZW07XG59XG5cbi50aXRsZS1kZXNjcmlwdGlvbiB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGNvbG9yOiBncmF5O1xuICAgIGZvbnQtc2l6ZTogMS4xZW07XG59XG5cbi5wcm9kdWN0LWRlc2NyaXB0aW9uIHtcbiAgICBsaW5lLWhlaWdodDogMTUwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gICAgZm9udC1zaXplOiAwLjk1ZW07XG4gICAgbWF4LWhlaWdodDogM2VtO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG59XG5cbi5wcm9kdWN0LWRlc2NyaXB0aW9uOjphZnRlciB7XG4gICAgY29udGVudDogXCIuLi5cIjtcbn1cblxuLnNob3ctZGV0YWlscyB7XG4gICAgd2lkdGg6IDEzNXB4O1xuICAgIGhlaWdodDogMzVweDtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4uc2hvdy1kZXRhaWxzLWljb24ge1xuICAgIHdpZHRoOiAyNXB4O1xuICAgIGhlaWdodDogMjVweDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJpbWcvRGV0YWxqbmlqZS5zdmdcIik7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiA4MCU7XG4gICAgbWFyZ2luOiAwIDEycHg7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmJ1eS1wcm9kdWN0IHtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjYpO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5idXktcHJvZHVjdC1pY29uIHtcbiAgICB3aWR0aDogMjVweDtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaW1nL0tvcnBhLnN2Z1wiKTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDgwJTtcbiAgICBtYXJnaW46IDAgOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuLnByb2R1Y3QtcHJpY2Uge1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn1cblxuLnByb2R1Y3QtcHJpY2UtdmFsdWUge1xuICAgIGZvbnQtc2l6ZTogMS42ZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4ucHJvZHVjdC1wcmljZS1jdXJyZW5jeSB7XG4gICAgZm9udC1zaXplOiAxLjFlbTtcbiAgICBjb2xvcjogZ3JheTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgICAucHJvZHVjdC1pbWctd3JhcHBlciB7XG4gICAgICAgIGdyaWQtcm93OiAxLzI7XG4gICAgfVxuICAgIC50aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgfVxuICAgIC50aXRsZS1kZXNjcmlwdGlvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIH1cbiAgICAucHJvZHVjdC1kZXNjcmlwdGlvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gICAgfVxuICAgIC5wcm9kdWN0LWRhdGEtd3JhcHBlciB7XG4gICAgICAgIGdyaWQtY29sdW1uOiAyLzQ7XG4gICAgfVxuICAgIC5wcm9kdWN0LWRlc2NyaXB0aW9uLXdyYXBwZXIge1xuICAgICAgICBncmlkLWNvbHVtbjogMS80O1xuICAgICAgICBncmlkLXJvdzogMi8zO1xuICAgIH1cbiAgICAucHJvZHVjdC1idXktd3JhcHBlciB7XG4gICAgICAgIGdyaWQtcm93OiAzLzQ7XG4gICAgfVxuICAgIC5wcm9kdWN0LXByaWNlIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICB9XG4gICAgLnByb2R1Y3QtZGVzY3JpcHRpb24ge1xuICAgICAgICBtYXgtaGVpZ2h0OiA0LjRlbTtcbiAgICAgICAgLXdlYmtpdC1saW5lLWNsYW1wOiAzO1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcbiAgICAucHJvZHVjdC1kZXNjcmlwdGlvbiB7XG4gICAgICAgIG1heC1oZWlnaHQ6IDcuNWVtO1xuICAgICAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDU7XG4gICAgfVxufSIsIkBpbXBvcnQgXCIuLi8uLi9zZWFyY2gvc2VhcmNoLXByb2R1Y3QtaXRlbS9zZWFyY2gtcHJvZHVjdC1pdGVtLmNvbXBvbmVudC5jc3NcIjtcbi5lZGl0LWNvdW50IHtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLmVkaXQtY291bnQtaW5jIHtcbiAgICB3aWR0aDogMzBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaW1nL1BvdmVjYWoga29saWNpbnUuc3ZnXCIpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5lZGl0LWNvdW50LWRlYyB7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImltZy9TbWFuamkga29saWNpbnUuc3ZnXCIpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5lZGl0LWNvdW50LWNvdW50IHtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMHB4O1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgICBwYWRkaW5nLXRvcDogMnB4O1xuICAgIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuLmVkaXQtY291bnQtY291bnQtZGVzYyB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGNvbG9yOiBncmF5O1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbi5idXktcHJvZHVjdCB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuICAgIHdpZHRoOiAxNjVweDtcbn1cblxuLmJ1eS1wcm9kdWN0LWljb24ge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImltZy9CcmlzaSBpeiBrb3JwZS5zdmdcIik7XG4gICAgYmFja2dyb3VuZC1zaXplOiA5MCU7XG59XG5cbi5wcm9kdWN0LXByaWNlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuXG4ucHJvZHVjdC1idXktdG90YWwge1xuICAgIHBhZGRpbmctdG9wOiA2cHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgd2lkdGg6IDE4MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDk4REE7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4ucHJvZHVjdC1idXktdG90YWwtY3VycmVuY3kge1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDE3cHg7XG59XG5cbi5wcm9kdWN0LWJ1eS10b3RhbC1pY29uIHtcbiAgICBoZWlnaHQ6IDE1cHg7XG4gICAgd2lkdGg6IDE1cHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaW1nL3N1bWEuc3ZnXCIpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogNjAlO1xuICAgIG1hcmdpbi1yaWdodDogM3B4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CartItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-cart-item',
          templateUrl: './cart-item.component.html',
          styleUrls: ['./cart-item.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"]
        }, {
          type: src_app_services_book_service__WEBPACK_IMPORTED_MODULE_2__["BookService"]
        }];
      }, {
        cartItem: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        showDetails: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/cart/cart.component.ts":
  /*!****************************************!*\
    !*** ./src/app/cart/cart.component.ts ***!
    \****************************************/

  /*! exports provided: CartComponent */

  /***/
  function srcAppCartCartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartComponent", function () {
      return CartComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_book_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/book.service */
    "./src/app/services/book.service.ts");
    /* harmony import */


    var _services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/cart.service */
    "./src/app/services/cart.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _cart_item_cart_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./cart-item/cart-item.component */
    "./src/app/cart/cart-item/cart-item.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _product_item_product_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../product-item/product-item.component */
    "./src/app/product-item/product-item.component.ts");

    var _c0 = function _c0(a2) {
      return {
        "bottom-border": true,
        "gray-background": true,
        "white-backgroud": a2
      };
    };

    function CartComponent_app_cart_item_16_Template(rf, ctx) {
      if (rf & 1) {
        var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-cart-item", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("showDetails", function CartComponent_app_cart_item_16_Template_app_cart_item_showDetails_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r13.showBookDetails($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r12 = ctx.$implicit;

        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r8.items.length < 2))("cartItem", item_r12);
      }
    }

    function CartComponent_div_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 14);
      }
    }

    function CartComponent_div_18_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Pla\u0107anje");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CartComponent_app_product_item_19_Template(rf, ctx) {
      if (rf & 1) {
        var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-product-item", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onCloseDetailView", function CartComponent_app_product_item_19_Template_app_product_item_onCloseDetailView_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r15.hideBookDetails();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("book", ctx_r11.showDetailsBook);
      }
    }

    var CartComponent = /*#__PURE__*/function () {
      function CartComponent(bookService, cartService) {
        _classCallCheck(this, CartComponent);

        this.bookService = bookService;
        this.cartService = cartService;
        this.totalPrice = 0.00;
        this.showDetailsBook = null;
      }

      _createClass(CartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.cartService.getEmitter().subscribe(function () {
            return _this.reloadItems();
          });
          this.reloadItems();
        }
      }, {
        key: "hideBookDetails",
        value: function hideBookDetails() {
          document.body.style.overflow = 'auto';
          document.body.style.paddingRight = '';
          this.showDetailsBook = null;
        }
      }, {
        key: "showBookDetails",
        value: function showBookDetails(book) {
          document.body.style.overflow = 'hidden';
          document.body.style.paddingRight = '15px';
          this.showDetailsBook = book;
        }
      }, {
        key: "reloadItems",
        value: function reloadItems() {
          var _this2 = this;

          this.items = this.cartService.getItems();
          this.totalPrice = 0.00;
          this.items.forEach(function (item) {
            return _this2.totalPrice += item.count * parseFloat(_this2.bookService.getBookByISBN(item.bookIsbn).Cena);
          });
        }
      }]);

      return CartComponent;
    }();

    CartComponent.ɵfac = function CartComponent_Factory(t) {
      return new (t || CartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_book_service__WEBPACK_IMPORTED_MODULE_1__["BookService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]));
    };

    CartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CartComponent,
      selectors: [["app-cart"]],
      inputs: {
        showDetailsBook: "showDetailsBook"
      },
      decls: 20,
      vars: 8,
      consts: [[1, "baner"], [1, "cart-conteiner"], [1, "cart-content"], [1, "cart-head"], [1, "sum-info"], [1, "sum-info-icon"], [1, "sum-info-data"], [1, "sum-info-data-price"], [1, "sum-info-data-price-currency"], [3, "ngClass", "cartItem", "showDetails", 4, "ngFor", "ngForOf"], ["class", "empty-cart", 4, "ngIf"], ["class", "checkout-countainer", 4, "ngIf"], [3, "book", "onCloseDetailView", 4, "ngIf"], [3, "ngClass", "cartItem", "showDetails"], [1, "empty-cart"], [1, "checkout-countainer"], ["routerLink", "/checkout", 1, "checkout-btn"], [3, "book", "onCloseDetailView"]],
      template: function CartComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Moja korpa");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Plati");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Ukupno ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "RSD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, CartComponent_app_cart_item_16_Template, 1, 4, "app-cart-item", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, CartComponent_div_17_Template, 1, 0, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, CartComponent_div_18_Template, 3, 0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, CartComponent_app_product_item_19_Template, 1, 1, "app-product-item", 12);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](13, 5, ctx.totalPrice, ".2"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.items.length === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.items.length > 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showDetailsBook);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _cart_item_cart_item_component__WEBPACK_IMPORTED_MODULE_4__["CartItemComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _product_item_product_item_component__WEBPACK_IMPORTED_MODULE_6__["ProductItemComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DecimalPipe"]],
      styles: [".baner[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 400px;\n    background-image: url('Header fotografija.jpg');\n    background-position: left;\n    background-repeat: no-repeat;\n    background-size: cover;\n}\n\n.cart-conteiner[_ngcontent-%COMP%] {\n    width: 100%;\n    height: auto;\n    background-color: rgb(230, 231, 232);\n}\n\n.cart-content[_ngcontent-%COMP%] {\n    max-width: 1200px;\n    margin: auto;\n    background-color: white;\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: center;\n}\n\n.cart-head[_ngcontent-%COMP%] {\n    width: 98%;\n    min-height: 120px;\n    border-bottom: 1px solid black;\n    margin: 20px 1% 0 1%;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    align-items: flex-end;\n    padding: 0;\n}\n\n.cart-head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    width: auto;\n    padding: 50px 30px 15px;\n    font-size: 60px;\n    font-weight: 100;\n}\n\n.sum-info[_ngcontent-%COMP%] {\n    width: 300px;\n    height: 100px;\n    display: flex;\n    align-items: flex-end;\n}\n\n.sum-info-icon[_ngcontent-%COMP%] {\n    width: 80px;\n    height: 90%;\n    background-image: url('Kasa.svg');\n    background-repeat: no-repeat;\n    background-position: center top;\n    background-size: 80%;\n    padding: 65px 23px 0;\n    font-size: 16px;\n    font-weight: 400;\n}\n\n.sum-info-data[_ngcontent-%COMP%] {\n    width: 220px;\n    height: 100%;\n    background-color: #E6F5FD;\n    color: gray;\n    font-size: 14px;\n    font-weight: 400;\n    padding: 25px 0 0 18px;\n}\n\n.sum-info-data-price[_ngcontent-%COMP%] {\n    color: black;\n    font-size: 30px;\n    margin-top: 5px;\n    display: flex;\n    flex-direction: row;\n    align-items: baseline;\n}\n\n.sum-info-data-price-currency[_ngcontent-%COMP%] {\n    font-size: 18px;\n    color: gray;\n    margin-left: 7px;\n}\n\n.empty-cart[_ngcontent-%COMP%] {\n    width: 300px;\n    height: 300px;\n    background-image: url('empty-cart.png');\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 200%;\n    margin-top: 40px;\n}\n\n.bottom-border[_ngcontent-%COMP%] {\n    border-bottom: 1px solid black;\n}\n\n.bottom-border[_ngcontent-%COMP%]:last-of-type {\n    border-bottom: 0;\n}\n\n.checkout-countainer[_ngcontent-%COMP%] {\n    width: 98%;\n    display: flex;\n    justify-content: flex-end;\n}\n\n.checkout-btn[_ngcontent-%COMP%] {\n    height: 50px;\n    width: 220px;\n    background-color: #0098DA;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    color: white;\n    font-size: 25px;\n    margin: 0 0 10px;\n    cursor: pointer;\n}\n\n.checkout-btn[_ngcontent-%COMP%]:hover {\n    color: #0098DA;\n    background-color: white;\n    border: 2px solid #0098DA;\n}\n\n@media screen and (max-width: 800px) {\n    .gray-background[_ngcontent-%COMP%]:nth-of-type(odd) {\n        background-color: #F1F1F2;\n    }\n    .bottom-border[_ngcontent-%COMP%] {\n        border: 0;\n    }\n    .cart-head[_ngcontent-%COMP%] {\n        justify-content: center;\n    }\n    .cart-head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n        padding-top: 20px;\n        margin-bottom: 10px;\n        text-align: center;\n    }\n    .white-backgroud[_ngcontent-%COMP%] {\n        background-color: white !important;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FydC9jYXJ0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLCtDQUFtRDtJQUNuRCx5QkFBeUI7SUFDekIsNEJBQTRCO0lBQzVCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGlCQUFpQjtJQUNqQiw4QkFBOEI7SUFDOUIsb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLDhCQUE4QjtJQUM5QixxQkFBcUI7SUFDckIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksV0FBVztJQUNYLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixhQUFhO0lBQ2IscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFdBQVc7SUFDWCxpQ0FBcUM7SUFDckMsNEJBQTRCO0lBQzVCLCtCQUErQjtJQUMvQixvQkFBb0I7SUFDcEIsb0JBQW9CO0lBQ3BCLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLGVBQWU7SUFDZixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYix1Q0FBMkM7SUFDM0MsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QixxQkFBcUI7SUFDckIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGFBQWE7SUFDYix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksY0FBYztJQUNkLHVCQUF1QjtJQUN2Qix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSTtRQUNJLHlCQUF5QjtJQUM3QjtJQUNBO1FBQ0ksU0FBUztJQUNiO0lBQ0E7UUFDSSx1QkFBdUI7SUFDM0I7SUFDQTtRQUNJLGlCQUFpQjtRQUNqQixtQkFBbUI7UUFDbkIsa0JBQWtCO0lBQ3RCO0lBQ0E7UUFDSSxrQ0FBa0M7SUFDdEM7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2NhcnQvY2FydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDQwMHB4O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImltZy9IZWFkZXIgZm90b2dyYWZpamEuanBnXCIpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQ7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4uY2FydC1jb250ZWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMwLCAyMzEsIDIzMik7XG59XG5cbi5jYXJ0LWNvbnRlbnQge1xuICAgIG1heC13aWR0aDogMTIwMHB4O1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY2FydC1oZWFkIHtcbiAgICB3aWR0aDogOTglO1xuICAgIG1pbi1oZWlnaHQ6IDEyMHB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcbiAgICBtYXJnaW46IDIwcHggMSUgMCAxJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgcGFkZGluZzogMDtcbn1cblxuLmNhcnQtaGVhZCBoMSB7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgcGFkZGluZzogNTBweCAzMHB4IDE1cHg7XG4gICAgZm9udC1zaXplOiA2MHB4O1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG59XG5cbi5zdW0taW5mbyB7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG59XG5cbi5zdW0taW5mby1pY29uIHtcbiAgICB3aWR0aDogODBweDtcbiAgICBoZWlnaHQ6IDkwJTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJpbWcvS2FzYS5zdmdcIik7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgdG9wO1xuICAgIGJhY2tncm91bmQtc2l6ZTogODAlO1xuICAgIHBhZGRpbmc6IDY1cHggMjNweCAwO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xufVxuXG4uc3VtLWluZm8tZGF0YSB7XG4gICAgd2lkdGg6IDIyMHB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTZGNUZEO1xuICAgIGNvbG9yOiBncmF5O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIHBhZGRpbmc6IDI1cHggMCAwIDE4cHg7XG59XG5cbi5zdW0taW5mby1kYXRhLXByaWNlIHtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xufVxuXG4uc3VtLWluZm8tZGF0YS1wcmljZS1jdXJyZW5jeSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGNvbG9yOiBncmF5O1xuICAgIG1hcmdpbi1sZWZ0OiA3cHg7XG59XG5cbi5lbXB0eS1jYXJ0IHtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJpbWcvZW1wdHktY2FydC5wbmdcIik7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiAyMDAlO1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG59XG5cbi5ib3R0b20tYm9yZGVyIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgYmxhY2s7XG59XG5cbi5ib3R0b20tYm9yZGVyOmxhc3Qtb2YtdHlwZSB7XG4gICAgYm9yZGVyLWJvdHRvbTogMDtcbn1cblxuLmNoZWNrb3V0LWNvdW50YWluZXIge1xuICAgIHdpZHRoOiA5OCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuXG4uY2hlY2tvdXQtYnRuIHtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgd2lkdGg6IDIyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDk4REE7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgbWFyZ2luOiAwIDAgMTBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5jaGVja291dC1idG46aG92ZXIge1xuICAgIGNvbG9yOiAjMDA5OERBO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMDk4REE7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gICAgLmdyYXktYmFja2dyb3VuZDpudGgtb2YtdHlwZShvZGQpIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0YxRjFGMjtcbiAgICB9XG4gICAgLmJvdHRvbS1ib3JkZXIge1xuICAgICAgICBib3JkZXI6IDA7XG4gICAgfVxuICAgIC5jYXJ0LWhlYWQge1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG4gICAgLmNhcnQtaGVhZCBoMSB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxuICAgIC53aGl0ZS1iYWNrZ3JvdWQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-cart',
          templateUrl: './cart.component.html',
          styleUrls: ['./cart.component.css']
        }]
      }], function () {
        return [{
          type: _services_book_service__WEBPACK_IMPORTED_MODULE_1__["BookService"]
        }, {
          type: _services_cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"]
        }];
      }, {
        showDetailsBook: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/checkout/checkout.component.ts":
  /*!************************************************!*\
    !*** ./src/app/checkout/checkout.component.ts ***!
    \************************************************/

  /*! exports provided: customerDialogOptions, CheckoutComponent */

  /***/
  function srcAppCheckoutCheckoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "customerDialogOptions", function () {
      return customerDialogOptions;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function () {
      return CheckoutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _datamodel_customer_info__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../datamodel/customer-info */
    "./src/app/datamodel/customer-info.ts");
    /* harmony import */


    var _services_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/cart.service */
    "./src/app/services/cart.service.ts");
    /* harmony import */


    var _services_book_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/book.service */
    "./src/app/services/book.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../confirm-modal/confirm-modal.component */
    "./src/app/confirm-modal/confirm-modal.component.ts");

    function CheckoutComponent_div_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "RSD");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r21 = ctx.$implicit;

        var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/img/", ctx_r17.getBookByISBN(item_r21.bookIsbn).Korice, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r17.getBookByISBN(item_r21.bookIsbn).Naslov);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 4, ctx_r17.getBookByISBN(item_r21.bookIsbn).Cena, ".2"), " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("x ", item_r21.count, "");
      }
    }

    function CheckoutComponent_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Nema artikala u korpi!");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Povratak na prodavnicu");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CheckoutComponent_div_9_mat_error_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Unseite ime");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CheckoutComponent_div_9_button_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CheckoutComponent_div_9_button_9_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36);

          var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r35.customer.name = "";
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-icon", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CheckoutComponent_div_9_mat_error_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Unseite prezime");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CheckoutComponent_div_9_button_15_Template(rf, ctx) {
      if (rf & 1) {
        var _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CheckoutComponent_div_9_button_15_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38);

          var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r37.customer.surname = "";
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-icon", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CheckoutComponent_div_9_mat_option_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var aCountry_r39 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", aCountry_r39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", aCountry_r39, " ");
      }
    }

    function CheckoutComponent_div_9_mat_error_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Odaberite dr\u017Eavu");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CheckoutComponent_div_9_mat_error_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Unseite grad");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CheckoutComponent_div_9_button_27_Template(rf, ctx) {
      if (rf & 1) {
        var _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CheckoutComponent_div_9_button_27_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41);

          var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r40.customer.city = "";
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-icon", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CheckoutComponent_div_9_mat_error_32_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Unseite adresu");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CheckoutComponent_div_9_button_33_Template(rf, ctx) {
      if (rf & 1) {
        var _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CheckoutComponent_div_9_button_33_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43);

          var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r42.customer.addres = "";
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-icon", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CheckoutComponent_div_9_mat_error_38_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Unseite e-adresu");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CheckoutComponent_div_9_mat_error_39_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Neodgovaraju\u0107 format e-adrese");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CheckoutComponent_div_9_button_40_Template(rf, ctx) {
      if (rf & 1) {
        var _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CheckoutComponent_div_9_button_40_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r45);

          var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r44.customer.email = "";
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-icon", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CheckoutComponent_div_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function CheckoutComponent_div_9_Template_form_submit_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47);

          var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r46.confirmBuy();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Podaci o kupcu:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Ime");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CheckoutComponent_div_9_Template_input_ngModelChange_7_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47);

          var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r48.customer.name = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CheckoutComponent_div_9_mat_error_8_Template, 2, 0, "mat-error", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CheckoutComponent_div_9_button_9_Template, 2, 0, "button", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Prezime");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CheckoutComponent_div_9_Template_input_ngModelChange_13_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47);

          var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r49.customer.surname = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, CheckoutComponent_div_9_mat_error_14_Template, 2, 0, "mat-error", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, CheckoutComponent_div_9_button_15_Template, 2, 0, "button", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Dr\u017Eava");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-select", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CheckoutComponent_div_9_Template_mat_select_ngModelChange_19_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47);

          var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r50.customer.country = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, CheckoutComponent_div_9_mat_option_20_Template, 2, 2, "mat-option", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, CheckoutComponent_div_9_mat_error_21_Template, 2, 0, "mat-error", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Grad");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CheckoutComponent_div_9_Template_input_ngModelChange_25_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47);

          var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r51.customer.city = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, CheckoutComponent_div_9_mat_error_26_Template, 2, 0, "mat-error", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, CheckoutComponent_div_9_button_27_Template, 2, 0, "button", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Adresa");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "input", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CheckoutComponent_div_9_Template_input_ngModelChange_31_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47);

          var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r52.customer.addres = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, CheckoutComponent_div_9_mat_error_32_Template, 2, 0, "mat-error", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, CheckoutComponent_div_9_button_33_Template, 2, 0, "button", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "E-mail adresa");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "input", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CheckoutComponent_div_9_Template_input_ngModelChange_37_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r47);

          var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r53.customer.email = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, CheckoutComponent_div_9_mat_error_38_Template, 2, 0, "mat-error", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, CheckoutComponent_div_9_mat_error_39_Template, 2, 0, "mat-error", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, CheckoutComponent_div_9_button_40_Template, 2, 0, "button", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "mat-label", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Iznos: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "span", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](45, "number");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "button", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Potvrdi kupovinu");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "div", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r19.nameController)("ngModel", ctx_r19.customer.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r19.nameController.hasError("required"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r19.customer.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r19.surnameController)("ngModel", ctx_r19.customer.surname);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r19.surnameController.hasError("required"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r19.customer.surname);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r19.countryController)("ngModel", ctx_r19.customer.country);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r19.availableCountries);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r19.cityController.hasError("required"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r19.cityController)("ngModel", ctx_r19.customer.city);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r19.cityController.hasError("required"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r19.customer.city);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r19.addresController)("ngModel", ctx_r19.customer.addres);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r19.addresController.hasError("required"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r19.customer.addres);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r19.emailController)("ngModel", ctx_r19.customer.email);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r19.emailController.hasError("required"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r19.emailController.hasError("email"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r19.customer.email);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](45, 26, ctx_r19.totalPrice, ".2"), " RSD");
      }
    }

    function CheckoutComponent_app_confirm_modal_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-confirm-modal", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onSelectedOption", function CheckoutComponent_app_confirm_modal_10_Template_app_confirm_modal_onSelectedOption_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55);

          var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r54.checkDialogResponse($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dialogOption", ctx_r20.availableDialogOptions);
      }
    }

    var customerDialogOptions;

    (function (customerDialogOptions) {
      customerDialogOptions["CANCEL"] = "Odustani";
      customerDialogOptions["CONFIRM"] = "Potvrdi";
    })(customerDialogOptions || (customerDialogOptions = {}));

    var CheckoutComponent = /*#__PURE__*/function () {
      function CheckoutComponent(cartService, bookService, router) {
        _classCallCheck(this, CheckoutComponent);

        this.cartService = cartService;
        this.bookService = bookService;
        this.router = router;
        this.customer = new _datamodel_customer_info__WEBPACK_IMPORTED_MODULE_2__["CustomerInfo"]();
        this.totalPrice = 0;
        this.showConfirmDialog = false;
        this.availableCountries = ['Srbija', 'Severna Makedonija', 'Bugarska', 'Hrvatska'];
        this.availableDialogOptions = Object.keys(customerDialogOptions).map(function (x) {
          return customerDialogOptions[x];
        });
        this.controllers = []; //Form controls for customer data

        this.nameController = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        this.surnameController = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        this.addresController = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        this.cityController = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        this.countryController = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        this.emailController = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]);
      }

      _createClass(CheckoutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.cartService.getEmitter().subscribe(function () {
            return _this3.reloadItems();
          });
          this.reloadItems();
          this.totalPrice = this.cartService.getPrice();
          this.controllers.push(this.nameController, this.surnameController, this.addresController, this.cityController, this.countryController, this.emailController);
        }
      }, {
        key: "reloadItems",
        value: function reloadItems() {
          this.items = this.cartService.getItems();
        }
      }, {
        key: "getBookByISBN",
        value: function getBookByISBN(isbn) {
          return this.bookService.getBookByISBN(isbn);
        }
      }, {
        key: "confirmBuy",
        value: function confirmBuy() {
          var _iterator = _createForOfIteratorHelper(this.controllers),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var controller = _step.value;
              if (controller.valid) continue;else return;
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          this.showConfirmDialog = true;
        }
      }, {
        key: "checkDialogResponse",
        value: function checkDialogResponse(response) {
          this.showConfirmDialog = false;

          if (response === customerDialogOptions.CONFIRM) {
            this.cartService.removeAll();
            this.router.navigate(['/checkout/order-recived']);
          }
        }
      }]);

      return CheckoutComponent;
    }();

    CheckoutComponent.ɵfac = function CheckoutComponent_Factory(t) {
      return new (t || CheckoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_book_service__WEBPACK_IMPORTED_MODULE_4__["BookService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]));
    };

    CheckoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CheckoutComponent,
      selectors: [["app-checkout"]],
      decls: 11,
      vars: 4,
      consts: [[1, "baner"], [1, "checkout-conteiner"], [1, "checkout-content"], [1, "checkout-head"], [1, "checkout-items"], ["class", "checkout-item", 4, "ngFor", "ngForOf"], ["class", "empty-cart", 4, "ngIf"], ["class", "checkout-payment", 4, "ngIf"], [3, "dialogOption", "onSelectedOption", 4, "ngIf"], [1, "checkout-item"], [1, "checkout-item-img", 3, "src"], [1, "checkout-item-name"], [1, "checkout-item-price"], [1, "checkout-item-price-currency"], [1, "checkout-item-count"], [1, "empty-cart"], [1, "empty-cart-label"], ["routerLink", "/search", 1, "go-to-shop"], [1, "checkout-payment"], [1, "customer-info", 3, "submit"], ["matInput", "", "required", "", "type", "text", 3, "formControl", "ngModel", "ngModelChange"], [4, "ngIf"], ["mat-button", "", "matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click", 4, "ngIf"], ["required", "", 3, "formControl", "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "total-price"], [1, "total-price-value"], ["type", "submit", 1, "confirm-buy"], [1, "checout-details"], ["mat-button", "", "matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click"], [1, "mat-icon-close"], [3, "value"], [3, "dialogOption", "onSelectedOption"]],
      template: function CheckoutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Pla\u0107anje");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CheckoutComponent_div_7_Template, 12, 7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CheckoutComponent_div_8_Template, 5, 0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CheckoutComponent_div_9_Template, 49, 29, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CheckoutComponent_app_confirm_modal_10_Template, 1, 1, "app-confirm-modal", 8);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.items.length === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.items.length !== 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showConfirmDialog);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_material_select__WEBPACK_IMPORTED_MODULE_9__["MatSelect"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatError"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatSuffix"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatOption"], _confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_12__["ConfirmModalComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DecimalPipe"]],
      styles: [".baner[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 400px;\n    background-image: url('Header fotografija.jpg');\n    background-position: left;\n    background-repeat: no-repeat;\n    background-size: cover;\n}\n\n.checkout-conteiner[_ngcontent-%COMP%] {\n    width: 100%;\n    height: auto;\n    background-color: rgb(230, 231, 232);\n}\n\n.checkout-content[_ngcontent-%COMP%] {\n    max-width: 1200px;\n    margin: auto;\n    background-color: white;\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: center;\n    padding-bottom: 50px;\n}\n\n.checkout-head[_ngcontent-%COMP%] {\n    width: 98%;\n    min-height: 120px;\n    margin: 10px 1% 0 1%;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: space-between;\n    align-items: flex-end;\n    padding: 0;\n}\n\n.checkout-head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    width: auto;\n    padding: 50px 30px 15px;\n    font-size: 60px;\n    font-weight: 100;\n}\n\n.checkout-items[_ngcontent-%COMP%] {\n    height: auto;\n    width: 500px;\n    display: flex;\n    justify-content: center;\n    align-items:center;\n    padding: 10px;\n    flex-direction: column;\n}\n\n.checkout-payment[_ngcontent-%COMP%] {\n    height: auto;\n    width: 600px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 10px;\n}\n\n.checkout-item[_ngcontent-%COMP%] {\n    height: 60px;\n    width: 100%;\n    background-color: #E6F5FD;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    padding: 0 5px;\n    margin: 5px;\n}\n\n.checkout-item-img[_ngcontent-%COMP%] {\n    height: 50px;\n}\n\n.checkout-item[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] {\n    width: auto;\n    display: flex;\n    flex-direction: column;\n    margin-left: 20px;\n    margin-right: 10px;\n}\n\n.checkout-item-name[_ngcontent-%COMP%] {\n    font-size: 20px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: -webkit-box;\n    -webkit-line-clamp: 1;\n    -webkit-box-orient: vertical;\n}\n\n.checkout-item-price[_ngcontent-%COMP%] {\n    margin-top: 2px;\n    font-size: 20px;\n    display: flex;\n    flex-direction: row;\n    justify-content: baseline;\n}\n\n.checkout-item-price-currency[_ngcontent-%COMP%] {\n    margin-left: 5px;\n    font-size: 15px;\n    display: flex;\n    padding: 4px 0 0;\n    color: gray;\n}\n\n.checkout-item-count[_ngcontent-%COMP%] {\n    margin-left: 10px;\n    color: #0098DA;\n    font-weight: 700;\n}\n\n.go-to-shop[_ngcontent-%COMP%] {\n    align-self: center;\n    width: 300px;\n    height: 50px;\n    color: white;\n    background-color: #0098DA;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 22px;\n}\n\n.go-to-shop[_ngcontent-%COMP%]:hover {\n    color: #0098DA;\n    border: 2px solid #0098DA;\n    background-color: white;\n    cursor: pointer;\n}\n\n.customer-info[_ngcontent-%COMP%] {\n    width: 300px;\n    height: auto;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 10px;\n}\n\n.customer-info[_ngcontent-%COMP%]    > h2[_ngcontent-%COMP%]{\n    align-self: center;\n    width: 100%;\n    max-width: 300px;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n    width: 100% !important;\n    max-width: 300px;\n    margin: 5px 0;\n}\n\nmat-form-field[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    background-color: transparent !important;\n    border: 0 !important;\n    background-image: url('close-24px.svg') !important;\n    background-position: center !important;\n    background-repeat: no-repeat !important;\n    background-size: 100% !important;\n}\n\n.total-price[_ngcontent-%COMP%]{\n    margin-top: 20px;\n    width: 100%;\n    max-width: 300px;\n}\n\n.total-price-value[_ngcontent-%COMP%] {\n    font-size: 25px;\n    margin-left: 5px;\n    color: #0098DA;\n}\n\n.confirm-buy[_ngcontent-%COMP%] {\n    align-self: center;\n    width: 200px;\n    height: 40px;\n    color: white;\n    background-color: #0098DA;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    font-size: 22px;\n    border: 0;\n    margin-top: 20px;\n    align-self: flex-end;\n}\n\n.confirm-buy[_ngcontent-%COMP%]:hover {\n    color: #0098DA;\n    border: 2px solid #0098DA;\n    background-color: white;\n    cursor: pointer;\n}\n\n.empty-cart[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    margin: 25px;\n    height: 100px;\n}\n\n.empty-cart-label[_ngcontent-%COMP%]{\n    font-size: 22px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hlY2tvdXQvY2hlY2tvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsK0NBQW1EO0lBQ25ELHlCQUF5QjtJQUN6Qiw0QkFBNEI7SUFDNUIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsOEJBQThCO0lBQzlCLHFCQUFxQjtJQUNyQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixvQkFBb0I7SUFDcEIscUJBQXFCO0lBQ3JCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGVBQWU7SUFDZixlQUFlO0lBQ2YsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsV0FBVztBQUNmOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLHVCQUF1QjtJQUN2QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsZ0JBQWdCO0lBQ2hCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSx3Q0FBd0M7SUFDeEMsb0JBQW9CO0lBQ3BCLGtEQUFzRDtJQUN0RCxzQ0FBc0M7SUFDdEMsdUNBQXVDO0lBQ3ZDLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsU0FBUztJQUNULGdCQUFnQjtJQUNoQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLHVCQUF1QjtJQUN2QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NoZWNrb3V0L2NoZWNrb3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFuZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNDAwcHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaW1nL0hlYWRlciBmb3RvZ3JhZmlqYS5qcGdcIik7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5jaGVja291dC1jb250ZWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMwLCAyMzEsIDIzMik7XG59XG5cbi5jaGVja291dC1jb250ZW50IHtcbiAgICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcbn1cblxuLmNoZWNrb3V0LWhlYWQge1xuICAgIHdpZHRoOiA5OCU7XG4gICAgbWluLWhlaWdodDogMTIwcHg7XG4gICAgbWFyZ2luOiAxMHB4IDElIDAgMSU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgIHBhZGRpbmc6IDA7XG59XG5cbi5jaGVja291dC1oZWFkIGgxIHtcbiAgICB3aWR0aDogYXV0bztcbiAgICBwYWRkaW5nOiA1MHB4IDMwcHggMTVweDtcbiAgICBmb250LXNpemU6IDYwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcbn1cblxuLmNoZWNrb3V0LWl0ZW1zIHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IDUwMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmNoZWNrb3V0LXBheW1lbnQge1xuICAgIGhlaWdodDogYXV0bztcbiAgICB3aWR0aDogNjAwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5cbi5jaGVja291dC1pdGVtIHtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U2RjVGRDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDAgNXB4O1xuICAgIG1hcmdpbjogNXB4O1xufVxuXG4uY2hlY2tvdXQtaXRlbS1pbWcge1xuICAgIGhlaWdodDogNTBweDtcbn1cblxuLmNoZWNrb3V0LWl0ZW0+ZGl2IHtcbiAgICB3aWR0aDogYXV0bztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4uY2hlY2tvdXQtaXRlbS1uYW1lIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDE7XG4gICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbn1cblxuLmNoZWNrb3V0LWl0ZW0tcHJpY2Uge1xuICAgIG1hcmdpbi10b3A6IDJweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogYmFzZWxpbmU7XG59XG5cbi5jaGVja291dC1pdGVtLXByaWNlLWN1cnJlbmN5IHtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBhZGRpbmc6IDRweCAwIDA7XG4gICAgY29sb3I6IGdyYXk7XG59XG5cbi5jaGVja291dC1pdGVtLWNvdW50IHtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBjb2xvcjogIzAwOThEQTtcbiAgICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uZ28tdG8tc2hvcCB7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDk4REE7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbn1cblxuLmdvLXRvLXNob3A6aG92ZXIge1xuICAgIGNvbG9yOiAjMDA5OERBO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMDk4REE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY3VzdG9tZXItaW5mbyB7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGhlaWdodDogYXV0bztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uY3VzdG9tZXItaW5mbyA+IGgye1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xufVxuXG5tYXQtZm9ybS1maWVsZCB7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xuICAgIG1hcmdpbjogNXB4IDA7XG59XG5cbm1hdC1mb3JtLWZpZWxkIGJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbiAgICBib3JkZXI6IDAgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJpbWcvY2xvc2UtMjRweC5zdmdcIikgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0ICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMDAlICFpbXBvcnRhbnQ7XG59XG5cbi50b3RhbC1wcmljZXtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogMzAwcHg7XG59XG5cbi50b3RhbC1wcmljZS12YWx1ZSB7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgY29sb3I6ICMwMDk4REE7XG59XG5cbi5jb25maXJtLWJ1eSB7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDk4REE7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICBib3JkZXI6IDA7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbn1cblxuLmNvbmZpcm0tYnV5OmhvdmVyIHtcbiAgICBjb2xvcjogIzAwOThEQTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMDA5OERBO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmVtcHR5LWNhcnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW46IDI1cHg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbn1cblxuLmVtcHR5LWNhcnQtbGFiZWx7XG4gICAgZm9udC1zaXplOiAyMnB4O1xufVxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CheckoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-checkout',
          templateUrl: './checkout.component.html',
          styleUrls: ['./checkout.component.css']
        }]
      }], function () {
        return [{
          type: _services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"]
        }, {
          type: _services_book_service__WEBPACK_IMPORTED_MODULE_4__["BookService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/confirm-modal/confirm-modal.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/confirm-modal/confirm-modal.component.ts ***!
    \**********************************************************/

  /*! exports provided: ConfirmModalComponent */

  /***/
  function srcAppConfirmModalConfirmModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfirmModalComponent", function () {
      return ConfirmModalComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_component_helper_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/component-helper.service */
    "./src/app/services/component-helper.service.ts");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ConfirmModalComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var option_r80 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r80);
      }
    }

    var ConfirmModalComponent = /*#__PURE__*/function () {
      function ConfirmModalComponent(helperService) {
        _classCallCheck(this, ConfirmModalComponent);

        this.helperService = helperService;
        this.onSelectedOption = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(ConfirmModalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.compID = this.helperService.getUniqueID();
        }
      }, {
        key: "onClick",
        value: function onClick(e) {
          if (this.helperService.isDescendantOfById(e.target, this.compID)) {
            if (e.target.classList.contains('dialog-option')) this.onSelectedOption.emit(e.target.innerHTML);
          } else this.onSelectedOption.emit(this.dialogOption[0]);
        }
      }]);

      return ConfirmModalComponent;
    }();

    ConfirmModalComponent.ɵfac = function ConfirmModalComponent_Factory(t) {
      return new (t || ConfirmModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_component_helper_service__WEBPACK_IMPORTED_MODULE_1__["ComponentHelperService"]));
    };

    ConfirmModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ConfirmModalComponent,
      selectors: [["app-confirm-modal"]],
      hostBindings: function ConfirmModalComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmModalComponent_click_HostBindingHandler($event) {
            return ctx.onClick($event);
          });
        }
      },
      inputs: {
        dialogOption: "dialogOption"
      },
      outputs: {
        onSelectedOption: "onSelectedOption"
      },
      decls: 5,
      vars: 2,
      consts: [[1, "dialog", 3, "id"], [1, "dialog-text"], [1, "dialog-comunication"], ["class", "dialog-option", 4, "ngFor", "ngForOf"], [1, "dialog-option"]],
      template: function ConfirmModalComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Da li ste sigurni");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ConfirmModalComponent_div_4_Template, 2, 1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", ctx.compID);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.dialogOption);
        }
      },
      directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatLabel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
      styles: ["[_nghost-%COMP%] {\n    position: fixed;\n    top: 0;\n    height: 100vh;\n    width: 100vw;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    z-index: 10001;\n}\n\n.dialog[_ngcontent-%COMP%] {\n    width: 500px;\n    min-height: 200px;\n    background-color: white;\n    border-radius: 15px;\n    border: 5px solid #0098da;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    box-shadow: 0px 0px 10px 5px rgba(140, 140, 140, 1);\n}\n\n.dialog-text[_ngcontent-%COMP%] {\n    margin-top: 20px;\n    font-size: 22px;\n}\n\n.dialog-comunication[_ngcontent-%COMP%] {\n    min-height: 50px;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-items: center;\n    margin-top: 30px;\n    margin-bottom: 20px;\n}\n\n.dialog-option[_ngcontent-%COMP%] {\n    width: 150px;\n    height: 40px;\n    color: white;\n    background-color: #0098da;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 16px;\n    margin: 5px 10px 10px 10px;\n    cursor: pointer;\n}\n\n.dialog-option[_ngcontent-%COMP%]:hover {\n    color: #0098da;\n    background-color: white;\n    border: 2px solid #0098da;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29uZmlybS1tb2RhbC9jb25maXJtLW1vZGFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsTUFBTTtJQUNOLGFBQWE7SUFDYixZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLG1EQUFtRDtBQUN2RDs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsMEJBQTBCO0lBQzFCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsdUJBQXVCO0lBQ3ZCLHlCQUF5QjtBQUM3QiIsImZpbGUiOiJzcmMvYXBwL2NvbmZpcm0tbW9kYWwvY29uZmlybS1tb2RhbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHotaW5kZXg6IDEwMDAxO1xufVxuXG4uZGlhbG9nIHtcbiAgICB3aWR0aDogNTAwcHg7XG4gICAgbWluLWhlaWdodDogMjAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBib3JkZXI6IDVweCBzb2xpZCAjMDA5OGRhO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCA1cHggcmdiYSgxNDAsIDE0MCwgMTQwLCAxKTtcbn1cblxuLmRpYWxvZy10ZXh0IHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMjJweDtcbn1cblxuLmRpYWxvZy1jb211bmljYXRpb24ge1xuICAgIG1pbi1oZWlnaHQ6IDUwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmRpYWxvZy1vcHRpb24ge1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDk4ZGE7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBtYXJnaW46IDVweCAxMHB4IDEwcHggMTBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5kaWFsb2ctb3B0aW9uOmhvdmVyIHtcbiAgICBjb2xvcjogIzAwOThkYTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjMDA5OGRhO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfirmModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-confirm-modal',
          templateUrl: './confirm-modal.component.html',
          styleUrls: ['./confirm-modal.component.css']
        }]
      }], function () {
        return [{
          type: _services_component_helper_service__WEBPACK_IMPORTED_MODULE_1__["ComponentHelperService"]
        }];
      }, {
        dialogOption: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        onSelectedOption: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['click', ['$event']]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/datamodel/cart-item.ts":
  /*!****************************************!*\
    !*** ./src/app/datamodel/cart-item.ts ***!
    \****************************************/

  /*! exports provided: CartItem */

  /***/
  function srcAppDatamodelCartItemTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartItem", function () {
      return CartItem;
    });

    var CartItem = function CartItem(bookIsbn, count) {
      _classCallCheck(this, CartItem);

      this.bookIsbn = bookIsbn;
      this.count = count;
    };
    /***/

  },

  /***/
  "./src/app/datamodel/customer-info.ts":
  /*!********************************************!*\
    !*** ./src/app/datamodel/customer-info.ts ***!
    \********************************************/

  /*! exports provided: CustomerInfo */

  /***/
  function srcAppDatamodelCustomerInfoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomerInfo", function () {
      return CustomerInfo;
    });

    var CustomerInfo = function CustomerInfo() {
      _classCallCheck(this, CustomerInfo);
    };
    /***/

  },

  /***/
  "./src/app/datamodel/filter.ts":
  /*!*************************************!*\
    !*** ./src/app/datamodel/filter.ts ***!
    \*************************************/

  /*! exports provided: Filter */

  /***/
  function srcAppDatamodelFilterTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Filter", function () {
      return Filter;
    });

    var Filter = function Filter() {
      _classCallCheck(this, Filter);

      this.categories = [];
      this.languages = [];
    };
    /***/

  },

  /***/
  "./src/app/header/cart-info/cart-info.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/header/cart-info/cart-info.component.ts ***!
    \*********************************************************/

  /*! exports provided: CartInfoComponent */

  /***/
  function srcAppHeaderCartInfoCartInfoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartInfoComponent", function () {
      return CartInfoComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/cart.service */
    "./src/app/services/cart.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var CartInfoComponent = /*#__PURE__*/function () {
      function CartInfoComponent(cartService) {
        _classCallCheck(this, CartInfoComponent);

        this.cartService = cartService;
        this.bookCount = 0;
        this.totalPrice = 0.00;
      }

      _createClass(CartInfoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.cartService.getEmitter().subscribe(function () {
            return _this4.updateData();
          });
          this.updateData();
        }
      }, {
        key: "updateData",
        value: function updateData() {
          this.bookCount = this.cartService.getCount();
          this.totalPrice = this.cartService.getPrice();
        }
      }]);

      return CartInfoComponent;
    }();

    CartInfoComponent.ɵfac = function CartInfoComponent_Factory(t) {
      return new (t || CartInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"]));
    };

    CartInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CartInfoComponent,
      selectors: [["app-cart-info"]],
      decls: 11,
      vars: 6,
      consts: [["routerLinkActive", "cart-active", 1, "cart", 3, "routerLink"], [1, "cart-logo"], [1, "cart-info"], [1, "cart-info-count"], [1, "cart-info-price"], [1, "cart-info-price-value"], [1, "cart-info-price-curency"]],
      template: function CartInfoComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "RSD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/cart");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.bookCount, " knjige");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](8, 3, ctx.totalPrice, ".2"));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DecimalPipe"]],
      styles: [".cart[_ngcontent-%COMP%] {\n    width: 220px;\n    height: 40px;\n    display: flex;\n    justify-content: flex-end;\n    background-color: white;\n}\n\n.cart-active[_ngcontent-%COMP%] {\n    background-color: #E6F5FD;\n}\n\n.cart-logo[_ngcontent-%COMP%] {\n    width: 40px;\n    height: 40px;\n    background-image: url('Korpa.svg');\n    background-size: contain;\n    background-repeat: no-repeat;\n}\n\n.cart-info[_ngcontent-%COMP%] {\n    width: 150px;\n    display: flex;\n    flex-direction: column;\n    padding: 5px;\n    justify-content: space-between;\n}\n\n.cart-info-count[_ngcontent-%COMP%] {\n    font-size: 12px;\n    color: rgb(153, 153, 153);\n}\n\n.cart-info-price[_ngcontent-%COMP%] {\n    font-size: 14px;\n    display: flex;\n    flex-direction: row;\n}\n\n.cart-info-price-value[_ngcontent-%COMP%] {\n    font-weight: 700;\n}\n\n.cart-info-price-curency[_ngcontent-%COMP%] {\n    color: rgb(153, 153, 153);\n    margin-left: 4px;\n}\n\n@media screen and (max-width: 860px) {\n    .cart[_ngcontent-%COMP%] {\n        justify-self: flex-end;\n        order: 1;\n        width: 170px;\n        margin-top: 10px;\n    }\n    .cart-info[_ngcontent-%COMP%] {\n        width: 110px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2NhcnQtaW5mby9jYXJ0LWluZm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osYUFBYTtJQUNiLHlCQUF5QjtJQUN6Qix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtDQUFzQztJQUN0Qyx3QkFBd0I7SUFDeEIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGVBQWU7SUFDZix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSTtRQUNJLHNCQUFzQjtRQUN0QixRQUFRO1FBQ1IsWUFBWTtRQUNaLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksWUFBWTtJQUNoQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2NhcnQtaW5mby9jYXJ0LWluZm8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJ0IHtcbiAgICB3aWR0aDogMjIwcHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmNhcnQtYWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTZGNUZEO1xufVxuXG4uY2FydC1sb2dvIHtcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaW1nL0tvcnBhLnN2Z1wiKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cblxuLmNhcnQtaW5mbyB7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uY2FydC1pbmZvLWNvdW50IHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6IHJnYigxNTMsIDE1MywgMTUzKTtcbn1cblxuLmNhcnQtaW5mby1wcmljZSB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cblxuLmNhcnQtaW5mby1wcmljZS12YWx1ZSB7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmNhcnQtaW5mby1wcmljZS1jdXJlbmN5IHtcbiAgICBjb2xvcjogcmdiKDE1MywgMTUzLCAxNTMpO1xuICAgIG1hcmdpbi1sZWZ0OiA0cHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg2MHB4KSB7XG4gICAgLmNhcnQge1xuICAgICAgICBqdXN0aWZ5LXNlbGY6IGZsZXgtZW5kO1xuICAgICAgICBvcmRlcjogMTtcbiAgICAgICAgd2lkdGg6IDE3MHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIH1cbiAgICAuY2FydC1pbmZvIHtcbiAgICAgICAgd2lkdGg6IDExMHB4O1xuICAgIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CartInfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-cart-info',
          templateUrl: './cart-info.component.html',
          styleUrls: ['./cart-info.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _cart_info_cart_info_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./cart-info/cart-info.component */
    "./src/app/header/cart-info/cart-info.component.ts");
    /* harmony import */


    var _mobile_header_mobile_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./mobile-header/mobile-header.component */
    "./src/app/header/mobile-header/mobile-header.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a0) {
      return {
        "display": a0
      };
    };

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent() {
        _classCallCheck(this, HeaderComponent);

        this.mobileScreen = 'none';
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "showMobileScreen",
        value: function showMobileScreen() {
          this.mobileScreen = 'block';
        }
      }, {
        key: "hideMobileScreen",
        value: function hideMobileScreen() {
          this.mobileScreen = 'none';
        }
      }, {
        key: "changeOnScrol",
        value: function changeOnScrol() {
          if (window.scrollY != 0) {
            document.getElementsByClassName("header")[0].classList.add("header-scroled");
            document.getElementsByClassName("header-content")[0].classList.add("header-content-scroled");
            document.getElementsByClassName("header-logo")[0].classList.add("header-logo-scroled");
          } else {
            document.getElementsByClassName("header")[0].classList.remove("header-scroled");
            document.getElementsByClassName("header-content")[0].classList.remove("header-content-scroled");
            document.getElementsByClassName("header-logo")[0].classList.remove("header-logo-scroled");
          }
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)();
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      decls: 15,
      vars: 3,
      consts: [[1, "header", 3, "scroll"], [1, "header-content"], [1, "header-short"], ["routerLink", "/", 1, "header-logo"], [1, "tribar-button", 3, "click"], [1, "navigation"], ["routerLink", "/welcome", "routerLinkActive", "navigation-item-active", 1, "navigation-item"], ["routerLink", "/search", "routerLinkActive", "navigation-item-active", 1, "navigation-item"], ["routerLink", "/checkout", "routerLinkActive", "navigation-item-active", 1, "navigation-item"], [3, "ngStyle", "closeMobileHeader"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function HeaderComponent_Template_div_scroll_0_listener() {
            return ctx.changeOnScrol();
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_div_click_4_listener() {
            return ctx.showMobileScreen();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nav");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Pretra\u017Eivanje");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Ra\u010Dun");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-cart-info");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "app-mobile-header", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("closeMobileHeader", function HeaderComponent_Template_app_mobile_header_closeMobileHeader_14_listener() {
            return ctx.hideMobileScreen();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx.mobileScreen));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _cart_info_cart_info_component__WEBPACK_IMPORTED_MODULE_2__["CartInfoComponent"], _mobile_header_mobile_header_component__WEBPACK_IMPORTED_MODULE_3__["MobileHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"]],
      styles: [".header[_ngcontent-%COMP%] {\n    width: 100%;\n    background-color: white;\n    position: -webkit-sticky;\n    position: sticky;\n    top: 0;\n    z-index: 10000;\n}\n\n.header-content[_ngcontent-%COMP%] {\n    max-width: 1200px;\n    min-height: 90px;\n    margin: auto;\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-end;\n    background-color: white;\n    color: black;\n    padding: 0 0 15px 0;\n    transition: ease 0.3s;\n    transition-property: min-height;\n}\n\n.header-scroled[_ngcontent-%COMP%] {\n    box-shadow: 0px 4px 15px 0px rgba(171, 171, 171, 1);\n}\n\n.header-content-scroled[_ngcontent-%COMP%] {\n    min-height: 65px !important;\n}\n\n.header-logo[_ngcontent-%COMP%] {\n    width: 260px;\n    height: 70px;\n    margin-bottom: -10px;\n    background-image: url('Logo Moja knjizara.svg');\n    background-repeat: no-repeat;\n    background-size: contain;\n    background-clip: border-box;\n    transition: ease 0.3s;\n    transition-property: height;\n}\n\n.header-logo-scroled[_ngcontent-%COMP%] {\n    height: 50px;\n}\n\n.header-short[_ngcontent-%COMP%] {\n    width: 300px;\n    margin: 0 10px;\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-end;\n}\n\n.tribar-button[_ngcontent-%COMP%] {\n    display: none;\n}\n\n.navigation[_ngcontent-%COMP%] {\n    width: 400px;\n    height: 50px;\n    display: flex;\n    align-items: flex-end;\n    justify-content: space-around;\n    font-size: 18px;\n}\n\n.navigation-item[_ngcontent-%COMP%]:hover {\n    color: rgb(0, 152, 218);\n}\n\n.navigation-item-active[_ngcontent-%COMP%] {\n    color: rgb(0, 152, 218);\n}\n\n@media screen and (max-width: 860px) {\n    .header-content[_ngcontent-%COMP%] {\n        flex-direction: column;\n    }\n    .navigation[_ngcontent-%COMP%] {\n        display: none;\n    }\n    .tribar-button[_ngcontent-%COMP%] {\n        display: block;\n        min-width: 30px;\n        height: 30px;\n        background-image: url('Tribar.svg');\n        background-size: contain;\n        background-repeat: no-repeat;\n    }\n    .header-short[_ngcontent-%COMP%] {\n        width: 92%;\n        margin: 0 4%;\n        order: 2;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLHVCQUF1QjtJQUN2Qix3QkFBZ0I7SUFBaEIsZ0JBQWdCO0lBQ2hCLE1BQU07SUFDTixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixxQkFBcUI7SUFDckIsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLG1EQUFtRDtBQUN2RDs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLCtDQUFtRDtJQUNuRCw0QkFBNEI7SUFDNUIsd0JBQXdCO0lBQ3hCLDJCQUEyQjtJQUMzQixxQkFBcUI7SUFDckIsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixjQUFjO0lBQ2QsYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLDZCQUE2QjtJQUM3QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0k7UUFDSSxzQkFBc0I7SUFDMUI7SUFDQTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLGNBQWM7UUFDZCxlQUFlO1FBQ2YsWUFBWTtRQUNaLG1DQUF1QztRQUN2Qyx3QkFBd0I7UUFDeEIsNEJBQTRCO0lBQ2hDO0lBQ0E7UUFDSSxVQUFVO1FBQ1YsWUFBWTtRQUNaLFFBQVE7SUFDWjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICB0b3A6IDA7XG4gICAgei1pbmRleDogMTAwMDA7XG59XG5cbi5oZWFkZXItY29udGVudCB7XG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gICAgbWluLWhlaWdodDogOTBweDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBwYWRkaW5nOiAwIDAgMTVweCAwO1xuICAgIHRyYW5zaXRpb246IGVhc2UgMC4zcztcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBtaW4taGVpZ2h0O1xufVxuXG4uaGVhZGVyLXNjcm9sZWQge1xuICAgIGJveC1zaGFkb3c6IDBweCA0cHggMTVweCAwcHggcmdiYSgxNzEsIDE3MSwgMTcxLCAxKTtcbn1cblxuLmhlYWRlci1jb250ZW50LXNjcm9sZWQge1xuICAgIG1pbi1oZWlnaHQ6IDY1cHggIWltcG9ydGFudDtcbn1cblxuLmhlYWRlci1sb2dvIHtcbiAgICB3aWR0aDogMjYwcHg7XG4gICAgaGVpZ2h0OiA3MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IC0xMHB4O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImltZy9Mb2dvIE1vamEga25qaXphcmEuc3ZnXCIpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgIGJhY2tncm91bmQtY2xpcDogYm9yZGVyLWJveDtcbiAgICB0cmFuc2l0aW9uOiBlYXNlIDAuM3M7XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogaGVpZ2h0O1xufVxuXG4uaGVhZGVyLWxvZ28tc2Nyb2xlZCB7XG4gICAgaGVpZ2h0OiA1MHB4O1xufVxuXG4uaGVhZGVyLXNob3J0IHtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgbWFyZ2luOiAwIDEwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xufVxuXG4udHJpYmFyLWJ1dHRvbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLm5hdmlnYXRpb24ge1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4ubmF2aWdhdGlvbi1pdGVtOmhvdmVyIHtcbiAgICBjb2xvcjogcmdiKDAsIDE1MiwgMjE4KTtcbn1cblxuLm5hdmlnYXRpb24taXRlbS1hY3RpdmUge1xuICAgIGNvbG9yOiByZ2IoMCwgMTUyLCAyMTgpO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NjBweCkge1xuICAgIC5oZWFkZXItY29udGVudCB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxuICAgIC5uYXZpZ2F0aW9uIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgLnRyaWJhci1idXR0b24ge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbWluLXdpZHRoOiAzMHB4O1xuICAgICAgICBoZWlnaHQ6IDMwcHg7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImltZy9UcmliYXIuc3ZnXCIpO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgfVxuICAgIC5oZWFkZXItc2hvcnQge1xuICAgICAgICB3aWR0aDogOTIlO1xuICAgICAgICBtYXJnaW46IDAgNCU7XG4gICAgICAgIG9yZGVyOiAyO1xuICAgIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/header/mobile-header/mobile-header.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/header/mobile-header/mobile-header.component.ts ***!
    \*****************************************************************/

  /*! exports provided: MobileHeaderComponent */

  /***/
  function srcAppHeaderMobileHeaderMobileHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MobileHeaderComponent", function () {
      return MobileHeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _cart_info_cart_info_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../cart-info/cart-info.component */
    "./src/app/header/cart-info/cart-info.component.ts");

    var MobileHeaderComponent = /*#__PURE__*/function () {
      function MobileHeaderComponent() {
        _classCallCheck(this, MobileHeaderComponent);

        this.closeMobileHeader = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(MobileHeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "closeModal",
        value: function closeModal(event) {
          if (event.toElement.classList.contains("screen")) this.closeMobileHeader.emit();
        }
      }, {
        key: "closeModalOnResiza",
        value: function closeModalOnResiza(event) {
          if (event.target.innerWidth > 860) this.closeMobileHeader.emit();
        }
      }]);

      return MobileHeaderComponent;
    }();

    MobileHeaderComponent.ɵfac = function MobileHeaderComponent_Factory(t) {
      return new (t || MobileHeaderComponent)();
    };

    MobileHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MobileHeaderComponent,
      selectors: [["app-mobile-header"]],
      outputs: {
        closeMobileHeader: "closeMobileHeader"
      },
      decls: 12,
      vars: 4,
      consts: [[1, "screen", 3, "click", "resize"], [1, "back-button", "nav-item", 3, "click"], ["routerLinkActive", "nav-active", 1, "nav-item", 3, "routerLink", "click"], ["routerLinkActive", "cart-active", 1, "nav-item-cart", 3, "routerLink", "click"]],
      template: function MobileHeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MobileHeaderComponent_Template_div_click_0_listener($event) {
            return ctx.closeModal($event);
          })("resize", function MobileHeaderComponent_Template_div_resize_0_listener($event) {
            return ctx.closeModalOnResiza($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MobileHeaderComponent_Template_div_click_1_listener() {
            return ctx.closeMobileHeader.emit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "MENU ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MobileHeaderComponent_Template_a_click_4_listener() {
            return ctx.closeMobileHeader.emit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MobileHeaderComponent_Template_a_click_6_listener() {
            return ctx.closeMobileHeader.emit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Pretra\u017Eivanje");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MobileHeaderComponent_Template_a_click_8_listener() {
            return ctx.closeMobileHeader.emit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Ra\u010Dun");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MobileHeaderComponent_Template_a_click_10_listener() {
            return ctx.closeMobileHeader.emit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-cart-info");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/welcome");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/search");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/checkout");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "/cart");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _cart_info_cart_info_component__WEBPACK_IMPORTED_MODULE_2__["CartInfoComponent"]],
      styles: [".screen[_ngcontent-%COMP%] {\n    width: 100vw;\n    height: 100vh;\n    background-color: rgba(153, 153, 153, 0.5);\n    position: fixed;\n    top: 0px;\n    display: flex;\n    flex-direction: column;\n    z-index: 10001;\n}\n\n.nav-item[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 50px;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    padding: 10px;\n    background-color: white;\n    color: rgb(0, 152, 218);\n    border-bottom: 1px solid rgb(153, 153, 153);\n}\n\n.back-button[_ngcontent-%COMP%] {\n    background-color: rgb(153, 153, 153) !important;\n    color: white !important;\n    justify-content: space-between !important;\n}\n\n.back-button[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] {\n    width: 20px;\n    height: 20px;\n    background-image: url('Beli X.svg');\n    background-size: contain;\n    background-repeat: no-repeat;\n}\n\n.nav-item-cart[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 80px;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    padding-bottom: 10px;\n    background-color: white;\n}\n\n.nav-active[_ngcontent-%COMP%] {\n    background-color: #E6F5FD;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL21vYmlsZS1oZWFkZXIvbW9iaWxlLWhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYiwwQ0FBMEM7SUFDMUMsZUFBZTtJQUNmLFFBQVE7SUFDUixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLDJDQUEyQztBQUMvQzs7QUFFQTtJQUNJLCtDQUErQztJQUMvQyx1QkFBdUI7SUFDdkIseUNBQXlDO0FBQzdDOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixtQ0FBdUM7SUFDdkMsd0JBQXdCO0lBQ3hCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLDJCQUEyQjtJQUMzQixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3QiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9tb2JpbGUtaGVhZGVyL21vYmlsZS1oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zY3JlZW4ge1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTUzLCAxNTMsIDE1MywgMC41KTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHotaW5kZXg6IDEwMDAxO1xufVxuXG4ubmF2LWl0ZW0ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgY29sb3I6IHJnYigwLCAxNTIsIDIxOCk7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigxNTMsIDE1MywgMTUzKTtcbn1cblxuLmJhY2stYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUzLCAxNTMsIDE1MykgIWltcG9ydGFudDtcbiAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW4gIWltcG9ydGFudDtcbn1cblxuLmJhY2stYnV0dG9uPmRpdiB7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaW1nL0JlbGkgWC5zdmcnKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn1cblxuLm5hdi1pdGVtLWNhcnQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogODBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4ubmF2LWFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U2RjVGRDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MobileHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-mobile-header',
          templateUrl: './mobile-header.component.html',
          styleUrls: ['./mobile-header.component.css']
        }]
      }], function () {
        return [];
      }, {
        closeMobileHeader: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return {
        categories: "Java"
      };
    };

    var _c1 = function _c1() {
      return {
        categories: "Javascript"
      };
    };

    var _c2 = function _c2() {
      return {
        categories: "Excel VBA"
      };
    };

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)();
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 27,
      vars: 6,
      consts: [[1, "baner"], [1, "home-conteiner"], [1, "home-content"], ["id", "img-1", 1, "home-grid-item"], ["id", "first-detail", 1, "home-grid-item"], ["id", "second-detail", 1, "home-grid-item", "home-grid-item-inverse"], [1, "button-inverse"], ["id", "img-2", 1, "home-grid-item"], [1, "third-detail"], ["routerLink", "/search", "routerLinkActive", "router-link-active", "id", "third-detail-item-1", 1, "third-detail-item", 3, "queryParams"], ["routerLink", "/search", "id", "third-detail-item-2", 1, "third-detail-item", 3, "queryParams"], ["routerLink", "/search", "id", "third-detail-item-3", 1, "third-detail-item", 3, "queryParams"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Dobro do\u0161li!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Veliki izbor IT naslova");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing. Tristique risus nec feugiat in. Iaculis urna id volutpat lacus laoreet non. Diam maecenas sed enim ut sem viverra. Commodo quis imperdiet massa tincidunt nunc pulvinar sapien. Amet risus nullam eget felis eget nunc lobortis mattis. Sapien et ligula ullamcorper malesuada proin libero nunc consequat interdum. Vitae elementum curabitur vitae nunc. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "DETALJNIJE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Jednostavna kupovina");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris cursus mattis molestie a iaculis at erat pellentesque adipiscing. Tristique risus nec feugiat in. Iaculis urna id volutpat lacus laoreet non. Diam maecenas sed enim ut sem viverra. Commodo quis imperdiet massa tincidunt nunc pulvinar sapien. Amet risus nullam eget felis eget nunc lobortis mattis. Sapien et ligula ullamcorper malesuada proin libero nunc consequat interdum. Vitae elementum curabitur vitae nunc. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "DETALJNIJE");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Izaberite oblast");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c2));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]],
      styles: [".baner[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 400px;\n    background-image: url('Header fotografija.jpg');\n    background-position: left;\n    background-repeat: no-repeat;\n    background-size: cover;\n}\n\n.home-conteiner[_ngcontent-%COMP%] {\n    width: 100%;\n    height: auto;\n    background-color: rgb(230, 231, 232);\n}\n\n.home-content[_ngcontent-%COMP%] {\n    max-width: 1200px;\n    margin: auto;\n    background-color: white;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: center;\n}\n\n.home-content[_ngcontent-%COMP%] > h1[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 40px 30px;\n    font-size: 50px;\n    font-weight: 100;\n}\n\n.home-content[_ngcontent-%COMP%] > h2[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 40px 30px;\n    font-size: 30px;\n    font-weight: 100;\n}\n\n.home-grid-item[_ngcontent-%COMP%] {\n    width: 600px;\n    height: 450px;\n    padding: 10px 50px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    line-height: 190%;\n    background-color: white;\n    font-size: 15px;\n}\n\n.home-grid-item[_ngcontent-%COMP%] > h2[_ngcontent-%COMP%] {\n    font-weight: 400;\n    font-size: 30px;\n}\n\n.home-grid-item[_ngcontent-%COMP%] > button[_ngcontent-%COMP%] {\n    width: 130px;\n    height: 35px;\n    background-color: rgb(0, 152, 218);\n    align-self: center;\n    border: 0;\n    color: white;\n    letter-spacing: 1.5px;\n}\n\n.home-grid-item[_ngcontent-%COMP%] > button[_ngcontent-%COMP%]:hover {\n    border: 2px solid rgb(0, 152, 218);\n    color: rgb(0, 152, 218);\n    background: white;\n}\n\n.home-grid-item-inverse[_ngcontent-%COMP%] {\n    color: white !important;\n    background-color: rgb(0, 152, 218) !important;\n}\n\n.home-grid-item-inverse[_ngcontent-%COMP%] > h2[_ngcontent-%COMP%], .home-grid-item-inverse[_ngcontent-%COMP%] > p[_ngcontent-%COMP%] {\n    color: white !important;\n}\n\n.button-inverse[_ngcontent-%COMP%] {\n    color: rgb(0, 152, 218) !important;\n    background-color: white !important;\n}\n\n.button-inverse[_ngcontent-%COMP%]:hover {\n    border: 2px solid white !important;\n    color: white !important;\n    background: rgb(0, 152, 218) !important;\n}\n\n#img-1[_ngcontent-%COMP%] {\n    background-image: url('Knjiga i naocare.jpg');\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: center;\n}\n\n#img-2[_ngcontent-%COMP%] {\n    background-image: url('Kolica.jpg');\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-position: center;\n}\n\n.third-detail[_ngcontent-%COMP%] {\n    width: 100%;\n    min-height: 220px;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    justify-content: space-around;\n    padding-bottom: 50px;\n}\n\n.third-detail-item[_ngcontent-%COMP%] {\n    width: 300px;\n    min-height: 170px;\n    margin: 20px 0;\n    background-repeat: no-repeat;\n    background-position: center;\n}\n\n#third-detail-item-1[_ngcontent-%COMP%] {\n    background-size: 80%;\n    background-image: url('Java logo.jpg');\n}\n\n#third-detail-item-2[_ngcontent-%COMP%] {\n    background-size: 50%;\n    background-image: url('JS logo.jpg');\n}\n\n#third-detail-item-3[_ngcontent-%COMP%] {\n    background-size: contain;\n    background-image: url('Excel VBA logo.jpg');\n}\n\n@media screen and (max-width: 450px) {\n    #img-1[_ngcontent-%COMP%], #img-2[_ngcontent-%COMP%] {\n        height: 250px !important;\n    }\n}\n\n@media screen and (max-width: 600px) {\n    #first-detail[_ngcontent-%COMP%] {\n        background-color: #e6e7e8;\n    }\n}\n\n@media screen and (max-width: 1200px) {\n    .baner[_ngcontent-%COMP%] {\n        background-position: center;\n        height: 200px;\n    }\n    .home-content[_ngcontent-%COMP%] > h1[_ngcontent-%COMP%] {\n        width: 600px;\n    }\n    .home-content[_ngcontent-%COMP%] {\n        align-items: center;\n        max-width: 600px;\n    }\n    .home-grid-item[_ngcontent-%COMP%] {\n        padding: 10px 25px;\n    }\n    .home-grid-item[_ngcontent-%COMP%] > h2[_ngcontent-%COMP%] {\n        font-size: 26px;\n    }\n    .home-grid-item[_ngcontent-%COMP%] > p[_ngcontent-%COMP%] {\n        display: -webkit-box;\n        max-height: 51%;\n        overflow: hidden;\n        -webkit-line-clamp: 8;\n        -webkit-box-orient: vertical;\n        text-overflow: ellipsis;\n    }\n    .home-grid-item[_ngcontent-%COMP%] > button[_ngcontent-%COMP%] {\n        align-self: flex-start;\n    }\n    #img-1[_ngcontent-%COMP%] {\n        order: 1;\n    }\n    #img-2[_ngcontent-%COMP%] {\n        order: 3;\n    }\n    #first-detail[_ngcontent-%COMP%] {\n        order: 2;\n    }\n    #second-detail[_ngcontent-%COMP%] {\n        order: 4;\n    }\n    .home-content[_ngcontent-%COMP%] > h2[_ngcontent-%COMP%] {\n        order: 5;\n    }\n    .third-detail[_ngcontent-%COMP%] {\n        order: 6;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLCtDQUFtRDtJQUNuRCx5QkFBeUI7SUFDekIsNEJBQTRCO0lBQzVCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw2QkFBNkI7SUFDN0IsaUJBQWlCO0lBQ2pCLHVCQUF1QjtJQUN2QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGtDQUFrQztJQUNsQyxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFlBQVk7SUFDWixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2Qiw2Q0FBNkM7QUFDakQ7O0FBRUE7O0lBRUksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksa0NBQWtDO0lBQ2xDLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLGtDQUFrQztJQUNsQyx1QkFBdUI7SUFDdkIsdUNBQXVDO0FBQzNDOztBQUVBO0lBQ0ksNkNBQWlEO0lBQ2pELDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksbUNBQXVDO0lBQ3ZDLDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZiw2QkFBNkI7SUFDN0Isb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsNEJBQTRCO0lBQzVCLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixzQ0FBMEM7QUFDOUM7O0FBRUE7SUFDSSxvQkFBb0I7SUFDcEIsb0NBQXdDO0FBQzVDOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLDJDQUErQztBQUNuRDs7QUFFQTtJQUNJOztRQUVJLHdCQUF3QjtJQUM1QjtBQUNKOztBQUVBO0lBQ0k7UUFDSSx5QkFBeUI7SUFDN0I7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksMkJBQTJCO1FBQzNCLGFBQWE7SUFDakI7SUFDQTtRQUNJLFlBQVk7SUFDaEI7SUFDQTtRQUNJLG1CQUFtQjtRQUNuQixnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksb0JBQW9CO1FBQ3BCLGVBQWU7UUFDZixnQkFBZ0I7UUFDaEIscUJBQXFCO1FBQ3JCLDRCQUE0QjtRQUM1Qix1QkFBdUI7SUFDM0I7SUFDQTtRQUNJLHNCQUFzQjtJQUMxQjtJQUNBO1FBQ0ksUUFBUTtJQUNaO0lBQ0E7UUFDSSxRQUFRO0lBQ1o7SUFDQTtRQUNJLFFBQVE7SUFDWjtJQUNBO1FBQ0ksUUFBUTtJQUNaO0lBQ0E7UUFDSSxRQUFRO0lBQ1o7SUFDQTtRQUNJLFFBQVE7SUFDWjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFuZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNDAwcHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaW1nL0hlYWRlciBmb3RvZ3JhZmlqYS5qcGdcIik7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5ob21lLWNvbnRlaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzAsIDIzMSwgMjMyKTtcbn1cblxuLmhvbWUtY29udGVudCB7XG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5ob21lLWNvbnRlbnQ+aDEge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDQwcHggMzBweDtcbiAgICBmb250LXNpemU6IDUwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcbn1cblxuLmhvbWUtY29udGVudD5oMiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogNDBweCAzMHB4O1xuICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICBmb250LXdlaWdodDogMTAwO1xufVxuXG4uaG9tZS1ncmlkLWl0ZW0ge1xuICAgIHdpZHRoOiA2MDBweDtcbiAgICBoZWlnaHQ6IDQ1MHB4O1xuICAgIHBhZGRpbmc6IDEwcHggNTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgbGluZS1oZWlnaHQ6IDE5MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4uaG9tZS1ncmlkLWl0ZW0+aDIge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAzMHB4O1xufVxuXG4uaG9tZS1ncmlkLWl0ZW0+YnV0dG9uIHtcbiAgICB3aWR0aDogMTMwcHg7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAxNTIsIDIxOCk7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIGJvcmRlcjogMDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDEuNXB4O1xufVxuXG4uaG9tZS1ncmlkLWl0ZW0+YnV0dG9uOmhvdmVyIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMCwgMTUyLCAyMTgpO1xuICAgIGNvbG9yOiByZ2IoMCwgMTUyLCAyMTgpO1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xufVxuXG4uaG9tZS1ncmlkLWl0ZW0taW52ZXJzZSB7XG4gICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDE1MiwgMjE4KSAhaW1wb3J0YW50O1xufVxuXG4uaG9tZS1ncmlkLWl0ZW0taW52ZXJzZT5oMixcbi5ob21lLWdyaWQtaXRlbS1pbnZlcnNlPnAge1xuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4uYnV0dG9uLWludmVyc2Uge1xuICAgIGNvbG9yOiByZ2IoMCwgMTUyLCAyMTgpICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuLmJ1dHRvbi1pbnZlcnNlOmhvdmVyIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZSAhaW1wb3J0YW50O1xuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQ6IHJnYigwLCAxNTIsIDIxOCkgIWltcG9ydGFudDtcbn1cblxuI2ltZy0xIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJpbWcvS25qaWdhIGkgbmFvY2FyZS5qcGdcIik7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cblxuI2ltZy0yIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJpbWcvS29saWNhLmpwZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuXG4udGhpcmQtZGV0YWlsIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiAyMjBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xufVxuXG4udGhpcmQtZGV0YWlsLWl0ZW0ge1xuICAgIHdpZHRoOiAzMDBweDtcbiAgICBtaW4taGVpZ2h0OiAxNzBweDtcbiAgICBtYXJnaW46IDIwcHggMDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cblxuI3RoaXJkLWRldGFpbC1pdGVtLTEge1xuICAgIGJhY2tncm91bmQtc2l6ZTogODAlO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImltZy9KYXZhIGxvZ28uanBnXCIpO1xufVxuXG4jdGhpcmQtZGV0YWlsLWl0ZW0tMiB7XG4gICAgYmFja2dyb3VuZC1zaXplOiA1MCU7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaW1nL0pTIGxvZ28uanBnXCIpO1xufVxuXG4jdGhpcmQtZGV0YWlsLWl0ZW0tMyB7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImltZy9FeGNlbCBWQkEgbG9nby5qcGdcIik7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XG4gICAgI2ltZy0xLFxuICAgICNpbWctMiB7XG4gICAgICAgIGhlaWdodDogMjUwcHggIWltcG9ydGFudDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgI2ZpcnN0LWRldGFpbCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlNmU3ZTg7XG4gICAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgICAuYmFuZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgfVxuICAgIC5ob21lLWNvbnRlbnQ+aDEge1xuICAgICAgICB3aWR0aDogNjAwcHg7XG4gICAgfVxuICAgIC5ob21lLWNvbnRlbnQge1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgIH1cbiAgICAuaG9tZS1ncmlkLWl0ZW0ge1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDI1cHg7XG4gICAgfVxuICAgIC5ob21lLWdyaWQtaXRlbT5oMiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICB9XG4gICAgLmhvbWUtZ3JpZC1pdGVtPnAge1xuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgICAgbWF4LWhlaWdodDogNTElO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDg7XG4gICAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIH1cbiAgICAuaG9tZS1ncmlkLWl0ZW0+YnV0dG9uIHtcbiAgICAgICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgICB9XG4gICAgI2ltZy0xIHtcbiAgICAgICAgb3JkZXI6IDE7XG4gICAgfVxuICAgICNpbWctMiB7XG4gICAgICAgIG9yZGVyOiAzO1xuICAgIH1cbiAgICAjZmlyc3QtZGV0YWlsIHtcbiAgICAgICAgb3JkZXI6IDI7XG4gICAgfVxuICAgICNzZWNvbmQtZGV0YWlsIHtcbiAgICAgICAgb3JkZXI6IDQ7XG4gICAgfVxuICAgIC5ob21lLWNvbnRlbnQ+aDIge1xuICAgICAgICBvcmRlcjogNTtcbiAgICB9XG4gICAgLnRoaXJkLWRldGFpbCB7XG4gICAgICAgIG9yZGVyOiA2O1xuICAgIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/product-item/product-item.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/product-item/product-item.component.ts ***!
    \********************************************************/

  /*! exports provided: ProductItemComponent */

  /***/
  function srcAppProductItemProductItemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductItemComponent", function () {
      return ProductItemComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../services/cart.service */
    "./src/app/services/cart.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ProductItemComponent_div_33_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "ISBN");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Oblast");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Jezik");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r77.book.ISBN);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r77.book.Oblast);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r77.book.Jezik);
      }
    }

    function ProductItemComponent_p_34_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r78.book.Opis);
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "nav-selection-selected": a0
      };
    };

    var ProductItemComponent = /*#__PURE__*/function () {
      function ProductItemComponent(cartService) {
        _classCallCheck(this, ProductItemComponent);

        this.cartService = cartService;
        this.tabSelected = 1;
        this.authors = [];
        this.onCloseDetailView = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(ProductItemComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.book["Autor 1"]) this.authors.push(this.book["Autor 1"]);
          if (this.book["Autor 2"]) this.authors.push(this.book["Autor 2"]);
          if (this.book["Autor 3"]) this.authors.push(this.book["Autor 3"]);
        }
      }, {
        key: "onClick",
        value: function onClick(e) {
          if (e.target.classList.contains('can-close') || e.target.tagName === "APP-PRODUCT-ITEM") this.onCloseDetailView.emit();
        }
      }, {
        key: "addToCart",
        value: function addToCart() {
          this.cartService.addItem(this.book.ISBN);
        }
      }]);

      return ProductItemComponent;
    }();

    ProductItemComponent.ɵfac = function ProductItemComponent_Factory(t) {
      return new (t || ProductItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"]));
    };

    ProductItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ProductItemComponent,
      selectors: [["app-product-item"]],
      hostBindings: function ProductItemComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductItemComponent_click_HostBindingHandler($event) {
            return ctx.onClick($event);
          });
        }
      },
      inputs: {
        book: "book"
      },
      outputs: {
        onCloseDetailView: "onCloseDetailView"
      },
      decls: 35,
      vars: 16,
      consts: [[1, "product-item"], [1, "product-item-header"], [1, "can-close"], [1, "product-item-data"], [1, "product-item-data-core"], [1, "product-img-wrapper"], ["alt", "asd", 1, "product-img", 3, "src"], [1, "product-data-wrapper"], [1, "title-description"], [1, "title"], [1, "product-buy-wrapper"], [1, "product-price"], [1, "product-price-value"], [1, "product-price-currency"], [1, "buy-product", 3, "click"], [1, "buy-product-icon"], [1, "product-item-data-more"], [1, "nav-selection", 3, "ngClass", "click"], [1, "nav-line"], ["class", "product-item-data-more-content", 4, "ngIf"], ["class", "product-item-data-more-description", 4, "ngIf"], [1, "product-item-data-more-content"], [2, "background-color", "rgb(230, 231, 232)"], [1, "product-item-data-label"], [1, "product-item-data-value"], [1, "product-item-data-more-description"]],
      template: function ProductItemComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Podaci o knjizi");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h2", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h3", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "RSD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductItemComponent_Template_div_click_23_listener() {
            return ctx.addToCart();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Stavi u korpu ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "nav");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductItemComponent_Template_div_click_28_listener() {
            return ctx.tabSelected = 1;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Detalji");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductItemComponent_Template_div_click_30_listener() {
            return ctx.tabSelected = 2;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Opis");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, ProductItemComponent_div_33_Template, 16, 3, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, ProductItemComponent_p_34_Template, 2, 1, "p", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/img/", ctx.book.Korice, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.authors.join(", "));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.book.Naslov);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.book["Godina izdanja"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](20, 9, ctx.book.Cena, ".2"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c0, ctx.tabSelected === 1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c0, ctx.tabSelected === 2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tabSelected === 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.tabSelected === 2);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DecimalPipe"]],
      styles: ["[_nghost-%COMP%] {\n    width: 98%;\n    min-height: 250px;\n    padding: 30px 10px 20px 10px;\n    display: grid;\n    grid-template-columns: minmax(80px, 140px) auto 180px;\n    grid-template-rows: auto auto auto;\n    -moz-column-gap: 10px;\n         column-gap: 10px;\n    row-gap: 10px;\n}\n\n.product-img-wrapper[_ngcontent-%COMP%] {\n    grid-column: 1 / 2;\n    grid-row: 1/4;\n}\n\n.product-img[_ngcontent-%COMP%] {\n    max-width: 90%;\n    margin: 0 5%;\n}\n\n.product-data-wrapper[_ngcontent-%COMP%] {\n    grid-column-start: 2;\n    grid-row: 1;\n    min-height: 80px;\n}\n\n.product-description-wrapper[_ngcontent-%COMP%] {\n    grid-column: 2/3;\n    grid-row: 2/4;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: flex-start;\n    max-width: 750px;\n}\n\n.product-buy-wrapper[_ngcontent-%COMP%] {\n    grid-column: 3 / 4;\n    grid-row: 1 / 4;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: flex-end;\n}\n\n.title[_ngcontent-%COMP%] {\n    font-weight: 400;\n    margin-bottom: 15px;\n    font-size: 1.3em;\n}\n\n.title-description[_ngcontent-%COMP%] {\n    margin-bottom: 15px;\n    font-weight: 300;\n    color: gray;\n    font-size: 1.1em;\n}\n\n.product-description[_ngcontent-%COMP%] {\n    line-height: 150%;\n    margin-bottom: 20px;\n    color: rgba(0, 0, 0, 0.8);\n    font-size: 0.95em;\n    max-height: 3em;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: -webkit-box;\n    -webkit-line-clamp: 2;\n    -webkit-box-orient: vertical;\n}\n\n.product-description[_ngcontent-%COMP%]::after {\n    content: \"...\";\n}\n\n.show-details[_ngcontent-%COMP%] {\n    width: 135px;\n    height: 35px;\n    color: rgba(0, 0, 0, 0.6);\n    border: 1px solid rgba(0, 0, 0, 0.6);\n    margin-bottom: 10px;\n    display: flex;\n    justify-content: flex-start;\n    flex-direction: row;\n    align-items: center;\n    font-size: 18px;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    cursor: pointer;\n    background-color: white;\n}\n\n.show-details-icon[_ngcontent-%COMP%] {\n    width: 25px;\n    height: 25px;\n    background-image: url('Detaljnije.svg');\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 80%;\n    margin: 0 12px;\n    border-radius: 30px;\n    background-color: white;\n}\n\n.buy-product[_ngcontent-%COMP%] {\n    width: 150px;\n    height: 35px;\n    color: rgba(0, 0, 0, 0.6);\n    border: 1px solid rgba(0, 0, 0, 0.6);\n    margin-bottom: 10px;\n    display: flex;\n    justify-content: flex-start;\n    flex-direction: row;\n    align-items: center;\n    font-size: 17px;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    cursor: pointer;\n    background-color: white;\n}\n\n.buy-product-icon[_ngcontent-%COMP%] {\n    width: 25px;\n    height: 25px;\n    background-image: url('Korpa.svg');\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 80%;\n    margin: 0 8px;\n    border-radius: 30px;\n    background-color: white !important;\n}\n\n.product-price[_ngcontent-%COMP%] {\n    width: 150px;\n    height: 30px;\n    display: flex;\n    flex-wrap: nowrap;\n    align-items: baseline;\n    margin-bottom: 40px;\n}\n\n.product-price-value[_ngcontent-%COMP%] {\n    font-size: 1.6em;\n    margin-right: 10px;\n}\n\n.product-price-currency[_ngcontent-%COMP%] {\n    font-size: 1.1em;\n    color: gray;\n}\n\n@media screen and (max-width: 800px) {\n    .product-img-wrapper[_ngcontent-%COMP%] {\n        grid-row: 1/2;\n    }\n    .title[_ngcontent-%COMP%] {\n        font-size: 1.2em;\n        font-weight: 400;\n    }\n    .title-description[_ngcontent-%COMP%] {\n        font-size: 1em;\n    }\n    .product-description[_ngcontent-%COMP%] {\n        font-size: 0.8em;\n    }\n    .product-data-wrapper[_ngcontent-%COMP%] {\n        grid-column: 2/4;\n    }\n    .product-description-wrapper[_ngcontent-%COMP%] {\n        grid-column: 1/4;\n        grid-row: 2/3;\n    }\n    .product-buy-wrapper[_ngcontent-%COMP%] {\n        grid-row: 3/4;\n    }\n    .product-price[_ngcontent-%COMP%] {\n        margin-bottom: 10px;\n    }\n    .product-description[_ngcontent-%COMP%] {\n        max-height: 4.4em;\n        -webkit-line-clamp: 3;\n    }\n}\n\n@media screen and (max-width: 400px) {\n    .product-description[_ngcontent-%COMP%] {\n        max-height: 7.5em;\n        -webkit-line-clamp: 5;\n    }\n}\n\n[_nghost-%COMP%] {\n    position: fixed;\n    top: 0;\n    width: 100vw;\n    height: 100vh;\n    display: flex;\n    background-color: rgba(230, 231, 232, 0.7);\n    z-index: 10001;\n    overflow: hidden;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.product-item[_ngcontent-%COMP%] {\n    width: 1100px;\n    height: auto;\n    background-color: white;\n    border: 1px solid black;\n}\n\n.product-item-header[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 50px;\n    background-color: #0098da;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n\n.product-item-header[_ngcontent-%COMP%] > h1[_ngcontent-%COMP%] {\n    font-size: 1.4em;\n    font-weight: 400;\n    color: white;\n    margin-left: 15px;\n}\n\n.product-item-header[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] {\n    width: 40px;\n    height: 40px;\n    margin-right: 5px;\n    background-image: url('Beli X.svg');\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 90%;\n    cursor: pointer;\n}\n\n.product-item-data[_ngcontent-%COMP%] {\n    width: 100%;\n    min-height: 200px;\n    padding: 0 5px;\n}\n\n.product-item-data-core[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 100%;\n    display: grid;\n    padding: 10px 10px 10px 5px;\n    grid-template-columns: minmax(90px, 140px) auto 180px;\n    grid-template-rows: auto auto;\n    -moz-column-gap: 10px;\n         column-gap: 10px;\n    row-gap: 10px;\n}\n\n.product-item-data-more[_ngcontent-%COMP%] {\n    height: 200px;\n    width: 100%;\n    padding: 10px;\n    display: flex;\n    flex-direction: column;\n}\n\n.product-item-data-more[_ngcontent-%COMP%] > nav[_ngcontent-%COMP%] {\n    height: 35px;\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n}\n\n.nav-selection[_ngcontent-%COMP%] {\n    width: 100px;\n    height: 30px;\n    background-color: white;\n    display: flex;\n    align-items: center;\n    padding-left: 10px;\n    padding-top: 4px;\n    cursor: pointer;\n    margin-right: 10px;\n    font-size: 1.2em;\n}\n\n.nav-selection-selected[_ngcontent-%COMP%] {\n    background-color: #E6F5FD;\n    color: black;\n}\n\n.nav-line[_ngcontent-%COMP%] {\n    min-width: 100%;\n    height: 5px;\n    background-color: #E6F5FD;\n}\n\n.product-item-data-more-content[_ngcontent-%COMP%] {\n    height: 140px;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    padding: 5px;\n}\n\n.product-item-data-more-content[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 25px;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n}\n\n.product-item-data-label[_ngcontent-%COMP%] {\n    width: 70px;\n    color: gray;\n    margin-left: 20px;\n    font-size: 18px;\n    height: 18px;\n}\n\n.product-item-data-value[_ngcontent-%COMP%] {\n    color: black;\n    margin-left: 20px;\n    font-size: 18px;\n    height: 18px;\n}\n\n.product-item-data-more-description[_ngcontent-%COMP%] {\n    margin: 20px 10px;\n    font-size: 1.05em;\n    color: black;\n    line-height: 1.4em;\n    overflow-y: scroll;\n}\n\n@media screen and (max-width: 800px) {\n    .product-buy-wrapper[_ngcontent-%COMP%] {\n        grid-row: 2/3;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoL3NlYXJjaC1wcm9kdWN0LWl0ZW0vc2VhcmNoLXByb2R1Y3QtaXRlbS5jb21wb25lbnQuY3NzIiwic3JjL2FwcC9wcm9kdWN0LWl0ZW0vcHJvZHVjdC1pdGVtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLDRCQUE0QjtJQUM1QixhQUFhO0lBQ2IscURBQXFEO0lBQ3JELGtDQUFrQztJQUNsQyxxQkFBZ0I7U0FBaEIsZ0JBQWdCO0lBQ2hCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsOEJBQThCO0lBQzlCLHVCQUF1QjtJQUN2QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLG9DQUFvQztJQUNwQyxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLDJCQUEyQjtJQUMzQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZix5QkFBaUI7T0FBakIsc0JBQWlCO1FBQWpCLHFCQUFpQjtZQUFqQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osdUNBQTJDO0lBQzNDLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsb0JBQW9CO0lBQ3BCLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsb0NBQW9DO0lBQ3BDLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLHlCQUFpQjtPQUFqQixzQkFBaUI7UUFBakIscUJBQWlCO1lBQWpCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixrQ0FBc0M7SUFDdEMsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QixvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGFBQWE7SUFDYixpQkFBaUI7SUFDakIscUJBQXFCO0lBQ3JCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztBQUNmOztBQUVBO0lBQ0k7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxnQkFBZ0I7UUFDaEIsZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxjQUFjO0lBQ2xCO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksZ0JBQWdCO1FBQ2hCLGFBQWE7SUFDakI7SUFDQTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0ksaUJBQWlCO1FBQ2pCLHFCQUFxQjtJQUN6QjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxpQkFBaUI7UUFDakIscUJBQXFCO0lBQ3pCO0FBQ0o7O0FDNUxBO0lBQ0ksZUFBZTtJQUNmLE1BQU07SUFDTixZQUFZO0lBQ1osYUFBYTtJQUNiLGFBQWE7SUFDYiwwQ0FBMEM7SUFDMUMsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsbUNBQXVDO0lBQ3ZDLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsb0JBQW9CO0lBQ3BCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IscURBQXFEO0lBQ3JELDZCQUE2QjtJQUM3QixxQkFBZ0I7U0FBaEIsZ0JBQWdCO0lBQ2hCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLGFBQWE7SUFDYixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixXQUFXO0lBQ1gseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDZCQUE2QjtJQUM3QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSTtRQUNJLGFBQWE7SUFDakI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QtaXRlbS9wcm9kdWN0LWl0ZW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICB3aWR0aDogOTglO1xuICAgIG1pbi1oZWlnaHQ6IDI1MHB4O1xuICAgIHBhZGRpbmc6IDMwcHggMTBweCAyMHB4IDEwcHg7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCg4MHB4LCAxNDBweCkgYXV0byAxODBweDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0byBhdXRvO1xuICAgIGNvbHVtbi1nYXA6IDEwcHg7XG4gICAgcm93LWdhcDogMTBweDtcbn1cblxuLnByb2R1Y3QtaW1nLXdyYXBwZXIge1xuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcbiAgICBncmlkLXJvdzogMS80O1xufVxuXG4ucHJvZHVjdC1pbWcge1xuICAgIG1heC13aWR0aDogOTAlO1xuICAgIG1hcmdpbjogMCA1JTtcbn1cblxuLnByb2R1Y3QtZGF0YS13cmFwcGVyIHtcbiAgICBncmlkLWNvbHVtbi1zdGFydDogMjtcbiAgICBncmlkLXJvdzogMTtcbiAgICBtaW4taGVpZ2h0OiA4MHB4O1xufVxuXG4ucHJvZHVjdC1kZXNjcmlwdGlvbi13cmFwcGVyIHtcbiAgICBncmlkLWNvbHVtbjogMi8zO1xuICAgIGdyaWQtcm93OiAyLzQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBtYXgtd2lkdGg6IDc1MHB4O1xufVxuXG4ucHJvZHVjdC1idXktd3JhcHBlciB7XG4gICAgZ3JpZC1jb2x1bW46IDMgLyA0O1xuICAgIGdyaWQtcm93OiAxIC8gNDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xufVxuXG4udGl0bGUge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICBmb250LXNpemU6IDEuM2VtO1xufVxuXG4udGl0bGUtZGVzY3JpcHRpb24ge1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBjb2xvcjogZ3JheTtcbiAgICBmb250LXNpemU6IDEuMWVtO1xufVxuXG4ucHJvZHVjdC1kZXNjcmlwdGlvbiB7XG4gICAgbGluZS1oZWlnaHQ6IDE1MCU7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xuICAgIGZvbnQtc2l6ZTogMC45NWVtO1xuICAgIG1heC1oZWlnaHQ6IDNlbTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIC13ZWJraXQtbGluZS1jbGFtcDogMjtcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xufVxuXG4ucHJvZHVjdC1kZXNjcmlwdGlvbjo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiLi4uXCI7XG59XG5cbi5zaG93LWRldGFpbHMge1xuICAgIHdpZHRoOiAxMzVweDtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuNik7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLnNob3ctZGV0YWlscy1pY29uIHtcbiAgICB3aWR0aDogMjVweDtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaW1nL0RldGFsam5pamUuc3ZnXCIpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogODAlO1xuICAgIG1hcmdpbjogMCAxMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5idXktcHJvZHVjdCB7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGhlaWdodDogMzVweDtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4uYnV5LXByb2R1Y3QtaWNvbiB7XG4gICAgd2lkdGg6IDI1cHg7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImltZy9Lb3JwYS5zdmdcIik7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiA4MCU7XG4gICAgbWFyZ2luOiAwIDhweDtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG59XG5cbi5wcm9kdWN0LXByaWNlIHtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG5cbi5wcm9kdWN0LXByaWNlLXZhbHVlIHtcbiAgICBmb250LXNpemU6IDEuNmVtO1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLnByb2R1Y3QtcHJpY2UtY3VycmVuY3kge1xuICAgIGZvbnQtc2l6ZTogMS4xZW07XG4gICAgY29sb3I6IGdyYXk7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gICAgLnByb2R1Y3QtaW1nLXdyYXBwZXIge1xuICAgICAgICBncmlkLXJvdzogMS8yO1xuICAgIH1cbiAgICAudGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDEuMmVtO1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgIH1cbiAgICAudGl0bGUtZGVzY3JpcHRpb24ge1xuICAgICAgICBmb250LXNpemU6IDFlbTtcbiAgICB9XG4gICAgLnByb2R1Y3QtZGVzY3JpcHRpb24ge1xuICAgICAgICBmb250LXNpemU6IDAuOGVtO1xuICAgIH1cbiAgICAucHJvZHVjdC1kYXRhLXdyYXBwZXIge1xuICAgICAgICBncmlkLWNvbHVtbjogMi80O1xuICAgIH1cbiAgICAucHJvZHVjdC1kZXNjcmlwdGlvbi13cmFwcGVyIHtcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEvNDtcbiAgICAgICAgZ3JpZC1yb3c6IDIvMztcbiAgICB9XG4gICAgLnByb2R1Y3QtYnV5LXdyYXBwZXIge1xuICAgICAgICBncmlkLXJvdzogMy80O1xuICAgIH1cbiAgICAucHJvZHVjdC1wcmljZSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgfVxuICAgIC5wcm9kdWN0LWRlc2NyaXB0aW9uIHtcbiAgICAgICAgbWF4LWhlaWdodDogNC40ZW07XG4gICAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogMztcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XG4gICAgLnByb2R1Y3QtZGVzY3JpcHRpb24ge1xuICAgICAgICBtYXgtaGVpZ2h0OiA3LjVlbTtcbiAgICAgICAgLXdlYmtpdC1saW5lLWNsYW1wOiA1O1xuICAgIH1cbn0iLCJAaW1wb3J0IFwiLi4vc2VhcmNoL3NlYXJjaC1wcm9kdWN0LWl0ZW0vc2VhcmNoLXByb2R1Y3QtaXRlbS5jb21wb25lbnQuY3NzXCI7XG46aG9zdCB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjMwLCAyMzEsIDIzMiwgMC43KTtcbiAgICB6LWluZGV4OiAxMDAwMTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnByb2R1Y3QtaXRlbSB7XG4gICAgd2lkdGg6IDExMDBweDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG59XG5cbi5wcm9kdWN0LWl0ZW0taGVhZGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwOThkYTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4ucHJvZHVjdC1pdGVtLWhlYWRlcj5oMSB7XG4gICAgZm9udC1zaXplOiAxLjRlbTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcbn1cblxuLnByb2R1Y3QtaXRlbS1oZWFkZXI+ZGl2IHtcbiAgICB3aWR0aDogNDBweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaW1nL0JlbGkgWC5zdmdcIik7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiA5MCU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ucHJvZHVjdC1pdGVtLWRhdGEge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDIwMHB4O1xuICAgIHBhZGRpbmc6IDAgNXB4O1xufVxuXG4ucHJvZHVjdC1pdGVtLWRhdGEtY29yZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgcGFkZGluZzogMTBweCAxMHB4IDEwcHggNXB4O1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDkwcHgsIDE0MHB4KSBhdXRvIDE4MHB4O1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvO1xuICAgIGNvbHVtbi1nYXA6IDEwcHg7XG4gICAgcm93LWdhcDogMTBweDtcbn1cblxuLnByb2R1Y3QtaXRlbS1kYXRhLW1vcmUge1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5wcm9kdWN0LWl0ZW0tZGF0YS1tb3JlPm5hdiB7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5uYXYtc2VsZWN0aW9uIHtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgcGFkZGluZy10b3A6IDRweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG59XG5cbi5uYXYtc2VsZWN0aW9uLXNlbGVjdGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTZGNUZEO1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuLm5hdi1saW5lIHtcbiAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA1cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U2RjVGRDtcbn1cblxuLnByb2R1Y3QtaXRlbS1kYXRhLW1vcmUtY29udGVudCB7XG4gICAgaGVpZ2h0OiAxNDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgcGFkZGluZzogNXB4O1xufVxuXG4ucHJvZHVjdC1pdGVtLWRhdGEtbW9yZS1jb250ZW50PmRpdiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucHJvZHVjdC1pdGVtLWRhdGEtbGFiZWwge1xuICAgIHdpZHRoOiA3MHB4O1xuICAgIGNvbG9yOiBncmF5O1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBoZWlnaHQ6IDE4cHg7XG59XG5cbi5wcm9kdWN0LWl0ZW0tZGF0YS12YWx1ZSB7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBoZWlnaHQ6IDE4cHg7XG59XG5cbi5wcm9kdWN0LWl0ZW0tZGF0YS1tb3JlLWRlc2NyaXB0aW9uIHtcbiAgICBtYXJnaW46IDIwcHggMTBweDtcbiAgICBmb250LXNpemU6IDEuMDVlbTtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgbGluZS1oZWlnaHQ6IDEuNGVtO1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgICAucHJvZHVjdC1idXktd3JhcHBlciB7XG4gICAgICAgIGdyaWQtcm93OiAyLzM7XG4gICAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-product-item',
          templateUrl: './product-item.component.html',
          styleUrls: ['./product-item.component.css']
        }]
      }], function () {
        return [{
          type: _services_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"]
        }];
      }, {
        book: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        onCloseDetailView: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onClick: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['click', ['$event']]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/search/autocomplete-select/autocomplete-select.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/search/autocomplete-select/autocomplete-select.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: AutocompleteSelectComponent */

  /***/
  function srcAppSearchAutocompleteSelectAutocompleteSelectComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AutocompleteSelectComponent", function () {
      return AutocompleteSelectComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _services_component_helper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/component-helper.service */
    "./src/app/services/component-helper.service.ts");
    /* harmony import */


    var src_app_services_book_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/book.service */
    "./src/app/services/book.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function AutocompleteSelectComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AutocompleteSelectComponent_div_5_Template_div_click_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r60);

          var ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r59.applySelectText($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var title_r58 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](title_r58);
      }
    }

    function AutocompleteSelectComponent_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No results...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a1) {
      return {
        "select-list": true,
        "select-list-hidden": a1
      };
    };

    var AutocompleteSelectComponent = /*#__PURE__*/function () {
      function AutocompleteSelectComponent(helper, bookService, cd) {
        _classCallCheck(this, AutocompleteSelectComponent);

        this.helper = helper;
        this.bookService = bookService;
        this.cd = cd;
        this.textChangesListener = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.lastSelection = false;
        this.hiddenList = true;
        this.titles = [];
        this.compID = helper.getUniqueID();
      }

      _createClass(AutocompleteSelectComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.subscription = this.textChangesListener.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(500)).subscribe(function (searchString) {
            _this5.titles = _this5.bookService.searchTitles(searchString);

            _this5.cd.detectChanges();

            if (!_this5.lastSelection) _this5.hiddenList = false;
            _this5.lastSelection = false;
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscription.unsubscribe();
        }
      }, {
        key: "showHideList",
        value: function showHideList() {
          if (this.hiddenList) this.hiddenList = false;else this.hiddenList = true;
        }
      }, {
        key: "checkToHide",
        value: function checkToHide(event) {
          if (!this.hiddenList) if (!this.helper.isDescendantOfById(event.target, this.compID.toString())) this.hiddenList = true;
        }
      }, {
        key: "changeSearchText",
        value: function changeSearchText(reset) {
          if (!reset) this.textChangesListener.next(this.filter.title);else {
            this.filter.title = "";
            this.textChangesListener.next(this.filter.title);
          }
        }
      }, {
        key: "applySelectText",
        value: function applySelectText(event) {
          this.filter.title = event.target.innerHTML;
          this.changeSearchText(false);
          this.lastSelection = true;
          this.showHideList();
        }
      }]);

      return AutocompleteSelectComponent;
    }();

    AutocompleteSelectComponent.ɵfac = function AutocompleteSelectComponent_Factory(t) {
      return new (t || AutocompleteSelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_component_helper_service__WEBPACK_IMPORTED_MODULE_3__["ComponentHelperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_book_service__WEBPACK_IMPORTED_MODULE_4__["BookService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
    };

    AutocompleteSelectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AutocompleteSelectComponent,
      selectors: [["app-autocomplete-select"]],
      inputs: {
        filter: "filter"
      },
      decls: 7,
      vars: 7,
      consts: [[1, "autocomplete-box", 3, "id", "click"], [1, "input"], ["id", "input-text", 1, "input-text", 3, "ngModel", "keyup", "ngModelChange", "click"], [1, "clear-text", 3, "click"], ["id", "select-list", 3, "ngClass"], ["class", "select-list-item", 3, "click", 4, "ngFor", "ngForOf"], ["class", "select-list-item select-list-item-empty", 4, "ngIf"], [1, "select-list-item", 3, "click"], [1, "select-list-item", "select-list-item-empty"]],
      template: function AutocompleteSelectComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AutocompleteSelectComponent_Template_div_click_0_listener($event) {
            return ctx.checkToHide($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function AutocompleteSelectComponent_Template_input_keyup_2_listener() {
            return ctx.changeSearchText(false);
          })("ngModelChange", function AutocompleteSelectComponent_Template_input_ngModelChange_2_listener($event) {
            return ctx.filter.title = $event;
          })("click", function AutocompleteSelectComponent_Template_input_click_2_listener() {
            return ctx.changeSearchText(false);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AutocompleteSelectComponent_Template_div_click_3_listener() {
            return ctx.changeSearchText(true);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AutocompleteSelectComponent_div_5_Template, 2, 1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AutocompleteSelectComponent_div_6_Template, 2, 0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", ctx.compID);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.filter.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.hiddenList));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.titles);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.titles.length === 0);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]],
      styles: [".autocomplete-box[_ngcontent-%COMP%] {\n    height: 30px;\n    width: 210px;\n    overflow: visible;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: space-between;\n}\n\n.input[_ngcontent-%COMP%] {\n    height: 30px;\n    width: 210px;\n    background-color: white;\n    border: 1px solid black;\n    display: flex;\n}\n\n.input-text[_ngcontent-%COMP%] {\n    max-height: 100%;\n    width: 210px;\n    display: flex;\n    align-items: center;\n    padding: 2px 0 0 5px;\n    -webkit-user-select: unset;\n       -moz-user-select: unset;\n        -ms-user-select: unset;\n            user-select: unset;\n    overflow: scroll;\n    text-overflow: clip;\n    white-space: nowrap;\n    border: 0;\n    outline: 0;\n    font-size: 14px;\n}\n\n.input-text[_ngcontent-%COMP%]::-webkit-scrollbar {\n    display: none;\n}\n\n.clear-text[_ngcontent-%COMP%] {\n    height: 100%;\n    width: 30px;\n    background-image: url('Brisanje sadrzaja text box-a.svg');\n    background-size: 70%;\n    background-position: center;\n    background-repeat: no-repeat;\n    cursor: pointer;\n}\n\n.hide-list[_ngcontent-%COMP%] {\n    height: 30px;\n    width: 30px;\n    background-image: url('Otvaranje liste.svg');\n    background-size: 70%;\n    background-position: center;\n    background-repeat: no-repeat;\n    transition: ease 0.2s;\n    transition-property: transform;\n}\n\n.hide-list-rotate[_ngcontent-%COMP%] {\n    transform: rotate(180deg);\n}\n\n.select-list[_ngcontent-%COMP%] {\n    max-height: 100px;\n    width: 210px;\n    background-color: white;\n    border: 1px solid black;\n    border-top: 0;\n    transition-property: max-height;\n    transition: ease 0.2s;\n    display: flex;\n    flex-direction: column;\n    z-index: 1;\n    overflow-y: auto;\n}\n\n.select-list-hidden[_ngcontent-%COMP%] {\n    max-height: 0 !important;\n    border: 0 !important;\n}\n\n.select-list-item[_ngcontent-%COMP%] {\n    min-height: 20px;\n    width: 100%;\n    line-height: 100%;\n    font-size: 14px;\n    padding: 5px 0 0 5px;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n\n.select-list-item-empty[_ngcontent-%COMP%]:hover {\n    background-color: white !important;\n}\n\n.select-list-item[_ngcontent-%COMP%]:hover {\n    background-color: #E6F5FD;\n}\n\n.select-list[_ngcontent-%COMP%]::-webkit-scrollbar {\n    width: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoL2F1dG9jb21wbGV0ZS1zZWxlY3QvYXV0b2NvbXBsZXRlLXNlbGVjdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLGVBQWU7SUFDZiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIsMEJBQWtCO09BQWxCLHVCQUFrQjtRQUFsQixzQkFBa0I7WUFBbEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxVQUFVO0lBQ1YsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLHlEQUE2RDtJQUM3RCxvQkFBb0I7SUFDcEIsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QixlQUFlO0FBQ25COztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCw0Q0FBZ0Q7SUFDaEQsb0JBQW9CO0lBQ3BCLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIscUJBQXFCO0lBQ3JCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsK0JBQStCO0lBQy9CLHFCQUFxQjtJQUNyQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFVBQVU7SUFDVixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx3QkFBd0I7SUFDeEIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLG9CQUFvQjtJQUNwQix5QkFBaUI7T0FBakIsc0JBQWlCO1FBQWpCLHFCQUFpQjtZQUFqQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9zZWFyY2gvYXV0b2NvbXBsZXRlLXNlbGVjdC9hdXRvY29tcGxldGUtc2VsZWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXV0b2NvbXBsZXRlLWJveCB7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIHdpZHRoOiAyMTBweDtcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5pbnB1dCB7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIHdpZHRoOiAyMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uaW5wdXQtdGV4dCB7XG4gICAgbWF4LWhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMjEwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDJweCAwIDAgNXB4O1xuICAgIHVzZXItc2VsZWN0OiB1bnNldDtcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xuICAgIHRleHQtb3ZlcmZsb3c6IGNsaXA7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBib3JkZXI6IDA7XG4gICAgb3V0bGluZTogMDtcbiAgICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5pbnB1dC10ZXh0Ojotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLmNsZWFyLXRleHQge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMzBweDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJpbWcvQnJpc2FuamUgc2FkcnphamEgdGV4dCBib3gtYS5zdmdcIik7XG4gICAgYmFja2dyb3VuZC1zaXplOiA3MCU7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaGlkZS1saXN0IHtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaW1nL090dmFyYW5qZSBsaXN0ZS5zdmdcIik7XG4gICAgYmFja2dyb3VuZC1zaXplOiA3MCU7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgdHJhbnNpdGlvbjogZWFzZSAwLjJzO1xuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcbn1cblxuLmhpZGUtbGlzdC1yb3RhdGUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG59XG5cbi5zZWxlY3QtbGlzdCB7XG4gICAgbWF4LWhlaWdodDogMTAwcHg7XG4gICAgd2lkdGg6IDIxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIGJvcmRlci10b3A6IDA7XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogbWF4LWhlaWdodDtcbiAgICB0cmFuc2l0aW9uOiBlYXNlIDAuMnM7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHotaW5kZXg6IDE7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLnNlbGVjdC1saXN0LWhpZGRlbiB7XG4gICAgbWF4LWhlaWdodDogMCAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogMCAhaW1wb3J0YW50O1xufVxuXG4uc2VsZWN0LWxpc3QtaXRlbSB7XG4gICAgbWluLWhlaWdodDogMjBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBsaW5lLWhlaWdodDogMTAwJTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgcGFkZGluZzogNXB4IDAgMCA1cHg7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4uc2VsZWN0LWxpc3QtaXRlbS1lbXB0eTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuLnNlbGVjdC1saXN0LWl0ZW06aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNFNkY1RkQ7XG59XG5cbi5zZWxlY3QtbGlzdDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIHdpZHRoOiAxMHB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AutocompleteSelectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-autocomplete-select',
          templateUrl: './autocomplete-select.component.html',
          styleUrls: ['./autocomplete-select.component.css']
        }]
      }], function () {
        return [{
          type: _services_component_helper_service__WEBPACK_IMPORTED_MODULE_3__["ComponentHelperService"]
        }, {
          type: src_app_services_book_service__WEBPACK_IMPORTED_MODULE_4__["BookService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }];
      }, {
        filter: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/search/multi-select/multi-select.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/search/multi-select/multi-select.component.ts ***!
    \***************************************************************/

  /*! exports provided: MultiSelectComponent */

  /***/
  function srcAppSearchMultiSelectMultiSelectComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MultiSelectComponent", function () {
      return MultiSelectComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_component_helper_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/component-helper.service */
    "./src/app/services/component-helper.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function MultiSelectComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MultiSelectComponent_div_2_Template_div_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r66);

          var item_r64 = ctx.$implicit;

          var ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r65.addRemoveItem(item_r64);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r64 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r64);
      }
    }

    var _c0 = function _c0() {
      return {
        "margin-right": "4px"
      };
    };

    function MultiSelectComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r62.selectedItems.length - 2, " +");
      }
    }

    var _c1 = function _c1(a1) {
      return {
        "multi-select-list-item": true,
        "multi-select-list-item-selected": a1
      };
    };

    function MultiSelectComponent_div_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r69 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MultiSelectComponent_div_6_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r69);

          var item_r67 = ctx.$implicit;

          var ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r68.addRemoveItem(item_r67);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r67 = ctx.$implicit;

        var ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c1, ctx_r63.selectedItems.includes(item_r67)));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r67, "");
      }
    }

    var _c2 = function _c2(a0) {
      return {
        "width": a0
      };
    };

    var _c3 = function _c3(a1) {
      return {
        "multi-hide-list": true,
        "multi-hide-list-rotate": a1
      };
    };

    var _c4 = function _c4(a1, a2) {
      return {
        "multi-select-list": true,
        "multi-select-list-hidden": a1,
        "hidden-scroll-bar": a2
      };
    };

    var MultiSelectComponent = /*#__PURE__*/function () {
      function MultiSelectComponent(helper, cd) {
        _classCallCheck(this, MultiSelectComponent);

        this.helper = helper;
        this.cd = cd;
        this.items = [];
        this.selectedItems = [];
        this.hiddenList = true;
        this.transitionDone = true;
        this.compID = helper.getUniqueID();
      }

      _createClass(MultiSelectComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "showHideList",
        value: function showHideList() {
          if (this.hiddenList) this.hiddenList = false;else this.hiddenList = true;
        }
      }, {
        key: "checkToHide",
        value: function checkToHide(event) {
          if (!this.hiddenList) if (!this.helper.isDescendantOfById(event.target, this.compID.toString())) this.hiddenList = true;
        }
      }, {
        key: "addRemoveItem",
        value: function addRemoveItem(item) {
          if (this.selectedItems.includes(item)) this.selectedItems.splice(this.selectedItems.indexOf(item), 1);else this.selectedItems.push(item);
          this.cd.detectChanges();
        }
      }, {
        key: "startTransition",
        value: function startTransition() {
          this.transitionDone = false;
        }
      }, {
        key: "endTransition",
        value: function endTransition() {
          this.transitionDone = true;
        }
      }]);

      return MultiSelectComponent;
    }();

    MultiSelectComponent.ɵfac = function MultiSelectComponent_Factory(t) {
      return new (t || MultiSelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_component_helper_service__WEBPACK_IMPORTED_MODULE_1__["ComponentHelperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
    };

    MultiSelectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MultiSelectComponent,
      selectors: [["app-multi-select"]],
      inputs: {
        items: "items",
        selectedItems: "selectedItems",
        compWidth: "compWidth"
      },
      decls: 7,
      vars: 20,
      consts: [[1, "multiselect-box", 3, "id", "ngStyle", "click"], [1, "multiselect", 3, "ngStyle", "click"], ["class", "multiselect-selected-item", 4, "ngFor", "ngForOf"], ["class", "multiselect-selected-item", 4, "ngIf"], ["id", "multi-hide-list", 3, "ngClass", "click"], ["id", "multi-select-list", 3, "ngStyle", "ngClass", "transitionstart", "transitionend"], [3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "multiselect-selected-item"], [1, "multiselect-selected-item-value"], [1, "multiselect-selected-item-remove", 3, "click"], [1, "multiselect-selected-item-value", 3, "ngStyle"], [3, "ngClass", "click"]],
      template: function MultiSelectComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MultiSelectComponent_Template_div_click_0_listener($event) {
            return ctx.checkToHide($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MultiSelectComponent_Template_div_click_1_listener() {
            return ctx.showHideList();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MultiSelectComponent_div_2_Template, 4, 1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MultiSelectComponent_div_3_Template, 3, 3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MultiSelectComponent_Template_div_click_4_listener() {
            return ctx.showHideList();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("transitionstart", function MultiSelectComponent_Template_div_transitionstart_5_listener() {
            return ctx.startTransition();
          })("transitionend", function MultiSelectComponent_Template_div_transitionend_5_listener() {
            return ctx.endTransition();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MultiSelectComponent_div_6_Template, 2, 4, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", ctx.compID);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c2, ctx.compWidth + 30 + "px"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c2, ctx.compWidth + "px"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.selectedItems.slice(0, 2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedItems.length > 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c3, !ctx.hiddenList));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c2, ctx.compWidth + "px"))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](17, _c4, ctx.hiddenList, !ctx.transitionDone));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]],
      styles: [".multiselect-box[_ngcontent-%COMP%] {\n    height: 30px;\n    width: auto;\n    overflow: visible;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: flex-start;\n    cursor: pointer;\n}\n\n.multiselect[_ngcontent-%COMP%] {\n    height: 30px;\n    width: 220px;\n    background-color: white;\n    border: 1px solid black;\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n}\n\n.multi-hide-list[_ngcontent-%COMP%] {\n    height: 30px;\n    width: 30px;\n    background-image: url('Otvaranje liste.svg');\n    background-size: 70%;\n    background-position: center;\n    background-repeat: no-repeat;\n    transition: ease 0.2s;\n    transition-property: transform;\n    cursor: pointer;\n}\n\n.multi-hide-list-rotate[_ngcontent-%COMP%] {\n    transform: rotate(180deg);\n}\n\n.multi-select-list[_ngcontent-%COMP%] {\n    max-height: 100px;\n    width: 220px;\n    background-color: white;\n    border: 1px solid black;\n    border-top: 0;\n    transition-property: max-height;\n    transition: ease 0.2s;\n    display: flex;\n    flex-direction: column;\n    z-index: 1;\n    overflow-y: auto;\n}\n\n.hidden-scroll-bar[_ngcontent-%COMP%]::-webkit-scrollbar {\n    display: none !important;\n}\n\n.multi-select-list-hidden[_ngcontent-%COMP%] {\n    max-height: 0 !important;\n    border: 0 !important;\n}\n\n.multi-select-list[_ngcontent-%COMP%]::-webkit-scrollbar {\n    width: 10px;\n}\n\n.multi-select-list-item[_ngcontent-%COMP%] {\n    min-height: 20px;\n    width: 100%;\n    line-height: 100%;\n    font-size: 14px;\n    padding: 4px 0 0 5px;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n\n.multi-select-list-item-selected[_ngcontent-%COMP%] {\n    background-color: #0098da;\n    color: white;\n}\n\n.multi-select-list-item[_ngcontent-%COMP%]:hover {\n    background-color: #E6F5FD;\n    color: black;\n}\n\n.multiselect-selected-item[_ngcontent-%COMP%] {\n    height: 20px;\n    width: auto;\n    max-width: 83px;\n    background-color: #0098da;\n    margin-left: 5px;\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n    border-radius: 5px;\n}\n\n.multiselect-selected-item-value[_ngcontent-%COMP%] {\n    margin-left: 4px;\n    color: white;\n    font-size: 12px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n}\n\n.multiselect-selected-item-remove[_ngcontent-%COMP%] {\n    margin: 0 4px;\n    width: 10px;\n    height: 10px;\n    background-image: url('Beli X.svg');\n    background-position: center;\n    background-size: 120%;\n    background-repeat: no-repeat;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoL211bHRpLXNlbGVjdC9tdWx0aS1zZWxlY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixlQUFlO0lBQ2YsMkJBQTJCO0lBQzNCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLDRDQUFnRDtJQUNoRCxvQkFBb0I7SUFDcEIsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QixxQkFBcUI7SUFDckIsOEJBQThCO0lBQzlCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLCtCQUErQjtJQUMvQixxQkFBcUI7SUFDckIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIseUJBQWlCO09BQWpCLHNCQUFpQjtRQUFqQixxQkFBaUI7WUFBakIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsZUFBZTtJQUNmLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLFlBQVk7SUFDWixtQ0FBdUM7SUFDdkMsMkJBQTJCO0lBQzNCLHFCQUFxQjtJQUNyQiw0QkFBNEI7QUFDaEMiLCJmaWxlIjoic3JjL2FwcC9zZWFyY2gvbXVsdGktc2VsZWN0L211bHRpLXNlbGVjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm11bHRpc2VsZWN0LWJveCB7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIHdpZHRoOiBhdXRvO1xuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5tdWx0aXNlbGVjdCB7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIHdpZHRoOiAyMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xufVxuXG4ubXVsdGktaGlkZS1saXN0IHtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaW1nL090dmFyYW5qZSBsaXN0ZS5zdmdcIik7XG4gICAgYmFja2dyb3VuZC1zaXplOiA3MCU7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgdHJhbnNpdGlvbjogZWFzZSAwLjJzO1xuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5tdWx0aS1oaWRlLWxpc3Qtcm90YXRlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xufVxuXG4ubXVsdGktc2VsZWN0LWxpc3Qge1xuICAgIG1heC1oZWlnaHQ6IDEwMHB4O1xuICAgIHdpZHRoOiAyMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBib3JkZXItdG9wOiAwO1xuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IG1heC1oZWlnaHQ7XG4gICAgdHJhbnNpdGlvbjogZWFzZSAwLjJzO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB6LWluZGV4OiAxO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG59XG5cbi5oaWRkZW4tc2Nyb2xsLWJhcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLm11bHRpLXNlbGVjdC1saXN0LWhpZGRlbiB7XG4gICAgbWF4LWhlaWdodDogMCAhaW1wb3J0YW50O1xuICAgIGJvcmRlcjogMCAhaW1wb3J0YW50O1xufVxuXG4ubXVsdGktc2VsZWN0LWxpc3Q6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICB3aWR0aDogMTBweDtcbn1cblxuLm11bHRpLXNlbGVjdC1saXN0LWl0ZW0ge1xuICAgIG1pbi1oZWlnaHQ6IDIwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbGluZS1oZWlnaHQ6IDEwMCU7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHBhZGRpbmc6IDRweCAwIDAgNXB4O1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLm11bHRpLXNlbGVjdC1saXN0LWl0ZW0tc2VsZWN0ZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDk4ZGE7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4ubXVsdGktc2VsZWN0LWxpc3QtaXRlbTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U2RjVGRDtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbi5tdWx0aXNlbGVjdC1zZWxlY3RlZC1pdGVtIHtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgbWF4LXdpZHRoOiA4M3B4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDk4ZGE7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4ubXVsdGlzZWxlY3Qtc2VsZWN0ZWQtaXRlbS12YWx1ZSB7XG4gICAgbWFyZ2luLWxlZnQ6IDRweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLm11bHRpc2VsZWN0LXNlbGVjdGVkLWl0ZW0tcmVtb3ZlIHtcbiAgICBtYXJnaW46IDAgNHB4O1xuICAgIHdpZHRoOiAxMHB4O1xuICAgIGhlaWdodDogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJpbWcvQmVsaSBYLnN2Z1wiKTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiAxMjAlO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MultiSelectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-multi-select',
          templateUrl: './multi-select.component.html',
          styleUrls: ['./multi-select.component.css']
        }]
      }], function () {
        return [{
          type: _services_component_helper_service__WEBPACK_IMPORTED_MODULE_1__["ComponentHelperService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }];
      }, {
        items: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        selectedItems: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        compWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/search/search-product-item/search-product-item.component.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/search/search-product-item/search-product-item.component.ts ***!
    \*****************************************************************************/

  /*! exports provided: SearchProductItemComponent */

  /***/
  function srcAppSearchSearchProductItemSearchProductItemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchProductItemComponent", function () {
      return SearchProductItemComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/cart.service */
    "./src/app/services/cart.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var SearchProductItemComponent = /*#__PURE__*/function () {
      function SearchProductItemComponent(cartService) {
        _classCallCheck(this, SearchProductItemComponent);

        this.cartService = cartService;
        this.showDetails = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.authors = [];
      }

      _createClass(SearchProductItemComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (this.book["Autor 1"]) this.authors.push(this.book["Autor 1"]);
          if (this.book["Autor 2"]) this.authors.push(this.book["Autor 2"]);
          if (this.book["Autor 3"]) this.authors.push(this.book["Autor 3"]);
        }
      }, {
        key: "showBookDetails",
        value: function showBookDetails() {
          this.showDetails.emit(this.book);
        }
      }, {
        key: "addToCart",
        value: function addToCart() {
          this.cartService.addItem(this.book.ISBN);
        }
      }]);

      return SearchProductItemComponent;
    }();

    SearchProductItemComponent.ɵfac = function SearchProductItemComponent_Factory(t) {
      return new (t || SearchProductItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"]));
    };

    SearchProductItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SearchProductItemComponent,
      selectors: [["app-search-product-item"]],
      inputs: {
        book: "book"
      },
      outputs: {
        showDetails: "showDetails"
      },
      decls: 25,
      vars: 9,
      consts: [[1, "product-img-wrapper"], ["alt", "asd", 1, "product-img", 3, "src"], [1, "product-data-wrapper"], [1, "title-description"], [1, "title"], [1, "product-description-wrapper"], [1, "product-description"], [1, "show-details", 3, "click"], [1, "show-details-icon"], [1, "product-buy-wrapper"], [1, "product-price"], [1, "product-price-value"], [1, "product-price-currency"], [1, "buy-product", 3, "click"], [1, "buy-product-icon"]],
      template: function SearchProductItemComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchProductItemComponent_Template_div_click_12_listener() {
            return ctx.showBookDetails();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Detaljinje");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "RSD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchProductItemComponent_Template_div_click_22_listener() {
            return ctx.addToCart();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Stavi u korpu ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/img/", ctx.book.Korice, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.authors.join(", "));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.book.Naslov);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.book["Godina izdanja"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.book.Opis, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](19, 6, ctx.book.Cena, ".2"));
        }
      },
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DecimalPipe"]],
      styles: ["[_nghost-%COMP%] {\n    width: 98%;\n    min-height: 250px;\n    padding: 30px 10px 20px 10px;\n    display: grid;\n    grid-template-columns: minmax(80px, 140px) auto 180px;\n    grid-template-rows: auto auto auto;\n    -moz-column-gap: 10px;\n         column-gap: 10px;\n    row-gap: 10px;\n}\n\n.product-img-wrapper[_ngcontent-%COMP%] {\n    grid-column: 1 / 2;\n    grid-row: 1/4;\n}\n\n.product-img[_ngcontent-%COMP%] {\n    max-width: 90%;\n    margin: 0 5%;\n}\n\n.product-data-wrapper[_ngcontent-%COMP%] {\n    grid-column-start: 2;\n    grid-row: 1;\n    min-height: 80px;\n}\n\n.product-description-wrapper[_ngcontent-%COMP%] {\n    grid-column: 2/3;\n    grid-row: 2/4;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: flex-start;\n    max-width: 750px;\n}\n\n.product-buy-wrapper[_ngcontent-%COMP%] {\n    grid-column: 3 / 4;\n    grid-row: 1 / 4;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: flex-end;\n}\n\n.title[_ngcontent-%COMP%] {\n    font-weight: 400;\n    margin-bottom: 15px;\n    font-size: 1.3em;\n}\n\n.title-description[_ngcontent-%COMP%] {\n    margin-bottom: 15px;\n    font-weight: 300;\n    color: gray;\n    font-size: 1.1em;\n}\n\n.product-description[_ngcontent-%COMP%] {\n    line-height: 150%;\n    margin-bottom: 20px;\n    color: rgba(0, 0, 0, 0.8);\n    font-size: 0.95em;\n    max-height: 3em;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    display: -webkit-box;\n    -webkit-line-clamp: 2;\n    -webkit-box-orient: vertical;\n}\n\n.product-description[_ngcontent-%COMP%]::after {\n    content: \"...\";\n}\n\n.show-details[_ngcontent-%COMP%] {\n    width: 135px;\n    height: 35px;\n    color: rgba(0, 0, 0, 0.6);\n    border: 1px solid rgba(0, 0, 0, 0.6);\n    margin-bottom: 10px;\n    display: flex;\n    justify-content: flex-start;\n    flex-direction: row;\n    align-items: center;\n    font-size: 18px;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    cursor: pointer;\n    background-color: white;\n}\n\n.show-details-icon[_ngcontent-%COMP%] {\n    width: 25px;\n    height: 25px;\n    background-image: url('Detaljnije.svg');\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 80%;\n    margin: 0 12px;\n    border-radius: 30px;\n    background-color: white;\n}\n\n.buy-product[_ngcontent-%COMP%] {\n    width: 150px;\n    height: 35px;\n    color: rgba(0, 0, 0, 0.6);\n    border: 1px solid rgba(0, 0, 0, 0.6);\n    margin-bottom: 10px;\n    display: flex;\n    justify-content: flex-start;\n    flex-direction: row;\n    align-items: center;\n    font-size: 17px;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    cursor: pointer;\n    background-color: white;\n}\n\n.buy-product-icon[_ngcontent-%COMP%] {\n    width: 25px;\n    height: 25px;\n    background-image: url('Korpa.svg');\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 80%;\n    margin: 0 8px;\n    border-radius: 30px;\n    background-color: white !important;\n}\n\n.product-price[_ngcontent-%COMP%] {\n    width: 150px;\n    height: 30px;\n    display: flex;\n    flex-wrap: nowrap;\n    align-items: baseline;\n    margin-bottom: 40px;\n}\n\n.product-price-value[_ngcontent-%COMP%] {\n    font-size: 1.6em;\n    margin-right: 10px;\n}\n\n.product-price-currency[_ngcontent-%COMP%] {\n    font-size: 1.1em;\n    color: gray;\n}\n\n@media screen and (max-width: 800px) {\n    .product-img-wrapper[_ngcontent-%COMP%] {\n        grid-row: 1/2;\n    }\n    .title[_ngcontent-%COMP%] {\n        font-size: 1.2em;\n        font-weight: 400;\n    }\n    .title-description[_ngcontent-%COMP%] {\n        font-size: 1em;\n    }\n    .product-description[_ngcontent-%COMP%] {\n        font-size: 0.8em;\n    }\n    .product-data-wrapper[_ngcontent-%COMP%] {\n        grid-column: 2/4;\n    }\n    .product-description-wrapper[_ngcontent-%COMP%] {\n        grid-column: 1/4;\n        grid-row: 2/3;\n    }\n    .product-buy-wrapper[_ngcontent-%COMP%] {\n        grid-row: 3/4;\n    }\n    .product-price[_ngcontent-%COMP%] {\n        margin-bottom: 10px;\n    }\n    .product-description[_ngcontent-%COMP%] {\n        max-height: 4.4em;\n        -webkit-line-clamp: 3;\n    }\n}\n\n@media screen and (max-width: 400px) {\n    .product-description[_ngcontent-%COMP%] {\n        max-height: 7.5em;\n        -webkit-line-clamp: 5;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoL3NlYXJjaC1wcm9kdWN0LWl0ZW0vc2VhcmNoLXByb2R1Y3QtaXRlbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLGlCQUFpQjtJQUNqQiw0QkFBNEI7SUFDNUIsYUFBYTtJQUNiLHFEQUFxRDtJQUNyRCxrQ0FBa0M7SUFDbEMscUJBQWdCO1NBQWhCLGdCQUFnQjtJQUNoQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDhCQUE4QjtJQUM5Qix1QkFBdUI7SUFDdkIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixvQkFBb0I7SUFDcEIscUJBQXFCO0lBQ3JCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixvQ0FBb0M7SUFDcEMsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YseUJBQWlCO09BQWpCLHNCQUFpQjtRQUFqQixxQkFBaUI7WUFBakIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHVDQUEyQztJQUMzQywyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLG9CQUFvQjtJQUNwQixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLG9DQUFvQztJQUNwQyxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLDJCQUEyQjtJQUMzQixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZix5QkFBaUI7T0FBakIsc0JBQWlCO1FBQWpCLHFCQUFpQjtZQUFqQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0NBQXNDO0lBQ3RDLDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZjs7QUFFQTtJQUNJO1FBQ0ksYUFBYTtJQUNqQjtJQUNBO1FBQ0ksZ0JBQWdCO1FBQ2hCLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksY0FBYztJQUNsQjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGdCQUFnQjtRQUNoQixhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxtQkFBbUI7SUFDdkI7SUFDQTtRQUNJLGlCQUFpQjtRQUNqQixxQkFBcUI7SUFDekI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksaUJBQWlCO1FBQ2pCLHFCQUFxQjtJQUN6QjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvc2VhcmNoL3NlYXJjaC1wcm9kdWN0LWl0ZW0vc2VhcmNoLXByb2R1Y3QtaXRlbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIHdpZHRoOiA5OCU7XG4gICAgbWluLWhlaWdodDogMjUwcHg7XG4gICAgcGFkZGluZzogMzBweCAxMHB4IDIwcHggMTBweDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDgwcHgsIDE0MHB4KSBhdXRvIDE4MHB4O1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byBhdXRvIGF1dG87XG4gICAgY29sdW1uLWdhcDogMTBweDtcbiAgICByb3ctZ2FwOiAxMHB4O1xufVxuXG4ucHJvZHVjdC1pbWctd3JhcHBlciB7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xuICAgIGdyaWQtcm93OiAxLzQ7XG59XG5cbi5wcm9kdWN0LWltZyB7XG4gICAgbWF4LXdpZHRoOiA5MCU7XG4gICAgbWFyZ2luOiAwIDUlO1xufVxuXG4ucHJvZHVjdC1kYXRhLXdyYXBwZXIge1xuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xuICAgIGdyaWQtcm93OiAxO1xuICAgIG1pbi1oZWlnaHQ6IDgwcHg7XG59XG5cbi5wcm9kdWN0LWRlc2NyaXB0aW9uLXdyYXBwZXIge1xuICAgIGdyaWQtY29sdW1uOiAyLzM7XG4gICAgZ3JpZC1yb3c6IDIvNDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIG1heC13aWR0aDogNzUwcHg7XG59XG5cbi5wcm9kdWN0LWJ1eS13cmFwcGVyIHtcbiAgICBncmlkLWNvbHVtbjogMyAvIDQ7XG4gICAgZ3JpZC1yb3c6IDEgLyA0O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG59XG5cbi50aXRsZSB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIGZvbnQtc2l6ZTogMS4zZW07XG59XG5cbi50aXRsZS1kZXNjcmlwdGlvbiB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGNvbG9yOiBncmF5O1xuICAgIGZvbnQtc2l6ZTogMS4xZW07XG59XG5cbi5wcm9kdWN0LWRlc2NyaXB0aW9uIHtcbiAgICBsaW5lLWhlaWdodDogMTUwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gICAgZm9udC1zaXplOiAwLjk1ZW07XG4gICAgbWF4LWhlaWdodDogM2VtO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG59XG5cbi5wcm9kdWN0LWRlc2NyaXB0aW9uOjphZnRlciB7XG4gICAgY29udGVudDogXCIuLi5cIjtcbn1cblxuLnNob3ctZGV0YWlscyB7XG4gICAgd2lkdGg6IDEzNXB4O1xuICAgIGhlaWdodDogMzVweDtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4uc2hvdy1kZXRhaWxzLWljb24ge1xuICAgIHdpZHRoOiAyNXB4O1xuICAgIGhlaWdodDogMjVweDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJpbWcvRGV0YWxqbmlqZS5zdmdcIik7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiA4MCU7XG4gICAgbWFyZ2luOiAwIDEycHg7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmJ1eS1wcm9kdWN0IHtcbiAgICB3aWR0aDogMTUwcHg7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjYpO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5idXktcHJvZHVjdC1pY29uIHtcbiAgICB3aWR0aDogMjVweDtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaW1nL0tvcnBhLnN2Z1wiKTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDgwJTtcbiAgICBtYXJnaW46IDAgOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn1cblxuLnByb2R1Y3QtcHJpY2Uge1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn1cblxuLnByb2R1Y3QtcHJpY2UtdmFsdWUge1xuICAgIGZvbnQtc2l6ZTogMS42ZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4ucHJvZHVjdC1wcmljZS1jdXJyZW5jeSB7XG4gICAgZm9udC1zaXplOiAxLjFlbTtcbiAgICBjb2xvcjogZ3JheTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgICAucHJvZHVjdC1pbWctd3JhcHBlciB7XG4gICAgICAgIGdyaWQtcm93OiAxLzI7XG4gICAgfVxuICAgIC50aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgfVxuICAgIC50aXRsZS1kZXNjcmlwdGlvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIH1cbiAgICAucHJvZHVjdC1kZXNjcmlwdGlvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gICAgfVxuICAgIC5wcm9kdWN0LWRhdGEtd3JhcHBlciB7XG4gICAgICAgIGdyaWQtY29sdW1uOiAyLzQ7XG4gICAgfVxuICAgIC5wcm9kdWN0LWRlc2NyaXB0aW9uLXdyYXBwZXIge1xuICAgICAgICBncmlkLWNvbHVtbjogMS80O1xuICAgICAgICBncmlkLXJvdzogMi8zO1xuICAgIH1cbiAgICAucHJvZHVjdC1idXktd3JhcHBlciB7XG4gICAgICAgIGdyaWQtcm93OiAzLzQ7XG4gICAgfVxuICAgIC5wcm9kdWN0LXByaWNlIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICB9XG4gICAgLnByb2R1Y3QtZGVzY3JpcHRpb24ge1xuICAgICAgICBtYXgtaGVpZ2h0OiA0LjRlbTtcbiAgICAgICAgLXdlYmtpdC1saW5lLWNsYW1wOiAzO1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcbiAgICAucHJvZHVjdC1kZXNjcmlwdGlvbiB7XG4gICAgICAgIG1heC1oZWlnaHQ6IDcuNWVtO1xuICAgICAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDU7XG4gICAgfVxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchProductItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-search-product-item',
          templateUrl: './search-product-item.component.html',
          styleUrls: ['./search-product-item.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_1__["CartService"]
        }];
      }, {
        book: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        showDetails: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/search/search.component.ts":
  /*!********************************************!*\
    !*** ./src/app/search/search.component.ts ***!
    \********************************************/

  /*! exports provided: SearchComponent */

  /***/
  function srcAppSearchSearchComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchComponent", function () {
      return SearchComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _datamodel_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../datamodel/filter */
    "./src/app/datamodel/filter.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! util */
    "./node_modules/util/util.js");
    /* harmony import */


    var util__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var src_app_services_book_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/book.service */
    "./src/app/services/book.service.ts");
    /* harmony import */


    var _autocomplete_select_autocomplete_select_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./autocomplete-select/autocomplete-select.component */
    "./src/app/search/autocomplete-select/autocomplete-select.component.ts");
    /* harmony import */


    var _multi_select_multi_select_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./multi-select/multi-select.component */
    "./src/app/search/multi-select/multi-select.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _single_select_single_select_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./single-select/single-select.component */
    "./src/app/search/single-select/single-select.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _search_product_item_search_product_item_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./search-product-item/search-product-item.component */
    "./src/app/search/search-product-item/search-product-item.component.ts");
    /* harmony import */


    var _product_item_product_item_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../product-item/product-item.component */
    "./src/app/product-item/product-item.component.ts");

    var _c0 = function _c0(a2) {
      return {
        "bottom-border": true,
        "gray-background": true,
        "white-backgroud": a2
      };
    };

    function SearchComponent_app_search_product_item_50_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-search-product-item", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("showDetails", function SearchComponent_app_search_product_item_50_Template_app_search_product_item_showDetails_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.showBookDetails($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var book_r3 = ctx.$implicit;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r0.books.length < 2))("book", book_r3);
      }
    }

    function SearchComponent_img_51_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 32);
      }
    }

    function SearchComponent_app_product_item_52_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-product-item", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onCloseDetailView", function SearchComponent_app_product_item_52_Template_app_product_item_onCloseDetailView_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.hideBookDetails();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("book", ctx_r2.showDetailsBook);
      }
    }

    var SearchComponent = /*#__PURE__*/function () {
      function SearchComponent(bookService, route, router) {
        _classCallCheck(this, SearchComponent);

        this.bookService = bookService;
        this.route = route;
        this.router = router;
        this.priceValueListener = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.filterData = new _datamodel_filter__WEBPACK_IMPORTED_MODULE_2__["Filter"]();
        this.selectedYearFrom = [];
        this.selectedYearTo = [];
        this.sortOptions = ['Cene rastuće', 'Cene opadajuće', 'Naslovi rastuće', 'Naslovi opadajuće'];
        this.selectedSort = ['Naslovi opadajuće'];
        this.books = [];
      }

      _createClass(SearchComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.yearsFrom = this.bookService.getYears();
          this.yearsTo = this.bookService.getYears();
          this.subscriptionPrice = this.priceValueListener.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(300)).subscribe(function () {
            if (Object(util__WEBPACK_IMPORTED_MODULE_5__["isNull"])(_this6.priceValue) || isNaN(_this6.priceValue) || _this6.priceValue < 0.00 || _this6.priceValue > 200000.00) _this6.priceValue = undefined;
            _this6.filterData.price = _this6.priceValue;
          });
          this.route.queryParamMap.subscribe(function (params) {
            _this6.filterData.title = params.get("title") ? params.get("title") : "";
            _this6.filterData.categories = params.get("categories") ? params.getAll("categories") : [];
            _this6.filterData.languages = params.get("languages") ? params.getAll("languages") : [];
            _this6.filterData.price = params.get("price") ? parseFloat(params.get("price")) : undefined;
            _this6.filterData.yearFrom = params.get("yearFrom") ? parseInt(params.get("yearFrom")) : undefined;
            _this6.filterData.yearTo = params.get("yearTo") ? parseInt(params.get("yearTo")) : undefined;
            _this6.selectedSort = params.get("sort") ? params.getAll("sort") : ['Naslovi opadajuće'];
          });
          this.startSearch();
          this.subscriptionRouter = this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) _this6.startSearch();
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscriptionPrice.unsubscribe();
          this.subscriptionRouter.unsubscribe();
        }
      }, {
        key: "expandFilter",
        value: function expandFilter() {
          this.showFilter();
          document.getElementById("filter-box").classList.toggle("filter-box-expand");
          document.getElementById("more-arrow").classList.toggle("less-arrow");
        }
      }, {
        key: "showFilter",
        value: function showFilter() {
          if (document.getElementsByClassName("filter-box-expand").length > 0) document.getElementById("filter").classList.toggle("filter-hidden");
        }
      }, {
        key: "yearChanged",
        value: function yearChanged() {
          var _this7 = this;

          if (this.selectedYearFrom.length > 0) this.yearsTo = this.bookService.getYears().filter(function (year) {
            return parseInt(year) >= parseInt(_this7.selectedYearFrom[0]);
          });
          if (parseInt(this.selectedYearFrom[0]) > parseInt(this.selectedYearTo[0])) this.selectedYearTo[0] = this.selectedYearFrom[0];
          this.filterData.yearFrom = this.selectedYearFrom.length > 0 ? parseInt(this.selectedYearFrom[0]) : undefined;
          this.filterData.yearTo = this.selectedYearTo.length > 0 ? parseInt(this.selectedYearTo[0]) : undefined;
        }
      }, {
        key: "startSearch",
        value: function startSearch() {
          this.router.navigate(['/search'], {
            queryParams: {
              title: this.filterData.title.length > 0 ? this.filterData.title : undefined,
              categories: this.filterData.categories.length > 0 ? this.filterData.categories : undefined,
              languages: this.filterData.languages.length > 0 ? this.filterData.languages : undefined,
              price: this.filterData.price,
              yearFrom: this.filterData.yearFrom,
              yearTo: this.filterData.yearTo,
              sort: this.selectedSort[0]
            }
          });
          this.books = this.bookService.getBooks(this.filterData, this.selectedSort[0]);
        }
      }, {
        key: "hideBookDetails",
        value: function hideBookDetails() {
          document.body.style.overflow = 'auto';
          document.body.style.paddingRight = '';
          this.showDetailsBook = null;
        }
      }, {
        key: "showBookDetails",
        value: function showBookDetails(book) {
          document.body.style.overflow = 'hidden';
          document.body.style.paddingRight = '15px';
          this.showDetailsBook = book;
        }
      }]);

      return SearchComponent;
    }();

    SearchComponent.ɵfac = function SearchComponent_Factory(t) {
      return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_book_service__WEBPACK_IMPORTED_MODULE_6__["BookService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    SearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SearchComponent,
      selectors: [["app-search"]],
      decls: 53,
      vars: 22,
      consts: [[1, "baner"], [1, "welcome-conteiner"], [1, "welcome-content"], ["id", "filter-box", 1, "filter-box"], [1, "filter-short", 3, "click", "transitionend"], [1, "filter-icon"], ["id", "more-arrow", 1, "more-arrow"], ["id", "filter", 1, "filter", "filter-hidden"], [1, "filter-elements"], [1, "filter-item"], ["for", "autocomplete-select"], ["name", "autocomplete-select", 3, "filter"], ["for", "multi-select"], ["name", "multi-select", 3, "items", "selectedItems", "compWidth"], ["for", "max-price"], [1, "field-wrapper"], ["type", "number", "name", "max-price", "id", "max-price", 1, "max-price", 3, "ngModel", "input", "ngModelChange"], ["for", "max-price", 1, "currency"], ["for", "double-field-wrapper"], ["name", "double-field-wrapper", 1, "double-field-wrapper"], ["for", "start-date", 1, "date-label"], [1, "single-select", 3, "isCancelable", "items", "selectedItem", "compWidth", "onSelectionChange"], ["for", "end-date", 1, "date-label"], [1, "start-search", 3, "click"], ["name", "start-search-icon", 1, "start-search-icon"], [1, "sort-box"], [1, "sort-icon"], [1, "single-select", 3, "items", "selectedItem", "compWidth", "onSelectionChange"], [3, "ngClass", "book", "showDetails", 4, "ngFor", "ngForOf"], ["class", "no-result", "src", "assets/img/No results.png", "alt", "No results.png", 4, "ngIf"], [3, "book", "onCloseDetailView", 4, "ngIf"], [3, "ngClass", "book", "showDetails"], ["src", "assets/img/No results.png", "alt", "No results.png", 1, "no-result"], [3, "book", "onCloseDetailView"]],
      template: function SearchComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Pretr\u017Eivanje");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchComponent_Template_div_click_6_listener() {
            return ctx.expandFilter();
          })("transitionend", function SearchComponent_Template_div_transitionend_6_listener() {
            return ctx.showFilter();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Filteri");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Naslov");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "app-autocomplete-select", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Oblast");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "app-multi-select", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Jezik");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "app-multi-select", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Najvi\u0161a cena");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "form", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function SearchComponent_Template_input_input_29_listener() {
            return ctx.priceValueListener.next();
          })("ngModelChange", function SearchComponent_Template_input_ngModelChange_29_listener($event) {
            return ctx.priceValue = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "RSD");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Godina izdanja");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "label", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "od");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "app-single-select", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onSelectionChange", function SearchComponent_Template_app_single_select_onSelectionChange_38_listener() {
            return ctx.yearChanged();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "do");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "app-single-select", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onSelectionChange", function SearchComponent_Template_app_single_select_onSelectionChange_41_listener() {
            return ctx.yearChanged();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SearchComponent_Template_div_click_42_listener() {
            return ctx.startSearch();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " TRA\u017DI ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Sort");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "app-single-select", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onSelectionChange", function SearchComponent_Template_app_single_select_onSelectionChange_49_listener() {
            return ctx.startSearch();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, SearchComponent_app_search_product_item_50_Template, 1, 4, "app-search-product-item", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, SearchComponent_img_51_Template, 1, 0, "img", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, SearchComponent_app_product_item_52_Template, 1, 1, "app-product-item", 30);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("filter", ctx.filterData);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.bookService.getCategories())("selectedItems", ctx.filterData.categories)("compWidth", 215);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.bookService.getLanguages())("selectedItems", ctx.filterData.languages)("compWidth", 130);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.priceValue);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isCancelable", true)("items", ctx.yearsFrom)("selectedItem", ctx.selectedYearFrom)("compWidth", 120);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isCancelable", true)("items", ctx.yearsTo)("selectedItem", ctx.selectedYearTo)("compWidth", 120);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.sortOptions)("selectedItem", ctx.selectedSort)("compWidth", 200);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.books);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.books.length === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showDetailsBook);
        }
      },
      directives: [_autocomplete_select_autocomplete_select_component__WEBPACK_IMPORTED_MODULE_7__["AutocompleteSelectComponent"], _multi_select_multi_select_component__WEBPACK_IMPORTED_MODULE_8__["MultiSelectComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _single_select_single_select_component__WEBPACK_IMPORTED_MODULE_10__["SingleSelectComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _search_product_item_search_product_item_component__WEBPACK_IMPORTED_MODULE_12__["SearchProductItemComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgClass"], _product_item_product_item_component__WEBPACK_IMPORTED_MODULE_13__["ProductItemComponent"]],
      styles: [".baner[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 400px;\n    background-image: url('Header fotografija.jpg');\n    background-position: left;\n    background-repeat: no-repeat;\n    background-size: cover;\n}\n\n.welcome-conteiner[_ngcontent-%COMP%] {\n    width: 100%;\n    height: auto;\n    background-color: rgb(230, 231, 232);\n}\n\n.welcome-content[_ngcontent-%COMP%] {\n    max-width: 1200px;\n    margin: auto;\n    background-color: white;\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n    align-items: center;\n}\n\n.welcome-content[_ngcontent-%COMP%] > h1[_ngcontent-%COMP%] {\n    width: 100%;\n    padding: 40px 30px;\n    font-size: 50px;\n    font-weight: 100;\n}\n\n.filter-box[_ngcontent-%COMP%] {\n    width: 98%;\n    min-height: 60px;\n    margin-bottom: 20px;\n    background-color: #E6F5FD;\n    transition: ease 0.2s;\n    transition-property: min-height;\n    display: flex;\n    flex-direction: column;\n}\n\n.filter-box-expand[_ngcontent-%COMP%] {\n    min-height: 240px !important;\n}\n\n.filter-short[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 60px;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    cursor: pointer;\n}\n\n.filter[_ngcontent-%COMP%] {\n    height: auto;\n    padding: 5px;\n    width: auto;\n    border-top: 2px dotted black;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    flex-wrap: wrap;\n}\n\n.filter-elements[_ngcontent-%COMP%] {\n    min-height: 100px;\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    flex-wrap: wrap;\n}\n\n.filter-hidden[_ngcontent-%COMP%] {\n    display: none !important;\n}\n\n.filter-item[_ngcontent-%COMP%] {\n    height: 80px;\n    width: auto;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    padding: 0 5px;\n}\n\n.filter-item[_ngcontent-%COMP%] > label[_ngcontent-%COMP%] {\n    margin-bottom: 5px;\n}\n\n.more-arrow[_ngcontent-%COMP%] {\n    height: 35px;\n    width: 35px;\n    background-size: contain;\n    background-image: url('Otvaranje liste.svg');\n    background-repeat: no-repeat;\n    margin: 5px 15px 0 auto;\n    transition: ease 0.2s;\n    transition-property: transform;\n}\n\n.less-arrow[_ngcontent-%COMP%] {\n    transform: rotate(180deg);\n}\n\nh3[_ngcontent-%COMP%] {\n    padding-top: 3px;\n    font-size: 28px;\n    font-weight: 400;\n}\n\n.filter-icon[_ngcontent-%COMP%] {\n    height: 40px;\n    width: 35px;\n    background-size: contain;\n    background-image: url('Filteri.svg');\n    background-repeat: no-repeat;\n    background-position: center;\n    margin: 0 15px;\n}\n\n.max-price[_ngcontent-%COMP%] {\n    height: 30px;\n    width: 120px;\n    background-color: white;\n    border: 1px solid black;\n    padding: 6px 42px 5px 5px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n\ninput[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n}\n\ninput[type=\"number\"][_ngcontent-%COMP%] {\n    outline: none;\n}\n\n.currency[_ngcontent-%COMP%] {\n    margin-top: 2px;\n    margin-left: -40px;\n    font-weight: 600;\n    color: rgb(0, 152, 218);\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n}\n\n.field-wrapper[_ngcontent-%COMP%] {\n    display: inline-flex;\n    align-items: center;\n    margin-right: 5px;\n}\n\n.double-field-wrapper[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n}\n\n.double-field-wrapper[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n    margin: 0 5px;\n}\n\n.date-label[_ngcontent-%COMP%] {\n    color: grey\n}\n\n.start-search[_ngcontent-%COMP%] {\n    height: 50px;\n    width: 180px;\n    background-color: #0098DA;\n    color: white;\n    padding-left: 43px;\n    border: 2px solid #0098DA;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    cursor: pointer;\n    justify-self: self-end;\n    align-self: flex-end;\n    margin: 0px 10px 10px 0;\n}\n\n.start-search-hidden[_ngcontent-%COMP%] {\n    display: none !important;\n}\n\n.start-search[_ngcontent-%COMP%]:hover {\n    background-color: white;\n    color: #0098DA;\n    font-weight: 600;\n}\n\n.start-search-icon[_ngcontent-%COMP%] {\n    height: 46px;\n    width: 46px;\n    background-image: url('Lupa.svg');\n    background-repeat: no-repeat;\n    background-position: center;\n    background-color: white;\n    background-size: 70%;\n}\n\n.sort-box[_ngcontent-%COMP%] {\n    width: 98%;\n    height: 60px;\n    background-color: #E6F5FD;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    margin-bottom: 20px;\n}\n\n.sort-icon[_ngcontent-%COMP%] {\n    height: 40px;\n    width: 35px;\n    background-size: contain;\n    background-image: url('Sortiranje.svg');\n    background-repeat: no-repeat;\n    background-position: center;\n    margin: 0 15px;\n}\n\n.single-select[_ngcontent-%COMP%] {\n    margin: 3px 0 0 70px;\n    transition: ease 0.5s;\n    transition-property: margin;\n}\n\n.bottom-border[_ngcontent-%COMP%] {\n    border-bottom: 1px solid black;\n}\n\n.bottom-border[_ngcontent-%COMP%]:last-of-type {\n    border-bottom: 0;\n}\n\n.no-result[_ngcontent-%COMP%] {\n    max-width: 50%;\n    background-image: url('No results 1.svg');\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n}\n\n@media screen and (max-width: 800px) {\n    .gray-background[_ngcontent-%COMP%]:nth-of-type(odd) {\n        background-color: #F1F1F2;\n    }\n    .bottom-border[_ngcontent-%COMP%] {\n        border: 0;\n    }\n    .white-backgroud[_ngcontent-%COMP%] {\n        background-color: white !important;\n    }\n}\n\n@media screen and (max-width: 400px) {\n    .double-field-wrapper[_ngcontent-%COMP%] > *[_ngcontent-%COMP%] {\n        margin: 2px\n    }\n    .single-select[_ngcontent-%COMP%] {\n        margin: 3px 0 0 15px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYiwrQ0FBbUQ7SUFDbkQseUJBQXlCO0lBQ3pCLDRCQUE0QjtJQUM1QixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsK0JBQStCO0lBQy9CLGFBQWE7SUFDYixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLFdBQVc7SUFDWCw0QkFBNEI7SUFDNUIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsd0JBQXdCO0lBQ3hCLDRDQUFnRDtJQUNoRCw0QkFBNEI7SUFDNUIsdUJBQXVCO0lBQ3ZCLHFCQUFxQjtJQUNyQiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsd0JBQXdCO0lBQ3hCLG9DQUF3QztJQUN4Qyw0QkFBNEI7SUFDNUIsMkJBQTJCO0lBQzNCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIseUJBQXlCO0lBQ3pCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0FBQzNCOztBQUVBOztJQUVJLHdCQUF3QjtJQUN4QixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLHlCQUFpQjtPQUFqQixzQkFBaUI7UUFBakIscUJBQWlCO1lBQWpCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIseUJBQWlCO09BQWpCLHNCQUFpQjtRQUFqQixxQkFBaUI7WUFBakIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsb0JBQW9CO0lBQ3BCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixjQUFjO0lBQ2QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxpQ0FBcUM7SUFDckMsNEJBQTRCO0lBQzVCLDJCQUEyQjtJQUMzQix1QkFBdUI7SUFDdkIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsYUFBYTtJQUNiLDJCQUEyQjtJQUMzQixtQkFBbUI7SUFDbkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCx3QkFBd0I7SUFDeEIsdUNBQTJDO0lBQzNDLDRCQUE0QjtJQUM1QiwyQkFBMkI7SUFDM0IsY0FBYztBQUNsQjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksY0FBYztJQUNkLHlDQUE2QztJQUM3QywyQkFBMkI7SUFDM0IsNEJBQTRCO0lBQzVCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJO1FBQ0kseUJBQXlCO0lBQzdCO0lBQ0E7UUFDSSxTQUFTO0lBQ2I7SUFDQTtRQUNJLGtDQUFrQztJQUN0QztBQUNKOztBQUVBO0lBQ0k7UUFDSTtJQUNKO0lBQ0E7UUFDSSxvQkFBb0I7SUFDeEI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA0MDBweDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJpbWcvSGVhZGVyIGZvdG9ncmFmaWphLmpwZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0O1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLndlbGNvbWUtY29udGVpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzMCwgMjMxLCAyMzIpO1xufVxuXG4ud2VsY29tZS1jb250ZW50IHtcbiAgICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ud2VsY29tZS1jb250ZW50PmgxIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiA0MHB4IDMwcHg7XG4gICAgZm9udC1zaXplOiA1MHB4O1xuICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG59XG5cbi5maWx0ZXItYm94IHtcbiAgICB3aWR0aDogOTglO1xuICAgIG1pbi1oZWlnaHQ6IDYwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTZGNUZEO1xuICAgIHRyYW5zaXRpb246IGVhc2UgMC4ycztcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBtaW4taGVpZ2h0O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmZpbHRlci1ib3gtZXhwYW5kIHtcbiAgICBtaW4taGVpZ2h0OiAyNDBweCAhaW1wb3J0YW50O1xufVxuXG4uZmlsdGVyLXNob3J0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5maWx0ZXIge1xuICAgIGhlaWdodDogYXV0bztcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgYm9yZGVyLXRvcDogMnB4IGRvdHRlZCBibGFjaztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4uZmlsdGVyLWVsZW1lbnRzIHtcbiAgICBtaW4taGVpZ2h0OiAxMDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLmZpbHRlci1oaWRkZW4ge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLmZpbHRlci1pdGVtIHtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBhZGRpbmc6IDAgNXB4O1xufVxuXG4uZmlsdGVyLWl0ZW0+bGFiZWwge1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLm1vcmUtYXJyb3cge1xuICAgIGhlaWdodDogMzVweDtcbiAgICB3aWR0aDogMzVweDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaW1nL090dmFyYW5qZSBsaXN0ZS5zdmdcIik7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBtYXJnaW46IDVweCAxNXB4IDAgYXV0bztcbiAgICB0cmFuc2l0aW9uOiBlYXNlIDAuMnM7XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xufVxuXG4ubGVzcy1hcnJvdyB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbn1cblxuaDMge1xuICAgIHBhZGRpbmctdG9wOiAzcHg7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5maWx0ZXItaWNvbiB7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHdpZHRoOiAzNXB4O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJpbWcvRmlsdGVyaS5zdmdcIik7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwIDE1cHg7XG59XG5cbi5tYXgtcHJpY2Uge1xuICAgIGhlaWdodDogMzBweDtcbiAgICB3aWR0aDogMTIwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgcGFkZGluZzogNnB4IDQycHggNXB4IDVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbmlucHV0Ojotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uLFxuaW5wdXQ6Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICBtYXJnaW46IDA7XG59XG5cbmlucHV0W3R5cGU9XCJudW1iZXJcIl0ge1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG5cbi5jdXJyZW5jeSB7XG4gICAgbWFyZ2luLXRvcDogMnB4O1xuICAgIG1hcmdpbi1sZWZ0OiAtNDBweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiByZ2IoMCwgMTUyLCAyMTgpO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4uZmllbGQtd3JhcHBlciB7XG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbn1cblxuLmRvdWJsZS1maWVsZC13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5kb3VibGUtZmllbGQtd3JhcHBlciAqIHtcbiAgICBtYXJnaW46IDAgNXB4O1xufVxuXG4uZGF0ZS1sYWJlbCB7XG4gICAgY29sb3I6IGdyZXlcbn1cblxuLnN0YXJ0LXNlYXJjaCB7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHdpZHRoOiAxODBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA5OERBO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nLWxlZnQ6IDQzcHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzAwOThEQTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBqdXN0aWZ5LXNlbGY6IHNlbGYtZW5kO1xuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICAgIG1hcmdpbjogMHB4IDEwcHggMTBweCAwO1xufVxuXG4uc3RhcnQtc2VhcmNoLWhpZGRlbiB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uc3RhcnQtc2VhcmNoOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBjb2xvcjogIzAwOThEQTtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uc3RhcnQtc2VhcmNoLWljb24ge1xuICAgIGhlaWdodDogNDZweDtcbiAgICB3aWR0aDogNDZweDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJpbWcvTHVwYS5zdmdcIik7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZC1zaXplOiA3MCU7XG59XG5cbi5zb3J0LWJveCB7XG4gICAgd2lkdGg6IDk4JTtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U2RjVGRDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5zb3J0LWljb24ge1xuICAgIGhlaWdodDogNDBweDtcbiAgICB3aWR0aDogMzVweDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaW1nL1NvcnRpcmFuamUuc3ZnXCIpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIG1hcmdpbjogMCAxNXB4O1xufVxuXG4uc2luZ2xlLXNlbGVjdCB7XG4gICAgbWFyZ2luOiAzcHggMCAwIDcwcHg7XG4gICAgdHJhbnNpdGlvbjogZWFzZSAwLjVzO1xuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IG1hcmdpbjtcbn1cblxuLmJvdHRvbS1ib3JkZXIge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcbn1cblxuLmJvdHRvbS1ib3JkZXI6bGFzdC1vZi10eXBlIHtcbiAgICBib3JkZXItYm90dG9tOiAwO1xufVxuXG4ubm8tcmVzdWx0IHtcbiAgICBtYXgtd2lkdGg6IDUwJTtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJpbWcvTm8gcmVzdWx0cyAxLnN2Z1wiKTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAgIC5ncmF5LWJhY2tncm91bmQ6bnRoLW9mLXR5cGUob2RkKSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGMUYxRjI7XG4gICAgfVxuICAgIC5ib3R0b20tYm9yZGVyIHtcbiAgICAgICAgYm9yZGVyOiAwO1xuICAgIH1cbiAgICAud2hpdGUtYmFja2dyb3VkIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XG4gICAgLmRvdWJsZS1maWVsZC13cmFwcGVyPioge1xuICAgICAgICBtYXJnaW46IDJweFxuICAgIH1cbiAgICAuc2luZ2xlLXNlbGVjdCB7XG4gICAgICAgIG1hcmdpbjogM3B4IDAgMCAxNXB4O1xuICAgIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-search',
          templateUrl: './search.component.html',
          styleUrls: ['./search.component.css']
        }]
      }], function () {
        return [{
          type: src_app_services_book_service__WEBPACK_IMPORTED_MODULE_6__["BookService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/search/single-select/single-select.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/search/single-select/single-select.component.ts ***!
    \*****************************************************************/

  /*! exports provided: SingleSelectComponent */

  /***/
  function srcAppSearchSingleSelectSingleSelectComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SingleSelectComponent", function () {
      return SingleSelectComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _services_component_helper_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/component-helper.service */
    "./src/app/services/component-helper.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function SingleSelectComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r73 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SingleSelectComponent_div_3_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r73);

          var ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          ctx_r72.selectedItem.pop();
          return ctx_r72.onSelectionChange.emit();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a1) {
      return {
        "select-list-item": true,
        "select-list-item-selected": a1
      };
    };

    function SingleSelectComponent_div_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r76 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SingleSelectComponent_div_6_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r76);

          var item_r74 = ctx.$implicit;

          var ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r75.selectItem(item_r74);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r74 = ctx.$implicit;

        var ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r71.selectedItem.includes(item_r74)));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r74, "");
      }
    }

    var _c1 = function _c1(a0) {
      return {
        "width": a0
      };
    };

    var _c2 = function _c2(a1) {
      return {
        "hide-list": true,
        "hide-list-rotate": a1
      };
    };

    var _c3 = function _c3(a1, a2) {
      return {
        "select-list": true,
        "select-list-hidden": a1,
        "hidden-scroll-bar": a2
      };
    };

    var SingleSelectComponent = /*#__PURE__*/function () {
      function SingleSelectComponent(helper, cd) {
        _classCallCheck(this, SingleSelectComponent);

        this.helper = helper;
        this.cd = cd;
        this.items = [];
        this.selectedItem = [];
        this.isCancelable = false;
        this.onSelectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.hiddenList = true;
        this.transitionDone = true;
        this.compID = helper.getUniqueID();
      }

      _createClass(SingleSelectComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "showHideList",
        value: function showHideList() {
          if (this.hiddenList) this.hiddenList = false;else this.hiddenList = true;
        }
      }, {
        key: "checkToHide",
        value: function checkToHide(event) {
          if (!this.hiddenList) if (!this.helper.isDescendantOfById(event.target, this.compID.toString())) this.hiddenList = true;
        }
      }, {
        key: "selectItem",
        value: function selectItem(item) {
          this.selectedItem.splice(0, this.selectedItem.length);
          this.selectedItem.push(item);
          this.cd.detectChanges();
          this.showHideList();
          this.onSelectionChange.emit();
        }
      }, {
        key: "startTransition",
        value: function startTransition() {
          this.transitionDone = false;
        }
      }, {
        key: "endTransition",
        value: function endTransition() {
          this.transitionDone = true;
        }
      }]);

      return SingleSelectComponent;
    }();

    SingleSelectComponent.ɵfac = function SingleSelectComponent_Factory(t) {
      return new (t || SingleSelectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_component_helper_service__WEBPACK_IMPORTED_MODULE_1__["ComponentHelperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
    };

    SingleSelectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SingleSelectComponent,
      selectors: [["app-single-select"]],
      inputs: {
        items: "items",
        selectedItem: "selectedItem",
        compWidth: "compWidth",
        isCancelable: "isCancelable"
      },
      outputs: {
        onSelectionChange: "onSelectionChange"
      },
      decls: 7,
      vars: 20,
      consts: [[1, "select-box", 3, "id", "ngStyle", "click"], [1, "select", 3, "ngStyle", "click"], ["class", "clear-text", 3, "click", 4, "ngIf"], ["id", "hide-list", 3, "ngClass", "click"], ["id", "select-list", 3, "ngStyle", "ngClass", "transitionstart", "transitionend"], [3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "clear-text", 3, "click"], [3, "ngClass", "click"]],
      template: function SingleSelectComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SingleSelectComponent_Template_div_click_0_listener($event) {
            return ctx.checkToHide($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SingleSelectComponent_Template_div_click_1_listener() {
            return ctx.showHideList();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SingleSelectComponent_div_3_Template, 1, 0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SingleSelectComponent_Template_div_click_4_listener() {
            return ctx.showHideList();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("transitionstart", function SingleSelectComponent_Template_div_transitionstart_5_listener() {
            return ctx.startTransition();
          })("transitionend", function SingleSelectComponent_Template_div_transitionend_5_listener() {
            return ctx.endTransition();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SingleSelectComponent_div_6_Template, 2, 4, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("id", ctx.compID);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c1, ctx.compWidth + 30 + "px"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c1, ctx.compWidth + "px"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.selectedItem[0]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isCancelable && ctx.selectedItem.length != 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c2, !ctx.hiddenList));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c1, ctx.compWidth + "px"))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](17, _c3, ctx.hiddenList, !ctx.transitionDone));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
      styles: [".select-box[_ngcontent-%COMP%] {\n    height: 30px;\n    width: auto;\n    overflow: visible;\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: flex-start;\n    cursor: pointer;\n}\n\n.select[_ngcontent-%COMP%] {\n    height: 30px;\n    width: 220px;\n    background-color: white;\n    border: 1px solid black;\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    padding: 3px 0 0 6px;\n}\n\n.hide-list[_ngcontent-%COMP%] {\n    height: 30px;\n    width: 30px;\n    background-image: url('Otvaranje liste.svg');\n    background-size: 70%;\n    background-position: center;\n    background-repeat: no-repeat;\n    transition: ease 0.2s;\n    transition-property: transform;\n    cursor: pointer;\n}\n\n.hide-list-rotate[_ngcontent-%COMP%] {\n    transform: rotate(180deg);\n}\n\n.select-list[_ngcontent-%COMP%] {\n    max-height: 100px;\n    width: 220px;\n    background-color: white;\n    border: 1px solid black;\n    border-top: 0;\n    transition-property: max-height;\n    transition: ease 0.2s;\n    display: flex;\n    flex-direction: column;\n    z-index: 1;\n    overflow-y: auto;\n}\n\n.hidden-scroll-bar[_ngcontent-%COMP%]::-webkit-scrollbar {\n    display: none !important;\n}\n\n.select-list-hidden[_ngcontent-%COMP%] {\n    max-height: 0 !important;\n    border: 0 !important;\n}\n\n.select-list[_ngcontent-%COMP%]::-webkit-scrollbar {\n    width: 10px;\n}\n\n.select-list-item[_ngcontent-%COMP%] {\n    min-height: 20px;\n    width: 100%;\n    line-height: 100%;\n    font-size: 14px;\n    padding: 4px 0 0 5px;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n        -ms-user-select: none;\n            user-select: none;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n\n.select-list-item-selected[_ngcontent-%COMP%] {\n    background-color: #0098da;\n    color: white;\n}\n\n.select-list-item[_ngcontent-%COMP%]:hover {\n    background-color: #E6F5FD;\n    color: black;\n}\n\n.clear-text[_ngcontent-%COMP%] {\n    margin-left: -30px;\n    height: 100%;\n    width: 30px;\n    background-image: url('Brisanje sadrzaja text box-a.svg');\n    background-size: 60%;\n    background-position: center;\n    background-repeat: no-repeat;\n    cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoL3NpbmdsZS1zZWxlY3Qvc2luZ2xlLXNlbGVjdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLGVBQWU7SUFDZiwyQkFBMkI7SUFDM0IsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDJCQUEyQjtJQUMzQixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLDRDQUFnRDtJQUNoRCxvQkFBb0I7SUFDcEIsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QixxQkFBcUI7SUFDckIsOEJBQThCO0lBQzlCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLCtCQUErQjtJQUMvQixxQkFBcUI7SUFDckIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixvQkFBb0I7SUFDcEIseUJBQWlCO09BQWpCLHNCQUFpQjtRQUFqQixxQkFBaUI7WUFBakIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osV0FBVztJQUNYLHlEQUE2RDtJQUM3RCxvQkFBb0I7SUFDcEIsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1QixlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvc2VhcmNoL3NpbmdsZS1zZWxlY3Qvc2luZ2xlLXNlbGVjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlbGVjdC1ib3gge1xuICAgIGhlaWdodDogMzBweDtcbiAgICB3aWR0aDogYXV0bztcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uc2VsZWN0IHtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgd2lkdGg6IDIyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgcGFkZGluZzogM3B4IDAgMCA2cHg7XG59XG5cbi5oaWRlLWxpc3Qge1xuICAgIGhlaWdodDogMzBweDtcbiAgICB3aWR0aDogMzBweDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJpbWcvT3R2YXJhbmplIGxpc3RlLnN2Z1wiKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDcwJTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICB0cmFuc2l0aW9uOiBlYXNlIDAuMnM7XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmhpZGUtbGlzdC1yb3RhdGUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG59XG5cbi5zZWxlY3QtbGlzdCB7XG4gICAgbWF4LWhlaWdodDogMTAwcHg7XG4gICAgd2lkdGg6IDIyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIGJvcmRlci10b3A6IDA7XG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogbWF4LWhlaWdodDtcbiAgICB0cmFuc2l0aW9uOiBlYXNlIDAuMnM7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHotaW5kZXg6IDE7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLmhpZGRlbi1zY3JvbGwtYmFyOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uc2VsZWN0LWxpc3QtaGlkZGVuIHtcbiAgICBtYXgtaGVpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyOiAwICFpbXBvcnRhbnQ7XG59XG5cbi5zZWxlY3QtbGlzdDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgIHdpZHRoOiAxMHB4O1xufVxuXG4uc2VsZWN0LWxpc3QtaXRlbSB7XG4gICAgbWluLWhlaWdodDogMjBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBsaW5lLWhlaWdodDogMTAwJTtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgcGFkZGluZzogNHB4IDAgMCA1cHg7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4uc2VsZWN0LWxpc3QtaXRlbS1zZWxlY3RlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwOThkYTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5zZWxlY3QtbGlzdC1pdGVtOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTZGNUZEO1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuLmNsZWFyLXRleHQge1xuICAgIG1hcmdpbi1sZWZ0OiAtMzBweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaW1nL0JyaXNhbmplIHNhZHJ6YWphIHRleHQgYm94LWEuc3ZnXCIpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogNjAlO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SingleSelectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-single-select',
          templateUrl: './single-select.component.html',
          styleUrls: ['./single-select.component.css']
        }]
      }], function () {
        return [{
          type: _services_component_helper_service__WEBPACK_IMPORTED_MODULE_1__["ComponentHelperService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }];
      }, {
        items: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        selectedItem: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        compWidth: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        isCancelable: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        onSelectionChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/services/book.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/book.service.ts ***!
    \******************************************/

  /*! exports provided: BookService */

  /***/
  function srcAppServicesBookServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookService", function () {
      return BookService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _assets_books_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../assets/books.json */
    "./src/assets/books.json");

    var _assets_books_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(
    /*! ../../assets/books.json */
    "./src/assets/books.json", 1);

    var BookService = /*#__PURE__*/function () {
      function BookService() {
        _classCallCheck(this, BookService);

        this.books = _assets_books_json__WEBPACK_IMPORTED_MODULE_1__;
      }

      _createClass(BookService, [{
        key: "searchTitles",
        value: function searchTitles(searchString) {
          return this.books.filter(function (book) {
            return book.Naslov.toLowerCase().includes(searchString.toLowerCase());
          }).map(function (book) {
            return book.Naslov;
          });
        }
      }, {
        key: "getLanguages",
        value: function getLanguages() {
          var languages = [];
          this.books.map(function (book) {
            return book.Jezik;
          }).forEach(function (language) {
            if (!languages.includes(language)) languages.push(language);
          });
          return languages;
        }
      }, {
        key: "getYears",
        value: function getYears() {
          var min = Math.min.apply(Math, _toConsumableArray(this.books.map(function (book) {
            return parseInt(book["Godina izdanja"]);
          })));
          var max = new Date().getFullYear();
          var yearList = [];

          for (var index = min; index <= max; index++) {
            yearList.push(index);
          }

          return yearList;
        }
      }, {
        key: "getCategories",
        value: function getCategories() {
          var categories = [];
          this.books.map(function (book) {
            return book.Oblast;
          }).forEach(function (category) {
            if (!categories.includes(category)) categories.push(category);
          });
          return categories;
        }
      }, {
        key: "getBookByISBN",
        value: function getBookByISBN(isbn) {
          return this.books.filter(function (book) {
            return book.ISBN === isbn;
          }).length > 0 ? this.books.filter(function (book) {
            return book.ISBN === isbn;
          })[0] : null;
        }
      }, {
        key: "getBooks",
        value: function getBooks(filter, sort) {
          var books = this.books;
          if (!this.isEmpty(filter.title)) books = books.filter(function (book) {
            return book.Naslov.toLowerCase().includes(filter.title.toLowerCase());
          });
          if (!this.isEmpty(filter.categories) && filter.categories.length > 0) books = books.filter(function (book) {
            return filter.categories.includes(book.Oblast);
          });
          if (!this.isEmpty(filter.languages) && filter.languages.length > 0) books = books.filter(function (book) {
            return filter.languages.includes(book.Jezik);
          });
          if (!this.isEmpty(filter.price)) books = books.filter(function (book) {
            return parseFloat(book.Cena) <= filter.price;
          });
          if (!this.isEmpty(filter.yearFrom)) books = books.filter(function (book) {
            return parseInt(book["Godina izdanja"]) >= filter.yearFrom;
          });
          if (!this.isEmpty(filter.yearTo)) books = books.filter(function (book) {
            return parseInt(book["Godina izdanja"]) <= filter.yearTo;
          });

          if (!this.isEmpty(sort)) {
            if (sort === 'Cene rastuće') books = books.sort(function (a, b) {
              return parseFloat(a.Cena) - parseFloat(b.Cena);
            });else if (sort === 'Cene opadajuće') books = books.sort(function (a, b) {
              return parseFloat(b.Cena) - parseFloat(a.Cena);
            });else if (sort === 'Naslovi rastuće') {
              books = books.sort(function (a, b) {
                if (a.Naslov.toLocaleLowerCase() < b.Naslov.toLowerCase()) return 1;else return -1;
              });
            } else if (sort === 'Naslovi opadajuće') {
              books = books.sort(function (a, b) {
                if (a.Naslov.toLocaleLowerCase() > b.Naslov.toLowerCase()) return 1;else return -1;
              });
            }
          }

          return books;
        }
      }, {
        key: "isEmpty",
        value: function isEmpty(variable) {
          if (variable === null) return true;
          if (variable === undefined) return true;
          if (variable === NaN) return true;
          if (variable === "") return true;
          if (variable === 0) return true;
          return false;
        }
      }]);

      return BookService;
    }();

    BookService.ɵfac = function BookService_Factory(t) {
      return new (t || BookService)();
    };

    BookService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: BookService,
      factory: BookService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BookService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/cart.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/cart.service.ts ***!
    \******************************************/

  /*! exports provided: CartService */

  /***/
  function srcAppServicesCartServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartService", function () {
      return CartService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _datamodel_cart_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../datamodel/cart-item */
    "./src/app/datamodel/cart-item.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _book_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./book.service */
    "./src/app/services/book.service.ts");

    var CartService = /*#__PURE__*/function () {
      function CartService(bookService) {
        _classCallCheck(this, CartService);

        this.bookService = bookService;
        this.LS_ITEM_NAME = 'mojaKnjizaraKorpa';
        this.storageSub = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
      }

      _createClass(CartService, [{
        key: "getEmitter",
        value: function getEmitter() {
          return this.storageSub.asObservable();
        }
      }, {
        key: "getItems",
        value: function getItems() {
          var items = JSON.parse(localStorage.getItem(this.LS_ITEM_NAME));
          return items ? items : [];
        }
      }, {
        key: "getBooks",
        value: function getBooks() {
          var _this8 = this;

          var books = [];
          this.getItems().forEach(function (item) {
            return books.push(_this8.bookService.getBookByISBN(item.bookIsbn));
          });
          return books;
        }
      }, {
        key: "getPrice",
        value: function getPrice() {
          var _this9 = this;

          var price = 0;
          this.getItems().forEach(function (item) {
            return price += item.count * parseFloat(_this9.bookService.getBookByISBN(item.bookIsbn).Cena);
          });
          return price;
        }
      }, {
        key: "getCount",
        value: function getCount() {
          var count = 0;
          this.getItems().forEach(function (item) {
            return count += item.count;
          });
          return count;
        }
      }, {
        key: "addItem",
        value: function addItem(bookIsbn) {
          var items = this.getItems();
          if (items.filter(function (item) {
            return item.bookIsbn === bookIsbn;
          }).length > 0) items.filter(function (item) {
            return item.bookIsbn === bookIsbn;
          })[0].count++;else items.push(new _datamodel_cart_item__WEBPACK_IMPORTED_MODULE_1__["CartItem"](bookIsbn, 1));
          localStorage.setItem(this.LS_ITEM_NAME, JSON.stringify(items));
          this.storageSub.next('changed');
        }
      }, {
        key: "removeItem",
        value: function removeItem(bookIsbn) {
          var items = this.getItems();

          if (items.filter(function (item) {
            return item.bookIsbn === bookIsbn;
          }).length > 0) {
            if (items.filter(function (item) {
              return item.bookIsbn === bookIsbn;
            })[0].count > 1) items.filter(function (item) {
              return item.bookIsbn === bookIsbn;
            })[0].count--;else items.splice(items.indexOf(items.filter(function (item) {
              return item.bookIsbn === bookIsbn;
            })[0]), 1);
          }

          localStorage.setItem(this.LS_ITEM_NAME, JSON.stringify(items));
          this.storageSub.next('changed');
        }
      }, {
        key: "removeAllOfItem",
        value: function removeAllOfItem(bookIsbn) {
          var items = this.getItems();

          if (items.filter(function (item) {
            return item.bookIsbn === bookIsbn;
          }).length > 0) {
            items.splice(items.indexOf(items.filter(function (item) {
              return item.bookIsbn === bookIsbn;
            })[0]), 1);
          }

          localStorage.setItem(this.LS_ITEM_NAME, JSON.stringify(items));
          this.storageSub.next('changed');
        }
      }, {
        key: "removeAll",
        value: function removeAll() {
          localStorage.removeItem(this.LS_ITEM_NAME);
          this.storageSub.next('changed');
        }
      }]);

      return CartService;
    }();

    CartService.ɵfac = function CartService_Factory(t) {
      return new (t || CartService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_book_service__WEBPACK_IMPORTED_MODULE_3__["BookService"]));
    };

    CartService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CartService,
      factory: CartService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CartService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _book_service__WEBPACK_IMPORTED_MODULE_3__["BookService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/component-helper.service.ts":
  /*!******************************************************!*\
    !*** ./src/app/services/component-helper.service.ts ***!
    \******************************************************/

  /*! exports provided: ComponentHelperService */

  /***/
  function srcAppServicesComponentHelperServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComponentHelperService", function () {
      return ComponentHelperService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! uuid */
    "./node_modules/uuid/dist/esm-browser/index.js");

    var ComponentHelperService = /*#__PURE__*/function () {
      function ComponentHelperService() {
        _classCallCheck(this, ComponentHelperService);
      }

      _createClass(ComponentHelperService, [{
        key: "getUniqueID",
        value: function getUniqueID() {
          return Object(uuid__WEBPACK_IMPORTED_MODULE_1__["v4"])();
        }
      }, {
        key: "isDescendantOfByClass",
        value: function isDescendantOfByClass(element, className) {
          if (element) {
            if (element.tagName === "BODY") return false;
            if (element.classList.contains(className)) return true;
            return this.isDescendantOfByClass(element.parentNode, className);
          } else return false;
        }
      }, {
        key: "isDescendantOfById",
        value: function isDescendantOfById(element, id) {
          if (element) {
            if (element.tagName === "BODY") return false;
            if (element.id === id) return true;
            return this.isDescendantOfById(element.parentNode, id);
          } else return false;
        }
      }]);

      return ComponentHelperService;
    }();

    ComponentHelperService.ɵfac = function ComponentHelperService_Factory(t) {
      return new (t || ComponentHelperService)();
    };

    ComponentHelperService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ComponentHelperService,
      factory: ComponentHelperService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ComponentHelperService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/thank-you/thank-you.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/thank-you/thank-you.component.ts ***!
    \**************************************************/

  /*! exports provided: ThankYouComponent */

  /***/
  function srcAppThankYouThankYouComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ThankYouComponent", function () {
      return ThankYouComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ThankYouComponent = /*#__PURE__*/function () {
      function ThankYouComponent() {
        _classCallCheck(this, ThankYouComponent);
      }

      _createClass(ThankYouComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ThankYouComponent;
    }();

    ThankYouComponent.ɵfac = function ThankYouComponent_Factory(t) {
      return new (t || ThankYouComponent)();
    };

    ThankYouComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ThankYouComponent,
      selectors: [["app-thank-you"]],
      decls: 9,
      vars: 0,
      consts: [[1, "baner"], [1, "thanks-conteiner"], [1, "thanks-content"], [1, "thanks-head"]],
      template: function ThankYouComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Hvala vam na ukazanom poverenju!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Va\u0161a porud\u017Ebina \u0107e biti realizovana u najkra\u0107em mogu\u0107em roku.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".baner[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 400px;\n    background-image: url('Header fotografija.jpg');\n    background-position: left;\n    background-repeat: no-repeat;\n    background-size: cover;\n}\n\n.thanks-conteiner[_ngcontent-%COMP%] {\n    width: 100%;\n    height: auto;\n    background-color: rgb(230, 231, 232);\n}\n\n.thanks-content[_ngcontent-%COMP%] {\n    max-width: 1200px;\n    margin: auto;\n    background-color: white;\n    display: flex;\n    flex-wrap: wrap;\n    align-items: center;\n    justify-content: center;\n    padding-bottom: 50px;\n}\n\n.thanks-head[_ngcontent-%COMP%] {\n    width: 98%;\n    min-height: 120px;\n    margin: 10px 1% 0 1%;\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n    justify-content: center;\n    align-items: center;\n    padding: 0;\n}\n\n.thanks-head[_ngcontent-%COMP%]    > h1[_ngcontent-%COMP%] {\n    margin: 60px 0 30px 0;\n}\n\n.thanks-head[_ngcontent-%COMP%]    > h2[_ngcontent-%COMP%] {\n    margin: 40px 0 30px 0;\n}\n\n.thanks-head[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    width: 200px;\n    height: 200px;\n    background-image: url('kissclipart-thank-you-page-icon-clipart-youtube-hatch-family-d-379657517560a11f.png');\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: 90%;\n}\n\n@media screen and (max-width:1000px){\n    .thanks-head[_ngcontent-%COMP%]    > h1[_ngcontent-%COMP%], .thanks-head[_ngcontent-%COMP%]    > h2[_ngcontent-%COMP%] {\n       text-align: center;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGhhbmsteW91L3RoYW5rLXlvdS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYiwrQ0FBbUQ7SUFDbkQseUJBQXlCO0lBQ3pCLDRCQUE0QjtJQUM1QixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFVBQVU7QUFDZDs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFHQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsNEdBQWdIO0lBQ2hILDJCQUEyQjtJQUMzQiw0QkFBNEI7SUFDNUIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0k7T0FDRyxrQkFBa0I7SUFDckI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3RoYW5rLXlvdS90aGFuay15b3UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA0MDBweDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJpbWcvSGVhZGVyIGZvdG9ncmFmaWphLmpwZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0O1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLnRoYW5rcy1jb250ZWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMwLCAyMzEsIDIzMik7XG59XG5cbi50aGFua3MtY29udGVudCB7XG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcGFkZGluZy1ib3R0b206IDUwcHg7XG59XG5cbi50aGFua3MtaGVhZCB7XG4gICAgd2lkdGg6IDk4JTtcbiAgICBtaW4taGVpZ2h0OiAxMjBweDtcbiAgICBtYXJnaW46IDEwcHggMSUgMCAxJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMDtcbn1cblxuLnRoYW5rcy1oZWFkID4gaDEge1xuICAgIG1hcmdpbjogNjBweCAwIDMwcHggMDtcbn1cblxuLnRoYW5rcy1oZWFkID4gaDIge1xuICAgIG1hcmdpbjogNDBweCAwIDMwcHggMDtcbn1cblxuXG4udGhhbmtzLWhlYWQgPiBkaXYge1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImltZy9raXNzY2xpcGFydC10aGFuay15b3UtcGFnZS1pY29uLWNsaXBhcnQteW91dHViZS1oYXRjaC1mYW1pbHktZC0zNzk2NTc1MTc1NjBhMTFmLnBuZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDkwJTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDoxMDAwcHgpe1xuICAgIC50aGFua3MtaGVhZCA+IGgxLCAudGhhbmtzLWhlYWQgPiBoMiB7XG4gICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ThankYouComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-thank-you',
          templateUrl: './thank-you.component.html',
          styleUrls: ['./thank-you.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/assets/books.json":
  /*!*******************************!*\
    !*** ./src/assets/books.json ***!
    \*******************************/

  /*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, default */

  /***/
  function srcAssetsBooksJson(module) {
    module.exports = JSON.parse("[{\"ISBN\":\"978-0596805524\",\"Naslov\":\"JavaScript: The Definitive Guide: Activate Your Web Pages (Definitive Guides)\",\"Oblast\":\"Javascript\",\"Autor 1\":\"David Flanagan\",\"Jezik\":\"EN\",\"Godina izdanja\":\"2008\",\"Korice\":\"001.jpg\",\"Cena\":\"2500.00\",\"Opis\":\"Since 1996, JavaScript: The Definitive Guide has been the bible for JavaScript programmers—a programmer's guide and comprehensive reference to the core language and to the client side JavaScript APIs defined by web browsers. The 6th edition covers HTML5 and ECMAScript 5. Many chapters have been completely rewritten to bring them in line with today's best web development practices. New chapters in this edition document jQuery and server side JavaScript. It's recommended for experienced programmers who want to learn the programming language of the Web, and for current JavaScript programmers who want to master it.\"},{\"ISBN\":\"978-1593279509\",\"Naslov\":\"Eloquent JavaScript, 3rd Edition: A Modern Introduction to Programming\",\"Oblast\":\"Javascript\",\"Autor 1\":\"Marijn Haverbeke\",\"Jezik\":\"EN\",\"Godina izdanja\":\"2018\",\"Korice\":\"002.jpg\",\"Cena\":\"1700.00\",\"Opis\":\"JavaScript lies at the heart of almost every modern web application, from social apps like Twitter to browser-based game frameworks like Phaser and Babylon. Though simple for beginners to pick up and play with, JavaScript is a flexible, complex language that you can use to build full-scale applications. This much anticipated and thoroughly revised third edition of Eloquent JavaScript dives deep into the JavaScript language to show you how to write beautiful, effective code. It has been updated to reflect the current state of Java¬Script and web browsers and includes brand-new material on features like class notation, arrow functions, iterators, async functions, template strings, and block scope. A host of new exercises have also been added to test your skills and keep you on track.\"},{\"ISBN\":\"978-1119366447\",\"Naslov\":\"Professional JavaScript for Web Developers\",\"Oblast\":\"Javascript\",\"Autor 1\":\"Matt Frisbie\",\"Jezik\":\"EN\",\"Godina izdanja\":\"2019\",\"Korice\":\"004.jpg\",\"Cena\":\"8000.00\",\"Opis\":\"Professional JavaScript for Web Developers is the essential guide to next-level JavaScript development. Written for intermediate-to-advanced programmers, this book jumps right into the technical details to help you clean up your code and become a more sophisticated JavaScript developer. From JavaScript-specific object-oriented programming and inheritance, to combining JavaScript with HTML and other markup languages, expert instruction walks you through the fundamentals and beyond. This new fourth edition has been updated to cover through ECMAScript 2019; new frameworks and libraries, new techniques, new APIs, and more are explained in detail for the professional developer, with a practical focus that helps you put your new skills to work on real-world projects.\\r\\n\\r\\nThe latest--and most dramatic--ES release is already being incorporated into JavaScript engines in major browsers; this, coupled with the rise in mobile web traffic increasing demand for responsive, dynamic web design, means that all web developers need to update their skills--and this book is your ideal resource for quick, relevant guidance.\"},{\"ISBN\":\"978-0596517748\",\"Naslov\":\"JavaScript: The Good Parts\",\"Oblast\":\"Javascript\",\"Autor 1\":\"Douglas Crockford\",\"Jezik\":\"EN\",\"Godina izdanja\":\"2008\",\"Korice\":\"005.jpg\",\"Cena\":\"2500.00\",\"Opis\":\"Most programming languages contain good and bad parts, but JavaScript has more than its share of the bad, having been developed and released in a hurry before it could be refined. This authoritative book scrapes away these bad features to reveal a subset of JavaScript that's more reliable, readable, and maintainable than the language as a whole-a subset you can use to create truly extensible and efficient code. Considered the JavaScript expert by many people in the development community, author Douglas Crockford identifies the abundance of good ideas that make JavaScript an outstanding object-oriented programming language-ideas such as functions, loose typing, dynamic objects, and an expressive object literal notation. Unfortunately, these good ideas are mixed in with bad and downright awful ideas, like a programming model based on global variables. When Java applets failed, JavaScript became the language of the Web by default, making its popularity almost completely independent of its qualities as a programming language. In JavaScript: The Good Parts, Crockford finally digs through the steaming pile of good intentions and blunders to give you a detailed look at all the genuinely elegant parts of JavaScript, including: Syntax Objects Functions Inheritance Arrays Regular expressions Methods Style Beautiful features The real beauty? As you move ahead with the subset of JavaScript that this book presents, you'll also sidestep the need to unlearn all the bad parts. Of course, if you want to find out more about the bad parts and how to use them badly, simply consult any other JavaScript book. With JavaScript: The Good Parts, you'll discover a beautiful, elegant, lightweight and highly expressive language that lets you create effective code, whether you're managing object libraries or just trying to get Ajax to run fast. If you develop sites or applications for the Web, this book is an absolute must.\"},{\"ISBN\":\"978-5551-56521\",\"Naslov\":\"Secrets of the JavaScript Ninja\",\"Oblast\":\"Javascript\",\"Autor 1\":\"John Resig \",\"Autor 2\":\"Bear Bibeault\",\"Autor 3\":\"Bear Bibeault\",\"Jezik\":\"EN\",\"Godina izdanja\":\"2015\",\"Korice\":\"006.jpg\",\"Cena\":\"1512.00\",\"Opis\":\"More than ever, the web is a universal platform for all types of applications, and JavaScript is the language of the web. If you're serious about web development, it's not enough to be a decent JavaScript coder. You need to be ninja stealthy, efficient, and ready for anything. This audiobook shows you how.  Secrets of the JavaScript Ninja, Second Edition uses practical examples to clearly illustrate each core concept and technique. This completely revised edition shows you how to master key JavaScript concepts such as functions, closures, objects, prototypes, and promises. It covers APIs such as the DOM, events, and timers. You'll discover best practice techniques such as testing and cross-browser development, all taught from the perspective of skilled JavaScript practitioners.  \"},{\"ISBN\":\"978-0134685991\",\"Naslov\":\"Effective Java\",\"Oblast\":\"Java\",\"Autor 1\":\"Joshua Bloch\",\"Jezik\":\"EN\",\"Godina izdanja\":\"2018\",\"Korice\":\"007.jpg\",\"Cena\":\"4475.00\",\"Opis\":\"Java has changed dramatically since the previous edition of Effective Java was published shortly after the release of Java 6. This Jolt award-winning classic has now been thoroughly updated to take full advantage of the latest language and library features. The support in modern Java for multiple paradigms increases the need for specific best-practices advice, and this book delivers. As in previous editions, each chapter of Effective Java, Third Edition, consists of several “items,” each presented in the form of a short, stand-alone essay that provides specific advice, insight into Java platform subtleties, and updated code examples. The comprehensive descriptions and explanations for each item illuminate what to do, what not to do, and why.\"},{\"ISBN\":\"978-1260440218\",\"Naslov\":\"Java: A Beginner's Guide, Eighth Edition\",\"Oblast\":\"Java\",\"Autor 1\":\"Herbert Schildt\",\"Jezik\":\"EN\",\"Godina izdanja\":\"2018\",\"Korice\":\"008.jpg\",\"Cena\":\"2145.00\",\"Opis\":\"Fully updated for Java Platform, Standard Edition 11 (Java SE 11), Java: A Beginner’s Guide, Eighth Edition gets you started programming in Java right away. Best-selling programming author Herb Schildt begins with the basics, such as how to create, compile, and run a Java program. He then moves on to the keywords, syntax, and constructs that form the core of the Java language. The book also covers some of Java’s more advanced features, including multithreaded programming, generics, lambda expressions, modules, and Swing. As an added bonus, an introduction to JShell, Java’s interactive programming tool, is included. Best of all, it’s written in the clear, crisp, uncompromising style that has made Schildt the choice of millions worldwide.\"},{\"ISBN\":\"978-0596009205\",\"Naslov\":\"Head First Java\",\"Oblast\":\"Java\",\"Autor 1\":\"Kathy Sierra\",\"Autor 2\":\"Bert Bates\",\"Jezik\":\"EN\",\"Godina izdanja\":\"2005\",\"Korice\":\"009.jpg\",\"Cena\":\"5574.00\",\"Opis\":\"Learning a complex new language is no easy task especially when it s an object-oriented computer programming language like Java. You might think the problem is your brain. It seems to have a mind of its own, a mind that doesn't always want to take in the dry, technical stuff you're forced to study. The fact is your brain craves novelty. It's constantly searching, scanning, waiting for something unusual to happen. After all, that's the way it was built to help you stay alive. It takes all the routine, ordinary, dull stuff and filters it to the background so it won't interfere with your brain's real work--recording things that matter. How does your brain know what matters? It's like the creators of the Head First approach say, suppose you're out for a hike and a tiger jumps in front of you, what happens in your brain? Neurons fire. Emotions crank up. Chemicals surge. That's how your brain knows.\"},{\"ISBN\":\"978-1118490396\",\"Naslov\":\"Excel 2013 Power Programming with VBA\",\"Oblast\":\"Excel VBA\",\"Autor 1\":\"John Walkenbach\",\"Jezik\":\"EN\",\"Godina izdanja\":\"2013\",\"Korice\":\"010.jpg\",\"Cena\":\"1157.00\",\"Opis\":\"The new Excel 2013 boasts updated features, enhanced power, and new capabilities. Naturally, that means John Walkenbach returns with a new edition of his bestselling VBA Programming book and covers all the methods and tools you need to know in order to program with Excel. With this comprehensive guide, \\\"Mr. Spreadsheet\\\" shows you how to maximize your Excel experience using professional spreadsheet application development tips from his own personal bookshelf.\\r\\n\\r\\nFeaturing a complete introduction to Visual Basic for Applications and fully updated for the latest features of Excel 2013, this essential reference includes an analysis of Excel application development and is packed with procedures, tips, and ideas for expanding Excel's capabilities with VBA.\"},{\"ISBN\":\"978-1509306114\",\"Naslov\":\"Microsoft Excel 2019 VBA and Macros (Business Skills)\",\"Oblast\":\"Excel VBA\",\"Autor 1\":\"Bill Jelen\",\"Autor 2\":\"Tracy Syrstad\",\"Jezik\":\"EN\",\"Godina izdanja\":\"2019\",\"Korice\":\"011.jpg\",\"Cena\":\"1114.00\",\"Opis\":\"Renowned Excel experts Bill Jelen (MrExcel) and Tracy Syrstad explain how to build more powerful, reliable, and efficient Excel spreadsheets. Use this guide to automate virtually any routine Excel task: save yourself hours, days, maybe even weeks. Make Excel do things you thought were impossible, discover macro techniques you won’t find anywhere else, and create automated reports that are amazingly powerful. Bill Jelen and Tracy Syrstad help you instantly visualize information to make it actionable; capture data from anywhere, and use it anywhere; and automate the best new features in Excel 2019 and Excel in Office 365. You’ll find simple, step-by-step instructions, real-world case studies, and 50 workbooks packed with examples and complete, easy-to-adapt solutions.\"},{\"ISBN\":\"978-0131103627\",\"Naslov\":\"C Programming Language\",\"Oblast\":\"C/C++\",\"Autor 1\":\"Brian W. Kernighan\",\"Autor 2\":\"Dennis M. Ritchie\",\"Jezik\":\"EN\",\"Godina izdanja\":\"1988\",\"Korice\":\"012.jpg\",\"Cena\":\"9584.00\",\"Opis\":\"The authors present the complete guide to ANSI standard C language programming. Written by the developers of C, this new version helps readers keep up with the finalized ANSI standard for C while showing how to take advantage of C's rich set of operators, economy of expression, improved control flow, and data structures. The 2/E has been completely rewritten with additional examples and problem sets to clarify the implementation of difficult language constructs. For years, C programmers have let K&R guide them to building well-structured and efficient programs.\"},{\"ISBN\":\"978-0321563842\",\"Naslov\":\"The C++ Programming Language\",\"Oblast\":\"C/C++\",\"Autor 1\":\"Bjarne Stroustrup\",\"Jezik\":\"EN\",\"Godina izdanja\":\"2013\",\"Korice\":\"013.jpg\",\"Cena\":\"1125.00\",\"Opis\":\"This book features an enhanced, layflat binding, which allows the book to stay open more easily when placed on a flat surface. This special binding method—noticeable by a small space inside the spine—also increases durability. C++11 has arrived: thoroughly master it, with the definitive new guide from C++ creator Bjarne Stroustrup, C++ Programming Language, Fourth Edition! The brand-new edition of the worlds most trusted and widely read guide to C++, it has been comprehensively updated for the long-awaited C++11 standard. Extensively rewritten to present the C++11 language, standard library, and key design techniques as an integrated whole, Stroustrup thoroughly addresses changes that make C++11 feel like a whole new language, offering definitive guidance for leveraging its improvements in performance, reliability, and clarity. C++ programmers around the world recognize Bjarne Stoustrup as the go-to expert for the absolutely authoritative and exceptionally useful information they need to write outstanding C++ programs. Now, as C++11 compilers arrive and development organizations migrate to the new standard, they know exactly where to turn once more: Stoustrup C++ Programming Language, Fourth Edition.\"},{\"ISBN\":\"978-0789757746\",\"Naslov\":\"C++ in One Hour a Day, Sams Teach Yourself\",\"Oblast\":\"C/C++\",\"Autor 1\":\"Siddhartha Rao\",\"Jezik\":\"EN\",\"Godina izdanja\":\"2017\",\"Korice\":\"014.jpg\",\"Cena\":\"1250.00\",\"Opis\":\"In just one hour a day, you’ll have all the skills you need to begin programming in C++. With this complete tutorial, you’ll quickly master the basics, and then move on to more advanced features and concepts. Completely updated for the C++14 standard, with a preview of C++17, this book presents the language from a practical point of view, helping you learn how to use C++ to create faster, simpler, and more efficient C++ applications.\"},{\"ISBN\":\"978-1789343625\",\"Naslov\":\"Extreme C: Taking you to the limit in Concurrency, OOP, and the most advanced capabilities of C\",\"Oblast\":\"C/C++\",\"Autor 1\":\"Kamran Amini\",\"Jezik\":\"BG\",\"Godina izdanja\":\"2019\",\"Korice\":\"015.jpg\",\"Cena\":\"4336.00\",\"Opis\":\"There's a lot more to C than knowing the language syntax. The industry looks for developers with a rigorous, scientific understanding of the principles and practices. Extreme C will teach you to use C's advanced low-level power to write effective, efficient systems. This intensive, practical guide will help you become an expert C programmer. Building on your existing C knowledge, you will master preprocessor directives, macros, conditional compilation, pointers, and much more. You will gain new insight into algorithm design, functions, and structures. You will discover how C helps you squeeze maximum performance out of critical, resource-constrained applications. C still plays a critical role in 21st-century programming, remaining the core language for precision engineering, aviations, space research, and more. This book shows how C works with Unix, how to implement OO principles in C, and fully covers multi-processing.\"},{\"ISBN\":\"978-111-22-336\",\"Naslov\":\"Java 9\",\"Oblast\":\"Java\",\"Autor 1\":\"Edward Lavieri\",\"Autor 2\":\"Peter Verhas\",\"Jezik\":\"SR\",\"Godina izdanja\":\"2018\",\"Korice\":\"016.jpg\",\"Cena\":\"1760.00\",\"Opis\":\"Java 9 i nove funkcije u njemu poboljšavaju Javu - jedan od jezika koji programeri najčešće koriste za izgradnju robusnih softverskih aplikacija. U Javi 9 je stavljen poseban naglasak na integraciju modularnosti pomoću alatke Jigsaw. Ova knjiga predstavlja jednostavno uputstvo za učenje Java 9 programskog jezika. Dati su pregled i objašnjenje novih funkcija koje su uvedene u jezik Java 9 i važnosti novih interfejsa API i poboljšanja. Neke od novih funkcija Jave 9 su inovativne, pa, ako ste iskusni programer, moći ćete, ukoliko ih naučite, da izradite ekonomičniju poslovnu aplikaciju. Date su nove praktične smernice za primenu novostečenog znanja u vezi sa Javom 9 i dodatne informacije o budućem razvoju Java platforme. Ova knjiga će vam pomoći da poboljšate produktivnost, tako što ćete vašu aplikaciju učiniti bržom. Kada naučite najbolje tehnike koja se koriste u Javi, moći ćete da rešavate programerske probleme u vašoj organizaciji.\"},{\"ISBN\":\"978-255-665-84544\",\"Naslov\":\"HTML5 CSS3 I JAVA SCRIPT Intergrisane tehnologije za razvoj veb strana\",\"Oblast\":\"Javascript\",\"Autor 1\":\"Laura Lemai\",\"Autor 2\":\"Rejf Kolburn\",\"Autor 3\":\"Dženifer Kirnin\",\"Jezik\":\"SR\",\"Godina izdanja\":\"2016\",\"Korice\":\"017.jpg\",\"Cena\":\"2970.00\",\"Opis\":\"Potpuno izmenjen i ažuriran, sa primerima napisanim u skladu sa HTML5, CSS3 i savremenom praksom veb razvoja, ovaj jednostavan i korak-po-korak priručnik pomaže vam da brzo savladate osnove HTML-a i CCS-a, pre nego što pređete na naprednije teme, kao što su grafika, video i interakcija sa JavaScriptom. Samo jedan sat dnevno dovoljno je da naučite veštine potrebne za dizajniranje, kreiranje i održavanje veb sajta profesionalnog izgleda. Prethodno iskustvo nije potrebno. Prateći kratke, jednočasovne lekcije u ovoj knjizi, svako može naučiti osnove veb razvoja\"},{\"ISBN\":\"978-255-667-844\",\"Naslov\":\"Naučite Javascript\",\"Oblast\":\"Javascript\",\"Autor 1\":\"Kajl Simpson\",\"Jezik\":\"SR\",\"Godina izdanja\":\"2016\",\"Korice\":\"018.jpg\",\"Cena\":\"3200.00\",\"Opis\":\"Lako je naučiti delove JavaScripta, ali je znatno teže savladati ga potpuno – ili čak samo dovoljno – bez obzira na to da li ste početnik ili ga koristite već godinama. Knjiga Naučite JavaScript pomoći će vam da bolje razumete JavaScript – čak i one zapetljane delove jezika koje i mnogi iskusni JavaScript programeri izbegavaju. Prvi deo knjige obezbeđuje potrebnu osnovu čitaocima s ograničenim iskustvom u programiranju. Savladavanje osnovnih gradivnih blokova programa i osnovnih mehanizama JavaScripta, pripremiće vas za proučavanje drugih, detaljnijih delova knjige i postaviti na put ka stvarnom upoznavanju JavaScripta. Drugi deo vas vodi kroz opsege vidljivosti i ograde – dva ključna koncepta koja treba da savladate kako biste postali bolji i efikasniji JavaScript programer. Upoznaćete sve vrste opsega vidljivosti i otkriti kako se koriste ograde za sinhrone i asinhrone poslove, uključujući i izradu JavaScript biblioteka.\"},{\"ISBN\":\"978-255-669-847\",\"Naslov\":\"Java 8 programiranje\",\"Oblast\":\"Java\",\"Autor 1\":\"Javov Fain\",\"Jezik\":\"SR\",\"Godina izdanja\":\"2015\",\"Korice\":\"019.jpg\",\"Cena\":\"2640.00\",\"Opis\":\"Java 8 programiranje, prevod drugog izdanja, je vaš potpuni vodič za početnike Java programskog jezika, sa lekcijama koje se mogu jednostavno pratiti i dodatnim vežbama koje pomažu da brzo počnete sa samostalnim radom.\\r\\n\\r\\nInstrukcije tipa „korak-po-korak“ vode vas kroz osnove objektno-orijentisanog programiranja, sintaksu, interfejse, i još mnogo toga, kako biste stekli veštine za razvoj igara, web aplikacija, mrežnih aplikacija i automata.\\r\\n\\r\\nOvo drugo izdanje je dopunjeno tako da obuhvata Java SE 8 i Java EE 7 verzije, a uključuje nove informacije o GUI osnovama, lambda izrazima, API interfejsima za tokove, WebSocket interfejsu i Gradle alatu.\"},{\"ISBN\":\"978-255-669-545\",\"Naslov\":\"HTML5 CSS3 i Javascript\",\"Oblast\":\"Javascript\",\"Autor 1\":\"J.D. Gauchat\",\"Jezik\":\"SR\",\"Godina izdanja\":\"2014\",\"Korice\":\"020.jpg\",\"Cena\":\"2500.00\",\"Opis\":\"Knjiga postupno vodi čitaoca ka sticanju neophodnih znanja i savladavanju složenih tema iz specifikacije za jezik HTML5. Kada je pročitate, znaćete kako da strukturirate svoje HTML5 dokumente, kako da ih stilizujete koristeći CSS3 i kako da radite s najmoćnijim API-jima JavaScripta.\\r\\nOva knjiga nije uvod u HTML5 već kompletan priručnik iz kojeg ćete naučiti kako da napravite atraktivne veb lokacije i aplikacije od samog početka. U svakom poglavlju razmatraju se osnovni i složeni koncepti jezika HTML5, CSS3 i JavaScript. Infomacije su podržane korisnim i potpuno funkcionalnim primerima, koji i početnike i stručnjake vode kroz svaku pojedinačnu oznaku, stil i funkciju obuhvaćenu specifikacijama. U primerima se postupno uvode sve složenije teme, tako da svima budu pristupačne i razumljive.\"},{\"ISBN\":\"978-255-669-559\",\"Naslov\":\"C++ za 21 dan\",\"Oblast\":\"C/C++\",\"Autor 1\":\"Jesse Liberty\",\"Jezik\":\"SR\",\"Godina izdanja\":\"2003\",\"Korice\":\"021.jpg\",\"Cena\":\"2640.00\",\"Opis\":\"Naučite C++ za 21 dan, predstavlja priručnik-vodič za učenje objektno-orijentisanog dizajniranja, programiranja i analize. Pomoću ove knjige steći ćete celovito znanje o svim baznim konceptima, uključujući programski tok, upravljanje memorijom, kompajliranje i debagovanje. Da biste lakše pamtili i učili, knjigu smo osmislili u formi radionice, podelivši je na 21 poglavlje, tj. na 21 dan. Koncepti su razloženi na poglavlja koja se lako savladavaju pomoću brojnih listinga koji ilustruju ne samo kod, već ukazuju kako da taj kod učinite još boljim. Ovo izdanje je kompletno revidirano, ažurirano i u skladu sa ANSI standardom.\"}]");
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/dimitrije/Fax/3godina/web rpogramiranje/Book-store/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map