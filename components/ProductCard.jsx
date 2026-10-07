import Image from 'next/image';
import Link from 'next/link';
import styles from './ProductCard.module.css';

export default function ProductCard({ product }) {
  const { slug, title, image, alt, objectPosition } = product;

  return (
    <Link href={`/products/${slug}`} className={styles.item}>
      <span className={styles.media}>
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(max-width: 767px) 50vw, (max-width: 1239px) 25vw, 282px"
          className={styles.image}
          style={{ objectPosition }}
        />
      </span>
      <h3 className={styles.title}>{title}</h3>
    </Link>
  );
}
