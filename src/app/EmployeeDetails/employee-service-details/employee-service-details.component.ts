import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { DataStoreService } from 'src/app/services/data-store.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employee-service-details',
  templateUrl: './employee-service-details.component.html',
  styleUrls: ['./employee-service-details.component.css']
})
export class EmployeeServiceDetailsComponent implements OnInit {
  EmpService: any;
  formGroup: any;

  constructor(private formbuilder: FormBuilder, private apiService: ApiService, private http: HttpClient,  private dataStore: DataStoreService,private router:Router) { }

  ngOnInit(): void {
    this.EmpService = this.formbuilder.group({
      State: ['', Validators.required],
      GEN_ID: ['-1', [Validators.required]],
      height: ['', [Validators.required]],
      date: ['', Validators.required],
      Service_Quota: ['-1', Validators.required],
      M_STATUS_ID: ['-1', Validators.required],
      Identification: ['', Validators.required],
      service_Category:['-1', Validators.required],
      CATEGORY_ID:['-1', Validators.required],
      employeeType:['-1',Validators.required]
    });
   
 
    this.getDisabilityType();
    this.getServiceCategory();
    // this.getPayeeType();
    this.getServiceSubCategory();
    this.getServiceQuota();
    this.getDesignation();
    this.getDepartment();
    this.getCasteCategory();
    this.apiService.getEmployeeType().subscribe(res => {
      if (res.data.status = 200) {
        this.EmployeeTypedata = res.data
      }
    })
  }
  EmployeeTypedata: any = [];
 
  DisabilityTypeData: any = [];
  getServiceCategoryeData:any=[];
  getPayeeTypeData:any=[];
  getServiceSubCategoryData:any=[];
  getServiceQuotaData:any=[];
  getDesignationData:any=[];
  getDepartmentData:any=[];
  getCasteCategoryData:any=[];
  SubServiceCategorydata:any=[];
  getSubServiceCategory(event: any) {
    // alert(event.target.value)
    let requestedData = {
      serviceCategoryId: event.target.value
    }
    this.apiService.getSubServiceCategory(requestedData).subscribe(res => {
      if (res.data.status = 200) {
        this.SubServiceCategorydata = res.data
      }
      console.log(this.SubServiceCategorydata)
    })

  }



  //get DisabilityType
  getDisabilityType(): void {

    this.apiService.getDisabilityType().subscribe({

      next: (res) => {
        // var DisabilityTypeJson = JSON.parse(res.data);
        // var statusJson = JSON.parse(res.status);
        if (res.status = 200) {
          this.DisabilityTypeData = res.data
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





   //get getServiceCategorye
   getServiceCategory(): void {

    this.apiService.getServiceCategoryg().subscribe({

      next: (res) => {
        // var getServiceCategoryJson = JSON.parse(res.data);
        // var statusJson = JSON.parse(res.status);
        if (res.status = 200) {
          this.getServiceCategoryeData = res.data
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

  
    //get getServiceSubCategory
    getServiceSubCategory(): void {

      this.apiService.getServiceSubCategory().subscribe({
  
        next: (res) => {
          // var getServiceSubCategoryJson = JSON.parse(res.data);
          // var statusJson = JSON.parse(res.status);
          if (res.status = 200) {
            this.getServiceSubCategoryData = res.data
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

    
    


    //get Service Quota
    getServiceQuota():void{
      this.apiService.getServiceQuota().subscribe({
  
        next: (res) => {
      
          if (res.status = 200) {
            this.getServiceQuotaData = res.data
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




     //get Service Quota
     getDesignation():void{
      this.apiService.getDesignation().subscribe({
  
        next: (res) => {
          // var getDesignationJson = JSON.parse(res.data);
          // var statusJson = JSON.parse(res.status);
          if (res.status = 200) {
            this.getDesignationData = res.data
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







     //getDepartment
     getDepartment():void{
      this.apiService.getDepartment().subscribe({
  
        next: (res) => {
  
          if (res.status = 200) {
            this.getDepartmentData = res.data
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
       
        }
      })
    }
    JanaadhaarData: any[] = [];

    GetJanaadhaarData(janaadhaar :any):void{
      let requestedData: any = { "janaadhaar": janaadhaar }
      this.apiService.GetJanaadhaarData(requestedData).subscribe({

        next: (res) => {
         
          let data = Object.values(res);
          for (let i = 0; i < data[1].length; i++) {
            this.JanaadhaarData.push(data);
          }
          console.log(this.JanaadhaarData[0][0].status);
      
        },
        error: (err) => {
          let errorObj = {
            message: err.message,
            err: err,
            response: err
          }
      
          alert(err.error.message)
        }
      })
    }
    ComponetLoad(cname:any):void{
      this.router.navigate(['/'+cname])
     }
}
