import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of as observableOf, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  products = require('../../data/generated.json');
  constructor(private http: HttpClient) { }

  getProductList(){
    return observableOf(this.products);
  }
}
