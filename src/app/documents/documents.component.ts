import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {

  constructor() { 
    
  }


  JanAadharId: string = '';
  getJanAadhar()
  {
alert('this is id :-'+this.JanAadharId);
    let requestedDatas = {  janAadharId : this.JanAadharId}
  }
  ngOnInit(): void {
  }

}
