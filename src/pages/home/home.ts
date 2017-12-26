import {Component} from '@angular/core';
import {ItemSliding, NavController} from 'ionic-angular';

import {Person, PersonsProvider} from "../../providers/persons/persons";

import {DetailsPage} from "../details/details";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  persons: Observable<[Person]>;

  constructor(public navCtrl: NavController, public personsProvider: PersonsProvider) {
    this.persons = this.personsProvider.getPersons(10);
  }

  getDetails(person: any) {
    this.navCtrl.push(DetailsPage, {data: person});
  }

  clicked(person: any, item: ItemSliding) {
    item.close();
    console.log('clicked person: ' + person.login.username);
  }
}
