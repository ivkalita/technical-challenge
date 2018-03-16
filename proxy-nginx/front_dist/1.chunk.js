webpackJsonp([1],{

/***/ "./src/app/modules/landing/components/page/page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\n    <h1>Welcome to <b class=\"text-primary\">Genetic Results</b></h1>\n    <h4>The best Genetic Results you've ever seen.</h4>\n    <h6>Secure. Precise. Fast.</h6>\n</div>\n\n<div class=\"auth-container\" *ngIf=\"!userLoggedIn\">\n    <button class=\"btn btn-primary btn-lg\" (click)=\"register()\">Sign Up!</button>\n    <p>Already have an account? <a href=\"/user/login\">Log in.</a></p>\n</div>\n\n<div class=\"check-container\" *ngIf=\"userLoggedIn\">\n    <button class=\"btn btn-success btn-lg\" (click)=\"goToProfile()\">Go and check your results</button>\n</div>"

/***/ }),

/***/ "./src/app/modules/landing/components/page/page.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div.jumbotron {\n  text-align: center; }\n\ndiv.auth-container {\n  text-align: center; }\n  div.auth-container button {\n    margin-bottom: 10px; }\n\ndiv.check-container {\n  text-align: center; }\n  div.check-container button {\n    margin-bottom: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/modules/landing/components/page/page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_services_auth_service__ = __webpack_require__("./src/app/modules/core/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PageComponent = (function () {
    function PageComponent(_authService, _router) {
        this._authService = _authService;
        this._router = _router;
    }
    Object.defineProperty(PageComponent.prototype, "userLoggedIn", {
        get: function () {
            return this._authService.user !== null;
        },
        enumerable: true,
        configurable: true
    });
    PageComponent.prototype.register = function () {
        return this._router.navigate(['/user/register']);
    };
    PageComponent.prototype.goToProfile = function () {
        return this._router.navigate(['/user']);
    };
    return PageComponent;
}());
PageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-page',
        template: __webpack_require__("./src/app/modules/landing/components/page/page.component.html"),
        styles: [__webpack_require__("./src/app/modules/landing/components/page/page.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__core_services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__core_services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], PageComponent);

var _a, _b;
//# sourceMappingURL=page.component.js.map

/***/ }),

/***/ "./src/app/modules/landing/landing-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_modules_landing_components_page_page_component__ = __webpack_require__("./src/app/modules/landing/components/page/page.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2_app_modules_landing_components_page_page_component__["a" /* PageComponent */]
    }
];
var LandingRoutingModule = (function () {
    function LandingRoutingModule() {
    }
    return LandingRoutingModule;
}());
LandingRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forChild(routes)],
    })
], LandingRoutingModule);

//# sourceMappingURL=landing-routing.module.js.map

/***/ }),

/***/ "./src/app/modules/landing/landing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_page_page_component__ = __webpack_require__("./src/app/modules/landing/components/page/page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_modules_landing_landing_routing_module__ = __webpack_require__("./src/app/modules/landing/landing-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__core_core_module__ = __webpack_require__("./src/app/modules/core/core.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingModule", function() { return LandingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var LandingModule = (function () {
    function LandingModule() {
    }
    return LandingModule;
}());
LandingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3_app_modules_landing_landing_routing_module__["a" /* LandingRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_4__core_core_module__["a" /* CoreModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__components_page_page_component__["a" /* PageComponent */]
        ]
    })
], LandingModule);

//# sourceMappingURL=landing.module.js.map

/***/ })

});
//# sourceMappingURL=1.chunk.js.map