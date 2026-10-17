// ────────────────────────────────────────────────────────────────────────────
//  Site configuration — edit these values to make the template your own.
//  Almost everything visitor-facing (titles, the brand, SEO, JSON-LD, llms.txt)
//  is derived from this file, so start here.
// ────────────────────────────────────────────────────────────────────────────

export interface NavItem {
  label: string;
  href: string;
}

export const site = {
  name: 'Bruna Souza',
  // Optional second-script name (e.g. a Chinese 中文名) shown under the brand and
  // in a couple of prose pages. Leave it '' to hide it everywhere. See the README
  // for how to self-host a font subset so it renders identically on every device.
  nameZh: '',
  title: 'Bruna Souza',
  description:
    'An interdisciplinary art and maker portfolio, project journal, and commonplace blog.',
};

// Main navigation. Home and Art are separate pages.
export const nav: NavItem[] = [
  { label: 'Art', href: '/art/' },
  { label: 'Maker', href: '/maker' },
  { label: 'Project Blog', href: '/project-blog' },
  { label: 'Commonplace Blog', href: '/commonplace-blog' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

// Social / external links shown in the sidebar and on the contact page. Replace
// the placeholders with your own. If you drop or add one, also update the
// matching <Icon> in Sidebar.astro and the list in Contact.astro.
export const social = {
  instagram: 'https://www.instagram.com/tech.master.3d/',
  github: 'https://github.com/sinsidev',
  whatsapp: '',
};
