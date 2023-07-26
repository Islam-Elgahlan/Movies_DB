import { Component } from '@angular/core';
import { DashboardServicesService } from '../../services/dashboard.services.service';

@Component({
  selector: 'app-tvshows',
  templateUrl: './tvshows.component.html',
  styleUrls: ['./tvshows.component.scss']
})
export class TvshowsComponent {
  trendingTvs:any[] =[];

  constructor( private _DashboardServices :DashboardServicesService){
   this._DashboardServices.getTrending("tv").subscribe((data)=>{
     this.trendingTvs = data.results;
   })
  }
}
