import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeePreviewComponent } from './employee-preview.component';

describe('EmployeePreviewComponent', () => {
  let component: EmployeePreviewComponent;
  let fixture: ComponentFixture<EmployeePreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeePreviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
