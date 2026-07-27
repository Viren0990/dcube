"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import styles from "./Locations.module.css";

const locations = [
  {
    id: "pune",
    title: "Pune",
    subtitle: "Cultural & IT Capital",
    description: "Elevating the skyline of Maharashtra's cultural and IT hub. We specialize in developing premium commercial and residential spaces tailored for modern professionals and growing families.",
    metricLabel: "Focus Area",
    metricValue: "Urban Core & Tech Corridors"
  },
  {
    id: "sangli",
    title: "Sangli",
    subtitle: "Emerging Growth Hub",
    description: "Driving modern infrastructure and luxury living in one of the fastest-growing urban centers in the region, bridging the gap between heritage and contemporary lifestyle.",
    metricLabel: "Focus Area",
    metricValue: "Premium Residential Nodes"
  }
];

export default function Locations() {
  const [activeTab, setActiveTab] = useState(0);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="locations" className={styles.locationsSection}>
      <motion.h2 
        className={styles.bgText}
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <span>OUR</span>
        <span>LOCATIONS</span>
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
            {locations.map((loc, index) => (
              <motion.button
                key={loc.id}
                variants={itemVariants}
                className={`${styles.tabBtn} ${activeTab === index ? styles.activeTab : ""}`}
                onClick={() => setActiveTab(index)}
              >
                <div className={styles.tabHeader}>
                  <span className={styles.tabNumber}>0{index + 1}</span>
                  <span className={styles.tabLabel}>{loc.title}</span>
                </div>
                <span className={styles.tabSub}>{loc.subtitle}</span>
              </motion.button>
            ))}
          </div>

          <motion.div className={styles.contentCard} variants={itemVariants}>
            <div className={styles.cardHeader}>
              <h3 className={styles.cardTitle}>{locations[activeTab].title.toUpperCase()}</h3>
              <div className={styles.cardNumber}>0{activeTab + 1}</div>
            </div>
            
            <div className={styles.cardBody}>
              <div className={styles.cardSubtitle}>{locations[activeTab].subtitle}</div>
            </div>

            <div className={styles.cardFooter}>
              <div className={styles.cardData}>
                <span className={styles.dataLabel}>Description</span>
                <span className={styles.dataValue}>{locations[activeTab].description}</span>
              </div>
              <div className={styles.cardData}>
                <span className={styles.dataLabel}>{locations[activeTab].metricLabel}</span>
                <span className={styles.dataValue}>{locations[activeTab].metricValue}</span>
              </div>
            </div>
          </motion.div>
        </div>

        <div className={styles.rightPane}>
          {/* Background image is handled by CSS on the section itself */}
        </div>
      </motion.div>
    </section>
  );
}
