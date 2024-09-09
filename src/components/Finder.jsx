import React from "react";
import "../styles.css"; // Archivo de estilos para el buscador

function Finder({
  finderLabel = "Buscador",
  buttonText = "Buscar",
  setBusqueda,
  setIniciarBusqueda
}) {
  const handleInputChange = (e) => {
    setBusqueda(e.target.value);
  };

  const handleButtonClick = () => {
    setIniciarBusqueda(true);
  };

  return (
    <div className="finder-container">
      <label htmlFor="search-input" className="finder-label">{finderLabel}</label>
      <div className="finder-controls">
        <input
          id="search-input"
          type="text"
          placeholder="Introduce el nombre del Pokémon..."
          onChange={handleInputChange}
          className="finder-input"
        />
        <button
          type="button"
          onClick={handleButtonClick}
          className="finder-button"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}

export default Finder;
