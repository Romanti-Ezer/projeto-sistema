import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaConteudosComponent } from './tabela-conteudos.component';

describe('TabelaConteudosComponent', () => {
  let component: TabelaConteudosComponent;
  let fixture: ComponentFixture<TabelaConteudosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabelaConteudosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaConteudosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
