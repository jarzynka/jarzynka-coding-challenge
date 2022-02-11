import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PollutionQueryComponent } from './components/pollution-query/pollution-query.component';
import { AboutComponent } from './components/about/about.component';

// set up our Routes
const appRoutes: Routes = 
[
  { path: '', component: PollutionQueryComponent },
  { path: 'about', component: AboutComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
