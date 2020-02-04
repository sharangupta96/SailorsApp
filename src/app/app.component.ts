import { Component } from '@angular/core';
import { ThemeService } from './theme/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SailorsApp';
  iconColor = false;
  constructor(private themeService: ThemeService) { }
  ngOnInit() {
    this.themeService.setLightTheme();
  }
  toggleTheme() {
    if (this.themeService.isDarkTheme()) {
      this.themeService.setLightTheme();
      this.iconColor = false;
    } else {
      this.themeService.setDarkTheme();
      this.iconColor = true;
    }
  }
}
