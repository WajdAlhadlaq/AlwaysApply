import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmissionSuccessComponent } from './submission-success.component';

describe('SubmissionSuccessComponent', () => {
  let component: SubmissionSuccessComponent;
  let fixture: ComponentFixture<SubmissionSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubmissionSuccessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmissionSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
