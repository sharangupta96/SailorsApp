import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of as observableOf, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  products = '../assets/data/generated.json';
  constructor(private http: HttpClient) { }

  getProductList(){
    return this.http.get(this.products);
  }
  getHero(id: number) {
    return of(this.http.get(this.products).subscribe((products: any) => {products.find(hero => hero.id === id)}));
  }

}
