import { TestBed, inject } from '@angular/core/testing';

import { ServiceProdutoService } from './service-produto.service';

describe('ServiceProdutoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceProdutoService]
    });
  });

  it('should be created', inject([ServiceProdutoService], (service: ServiceProdutoService) => {
    expect(service).toBeTruthy();
  }));
});
