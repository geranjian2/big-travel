import { Component, OnInit } from '@angular/core';
import { menu_init } from '../../../../../assets/js/main'; 
import { User } from '@src/app/core/models/user';
import { AuthService } from '@src/app/core/services/auth.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  user:User = new User();
  constructor(private _auth:AuthService) { }
  
  ngOnInit(): void {
   this.user = this._auth.getCurrentUserValue();
    menu_init();
 
  }

  items = [
    {
      "icon":"fa fa-globe",
      "title":"Mis Viajes",
       "link":"/"     
    },
    {      
      "icon":"fas fa-fighter-jet",
      "title":"Alquilar Nave",
      "link":"/travel" 
    },
    {
      
      "icon":"fa fa-space-shuttle",
      "title":"Administrar Naves",     
      "link":"/naves"
    },
    {
      "icon":"far fa-user",
      "title":"Administrar Pilotos",     
      "link":"/"
     }   
  ]; 

}
