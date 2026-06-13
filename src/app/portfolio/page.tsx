"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "../page.module.css";

interface Project {
  title: string;
  category: "SaaS" | "Mobile" | "Enterprise" | "GPS";
  desc: string;
  specs: string[];
}

export default function Portfolio() {
  const [filter, setFilter] = useState<string>("All");

  const projects: Project[] = [
    {
      title: "School ERP SaaS Platform",
      category: "SaaS",
      desc: "Complete digital transformation for educational institutions, linking principals, teachers, parents, accounting staff, and security gatekeepers in one system.",
      specs: ["Multi-Tenant DB", "Next.js & Node.js", "Stripe Fee Collections", "QR Pass Attendance"],
    },
    {
      title: "Fleet Management Platform",
      category: "Enterprise",
      desc: "Real-time dispatch system designed for logistics companies, tracking route diagnostics, driver delivery loops, and warehouse loading schedules.",
      specs: ["Go Backend", "PostgreSQL", "Google Cloud Telemetry", "Real-Time Websockets"],
    },
    {
      title: "Attendance Management System",
      category: "Enterprise",
      desc: "Corporate HR and biometric security platform logging worker check-ins, leaves, payroll distributions, and performance graphs.",
      specs: ["React Web", "Docker Containers", "PostgreSQL Syncing", "Secure API Keys"],
    },
    {
      title: "GPS Tracking Platform",
      category: "GPS",
      desc: "Telemetry system tracking commercial vehicles, speed limits, geofences, and dispatch operations. Integrates directly with client hardware.",
      specs: ["Flutter Mobile", "Google Maps SDK", "Node.js MQTT Brokers", "AWS EC2 Servers"],
    },
    {
      title: "Custom Enterprise Software",
      category: "Enterprise",
      desc: "Proprietary database synchronization client built for manufacturing plants to monitor supply chain inventories and automated order invoices.",
      specs: ["TypeScript Core", "MongoDB Clusters", "Node.js Cron Workers", "Docker Clusters"],
    },
  ];

  const filteredProjects = filter === "All"
    ? projects
    : projects.filter((p) => p.category === filter || (filter === "SaaS" && p.category === "SaaS") || (filter === "Mobile" && p.category === "GPS"));

  return (
    <div style={{ padding: "4rem 0" }}>
      {/* Background Decor */}
      <div className="glow-background" style={{ top: "15%", right: "10%" }}></div>

      {/* Header */}
      <section className={styles.section} style={{ paddingBottom: "2rem" }}>
        <div className={styles.sectionHeader} style={{ marginBottom: 0 }}>
          <span className={styles.sectionTag}>Project Showcase</span>
          <h1 className={styles.sectionTitle} style={{ fontSize: "3rem" }}>Our Portfolio</h1>
          <p className={styles.sectionDesc} style={{ marginTop: "1rem" }}>
            Explore software products and custom enterprise solutions designed, developed, and deployed by Indiverse Enterprises Pvt Ltd.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section style={{ maxWidth: "600px", margin: "0 auto 3rem auto", display: "flex", justifyContent: "center", gap: "0.75rem", padding: "0 1.5rem" }}>
        {["All", "SaaS", "Enterprise", "GPS"].map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            style={{
              padding: "0.625rem 1.25rem",
              borderRadius: "9999px",
              fontWeight: "600",
              fontSize: "0.9rem",
              border: "var(--border-glass)",
              cursor: "pointer",
              transition: "all 0.2s ease",
              background: filter === cat ? "var(--color-primary)" : "var(--color-surface)",
              color: filter === cat ? "#ffffff" : "var(--color-text-body)",
              outline: "none",
            }}
          >
            {cat === "GPS" ? "GPS/Mobile" : cat}
          </button>
        ))}
      </section>

      {/* Grid of Projects */}
      <section className={styles.section} style={{ padding: "0 1.5rem" }}>
        <div className={styles.grid3} style={{ gridTemplateColumns: "repeat(2, 1fr)" }}>
          {filteredProjects.map((project, index) => (
            <div key={index} className={styles.card} style={{ padding: "3rem", gap: "1.5rem", justifyContent: "space-between" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <span style={{ fontSize: "0.8rem", fontWeight: "700", textTransform: "uppercase", color: "var(--color-primary)", letterSpacing: "0.05em" }}>
                  {project.category}
                </span>
                <h2 className={styles.cardTitle} style={{ fontSize: "1.5rem" }}>{project.title}</h2>
                <p className={styles.cardDesc}>{project.desc}</p>
              </div>

              <div style={{ marginTop: "1.5rem" }}>
                <h4 style={{ fontWeight: "700", color: "var(--color-text-heading)", marginBottom: "0.75rem", fontSize: "0.85rem", textTransform: "uppercase" }}>
                  Specifications
                </h4>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {project.specs.map((spec, sIndex) => (
                    <span
                      key={sIndex}
                      style={{
                        background: "var(--color-bg)",
                        border: "var(--border-glass-light)",
                        padding: "0.35rem 0.75rem",
                        borderRadius: "8px",
                        fontSize: "0.8rem",
                        fontWeight: "600",
                        color: "var(--color-text-body)",
                      }}
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to action */}
      <section className={styles.section} style={{ padding: "4rem 1.5rem" }}>
        <div className={styles.careersBanner}>
          <div className={styles.careersText}>
            <h2 className={styles.sectionTitle} style={{ marginBottom: "0.5rem" }}>Ready to Build Your Platform?</h2>
            <p style={{ color: "var(--color-text-body)", maxWidth: "500px" }}>
              Connect with our team of startup designers, UX strategists, and Next.js developers to construct your next product.
            </p>
          </div>
          <Link href="/contact?ref=portfolio-cta" className={styles.primaryCta} style={{ whiteSpace: "nowrap" }}>
            Schedule Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
