import styles from './PaginaInicial.module.css';
import { useEffect, useState } from 'react';
import Card from '../../components/Card/Card';
import { motion, useMotionValue } from 'framer-motion';

export default function PaginaInicial() {
  const [videos, setVideos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [imagemCapaIndex, setImagemCapaIndex] = useState(0);

  useEffect(() => {
    fetch('https://6516db6809e3260018ca679b.mockapi.io/Edits')
      .then((resposta) => resposta.json())
      .then((dados) => setVideos(dados));
  }, []);

  const ajustarOpacidade = (corHex, fatorPreto, opacidade) => {
    const cleanedHex = corHex.replace('#', '');
    const [r, g, b] = cleanedHex.match(/.{1,2}/g).map((value) => parseInt(value, 16));

    const novoR = Math.round(r * (1 - fatorPreto));
    const novoG = Math.round(g * (1 - fatorPreto));
    const novoB = Math.round(b * (1 - fatorPreto));

    return `rgba(${novoR}, ${novoG}, ${novoB}, ${opacidade})`;
  };

  useEffect(() => {
    fetch('https://6516db6809e3260018ca679b.mockapi.io/Categorias')
      .then((resposta) => resposta.json())
      .then((dados) => {
        setCategorias(
          dados.map((categoria) => ({
            ...categoria,
            corDeFundo: ajustarOpacidade(categoria.cor, 0.84, 0.5),
          }))
        );
      });
  }, []);

  useEffect(() => {
    const intervaloID = setInterval(() => {
      setImagemCapaIndex((index) => (index + 1) % imagensCapa.length);
    }, 5000);

    return () => clearInterval(intervaloID);
  }, []);

  const imagensCapa = [
    "https://media.tenor.com/jWGYirKr9TAAAAAC/luke-skywalker.gif",
    "https://media.tenor.com/mU8MpZmeQgYAAAAC/star-wars-rogue-one.gif",
    "https://media4.giphy.com/media/FHWLCr4nIJyOMar5eh/giphy.gif?cid=ecf05e47ca2f92c95i1xca6ut57ofruzrki00th9oqiyg6li&ep=v1_gifs_related&rid=giphy.gif&ct=g",
    "https://media1.giphy.com/media/5H9mE4GpY9UwTsIAXy/giphy.gif",
    "https://us.v-cdn.net/6025736/uploads/editor/1f/ujlf9r0xlxgn.gif",
    "https://j.gifs.com/98W0lz@facebook.gif",
  ];

  const scrollX = useMotionValue(0);

  const handleDrag = (_, info) => {
    scrollX.set(info.offset.x);
  };

  const linearGradienteCategorias = (index) => {
    if (index < categorias.length - 1) {
      return `linear-gradient(to bottom, ${categorias[index].corDeFundo} 90%, ${categorias[index + 1].corDeFundo})`;
    } else {
      return categorias[index].corDeFundo;
    }
  };

  return (
    <section className={styles.sectionVideos}>
      <div className={styles.banner}>
        <img src={imagensCapa[imagemCapaIndex]} className={styles.capa} />
      </div>

      {categorias.map((categoria, index) => (
        <motion.section
          key={categoria.id}
          className={styles.categoriaContainer}
          style={{ background: linearGradienteCategorias(index) }}
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
    </section>
  );
}
