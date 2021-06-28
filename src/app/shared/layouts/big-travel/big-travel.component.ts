import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-big-travel',
  templateUrl: './big-travel.component.html',
  styleUrls: ['./big-travel.component.scss']
})
export class BigTravelComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.spinner.show();
    setTimeout(() =>{
      this.spinner.hide();
    },2000);
  }

}
