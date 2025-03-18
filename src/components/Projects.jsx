import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from '../styles/components/Projects.module.scss';

const Projects = () => {
  const { t } = useTranslation();

  return (
    <section id="projects" className={styles.projects}>
      <div>
        PROJETS
      </div>
    </section>
  );
};

export default Projects;