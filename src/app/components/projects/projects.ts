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
      title: 'OptoMiser Practice Management System',
      description: 'Enterprise-scale healthcare practice management platform covering accounting, medical notes, insurance management, billing, client portal, and HR portal. Joined an active production team to build new features, resolve bugs, and maintain a HIPAA-compliant codebase serving real clinical users daily. Delivered 10+ complete features end-to-end, improved multiple query performances by 15%+, and modernized legacy ASPX forms to current technologies including KnockoutJS and Angular.',
      tags: ['C#', 'ASP.NET Core', 'KnockoutJS', 'Angular', 'SQL', 'LINQ', 'HIPAA', 'AWS'],
      liveUrl: null,
      githubUrl: null,
      status: 'professional',
      highlight: true
    },
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
      description: 'A dynamic hiring platform where end users build custom job applications, track applicants through the hiring pipeline, create interview questions, and begin the onboarding process, all from a single interface.',
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
      tags: ['Angular', 'TypeScript', 'C#', 'ASP.NET Core', 'PostgreSQL', 'Claude AI', 'SCSS'],
      liveUrl: 'https://bwarddev.com',
      githubUrl: 'https://github.com/bward021/portfolio-frontend',
      status: 'live',
      highlight: true
    },{
      title: 'Spectral - ABA Therapy Tracker',
      description: 'My capstone project at Bottega Tech. A fullstack ABA therapy management platform for tracking client behavioral data in real time. Features discrete trial, frequency, and duration data collection, client and employee management, and dynamic charting. Recently modernized from MySQL to PostgreSQL, upgraded to React 19, and fully redesigned with a custom dark/light mode UI. Demo login - Email: admin@spectral.com Password: admin123',
      tags: ['React', 'Python', 'Flask', 'PostgreSQL', 'SQLAlchemy', 'Chart.js', 'SCSS'],
      liveUrl: 'https://bw-spectral-rfe.netlify.app/',
      githubUrl: 'https://github.com/bward021/spectral-fe-react',
      status: 'live',
      highlight: true
    },
    {
      title: 'Cairn - Community for Autism Parents',
      description: 'A calm-by-design community platform for parents of autistic children, with autistic adults welcomed as peers. Better Auth (email/password + Google OAuth) with adults-only attestation enforced at the database boundary, threaded posts with R2 image attachments and a five-reaction set surfaced via natural-language reactor lines, report-with-reason moderation with banned-term and crisis-signal scanners, friction-gated 1:1 DMs that require mutual engagement, topic/age/region groups with scoped moderators, in-context language nudges that link to long-form explainers, and an admin broadcast composer with per-recipient personalization. Polling-based real-time, deliberately — no WebSockets.',
      tags: ['Next.js', 'React 19', 'TypeScript', 'Prisma', 'PostgreSQL', 'Better Auth', 'Cloudflare R2', 'Upstash Redis', 'Resend', 'Vercel'],
      liveUrl: 'https://cairn.community',
      githubUrl: 'https://github.com/bward021/cairn',
      status: 'live',
      highlight: true
    },
    {
      title: 'PDF Editor - HIPAA-Compliant Forms Platform',
      description: 'A HIPAA-compliant web platform for uploading PDFs, defining fillable fields, and collecting submissions via auto-generated HTML forms. Built on AWS BAA-covered services only (Cognito + MFA, S3 + KMS, RDS, Lambda, SES, CloudWatch) with per-action audit logging, infrastructure-as-code via AWS CDK in C#, and synthetic-only PHI in development. Role-based access for Admin, Supervisor, BCBA, QIDP, RN, and DSP personas, each with dashboards scoped to their workflow.',
      tags: ['Angular', 'TypeScript', 'ASP.NET Core', 'C#', 'EF Core', 'PostgreSQL', 'AWS CDK', 'pdf-lib', 'HIPAA', 'Tailwind'],
      liveUrl: null,
      githubUrl: 'https://github.com/bward021/pdf-editor',
      status: 'in-development',
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