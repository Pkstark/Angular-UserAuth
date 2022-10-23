import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesseriesComponent } from './accesseries.component';

describe('AccesseriesComponent', () => {
  let component: AccesseriesComponent;
  let fixture: ComponentFixture<AccesseriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccesseriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccesseriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
