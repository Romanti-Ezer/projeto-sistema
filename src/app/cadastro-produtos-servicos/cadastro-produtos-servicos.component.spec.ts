import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroProdutosServicosComponent } from './cadastro-produtos-servicos.component';

describe('CadastroProdutosServicosComponent', () => {
  let component: CadastroProdutosServicosComponent;
  let fixture: ComponentFixture<CadastroProdutosServicosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastroProdutosServicosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastroProdutosServicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
