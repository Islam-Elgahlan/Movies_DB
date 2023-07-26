import { Component } from '@angular/core';
import { DashboardServicesService } from '../../services/dashboard.services.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent {
  peoples :any[] = [];
  constructor( private _DashboardServices :DashboardServicesService){
    this._DashboardServices.getPopularPeoples().subscribe((data)=>{
      this.peoples = data.results ;
      console.log(this.peoples)
    })
  }
}
