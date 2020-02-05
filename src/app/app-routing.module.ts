import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductDetailsGuard } from './product-details/product-details.guard';

const routes: Routes = [
  { path: 'home', component: ProductListingComponent },
  { path:'',component:ProductListingComponent},
  {
    path: 'product-details/:id',
    canActivate: [ProductDetailsGuard],
    component: ProductDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
