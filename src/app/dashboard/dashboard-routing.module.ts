import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MoviesComponent } from './components/movies/movies.component';
import { PeopleComponent } from './components/people/people.component';
import { TvshowsComponent } from './components/tvshows/tvshows.component';
import { AuthGuardService } from '../auth/services/auth-guard.service';
import { TrendingDetailsComponent } from './components/trending-details/trending-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'people', component: PeopleComponent },
  { path: 'tvshows', component: TvshowsComponent },
  { path: 'details/:type/:id', component: TrendingDetailsComponent, canActivate:[AuthGuardService] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
