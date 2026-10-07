'use client';

import Link from 'next/link';
import {
  IndianRupee,
  Percent,
  Clock3,
  FileCheck2,
  Sun,
  Wallet,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Phone,
  ChevronDown,
} from 'lucide-react';

import { motion, MotionConfig } from 'framer-motion';

import styles from './solarLoan.module.css';

/* =========================================================
   DATA
========================================================= */

const LOAN_FEATURES = [
  {
    icon: IndianRupee,
    title: 'Flexible Financing',
    text: 'Choose a financing option based on your solar installation requirements.',
  },
  {
    icon: Percent,
    title: 'Competitive Rates',
    text: 'Explore suitable solar financing options from available lending partners.',
  },
  {
    icon: Clock3,
    title: 'Easy Repayment',
    text: 'Select a repayment structure that works with your monthly budget.',
  },
  {
    icon: FileCheck2,
    title: 'Simple Process',
    text: 'Get assistance with documentation and the application process.',
  },
];

const BENEFITS = [
  {
    icon: Sun,
    title: 'Go Solar Without Paying Everything Upfront',
    text: 'Finance your solar installation instead of paying the entire project cost at once.',
  },
  {
    icon: Wallet,
    title: 'Manage Your Cash Flow',
    text: 'Keep your savings available for other important financial requirements.',
  },
  {
    icon: ShieldCheck,
    title: 'Guidance Throughout the Process',
    text: 'YES Genesis can help you understand the financing process and required documentation.',
  },
];

const STEPS = [
  {
    number: '01',
    title: 'Submit Your Enquiry',
    text: 'Share your basic details and tell us about your solar requirement.',
  },
  {
    number: '02',
    title: 'Discuss Your Requirement',
    text: 'Our team understands your project size, estimated requirement and financing needs.',
  },
  {
    number: '03',
    title: 'Choose a Financing Option',
    text: 'Review the available financing options and select the one that suits you.',
  },
  {
    number: '04',
    title: 'Complete Documentation',
    text: 'Submit the required documents and proceed with the lender application.',
  },
];

const ELIGIBILITY = [
  'Indian resident applicants',
  'Homeowners and eligible property owners',
  'Residential, commercial or other eligible solar projects',
  'Applicant must satisfy the lending partner’s credit requirements',
  'Loan approval is subject to lender terms and verification',
];

const DOCUMENTS = [
  'PAN Card',
  'Aadhaar Card / valid identity proof',
  'Address proof',
  'Bank account details',
  'Income / employment or business documents, where applicable',
  'Solar installation or quotation details',
];

const FAQS = [
  {
    question: 'What is a solar loan?',
    answer:
      'A solar loan is financing used to fund an eligible solar installation. Instead of paying the full project cost upfront, the applicant repays the financed amount according to the lender’s agreed terms.',
  },
  {
    question: 'How much solar loan can I get?',
    answer:
      'The eligible loan amount depends on factors such as project cost, applicant profile, income, credit assessment and the terms of the lending partner.',
  },
  {
    question: 'What documents are required?',
    answer:
      'Typical documents can include identity proof, address proof, PAN, bank details and income or business documents. The exact requirements can vary by lender.',
  },
  {
    question: 'Is loan approval guaranteed?',
    answer:
      'No. Loan approval is subject to the eligibility criteria, verification and credit assessment of the relevant lending partner.',
  },
  {
    question: 'Can I use financing for a residential solar installation?',
    answer:
      'Eligible residential solar projects may qualify for financing depending on the lending partner and applicant profile.',
  },
];

/* =========================================================
   ANIMATION VARIANTS
========================================================= */

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 45,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeRight = {
  hidden: {
    opacity: 0,
    x: 50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const scaleReveal = {
  hidden: {
    opacity: 0,
    scale: 0.88,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const staggerItem = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* =========================================================
   REUSABLE MOTION WRAPPER
========================================================= */

function Reveal({
  children,
  variants = fadeUp,
  delay = 0,
  className = '',
}) {
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.18,
      }}
      transition={{
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}

/* =========================================================
   PAGE
========================================================= */

export default function SolarLoanPage() {
  return (
    <MotionConfig
      reducedMotion="user"
      transition={{
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <main className={styles.page}>

        {/* =====================================================
            HERO
        ===================================================== */}

        <section className={styles.hero}>

          <div className={styles.heroContent}>

            <Reveal delay={0.05}>
              <span className={styles.eyebrow}>
                SOLAR FINANCING
              </span>
            </Reveal>

            <Reveal delay={0.12}>
              <h1>
                Make the switch to
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.25,
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {' '}
                  solar energy{' '}
                </motion.span>
                with easy financing.
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p>
                Explore solar loan options designed to help you
                finance your solar installation without paying the
                complete project cost upfront.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className={styles.heroActions}>

                <motion.div
                  whileHover={{
                    scale: 1.04,
                    y: -2,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                >
                  <Link
                    href="#loan-enquiry"
                    className={styles.primaryButton}
                    data-contact-trigger="true"
                  >
                    APPLY FOR SOLAR LOAN
                    <motion.span
                      animate={{ x: [0, 4, 0] }}
                      transition={{
                        duration: 1.6,
                        repeat: Infinity,
                        repeatDelay: 2,
                      }}
                    >
                      <ArrowRight size={18} />
                    </motion.span>
                  </Link>
                </motion.div>

                <motion.div
                  whileHover={{
                    y: -2,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                >
                  <Link
                    href="#how-it-works"
                    className={styles.secondaryButton}
                  >
                    HOW IT WORKS
                  </Link>
                </motion.div>

              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className={styles.heroTrust}>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.5,
                    type: 'spring',
                    stiffness: 200,
                    damping: 15,
                  }}
                >
                  <CheckCircle2 size={18} />
                </motion.div>

                <span>
                  Financing is subject to lender eligibility and approval.
                </span>
              </div>
            </Reveal>

          </div>


          {/* =====================================================
              HERO VISUAL
          ===================================================== */}

          <motion.div
            className={styles.heroVisual}
            variants={scaleReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
          >

            <motion.div
              className={styles.visualGlow}
              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.45, 0.7, 0.45],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

            {/* Sun */}

            <motion.div
              className={styles.sun}
              animate={{
                y: [0, -12, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <Sun size={34} strokeWidth={1.8} />
            </motion.div>


            {/* House */}

            <motion.div
              className={styles.house}
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >

              {/* Solar roof */}

              <div className={styles.roof}>

                <motion.div
                  className={styles.solarPanelGrid}
                  animate={{
                    y: [0, -2, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <div />
                  <div />
                  <div />
                  <div />
                  <div />
                  <div />
                  <div />
                  <div />
                </motion.div>

              </div>


              {/* House */}

              <div className={styles.houseBody}>

                <motion.div
                  className={styles.window}
                  animate={{
                    opacity: [0.75, 1, 0.75],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <span />
                  <span />
                  <span />
                  <span />
                </motion.div>

                <div className={styles.door}>
                  <span />
                </div>

              </div>

            </motion.div>


            {/* Ground */}

            <motion.div
              className={styles.ground}
              animate={{
                scaleX: [1, 1.03, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />


            {/* Financing Card */}

            <motion.div
              className={styles.financeCard}
              initial={{
                opacity: 0,
                x: 50,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.65,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              animate={{
                y: [0, -8, 0],
              }}
            >

              <motion.div
                className={styles.financeIcon}
                animate={{
                  rotate: [0, -5, 5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <IndianRupee size={21} />
              </motion.div>

              <div>
                <span>SOLAR FINANCING</span>
                <strong>POWER YOUR FUTURE</strong>
              </div>

            </motion.div>

          </motion.div>

        </section>


        {/* =====================================================
            FEATURES
        ===================================================== */}

        <section className={styles.featuresSection}>

          <Reveal>
            <div className={styles.sectionIntro}>

              <span>01</span>

              <div>
                <h2>Solar financing made simpler</h2>

                <p>
                  Get guidance from enquiry to financing so you can
                  focus on making the move towards clean energy.
                </p>
              </div>

            </div>
          </Reveal>


          <motion.div
            className={styles.featureGrid}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.12,
            }}
          >

            {LOAN_FEATURES.map((item) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  className={styles.featureCard}
                  variants={staggerItem}
                  whileHover={{
                    y: -8,
                    scale: 1.015,
                    transition: {
                      duration: 0.25,
                    },
                  }}
                >

                  <motion.div
                    className={styles.iconBox}
                    whileHover={{
                      scale: 1.08,
                      rotate: 4,
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 300,
                      damping: 15,
                    }}
                  >
                    <Icon
                      size={24}
                      strokeWidth={1.8}
                    />
                  </motion.div>

                  <h3>{item.title}</h3>

                  <p>{item.text}</p>

                </motion.div>
              );
            })}

          </motion.div>

        </section>


        {/* =====================================================
            BENEFITS
        ===================================================== */}

        <section className={styles.benefitsSection}>

          <Reveal variants={fadeLeft}>
            <div className={styles.sectionHeading}>

              <span>02</span>

              <h2>Why consider a solar loan?</h2>

            </div>
          </Reveal>


          <motion.div
            className={styles.benefitsGrid}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.12,
            }}
          >

            {BENEFITS.map((item) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  className={styles.benefitCard}
                  variants={staggerItem}
                  whileHover={{
                    y: -8,
                    transition: {
                      duration: 0.25,
                    },
                  }}
                >

                  <motion.div
                    className={styles.benefitIcon}
                    whileHover={{
                      scale: 1.1,
                      rotate: -5,
                    }}
                    transition={{
                      type: 'spring',
                      stiffness: 300,
                      damping: 16,
                    }}
                  >
                    <Icon
                      size={25}
                      strokeWidth={1.8}
                    />
                  </motion.div>

                  <h3>{item.title}</h3>

                  <p>{item.text}</p>

                </motion.div>
              );
            })}

          </motion.div>

        </section>


        {/* =====================================================
            HOW IT WORKS
        ===================================================== */}

        <section
          id="how-it-works"
          className={styles.stepsSection}
        >

          <Reveal>
            <div className={styles.sectionHeading}>

              <span>03</span>

              <h2>How the solar loan process works</h2>

            </div>
          </Reveal>


          <motion.div
            className={styles.stepsGrid}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.1,
            }}
          >

            {STEPS.map((step) => (

              <motion.div
                key={step.number}
                className={styles.stepCard}
                variants={staggerItem}
                whileHover={{
                  y: -6,
                  transition: {
                    duration: 0.25,
                  },
                }}
              >

                <motion.span
                  className={styles.stepNumber}
                  whileHover={{
                    scale: 1.08,
                  }}
                >
                  {step.number}
                </motion.span>

                <h3>{step.title}</h3>

                <p>{step.text}</p>

              </motion.div>

            ))}

          </motion.div>

        </section>


        {/* =====================================================
            ELIGIBILITY + DOCUMENTS
        ===================================================== */}

        <section className={styles.requirementsSection}>

          {/* Eligibility */}

          <Reveal
            variants={fadeLeft}
          >
            <motion.div
              className={styles.requirementCard}
              whileHover={{
                y: -5,
              }}
            >

              <div className={styles.requirementHeader}>

                <span>04</span>

                <h2>Basic eligibility</h2>

              </div>

              <ul>

                {ELIGIBILITY.map((item, index) => (

                  <motion.li
                    key={item}
                    initial={{
                      opacity: 0,
                      x: -15,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: index * 0.08,
                      duration: 0.45,
                    }}
                  >

                    <CheckCircle2 size={18} />

                    <span>{item}</span>

                  </motion.li>

                ))}

              </ul>

            </motion.div>
          </Reveal>


          {/* Documents */}

          <Reveal
            variants={fadeRight}
            delay={0.1}
          >
            <motion.div
              className={styles.requirementCard}
              whileHover={{
                y: -5,
              }}
            >

              <div className={styles.requirementHeader}>

                <span>05</span>

                <h2>Documents you may need</h2>

              </div>

              <ul>

                {DOCUMENTS.map((item, index) => (

                  <motion.li
                    key={item}
                    initial={{
                      opacity: 0,
                      x: 15,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: index * 0.08,
                      duration: 0.45,
                    }}
                  >

                    <CheckCircle2 size={18} />

                    <span>{item}</span>

                  </motion.li>

                ))}

              </ul>

            </motion.div>
          </Reveal>

        </section>


        {/* =====================================================
            ENQUIRY CTA
        ===================================================== */}

        <section
          id="loan-enquiry"
          className={styles.enquirySection}
        >

          <Reveal>

            <div className={styles.enquiryContent}>

              <span className={styles.eyebrow}>
                SOLAR LOAN ENQUIRY
              </span>

              <h2>
                Ready to explore your
                solar financing options?
              </h2>

              <p>
                Speak with YES Genesis about your solar requirement
                and get guidance on the next steps.
              </p>


              <div className={styles.enquiryActions}>

                <motion.a
                  href="tel:+919517889999"
                  className={styles.primaryButton}
                  whileHover={{
                    scale: 1.04,
                    y: -2,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                >
                  <Phone size={18} />
                  CALL US
                </motion.a>


                <motion.a
                  href="mailto:Prabhakar.d@yesgenesis.in"
                  className={styles.lightButton}
                  whileHover={{
                    scale: 1.04,
                    y: -2,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                >
                  SEND AN EMAIL

                  <motion.span
                    animate={{
                      x: [0, 4, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatDelay: 2,
                    }}
                  >
                    <ArrowRight size={18} />
                  </motion.span>

                </motion.a>

              </div>

            </div>

          </Reveal>


          <Reveal
            variants={fadeRight}
            delay={0.15}
          >

            <motion.div
              className={styles.enquiryCard}
              whileHover={{
                y: -8,
                scale: 1.015,
              }}
            >

              <motion.div
                className={styles.enquiryCardIcon}
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <IndianRupee size={27} />
              </motion.div>

              <strong>Need help choosing?</strong>

              <p>
                Our team can help you understand the solar
                financing process and required documents.
              </p>

              <motion.a
                href="tel:+919517889999"
                whileHover={{
                  x: 4,
                }}
              >
                +91 9517889999
              </motion.a>

            </motion.div>

          </Reveal>

        </section>


        {/* =====================================================
            FAQ
        ===================================================== */}

        <section className={styles.faqSection}>

          <Reveal>

            <div className={styles.sectionHeading}>

              <span>06</span>

              <h2>Frequently asked questions</h2>

            </div>

          </Reveal>


          <motion.div
            className={styles.faqList}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.1,
            }}
          >

            {FAQS.map((faq) => (

              <motion.details
                key={faq.question}
                className={styles.faqItem}
                variants={staggerItem}
                whileHover={{
                  x: 3,
                }}
              >

                <summary>

                  <span>{faq.question}</span>

                  <motion.span
                    whileHover={{
                      rotate: 180,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                  >
                    <ChevronDown size={20} />
                  </motion.span>

                </summary>

                <p>{faq.answer}</p>

              </motion.details>

            ))}

          </motion.div>

        </section>


        {/* =====================================================
            DISCLAIMER
        ===================================================== */}

        <Reveal>

          <section className={styles.disclaimer}>

            <strong>Important:</strong>{' '}

            Solar loan availability, interest rates, tenure,
            loan amount, documentation and approval are subject
            to the terms, conditions and eligibility criteria of
            the respective lending partner. YES Genesis does not
            guarantee loan approval.

          </section>

        </Reveal>

      </main>
    </MotionConfig>
  );
}