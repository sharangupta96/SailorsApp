import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of as observableOf, of} from 'rxjs';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  products: any = '../assets/data/generated.json';
  constructor(private http: HttpClient) { }

  getProductList(){
    return this.http.get<any>(this.products);
  }
  getHero(id: number) {
    return this.getProductList().pipe( map((productList) => {
      return productList.find(product => product.id === id);
    }))
  }

}
