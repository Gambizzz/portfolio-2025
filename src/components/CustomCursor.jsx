import React, { useState, useEffect } from 'react';
import styles from '../styles/components/CurstomCursor.module.scss';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (
        e.target.tagName === 'A' ||
        e.target.tagName === 'BUTTON' ||
        e.target.tagName === 'SPAN' ||
        e.target.closest('svg') ||
        e.target.tagName === 'IMG' ||
        e.target.tagName === 'VIDEO' 
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseOut = (e) => {
      if (
        e.target.tagName === 'A' ||
        e.target.tagName === 'BUTTON' ||
        e.target.tagName === 'SPAN' ||
        e.target.closest('svg') ||
        e.target.tagName === 'IMG' ||
        e.target.tagName === 'VIDEO' 
      ) {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);
    window.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      window.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  return (
    <div
      className={`${styles.cursor} ${isHovering ? styles.hoverLink : ''}`}
      style={{ top: `${position.y}px`, left: `${position.x}px` }}
    />
  );
};

export default CustomCursor;



