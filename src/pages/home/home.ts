import {Component} from '@angular/core';
import {ItemSliding, ModalController} from 'ionic-angular';

import {Person, PersonsProvider} from "../../providers/persons/persons";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  persons: Observable<[Person]>;

  constructor(public modalCtrl: ModalController,
              public personsProvider: PersonsProvider) {

    this.persons = this.personsProvider.getPersons(10);
  }

  clicked(person: any, item: ItemSliding) {
    item.close();
    console.log('clicked person: ' + person.login.username);
  }
}
