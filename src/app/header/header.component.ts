import { Component, OnInit, Input } from '@angular/core';
import { ThemeService } from "../theme/theme.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() iconColor: boolean = false;
  constructor(private themeService: ThemeService) { }

  ngOnInit() {
  }

}
