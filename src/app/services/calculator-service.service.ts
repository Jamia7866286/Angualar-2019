import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorServiceService {
  static readonly SOMA: string = '+';
  static readonly SUBTRACAO: string = '-';
  static readonly DIVISAO: string = '/';
  static readonly MULTIPLICACAO: string = '*';
  
  calcular(num1: number, num2: number, operacao: string):number{
    let result: number;

    switch(operacao){
      case(CalculatorServiceService.SOMA):
        result = num1 + num2;
      break;
      case(CalculatorServiceService.SUBTRACAO):
        result = num1 - num2;
      break;
      case(CalculatorServiceService.DIVISAO):
        result = num1 / num2;
      break;
      case(CalculatorServiceService.MULTIPLICACAO):
        result = num1 * num2;
      break;
      default:
        result = 0;
    }

    return result;
  }
  constructor() { }
}
