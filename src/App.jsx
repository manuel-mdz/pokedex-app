import React, { useState, useEffect } from "react";
import Finder from "./components/Finder";
import PokemonCard from "./components/PokemonCard";

function App() {
  const [busqueda, setBusqueda] = useState("");
  const [iniciarBusqueda, setIniciarBusqueda] = useState(false);
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (iniciarBusqueda) {
      const buscarPokemon = async () => {
        setLoading(true);
        setError(null);

        try {
          const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${busqueda.toLowerCase()}`);
          if (!response.ok) {
            throw new Error("No se pudo encontrar el Pokémon");
          }
          const data = await response.json();
          const speciesResponse = await fetch(data.species.url);
          const speciesData = await speciesResponse.json();
          data.species = speciesData;
          setPokemon(data);
        } catch (err) {
          setError(err.message);
        } finally {
          setLoading(false);
          setIniciarBusqueda(false); 
        }
      };

      buscarPokemon();
    }
  }, [iniciarBusqueda, busqueda]);

  return (
    <div>
      <Finder
        finderLabel="Buscar Pokémon"
        buttonText="Buscar"
        setBusqueda={setBusqueda}
        setIniciarBusqueda={setIniciarBusqueda}
      />
      {loading && <p>Buscando...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {pokemon && <PokemonCard pokemon={pokemon} />}
    </div>
  );
}

export default App;
