import { Geolocation } from '@ionic-native/geolocation';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = 'FacultyPage';

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private geolocation: Geolocation) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      // var options = {
      //   timeout : 3000
      // };
      // this.geolocation.getCurrentPosition(options).then(resp => {
      //   console.log('lati' + resp.coords.latitude);
      //   console.log('long' + resp.coords.longitude);
      // });
    });
  }
}

