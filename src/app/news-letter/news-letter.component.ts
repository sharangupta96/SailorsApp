import { Component, OnInit, Input } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { WebnotificationService } from '../webnotification.service';

@Component({
  selector: 'app-news-letter',
  templateUrl: './news-letter.component.html',
  styleUrls: ['./news-letter.component.scss']
})
export class NewsLetterComponent implements OnInit {
  @Input() iconColor = false;
  isEnabled = this.swPush.isEnabled;
  isGranted = Notification.permission === 'granted';
  constructor( private swPush: SwPush, private webNotificationService: WebnotificationService) { }

  submitNotification(): void {
    this.webNotificationService.subscribeToNotification();
  }

  

  ngOnInit() {
  }

}
