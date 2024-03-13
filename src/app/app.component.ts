import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeaderComponent,FooterComponent,TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent   {
  // title = 'portfolio';
  // value = true;

  // private readonly availableLanguages = ['eng', 'ger'];
  // private readonly translateService = inject(TranslateService);
  // languageOptions: any[] = [];

  // ngOnInit(): void {
  //   this.translateService.addLangs(this.availableLanguages);
  //   this.changeValue();
  // }
  // changeLanguage(language: any) {
  //   this.translateService.use(language.value);
  // }
  

  // changeValue(){
  //   if (this.value) {
  //     this.translateService.use('eng');
  //     this.value = false;
  //   } else {
  //     this.translateService.use('ger');
  //     this.value = true;
  //   }
  // }

}

