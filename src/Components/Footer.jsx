import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer>
      <div className={styles.container}>
        DESENVOLVIDO POR <a href="https://github.com/nandev04">RENAN ALVES</a>
      </div>
    </footer>
  );
};

export default Footer;
