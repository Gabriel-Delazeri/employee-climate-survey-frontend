import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyPageAdminstrationComponent } from './survey-page-adminstration.component';

describe('SurveyPageAdminstrationComponent', () => {
  let component: SurveyPageAdminstrationComponent;
  let fixture: ComponentFixture<SurveyPageAdminstrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SurveyPageAdminstrationComponent]
    });
    fixture = TestBed.createComponent(SurveyPageAdminstrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
