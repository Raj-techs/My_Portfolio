'use client';
import React, { useState, useEffect, useRef } from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import styles from './Contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000);
    }, 1500);
  };

  return (
    <section className={styles.contactSection} id='contact' ref={sectionRef}>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>
          <span className={styles.titleText}>Get In Touch</span>
          <span className={styles.titleUnderline}></span>
        </h2>
        <p className={styles.subtitle}>Have a project in mind or want to collaborate? Let's talk.</p>
      </div>

      <div className={styles.contactContent}>
        <div className={styles.contactInfo}>
          <h3 className={styles.infoTitle}>Contact Information</h3>
          <p className={styles.infoDescription}>Feel free to reach out through any of these channels</p>
          
          <div className={styles.contactCards}>
            <div className={styles.contactCard}>
              <div className={styles.iconContainer}>
                <FaEnvelope className={styles.icon} />
                <div className={styles.iconBorder}></div>
              </div>
              <div className={styles.contactText}>
                <h4>Email</h4>
                <a href="mailto:puchakayalarajesh714@gmail.com">puchakayalarajesh714@gmail.com</a>
              </div>
            </div>

            <div className={styles.contactCard}>
              <div className={styles.iconContainer}>
                <FaPhoneAlt className={styles.icon} />
                <div className={styles.iconBorder}></div>
              </div>
              <div className={styles.contactText}>
                <h4>Phone</h4>
                <a href="tel:+918985785491">+91 8985785491</a>
              </div>
            </div>

            <div className={styles.contactCard}>
              <div className={styles.iconContainer}>
                <FaMapMarkerAlt className={styles.icon} />
                <div className={styles.iconBorder}></div>
              </div>
              <div className={styles.contactText}>
                <h4>Location</h4>
                <address>Bhimavaram, A.P, India</address>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.contactForm}>
          <h3 className={styles.formTitle}>Send Me a Message</h3>
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <input 
                type="text" 
                name="name"
                placeholder="Your Name" 
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </div>
            <div className={styles.formGroup}>
              <input 
                type="email" 
                name="email"
                placeholder="Your Email" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>
            <div className={styles.formGroup}>
              <textarea 
                name="message"
                placeholder="Your Message" 
                rows="5" 
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button 
              type="submit" 
              className={styles.submitBtn}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                'Sending...'
              ) : (
                <>
                  <FaPaperPlane className={styles.sendIcon} />
                  Send Message
                </>
              )}
            </button>
            {submitStatus === 'success' && (
              <div className={styles.successMessage}>
                Message sent successfully!
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;