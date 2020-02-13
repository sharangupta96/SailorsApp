import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductServiceService } from '../services/product-service.service';
import { ProductDetailsComponent } from './product-details.component';
describe('ProductDetailsComponent', () => {
  let component: ProductDetailsComponent;
  let fixture: ComponentFixture<ProductDetailsComponent>;
  beforeEach(() => {
    const activatedRouteStub = () => ({
      snapshot: { paramMap: { get: () => ({}) } }
    });
    const productServiceServiceStub = () => ({
      getHero: id => ({ subscribe: () => ({}) })
    });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ProductDetailsComponent],
      providers: [
        { provide: ActivatedRoute, useFactory: activatedRouteStub },
        {
          provide: ProductServiceService,
          useFactory: productServiceServiceStub
        }
      ]
    });
    fixture = TestBed.createComponent(ProductDetailsComponent);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      const productServiceServiceStub: ProductServiceService = fixture.debugElement.injector.get(
        ProductServiceService
      );
      spyOn(productServiceServiceStub, 'getHero').and.callThrough();
      component.ngOnInit();
      expect(productServiceServiceStub.getHero).toHaveBeenCalled();
    });
  });
});
