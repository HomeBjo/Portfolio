import { Component } from '@angular/core';
import { TranslateModule} from '@ngx-translate/core';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss',
})
export class MySkillsComponent {
  iconPath = [
    'angular.svg',
    'typescript.svg',
    'javascript.svg',
    'html.svg',
    'css.svg',
    'django.svg',
    'postman.svg',
    'python.png',
  ];

  iconPath2 = [
    'firebase.svg',
    'git.svg',
    'scrum.svg',
    'API.svg',
    'github2.svg',
    'linux.png',
    'postgres.png',
    
  ];
  label = ['Angular', 'TypeScript', 'JavaScript', 'HTML', 'CSS','Django','Postman','Python'];
  label2 = ['Firebase', 'git', 'Scrum', 'Rest-API', 'GitHub','Linux','PostgresSQL'];

  constructor() {}
}
