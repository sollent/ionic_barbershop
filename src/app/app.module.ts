import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from "@angular/http";


import { LoginPage } from "../pages/login/login";
import { RegistPage } from "../pages/regist/regist";
import { MainPage } from "../pages/main/main";
import { AccountPage } from "../pages/account/account";
import { PublicPage } from "../pages/public/public";
import { OfferPage } from "../pages/offer/offer";
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    RegistPage,
    MainPage,
    AccountPage,
      PublicPage,
      OfferPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    RegistPage,
    MainPage,
    AccountPage,
      PublicPage,
      OfferPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
