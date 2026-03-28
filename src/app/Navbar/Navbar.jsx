"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

const NAV_ITEMS = ['Home', 'About', 'Skills', 'Projects', 'UI/UX', 'Contact'];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const scrollToSection = (id) => {
    setIsMobileMenuOpen(false);
    const sectionId = id.toLowerCase().replace('/', '');
    if (pathname !== '/') {
      router.push(`/#${sectionId}`);
      return;
    }
    const section = document.getElementById(sectionId);
    if (section) {
      const y = section.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    const handleResize = () => { if (window.innerWidth > 768) setIsMobileMenuOpen(false); };
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={styles.logo} onClick={() => router.push('/')}>
        Rajesh.dev
      </div>

      <ul className={`${styles.navLinks} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
        {NAV_ITEMS.map((item) => (
          <li key={item}>
            <button onClick={() => scrollToSection(item)}>{item}</button>
          </li>
        ))}
        <li className={styles.allProjectsLi}>
          <Link href="/projects" className={styles.allProjectsLink} onClick={() => setIsMobileMenuOpen(false)}>
            All Projects ↗
          </Link>
        </li>
      </ul>

      <button className={styles.optionalButton}>Resume</button>

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
