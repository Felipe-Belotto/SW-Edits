import styles from './PaginaInicial.module.css';
import { useEffect, useState } from 'react';
import Card from '../../components/Card/Card';

export default function PaginaInicial() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch('https://6516db6809e3260018ca679b.mockapi.io/Edits')
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
