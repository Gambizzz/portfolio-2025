"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import styles from "../styles/components/Projects.module.scss";

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

const projectsData = [
  {
    id: 1,
    title: "Projet 1",
    type: "image",
    src: "/images/projects/chapatte1.png",
    description: "Description du projet 1. Cliquez pour en savoir plus !"
  },
  {
    id: 2,
    title: "Projet 2",
    type: "image",
    src: "path/to/image2.jpg",  // Remplace par un lien d'image réel
    description: "Description du projet 2. Cliquez pour en savoir plus !"
  },
  {
    id: 3,
    title: "Projet 3",
    type: "video",
    src: "path/to/video.mp4",  // Remplace par un lien vidéo réel
    description: "Description du projet 3. Cliquez pour en savoir plus !"
  }
];

function ProjectItem({ project, onClick }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section className={styles.projectContainer} onClick={() => onClick(project)}>
      <div ref={ref} className={styles.projectImageContainer}>
        <img className={styles.projectImage} src={project.src} alt={project.title} />
        <motion.h2
          className={styles.projectTitle}
          initial={{ visibility: "hidden" }}
          animate={{ visibility: "visible" }}
          style={{ y }}
        >
          {project.title}
        </motion.h2>
      </div>

      <div className={styles.projectDescription}>
        <p>{project.description}</p>
        <a href="#" onClick={(e) => { e.preventDefault(); onClick(project); }}>DÉCOUVRIR</a>
      </div>
    </section>
  );
}

function ProjectModal({ project, onClose }) {
  return (
    <motion.div
      className={styles.modal}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>X</button>
        <h2>{project.title}</h2>
        {project.type === "image" && <img className={styles.modalImage} src={project.src} alt={project.title} />}
        {project.type === "video" && <video className={styles.modalVideo} controls src={project.src}></video>}
        {project.type === "text" && <p>{project.description}</p>}
      </div>
    </motion.div>
  );
}

function Projects() {
  const { t } = useTranslation();
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <div id="projects" className={styles.projects}>
      <h2 className={styles.sectionTitle}>{t("projects")}</h2>
      {projectsData.map((project) => (
        <ProjectItem key={project.id} project={project} onClick={handleProjectClick} />
      ))}
      
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default Projects;






