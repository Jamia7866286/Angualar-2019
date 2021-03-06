import { Component } from "@angular/core"
import { FormGroup, FormBuilder, Validators } from "@angular/forms"
import { checkPasswords } from "./passValidator"
import Swal from "sweetalert2"

@Component({
   selector: "app-sign-up-form",
   templateUrl: "./sign-up-form.component.html",
   styleUrls: ["./sign-up-form.component.less"],
})
export class SignUpFormComponent {
   registerDetails: FormGroup
   check = false
   constructor(formbuilder: FormBuilder) {
      this.registerDetails = formbuilder.group({
         fname: ["", [Validators.required, Validators.minLength(5)]],
         lname: ["", [Validators.required, Validators.minLength(5)]],
         mail: ["", [Validators.required, Validators.email]],
         mob: ["", [Validators.required, Validators.minLength(5), Validators.maxLength(8)]],
         pswd: ["", [Validators.required, Validators.minLength(5), Validators.maxLength(8)]],
         cpswd: ["", [checkPasswords, Validators.required]],
         birthcountry: ["", [Validators.minLength(2)]],
         birthdate: [""],
         birthplace: [""],
      })
   }

   postData() {
      console.log(this.registerDetails.controls)
   }

   validateForm() {
      Swal.fire({
         position: "center",
         type: "success",
         title: "Your Data submitted...",
         showConfirmButton: false,
         timer: 1300,
      })
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

   choose: any = ""
   setvalues(val: any) {
      this.choose = val.target.value
   }
   states: string[] = [
      "India",
      "Indonesia",
      "USA",
      "UK",
      "Canada",
      "Russia",
      "China",
      "Germany",
      "Hong Kong",
      "South Africa",
      "Sri Lanka",
   ]

   public minDate: Date = new Date("01/01/2000")
   public maxDate: Date = new Date("01/01/2030")
   public value: Date = new Date("05/16/2017")

   //  Login form content
   login() {
      this.check = true
   }
}
