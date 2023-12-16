import React from 'react';
import styles from './Card.module.css';

const Card = ({ loading, error, data }) => {
  return (
    <div className={styles.card}>
      <div className={styles.pokemonPhoto}>
        {loading ? (
          <div className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        ) : (
          <img
            src={data && data.sprites.other.dream_world.front_default}
            alt="Imagem do pokémon"
          />
        )}
      </div>
      <div className={styles.details}>
        <h1>
          {data && data.name.toUpperCase()}
          {error && 'Ocorreu um erro ao carregar o nome'}
        </h1>
        <ul>
          {data &&
            data.abilities.map((eachSkill) => {
              return (
                <li key={eachSkill.slot}>
                  {eachSkill.ability.name.charAt().toUpperCase() +
                    eachSkill.ability.name.substring(
                      1,
                      eachSkill.ability.name.length,
                    )}
                </li>
              );
            })}
          {error && error}
        </ul>
      </div>
    </div>
  );
};

export default Card;
