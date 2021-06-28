import { Component, OnInit } from '@angular/core';
import { dark_mode } from '@assets/js/main';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'bit-travel';
  

  ngOnInit():void{
    dark_mode();
  }

  
}
