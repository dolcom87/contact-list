import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {

  person: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.person = this.navParams.get('data');
  }

  ionViewDidLoad() {}

}
