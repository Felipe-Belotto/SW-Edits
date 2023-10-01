import styles from './PaginaInicial.module.css';
import { useEffect, useState } from 'react';
import Card from '../../components/Card/Card';
import { motion, useMotionValue } from 'framer-motion';

export default function PaginaInicial() {
  const [videos, setVideos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const scrollX = useMotionValue(0);

  useEffect(() => {
    fetch('https://6516db6809e3260018ca679b.mockapi.io/Edits')
      .then((resposta) => resposta.json())
      .then((dados) => setVideos(dados));
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
            corDeFundo: ajustarOpacidade(categoria.cor, 0.2),
          }))
        );
      });
  }, []);

  const handleDrag = (_, info) => {
    scrollX.set(info.offset.x);
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
          </div>

          <motion.div
            onDrag={handleDrag}
            style={{
              width: '100%',
              display: 'flex',
              overflowX: 'auto',
              scrollSnapType: 'x mandatory',
              x: scrollX,
              background: 'rgba(0, 0, 0, 0.293)',
            }}
          >
            {videos
              .filter((video) => video.categoria === categoria.nome)
              .map((video) => (
                <Card key={video.id} {...video} />
              ))}
          </motion.div>
        </motion.section>
      ))}
    </>
  );
}
