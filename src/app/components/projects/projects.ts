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
      githubUrl: null,
      status: 'live',
      highlight: true
    },
    {
      title: 'The Willing: Bound',
      description: 'A turn-based fantasy tactics game in the Fire Emblem tradition, built mobile-first for the browser. Chapter 1 plays end to end with grid movement over weighted terrain, the weapon triangle, hit, crit and double-attack math, a pre-combat forecast, enemy AI with distinct behaviours, permadeath, EXP and level-ups, and a seize objective. The rules engine never imports React, so the game logic stays testable on its own and the UI is free to change without touching the simulation.',
      tags: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS', 'Vercel'],
      liveUrl: 'https://fe-game-tau.vercel.app',
      githubUrl: null,
      status: 'live',
      highlight: true
    },
    {
      title: 'Mr. Awesome - Nonprofit Platform',
      description: 'A live nonprofit platform with donations, events, a photo gallery, news and sign-up forms, backed by an admin portal that lets non-technical staff run the entire site without touching code or files. Copy, imagery and page content are all editable in place, so the organization stays self-sufficient long after handoff rather than depending on a developer for every change.',
      tags: ['Next.js 16', 'React 19', 'TypeScript', 'Drizzle ORM', 'Neon Postgres', 'Vercel Blob', 'Tailwind CSS'],
      liveUrl: 'https://joinmrawesome.org',
      githubUrl: null,
      status: 'live',
      highlight: true
    },
    {
      title: 'Mortgage LO Training Simulator',
      description: 'An AI training tool where a mortgage loan officer practices a borrower discovery call against a simulated borrower, then receives two-lane feedback covering both what was objectively right or wrong and how they handled the craft of the call. One rule keeps it from becoming a flattery machine that sounds encouraging but teaches nothing: ground truth lives in code and the model never does the math, so a deterministic calculator scores every number while the model is confined to judging the conversation.',
      tags: ['Node.js', 'JavaScript', 'Claude AI', 'PostgreSQL', 'Railway'],
      liveUrl: 'https://mortgage-lo-training-simulator-production.up.railway.app',
      githubUrl: null,
      status: 'live',
      highlight: true
    },
    {
      title: 'Rota - Team Scheduling',
      description: 'A manager-first scheduling platform that replaced a paper-based process for a residential care team. Built around a publish loop, so a manager drafts a schedule privately, reviews it, and then publishes it to staff, with web push notifications when a published shift changes. Scoped and built to be used daily by a real manager rather than demoed.',
      tags: ['Next.js 16', 'React 19', 'TypeScript', 'Supabase', 'PostgreSQL', 'Web Push', 'shadcn/ui', 'Tailwind CSS'],
      liveUrl: 'https://scheduling-app-smoky.vercel.app',
      githubUrl: null,
      status: 'live',
      highlight: true
    },
    {
      title: 'Reeve - Repairs and Vehicle Scheduling',
      description: 'Home repair ticketing with photo attachments across many properties, paired with shared vehicle booking on a calendar that structurally cannot accept a double booking. Overlap prevention is enforced at the data layer rather than by UI validation, so two people cannot race each other into the same slot. Role-separated access for submitters and admins.',
      tags: ['Next.js 16', 'React 19', 'TypeScript', 'Auth.js', 'Neon Postgres', 'Drizzle ORM', 'Vercel Blob', 'Tailwind CSS'],
      liveUrl: 'https://ticket-system-two-pi.vercel.app',
      githubUrl: null,
      status: 'live',
      highlight: true
    },
    {
      title: 'PDF Editor - HIPAA-Compliant Forms Platform',
      description: 'A HIPAA-compliant web platform for uploading PDFs, defining fillable fields, and collecting submissions via auto-generated HTML forms. Built on AWS BAA-covered services only (Cognito + MFA, S3 + KMS, RDS, Lambda, SES, CloudWatch) with per-action audit logging, infrastructure-as-code via AWS CDK in C#, and synthetic-only PHI in development. Role-based access for Admin, Supervisor, BCBA, QIDP, RN, and DSP personas, each with dashboards scoped to their workflow.',
      tags: ['Angular', 'TypeScript', 'ASP.NET Core', 'C#', 'EF Core', 'PostgreSQL', 'AWS CDK', 'pdf-lib', 'HIPAA', 'Tailwind'],
      liveUrl: null,
      githubUrl: null,
      status: 'in-development',
      highlight: true
    },
    {
      title: 'dito-skills - Claude Code Skills Library',
      description: 'A personal Claude Code skills library packaged as an installable plugin: reusable workflows and disciplines for pair programming with AI, covering session open and close rituals, project scoping, diff review and deep research. Each skill is authored against real sessions and revised when it fails in practice, so the library reflects how the work actually goes rather than how it was imagined.',
      tags: ['Claude Code', 'Markdown', 'Developer Tooling', 'AI Workflows'],
      liveUrl: null,
      githubUrl: null,
      status: 'in-development',
      highlight: true
    }
  ];
}