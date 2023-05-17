import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSecComponent } from './profile-sec.component';

describe('ProfileSecComponent', () => {
  let component: ProfileSecComponent;
  let fixture: ComponentFixture<ProfileSecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileSecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
