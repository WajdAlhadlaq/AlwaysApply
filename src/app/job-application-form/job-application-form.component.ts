import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { JobApplicationService } from '../job-application.service';
import { ActivatedRoute } from '@angular/router';
import { JobClass } from '../job-class';


@Component({
  selector: 'app-job-application-form',
  templateUrl: './job-application-form.component.html',
  styleUrls: ['./job-application-form.component.css']
})
export class JobApplicationFormComponent implements OnInit {
  jobTitle: string = '';
  company: string = '';
  salary: string = '';

  graduationYears = ['2019', '2020', '2023', '2024'];
  majors = ['SWE', 'CS', 'IS', 'IT', 'AI'];
  degrees = ['bachelor', 'master', 'phd'];
  universities = ['KSU', 'PNU', 'IMAMU'];

  public jobApplication: FormGroup;


  constructor(
    private fb: FormBuilder,
    private jobApplicationService: JobApplicationService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.initForm();

    this.route.queryParams.subscribe(params => {
      this.jobTitle = params['title'] || 'No Title';
      this.company = params['company'] || 'No Company';
      this.salary = params['salary'] || 'No Salary';

      // Update the form with the captured job details
      this.jobApplication.patchValue({
        jobDetails: {
          jobTitle: this.jobTitle,
          company: this.company,
          salary: this.salary
        }
      });
    });
  }

  private initForm(): void {
    this.jobApplication = this.fb.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        phone: ['', Validators.required],
        degree: ['', Validators.required],
        university: ['', Validators.required],
        major: ['', Validators.required],
        graduationYear: ['', Validators.required],
        gpa: ['', Validators.required],
        experienceYears: ['', Validators.required],
        jobTitle: ['', Validators.required]
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
      // Get the raw value, including disabled fields
      console.log(this.jobApplication.value)
      const jobApplicationData = this.jobApplication.getRawValue();
      this.jobApplicationService.submitJobApplication(jobApplicationData)
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
