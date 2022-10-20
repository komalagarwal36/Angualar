import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { ApiService } from "src/app/services/api.service";
import { DataStoreService } from "src/app/services/data-store.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-emplyee-nominee-update',
  templateUrl: './emplyee-nominee-update.component.html',
  styleUrls: ['./emplyee-nominee-update.component.css']
})
export class EmplyeeNomineeUpdateComponent implements OnInit {
  FamilyRelation: any = [];
  GetSchemeData: any = [];

  constructor(private formbuilder: FormBuilder, private apiService: ApiService, private http: HttpClient, private router: Router, private dataStore: DataStoreService) { }

  ngOnInit(): void {
    this.getFamilyRelation();
    this.getSchemeType();

  }
  //get Family Relation
  getFamilyRelation(): void {

    this.apiService.getFamilyRelation().subscribe({

      next: (res) => {
        // var BloodGroupJson = JSON.parse(res.data);
        // var statusJson = JSON.parse(res.status);
        if (res.status = 200) {
          this.FamilyRelation = res.data
        }
      },
      error: (err) => {
        let errorObj = {
          message: err.message,
          err: err,
          response: err
        }
        // alert("error while fatching data from get BloodGroup ");
        // console.log("error from get BloodGroup api is ", errorObj);
        // console.log("error from get BloodGroup api is ", err);
        // alert(err.error.message)
      }
    })
  }

  getSchemeType(): void {

    this.apiService.getSchemeType().subscribe({

      next: (res) => {
        // var BloodGroupJson = JSON.parse(res.data);
        // var statusJson = JSON.parse(res.status);
        if (res.status = 200) {
          this.GetSchemeData = res.data
        }
      },
      error: (err) => {
        let errorObj = {
          message: err.message,
          err: err,
          response: err
        }
        // alert("error while fatching data from get BloodGroup ");
        // console.log("error from get BloodGroup api is ", errorObj);
        // console.log("error from get BloodGroup api is ", err);
        // alert(err.error.message)
      }
    })
  }

}
