import { Component, OnInit } from '@angular/core';
import { Travel } from '@src/app/core/models';
import { FakeService } from '@src/app/core/services/fake.service';
import { TravelService } from '@src/app/core/services/travel.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-list-viaje',
  templateUrl: './list-viaje.component.html',
  styleUrls: ['./list-viaje.component.scss']
})
export class ListViajeComponent implements OnInit {
  listTravel:Travel[] = [];
  constructor(private _travelService:TravelService,private _fakeService:FakeService) { }

  ngOnInit(): void {
    this.loadAllTravels();
  }
  loadAllTravels(){
    this._travelService.getAll().subscribe( response =>{
      this.listTravel = response;
    })
  }
  
  classStatus(status:string){
    return (status==='Activo')?'badge-teal':'badge-danger';
  }

  errorServer(){
      this._fakeService.errorServer().subscribe();
  }
  expiredServer(){
      this._fakeService.expiredToken().subscribe();
  }

}
