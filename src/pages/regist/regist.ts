import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from "@angular/forms";
import { AlertController } from "ionic-angular";
import { Http } from "@angular/http";
import {MainPage} from "../main/main";
/**
 * Generated class for the RegistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-regist',
  templateUrl: 'regist.html',
})
export class RegistPage {

  private form: FormGroup;

  first_name:any;
  last_name:any;
  third_name:any;
  experience:any;
  login:any;
  password:any;

  post:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder, public http: Http,
              public alertCtrl: AlertController) {
    this.form = this.formBuilder.group({
      FirstName: [''],
      LastName: [''],
      ThirdName: [''],
      Experience: [''],
      login: [''],
      password: [''],
    });
  }


  RegistForm(){
    this.first_name = this.form.value.FirstName;
    this.last_name = this.form.value.LastName;
    this.third_name = this.form.value.ThirdName;
    this.experience = this.form.value.Experience;
    this.login = this.form.value.login;
    this.password = this.form.value.password;

    let valid = [this.first_name, this.last_name, this.third_name, this.experience, this.login, this.password];

    this.post = {
      first_name: this.first_name,
      last_name: this.last_name,
      third_name: this.third_name,
      experience: this.experience,
      login: this.login,
      password: this.password
    };

    let res;
    this.http.post("http://test9.superresheba.by/project/Egor/RegistUser.php", this.post)
      .map(res => res.json())
      .subscribe(
        Arr => {
          res = Arr;
          if(res == "OK"){
            this.ShowAlert();
          }
        }
      );

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

  }

  ShowAlert(){
    let confirm = this.alertCtrl.create({
      message: 'Вы успешно зарегестрированны',
      buttons: [
        {
          text: 'ОК',
          handler: () => {
            this.openMainPage();
          }
        }
      ]
    });
    confirm.present();
  }

  openMainPage(){
    this.navCtrl.setRoot(MainPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistPage');
  }

}
