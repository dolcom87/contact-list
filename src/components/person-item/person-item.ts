import {Component, Input} from '@angular/core';

@Component({
  selector: 'person-item',
  templateUrl: 'person-item.html'
})
export class PersonItemComponent {

  @Input('person') person: any;

  constructor() {

  }

}
