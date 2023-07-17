import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwesomeSignalsComponent } from './awesome-signals.component';

describe('AwesomeSignalsComponent', () => {
  let component: AwesomeSignalsComponent;
  let fixture: ComponentFixture<AwesomeSignalsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AwesomeSignalsComponent]
    });
    fixture = TestBed.createComponent(AwesomeSignalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
