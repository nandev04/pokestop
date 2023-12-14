import React from 'react';
import styles from './Card.module.css';

const Card = (props) => {
  const { loading, error, data } = props;

  return (
    <div className={styles.card}>
      <div className={styles.pokemonPhoto}>
        {loading ? (
          'Loading...'
        ) : (
          <img
            src={data.sprites.other.dream_world.front_default}
            alt="Imagem do pokémon"
          />
        )}
      </div>
      <div className={styles.details}>
        <h1>
          {data
            ? data.name.toUpperCase()
            : 'Ocorreu um erro ao carregar o nome'}
        </h1>
        <ul>
          {data ? (
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
            })
          ) : (
            <li>Erro ao carregar as habilidades</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Card;
