import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrcamentosClientesComponent } from './orcamentos-clientes.component';

describe('OrcamentosClientesComponent', () => {
  let component: OrcamentosClientesComponent;
  let fixture: ComponentFixture<OrcamentosClientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrcamentosClientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrcamentosClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
