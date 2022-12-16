import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarAlterarImovelComponent } from './criar-alterar-imovel.component';

describe('CriarAlterarImovelComponent', () => {
  let component: CriarAlterarImovelComponent;
  let fixture: ComponentFixture<CriarAlterarImovelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarAlterarImovelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CriarAlterarImovelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
