import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalLojasComponent } from './total-lojas.component';

describe('TotalLojasComponent', () => {
  let component: TotalLojasComponent;
  let fixture: ComponentFixture<TotalLojasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalLojasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalLojasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
