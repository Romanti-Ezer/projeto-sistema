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
    let nomeCliente: string = document.getElementsByName('nome')[0].innerText
    let sobrenomeCliente: string = document.getElementsByName('sobrenome')[0].innerText
    let emailCliente: string = document.getElementsByName('email')[0].innerText
    let enderecoCliente: string = document.getElementsByName('endereco')[0].innerText
    let cidadeCliente: string = document.getElementsByName('cidade')[0].innerText
    let estadoCliente: string = document.getElementsByName('estado')[0].innerText
    let cepCliente: string = document.getElementsByName('cep')[0].innerText

    event.preventDefault();
    var novoCliente = {
      nome: nomeCliente,
      sobrenome: sobrenomeCliente,
      email: emailCliente,
      endereco: enderecoCliente,
      cidade: cidadeCliente,
      estado: estadoCliente,
      cep: cepCliente
    }

    this.serviceCliente.novoCliente(novoCliente)
        .subscribe(cliente => {
            alert('Cliente inserido com sucesso!');
            nomeCliente = '';
            sobrenomeCliente = '';
            emailCliente = '';
            enderecoCliente = '';
            cidadeCliente = '';
            estadoCliente = '';
            cepCliente = '';
        });

  }

  gerarPDF(event)
  {
      var html_root = '<html><body><center>IT WORKS!!</center></body></html>'
      var html_final = {
        html: html_root
      }
      this.serviceCliente.gerarPDF(html_final)
        .subscribe(pdf =>
        {
            alert('PDF gerado com sucesso!');
        });
  }

}
