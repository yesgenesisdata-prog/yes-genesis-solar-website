export const SITE = {
  name: 'YES Genesis',
  legalName: 'YES GENESIS FINTECH PRIVATE LIMITED',
  description:
    'YES Genesis Fintech Private Limited — explore solar and wind energy products including solar panels, batteries, inverters, pumpsets, VFDs, structures, lights and fencing.',
  phone: {
    display: '+91 9517889999',
    href: 'tel:+919517889999',
  },
  email: {
    display: 'Prabhakar.d@yesgenesis.in',
    href: 'mailto:Prabhakar.d@yesgenesis.in',
  },
  addressLines: [
    '#302.3rd Floor, H-NO.6-2-953, Krishna',
    'Plaza, Khairatabad, Hyderabad',
  ],
};

SITE.mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  SITE.addressLines.join(' ')
)}`;

// Destination for every "Contact" CTA
export const CONTACT_HREF = '/#contact';

// Main navigation
export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Subsidy', href: '/subsidy' },
  { label: 'Solar Scheme', href: '/solar-scheme' },
  { label: 'Solar Loan', href: '/solar-loan' },
];

// Footer quick links
export const FOOTER_QUICK_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Calculator', href: '/calculator' },
  { label: 'Solar Loan', href: '/solar-loan' },
  { label: 'Subsidy', href: '/subsidy' },
  { label: 'Contact', href: CONTACT_HREF },
];

// Footer useful links
export const FOOTER_USEFUL_LINKS = [
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'FAQ', href: '/faq' },
];

// Social media links
// TODO: Replace with the company's real profile URLs.
export const SOCIAL_LINKS = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/',
    icon: '/assets/icons/social-facebook.svg',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/',
    icon: '/assets/icons/social-instagram.svg',
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/',
    icon: '/assets/icons/social-youtube.svg',
  },
  {
    label: 'Twitter',
    href: 'https://twitter.com/',
    icon: '/assets/icons/social-twitter.svg',
  },
];

// ============================================================
// PRODUCT CATEGORIES
// ============================================================

export const CATEGORIES = [
  {
    slug: 'solar-energy',
    title: 'Solar Energy',
    count: '7 Products',
    href: '/products/solar-energy',
    image: '/assets/images/category-solar-energy.png',
    alt: 'Solar panels mounted in a green field under a blue sky',
    objectPosition: '50% 85%',
  },
  {
    slug: 'wind-energy',
    title: 'Wind Energy',
    href: '/products/wind-energy',
    image: '/assets/images/category-wind-energy.png',
    alt: 'Wind turbines against a blue sky',
    objectPosition: '50% 27%',
  },
  {
    slug: 'vertical-wind',
    title: 'Vertical Wind',
    href: '/products/vertical-wind',
    image: '/assets/images/category-vertical-wind.png',
    alt: 'Vertical-axis wind turbines in an urban setting',
    objectPosition: '50% 0%',
  },
];

// ============================================================
// TRENDING PRODUCTS
// ============================================================

// Order matches the Figma grid:
// Row 1 → left to right
// Row 2 → left to right

export const PRODUCTS = [
  {
    slug: 'solar-light',
    title: 'SOLAR LIGHT',
    href: '/products/solar-light',
    image: '/assets/images/product-solar-light.png',
    alt: 'Solar street light on a pole against a blue sky',
    objectPosition: '0% 50%',
  },
  {
    slug: 'solar-battery',
    title: 'SOLAR BATTERY',
    href: '/products/solar-battery',
    image: '/assets/images/product-solar-battery.png',
    alt: 'Solar battery storage units beside rooftop solar panels',
  },
  {
    slug: 'solar-pumpset',
    title: 'SOLAR PUMPSET',
    href: '/products/solar-pumpset',
    image: '/assets/images/product-solar-pumpset.png',
    alt: 'Solar pumpset installation with solar panels',
  },
  {
    slug: 'solar-panel',
    title: 'SOLAR PANEL',
    href: '/products/solar-panel',
    image: '/assets/images/product-solar-panel.png',
    alt: 'Rows of solar panels in a green field',
  },
  {
    slug: 'solar-structure',
    title: 'SOLAR STRUCTURE',
    href: '/products/solar-structure',
    image: '/assets/images/product-solar-structure.png',
    alt: 'Solar panel mounting structures in a field',
    objectPosition: '50% 64%',
  },
  {
    slug: 'solar-inverter',
    title: 'SOLAR INVERTER',
    href: '/products/solar-inverter',
    image: '/assets/images/product-solar-inverter.png',
    alt: 'Solar inverter mounted on a wall beside solar panels',
  },
  {
    slug: 'solar-vfd',
    title: 'SOLAR VFD',
    href: '/products/solar-vfd',
    image: '/assets/images/product-solar-vfd.png',
    alt: 'Solar VFD drive unit with solar panels',
  },
  {
    slug: 'solar-fencing',
    title: 'SOLAR FENCING',
    href: '/products/solar-fencing',
    image: '/assets/images/product-solar-fencing.png',
    alt: 'Solar panels installed in a fenced field',
  },
];