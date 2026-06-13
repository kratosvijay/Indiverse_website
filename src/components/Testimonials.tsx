"use client";

import React, { useState, useEffect } from "react";
import styles from "./Testimonials.module.css";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      quote: "The School ERP SaaS has completely automated our school management operations. Attendance, homework tracking, and QR passes work flawlessly. Our teachers, parents, and office staff love it!",
      name: "Dr. Rajesh Kumar",
      role: "Principal, Greenwood International School",
    },
    {
      quote: "Indiverse developed a custom GPS fleet tracking system for us that cut our fuel costs by 20% and gave us real-time analytics. Their technology stack is state-of-the-art and highly reliable.",
      name: "Anil Sharma",
      role: "Operations Director, SwiftLogistics",
    },
    {
      quote: "Their cross-platform Flutter app development allowed us to launch on Android and iOS simultaneously, weeks ahead of schedule. The codebase is clean, and the app performance is incredibly smooth.",
      name: "Sarah Jenkins",
      role: "CTO, NexaFintech",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className={styles.section}>
      <div className="glow-background" style={{ top: "10%", left: "30%" }}></div>
      <div className={styles.container}>
        <h2 className={`${styles.title} text-gradient`}>Trusted by Innovators</h2>
        
        <div className={styles.carousel}>
          {testimonials.map((t, index) => {
            const isActive = index === currentIndex;
            return (
              <div
                key={index}
                className={`${styles.slide} ${isActive ? styles.activeSlide : ""}`}
              >
                <p className={styles.quote}>{t.quote}</p>
                <div className={styles.author}>
                  <span className={styles.authorName}>{t.name}</span>
                  <span className={styles.authorRole}>{t.role}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Carousel controls */}
        <div className={styles.controls}>
          <button className={styles.btn} onClick={handlePrev} aria-label="Previous Testimonial">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12,19 5,12 12,5"></polyline>
            </svg>
          </button>
          
          <div className={styles.dots}>
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ""}`}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>

          <button className={styles.btn} onClick={handleNext} aria-label="Next Testimonial">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12,5 19,12 12,19"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
