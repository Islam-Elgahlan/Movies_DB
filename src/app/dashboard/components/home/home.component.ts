import { Component } from '@angular/core';
import { DashboardServicesService } from '../../services/dashboard.services.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})



export class HomeComponent {
  trendingMovies:any[] =[];
  trendingTvs:any[] =[];
 constructor( private _DashboardServices :DashboardServicesService){
  this._DashboardServices.getTrending("all").subscribe((data)=>{
    this.trendingMovies = data.results.filter((item:any)=>{
      return item.media_type == "movie";
    });
    this.trendingTvs = data.results.filter((item:any)=>{
      return item.media_type == "tv";
    })
    console.log(this.trendingMovies)
  })
 }
}
