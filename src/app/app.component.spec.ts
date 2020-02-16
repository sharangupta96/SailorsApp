import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ThemeService } from './theme/theme.service';
import { Router } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';
import { AppComponent } from './app.component';
describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(() => {
    const themeServiceStub = () => ({
      setLightTheme: () => ({}),
      isDarkTheme: () => ({}),
      setDarkTheme: () => ({})
    });
    const routerStub = () => ({ navigateByUrl: string => ({}) });
    const swUpdateStub = () => ({
      isEnabled: {},
      available: { subscribe: () => ({}) }
    });
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [AppComponent],
      providers: [
        { provide: ThemeService, useFactory: themeServiceStub },
        { provide: Router, useFactory: routerStub },
        { provide: SwUpdate, useFactory: swUpdateStub }
      ]
    });
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });
  it('can load instance', () => {
    expect(component).toBeTruthy();
  });
  it('title defaults to: SailorsApp', () => {
    expect(component.title).toEqual('SailorsApp');
  });
  it('iconColor defaults to: false', () => {
    expect(component.iconColor).toEqual(false);
  });
  describe('ngOnInit', () => {
    it('makes expected calls', () => {
      const themeServiceStub: ThemeService = fixture.debugElement.injector.get(
        ThemeService
      );
      const routerStub: Router = fixture.debugElement.injector.get(Router);
      spyOn(component, 'reloadCache').and.callThrough();
      spyOn(themeServiceStub, 'setLightTheme').and.callThrough();
      spyOn(routerStub, 'navigateByUrl').and.callThrough();
      component.ngOnInit();
      expect(component.reloadCache).toHaveBeenCalled();
      expect(themeServiceStub.setLightTheme).toHaveBeenCalled();
      expect(routerStub.navigateByUrl).toHaveBeenCalled();
    });
  });
  describe('toggleTheme', () => {
    it('makes expected calls', () => {
      const themeServiceStub: ThemeService = fixture.debugElement.injector.get(
        ThemeService
      );
      spyOn(themeServiceStub, 'isDarkTheme').and.callThrough();
      spyOn(themeServiceStub, 'setLightTheme').and.callThrough();
      component.toggleTheme();
      expect(themeServiceStub.isDarkTheme).toHaveBeenCalled();
      expect(themeServiceStub.setLightTheme).toHaveBeenCalled();
    });
    it('makes expected calls else path', () => {
      const themeServiceStub: ThemeService = fixture.debugElement.injector.get(
        ThemeService
      );
      spyOn(themeServiceStub, 'isDarkTheme').and.returnValue(false);
      spyOn(themeServiceStub, 'setDarkTheme').and.callThrough();
      component.toggleTheme();
      expect(themeServiceStub.isDarkTheme).toHaveBeenCalled();
      expect(themeServiceStub.setDarkTheme).toHaveBeenCalled();
    });
  });
});
