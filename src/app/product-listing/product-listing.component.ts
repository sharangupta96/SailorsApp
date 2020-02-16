import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../services/product-service.service';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss']
})
export class ProductListingComponent implements OnInit {
  productList: any;
  constructor(private productService: ProductServiceService) { }

  ngOnInit() {
    
    this.getProductListing();
  }



  getProductListing() {
    this.productService.getProductList().subscribe((data) => {
      this.productList = data;
    });
  }

}
