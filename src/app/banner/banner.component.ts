import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  @Input() title: string;
  @Input() description: string;
  @Input() btnText: string;
  url: string;
  constructor() { }

  ngOnInit() {
    this.url = window.location.pathname;
  }
  scrollToList() {
    const el = document.getElementById('productList');
    el.scrollIntoView();
  }
}
