export interface Experience {
  id: string;
  role: string;
  company: string;
  companyColor: string;
  period: string;
  isCurrent: boolean;
  accomplishments: string[];
  techStack: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string | null;
  isStudyProject?: boolean;
  previewBg: string;
  previewIcon: string;
}

export interface Milestone {
  id: string;
  year: string;
  title: string;
  organization: string;
  type: 'education' | 'work' | 'project';
}

export interface SkillCategory {
  label: string;
  skills: string[];
}

export const experiences: Experience[] = [
  {
    id: 'exp-1',
    role: 'Software Engineer',
    company: 'Keka HR',
    companyColor: '#4F8EF7',
    period: 'July 2025 – Present',
    isCurrent: true,
    accomplishments: [
      'Led Attendance Onboarding Simplification across 5 configuration workflows, reducing customer onboarding time by 75% (30 to 7 days) through reusable Angular components, streamlined UI flows, and RxJS-based component communication.',
      'Delivered Garden Leave workflows for 2 enterprise clients with approximately 1,000 users each, applying bulk cancellation of future-dated Leave and WFH requests with transactional processing, atomic updates, and race-condition handling.',
      'Built the Duty Resumption return-to-work workflow across Angular frontend and .NET backend for batches of approximately 500 employees, including a new data model, leave-approval trigger, scheduled background job, and Inbox reminders.',
      'Worked extensively with NgRx and RxJS across Angular modules, implementing shared state management, selectors, actions, and reactive data flows, resolving nested-subscription issues to improve application stability.',
      'Owned resolution of L0/L1 production issues, root-causing a recurring attendance-adjustment synchronization issue between Inbox and Attendance Summary, delivering an interim fix and proposing an asynchronous service-based redesign.',
      'Optimized SQL Server queries, stored procedures, and views for high-volume HR workflows, improving query efficiency by approximately 40% and reducing execution time by an additional 30% for targeted operations.',
      'Built and maintained .NET/C# background workers and scheduled services for asynchronous employee workflow processing and automated operations, improving system reliability.',
    ],
    techStack: ['.NET', 'C#', 'SQL Server', 'Angular', 'RxJS', 'NgRx'],
  },
  {
    id: 'exp-2',
    role: 'Associate Software Engineer',
    company: 'Keka HR',
    companyColor: '#4F8EF7',
    period: 'January 2023 – June 2025',
    isCurrent: false,
    accomplishments: [
      'Developed a full-stack bulk employee-removal workflow for Shift Board using Angular, shared state management, and transactional backend processing with error handling on both ends.',
      'Implemented backend validation for WFH quota proration, calculating employee-specific request quotas based on capture scheme, joining date, and proration end date.',
      'Optimized SQL Server stored procedures by replacing SELECT * with required columns, improving query performance by 35%, and added role- and permission-based access control for internal HR modules.',
      'Refactored RxJS subscription handling across 5 Angular modules, eliminating nested subscriptions and fixing a stale-callback bug causing incorrect route navigation.',
      'Revamped the Leave Request module, introducing hourly and quarter-day leave workflows and migrating calendar layouts to CSS Grid for 300+ employees.',
    ],
    techStack: ['Angular', 'RxJS', '.NET', 'C#', 'SQL Server', 'SCSS'],
  },
];

export const milestones: Milestone[] = [
  {
    id: 'ms-1',
    year: '2017',
    title: '10th Grade',
    organization: 'Sri Chaitanya Techno School',
    type: 'education',
  },
  {
    id: 'ms-2',
    year: '2019',
    title: 'Intermediate',
    organization: 'Sri Chaitanya Junior Kalashala',
    type: 'education',
  },
  {
    id: 'ms-3',
    year: '2023',
    title: 'B.Tech in Computer Science',
    organization: 'Aditya College of Engineering and Technology',
    type: 'education',
  },
  {
    id: 'ms-4',
    year: 'Jan 2023',
    title: 'Associate Software Engineer',
    organization: 'Keka HR',
    type: 'work',
  },
  {
    id: 'ms-5',
    year: 'Jul 2025 - Present',
    title: 'Software Engineer',
    organization: 'Keka HR',
    type: 'work',
  },
];

export const projects: Project[] = [
  {
    id: 'proj-1',
    title: 'URL Shortener Service',
    description:
      'Shortens long URLs into shareable links via a REST API — built in C# with Clean Architecture across domain, infrastructure, and API layers, backed by PostgreSQL and EF Core. The real lesson was judging where those boundaries actually earned their keep versus where they were just ceremony for a domain this small.',
    tags: ['C#', 'Clean Architecture', 'PostgreSQL', 'EF Core'],
    githubUrl: 'https://github.com/Balanjaneyasharma/URL-Shortener-Service',
    liveUrl: null,
    previewBg: 'from-primary/20 to-accent/10',
    previewIcon: '🔗',
  },
  {
    id: 'proj-2',
    title: 'Input Components',
    description:
      'A playground of custom Angular input components, including a nested checkbox tree that propagates check-state both upward and downward without triggering recursive update loops. Building it surfaced real gaps in how Angular change detection behaves with recursive component trees — the kind of edge case off-the-shelf libraries tend to hide from you.',
    tags: ['Angular', 'TypeScript', 'RxJS'],
    githubUrl: 'https://github.com/Balanjaneyasharma/input-components',
    liveUrl: null,
    previewBg: 'from-red-500/20 to-orange-500/10',
    previewIcon: '☑️',
  },
  {
    id: 'proj-3',
    title: 'Core-JS',
    description:
      'Hand-rolled implementations of core JavaScript methods, matching native spec behavior on edge cases most tutorials skip — including how `Array.prototype.map` handles sparse arrays, how `thisArg` is threaded through callbacks, and how array-like inputs are handled. The project is less about recreating familiar methods and more about understanding the behavior hidden behind their simple APIs.',
    tags: ['JavaScript', 'TypeScript'],
    githubUrl: 'https://github.com/Balanjaneyasharma/Core-JS',
    liveUrl: null,
    isStudyProject: true,
    previewBg: 'from-yellow-500/20 to-amber-500/10',
    previewIcon: '⚙️',
  },
  {
    id: 'proj-4',
    title: 'Mock API Server',
    description:
      'An npm CLI that spins up a mock API server from a JSON schema — install it, define endpoints, and build frontend features without waiting on a backend. Getting the schema flexible enough for realistic nested responses without turning configuration into its own mini-language was the tricky part.',
    tags: ['Node.js', 'npm package'],
    githubUrl: 'https://github.com/Balanjaneyasharma/mock-api-server',
    liveUrl: null,
    previewBg: 'from-green-500/20 to-emerald-500/10',
    previewIcon: '📦',
  },
];

export const skillCategories: SkillCategory[] = [
  {
    label: 'Languages',
    skills: ['TypeScript', 'JavaScript', 'C#'],
  },
  {
    label: 'Frameworks / Libraries',
    skills: ['Angular', '.NET / ASP.NET Core', 'RxJS', 'NgRx', 'React', 'Jest'],
  },
  {
    label: 'Data / Backend',
    skills: ['SQL Server', 'MongoDB'],
  },
  {
    label: 'Tools',
    skills: ['Git', 'Azure DevOps', 'VS Code', 'Claude', 'Cursor'],
  },
];

export const aboutStats = [
  { label: 'Years Experience', value: 3, suffix: '+' },
  { label: 'Projects Shipped', value: 10, suffix: '+' },
  { label: 'Query Efficiency Gain', value: 45, suffix: '%' },
];