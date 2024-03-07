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
  // isHovered: boolean = false;
  imgs = ['640x480macmbook-Kanban.png', '640x480 Desktop-Pollo.png'];

  description = [
    'Task Manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
    'Play a little jump and run by helping Pepe named Ell pollo loco on his adventure',
  ];
  title = ['Join','El pollo locco'];
  usedTech = ['JavaScript | Html | CSS','JavaScript | Html | CSS'];


 
  constructor(){
    if (typeof document !== 'undefined') {
      AOS.init(); 
    }
      }


  
  //  onHover() {
  //   this.isHovered = true;
  //   console.log('true')
  // }
  
  //  onMouseOut() {
  //   this.isHovered = false;
  //   console.log('false')
  // }
  
}