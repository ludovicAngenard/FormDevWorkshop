import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPlanningComponent } from './modal-planning.component';



describe('ModalPlanningComponent', () => {
  let component: ModalPlanningComponent;
  let fixture: ComponentFixture<ModalPlanningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalPlanningComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalPlanningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
