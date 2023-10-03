import { createContext, useContext, useState } from "react";

export const FavoritosContext = createContext();
FavoritosContext.displayName = "Favoritos";

export default function FavoritosProvider({ children }) {
    const [favorito, setFavorito] = useState([]);

    return (
        <FavoritosContext.Provider
            value={{ favorito, setFavorito }}>
            {children}
        </FavoritosContext.Provider>
    )
}
/* 
export function useFavoritoContext() {

    function adicionarFavorito(novoFavorito) {
      const { favorito, setFavorito } = useContext(FavoritosContext);
        let novaLista = [];
        novaLista.push(novoFavorito);
        setFavorito(novaLista)
    }
    return {
        adicionarFavorito
    }
} */