import { Component, OnInit } from '@angular/core';
import { menu_init } from '../../../../../assets/js/main'; 
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
 
    menu_init();
 
  }

  items = [
    {
      "icon":"fa fa-globe",
      "title":"Mis Viajes",
       "link":"/viajes"     
    },
    {      
      "icon":"fas fa-fighter-jet",
      "title":"Alquilar Nave",
      "link":"/naves" 
    },
    {      
      "icon":"fa fa-space-shuttle",
      "title":"Naves",     
      "link":"/viajes/travel"
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
