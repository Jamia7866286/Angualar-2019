import { Component } from '@angular/core';
import Swal from 'sweetalert2';
 
@Component({
  selector: 'app-addtasktodoapp2',
  templateUrl: './addtasktodoapp2.component.html',
  styleUrls: ['./addtasktodoapp2.component.less']
})
export class Addtasktodoapp2Component {

	  itemval;
	  buttonToggle :boolean = false;
	  tasks = [];
	  currentIndex;

	  // Add item Methods
	  additem(item,refInputval){
	  	if(item){
			  this.tasks.push(item);
	  		// alert("Thanks, Your task Successfully Add.");
	  		this.itemval = "";
	  		refInputval.focus();
	  	}
	  	else{
			  // alert("Please Enter Value.");
	  	}
	  }

	  // Delete item Methods
	  deleteitem(index,refInputval){
	  	this.buttonToggle = false;
  		this.tasks.splice(index,1);
  		this.itemval = "";
  		alert("Thanks, Your task Successfully delete.");
	  }


	  // Edit item Methods
	  editVal(index,refInputval){
	  	this.currentIndex = index;
	  	this.buttonToggle = true;
	  	refInputval.focus();
	  	this.itemval = this.tasks[index];
	  }

	  // Update task when click edit icon Methods
	  updateValue(item,index){
	  	this.buttonToggle = false;
	  	this.tasks[this.currentIndex] = this.itemval;
	  	alert("Thanks, Your task Successfully update.");
	  	this.itemval = "";
	  }

}
