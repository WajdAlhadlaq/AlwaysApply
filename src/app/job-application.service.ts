import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { JobApplication } from './models/job-application';
import { JobModel } from './models/job-model';
import { JobClass } from './job-class';

@Injectable({
  providedIn: 'root'
})
export class JobApplicationService {

  private apiUrl = 'http://localhost:45009/api/Jobs';
  job:any;

  constructor(private http: HttpClient) { }
//POST
  submitJobApplication(jobApplicationData: any): Observable<any> {
    return this.http.post(this.apiUrl, jobApplicationData);
  }


//GET
  getJobApplications(): Observable<JobClass[]> {
    return this.http.get<JobClass[]>(this.apiUrl);
  }

  //GET
  getJobById(jobId: number): Observable<JobClass> {
    return this.http.get<JobClass>(`${this.apiUrl}/${jobId}`);
  }

  //DELETE
 // Method to delete a specific job application by ID
deleteJobApplication(id: number): Observable<any> {
  return this.http.delete(`${this.apiUrl}/${id}`);
}



// Update job application
updateJobApplication(job: JobClass): Observable<JobClass> {
  return this.http.put<JobClass>(this.apiUrl + "/" + job.jobId, job).pipe(
  catchError(this.handleError)
  );
}

private handleError(error: HttpErrorResponse) {
  console.error('An error occurred:', error.message);
  return throwError(() => new Error('Something went wrong; please try again later.'));
}

}

