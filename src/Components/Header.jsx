import React from 'react';
import styles from './Header.module.css';
import img from '../assets/pokemon_logo.png';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <img src={img} alt="" />
      </div>
    </header>
  );
};

export default Header;
