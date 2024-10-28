import React from 'react';
import data from './data';

const Projects = () => {
  return (
    <section id="projects" style={styles.section}>
      <h2 style={styles.heading}>Projects</h2>
      <ul style={styles.projectList}>
        {data.projects.map((project, index) => (
          <li key={index} style={styles.projectItem}>
            <h3 style={styles.projectTitle}>{project.title}</h3>
            <p style={styles.projectDescription}>{project.description}</p>
            <a href={project.link} style={styles.projectLink} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
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
    backgroundColor: '#121212', // Dark background for premium look
    color: '#ffffff', // White text for contrast
    borderRadius: '8px',
    boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.3)',
  },
  heading: {
    marginBottom: '20px',
    fontSize: '2.5rem',
    color: '#00bcd4', // Cyan color for heading
    borderBottom: '2px solid #00bcd4', // Underline for the heading
    paddingBottom: '10px',
  },
  projectList: {
    listStyleType: 'none',
    padding: '0',
  },
  projectItem: {
    marginBottom: '20px',
    padding: '20px',
    border: '1px solid rgba(255, 255, 255, 0.1)', // Light border for projects
    borderRadius: '5px',
    transition: 'transform 0.3s, box-shadow 0.3s', // Smooth transitions
    backgroundColor: 'rgba(255, 255, 255, 0.05)', // Slightly transparent background for project items
  },
  projectItemHover: {
    boxShadow: '0px 4px 20px rgba(0, 188, 212, 0.3)', // Shadow on hover
    transform: 'translateY(-5px)', // Lift effect on hover
  },
  projectTitle: {
    fontSize: '1.8rem',
    color: '#00bcd4',
  },
  projectDescription: {
    margin: '10px 0',
    color: '#e0e0e0', // Lighter text color for description
  },
  projectLink: {
    color: '#00bcd4',
    textDecoration: 'none',
    fontWeight: 'bold',
    padding: '10px 15px',
    border: '1px solid #00bcd4',
    borderRadius: '5px',
    transition: 'background-color 0.3s, color 0.3s', // Smooth transition
  },
};

// Change link and button color on hover
const handleMouseEnter = (e) => {
  e.currentTarget.style.backgroundColor = '#00bcd4'; // Change background on hover
  e.currentTarget.style.color = '#fff'; // Change text color on hover
};

const handleMouseLeave = (e) => {
  e.currentTarget.style.backgroundColor = 'transparent'; // Reset background
  e.currentTarget.style.color = '#00bcd4'; // Reset text color
};

export default Projects;
