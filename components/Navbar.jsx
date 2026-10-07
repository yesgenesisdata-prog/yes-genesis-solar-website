'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';
import { NAV_LINKS, CONTACT_HREF } from '@/data/site';
import styles from './Navbar.module.css';

const isActive = (pathname, href) => (href === '/' ? pathname === '/' : pathname.startsWith(href));

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the drawer on navigation and on Escape.
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    if (!open) return undefined;
    const onKeyDown = (e) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={styles.header}>
      <div className={styles.bar}>
        <Link href="/" className={styles.brand} onClick={close}>
          <Logo priority />
        </Link>

        <nav className={styles.pill} aria-label="Primary">
          <ul className={styles.pillList}>
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={styles.link}
                  aria-current={isActive(pathname, href) ? 'page' : undefined}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link href={CONTACT_HREF} className={`${styles.glass} ${styles.contact}`}>
          CONTACT
        </Link>

        <button
          type="button"
          className={styles.toggle}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} aria-hidden="true" /> : <Menu size={26} aria-hidden="true" />}
        </button>
      </div>

      <div id="mobile-menu" className={styles.drawer} data-open={open} aria-hidden={!open}>
        <nav className={styles.drawerInner} aria-label="Mobile">
          <ul>
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={styles.drawerLink}
                  aria-current={isActive(pathname, href) ? 'page' : undefined}
                  tabIndex={open ? 0 : -1}
                  onClick={close}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href={CONTACT_HREF}
            className={`${styles.glass} ${styles.drawerContact}`}
            tabIndex={open ? 0 : -1}
            onClick={close}
          >
            CONTACT
          </Link>
        </nav>
      </div>
    </header>
  );
}
