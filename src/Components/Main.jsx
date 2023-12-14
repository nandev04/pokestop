import React from 'react';
import style from './Main.module.css';
import pokeball from '../assets/pokebola.png';
import Card from './Card';

const Main = () => {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(null);

  async function fetchPokemon() {
    try {
      setLoading(true);
      // Fetch responsável pela lista de pokémon
      const response = await fetch(
        'https://pokeapi.co/api/v2/pokemon?offset=20&limit=500',
      );
      const json = await response.json();

      // Fetch responsável por escolher e carregar os dados do pokémon
      const randomNumber = Math.trunc(Math.random() * 201);
      console.log(randomNumber);
      const urlPokemon = json.results[randomNumber].url;
      const responsePokemon = await fetch(urlPokemon);
      const jsonPokemon = await responsePokemon.json();
      setData(jsonPokemon);
    } catch {
      setError('ERRO!');
    } finally {
      setLoading(false);
    }
  }

  React.useEffect(() => {
    fetchPokemon();
  }, []);

  function handleClick(event) {
    event.preventDefault();
    fetchPokemon();
  }
  return (
    <main>
      <div className={style.container}>
        <section className={style.contentWrapper}>
          <div className={style.pokeball}>
            <img
              src={pokeball}
              alt="Imagem de uma pokébola"
              onClick={handleClick}
            />
          </div>
          <div className={style.pokemon}>
            <Card data={data} error={error} loading={loading} />
          </div>
        </section>
      </div>
    </main>
  );
};

export default Main;
