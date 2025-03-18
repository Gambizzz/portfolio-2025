import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from '../styles/components/Hero.module.scss';

const Hero = () => {
  const { t } = useTranslation();

  const scrollToNextSection = () => {
    const nextSection = document.getElementById('next-section');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className={styles.hero}>
      {/* Logo SVG */}
      <img src="/images/logo.svg" alt="Logo" className={styles.heroSvg} />

      {/* Cercle avec les textes */}
      <div className={styles.circleText}>
        <span>UX/UI DESIGN</span>
        <span className={styles.dot}>•</span>
        <span>{t('dev_hero')}</span>
      </div>

      {/* Conteneur pour le bouton et le lien */}
      <div className={styles.bottomContainer}>
        {/* Bouton avec l'animation de scroll */}
        <button className={styles.btn}>
          <div className={styles.scroll}></div>
        </button>

        {/* Lien Hover */}
        <a className={styles.menuLink} href="#" onClick={scrollToNextSection}>
          {t('scroll')}
        </a>
      </div>
    </section>
  );
};

export default Hero;



















