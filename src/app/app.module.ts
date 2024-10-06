import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {RouterModule, Routes} from '@angular/router';
import { MatIconModule } from '@angular/material/icon'
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { MatRadioModule } from '@angular/material/radio'; 
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';


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
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { JobApplicationListComponent } from './job-application-list/job-application-list.component';
import { SubmissionSuccessComponent } from './submission-success/submission-success.component';


const appRoutes: Routes = [
{path: 'form', component: JobApplicationFormComponent},
{path: '',component: HomeComponent},

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
    AboutComponent,
    JobApplicationListComponent,
    SubmissionSuccessComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatStepperModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatRadioModule,
    MatSelectModule,
    MatOptionModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [

    provideHttpClient(withInterceptorsFromDi()),
    provideAnimationsAsync(),
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {
       displayDefaultIndicatorType: false,
    }
    }
 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
