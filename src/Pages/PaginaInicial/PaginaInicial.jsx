import styles from './PaginaInicial.module.css';
import { useEffect, useState } from 'react';
import Card from '../../components/Card/Card';
import { motion, useAnimation, useMotionValue } from 'framer-motion';

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

  const ajustarOpacidade = (corHex, opacidade) => {
    const cleanedHex = corHex.replace('#', '');
    const [r, g, b] = cleanedHex.match(/.{1,2}/g).map((value) => parseInt(value, 16));
    return `rgba(${r}, ${g}, ${b}, ${opacidade})`;
  };

  useEffect(() => {
    fetch('https://6516db6809e3260018ca679b.mockapi.io/Categorias')
      .then((resposta) => resposta.json())
      .then((dados) => {
        setCategorias(
          dados.map((categoria) => ({
            ...categoria,
            corDeFundo: ajustarOpacidade(categoria.cor, 0.08),
          }))
        );
      });
  }, []);

  const controls = useAnimation();
  const scrollX = useMotionValue(0);

  const handleDrag = (e, info) => {
    controls.start({ x: info.offset.x });
  };

  return (
    <>
      {categorias.map((categoria) => (
        <motion.section
          key={categoria.id}
          className={styles.container}
          style={{ backgroundColor: categoria.corDeFundo }}
        >
          <div className={styles.categoria__info}>
            <h1 className={styles.categoria__nome}>{categoria.nome}</h1>
            <article className={styles.categoria__descricao}>{categoria.descricao}</article>
          </div>

          <motion.div
            className={styles.categoria__videos}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDrag={handleDrag}
            animate={controls}
            style={{
              display: 'flex',
              overflowX: 'scroll',
              scrollSnapType: 'x mandatory',
            }}
          >
            {videos.map((video) => {
              if (video.categoria === categoria.nome) {
                return <Card key={video.id} imagem={video.imagem} id={video.id} />;
              } else {
                return null;
              }
            })}
          </motion.div>
        </motion.section>
      ))}
    </>
  );
}
