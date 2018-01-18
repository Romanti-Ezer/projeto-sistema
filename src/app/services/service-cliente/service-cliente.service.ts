import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ServiceClienteService {


  constructor(private http: Http) {
      console.log('Cliente service started');
   }

   getClientes()
   {
     return this.http.get('http://localhost:3000/api/clientes')
        .map(res => res.json());
   }

   novoCliente(clienteNovo)
   {
     var headers = new Headers();
     headers.append('Content-type','application/json');
     return this.http.post('http://localhost:3000/api/cliente',JSON.stringify(clienteNovo),{headers:headers})
     .map(res => res.json());
   }

   gerarPDF(html)
   {
     var headers = new Headers();
     headers.append('Content-type', 'application/json');
     return this.http.post('http://localhost:3000/api/gerar_pdf', JSON.stringify(html), {headers:headers})
       .map(res => res.json());
   }
}
