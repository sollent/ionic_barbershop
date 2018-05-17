webpackJsonp([6],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__public_public__ = __webpack_require__(102);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the AccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AccountPage = /** @class */ (function () {
    function AccountPage(navCtrl, navParams, http, formBuilder, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.publicCond = false;
        this.user_id = this.navParams.get("user_id");
        this.loadUserData(this.user_id);
        this.loadOrders(this.user_id);
        this.form = this.formBuilder.group({
            avatar: ['']
        });
    }
    AccountPage.prototype.loadUserData = function (id) {
        var _this = this;
        //Окно загрузки
        var loading = this.loadingCtrl.create({
            content: 'Загрузка данных...'
        });
        loading.present();
        this.http.get("http://test9.superresheba.by/project/Egor_Sasha/GetUserInfo.php?user_id=" + id)
            .map(function (res) { return res.json(); })
            .subscribe(function (Arr) {
            _this.FirstName = Arr.first_name;
            _this.LastName = Arr.last_name;
            _this.ThirdName = Arr.third_name;
            _this.Login = Arr.login;
            _this.OfferInfo = Arr.about;
            _this.Avatar = Arr.avatar;
            setTimeout(function () {
                loading.dismiss();
            }, 1000);
            if (Arr.avatar) {
                _this.cond = true;
            }
            else {
                _this.cond = false;
            }
            console.log(_this.cond);
            if (Arr.about) {
                _this.publicCond = true;
            }
        });
    };
    AccountPage.prototype.LoadAvatar = function () {
        var _this = this;
        this.avatar = this.form.value.avatar;
        var res;
        this.http.get("http://test9.superresheba.by/project/Egor_Sasha/LoadAvatar.php?avatar=" + this.avatar + "&id=" + this.user_id)
            .map(function (res) { return res.json(); })
            .subscribe(function (Arr) {
            res = Arr;
            if (res == "OK") {
                _this.ShowAlert();
            }
        });
    };
    AccountPage.prototype.loadOrders = function (id) {
        var _this = this;
        this.http.get("http://test9.superresheba.by/project/Egor_Sasha/GetOrders.php?id=" + id)
            .map(function (res) { return res.json(); })
            .subscribe(function (Arr) {
            _this.OrderData = Arr;
            if (Arr.bool == "false") {
                _this.OrderInfo = Arr.info;
                _this.OrderData = false;
            }
        });
    };
    AccountPage.prototype.update = function () {
        this.loadUserData(this.user_id);
        this.loadOrders(this.user_id);
    };
    AccountPage.prototype.ShowPhone = function (phone) {
        var alert = this.alertCtrl.create({
            title: phone,
            buttons: [
                {
                    text: 'Позвонить'
                },
                {
                    text: 'Отмена'
                }
            ]
        });
        alert.present();
    };
    AccountPage.prototype.openPublicPage = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__public_public__["a" /* PublicPage */], { id: id });
    };
    AccountPage.prototype.ShowAlert = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            message: 'Вы успешно загрузили аватарку',
            buttons: [
                {
                    text: 'OK',
                    handler: function () {
                        //Будем перезагружать страничку
                        _this.loadUserData(_this.user_id);
                    }
                }
            ]
        });
        confirm.present();
    };
    AccountPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AccountPage');
    };
    AccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-account',template:/*ion-inline-start:"/home/sollent98/Рабочий стол/ionic_proj/ionic_barbershop/src/pages/account/account.html"*/'<!--\n  Generated template for the AccountPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>account</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-item>\n    <ion-avatar item-left>\n      <img class="avatar" src="{{Avatar}}" alt="">\n    </ion-avatar>\n    <ion-label>{{Login}}</ion-label>\n  </ion-item>\n  <button ion-button icon-only class="update_button" (click)="update()">\n    <ion-icon name="md-refresh"></ion-icon>\n  </button>\n  <ion-card>\n    <ion-card-content>Добро пожаловать <b>{{FirstName}} {{ThirdName}}</b> в ваш аккаунт.\n      Здесь вы можете опубликовать свои услуги как парикмахера и вести учет заявок ваших клиентов!</ion-card-content>\n  </ion-card>\n\n  <!--Загрузить аватарку если она не загружена-->\n  <div *ngIf="!cond">\n    <ion-title>Загрузите вашу аватарку</ion-title>\n    <form [formGroup]="form" (ngSubmit)="LoadAvatar()">\n      <ion-item>\n        <ion-label>Ссылка</ion-label>\n        <ion-input type="text" formControlName="avatar"></ion-input>\n      </ion-item>\n      <button ion-button type="submit" color="secondary" class="form_button" full>Сохранить</button>\n    </form>\n  </div>\n\n  <button *ngIf="!publicCond" class="public_offer" ion-button full (click)="openPublicPage(user_id)">Опубликовать свою услугу</button>\n\n  <ion-card *ngIf="publicCond">\n    <ion-card-content style="color:darkgreen; font-weight: bold;">\n      Ваша услуга опубликованна, можете вести учет заказов\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card *ngIf="!publicCond">\n    <ion-card-content>Вы сможете вести учет заявок только после публикации своей услуги</ion-card-content>\n  </ion-card>\n\n    <div *ngIf="publicCond">\n      <ion-item>\n        <ion-label class="offers">Заказы</ion-label>\n      </ion-item>\n\n      <ion-card *ngIf="!OrderData">\n        <ion-card-content>{{OrderInfo}}...</ion-card-content>\n      </ion-card>\n\n          <button *ngFor="let order of OrderData" (click)="ShowPhone(order.phone)" ion-button icon-left class="order_button" full outline color="secondary">\n            <ion-icon name="ios-briefcase"></ion-icon>\n            <ion-label class="order_label">Номер заказа: {{order.id}}</ion-label>\n            <p>{{order.client}}</p>\n            <em class="order_time">{{order.time}}</em>\n          </button>\n\n\n    </div>\n\n\n</ion-content>\n'/*ion-inline-end:"/home/sollent98/Рабочий стол/ionic_proj/ionic_barbershop/src/pages/account/account.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], AccountPage);
    return AccountPage;
}());

//# sourceMappingURL=account.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PublicPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the PublicPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PublicPage = /** @class */ (function () {
    function PublicPage(navCtrl, navParams, http, formBuilder, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.user_id = this.navParams.get("id");
        this.form = this.formBuilder.group({
            about: [''],
            adress: [''],
            time: ['']
        });
    }
    PublicPage.prototype.LoadOffer = function () {
        var _this = this;
        this.about = this.form.value.about;
        this.adress = this.form.value.adress;
        this.time = this.form.value.time;
        var res;
        this.http.get("http://test9.superresheba.by/project/Egor_Sasha/LoadOffer.php?about=" + this.about + "&adress=" + this.adress + "&time=" + this.time + "&id=" + this.user_id)
            .map(function (res) { return res.json(); })
            .subscribe(function (Arr) {
            res = Arr;
            if (res == "OK") {
                _this.ShowAlert();
            }
            else {
                console.log("Ошибка!");
            }
        });
    };
    PublicPage.prototype.ShowAlert = function () {
        var confirm = this.alertCtrl.create({
            message: 'Ваша услуга успешно опубликована',
            buttons: [
                {
                    text: 'OK'
                }
            ]
        });
        confirm.present();
    };
    PublicPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PublicPage');
    };
    PublicPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-public',template:/*ion-inline-start:"/home/sollent98/Рабочий стол/ionic_proj/ionic_barbershop/src/pages/public/public.html"*/'<!--\n  Generated template for the PublicPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>public</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form [formGroup]="form" (ngSubmit)="LoadOffer()">\n    <ion-item>\n      <ion-label>Описание услуги</ion-label>\n      <ion-textarea rows="7" cols="7" type="text" formControlName="about"></ion-textarea>\n    </ion-item>\n    <ion-item>\n      <ion-label>Адресс</ion-label>\n      <ion-input type="text" formControlName="adress"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Время</ion-label>\n      <ion-input type="text" formControlName="time"></ion-input>\n    </ion-item>\n    <button ion-button type="submit" color="secondary" class="form_button" full>Опубликовать</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/home/sollent98/Рабочий стол/ionic_proj/ionic_barbershop/src/pages/public/public.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], PublicPage);
    return PublicPage;
}());

//# sourceMappingURL=public.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__regist_regist__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__account_account__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, formBuilder, http) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.http = http;
        this.form = this.formBuilder.group({
            login: [''],
            password: [''],
        });
    }
    LoginPage.prototype.LoginForm = function () {
        var _this = this;
        this.login = this.form.value.login;
        this.password = this.form.value.password;
        var error;
        this.http.get("http://test9.superresheba.by/project/Egor_Sasha/Login.php?login=" + this.login + "&password=" + this.password)
            .map(function (res) { return res.json(); })
            .subscribe(function (Arr) {
            _this.UserId = Arr.id;
            error = Arr;
            if (error == "ERROR") {
                console.log("Ошибка получения данных!");
            }
            else {
                console.log(_this.UserId);
                _this.openAccount(_this.UserId);
            }
        });
    };
    LoginPage.prototype.openAccount = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__account_account__["a" /* AccountPage */], { user_id: id });
    };
    LoginPage.prototype.openRegistPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__regist_regist__["a" /* RegistPage */]);
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/home/sollent98/Рабочий стол/ionic_proj/ionic_barbershop/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Войти</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <!--<ion-card-content>-->\n      <!--<p>Если у вас нет аккаунта и вы хотите публикавать свои услуги, пожалуйста зарегестрируетесь!</p>-->\n      <!--<button ion-button full (click)="openRegistPage()">Регистрация</button>-->\n    <!--</ion-card-content>-->\n\n  </ion-card>\n\n  <form [formGroup]="form" (ngSubmit)="LoginForm()">\n    <ion-item>\n      <ion-label>Логин</ion-label>\n      <ion-input type="text" formControlName="login" clearInput></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Пароль</ion-label>\n      <ion-input type="password" formControlName="password" clearInput></ion-input>\n    </ion-item>\n    <button ion-button type="submit" color="danger" class="form_button" round style="width: 100%;">Войти</button>\n  </form>\n  <button ion-button round style="width: 100%;" (click)="openRegistPage()">Регистрация</button>\n\n\n\n</ion-content>\n'/*ion-inline-end:"/home/sollent98/Рабочий стол/ionic_proj/ionic_barbershop/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__main_main__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the RegistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegistPage = /** @class */ (function () {
    function RegistPage(navCtrl, navParams, formBuilder, http, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.http = http;
        this.alertCtrl = alertCtrl;
        this.form = this.formBuilder.group({
            FirstName: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(5)])],
            LastName: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(5)])],
            ThirdName: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(5)])],
            Experience: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(5)])],
            login: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(5)])],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(5)])],
        });
    }
    RegistPage.prototype.RegistForm = function () {
        var _this = this;
        this.first_name = this.form.value.FirstName;
        this.last_name = this.form.value.LastName;
        this.third_name = this.form.value.ThirdName;
        this.experience = this.form.value.Experience;
        this.login = this.form.value.login;
        this.password = this.form.value.password;
        // let valid = [this.first_name, this.last_name, this.third_name, this.experience, this.login, this.password];
        this.post = {
            first_name: this.first_name,
            last_name: this.last_name,
            third_name: this.third_name,
            experience: this.experience,
            login: this.login,
            password: this.password
        };
        var res;
        this.http.post("http://test9.superresheba.by/project/Egor_Sasha/RegistUser.php", this.post)
            .map(function (res) { return res.json(); })
            .subscribe(function (Arr) {
            res = Arr;
            if (res == "OK") {
                _this.ShowAlert();
            }
        });
        // let errors = [];
        // for(let i = 0; i < valid.length; i++){
        //   if(errors!=null){
        //     break;
        //   }
        //   if(valid[i]==""){
        //      errors[i] = "Не должно быть пустых полей!";
        //   }
        // }
        // console.log(valid);
        // console.log(errors);
    };
    RegistPage.prototype.ShowAlert = function () {
        var _this = this;
        var confirm = this.alertCtrl.create({
            message: 'Вы успешно зарегестрированны',
            buttons: [
                {
                    text: 'ОК',
                    handler: function () {
                        _this.openMainPage();
                    }
                }
            ]
        });
        confirm.present();
    };
    RegistPage.prototype.openMainPage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__main_main__["a" /* MainPage */]);
    };
    RegistPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegistPage');
    };
    RegistPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-regist',template:/*ion-inline-start:"/home/sollent98/Рабочий стол/ionic_proj/ionic_barbershop/src/pages/regist/regist.html"*/'<!--\n  Generated template for the RegistPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>regist</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form [formGroup]="form" (ngSubmit)="RegistForm()">\n    <ion-item>\n      <ion-label>Имя</ion-label>\n      <ion-input type="text" formControlName="FirstName" clearInput></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Фамилия</ion-label>\n      <ion-input type="text" formControlName="LastName" clearInput></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Отчество</ion-label>\n      <ion-input type="text" formControlName="ThirdName" clearInput></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Опыт работы</ion-label>\n      <ion-input type="text" formControlName="Experience" clearInput></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Ваш логин</ion-label>\n      <ion-input type="text" formControlName="login" clearInput></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Придумайте пароль</ion-label>\n      <ion-input type="password" formControlName="password" clearInput></ion-input>\n    </ion-item>\n    <button ion-button type="submit" color="secondary" class="form_button" full>Зарегестрироваться</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/home/sollent98/Рабочий стол/ionic_proj/ionic_barbershop/src/pages/regist/regist.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], RegistPage);
    return RegistPage;
}());

//# sourceMappingURL=regist.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OfferPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the OfferPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OfferPage = /** @class */ (function () {
    function OfferPage(navCtrl, navParams, http, formBuilder, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.id = this.navParams.get("id");
        this.GetFullData(this.id);
    }
    OfferPage.prototype.GetFullData = function (id) {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: 'Загрузка данных...'
        });
        loading.present();
        this.http.get("http://test9.superresheba.by/project/Egor_Sasha/GetFullOffer.php?id=" + id)
            .map(function (res) { return res.json(); })
            .subscribe(function (Arr) {
            _this.Avatar = Arr.avatar;
            _this.FirstName = Arr.first_name;
            _this.LastName = Arr.last_name;
            _this.ThirdName = Arr.third_name;
            _this.Login = Arr.login;
            _this.About = Arr.about;
            _this.Experience = Arr.experience;
            _this.Adress = Arr.adress;
            loading.dismiss();
        });
    };
    OfferPage.prototype.Offer = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            message: 'Пожалуйста, оформите ваш заказ',
            inputs: [
                {
                    name: 'name',
                    placeholder: 'Ваше имя'
                },
                {
                    name: 'phone',
                    placeholder: 'Номер телефона'
                }
            ],
            buttons: [
                {
                    text: 'Оформить',
                    handler: function (data) {
                        //Запрос к серверу на оформления
                        _this.SendForm(data.name, data.phone, _this.id);
                    }
                },
                {
                    text: 'Отмена'
                }
            ]
        });
        alert.present();
    };
    OfferPage.prototype.SendForm = function (name, phone, id) {
        var res;
        this.http.get("http://test9.superresheba.by/project/Egor_Sasha/Form.php?name=" + name + "&phone=" + phone + "&id=" + id)
            .map(function (res) { return res.json(); })
            .subscribe(function (Arr) {
            res = Arr;
            if (res == "OK") {
                console.log("ok");
            }
            else {
                console.log("Ошибка, данные не отправлены");
            }
        });
    };
    OfferPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OfferPage');
    };
    OfferPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-offer',template:/*ion-inline-start:"/home/sollent98/Рабочий стол/ionic_proj/ionic_barbershop/src/pages/offer/offer.html"*/'<!--\n  Generated template for the OfferPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>offer</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-item>\n      <ion-avatar item-left>\n        <img src="{{Avatar}}" alt="">\n      </ion-avatar>\n      <h2 class="caption_h2">{{LastName}} {{FirstName}} {{ThirdName}}</h2>\n      <p>{{Login}}</p>\n    </ion-item>\n\n    <ion-card-content><p>{{About}}</p></ion-card-content>\n\n\n      <em>Опыт работы: <b>{{Experience}}</b></em>\n\n      <em>График:  <b></b></em>\n\n      <em>Адрес: <b>{{Adress}}</b></em>\n\n      <em>Доступное время: <b></b></em>\n\n    <button ion-button full class="full_offer" (click)="Offer()">Заказать стрижку</button>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/sollent98/Рабочий стол/ionic_proj/ionic_barbershop/src/pages/offer/offer.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], OfferPage);
    return OfferPage;
}());

//# sourceMappingURL=offer.js.map

/***/ }),

/***/ 115:
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
webpackEmptyAsyncContext.id = 115;

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/account/account.module": [
		277,
		5
	],
	"../pages/login/login.module": [
		278,
		4
	],
	"../pages/main/main.module": [
		279,
		3
	],
	"../pages/offer/offer.module": [
		280,
		2
	],
	"../pages/public/public.module": [
		281,
		1
	],
	"../pages/regist/regist.module": [
		282,
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
webpackAsyncContext.id = 157;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main_main__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__main_main__["a" /* MainPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/sollent98/Рабочий стол/ionic_proj/ionic_barbershop/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Main" tabIcon="home"></ion-tab>\n\n</ion-tabs>\n'/*ion-inline-end:"/home/sollent98/Рабочий стол/ionic_proj/ionic_barbershop/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(226);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_regist_regist__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_main_main__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_account_account__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_public_public__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_offer_offer__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__ = __webpack_require__(201);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_regist_regist__["a" /* RegistPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_main_main__["a" /* MainPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_account_account__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_public_public__["a" /* PublicPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_offer_offer__["a" /* OfferPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/account/account.module#AccountPageModule', name: 'AccountPage', segment: 'account', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/main/main.module#MainPageModule', name: 'MainPage', segment: 'main', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/offer/offer.module#OfferPageModule', name: 'OfferPage', segment: 'offer', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/public/public.module#PublicPageModule', name: 'PublicPage', segment: 'public', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/regist/regist.module#RegistPageModule', name: 'RegistPage', segment: 'regist', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_regist_regist__["a" /* RegistPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_main_main__["a" /* MainPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_account_account__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_public_public__["a" /* PublicPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_offer_offer__["a" /* OfferPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/sollent98/Рабочий стол/ionic_proj/ionic_barbershop/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/sollent98/Рабочий стол/ionic_proj/ionic_barbershop/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__offer_offer__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MainPage = /** @class */ (function () {
    function MainPage(navCtrl, navParams, http, formBuilder, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.LoadData();
    }
    MainPage.prototype.LoadData = function () {
        var _this = this;
        //Окно загрузки
        var loading = this.loadingCtrl.create({
            content: 'Загрузка данных...'
        });
        loading.present();
        this.http.get("http://test9.superresheba.by/project/Egor_Sasha/GetAllOffers.php")
            .map(function (res) { return res.json(); })
            .subscribe(function (Arr) {
            _this.Offers = Arr;
            loading.dismiss();
            console.log(_this.Offers);
        });
    };
    MainPage.prototype.openLoginPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    MainPage.prototype.openFullOffer = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__offer_offer__["a" /* OfferPage */], { id: id });
    };
    MainPage.prototype.Offer = function (id) {
        var _this = this;
        var alert = this.alertCtrl.create();
        alert.setMessage("Пожалуйста, оформите ваш заказ. Время работы 8:00 - 18:30");
        alert.addInput({
            name: 'name',
            placeholder: 'Ваше имя'
        });
        alert.addInput({
            name: 'phone',
            placeholder: 'Номер телефона'
        });
        alert.addInput({
            name: 'time',
            placeholder: 'Введите удобное вам время',
        });
        alert.addButton({
            text: 'Оформить',
            handler: function (data) {
                //Запрос к серверу на оформление
                _this.SendForm(data.name, data.phone, data.time, id);
            }
        });
        alert.addButton({
            text: "Отмена"
        });
        alert.present();
    };
    // {
    //     message: 'Пожалуйста, оформите ваш заказ',
    //     inputs:[
    //         {
    //             name: 'name',
    //             placeholder: 'Ваше имя'
    //         },
    //         {
    //             name:'phone',
    //             placeholder:'Номер телефона'
    //         },
    //         ],
    //     buttons:[
    //         {
    //             text: 'Оформить',
    //             handler: data => {
    //             //Запрос к серверу на оформление
    //             this.SendForm(data.name, data.phone, id);
    //
    //         }
    // },
    // {
    //     text: 'Отмена'
    // }
    // ]
    // }
    MainPage.prototype.SendForm = function (name, phone, time, id) {
        var res;
        this.http.get("http://test9.superresheba.by/project/Egor_Sasha/Form.php?name=" + name + "&phone=" + phone + "&time=" + time + "&id=" + id)
            .map(function (res) { return res.json(); })
            .subscribe(function (Arr) {
            res = Arr;
            if (res == "OK") {
                console.log("ok");
            }
            else {
                console.log("Ошибка, данные не отправлены");
            }
        });
    };
    MainPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MainPage');
    };
    MainPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-main',template:/*ion-inline-start:"/home/sollent98/Рабочий стол/ionic_proj/ionic_barbershop/src/pages/main/main.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title style="padding-left: 11px;">Предложения</ion-title>\n    <button ion-button class="login" (click)="openLoginPage()">Войти</button>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-card *ngFor="let offer of Offers">\n    <ion-item (click)="openFullOffer(offer.id)">\n      <ion-avatar item-left>\n        <img src="{{offer.avatar}}" alt="">\n      </ion-avatar>\n      <h2>{{offer.first_name}} {{offer.third_name}}</h2>\n      <p>{{offer.login}}</p>\n    </ion-item>\n\n    \n    <ion-card-content class="anons"><em>{{offer.about.substring(0, 50)}}.....</em></ion-card-content>\n\n    <!--<ion-item class="item-left">-->\n      <!--<p>Опыт работы: 12лет</p>-->\n    <!--</ion-item>-->\n    <!--<ion-item class="item-right">-->\n      <!--<p>{{offer.adress}}</p>-->\n    <!--</ion-item>-->\n\n    <ion-row>\n      <ion-col>\n        <ion-item>\n          <p class="experience">Опыт работы: {{offer.experience}}</p>\n        </ion-item>\n      </ion-col>\n      <ion-col>\n        <ion-item>\n          <p class="adress">{{offer.adress}}</p>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n\n\n    <button ion-button class="more" outline (click)="openFullOffer(offer.id)">Подробнее</button>\n    <button ion-button class="order" color="danger" (click)="Offer(offer.id)">Заказать стрижку</button>\n\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/sollent98/Рабочий стол/ionic_proj/ionic_barbershop/src/pages/main/main.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Http */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], MainPage);
    return MainPage;
}());

//# sourceMappingURL=main.js.map

/***/ })

},[203]);
//# sourceMappingURL=main.js.map