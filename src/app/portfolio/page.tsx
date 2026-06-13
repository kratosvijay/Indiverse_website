"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "../page.module.css";

interface Project {
  title: string;
  category: "Mobile" | "SaaS" | "Enterprise";
  desc: string;
  specs: string[];
  link: string;
}

export default function Portfolio() {
  const [filter, setFilter] = useState<string>("All");

  const projects: Project[] = [
    {
      title: "Indi Cabs Driver App",
      category: "Mobile",
      desc: "High-performance driver application featuring real-time location telemetry, Google Maps routing, automated queue systems, and secure payout systems.",
      specs: ["Flutter & Dart", "Firebase Auth & DB", "Cashfree API", "Google Maps SDK"],
      link: "https://github.com/kratosvijay/indi_cabs_driver_app",
    },
    {
      title: "Indi Cabs User App",
      category: "Mobile",
      desc: "Seamless taxi-booking experience with live driver tracking, multi-stop route management, dynamic stop editing, and Razorpay wallet integration.",
      specs: ["Flutter & Dart", "Firebase Suite", "GetX State Management", "Razorpay"],
      link: "https://github.com/kratosvijay/indi_cabs_user_app",
    },
    {
      title: "Indi Cabs Admin Panel",
      category: "SaaS",
      desc: "Centralized fleet management and transaction database logging driver documents, ride histories, user issues, and settlement accounts.",
      specs: ["Next.js App", "Firebase Store", "Node.js Services", "Cloud Functions"],
      link: "https://github.com/kratosvijay/indi_cabs_admin",
    },
    {
      title: "Indi Cabs Marketing Site",
      category: "SaaS",
      desc: "Conversion-optimized landing pages and brand positioning site for the Indi Cabs ride-hailing startup, built with Vite and Tailwind.",
      specs: ["Vite & React", "Tailwind CSS", "JavaScript Core", "SEO Ready"],
      link: "https://github.com/kratosvijay/indi_cabs_marketing_site",
    },
    {
      title: "MySchoolApp — Parent App",
      category: "Mobile",
      desc: "Client-facing school application enabling parent-teacher communication, student attendance monitoring, report cards, and alerts.",
      specs: ["Flutter", "Dart Core", "Firebase Auth", "Cloud Messaging"],
      link: "https://github.com/kratosvijay/myschoolapp_parent_app",
    },
    {
      title: "MySchoolApp — Driver App",
      category: "Mobile",
      desc: "Dedicated driver application for school transport operations with automated route tracking, pick-up confirmations, and live transit reports.",
      specs: ["Flutter App", "Dart", "GPS Telemetry", "Maps API"],
      link: "https://github.com/kratosvijay/myschoolapp_driver_app",
    },
    {
      title: "MySchoolApp — Admin App",
      category: "SaaS",
      desc: "Comprehensive school ERP administrative control center managing student registries, fee schedules, driver routes, and push alerts.",
      specs: ["Flutter Web", "Firebase Database", "Dart Package API"],
      link: "https://github.com/kratosvijay/myschoolapp_admin_app",
    },
    {
      title: "MySchoolApp — Core Module",
      category: "Enterprise",
      desc: "Shared models, abstract data repositories, and authentication wrapper services compiled as a modular utility package reused by the entire suite.",
      specs: ["Dart Packages", "Modular Models", "API Services"],
      link: "https://github.com/kratosvijay/myschoolapp_core",
    },
    {
      title: "KR8 Music Player",
      category: "Mobile",
      desc: "A clean, minimal music player app built with Flutter. Focuses on speed, offline file playback, elegant audio states, and a gesture-driven user interface.",
      specs: ["Flutter Core", "Audio Handlers", "Sleek UX", "Dart"],
      link: "https://github.com/kratosvijay/kr8_music-_app",
    },
    {
      title: "Swoken Privacy Aggregator",
      category: "Mobile",
      desc: "A privacy-first content aggregator focusing on local data storage, zero-tracking feed management, and user data containment.",
      specs: ["Flutter Client", "SQLite Database", "RSS Parsing", "Local Security"],
      link: "https://github.com/kratosvijay/swoken",
    },
    {
      title: "Portfolio v2 Portal",
      category: "SaaS",
      desc: "A highly responsive personal portfolio site showcasing software products, interactive maps, case studies, and deployment pipelines.",
      specs: ["Next.js App", "Tailwind CSS", "GitHub Actions", "Vercel Deploy"],
      link: "https://github.com/kratosvijay/kratosvijay.github.io",
    },
  ];

  const filteredProjects = filter === "All"
    ? projects
    : projects.filter((p) => p.category === filter);

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
        {["All", "Mobile", "SaaS", "Enterprise"].map((cat) => (
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
            {cat === "Mobile" ? "Mobile Apps" : cat}
          </button>
        ))}
      </section>

      {/* Grid of Projects */}
      <section className={styles.section} style={{ padding: "0 1.5rem" }}>
        <div className={styles.grid3}>
          {filteredProjects.map((project, index) => (
            <div key={index} className={styles.card} style={{ padding: "2.5rem", gap: "1.5rem", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: "0.8rem", fontWeight: "700", textTransform: "uppercase", color: "var(--color-primary)", letterSpacing: "0.05em" }}>
                    {project.category}
                  </span>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "var(--color-text-body)", transition: "color 0.2s" }}
                    aria-label={`View ${project.title} on GitHub`}
                    title="View GitHub Repository"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                </div>
                <h2 className={styles.cardTitle} style={{ fontSize: "1.35rem", margin: 0 }}>{project.title}</h2>
                <p className={styles.cardDesc} style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>{project.desc}</p>
              </div>

              <div style={{ marginTop: "1rem" }}>
                <h4 style={{ fontWeight: "700", color: "var(--color-text-heading)", marginBottom: "0.5rem", fontSize: "0.8rem", textTransform: "uppercase" }}>
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
                
                <div style={{ display: "flex", marginTop: "1.5rem" }}>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.secondaryCta}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "0.5rem",
                      fontSize: "0.85rem",
                      padding: "0.5rem 1rem",
                      width: "100%",
                      borderRadius: "12px",
                    }}
                  >
                    View Source Code
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
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
