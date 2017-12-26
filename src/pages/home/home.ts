import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {PersonsProvider} from "../../providers/persons/persons";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public personsProvider: PersonsProvider) {

  }

}
