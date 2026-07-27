"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./Values.module.css";

const pillars = [
  {
    id: "quality",
    title: "Uncompromising Quality",
    subtitle: "Materials & Engineering",
    description: "We source the finest materials and employ cutting-edge structural engineering to ensure every square foot exceeds modern safety and luxury standards.",
    metricLabel: "Standard",
    metricValue: "Premium Grade"
  },
  {
    id: "transparency",
    title: "Absolute Transparency",
    subtitle: "Ethics & Communication",
    description: "Trust is our true currency. We guarantee clear communication, ethical practices, and complete honesty throughout the entire development lifecycle.",
    metricLabel: "Client Trust",
    metricValue: "100% Guaranteed"
  },
  {
    id: "sustainability",
    title: "Sustainable Future",
    subtitle: "Community & Environment",
    description: "We are committed to building environmentally responsible spaces that respect local communities and enhance the urban fabric for generations.",
    metricLabel: "Impact",
    metricValue: "Eco-Conscious"
  }
];

export default function Values() {
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
    <section id="vision" className={styles.valuesSection}>
      <motion.h2 
        className={styles.bgText}
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <span>OUR</span>
        <span>VISION</span>
      </motion.h2>

      <motion.div 
        className={styles.container}
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
      >
        <div className={styles.leftPane}>
          <div className={styles.tabsContainer}>
            {pillars.map((pillar, index) => (
              <motion.button
                key={pillar.id}
                variants={itemVariants}
                className={`${styles.tabBtn} ${activeTab === index ? styles.activeTab : ""}`}
                onClick={() => setActiveTab(index)}
              >
                <div className={styles.tabHeader}>
                  <span className={styles.tabNumber}>0{index + 1}</span>
                  <span className={styles.tabLabel}>{pillar.title}</span>
                </div>
                <span className={styles.tabSub}>{pillar.subtitle}</span>
              </motion.button>
            ))}
          </div>

          <motion.div className={styles.contentCard} variants={itemVariants}>
            <div className={styles.cardHeader}>
              <h3 className={styles.cardTitle}>{pillars[activeTab].title.toUpperCase()}</h3>
              <div className={styles.cardNumber}>0{activeTab + 1}</div>
            </div>
            
            <div className={styles.cardBody}>
              <div className={styles.cardSubtitle}>{pillars[activeTab].subtitle}</div>
            </div>

            <div className={styles.cardFooter}>
              <div className={styles.cardData}>
                <span className={styles.dataLabel}>Description</span>
                <span className={styles.dataValue}>{pillars[activeTab].description}</span>
              </div>
              <div className={styles.cardData}>
                <span className={styles.dataLabel}>{pillars[activeTab].metricLabel}</span>
                <span className={styles.dataValue}>{pillars[activeTab].metricValue}</span>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Right pane is empty to let the background image show through */}
        <div className={styles.rightPane}></div>
      </motion.div>
    </section>
  );
}
