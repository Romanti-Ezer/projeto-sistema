import { Component, OnInit } from '@angular/core';
import { ServiceProdutoService } from '../services/service-produto/service-produto.service';

@Component({
  selector: 'app-cadastro-produtos-servicos',
  templateUrl: './cadastro-produtos-servicos.component.html',
  styleUrls: ['./cadastro-produtos-servicos.component.scss'],
  providers: [ServiceProdutoService]
})
export class CadastroProdutosServicosComponent implements OnInit {
  
  constructor(private serviceProdutoService: ServiceProdutoService) {

   }

  ngOnInit() {
    document.body.scrollTop = document.documentElement.scrollTop = 0
  }

  cadastrarProduto(event)
  {
    //let cod_cliente: string = document.getElementsByTagName('')[0].innerText
    let cod_cliente = 2
    let txt_nome: string = (<HTMLInputElement>document.getElementsByName('nomeProduto')[0]).value
    console.log(txt_nome)
    let txt_custo: string = (<HTMLInputElement>document.getElementsByName('custoProduto')[0]).value
    let txt_despezas_variaveis: string = (<HTMLInputElement>document.getElementsByName('dvProduto')[0]).value
    let txt_despezas_fixas: string = (<HTMLInputElement>document.getElementsByName('dfProduto')[0]).value
    let txt_lucro: string = (<HTMLInputElement>document.getElementsByName('lucroProduto')[0]).value
    let txt_preco_venda: string = (<HTMLInputElement>document.getElementsByName('pvProduto')[0]).value

    event.preventDefault();
    var novoProduto = {
      cod_cliente: cod_cliente,
      nome: txt_nome,
      custo: txt_custo,
      despezas_variaveis: txt_despezas_variaveis,
      despezas_fixas: txt_despezas_fixas,
      lucro: txt_lucro,
      preco_venda: txt_preco_venda
    }
    console.log(novoProduto);
    this.serviceProdutoService.cadastrarProduto(novoProduto)
      .subscribe(produto => {
          alert('Produto inserido com sucesso!');
          txt_nome = '';
          txt_custo = '';
          txt_despezas_variaveis = '';
          txt_despezas_fixas = '';
          txt_lucro = '';
          txt_preco_venda = '';
      });

  }

}
