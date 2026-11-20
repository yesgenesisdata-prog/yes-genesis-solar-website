
'use client';

import Link from 'next/link';
import { useState } from 'react';
import {
  ArrowRight,
  Calculator,
  Sun,
  Home,
  Building2,
} from 'lucide-react';

import styles from '../subsidy/subsidy.module.css';

function estimateSolar(units, customerType) {
  const generationPerKw = 120;
  const recommendedKw =
    customerType === 'residential'
      ? Math.min(3, Math.max(1, Math.ceil(units / generationPerKw)))
      : Math.max(1, Math.ceil(units / generationPerKw));

  const monthlyGeneration = recommendedKw * generationPerKw;
  const annualGeneration = monthlyGeneration * 12;
  const annualSavings = Math.round(
    Math.min(annualGeneration, units * 12) * 8
  );

  const subsidy =
    customerType === 'residential'
      ? recommendedKw === 1 ? 30000
        : recommendedKw === 2 ? 60000 : 78000
      : 0;

  const installationCost = recommendedKw * 55000;
  const netCost = Math.max(0, installationCost - subsidy);

  return {
    capacity: `${recommendedKw} kW`,
    subsidy: `₹${subsidy.toLocaleString('en-IN')}`,
    monthlyGeneration: `${monthlyGeneration} units`,
    annualGeneration: `${annualGeneration.toLocaleString('en-IN')} units`,
    annualSavings: `₹${annualSavings.toLocaleString('en-IN')}`,
    installationCost: `₹${installationCost.toLocaleString('en-IN')}`,
    netCost: `₹${netCost.toLocaleString('en-IN')}`,
    payback: annualSavings
      ? `${(netCost / annualSavings).toFixed(1)} years`
      : '—',
    coverage: Math.min(
      100,
      Math.round((monthlyGeneration / units) * 100)
    ),
  };
}

export default function CalculatorPage() {
  const [customerType, setCustomerType] = useState('residential');
  const [units, setUnits] = useState(250);

  const estimate = estimateSolar(units, customerType);
  const maxUnits = customerType === 'residential' ? 1000 : 20000;
  const minUnits = customerType === 'residential' ? 50 : 500;

  const changeType = (type) => {
    setCustomerType(type);
    setUnits(type === 'residential' ? 250 : 3000);
  };

  return (
    <main>
      <section className={styles.calculatorSection}>
        <div className={styles.container}>
          <div className={styles.calculator}>

            <div className={styles.calculatorLeft}>
              <span className={styles.sectionTag}>
                <Calculator size={16} />
                QUICK SOLAR ESTIMATOR
              </span>

              <h2>Find the right solar system for your needs.</h2>

              <p>
                Calculate your solar requirements, estimated
                installation cost and potential savings.
              </p>

              <label>I need solar for</label>

              <div style={{
                display: 'flex',
                gap: '12px',
                marginTop: '12px',
              }}>
                <button
                  type="button"
                  onClick={() => changeType('residential')}
                  style={{
                    flex: 1,
                    padding: '14px',
                    borderRadius: '12px',
                    border: customerType === 'residential'
                      ? '2px solid #f97316'
                      : '1px solid #dfe4ed',
                    background: customerType === 'residential'
                      ? '#fff5ee' : '#fff',
                    color: '#131f45',
                    cursor: 'pointer',
                    fontWeight: 700,
                  }}
                >
                  <Home size={17} /> Residential
                </button>

                <button
                  type="button"
                  onClick={() => changeType('commercial')}
                  style={{
                    flex: 1,
                    padding: '14px',
                    borderRadius: '12px',
                    border: customerType === 'commercial'
                      ? '2px solid #f97316'
                      : '1px solid #dfe4ed',
                    background: customerType === 'commercial'
                      ? '#fff5ee' : '#fff',
                    color: '#131f45',
                    cursor: 'pointer',
                    fontWeight: 700,
                  }}
                >
                  <Building2 size={17} /> Commercial
                </button>
              </div>

              <label htmlFor="units">
                Average monthly electricity consumption
              </label>

              <div className={styles.inputWrapper}>
                <input
                  id="units"
                  type="number"
                  min={minUnits}
                  max={maxUnits}
                  value={units}
                  onChange={(e) => setUnits(
                    Math.min(
                      maxUnits,
                      Math.max(minUnits, Number(e.target.value) || minUnits)
                    )
                  )}
                />
                <span>units / month</span>
              </div>

              <div className={styles.rangeLabels}>
                <span>{minUnits} units</span>
                <strong>{units} units</strong>
                <span>{maxUnits} units</span>
              </div>

              <input
                className={styles.range}
                type="range"
                min={minUnits}
                max={maxUnits}
                step="10"
                value={units}
                onChange={(e) => setUnits(Number(e.target.value))}
              />

              <div className={styles.estimatorHint}>
                <Sun size={17} />
                <span>
                  Your estimate updates automatically as you
                  change your electricity usage.
                </span>
              </div>
            </div>

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
                <div style={{
                  width: `${estimate.coverage}%`,
                }} />
              </div>

              <div className={styles.coverageText}>
                <span>Estimated usage coverage</span>
                <strong>{estimate.coverage}%</strong>
              </div>

              <div className={styles.resultGrid}>
                <div className={styles.resultBox}>
                  <span>Central subsidy</span>
                  <strong>{customerType === 'residential'
                    ? estimate.subsidy : 'Not applicable'}</strong>
                </div>

                <div className={styles.resultBox}>
                  <span>Installation cost</span>
                  <strong>{estimate.installationCost}</strong>
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
                  <span>Potential annual savings</span>
                  <strong>{estimate.annualSavings}</strong>
                </div>

                <div className={styles.resultBox}>
                  <span>Estimated payback</span>
                  <strong>{estimate.payback}</strong>
                </div>
              </div>

              <div style={{
                marginTop: '18px',
                padding: '14px',
                background: '#fff',
                borderRadius: '12px',
                color: '#131f45',
              }}>
                <small>Estimated cost after subsidy</small>
                <h2>{estimate.netCost}</h2>
              </div>

              <Link
                href="/#contact"
                className={styles.resultButton}
              >
                Get a Solar Quote
                <ArrowRight size={17} />
              </Link>

              <small className={styles.calculatorDisclaimer}>
                Estimates are indicative only. The assumed installation
                cost is ₹55,000 per kW and generation is 120 units per
                kW per month. Residential subsidy is subject to scheme
                eligibility and government approval. Commercial
                installations are not assigned residential central
                subsidy. Actual pricing, generation and savings depend
                on site conditions, tariff and system design.
              </small>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
