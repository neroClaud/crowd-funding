webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/add-project/add-project.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/add-project/add-project.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-lg-12\">\n    <div class=\"col-md-4\">\n      <form (ngSubmit)=\"postProject()\" class=\"form-horizontal\">\n        <div class=\"form-group\">\n          <label>naslov projekta</label>\n          <input type=\"text\" name=\"name\" class=\"form-control\" [(ngModel)]=\"title\" />\n        </div>\n        <div class=\"form-group\">\n          <label>opis projekta</label>\n          <input type=\"text\" name=\"desription\" class=\"form-control\" [(ngModel)]=\"description\" />\n        </div>\n        <div class=\"form-group\">\n          <label>cilj projekta</label>\n          <input type=\"number\" name=\"aim\" class=\"form-control\" [(ngModel)]=\"goal\" />\n        </div>\n        <div class=\"form-group\">\n          <label>grad</label>\n          <select class=\"form-control\" name=\"input-city\" id=\"input-city\" [(ngModel)]=\"id\">\n            <option *ngFor=\"let c of cities\" [value]=\"c.id\"> {{c.name}}</option>\n          </select>\n        </div>\n        <div class=\"form-group\">\n          <label> slika</label>\n          <input type=\"file\" (change)=\"selectFile($event)\" class=\"form-control btn btn-default\">\n        </div>\n        <div class=\"form-group\">\n          <input class=\"btn btn-success\" type=\"submit\" value=\"save\" />\n        </div>\n      </form>\n    </div>\n    <div class=\"col-md-4 pull-right\">\n      <img [src]=\"imageUrl\" class=\"img-responsive\">\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/add-project/add-project.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddProjectComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_city_service__ = __webpack_require__("../../../../../src/app/services/city.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_project_service_service__ = __webpack_require__("../../../../../src/app/services/project-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddProjectComponent = (function () {
    function AddProjectComponent(cityService, projectService, router) {
        this.cityService = cityService;
        this.projectService = projectService;
        this.router = router;
        this.title = "";
        this.id = 0;
        this.description = "";
        this.goal = 0;
        this.imageUrl = "/assets/default.png";
    }
    AddProjectComponent.prototype.ngOnInit = function () {
        this.loadCities();
    };
    AddProjectComponent.prototype.selectFile = function (event) {
        var _this = this;
        var file = event.target.files.item(0);
        var reader = new FileReader();
        if (file.type.match('image.*')) {
            this.selectedFiles = event.target.files;
            reader.onload = function (event) {
                _this.imageUrl = event.target.result;
            };
            reader.readAsDataURL(file);
        }
        else {
            alert('invalid format!');
        }
    };
    AddProjectComponent.prototype.loadCities = function () {
        var _this = this;
        this.cityService.getCities().subscribe(function (res) {
            _this.cities = res;
        });
    };
    AddProjectComponent.prototype.postProject = function () {
        var _this = this;
        this.currentFileUpload = this.selectedFiles.item(0);
        console.log(this.title, this.id, this.description, this.goal);
        this.projectService.postProject(this.currentFileUpload, this.title, this.description, this.id, this.goal).subscribe(function (event) {
            _this.router.navigate(['main']);
        });
        this.selectedFiles = undefined;
    };
    AddProjectComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'app-add-project',
            template: __webpack_require__("../../../../../src/app/add-project/add-project.component.html"),
            styles: [__webpack_require__("../../../../../src/app/add-project/add-project.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_city_service__["a" /* CityService */],
            __WEBPACK_IMPORTED_MODULE_3__services_project_service_service__["a" /* ProjectServiceService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]])
    ], AddProjectComponent);
    return AddProjectComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Fixed navbar -->\n<nav class=\"navbar navbar-inverse\">\n  <div class=\"container\">\n    <div class=\"navbar-header\">\n      <a class=\"navbar-brand\" href=\"main\">VXGroup</a>\n    </div>\n    <div id=\"navbar\" class=\"navbar-collapse collapse\">\n      <ul class=\"nav navbar-nav\">\n        <li class=\"active\"><a [routerLink]=\"['main']\">Home</a></li>\n        <li><a href=\"about\">About</a></li>\n        <li><a href=\"contact\">Contact</a></li>\n        <li><a></a></li>\n      </ul>\n      <ul class=\"nav navbar-nav pull-right\">\n        <li *ngIf=\"isLoggedIn()\"><a (click)=\"logout()\"><span class=\"glyphicon glyphicon-user\"></span> Logout</a></li>\n        <li *ngIf=\"!isLoggedIn()\"><a [routerLink]=\"['login']\"><span class=\"glyphicon glyphicon-log-in\"></span> Login</a></li>\n      </ul>\n    </div>\n  </div>\n</nav>\n<div class=\"container theme-showcase\" role=\"main\">\n  <div class=\"jumbotron\">\n    <h1>Crowd Fundable</h1>\n    <p>Spring + Angular aplikacija razvijena u okviru Obuke iz veb programiranja 2018. godine.</p>\n  </div>\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_authentication_service_service__ = __webpack_require__("../../../../../src/app/service/authentication-service.service.ts");
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
    function AppComponent(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
    }
    AppComponent.prototype.logout = function () {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    };
    AppComponent.prototype.isLoggedIn = function () {
        return this.authenticationService.isLoggedIn();
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__service_authentication_service_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ngx_rangeslider_component__ = __webpack_require__("../../../../ngx-rangeslider-component/esm5/ngx-rangeslider-component.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_ion_range_slider__ = __webpack_require__("../../../../ng2-ion-range-slider/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng2_ion_range_slider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng2_ion_range_slider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_city_service__ = __webpack_require__("../../../../../src/app/services/city.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_project_service_service__ = __webpack_require__("../../../../../src/app/services/project-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__page_page_not_found_page_not_found_component__ = __webpack_require__("../../../../../src/app/page/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ngx_pagination__ = __webpack_require__("../../../../ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__service_authentication_service_service__ = __webpack_require__("../../../../../src/app/service/authentication-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__service_jwt_utils_service__ = __webpack_require__("../../../../../src/app/service/jwt-utils.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__service_token_interceptor_service__ = __webpack_require__("../../../../../src/app/service/token-interceptor.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__service_can_activate_auth_guard__ = __webpack_require__("../../../../../src/app/service/can-activate-auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__page_main_main_component__ = __webpack_require__("../../../../../src/app/page/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__filter_filter_component__ = __webpack_require__("../../../../../src/app/filter/filter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__add_project_add_project_component__ = __webpack_require__("../../../../../src/app/add-project/add-project.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__register_register_component__ = __webpack_require__("../../../../../src/app/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__project_details_project_details_component__ = __webpack_require__("../../../../../src/app/project-details/project-details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__comment_comment_component__ = __webpack_require__("../../../../../src/app/comment/comment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_comment_service__ = __webpack_require__("../../../../../src/app/services/comment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_angular_progress_bar__ = __webpack_require__("../../../../angular-progress-bar/fesm5/angular-progress-bar.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




























var appRoutes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_13__login_login_component__["a" /* LoginComponent */] },
    // { path: 'main', component: MainComponent, canActivate:[CanActivateAuthGuard]},
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_22__register_register_component__["a" /* RegisterComponent */] },
    { path: 'main', component: __WEBPACK_IMPORTED_MODULE_19__page_main_main_component__["a" /* MainComponent */] },
    { path: 'add-project', component: __WEBPACK_IMPORTED_MODULE_21__add_project_add_project_component__["a" /* AddProjectComponent */] },
    { path: 'project/:id', component: __WEBPACK_IMPORTED_MODULE_23__project_details_project_details_component__["a" /* ProjectDetailsComponent */] },
    { path: '', redirectTo: 'main', pathMatch: 'full' },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_12__page_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_12__page_page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_13__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_19__page_main_main_component__["a" /* MainComponent */],
                __WEBPACK_IMPORTED_MODULE_20__filter_filter_component__["a" /* FilterComponent */],
                __WEBPACK_IMPORTED_MODULE_21__add_project_add_project_component__["a" /* AddProjectComponent */],
                __WEBPACK_IMPORTED_MODULE_22__register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_23__project_details_project_details_component__["a" /* ProjectDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_24__comment_comment_component__["a" /* CommentComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_26__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_0_ngx_rangeslider_component__["a" /* RangeSliderModule */],
                __WEBPACK_IMPORTED_MODULE_1_ng2_ion_range_slider__["IonRangeSliderModule"],
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["g" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_27_angular_progress_bar__["a" /* ProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_14_ngx_pagination__["a" /* NgxPaginationModule */],
                __WEBPACK_IMPORTED_MODULE_10_ngx_bootstrap__["a" /* PaginationModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7__angular_router__["c" /* RouterModule */].forRoot(appRoutes, {
                    enableTracing: false
                })
            ],
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_9__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_17__service_token_interceptor_service__["a" /* TokenInterceptorService */],
                    multi: true
                },
                __WEBPACK_IMPORTED_MODULE_15__service_authentication_service_service__["a" /* AuthenticationService */],
                __WEBPACK_IMPORTED_MODULE_18__service_can_activate_auth_guard__["a" /* CanActivateAuthGuard */],
                __WEBPACK_IMPORTED_MODULE_16__service_jwt_utils_service__["a" /* JwtUtilsService */],
                __WEBPACK_IMPORTED_MODULE_4__services_project_service_service__["a" /* ProjectServiceService */],
                __WEBPACK_IMPORTED_MODULE_3__services_city_service__["a" /* CityService */],
                __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_25__services_comment_service__["a" /* CommentService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/comment/comment.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".glyph{\r\n    font-size: 30px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/comment/comment.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <div>\n    <button class=\"btn btn-default btn-block active\" (click)=\"toggleShowDiv()\">Write a comment</button>\n  </div>\n  <hr>\n  <div [@slideInOut]=\"animationState\">\n    <form (ngSubmit)=\"leaveComment()\">\n      <div class=\"form-group\">\n        <input type=\"text\" class=\"form-control\" name=\"nick \" placeholder=\"your name/pseudonim*\" [(ngModel)]=\"comment.nick\" />\n      </div>\n      <div class=\"form-group\">\n        <textarea type=\"text\" class=\"form-control\" name=\"text\" placeholder=\"text area*\" [(ngModel)]=\"comment.text\"></textarea>\n      </div>\n      <input type=\"submit\" class=\"btn btn-default\" value=\"Comment\" />\n    </form>\n  </div>\n  <br>\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <div *ngFor=\"let com of comments;let i = index\">\n        <div class=\"panel panel-default\" *ngIf=\"!com.reference_comment\">\n          <div class=\"panel-heading\">\n            <strong>{{com.nick}}</strong> <span class=\"text-muted\">commented 5 days ago</span>\n          </div>\n          <div class=\"panel-body\">\n            {{com.text}}\n            <button class=\"btn btn-default btn-xs pull-right\" (click)=\"toggleShowDiv(i)\">reply</button>\n          </div><!-- /panel-body -->\n          <div [@slideInOut]=\"toCom2[i]\">\n            <form (ngSubmit)=\"replyComment(com,i)\">\n              <div class=\"form-group\">\n                <input type=\"text\" class=\"form-control\" name=\"nick1\" placeholder=\"your name/pseudonim*\" [(ngModel)]=\"newCom.nick\" />\n              </div>\n              <div class=\"form-group\">\n                <textarea type=\"text\" class=\"form-control\" name=\"text2\" placeholder=\"text area*\" [(ngModel)]=\"newCom.text\"></textarea>\n              </div>\n              <input type=\"submit\" class=\"btn btn-default btn-xs\" value=\"comment\" />\n            </form>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-xs-10 col-sm-offset-2\">\n            <div *ngFor=\"let filter of filteredComs\">\n              <div class=\"panel panel-default\" *ngIf=\"filter.reference_comment.id === com.id\">\n                <div class=\"panel-heading\">\n                  <strong>{{filter.nick}}</strong> <span class=\"text-muted\">commented 5 days ago</span>\n                </div>\n                <div class=\"panel-body\">\n                  {{filter.text}}\n                </div><!-- /panel-body -->\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/comment/comment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_animations__ = __webpack_require__("../../../../../src/app/shared/animations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_comment_service__ = __webpack_require__("../../../../../src/app/services/comment.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CommentComponent = (function () {
    function CommentComponent(commentService) {
        this.commentService = commentService;
        this.animationState = 'out';
        this.filteredComs = [];
        this.comment = {
            nick: '',
            text: '',
            project: this.project,
            reference_comment: null
        };
        this.newCom = {
            nick: '',
            text: '',
            project: this.project,
            reference_comment: null
        };
    }
    CommentComponent.prototype.toggleShowDiv = function (i) {
        if (i || i === 0) {
            this.toCom2[i] = this.toCom2[i] === 'out' ? 'in' : 'out';
        }
        else {
            this.animationState = this.animationState === 'out' ? 'in' : 'out';
        }
    };
    CommentComponent.prototype.ngOnInit = function () {
        this.loadComments();
    };
    CommentComponent.prototype.replyComment = function (l) {
        var _this = this;
        this.newCom.project = l.project;
        this.newCom.reference_comment = l;
        this.commentService.postComment(this.newCom).subscribe(function (res) {
            _this.loadComments();
        });
        this.newCom = {
            nick: '',
            text: '',
            project: null,
            reference_comment: null
        };
    };
    CommentComponent.prototype.leaveComment = function () {
        var _this = this;
        this.comment.project = this.project;
        this.commentService.postComment(this.comment).subscribe(function (res) {
            _this.loadComments();
            _this.animationState = _this.animationState === 'out' ? 'in' : 'out';
            _this.reset();
        });
    };
    CommentComponent.prototype.loadComments = function () {
        var _this = this;
        this.commentService.getCommentsByProjectId(this.project.id).subscribe(function (res) {
            _this.comments = res;
            _this.filterComs();
            _this.toCom2 = _this.comments.map(function (x) { return 'out'; });
        });
    };
    CommentComponent.prototype.reset = function () {
        this.comment = {
            nick: '',
            text: '',
            project: null,
            reference_comment: null
        };
    };
    CommentComponent.prototype.filterComs = function () {
        var _this = this;
        this.filteredComs = [];
        this.comments.forEach(function (x) {
            if (x.reference_comment) {
                _this.comments.forEach(function (y) {
                    if (x.reference_comment.id === y.id) {
                        _this.filteredComs.push(x);
                    }
                });
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], CommentComponent.prototype, "project", void 0);
    CommentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'app-comment',
            template: __webpack_require__("../../../../../src/app/comment/comment.component.html"),
            styles: [__webpack_require__("../../../../../src/app/comment/comment.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewEncapsulation"].None,
            animations: [__WEBPACK_IMPORTED_MODULE_0__shared_animations__["a" /* SlideInOutAnimation */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_comment_service__["a" /* CommentService */]])
    ], CommentComponent);
    return CommentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/filter/filter.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".irs-bar {\r\n    background :#eee;\r\n    height: 11px;\r\n    top: 20px;\r\n    background-position: -60px;\r\n}\r\n.irs-slider{\r\n    width: 12px;\r\n    height: 12px;\r\n    border-radius: 10px;\r\n    background-color: #fac50f;\r\n    border: 0;\r\n    \r\n    cursor: pointer;\r\n    background-position: 2px; \r\n}\r\n\r\n.irs-line {\r\n    height: 11px;\r\n    top: 21px\r\n    \r\n}\r\n.select-mini {\r\n    font-size: 13px;\r\n    height: 30px;\r\n    width: 80px;\r\n    margin-right: 10px;\r\n }\r\n  .cc{\r\n    margin-top : 9px;\r\n  }\r\n  .ppl{\r\n    background:burlywood;\r\n  }\r\n  .cols{\r\n      margin-left: 0px;\r\n      margin-top : 9px;\r\n  }\r\n  .mm{\r\n      margin-top: 17px;\r\n      cursor: pointer;\r\n  }\r\n  ", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/filter/filter.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-4\">\n    <ion-range-slider type=\"double\" [min]=\"min\" [max]=\"max\" [step]=\"step\" #slider [from]=\"value1\" [to]=\"value2\"\n      (onUpdate)=\"update(advancedSlider,$event)\" (onFinish)=\"update(advancedSlider,$event)\" (onChange)=\"finish(advancedSlider,$event)\">\n    </ion-range-slider>\n  </div>\n  <div class=\"col-md-4\">\n    <form class=\"form-inline\" (ngSubmit)=\"filter()\">\n      <div class=\"form-group\">\n        <label>city</label>\n        <select class=\"form-control select-mini cc\" name=\"input-city\" id=\"input-city\" [(ngModel)]=\"filterObject.cityId\">\n          <option *ngFor=\"let c of cities\" [value]=\"c.id\"> {{c.name}}</option>\n        </select>\n      </div>\n      <div class=\"form-group\">\n        <input class=\"form-control input-sm cc ppl\" value=\"filter\" type=\"submit\">\n        <input class=\"form-control input-sm cc\" value=\"reset\" type=\"button\" (click)=\"reset()\">\n      </div>\n    </form>\n  </div>\n  <div class=\"col-md-2\">\n    <div class=\"mm\">\n      <a  (click)=\"navigate()\">start a project</a>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/filter/filter.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_authentication_service_service__ = __webpack_require__("../../../../../src/app/service/authentication-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_city_service__ = __webpack_require__("../../../../../src/app/services/city.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_ion_range_slider__ = __webpack_require__("../../../../ng2-ion-range-slider/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_ion_range_slider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_ion_range_slider__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FilterComponent = (function () {
    function FilterComponent(cityService, auth, router) {
        this.cityService = cityService;
        this.auth = auth;
        this.router = router;
        this.filterEmiter = new __WEBPACK_IMPORTED_MODULE_3__angular_core__["EventEmitter"]();
        this.advancedSlider = { name: "Advanced Slider", onUpdate: undefined, onFinish: undefined };
        this.min = 0;
        this.max = 5000;
        this.step = 10;
        this.filterObject = {
            cityId: 0,
            range: [this.min, this.max]
        };
    }
    FilterComponent.prototype.update = function (slider, event) {
        slider.onUpdate = event;
        this.filterObject.range[0] = event.from;
        this.filterObject.range[1] = event.to;
    };
    FilterComponent.prototype.finish = function (slider, event) {
        slider.onFinish = event;
    };
    FilterComponent.prototype.reset = function () {
        this.slider.update({ from: this.min, to: this.max });
        this.filterObject = {
            cityId: 0,
            range: [this.min, this.max]
        };
        this.filterEmiter.emit(this.filterObject);
    };
    FilterComponent.prototype.ngOnInit = function () {
        this.getCities();
    };
    FilterComponent.prototype.getCities = function () {
        var _this = this;
        this.cityService.getCities().subscribe(function (res) {
            _this.cities = res;
            console.log(res);
        });
    };
    FilterComponent.prototype.filter = function () {
        console.log(this.filterObject);
        this.filterEmiter.emit(this.filterObject);
    };
    FilterComponent.prototype.navigate = function () {
        if (!this.auth.isLoggedIn()) {
            this.router.navigate(['login']);
        }
        else {
            this.router.navigate(['/add-project']);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3__angular_core__["EventEmitter"])
    ], FilterComponent.prototype, "filterEmiter", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["ViewChild"])('slider'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_ng2_ion_range_slider__["IonRangeSliderComponent"])
    ], FilterComponent.prototype, "slider", void 0);
    FilterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
            selector: 'app-filter',
            template: __webpack_require__("../../../../../src/app/filter/filter.component.html"),
            styles: [__webpack_require__("../../../../../src/app/filter/filter.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_3__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_city_service__["a" /* CityService */], __WEBPACK_IMPORTED_MODULE_1__service_authentication_service_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]])
    ], FilterComponent);
    return FilterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    \n    <div class=\"col-sm-4 col-sm-offset-4 thumbnail\">\n      <form class=\"form-signin\" (ngSubmit)=\"login()\">\n        \n        <ul class=\"nav nav-tabs nav-justified\" role=\"tablist\">\n          <li role=\"presentation\"><a [routerLink]=\"['/login']\">Sign in</a></li>\n          <li role=\"presentation\" aria-selected=\"true\"><a [routerLink]=\"['/register']\">Register</a></li>\n        </ul>\n        <br>\n        <label for=\"username\" class=\"sr-only\">Username</label>\n        <input type=\"text\" id=\"username\" class=\"form-control\" name=\"username\" [(ngModel)]=\"user.username\" placeholder=\"Username\"\n          required autofocus>\n        <label for=\"inputPassword\" class=\"sr-only\">Password</label>\n        <input type=\"password\" id=\"inputPassword\" class=\"form-control\" name=\"username\" [(ngModel)]=\"user.password\" placeholder=\"Password\"\n          required>\n        <br>\n        <button class=\"btn btn-primary btn-block\" type=\"submit\">Sign in</button>\n      </form>\n      <div *ngIf=wrongUsernameOrPass class=\"alert alert-warning box-msg\" role=\"alert\">\n        Wrong username or password.\n      </div>\n    </div>\n    <div class=\"col-md-3\"></div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_authentication_service_service__ = __webpack_require__("../../../../../src/app/service/authentication-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
        this.user = {};
        this.wrongUsernameOrPass = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.authenticationService.login(this.user.username, this.user.password).subscribe(function (loggedIn) {
            if (loggedIn) {
                _this.router.navigate(['/main']);
            }
        }, function (err) {
            if (err.toString() === 'Ilegal login') {
                _this.wrongUsernameOrPass = true;
                console.log(err);
            }
            else {
                __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(err);
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_authentication_service_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/page/main/main.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".cc{\r\n    background-color: #f4f4f4;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/page/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"projects\" class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-md-10 col-md-offset-1\">\n      <app-filter (filterEmiter)=\"filter($event)\"></app-filter>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-lg-12\">\n      <hr>\n      <div class=\"col-xs-6 col-md-4\" *ngFor=\"let project of projects | paginate: { itemsPerPage: 3, currentPage: p }\">\n        <div class=\"thumbnail cc\">\n          <figure>\n            <img [src]=\"project.imagePath\" class=\"img-rounded\" width=\"330\" height=\"280\">\n          </figure>\n          <div class=\"caption\">\n            <h3><a [routerLink]=\"['/project',project.id]\">{{project.title}}</a></h3>\n            <p>{{project.description}} {{project.goal}}\n            </p>\n            <p>\n              <button [routerLink]=\"['/project',project.id]\" class=\"btn btn-primary\">details</button>\n              <a href=\"#\" class=\"btn btn-danger btn-xs pull-right\" role=\"button\" *ngIf=\"isAdmin()\">delete</a>\n            </p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div><br>\n  <div class=\"row\">\n    <div class=\"col-md-4 col-md-offset-4\">\n      <pagination-controls class=\"myPagination\" directionLinks=\"true\" autoHide=\"true\" responsive=\"true\" previousLabel=\"Previous\"\n        nextLabel=\"Next\" screenReaderPaginationLabel=\"Pagination\" screenReaderPageLabel=\"page\" (pageChange)=\"p = $event\">\n      </pagination-controls>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/page/main/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__service_authentication_service_service__ = __webpack_require__("../../../../../src/app/service/authentication-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_project_service_service__ = __webpack_require__("../../../../../src/app/services/project-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MainComponent = (function () {
    function MainComponent(projectService, auth) {
        this.projectService = projectService;
        this.auth = auth;
        this.filterObject = {
            cityId: 0,
            range: [0, 5000]
        };
    }
    MainComponent.prototype.ngOnInit = function () {
        this.loadProjects();
    };
    MainComponent.prototype.loadProjects = function () {
        var _this = this;
        this.projectService.getProjectsList(this.filterObject.range[0], this.filterObject.range[1], this.filterObject.cityId).subscribe(function (res) {
            _this.projects = res;
        });
    };
    MainComponent.prototype.try = function () {
        console.log(this.auth.getCurrentUser());
    };
    MainComponent.prototype.filter = function (filter) {
        this.filterObject = filter;
        this.loadProjects();
    };
    MainComponent.prototype.isAdmin = function () {
        return this.auth.isAdmin();
    };
    MainComponent.prototype.deleteProject = function (project) {
        var _this = this;
        this.projectService.deleteProject(project).subscribe(function (res) {
            console.log(res);
            _this.loadProjects();
        });
    };
    MainComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-main',
            template: __webpack_require__("../../../../../src/app/page/main/main.component.html"),
            styles: [__webpack_require__("../../../../../src/app/page/main/main.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_project_service_service__["a" /* ProjectServiceService */], __WEBPACK_IMPORTED_MODULE_0__service_authentication_service_service__["a" /* AuthenticationService */]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "../../../../../src/app/page/page-not-found/page-not-found.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/page/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>\n  Wrong page buddy :)\n</h1>\n"

/***/ }),

/***/ "../../../../../src/app/page/page-not-found/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__("../../../../../src/app/page/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__("../../../../../src/app/page/page-not-found/page-not-found.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "../../../../../src/app/project-details/project-details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".inline {\r\n    display:inline-block;\r\n}\r\n.progress-inner[_ngcontent-c2] {\r\n    min-width: 9%;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n    padding: 0px;\r\n    border-radius: 20px;\r\n    max-width: 100%;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/project-details/project-details.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"project\">\n  <div class=\"row\">\n    <div class=\"col-lg-12 col-xs-12\">\n      <div class=\"col-md-7\">\n        <figure>\n          <img [src]=\"project.imagePath\" width=\"510\" height=\"350\">\n        </figure>\n        <br>\n        <div class=\"row\">\n          <div class=\"col-xs-1\">\n            <span class=\"glyphicon glyphicon-comment glyph\"></span>\n          </div>\n          <div class=\"col-xs-1\">\n            <h5>Comments</h5>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-5\">\n        <div class=\"well\">\n          <h3 class=\"text-center\">{{project.title}}</h3>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-xs-6\">\n            <p>published : {{project.dateOfPublication | date}}</p>\n          </div>\n          <div class=\"col-xs-6\">\n            <p class=\"pull-right\">{{project.city.name}}</p>\n          </div>\n        </div>\n        <hr>\n        <div class=\"col-md-3 col-xs-3\">\n          <div class=\"form-group\">\n            <input type=\"number\" pattern=\"[0-9]*\" class=\"form-control\" min=\"0\" #input1 placeholder=\"€\">\n          </div>\n          <button class=\"btn btn-success btn-xs\" (click)=\"donate(input1)\">donate</button>\n        </div>\n        <div class=\"col-md-8 col-xs-8\"  [hidden]=\"hide\">\n          <progress-bar [progress]=\"getProgressData()\" [color-degraded]=\"{'0': '#FFDE55',  '25': '#3270FF', '65': '#FF0033'}\">\n          </progress-bar>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <div class=\"col-lg-12 col-xs-12\">\n      <div class=\"col-md-6 col-xs-6\">\n        <hr>\n        <app-comment [project]=\"project\"></app-comment>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/project-details/project-details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__service_authentication_service_service__ = __webpack_require__("../../../../../src/app/service/authentication-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_project_service_service__ = __webpack_require__("../../../../../src/app/services/project-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProjectDetailsComponent = (function () {
    function ProjectDetailsComponent(projectService, route, router, auth) {
        this.projectService = projectService;
        this.route = route;
        this.router = router;
        this.auth = auth;
        this.progressAmount = 0;
    }
    ProjectDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.id = +params['id'];
            _this.projectService.getSingleProject(_this.id).subscribe(function (res) {
                _this.project = res;
            });
        });
    };
    ProjectDetailsComponent.prototype.donate = function (input) {
        if (!this.auth.isLoggedIn()) {
            this.router.navigate(['login']);
        }
        this.project.currentAmount += +input.value;
        this.put();
        input.value = '';
    };
    ProjectDetailsComponent.prototype.put = function () {
        var _this = this;
        this.projectService.updateProject(this.project).subscribe(function (res) {
            _this.project = res;
            _this.hide = _this.getProgressData() > 100 ? true : false;
        });
    };
    ProjectDetailsComponent.prototype.getProgressData = function () {
        var s = ((this.project.goal - this.project.currentAmount) * 100) / this.project.goal;
        var m = 100 - s;
        this.progressAmount = Math.round(m);
        return this.progressAmount;
    };
    ProjectDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
            selector: 'app-project-details',
            template: __webpack_require__("../../../../../src/app/project-details/project-details.component.html"),
            styles: [__webpack_require__("../../../../../src/app/project-details/project-details.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_project_service_service__["a" /* ProjectServiceService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_0__service_authentication_service_service__["a" /* AuthenticationService */]])
    ], ProjectDetailsComponent);
    return ProjectDetailsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input.ng-invalid.ng-touched{\r\n    border-left : 5px solid red;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-sm-4 col-sm-offset-4 thumbnail\">\n      <form class=\"form-register\" [formGroup]=\"signUpForm\" (ngSubmit)=\"register()\">\n        <ul class=\"nav nav-tabs nav-justified\" role=\"tablist\">\n          <li role=\"presentation\"><a [routerLink]=\"['/login']\">Sign in</a></li>\n          <li role=\"presentation\" aria-selected=\"true\"><a [routerLink]=\"['/register']\">Register</a></li>\n        </ul>\n        <br>\n        <div class=\"form-group\">\n          <label for=\"firstname\" class=\"sr-only\">first name</label>\n          <input type=\"text\" id=\"firstname\" class=\"form-control top\" formControlName=\"firstname\" placeholder=\"firstname\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"username\" class=\"sr-only\">LastName</label>\n            <input type=\"text\" id=\"lastname\" class=\"form-control\" formControlName=\"lastname\" placeholder=\"lastname\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"username\" class=\"sr-only\">Username</label>\n          <input type=\"text\" id=\"username\" class=\"form-control\" formControlName=\"username\" placeholder=\"username\">\n            <span class=\"help-block pull-center\" *ngIf=\"signUpForm.get('username').invalid && (signUpForm.get('username').touched || signUpForm.get('username').dirty)\">\n              <span *ngIf=\"signUpForm.get('username').errors['usernameIsForbiden']\">This username is taken!</span>\n              <span *ngIf=\"signUpForm.get('username').errors['required']\">This field is required!</span>\n            </span>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"inputEmail\" class=\"sr-only\">Email</label>\n          <input type=\"email\" id=\"email\" class=\"form-control\" formControlName=\"email\" placeholder=\"email\">\n            <span class=\"help-block pull-center\" *ngIf=\"signUpForm.get('email').invalid && (signUpForm.get('email').touched || signUpForm.get('email').dirty)\">\n              <span *ngIf=\"signUpForm.get('email').errors['required']\">This field is required!</span>\n            </span>\n\n        </div>\n        <div class=\"form-group\">\n          <label for=\"inputPassword\" class=\"sr-only\">Password</label>\n          <input type=\"password\" id=\"inputPassword\" class=\"form-control\" formControlName=\"password\" placeholder=\"password\">\n            <span class=\"help-block pull-center\" *ngIf=\"!signUpForm.get('password').valid && (signUpForm.get('password').touched || signUpForm.get('password').dirty)\">\n              <span *ngIf=\"signUpForm.get('password').errors['required']\">This field is required!</span>\n              <span *ngIf=\"signUpForm.get('password').errors['minlength']\">Minimum lenth is 6 characters</span>\n            </span>\n        </div>\n        <div class=\"form-group\">\n          <button  class=\"btn btn-primary btn-block\" type=\"submit\">Register</button>\n        </div>\n      </form>\n      <div *ngIf=wrongUsernameOrPass class=\"alert alert-warning box-msg\" role=\"alert\">\n        Something went wrong !\n      </div>\n    </div>\n    <div class=\"col-md-3\"></div>\n  </div>\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_authentication_service_service__ = __webpack_require__("../../../../../src/app/service/authentication-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterComponent = (function () {
    function RegisterComponent(authenticationService, router, userService) {
        this.authenticationService = authenticationService;
        this.router = router;
        this.userService = userService;
        this.wrongUsernameOrPass = false;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.signUpForm = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormGroup */]({
            'firstname': new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormControl */](null),
            'lastname': new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormControl */](null),
            'username': new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].minLength(4), __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].required], this.forbidenName.bind(this)),
            'password': new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].required]),
            'email': new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormControl */](null, [__WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* Validators */].email])
        });
    };
    RegisterComponent.prototype.forbidenName = function (control) {
        var _this = this;
        var prom = new Promise(function (resolve, reject) {
            setTimeout(function () {
                _this.userService.getUser(control.value).subscribe(function (isTaken) {
                    if (isTaken) {
                        resolve({ "usernameIsForbiden": true });
                    }
                    else {
                        resolve(null);
                    }
                });
            }, 1000);
        });
        return prom;
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        // console.log(this.signUpForm);
        this.authenticationService.registration(this.signUpForm.value).subscribe(function (loggedIn) {
            if (loggedIn) {
                _this.router.navigate(['/main']);
            }
        }, function (err) {
            if (err.toString() === 'Ilegal register') {
                _this.wrongUsernameOrPass = true;
                console.log(err);
            }
            else {
                __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(err);
            }
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/register/register.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_4__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__service_authentication_service_service__["a" /* AuthenticationService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_0__services_user_service__["a" /* UserService */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/service/authentication-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__jwt_utils_service__ = __webpack_require__("../../../../../src/app/service/jwt-utils.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthenticationService = (function () {
    function AuthenticationService(http, jwtUtilsService) {
        this.http = http;
        this.jwtUtilsService = jwtUtilsService;
        this.loginPath = '/api/login';
    }
    AuthenticationService.prototype.login = function (username, password) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["d" /* HttpHeaders */]({ 'Content-Type': 'application/json' });
        return this.http.post(this.loginPath, JSON.stringify({ username: username, password: password }), { headers: headers })
            .map(function (res) {
            var token = res && res['token'];
            if (token) {
                localStorage.setItem('currentUser', JSON.stringify({
                    username: username,
                    roles: _this.jwtUtilsService.getRoles(token),
                    token: token
                }));
                return true;
            }
            else {
                return false;
            }
        })
            .catch(function (error) {
            if (error.status === 400) {
                return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["a" /* Observable */].throw('Ilegal login');
            }
            else {
                return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["a" /* Observable */].throw(error.json().error || 'Server error');
            }
        });
    };
    AuthenticationService.prototype.registration = function (userDTO) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["d" /* HttpHeaders */]({ 'Content-Type': 'application/json' });
        return this.http.post('/api/register', JSON.stringify(userDTO), { headers: headers })
            .map(function (res) {
            var token = res && res['token'];
            if (token) {
                localStorage.setItem('currentUser', JSON.stringify({
                    username: userDTO.username,
                    roles: _this.jwtUtilsService.getRoles(token),
                    token: token
                }));
                return true;
            }
            else {
                return false;
            }
        })
            .catch(function (error) {
            if (error.status === 400) {
                return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["a" /* Observable */].throw('Ilegal registration');
            }
            else {
                return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["a" /* Observable */].throw(error.json().error || 'Server error');
            }
        });
    };
    AuthenticationService.prototype.getToken = function () {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        var token = currentUser && currentUser.token;
        return token ? token : "";
    };
    AuthenticationService.prototype.logout = function () {
        localStorage.removeItem('currentUser');
    };
    AuthenticationService.prototype.isLoggedIn = function () {
        if (this.getToken() != '')
            return true;
        else
            return false;
    };
    AuthenticationService.prototype.getCurrentUser = function () {
        if (localStorage.getItem('currentUser')) {
            return JSON.parse(localStorage.getItem('currentUser'));
        }
        else {
            return undefined;
        }
    };
    AuthenticationService.prototype.isAdmin = function () {
        if (this.getCurrentUser()) {
            return this.getCurrentUser().roles.indexOf('ADMINISTRATOR') >= 0;
        }
        else {
            return false;
        }
    };
    AuthenticationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__jwt_utils_service__["a" /* JwtUtilsService */]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "../../../../../src/app/service/can-activate-auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CanActivateAuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication_service_service__ = __webpack_require__("../../../../../src/app/service/authentication-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CanActivateAuthGuard = (function () {
    function CanActivateAuthGuard(authenticationService, router) {
        this.authenticationService = authenticationService;
        this.router = router;
    }
    CanActivateAuthGuard.prototype.canActivate = function (next, state) {
        if (this.authenticationService.isLoggedIn()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    CanActivateAuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__authentication_service_service__["a" /* AuthenticationService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], CanActivateAuthGuard);
    return CanActivateAuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/service/jwt-utils.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JwtUtilsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var JwtUtilsService = (function () {
    function JwtUtilsService() {
    }
    JwtUtilsService.prototype.getRoles = function (token) {
        var jwtData = token.split('.')[1];
        var decodedJwtJsonData = window.atob(jwtData);
        var decodedJwtData = JSON.parse(decodedJwtJsonData);
        return decodedJwtData.roles.map(function (x) { return x.authority; }) || [];
    };
    JwtUtilsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], JwtUtilsService);
    return JwtUtilsService;
}());



/***/ }),

/***/ "../../../../../src/app/service/token-interceptor.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TokenInterceptorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication_service_service__ = __webpack_require__("../../../../../src/app/service/authentication-service.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TokenInterceptorService = (function () {
    function TokenInterceptorService(inj) {
        this.inj = inj;
    }
    TokenInterceptorService.prototype.intercept = function (request, next) {
        var authenticationService = this.inj.get(__WEBPACK_IMPORTED_MODULE_1__authentication_service_service__["a" /* AuthenticationService */]);
        request = request.clone({
            setHeaders: {
                'X-Auth-Token': "" + authenticationService.getToken()
            }
        });
        return next.handle(request);
    };
    TokenInterceptorService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], TokenInterceptorService);
    return TokenInterceptorService;
}());



/***/ }),

/***/ "../../../../../src/app/services/city.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CityService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CityService = (function () {
    function CityService(http) {
        this.http = http;
    }
    CityService.prototype.getCities = function () {
        return this.http.get('api/cities');
    };
    CityService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */]])
    ], CityService);
    return CityService;
}());



/***/ }),

/***/ "../../../../../src/app/services/comment.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CommentService = (function () {
    function CommentService(http) {
        this.http = http;
    }
    CommentService.prototype.postComment = function (comment) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["d" /* HttpHeaders */]({ 'Content-Type': 'application/json' });
        return this.http.post('api/comments', JSON.stringify(comment), { headers: headers });
    };
    CommentService.prototype.getCommentsByProjectId = function (id) {
        var params = new __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["e" /* HttpParams */]();
        params = params.append('id', id.toString());
        return this.http.get("api/projects/" + id + "/comments", { params: params });
    };
    CommentService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */]])
    ], CommentService);
    return CommentService;
}());



/***/ }),

/***/ "../../../../../src/app/services/project-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectServiceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProjectServiceService = (function () {
    function ProjectServiceService(http) {
        this.http = http;
    }
    ProjectServiceService.prototype.getProjects = function (page) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpParams */]();
        params = params.append('page', page.toString());
        params = params.append('size', '3');
        return this.http.get('api/projects', { params: params });
    };
    ProjectServiceService.prototype.getProjectsList = function (first, second, cityId) {
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpParams */]();
        if (+first) {
            params = params.append('first', first.toString());
        }
        if (+second) {
            params = params.append('second', second.toString());
        }
        if (+cityId) {
            params = params.append('cityId', cityId.toString());
        }
        return this.http.get('projects', { params: params });
    };
    ProjectServiceService.prototype.postProject = function (file, title, description, id, goal) {
        var formdata = new FormData();
        formdata.append('title', title);
        formdata.append('file', file);
        formdata.append('description', description);
        formdata.append('id', id.toString());
        formdata.append('goal', goal.toString());
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]();
        headers = headers.append('Content-Type', 'multipart/form-data');
        return this.http.post("api/projects", formdata, { headers: headers });
    };
    ProjectServiceService.prototype.getSingleProject = function (id) {
        return this.http.get("api/projects/" + id);
    };
    ProjectServiceService.prototype.updateProject = function (project) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]({ 'Content-Type': 'application/json' });
        return this.http.put("api/projects/" + project.id, JSON.stringify(project), { headers: headers });
    };
    ProjectServiceService.prototype.deleteProject = function (project) {
        return this.http.delete("api/projects/" + project.id, { responseType: 'text' }).
            catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["a" /* Observable */].throw(error.message || 'Server error');
        });
    };
    ProjectServiceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], ProjectServiceService);
    return ProjectServiceService;
}());



/***/ }),

/***/ "../../../../../src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserService = (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.getUser = function (username) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["e" /* HttpParams */]();
        params = params.append('username', username);
        return this.http.get('api/users', { params: params })
            .catch(function (e) { return __WEBPACK_IMPORTED_MODULE_0_rxjs__["Observable"].throw(_this.errorHandler(e)); });
    };
    UserService.prototype.errorHandler = function (error) {
        console.log(error);
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/app/shared/animations.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlideInOutAnimation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");

var SlideInOutAnimation = [
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* trigger */])('slideInOut', [
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* state */])('in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({
            'max-height': '500px', 'opacity': '1', 'visibility': 'visible'
        })),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* state */])('out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({
            'max-height': '0px', 'opacity': '0', 'visibility': 'hidden'
        })),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* transition */])('in => out', [Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["f" /* group */])([
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('400ms ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({
                    'opacity': '0'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('600ms ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({
                    'max-height': '0px'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('700ms ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({
                    'visibility': 'hidden'
                }))
            ])]),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* transition */])('out => in', [Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["f" /* group */])([
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('1ms ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({
                    'visibility': 'visible'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('600ms ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({
                    'max-height': '500px'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('800ms ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({
                    'opacity': '1'
                }))
            ])])
    ]),
];


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map