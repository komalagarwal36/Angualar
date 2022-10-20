import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bank-details',
  templateUrl: './bank-details.component.html',
  styleUrls: ['./bank-details.component.css']
})
export class BankDetailsComponent implements OnInit {

  constructor(private router:Router) { }
  
  ngOnInit(): void {
    
    
  }
  ComponetLoad(cname:any):void{
    this.router.navigate(['/'+cname])
   }
    

}
