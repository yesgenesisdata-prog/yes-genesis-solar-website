import Image from 'next/image';
import Link from 'next/link';
import Logo from './Logo';
import {
  SITE,
  SOCIAL_LINKS,
  FOOTER_QUICK_LINKS,
  FOOTER_USEFUL_LINKS,
} from '@/data/site';
import styles from './Footer.module.css';

function LinkColumn({ id, title, links }) {
  return (
    <nav aria-labelledby={id} className={styles.column}>
      <h2 id={id} className={styles.heading}>
        {title}
      </h2>
      <ul className={styles.links}>
        {links.map(({ label, href }) => (
          <li key={label}>
            <Link href={href} className={styles.link}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function ContactItem({ icon, iconSize, href, external = false, children }) {
  const content = (
    <>
      <span className={styles.contactIcon}>
        <Image src={icon} alt="" width={iconSize[0]} height={iconSize[1]} unoptimized />
      </span>
      <span className={styles.contactText}>{children}</span>
    </>
  );

  return (
    <li>
      <a
        href={href}
        className={styles.contactItem}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {content}
      </a>
    </li>
  );
}

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <ul className={styles.social} aria-label="Social media">
          {SOCIAL_LINKS.map(({ label, href, icon }) => (
            <li key={label}>
              <a
                href={href}
                className={styles.socialLink}
                aria-label={label}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={icon} alt="" width={40} height={40} unoptimized />
              </a>
            </li>
          ))}
        </ul>

        <div className={styles.columns}>
          <div className={styles.brand}>
            <Link href="/">
              <Logo />
            </Link>
          </div>

          <LinkColumn id="footer-quick-links" title="Quick Links" links={FOOTER_QUICK_LINKS} />
          <LinkColumn id="footer-useful-links" title="Useful Links" links={FOOTER_USEFUL_LINKS} />

          <section id="contact" aria-labelledby="footer-contact" className={`${styles.column} ${styles.contact}`}>
            <h2 id="footer-contact" className={`${styles.heading} ${styles.contactHeading}`}>
              Contact
            </h2>
            <ul className={styles.contactList}>
              <ContactItem icon="/assets/icons/contact-phone.svg" iconSize={[26, 25]} href={SITE.phone.href}>
                {SITE.phone.display}
              </ContactItem>
              <ContactItem icon="/assets/icons/contact-mail.svg" iconSize={[24, 20]} href={SITE.email.href}>
                {SITE.email.display}
              </ContactItem>
              <ContactItem
                icon="/assets/icons/contact-location.svg"
                iconSize={[22, 26]}
                href={SITE.mapsHref}
                external
              >
                <address>
                  {SITE.addressLines.map((line) => (
                    <span key={line} className={styles.addressLine}>
                      {line}
                    </span>
                  ))}
                </address>
              </ContactItem>
            </ul>
          </section>
        </div>
      </div>

      <div className={`container ${styles.legal}`}>
        <p className={styles.legalText}>
          <span>{SITE.legalName}</span>
          <span className={styles.separator} aria-hidden="true" />
          <span>ALL RIGHTS RESERVED</span>
        </p>
      </div>
    </footer>
  );
}
