import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http } from "@angular/http";

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

  user_id:any;

  FirstName:any;
  LastName:any;
  ThirdName:any;


  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http) {
    this.user_id = this.navParams.get("user_id");
    this.loadUserData(this.user_id);
  }

  loadUserData(id){

    this.http.get("http://test9.superresheba.by/project/Egor/GetUserInfo.php?user_id="+id)
      .map(res => res.json())
      .subscribe(
        Arr => {
          this.FirstName = Arr.first_name;
          this.LastName = Arr.last_name;
          this.ThirdName = Arr.third_name;
        }
      );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountPage');
  }

}
