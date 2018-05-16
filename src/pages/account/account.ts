import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from "@angular/http";
import { Validators, FormBuilder, FormGroup } from "@angular/forms";
import { AlertController } from "ionic-angular";
import {PublicPage} from "../public/public";
import { LoadingController } from "ionic-angular";


/**
 * Generated class for the AccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage {

  private form: FormGroup;
  user_id:any;

  FirstName:any;
  LastName:any;
  ThirdName:any;
  Login: any;
  Avatar: any;

  avatar:any;
  cond:any;

  OfferInfo:any;
  publicCond:boolean = false;

  OrderData:any;
  OrderInfo:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, private formBuilder: FormBuilder,
              public alertCtrl: AlertController, public loadingCtrl: LoadingController) {
    this.user_id = this.navParams.get("user_id");
    this.loadUserData(this.user_id);
    this.loadOrders(this.user_id);

    this.form = this.formBuilder.group({
        avatar: ['']
    });

  }

  loadUserData(id){

      //Окно загрузки
          let loading = this.loadingCtrl.create({
              content: 'Загрузка данных...'
          });

          loading.present();


    this.http.get("http://test9.superresheba.by/project/Egor/GetUserInfo.php?user_id="+id)
      .map(res => res.json())
      .subscribe(
        Arr => {
          this.FirstName = Arr.first_name;
          this.LastName = Arr.last_name;
          this.ThirdName = Arr.third_name;
          this.Login = Arr.login;
          this.OfferInfo = Arr.about;
          this.Avatar = Arr.avatar;

          setTimeout(()=>{
              loading.dismiss();
          }, 1000);

          if(Arr.avatar){
            this.cond = true;
          } else {
            this.cond = false;
          }
          console.log(this.cond);
          if(Arr.about){
              this.publicCond = true;
          }
        }
      );
  }

  LoadAvatar(){
    this.avatar = this.form.value.avatar;
    let res;
    this.http.get("http://test9.superresheba.by/project/Egor/LoadAvatar.php?avatar="+this.avatar+"&id="+this.user_id)
        .map(res => res.json())
        .subscribe(
            Arr => {
              res = Arr;
              if(res=="OK"){
                this.ShowAlert();
              }
            }
        );

  }

  loadOrders(id){
      this.http.get("http://test9.superresheba.by/project/Egor/GetOrders.php?id="+id)
          .map(res => res.json())
          .subscribe(
              Arr => {
                  this.OrderData = Arr;

                  if(Arr.bool=="false"){
                      this.OrderInfo = Arr.info;
                      this.OrderData = false;
                  }
              }
          );
  }

  update(){
      this.loadUserData(this.user_id);
      this.loadOrders(this.user_id);
  }

  ShowPhone(phone){
      let alert = this.alertCtrl.create({
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
  }

  openPublicPage(id){
    this.navCtrl.push(PublicPage, { id: id });
  }

  ShowAlert(){
    let confirm = this.alertCtrl.create({
        message: 'Вы успешно загрузили аватарку',
        buttons: [
            {
              text: 'OK',
                handler: () => {
                  //Будем перезагружать страничку
                    this.loadUserData(this.user_id);
                }
            }
        ]
    });
    confirm.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountPage');
  }

}
