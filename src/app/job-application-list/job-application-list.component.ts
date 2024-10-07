import { Component, OnInit } from '@angular/core';
import { JobApplicationService } from '../job-application.service'; // Adjust the path as necessary
import { JobApplication } from '../models/job-application'; // Create a model for the job application
import { JobModel } from '../models/job-model'; // Create a model for the job application
@Component({
  selector: 'app-job-application-list',
  templateUrl: './job-application-list.component.html',
  styleUrls: ['./job-application-list.component.css']
})
export class JobApplicationListComponent implements OnInit {
  public jobApplications: JobApplication[] = [];
  

  constructor(private jobApplicationService: JobApplicationService) {}

  ngOnInit(): void {
   this.fetchJobApplications();
 
  }

  fetchJobApplications(): void {
    this.jobApplicationService.getJobApplications().subscribe(
      applications => {
        this.jobApplications = applications;
      },
      error => {
        console.error('Error fetching applications:', error);
      }
    );
  }


}
