import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicSignalsExtendedComponent } from './basic-signals-extended.component';

describe('BasicSignalsExtendedComponent', () => {
  let component: BasicSignalsExtendedComponent;
  let fixture: ComponentFixture<BasicSignalsExtendedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasicSignalsExtendedComponent]
    });
    fixture = TestBed.createComponent(BasicSignalsExtendedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
