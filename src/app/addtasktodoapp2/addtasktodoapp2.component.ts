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
			  setTimeout(function(){
				Swal.fire({
					position: 'center',
					type: 'success',
					title: 'Your task has been added!',
					showConfirmButton: false,
					timer: 1000
				});
			  },200);
			  
	  		this.itemval = "";
	  		refInputval.focus();
	  	}
	  	else{
			  Swal.fire({
				type: 'error',
				title: 'Oops...',
				text: 'Please Enter your task!',
			  })
	  	}
	  }

	  // Delete item Methods
	  deleteitem(index,refInputval){
	  	this.buttonToggle = false;
		this.itemval = "";
		Swal.fire({
		title: 'Are you sure?',
		text: "You want to delete this task!",
		type: 'warning',
		showCancelButton: true,
		confirmButtonColor: '#3085d6',
		cancelButtonColor: '#d33',
		confirmButtonText: 'Yes, delete it!'
		}).then((result) => {
			if (result.value) {
				// Your item Deleted
				this.tasks.splice(index,1);
				Swal.fire(
				'Deleted!',
				'Your task has been deleted.',
				'success'
				)
			}
		})
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
	  	Swal.fire({
			position: 'center',
			type: 'success',
			title: 'Your task has been update.',
			showConfirmButton: false,
			timer: 1000
		});
	  	this.itemval = "";
	  }

	  
	  // delete-Checked-Task all checked task checkbox
	  dltCheckedTaskArray = [];
	  deleteCheckedTask(isChecked,index_id){
			if(isChecked && !this.dltCheckedTaskArray.includes(index_id)){
				console.log("Element nither add before");
				this.dltCheckedTaskArray.push(index_id);
			}else if(this.dltCheckedTaskArray.includes(index_id)){
				this.dltCheckedTaskArray.splice(index_id,1);
			}
			console.log(this.dltCheckedTaskArray);
	  }


	//   delete_selected_task method
	delete_selected_task(index_id){
		if(this.dltCheckedTaskArray.includes(index_id) == this.tasks.includes(index_id)){
			Swal.fire({
				title: 'Are you sure?',
				text: "You want to delete all selected tasks!",
				type: 'warning',
				showCancelButton: true,
				confirmButtonColor: '#3085d6',
				cancelButtonColor: '#d33',
				confirmButtonText: 'Yes, delete all!'
				}).then((result) => {
					if (result.value) {
						// Your al item Deleted
						this.tasks.splice(index_id,this.dltCheckedTaskArray.length);
						Swal.fire(
						'Deleted!',
						'Your tasks have been deleted.',
						'success'
						)
					}
				});
		}
	}

	// clearAllTasks method
	clearAllTasks(){
		this.tasks = null;
	}
}
