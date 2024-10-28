import React from 'react';
import data from './data';

const Skills = () => {
  return (
    <section id="skills" style={styles.section}>
      <h2 style={styles.heading}>Skills & Expertise</h2>
      <ul style={styles.skillsList}>
        {data.skills.map((skill, index) => (
          <li 
            key={index} 
            style={styles.skillItem}
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};

const styles = {
  section: {
    padding: '40px 20px',
    margin: '20px 0',
    backgroundColor: '#fff',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
  },
  heading: {
    marginBottom: '20px',
    fontSize: '2rem',
    color: '#333',
    borderBottom: '2px solid #007bff', // Underline for the heading
    paddingBottom: '10px',
  },
  skillsList: {
    listStyleType: 'none',
    padding: '0',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center', // Center align skills
  },
  skillItem: {
    backgroundColor: '#007bff', // Bootstrap primary color
    color: '#fff',
    margin: '10px',
    padding: '10px 20px',
    borderRadius: '5px',
    fontSize: '1.1rem',
    transition: 'background-color 0.3s, transform 0.3s', // Smooth background transition
    cursor: 'pointer', // Pointer cursor for interactivity
  },
};

// Hover effect functions
const handleMouseEnter = (e) => {
  e.currentTarget.style.backgroundColor = '#0056b3'; // Darker shade on hover
  e.currentTarget.style.transform = 'scale(1.05)'; // Slightly increase size on hover
};

const handleMouseLeave = (e) => {
  e.currentTarget.style.backgroundColor = '#007bff'; // Reset background color
  e.currentTarget.style.transform = 'scale(1)'; // Reset size
};

export default Skills;
