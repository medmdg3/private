import { Project } from './projects.model';

export const PROJECTS: Project[] = [
  {
    id: 'design-system',
    name: 'Aurora Design System',
    short: 'A scalable Angular design system powering multiple microfrontends.',
    description:
      'Led architecture, component APIs, theming strategy, and accessibility. Published as internal NPM packages with semantic releases and documentation site.',
    details: [
      'Built 30+ accessible components with a11y test coverage',
      'Adopted CSS variables and tokens for theming',
      'Docs site with live playground and usage guidelines',
    ],
    tags: ['Angular', 'Design System', 'Storybook', 'A11y'],
    links: [
      { label: 'Docs', url: '#' },
    ],
  },
  {
    id: 'dashboard',
    name: 'Analytics Dashboard',
    short: 'Data-rich dashboard with real-time charts and filters.',
    description:
      'Implemented performant virtualized lists, memoized selectors, and batched rendering for smooth UX at scale.',
    details: [
      'Lazy-loaded modules and route prefetching',
      'Custom chart components optimized for change detection',
      'Role-based access controls and audit logging',
    ],
    tags: ['TypeScript', 'RxJS', 'Charts'],
    links: [
      { label: 'Case Study', url: '#' },
    ],
  },
  {
    id: 'site',
    name: 'Personal Site',
    short: 'This site — fast, accessible, and cleanly architected.',
    description:
      'Showcases my experience, projects, and timeline. Built with modern Angular standalone components and a light-blue theme.',
    details: [
      'Responsive layout and keyboard-friendly interactions',
      'Focus on readability and subtle motion',
    ],
    tags: ['Angular', 'SCSS'],
    links: [
      { label: 'Source', url: '#' },
    ],
  },
];

