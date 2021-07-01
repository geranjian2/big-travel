import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-default',
  templateUrl: './register-default.component.html',
  styleUrls: ['./register-default.component.scss']
})
export class RegisterDefaultComponent implements OnInit {

  formRegister: FormGroup; 
  @Output()
  changeForm = new EventEmitter();
  constructor( 
    private formBuilder: FormBuilder,) {}

  ngOnInit(): void {
    this.formRegister = this.formBuilder.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],         
      condition: ['', Validators.required],         
    });
  }
 

  fieldNoValid( campo: string ) {
    return this.formRegister.get(campo)?.invalid
      && this.formRegister.get(campo)?.touched;
  } 

  submit(){
    this.formRegister.markAllAsTouched();
    if(this.formRegister.valid){
      this.changeForm.emit(this.formRegister.value);
    }
  }
}
