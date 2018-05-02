webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".center{\n    margin: 0 auto;\n    max-width: 100%;\n    width: 1000px;\n    padding: 1rem;\n    -ms-flex-line-pack: center;\n        align-content: center;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav> <!-- Navigation Bar -->\n<div class = \"container\">\n  <app-messages></app-messages> <!-- Messages -->\n  <router-outlet></router-outlet>\n\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var nav_component_1 = __webpack_require__("./src/app/nav/nav.component.ts");
var messages_component_1 = __webpack_require__("./src/app/messages/messages.component.ts");
var home_component_1 = __webpack_require__("./src/app/home/home.component.ts");
var fit_component_1 = __webpack_require__("./src/app/fit/fit.component.ts");
var messages_service_1 = __webpack_require__("./src/app/services/messages.service.ts");
var fit_service_1 = __webpack_require__("./src/app/services/fit.service.ts");
var share_component_1 = __webpack_require__("./src/app/share/share.component.ts");
var login_component_1 = __webpack_require__("./src/app/login/login.component.ts");
var sign_up_component_1 = __webpack_require__("./src/app/sign-up/sign-up.component.ts");
var profile_component_1 = __webpack_require__("./src/app/profile/profile.component.ts");
var edit_profile_component_1 = __webpack_require__("./src/app/edit-profile/edit-profile.component.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                nav_component_1.NavComponent,
                messages_component_1.MessagesComponent,
                home_component_1.HomeComponent,
                fit_component_1.FitComponent,
                share_component_1.ShareComponent,
                login_component_1.LoginComponent,
                sign_up_component_1.SignUpComponent,
                profile_component_1.ProfileComponent,
                edit_profile_component_1.EditProfileComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                router_1.RouterModule.forRoot([
                    { path: 'home', component: home_component_1.HomeComponent },
                    { path: 'fit', component: fit_component_1.FitComponent },
                    { path: 'share', component: share_component_1.ShareComponent },
                    { path: 'login', component: login_component_1.LoginComponent },
                    { path: 'sign-up', component: sign_up_component_1.SignUpComponent },
                    { path: 'profile', component: profile_component_1.ProfileComponent },
                    { path: 'editProfile', component: edit_profile_component_1.EditProfileComponent },
                    { path: '', redirectTo: '/home', pathMatch: 'full' }
                ])
            ],
            providers: [messages_service_1.MessagesService, fit_service_1.FitService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/edit-profile/edit-profile.component.css":
/***/ (function(module, exports) {

module.exports = ".login-form{\n    margin: 10px;\n}\n\n.btn-own{\n    margin: 15px;\n    color: white;\n    background-color: #F4C3D8;\n    border: none;\n}\n\nul{\n    list-style-type: none;\n    margin: 10px;\n}\n\n.card{\n    margin: 10px;\n    color: #1C5F93;\n}\n\n.card-header-own{\n    background-color: #7CACEA;\n    height: 120px;\n    text-align: center;\n    border: none;\n    padding: 1.7rem 0;\n    font-size: 30px;\n    color: white;\n    \n    \n}\n\n.textWrap{\n    height: 150px;\n   padding: 1.2rem;\n}\n\nform{\n    padding: 1rem;\n}\n\n.subtitle{\n    font-size: 15px;\n    margin: 1px;\n    font-weight: 300;\n    \n}\n\n.text-uppercase-own{\n    text-transform: uppercase;\n    font-size: 12px;\n    color: white;\n}\n\n.title{\n    font-size: 20px;\n    padding: 0.4rem 0rem;\n}\n\n.black{\n    margin-top: 10px;\n    margin-bottom: 2px;\n    margin-left: 10px;\n    color: #7CACEA;\n}\n\n.selected{\n    background-color:#FBE9C1;\n}\n\n.font-margin{\n    margin-bottom: 5px;\n    margin-left: 10px;\n}"

/***/ }),

/***/ "./src/app/edit-profile/edit-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" >\n    <div class=\"card-header-own\">\n        <div class=\" text-uppercase\">\n        {{Me.Name}}'s Profile\n        </div>\n        <div class=\"text-uppercase-own\">Edit your profile or set your new goal</div> \n    </div>\n    \n    <div class=\"card-body\">\n        <form>\n            <div class=\"form-row\">\n        \n            <div class=\"form-group col-md-4\">\n                <label for=\"inputName\">Name</label>\n                <input #name type=\"text\" readonly class=\"form-control\" id=\"inputName\" [value]=\"Me.Name\">\n            </div>\n        \n            <div class=\"form-group col-md-4\">\n                <label for=\"inputAge\">Age</label>\n                <input #age type=\"number\" class=\"form-control\" id=\"inputAge\" [value]=\"Me.Profile.Age\" placeholder=\"Age\">\n            </div>\n            </div>\n        \n            <div class=\"form-group\">\n                <label for=\"Height\">Height</label>\n                <input #height type=\"number\" class=\"form-control\" id=\"Height\" [value]=\"Me.Profile.Height\" placeholder=\"cm\">\n            </div>\n        \n            <div class=\"form-group\">\n                <label for=\"Weight\">Weight</label>\n                <input #weight type=\"number\" class=\"form-control\" id=\"Weight\" [value]=\"Me.Profile.Weight\" placeholder=\"kg\">\n            </div>\n        \n            <div class=\"form-group\">\n                <label for=\"inputGoalWeight\">Goal Weight</label>\n                <input #goalWeight type=\"number\" class=\"form-control\" id=\"inputGoalWeight\" [value]=\"Me.Profile.GoalWeight\" placeholder=\"kg\">\n            </div>\n            </form>\n        <div>\n            <button class=\"btn btn-primary btn-sm btn-own\" (click)=\"editing(age.value, weight.value, height.value, goalWeight.value, name.value)\">Edit</button>\n        </div> \n      </div>\n</div> \n\n\n"

/***/ }),

/***/ "./src/app/edit-profile/edit-profile.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var fit_service_1 = __webpack_require__("./src/app/services/fit.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var EditProfileComponent = /** @class */ (function () {
    function EditProfileComponent(_Fit, _Router) {
        this._Fit = _Fit;
        this._Router = _Router;
        this.Me = this._Fit.Me;
        if (!this.Me) {
            _Router.navigate(['/login']);
        }
    }
    EditProfileComponent.prototype.ngOnInit = function () {
    };
    EditProfileComponent.prototype.editing = function (age, weight, height, goalWeight, name) {
        var goalBmi = this.calculateBMI(goalWeight, height);
        var bmi = this.calculateBMI(weight, height);
        console.log('profile component');
        this._Fit.profileAdd(age, weight, height, goalWeight, bmi, goalBmi, name);
    };
    EditProfileComponent.prototype.calculateBMI = function (weight, height) {
        return Math.round((weight / height / height * 10000) * 100) / 100;
    };
    EditProfileComponent = __decorate([
        core_1.Component({
            selector: 'app-edit-profile',
            template: __webpack_require__("./src/app/edit-profile/edit-profile.component.html"),
            styles: [__webpack_require__("./src/app/edit-profile/edit-profile.component.css")]
        }),
        __metadata("design:paramtypes", [fit_service_1.FitService, router_1.Router])
    ], EditProfileComponent);
    return EditProfileComponent;
}());
exports.EditProfileComponent = EditProfileComponent;


/***/ }),

/***/ "./src/app/fit/fit.component.css":
/***/ (function(module, exports) {

module.exports = ".login-form{\n    margin: 10px;\n}\n\n.btn-own{\n    margin: 5px;\n    color: white;\n    background-color: #F4C3D8;\n    border: none;\n}\n\nul{\n    list-style-type: none;\n    margin: 10px;\n}\n\n.card{\n    margin: 10px;\n    color: #1C5F93;\n}\n\n.card-header-own{\n    background-color: #7CACEA;\n    height: 120px;\n    text-align: center;\n    border: none;\n    padding: 1.7rem 0;\n    font-size: 30px;\n    color: white;\n    \n    \n}\n\n.heightAdjust{\n    height: 160px;\n}\n\nform{\n    padding: 1rem;\n}\n\n.subtitle{\n    font-size: 15px;\n    margin: 1px;\n    margin-bottom: 10px;\n    font-weight: 300;\n    padding: 0.2rem;\n    \n}\n\n.text-uppercase-own{\n    font-size: 12px;\n    color: white;\n}\n\n.title{\n    font-size: 20px;\n    padding: 0.4rem 0rem;\n}\n\n.black{\n    margin-top: 10px;\n    margin-bottom: 2px;\n    margin-left: 10px;\n    color: #7CACEA;\n}\n\n.selected{\n    background-color:#FBE9C1;\n}\n\n.font-margin{\n    margin-bottom: 5px;\n    margin-left: 10px;\n}\n"

/***/ }),

/***/ "./src/app/fit/fit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" >\n    <!-- Create Profile display-->\n    <div class=\"col-md-4\">\n        <div class=\"card\" >\n            <div class=\"card-header-own text-uppercase\">\n            {{Me.Name}}'s Profile\n            </div>\n\n            \n            <div class=\"card-body\">\n                <form>\n                    <div class=\"form-group row\">\n                        <label for=\"Name\" class=\"col-sm-10 col-form-label\">Name</label>\n                        <div class=\"col-sm-10\">\n                        <input type=\"text\" readonly class=\"form-control-plaintext\" id=\"Name\" value= {{Me.Name}}>\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <label for=\"Age\" class=\"col-sm-10 col-form-label\">Age</label>\n                        <div class=\"col-sm-10\">\n                        <input type=\"text\" readonly class=\"form-control-plaintext\" id=\"Age\" value= {{Me.Profile.Age}}>\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <label for=\"Height\" class=\"col-sm-10 col-form-label\">Height</label>\n                        <div class=\"col-sm-10\">\n                        <input type=\"text\" readonly class=\"form-control-plaintext\" id=\"Height\" value= \"{{Me.Profile.Height}} cm\"> \n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <label for=\"Weight\" class=\"col-sm-10 col-form-label\">Weight</label>\n                        <div class=\"col-sm-10\">\n                        <input type=\"text\" readonly class=\"form-control-plaintext\" id=\"Weight\" value= \"{{Me.Profile.Weight}} kg\"> \n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <label for=\"BMI\" class=\"col-sm-10 col-form-label\">BMI</label>\n                        <div class=\"col-sm-10\">\n                        <input type=\"text\" readonly class=\"form-control-plaintext\" id=\"BMI\" value= {{Me.Profile.BMI}}>\n                        </div>\n                    </div>                    \n                    <div class=\"form-group row\">\n                        <label for=\"GoalWeight\" class=\"col-sm-10 col-form-label\">Goal Weight</label>\n                        <div class=\"col-sm-10\">\n                        <input type=\"text\" readonly class=\"form-control-plaintext\" id=\"GoalWeight\" value= \"{{Me.Profile.GoalWeight}} kg\">\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <label for=\"GoalBMI\" class=\"col-sm-10 col-form-label\">Goal BMI</label>\n                        <div class=\"col-sm-10\">\n                        <input type=\"text\" readonly class=\"form-control-plaintext\" id=\"GoalBMI\" value= {{Me.Profile.GoalBMI}}>\n                        </div>\n                    </div>  \n                </form>\n            </div>\n        </div> \n    </div><!-- Saved Profile display ends-->\n\n\n    <div class =\"col-md-8\">\n        <div class=\"row-md-4\">\n            <div class=\"card\" >\n                <div class=\"card-header-own\">\n                    <div class=\"text-uppercase\">\n                        Workout List \n                    </div>\n                    <div class=\"subtitle\">Click to add workout to your plan</div>\n                </div>\n                <form>\n                    <div class=\"form-group\">\n                        <select multiple class=\"form-control\" id=\"exampleFormControlSelect2\" >\n                        <option *ngFor=\"let list of ExerciseList\"  (click)=\"submitWorkout($event, list)\">\n                            {{list}}\n                        </option>\n                        </select>\n                    </div>\n                </form>\n            </div>\n        </div>        <!-- workout list end-->\n\n        <div class=\"row-md-4\">\n            <div class=\"card\">\n                <div class=\"card-header-own heightAdjust\">\n                <div class=\"text-uppercase \">\n                    Workout Plan\n                </div>\n                <div class=\"subtitle\">Add your time and sets.<br/> When you are done, click Done button</div>\n\n                </div>\n                <div class=\"card-body\">\n                    <ul class=\"list-group list-group-flush \">\n                        <li *ngFor=\"let list of Me.PlanExercise\"\n                            [ngClass]=\"{ 'list-group-item-success': list.Chosen }\"\n                            class=\"list-group-item list-group-flush \">\n                            {{list.Text}}\n                            <form>\n                                <div class=\"row d-flex justify-content-end\">\n                                    <div class=\"col-sm-3\">\n                                    <input #time type=\"number\" class=\"form-control\" placeholder=\"Minutes\">\n                                    </div>\n                                    <div class=\"col-sm-3\">\n                                    <input #set type=\"number\" class=\"form-control\" placeholder=\"Sets\">\n                                    </div>\n                                </div>\n                            </form>\n                            <div class=\"d-flex justify-content-end\">\n                                <button (click)=\"doneExercise($event, list.Text, time.value, set.value)\"\n                                        class=\"col-sm-3 btn btn-sm btn-primary\">\n                                        Done\n                                </button>\n                            </div>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n\n\n        </div>\n\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/fit/fit.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var messages_service_1 = __webpack_require__("./src/app/services/messages.service.ts");
var fit_service_1 = __webpack_require__("./src/app/services/fit.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var FitComponent = /** @class */ (function () {
    function FitComponent(http, _Messages, _Fit, _Router) {
        this.http = http;
        this._Messages = _Messages;
        this._Fit = _Fit;
        this._Router = _Router;
        this.Me = _Fit.Me;
        this.Model = _Fit.Model;
        this.ExerciseList = _Fit.ExerciseStack;
        if (!this.Me) {
            _Router.navigate(['/login']);
        }
        //setInterval(()=> this.refresh(), 1000)
    }
    FitComponent.prototype.ngOnInit = function () {
    };
    /*
      refresh(){
        this.http.get(this._api + "/state")
            .subscribe(data=> this.Model = data.json())
      }
     */
    FitComponent.prototype.submitWorkout = function (e, text) {
        console.log('submitting workout list - component');
        e.preventDefault();
        this._Fit.chooseExercise(text);
    };
    FitComponent.prototype.doneExercise = function (e, text, time, set) {
        console.log('done exercise - component');
        e.preventDefault();
        this._Fit.selectExercise(text, time, set);
    };
    FitComponent = __decorate([
        core_1.Component({
            selector: 'app-fit',
            template: __webpack_require__("./src/app/fit/fit.component.html"),
            styles: [__webpack_require__("./src/app/fit/fit.component.css")]
        }),
        __metadata("design:paramtypes", [http_1.Http,
            messages_service_1.MessagesService,
            fit_service_1.FitService,
            router_1.Router])
    ], FitComponent);
    return FitComponent;
}());
exports.FitComponent = FitComponent;


/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ".btn{\n    margin-top: 10px;\n}\n\n.card {\n    padding: 0.5rem;\n    \n}\n\n.add-button {\n    \n    \n    display:block;\n    width:70px;\n    height:70px;\n    border: .5px solid grey;\n    border-radius: 50%;\n    color:grey;\n    text-align: center;\n    text-decoration:none;\n    background: white;\n    font-size: 15px;\n    font-weight: bold;\n    \n    \n}\n\n.add-button:hover {\n    cursor: pointer;\n    border: .5px solid darkcyan;\n    color: darkcyan;\n}\n\n.center{\n    margin: 0 auto;\n    max-width: 100%;\n    width: 100px;\n    padding: 1rem;\n}\n\n.already{\n    font-size: 10px;\n    color: chocolate;\n\n}\n\n.tracking{\n    margin-left: 5px;\n    margin-right: 5px;\n  \n}\n\n.list{\n    list-style-type: none;\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Need to find health info database api-->\n<!-- <div class=\"card\">\n    <img class=\"card-img-top card-img-bottom\" *ngIf=\"Model.HealthInfo\" [src]=\"Model.HealthInfo.url\" /> \n    <div class = \"card-img-overlay\" style=\"text-align: center\">\n      <button class=\"btn btn-success btn-lg\" (click)=\"getHealthInfo($event)\">\n              Get Health Information\n      </button>\n    </div>\n</div> \n -->\n\n <div>\n   Please Sign Up\n </div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var exercise_1 = __webpack_require__("./src/app/models/exercise.ts");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(http) {
        var _this = this;
        this.http = http;
        this.Model = new exercise_1.Fit();
        this._api = "http://localhost:8080/fit";
        setInterval(function () { return _this.refresh(); }, 1000);
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.refresh = function () {
        var _this = this;
        this.http.get(this._api + "/state")
            .subscribe(function (data) { return _this.Model = data.json(); });
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [http_1.Http])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;


/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ".login-form{\n    margin-top: 10px;\n    margin-bottom: 2px;\n    \n}\n\n.btn{\n    margin-top: 2px;\n    margin-bottom: 5px;\n\n    color: white;\n}\n\nul{\n    list-style-type: none;\n    margin: 10px;\n}\n\n.card{\n    margin: 10px;\n    color: #1C5F93;\n}\n\n.card-header{\n    background-color: #7CACEA;\n    height: 120px;\n    text-align: center;\n    border: none;\n    padding: 1.7rem 0;\n    font-size: 30px;\n    color: white;\n    \n    \n}\n\nform{\n    padding: 1rem;\n}\n\n.btn{\n    background-color: #F4C3D8;\n    border: none;\n}\n\n.subtitle{\n    font-size: 15px;\n    margin: 1px;\n    font-weight: 300;\n    \n}\n\n.text-uppercase{\n    font-size: 12px;\n    color: white;\n}\n\n.title{\n    font-size: 20px;\n    \n    padding: 0.4rem 0.4rem;\n}\n\n.black{\n    margin-top: 10px;\n    margin-bottom: 2px;\n    color: #7CACEA;\n}\n\n.selected{\n    background-color:#FBE9C1;\n}\n\n.font-margin{\n    margin-bottom: 5px;\n    margin-left: 10px;\n}\n\n.btn-margin{\n    margin-left:98px;\n    margin-top: 0px;\n\n}"

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex justify-content-center\">\n    <div class=\"card text-center\" style=\"width: 20rem\">\n        <div class=\"card-header\">\n            <div class=\"text-uppercase title\">Please Sign In</div>\n        </div>\n        <div class =\"text-uppercase black\">\n            Already a user? \n        </div>\n        <div class=\"font-margin\">\n            Please Sign In\n            </div> \n        <div class=\"login-form\" >\n            <input #Name type =\"text\" placeholder =\"User Name\"/><br/>\n            <input #Password type =\"text\" placeholder =\"Password\" />\n\n\n        </div>\n        <div class=\"btn-margin\">\n            <button class=\"btn\" (click)=\"login(Name.value, Password.value)\" >Sign In</button>\n        </div>\n\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var fit_service_1 = __webpack_require__("./src/app/services/fit.service.ts");
var exercise_1 = __webpack_require__("./src/app/models/exercise.ts");
var messages_service_1 = __webpack_require__("./src/app/services/messages.service.ts");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(_Fit, _Messages) {
        this._Fit = _Fit;
        this._Messages = _Messages;
        this.Model = new exercise_1.Fit();
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function (name, password) {
        this._Fit.login(name, password);
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [fit_service_1.FitService, messages_service_1.MessagesService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;


/***/ }),

/***/ "./src/app/messages/messages.component.css":
/***/ (function(module, exports) {

module.exports = "#messages {\n    padding-top: 0.5rem;\n    padding-left: 0.2rem;\n    \n}\n\n.button {\n    margin-left: 5px;\n    color: #1C5F93;\n    font-weight: bold;\n    float: right;\n    font-size: 22px;\n    line-height: 20px;\n    cursor: pointer;\n    -webkit-transition: 0.3s;\n    transition: 0.3s;\n}\n\n.button:hover {\n    color: black;\n    cursor: pointer;\n}\n\n.alert{\n    padding: 10px;\n    border: 2px solid #CFD5E1;\n    color: #1C5F93;\n    margin-bottom: 15px;\n}\n\n.msg{\n    list-style-type: none;\n    padding-top: 0.2rem;\n    padding-left: 0.2rem;\n    padding-bottom: 0.2rem;\n}\n\nh3{\n    text-align: center;\n}"

/***/ }),

/***/ "./src/app/messages/messages.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"messages\">\n  <div class=\"alert\" *ngFor=\"let msg of Messages.Messages; let i = index;\">\n    <!-- Binding-->\n    <button class=\"close\" (click) = \"delete(i)\"> <!-- javascript-->\n      &times;\n    </button>\n\n    {{msg}}\n    \n    \n  </div><!-- Alert -->\n</div><!--messages-->\n\n\n"

/***/ }),

/***/ "./src/app/messages/messages.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var messages_service_1 = __webpack_require__("./src/app/services/messages.service.ts");
var MessagesComponent = /** @class */ (function () {
    function MessagesComponent(Messages) {
        this.Messages = Messages;
    }
    MessagesComponent.prototype.ngOnInit = function () {
    };
    MessagesComponent.prototype.delete = function (i) {
        this.Messages.Messages.splice(i, 1);
    };
    MessagesComponent = __decorate([
        core_1.Component({
            selector: 'app-messages',
            template: __webpack_require__("./src/app/messages/messages.component.html"),
            styles: [__webpack_require__("./src/app/messages/messages.component.css")]
        }),
        __metadata("design:paramtypes", [messages_service_1.MessagesService])
    ], MessagesComponent);
    return MessagesComponent;
}());
exports.MessagesComponent = MessagesComponent;


/***/ }),

/***/ "./src/app/models/exercise.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Fit = /** @class */ (function () {
    function Fit() {
        this.Person = [];
        //ExerciseList: string[] = [];
        this.Record = [];
        /** Need to find health info database api
        HealthInfo: {
            url: string;
        }
        */
    }
    return Fit;
}());
exports.Fit = Fit;
/* export class Different{
    Name: string;
}
 */
var Track = /** @class */ (function () {
    function Track() {
    }
    return Track;
}());
exports.Track = Track;
var User = /** @class */ (function () {
    function User() {
        this.PlanExercise = [];
        this.DoneExerciseList = [];
    }
    return User;
}());
exports.User = User;
var Exercise = /** @class */ (function () {
    function Exercise() {
        this.Chosen = false;
    }
    return Exercise;
}());
exports.Exercise = Exercise;
var Done = /** @class */ (function () {
    function Done() {
    }
    return Done;
}());
exports.Done = Done;
var Info = /** @class */ (function () {
    function Info() {
    }
    return Info;
}());
exports.Info = Info;


/***/ }),

/***/ "./src/app/nav/nav.component.css":
/***/ (function(module, exports) {

module.exports = ".navbar {\n    padding: 0 1rem;\n    height: 120px;\n  }\n  \n  .nav-back{\n    background-color: #7CACEA;\n}\n  \n  .navbar-brand{\n  font-size: 20px;\n}\n  \n  .navbar-nav\n{\n  font-size:20px;\n \n}"

/***/ }),

/***/ "./src/app/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-sm navbar-dark nav-back\">\n  <div class=\"container\">\n    <div>\n        <a class=\"navbar-brand\" routerLink=\"/fit\">Fitness Tracker</a>\n    </div>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse navbar-nav\">\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/home\" routerLinkActive=\"active\" >Home <span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/editProfile\" routerLinkActive=\"active\" >Profile</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/fit\" routerLinkActive=\"active\" >Fitness</a>\n        </li>\n  \n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/share\" routerLinkActive=\"active\">Share</a>\n        </li>\n\n      </ul>\n    </div>\n\n    <div class=\"d-flex justify-content-end\">\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item \">\n          <a class=\"nav-link\" routerLink=\"/sign-up\" routerLinkActive=\"active\">Sign Up</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/login\" routerLinkActive=\"active\">Sign In</a>\n        </li>\n      </ul>\n    </div>\n  </div><!-- navbar container -->\n</nav><!-- nav bar -->\n"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var NavComponent = /** @class */ (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = __decorate([
        core_1.Component({
            selector: 'app-nav',
            template: __webpack_require__("./src/app/nav/nav.component.html"),
            styles: [__webpack_require__("./src/app/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());
exports.NavComponent = NavComponent;


/***/ }),

/***/ "./src/app/profile/profile.component.css":
/***/ (function(module, exports) {

module.exports = ".login-form{\n    margin: 10px;\n}\n\n.btn-own{\n    margin: 15px;\n    color: white;\n    background-color: #F4C3D8;\n    border: none;\n}\n\nul{\n    list-style-type: none;\n    margin: 10px;\n}\n\n.card{\n    margin: 10px;\n    color: #1C5F93;\n}\n\n.card-header-own{\n    background-color: #7CACEA;\n    height: 120px;\n    text-align: center;\n    border: none;\n    padding: 1.7rem 0;\n    font-size: 30px;\n    color: white;\n    \n    \n}\n\n.textWrap{\n    height: 150px;\n   padding: 1.2rem;\n}\n\nform{\n    padding: 1rem;\n}\n\n.subtitle{\n    font-size: 15px;\n    margin: 1px;\n    font-weight: 300;\n    \n}\n\n.text-uppercase-own{\n    text-transform: uppercase;\n    font-size: 12px;\n    color: white;\n}\n\n.title{\n    font-size: 20px;\n    padding: 0.4rem 0rem;\n}\n\n.black{\n    margin-top: 10px;\n    margin-bottom: 2px;\n    margin-left: 10px;\n    color: #7CACEA;\n}\n\n.selected{\n    background-color:#FBE9C1;\n}\n\n.font-margin{\n    margin-bottom: 5px;\n    margin-left: 10px;\n}"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\"  >\n  <div class=\"card-header-own\">\n  <div class=\"text-uppercase-own\">Please Create Your Profile Before Tracking Your Workout!</div> \n  <div class=\"text-uppercase\">Profile</div>\n  \n\n  </div>\n  <form>\n      <div class=\"form-row\">\n  \n      <div class=\"form-group col-md-4\">\n          <label for=\"inputName\">Name</label>\n          <input #name type=\"text\" class=\"form-control\" id=\"inputName\" [value]=\"Me.Name\">\n      </div>\n  \n      <div class=\"form-group col-md-4\">\n          <label for=\"inputAge\">Age</label>\n          <input #age type=\"number\" class=\"form-control\" id=\"inputAge\" placeholder=\"Age\" >\n      </div>\n      </div>\n  \n      <div class=\"form-group\">\n          <label for=\"inputHeight\">Height</label>\n          <input #height type=\"number\" class=\"form-control\" id=\"inputHeight\" placeholder=\"cm\">\n      </div>\n\n      <div class=\"form-group\">\n          <label for=\"inputWeight\">Weight</label>\n          <input #weight type=\"number\" class=\"form-control\" id=\"inputWeight\" placeholder=\"kg\">\n      </div>\n  \n      <div class=\"form-group\">\n          <label for=\"inputGoalWeight\">Goal Weight</label>\n          <input #goalWeight type=\"number\" class=\"form-control\" id=\"inputGoalWeight\" placeholder=\"kg\">\n      </div>\n      </form>\n  <div>\n      <button class=\"btn btn-primary btn-sm btn-own\" (click)=\"adding(age.value, weight.value, height.value, goalWeight.value, name.value)\">Save</button>\n  </div> \n</div> <!-- Profile Form ends-->\n\n\n\n        "

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var fit_service_1 = __webpack_require__("./src/app/services/fit.service.ts");
var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(_Fit) {
        this._Fit = _Fit;
        this.Me = this._Fit.Me;
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent.prototype.adding = function (age, weight, height, goalWeight, name) {
        var goalBmi = this.calculateBMI(goalWeight, height);
        var bmi = this.calculateBMI(weight, height);
        console.log('profile component');
        this._Fit.profileAdd(age, weight, height, goalWeight, bmi, goalBmi, name);
    };
    ProfileComponent.prototype.calculateBMI = function (weight, height) {
        return Math.round((weight / height / height * 10000) * 100) / 100;
    };
    ProfileComponent = __decorate([
        core_1.Component({
            selector: 'app-profile',
            template: __webpack_require__("./src/app/profile/profile.component.html"),
            styles: [__webpack_require__("./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [fit_service_1.FitService])
    ], ProfileComponent);
    return ProfileComponent;
}());
exports.ProfileComponent = ProfileComponent;


/***/ }),

/***/ "./src/app/services/fit.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var messages_service_1 = __webpack_require__("./src/app/services/messages.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var FitService = /** @class */ (function () {
    function FitService(http, _Messages, _Router) {
        this.http = http;
        this._Messages = _Messages;
        this._Router = _Router;
        this._api = "http://localhost:8080/fit";
        this.ExerciseStack = [];
        this.ExerciseStack = [
            "Squat",
            "Plank",
            "Running",
            "Jump Rope",
            "Swimming",
            "Walk",
            "Aerobic Dance",
            "Zumba",
            "Yoga",
            "Centergy",
            "Stretching",
            "Gentle Yoga",
            "Push Up"
        ];
    }
    FitService.prototype.signUp = function (name, password) {
        var _this = this;
        this.Me = { Name: name, Password: password, Profile: { Age: null, Weight: null, Height: null, GoalWeight: null, BMI: null, GoalBMI: null },
            PlanExercise: [], DoneExerciseList: [] };
        this.http.get(this._api + "/exercise", { params: { name: name, password: password } })
            .subscribe(function (data) {
            if (!data.json()) {
                // alert user name taken
                alert("User Name is taken, please try different name");
                console.log('already taken');
                return;
            }
            _this._Router.navigate(['/profile']);
        });
    };
    FitService.prototype.login = function (name, password) {
        var _this = this;
        this.http.get(this._api + "/exercise/login", { params: { name: name, password: password } })
            .subscribe(function (data) {
            var check = data.json();
            if (!check) {
                alert('Username or Password doesn\'t match in our system! - service ');
                return;
            }
            _this.Me = data.json();
            _this._Router.navigate(['/fit']);
        });
    };
    FitService.prototype.profileAdd = function (age, weight, height, goalWeight, bmi, goalBmi, name) {
        var _this = this;
        console.log('got the profile component in service');
        this.http.post(this._api + "/exercise/profile", { Age: age, Weight: weight, Height: height,
            GoalWeight: goalWeight, BMI: bmi,
            GoalBMI: goalBmi, name: name })
            .subscribe(function (data) {
            console.log('subscribe in profile - service');
            console.log('successfully got profile - service');
            _this.Me.Profile = data.json();
        });
        this._Router.navigate(['/fit']);
    };
    FitService.prototype.chooseExercise = function (text) {
        var _this = this;
        this.http.post(this._api + "/exercise/choose", { name: this.Me.Name, Text: text })
            .subscribe(function (data) {
            if (!data.json()) {
                console.log('plan data is false - service');
                return;
            }
            console.log('successfully planned - service');
            _this.Me.PlanExercise = data.json();
        });
        /*     if(!this.Me.PlanExercise.find(x => x.Text == text)){
              this.Me.PlanExercise.push({Text: text, Chosen: false});
            } */
    };
    FitService.prototype.selectExercise = function (text, time, set) {
        /* var totalTime = time * set;
        this.Model.Record.push({Text: text, Time: time, Set: set, TotalTime: totalTime});
        if(!this.Me.DoneExerciseList.find(x => x.Text == text)){
          this.Me.DoneExerciseList.push({Text: text, Time: time, Set: set, TotalTime: totalTime});
        }
        else{
          var RecordReceived = this.timeCalculate(text, time, set);
          var recordIndex = RecordReceived.findIndex(x => x.Text == text);
          var index = this.Me.DoneExerciseList.findIndex(x => x.Text == text);
          this.Me.DoneExerciseList[index] = RecordReceived[recordIndex];
        }
         */
    };
    FitService.prototype.timeCalculate = function (text, time, set) {
        /*       var record = this.Model.Record.pop();
        
              var currentTime = Number(record.Time);
              var currentSet = Number(record.Set);
        
              var record2 = this.Model.Record.pop();
              var prevTime = Number(record2.Time) ;
              var prevSet = Number(record2.Set);
        
              var sum = Number(currentTime + prevTime);
              var setSum = Number(currentSet + prevSet);
              var totalTime = Number(sum * setSum);
        
              this.Model.Record.push({Text: text, Time: sum, Set: setSum, TotalTime: totalTime });
              return this.Model.Record;
            } */
    };
    FitService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http,
            messages_service_1.MessagesService,
            router_1.Router])
    ], FitService);
    return FitService;
}());
exports.FitService = FitService;


/***/ }),

/***/ "./src/app/services/messages.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var MessagesService = /** @class */ (function () {
    function MessagesService() {
        this.Messages = [];
        this.Messages = ['Complete your Profile before you begin to plan your workout.', 'You can choose your workout plan.'];
    }
    MessagesService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], MessagesService);
    return MessagesService;
}());
exports.MessagesService = MessagesService;


/***/ }),

/***/ "./src/app/share/share.component.css":
/***/ (function(module, exports) {

module.exports = "ul{\n    list-style-type: none;\n    margin: 10px;\n}\n\n.card{\n    margin: 10px;\n    color: #1C5F93;\n}\n\n.card-header{\n    background-color: #7CACEA;\n    height: 120px;\n    text-align: center;\n    border: none;\n    padding: 1.7rem 0;\n    font-size: 30px;\n    color: white;\n    \n    \n}"

/***/ }),

/***/ "./src/app/share/share.component.html":
/***/ (function(module, exports) {

module.exports = "<div clas=\"row justify-content-md-center\">\n  <!-- You're sharing with.. -->\n  <div class=\"col\">\n    <div class=\"card\" >\n        <div class=\"card-header\">\n          (User's) Workout Achievement\n        </div>\n        <ul class=\"list-group list-group-flush list\">\n          <li>UserName:</li>\n        </ul>\n    </div> \n  </div>\n\n  <!-- who do you want to share?-->\n  <div class=\"col\">\n    <div class=\"card\" >\n        <div class=\"card-header\">\n        User List\n        </div>\n        <ul class=\"list-group list-group-flush list\">\n            <li>UserName:\n                <button \n                class=\"btn btn-sm btn-warning\">\n                    Share\n                </button>\n            </li>\n\n        </ul>\n    </div> \n  </div>\n</div>"

/***/ }),

/***/ "./src/app/share/share.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var ShareComponent = /** @class */ (function () {
    function ShareComponent() {
    }
    ShareComponent.prototype.ngOnInit = function () {
    };
    ShareComponent = __decorate([
        core_1.Component({
            selector: 'app-share',
            template: __webpack_require__("./src/app/share/share.component.html"),
            styles: [__webpack_require__("./src/app/share/share.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ShareComponent);
    return ShareComponent;
}());
exports.ShareComponent = ShareComponent;


/***/ }),

/***/ "./src/app/sign-up/sign-up.component.css":
/***/ (function(module, exports) {

module.exports = ".login-form{\n    margin-top: 10px;\n    margin-bottom: 2px;\n    \n}\n\n.btn{\n    margin-top: 2px;\n    margin-bottom: 5px;\n\n    color: white;\n}\n\nul{\n    list-style-type: none;\n    margin: 10px;\n}\n\n.card{\n    margin: 10px;\n    color: #1C5F93;\n}\n\n.card-header{\n    background-color: #7CACEA;\n    height: 120px;\n    text-align: center;\n    border: none;\n    padding: 1.7rem 0;\n    font-size: 30px;\n    color: white;\n    \n    \n}\n\nform{\n    padding: 1rem;\n}\n\n.btn{\n    background-color: #F4C3D8;\n    border: none;\n}\n\n.subtitle{\n    font-size: 15px;\n    margin: 1px;\n    font-weight: 300;\n    \n}\n\n.text-uppercase{\n    font-size: 12px;\n    color: white;\n}\n\n.title{\n    font-size: 20px;\n    \n    padding: 0.4rem 0.4rem;\n}\n\n.black{\n    margin-top: 10px;\n    margin-bottom: 2px;\n    color: #7CACEA;\n}\n\n.selected{\n    background-color:#FBE9C1;\n}\n\n.font-margin{\n    margin-bottom: 5px;\n    margin-left: 10px;\n}\n\n.btn-margin{\n    margin-left:98px;\n    margin-top: 0px;\n\n}"

/***/ }),

/***/ "./src/app/sign-up/sign-up.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"row justify-content-center\">\n    <div class=\"card text-center\" style =\"width: 20rem\">\n        <div class=\"card-header\">\n            <div class=\"text-uppercase title\">Welcome!</div>\n        </div>\n            <div class=\"text-uppercase black\">New to Here?</div>\n            <div class=\"font-margin \">\n                Please Sign Up\n            </div>  \n            <div class=\"login-form\" >\n                <input #Name type =\"text\" placeholder =\"User Name\" /><br/>\n                <input #Password type =\"text\" placeholder =\"Password\" />\n            \n            </div>\n            <div class=\"btn-margin\">\n                <button class=\"btn\" (click)=\"newUser(Name.value, Password.value)\" >Sign Up</button>\n            </div>\n        </div>\n</div>\n"

/***/ }),

/***/ "./src/app/sign-up/sign-up.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var fit_service_1 = __webpack_require__("./src/app/services/fit.service.ts");
var messages_service_1 = __webpack_require__("./src/app/services/messages.service.ts");
var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(_Fit, _Messages) {
        this._Fit = _Fit;
        this._Messages = _Messages;
        this.Me = _Fit.Me;
        // this.loginName = _Fit.Me.Name;
    }
    SignUpComponent.prototype.ngOnInit = function () {
    };
    SignUpComponent.prototype.newUser = function (name, password) {
        this._Fit.signUp(name, password);
        console.log('Sign Up Yay');
        this._Messages.Messages.push('Successfully Signed Up! Welcome, ' + name + '!');
    };
    SignUpComponent = __decorate([
        core_1.Component({
            selector: 'app-sign-up',
            template: __webpack_require__("./src/app/sign-up/sign-up.component.html"),
            styles: [__webpack_require__("./src/app/sign-up/sign-up.component.css")]
        }),
        __metadata("design:paramtypes", [fit_service_1.FitService, messages_service_1.MessagesService])
    ], SignUpComponent);
    return SignUpComponent;
}());
exports.SignUpComponent = SignUpComponent;


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map