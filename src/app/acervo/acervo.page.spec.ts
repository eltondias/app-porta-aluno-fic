import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcervoPage } from './acervo.page';

describe('AcervoPage', () => {
  let component: AcervoPage;
  let fixture: ComponentFixture<AcervoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcervoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcervoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
