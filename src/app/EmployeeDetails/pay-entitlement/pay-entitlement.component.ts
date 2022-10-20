import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { DataStoreService } from 'src/app/services/data-store.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-pay-entitlement',
  templateUrl: './pay-entitlement.component.html',
  styleUrls: ['./pay-entitlement.component.css']
})
export class PayEntitlementComponent implements OnInit {
  PayEntitlement!: FormGroup;
  ServiceCategorydata: any;
  getServiceSubCategoryData:any=[];
 

  constructor(private formbuilder: FormBuilder, private apiService: ApiService, private http: HttpClient, private router: Router, private dataStore: DataStoreService) { }

  ngOnInit(): void {
    this.PayEntitlement = this.formbuilder.group({
      ServiceCategory: ['-1',Validators.required]
    })

    


   // getServiceCategoryg
   this.apiService.getServiceCategoryg().subscribe(res => {
    if (res.data.status = 200) {
      this.ServiceCategorydata = res.data
    }
    console.log(this.ServiceCategorydata)
  })



  

  }


  
    //get getServiceSubCategory
    getServiceSubCategory(): void {

      this.apiService.getServiceSubCategory().subscribe({
  
        next: (res) => {
          // var getServiceSubCategoryJson = JSON.parse(res.data);
          // var statusJson = JSON.parse(res.status);
          if (res.status = 200) {
            this.getServiceSubCategory = res.data
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
  ComponetLoad(cname:any):void{
    this.router.navigate(['/'+cname])
   }
}
