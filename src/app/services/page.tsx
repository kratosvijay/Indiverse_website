import React from "react";
import Link from "next/link";
import styles from "../page.module.css";

export default function Services() {
  const detailedServices = [
    {
      title: "Android App Development",
      description: "We craft native Android solutions designed for high performance, smooth UI flows, and hardware integration.",
      tech: "Kotlin, Android Jetpack, Java, SQLite, Retrofit",
      offerings: [
        "Native Mobile Apps for Android OS",
        "E-Commerce & Digital Billing Systems",
        "Offline-First Business Dashboards",
        "Hardware Integration (NFC, Bluetooth, Scanners)",
      ],
      icon: "📱",
    },
    {
      title: "iOS App Development",
      description: "Developing premium Swift applications that conform to Apple's Human Interface Guidelines for iPhones and iPads.",
      tech: "Swift, SwiftUI, Objective-C, CoreData, Combine",
      offerings: [
        "Native iPhone & iPad Applications",
        "Secure Apple Pay Integrations",
        "Push Notifications & Widgets",
        "App Store Compliance & Submissions",
      ],
      icon: "🍎",
    },
    {
      title: "Flutter Cross-Platform Development",
      description: "Compile to high-performance Android and iOS apps from a single, modular Dart codebase to launch faster.",
      tech: "Dart, Bloc/Provider, Flutter SDK, Method Channels",
      offerings: [
        "Single Codebase for iOS & Android",
        "Fast Feature Iterations (Hot Reload)",
        "Custom UI Painting & Graphics",
        "Web and Desktop Builds Support",
      ],
      icon: "⚡",
    },
    {
      title: "SaaS & Cloud Platforms",
      description: "Engineering scalable multi-tenant platforms with complex role hierarchies, billing, and subscription management.",
      tech: "Next.js, Node.js, Express, AWS, Stripe",
      offerings: [
        "Multi-Tenant CRM & ERP Software",
        "School Management & Student Portals",
        "Automated Billing & Stripe Payments",
        "Secure RESTful & GraphQL Cloud APIs",
      ],
      icon: "☁️",
    },
    {
      title: "AI & Automation Solutions",
      description: "Integrating intelligent machine learning pipelines to automate labor-intensive processes and extract insights.",
      tech: "Python, TensorFlow, PyTorch, OpenAI API, LangChain",
      offerings: [
        "Natural Language Processing & Chatbots",
        "Predictive Business Intelligence",
        "Data Extraction & Parsing Engines",
        "Operational Workflow Automation",
      ],
      icon: "🤖",
    },
    {
      title: "Enterprise Software Suite",
      description: "Robust internal systems designed to synchronize logistics, attendance, HR, and custom business operations.",
      tech: "PostgreSQL, MongoDB, Docker, Kubernetes, Redis",
      offerings: [
        "Live GPS Logistics & Dispatch Systems",
        "Gatekeeper QR Pass & Security Access",
        "Comprehensive HRMS & Attendance ERP",
        "Relational Database Syncing & Backups",
      ],
      icon: "🏢",
    },
  ];

  return (
    <div style={{ padding: "4rem 0" }}>
      {/* Background Decor */}
      <div className="glow-background" style={{ top: "20%", right: "5%", background: "radial-gradient(circle, var(--color-secondary) 0%, transparent 70%)" }}></div>

      {/* Header */}
      <section className={styles.section} style={{ paddingBottom: "2rem" }}>
        <div className={styles.sectionHeader} style={{ marginBottom: 0 }}>
          <span className={styles.sectionTag}>Services Directory</span>
          <h1 className={styles.sectionTitle} style={{ fontSize: "3rem" }}>Enterprise-Grade Software</h1>
          <p className={styles.sectionDesc} style={{ marginTop: "1rem" }}>
            We offer custom engineering capabilities to cover the full product lifecycle from strategy and wireframing to deployment.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className={styles.section} style={{ padding: "3rem 1.5rem" }}>
        <div className={styles.grid3} style={{ gridTemplateColumns: "repeat(2, 1fr)" }}>
          {detailedServices.map((service, index) => (
            <div key={index} className={styles.card} style={{ gap: "1.25rem", padding: "3rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontSize: "2.5rem" }}>{service.icon}</span>
                <span style={{ fontSize: "0.8rem", fontWeight: "700", background: "rgba(91, 75, 255, 0.06)", color: "var(--color-primary)", padding: "0.35rem 0.75rem", borderRadius: "9999px" }}>
                  {service.tech}
                </span>
              </div>
              <h2 className={styles.cardTitle} style={{ fontSize: "1.4rem" }}>{service.title}</h2>
              <p className={styles.cardDesc}>{service.description}</p>
              
              <div style={{ marginTop: "0.5rem" }}>
                <h4 style={{ fontWeight: "700", color: "var(--color-text-heading)", marginBottom: "0.75rem", fontSize: "0.9rem" }}>Core Offerings:</h4>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  {service.offerings.map((off, oIndex) => (
                    <div key={oIndex} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.9rem" }}>
                      <svg style={{ color: "var(--color-accent-text)", flexShrink: 0 }} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>{off}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to action */}
      <section className={styles.section} style={{ padding: "2rem 1.5rem" }}>
        <div className={styles.careersBanner} style={{ background: "linear-gradient(135deg, var(--color-surface), rgba(91, 75, 255, 0.03))" }}>
          <div className={styles.careersText}>
            <h2 className={styles.sectionTitle} style={{ marginBottom: "0.5rem" }}>Need a Custom Integration?</h2>
            <p style={{ color: "var(--color-text-body)", maxWidth: "500px" }}>
              Our engineers can build tailor-made integrations for database syncs, legacy migrations, or proprietary hardware interfaces.
            </p>
          </div>
          <Link href="/contact?ref=custom-spec" className={styles.primaryCta} style={{ whiteSpace: "nowrap" }}>
            Discuss Requirements
          </Link>
        </div>
      </section>
    </div>
  );
}
