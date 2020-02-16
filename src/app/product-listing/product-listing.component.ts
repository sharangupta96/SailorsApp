import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ProductServiceService } from '../services/product-service.service';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss']
})
export class ProductListingComponent implements OnInit {
  productList: any;
  title = 'Fashion For' + '\n' + 'Upcoming Winter';
  description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore nesciunt' + '\n'
  + 'rerum modisimilique mollitia neque incidunt animi dolor officiis!';
  btnText = 'View Collection';
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
