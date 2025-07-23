"use client";
// import React from 'react';
// import styles from './WorkExperience.module.css';

// const WorkExperience = () => {
//   return (
//     <section className={styles.workExperience}>
//       <h2 className={styles.sectionTitle}>Work Experience</h2>
//       <div className={styles.experienceGrid}>
//         {/* Middle Card: Centre for Advanced Studies (Slightly Upward) */}
//         <div className={`${styles.experienceCard} ${styles.middleCard}`}>
//           <div className={styles.cardGlow}></div>
//           <div className={styles.cardContent}>
//             <img
//               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwAQEux0Xt0e2veElFTjpUxB3lmJ33eEtmRN5elFVxgslpa4XcQBw-Hk3C1WgYoxOWMHk&usqp=CAU" // Placeholder image (400px wide, 20% of 400px height)
//               alt="Centre for Advanced Studies"
//               className={styles.cardImage}
//             />
//             <div className={styles.contentWrapper}>
//               <div className={styles.duration}>2024 - Present</div>
//               <div className={styles.company}>Centre for Advanced Studies</div>
//               <ul className={styles.description}>
//                 <li>Developed web applications using React.js.</li>
//                 <li>Built scalable web platforms using Node.js and MongoDB.</li>
//                 <li>Utilized Tailwind CSS & Material UI.</li>
//                 <li>Worked on optimizing API performance and database queries.</li>
//               </ul>
//               <div className={styles.technologies}>
//                 <span>Technologies Used:</span> React.js, Node.js, MongoDB, Tailwind CSS
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Top Card: SMART INDIA HACKATHON 2024 (Slightly Lowered) */}
//         <div className={`${styles.experienceCard} ${styles.topCard}`}>
//           <div className={styles.cardGlow}></div>
//           <div className={styles.cardContent}>
//             <img
//               src="https://eu-images.contentstack.com/v3/assets/blt31d6b0704ba96e9d/bltaa598dc97ec9e706/6597fd8f32f406040aed7473/GettyImages-1786604582.jpg" // Placeholder image
//               alt="SMART INDIA HACKATHON 2024"
//               className={styles.cardImage}
//             />
//             <div className={styles.contentWrapper}>
//               <div className={styles.duration}>2024</div>
//               <div className={styles.company}>SMART INDIA HACKATHON 2024</div>
//               <ul className={styles.description}>
//                 <li>Developed a mobile app for farmers to sell produce directly, eliminating middlemen.</li>
//                 <li>Integrated crop pre-posting & price alerts.</li>
//                 <li>Designed real-time updates using Figma, Firebase, MongoDB.</li>
//               </ul>
//               <div className={styles.technologies}>
//                 <span>Technologies Used:</span> React.js, Node.js, Firebase, MongoDB, Tailwind CSS
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Card: Vishnusspire (Slightly Lowered) */}
//         <div className={`${styles.experienceCard} ${styles.bottomCard}`}>
//           <div className={styles.cardGlow}></div>
//           <div className={styles.cardContent}>
//             <img
//               src="https://static.euronews.com/articles/stories/08/34/38/20/1200x675_cmsv2_f11ea645-3171-5463-97c2-2dc13e93c2d8-8343820.jpg" // Placeholder image
//               alt="Vishnusspire"
//               className={styles.cardImage}
//             />
//             <div className={styles.contentWrapper}>
//               <div className={styles.duration}>2022</div>
//               <div className={styles.company}>Vishnusspire</div>
//               <ul className={styles.description}>
//                 <li>Led an eco-friendly & sustainable recycling practice.</li>
//                 <li>Developed a platform for tracking recycling efforts.</li>
//                 <li>Managed a team & coordinated technical development.</li>
//                 <li>Worked on frontend UI/UX improvements.</li>
//               </ul>
//               <div className={styles.technologies}>
//                 <span>Technologies Used:</span> React.js, Node.js, MongoDB
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WorkExperience;

import React, { useEffect, useRef } from 'react';
import styles from './WorkExperience.module.css';

const WorkExperience = () => {
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

  return (
    <section className={styles.workExperience} id="experience" ref={sectionRef}>
      <h2 className={styles.sectionTitle}>Work Experience</h2>
      <div className={styles.experienceGrid}>
        {/* Cards remain the same as before */}
        <div className={`${styles.experienceCard} ${styles.middleCard}`}>
          <div className={styles.cardGlow}></div>
          <div className={styles.cardContent}>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwAQEux0Xt0e2veElFTjpUxB3lmJ33eEtmRN5elFVxgslpa4XcQBw-Hk3C1WgYoxOWMHk&usqp=CAU" // Placeholder image (400px wide, 20% of 400px height)
              alt="Centre for Advanced Studies"
              className={styles.cardImage}
            />
            <div className={styles.contentWrapper}>
              <div className={styles.duration}>2024 - Present</div>
              <div className={styles.company}>Centre for Advanced Studies</div>
              <ul className={styles.description}>
                <li>Developed web applications using React.js.</li>
                <li>Built scalable web platforms using Node.js and MongoDB.</li>
                <li>Utilized Tailwind CSS & Material UI.</li>
                <li>Worked on optimizing API performance and database queries.</li>
              </ul>
              <div className={styles.technologies}>
                <span>Technologies Used:</span> React.js, Node.js, MongoDB, Tailwind CSS
              </div>
            </div>
          </div>
        </div>
        {/* Middle Card */}
        

        {/* Top Card */}
        <div className={`${styles.experienceCard} ${styles.topCard}`}>
          {/* ... existing card content ... */}
          <div className={styles.cardGlow}></div>
          <div className={styles.cardContent}>
            <img
              src="https://eu-images.contentstack.com/v3/assets/blt31d6b0704ba96e9d/bltaa598dc97ec9e706/6597fd8f32f406040aed7473/GettyImages-1786604582.jpg" // Placeholder image
              alt="SMART INDIA HACKATHON 2024"
              className={styles.cardImage}
            />
            <div className={styles.contentWrapper}>
              <div className={styles.duration}>2024</div>
              <div className={styles.company}>SMART INDIA HACKATHON 2024</div>
              <ul className={styles.description}>
                <li>Developed a mobile app for farmers to sell produce directly, eliminating middlemen.</li>
                <li>Integrated crop pre-posting & price alerts.</li>
                <li>Designed real-time updates using Figma, Firebase, MongoDB.</li>
              </ul>
              <div className={styles.technologies}>
                <span>Technologies Used:</span> React.js, Node.js, Firebase, MongoDB, Tailwind CSS
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Card */}
        <div className={`${styles.experienceCard} ${styles.bottomCard}`}>
          {/* ... existing card content ... */}
           <div className={styles.cardGlow}></div>
          <div className={styles.cardContent}>
            <img
              src="https://static.euronews.com/articles/stories/08/34/38/20/1200x675_cmsv2_f11ea645-3171-5463-97c2-2dc13e93c2d8-8343820.jpg" // Placeholder image
              alt="Vishnusspire"
              className={styles.cardImage}
            />
            <div className={styles.contentWrapper}>
              <div className={styles.duration}>2022</div>
              <div className={styles.company}>Vishnusspire</div>
              <ul className={styles.description}>
                <li>Led an eco-friendly & sustainable recycling practice.</li>
                <li>Developed a platform for tracking recycling efforts.</li>
                <li>Managed a team & coordinated technical development.</li>
                <li>Worked on frontend UI/UX improvements.</li>
              </ul>
              <div className={styles.technologies}>
                <span>Technologies Used:</span> React.js, Node.js, MongoDB
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;