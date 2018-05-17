import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from "@angular/forms";
import { Http } from "@angular/http";
import { RegistPage } from "../regist/regist";
import {AccountPage} from "../account/account";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  private form: FormGroup;
  login:any;
  password:any;

  UserId:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder, public http: Http){
    this.form = this.formBuilder.group({
      login: [''],
      password: [''],
    });

  }

  LoginForm(){
    this.login = this.form.value.login;
    this.password = this.form.value.password;

    let error;
    this.http.get("http://test9.superresheba.by/project/Egor_Sasha/Login.php?login="+this.login+"&password="+this.password)
      .map(res => res.json())
      .subscribe(
        Arr => {
          this.UserId = Arr.id;
          error = Arr;
          if(error=="ERROR"){
            console.log("Ошибка получения данных!");
          }else{
            console.log(this.UserId);
            this.openAccount(this.UserId);
          }
        }
      );

  }

  openAccount(id){
    this.navCtrl.push(AccountPage, { user_id: id });
  }

  openRegistPage(){
    this.navCtrl.push(RegistPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
