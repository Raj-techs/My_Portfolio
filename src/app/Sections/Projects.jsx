"use client";

import React, { useEffect, useRef } from 'react';
import styles from './Projects.module.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      image: 'https://eu-images.contentstack.com/v3/assets/blt31d6b0704ba96e9d/bltaa598dc97ec9e706/6597fd8f32f406040aed7473/GettyImages-1786604582.jpg',
      duration: '2022',
      name: 'Blooddrop',
      description: [
        'Blooddrop Project: Patient Feeding System.',
        'Connected blood donation banks and emergency centers.',
        'User Registration & Donor Management.',
        'Emergency Blood across blood banks & APSAC.',
        'Technologies Used: React.js, Node.js.',
      ],
      technologies: 'React.js, Node.js, MongoDB, Firebase',
      rotation: '4deg'
    },
    {
      id: 2,
      image: 'https://static.euronews.com/articles/stories/08/34/38/20/1200x675_cmsv2_f11ea645-3171-5463-97c2-2dc13e93c2d8-8343820.jpg',
      duration: '2024',
      name: 'Farmers Market',
      description: [
        'Smart India Hackathon - Farmers App.',
        'Developed to allow farmers to sell produce directly.',
        'Crop Pre-posting & Price Alerts middleware.',
        'Real-time updates & Donor Market.',
      ],
      technologies: 'React.js, Node.js, Firebase, MongoDB, Tailwind CSS',
      rotation: '-4deg'
    },
    {
      id: 3,
      image: 'https://www.topgear.com/sites/default/files/2022/10/RR_Spectre_Shot_02_Front_3QTR.jpg',
      duration: '2023',
      name: 'Women Works',
      description: [
        'Completed a system for tracking.',
        'Managed a team & coordinated development.',
        'Worked on frontend UI/UX improvements.',
        'Technologies Used: React.js, Node.js.',
      ],
      technologies: 'React.js, Node.js, MongoDB',
      rotation: '3deg'
    },
    {
      id: 4,
      image: 'https://example.com/new-image.jpg',
      duration: '2025',
      name: 'New Project',
      description: [
        'New innovative project description.',
        'Connecting new features.',
        'User engagement system.',
        'Technologies Used: React.js, Node.js.',
      ],
      technologies: 'React.js, Node.js, MongoDB',
      rotation: '2deg'
    },
  ];

  const gridRef = useRef(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const scrollInterval = setInterval(() => {
      const cardWidth = grid.querySelector(`.${styles.projectCard}`).offsetWidth;
      const maxScroll = grid.scrollWidth - grid.clientWidth;
      const nextScroll = grid.scrollLeft + cardWidth;

      if (nextScroll >= maxScroll) {
        // Loop back to start
        grid.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        grid.scrollTo({ left: nextScroll, behavior: 'smooth' });
      }
    }, 5000); // Auto-scroll every 5 seconds

    return () => clearInterval(scrollInterval); // Cleanup on unmount
  }, []);

  return (
    <section className={styles.projects} id='projects'>
      <h2 className={styles.sectionTitle}>Projects</h2>
      <div className={styles.projectsGrid} ref={gridRef}>
        {projects.map((project) => (
          <div
            key={project.id}
            className={styles.projectCard}
            style={{
              '--rotation': project.rotation,
            }}
          >
            <div className={styles.cardGlow}></div>
            <div className={styles.cardContent}>
              <img
                src={project.image}
                alt={project.name}
                className={styles.cardImage}
              />
              <div className={styles.contentWrapper}>
                <div className={styles.duration}>{project.duration}</div>
                <div className={styles.projectName}>{project.name}</div>
                <ul className={styles.description}>
                  {project.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <div className={styles.technologies}>
                  <span>Technologies Used:</span> {project.technologies}
                </div>
              </div>
            </div>
            <div className={styles.projectNumber}>
              {project.id}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;