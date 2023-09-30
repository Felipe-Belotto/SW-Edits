import styles from './PaginaInicial.module.css';
import { useEffect, useState } from 'react';
import Card from '../../components/Card/Card';

export default function PaginaInicial() {
  const [videos, setVideos] = useState([]);
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    fetch('https://6516db6809e3260018ca679b.mockapi.io/Edits')
      .then((resposta) => resposta.json())
      .then((dados) => {
        setVideos(dados);
      });
  }, []);

  useEffect(() => {
    fetch('https://6516db6809e3260018ca679b.mockapi.io/Categorias')
      .then((resposta) => resposta.json())
      .then((dados) => {
        setCategorias(dados.map((categoria) => ({ ...categoria, corDeFundo: ajustarOpacidade(categoria.cor, 0.08) })));
      });
  }, []);

  const ajustarOpacidade = (corHex, opacidade) => {
    const cleanedHex = corHex.replace('#', '');
    const [r, g, b] = cleanedHex.match(/.{1,2}/g).map((value) => parseInt(value, 16));
    return `rgba(${r}, ${g}, ${b}, ${opacidade})`;
  };

  return (
    <>
      {categorias.map((categoria) => (
        <section key={categoria.id} className={styles.container} style={{ backgroundColor: categoria.corDeFundo }}>

          <div className={styles.categoria__info}>
            <h1 className={styles.categoria__nome}>{categoria.nome}</h1>
            <article className={styles.categoria__descricao}>{categoria.descricao}</article>
          </div>

          <div className={styles.categoria__videos}>
            {videos.map((video) => {
              if (video.categoria === categoria.nome) {
                return <Card key={video.id} imagem={video.imagem} id={video.id} />;
              } else {
                console.log(video.categoria, categoria.nome);
                return null;
              }
            })}
          </div>
        </section>
      ))}
    </>
  );
}
