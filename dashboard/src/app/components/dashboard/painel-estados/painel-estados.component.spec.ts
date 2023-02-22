import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelEstadosComponent } from './painel-estados.component';

describe('PainelEstadosComponent', () => {
  let component: PainelEstadosComponent;
  let fixture: ComponentFixture<PainelEstadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PainelEstadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PainelEstadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
