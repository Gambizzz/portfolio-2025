import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import styles from '../styles/components/Navbar.module.scss';

const Navbar = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

  useEffect(() => {
    const handleScroll = () => {
      const nextSection = document.getElementById('next-section');
      if (nextSection) {
        const nextSectionTop = nextSection.offsetTop;
        setIsNavbarVisible(window.scrollY >= nextSectionTop - 50);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLanguageToggle = () => {
    const newLang = language === 'en' ? 'fr' : 'en';
    i18n.changeLanguage(newLang);
    setLanguage(newLang);
  };

  return (
    <nav className={`${styles.navbar} ${isNavbarVisible ? styles.visible : styles.hidden}`}>
      <ul>
        <li><a href="#hero">{t('Home')}</a></li>
        <li><a href="#about">{t('About')}</a></li>
        <li className={styles.logo}>
          <img src="/images/initials.png" alt="Name logo" className={styles.icon} />
        </li>
        <li><a href="#projects">{t('Projects')}</a></li>
        <li>
          <button onClick={handleLanguageToggle} className={styles.languageToggle}>
            {language === 'en' ? 'FR' : 'EN'}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;








