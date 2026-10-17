import type { APIRoute } from 'astro';
import { site as siteInfo } from '../config';
import { withBase } from '../utils/paths';

export const GET: APIRoute = ({ site }) => {
  const url = (path: string) =>
    site ? new URL(withBase(path), site).href : withBase(path);

  const body = `# ${siteInfo.name}

> ${siteInfo.description}

## Portfolio
- [Art](${url('/')}): artwork, visual studies, and experiments.
- [Maker](${url('/maker')}): fabrication, physical projects, and creative making.

## Journals
- [Project Blog](${url('/project-blog')}): project development, experiments, decisions, and results.
- [Commonplace Blog](${url('/commonplace-blog')}): notes, techniques, references, and interconnected ideas.

## Information
- [About](${url('/about')}): introduction to the artist and the website.
- [Contact](${url('/contact')}): contact information and external links.
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
