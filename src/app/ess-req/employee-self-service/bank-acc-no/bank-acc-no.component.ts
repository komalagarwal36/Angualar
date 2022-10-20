import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { ApiService } from "src/app/services/api.service";
import { DataStoreService } from "src/app/services/data-store.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-bank-acc-no',
  templateUrl: './bank-acc-no.component.html',
  styleUrls: ['./bank-acc-no.component.css']
})
export class BankAccNoComponent implements OnInit {
 


  constructor(private formbuilder: FormBuilder, private apiService: ApiService, private http: HttpClient, private router: Router, private dataStore: DataStoreService) { }

  ngOnInit(): void {
    
  }
  
}
