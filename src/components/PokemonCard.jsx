import React from "react";
import "../styles.css"; // Ajusta la ruta según sea necesario

function PokemonCard({ pokemon }) {
  if (!pokemon) return null;

  return (
    <div className="card">
      <div className="header">
        <div className="pokemon-name">{pokemon.name}</div>
        <div className="pokemon-id">#{pokemon.id}</div>
      </div>
      <div className="image-container">
        <div className="circular-progress">
          <img
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
            width="200"
          />
        </div>
      </div>
      <div className="poke-info">
        <div className="types-container">
          {pokemon.types.map((type) => (
            <div key={type.type.name} className={`type ${type.type.name}`}>
              {type.type.name}
            </div>
          ))}
        </div>
        <div className="basics-info">
          <div className="icon-color">
            <i className="fas fa-weight" style={{ marginRight: "5px" }}></i>
            {pokemon.weight / 10} kg
          </div>
          <div className="icon-color">
            <i className="fas fa-ruler-vertical" style={{ marginRight: "5px" }}></i>
            {pokemon.height / 10} m
          </div>
        </div>
        <p className="description">
          {pokemon.species?.flavor_text_entries.find(entry => entry.language.name === 'es')?.flavor_text || 'No description available'}
        </p>
        <div className="base-stats">
          <h4 className="base-stats-title">Base Stats</h4>
          {pokemon.stats.map(stat => (
            <div key={stat.stat.name} className="stat">
              <span className="stat-info">{stat.stat.name.toUpperCase()}</span>
              <span className="stat-percentage">{stat.base_stat}</span>
              <div className="stat-bar">
                <div className="stat-fill" style={{ width: `${stat.base_stat}%` }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PokemonCard;
