import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeelComponent } from './keel.component';

describe('KeelComponent', () => {
  let component: KeelComponent;
  let fixture: ComponentFixture<KeelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KeelComponent]
    });
    fixture = TestBed.createComponent(KeelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
