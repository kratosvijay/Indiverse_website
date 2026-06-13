import React from "react";
import Link from "next/link";
import styles from "../page.module.css"; // Reuse shared container and typography styles

export default function About() {
  const values = [
    {
      title: "Scalability First",
      desc: "Every system we build is designed as a cloud-native microservice architecture, allowing seamless user additions and infrastructure scaling.",
      icon: "⚡",
    },
    {
      title: "Enterprise Grade Security",
      desc: "Protecting business data is our primary design constraint. We implement end-to-end encryption, strict role-based access control, and continuous security patching.",
      icon: "🔒",
    },
    {
      title: "Client-Centric Engineering",
      desc: "We align our development schedules with clear deliverables. Our clients receive high-fidelity mockups, regular feedback rounds, and transparent sprint metrics.",
      icon: "🤝",
    },
  ];

  return (
    <div style={{ padding: "4rem 0" }}>
      {/* Background decoration */}
      <div className="glow-background" style={{ top: "15%", left: "5%" }}></div>

      {/* Header */}
      <section className={styles.section} style={{ paddingBottom: "2rem" }}>
        <div className={styles.sectionHeader} style={{ marginBottom: 0 }}>
          <span className={styles.sectionTag}>About Indiverse</span>
          <h1 className={styles.sectionTitle} style={{ fontSize: "3rem" }}>Technology Driven Innovation</h1>
          <p className={styles.sectionDesc} style={{ marginTop: "1rem" }}>
            Indiverse Enterprises is an established technology firm focused on engineering robust, custom mobile applications, SaaS subscription systems, real-time GPS tracking servers, and AI integrations.
          </p>
        </div>
      </section>

      {/* Mission / Context */}
      <section className={styles.section} style={{ padding: "2rem 1.5rem" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "1.5rem", fontSize: "1.05rem", lineHeight: "1.75" }}>
          <p>
            Founded on the principles of modular architecture and pixel-perfect design, Indiverse Enterprises serves as the parent brand for digital products and operational platforms that empower schools, logistics companies, retail chains, and startups.
          </p>
          <p>
            We operate out of a modern engineering stack. We believe that mobile and cloud software should not just run—it should be visually pleasing, responsive, and secure. We avoid typical placeholder integrations, ensuring every database trigger and layout element is optimized.
          </p>
        </div>
      </section>

      {/* Corporate Values */}
      <section className={styles.section} style={{ padding: "4rem 1.5rem" }}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTag}>Operational Principles</span>
          <h2 className={styles.sectionTitle}>Our Core Values</h2>
        </div>
        
        <div className={styles.grid3}>
          {values.map((v, index) => (
            <div key={index} className={styles.card} style={{ gap: "1rem", padding: "2.5rem" }}>
              <div style={{ fontSize: "2.5rem" }}>{v.icon}</div>
              <h3 className={styles.cardTitle}>{v.title}</h3>
              <p className={styles.cardDesc}>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Banner */}
      <section className={styles.section} style={{ padding: "2rem 1.5rem" }}>
        <div className={styles.careersBanner}>
          <div className={styles.careersText}>
            <h2 className={styles.sectionTitle} style={{ marginBottom: "0.5rem" }}>Let's Work Together</h2>
            <p style={{ color: "var(--color-text-body)", maxWidth: "500px" }}>
              Partner with Indiverse to digitize your operations and build secure mobile and cloud solutions.
            </p>
          </div>
          <Link href="/contact" className={styles.primaryCta} style={{ whiteSpace: "nowrap" }}>
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
