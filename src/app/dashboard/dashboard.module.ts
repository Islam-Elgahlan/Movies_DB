import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { HomeComponent } from './components/home/home.component';
import { MoviesComponent } from './components/movies/movies.component';
import { TvshowsComponent } from './components/tvshows/tvshows.component';
import { PeopleComponent } from './components/people/people.component';
import { MaterialModule } from '../material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { TrendingDetailsComponent } from './components/trending-details/trending-details.component';


@NgModule({
  declarations: [
    HomeComponent,
    MoviesComponent,
    TvshowsComponent,
    PeopleComponent,
    TrendingDetailsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    HttpClientModule,
    MaterialModule,
  ],
  exports: [
    MaterialModule,
  ]
})
export class DashboardModule { }
