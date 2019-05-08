import { Component } from "@angular/core"
import {  FormGroup, FormBuilder, Validators } from "@angular/forms"
import { checkPasswords } from "./passValidator";


@Component({
   selector: "app-sign-up-form",
   templateUrl: "./sign-up-form.component.html",
   styleUrls: ["./sign-up-form.component.less"],
})
export class SignUpFormComponent {
   registerDetails: FormGroup
   choose: any = ''
   constructor(formbuilder: FormBuilder) {
      this.registerDetails = formbuilder.group({
         fname: ["", [Validators.required, Validators.minLength(10)]],
         lname: ["", [Validators.required, Validators.minLength(10)]],
         mail: ["", [Validators.required, Validators.email]],
         mob: ["", [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
         pswd: ["", [Validators.required, Validators.minLength(8), Validators.maxLength(15)]],
         cpswd: ["", [checkPasswords,Validators.required]],
         birthcountry: ["", [Validators.required, Validators.minLength(10)]],
         birthdate :  ["", [Validators.required, Validators.minLength(10)]],
         birthplace :  ["", [Validators.required, Validators.minLength(10)]]
      })
   }

   postData() {
      console.log(this.registerDetails.controls)
   }

   validateForm(){
      alert("Data submitted...");
   }
   // convenience getter for easy access to form fields
   get formfield() {
      return this.registerDetails.controls
   }
   //  get fname() {
   //     return this.registerDetails.get("fname")
   //  }
   //  get lname() {
   //     return this.registerDetails.get("lname")
   //  }
   //  get mail() {
   //     return this.registerDetails.get("mail")
   //  }
   //  get mob() {
   //     return this.registerDetails.get("mob")
   //  }
   //  get pswd() {
   //     return this.registerDetails.get("pswd")
   //  }
   //  get cpswd() {
   //     return this.registerDetails.get("cpswd")
   //  }


   setvalues(val: any){
      this.choose = val.target.value;
   }

   selectCountry: any
   country = [
      { country: 'India' },
      { country: 'USA'},
      { country: 'UK'},
      { country: 'Canada' },
      { country: 'Russia'},
      { country: 'China'},
      { country: 'Germany'},
      { country: 'Hong Kong'},
      { country: 'South Africa'},
      { country: 'Sri Lanka'}
    ];
}
