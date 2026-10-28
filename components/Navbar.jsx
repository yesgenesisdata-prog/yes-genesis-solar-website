
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import Logo from "./Logo";
import { NAV_LINKS, CONTACT_HREF } from "@/data/site";
import styles from "./Navbar.module.css";

const isActive = (pathname, href) =>
  href === "/" ? pathname === "/" : pathname.startsWith(href);

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header className={styles.header}>
      <div className={styles.bar}>
        <Link
          href="/"
          className={styles.brand}
          aria-label="YES Genesis home"
          onClick={closeMenu}
        >
          <Logo priority />
        </Link>

        <nav className={styles.desktopNav} aria-label="Main navigation">
          <ul className={styles.navList}>
            {NAV_LINKS.map(({ label, href }) => {
              const active = isActive(pathname, href);

              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`${styles.navLink} ${
                      active ? styles.active : ""
                    }`}
                    aria-current={active ? "page" : undefined}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <Link href={CONTACT_HREF} className={styles.contactButton}>
          <span>Contact Us</span>
          <ArrowUpRight size={18} strokeWidth={2.2} />
        </Link>

        <button
          type="button"
          className={styles.menuButton}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen((previous) => !previous)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={`${styles.mobilePanel} ${
          open ? styles.mobilePanelOpen : ""
        }`}
        aria-hidden={!open}
      >
        <nav className={styles.mobileNav} aria-label="Mobile navigation">
          {NAV_LINKS.map(({ label, href }) => {
            const active = isActive(pathname, href);

            return (
              <Link
                key={href}
                href={href}
                className={`${styles.mobileLink} ${
                  active ? styles.mobileLinkActive : ""
                }`}
                aria-current={active ? "page" : undefined}
                tabIndex={open ? 0 : -1}
                onClick={closeMenu}
              >
                {label}
                <ArrowUpRight size={17} />
              </Link>
            );
          })}

          <Link
            href={CONTACT_HREF}
            className={styles.mobileContact}
            tabIndex={open ? 0 : -1}
            onClick={closeMenu}
          >
            Contact Us
            <ArrowUpRight size={18} />
          </Link>
        </nav>
      </div>
    </header>
  );
}
