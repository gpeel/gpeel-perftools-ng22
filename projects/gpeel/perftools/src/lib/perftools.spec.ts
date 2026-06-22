import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Perftools } from './perftools';

describe('Perftools', () => {
  let component: Perftools;
  let fixture: ComponentFixture<Perftools>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Perftools],
    }).compileComponents();

    fixture = TestBed.createComponent(Perftools);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
