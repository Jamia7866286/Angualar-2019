

import {  AbstractControl } from "@angular/forms";
export function checkPasswords(control: AbstractControl) {
    if(control && (control.value !==null || control.value !== undefined)){
        let pass = control.root.get('pswd');
        if(pass){
            let confirmPass = control.value;
            const password = pass.value;
            if(password !==confirmPass){
                return{
                    isError:true
                }
            }
        } 
    }
    return null
}
