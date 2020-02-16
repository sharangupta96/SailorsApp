import { Component, OnInit } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { WebnotificationService } from '../webnotification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  isEnabled = this.swPush.isEnabled;
  isGranted = Notification.permission === 'granted';
  constructor( private swPush: SwPush, private webNotificationService: WebnotificationService) { }

  submitNotification(): void {
    this.webNotificationService.subscribeToNotification();
  }

  ngOnInit() {
  }

}
