import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarClientesComponent } from './visualizar-clientes.component';

describe('VisualizarClientesComponent', () => {
  let component: VisualizarClientesComponent;
  let fixture: ComponentFixture<VisualizarClientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualizarClientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualizarClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
