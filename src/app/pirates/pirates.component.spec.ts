import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiratesComponent } from './pirates.component';

describe('PiratesComponent', () => {
  let component: PiratesComponent;
  let fixture: ComponentFixture<PiratesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PiratesComponent]
    });
    fixture = TestBed.createComponent(PiratesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
