import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import { facultylocation } from '../../model/facultylocation';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';

/**
 * Generated class for the DetlocationmodelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detlocationmodel',
  templateUrl: 'detlocationmodel.html',
})
export class DetlocationmodelPage {
  locationset=false;
  baselocation:facultylocation=new facultylocation(29.866866,31.315270);

 locationref:FirebaseListObservable<facultylocation[]>;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private viewctrl:ViewController ,private database:AngularFireDatabase) {
      this.locationref=this.database.list('location');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetlocationmodelPage');
  }
  placeMarker($event){
    this.baselocation.latitude=$event.coords.lat;
    this.baselocation.longitude=$event.coords.lng;
    this.locationset=true;
    this.database.list('location').remove();
    this.locationref.push(this.baselocation);
  }
  
  setlocation(){
    this.viewctrl.dismiss(this.baselocation); 

  }
  cancel(){
   this.viewctrl.dismiss(); 
  }

}
