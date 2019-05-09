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
   constructor(formbuilder: FormBuilder) {
      this.registerDetails = formbuilder.group({
         fname: ["", [Validators.required, Validators.minLength(5)]],
         lname: ["", [Validators.required, Validators.minLength(5)]],
         mail: ["", [Validators.required, Validators.email]],
         mob: ["", [Validators.required, Validators.minLength(5), Validators.maxLength(8)]],
         pswd: ["", [Validators.required, Validators.minLength(5), Validators.maxLength(8)]],
         cpswd: ["", [checkPasswords,Validators.required]],
         birthcountry: ["", [Validators.required, Validators.minLength(5)]],
         birthdate :  ["", [Validators.required]],
         birthplace :  ["", [Validators.required, Validators.minLength(5)]]
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

   choose: any = ''
   setvalues(val: any){
      this.choose = val.target.value;
   }
    states: string[] = [
      'India',
      'Indonesia',
      'USA',
      'UK',
      'Canada',
      'Russia',
      'China',
      'Germany',
      'Hong Kong',
      'South Africa',
      'Sri Lanka'
    ];


    public minDate: Date = new Date ("05/07/2017");
    public maxDate: Date = new Date ("05/27/2017");
    public value: Date = new Date ("05/16/2017");
   }
