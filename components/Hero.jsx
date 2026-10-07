'use client';

import { motion } from 'framer-motion';
import styles from './Hero.module.css';

const ease = [0.22, 1, 0.36, 1];

export default function Hero() {
  return (
    <section
      className={styles.hero}
      aria-labelledby="hero-heading"
    >
      <motion.video
        className={styles.video}
        src="/assets/images/hero.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{
          duration: 1.8,
          ease,
        }}
      />

      <motion.div
        className={styles.overlay}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1.2,
        }}
      />

      <div className={styles.content}>

        <motion.div
          className={styles.eyebrow}
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.25,
            duration: 0.7,
            ease,
          }}
        >
          CLEAN ENERGY • SMARTER FUTURE
        </motion.div>


        <motion.h1
          id="hero-heading"
          className={styles.heading}
          initial={{
            opacity: 0,
            y: 55,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.35,
            duration: 0.9,
            ease,
          }}
        >
          Power Your Future
          <br />
          <span>With Solar Energy</span>
        </motion.h1>


        <motion.p
          className={styles.description}
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.5,
            duration: 0.75,
            ease,
          }}
        >
          Clean, reliable and sustainable energy solutions
          for a brighter tomorrow.
        </motion.p>


        <motion.div
          className={styles.actions}
          initial={{
            opacity: 0,
            y: 25,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.65,
            duration: 0.7,
            ease,
          }}
        >

          <motion.a
            href="#products"
            className={styles.primaryButton}
            whileHover={{
              scale: 1.04,
              y: -3,
            }}
            whileTap={{
              scale: 0.97,
            }}
          >
            Explore Products

            <motion.span
              animate={{
                x: [0, 5, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatDelay: 2,
              }}
            >
              →
            </motion.span>
          </motion.a>


          <motion.a
            href="#contact"
            className={styles.secondaryButton}
            data-contact-trigger="true"
            whileHover={{
              scale: 1.04,
              y: -3,
              backgroundColor: 'rgba(255,255,255,0.14)',
            }}
            whileTap={{
              scale: 0.97,
            }}
          >
            Get in Touch
          </motion.a>

        </motion.div>


        <motion.div
          className={styles.scrollHint}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 1.3,
            duration: 0.8,
          }}
        >
          <span>SCROLL TO EXPLORE</span>

          <motion.div
            className={styles.scrollLine}
            animate={{
              scaleY: [0.4, 1, 0.4],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </motion.div>

      </div>
    </section>
  );
}