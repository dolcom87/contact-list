import {Component} from '@angular/core';
import {ItemSliding, NavController} from 'ionic-angular';

import {PersonsProvider} from "../../providers/persons/persons";

import {DetailsPage} from "../details/details";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  persons: Array<any> = [];

  constructor(public navCtrl: NavController, public personsProvider: PersonsProvider) {
    this.personsProvider.getPerson(10).subscribe(data => {
      this.persons = data;
    });
  }

  getDetails(person: any) {
    this.navCtrl.push(DetailsPage, {data: person});
  }

  clicked(person: any, item: ItemSliding) {
    item.close();
    console.log('clicked person: ' + person.login.username);
  }
}
