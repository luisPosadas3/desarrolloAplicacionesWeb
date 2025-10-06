import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompoHijo } from './compo-hijo';

describe('CompoHijo', () => {
  let component: CompoHijo;
  let fixture: ComponentFixture<CompoHijo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompoHijo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompoHijo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
