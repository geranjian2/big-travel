import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-naves-viajes-list',
  templateUrl: './naves-viajes-list.component.html',
  styleUrls: ['./naves-viajes-list.component.scss']
})
export class NavesViajesListComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  getDetail(){
    this.router.navigate(['/viajes/rent']);
    console.log()
  }



}
