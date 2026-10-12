
"use client";

import { useState } from "react";
import {
  Sun,
  Zap,
  IndianRupee,
  Leaf,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  ChevronUp,
  PiggyBank,
  PanelTop,
} from "lucide-react";
import styles from "./solarScheme.module.css";

const faqs = [
  {
    question: "How much solar subsidy can I receive?",
    answer:
      "Eligible residential rooftop solar installations may qualify for central financial assistance of ₹30,000 per kW for the first 2 kW and ₹18,000 for the additional 1 kW, up to ₹78,000. Actual eligibility and approval depend on current scheme rules.",
  },
  {
    question: "Can I install more than 3 kW of solar?",
    answer:
      "Yes, a larger system may be installed if your roof and electrical connection support it. The central subsidy calculation on this page is capped at ₹78,000.",
  },
  {
    question: "Are the savings guaranteed?",
    answer:
      "No. Savings depend on your electricity consumption, tariff, location, sunlight, shading, system design and metering arrangements. The calculator provides an indicative estimate.",
  },
  {
    question: "Who can apply?",
    answer:
      "Eligibility depends on the applicable residential scheme requirements, electricity connection, installation conditions and approvals.",
  },
  {
    question: "Are state subsidies available?",
    answer:
      "Additional state or DISCOM incentives may vary by location. Check the current rules with your electricity distribution company.",
  },
];

function getSubsidy(kW) {
  const size = Math.max(0, Number(kW) || 0);
  return (
    Math.min(size, 2) * 30000 +
    Math.min(Math.max(size - 2, 0), 1) * 18000
  );
}

function money(value) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(Math.max(0, Number(value) || 0));
}

export default function SolarSchemePage() {
  const [bill, setBill] = useState(5000);
  const [capacity, setCapacity] = useState(3);
  const [rate, setRate] = useState(8);
  const [costPerKW, setCostPerKW] = useState(60000);
  const [openFAQ, setOpenFAQ] = useState(0);

  const monthlyGeneration = capacity * 120;
  const monthlyUsage = rate > 0 ? bill / rate : 0;
  const monthlySavings = Math.min(monthlyGeneration, monthlyUsage) * rate;
  const annualSavings = monthlySavings * 12;
  const systemCost = capacity * costPerKW;
  const subsidy = Math.min(getSubsidy(capacity), 78000);
  const finalCost = Math.max(0, systemCost - subsidy);
  const payback =
    annualSavings > 0 ? finalCost / annualSavings : 0;

  return (
    <main className={styles.page}>
     

{/* HERO */}
<section className={styles.hero}>
  <div className={styles.container}>
    <div className={styles.heroGrid}>
      <div className={styles.heroContent}>
        <div className={styles.eyebrow}>
          <Sun size={16} />
          ROOFTOP SOLAR SCHEME
        </div>

        <h1>
          Power your home.
          <span> Save with solar.</span>
        </h1>

        <p>
          Discover rooftop solar benefits, explore the central
          subsidy structure and estimate how much you could save
          on your electricity bills.
        </p>

        <div className={styles.heroActions}>
          <a href="#calculator" className={styles.primaryButton}>
            Calculate Savings <ArrowRight size={18} />
          </a>
          <a href="#eligibility" className={styles.secondaryButton}>
            Check Eligibility
          </a>
        </div>

        <div className={styles.heroNotes}>
          <span><CheckCircle2 size={16} /> Clean energy for your home</span>
          <span><CheckCircle2 size={16} /> Central CFA up to ₹78,000*</span>
        </div>
      </div>

      <div className={styles.heroIllustration}>
        <div className={styles.sunCircle}>
          <Sun size={36} />
        </div>

        <div className={styles.solarMinimal}>
          <div className={styles.solarMinimalPanel}>
            {Array.from({ length: 9 }, (_, i) => (
              <span key={i} />
            ))}
          </div>

          <div className={styles.solarStand} />

          <div className={styles.solarBase}>
            <div className={styles.solarBattery}>
              <Zap size={30} />
              <strong>ENERGY</strong>
              <span>100% CLEAN</span>
            </div>
            <div className={styles.solarPlant}>✳</div>
          </div>
        </div>

        <div className={styles.subsidyCard}>
          <span className={styles.moneyIcon}>
            <PiggyBank size={22} />
          </span>
          <div>
            <small>Maximum central CFA</small>
            <strong>₹78,000</strong>
            <span>For eligible households</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



      {/* BENEFITS */}
      <section className={styles.benefits}>
        <div className={styles.container}>
          <div className={styles.benefitGrid}>
            <article className={styles.benefitCard}>
              <span><IndianRupee size={23} /></span>
              <div><strong>Up to ₹78,000</strong><p>Central assistance*</p></div>
            </article>
            <article className={styles.benefitCard}>
              <span><PanelTop size={23} /></span>
              <div><strong>Up to 3 kW</strong><p>Central subsidy calculation</p></div>
            </article>
            <article className={styles.benefitCard}>
              <span><Zap size={23} /></span>
              <div><strong>Lower bills</strong><p>Generate power at home</p></div>
            </article>
            <article className={styles.benefitCard}>
              <span><Leaf size={23} /></span>
              <div><strong>Clean energy</strong><p>Renewable electricity</p></div>
            </article>
          </div>
          <p className={styles.disclaimer}>
            *Subject to current scheme requirements and approval.
          </p>
        </div>
      </section>

      {/* SUBSIDY */}
      <section className={styles.section} id="subsidy">
        <div className={styles.container}>
          <div className={styles.sectionHeading}>
            <div>
              <span className={styles.sectionLabel}>SUBSIDY BREAKDOWN</span>
              <h2>Understand your <span>solar subsidy.</span></h2>
            </div>
            <p>
              The central assistance structure for eligible residential
              rooftop solar is based on system capacity.
            </p>
          </div>

          <div className={styles.subsidyGrid}>
            <article className={styles.subsidyBox}>
              <span className={styles.cardNumber}>01</span>
              <div className={styles.cardIcon}><Sun size={23} /></div>
              <small>FIRST 1 KW</small>
              <strong>₹30,000</strong>
              <p>Assistance per kW within the first 2 kW.</p>
            </article>

            <article className={styles.subsidyBox}>
              <span className={styles.cardNumber}>02</span>
              <div className={styles.cardIcon}><PanelTop size={23} /></div>
              <small>UP TO 2 KW</small>
              <strong>₹60,000</strong>
              <p>₹30,000 per kW for the first two kilowatts.</p>
            </article>

            <article className={`${styles.subsidyBox} ${styles.featuredBox}`}>
              <span className={styles.cardNumber}>03</span>
              <div className={styles.cardIcon}><PiggyBank size={23} /></div>
              <small>UP TO 3 KW</small>
              <strong>₹78,000</strong>
              <p>Includes ₹18,000 for the additional third kW.</p>
              <span className={styles.capLabel}>CENTRAL CFA CAP</span>
            </article>
          </div>

          <div className={styles.tableWrap}>
            <div className={styles.tableHead}>
              <span>System capacity</span>
              <span>Central CFA structure</span>
              <span>Maximum amount</span>
            </div>
            <div className={styles.tableRow}>
              <span>Up to 2 kW</span>
              <strong>₹30,000 per kW</strong>
              <b>₹60,000</b>
            </div>
            <div className={styles.tableRow}>
              <span>Above 2 to 3 kW</span>
              <strong>₹18,000 for additional kW</strong>
              <b>₹78,000</b>
            </div>
            <div className={styles.tableRow}>
              <span>Above 3 kW</span>
              <strong>No additional central CFA</strong>
              <b>₹78,000 cap</b>
            </div>
          </div>
        </div>
      </section>

      {/* CALCULATOR */}
      <section className={styles.calculatorSection} id="calculator">
        <div className={styles.container}>
          <div className={styles.centerHeading}>
            <span className={styles.sectionLabel}>SOLAR SAVINGS CALCULATOR</span>
            <h2>Estimate your <span>solar savings.</span></h2>
            <p>Adjust the values below to explore an indicative estimate.</p>
          </div>

          <div className={styles.calculator}>
            <div className={styles.calculatorForm}>
              <div className={styles.formTitle}>
                <div><small>YOUR DETAILS</small><h3>Build your estimate</h3></div>
                <span>01</span>
              </div>

              <div className={styles.sliderGroup}>
                <div className={styles.sliderTitle}>
                  <label htmlFor="bill">Monthly electricity bill</label>
                  <strong>{money(bill)}</strong>
                </div>
                <input id="bill" type="range" min="1000" max="25000" step="500" value={bill} onChange={e => setBill(Number(e.target.value))} />
                <div className={styles.rangeLabels}><span>₹1,000</span><span>₹25,000+</span></div>
              </div>

              <div className={styles.sliderGroup}>
                <div className={styles.sliderTitle}>
                  <label htmlFor="capacity">Solar system size</label>
                  <strong>{capacity} kW</strong>
                </div>
                <input id="capacity" type="range" min="1" max="10" step="0.5" value={capacity} onChange={e => setCapacity(Number(e.target.value))} />
                <div className={styles.rangeLabels}><span>1 kW</span><span>10 kW</span></div>
              </div>

              <div className={styles.sliderGroup}>
                <div className={styles.sliderTitle}>
                  <label htmlFor="rate">Electricity rate</label>
                  <strong>₹{rate}/unit</strong>
                </div>
                <input id="rate" type="range" min="4" max="15" step="0.5" value={rate} onChange={e => setRate(Number(e.target.value))} />
                <div className={styles.rangeLabels}><span>₹4</span><span>₹15/unit</span></div>
              </div>

              <div className={styles.costInput}>
                <div>
                  <label htmlFor="cost">Installation cost per kW</label>
                  <small>Enter your approximate quotation.</small>
                </div>
                <div className={styles.costField}>
                  <span>₹</span>
                  <input id="cost" type="number" min="0" value={costPerKW} onChange={e => setCostPerKW(Math.max(0, Number(e.target.value) || 0))} />
                </div>
              </div>

              <p className={styles.calculatorNote}>
                Generation assumes an illustrative 120 units per kW per month.
                Actual output varies with location, sunlight, shade and system design.
              </p>
            </div>

            <div className={styles.results}>
              <span className={styles.resultLabel}>YOUR ESTIMATED RESULTS</span>
              <div className={styles.mainResult}>
                <small>Potential monthly savings</small>
                <strong>{money(monthlySavings)}</strong>
                <span>About {money(annualSavings)} per year</span>
              </div>

              <div className={styles.resultSubsidy}>
                <span><PiggyBank size={23} /></span>
                <div><small>Estimated central subsidy</small><strong>{money(subsidy)}</strong></div>
              </div>

              <div className={styles.resultGrid}>
                <div><small>System capacity</small><strong>{capacity} kW</strong></div>
                <div><small>Generation / month</small><strong>{Math.round(monthlyGeneration)} units</strong></div>
                <div><small>Estimated system cost</small><strong>{money(systemCost)}</strong></div>
                <div><small>Cost after estimated CFA</small><strong>{money(finalCost)}</strong></div>
              </div>

              <div className={styles.payback}>
                <span>Indicative payback period</span>
                <strong>{payback > 0 ? `${payback.toFixed(1)} years` : "—"}</strong>
              </div>

              <a href="#eligibility" className={styles.resultButton}>
                Check eligibility <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ELIGIBILITY */}
      <section className={styles.section} id="eligibility">
        <div className={styles.container}>
          <div className={styles.eligibilityGrid}>
            <div>
              <span className={styles.sectionLabel}>ELIGIBILITY</span>
              <h2>Is your home <span>ready for solar?</span></h2>
              <p className={styles.introText}>
                Review these general points before beginning an application.
              </p>

              {[
                ["Residential electricity connection", "Check the applicable scheme requirements for your connection."],
                ["Suitable rooftop", "Ensure adequate roof area and sunlight exposure."],
                ["Technical feasibility", "Confirm roof condition, wiring and installation feasibility."],
                ["DISCOM requirements", "Follow the applicable approval, metering and inspection process."],
              ].map(([title, text]) => (
                <div className={styles.checkItem} key={title}>
                  <CheckCircle2 size={21} />
                  <div><strong>{title}</strong><p>{text}</p></div>
                </div>
              ))}
            </div>

            <div className={styles.processPanel}>
              <span className={styles.sectionLabel}>APPLICATION PROCESS</span>
              <h2>From application <span>to installation.</span></h2>
              {[
                ["Register and apply", "Use the applicable official scheme process."],
                ["Submit required details", "Provide the requested consumer and electricity connection information."],
                ["Complete technical approval", "Follow the applicable DISCOM technical steps."],
                ["Install and complete inspection", "Follow installation, metering and subsidy-claim requirements."],
              ].map(([title, text], i) => (
                <div className={styles.processItem} key={title}>
                  <span>{i + 1}</span>
                  <div><strong>{title}</strong><p>{text}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LOCATION NOTICE */}
      <section className={styles.locationSection}>
        <div className={styles.container}>
          <div className={styles.locationCard}>
            <span className={styles.locationIcon}><IndianRupee size={24} /></span>
            <div>
              <small>STATE AND DISCOM INFORMATION</small>
              <h3>Check the rules for your location.</h3>
              <p>
                Additional incentives, metering rules and timelines may vary.
                Confirm current requirements with your electricity distribution company.
              </p>
            </div>
            <a href="#calculator">Update estimate <ArrowRight size={17} /></a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.faqSection}>
        <div className={styles.container}>
          <div className={styles.centerHeading}>
            <span className={styles.sectionLabel}>FREQUENTLY ASKED QUESTIONS</span>
            <h2>Solar questions, <span>answered.</span></h2>
          </div>

          <div className={styles.faqList}>
            {faqs.map((faq, index) => {
              const isOpen = openFAQ === index;
              return (
                <article className={styles.faqItem} key={faq.question}>
                  <button type="button" aria-expanded={isOpen} onClick={() => setOpenFAQ(isOpen ? -1 : index)}>
                    <span>{faq.question}</span>
                    {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </button>
                  {isOpen && <p>{faq.answer}</p>}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className={styles.finalCTA}>
        <div className={styles.container}>
          <div className={styles.ctaIcon}><Sun size={28} /></div>
          <span className={styles.sectionLabel}>TAKE THE NEXT STEP</span>
          <h2>Your rooftop could be<br />your next power source.</h2>
          <p>
            Start with an estimate, review eligibility and confirm the
            current scheme requirements before installation.
          </p>
          <a href="#calculator" className={styles.primaryButton}>
            Calculate Savings <ArrowRight size={18} />
          </a>
          <small>Estimates do not guarantee savings or subsidy approval.</small>
        </div>
      </section>
    </main>
  );
}
