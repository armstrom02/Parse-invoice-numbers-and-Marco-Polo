import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParseInvoiceComponent } from './parse-invoice.component';

describe('ParseInvoiceComponent', () => {
  let component: ParseInvoiceComponent;
  let fixture: ComponentFixture<ParseInvoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParseInvoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParseInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
