import { Component, OnInit} from '@angular/core';
@Component({
  selector: 'app-todoapp',
  templateUrl: './todoapp.component.html',
  styleUrls: ['./todoapp.component.less']
})


export class TodoappComponent{

	myval:string;
	updatebtn = false;
	currentIndex;
	items = [];



	AddItem(s){
		
		console.log(this.items.length);
		if(s){
			this.items.push(s);
		} else {
			
			alert("Please enter");
		}
		this.myval = "";	
	}

	delete(index){
		this.items.splice(index,1);
		this.myval = "";
		this.updatebtn = false;

	}
	update(index,update){
		this.currentIndex = index;
		update.focus();
		this.updatebtn = true;
		this.myval = this.items[index];
	}
	
	updateval(){
		this.updatebtn = false;
		if(this.myval !== ""){
			this.items[this.currentIndex] = this.myval;
			this.myval = "";
		}
		else{
			alert("Select Your value.");
		}
		
		// if(this.myval && this.newval.trim() !== this.myval.trim()){
		// else if(this.newval.trim() === this.myval.trim()){
	}


}
