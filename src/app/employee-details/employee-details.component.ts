import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { DataStoreService } from 'src/app/services/data-store.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  EmpPersonalDetail: any;

  constructor(private formbuilder: FormBuilder, private apiService: ApiService, private http: HttpClient, private router: Router, private dataStore: DataStoreService) { }
 
//  validation
 
  ngOnInit(): void {
    this.EmpPersonalDetail = this.formbuilder.group({
      name: ['', Validators.required],
      
      height: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      gender: ['-1', Validators.required],
      matrial: ['-1',Validators.required],

      date: ['', Validators.required],
      word: ['', Validators.required],
      Identification: ['', Validators.required],
      Blood_Group: ['-1', Validators.required],
    });


    this.getMaritalStatus();
    this.getGender();
    this.getBloodGroup();
    this.getCasteCategoryData();
    



  }

  // difine varible 
  MaritalStatusdata: any = [];
  GenderData: any = [];
  BloodGroupdata: any = [];
  getCasteCategoryData:any=[];
 
 
 



  submitted = false;
  onSubmit() {
    this.submitted = true;
  

  }

   //////////////////get Matrital Status
   getMaritalStatus(): void {

    this.apiService.getMaritalStatus().subscribe({

      next: (res) => {
 
        if (res.status = 200) {
          this.MaritalStatusdata = res.data
        }
      },

      error: (err) => {
        let errorObj = {
          message: err.message,
          err: err,
          response: err
        }
     
      }
    })
  }

    ///////////////////get Gender
    getGender(): void {

      this.apiService.getGender().subscribe({
  
        next: (res) => {
          // var genderJson = JSON.parse(res.data);
          // var statusJson = JSON.parse(res.status);
          if (res.status = 200) {
           
            this.GenderData = res.data
          }
        },
        error: (err) => {
          let errorObj = {
            message: err.message,
            err: err,
            response: err
          }
        
        }
      })
    }

     ////////////////get Gender
     getBloodGroup(): void {
      this.apiService.getBloodGroup().subscribe({
        next: (res) => {
          // var genderJson = JSON.parse(res.data);
          // var statusJson = JSON.parse(res.status);
          if (res.status = 200) {
           
            this.BloodGroupdata = res.data
          }
        },
        error: (err) => {
          let errorObj = {
            message: err.message,
            err: err,
            response: err
          }
        
        }
      })
    }


 
  //getCasteCategory
  getCasteCategory():void{
    this.apiService.getCasteCategory().subscribe({
      next: (res) => {
        // var getCasteCategoryJson = JSON.parse(res.data);
        // var statusJson = JSON.parse(res.status);
        if (res.status = 200) {
          this.getCasteCategoryData = res.data
        }
      },
      error: (err) => {
        let errorObj = {
          message: err.message,
          err: err,
          response: err
        }
        // alert("error while fatching data from get Disability Type ");
        // console.log("error from get Disability Type api is ", errorObj);
        // console.log("error from get Disability Type api is ", err);

        // alert(err.error.message)
      }
    })
  }








  addEmpDet() {
    // console.log(this.empPerDetForm.value);
  }

  // sweet alert massage

  simpleAlert() {
    Swal.fire('Hello world!');
  }

  alertWithSuccess() {
    Swal.fire('Thank you...', 'You submitted succesfully!', 'success')
  }

  confirmBox() {
    Swal.fire({
      title: 'Are you sure want to remove?',
      text: 'You will not be able to recover this file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        Swal.fire(
          'Deleted!',
          'Your imaginary file has been deleted.',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
  }
  // only aplphbet user for validation

  letterOnly(event: { which: any; keyCode: any; }): Boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if ((charCode < 65 || charCode > 90) && (charCode < 97 || charCode > 122)) {
      return false;
    }
    return true;
  }

  // only for number validation 
  numberOnly(event: { which: any; keyCode: any; }): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }

  

}
