'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './brand.module.css';

const BRANDS = {
  'adani-solar': {
    name: 'ADANI SOLAR',
    image: '/assets/images/solar-brands/adani-solar.png',
    description:
      'Adani Solar offers high-quality solar energy solutions designed for reliable and efficient power generation across residential, commercial and industrial applications.',
    type: 'Solar Panels',
    category: 'Solar Energy',
  },

  'vikram-solar': {
    name: 'VIKRAM SOLAR',
    image: '/assets/images/solar-brands/vikram-solar.png',
    description:
      'Vikram Solar provides advanced solar energy solutions focused on dependable performance, energy efficiency and long-term value.',
    type: 'Solar Panels',
    category: 'Solar Energy',
  },

  'waaree-solar': {
    name: 'WAAREE SOLAR',
    image: '/assets/images/solar-brands/waaree-solar.png',
    description:
      'Waaree Solar provides solar energy products and solutions designed to help homes, businesses and industries generate clean electricity.',
    type: 'Solar Panels',
    category: 'Solar Energy',
  },

  'renewsys-solar': {
    name: 'RENEWSYS SOLAR',
    image: '/assets/images/solar-brands/renewsys-solar.png',
    description:
      'RenewSys Solar offers solar energy products focused on quality, durability and dependable renewable power generation.',
    type: 'Solar Panels',
    category: 'Solar Energy',
  },

  'future-solar': {
    name: 'FUTURE SOLAR',
    image: '/assets/images/solar-brands/future-solar.png',
    description:
      'Future Solar delivers practical solar energy solutions designed for efficient power generation and sustainable energy needs.',
    type: 'Solar Panels',
    category: 'Solar Energy',
  },

  'microtek-solar': {
    name: 'MICROTEK SOLAR',
    image: '/assets/images/solar-brands/microtek-solar.png',
    description:
      'Microtek Solar provides reliable solar energy solutions for customers looking for efficient and dependable renewable power.',
    type: 'Solar Panels',
    category: 'Solar Energy',
  },

  'gautam-solar': {
    name: 'GAUTAM SOLAR',
    image: '/assets/images/solar-brands/gautam-solar.png',
    description:
      'Gautam Solar provides solar products focused on efficient energy generation, dependable performance and sustainable power solutions.',
    type: 'Solar Panels',
    category: 'Solar Energy',
  },
};

const SIZES = ['6', '6.5', '7', '7.5'];

export default function BrandPage({ params }) {
  const brand = BRANDS[params.brand] || BRANDS['adani-solar'];

  const [selectedSize, setSelectedSize] = useState('6');

  return (
    <main className={styles.page}>

      {/* =========================================
          PRODUCT / BRAND HERO
      ========================================= */}

      <section className={styles.hero}>

        {/* Back Button */}
        <Link
          href="/categories/solar-energy"
          className={styles.backButton}
          aria-label="Back to solar brands"
        >
          ←
        </Link>

        {/* Main Image */}
        <div className={styles.imageColumn}>
          <div className={styles.mainImageBox}>
            <img
              src={brand.image}
              alt={brand.name}
              className={styles.mainImage}
            />
          </div>

          {/* Small image previews */}
          <div className={styles.thumbnails}>
            <div className={`${styles.thumbnail} ${styles.activeThumbnail}`}>
              <img src={brand.image} alt={brand.name} />
            </div>

            <div className={styles.thumbnail}>
              <img src={brand.image} alt={brand.name} />
            </div>

            <div className={styles.thumbnail}>
              <img src={brand.image} alt={brand.name} />
            </div>
          </div>
        </div>

        {/* Product Information */}
        <div className={styles.details}>

          <span className={styles.category}>
            {brand.category}
          </span>

          <h1>{brand.name}</h1>

          <p className={styles.shortDescription}>
            {brand.description}
          </p>

          {/* Size */}
          <div className={styles.optionSection}>
            <h2>Size</h2>

            <div className={styles.sizeOptions}>
              {SIZES.map((size) => (
                <button
                  key={size}
                  type="button"
                  className={`${styles.sizeButton} ${
                    selectedSize === size
                      ? styles.selectedSize
                      : ''
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Product Type */}
          <div className={styles.infoRow}>
            <span className={styles.infoLabel}>Type</span>
            <span className={styles.infoValue}>
              {brand.type}
            </span>
          </div>

          {/* Availability */}
          <div className={styles.infoRow}>
            <span className={styles.infoLabel}>Available</span>
            <span className={styles.infoValue}>
              600 / 650 / 700 / 750
            </span>
          </div>

          {/* CTA */}
          <a
            href="#contact"
            className={styles.enquireButton}
          >
            ENQUIRE NOW
          </a>

        </div>
      </section>

      {/* =========================================
          ABOUT BRAND
      ========================================= */}

      <section className={styles.aboutSection}>

        <div className={styles.sectionHeading}>
          <span>01</span>
          <h2>About {brand.name}</h2>
        </div>

        <div className={styles.aboutGrid}>

          <div>
            <p>
              {brand.description}
            </p>

            <p>
              Choose a solar solution that fits your energy
              requirements and get support from YES Genesis
              throughout your solar journey.
            </p>
          </div>

          <div className={styles.aboutCard}>
            <span>Solar Energy</span>
            <strong>Clean & Reliable Power</strong>
            <p>
              Designed to support sustainable electricity
              generation for modern energy requirements.
            </p>
          </div>

        </div>
      </section>

      {/* =========================================
          KEY BENEFITS
      ========================================= */}

      <section className={styles.benefitsSection}>

        <div className={styles.sectionHeading}>
          <span>02</span>
          <h2>Why Choose Solar?</h2>
        </div>

        <div className={styles.benefitsGrid}>

          <div className={styles.benefitCard}>
            <div className={styles.benefitNumber}>01</div>
            <h3>Energy Efficient</h3>
            <p>
              Generate clean electricity and make better use
              of available solar energy.
            </p>
          </div>

          <div className={styles.benefitCard}>
            <div className={styles.benefitNumber}>02</div>
            <h3>Long Term Value</h3>
            <p>
              Solar solutions can help reduce dependence on
              conventional sources of electricity.
            </p>
          </div>

          <div className={styles.benefitCard}>
            <div className={styles.benefitNumber}>03</div>
            <h3>Sustainable</h3>
            <p>
              Harness renewable sunlight to support a cleaner
              and more sustainable energy future.
            </p>
          </div>

          <div className={styles.benefitCard}>
            <div className={styles.benefitNumber}>04</div>
            <h3>Reliable Solution</h3>
            <p>
              Choose trusted solar products for residential,
              commercial and industrial applications.
            </p>
          </div>

        </div>
      </section>

      {/* =========================================
          CONTACT CTA
      ========================================= */}

      <section
        id="contact"
        className={styles.ctaSection}
      >
        <div>
          <span>READY TO GO SOLAR?</span>

          <h2>
            Get the right solar solution
            for your needs.
          </h2>

          <p>
            Talk to YES Genesis and find the right solar
            product for your home or business.
          </p>
        </div>

        <a
          href="tel:+919517889999"
          className={styles.ctaButton}
        >
          CONTACT US
        </a>
      </section>

    </main>
  );
}