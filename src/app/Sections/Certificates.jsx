"use client";
import React, { useEffect, useRef, useState } from 'react';
import styles from './Certificates.module.css';
import { motion, useInView } from 'framer-motion';

const Certificates = () => {
  const data = [
    {
      title: "Certifications",
      icon: "📄",
      items: [
        "Web Development Internship at Codeway",
        "Smart India Hackathon Finalist",
        "GDSC Hackathon Winner",
        "Pivot - Change is Constant Hackathon",
        "Spark Tank - 2nd Prize"
      ],
      img: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
    },
    {
      title: "Achievements",
      icon: "🏆",
      items: [
        "Patent Pending for Bloodrop Project (2024)",
        "Led Vishnuspire's 'Reinvent Recycle Initiative' (2022)",
        "Created YouTube Figma Design Tutorials (2024)",
        "Conducted Coding Workshops"
      ],
      img: "https://images.unsplash.com/photo-1510519138101-570d1dca3d66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
    },
    {
      title: "Hackathons",
      icon: "🚀",
      items: [
        "GDG Hackathon Winner",
        "Smart India Hackathon Finalist",
        "GDSC Hackathon Winner",
        "Pivot - Change is Constant Hackathon",
        "Spark Tank - 2nd Prize"
      ],
      img: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
    }
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const [activeCard, setActiveCard] = useState(null);

  return (
    <section className={styles.certificates} ref={ref} id="certificates">
      <motion.h2 
        className={styles.title}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        Certifications & Achievements
      </motion.h2>
      
      <div className={styles.cardContainer}>
        {data.map((item, index) => (
          <motion.div
            key={index}
            className={`${styles.card} ${activeCard === index ? styles.active : ''}`}
            initial={{ opacity: 0, y: 100 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            whileHover={{ scale: 1.05 }}
            onHoverStart={() => setActiveCard(index)}
            onHoverEnd={() => setActiveCard(null)}
          >
            <div className={styles.cardImage}>
              <img
                src={item.img}
                alt={item.title}
                className={styles.image}
              />
              <div className={styles.imageOverlay}></div>
            </div>
            <div className={styles.cardContent}>
              <div className={styles.cardHeader}>
                <span className={styles.icon}>{item.icon}</span>
                <h3>{item.title}</h3>
              </div>
              <ul className={styles.list}>
                {item.items.map((li, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.6 + (i * 0.1) }}
                  >
                    {li}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;