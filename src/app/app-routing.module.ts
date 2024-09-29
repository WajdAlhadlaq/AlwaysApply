import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JobCardComponent } from './job-card/job-card.component';
import { JobApplicationFormComponent } from './job-application-form/job-application-form.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [// Home page showing job list
 
  { path: 'job-application', component: JobApplicationFormComponent }, // Job application form
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
