import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ProductServiceService } from '../services/product-service.service';
import { ProductListingComponent } from './product-listing.component';
import { BannerComponent } from '../banner/banner.component';
import { of as observableOf } from 'rxjs';
describe('ProductListingComponent', () => {
  let component: ProductListingComponent;
  let fixture: ComponentFixture<ProductListingComponent>;
  beforeEach(() => {
    const productServiceServiceStub = () => ({
      getProductList: () => ({ subscribe: () => ({}) })
    });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ProductListingComponent, BannerComponent],
      providers: [
        {
          provide: ProductServiceService,
          useFactory: productServiceServiceStub
        }
      ]
    });
    fixture = TestBed.createComponent(ProductListingComponent);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      spyOn(component, 'getProductListing').and.callThrough();
      component.ngOnInit();
      expect(component.getProductListing).toHaveBeenCalled();
    });
  });
  describe('getProductListing', () => {
    it('makes expected calls', () => {
      const productServiceServiceStub: ProductServiceService = fixture.debugElement.injector.get(
        ProductServiceService
      );
      spyOn(productServiceServiceStub, 'getProductList').and.returnValue(observableOf('test'));
      component.getProductListing();
      expect(productServiceServiceStub.getProductList).toHaveBeenCalled();
    });
  });
});
