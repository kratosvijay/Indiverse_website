import React from "react";
import styles from "./Timeline.module.css";

interface Step {
  step: string;
  title: string;
  desc: string;
}

export default function Timeline() {
  const steps: Step[] = [
    {
      step: "Step 01",
      title: "Discovery & Planning",
      desc: "We research and understand your business goals, target audience, and operational processes to map out specifications, architectures, and wireframes.",
    },
    {
      step: "Step 02",
      title: "UI/UX Design",
      desc: "Our design team crafts modern, intuitive wireframes, clickable mockups, and high-fidelity user journeys customized to match your brand style.",
    },
    {
      step: "Step 03",
      title: "Agile Development",
      desc: "We write clean, modular, and performant code in sprint intervals. We build native and cross-platform mobile apps, cloud backends, and databases.",
    },
    {
      step: "Step 04",
      title: "Rigorous Testing",
      desc: "Our QA engineers execute unit tests, integration runs, accessibility audits, and security checks across different device screens to ensure stability.",
    },
    {
      step: "Step 05",
      title: "Smooth Deployment",
      desc: "We handle App Store and Play Store releases, provision stable server pipelines on AWS/GCP, and set up continuous integration deployment.",
    },
    {
      step: "Step 06",
      title: "Support & Maintenance",
      desc: "We offer 24/7 post-deployment monitoring, security patch rollouts, feature updates, and server scaling support to keep your operations run smoothly.",
    },
  ];

  return (
    <div className={styles.timeline}>
      {steps.map((s, index) => {
        const isLeft = index % 2 === 0;
        return (
          <div
            key={index}
            className={`${styles.container} ${isLeft ? styles.left : styles.right}`}
          >
            <div className={`${styles.content} ${isLeft ? styles.leftContent : ""}`}>
              <span className={styles.stepNumber}>{s.step}</span>
              <h3 className={styles.stepTitle}>{s.title}</h3>
              <p className={styles.stepDesc}>{s.desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
