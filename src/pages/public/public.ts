import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from "@angular/http";
import { Validators, FormBuilder, FormGroup } from "@angular/forms";
import { AlertController } from "ionic-angular";

/**
 * Generated class for the PublicPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-public',
  templateUrl: 'public.html',
})
export class PublicPage {

  private form: FormGroup;

  user_id: any;

  about:any;
  adress:any;
  time:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, private formBuilder: FormBuilder,
              public alertCtrl: AlertController) {

    this.user_id = this.navParams.get("id");


    this.form = this.formBuilder.group({
        about: [''],
        adress: [''],
        time: ['']
    });
  }

  LoadOffer(){
    this.about = this.form.value.about;
    this.adress = this.form.value.adress;
    this.time = this.form.value.time;

    let res;
    this.http.get("http://test9.superresheba.by/project/Egor/LoadOffer.php?about="+this.about+"&adress="+this.adress+"&time="+this.time+"&id="+this.user_id)
        .map(res => res.json())
        .subscribe(
            Arr => {
              res = Arr;
              if(res=="OK"){
                this.ShowAlert();
              } else{
                console.log("Ошибка!")
              }
            }
        );
  }

  ShowAlert(){
    let confirm = this.alertCtrl.create({
        message: 'Ваша услуга успешно опубликована',
        buttons: [
            {
              text: 'OK'
            }
        ]
    });
    confirm.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PublicPage');
  }

}
