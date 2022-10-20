import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-identification',
  templateUrl: './employee-identification.component.html',
  styleUrls: ['./employee-identification.component.css']
})
export class EmployeeIdentificationComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  ComponetLoad(cname:any):void{
    this.router.navigate(['/'+cname])
   }
}
