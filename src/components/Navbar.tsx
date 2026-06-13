"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Services", path: "/services" },
    { label: "Products", path: "/products" },
    { label: "Portfolio", path: "/portfolio" },
    { label: "Careers", path: "/careers" },
    { label: "Contact", path: "/contact" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        {/* Logo */}
        <Link href="/" className={styles.logoLink} onClick={closeMenu}>
          <Image
            src="/logo.png"
            alt="Indiverse Enterprises Pvt Ltd"
            width={64}
            height={56}
            className={styles.logoImage}
            priority
          />
          <span className={styles.logoText}>Indiverse</span>
        </Link>

        {/* Desktop Links */}
        <div className={styles.navLinks}>
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.path}
                href={item.path}
                className={`${styles.link} ${isActive ? styles.activeLink : ""}`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Right Action Button / Mobile Menu Toggle */}
        <div className={styles.rightSection}>
          <Link href="/contact" className={styles.ctaButton}>
            Schedule Consultation
          </Link>
          
          <button
            className={styles.mobileMenuBtn}
            onClick={toggleMenu}
            aria-label="Toggle Navigation Menu"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`${styles.mobileMenu} ${isOpen ? styles.mobileMenuOpen : ""}`}>
        {navItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link
              key={item.path}
              href={item.path}
              className={`${styles.mobileLink} ${isActive ? styles.mobileActive : ""}`}
              onClick={closeMenu}
            >
              {item.label}
            </Link>
          );
        })}
        <Link href="/contact" className={styles.mobileCta} onClick={closeMenu}>
          Schedule Consultation
        </Link>
      </div>
    </nav>
  );
}
