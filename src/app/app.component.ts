import { Component } from '@angular/core';
import { ThemeService } from './theme/theme.service';
import { Router } from '@angular/router';
import { SwUpdate } from '@angular/service-worker';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'SailorsApp';
  iconColor = false;
  constructor(private themeService: ThemeService,  private router: Router, private swUpdate: SwUpdate) { }
  ngOnInit() {
    this.reloadCache();
    this.themeService.setLightTheme();
    this.router.navigateByUrl('/');
  }
  reloadCache(){
    if(this.swUpdate.isEnabled){
      this.swUpdate.available.subscribe(()=>{
        if(confirm('New version available! would you like to update?  ')){
          window.location.reload();
        }
      })
    }
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
