
"use client";

import styles from "./PartnersSection.module.css";

const partners = [
  { name: "Aditya Birla Group", logo: "/assets/images/partners/aditya-birla.png" },
  { name: "Axis Bank", logo: "/assets/images/partners/axis-bank.png" },
  { name: "YES BANK", logo: "/assets/images/partners/yes-bank.png" },
  { name: "Federal Bank", logo: "/assets/images/partners/federal-bank.png" },
  { name: "LIC Housing Finance", logo: "/assets/images/partners/lic-housing.png" },
  { name: "ICICI HFC", logo: "/assets/images/partners/icici-hfc.png" },
  { name: "Jio Financial Services", logo: "/assets/images/partners/jio-finance.png" },
  { name: "Bajaj Finance", logo: "/assets/images/partners/bajaj.png" },
  { name: "Bank of Baroda", logo: "/assets/images/partners/bob-bank.png" },
  { name: "Credila", logo: "/assets/images/partners/credila.png" },
  { name: "HDFC Bank", logo: "/assets/images/partners/Hdfc.png" },
  { name: "ICICI Bank", logo: "/assets/images/partners/icici.png" },
  { name: "IDBI Bank", logo: "/assets/images/partners/idbi-bank.png" },
  { name: "IndusInd Bank", logo: "/assets/images/partners/indusind-bank.png" },
  { name: "Kotak", logo: "/assets/images/partners/kotak.png" },
  { name: "Muthoot Finance", logo: "/assets/images/partners/muthoot.png" },
  { name: "PNB Housing", logo: "/assets/images/partners/pnb.png" },
  { name: "RBL Bank", logo: "/assets/images/partners/rbl-bank.png" },
  { name: "Religare", logo: "/assets/images/partners/religare.png" },
];

function PartnerLogo({ partner }) {
  return (
    <div className={styles.marqueeCard}>
      <img
        src={partner.logo}
        alt={partner.name}
        className={styles.logo}
        loading="lazy"
        onError={(event) => {
          event.currentTarget.style.display = "none";
          const fallback = event.currentTarget.nextElementSibling;
          if (fallback) fallback.style.display = "block";
        }}
      />
      <span className={styles.fallback} style={{ display: "none" }}>
        {partner.name}
      </span>
    </div>
  );
}

export default function PartnersSection() {
  return (
    <section className={styles.section}>
      <header className={styles.header}>
        <h2 className={styles.title}>
          OUR <span>BANKING</span> PARTNERS
        </h2>

        <p className={styles.description}>
          We are proud to be associated with India&apos;s leading banks
          and NBFCs to offer the best financial solution to our customers.
        </p>
      </header>

      <div className={styles.marquee}>
        <div className={styles.marqueeTrack}>
          {partners.map((partner) => (
            <PartnerLogo key={`first-${partner.name}`} partner={partner} />
          ))}

          {partners.map((partner) => (
            <PartnerLogo
              key={`second-${partner.name}`}
              partner={partner}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
