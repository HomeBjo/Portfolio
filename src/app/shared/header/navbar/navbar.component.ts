import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FooterComponent } from '../../footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, FooterComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavBarComponent {
  @Input() showFiller = true;

  @Output() closeNavigationBar = new EventEmitter<boolean>();

  closeNavBar() {
    this.closeNavigationBar.emit(this.showFiller);
  }
}
