import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JobApplicationService } from '../job-application.service';

@Component({
  selector: 'app-job-application-form',
  templateUrl: './job-application-form.component.html',
  styleUrls: ['./job-application-form.component.css']
})
export class JobApplicationFormComponent implements OnInit {


  graduationYears = ['2019','2020','2023','2024'];
majors = ['SWE', 'CS', 'IS', 'IT', 'AI'];

degrees =['bachelor', 'master', 'phd'];
 
universities = ['KSU', 'PNU', 'IMAMU']; 



  
  public jobApplication: FormGroup;

  //private jobApplicationService: JobApplicationService )
  constructor(private fb: FormBuilder, private jobApplicationService: JobApplicationService)  {
    
   }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    this.jobApplication = this.fb.group({
      personalInfo: this.fb.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        phone: ['', Validators.required]
      }),
      education: this.fb.group({
        degree: ['', Validators.required],
        university: ['', Validators.required],
        major: ['', Validators.required],
        graduationYear: ['', [Validators.required, Validators.pattern('^[0-9]{4}$')]],
        gpa: ['', Validators.required],
        gpaScale:['4.0',Validators.required],
      }),
      experience: this.fb.group({
        yearsExperience: ['', Validators.required],
        jobTitle: ['', Validators.required]
      })
    });
  }

  
  get personalInfo() {
    return this.jobApplication.get('personalInfo') as FormGroup;
  }

  get education() {
    return this.jobApplication.get('education') as FormGroup;
  }

  get experience() {
    return this.jobApplication.get('experience') as FormGroup;
  }
  
 
    onSubmit(): void {
      if (this.jobApplication.valid) {
        this.jobApplicationService.submitJobApplication(this.jobApplication.value)
          .subscribe(
            response => {
              console.log('Form successfully submitted:', response);
            },
            error => {
              console.error('Error submitting form:', error);
            }
          );
      } else {
        console.log('Form is invalid.');
      }
    }
    
  
}
