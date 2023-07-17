import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicSignalsComponent } from './basic-signals.component';

describe('BasicSignalsComponent', () => {
  let component: BasicSignalsComponent;
  let fixture: ComponentFixture<BasicSignalsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasicSignalsComponent]
    });
    fixture = TestBed.createComponent(BasicSignalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
