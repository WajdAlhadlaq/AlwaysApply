import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {RouterModule, Routes} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { FooterComponent } from './footer/footer.component';
import { JobListComponent } from './job-list/job-list.component';
import { JobCardComponent } from './job-card/job-card.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { JobApplicationFormComponent } from './job-application-form/job-application-form.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';


const appRoutes: Routes = [
{path: 'form', component: JobApplicationFormComponent},
{path: '',redirectTo:'/job-card', pathMatch:'full'},

]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    FooterComponent,
    JobListComponent,
    JobCardComponent,
    JobApplicationFormComponent,
    HomeComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatInputModule,
    MatButtonModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
