"use client";
import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false); // Close mobile menu after clicking a link
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.logo}>My Portfolio</div>
      
      {/* Desktop Navigation */}
      <ul className={`${styles.navLinks} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
        <li><button onClick={() => scrollToSection('hero')}>Home</button></li>
        <li><button onClick={() => scrollToSection('about')}>About</button></li>
        <li><button onClick={() => scrollToSection('skills')}>Skills</button></li>
        <li><button onClick={() => scrollToSection('projects')}>Projects</button></li>
        <li><button onClick={() => scrollToSection('uiux')}>UI/UX</button></li>
        <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
      </ul>

      <button className={styles.optionalButton}>Optional</button>

      {/* Mobile Hamburger Button */}
      <button 
        className={styles.hamburger}
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle menu"
      >
        <span className={`${styles.line} ${isMobileMenuOpen ? styles.line1 : ''}`}></span>
        <span className={`${styles.line} ${isMobileMenuOpen ? styles.line2 : ''}`}></span>
        <span className={`${styles.line} ${isMobileMenuOpen ? styles.line3 : ''}`}></span>
      </button>
    </nav>
  );
};

export default Navbar;