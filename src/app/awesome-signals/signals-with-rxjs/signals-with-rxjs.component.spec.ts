import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalsWithRxjsComponent } from './signals-with-rxjs.component';

describe('SignalsWithRxjsComponent', () => {
  let component: SignalsWithRxjsComponent;
  let fixture: ComponentFixture<SignalsWithRxjsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SignalsWithRxjsComponent]
    });
    fixture = TestBed.createComponent(SignalsWithRxjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
