import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalProdutosComponent } from './total-produtos.component';

describe('TotalProdutosComponent', () => {
  let component: TotalProdutosComponent;
  let fixture: ComponentFixture<TotalProdutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalProdutosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
