import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    // NavbarComponent,
    NotfoundComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MaterialModule,
  ],
  exports:[
    MaterialModule,
  ]
})
export class SharedModule { }
