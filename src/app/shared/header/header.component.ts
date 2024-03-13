import { CommonModule } from '@angular/common';

import { NavBarComponent } from './navbar/navbar.component';

import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, NavBarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  showFiller = true;
  showSideMenu() {
    this.showFiller = !this.showFiller;
  }
  currentLang= 'ger'

  title = 'portfolio';
  value = true;

  private readonly availableLanguages = ['eng', 'ger'];
  private readonly translateService = inject(TranslateService);
  languageOptions: any[] = [];

  ngOnInit(): void {
    this.translateService.addLangs(this.availableLanguages);
    this.changeValue();
  }
  changeLanguage(language: any) {
    this.translateService.use(language.value);
  }

  changeValue() {
    if (this.currentLang === 'eng') {
      this.translateService.use('ger'); 
      this.currentLang = 'ger';
    } else {
      this.translateService.use('eng'); 
      this.currentLang = 'eng';
    }
  }
  
  
}
