import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform} from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-mi',
  templateUrl: 'mi.html',
})
export class MiPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }
    
  ionViewDidLoad() {
    console.log('ionViewDidLoad MiPage');
  }
 
 
  

}
