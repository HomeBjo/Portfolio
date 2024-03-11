import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {
  imgs = ['640x480macmbook-Kanban.png', '640x480 Desktop-Pollo.png'];

  description = [
    'Task Manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
    'Embark on an adventure with Pepe in the exciting game "El Polo Loco." Join Pepe in this captivating jump-and-run experience!',
  ];
  title = ['Join', 'El Pollo Loco'];
  usedTech = ['JavaScript | Html | CSS', 'JavaScript | Html | CSS'];
  links = [
    'https://xn--bjrnteneicken-jmb.de/join/html/login.html',
    'https://xn--bjrnteneicken-jmb.de/el_pollo_loco/index.html',
  ];
  gitLinks = [
    'https://github.com/HomeBjo/JOIN',
    'https://github.com/HomeBjo/el_pollo_loco',
  ];

  constructor() {
    if (typeof document !== 'undefined') {
      AOS.init();
    }
  }
}
