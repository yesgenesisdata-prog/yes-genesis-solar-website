const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://example.com';

export default function sitemap() {
  const routes = [
    '',
    '/about',
    '/faq',
    '/subsidy',
    '/solar-scheme',
    '/solar-loan',
    '/calculator',
    '/privacy-policy',
  ];

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }));
}
