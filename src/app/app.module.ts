import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { BannerComponent } from './banner/banner.component';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { NewsLetterComponent } from './news-letter/news-letter.component';
import { FooterComponent } from './footer/footer.component';
import { ThemeModule } from './theme/theme.module';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    ProductListingComponent,
    NewsLetterComponent,
    FooterComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    HttpClientModule,
    ThemeModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    BrowserAnimationsModule,
    BsDropdownModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
