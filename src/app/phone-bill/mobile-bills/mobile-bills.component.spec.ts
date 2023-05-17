import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileBillsComponent } from './mobile-bills.component';

describe('MobileBillsComponent', () => {
  let component: MobileBillsComponent;
  let fixture: ComponentFixture<MobileBillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileBillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileBillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
