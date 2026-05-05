import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [NgFor, NgIf],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects {
  projects = [
    {
      title: 'Support Ticket System',
      description: 'A full enterprise support ticket platform built from scratch. End users submit bugs, feature requests and questions via a MVC/KnockoutJS frontend. Internal management system built in Angular with a two-way GitHub integration that creates issues and pulls back live status, assignee and progress data. Includes a rich messaging system, image uploads, metrics dashboard, expandable cards, and email/SMS alerts based on user permissions.',
      tags: ['Angular', 'KnockoutJS', 'C#', 'ASP.NET Core', 'SQL', 'GitHub API', 'MVC', 'LINQ'],
      liveUrl: null,
      githubUrl: null,
      status: 'professional',
      highlight: true
    },
    {
      title: 'Critical News Feed',
      description: 'A fully functioning social media feature built for enterprise use. Supports posts with images, files and links, rich text formatting, comments, reactions with a modal showing who reacted and how, pinning, company-wide pins, and full editing of posts and comments.',
      tags: ['Angular', 'C#', 'ASP.NET Core', 'SQL', 'LINQ', 'RxJS'],
      liveUrl: null,
      githubUrl: null,
      status: 'professional',
      highlight: false
    },
    {
      title: 'Application & Hiring System',
      description: 'A dynamic hiring platform where end users build custom job applications, track applicants through the hiring pipeline, create interview questions, and begin the onboarding process — all from a single interface.',
      tags: ['Angular', 'C#', 'ASP.NET Core', 'SQL', 'LINQ', 'MVC'],
      liveUrl: null,
      githubUrl: null,
      status: 'professional',
      highlight: false
    },
    {
      title: 'Project Board',
      description: 'A Trello-inspired kanban board built for enterprise project tracking. Users create projects and manage them through fully customizable columns, giving teams a clear visual overview of project progress.',
      tags: ['Angular', 'C#', 'ASP.NET Core', 'SQL', 'LINQ'],
      liveUrl: null,
      githubUrl: null,
      status: 'professional',
      highlight: false
    },
    {
      title: 'Personal Portfolio Site',
      description: 'A fullstack personal portfolio site featuring an AI-powered assistant that answers questions about me, a community forum for open discussion, and a clean modern UI built from scratch.',
      tags: ['Angular', 'TypeScript', 'C#', 'ASP.NET Core', 'SQL Server', 'Claude AI', 'SCSS'],
      liveUrl: null,
      githubUrl: 'https://github.com/bward021/portfolio-frontend',
      status: 'live',
      highlight: true
    },
    {
      title: 'Coming Soon',
      description: 'A new project is currently in the works. Check back soon!',
      tags: [],
      liveUrl: null,
      githubUrl: null,
      status: 'coming-soon',
      highlight: false
    }
  ];
}