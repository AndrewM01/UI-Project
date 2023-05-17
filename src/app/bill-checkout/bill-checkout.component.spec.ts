import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BillCheckoutComponent } from './bill-checkout.component';

describe('BillCheckoutComponent', () => {
  let component: BillCheckoutComponent;
  let fixture: ComponentFixture<BillCheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BillCheckoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BillCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
