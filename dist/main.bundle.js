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
                fit_component_1.FitComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                router_1.RouterModule.forRoot([
                    { path: 'home', component: home_component_1.HomeComponent },
                    { path: 'fit', component: fit_component_1.FitComponent },
                    { path: '', redirectTo: '/home', pathMatch: 'full' }
                ])
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/fit/fit.component.css":
/***/ (function(module, exports) {

module.exports = ".login-form{\n    margin: 10px;\n}\n\n.btn{\n    margin: 5px;\n    color: white;\n}\n\nul{\n    list-style-type: none;\n    margin: 10px;\n}\n\n.card{\n    margin: 10px;\n    color: #1C5F93;\n}\n\n.card-header{\n    background-color: #7CACEA;\n    height: 120px;\n    text-align: center;\n    border: none;\n    padding: 1.7rem 0;\n    font-size: 30px;\n    color: white;\n    \n    \n}\n\n.textWrap{\n    height: 150px;\n   padding: 1.2rem;\n}\n\nform{\n    padding: 1rem;\n}\n\n.btn{\n    background-color: #F4C3D8;\n    border: none;\n}\n\n.subtitle{\n    font-size: 15px;\n    margin: 1px;\n    font-weight: 300;\n    \n}\n\n.text-uppercase{\n    font-size: 12px;\n    color: white;\n}\n\n.black{\n    margin-top: 10px;\n    margin-bottom: 2px;\n    margin-left: 10px;\n    color: #7CACEA;\n}\n\n.selected{\n    background-color:#FBE9C1;\n}\n\n.font-margin{\n    margin-bottom: 5px;\n    margin-left: 10px;\n}"

/***/ }),

/***/ "./src/app/fit/fit.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- For First User, this user will be the person who tracks the workout-->\n<div class=\"card\" *ngIf=\"!Me\">\n    <div class=\"card-header\">\n        <div class=\"text-uppercase\">Welcome to Fitness Tracker!</div>\n    </div>\n    <div class=\"text-uppercase black\">New to Here?</div>\n    <div class=\"font-margin\">\n        Please Sign Up\n    </div>  \n    <!-- Sign Up Form-->\n    <div class=\"login-form\" >\n        <input #Name /><button class=\"btn\" (click)=\"signUp(Name.value)\" >Sign Up</button>\n    </div>\n    <div class =\"text-uppercase black\">\n        Already a user? \n    </div>\n    <div class=\"font-margin\">\n        Please Sign In\n        </div> \n    <!-- Sign in Form-->\n    <div class=\"login-form\" >\n        <input #Name2 /><button class=\"btn\" (click)=\"login(Name2.value)\" >Sign In</button>\n    </div>\n\n</div> <!-- Log in Form Ends-->\n\n<!-- \n<div class=\"card\" *ngIf=\"Me\">\n    <div class=\"card-header\">Please Sign In</div>\n    \n    <div class=\"login-form\" >\n        <input #user /><button class=\"btn btn-primary\" (click)=\"differentUser(user.value)\" >Sign In</button>\n    </div>\n\n</div>  -->\n\n<div class=\"card\" *ngIf= \" signIn && !finishProfile\">\n    <div class=\"card-header\">\n    <div class=\"text-uppercase\">Please Create Your Profile Before Tracking Your Workout!</div> \n    Create Profile\n    </div>\n    <form>\n        <div class=\"form-row\">\n    \n        <div class=\"form-group col-md-4\">\n            <label for=\"inputName\">Name</label>\n            <input #name type=\"text\" class=\"form-control\" id=\"inputName\" [value]=\"logInName\">\n        </div>\n    \n        <div class=\"form-group col-md-4\">\n            <label for=\"inputAge\">Age</label>\n            <input #age type=\"number\" class=\"form-control\" id=\"inputAge\" placeholder=\"Age\" >\n        </div>\n        </div>\n    \n        <div class=\"form-group\">\n            <label for=\"inputHeight\">Height</label>\n            <input #height type=\"number\" class=\"form-control\" id=\"inputHeight\" placeholder=\"cm\">\n        </div>\n\n        <div class=\"form-group\">\n            <label for=\"inputWeight\">Weight</label>\n            <input #weight type=\"number\" class=\"form-control\" id=\"inputWeight\" placeholder=\"kg\">\n        </div>\n    \n        <div class=\"form-group\">\n            <label for=\"inputGoalWeight\">Goal Weight</label>\n            <input #goalWeight type=\"number\" class=\"form-control\" id=\"inputGoalWeight\" placeholder=\"kg\">\n        </div>\n        </form>\n    <div>\n        <button class=\"btn btn-primary btn-sm\" (click)=\"profileAdd(age.value, weight.value, height.value, goalWeight.value, name.value)\">Save</button>\n    </div> \n</div> <!-- Profile Form ends-->\n\n\n<!-- Return Profile-->\n<div class=\"row justify-content-md-center\" *ngIf = \"alreadyuser\">\n        <!-- Saved Profile display-->\n    <div class=\"col\">\n        <div class=\"card tracking\" >\n            <div class=\"card-header\">\n            {{Me.Name}}'s Profile\n            </div>\n            <ul class=\"list-group list-group-flush list\" *ngFor=\"let profile of Model.Profile\">\n            <!-- **ngfor: display profile here** -->\n                <li>Name: {{Me.Name}}</li>\n                <li>Age: {{profile.Age}}</li>\n                <li>Weight: {{profile.Weight}}</li>\n                <li>BMI: {{profile.BMI}}</li>\n                <li>Goal Weight: {{profile.GoalWeight}}</li>\n                <li>Goal BMI: {{profile.GoalBMI}}</li>\n                \n            </ul>\n        </div> <!-- Saved Profile display ends-->\n    </div>\n\n</div>\n\n\n\n\n<div class=\"row justify-content-md-center\" *ngIf = \"finishProfile || alreadyuser\">\n    <!-- Create Profile display-->\n    <div class=\"col\">\n        <div class=\"card tracking\" >\n            <div class=\"card-header\">\n            {{Me.Name}}'s Profile\n            </div>\n            <ul class=\"list-group list-group-flush list\" *ngFor=\"let profile of Model.Profile\">\n            <!-- **ngfor: display profile here** -->\n                <li>Name: {{Me.Name}}</li>\n                <li>Age: {{profile.Age}}</li>\n                <li>Weight: {{profile.Weight}}</li>\n                <li>BMI: {{profile.BMI}}</li>\n                <li>Goal Weight: {{profile.GoalWeight}}</li>\n                <li>Goal BMI: {{profile.GoalBMI}}</li>\n                \n            </ul>\n        </div> <!-- Saved Profile display ends-->\n    </div>\n\n    <!-- who do you want to share?-->\n    <div class=\"col\">\n        <div class=\"card tracking\" >\n            <div class=\"card-header\">\n            User List\n            </div>\n            <ul class=\"list-group list-group-flush list\">\n                <li>UserName:\n                    <button \n                    class=\"btn btn-sm btn-warning\">\n                        Share\n                    </button>\n                </li>\n\n            </ul>\n        </div> \n    </div>\n\n    <!-- You're sharing with.. -->\n    <div class=\"col\">\n        <div class=\"card tracking\" >\n            <div class=\"card-header\">\n            (User's) Workout Achievement\n            </div>\n            <ul class=\"list-group list-group-flush list\">\n                <li>UserName:</li>\n\n            </ul>\n        </div> \n    </div>\n\n</div>\n\n\n<div class=\"row justify-content-md-center\" *ngIf=\"finishProfile || alreadyuser\">\n    <div class=\"col  mb-3\">\n        \n        <div class=\"card\" >\n            <div class=\"card-header\">Workout List </div>\n            <form>\n                <div class=\"form-group\">\n                  <select multiple class=\"form-control\" id=\"exampleFormControlSelect2\" >\n                    <option *ngFor=\"let list of GetExercise.List\"  (click)=\"submitWorkout($event, list)\">\n                        {{list}}\n                    </option>\n                  </select>\n                </div>\n              </form>\n  \n          </div>\n    </div>\n</div>\n<div class=\"row\" *ngIf=\"finishProfile\">\n    <div class=\"col-md-6\">\n        <div class=\"card mb-3\" >\n            <div class=\"card-header textWrap\">\n                Workout Plan\n                <div class=\"subtitle\">Choose Completed Workout</div>\n                <div class=\"text-uppercase\">Each workout corresponds to 3 minutes workout time</div> \n            </div>\n                <ul class=\"list-group list-group-flush \">\n                    <li *ngFor=\"let list of Model.PlanExercise\"\n                        [ngClass]=\"{ 'selected': list.Chosen }\"\n                        class=\"list-group-item d-flex justify-content-between align-items-center \">\n                        {{list.Text}}\n                        <button (click)=\"doneExercise($event, list)\"\n                                class=\"btn btn-sm btn-primary\">\n                                Done\n                        </button>\n                    </li>\n                </ul>\n            </div>\n            \n    </div>\n\n\n\n\n<!-- if profile is saved and disappear, display plan to choose-->\n    <div class=\"col-md-6\">\n        <!-- Exercise Plan-->\n        <div class=\"card tracking\" *ngIf=\"finishProfile || alreadyuser\">\n            <div class=\"card-header\">\n            You achieved..\n            </div>\n            <ul class=\"list-group list-group-flush \">\n                <li *ngFor= \"let choice of Model.DoneExerciseList\" (click)=\"submitWorkout($event, choice.Text)\"\n                    class=\"list-group-item d-flex justify-content-between align-items-center \">\n                    {{choice.Text}}\n                    <i *ngFor= \"let time of Model.DoneExerciseList\" class=\"badge float-right\" class =\"badge-info\">\n                        {{time.WorkoutMinute}}\n                    </i>\n                </li>\n            </ul>\n            <div class=\"card-body\">\n                <i *ngFor= \"let time of Model.Person\">\n                    Your Total Workout Time: {{time.TotalWorkout}} minutes\n                </i>\n            </div>\n        </div><!-- Exercise Plan end-->\n    </div>\n</div><!-- row end -->\n\n\n\n"

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
var exercise_1 = __webpack_require__("./src/app/models/exercise.ts");
var FitComponent = /** @class */ (function () {
    function FitComponent(http) {
        var _this = this;
        this.http = http;
        this.Model = new exercise_1.Fit();
        this.signIn = false;
        this.finishProfile = false;
        this.alreadyuser = false;
        this._api = "http://localhost:8080/fit";
        this.AlreadyUser = function () { return _this.Model.Profile.find(function (x) { return x.UserId == _this.Me.Name; }); };
        this.MyPlanExercise = function () { return _this.Model.PlanExercise.find(function (x) { return x.UserId == _this.Me.Name; }); };
        this.ChosenExercise = function () { return _this.Model.PlanExercise.find(function (x) { return x.Chosen; }); };
        setInterval(function () { return _this.refresh(); }, 1000);
    }
    FitComponent.prototype.ngOnInit = function () {
    };
    FitComponent.prototype.refresh = function () {
        var _this = this;
        this.http.get(this._api + "/state")
            .subscribe(function (data) { return _this.Model = data.json(); });
    };
    FitComponent.prototype.submitWorkout = function (e, text) {
        console.log('submitting workout list');
        e.preventDefault();
        this.http.post(this._api + "/exercise", { Text: text, UserId: this.Me.Name })
            .subscribe();
    };
    FitComponent.prototype.doneExercise = function (e, plan) {
        var _this = this;
        console.log('done exercise');
        e.preventDefault();
        this.http.post(this._api + "/exercise/choose", { Text: plan.Text, UserId: this.Me.Name })
            .subscribe(function (data) { return _this.Workout = { Text: plan.Text, UserId: _this.Me.Name, Chosen: true }; });
    };
    // need to prevent sign up same userid here?
    FitComponent.prototype.signUp = function (name) {
        var _this = this;
        console.log('Sign Up successful');
        this.http.get(this._api + "/exercise", { params: { userId: name } })
            .subscribe(function (data) { return _this.Me = { Name: name }; });
        this.logInName = name;
        this.signIn = !this.signIn;
        this.giveExerciseList(name);
    };
    FitComponent.prototype.login = function (name) {
        var _this = this;
        console.log('log in successful');
        this.http.get(this._api + "/exercise/login", { params: { userId: name } })
            .subscribe(function (data) { return _this.Me = { Name: name }; });
        this.alreadyuser = !this.alreadyuser;
    };
    FitComponent.prototype.giveExerciseList = function (name) {
        var _this = this;
        console.log('giveExerciseList executed');
        this.http.get(this._api + "/exercise/getList", { params: { userId: name } })
            .subscribe(function (data) { return _this.GetExercise = { List: data.json() }; });
    };
    /*
    differentUser(name: string){
      this.http.get(this._api + "/exercise/share", { params : { userId: name } })
      .subscribe(data=> this.Others =  {Name: name} )
    }
  */
    FitComponent.prototype.profileAdd = function (age, weight, height, goalWeight, name) {
        var _this = this;
        this.finishProfile = !this.finishProfile;
        var goalBmiCalculate = this.calculateBMI(goalWeight, height);
        var bmiCalculate = this.calculateBMI(weight, height);
        this.http.post(this._api + "/exercise/profile", { Age: age, Weight: weight, Height: height, GoalWeight: goalWeight,
            BMI: bmiCalculate, GoalBMI: goalBmiCalculate, UserId: this.Me.Name })
            .subscribe(function (data) { return _this.DisplayProfile = { Age: age, Weight: weight, Height: height, GoalWeight: goalWeight,
            BMI: bmiCalculate, GoalBMI: goalBmiCalculate, UserId: name }; });
    };
    FitComponent.prototype.calculateBMI = function (weight, height) {
        return Math.round((weight / height / height * 10000) * 100) / 100;
    };
    FitComponent = __decorate([
        core_1.Component({
            selector: 'app-fit',
            template: __webpack_require__("./src/app/fit/fit.component.html"),
            styles: [__webpack_require__("./src/app/fit/fit.component.css")]
        }),
        __metadata("design:paramtypes", [http_1.Http])
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

module.exports = "<!--Need to find health info database api-->\n<!-- <div class=\"card\">\n    <img class=\"card-img-top card-img-bottom\" *ngIf=\"Model.HealthInfo\" [src]=\"Model.HealthInfo.url\" /> \n    <div class = \"card-img-overlay\" style=\"text-align: center\">\n      <button class=\"btn btn-success btn-lg\" (click)=\"getHealthInfo($event)\">\n              Get Health Information\n      </button>\n    </div>\n</div> \n -->"

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

/***/ "./src/app/messages/messages.component.css":
/***/ (function(module, exports) {

module.exports = "#messages {\n    padding-top: 0.5rem;\n    padding-left: 0.2rem;\n    \n}\n\n.button {\n    margin-left: 5px;\n    color: #1C5F93;\n    font-weight: bold;\n    float: right;\n    font-size: 22px;\n    line-height: 20px;\n    cursor: pointer;\n    -webkit-transition: 0.3s;\n    transition: 0.3s;\n}\n\n.button:hover {\n    color: black;\n    cursor: pointer;\n}\n\n.alert{\n    padding: 10px;\n    border: 2px solid #CFD5E1;\n    color: #1C5F93;\n    margin-bottom: 15px;\n}\n\n.msg{\n    list-style-type: none;\n    padding-top: 0.2rem;\n    padding-left: 0.2rem;\n    padding-bottom: 0.2rem;\n}\n\nh3{\n    text-align: center;\n}"

/***/ }),

/***/ "./src/app/messages/messages.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"messages\">\n  <div class=\"alert\">\n    <!-- Binding-->\n    <span class=\"button\" onclick=\"this.parentElement.style.display='none';\"> <!-- javascript-->\n      &times;\n    </span>\n    <h3>Track your Exercise!</h3>\n    \n    <ul class = \"msg\">\n      <li *ngFor =\"let msg of Messages\">{{msg}}</li>\n    </ul>\n  </div><!-- Alert -->\n</div><!--messages-->\n\n\n"

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
var MessagesComponent = /** @class */ (function () {
    function MessagesComponent() {
        this.Messages = ['Complete your Profile before you begin to plan your workout.', 'You can choose your workout plan.'];
    }
    MessagesComponent.prototype.ngOnInit = function () {
    };
    MessagesComponent = __decorate([
        core_1.Component({
            selector: 'app-messages',
            template: __webpack_require__("./src/app/messages/messages.component.html"),
            styles: [__webpack_require__("./src/app/messages/messages.component.css")]
        }),
        __metadata("design:paramtypes", [])
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
        this.PlanExercise = [];
        this.Profile = [];
        this.DoneExerciseList = [];
        /** Need to find health info database api
        HealthInfo: {
            url: string;
        }
        */
    }
    return Fit;
}());
exports.Fit = Fit;
var WorkoutList = /** @class */ (function () {
    function WorkoutList() {
    }
    return WorkoutList;
}());
exports.WorkoutList = WorkoutList;
var Different = /** @class */ (function () {
    function Different() {
    }
    return Different;
}());
exports.Different = Different;
var User = /** @class */ (function () {
    function User() {
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

module.exports = "<nav class=\"navbar navbar-expand-sm navbar-dark nav-back\">\n  <div class=\"container\">\n    <div>\n        <a class=\"navbar-brand\" routerLink=\"/fit\">Fitness Tracker</a>\n    </div>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse navbar-nav\">\n      <ul class=\"navbar-nav\">\n          <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/home\" routerLinkActive=\"active\" >Home <span class=\"sr-only\">(current)</span></a>\n          </li>\n          <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/fit\" routerLinkActive=\"active\" >Fitness</a>\n          </li>\n      </ul>\n    </div>\n\n  </div><!-- navbar container -->\n</nav><!-- nav bar -->\n"

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