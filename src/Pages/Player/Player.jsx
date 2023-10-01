import { useEffect, useState } from 'react';
import styles from './Player.module.css';
import { useParams } from 'react-router-dom';
import Card from '../../components/Card/Card';
import { motion, useMotionValue } from 'framer-motion';

export default function Player() {
  const [videos, setVideos] = useState([]);
  const [video, setVideo] = useState(null);
  const [categorias, setCategorias] = useState([]);
  const [corCategoriaAtual, setCorCategoriaAtual] = useState([]);
  const [videosRelacionados, setVideosRelacionados] = useState([]);
  const [loading, setLoading] = useState(true);
  const parametros = useParams();

  const ajustarOpacidade = (corHex, opacidade) => {
    const cleanedHex = corHex.replace('#', '');
    const [r, g, b] = cleanedHex.match(/.{1,2}/g).map((value) => parseInt(value, 16));
    return `rgba(${r}, ${g}, ${b}, ${opacidade})`;
  };

  const carregarDados = async () => {
    try {
      const respostaVideos = await fetch(`https://6516db6809e3260018ca679b.mockapi.io/Edits`);
      const dadosVideos = await respostaVideos.json();
      setVideos(dadosVideos);

      const respostaVideo = await fetch(`https://6516db6809e3260018ca679b.mockapi.io/Edits/${parametros.id}`);
      const dadosVideo = await respostaVideo.json();
      setVideo(dadosVideo);

      const respostaCategorias = await fetch('https://6516db6809e3260018ca679b.mockapi.io/Categorias');
      const dadosCategorias = await respostaCategorias.json();
      setCategorias(dadosCategorias);

      const categoriaEncontrada = dadosCategorias.find((categoria) => categoria.nome === dadosVideo.categoria);

      if (categoriaEncontrada) {
        setCorCategoriaAtual(ajustarOpacidade(categoriaEncontrada.cor, 0.1));
      }

      setVideosRelacionados(
        dadosVideos.filter((videoAtual) => videoAtual.titulo === dadosVideo.titulo && videoAtual.id !== dadosVideo.id)
      );
      
      setLoading(false);
    } catch (error) {
      console.error('Erro ao carregar dados:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    carregarDados();
  }, [parametros.id]);

  if (!video || loading) {
    return <div>Carregando...</div>;
  }

  const handleDrag = (_, info) => {
    scrollX.set(info.offset.x);
  };

  return (
    <section className={styles.playerContainer}>
      <div className={styles.iframeContainer}>
        <iframe
          width="100%"
          height="100%"
          src={video.video}
          title={video.titulo}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>

      <div className={styles.dadosContainer} style={{ backgroundColor: corCategoriaAtual }}>
        <h1 className={styles.titulo}>
          <span className={styles.tituloContainer}>
            {' '}
            <span className={styles.spanTitulo}>Personagem:</span>
            {video.titulo}
          </span>
        </h1>
        <p className={styles.descricao}>
          <span className={styles.spanCategoria}>Categoria: </span> <span>{video.categoria}</span>
          <span className={styles.spanDescricao}>Descrição: </span>
          {video.descricao}
        </p>
      </div>
      
      {videosRelacionados.length > 0 && (
          <section className={styles.relacionados__container}>
          <h1 className={styles.relacionados__titulo}>Relacionados a {video.titulo}</h1>
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
          {videosRelacionados.map((videoAtual) => (
            <Card key={videoAtual.id} {...videoAtual} />
          ))}

        </motion.div>
        </section>
        )}
    </section>
  );
}
