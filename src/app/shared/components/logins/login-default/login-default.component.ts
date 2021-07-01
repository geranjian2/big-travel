import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '@src/app/core/services/auth.service';

@Component({
  selector: 'app-login-default',
  templateUrl: './login-default.component.html',
  styleUrls: ['./login-default.component.scss']
})
export class LoginDefaultComponent implements OnInit {
  formLogin: FormGroup;
  @Output()
  changeForm = new EventEmitter();
  constructor( 
    private formBuilder: FormBuilder,

    ) {}

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],         
    });
  }


  invalidField( field: string ) {
    return this.formLogin.get(field)?.invalid
      && this.formLogin.get(field)?.touched;
  } 
  
  submit(){
    this.formLogin.markAllAsTouched();
    if(this.formLogin.valid){
      this.changeForm.emit(this.formLogin.value);
    }
  } 

}
