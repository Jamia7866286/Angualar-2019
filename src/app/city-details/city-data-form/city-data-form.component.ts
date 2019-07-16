import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-city-data-form',
  templateUrl: './city-data-form.component.html',
  styleUrls: ['./city-data-form.component.less']
})

export class CityDataFormComponent implements OnInit {
  @Output() childToParentData = new EventEmitter();
  constructor( private fb: FormBuilder) { }
  cityDataChildForm: FormGroup;
  ngOnInit() {
    this.cityDataChildForm = this.fb.group({
      taskTitle: ['', Validators.required],
      taskStartData: ['', Validators.required],
      taskEndData: ['', Validators.required],
    });
  }



  get formControls() { return this.cityDataChildForm.controls; }

  onsaveFrom() {
    localStorage.setItem('cityDataForm', JSON.stringify(this.cityDataChildForm.value));
    if (localStorage.getItem('cityDataForm')) {
      // console.log(JSON.parse(localStorage.getItem('cityDataForm')));
      this.childToParentData.emit(JSON.parse(localStorage.getItem('cityDataForm')));
    } else {console.log('key dose not exists'); }
  }
}
