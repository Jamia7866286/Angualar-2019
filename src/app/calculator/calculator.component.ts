import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.less']
})
export class CalculatorComponent {

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

  

}
