import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Data} from './home.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  billInquiry:false;
  quickPay : true;
  searchTerm : any="";
  jsonData : any;
  
  constructor(public navCtrl: NavController, public data : Data) {
    
    
  }

  ionViewDidLoad(){
    this.setFilteredItems();
  }

  setFilteredItems() {
 
        this.jsonData = this.data.filterItems(this.searchTerm);
 
    }
  
    someEvent(event, type) {
        console.log(event)
        if (type == "quickPay") {
            this.billInquiry = false
            this.quickPay = true
        } else if (type == "billInquiry") {
            this.billInquiry = true
            this.quickPay = false
        }
    }

}
