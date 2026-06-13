import React from "react";
import styles from "../page.module.css";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <div style={{ padding: "4rem 0" }}>
      {/* Background Decor */}
      <div className="glow-background" style={{ top: "10%", right: "10%" }}></div>

      {/* Header */}
      <section className={styles.section} style={{ paddingBottom: "2rem" }}>
        <div className={styles.sectionHeader} style={{ marginBottom: 0 }}>
          <span className={styles.sectionTag}>Connect With Us</span>
          <h1 className={styles.sectionTitle} style={{ fontSize: "3rem" }}>Get In Touch</h1>
          <p className={styles.sectionDesc} style={{ marginTop: "1rem" }}>
            Reach out to our leadership or request product proposals. Fill out the contact form, start a WhatsApp chat, or call our lines directly.
          </p>
        </div>
      </section>

      {/* Main Grid: Info + Form */}
      <section className={styles.section} style={{ padding: "2rem 1.5rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "1.2fr 1.5fr", gap: "4rem", alignItems: "start" }}>
          
          {/* Info Details */}
          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            
            {/* Primary Details Card */}
            <div className={styles.card} style={{ gap: "1.5rem", padding: "2.5rem" }}>
              <h2 style={{ fontSize: "1.5rem", fontWeight: "700", color: "var(--color-text-heading)" }}>Company Registry</h2>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", fontSize: "1rem" }}>
                <div>
                  <span style={{ fontSize: "0.8rem", fontWeight: "700", textTransform: "uppercase", color: "var(--color-primary)", display: "block" }}>
                    Company Name
                  </span>
                  <span style={{ fontWeight: "600", color: "var(--color-text-heading)", fontSize: "1.1rem" }}>Indiverse Enterprises</span>
                </div>
                
                <div>
                  <span style={{ fontSize: "0.8rem", fontWeight: "700", textTransform: "uppercase", color: "var(--color-primary)", display: "block" }}>
                    Contact Person
                  </span>
                  <span>Kennette Wesley Stephen</span>
                </div>
                
                <div>
                  <span style={{ fontSize: "0.8rem", fontWeight: "700", textTransform: "uppercase", color: "var(--color-primary)", display: "block" }}>
                    Email
                  </span>
                  <a href="mailto:kennettewesley@indiverseenterprises.com" style={{ color: "var(--color-secondary-text)", textDecoration: "none", fontWeight: "600" }}>
                    kennettewesley@indiverseenterprises.com
                  </a>
                </div>

                <div>
                  <span style={{ fontSize: "0.8rem", fontWeight: "700", textTransform: "uppercase", color: "var(--color-primary)", display: "block" }}>
                    Domain
                  </span>
                  <a href="http://www.indiverseenterprises.com" target="_blank" rel="noopener noreferrer" style={{ color: "var(--color-secondary-text)", textDecoration: "none", fontWeight: "600" }}>
                    www.indiverseenterprises.com
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Actions Card */}
            <div className={styles.card} style={{ gap: "1.5rem", padding: "2.5rem" }}>
              <h2 style={{ fontSize: "1.5rem", fontWeight: "700", color: "var(--color-text-heading)" }}>Instant Channels</h2>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                <a
                  href="https://wa.me/917200678997"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.primaryCta}
                  style={{ background: "#25D366", color: "#ffffff", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                  </svg>
                  WhatsApp
                </a>
                
                <a
                  href="tel:7200678997"
                  className={styles.secondaryCta}
                  style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem" }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  Call Now
                </a>
              </div>
            </div>

          </div>

          {/* Contact Form component */}
          <div>
            <ContactForm />
          </div>

        </div>
      </section>

      {/* Location Map Section */}
      <section className={styles.section} style={{ padding: "4rem 1.5rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2 className={styles.sectionTitle} style={{ fontSize: "1.75rem", marginBottom: "2rem", textAlign: "center" }}>Our Global Footprint</h2>
          
          <div style={{
            height: "350px",
            background: "#e2e8f0",
            borderRadius: "24px",
            border: "var(--border-glass)",
            position: "relative",
            overflow: "hidden",
            boxShadow: "var(--shadow-md)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}>
            {/* Vector style mock map content */}
            <div style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              opacity: 0.15,
              backgroundImage: "radial-gradient(#0f172a 1px, transparent 1px)",
              backgroundSize: "20px 20px"
            }}></div>
            
            <div style={{ zIndex: 2, textAlign: "center", background: "#ffffff", padding: "1.5rem 2rem", borderRadius: "16px", border: "var(--border-glass)", boxShadow: "var(--shadow-lg)" }}>
              <h3 style={{ fontWeight: "700", color: "var(--color-text-heading)", marginBottom: "0.25rem" }}>Indiverse Enterprises</h3>
              <p style={{ fontSize: "0.9rem", color: "var(--color-text-body)" }}>Kennette Wesley Stephen | +91 7200678997</p>
              <p style={{ fontSize: "0.8rem", color: "#94a3b8", marginTop: "0.5rem" }}>Coordinates: Chennai, Tamil Nadu, India (HQ)</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
