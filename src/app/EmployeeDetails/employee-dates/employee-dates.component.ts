import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-dates',
  templateUrl: './employee-dates.component.html',
  styleUrls: ['./employee-dates.component.css']
})
export class EmployeeDatesComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  ComponetLoad(cname:any):void{
    this.router.navigate(['/'+cname])
   }
}
