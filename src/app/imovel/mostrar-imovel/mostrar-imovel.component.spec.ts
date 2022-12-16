import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarImovelComponent } from './mostrar-imovel.component';

describe('MostrarImovelComponent', () => {
  let component: MostrarImovelComponent;
  let fixture: ComponentFixture<MostrarImovelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostrarImovelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostrarImovelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
