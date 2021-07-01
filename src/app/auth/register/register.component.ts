import { Component, OnInit } from '@angular/core';
import { AuthService } from '@src/app/core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private _auth: AuthService) { }

  ngOnInit(): void {
  }
  
  register(registerFormControls){
    console.log(registerFormControls);
    this._auth.register(registerFormControls).subscribe(response=>{
      console.log(response);
    });
  }
}
