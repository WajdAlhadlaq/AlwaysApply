import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder } from '@angular/forms';
import { JobApplicationService } from '../job-application.service';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrl: './edit-form.component.css'
})
export class EditFormComponent {


public jobApplication: FormGroup;

constructor(
  private fb: FormBuilder,
  private jobApplicationService: JobApplicationService,
  private route: ActivatedRoute
) {}
}