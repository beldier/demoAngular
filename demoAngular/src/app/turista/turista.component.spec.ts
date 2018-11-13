/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TuristaComponent } from './turista.component';

describe('TuristaComponent', () => {
  let component: TuristaComponent;
  let fixture: ComponentFixture<TuristaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TuristaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TuristaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
