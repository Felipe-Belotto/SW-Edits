// FavoritosContext.js

import React, { createContext, useContext, useState } from 'react';

const FavoritosContext = createContext();

export const useFavoritos = () => {
  return useContext(FavoritosContext);
};

export const FavoritosProvider = ({ children }) => {
  const [videosFavoritos, setVideosFavoritos] = useState([]);

  const adicionarFavorito = (video) => {
    setVideosFavoritos([...videosFavoritos, video]);
  };

  const removerFavorito = (videoId) => {
    const novosFavoritos = videosFavoritos.filter((video) => video.id !== videoId);
    setVideosFavoritos(novosFavoritos);
  };

  const limparFavoritos = () => {
    setVideosFavoritos([]);
  };

  const contextoValor = {
    videosFavoritos,
    adicionarFavorito,
    removerFavorito,
    limparFavoritos,
  };

  return (
    <FavoritosContext.Provider value={contextoValor}>
      {children}
    </FavoritosContext.Provider>
  );
};
