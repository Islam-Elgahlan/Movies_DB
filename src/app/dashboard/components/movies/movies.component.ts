import { Component } from '@angular/core';
import { DashboardServicesService } from '../../services/dashboard.services.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent {
  trendingMovies:any[] =[];

 constructor( private _DashboardServices :DashboardServicesService){
  this._DashboardServices.getTrending("movie").subscribe((data)=>{
    this.trendingMovies = data.results;
  })
 }
}
