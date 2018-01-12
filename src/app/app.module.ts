import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {PersonsProvider} from '../providers/persons/persons';
import {DetailsPage} from "../pages/details/details";
import {HttpModule} from "@angular/http";
import {PersonItemComponent} from "../components/person-item/person-item";
import {FilterPipe} from "../pipes/filter/filter";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DetailsPage,
    PersonItemComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PersonsProvider
  ]
})
export class AppModule {}
