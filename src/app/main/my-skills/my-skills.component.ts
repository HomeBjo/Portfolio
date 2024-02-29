import { Component } from '@angular/core';

@Component({
  selector: 'app-my-skills',
  standalone: true,
  imports: [],
  templateUrl: './my-skills.component.html',
  styleUrl: './my-skills.component.scss'
})
export class MySkillsComponent {

iconPath=['skill_angular.png','skill_ts.png',
'skill_js.png','skill_html.png','skill_css.png',]

iconPath2=['skill_firebase.png','skill_git.png',
'skill_scrum.png','skill_rest_api.png','skill_material.png',]

  constructor(){
    
  }
}
