import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { BannerComponent } from './banner.component';
describe('BannerComponent', () => {
  let component: BannerComponent;
  let fixture: ComponentFixture<BannerComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [BannerComponent]
    });
    fixture = TestBed.createComponent(BannerComponent);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
  it('#ngOnInit', () => {
    spyOn(component, 'ngOnInit').and.callThrough();
    component.ngOnInit();
    expect(component.ngOnInit).toHaveBeenCalled();
  });
  it('#scrollToList', () => {
    const createElem = document.createElement('div');
    document.getElementById = jasmine.createSpy('HTML Element').and.returnValue(createElem);
    spyOn(component, 'scrollToList').and.callThrough();
    component.scrollToList();
    expect(component.scrollToList).toHaveBeenCalled();
  });
});
