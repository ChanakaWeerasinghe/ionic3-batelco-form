import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { Data } from "./home.service";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from "@angular/forms";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  billInquiry: boolean=true;
  quickPay: boolean=false;
  searchTerm: any = "";
  jsonData: any;

  idType;
  cprNumber;
  crNumber;
  registerForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    public navCtrl: NavController,
    public data: Data
  ) {
   }
  ngOnInit() {
this.initializeForm();
  }
  ionViewDidLoad() {
    this.setFilteredItems();
  }

  setFilteredItems() {
    this.jsonData = this.data.filterItems(this.searchTerm);
  }

  someEvent(event, type) {
    console.log(type);
    if (type == "quickPay") {
      this.billInquiry = false;
      this.quickPay = true;
    } else if (type == "billInquiry") {
      this.billInquiry = true;
     this.quickPay = false;
    }
  }

  initializeForm() {
    console.log("quickPay",this.quickPay);
     console.log("billInquiry",this.billInquiry)

    if (this.quickPay) {
      this.registerForm = this.formBuilder.group(
        {
          firstName: ["", Validators.required],
          billInquiry: ["", [Validators.required, Validators.email]],
          quickPay: ["", [Validators.required ]],
          telNumber: ["", Validators.required]
        },
        {}
      );
    } else {
      this.registerForm = this.formBuilder.group(
        {
          firstName: ["", Validators.required],
          billInquiry: ["", [Validators.required, Validators.email]],
          quickPay: ["", [Validators.required, Validators.minLength(6)]],
          telNumber: ["", Validators.required]
        },
        {}
      );
    }
  }

  cprEvent(event, type) {
    // console.log(event);
    if (type == "cr") {
      (this.idType = "cr"), (this.cprNumber = false);
      this.crNumber = true;
    } else if (type == "cpr") {
      (this.idType = "cpr"), (this.cprNumber = true);
      this.crNumber = false;
    }
  }
}
