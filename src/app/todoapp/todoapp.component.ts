import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-todoapp',
  templateUrl: './todoapp.component.html',
  styleUrls: ['./todoapp.component.less']
})


export class TodoappComponent{

	public myval:any;
	public newval:any;
	public updatebtn:any;
	currentIndex;
	items = ['javascrit', 'nodejs', 'angular'];



	AddItem(s){
		
		console.log(s);
		if(s){
			this.items.push(s);
		} else {
			Swal.fire('Oops...', 'Something went wrong!', 'error')
			// alert("Please enter");
		}
		this.myval = "";	
	}

	delete(index){
		this.items.splice(index,1);
	}
	update(index){
		this.currentIndex = index;
		this.updatebtn = true;
		this.newval = this.items[index];
	}
	
	updateval(){
		this.items[this.currentIndex] = this.myval;
	}
}
