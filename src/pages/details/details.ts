import {Component} from '@angular/core';
import {NavParams, ViewController} from 'ionic-angular';

@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {

  person: any = {};

  constructor(public viewCtrl: ViewController, public navParams: NavParams) {
    this.person = this.navParams.get('data');
  }

  close() {
    this.viewCtrl.dismiss();
  }
}
