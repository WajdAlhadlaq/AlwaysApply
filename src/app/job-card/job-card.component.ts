import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {JobModel} from '../models/job-model';


@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrl: './job-card.component.css',
})
export class JobCardComponent {
   jobModelList : JobModel [] =[
    {
    
    id: 1,
    title: "Software Engineer",
    company: "Apple",
    salary: "$10,000",
    location: "San fransisco, USA"
    },
    {
      id: 2,
      title: "UI/UX Specialist",
      company: "Google",
      salary: "$5000",
      location: "Riyadh, KSA"

    },
    {
      id: 3,
      title: "Front-end Developer",
      company: "IBM",
      salary: "$8000",
      location: "London, UK"

    },
    {
    
      id: 4,
      title: "Software Engineer",
      company: "Apple",
      salary: "$10,000",
      location: "San fransisco, USA"
      },
      {
        id: 5,
        title: "UI/UX Specialist",
        company: "Google",
        salary: "$5000",
        location: "Riyadh, KSA"
  
      },
      {
        id: 3,
        title: "Front-end Developer",
        company: "IBM",
        salary: "$8000",
        location: "London, UK"
  
      },   {
    
        id: 1,
        title: "Software Engineer",
        company: "Apple",
        salary: "$10,000",
        location: "San fransisco, USA"
        },
        {
          id: 2,
          title: "UI/UX Specialist",
          company: "Google",
          salary: "$5000",
          location: "Riyadh, KSA"
    
        },
        {
          id: 3,
          title: "Front-end Developer",
          company: "IBM",
          salary: "$8000",
          location: "London, UK"
    
        }
 ] 
  }
 



