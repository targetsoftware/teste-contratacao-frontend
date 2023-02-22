import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalVendedoresComponent } from './total-vendedores.component';

describe('TotalVendedoresComponent', () => {
  let component: TotalVendedoresComponent;
  let fixture: ComponentFixture<TotalVendedoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalVendedoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalVendedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
