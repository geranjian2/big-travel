import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { dark_mode } from '@src/assets/js/main';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  view: boolean = true;
  textButton: string = 'Registrarse';

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    setTimeout(() =>{
      dark_mode();
    },100)
  }

  cambiar(){
    this.view = !this.view;
    if(!this.view){      
      this.router.navigate(['login/register']);
      this.textButton = 'Ingresar';
    }else{            
      this.router.navigate(['login']);
      this.textButton = 'Registrarse';
    }
  }
}
