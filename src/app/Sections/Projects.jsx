"use client";

import React, { useEffect, useRef } from 'react';
import styles from './Projects.module.css';

const Projects = () => {
  const projects = [
  {
    id: 1,
    image: 'https://static.vecteezy.com/system/resources/previews/008/191/708/non_2x/human-blood-donate-and-heart-rate-on-white-background-free-vector.jpg',
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
    image: 'https://empmonitor.com/blog/wp-content/uploads/2020/04/Employee-Attendance-Tracking-Guide-for-2020-.png',
    duration: '2024',
    name: '100daysAttendance',
    description: [
      'Attendance application for MGNREGA workers.',
      'Smart present/not marking system.',
      'Auto-generated attendance reports.',
      'Streamlined for rural employment tracking.',
    ],
    technologies: 'Next.js, Tailwind CSS',
    rotation: '-4deg'
  },
  {
    id: 3,
    image: 'https://www.wideopencountry.com/wp-content/uploads/sites/4/2017/09/Capture-1.jpg?resize=890%2C736',
    duration: '2024',
    name: 'WealthMap',
    description: [
      'US client task application.',
      'Visualize land assets for buying or selling.',
      'Interactive map-based land management.',
      'Quick view of market-available lands.',
    ],
    technologies: 'Vite, React.js, Tailwind CSS',
    rotation: '3deg'
  },
  {
    id: 4,
    image: 'https://play-lh.googleusercontent.com/KNKGRR45kH6DQgsrtBxMZeMqXRatjLZtxxYFhPDijvE9IKkF-CiQlLaAZf3KhmVQhNSq=w240-h480-rw',
    duration: '2025',
    name: 'TodoApp-Realtime Tracker',
    description: [
      'Daily task manager with time tracking.',
      'Real-time task monitoring & updates.',
      'Helps build routine habits and productivity.',
      'User-friendly dashboard interface.',
    ],
    technologies: 'Next.js, Tailwind CSS',
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