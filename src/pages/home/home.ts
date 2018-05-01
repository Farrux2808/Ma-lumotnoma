import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MaruzaPage } from '../maruza/maruza';
import {MiPage} from '../mi/mi';
import {AmaliyPage} from '../amaliy/amaliy';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  goToMaruza(){
    this.navCtrl.push(MaruzaPage);
  }
  goToMi(){
    this.navCtrl.push(MiPage);
  }
  goToAmaliy(){
    this.navCtrl.push(AmaliyPage);
  }
}
