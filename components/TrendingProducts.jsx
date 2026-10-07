'use client';

import { motion } from 'framer-motion';

import ProductCard from './ProductCard';
import { PRODUCTS } from '@/data/site';
import styles from './TrendingProducts.module.css';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 40,
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

export default function TrendingProducts() {
  return (
    <section
      id="products"
      className={`container ${styles.section}`}
      aria-labelledby="trending-heading"
    >
      <motion.h2
        id="trending-heading"
        className={styles.heading}
        initial={{
          opacity: 0,
          y: 35,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.4,
        }}
        transition={{
          duration: 0.75,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        OUR TRENDING PRODUCTS
      </motion.h2>

      <motion.ul
        className={styles.grid}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.08,
        }}
      >
        {PRODUCTS.map((product) => (
          <motion.li
            key={product.slug}
            variants={itemVariants}
          >
            <ProductCard product={product} />
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}