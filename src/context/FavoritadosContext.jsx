import { createContext, useContext, useEffect, useState } from "react";

export const FavoritosContext = createContext();

export default function FavoritosProvider({ children }) {
    const [listaFavoritos, setListaFavoritos] = useState([]);

    function adicionarVideo(video) {
        if (!listaFavoritos.some((v) => saoIguais(v, video))) {
            setListaFavoritos([...listaFavoritos, video]);
        } else {
            setListaFavoritos(listaFavoritos.filter((v) => !saoIguais(v, video)));
        }
    }
    
    function saoIguais(video1, video2) {
        return (
            video1.titulo === video2.titulo &&
            video1.id === video2.id &&
            video1.descricao === video2.descricao &&
            video1.categoria === video2.categoria &&
            video1.video === video2.video &&
            video1.imagem === video2.imagem
        );
    }
       


    return (
        <FavoritosContext.Provider
            value={{ listaFavoritos, setListaFavoritos, adicionarVideo }}>
            {children}
        </FavoritosContext.Provider>
    )
}
