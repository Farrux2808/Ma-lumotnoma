import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform} from 'ionic-angular';

import { File } from '@ionic-native/file';
import { DocumentViewer, DocumentViewerOptions } from '@ionic-native/document-viewer';
import { FileTransfer } from '@ionic-native/file-transfer';
 

@IonicPage()
@Component({
  selector: 'page-mi',
  templateUrl: 'mi.html',
})
export class MiPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private document: DocumentViewer, private file: File, private transfer: FileTransfer, private platform: Platform) {
    
  }
    
  ionViewDidLoad() {
    console.log('ionViewDidLoad MiPage');
  }
  openLocalPdf() {
    const options: DocumentViewerOptions = {
      title: 'My PDF'
    }
    this.document.viewDocument('assets/mavzu1.pdf', 'application/pdf', options);
  }
 
  downloadAndOpenPdf() {
    let path = null;
 
    if (this.platform.is('ios')) {
      path = this.file.documentsDirectory;
    } else if (this.platform.is('android')) {
      path = this.file.dataDirectory;
    }
 
    const transfer = this.transfer.create();
    transfer.download('https://devdactic.com/html/5-simple-hacks-LBT.pdf', path + 'myfile.pdf').then(entry => {
      let url = entry.toURL();
      this.document.viewDocument(url, 'application/pdf', {});
    });
  }

}
