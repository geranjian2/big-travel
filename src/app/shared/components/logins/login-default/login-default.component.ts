import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '@src/app/core/services/auth.service';
import { Router } from '@angular/router';
import { User } from '@src/app/core/models/user';

@Component({
  selector: 'app-login-default',
  templateUrl: './login-default.component.html',
  styleUrls: ['./login-default.component.scss']
})
export class LoginDefaultComponent implements OnInit {
  formLogin: FormGroup; 
  user: User = { email:"andres@email.com",name:"andres",id:2};
  constructor( 
    private formBuilder: FormBuilder,
    private _auth:AuthService,
    private router: Router 
    ) {}

  ngOnInit(): void {
    this.initLogin();
    localStorage.removeItem('user');
    this._auth.setCurrentUserValue(null);
  }

  initLogin() {
    this.formLogin = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],         
    });
  }

  invalidField( campo: string ) {
    return this.formLogin.get(campo)?.invalid
      && this.formLogin.get(campo)?.touched;
  } 

  submitLogin(){

    this.formLogin.markAllAsTouched();
    if(this.formLogin.valid){
      this._auth.setCurrentUserValue(this.user);
      this.router.navigate(['/']);
    }

    
  } 

}
