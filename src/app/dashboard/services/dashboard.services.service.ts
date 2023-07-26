import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardServicesService {

  constructor(private _HttpClient: HttpClient) { }
  getTrending(mediaType:any):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${mediaType}/day?api_key=5d7860f80f9b66756fa249ad5112fed5`);
  }
  getTrendingDetails(mediaType:any , id:any):Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/${mediaType}/${id}?api_key=5d7860f80f9b66756fa249ad5112fed5`);
  }
  getPopularPeoples():Observable<any>{
    return this._HttpClient.get(`https://api.themoviedb.org/3/person/popular?api_key=5d7860f80f9b66756fa249ad5112fed5`);
  }
}
