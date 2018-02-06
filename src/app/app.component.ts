import {Component, ViewChild} from '@angular/core';
import {Menu, Nav, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {HomePage} from '../pages/home/home';
import {SecondPage} from "../pages/second/second";

import {NativePageTransitions, NativeTransitionOptions} from '@ionic-native/native-page-transitions';
import {ThirdPage} from "../pages/third/third";
import {FourthPage} from "../pages/fourth/fourth";
import {FifthPage} from "../pages/fifth/fifth";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav)
  nav: Nav;

  @ViewChild(Menu)
  menu: Menu;

  rootPage: any = HomePage;
  pages: any[] = [
    {name: 'Home', page: HomePage},
    {name: 'Вторая', page: SecondPage},
    {name: 'Третья', page: ThirdPage},
    {name: 'Четвёртая', page: FourthPage},
    {name: 'Пятая', page: FifthPage}
  ];

  constructor(platform: Platform,
              statusBar: StatusBar,
              splashScreen: SplashScreen,
              private nativePageTransitions: NativePageTransitions) {

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  // Открытие страниц
  openPage(page: any) {
    this.menu.close();
    this.nativePageTransitions.fade(null);
    return this.nav.setRoot(page, null, {animate: true}).catch(err => console.error('error' + err));
  }

}

