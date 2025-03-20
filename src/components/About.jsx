import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from '../styles/components/About.module.scss';

const About = () => {
  const { t } = useTranslation();

  const scrollToNextSection = () => {
    const nextSection = document.getElementById('skills');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className={styles.about}>
      <h2 className={styles.sectionTitle}>{t('about')}</h2>
      
      <div className={styles.contentContainer}>
        <div className={styles.leftText}>
          <p><span className={styles.number}>01.</span> <strong>{t('formation1')}</strong><br />
            {t('formation2')}
          </p>
          <p><span className={styles.number}>02.</span> <strong>{t('passion1')}</strong><br />
            {t('passion2')}
          </p>
        </div>

        <div className={styles.imageContainer}>
          <img src="/images/imgAbout.png" alt="Image description" className={styles.image} />
        </div>

        <div className={styles.rightText}>
          <p><span className={styles.number}>03.</span> <strong>{t('leadership1')}</strong><br />
            {t('leadership2')}
          </p>
          <p><span className={styles.number}>04.</span> <strong>{t('ambition1')}</strong><br />
            {t('ambition2')}
          </p>
        </div>
      </div>

      <div className={styles.buttonContainer}>
        <a href="/pdf/CV_FR.pdf" download>
          <button className={styles.btn}>
            <span className={styles.text}>{t('french_cv')}</span>
          </button>
        </a>
        <a href="/pdf/CV_EN.pdf" download>
          <button className={styles.btn}>
            <span className={styles.text}>{t('english_cv')}</span>
          </button>
        </a>
      </div>

      {/* Lien Hover */}
      <a className={styles.menuLink} href="#skills" onClick={scrollToNextSection}>
          {t('scroll2')}
        </a>
    </section>
  );
};

export default About;













