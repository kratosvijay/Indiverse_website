import React from "react";
import Link from "next/link";
import styles from "./page.module.css";
import DashboardMockup from "@/components/DashboardMockup";
import Timeline from "@/components/Timeline";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  // Services data mapping
  const services = [
    {
      title: "Android App Development",
      desc: "High-performance native Android applications built for reliability and scale.",
      features: ["Native Android Apps", "Business Applications", "E-Commerce Apps", "Enterprise Mobility"],
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
          <line x1="12" y1="18" x2="12.01" y2="18"></line>
        </svg>
      ),
    },
    {
      title: "iOS App Development",
      desc: "Premium native Swift applications optimized for the iOS ecosystem.",
      features: ["iPhone Apps", "iPad Apps", "App Store Deployment", "Swift / SwiftUI"],
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 20.39c.67.41 1.35.82 2 .82a1 1 0 0 0 .5-.13c.66-.37 1-.95 1-1.6V5.5c0-.65-.34-1.23-1-1.6a1 1 0 0 0-.5-.13c-.65 0-1.33.41-2 .82a1 1 0 0 0-.5.83v14.37a1 1 0 0 0 .5.6z"></path>
          <path d="M12 4.61c-.67-.41-1.35-.82-2-.82a1 1 0 0 0-.5.13c-.66.37-1 .95-1 1.6v13.98c0 .65.34 1.23 1 1.6a1 1 0 0 0 .5.13c.65 0 1.33-.41 2-.82a1 1 0 0 0 .5-.83V5.44a1 1 0 0 0-.5-.83z"></path>
        </svg>
      ),
    },
    {
      title: "Flutter Development",
      desc: "Fast cross-platform apps sharing a single compiled codebase.",
      features: ["Single Codebase", "Android + iOS Apps", "Faster Time-to-Market", "Native Performance"],
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 22 8.5 12 15 2 8.5 12 2"></polygon>
          <polygon points="12 15 22 21.5 12 22 2 21.5 12 15"></polygon>
        </svg>
      ),
    },
    {
      title: "SaaS Development",
      desc: "Scalable subscription platforms designed to manage complex business modules.",
      features: ["Subscription Platforms", "ERP & CRM Systems", "School Management", "Billing Engines"],
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      ),
    },
    {
      title: "AI Solutions",
      desc: "Integrating cognitive workflows to automate operations and predictive logic.",
      features: ["AI Assistants", "Workflow Automation", "Business Intelligence", "Predictive Analytics"],
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
          <line x1="12" y1="22.08" x2="12" y2="12"></line>
        </svg>
      ),
    },
    {
      title: "Enterprise Software",
      desc: "Robust internal architectures designed for operational management.",
      features: ["HRMS Platforms", "Core ERP Suite", "Fleet Tracking", "Attendance systems"],
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="9" y1="3" x2="9" y2="21"></line>
          <line x1="15" y1="3" x2="15" y2="21"></line>
          <line x1="3" y1="9" x2="21" y2="9"></line>
          <line x1="3" y1="15" x2="21" y2="15"></line>
        </svg>
      ),
    },
  ];

  // Industries served
  const industries = [
    { name: "Education", desc: "School ERPs, student trackers.", icon: "🎓" },
    { name: "Transportation", desc: "Fleet management, GPS trackers.", icon: "🚛" },
    { name: "Healthcare", desc: "Operational flows, check-in apps.", icon: "🏥" },
    { name: "Retail", desc: "Billing portals, store inventories.", icon: "🛒" },
    { name: "Manufacturing", desc: "Stock management, attendance modules.", icon: "🏭" },
    { name: "Corporate", desc: "HRMS systems, custom automation.", icon: "💼" },
  ];

  // Why choose us points
  const differentiators = [
    { title: "Cloud Native Architecture", desc: "Microservices hosted on AWS and GCP designed to scale smoothly.", big: true },
    { title: "Enterprise Security", desc: "Encrypted databases, role permissions, and regular audits.", big: false },
    { title: "Real-Time Analytics", desc: "Track performance graphs, attendance rates, and server metrics live.", big: false },
    { title: "Scalable Infrastructure", desc: "Systems that support user influx without resource bottlenecks.", big: true },
    { title: "AI Ready Solutions", desc: "Integrate LLMs, bots, and model reasoning into workflows easily.", big: true },
    { title: "Cross Platform Expertise", desc: "Expertise in Flutter for unified app pipelines.", big: false },
    { title: "24/7 Support", desc: "Post-release support contracts to address errors instantly.", big: false },
    { title: "Modern Tech Stack", desc: "Leveraging Node.js, PostgreSQL, Docker, and Firebase.", big: true },
  ];

  // Tech stack items
  const techStack = ["Flutter", "Firebase", "Node.js", "Google Cloud", "AWS", "PostgreSQL", "MongoDB", "Docker", "GitHub"];

  return (
    <div>
      {/* Background glow decoration */}
      <div className="glow-background" style={{ top: "5%", left: "10%" }}></div>
      <div className="glow-background" style={{ top: "35%", right: "10%", background: "radial-gradient(circle, var(--color-secondary) 0%, transparent 70%)" }}></div>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={`${styles.sectionTag} animate-fade-in`}>Leading Software Innovation</span>
          <h1 className={`${styles.headline} animate-fade-in`}>
            Building Intelligent <br /><span className="text-gradient">Mobile & Cloud Solutions</span>
          </h1>
          <p className={`${styles.subheading} animate-fade-in`}>
            We develop Android apps, iOS applications, SaaS platforms, AI-powered systems, and enterprise software that help businesses scale faster.
          </p>
          <div className={styles.ctaGroup}>
            <Link href="/contact" className={styles.primaryCta}>
              Schedule Consultation
            </Link>
            <Link href="/products" className={styles.secondaryCta}>
              Explore Products
            </Link>
          </div>
        </div>

        {/* Mockup visual */}
        <div className={styles.heroVisual}>
          <DashboardMockup />
        </div>
      </section>

      {/* About Us Preview */}
      <section className={styles.section} style={{ background: "var(--color-surface)", borderTop: "var(--border-glass-light)", borderBottom: "var(--border-glass-light)" }}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTag}>About Us</span>
          <h2 className={styles.sectionTitle}>Technology Driven Innovation</h2>
          <p className={styles.sectionDesc}>
            Indiverse Enterprises Pvt Ltd is a software company focused on creating scalable mobile applications, SaaS platforms, ERP systems, AI-powered solutions, and enterprise-grade software. We help businesses digitize operations through secure, cloud-native technology.
          </p>
        </div>
        
        {/* Stats */}
        <div className={styles.statsContainer}>
          <div className={styles.statCard}>
            <div className={styles.statNum}>150+</div>
            <div className={styles.statLabel}>Projects Delivered</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNum}>50+</div>
            <div className={styles.statLabel}>Clients Served</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNum}>12+</div>
            <div className={styles.statLabel}>Industries Supported</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNum}>5+</div>
            <div className={styles.statLabel}>Years of Innovation</div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTag}>Our Services</span>
          <h2 className={styles.sectionTitle}>What We Do</h2>
          <p className={styles.sectionDesc}>
            We build corporate software and mobile pipelines designed with modern design principles.
          </p>
        </div>

        <div className={styles.grid3}>
          {services.map((s, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardIcon}>{s.icon}</div>
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardDesc}>{s.desc}</p>
              <ul className={styles.cardList}>
                {s.features.map((f, fIndex) => (
                  <li key={fIndex} className={styles.cardItem}>
                    <svg className={styles.cardCheck} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Product */}
      <section className={styles.section} style={{ background: "rgba(91, 75, 255, 0.02)" }}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTag}>Featured Product</span>
          <h2 className={styles.sectionTitle}>School ERP SaaS Platform</h2>
          <p className={styles.sectionDesc}>
            One App. Every Role. Complete School Digital Transformation.
          </p>
        </div>

        <div className={styles.productContainer}>
          <div className={styles.productContent}>
            <h3 className={styles.productTagline}>Connect Admins, Teachers, Parents, and Drivers in One Place</h3>
            <p style={{ lineHeight: "1.7", color: "var(--color-text-body)" }}>
              Streamline class attendance, push instant homework notifications, organize marks sheet generation, and manage transport lines with live GPS coordinate lookups.
            </p>
            
            <div className={styles.moduleList}>
              <span className={styles.moduleTag}>Principal Dashboard</span>
              <span className={styles.moduleTag}>Teacher Portal</span>
              <span className={styles.moduleTag}>Parent App</span>
              <span className={styles.moduleTag}>Office Staff ERP</span>
              <span className={styles.moduleTag}>Driver App</span>
              <span className={styles.moduleTag}>Gatekeeper Security</span>
            </div>

            <div className={styles.pricing}>
              <div className={styles.priceTitle}>Affordable Licensing</div>
              <div className={styles.priceAmount}>
                ₹10 <span>/ Active Academic Student / Month</span>
              </div>
            </div>

            <div className={styles.ctaGroup}>
              <Link href="/contact?ref=school-erp" className={styles.primaryCta}>
                Book Demo
              </Link>
              <Link href="/contact?ref=proposal" className={styles.secondaryCta}>
                Request Proposal
              </Link>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div className={styles.card} style={{ gap: "0.75rem", padding: "1.75rem" }}>
              <h4 style={{ fontWeight: "700", color: "var(--color-text-heading)" }}>Comprehensive Module Specs</h4>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", fontSize: "0.9rem" }}>
                <span>• Attendance & Leave Management</span>
                <span>• Homework & Exam Planners</span>
                <span>• Digital Certificate Generation</span>
                <span>• QR Code Gate Pass & Security</span>
                <span>• Integrated Live GPS Transport Management</span>
                <span>• Circulars & Class Notifications</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTag}>Target Markets</span>
          <h2 className={styles.sectionTitle}>Industries We Serve</h2>
          <p className={styles.sectionDesc}>
            Deploying tailored software suites optimized for sector-specific compliance and workflows.
          </p>
        </div>

        <div className={styles.grid3} style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
          {industries.map((ind, index) => (
            <div key={index} className={styles.card} style={{ padding: "2rem", gap: "1rem" }}>
              <div style={{ fontSize: "2.5rem" }}>{ind.icon}</div>
              <h3 className={styles.cardTitle} style={{ fontSize: "1.15rem" }}>{ind.name}</h3>
              <p className={styles.cardDesc} style={{ fontSize: "0.9rem" }}>{ind.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Development Process */}
      <section className={styles.section} style={{ background: "var(--color-surface)", borderTop: "var(--border-glass-light)", borderBottom: "var(--border-glass-light)" }}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTag}>How We Work</span>
          <h2 className={styles.sectionTitle}>Our Development Process</h2>
          <p className={styles.sectionDesc}>
            Adhering to strict engineering protocols, we ensure transparency from design to deployment.
          </p>
        </div>

        <Timeline />
      </section>

      {/* Why Choose Us */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTag}>Differentiators</span>
          <h2 className={styles.sectionTitle}>Why Choose Indiverse?</h2>
          <p className={styles.sectionDesc}>
            Engineered with a focus on cloud modularity, data privacy, and modern user experience.
          </p>
        </div>

        <div className={styles.bento}>
          {differentiators.map((diff, index) => (
            <div
              key={index}
              className={`${styles.bentoCard} ${diff.big ? styles.bentoCardBig : ""}`}
            >
              <div className={styles.bentoTop}>
                <h3 className={styles.bentoTitle}>{diff.title}</h3>
                <p className={styles.bentoDesc}>{diff.desc}</p>
              </div>
              <div style={{ alignSelf: "flex-end" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ opacity: 0.15, color: "var(--color-primary)" }}>
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 16 16 12 12 8"></polyline>
                  <line x1="8" y1="12" x2="16" y2="12"></line>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section className={styles.section} style={{ background: "var(--color-surface)", borderTop: "var(--border-glass-light)", borderBottom: "var(--border-glass-light)" }}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTag}>Technology Stack</span>
          <h2 className={styles.sectionTitle}>Tools We Leverage</h2>
          <p className={styles.sectionDesc}>
            We build with cutting-edge tools to secure, compile, and maintain stable business servers.
          </p>
        </div>

        <div className={styles.techGrid}>
          {techStack.map((tech, index) => (
            <div key={index} className={styles.techLogo}>
              {tech}
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />

      {/* Careers Preview */}
      <section className={styles.section}>
        <div className={styles.careersBanner}>
          <div className={styles.careersText}>
            <span className={styles.sectionTag} style={{ marginBottom: 0 }}>Join The Team</span>
            <h2 className={styles.sectionTitle} style={{ marginBottom: "0.5rem" }}>Building The Future of Software</h2>
            <p style={{ color: "var(--color-text-body)", maxWidth: "500px" }}>
              Explore careers at Indiverse. We are looking for talented developers and designers who value modular architecture and clean code.
            </p>
          </div>
          <Link href="/careers" className={styles.primaryCta} style={{ whiteSpace: "nowrap" }}>
            View Open Roles
          </Link>
        </div>
      </section>
    </div>
  );
}
