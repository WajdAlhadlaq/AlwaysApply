import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JobApplication } from './models/job-application'; 
import { JobModel } from './models/job-model'; 

@Injectable({
  providedIn: 'root'
})
export class JobApplicationService {

  private apiUrl = 'http://localhost:3000/applications';  

  constructor(private http: HttpClient) { }
//POST
  submitJobApplication(formData: any): Observable<any> {
    return this.http.post(this.apiUrl, formData);
  }

 
//GET
  getJobApplications(): Observable<JobApplication[]> {
    return this.http.get<JobApplication[]>(this.apiUrl);
  }

  //DELETE
 // Method to delete a specific job application by ID
deleteJobApplication(id: number): Observable<any> {
  return this.http.delete(`${this.apiUrl}/${id}`);
}



// Update job application
updateJobApplication(id: number, jobApplication: any): Observable<any> {
  return this.http.put(`${this.apiUrl}/${id}`, jobApplication);
}
  
}

  