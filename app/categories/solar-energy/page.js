import Link from 'next/link';
import styles from './solarEnergy.module.css';

const SOLAR_BRANDS = [
  {
    slug: 'adani-solar',
    name: 'ADANI SOLAR',
    image: '/assets/images/solar-brands/adani-solar.png',
  },
  {
    slug: 'vikram-solar',
    name: 'VIKRAM SOLAR',
    image: '/assets/images/solar-brands/vikram-solar.png',
  },
  {
    slug: 'waaree-solar',
    name: 'WAAREE SOLAR',
    image: '/assets/images/solar-brands/waaree-solar.png',
  },
  {
    slug: 'renewsys-solar',
    name: 'RENEWSYS SOLAR',
    image: '/assets/images/solar-brands/renewsys-solar.png',
  },
  {
    slug: 'future-solar',
    name: 'FUTURE SOLAR',
    image: '/assets/images/solar-brands/future-solar.png',
  },
  {
    slug: 'microtek-solar',
    name: 'MICROTEK SOLAR',
    image: '/assets/images/solar-brands/microtek-solar.png',
  },
  {
    slug: 'gautam-solar',
    name: 'GAUTAM SOLAR',
    image: '/assets/images/solar-brands/gautam-solar.png',
  },
];

export default function SolarEnergyPage() {
  return (
    <main className={styles.page}>

      {/* Page Introduction */}
      <section className={styles.intro}>
        <h1>Solar Energy</h1>

        <p>
          Explore trusted solar brands and discover reliable solutions
          for residential, commercial and industrial energy needs.
        </p>
      </section>

      {/* Solar Brands */}
      <section className={styles.section}>
        <h2>Our Solar Brands</h2>

        <div className={styles.grid}>
          {SOLAR_BRANDS.map((brand) => (
            <Link
              key={brand.slug}
              href={`/categories/solar-energy/${brand.slug}`}
              className={styles.card}
            >
              <div className={styles.imageBox}>
                <img
                  src={brand.image}
                  alt={brand.name}
                />
              </div>

              <p>{brand.name}</p>
            </Link>
          ))}
        </div>
      </section>

    </main>
  );
}