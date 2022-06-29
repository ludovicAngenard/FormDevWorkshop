import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnderlineTitleComponent } from './underline-title.component';

describe('UnderlineTitleComponent', () => {
  let component: UnderlineTitleComponent;
  let fixture: ComponentFixture<UnderlineTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnderlineTitleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnderlineTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
