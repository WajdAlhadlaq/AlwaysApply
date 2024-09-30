import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-job-application-form',
  templateUrl: './job-application-form.component.html',
  styleUrls: ['./job-application-form.component.css']
})
export class JobApplicationFormComponent implements OnInit {
  
  public jobApplication: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm(): void {
    // Initialize form with FormBuilder
    this.jobApplication = this.fb.group({
      personalInfo: this.fb.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        phone: ['', Validators.required]
      }),
      experience: this.fb.group({
        yearsExperience: ['', Validators.required],
        jobTitle: ['', Validators.required]
      })
    });
  }

  // Form submission method
  onSubmit(): void {
    if (this.jobApplication.valid) {
      console.log('Form Submitted!', this.jobApplication.value);
    } else {
      console.log('Form is invalid.');
    }
  }
}
