import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFoumdComponent } from './not-foumd.component';

describe('NotFoumdComponent', () => {
  let component: NotFoumdComponent;
  let fixture: ComponentFixture<NotFoumdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotFoumdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotFoumdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
