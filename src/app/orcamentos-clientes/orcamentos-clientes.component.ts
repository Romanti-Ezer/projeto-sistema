import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orcamentos-clientes',
  templateUrl: './orcamentos-clientes.component.html',
  styleUrls: ['./orcamentos-clientes.component.scss']
})
export class OrcamentosClientesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.body.scrollTop = document.documentElement.scrollTop = 0

  }

}
