import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-default',
  templateUrl: './register-default.component.html',
  styleUrls: ['./register-default.component.scss']
})
export class RegisterDefaultComponent implements OnInit {

  formRegister: FormGroup; 
  constructor( 
    private formBuilder: FormBuilder,) {}

  ngOnInit(): void {
    this.initRegister();
  }

  initRegister() {
    this.formRegister = this.formBuilder.group({
      name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],         
      condition: ['', Validators.required],         
    });
  }
 

  campoNovalido( campo: string ) {
    return this.formRegister.get(campo)?.invalid
      && this.formRegister.get(campo)?.touched;
  } 

  submitRegister(){
    console.log(this.formRegister.value);
    this.formRegister.markAllAsTouched();
  }

  // submitRegister(){
  //   console.log(this.formRegister.value);

  //   if (this.formRegister.valid) {
  //     const value = this.formRegister.value;          
  //     this.myService.createPerfil(value).subscribe((data) => {    
  //    });       
  //  } else {
  //    this.formRegister.markAllAsTouched();
  //  }
  // }

}
