import { useEffect, useState } from 'react';
import styles from './Player.module.css';
import { useParams } from 'react-router-dom';
import Card from '../../components/Card/Card';
import Favoritar from '../../components/Favoritar/Favoritar';
import PaginaErro from '../PaginaLoading/PaginaLoading';
import PaginaLoading from '../PaginaLoading/PaginaLoading';
import { ajustarOpacidade } from '../../function/ajustarOpacidade';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function Player() {
  const [videos, setVideos] = useState([]);
  const [video, setVideo] = useState(null);
  const [categoria, setCategoria] = useState([]);
  const [corCategoriaAtual, setCorCategoriaAtual] = useState([]);
  const [videosRelacionados, setVideosRelacionados] = useState([]);
  const [loading, setLoading] = useState(true);
  const [quantidadeSlides, setQuantidadeSlides] = useState('');
  const [slideCentralizado, setSlideCentralizado] = useState('');

  const parametros = useParams();

  window.scrollTo(0, 0);

  const carregarDados = async () => {
    try {
      const respostaVideos = await fetch(
        `https://6516db6809e3260018ca679b.mockapi.io/Edits`,
      );
      const dadosVideos = await respostaVideos.json();
      setVideos(dadosVideos);

      const respostaVideo = await fetch(
        `https://6516db6809e3260018ca679b.mockapi.io/Edits/${parametros.id}`,
      );
      const dadosVideo = await respostaVideo.json();
      setVideo(dadosVideo);

      const respostaCategorias = await fetch(
        'https://6516db6809e3260018ca679b.mockapi.io/Categorias',
      );
      const dadosCategorias = await respostaCategorias.json();
      setCategoria(dadosCategorias);

      const categoriaEncontrada = dadosCategorias.find(
        (categoria) => categoria.nome === dadosVideo.categoria,
      );

      if (categoriaEncontrada) {
        setCorCategoriaAtual(categoriaEncontrada.cor);
      }

      setVideosRelacionados(
        dadosVideos.filter(
          (videoAtual) =>
            videoAtual.titulo === dadosVideo.titulo &&
            videoAtual.id !== dadosVideo.id,
        ),
      );

      setLoading(false);
    } catch (error) {
      console.error('Erro ao carregar dados:', error);
      setLoading(false);
    }
  };

  const larguraTela = window.innerWidth;
  useEffect(() => {
    if (larguraTela < 400) {
      setQuantidadeSlides(1.8);
      setSlideCentralizado(false);
    } else if (larguraTela <= 767) {
      setQuantidadeSlides(2.2);
      setSlideCentralizado(false);
    } else if (larguraTela <= 1200) {
      setQuantidadeSlides(2.5);
      setSlideCentralizado(false);
    } else if (larguraTela <= 1550) {
      setQuantidadeSlides(4);
      setSlideCentralizado(false);
    } else if (larguraTela <= 1920) {
      setQuantidadeSlides(5);
      setSlideCentralizado(false);
    } else {
      setQuantidadeSlides(8);
      setSlideCentralizado(false);
    }
  }, [larguraTela]);

  useEffect(() => {
    carregarDados();
  }, [parametros.id]);

  if (!video || loading) {
    return <PaginaLoading />;
  }

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

      <div
        className={styles.dadosContainer}
        style={{
          backgroundColor: ajustarOpacidade(corCategoriaAtual, 0.8, 0.4),
        }}
      >
        <Favoritar dados={video} id={video.id} />
        <h1 className={styles.titulo}>
          <span className={styles.tituloContainer}>
            {' '}
            <span className={styles.spanTitulo}>Personagem:</span>
            {video.titulo}
          </span>
        </h1>
        <p className={styles.descricao}>
          <span className={styles.spanCategoria}>Categoria: </span>
          <span
            style={{
              color: corCategoriaAtual,
            }}
          >
            {video.categoria}
          </span>
          <span className={styles.spanDescricao}>Descrição: </span>
          {video.descricao}
        </p>
      </div>

      {videosRelacionados.length > 0 && (
        <section className={styles.relacionados__container}>
          <h1 className={styles.relacionados__titulo}>
            Relacionados a {video.titulo}
          </h1>
          <Swiper
            slidesPerView={Number(quantidadeSlides)}
            spaceBetween={8}
            centeredSlides={slideCentralizado}
            className={styles.slider}
          >
            {videosRelacionados.map((videoAtual) => (
              <SwiperSlide key={videoAtual.id} className={styles.slide__card}>
                <Card key={videoAtual.id} {...videoAtual} />
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      )}
    </section>
  );
}
