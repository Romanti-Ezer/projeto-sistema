import { Component, OnInit } from '@angular/core';
import { ServiceClienteService } from '../services/service-cliente/service-cliente.service';

@Component({
  selector: 'app-orcamentos-clientes',
  templateUrl: './orcamentos-clientes.component.html',
  styleUrls: ['./orcamentos-clientes.component.scss'],
  providers:[ServiceClienteService]
})
export class OrcamentosClientesComponent implements OnInit {

  constructor(private serviceCliente:ServiceClienteService) {

  }

  ngOnInit() {
    document.body.scrollTop = document.documentElement.scrollTop = 0

  }

  cadastrarCliente(event)
  {
    event.preventDefault();
    var novoCliente = {
      nome:this.nome,
      sobrenome: this.sobrenome,
      email: this.email,
      endereco:this.endereco,
      cidade:this.cidade,
      estado:this.estado,
      cep:this.cep
    }
    /*
    alert('nome='+this.nome);
    alert('sobrenome='+this.sobrenome);
    alert('email='+this.email);
    alert('endereco='+this.endereco);
    alert('cidade='+this.cidade);
    alert('estado='+this.estado);
    alert('cep='+this.cep);
    */

    this.serviceCliente.novoCliente(novoCliente)
        .subscribe(cliente => {
            alert('cliente inserido com sucesso!');
            this.nome = '';
            this.sobrenome = '';
            this.email = '';
            this.endereco = '';
            this.cidade = '';
            this.estado = '';
            this.cep = '';
        });

  }

}
