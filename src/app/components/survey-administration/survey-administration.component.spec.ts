import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyAdministrationComponent } from './survey-administration.component';

describe('SurveyAdministrationComponent', () => {
  let component: SurveyAdministrationComponent;
  let fixture: ComponentFixture<SurveyAdministrationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SurveyAdministrationComponent]
    });
    fixture = TestBed.createComponent(SurveyAdministrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
