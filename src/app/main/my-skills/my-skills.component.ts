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
  ];

  iconPath2 = [
    'firebase.svg',
    'git.svg',
    'scrum.svg',
    'API.svg',
    'github2.svg',
  ];
  label = ['Angular', 'Typescript', 'Javascript', 'HTML', 'CSS'];
  label2 = ['Firebase', 'Git', 'Scrum', 'Rest-API', 'Github'];

  constructor() {}
}
