import { Component, OnInit } from '@angular/core';
import { JsonApiService } from './../../../services/json-api.service';

@Component({
	selector: 'app-register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.css'],
	providers: [ JsonApiService ]
})
export class RegisterComponent implements OnInit {
	public errorMsg ='';
	public showError : boolean = false;
	public userDetails:any={};
	constructor(private jsonApiService: JsonApiService) { }

	ngOnInit() {
	}

	register(userDetails){
		this.jsonApiService.registerUser(userDetails).subscribe((res)=>{
			this.userDetails={};
		},(error:any)=>{
			this.errorMsg = error.statusText;
			this.showError = true;
		})

	}
}

