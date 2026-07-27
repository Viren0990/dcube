"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import bgDesktop from "../../public/bg.jpg";
import bgMobile from "../../public/mob_hero.jpg";
import styles from "./Hero2.module.css";

export default function Hero2() {
  const [isContactPopupOpen, setIsContactPopupOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setFormStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setFormStatus("error");
      }
    } catch (error) {
      console.error(error);
      setFormStatus("error");
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants: any = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div className={styles.hero2Container}>
      <div className={styles.bgWrapperDesktop}>
        <Image src={bgDesktop} alt="Background" fill priority placeholder="blur" sizes="100vw" style={{ objectFit: 'cover', objectPosition: 'center' }} />
      </div>
      <div className={styles.bgWrapperMobile}>
        <Image src={bgMobile} alt="Background" fill priority placeholder="blur" sizes="100vw" style={{ objectFit: 'cover', objectPosition: 'center bottom' }} />
      </div>

      <motion.header 
        className={styles.header}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className={styles.brand}>
          <img src="/loggo.png" alt="D CUBE associates" className={styles.brandImage} />
        </div>
        <nav className={styles.nav}>
          <a href="#vision">Vision</a>
          <a href="#methodology">Methodology</a>
          <a href="#locations">Locations</a>
          <button className={styles.navContactBtn} onClick={() => setIsContactPopupOpen(true)}>Contact</button>
        </nav>
        <div className={styles.headerActions}>
          <button className={`${styles.btn} ${styles.btnSolid}`} onClick={() => setIsContactPopupOpen(true)}>
            Contact ↗
          </button>
        </div>
      </motion.header>

      <section className={styles.hero}>
        <motion.div 
          className={styles.headlineBlock}
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <h1>
            <motion.span variants={itemVariants}>BUILDING</motion.span>
            <motion.span variants={itemVariants}>LASTING</motion.span>
            <motion.span variants={itemVariants}>LEGACIES</motion.span>
          </h1>
          <motion.p className={styles.sub} variants={itemVariants}>
            Premier Real Estate Developers In<br />
            <b>Pune & Sangli, Maharashtra</b>
          </motion.p>
          <motion.button className={styles.mobileMainCta} onClick={() => setIsContactPopupOpen(true)} variants={itemVariants}>
            Discover Projects ↗
          </motion.button>
        </motion.div>

        <motion.div 
          className={styles.visual}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles.scene}>
            <div className={styles.phone}>
              <div className={styles.phoneHeader}>
                <div className={styles.addressBlock}>
                  <div className={styles.addressTitle}>DCube Headquarters</div>
                  <div className={styles.addressSub}>Pune, Maharashtra</div>
                </div>
                <div className={styles.headerIcons}>
                  <button className={styles.iconBtn}>
                    <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none"><path d="M4 21v-7m0-4V3m8 18v-9m0-4V3m8 18v-5m0-4V3M1 14h6m2-6h6m2 8h6"/></svg>
                  </button>
                  <button className={styles.iconBtn}>
                    <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4m0-4h.01"/></svg>
                  </button>
                </div>
              </div>

              <div className={styles.card}>
                <div className={styles.label}>Vision</div>
                <div className={styles.value}>Redefining Spaces</div>
                <svg className={styles.spark} viewBox="0 0 96 34">
                  <polyline
                    points="0,26 12,20 24,23 36,12 48,15 60,6 72,10 84,3 96,7"
                    fill="none"
                    stroke="var(--violet)"
                    strokeWidth="2"
                  />
                </svg>
                <div className={styles.metricsRow}>
                  <div className={styles.metric}>
                    <div className={styles.label}>Happy Families</div>
                    <div className={styles.value}>2,500+</div>
                    <div className={styles.delta}>
                      <svg viewBox="0 0 10 10">
                        <circle cx="5" cy="5" r="5" fill="#3FDC9A" />
                        <path d="M5 2L8 5H2L5 2Z" fill="#2B3140" />
                      </svg>
                      Growing
                    </div>
                  </div>
                  <div className={styles.dividerVertical}></div>
                  <div className={styles.metric}>
                    <div className={styles.label}>Presence</div>
                    <div className={styles.value}>2 Cities</div>
                    <div className={styles.delta}>
                      <svg viewBox="0 0 10 10">
                        <circle cx="5" cy="5" r="5" fill="#3FDC9A" />
                        <path d="M5 2L8 5H2L5 2Z" fill="#2B3140" />
                      </svg>
                      Pune & Sangli
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.details}>
                <div className={styles.drow}>
                  <span className={styles.k}>Status</span>
                  <span className={styles.pill}>Premier Builder</span>
                </div>
                <div className={styles.drow}>
                  <span className={styles.k}>Focus</span>
                  <span className={styles.v}>Residences & Commercial</span>
                </div>
                <div className={styles.drow}>
                  <span className={styles.k}>Experience</span>
                  <span className={styles.v}>15+ Years</span>
                </div>
                <div className={styles.drow}>
                  <span className={styles.k}>Locations</span>
                  <span className={styles.v}>Pune, Sangli</span>
                </div>
                <div className={styles.drow}>
                  <span className={styles.k}>Quality</span>
                  <span className={styles.v}>Uncompromised</span>
                </div>
                <div className={styles.drow}>
                  <span className={styles.k}>Delivery</span>
                  <span className={styles.v}>Always On-Time</span>
                </div>
                <div className={styles.drow}>
                  <span className={styles.k}>Core Value</span>
                  <span className={styles.v}>100% Transparent</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <motion.button 
        className={styles.ctaBar} 
        onClick={() => setIsContactPopupOpen(true)}
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <span>Get in Touch</span>
        <span className={styles.arrow}>
          <svg width="18" height="18" viewBox="0 0 18 18">
            <path
              d="M4 14L14 4M14 4H6M14 4V12"
              stroke="#fff"
              strokeWidth="1.6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </motion.button>

      {isContactPopupOpen && (
        <div className={styles.modalOverlay} onClick={() => setIsContactPopupOpen(false)}>
          <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
            <button className={styles.closeBtn} onClick={() => setIsContactPopupOpen(false)}>✕</button>
            <h2>Contact Us</h2>
            {formStatus === "success" ? (
              <p style={{ color: "#3FDC9A" }}>Message sent successfully! We'll get back to you soon.</p>
            ) : (
              <p>Thank you for your interest in DCube Associate. Drop us a message below.</p>
            )}
            {formStatus === "error" && (
              <p style={{ color: "#ED1C24", marginTop: "-10px" }}>Something went wrong. Please try again.</p>
            )}
            <form onSubmit={handleFormSubmit} className={styles.contactForm}>
              <input 
                type="text" 
                placeholder="Name" 
                required 
                value={formData.name} 
                onChange={e => setFormData({ ...formData, name: e.target.value })} 
                disabled={formStatus === "submitting"}
              />
              <input 
                type="email" 
                placeholder="Email Address" 
                required 
                value={formData.email} 
                onChange={e => setFormData({ ...formData, email: e.target.value })} 
                disabled={formStatus === "submitting"}
              />
              <textarea 
                placeholder="How can we help you?" 
                rows={4} 
                required
                value={formData.message} 
                onChange={e => setFormData({ ...formData, message: e.target.value })}
                disabled={formStatus === "submitting"}
              ></textarea>
              <button type="submit" className={styles.submitBtn} disabled={formStatus === "submitting"}>
                {formStatus === "submitting" ? "Sending..." : "Send Message ↗"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}