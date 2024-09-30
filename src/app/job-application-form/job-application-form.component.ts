import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-job-application-form',
  templateUrl: './job-application-form.component.html',
  styleUrls: ['./job-application-form.component.css'],

})
export class JobApplicationFormComponent implements OnInit{
 

public jobApplication: FormGroup;

  constructor() {  }

  

  

  ngOnInit(): void {
    this.initForm();
  }
  onSubmit(){
    console.log(this.jobApplication.value)
  
  }

private initForm(): void{
  this.jobApplication = new FormGroup({
    name: new FormControl(null, Validators.required),
    email: new FormControl(null, [Validators.required, Validators.email]),
    phone: new FormControl(null, Validators.required),
  });
}

  
}
