import Image from 'next/image';
import Link from 'next/link';
import styles from './CategoryCard.module.css';

export default function CategoryCard({ category }) {
  const { slug, title, count, image, alt, objectPosition } = category;

  return (
    <Link href={`/categories/${slug}`} className={styles.card}>
      <Image
        src={image}
        alt={alt}
        fill
        sizes="(max-width: 599px) 100vw, (max-width: 1239px) 33vw, 384px"
        className={styles.image}
        style={{ objectPosition }}
      />
      <div className={`${styles.label} ${count ? styles.labelWithCount : ''}`}>
        <h3 className={styles.title}>{title}</h3>
        {count && <p className={styles.count}>{count}</p>}
      </div>
    </Link>
  );
}
