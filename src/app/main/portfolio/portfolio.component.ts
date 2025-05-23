import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule} from '@ngx-translate/core';
import AOS from 'aos';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule,TranslateModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
})
export class PortfolioComponent {
  imgs = ['videoflix_mockup2.jpg','dabubble.png','640x480macmbook-Kanban.png', '640x480 Desktop-Pollo.png'];

  description = ['A video platform for watching videos in different quality levels. Enjoy a user-friendly interface for an optimal video experience, whether you want to discover new content or watch your favorite videos.',
    'Chat-app inspired by Slack. Keep in contact with your colleagues and organize the next steps in your company.',
    'Task Manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
    'Embark on an adventure with Pepe in the exciting game "El Polo Loco." Join Pepe in this captivating jump-and-run experience!',
  ];

  title = ['Videoflix','DABubble','Join', 'El Pollo Loco'];
  usedTech = ['Django | Python | Angular | TypeScript','Angular | TypeScript | HTML | SCSS','JavaScript | TypeScript | HTML | SCSS', 'JavaScript | HTML | CSS'];
  links = ['https://videoflix.xn--bjrnteneicken-jmb.de/',
    'https://dabubble.xn--bjrnteneicken-jmb.de/index.html',
    'https://join.xn--bjrnteneicken-jmb.de/login',
    'https://xn--bjrnteneicken-jmb.de/el_pollo_loco/index.html',
  ];
  gitLinks = ['https://github.com/HomeBjo/Videoflix',
    'https://github.com/HomeBjo/DABubble.git',
    'https://github.com/HomeBjo/Join-Firebase',
    'https://github.com/HomeBjo/el_pollo_loco',
  ];
  projectKeys = ['videoflix','bubble','join', 'elpollo'];

  constructor() {
    if (typeof document !== 'undefined') {
      AOS.init();
    }
  }
}
