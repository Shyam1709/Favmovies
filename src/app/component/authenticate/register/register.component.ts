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
	public confirmPassword:any = "";
	public er: any={};
	constructor(private jsonApiService: JsonApiService) { }

	ngOnInit() {
	}

	register(userDetails){
		if(userDetails.password!=userDetails.confirmPassword){
			alert("Password and Confirm Password Not Matched");
			return;
		}
		this.jsonApiService.registerUser(userDetails).subscribe((res)=>{
			this.userDetails={};
		},(error:any)=>{
			this.er=JSON.parse(error._body);
			alert(this.er.error);
			this.errorMsg = error.statusText;
			this.showError = true;
		})

	}
}

