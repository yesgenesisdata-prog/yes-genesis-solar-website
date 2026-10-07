"use client";

import { useMemo, useState } from "react";
import {
  ArrowRight,
  Check,
  ChevronDown,
  ChevronUp,
  CircleHelp,
  IndianRupee,
  Leaf,
  MapPin,
  PanelTop,
  PiggyBank,
  Sun,
  TrendingDown,
  Zap,
} from "lucide-react";

import styles from "./solarScheme.module.css";

const money = (value) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(Math.max(0, value));

const number = (value) =>
  new Intl.NumberFormat("en-IN", {
    maximumFractionDigits: 0,
  }).format(Math.max(0, value));

/* -------------------------------------------------------
   PM SURYA GHAR CENTRAL SUBSIDY
   First 2 kW  = ₹30,000/kW
   Additional 1 kW = ₹18,000/kW
   Maximum central CFA = ₹78,000
------------------------------------------------------- */

function getSubsidy(systemSize) {
  const size = Number(systemSize);

  if (size <= 0) return 0;

  const firstTwo = Math.min(size, 2) * 30000;

  const thirdKw =
    Math.min(Math.max(size - 2, 0), 1) * 18000;

  return Math.min(firstTwo + thirdKw, 78000);
}

export default function SolarSchemePage() {
  const [monthlyBill, setMonthlyBill] = useState(5000);
  const [systemSize, setSystemSize] = useState(3);
  const [electricityRate, setElectricityRate] = useState(8);
  const [costPerKw, setCostPerKw] = useState(60000);

  const [faqOpen, setFaqOpen] = useState(0);

  /* -------------------------------------------------------
     SAVINGS CALCULATOR

     120 units / kW / month is an indicative assumption.
     Actual generation depends on location, shading,
     orientation, panel efficiency and system design.
  ------------------------------------------------------- */

  const result = useMemo(() => {
    const bill = Number(monthlyBill);
    const size = Number(systemSize);
    const rate = Number(electricityRate);
    const installationRate = Number(costPerKw);

    const monthlyConsumption =
      rate > 0 ? bill / rate : 0;

    const estimatedSolarGeneration = size * 120;

    const usableGeneration = Math.min(
      monthlyConsumption,
      estimatedSolarGeneration
    );

    const monthlySavings = usableGeneration * rate;

    const annualSavings = monthlySavings * 12;

    const grossCost = size * installationRate;

    const subsidy = getSubsidy(size);

    const netCost = Math.max(
      grossCost - subsidy,
      0
    );

    const payback =
      annualSavings > 0
        ? netCost / annualSavings
        : 0;

    const annualGeneration =
      estimatedSolarGeneration * 12;

    return {
      monthlyConsumption,
      estimatedSolarGeneration,
      usableGeneration,
      monthlySavings,
      annualSavings,
      grossCost,
      subsidy,
      netCost,
      payback,
      annualGeneration,
    };
  }, [
    monthlyBill,
    systemSize,
    electricityRate,
    costPerKw,
  ]);

  const faqs = [
    {
      q: "How much central subsidy is available?",
      a: "For eligible residential rooftop solar installations, the central financial assistance structure provides ₹30,000 per kW for the first 2 kW and ₹18,000 for the additional 1 kW, with the central subsidy capped at ₹78,000.",
    },
    {
      q: "Can I install a system larger than 3 kW?",
      a: "Yes. A larger system may be installed depending on your electricity requirement, roof and technical feasibility. However, the central CFA does not increase beyond the applicable 3 kW level.",
    },
    {
      q: "How much can I save every month?",
      a: "Your savings depend on electricity consumption, tariff, solar generation, system size, net-metering arrangements and other factors. The calculator provides an indicative estimate rather than a guaranteed saving.",
    },
    {
      q: "Does every household receive the subsidy?",
      a: "No. Subsidy eligibility depends on the applicable scheme requirements, residential electricity connection, installation conditions, approved processes and other applicable rules.",
    },
    {
      q: "Can my state provide additional support?",
      a: "Some states or UTs may have additional incentives or schemes. These are separate from the central CFA and should be verified with the relevant state authority or DISCOM before making a financial decision.",
    },
  ];

  return (
    <main className={styles.page}>

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className={styles.hero}>
        <div className={styles.heroOrbOne} />
        <div className={styles.heroOrbTwo} />

        <div className={styles.container}>
          <div className={styles.heroGrid}>

            <div className={styles.heroContent}>

              <div className={styles.badge}>
                <Sun size={15} />
                PM SURYA GHAR • SOLAR SCHEME
              </div>

              <h1>
                Power your home.
                <span>
                  {" "}Reduce your electricity bills.
                </span>
              </h1>

              <p>
                Discover how rooftop solar can help you
                generate clean electricity, reduce your
                monthly power expenses and access eligible
                government financial assistance.
              </p>

              <div className={styles.heroButtons}>
                <a
                  href="#calculator"
                  className={styles.primaryButton}
                >
                  Calculate Savings
                  <ArrowRight size={18} />
                </a>

                <a
                  href="#eligibility"
                  className={styles.outlineButton}
                >
                  Check Eligibility
                </a>
              </div>

              <div className={styles.heroPoints}>
                <div>
                  <Check size={16} />
                  Residential rooftop solar
                </div>

                <div>
                  <Check size={16} />
                  Central CFA up to ₹78,000
                </div>
              </div>
            </div>

            {/* VISUAL */}
            <div className={styles.heroVisual}>

              <div className={styles.sunVisual}>
                <Sun size={70} strokeWidth={1.2} />
              </div>

              <div className={styles.energyCircle}>
                <Zap size={28} />
                <span>Clean</span>
                <strong>Energy</strong>
              </div>

              <div className={styles.roof}>
                <div className={styles.solarPanels}>
                  {Array.from({ length: 24 }).map(
                    (_, index) => (
                      <span key={index} />
                    )
                  )}
                </div>
              </div>

              <div className={styles.floatingSaving}>
                <div className={styles.floatingIcon}>
                  <PiggyBank size={20} />
                </div>

                <div>
                  <small>
                    Maximum central CFA
                  </small>

                  <strong>₹78,000</strong>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>


      {/* =====================================================
          QUICK BENEFITS
      ===================================================== */}

      <section className={styles.quickSection}>
        <div className={styles.container}>

          <div className={styles.quickGrid}>

            <div className={styles.quickCard}>
              <div className={styles.quickIcon}>
                <IndianRupee size={21} />
              </div>

              <div>
                <strong>Up to ₹78,000</strong>
                <span>
                  Maximum central financial assistance
                </span>
              </div>
            </div>

            <div className={styles.quickCard}>
              <div className={styles.quickIcon}>
                <PanelTop size={21} />
              </div>

              <div>
                <strong>Up to 3 kW</strong>
                <span>
                  Central CFA structure reaches its cap
                </span>
              </div>
            </div>

            <div className={styles.quickCard}>
              <div className={styles.quickIcon}>
                <TrendingDown size={21} />
              </div>

              <div>
                <strong>Lower bills</strong>
                <span>
                  Generate electricity from your rooftop
                </span>
              </div>
            </div>

            <div className={styles.quickCard}>
              <div className={styles.quickIcon}>
                <Leaf size={21} />
              </div>

              <div>
                <strong>Clean energy</strong>
                <span>
                  Reduce dependence on conventional power
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =====================================================
          SUBSIDY STRUCTURE
      ===================================================== */}

      <section
        id="subsidy"
        className={styles.subsidySection}
      >
        <div className={styles.container}>

          <div className={styles.sectionIntro}>

            <div>
              <div className={styles.orangeLabel}>
                <IndianRupee size={14} />
                SUBSIDY STRUCTURE
              </div>

              <h2>
                Understand your
                <span> solar subsidy.</span>
              </h2>
            </div>

            <p>
              The central financial assistance for eligible
              residential rooftop solar is structured around
              the first 3 kW of system capacity.
            </p>

          </div>


          <div className={styles.subsidyCards}>

            <div className={styles.subsidyCard}>
              <span className={styles.cardNumber}>
                01
              </span>

              <div className={styles.cardIcon}>
                <Sun size={21} />
              </div>

              <small>FIRST 1 KW</small>

              <strong>₹30,000</strong>

              <p>
                Central financial assistance per kW
                within the first 2 kW.
              </p>
            </div>


            <div className={styles.subsidyCard}>
              <span className={styles.cardNumber}>
                02
              </span>

              <div className={styles.cardIcon}>
                <PanelTop size={21} />
              </div>

              <small>UP TO 2 KW</small>

              <strong>₹60,000</strong>

              <p>
                ₹30,000 per kW for the first two
                kilowatts.
              </p>
            </div>


            <div
              className={`${styles.subsidyCard} ${styles.featuredCard}`}
            >
              <span className={styles.cardNumber}>
                03
              </span>

              <div className={styles.cardIcon}>
                <PiggyBank size={21} />
              </div>

              <small>UP TO 3 KW</small>

              <strong>₹78,000</strong>

              <p>
                Includes the additional ₹18,000
                applicable to the third kW.
              </p>

              <div className={styles.maxPill}>
                MAXIMUM CENTRAL CFA
              </div>
            </div>

          </div>


          <div className={styles.subsidyTable}>

            <div className={styles.tableHeader}>
              <span>System size</span>
              <span>Central CFA structure</span>
              <span>Maximum amount</span>
            </div>

            <div className={styles.tableRow}>
              <span>0–2 kW</span>
              <strong>₹30,000 / kW</strong>
              <b>₹60,000</b>
            </div>

            <div className={styles.tableRow}>
              <span>2–3 kW</span>
              <strong>₹18,000 / additional kW</strong>
              <b>₹78,000</b>
            </div>

            <div className={styles.tableRow}>
              <span>Above 3 kW</span>
              <strong>No additional central CFA</strong>
              <b>₹78,000 capped</b>
            </div>

          </div>

          <p className={styles.tableDisclaimer}>
            Subsidy shown here refers to the central financial
            assistance structure. Actual eligibility and final
            amount are subject to applicable scheme requirements,
            approvals and implementation rules.
          </p>

        </div>
      </section>


      {/* =====================================================
          SAVINGS CALCULATOR
      ===================================================== */}

      <section
        id="calculator"
        className={styles.calculatorSection}
      >
        <div className={styles.container}>

          <div className={styles.sectionIntroCenter}>

            <div className={styles.orangeLabel}>
              <Zap size={14} />
              SOLAR SAVINGS CALCULATOR
            </div>

            <h2>
              See how much solar
              <span> could save you.</span>
            </h2>

            <p>
              Enter your electricity bill and choose a
              solar system size to get an indicative
              savings estimate.
            </p>

          </div>


          <div className={styles.calculator}>

            {/* INPUT SIDE */}

            <div className={styles.calculatorInputSide}>

              <div className={styles.calculatorTitle}>
                <div>
                  <span>YOUR DETAILS</span>
                  <h3>
                    Build your solar estimate
                  </h3>
                </div>

                <div className={styles.stepLabel}>
                  01
                </div>
              </div>


              {/* BILL */}

              <div className={styles.sliderGroup}>

                <div className={styles.sliderHeader}>
                  <label>
                    Monthly electricity bill
                  </label>

                  <strong>
                    {money(monthlyBill)}
                  </strong>
                </div>

                <input
                  type="range"
                  min="1000"
                  max="25000"
                  step="500"
                  value={monthlyBill}
                  onChange={(e) =>
                    setMonthlyBill(
                      Number(e.target.value)
                    )
                  }
                  className={styles.range}
                />

                <div className={styles.rangeLabels}>
                  <span>₹1,000</span>
                  <span>₹25,000+</span>
                </div>

              </div>


              {/* SYSTEM */}

              <div className={styles.sliderGroup}>

                <div className={styles.sliderHeader}>
                  <label>
                    Solar system size
                  </label>

                  <strong>
                    {systemSize} kW
                  </strong>
                </div>

                <input
                  type="range"
                  min="1"
                  max="10"
                  step="0.5"
                  value={systemSize}
                  onChange={(e) =>
                    setSystemSize(
                      Number(e.target.value)
                    )
                  }
                  className={styles.range}
                />

                <div className={styles.rangeLabels}>
                  <span>1 kW</span>
                  <span>10 kW</span>
                </div>

              </div>


              {/* ELECTRICITY RATE */}

              <div className={styles.sliderGroup}>

                <div className={styles.sliderHeader}>
                  <label>
                    Electricity rate
                  </label>

                  <strong>
                    ₹{electricityRate}/unit
                  </strong>
                </div>

                <input
                  type="range"
                  min="4"
                  max="15"
                  step="0.5"
                  value={electricityRate}
                  onChange={(e) =>
                    setElectricityRate(
                      Number(e.target.value)
                    )
                  }
                  className={styles.range}
                />

                <div className={styles.rangeLabels}>
                  <span>₹4</span>
                  <span>₹15+</span>
                </div>

              </div>


              {/* COST */}

              <div className={styles.costBox}>

                <div>
                  <label>
                    Installation cost / kW
                  </label>

                  <small>
                    Adjust according to your quotation.
                  </small>
                </div>

                <div className={styles.costInput}>
                  <span>₹</span>

                  <input
                    type="number"
                    min="20000"
                    max="150000"
                    value={costPerKw}
                    onChange={(e) =>
                      setCostPerKw(
                        Number(e.target.value) || 0
                      )
                    }
                  />
                </div>

              </div>


              <div className={styles.calculatorInfo}>
                <CircleHelp size={16} />

                <span>
                  Generation is estimated using an
                  illustrative 120 units/kW/month
                  assumption. Actual generation varies
                  with location, sunlight, shading,
                  orientation and system design.
                </span>
              </div>

            </div>


            {/* RESULT SIDE */}

            <div className={styles.resultSide}>

              <span className={styles.resultEyebrow}>
                YOUR ESTIMATED SAVINGS
              </span>

              <div className={styles.mainResult}>

                <small>
                  Potential monthly savings
                </small>

                <strong>
                  {money(result.monthlySavings)}
                </strong>

                <span>
                  ≈ {money(result.annualSavings)} / year
                </span>

              </div>


              <div className={styles.subsidyResult}>

                <div className={styles.resultIcon}>
                  <PiggyBank size={21} />
                </div>

                <div>
                  <small>
                    Estimated central subsidy
                  </small>

                  <strong>
                    {money(result.subsidy)}
                  </strong>
                </div>

              </div>


              <div className={styles.resultGrid}>

                <div>
                  <small>System size</small>
                  <strong>{systemSize} kW</strong>
                </div>

                <div>
                  <small>Generation / month</small>
                  <strong>
                    ~
                    {number(
                      result.estimatedSolarGeneration
                    )}{" "}
                    units
                  </strong>
                </div>

                <div>
                  <small>Estimated system cost</small>
                  <strong>
                    {money(result.grossCost)}
                  </strong>
                </div>

                <div>
                  <small>After central CFA</small>
                  <strong>
                    {money(result.netCost)}
                  </strong>
                </div>

              </div>


              <div className={styles.paybackBox}>

                <div>
                  <span>
                    Indicative payback
                  </span>

                  <strong>
                    {result.payback > 0
                      ? `${result.payback.toFixed(1)} years`
                      : "—"}
                  </strong>
                </div>

                <div className={styles.paybackBar}>
                  <span
                    style={{
                      width: `${Math.min(
                        Math.max(
                          (1 /
                            Math.max(
                              result.payback,
                              0.5
                            )) *
                            100,
                          8
                        ),
                        100
                      )}%`,
                    }}
                  />
                </div>

              </div>


              <a
                href="#eligibility"
                className={styles.resultButton}
              >
                Check eligibility
                <ArrowRight size={18} />
              </a>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          ELIGIBILITY + PROCESS
      ===================================================== */}

      <section
        id="eligibility"
        className={styles.eligibilitySection}
      >
        <div className={styles.container}>

          <div className={styles.eligibilityGrid}>

            {/* ELIGIBILITY */}

            <div className={styles.infoColumn}>

              <div className={styles.orangeLabel}>
                <Check size={14} />
                ELIGIBILITY
              </div>

              <h2>
                Is your home
                <span> ready for solar?</span>
              </h2>

              <p>
                Before applying, make sure your property,
                electricity connection and rooftop meet
                the applicable requirements.
              </p>


              <div className={styles.checkList}>

                <div>
                  <span>
                    <Check size={16} />
                  </span>

                  <div>
                    <strong>
                      Indian residential consumer
                    </strong>

                    <p>
                      The applicable residential scheme
                      requirements must be satisfied.
                    </p>
                  </div>
                </div>


                <div>
                  <span>
                    <Check size={16} />
                  </span>

                  <div>
                    <strong>
                      Valid electricity connection
                    </strong>

                    <p>
                      Your property should have the
                      applicable residential electricity
                      connection.
                    </p>
                  </div>
                </div>


                <div>
                  <span>
                    <Check size={16} />
                  </span>

                  <div>
                    <strong>
                      Suitable rooftop
                    </strong>

                    <p>
                      Adequate usable rooftop area and
                      sunlight are important for system
                      installation.
                    </p>
                  </div>
                </div>


                <div>
                  <span>
                    <Check size={16} />
                  </span>

                  <div>
                    <strong>
                      Follow DISCOM requirements
                    </strong>

                    <p>
                      Technical approval, metering and
                      inspection follow the applicable
                      process.
                    </p>
                  </div>
                </div>

              </div>

            </div>


            {/* PROCESS */}

            <div className={styles.processColumn}>

              <div className={styles.orangeLabel}>
                <Zap size={14} />
                APPLICATION PROCESS
              </div>

              <h2>
                From application
                <span> to installation.</span>
              </h2>


              <div className={styles.processList}>

                <div className={styles.processItem}>
                  <div className={styles.processNumber}>
                    1
                  </div>

                  <div>
                    <strong>
                      Register & apply
                    </strong>

                    <p>
                      Submit your application through
                      the applicable solar scheme process.
                    </p>
                  </div>
                </div>


                <div className={styles.processItem}>
                  <div className={styles.processNumber}>
                    2
                  </div>

                  <div>
                    <strong>
                      Submit documents
                    </strong>

                    <p>
                      Provide the required electricity
                      connection and identity-related
                      information.
                    </p>
                  </div>
                </div>


                <div className={styles.processItem}>
                  <div className={styles.processNumber}>
                    3
                  </div>

                  <div>
                    <strong>
                      Technical approval
                    </strong>

                    <p>
                      The applicable DISCOM process and
                      technical requirements are completed.
                    </p>
                  </div>
                </div>


                <div className={styles.processItem}>
                  <div className={styles.processNumber}>
                    4
                  </div>

                  <div>
                    <strong>
                      Installation & inspection
                    </strong>

                    <p>
                      Complete installation, metering and
                      applicable inspection before subsidy
                      processing.
                    </p>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          STATE SUPPORT
      ===================================================== */}

      <section className={styles.stateSection}>
        <div className={styles.container}>

          <div className={styles.stateCard}>

            <div className={styles.stateIcon}>
              <MapPin size={23} />
            </div>

            <div>
              <span>
                STATE / DISCOM SUPPORT
              </span>

              <h3>
                Your final benefit may depend on your state.
              </h3>

              <p>
                State-level incentives, DISCOM procedures,
                technical requirements and timelines can
                differ. Verify the current rules applicable
                to your location before installation.
              </p>
            </div>

            <a href="#calculator">
              Recalculate
              <ArrowRight size={17} />
            </a>

          </div>

        </div>
      </section>


      {/* =====================================================
          FAQ
      ===================================================== */}

      <section className={styles.faqSection}>
        <div className={styles.container}>

          <div className={styles.sectionIntroCenter}>

            <div className={styles.orangeLabel}>
              <CircleHelp size={14} />
              FAQ
            </div>

            <h2>
              Solar questions,
              <span> answered.</span>
            </h2>

          </div>


          <div className={styles.faqList}>

            {faqs.map((faq, index) => {
              const open = faqOpen === index;

              return (
                <div
                  key={faq.q}
                  className={`${styles.faqItem} ${
                    open ? styles.faqActive : ""
                  }`}
                >

                  <button
                    type="button"
                    onClick={() =>
                      setFaqOpen(
                        open ? -1 : index
                      )
                    }
                  >
                    <span>{faq.q}</span>

                    {open ? (
                      <ChevronUp size={20} />
                    ) : (
                      <ChevronDown size={20} />
                    )}
                  </button>

                  {open && (
                    <p>
                      {faq.a}
                    </p>
                  )}

                </div>
              );
            })}

          </div>

        </div>
      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className={styles.finalCta}>

        <div className={styles.ctaGlow} />

        <div className={styles.container}>

          <div className={styles.ctaContent}>

            <div className={styles.ctaIcon}>
              <Sun size={27} />
            </div>

            <span>
              READY TO GO SOLAR?
            </span>

            <h2>
              Let your rooftop
              <br />
              start saving for you.
            </h2>

            <p>
              Check your estimated savings and discover
              whether rooftop solar could be right for
              your home.
            </p>

            <a
              href="#calculator"
              className={styles.ctaButton}
            >
              Calculate Savings
              <ArrowRight size={18} />
            </a>

            <small>
              Estimates are indicative and do not constitute
              subsidy approval or a guaranteed savings figure.
            </small>

          </div>

        </div>

      </section>

    </main>
  );
}