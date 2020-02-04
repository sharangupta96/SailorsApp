import { Component, OnInit } from '@angular/core';
import { ThemeService } from "../theme/theme.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // iconColor = false;
  constructor(private themeService: ThemeService) { }

  ngOnInit() {
    // this.themeService.setLightTheme();
  }
  // toggleTheme() {
  //   if (this.themeService.isDarkTheme()) {
  //     this.themeService.setLightTheme();
  //     this.iconColor = false;
  //   } else {
  //     this.themeService.setDarkTheme();
  //     this.iconColor = true;
  //   }
  // }

}
