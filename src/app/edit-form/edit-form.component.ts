import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormsModule, FormGroup} from '@angular/forms';
import { JobApplicationService } from '../job-application.service';
import { JobClass } from '../job-class';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
@Component({
  standalone: true,
  imports: [CommonModule, FormsModule],
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrl: './edit-form.component.css'
})
export class EditFormComponent {

  jobs: JobClass[] = [];
  job: JobClass;
  // public jobApplication: FormGroup;


constructor(
  private jobApplicationService: JobApplicationService,
  private route: ActivatedRoute,
  private router: Router
) {
  this.job = new JobClass();
}

ngOnInit(): void {
  // Get jobId from route parameters
  const jobId = this.route.snapshot.paramMap.get('id');
  if (jobId) {
    this.getJobById(+jobId);
  }
}


  // Fetch the job by ID
  getJobById(jobId: number) {
    this.jobApplicationService.getJobById(jobId).subscribe(
      (jobData: JobClass) => {
        this.job = jobData;
      },
      (error: any) => {
        console.error('Error fetching job:', error);
      }
    );
  }

  updateJob() {
    this.jobApplicationService.updateJobApplication(this.job).subscribe(
      response => {
        if (response) {
          console.log('Job updated successfully', response);
          this.job = new JobClass();
        } else {
          console.log('Job updated, but no response received.');
        }
      },
      (error: any) => {
        console.error('Error updating job:', error);
      }
    );
   }
}




