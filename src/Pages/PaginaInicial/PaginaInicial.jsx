import styles from './PaginaInicial.module.css';
import { useEffect, useState } from 'react';
import Card from '../../components/Card/Card';

export default function PaginaInicial() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch('https://6515e6ed09e3260018c94260.mockapi.io/filmes')
      .then((resposta) => resposta.json())
      .then((dados) => {
        setVideos(dados);
      });
  }, []);
  return (
    <section className={styles.container}>
      {videos.map((video) => {
        return <Card imagem={video.imagem} id={video.id} key={video.id} />;
      })}
    </section>
  );
}
