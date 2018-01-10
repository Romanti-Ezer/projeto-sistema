import { TestBed, inject } from '@angular/core/testing';

import { ServiceClienteService } from './service-cliente.service';

describe('ServiceClienteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServiceClienteService]
    });
  });

  it('should be created', inject([ServiceClienteService], (service: ServiceClienteService) => {
    expect(service).toBeTruthy();
  }));
});
