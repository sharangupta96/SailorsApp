import { TestBed } from '@angular/core/testing';
import { Theme } from './theme';
import { light } from './theme';
import { ThemeService } from './theme.service';
import { SERVFAIL } from 'dns';
describe('ThemeService', () => {
  let service: ThemeService;
  beforeEach(() => {
    const themeStub = () => ({ properties: {} });
    TestBed.configureTestingModule({
      providers: [ThemeService]
    });
    service = TestBed.get(ThemeService);
  });
  it('can load instance', () => {
    expect(service).toBeTruthy();
  });
  it('isDarkTheme', () => {
    service.isDarkTheme();
    expect(service).toBeTruthy();
  });
  describe('setDarkTheme', () => {
    it('makes expected calls', () => {
      spyOn(service, 'setActiveTheme').and.callThrough();
      service.setDarkTheme();
      expect(service.setActiveTheme).toHaveBeenCalled();
    });
  });
  describe('setLightTheme', () => {
    it('makes expected calls', () => {
      spyOn(service, 'setActiveTheme').and.callThrough();
      service.setLightTheme();
      expect(service.setActiveTheme).toHaveBeenCalled();
    });
  });
});
