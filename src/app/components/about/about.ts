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
    { name: 'C#', icon: 'fa-brands fa-microsoft' },
    { name: 'ASP.NET Core', icon: 'fa-solid fa-server' },
    { name: 'LINQ', icon: 'fa-solid fa-database' },
    { name: 'Angular', icon: 'fa-brands fa-angular' },
    { name: 'TypeScript', icon: 'fa-brands fa-js' },
    { name: 'JavaScript', icon: 'fa-brands fa-js' },
    { name: 'SQL', icon: 'fa-solid fa-table' },
    { name: 'HTML5', icon: 'fa-brands fa-html5' },
    { name: 'CSS / SCSS', icon: 'fa-brands fa-css3-alt' },
    { name: 'RxJS', icon: 'fa-solid fa-rotate' },
    { name: 'jQuery', icon: 'fa-solid fa-code' },
    { name: 'KnockoutJS', icon: 'fa-solid fa-layer-group' },
    { name: 'Git / GitHub', icon: 'fa-brands fa-github' },
    { name: 'Agile / Scrum', icon: 'fa-solid fa-arrows-spin' },
  ];

  familiar = [
    { name: 'CI/CD Pipelines', icon: 'fa-solid fa-gears' },
    { name: 'AWS', icon: 'fa-brands fa-aws' },
    { name: 'Azure DevOps', icon: 'fa-brands fa-microsoft' },
    { name: 'API Integration', icon: 'fa-solid fa-plug' },
  ];

  academic = [
    { name: 'React', icon: 'fa-brands fa-react' },
    { name: 'Python', icon: 'fa-brands fa-python' },
    { name: 'MongoDB', icon: 'fa-solid fa-leaf' },
    { name: 'Express', icon: 'fa-brands fa-node-js' },
    { name: 'C++', icon: 'fa-solid fa-c' },
  ];
}