import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <section className={styles.about} id='about'>
      <h2 className={styles.sectionTitle}>About Me</h2>
      <div className={styles.content}>
        {/* Professional Summary */}
        <div className={styles.card}>
          <div className={styles.circleGradient}></div>
          <h3 className={styles.cardTitle}>Professional Summary <span role="img" aria-label="Smiley">😊</span></h3>
          <p className={styles.text}>
            Full-Stack Developer (MERN & Firebase) Passionate about building scalable web & mobile apps using ReactJS, Node.js, MongoDB, and Firebase. Expert in frontend design, backend APIs, and cloud deployments to create seamless user experiences.
          </p>
        </div>

        {/* Special Skills */}
        <div className={styles.card}>
          <div className={styles.circleGradient}></div>
          <h3 className={styles.cardTitle}>Special Skills <span role="img" aria-label="Light Bulb">💡</span></h3>
          <ul className={styles.list}>
            <li>Design & UI/UX: Figma, Canva</li>
            <li>Animation & Editing: Blender, Animaker</li>
            <li>CapCut</li>
            <li>Chatbots: Chatbot Development, Basic AI/ML</li>
          </ul>
        </div>

        {/* Hobbies & Interests */}
        <div className={styles.card}>
          <div className={styles.circleGradient}></div>
          <h3 className={styles.cardTitle}>Hobbies & Interests</h3>
          <ul className={styles.list}>
            <li><span role="img" aria-label="Piano">🎹</span> Piano Player</li>
            <li><span role="img" aria-label="YouTube">📹</span> YouTube Content Creator</li>
            <li><span role="img" aria-label="Speaker">🎤</span> Mentor & Speaker</li>
          </ul>
        </div>

        {/* Journey & Milestones */}
        <div className={styles.card}>
          <div className={styles.circleGradient}></div>
          <h3 className={styles.cardTitle}>Journey & Milestones</h3>
          <ul className={styles.list}>
            <li>2020 - Started coding with Python & C</li>
            <li>2022 - Built first ReactJS project & joined B.Tech in IT</li>
            <li>2023 - Explored MERN stack, won Spark Tank 2nd Prize</li>
            <li>2024 - SIH Finalist, Patent-pending BloodDrop project, advanced into Mobile Dev [React Native]</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;