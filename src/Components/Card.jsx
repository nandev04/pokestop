import React from 'react';
import styles from './Card.module.css';
import squirtle from '../assets/squirtle.png';

const Card = () => {
  const [img, setImg] = React.useState(null);
  const [name, setName] = React.useState(null);
  const [abilities, setAbilities] = React.useState([]);

  React.useEffect(() => {
    async function fetchPokemon() {
      // Fetch responsável pela lista de pokémon
      const response = await fetch(
        'https://pokeapi.co/api/v2/pokemon?offset=20&limit=500',
      );
      const json = await response.json();

      // Fetch responsável por escolher e carregar os dados do pokémon
      const urlPokemon = json.results[273].url;
      const responsePokemon = await fetch(urlPokemon);
      const jsonPokemon = await responsePokemon.json();
      setImg(jsonPokemon.sprites.other.dream_world.front_default);
      setName(jsonPokemon.species.name);
      setAbilities(jsonPokemon.abilities);
      // console.log(jsonPokemon);
    }
    fetchPokemon();
  }, []);
  console.log(abilities);

  return (
    <div className={styles.card}>
      <div className={styles.pokemonPhoto}>
        <img src={img} alt="" />
      </div>
      <div className={styles.details}>
        <h1>
          {name ? name.toUpperCase() : 'Ocorreu um erro ao carregar o nome'}
        </h1>
        <ul>
          {abilities ? (
            abilities.map((eachSkill) => (
              <>
                <li>
                  {eachSkill.ability.name.charAt().toUpperCase() +
                    eachSkill.ability.name.substring(
                      1,
                      eachSkill.ability.name.length,
                    )}
                </li>
              </>
            ))
          ) : (
            <li>Erro ao carregar as habilidades</li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Card;
