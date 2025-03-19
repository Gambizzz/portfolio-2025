import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from '../styles/components/Projects.module.scss';

const Projects = () => {
  const { t } = useTranslation();

  return (
    <section id="skills" className={styles.skills}>
      <h2 className={styles.sectionTitle}>{t('projects')}</h2>
    </section>
  );
};

export default Projects;