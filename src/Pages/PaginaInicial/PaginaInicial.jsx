import styles from './PaginaInicial.module.css';
import { useEffect, useState } from 'react';
import Card from '../../components/Card/Card';
import { ajustarOpacidade } from '../../function/ajustarOpacidade';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import apiVideos from '../../function/apiVideos';
import apiCategorias from '../../function/apiCategorias';

export default function PaginaInicial() {
  const [videos, setVideos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [quantidadeSlides, setQuantidadeSlides] = useState('');
  const [slideCentralizado, setSlideCentralizado] = useState('');

  useEffect(() => {
    apiVideos()
      .then((dados) => setVideos(dados))
      .catch((erro) => console.error('Erro ao obter vídeos:', erro));
  }, []);

  useEffect(() => {
    apiCategorias((categoriasAtualizadas) => {
      setCategorias(categoriasAtualizadas);
    });
  }, []);

  const larguraTela = window.innerWidth;
  useEffect(() => {
    if (larguraTela < 380) {
      setQuantidadeSlides(1.8);
      setSlideCentralizado(false);
    } else if (larguraTela <= 767) {
      setQuantidadeSlides(2);
      setSlideCentralizado(false);
    } else if (larguraTela <= 1200) {
      setQuantidadeSlides(2.6);
      setSlideCentralizado(false);
    } else if (larguraTela <= 1550) {
      setQuantidadeSlides(3.8);
      setSlideCentralizado(false);
    } else if (larguraTela <= 1920) {
      setQuantidadeSlides(5.2);
      setSlideCentralizado(false);
    } else {
      setQuantidadeSlides(8);
      setSlideCentralizado(false);
    }
  }, [larguraTela]);

  const imagemCapa =
    'estrela.png';

  const imagemStarWars = 'starwars.png';

  return (
    <section className={styles.sectionVideos}>
      <div className={styles.banner_container}>
      <div className={styles.banner}>
        <img src={imagemCapa} className={styles.capa} />
      <img src={imagemStarWars} className={styles.logoStarWars} />
      </div>
      </div>
      {categorias.map((categoria, index) => (
        <section>
          <div className={styles.categoria__info}>
            <h1 className={styles.categoria__nome}>
              <span
                style={{
                  border: `1px solid ${categoria.corDeFundo} `,
                  padding: '8px',
                  borderRadius: '8px',
                  boxShadow: `0 0 10px ${categoria.corDeFundo}, 0 0 20px ${categoria.corDeFundo}`,
                  color: categoria.corDeFundo,
                }}
              >
                {categoria.nome}
              </span>
            </h1>
          </div>

          <Swiper
            slidesPerView={Number(quantidadeSlides)}
            spaceBetween={0}
            centeredSlides={slideCentralizado}
            className={styles.slider}
          >
            {videos
              .filter((video) => video.categoria === categoria.nome)
              .map((video) => (
                <SwiperSlide className={styles.slide__card}>
                  <Card key={video.id} {...video} />
                </SwiperSlide>
              ))}
          </Swiper>
        </section>
      ))}
    </section>
  );
}
