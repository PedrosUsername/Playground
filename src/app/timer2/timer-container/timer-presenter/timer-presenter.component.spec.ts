import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerPresenterComponent } from './timer-presenter.component';

describe('TimerPresenterComponent', () => {
  let component: TimerPresenterComponent;
  let fixture: ComponentFixture<TimerPresenterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerPresenterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerPresenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
