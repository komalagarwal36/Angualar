import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { Router } from '@angular/router';
import { DataStoreService } from 'src/app/services/data-store.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employee-preview',
  templateUrl: './employee-preview.component.html',
  styleUrls: ['./employee-preview.component.css']
})
export class EmployeePreviewComponent implements OnInit {
  PayeePrevdata: any;

  constructor(private formbuilder: FormBuilder, private apiService: ApiService, private http: HttpClient, private router: Router, private dataStore: DataStoreService) { }

  ngOnInit(): void {
       // getSubServiceCategoryg

       let requestedData = {
        requestId:3
      }
      this.apiService.getPayeePrev(requestedData).subscribe(res => {
        if (res.data.status = 200) {
          this.PayeePrevdata = res.data
        }
       
        console.log(this.PayeePrevdata)
      })
  }

}

