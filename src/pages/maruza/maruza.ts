import { Component  } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { HomePage } from '../home/home';



@IonicPage()
@Component({
  selector: 'page-maruza',
  templateUrl: 'maruza.html',
})
export class MaruzaPage {
  mavzular: any;
  tr : any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.tr=[
      1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18
    ]
    this.mavzular=[
      '1-mavzu',
      '2-mavzu',
      '3-mavzu',
      '4-mavzu',
      '5-mavzu',
      '6-mavzu',
      '7-mavzu',
      '8-mavzu',
      '9-mavzu',
      '10-mavzu',
      '11-mavzu',
      '12-mavzu',
      '13-mavzu',
      '14-mavzu',
      '15-mavzu',
      '16-mavzu',
      '17-mavzu',
      '18-mavzu'
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MaruzaPage');
  }


}
