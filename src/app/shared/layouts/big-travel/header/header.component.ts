import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { dark_mode } from '@assets/js/main';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router ) { }

  ngOnInit(): void {
    setTimeout(() =>{
      dark_mode();
    },100)
  }
  
  closeSesion(){
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
