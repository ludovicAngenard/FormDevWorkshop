import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalScrollComponent } from './modal-scroll.component';

describe('ModalScrollComponent', () => {
  let component: ModalScrollComponent;
  let fixture: ComponentFixture<ModalScrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalScrollComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
