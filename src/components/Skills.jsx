import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaHtml5, FaCss3Alt, FaReact, FaBootstrap, FaGithub, FaWordpress, FaFigma, FaNodeJs, FaGitAlt, FaCcStripe, FaTrello } from 'react-icons/fa';
import { IoLogoJavascript } from "react-icons/io5";
import { SiRuby, SiRubyonrails, SiVite, SiAdobeillustrator, SiCanva, SiHeroku, SiRender, SiInsomnia, SiPostman, SiNextdotjs } from "react-icons/si";
import { TbCircleLetterD } from "react-icons/tb";
import { RiNotionFill, RiVercelLine, RiTailwindCssFill } from "react-icons/ri";
import { DiVisualstudio } from "react-icons/di";
import { BiLogoPostgresql } from "react-icons/bi";
import styles from '../styles/components/Skills.module.scss';

const Skills = () => {
  const { t } = useTranslation();

  // Liste des icônes correctement importées
  const icons = [
    <FaHtml5 />,
    <FaCss3Alt />,
    <IoLogoJavascript />,
    <FaReact />,
    <SiVite />,
    <SiNextdotjs />,
    <FaBootstrap />,
    <RiTailwindCssFill />,
    <SiRuby />,
    <SiRubyonrails />,
    <FaNodeJs />,
    <BiLogoPostgresql />,
    <FaCcStripe />,
    <FaWordpress />,
    <TbCircleLetterD />,
    <FaGithub />,
    <FaGitAlt />,
    <FaFigma />,
    <SiAdobeillustrator />,
    <SiCanva />,
    <FaTrello />,
    <RiNotionFill />,
    <RiVercelLine />,
    <SiHeroku />,
    <SiRender />,
    <DiVisualstudio />,
    <SiInsomnia />,
    <SiPostman />,
  ];

  return (
    <section id="skills" className={styles.skills}>
      <h2 className={styles.sectionTitle}>{t('skills')}</h2>

      {/* Conteneur du défilement des icônes */}
      <div className={styles.iconsContainer}>
        <div className={styles.icons}>
          {icons.map((icon, index) => (
            <div key={index} className={styles.icon}>
              {icon}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
