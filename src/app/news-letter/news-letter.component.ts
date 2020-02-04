import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-news-letter',
  templateUrl: './news-letter.component.html',
  styleUrls: ['./news-letter.component.scss']
})
export class NewsLetterComponent implements OnInit {
  @Input() iconColor= false;
  constructor() { }

  ngOnInit() {
  }

}
