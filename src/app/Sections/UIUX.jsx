import React from 'react';
import styles from './UIUX.module.css';
import DaysAttendance from '../../../public/assets/100DaysAttendance.jpg';
import Blooddrop from '../../../public/assets/bloodrop.png';
import WealthMap from '../../../public/assets/Home.png'; 
import Farmers from '../../../public/assets/image.png';
import Inst from '../../../public/assets/Insta.png';
import Image from 'next/image';
const UIUX = () => {
const uiuxProjects = [
  {
    id: 1,
    image: Blooddrop, // Blood donation system
    borderColor: '#ff0000',
    title: 'Blooddrop - Emergency Blood Portal',
    description: 'UX for seamless donor registration and emergency blood tracking across centers.'
  },
  {
    id: 2,
    image: DaysAttendance, // 100daysAttendance
    borderColor: '#00ff00',
    title: '100daysAttendance - MGNREGA Workers',
    description: 'Simplified attendance marking and auto-report generation for rural workers.'
  },
  {
    id: 3,
    image: WealthMap, // WealthMap
    borderColor: '#ffff00',
    title: 'WealthMap - Land Management UI',
    description: 'Map-based interface to visualize and manage land listings for sale or purchase.'
  },
  {
    id: 4,
    image: Farmers, // Farmers Market (Smart India Hackathon)
    borderColor: '#800080',
    title: 'Farmers Market App UI',
    description: 'Direct-to-customer produce selling platform with crop pre-posting & live pricing.'
  },
  {
    id: 5,
    image: Inst, // TodoApp-Realtime Tracker
    borderColor: '#0000ff',
    title: 'TodoApp - Realtime Task Tracker',
    description: 'Daily routine planner with live time tracking and productivity insights.'
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
             <Image
  src={project.image}
  alt={`UI/UX Project ${project.title}`}
  className={styles.cardImage}
  loading="lazy"
  width={300} // adjust as needed
  height={200} // adjust as needed
  style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
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