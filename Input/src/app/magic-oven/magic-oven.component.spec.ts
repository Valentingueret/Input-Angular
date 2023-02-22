/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MagicOvenComponent } from './magic-oven.component';

describe('MagicOvenComponent', () => {
  let component: MagicOvenComponent;
  let fixture: ComponentFixture<MagicOvenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MagicOvenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MagicOvenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
