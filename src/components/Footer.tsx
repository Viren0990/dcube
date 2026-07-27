import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <img src="/loggo.png" alt="D CUBE associates" className={styles.logo} />
            <p>Building Trust, Developing Legacies.</p>
          </div>
          
          <div className={styles.links}>
            <div className={styles.col}>
              <h4>Company</h4>
              <a href="#vision">Vision</a>
              <a href="#methodology">Methodology</a>
              <a href="#locations">Locations</a>
            </div>
            <div className={styles.col}>
              <h4>Contact</h4>
              <a href="mailto:dcubeassociate@gmail.com">dcubeassociate@gmail.com</a>
              <a href="tel:+91860898600">+91 860898600</a>
              <span>Pune, Maharashtra</span>
            </div>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} DCube Associate. All rights reserved.</p>
          <div className={styles.legal}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
