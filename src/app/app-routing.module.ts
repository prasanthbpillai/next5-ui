import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { RaceDetailComponent } from './race-detail/race-detail.component';
import {RacesComponent} from "./races/races.component";

const routes: Routes = [
  { path: '', component: RacesComponent },
  { path: 'detail/:id', component: RaceDetailComponent }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
