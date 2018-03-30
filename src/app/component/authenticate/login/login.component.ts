import { Component, OnInit } from '@angular/core';
import { JsonApiService } from './../../../services/json-api.service';
import { Router } from "@angular/router";


@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css'],
	providers: [ JsonApiService ]
})
export class LoginComponent implements OnInit {
	public loginDetails:any={};
	public errorMsg ='';
	public showError : boolean = false;
	constructor(private jsonApiService: JsonApiService,private router: Router) { }

	ngOnInit() {
	}

	login(loginDetails){
		this.jsonApiService.loginUser(loginDetails).subscribe((res)=>{	
			this.loginDetails={};
			this.router.navigate(['/home']);
		},(error:any)=>{
			this.errorMsg = error.statusText;
			this.showError = true;
		})

	}

}
