import {NgModule} from '@angular/core';
import {PersonItemComponent} from './person-item/person-item';
import {IonicPageModule} from "ionic-angular";

@NgModule({
	declarations: [PersonItemComponent],
	imports: [
    IonicPageModule.forChild(PersonItemComponent)
  ],
	exports: [PersonItemComponent]
})

export class ComponentsModule {}
