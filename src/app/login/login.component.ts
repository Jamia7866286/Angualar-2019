import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core"
import { FormGroup, FormBuilder, Validators, Form } from "@angular/forms"
import Swal from "sweetalert2"

@Component({
   selector: "app-login",
   templateUrl: "./login.component.html",
   styleUrls: ["./login.component.less"],
})
export class LoginComponent implements OnInit {
   loginForm: FormGroup
   @Input() public parentData
   constructor(formbuilderlogin: FormBuilder) {
      this.loginForm = formbuilderlogin.group({
         mail: ["", [Validators.required, Validators.email]],
         pswd: ["", [Validators.required, Validators.minLength(4)]],
      })
   }

   get logincontent() {
      return this.loginForm.controls
   }
   @Output() public childEvent = new EventEmitter()

   ngOnInit() {}

   register() {
      this.parentData = false
      this.childEvent.emit(this.parentData)
   }

   LogInFormdata() {
      Swal.fire({
         position: "center",
         type: "success",
         title: "Thanks for login...",
         showConfirmButton: false,
         timer: 1300,
      })
   }
}
