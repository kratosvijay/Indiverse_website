import React from "react";
import Link from "next/link";
import styles from "../page.module.css";

export default function Products() {
  const modules = [
    {
      title: "Principal Dashboard",
      desc: "Get school-wide compliance reports, teacher logs, student metrics, live financial tracking, and push notifications to all users instantly.",
      icon: "👔",
    },
    {
      title: "Teacher Portal",
      desc: "Mark student attendance in 10 seconds, plan lessons, upload daily homework assignments, schedule exams, and record grades.",
      icon: "👩‍🏫",
    },
    {
      title: "Parent App",
      desc: "View student grades, track active attendance, view homework attachments, settle digital fee invoices, and track transport live on a map.",
      icon: "📱",
    },
    {
      title: "Office Staff ERP",
      desc: "Automate fee collections, process admissions, generate custom report cards, issue leaving certificates, and organize payroll databases.",
      icon: "🏢",
    },
    {
      title: "Driver App",
      desc: "Turn on live GPS tracking for school routes, view list of student pick-up nodes, and alert parents when the bus is 5 minutes away.",
      icon: "🚌",
    },
    {
      title: "Gatekeeper Security",
      desc: "Scan student QR passes during check-in and check-out to log attendance automatically and send instant entry alerts to parents.",
      icon: "🛡️",
    },
  ];

  const features = [
    { name: "Attendance Management", desc: "Automated logs via QR scan or teacher dashboard." },
    { name: "Homework & Assignment Tracker", desc: "Allows teachers to attach worksheets and PDFs." },
    { name: "Exam Planner & Results", desc: "Dynamic grade books, report card templates, and metrics." },
    { name: "Certificate Generation", desc: "Generate transfer certificates and leaving certificates in 1-click." },
    { name: "QR Gate Pass & Security", desc: "Encrypts student IDs into secure passes for entry scans." },
    { name: "Live GPS Transport Tracking", desc: "Combines driver telemetry with parent route maps." },
    { name: "Circulars & Push Alerts", desc: "Immediate broadcast notifications to parents or classes." },
    { name: "Fee Management Engine", desc: "Digital invoices, transaction histories, and reminders." },
  ];

  return (
    <div style={{ padding: "4rem 0" }}>
      {/* Background Decor */}
      <div className="glow-background" style={{ top: "15%", left: "10%" }}></div>

      {/* Header */}
      <section className={styles.section} style={{ paddingBottom: "2rem" }}>
        <div className={styles.sectionHeader} style={{ marginBottom: 0 }}>
          <span className={styles.sectionTag}>Featured SaaS Product</span>
          <h1 className={styles.sectionTitle} style={{ fontSize: "3rem" }}>School ERP SaaS Platform</h1>
          <p className={styles.sectionDesc} style={{ marginTop: "1rem" }}>
            One App. Every Role. Complete School Digital Transformation. A multi-tenant software system tailored for modern schools.
          </p>
        </div>
      </section>

      {/* Grid of Modules */}
      <section className={styles.section} style={{ padding: "3rem 1.5rem" }}>
        <div className={styles.sectionHeader} style={{ marginBottom: "3rem" }}>
          <span className={styles.sectionTag}>Platform Architecture</span>
          <h2 className={styles.sectionTitle} style={{ fontSize: "2rem" }}>Six Integrated Portals</h2>
        </div>

        <div className={styles.grid3}>
          {modules.map((m, index) => (
            <div key={index} className={styles.card} style={{ gap: "1rem", padding: "2.25rem" }}>
              <div style={{ fontSize: "2.5rem" }}>{m.icon}</div>
              <h3 className={styles.cardTitle}>{m.title}</h3>
              <p className={styles.cardDesc} style={{ fontSize: "0.9rem" }}>{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Core Features */}
      <section className={styles.section} style={{ background: "var(--color-surface)", borderTop: "var(--border-glass-light)", borderBottom: "var(--border-glass-light)", padding: "5rem 1.5rem" }}>
        <div className={styles.sectionHeader} style={{ marginBottom: "4rem" }}>
          <span className={styles.sectionTag}>Feature Catalog</span>
          <h2 className={styles.sectionTitle} style={{ fontSize: "2rem" }}>Everything You Need To Run Digitally</h2>
        </div>

        <div className={styles.grid3} style={{ gridTemplateColumns: "repeat(2, 1fr)" }}>
          {features.map((f, index) => (
            <div key={index} style={{ display: "flex", gap: "1rem", padding: "1.5rem", background: "var(--color-bg)", borderRadius: "16px", border: "var(--border-glass-light)" }}>
              <div style={{ color: "var(--color-primary)", fontSize: "1.25rem", marginTop: "0.2rem" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <div>
                <h3 style={{ fontWeight: "700", color: "var(--color-text-heading)", marginBottom: "0.25rem", fontSize: "1.05rem" }}>{f.name}</h3>
                <p style={{ fontSize: "0.9rem", color: "var(--color-text-body)", lineHeight: "1.5" }}>{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing & CTA */}
      <section className={styles.section} style={{ padding: "5rem 1.5rem" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center", display: "flex", flexDirection: "column", gap: "2rem", alignItems: "center" }}>
          <span className={styles.sectionTag}>Pricing Model</span>
          <h2 className={styles.sectionTitle} style={{ fontSize: "2.5rem" }}>Predictable & Affordable Pricing</h2>
          <p style={{ fontSize: "1.1rem", lineHeight: "1.6" }}>
            No upfront implementation fees, no hardware locked contracts. Pay strictly based on your active student enrollments.
          </p>
          
          <div style={{ background: "var(--color-surface)", border: "var(--border-glass)", padding: "2.5rem 4rem", borderRadius: "24px", boxShadow: "var(--shadow-lg)" }}>
            <span style={{ fontSize: "0.85rem", fontWeight: "700", textTransform: "uppercase", color: "var(--color-text-body)" }}>Licensing Fee</span>
            <div style={{ fontSize: "3rem", fontWeight: "800", color: "var(--color-text-heading)", marginTop: "0.5rem" }}>
              ₹10 <span style={{ fontSize: "1.25rem", fontWeight: "500", color: "var(--color-text-body)" }}>/ Student / Month</span>
            </div>
          </div>

          <div className={styles.ctaGroup}>
            <Link href="/contact?ref=book-school-demo" className={styles.primaryCta}>
              Book Live Demo
            </Link>
            <Link href="/contact?ref=proposal-school-erp" className={styles.secondaryCta}>
              Request Pricing Proposal
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
