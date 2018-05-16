import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {LoginPage} from "../login/login";

import { Http } from "@angular/http";
import 'rxjs/add/operator/map';
import { Validators, FormBuilder, FormGroup } from "@angular/forms";
import { AlertController } from "ionic-angular";
import {PublicPage} from "../public/public";
import { LoadingController } from "ionic-angular";
import {OfferPage} from "../offer/offer";

/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {

  Offers:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, private formBuilder: FormBuilder,
              public alertCtrl: AlertController, public loadingCtrl: LoadingController) {

    this.LoadData();
  }

  LoadData(){

      //Окно загрузки
      let loading = this.loadingCtrl.create({
          content: 'Загрузка данных...'
      });

      loading.present();

    this.http.get("http://test9.superresheba.by/project/Egor/GetAllOffers.php")
        .map(res => res.json())
        .subscribe(
            Arr => {
              this.Offers = Arr;
              loading.dismiss();
              console.log(this.Offers);
            }
        );
  }

  openLoginPage(){
    this.navCtrl.push(LoginPage);
  }

  openFullOffer(id){
      this.navCtrl.push(OfferPage, { id: id });
  }


    Offer(id){
        let alert = this.alertCtrl.create({
            message: 'Пожалуйста, оформите ваш заказ',
            inputs:[
                {
                    name: 'name',
                    placeholder: 'Ваше имя'
                },
                {
                    name:'phone',
                    placeholder:'Номер телефона'
                }
            ],
            buttons:[
                {
                    text: 'Оформить',
                    handler: data => {
                        //Запрос к серверу на оформление
                        this.SendForm(data.name, data.phone, id);

                    }
                },
                {
                    text: 'Отмена'
                }
            ]
        });
        alert.present();
    }


    SendForm(name, phone, id){
        let res;
        this.http.get("http://test9.superresheba.by/project/Egor/Form.php?name="+name+"&phone="+phone+"&id="+id)
            .map(res=>res.json())
            .subscribe(
                Arr => {
                    res = Arr;
                    if(res=="OK"){
                        console.log("ok");
                    }else{
                        console.log("Ошибка, данные не отправлены");
                    }
                }
            );
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MainPage');
  }

}
