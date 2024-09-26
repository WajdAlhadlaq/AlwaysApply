import { Component, Input } from '@angular/core';
import {JobModel} from '../job-model'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrl: './job-list.component.css',
  standalone: false
})
export class JobListComponent {
  @Input() JobModel!:  JobModel;

}



