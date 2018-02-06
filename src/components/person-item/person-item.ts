import {Component, Input} from '@angular/core';
import {ModalController} from "ionic-angular";
import {DetailsPage} from "../../pages/details/details";

@Component({
  selector: 'person-item',
  templateUrl: 'person-item.html'
})
export class PersonItemComponent {

  @Input('person') person: any;

  constructor(public modalCtrl: ModalController) {

  }

  getDetails(person: any) {
    this.modalCtrl.create(DetailsPage, {data: person}).present();
  }
}
