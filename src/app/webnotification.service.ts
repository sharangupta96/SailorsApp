import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SwPush } from '@angular/service-worker';


@Injectable({
  providedIn: 'root'
})
export class WebnotificationService {
  readonly VAPID_PUBLIC_KEY = "BDO1eFArZ8jO_wqjpZXrXgEHHR1ifQYwV8R4hvw8lXRcdO0VOuWzHFbSbROtI3iKdBeaknk_4D6fLsa_FH2Jjh4";
  private baseUrl = 'http://127.0.0.1:8081/notifications';

  constructor(private http: HttpClient, private swPush: SwPush) { }
  subscribeToNotification() {
    this.swPush.requestSubscription({
        serverPublicKey: this.VAPID_PUBLIC_KEY
    })
    .then(sub => this.sendToServer(sub))
    .catch(err => console.error('Could not subscribe to notifications', err));
  }
  sendToServer(params: any) {
    this.http.post(this.baseUrl, { notification : params }).subscribe();
  }

}
