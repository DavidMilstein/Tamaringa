import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetectiveComponent } from './detective.component';

describe('DetectiveComponent', () => {
  let component: DetectiveComponent;
  let fixture: ComponentFixture<DetectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
