import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [NgFor],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About {
  proficient = [
    { name: 'C#', icon: '💜' },
    { name: 'ASP.NET Core', icon: '🔷' },
    { name: 'LINQ', icon: '🔗' },
    { name: 'Angular', icon: '🅰️' },
    { name: 'TypeScript', icon: '📘' },
    { name: 'JavaScript', icon: '💛' },
    { name: 'SQL', icon: '🗄️' },
    { name: 'HTML5', icon: '🌐' },
    { name: 'CSS / SCSS', icon: '🎨' },
    { name: 'RxJS', icon: '⚡' },
    { name: 'jQuery', icon: '💲' },
    { name: 'KnockoutJS', icon: '🥊' },
    { name: 'MVC ', icon: '🏗️' },
    { name: 'Git / GitHub', icon: '🔀' },
    { name: 'API Integration', icon: '🔌' },
    { name: 'Agile / Scrum', icon: '🔄' },
  ];

  familiar = [
    { name: 'CI/CD Pipelines', icon: '🚀' },
    { name: 'AWS', icon: '☁️' },
    { name: 'Azure DevOps', icon: '🔵' },
  ];

  academic = [
    { name: 'React', icon: '⚛️' },
    { name: 'Python', icon: '🐍' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'Express', icon: '🚂' },
    { name: 'C++', icon: '⚙️' },
  ];
}