import { Component } from '@angular/core';
import { DashboardServicesService } from '../../services/dashboard.services.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-trending-details',
  templateUrl: './trending-details.component.html',
  styleUrls: ['./trending-details.component.scss']
})
export class TrendingDetailsComponent {
  type:any;
  id:any;
  itemDetails:any;
  constructor(private _DashboardService:DashboardServicesService , private _ActivatedRoute:ActivatedRoute){
    this.type = _ActivatedRoute.snapshot.paramMap.get('type')
    this.id = _ActivatedRoute.snapshot.paramMap.get('id')

    this._DashboardService.getTrendingDetails(this.type,this.id).subscribe((data)=>{
      this.itemDetails = data ;
      console.log(this.itemDetails)
    })
  }


}
function getTrendingDetails(type: any, id: any) {
  throw new Error('Function not implemented.');
}

