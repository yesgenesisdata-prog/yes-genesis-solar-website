import { notFound } from 'next/navigation';
import PlaceholderPage from '@/components/PlaceholderPage';
import { findPlaceholderPage, getPlaceholderPages } from '@/lib/routes';

export const dynamicParams = false;

export function generateStaticParams() {
  return getPlaceholderPages().map(({ path }) => ({ slug: path.split('/') }));
}

export function generateMetadata({ params }) {
  const page = findPlaceholderPage(params.slug);
  return page ? { title: page.title } : {};
}

export default function Page({ params }) {
  const page = findPlaceholderPage(params.slug);
  if (!page) notFound();
  return <PlaceholderPage title={page.title} />;
}
