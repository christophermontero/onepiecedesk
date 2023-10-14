import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrowsNestComponent } from './crows-nest.component';

describe('CrowsNestComponent', () => {
  let component: CrowsNestComponent;
  let fixture: ComponentFixture<CrowsNestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CrowsNestComponent]
    });
    fixture = TestBed.createComponent(CrowsNestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
