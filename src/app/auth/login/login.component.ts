import { Component, OnInit } from '@angular/core';
import { AuthService } from '@src/app/core/services/auth.service';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private _auth:AuthService) { }
  ngOnInit(): void {}
  
  login(loginFormControls){
    this._auth.login(loginFormControls).subscribe(response => {
        console.log(response);
    });
  }
}
