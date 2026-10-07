'use client';

import { motion } from 'framer-motion';

import CategoryCard from './CategoryCard';
import { CATEGORIES } from '@/data/site';
import styles from './Categories.module.css';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 55,
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

export default function Categories() {
  return (
    <section
      className={`container ${styles.section}`}
      aria-labelledby="categories-heading"
    >
      <h2
        id="categories-heading"
        className="sr-only"
      >
        Energy categories
      </h2>

      <motion.ul
        className={styles.grid}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.15,
        }}
      >
        {CATEGORIES.map((category) => (
          <motion.li
            key={category.slug}
            variants={itemVariants}
            whileHover={{
              y: -8,
              transition: {
                duration: 0.25,
              },
            }}
          >
            <CategoryCard category={category} />
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}