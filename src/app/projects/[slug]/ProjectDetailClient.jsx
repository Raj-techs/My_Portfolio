"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './ProjectDetail.module.css';

export default function ProjectDetailClient({ project }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 60);
    return () => clearTimeout(t);
  }, []);

  const driveEmbedUrl = project.demoVideoEmbed
    ? project.demoVideoEmbed.replace('/view?usp=sharing', '/preview').replace('/view', '/preview')
    : null;

  return (
    <div className={`${styles.page} ${visible ? styles.visible : ''}`}>
      {/* ── Header bar ── */}
      <header className={styles.header}>
        <Link href="/#projects" className={styles.backBtn}>
          ← Back to Projects
        </Link>
        <span className={styles.headerTitle}>{project.name}</span>
      </header>

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroText}>
          <p className={styles.year}>{project.year}</p>
          <h1 className={styles.title}>{project.name}</h1>
          <p className={styles.tagline}>{project.tagline}</p>
          <div className={styles.techTags}>
            {project.technologies.map((t) => (
              <span key={t} className={styles.tag}>{t}</span>
            ))}
          </div>
          <div className={styles.ctaRow}>
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noreferrer" className={styles.ctaPrimary}>
                🚀 View Live Project
              </a>
            )}
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noreferrer" className={styles.ctaSecondary}>
                ⬡ View Source Code
              </a>
            )}
          </div>
        </div>
        <div className={styles.heroImageWrap}>
          <img src={project.image} alt={project.name} className={styles.heroImage} />
        </div>
      </section>

      {/* ── Demo Video ── */}
      {driveEmbedUrl && (
        <section className={styles.videoSection}>
          <h2 className={styles.sectionHeading}>📽 Demo Video</h2>
          <div className={styles.videoWrapper}>
            <iframe
              src={driveEmbedUrl}
              className={styles.videoFrame}
              allow="autoplay"
              allowFullScreen
              title={`${project.name} Demo`}
            />
          </div>
          <a href={project.demoVideo} target="_blank" rel="noreferrer" className={styles.watchLink}>
            ↗ Open in Google Drive
          </a>
        </section>
      )}

      {/* ── Overview + Problem ── */}
      <section className={styles.twoCol}>
        <div className={styles.card}>
          <h2 className={styles.cardHeading}>📌 Overview</h2>
          <p className={styles.cardText}>{project.overview}</p>
        </div>
        <div className={styles.card}>
          <h2 className={styles.cardHeading}>🎯 Problem Solved</h2>
          <p className={styles.cardText}>{project.problemSolved}</p>
          <div className={styles.impactBox}>
            <span className={styles.impactLabel}>Impact</span>
            <p className={styles.impactText}>{project.impact}</p>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className={styles.featuresSection}>
        <h2 className={styles.sectionHeading}>✨ Key Features</h2>
        <ul className={styles.featureList}>
          {project.features.map((f, i) => (
            <li key={i} className={styles.featureItem} style={{ animationDelay: `${i * 0.07}s` }}>
              <span className={styles.featureDot}></span>
              {f}
            </li>
          ))}
        </ul>
      </section>

      {/* ── Bottom CTA ── */}
      <section className={styles.bottomCta}>
        <h2 className={styles.bottomCtaTitle}>Want to see it in action?</h2>
        <div className={styles.ctaRow}>
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noreferrer" className={styles.ctaPrimary}>
              🚀 View Live Project
            </a>
          )}
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noreferrer" className={styles.ctaSecondary}>
              ⬡ View Source Code on GitHub
            </a>
          )}
        </div>
        <Link href="/#projects" className={styles.backLink}>← Back to all projects</Link>
      </section>
    </div>
  );
}
