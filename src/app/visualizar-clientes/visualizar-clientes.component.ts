import { Component, OnInit } from '@angular/core';
import { ServiceClienteService } from '../services/service-cliente/service-cliente.service';
import { Cliente } from '../Cliente';

@Component({
  selector: 'app-visualizar-clientes',
  templateUrl: './visualizar-clientes.component.html',
  styleUrls: ['./visualizar-clientes.component.scss'],
  providers:[ServiceClienteService]
})
export class VisualizarClientesComponent implements OnInit {
  clientes: Cliente[];

  constructor(private serviceCliente: ServiceClienteService) {

        this.serviceCliente.getClientes()
          .subscribe(clientes => {
              this.clientes = clientes;
          });
    }

  ngOnInit() {
    document.body.scrollTop = document.documentElement.scrollTop = 0
  }

}
