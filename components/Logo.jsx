import Image from 'next/image';
import styles from './Logo.module.css';

export default function Logo({ priority = false }) {
  return (
    <span className={styles.logo}>
      <Image
        src="/assets/images/logo.png"
        alt="YES Genesis Fintech Pvt Ltd"
        width={230}
        height={90}
        sizes="(max-width: 480px) 132px, (max-width: 1099px) 150px, 230px"
        quality={90}
        priority={priority}
        className={styles.img}
      />
    </span>
  );
}