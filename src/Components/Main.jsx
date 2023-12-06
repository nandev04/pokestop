import React from 'react';
import style from './Main.module.css';
import pokeball from '../assets/pokebola.png';
import Card from './Card';

const Main = () => {
  return (
    <main>
      <div className={style.container}>
        <section className={style.contentWrapper}>
          <div className={style.pokeball}>
            <img src={pokeball} alt="Imagem de uma pokébola" />
          </div>
          <div className={style.pokemon}>
            <Card />
          </div>
        </section>
      </div>
    </main>
  );
};

export default Main;
