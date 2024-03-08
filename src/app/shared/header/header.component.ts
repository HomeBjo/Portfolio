import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavBarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, NavBarComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent {
  showFiller=true;
  showSideMenu(){
    this.showFiller = !this.showFiller
  }
}
