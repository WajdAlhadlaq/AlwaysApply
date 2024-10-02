import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JobApplication } from './models/job-application'; 

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
  
}
