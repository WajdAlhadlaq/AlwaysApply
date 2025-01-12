import { Component, OnInit } from '@angular/core';
import { JobApplicationService } from '../job-application.service'; // Adjust the path as necessary
import { JobApplication } from '../models/job-application'; // Create a model for the job application
import { JobModel } from '../models/job-model'; // Create a model for the job application
import { JobClass } from '../job-class';
@Component({
  selector: 'app-job-application-list',
  templateUrl: './job-application-list.component.html',
  styleUrls: ['./job-application-list.component.css']
})
export class JobApplicationListComponent implements OnInit {
  // public jobApplications: JobApplication[] = [];
 jobs : JobClass[] = [];
 job : JobClass;

  constructor(private jobApplicationService: JobApplicationService) {

  }

  ngOnInit(): void {
   this.fetchJobApplications();
  }

  fetchJobApplications(): void {
    this.jobApplicationService.getJobApplications().subscribe(
      (applications: JobClass[]) => {
        console.log('API Ressponse', applications)
        this.jobs = applications;
      },
      error => {
        console.error('Error fetching applications:', error);
      }
    );
  }

  deleteApplication(id: number): void {
    if (confirm('Are you sure you want to delete this job application?')) {
      this.jobApplicationService.deleteJobApplication(id)
        .subscribe(
          (response : any) => {
            console.log('Job Application deleted successfully', response);
            // Refresh the list after deletion
            this.jobs = this.jobs.filter(app => app.jobId !== id);
          },
          (error : any) => {
            console.error('Error deleting job application:', error);
          }
        );
    }
  }


}
