import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

import { InAppBrowser , InAppBrowserOptions } from '@ionic-native/in-app-browser';

@IonicPage()
@Component({
  selector: 'page-amaliy',
  templateUrl: 'amaliy.html',
})
export class AmaliyPage {

  options : InAppBrowserOptions = {
    location : 'no',//Or 'no' 
    hidden : 'yes', //Or  'yes'
    clearcache : 'yes',
    clearsessioncache : 'yes',
    zoom : 'yes',//Android only ,shows browser zoom controls 
    hardwareback : 'yes',
    mediaPlaybackRequiresUserAction : 'no',
    shouldPauseOnSuspend : 'no', //Android only 
    closebuttoncaption : 'Close', //iOS only
    disallowoverscroll : 'no', //iOS only 
    toolbar : 'yes', //iOS only 
    enableViewportScale : 'no', //iOS only 
    allowInlineMediaPlayback : 'no',//iOS only 
    presentationstyle : 'pagesheet',//iOS only 
    fullscreen : 'yes',//Windows only    
};
  mavzular: any;
  tr : any;
  constructor(public navCtrl: NavController, public navParams: NavParams ,private theInAppBrowser: InAppBrowser) {
    this.tr=[
     1,2,3,4,5,6,7,8,9
    ]
    this.mavzular=[
      '1',
      '1-amaliy mashg`ulot',
      '2-amaliy mashg`ulot',
      '3-amaliy mashg`ulot',
      '4-amaliy mashg`ulot',
      '5-amaliy mashg`ulot',
      '6-amaliy mashg`ulot',
      '7-amaliy mashg`ulot',
      '8-amaliy mashg`ulot',
      '9-amaliy mashg`ulot',
      '10-amaliy mashg`ulot',
      '11-amaliy mashg`ulot',
      '12-amaliy mashg`ulot',
      '13-amaliy mashg`ulot',
      '14-amaliy mashg`ulot',
      '15-amaliy mashg`ulot',
      '16-amaliy mashg`ulot',
      '17-amaliy mashg`ulot',
      '18-amaliy mashg`ulot'
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MaruzaPage');
  }
  public openWithCordovaBrowser(url : string){
    let target = "_self";
    this.theInAppBrowser.create(url,target,this.options);
  } 
  public openWithSystemBrowser(url : string){
    let target = "_system";
    this.theInAppBrowser.create(url,target,this.options);
}
public openWithInAppBrowser(url : string){
  let target = "_blank";
  this.theInAppBrowser.create(url,target,this.options);
}
}
