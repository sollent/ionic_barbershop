import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Http } from "@angular/http";
import 'rxjs/add/operator/map';
import { Validators, FormBuilder, FormGroup } from "@angular/forms";
import { AlertController } from "ionic-angular";
import {PublicPage} from "../public/public";
import { LoadingController } from "ionic-angular";


/**
 * Generated class for the OfferPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-offer',
  templateUrl: 'offer.html',
})
export class OfferPage {

  id: any;

  Avatar:any;
  FirstName:any;
  LastName:any;
  ThirdName:any;
  Login:any;
  About:any;
  Experience:any;
  Adress:any;


  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, private formBuilder: FormBuilder,
              public alertCtrl: AlertController, public loadingCtrl: LoadingController) {
    this.id = this.navParams.get("id");

    this.GetFullData(this.id);


  }

  GetFullData(id){

      let loading = this.loadingCtrl.create({
          content: 'Загрузка данных...'
      });

      loading.present();

      this.http.get("http://test9.superresheba.by/project/Egor_Sasha/GetFullOffer.php?id="+id)
          .map(res=> res.json())
          .subscribe(
              Arr => {
                  this.Avatar = Arr.avatar;
                  this.FirstName = Arr.first_name;
                  this.LastName = Arr.last_name;
                  this.ThirdName = Arr.third_name;
                  this.Login = Arr.login;
                  this.About = Arr.about;
                  this.Experience = Arr.experience;
                  this.Adress = Arr.adress

                  loading.dismiss();

              }
          );
  }

  Offer(){
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
                      //Запрос к серверу на оформления
                      this.SendForm(data.name, data.phone, this.id);
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
      this.http.get("http://test9.superresheba.by/project/Egor_Sasha/Form.php?name="+name+"&phone="+phone+"&id="+id)
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
    console.log('ionViewDidLoad OfferPage');
  }

}
