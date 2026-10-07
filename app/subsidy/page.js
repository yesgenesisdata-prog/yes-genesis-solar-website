'use client';

import Link from 'next/link';
import { useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  IndianRupee,
  Calculator,
  Sun,
  FileCheck2,
  Home,
  Zap,
} from 'lucide-react';

import styles from './subsidy.module.css';

const centralSubsidy = [
  {
    capacity: '1 kW',
    subsidy: '₹30,000',
    description: 'For the first 1 kW of rooftop solar capacity.',
  },
  {
    capacity: '2 kW',
    subsidy: '₹60,000',
    description: 'For systems up to 2 kW capacity.',
  },
  {
    capacity: '3 kW',
    subsidy: '₹78,000',
    description: 'Maximum central subsidy shown for residential systems.',
  },
];

const states = [
  {
    name: 'Rajasthan',
    amount: '₹17,000',
    description: 'Additional support subject to applicable state conditions.',
  },
  {
    name: 'Assam',
    amount: '₹15,000 – ₹45,000',
    description: 'Additional support may vary by system capacity.',
  },
  {
    name: 'Uttar Pradesh',
    amount: '₹15,000 / kW',
    description: 'Up to ₹30,000 depending on applicable conditions.',
  },
  {
    name: 'Gujarat',
    amount: '₹10,000 / kW',
    description: 'Additional state support subject to eligibility.',
  },
  {
    name: 'Chhattisgarh',
    amount: 'Up to ₹20,000 / kWp',
    description: 'State support may vary by applicable scheme.',
  },
  {
    name: 'Ladakh',
    amount: '₹2,000 / kW',
    description: 'Additional generation-based incentive may apply.',
  },
  {
    name: 'Telangana',
    amount: '₹10,000 / kW',
    description: 'Up to ₹30,000 subject to applicable conditions.',
  },
  {
    name: 'Puducherry',
    amount: '₹9,000 / kW',
    description: 'Additional support subject to applicable scheme.',
  },
  {
    name: 'Jammu & Kashmir',
    amount: '₹15,000 – ₹45,000',
    description: 'Support varies according to eligibility and scheme.',
  },
  {
    name: 'Bihar',
    amount: 'Up to 60–80%',
    description: 'Support may vary for eligible low-income households.',
  },
  {
    name: 'Haryana',
    amount: 'Up to 25%',
    description: 'Support may be linked to applicable installation costs.',
  },
  {
    name: 'Jharkhand',
    amount: 'Up to 10%',
    description: 'Subject to benchmark and state scheme conditions.',
  },
  {
    name: 'Goa',
    amount: '₹3,000 / kW',
    description: 'Additional state support may be available.',
  },
];

const faqs = [
  {
    question: 'What is the PM Surya Ghar subsidy?',
    answer:
      'PM Surya Ghar is a residential rooftop solar programme through which eligible households can receive financial assistance for installing rooftop solar systems. The exact subsidy depends on system capacity and the applicable government guidelines.',
  },
  {
    question: 'What is the maximum central subsidy?',
    answer:
      'For residential rooftop systems, the commonly published central subsidy structure provides assistance based on the installed capacity, with the maximum central subsidy reaching ₹78,000 for eligible systems of 3 kW or above.',
  },
  {
    question: 'Can I receive both central and state subsidy?',
    answer:
      'In some states, additional state-level incentives may be available. Eligibility and whether incentives can be combined depend on the applicable state, DISCOM and scheme rules.',
  },
  {
    question: 'How do I apply for solar subsidy?',
    answer:
      'The application process generally involves registering through the official rooftop solar portal, selecting an eligible vendor, completing the installation and inspection process, and following the required documentation and verification steps.',
  },
  {
    question: 'How much solar capacity do I need?',
    answer:
      'The ideal capacity depends mainly on your monthly electricity consumption, available rooftop area, budget and future electricity requirements. Use our quick estimator below as a starting point.',
  },
];

function estimateSolar(monthlyUnits) {
  const units = Math.max(50, Number(monthlyUnits) || 50);

  // Indicative average rooftop solar generation.
  // Actual generation depends on location, roof orientation,
  // shading, weather and system efficiency.
  const generationPerKw = 120;

  // Recommend enough capacity to cover most of the monthly usage,
  // with a maximum of 3 kW for this subsidy estimator.
  const recommendedKw = Math.min(
    3,
    Math.max(1, Math.ceil(units / generationPerKw))
  );

  const monthlyGeneration = recommendedKw * generationPerKw;
  const annualGeneration = monthlyGeneration * 12;

  // Current indicative central subsidy structure:
  // ₹30,000 for first kW
  // ₹30,000 for second kW
  // ₹18,000 for third kW
  const subsidy =
    recommendedKw === 1
      ? 30000
      : recommendedKw === 2
        ? 60000
        : 78000;

  // Indicative electricity tariff used only for estimation.
  const electricityRate = 8;

  const annualSavings = Math.round(
    Math.min(annualGeneration, units * 12) * electricityRate
  );

  return {
    capacity: `${recommendedKw} kW`,
    subsidy: `₹${subsidy.toLocaleString('en-IN')}`,
    monthlyGeneration: `${monthlyGeneration} units`,
    annualGeneration: `${annualGeneration.toLocaleString('en-IN')} units`,
    annualSavings: `₹${annualSavings.toLocaleString('en-IN')}`,
    coverage: Math.min(
      100,
      Math.round((monthlyGeneration / units) * 100)
    ),
  };
}

export default function SubsidyPage() {
  const [units, setUnits] = useState(250);
  const [openFaq, setOpenFaq] = useState(0);

  const estimate = estimateSolar(Number(units));

  return (
    <div className={styles.page}>
      {/* HERO */}
      <section className={styles.hero}>
        <div className={styles.heroGlow} />

        <div className={styles.container}>
          <div className={styles.heroContent}>
            <span className={styles.eyebrow}>
              <Sun size={16} />
              SOLAR SUBSIDY GUIDE 2026
            </span>

            <h1>
              Solar Subsidy
              <br />
              <span>in India</span>
            </h1>

            <p>
              Understand central and state rooftop solar subsidies,
              eligibility, estimated savings and the steps required to
              switch your home to clean energy.
            </p>

            <div className={styles.heroActions}>
              <a href="#eligibility" className={styles.primaryButton}>
                Check Eligibility
                <ArrowRight size={18} />
              </a>

              <a href="#calculator" className={styles.secondaryButton}>
                Calculate Savings
              </a>
            </div>

            <div className={styles.heroStats}>
              <div>
                <strong>₹78,000</strong>
                <span>Maximum central subsidy*</span>
              </div>

              <div>
                <strong>3 kW+</strong>
                <span>Higher-capacity residential systems</span>
              </div>

              <div>
                <strong>20+ States</strong>
                <span>Solar programmes & incentives</span>
              </div>
            </div>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.sunCircle} />
            <div className={styles.solarHouse}>
              <div className={styles.roof}>
                <div className={styles.panelGrid}>
                  {Array.from({ length: 24 }).map((_, index) => (
                    <span key={index} />
                  ))}
                </div>
              </div>

              <div className={styles.houseBody}>
                <div className={styles.window} />
                <div className={styles.door} />
              </div>
            </div>

            <div className={styles.energyCard}>
              <Zap size={18} />
              <div>
                <strong>Clean Energy</strong>
                <span>Generate power from sunlight</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className={styles.intro}>
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <span>UNDERSTAND THE BENEFIT</span>
            <h2>How does solar subsidy work?</h2>
            <p>
              Government support can significantly reduce the upfront cost
              of installing rooftop solar. Your actual benefit depends on
              your system size, location, eligibility and the latest
              applicable guidelines.
            </p>
          </div>

          <div className={styles.infoGrid}>
            <div className={styles.infoCard}>
              <div className={styles.iconBox}>
                <IndianRupee />
              </div>
              <h3>Reduce installation cost</h3>
              <p>
                Eligible households can receive financial assistance toward
                their rooftop solar installation.
              </p>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.iconBox}>
                <Zap />
              </div>
              <h3>Lower electricity bills</h3>
              <p>
                Generate your own electricity and reduce your dependence
                on grid power.
              </p>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.iconBox}>
                <Sun />
              </div>
              <h3>Clean energy</h3>
              <p>
                Solar power helps households transition toward cleaner and
                more sustainable electricity generation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CENTRAL SUBSIDY */}
      <section className={styles.centralSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <span>CENTRAL SUBSIDY</span>
            <h2>How much subsidy can you get?</h2>
            <p>
              The following figures represent the commonly published
              residential central subsidy structure. Always verify the
              latest amount before applying.
            </p>
          </div>

          <div className={styles.subsidyGrid}>
            {centralSubsidy.map((item, index) => (
              <div className={styles.subsidyCard} key={item.capacity}>
                <div className={styles.cardNumber}>0{index + 1}</div>

                <div className={styles.capacity}>
                  {item.capacity}
                </div>

                <div className={styles.subsidyAmount}>
                  {item.subsidy}
                </div>

                <p>{item.description}</p>
              </div>
            ))}
          </div>

          <div className={styles.note}>
            <CheckCircle2 size={20} />
            <p>
              *Subsidy figures are indicative. Final eligibility and
              disbursement depend on the applicable government rules,
              installation capacity, vendor and DISCOM verification.
            </p>
          </div>
        </div>
      </section>

      {/* CALCULATOR */}
      <section id="calculator" className={styles.calculatorSection}>
  <div className={styles.container}>
    <div className={styles.calculator}>

      {/* LEFT SIDE */}
      <div className={styles.calculatorLeft}>

        <span className={styles.sectionTag}>
          <Calculator size={16} />
          QUICK SOLAR ESTIMATOR
        </span>

        <h2>
          Find the right solar
          <br />
          system for your home.
        </h2>

        <p>
          Enter your average monthly electricity consumption.
          We&apos;ll estimate the solar capacity you may need and
          the indicative central subsidy.
        </p>

        <label htmlFor="units">
          Average monthly electricity consumption
        </label>

        <div className={styles.inputWrapper}>
          <input
            id="units"
            type="number"
            min="50"
            max="1000"
            step="10"
            value={units}
            onChange={(e) => {
              const value = Math.min(
                1000,
                Math.max(50, Number(e.target.value) || 50)
              );

              setUnits(value);
            }}
          />

          <span>units / month</span>
        </div>

        <div className={styles.rangeLabels}>
          <span>50 units</span>
          <strong>{units} units</strong>
          <span>1000 units</span>
        </div>

        <input
          className={styles.range}
          type="range"
          min="50"
          max="1000"
          step="10"
          value={units}
          onChange={(e) => setUnits(Number(e.target.value))}
        />

        <div className={styles.estimatorHint}>
          <Sun size={17} />

          <span>
            Your estimate updates automatically as you change
            your electricity usage.
          </span>
        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className={styles.calculatorResult}>

        <span className={styles.resultLabel}>
          YOUR ESTIMATED SOLAR REQUIREMENT
        </span>

        <div className={styles.capacityResult}>
          <div>
            <small>Recommended system</small>
            <strong>{estimate.capacity}</strong>
          </div>

          <div className={styles.capacityIcon}>
            <Sun size={28} />
          </div>
        </div>

        <div className={styles.coverageBar}>
          <div
            style={{
              width: `${Math.min(100, estimate.coverage)}%`,
            }}
          />
        </div>

        <div className={styles.coverageText}>
          <span>Estimated usage coverage</span>
          <strong>{estimate.coverage}%</strong>
        </div>

        <div className={styles.resultGrid}>

          <div className={styles.resultBox}>
            <span>Central subsidy</span>
            <strong>{estimate.subsidy}</strong>
          </div>

          <div className={styles.resultBox}>
            <span>Monthly generation</span>
            <strong>{estimate.monthlyGeneration}</strong>
          </div>

          <div className={styles.resultBox}>
            <span>Annual generation</span>
            <strong>{estimate.annualGeneration}</strong>
          </div>

          <div className={styles.resultBox}>
            <span>Potential annual savings*</span>
            <strong>{estimate.annualSavings}</strong>
          </div>

        </div>

        <Link
          href="/#contact"
          className={styles.resultButton}
        >
          Get a Solar Quote
          <ArrowRight size={17} />
        </Link>

        <small className={styles.calculatorDisclaimer}>
          *Estimates are indicative only. Actual generation,
          savings and subsidy eligibility depend on location,
          system design, electricity tariff, roof conditions,
          DISCOM requirements and applicable government rules.
        </small>

      </div>

    </div>
  </div>
</section>

      {/* STATES */}
      <section className={styles.statesSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <span>STATE INCENTIVES</span>
            <h2>Additional state subsidies</h2>
            <p>
              Some states may provide additional incentives alongside
              central assistance. Availability and amounts can change based
              on government and DISCOM rules.
            </p>
          </div>

          <div className={styles.statesGrid}>
            {states.map((state) => (
              <div className={styles.stateCard} key={state.name}>
                <div className={styles.stateIcon}>
                  <Sun size={18} />
                </div>

                <div className={styles.stateInfo}>
                  <h3>{state.name}</h3>
                  <strong>{state.amount}</strong>
                  <p>{state.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ELIGIBILITY */}
      <section id="eligibility" className={styles.eligibilitySection}>
        <div className={styles.container}>
          <div className={styles.eligibilityGrid}>
            <div>
              <span className={styles.sectionTag}>
                <FileCheck2 size={16} />
                ELIGIBILITY
              </span>

              <h2>Is your home eligible?</h2>

              <p className={styles.eligibilityIntro}>
                Residential rooftop solar subsidy generally requires
                meeting the applicable programme and installation
                requirements.
              </p>

              <div className={styles.checkList}>
                <div>
                  <CheckCircle2 />
                  <span>You own or occupy an eligible residential property.</span>
                </div>

                <div>
                  <CheckCircle2 />
                  <span>You have a valid electricity connection.</span>
                </div>

                <div>
                  <CheckCircle2 />
                  <span>Your rooftop has suitable space for solar panels.</span>
                </div>

                <div>
                  <CheckCircle2 />
                  <span>You use an eligible vendor and follow the required process.</span>
                </div>

                <div>
                  <CheckCircle2 />
                  <span>Required documentation and verification can be completed.</span>
                </div>
              </div>
            </div>

            <div className={styles.eligibilityCard}>
              <Home size={30} />

              <h3>Ready to explore solar?</h3>

              <p>
                Tell us about your electricity usage and property. Our team
                can help you understand the next steps.
              </p>

              <Link href="/#contact" className={styles.primaryButton}>
                Talk to YES Genesis
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className={styles.processSection}>
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <span>THE PROCESS</span>
            <h2>From application to solar power</h2>
          </div>

          <div className={styles.processGrid}>
            {[
              ['01', 'Check eligibility', 'Understand your electricity usage and property requirements.'],
              ['02', 'Register', 'Complete the required registration and application process.'],
              ['03', 'Choose vendor', 'Select an eligible solar installation vendor.'],
              ['04', 'Install system', 'Complete installation, inspection and required verification.'],
              ['05', 'Receive benefit', 'Follow the approved process for subsidy disbursement.'],
            ].map(([number, title, description]) => (
              <div className={styles.processItem} key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.faqSection}>
        <div className={styles.container}>
          <div className={styles.faqGrid}>
            <div className={styles.sectionHeading}>
              <span>FAQ</span>
              <h2>Solar subsidy questions</h2>
              <p>
                Quick answers to some of the most common questions about
                rooftop solar subsidies.
              </p>
            </div>

            <div className={styles.faqList}>
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;

                return (
                  <div
                    className={`${styles.faqItem} ${
                      isOpen ? styles.faqOpen : ''
                    }`}
                    key={faq.question}
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setOpenFaq(isOpen ? -1 : index)
                      }
                    >
                      <span>{faq.question}</span>
                      <ChevronDown
                        size={20}
                        className={styles.chevron}
                      />
                    </button>

                    {isOpen && (
                      <div className={styles.answer}>
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className={styles.finalCta}>
        <div className={styles.container}>
          <div>
            <span>MAKE THE SWITCH</span>
            <h2>Turn sunlight into savings.</h2>
            <p>
              Explore solar solutions with YES Genesis and take the next
              step toward cleaner, more affordable energy.
            </p>
          </div>

          <Link href="/#contact" className={styles.ctaButton}>
            Get Started
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}