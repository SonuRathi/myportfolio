import profilePic from '../assets/images/045A4208.JPG'; // Use relative path for the profile picture

const data = {
  about: "I am Sonu Rathi, a dedicated final-year BCA student from Jaipur, specializing in web development with a focus on the MERN stack. I am passionate about creating responsive web applications and continually expanding my knowledge of new technologies.",
  
  skills: [
    "JavaScript",
    "React",
    "Node.js",
    "HTML",
    "CSS",
    "MongoDB",
    "Express.js",
    "Git",
    "GitHub"
  ],

  projects: [
    {
      title: "Portfolio Website",
      description: "A personal portfolio website built with React to showcase my projects, skills, and experiences.",
      link: "#" 
    },
    {
      title: "99Books Shop Website",
      description: "A dynamic online bookstore application designed to provide users with a seamless shopping experience.",
      link: "#" 
    },
    {
      title: "News Headlines App",
      description: "An Android application that delivers the latest news headlines from various sources.",
      link: "#"
    }
  ],

  contact: {
    email: "rathisonu123@example.com",
    phone: "8118874312",
    github: "https://github.com/sonurathi"
  },
  
  profilePicture: profilePic // Use the imported profile picture here
};

export default data;
