import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { 
  FaHtml5, FaCss3Alt, FaReact, FaBootstrap, FaGithub, FaWordpress, FaFigma, 
  FaNodeJs, FaGitAlt, FaCcStripe, FaTrello 
} from 'react-icons/fa';
import { IoLogoJavascript } from "react-icons/io5";
import { SiRuby, SiRubyonrails, SiVite, SiAdobeillustrator, SiCanva, SiHeroku, 
  SiRender, SiInsomnia, SiPostman, SiNextdotjs 
} from "react-icons/si";
import { TbCircleLetterD } from "react-icons/tb";
import { RiNotionFill, RiVercelLine, RiTailwindCssFill } from "react-icons/ri";
import { DiVisualstudio } from "react-icons/di";
import { BiLogoPostgresql } from "react-icons/bi";
import styles from '../styles/components/Skills.module.scss';

const Skills = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState('front-end');
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const categories = {
    "front-end": [
      { icon: <FaHtml5 color="#E34C26" />, name: "HTML5" },
      { icon: <FaCss3Alt color="#264DE4" />, name: "CSS3" },
      { icon: <IoLogoJavascript color="#F7DF1E" />, name: "JavaScript" },
      { icon: <FaReact color="#61DAFB" />, name: "React" },
      { icon: <SiVite color="#646CFF" />, name: "Vite.js" },
      { icon: <SiNextdotjs color="black" />, name: "Next.js" },
      { icon: <FaBootstrap color="#8A2BE2" />, name: "Bootstrap" },
      { icon: <RiTailwindCssFill color="#06b6d4" />, name: "Tailwind" },
      { icon: <FaWordpress color="#21759B" />, name: "Wordpress" },
      { icon: <TbCircleLetterD color="#8A2BE2" />, name: "Divi" },
    ],
    "back-end": [
      { icon: <SiRuby color="#CC342D" />, name: "Ruby" },
      { icon: <SiRubyonrails color="#CC0000" />, name: "Ruby on Rails" },
      { icon: <FaNodeJs color="#339933" />, name: "Node.js" },
      { icon: <BiLogoPostgresql color="#336791" />, name: "PostgreSQL" },
      { icon: <FaCcStripe color="#635BFF" />, name: "Stripe" },
    ],
    "web design & UX/UI": [
      { icon: <FaFigma color="#F24E1E" />, name: "Figma" },
      { icon: <SiAdobeillustrator color="#2B1300" />, name: "Adobe Illustrator" },
      { icon: <SiCanva color="#00C4CC" />, name: "Canva" },
    ],
    "versioning & workflow": [
      { icon: <FaGithub color="black" />, name: "GitHub" },
      { icon: <FaGitAlt color="#F05032" />, name: "Git" },
      { icon: <FaTrello color="#0079BF" />, name: "Trello" },
      { icon: <RiNotionFill color="black" />, name: "Notion" },
    ],
    "hébergement & déploiement": [
      { icon: <RiVercelLine color="black" />, name: "Vercel" },
      { icon: <SiHeroku color="#430098" />, name: "Heroku" },
      { icon: <SiRender color="#000000" />, name: "Render" },
    ],
    "logiciels & outils": [
      { icon: <DiVisualstudio color="#007ACC" />, name: "VS Code" },
      { icon: <SiInsomnia color="#4000BF" />, name: "Insomnia" },
      { icon: <SiPostman color="#FF6C37" />, name: "Postman" },
    ],
  };

  const scrollToNextSection = () => {
    const nextSection = document.getElementById('projects');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="skills" className={styles.skills}>
      <h2 className={styles.sectionTitle}>{t('skills')}</h2>

      {/* Onglets */}
      <div className={styles.tabs}>
        {Object.keys(categories).map(category => (
          <button 
            key={category} 
            className={`${styles.tab} ${selectedCategory === category ? styles.activeTab : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {t(category)}
          </button>
        ))}
      </div>

      {/* Icônes correspondantes */}
      <div className={styles.iconsContainer}>
        {categories[selectedCategory].map(({ icon, name }, index) => (
          <div 
            key={index} 
            className={styles.iconWrapper} 
            onMouseEnter={() => setHoveredIcon(name)}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            <div className={styles.icon}>{icon}</div>
            {hoveredIcon === name && <span className={styles.iconLabel}>{name}</span>}
          </div>
        ))}
      </div>

      {/* Lien Hover vers la prochaine section */}
      <a className={styles.menuLink} href="#projects" onClick={scrollToNextSection}>
        {t('scroll3')}
      </a>
    </section>
  );
};

export default Skills;




