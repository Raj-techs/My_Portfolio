"use client";

import React, { useEffect, useRef, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import styles from './Projects.module.css';
import { projectsData } from '../data/projectsData';

// Inner component that uses useSearchParams (must be wrapped in Suspense)
function ProjectsInner() {
  const gridRef = useRef(null);
  const searchParams = useSearchParams();
  const highlightSlug = searchParams ? searchParams.get('project') : null;

  useEffect(() => {
    if (!highlightSlug || !gridRef.current) return;
    const card = gridRef.current.querySelector(`[data-slug="${highlightSlug}"]`);
    if (card) card.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
  }, [highlightSlug]);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;
    const scrollInterval = setInterval(() => {
      const cards = grid.querySelectorAll(`.${styles.projectCard}`);
      if (!cards.length) return;
      const cardWidth = cards[0].offsetWidth + 20;
      const maxScroll = grid.scrollWidth - grid.clientWidth;
      const nextScroll = grid.scrollLeft + cardWidth;
      grid.scrollTo({ left: nextScroll >= maxScroll ? 0 : nextScroll, behavior: 'smooth' });
    }, 5000);
    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div className={styles.projectsGrid} ref={gridRef}>
      {projectsData.map((project) => (
        <div
          key={project.id}
          data-slug={project.slug}
          className={`${styles.projectCard} ${highlightSlug === project.slug ? styles.highlighted : ''}`}
          style={{ '--rotation': project.rotation }}
        >
          <div className={styles.cardGlow}></div>
          <div className={styles.cardContent}>
            <img src={project.image} alt={project.name} className={styles.cardImage} />
            <div className={styles.contentWrapper}>
              <div className={styles.duration}>{project.year}</div>
              <div className={styles.projectName}>{project.name}</div>
              <p className={styles.shortDesc}>{project.shortDescription}</p>
              <div className={styles.techTagsSmall}>
                {project.technologies.slice(0, 3).map((t) => (
                  <span key={t} className={styles.techTag}>{t}</span>
                ))}
                {project.technologies.length > 3 && (
                  <span className={styles.techTag}>+{project.technologies.length - 3}</span>
                )}
              </div>
              <Link href={`/projects/${project.slug}`} className={styles.viewDetailsBtn}>
                View Details →
              </Link>
            </div>
          </div>
          <div className={styles.projectNumber}>{project.id}</div>
        </div>
      ))}
    </div>
  );
}

const Projects = () => (
  <section className={styles.projects} id="projects">
    <h2 className={styles.sectionTitle}>Projects</h2>
    <Suspense fallback={<div style={{ color: '#00d4ff', textAlign: 'center', padding: '40px' }}>Loading projects...</div>}>
      <ProjectsInner />
    </Suspense>
  </section>
);

export default Projects;
