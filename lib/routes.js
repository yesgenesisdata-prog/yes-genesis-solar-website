import { CATEGORIES, PRODUCTS } from '@/data/site';

// Pages that are linked from the design but not designed yet.
// They render a simple "coming soon" page so every link resolves.
const STATIC_PAGES = {
  about: 'About',
  calculator: 'Calculator',
  'privacy-policy': 'Privacy Policy',
  faq: 'FAQ',
};

const titleCase = (value) => value.charAt(0) + value.slice(1).toLowerCase();

export function getPlaceholderPages() {
  const pages = Object.entries(STATIC_PAGES).map(([path, title]) => ({ path, title }));

  CATEGORIES.forEach((c) => pages.push({ path: `categories/${c.slug}`, title: c.title }));
  PRODUCTS.forEach((p) =>
    pages.push({ path: `products/${p.slug}`, title: p.title.split(' ').map(titleCase).join(' ') })
  );

  return pages;
}

export function findPlaceholderPage(slugSegments) {
  const path = slugSegments.join('/');
  return getPlaceholderPages().find((page) => page.path === path) ?? null;
}
