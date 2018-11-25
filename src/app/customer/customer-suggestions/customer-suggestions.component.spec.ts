import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSuggestionsComponent } from './customer-suggestions.component';

describe('CustomerSuggestionsComponent', () => {
  let component: CustomerSuggestionsComponent;
  let fixture: ComponentFixture<CustomerSuggestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerSuggestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerSuggestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
