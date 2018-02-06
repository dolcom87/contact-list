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
import {NativePageTransitions} from "@ionic-native/native-page-transitions";
import {ComponentsModule} from "../components/components.module";
import {SecondPageModule} from "../pages/second/second.module";
import {PipesModule} from "../pipes/pipes.module";
import {ThirdPageModule} from "../pages/third/third.module";
import {FourthPageModule} from "../pages/fourth/fourth.module";
import {FifthPageModule} from "../pages/fifth/fifth.module";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DetailsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    ComponentsModule,
    SecondPageModule,
    ThirdPageModule,
    FourthPageModule,
    FifthPageModule,
    PipesModule
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
    PersonsProvider,
    NativePageTransitions
  ]
})
export class AppModule {
}
