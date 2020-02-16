import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductServiceService } from '../services/product-service.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  oneProduct: any;
  title = 'Single Product Page';
  description = 'Home' + '-> Category' + '-> Product Details';

  constructor(private route: ActivatedRoute, private productService: ProductServiceService) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.productService.getHero(id)
      .subscribe((product) => { this.oneProduct = product; });
  }

}
