import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-experience',
  imports: [NgFor],
  templateUrl: './experience.html',
  styleUrl: './experience.scss'
})
export class Experience {
  jobs = [
    {
      title: 'Software Developer',
      company: 'ArkMed Group',
      period: '2021 — Present',
      location: 'Remote',
      highlights: [
        'Architected and maintained secure, high-availability Practice Management Systems using C# and .NET Core, ensuring strict HIPAA compliance and zero-defect data processing.',
        'Spearheaded frontend modernization by transitioning legacy platforms to Angular 19, implementing advanced state management with RxJS and Signals to support complex real-time workflows.',
        'Modernized legacy ASPX Forms to KnockoutJS, improving maintainability and user experience while maintaining full backward compatibility with existing business logic.',
        'Engineered scalable SQL database architectures to optimize complex queries, support robust reporting, and ensure reliable data telemetry across the internal network.',
        'Leveraged LINQ to SQL daily to design and optimize complex database queries, simplifying data access layers and significantly improving data retrieval performance across the application.',
        'Collaborated in an Agile/Scrum environment using Git/GitHub and CI/CD pipelines to rapidly deliver high-impact features and resolve critical production incidents.'
      ]
    }
  ];
}