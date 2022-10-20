import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { ApiService } from "src/app/services/api.service";
import { DataStoreService } from "src/app/services/data-store.service";

@Component({
  selector: 'app-blank-page',
  templateUrl: './blank-page.component.html',
  styleUrls: ['./blank-page.component.css']
})
export class BlankPageComponent implements OnInit {

    fileName = '';

    constructor(
      private _formBuilder: FormBuilder,
      private apiService: ApiService,
      private http: HttpClient,
      private dataStore: DataStoreService, formBuilder: FormBuilder,
    ) {}
  ngOnInit(): void {
    throw new Error("Method not implemented.");
  }

    onFileSelected(event:any) {

        const file:File = event.target.files[0];

        if (file) {

            this.fileName = file.name;

            const formData = new FormData();

            formData.append("thumbnail", file);

            const upload$ = this.http.post("http://172.22.32.100:5000/saveEmpoyeeDocumentWSDL", formData);

            upload$.subscribe();
        }
    }
}
