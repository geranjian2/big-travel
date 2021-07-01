import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { dark_mode } from '@assets/js/main';
import { AuthService } from '@src/app/core/services/auth.service';
import { User } from '@src/app/core/models/user';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  user:User;
  constructor(private router: Router, private _auth:AuthService ) { }

  ngOnInit(): void {
    this.user = this._auth.getCurrentUserValue();
    
    setTimeout(() =>{
      dark_mode();
    },100)
  }
  
  closeSesion(){
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
