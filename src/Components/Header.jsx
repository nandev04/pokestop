import React from 'react';
import styles from './Header.module.css';
import img from '../assets/pokemon_logo.png';

const Header = () => {
  return (
    <header>
      <div className={styles.container}>
        <img className={styles.pokemonLogo} src={img} alt="Logo do pokémon" />
      </div>
    </header>
  );
};

export default Header;
