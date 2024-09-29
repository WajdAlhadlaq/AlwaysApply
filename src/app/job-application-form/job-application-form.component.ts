import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-job-application-form',
  templateUrl: './job-application-form.component.html',
  styleUrls: ['./job-application-form.component.css']
})
export class JobApplicationFormComponent implements OnInit {
  applicationForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.applicationForm = this.fb.group({
      personalInfo: this.fb.group({
        name: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        phone: ['', Validators.required],
        address: ['', Validators.required]
      }),
      employmentHistory: this.fb.array([]),
      education: this.fb.array([]),
      resume: [null, Validators.required],
      coverLetter: ['']
    });
  }

  ngOnInit(): void {}

  // Getters for form arrays
  get employmentHistory() {
    return this.applicationForm.get('employmentHistory') as FormArray;
  }

  get education() {
    return this.applicationForm.get('education') as FormArray;
  }

  // Add employment history entry
  addEmploymentHistory() {
    this.employmentHistory.push(this.fb.group({
      company: ['', Validators.required],
      position: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: [''],
      responsibilities: ['', Validators.required]
    }));
  }

  // Add education entry
  addEducation() {
    this.education.push(this.fb.group({
      school: ['', Validators.required],
      degree: ['', Validators.required],
      graduationYear: ['', Validators.required]
    }));
  }

  // Handle file input for resume
  onFileChange(event: any) {
    const file = event.target.files[0];
    this.applicationForm.patchValue({ resume: file });
  }

  // Submit the form data
  onSubmit(): void {
    if (this.applicationForm.valid) {
      console.log('Form Data:', this.applicationForm.value);
      alert('Application submitted successfully!');
    } else {
      alert('Form is invalid! Please complete all required fields.');
    }
  }
}
