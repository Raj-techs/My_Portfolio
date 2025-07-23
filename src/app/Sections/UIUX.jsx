import React from 'react';
import styles from './UIUX.module.css';

const UIUX = () => {
  const uiuxProjects = [
    {
      id: 1,
      image: 'https://via.placeholder.com/280x380',
      borderColor: '#ff0000',
      title: 'E-commerce Redesign',
      description: 'Modernized checkout flow increasing conversions by 32%'
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/280x380',
      borderColor: '#00ff00',
      title: 'Health App Dashboard',
      description: 'Data visualization for better user engagement'
    },
    {
      id: 3,
      image: 'https://via.placeholder.com/280x380',
      borderColor: '#ffff00',
      title: 'Banking Interface',
      description: 'Simplified transaction process for millennials'
    },
    {
      id: 4,
      image: 'https://via.placeholder.com/280x380',
      borderColor: '#800080',
      title: 'AR Fashion Experience',
      description: 'Virtual try-on with 94% customer satisfaction'
    },
    {
      id: 5,
      image: 'https://via.placeholder.com/280x380',
      borderColor: '#0000ff',
      title: 'Smart Home Control',
      description: 'Intuitive IoT device management interface'
    },
  ];

  return (
    <section className={styles.uiux} id='uiux'>
      <h2 className={styles.sectionTitle}>UI/UX Projects</h2>
      <div className={styles.uiuxGrid}>
        {uiuxProjects.map((project) => (
          <div
            key={project.id}
            className={styles.uiuxCard}
            style={{ '--border-color': project.borderColor }}
            data-index={project.id}
          >
            <div className={styles.cardContent}>
              <img
                src={project.image}
                alt={`UI/UX Project ${project.id}`}
                className={styles.cardImage}
                loading="lazy"
              />
              <div className={styles.cardOverlay}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UIUX;