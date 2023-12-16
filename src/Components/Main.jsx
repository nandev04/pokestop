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
      let json = null;
      setLoading(true);
      // Fetch responsável pela lista de pokémon
      const response = await fetch(
        'https://pokeapi.co/api/v2/pokemon?offset=20&limit=500',
      );
      if (!response.ok) throw new Error(response.statusText);

      // Fetch responsável por escolher e carregar os dados do pokémon
      if (response.ok) {
        json = await response.json();
        const randomNumber = Math.trunc(Math.random() * 201);
        const urlPokemon = json.results[randomNumber].url;
        const responsePokemon = await fetch(urlPokemon);
        const jsonPokemon = await responsePokemon.json();
        setData(jsonPokemon);
        setError(null);
      }
    } catch (err) {
      setLoading(false);
      setError(err.toString());
    } finally {
      setLoading(false);
    }
  }

  function handleClick(event) {
    event.preventDefault();
    fetchPokemon();
  }

  React.useEffect(() => {
    fetchPokemon();
  }, []);

  return (
    <main>
      <div className={style.container}>
        <section className={style.contentWrapper}>
          <div className={style.pokeball}>
            <img
              src={pokeball}
              alt="Imagem de uma pokébola"
              onClick={handleClick}
              style={{ cursor: 'pointer' }}
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
