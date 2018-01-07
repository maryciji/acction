import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComtentComponent } from './comtent.component';

describe('ComtentComponent', () => {
  let component: ComtentComponent;
  let fixture: ComponentFixture<ComtentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComtentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComtentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
