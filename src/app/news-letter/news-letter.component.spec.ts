import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { WebnotificationService } from '../webnotification.service';
import { NewsLetterComponent } from './news-letter.component';
describe('NewsLetterComponent', () => {
  let component: NewsLetterComponent;
  let fixture: ComponentFixture<NewsLetterComponent>;
  beforeEach(() => {
    const swPushStub = () => ({});
    const webnotificationServiceStub = () => ({
      subscribeToNotification: () => ({})
    });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [NewsLetterComponent],
      providers: [
        { provide: SwPush, useFactory: swPushStub },
        {
          provide: WebnotificationService,
          useFactory: webnotificationServiceStub
        }
      ]
    });
    fixture = TestBed.createComponent(NewsLetterComponent);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    component.ngOnInit();
    expect(component).toBeTruthy();
  });
  it('iconColor defaults to: false', () => {
    expect(component.iconColor).toEqual(false);
  });
  it('isEnabled defaults to: swPush.isEnabled', () => {
    const swPush = 'swPush';
    expect(component.isEnabled).toEqual(component[swPush].isEnabled);
  });
  describe('submitNotification', () => {
    it('makes expected calls', () => {
      const webnotificationServiceStub: WebnotificationService = fixture.debugElement.injector.get(
        WebnotificationService
      );
      spyOn(
        webnotificationServiceStub,
        'subscribeToNotification'
      ).and.callThrough();
      component.submitNotification();
      expect(
        webnotificationServiceStub.subscribeToNotification
      ).toHaveBeenCalled();
    });
  });
});
