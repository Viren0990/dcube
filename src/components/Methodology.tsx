"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./Methodology.module.css";
// Triggering HMR

const steps = [
  {
    id: "planning",
    title: "Strategic Planning",
    subtitle: "Topography & Environmental",
    description: "Every monumental structure begins with the land. Our teams conduct exhaustive soil testing, environmental impact studies, and spatial planning to ensure the foundation is flawless.",
    metricLabel: "Time Investment",
    metricValue: "Weeks 1-4"
  },
  {
    id: "engineering",
    title: "Precision Engineering",
    subtitle: "Structural & Design",
    description: "We collaborate with top-tier architects and structural engineers. From wind-load resistance to seismic resilience, our blueprints are aggressively audited for safety and longevity.",
    metricLabel: "Safety Standard",
    metricValue: "Grade A+"
  },
  {
    id: "materials",
    title: "Premium Materials",
    subtitle: "Sourcing & Quality",
    description: "We absolutely refuse to cut corners. Our supply chain is strictly vetted to source only the highest grade steel, cement, and finishing materials available in the industry.",
    metricLabel: "Material Grade",
    metricValue: "ISO Certified"
  },
  {
    id: "execution",
    title: "Transparent Execution",
    subtitle: "Milestones & Delivery",
    description: "Our clients are partners. We maintain a strict policy of transparent reporting throughout the construction lifecycle, ensuring every milestone is communicated clearly and met on time.",
    metricLabel: "Client Updates",
    metricValue: "Bi-Weekly"
  }
];

export default function Methodology() {
  const [activeTab, setActiveTab] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="methodology" className={styles.methodologySection}>
      <motion.h2 
        className={styles.bgText}
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <span>OUR</span>
        <span>METHOD</span>
      </motion.h2>

      <motion.div 
        className={styles.container}
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
      >
        <div className={styles.leftPane}>
          {/* Background image handles the visual now */}
        </div>

        <div className={styles.rightPane}>
          <div className={styles.tabsContainer}>
            {steps.map((step, index) => (
              <motion.button
                key={step.id}
                variants={itemVariants}
                className={`${styles.tabBtn} ${activeTab === index ? styles.activeTab : ""}`}
                onClick={() => setActiveTab(index)}
              >
                <span className={styles.tabNumber}>0{index + 1}</span>
                <span className={styles.tabLabel}>{step.title}</span>
              </motion.button>
            ))}
          </div>

          <motion.div className={styles.contentCard} variants={itemVariants}>
            <div className={styles.cardHeader}>
              <h3 className={styles.cardTitle}>{steps[activeTab].title.toUpperCase()}</h3>
              <div className={styles.cardNumber}>0{activeTab + 1}</div>
            </div>
            
            <div className={styles.cardBody}>
              <div className={styles.cardSubtitle}>{steps[activeTab].subtitle}</div>
            </div>

            <div className={styles.cardFooter}>
              <div className={styles.cardData}>
                <span className={styles.dataLabel}>Description</span>
                <span className={styles.dataValue}>{steps[activeTab].description}</span>
              </div>
              <div className={styles.cardData}>
                <span className={styles.dataLabel}>{steps[activeTab].metricLabel}</span>
                <span className={styles.dataValue}>{steps[activeTab].metricValue}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
