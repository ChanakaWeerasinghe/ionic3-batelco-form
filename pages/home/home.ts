import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Data} from './home.service';
import { FormBuilder, FormGroup, Validators ,FormControl} from '@angular/forms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  billInquiry:boolean;
  quickPay : boolean;
  searchTerm : any="";
  jsonData : any;
  registerForm: FormGroup;
  constructor(private formBuilder: FormBuilder,public navCtrl: NavController, public data : Data) {
  

  this.registerForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            billInquiry: ['', [Validators.required, Validators.email]],
            quickPay: ['', [Validators.required, Validators.minLength(6)]],
            telNumber: ['', Validators.required]
        }, {
            
        });
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
