import React from "react";
import Link from "next/link";
import styles from "../page.module.css";

export default function Careers() {
  const roles = [
    {
      title: "Flutter Developer",
      type: "Full-Time | Remote / Hybrid",
      desc: "We are looking for a Flutter Developer experienced in BLoC / Provider state management, native method channels, and API syncs to construct mobile products.",
      requirements: [
        "2+ years experience in Dart & Flutter",
        "Experience releasing apps to Apple App Store & Google Play Store",
        "Understanding of REST APIs and WebSocket integrations",
      ],
    },
    {
      title: "Backend Developer",
      type: "Full-Time | Remote",
      desc: "Seeking a Node.js developer to construct secure REST APIs, manage database clusters, and deploy server containers on AWS or Google Cloud.",
      requirements: [
        "3+ years experience with Node.js & Express / NestJS",
        "Strong query optimization skills in PostgreSQL & MongoDB",
        "Experience with Docker, Redis, and cloud architectures",
      ],
    },
    {
      title: "UI/UX Designer",
      type: "Full-Time | Hybrid",
      desc: "Join us to shape the visual branding and design systems of our client platforms. You will write style guides, wireframes, and high-fidelity mockups.",
      requirements: [
        "Strong portfolio in SaaS web design and mobile layouts",
        "Proficiency in Figma, Squircle border-radii, and styling design tokens",
        "Understanding of grid structures and responsive behaviors",
      ],
    },
    {
      title: "Sales Executive",
      type: "Commission-Based | On-Field",
      desc: "Seeking an executive to lead business onboarding campaigns, conduct live School ERP software demonstrations, and manage customer contracts.",
      requirements: [
        "Experience in SaaS B2B sales or EdTech onboarding",
        "Excellent communication, contract negotiation, and presentation skills",
        "Familiarity with school administration structures",
      ],
    },
  ];

  return (
    <div style={{ padding: "4rem 0" }}>
      {/* Background Decor */}
      <div className="glow-background" style={{ top: "15%", left: "5%" }}></div>

      {/* Header */}
      <section className={styles.section} style={{ paddingBottom: "2rem" }}>
        <div className={styles.sectionHeader} style={{ marginBottom: 0 }}>
          <span className={styles.sectionTag}>Join The Innovation</span>
          <h1 className={styles.sectionTitle} style={{ fontSize: "3rem" }}>Careers at Indiverse</h1>
          <p className={styles.sectionDesc} style={{ marginTop: "1rem" }}>
            We are building a team of software engineers, branding experts, and UI/UX designers focused on creating premium digital solutions.
          </p>
        </div>
      </section>

      {/* Open Roles list */}
      <section className={styles.section} style={{ padding: "3rem 1.5rem" }}>
        <div className={styles.grid3} style={{ gridTemplateColumns: "repeat(2, 1fr)" }}>
          {roles.map((role, index) => (
            <div key={index} className={styles.card} style={{ padding: "3rem", gap: "1.5rem" }}>
              <div>
                <span style={{ fontSize: "0.8rem", fontWeight: "700", textTransform: "uppercase", color: "var(--color-primary)", letterSpacing: "0.05em" }}>
                  {role.type}
                </span>
                <h2 className={styles.cardTitle} style={{ fontSize: "1.4rem", marginTop: "0.5rem" }}>{role.title}</h2>
                <p className={styles.cardDesc} style={{ marginTop: "0.75rem" }}>{role.desc}</p>
              </div>

              <div>
                <h4 style={{ fontWeight: "700", color: "var(--color-text-heading)", marginBottom: "0.75rem", fontSize: "0.9rem" }}>Requirements:</h4>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  {role.requirements.map((req, rIndex) => (
                    <div key={rIndex} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontSize: "0.875rem" }}>
                      <svg style={{ color: "var(--color-accent-text)", flexShrink: 0, marginTop: "0.15rem" }} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>{req}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Application CTA */}
      <section className={styles.section} style={{ padding: "2rem 1.5rem" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          <h2 className={styles.sectionTitle} style={{ fontSize: "2rem" }}>How to Apply?</h2>
          <p style={{ fontSize: "1.05rem", lineHeight: "1.6" }}>
            Submit your resume, GitHub profile, or portfolio link directly to our recruitment mailbox:
          </p>
          <a
            href="mailto:kennettewesley@indiverseenterprises.com?subject=Job Application - Indiverse Careers"
            className={styles.primaryCta}
            style={{ alignSelf: "center" }}
          >
            Apply via Email
          </a>
        </div>
      </section>
    </div>
  );
}
