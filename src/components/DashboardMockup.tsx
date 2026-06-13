"use client";

import React, { useState } from "react";
import styles from "./DashboardMockup.module.css";

type TabId = "school" | "mobile" | "analytics" | "gps" | "cloud";

interface Tab {
  id: TabId;
  label: string;
}

export default function DashboardMockup() {
  const [activeTab, setActiveTab] = useState<TabId>("school");

  const tabs: Tab[] = [
    { id: "school", label: "School ERP" },
    { id: "mobile", label: "Mobile Apps" },
    { id: "analytics", label: "Analytics" },
    { id: "gps", label: "GPS Tracking" },
    { id: "cloud", label: "Cloud Architecture" },
  ];

  return (
    <div className={styles.wrapper}>
      {/* OS window decoration */}
      <div className={styles.header}>
        <div className={`${styles.dot} ${styles.dotRed}`}></div>
        <div className={`${styles.dot} ${styles.dotYellow}`}></div>
        <div className={`${styles.dot} ${styles.dotGreen}`}></div>
        <span style={{ fontSize: "0.8rem", color: "#94a3b8", marginLeft: "1rem", fontFamily: "monospace" }}>indiverse-portal.sh</span>
      </div>

      {/* Tabs */}
      <div className={styles.tabs}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`${styles.tab} ${activeTab === tab.id ? styles.activeTab : ""}`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Main Content Dashboard Previews */}
      <div className={styles.content}>
        
        {/* School ERP Panel */}
        {activeTab === "school" && (
          <div className={`${styles.panel} ${styles.erpGrid}`}>
            <div className={styles.card}>
              <span className={styles.cardTitle}>Total Students</span>
              <div className={styles.stat}>1,240</div>
              <span className={styles.progressLabel}>Active Enrollments</span>
              <div className={styles.progress}>
                <div className={styles.progressBar} style={{ width: "85%" }}></div>
              </div>
            </div>
            <div className={styles.card} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <span className={styles.cardTitle}>Real-Time Activity Feed</span>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", fontSize: "0.85rem" }}>
                <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid #f1f5f9", paddingBottom: "0.5rem" }}>
                  <span>Gatekeeper: Student <b>Aryan K.</b> checked in via QR pass</span>
                  <span style={{ color: "#94a3b8" }}>09:12 AM</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", borderBottom: "1px solid #f1f5f9", paddingBottom: "0.5rem" }}>
                  <span>Teacher: <b>Math Quiz</b> results uploaded for Class 10A</span>
                  <span style={{ color: "#94a3b8" }}>08:45 AM</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <span>Accountant: <b>Circular #201</b> fee payment link sent</span>
                  <span style={{ color: "#94a3b8" }}>08:10 AM</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Mobile Apps Panel */}
        {activeTab === "mobile" && (
          <div className={styles.panel}>
            <div className={styles.phoneFrame}>
              <div className={styles.phoneScreen}>
                <div className={styles.phoneHeader}></div>
                <div className={styles.phoneApp}>
                  <div className={styles.appIcon}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
                    </svg>
                  </div>
                  <span className={styles.appTitle}>Principal Admin Dashboard</span>
                </div>
                <div className={styles.phoneApp}>
                  <div className={styles.appIcon} style={{ background: "linear-gradient(135deg, #00d4ff, #00ffb2)" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <line x1="16" y1="13" x2="8" y2="13"></line>
                      <line x1="16" y1="17" x2="8" y2="17"></line>
                      <polyline points="10 9 9 9 8 9"></polyline>
                    </svg>
                  </div>
                  <span className={styles.appTitle}>Teacher Lesson Planner</span>
                </div>
                <div className={styles.phoneApp}>
                  <div className={styles.appIcon} style={{ background: "linear-gradient(135deg, #5b4bff, #00d4ff)" }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                  <span className={styles.appTitle}>Parent Portal & Grades</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Analytics Panel */}
        {activeTab === "analytics" && (
          <div className={`${styles.panel} ${styles.graphContainer}`}>
            <div className={styles.bars}>
              <div className={styles.barWrapper}>
                <div className={styles.bar} style={{ height: "120px" }}></div>
                <span className={styles.barLabel}>Mon</span>
              </div>
              <div className={styles.barWrapper}>
                <div className={styles.bar} style={{ height: "150px" }}></div>
                <span className={styles.barLabel}>Tue</span>
              </div>
              <div className={styles.barWrapper}>
                <div className={styles.bar} style={{ height: "170px" }}></div>
                <span className={styles.barLabel}>Wed</span>
              </div>
              <div className={styles.barWrapper}>
                <div className={styles.bar} style={{ height: "130px" }}></div>
                <span className={styles.barLabel}>Thu</span>
              </div>
              <div className={styles.barWrapper}>
                <div className={styles.bar} style={{ height: "190px" }}></div>
                <span className={styles.barLabel}>Fri</span>
              </div>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.85rem" }}>
              <span>Average Server Load: <b>34%</b></span>
              <span>Uptime: <b style={{ color: "var(--color-accent-text)" }}>99.99%</b></span>
            </div>
          </div>
        )}

        {/* GPS Tracking Panel */}
        {activeTab === "gps" && (
          <div className={`${styles.panel} ${styles.graphContainer}`}>
            <div className={styles.map}>
              <div className={styles.mapLine}></div>
              <div className={styles.mapPin} style={{ top: "60px", left: "20%" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" style={{ color: "var(--color-primary)" }}>
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <div className={styles.pinLabel}>Bus 12A - School Route</div>
              </div>
              <div className={styles.mapPin} style={{ top: "130px", left: "60%" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" style={{ color: "var(--color-secondary-text)" }}>
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                </svg>
                <div className={styles.pinLabel}>Truck 04 - Dispatching</div>
              </div>
            </div>
          </div>
        )}

        {/* Cloud Architecture Panel */}
        {activeTab === "cloud" && (
          <div className={styles.panel}>
            <div className={styles.cloud}>
              <div className={styles.cloudLine}></div>
              <div className={styles.node}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path>
                </svg>
                <span className={styles.nodeLabel}>Cloud API</span>
              </div>
              <div className={styles.node} style={{ border: "2px solid var(--color-primary-hover)" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                  <path d="M2 17l10 5 10-5"></path>
                  <path d="M2 12l10 5 10-5"></path>
                </svg>
                <span className={styles.nodeLabel}>DB Cluster</span>
              </div>
              <div className={styles.node}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                  <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                  <line x1="6" y1="6" x2="6.01" y2="6"></line>
                  <line x1="6" y1="18" x2="6.01" y2="18"></line>
                </svg>
                <span className={styles.nodeLabel}>Load Balancer</span>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
