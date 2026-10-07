import Link from 'next/link';
import styles from './PlaceholderPage.module.css';

// Shown for routes that are linked from the Figma design but not designed yet.
export default function PlaceholderPage({ title, text = 'This page is coming soon.' }) {
  return (
    <section className={`container ${styles.section}`}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.text}>{text}</p>
      <Link href="/" className={styles.button}>
        Back to Home
      </Link>
    </section>
  );
}
