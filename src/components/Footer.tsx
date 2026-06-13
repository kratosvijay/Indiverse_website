import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Logo & Description */}
          <div className={styles.logoCol}>
            <Link href="/" className={styles.logoLink}>
              <Image
                src="/logo.png"
                alt="Indiverse Enterprises Logo"
                width={36}
                height={36}
              />
              <span className={styles.logoText}>Indiverse</span>
            </Link>
            <p className={styles.logoDesc}>
              Building intelligent mobile, SaaS, and cloud solutions. We develop custom software products and enterprise systems that help businesses scale securely.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={styles.colTitle}>Company</h4>
            <div className={styles.linksList}>
              <Link href="/" className={styles.link}>Home</Link>
              <Link href="/about" className={styles.link}>About Us</Link>
              <Link href="/services" className={styles.link}>Services</Link>
              <Link href="/products" className={styles.link}>Products</Link>
              <Link href="/portfolio" className={styles.link}>Portfolio</Link>
              <Link href="/careers" className={styles.link}>Careers</Link>
              <Link href="/contact" className={styles.link}>Contact</Link>
            </div>
          </div>

          {/* Services Quicklist */}
          <div>
            <h4 className={styles.colTitle}>Services</h4>
            <div className={styles.linksList}>
              <Link href="/services" className={styles.link}>Android App Dev</Link>
              <Link href="/services" className={styles.link}>iOS App Dev</Link>
              <Link href="/services" className={styles.link}>Flutter Dev</Link>
              <Link href="/services" className={styles.link}>SaaS & Cloud</Link>
              <Link href="/services" className={styles.link}>AI Solutions</Link>
              <Link href="/services" className={styles.link}>Enterprise Software</Link>
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className={styles.colTitle}>Get in Touch</h4>
            <div className={styles.contactInfo}>
              <div className={styles.contactItem}>
                <svg className={styles.contactIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                <span>7200678997</span>
              </div>
              <div className={styles.contactItem}>
                <svg className={styles.contactIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span style={{ wordBreak: "break-all" }}>kennettewesley@indiverseenterprises.com</span>
              </div>
              <div className={styles.contactItem}>
                <svg className={styles.contactIcon} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a8 8 0 0 0-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 0 0-8-8z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span>Indiverse Enterprises<br />www.indiverseenterprises.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className={styles.bottomSection}>
          <div className={styles.copyright}>
            © {currentYear} Indiverse Enterprises. All rights reserved.
          </div>
          <div className={styles.socials}>
            {/* WhatsApp */}
            <a href="https://wa.me/917200678997" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="WhatsApp">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
            </a>
            {/* LinkedIn */}
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            {/* GitHub */}
            <a href="https://github.com/kratosvijay/Indiverse_website" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="GitHub">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
