import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdjustmentFormComponent } from './adjustment-form.component';

describe('AdjustmentFormComponent', () => {
  let component: AdjustmentFormComponent;
  let fixture: ComponentFixture<AdjustmentFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdjustmentFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdjustmentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
