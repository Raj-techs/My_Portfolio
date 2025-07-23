"use client"
import React from 'react';
import styles from './ExtraActivities.module.css';
import channelsProfile from '../assets/channels_profile.jpg'; // Placeholder image, replace with actual
const ExtraActivities = () => {
  return (
    <section className={styles.container}>
      {/* Left top heading */}
      <h2 className={styles.heading}>Extracurricular Activities</h2>

      <div className={styles.content}>
        {/* Left side - Circular image with YouTube logo */}
        <div className={styles.imageContainer}>
          <div className={styles.profileCircle}>
            <img 
              src="https://yt3.ggpht.com/Sv8kxhfO1xRk4xyEf0gr3WmBJazjxfLwHiRw0JUgeJKO0fraM8tXogt6vCmDWz9k88RJ1VK46A=s108-c-k-c0x00ffffff-no-rj" 
              alt="Profile" 
              className={styles.profileImage}
            />
            <div className={styles.youtubeLogo}>
              <svg viewBox="0 0 24 24">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Right side - Text content */}
        <div className={styles.textContent}>
          <h3 className={styles.title}>RajTechs</h3>
          <p className={styles.summary}>
            Video content creation: Regularly create educational videos on design and development
          </p>
          <ul className={styles.details}>
            <li>YouTube tutorials on web development</li>
            <li>Design tool walkthroughs</li>
            <li>Coding challenges and solutions</li>
            <li>Tech stack comparisons</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ExtraActivities;