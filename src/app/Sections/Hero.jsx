"use client";
import React, { useEffect, useRef } from 'react';
import styles from './Hero.module.css';
import 'font-awesome/css/font-awesome.min.css';
import Image from 'next/image';

const Hero = () => {
  const textElementRef = useRef(null);
  const circleContainerRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    // Load CircleType dynamically
    const loadCircleType = async () => {
      const CircleType = (await import('circletype')).default;
      if (textElementRef.current && circleContainerRef.current) {
        const radius = circleContainerRef.current.offsetWidth / 2.3;
        new CircleType(textElementRef.current).radius(radius);
        textElementRef.current.style.fontSize = `${radius * 0.08}px`;
      }
    };

    loadCircleType();

    // Particle effect (same as before)
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      const ctx = canvas.getContext('2d');

      const particlesArray = [];
      const numberOfParticles = 50;

      class Particle {
        constructor() {
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height;
          this.size = Math.random() * 1.5 + 0.5;
          this.speedX = Math.random() * 0.3 - 0.15;
          this.speedY = Math.random() * 0.3 - 0.15;
        }

        update() {
          this.x += this.speedX;
          this.y += this.speedY;
          if (this.size > 0.1) this.size -= 0.005;
          if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
          if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
        }

        draw() {
          ctx.fillStyle = 'rgba(0, 229, 255, 0.3)';
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      const init = () => {
        for (let i = 0; i < numberOfParticles; i++) {
          particlesArray.push(new Particle());
        }
      };

      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < particlesArray.length; i++) {
          particlesArray[i].update();
          particlesArray[i].draw();
          if (particlesArray[i].size <= 0.1) {
            particlesArray.splice(i, 1);
            particlesArray.push(new Particle());
            i--;
          }
        }
        requestAnimationFrame(animate);
      };

      const handleResize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      };

      window.addEventListener('resize', handleResize);
      init();
      animate();

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  return (
    <section className={styles.hero}>
      <canvas ref={canvasRef} className={styles.particles} aria-hidden="true"></canvas>
      <div className={styles.container}>
        <div className={styles.contentDiv}>
          <h1 className={styles.title}>Pucchakayala Rajesh</h1>
          <p className={styles.subtitle}>MERN Stack Developer & UI/UX Designer</p>
          <p className={styles.description}>
            Crafting innovative digital experiences with a focus on modern web development and user-centric design.
          </p>
          <a href="#contact" className={styles.joinBtn}>Get in Touch</a>
          <div className={styles.socialIcons}>
            <a href="#" aria-label="LinkedIn" className={styles.socialLink}>
              <i className="fa fa-linkedin"></i>
            </a>
            <a href="#" aria-label="Instagram" className={styles.socialLink}>
              <i className="fa fa-instagram"></i>
            </a>
            <a href="#" aria-label="YouTube" className={styles.socialLink}>
              <i className="fa fa-youtube"></i>
            </a>
          </div>
        </div>
        
        <div className={styles.imageDiv}>
          <div ref={circleContainerRef} className={styles.circleContainer}>
            <div className={styles.rotatingRing}></div>
            <div className={styles.circleText}>
              <p ref={textElementRef} className={styles.text}>
                UI/UX Designer • Data Analyst • 3D Model Designer • MERN Stack Developer
              </p>
            </div>
            <div className={styles.profileImage}>
              <Image
                src="https://media.istockphoto.com/id/1682296067/photo/happy-studio-portrait-or-professional-man-real-estate-agent-or-asian-businessman-smile-for.jpg?s=612x612&w=0&k=20&c=9zbG2-9fl741fbTWw5fNgcEEe4ll-JegrGlQQ6m54rg="
                alt="Pucchakayala Rajesh Profile"
                width={250}
                height={250}
                priority
                className={styles.profileImageInner}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;