import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReportModePage } from './report-mode.page';

describe('ReportModePage', () => {
  let component: ReportModePage;
  let fixture: ComponentFixture<ReportModePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportModePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
