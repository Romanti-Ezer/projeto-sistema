import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ServiceProdutoService {

  constructor(private http: Http) {
    console.log('Produto service started');
  }
  getProdutos()
  {
    return this.http.get('http://localhost:3000/api/produtos')
          .map(res => res.json());
  }

  cadastrarProduto(ProdutoNovo)
  {
    var headers = new Headers();
    headers.append('Content-type', 'application/json');
    return this.http.post('http://localhost:3000/api/produto',JSON.stringify(ProdutoNovo),{headers:headers})
          .map(res => res.json());
  }
}
