
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Sun,
  ShieldCheck,
  Leaf,
  Zap,
  House,
  Building2,
  Factory,
  CheckCircle2,
} from "lucide-react";

import styles from "./solarEnergy.module.css";

const SOLAR_BRANDS = [
  {
    slug: "adani-solar",
    name: "ADANI SOLAR",
    image: "/assets/images/solar-brands/adani-solar.png",
    description: "Solar panel solutions",
  },
  {
    slug: "vikram-solar",
    name: "VIKRAM SOLAR",
    image: "/assets/images/solar-brands/vikram-solar.png",
    description: "Solar module technology",
  },
  {
    slug: "waaree-solar",
    name: "WAAREE SOLAR",
    image: "/assets/images/solar-brands/waaree-solar.png",
    description: "Solar energy solutions",
  },
  {
    slug: "renewsys-solar",
    name: "RENEWSYS SOLAR",
    image: "/assets/images/solar-brands/renewsys-solar.png",
    description: "Solar modules and components",
  },
  {
    slug: "future-solar",
    name: "FUTURE SOLAR",
    image: "/assets/images/solar-brands/future-solar.png",
    description: "Solar energy products",
  },
  {
    slug: "microtek-solar",
    name: "MICROTEK SOLAR",
    image: "/assets/images/solar-brands/microtek-solar.png",
    description: "Solar power solutions",
  },
  {
    slug: "gautam-solar",
    name: "GAUTAM SOLAR",
    image: "/assets/images/solar-brands/gautam-solar.png",
    description: "Solar panel technology",
  },
];

const BENEFITS = [
  {
    icon: Zap,
    title: "Energy savings",
    description:
      "Explore solar solutions that can help reduce your dependence on grid electricity.",
  },
  {
    icon: Leaf,
    title: "Cleaner energy",
    description:
      "Use sunlight to generate electricity and support a more sustainable energy future.",
  },
  {
    icon: ShieldCheck,
    title: "Explore trusted brands",
    description:
      "Compare the listed solar brands and explore their available product information.",
  },
];

const APPLICATIONS = [
  {
    icon: House,
    title: "Residential",
    description: "Solar solutions for homes and rooftops.",
  },
  {
    icon: Building2,
    title: "Commercial",
    description: "Explore options for offices and commercial properties.",
  },
  {
    icon: Factory,
    title: "Industrial",
    description: "Discover solar products for industrial applications.",
  },
];

export default function SolarEnergyPage() {
  return (
    <main className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroGlow} aria-hidden="true" />

        <div className={styles.container}>
          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <div className={styles.eyebrow}>
                <Sun size={16} />
                <span>POWERING A BRIGHTER FUTURE</span>
              </div>

              <h1>
                Discover the power
                <br />
                of <span>solar energy.</span>
              </h1>

              <p className={styles.heroDescription}>
                Explore solar brands and discover energy solutions for
                homes, businesses and industrial applications. Find products
                that match your energy requirements.
              </p>

              <div className={styles.heroActions}>
                <a href="#solar-brands" className={styles.primaryButton}>
                  Explore Solar Brands
                  <ArrowRight size={19} />
                </a>

                <a href="#solar-applications" className={styles.secondaryButton}>
                  Explore Applications
                </a>
              </div>

              <div className={styles.heroNote}>
                <CheckCircle2 size={17} />
                <span>Explore solar brands in one place</span>
              </div>
            </div>

            <div className={styles.heroVisual} aria-hidden="true">
              <div className={styles.visualSun}>
                <Sun size={43} strokeWidth={1.5} />
              </div>


<div className={`${styles.visualOrb} ${styles.visualOrbOne}`} />
<div className={`${styles.visualOrb} ${styles.visualOrbTwo}`} />


              <div className={styles.panelGround}>
                <div className={styles.panelArray}>
                  {Array.from({ length: 12 }, (_, index) => (
                    <span key={index} />
                  ))}
                </div>
              </div>

              <div className={styles.visualInfo}>
                <span className={styles.visualInfoIcon}>
                  <Zap size={19} />
                </span>
                <div>
                  <small>SOLAR ENERGY</small>
                  <strong>Powered by sunlight</strong>
                </div>
                <Sun size={21} className={styles.visualInfoSun} />
              </div>

              <div className={styles.visualLabel}>
                <span className={styles.labelDot} />
                A brighter energy future
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className={styles.introSection}>
        <div className={styles.container}>
          <div className={styles.introGrid}>
            <div>
              <span className={styles.sectionEyebrow}>SOLAR ENERGY</span>
              <h2>
                Find the right solar brand
                <span> for your needs.</span>
              </h2>
            </div>

            <p>
              Explore our range of listed solar brands, review their available
              product information and discover options for different energy
              requirements.
            </p>
          </div>

          <div className={styles.benefitGrid}>
            {BENEFITS.map(({ icon: Icon, title, description }, index) => (
              <article className={styles.benefitCard} key={title}>
                <div className={styles.benefitIcon}>
                  <Icon size={23} strokeWidth={1.8} />
                </div>

                <span className={styles.benefitNumber}>
                  0{index + 1}
                </span>

                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SOLAR BRANDS */}
      <section
        className={styles.brandsSection}
        id="solar-brands"
      >
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <div>
              <span className={styles.sectionEyebrow}>
                OUR SOLAR PARTNERS
              </span>

              <h2>
                Explore our <span>solar brands.</span>
              </h2>

              <p>
                Browse the brands below to learn more about their solar
                products and solutions.
              </p>
            </div>

            <div className={styles.brandCount}>
              <Sun size={20} />
              <span>
                <strong>{SOLAR_BRANDS.length}</strong>
                <small>Listed brands</small>
              </span>
            </div>
          </div>

          <div className={styles.brandGrid}>
            {SOLAR_BRANDS.map((brand, index) => (
              <Link
                key={brand.slug}
                href={`/categories/solar-energy/${brand.slug}`}
                className={styles.brandCard}
                aria-label={`Explore ${brand.name}`}
              >
                <div className={styles.brandCardTop}>
                  <span className={styles.brandIndex}>
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className={styles.brandArrow}>
                    <ArrowUpRight size={19} />
                  </span>
                </div>

                <div className={styles.brandImageBox}>
                  <img
                    src={brand.image}
                    alt={`${brand.name} logo`}
                    loading={index < 4 ? "eager" : "lazy"}
                  />
                </div>

                <div className={styles.brandCardContent}>
                  <h3>{brand.name}</h3>
                  <p>{brand.description}</p>

                  <span className={styles.brandExplore}>
                    Explore brand
                    <ArrowRight size={16} />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className={styles.brandFooter}>
            <span className={styles.brandFooterIcon}>
              <CheckCircle2 size={19} />
            </span>

            <p>
              Select a brand to explore its dedicated product page.
            </p>
          </div>
        </div>
      </section>

      {/* APPLICATIONS */}
      <section
        className={styles.applicationsSection}
        id="solar-applications"
      >
        <div className={styles.container}>
          <div className={styles.applicationsHeader}>
            <span className={styles.sectionEyebrow}>
              SOLAR FOR EVERY NEED
            </span>

            <h2>
              Where can solar <span>make a difference?</span>
            </h2>

            <p>
              Explore solar energy applications for different types of
              properties and energy requirements.
            </p>
          </div>

          <div className={styles.applicationGrid}>
            {APPLICATIONS.map(({ icon: Icon, title, description }) => (
              <article className={styles.applicationCard} key={title}>
                <div className={styles.applicationIcon}>
                  <Icon size={27} strokeWidth={1.7} />
                </div>

                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaCard}>
            <div className={styles.ctaDecoration} aria-hidden="true">
              <Sun size={180} strokeWidth={0.65} />
            </div>

            <div className={styles.ctaContent}>
              <span className={styles.ctaEyebrow}>
                MAKE THE SWITCH TO SOLAR
              </span>

              <h2>
                Your solar journey
                <br />
                starts <span>right here.</span>
              </h2>

              <p>
                Explore our solar brands and find the products that fit
                your requirements.
              </p>

              <a href="#solar-brands" className={styles.ctaButton}>
                Explore Solar Brands
                <ArrowRight size={19} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
