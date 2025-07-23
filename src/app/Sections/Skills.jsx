import React from 'react';
import styles from './Skills.module.css';

const Skills = () => {
  // Array of skills with placeholder image URLs (replace with actual image sources)
  // Total 15 skills: 6 Firebase, 5 GitHub, 4 MongoDB
  const skillsList = [
    { name: 'Firebase', image: 'https://i.pinimg.com/564x/8a/69/1f/8a691f82c76ab844029e8dfb68fcd202.jpg' }, // 1
    { name: 'Firebase', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBsWMuMzWCJ6vJrKqYjqMTinRWvtS5GsjoSA&s' }, // 2
    { name: 'Firebase', image: 'https://img.icons8.com/color/512/java-coffee-cup-logo--v2.png' }, // 3
    { name: 'Firebase', image: 'https://seeklogo.com/images/L/linux-logo-704D6BB91C-seeklogo.com.png' }, // 4
    { name: 'Firebase', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSDKn3vA2YUbXzN0ZC3gALWJ08gJN-Drl15w&s' }, // 5
    { name: 'Firebase', image: 'https://images-eds-ssl.xboxlive.com/image?url=4rt9.lXDC4H_93laV1_eHHFT949fUipzkiFOBH3fAiZZUCdYojwUyX2aTonS1aIwMrx6NUIsHfUHSLzjGJFxxo4K81Ei7WzcnqEk8W.MgwYqB5CRA8i20O0tGyRHzjcEesWcOw9C_zoFBtCCVzOdp5525q92eS773zOx_R7Bakc-&format=source' }, // 6
    { name: 'GitHub', image: 'https://ih1.redbubble.net/image.5513011185.9723/st,small,507x507-pad,600x600,f8f8f8.jpg' },   // 7
    { name: 'GitHub', image: 'https://cdn.worldvectorlogo.com/logos/react-1.svg' },   // 8
    { name: 'GitHub', image: 'https://gimgs2.nohat.cc/thumb/f/640/davinci-resolve-logo-png-3-png-image--comdlpng6941836.jpg' },   // 9
    { name: 'GitHub', image: 'https://img.icons8.com/androidL/512/FFFFFF/git.png' },   // 10
    { name: 'GitHub', image: 'https://cdn3.iconfinder.com/data/icons/inficons/512/github.png' },   // 11
    { name: 'MongoDB', image: 'https://images-cdn.openxcell.com/wp-content/uploads/2024/07/25090553/nodejs-inner.webp' },  // 12
    { name: 'MongoDB', image: 'https://images.icon-icons.com/2429/PNG/512/figma_logo_icon_147289.png' },  // 13
    { name: 'MongoDB', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2ZYtHv2OLXmthRPbkmENZRXuqBVDwlsrZ1A&s' },  // 14
    { name: 'MongoDB', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV9uzErWz9EXqZDxZ5lP9aYpMz8eK6rr5X3w&s' },  // 15
  ];

  // Define the triangular pattern with exact 6-5-4 rows
 const triangularPattern = [
  // Row 1: 6 items (Firebase - top row visually)
  { skillIndex: 0, row: 1, indexInRow: 0 },
  { skillIndex: 1, row: 1, indexInRow: 1 },
  { skillIndex: 2, row: 1, indexInRow: 2 },
  { skillIndex: 3, row: 1, indexInRow: 3 },
  { skillIndex: 4, row: 1, indexInRow: 4 },
  { skillIndex: 5, row: 1, indexInRow: 5 },

  // Row 2: 5 items (GitHub - middle row)
  { skillIndex: 6, row: 2, indexInRow: 0 },
  { skillIndex: 7, row: 2, indexInRow: 1 },
  { skillIndex: 8, row: 2, indexInRow: 2 },
  { skillIndex: 9, row: 2, indexInRow: 3 },
  { skillIndex: 10, row: 2, indexInRow: 4 },

  // Row 3: 4 items (MongoDB - bottom row)
  { skillIndex: 11, row: 3, indexInRow: 0 },
  { skillIndex: 12, row: 3, indexInRow: 1 },
  { skillIndex: 13, row: 3, indexInRow: 2 },
  { skillIndex: 14, row: 3, indexInRow: 3 },
];



  return (
    <section className={styles.skills} id='skills'>
      <h2 className={styles.sectionTitle}>Skills & Tools</h2>
      <div className={styles.skillsGrid}>
       {triangularPattern.map((item, index) => {
  const skill = skillsList[item.skillIndex];
  return (
    <div key={index} className={styles.skillItem} style={getPosition(item.row, item.indexInRow)}>
      <div className={styles.circleGradient}></div>
      <img src={skill.image} alt={skill.name} className={styles.skillImage} />
    </div>
  );
})}

      </div>
    </section>
  );
};

// Function to position skills in a triangular 6-5-4 pattern with margin
const getPosition = (row, indexInRow) => {
  const itemSize = 160;
  const margin = 40;

  const itemsPerRow = {
    1: 6,
    2: 5,
    3: 4,
  };

  const rowCount = Object.keys(itemsPerRow).length;
  const rowWidth = itemsPerRow[row] * (itemSize + margin);
  const maxCols = 6;
  const containerWidth = maxCols * (itemSize + margin);

  const startX = (containerWidth - rowWidth) / 2;
  const left = startX + indexInRow * (itemSize + margin) -40;

  // Flip vertical order: bottom row is highest row number
  const top = (rowCount - row) * (itemSize * 0.9 + margin);

  return {
    left: `${left}px`,
    top: `${top}px`,
  };
};


export default Skills;