import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';



@Component({
  selector: 'app-efm',
  templateUrl: './efm.component.html',
  styleUrls: ['./efm.component.css']
})
export class EfmComponent implements OnInit {
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isEditable = false;
  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit(): void {
  }

  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;

}



