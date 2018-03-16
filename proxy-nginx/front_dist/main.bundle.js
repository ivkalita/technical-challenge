webpackJsonp([3],{

/***/ "./src async recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/modules/landing/landing.module": [
		"./src/app/modules/landing/landing.module.ts",
		1
	],
	"app/modules/user/user.module": [
		"./src/app/modules/user/user.module.ts",
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = "./src async recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [
    {
        path: '',
        loadChildren: 'app/modules/landing/landing.module#LandingModule',
    },
    {
        path: 'user',
        loadChildren: 'app/modules/user/user.module#UserModule'
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]],
        providers: []
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-container\">\n    <app-header></app-header>\n    <app-content></app-content>\n    <app-footer></app-footer>\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".page-container {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  width: 100vw;\n  min-height: 100vh;\n  background-color: #fff; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_core_services_auth_service__ = __webpack_require__("./src/app/modules/core/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(_authService) {
        this._authService = _authService;
    }
    AppComponent.prototype.ngOnInit = function () {
        this._authService.restore().subscribe(function (user) { return console.log(user); });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("./src/app/app.component.html"),
        styles: [__webpack_require__("./src/app/app.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__modules_core_services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__modules_core_services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_header_header_component__ = __webpack_require__("./src/app/components/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_content_content_component__ = __webpack_require__("./src/app/components/content/content.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_footer_footer_component__ = __webpack_require__("./src/app/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__modules_core_core_module__ = __webpack_require__("./src/app/modules/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__modules_core_services_auth_service__ = __webpack_require__("./src/app/modules/core/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__modules_core_guards_is_authenticated_guard__ = __webpack_require__("./src/app/modules/core/guards/is-authenticated.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__modules_core_guards_not_authenticated_guard__ = __webpack_require__("./src/app/modules/core/guards/not-authenticated.guard.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__components_header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_6__components_content_content_component__["a" /* ContentComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_footer_footer_component__["a" /* FooterComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_8__modules_core_core_module__["a" /* CoreModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* RouterModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_9__modules_core_services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_10__modules_core_guards_is_authenticated_guard__["a" /* IsAuthenticatedGuard */],
            __WEBPACK_IMPORTED_MODULE_11__modules_core_guards_not_authenticated_guard__["a" /* NotAuthenticatedGuard */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "./src/app/components/content/content.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/components/content/content.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block;\n  -ms-flex: 1 0;\n      flex: 1 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/components/content/content.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContentComponent = (function () {
    function ContentComponent() {
    }
    ContentComponent.prototype.ngOnInit = function () {
    };
    return ContentComponent;
}());
ContentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-content',
        template: __webpack_require__("./src/app/components/content/content.component.html"),
        styles: [__webpack_require__("./src/app/components/content/content.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ContentComponent);

//# sourceMappingURL=content.component.js.map

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <p>Created️ by Ivan Kalita. 2018.</p>\n    <p><a href=\"https://github.com/kaduev13/technical-challenge\">Github</a></p>\n</div>"

/***/ }),

/***/ "./src/app/components/footer/footer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  padding: 20px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex: 0 0 100px;\n      flex: 0 0 100px;\n  background-color: #f8f9fa;\n  -ms-flex-line-pack: end;\n      align-content: flex-end;\n  -ms-flex-pack: center;\n      justify-content: center; }\n\ndiv {\n  text-align: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-footer',
        template: __webpack_require__("./src/app/components/footer/footer.component.html"),
        styles: [__webpack_require__("./src/app/components/footer/footer.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "./src/app/components/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"logo-container\">\n    <h3><a href=\"/\">Genetic results</a></h3>\n</div>\n<div class=\"auth-container\">\n    <button *ngIf=\"!userLoggedIn\" class=\"btn btn-light\" (click)=\"register()\">Register</button>\n    <button *ngIf=\"!userLoggedIn\" class=\"btn btn-light\" (click)=\"login()\">Login</button>\n    <button *ngIf=\"userLoggedIn\" class=\"btn btn-light\" (click)=\"logout()\">Logout</button>\n</div>"

/***/ }),

/***/ "./src/app/components/header/header.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  z-index: 2;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  padding: 0 20px;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex: 0 0 80px;\n      flex: 0 0 80px;\n  background-color: #007bff;\n  color: #fff; }\n\n.logo-container {\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center; }\n  .logo-container a {\n    color: #fff;\n    text-decoration: none; }\n  .logo-container a:hover, .logo-container a:active, .logo-container a:visited {\n    color: #fff;\n    text-decoration: none; }\n\n.auth-container {\n  -ms-flex: 1 0;\n      flex: 1 0;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-pack: end;\n      justify-content: flex-end;\n  -ms-flex-align: center;\n      align-items: center; }\n  .auth-container button {\n    margin: 5px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_core_services_auth_service__ = __webpack_require__("./src/app/modules/core/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = (function () {
    function HeaderComponent(_authService, _router) {
        this._authService = _authService;
        this._router = _router;
    }
    Object.defineProperty(HeaderComponent.prototype, "userLoggedIn", {
        get: function () {
            return this._authService.user !== null;
        },
        enumerable: true,
        configurable: true
    });
    HeaderComponent.prototype.register = function () {
        this._router.navigate(['/user/register']);
    };
    HeaderComponent.prototype.login = function () {
        this._router.navigate(['/user/login']);
    };
    HeaderComponent.prototype.logout = function () {
        this._authService.logout();
        this._router.navigate(['/']);
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__("./src/app/components/header/header.component.html"),
        styles: [__webpack_require__("./src/app/components/header/header.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__modules_core_services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__modules_core_services_auth_service__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], HeaderComponent);

var _a, _b;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "./src/app/modules/core/core.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_client__ = __webpack_require__("./src/app/modules/core/services/auth.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_api_client__ = __webpack_require__("./src/app/modules/core/services/api.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__serializers_user_serializer__ = __webpack_require__("./src/app/modules/core/serializers/user.serializer.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var CoreModule = (function () {
    function CoreModule() {
    }
    return CoreModule;
}());
CoreModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* HttpModule */]
        ],
        declarations: [],
        providers: [
            __WEBPACK_IMPORTED_MODULE_3__services_auth_client__["a" /* AuthClient */],
            __WEBPACK_IMPORTED_MODULE_4__services_api_client__["a" /* ApiClient */],
            __WEBPACK_IMPORTED_MODULE_5__serializers_user_serializer__["a" /* UserSerializer */]
        ]
    })
], CoreModule);

//# sourceMappingURL=core.module.js.map

/***/ }),

/***/ "./src/app/modules/core/guards/is-authenticated.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("./src/app/modules/core/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IsAuthenticatedGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IsAuthenticatedGuard = (function () {
    function IsAuthenticatedGuard(_authService) {
        this._authService = _authService;
    }
    IsAuthenticatedGuard.prototype.canActivate = function () {
        return this.isAuthenticated();
    };
    IsAuthenticatedGuard.prototype.canActivateChild = function () {
        return this.isAuthenticated();
    };
    IsAuthenticatedGuard.prototype.isAuthenticated = function () {
        return this._authService.restore().map(function (user) { return user !== null; });
    };
    return IsAuthenticatedGuard;
}());
IsAuthenticatedGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], IsAuthenticatedGuard);

var _a;
//# sourceMappingURL=is-authenticated.guard.js.map

/***/ }),

/***/ "./src/app/modules/core/guards/not-authenticated.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__("./src/app/modules/core/services/auth.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotAuthenticatedGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NotAuthenticatedGuard = (function () {
    function NotAuthenticatedGuard(_authService) {
        this._authService = _authService;
    }
    NotAuthenticatedGuard.prototype.canActivate = function () {
        return this.isNotAuthenticated();
    };
    NotAuthenticatedGuard.prototype.canActivateChild = function () {
        return this.isNotAuthenticated();
    };
    NotAuthenticatedGuard.prototype.isNotAuthenticated = function () {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(this._authService.user === null);
    };
    return NotAuthenticatedGuard;
}());
NotAuthenticatedGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === "function" && _a || Object])
], NotAuthenticatedGuard);

var _a;
//# sourceMappingURL=not-authenticated.guard.js.map

/***/ }),

/***/ "./src/app/modules/core/models/user.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserModel; });
var UserModel = (function () {
    function UserModel(_id, _firstName, _lastName, _email, _dob, _policyCode, _password) {
        this._id = _id;
        this._firstName = _firstName;
        this._lastName = _lastName;
        this._email = _email;
        this._dob = _dob;
        this._policyCode = _policyCode;
        this._password = _password;
    }
    Object.defineProperty(UserModel.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserModel.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserModel.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserModel.prototype, "email", {
        get: function () {
            return this._email;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserModel.prototype, "dob", {
        get: function () {
            return this._dob;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserModel.prototype, "policyCode", {
        get: function () {
            return this._policyCode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserModel.prototype, "password", {
        get: function () {
            return this._password;
        },
        enumerable: true,
        configurable: true
    });
    return UserModel;
}());

//# sourceMappingURL=user.model.js.map

/***/ }),

/***/ "./src/app/modules/core/serializers/user.serializer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_user_model__ = __webpack_require__("./src/app/modules/core/models/user.model.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserSerializer; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var UserSerializer = (function () {
    function UserSerializer() {
    }
    UserSerializer.prototype.toJSON = function (value) {
        var convertDate = function (date) { return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate(); };
        var data = {
            'first_name': value.firstName,
            'last_name': value.lastName,
            'email': value.email,
            'dob': convertDate(value.dob),
            'policy_code': value.policyCode
        };
        if (value.password) {
            data['password1'] = value.password;
            data['password2'] = value.password;
        }
        return data;
    };
    UserSerializer.prototype.fromJSON = function (value) {
        return new __WEBPACK_IMPORTED_MODULE_1__models_user_model__["a" /* UserModel */](value.pk, value.first_name, value.last_name, value.email, new Date(value.dob), value.policy_code);
    };
    return UserSerializer;
}());
UserSerializer = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], UserSerializer);

//# sourceMappingURL=user.serializer.js.map

/***/ }),

/***/ "./src/app/modules/core/services/api.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApiClient; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ApiClient = (function () {
    function ApiClient(_http) {
        this._http = _http;
    }
    ApiClient.prototype.get = function (url, params, token) {
        return this.createRequest({ method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* RequestMethod */].Get, url: url, search: this.toURLSearchParams(params) }, token);
    };
    ApiClient.prototype.post = function (url, data, token) {
        return this.createRequest({ method: __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* RequestMethod */].Post, url: url, body: data }, token);
    };
    ApiClient.prototype.createRequest = function (options, token, withContentTypeJson) {
        if (withContentTypeJson === void 0) { withContentTypeJson = true; }
        var opts = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* BaseRequestOptions */]();
        if (withContentTypeJson) {
            opts.headers.set('Content-Type', 'application/json');
        }
        if (token) {
            opts.headers.set('Authorization', "Token " + token);
        }
        opts.withCredentials = true;
        return this._http.request(options.url, opts.merge(options));
    };
    ApiClient.prototype.toURLSearchParams = function (params) {
        var searchParams = new URLSearchParams();
        for (var key in params) {
            if (!params.hasOwnProperty(key)) {
                continue;
            }
            searchParams.set(key, params[key]);
        }
        return searchParams;
    };
    return ApiClient;
}());
ApiClient = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], ApiClient);

var _a;
//# sourceMappingURL=api.client.js.map

/***/ }),

/***/ "./src/app/modules/core/services/auth.client.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_client__ = __webpack_require__("./src/app/modules/core/services/api.client.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__serializers_user_serializer__ = __webpack_require__("./src/app/modules/core/serializers/user.serializer.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthClient; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthClient = (function () {
    function AuthClient(_apiClient, _userSerializer) {
        this._apiClient = _apiClient;
        this._userSerializer = _userSerializer;
    }
    AuthClient.prototype.getUser = function (token) {
        var _this = this;
        return this._apiClient
            .get('/auth/api/v1/user/', null, token)
            .map(function (response) { return _this._userSerializer.fromJSON(response.json()); })
            .catch(function (response) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(null); });
    };
    AuthClient.prototype.register = function (user) {
        return this._apiClient
            .post('/auth/api/v1/registration/', this._userSerializer.toJSON(user))
            .map(function (response) { return response.json()['key']; });
    };
    AuthClient.prototype.logout = function (token) {
        return this._apiClient.post('/auth/api/v1/logout/', null, token);
    };
    AuthClient.prototype.login = function (email, password) {
        return this._apiClient
            .post('/auth/api/v1/login/', { email: email, password: password })
            .map(function (response) { return response.json()['key']; });
    };
    return AuthClient;
}());
AuthClient = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__api_client__["a" /* ApiClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__api_client__["a" /* ApiClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__serializers_user_serializer__["a" /* UserSerializer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__serializers_user_serializer__["a" /* UserSerializer */]) === "function" && _b || Object])
], AuthClient);

var _a, _b;
//# sourceMappingURL=auth.client.js.map

/***/ }),

/***/ "./src/app/modules/core/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__("./node_modules/rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_client__ = __webpack_require__("./src/app/modules/core/services/auth.client.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthService = AuthService_1 = (function () {
    function AuthService(_authClient) {
        this._authClient = _authClient;
        this._user = null;
    }
    Object.defineProperty(AuthService.prototype, "user", {
        get: function () {
            return this._user;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AuthService.prototype, "token", {
        get: function () {
            return this.tryGetLocalAccessToken();
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.restore = function () {
        var accessToken = this.tryGetLocalAccessToken();
        if (!accessToken) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(null);
        }
        return this.invalidateAccessToken(accessToken);
    };
    AuthService.prototype.register = function (user) {
        var _this = this;
        if (this._user) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(this._user);
        }
        var subject = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["Subject"]();
        this._authClient
            .register(user)
            .subscribe(function (token) {
            return _this.invalidateAccessToken(token).subscribe(function (updatedUser) { return subject.next(updatedUser); });
        });
        return subject;
    };
    AuthService.prototype.logout = function () {
        if (this._user) {
            this._user = null;
        }
        var key = this.tryGetLocalAccessToken();
        if (!key) {
            return;
        }
        this.removeAuthToken();
        this._authClient.logout(key);
    };
    AuthService.prototype.login = function (email, password) {
        var _this = this;
        var subject = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["Subject"]();
        this._authClient
            .login(email, password)
            .subscribe(function (token) {
            return _this.invalidateAccessToken(token).subscribe(function (updatedUser) { return subject.next(updatedUser); });
        });
        return subject;
    };
    AuthService.prototype.tryGetLocalAccessToken = function () {
        return window.localStorage.getItem(AuthService_1.TOKEN_KEY);
    };
    AuthService.prototype.invalidateAccessToken = function (token) {
        var _this = this;
        // const user = new UserModel(1, 'Ivan', 'Kalita', 'input.txt@hotmail.com', new Date('1995-09-08'), '123asdfa', '');
        // this._user = user;
        // return Observable.of(user);
        return this._authClient
            .getUser(token)
            .map(function (user) {
            if (user) {
                _this._user = user;
                window.localStorage.setItem(AuthService_1.TOKEN_KEY, token);
            }
            else {
                _this._user = null;
                _this.removeAuthToken();
            }
            return user;
        });
    };
    AuthService.prototype.removeAuthToken = function () {
        window.localStorage.removeItem(AuthService_1.TOKEN_KEY);
    };
    return AuthService;
}());
AuthService.TOKEN_KEY = 'genetic_results_token_key';
AuthService = AuthService_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__auth_client__["a" /* AuthClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__auth_client__["a" /* AuthClient */]) === "function" && _a || Object])
], AuthService);

var AuthService_1, _a;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map