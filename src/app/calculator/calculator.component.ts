import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.less']
})
export class CalculatorComponent  {

public num1;
public num2;
public result;
public operation = 'operation';
add(e){
	this.num1 = parseInt( this.num1 ,10);
	this.num2 = parseInt( this.num2 ,10);
	console.log(typeof(this.num1));
 this.result = this.num1+ this.num2;
 this.operation = 'Addition';
}

sub(e){
	this.num1 = parseInt( this.num1 ,10);
	this.num2 = parseInt( this.num2 ,10);
 this.result = this.num1 -  this.num2;
 this.operation = 'Substraction';
}

mul(e){
	this.num1 = parseInt( this.num1 ,10);
	this.num2 = parseInt( this.num2 ,10);
 this.result = this.num1 *  this.num2;
 this.operation = 'Multiplication';
}

div(e){
	this.num1 = parseInt( this.num1 ,10);
	this.num2 = parseInt( this.num2 ,10);
 this.result = this.num1 /  this.num2;
 this.operation = 'Divisions';
}
  
// resultcondition = false;
// infix_string = [];
// resultcondition_zero = false
// number_calculation:any = [2]
// plus_result;
// number_1 = 0
// number_2
// number_plus
// number1_event(val:any){
	// this.resultcondition_zero = true;
	// this.infix_string.push(val)
	// console.log(this.infix_string);
	// this.number_calculation[0] = val
  //   console.log(this.number_calculation[0]);
// }
// flag = 0

// number_event(val:any){
// 	if(this.flag === 0){
// 			this.resultcondition_zero = true;
// 			this.infix_string.push(val)
// 			console.log(this.infix_string);
// 			this.number_calculation[0] = val
// 			console.log(this.number_calculation[0]);
// 			this.flag = 1;
// 			console.log(this.flag);
			
// 	}
// 	else if(this.flag === 1){
// 		this.infix_string.push(val)
// 		this.number_calculation[2] = val;
// 		this.resultcondition = true;
// 		console.log(this.number_calculation[2]);
// 		this.flag = 0;
// 		console.log(this.flag);
// 	}
// 	else if(this.number_calculation[1] === '+'){
// 		this.plus_result = this.number_calculation[0] + this.number_calculation[2];
// 	}
// 	else if(this.number_calculation[1] === '-'){
// 		this.plus_result = this.number_calculation[0] - this.number_calculation[2];
// 	}
// 	else if(this.number_calculation[1] === '*'){
// 		this.plus_result = this.number_calculation[0] * this.number_calculation[2];
// 	}
// 	else if(this.number_calculation[1] === '/'){
// 		this.plus_result = this.number_calculation[0] / this.number_calculation[2];
// 	}
// 	this.number_calculation[0] = this.plus_result
// }
// number_oprator_event(oprator){
// 	this.infix_string.push(oprator)
//   this.number_calculation[1] = oprator;
//   console.log(this.number_calculation[1]);
// }

// Clear All data
// clear_String(){
// 	this.plus_result = 0;
// 	this.infix_string = [];
// }

	number_array:any[] = [];
	number_calculation:any[] = [2]

	number_event(val:any){
		this.number_array.push(val);
		console.log(this.number_array);
		
		if(this.number_calculation[1] === '+'){
			this.number_calculation[0] = this.number_array.join("");
			console.log(this.number_calculation[0]);
			let a = this.number_calculation[0]
			console.log(typeof(a));
			
			console.log( 2 + (+a));
		}
	}

	oprator_event(oprator){
		this.number_calculation[1] = oprator;
	}
}

