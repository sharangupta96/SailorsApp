import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { ProductServiceService } from './product-service.service';
describe('ProductServiceService', () => {
  let service: ProductServiceService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductServiceService]
    });
    service = TestBed.get(ProductServiceService);
  });
  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
  it('products defaults to: ../assets/data/generated.json', () => {
    expect(service.products).toEqual('../assets/data/generated.json');
  });
  describe('getProductList', () => {
    it('makes expected calls', () => {
      const httpTestingController = TestBed.get(HttpTestingController);
      service.getProductList().subscribe(res => {
        // expect(res).toEqual();
        const req = httpTestingController.expectOne(
          '../assets/data/generated.json'
        );
        expect(req.request.method).toEqual('GET');
        req.flush();
        httpTestingController.verify();
      });
    });
  });
  it('#getHero', () => {
    service.getHero(1);
  });
});
