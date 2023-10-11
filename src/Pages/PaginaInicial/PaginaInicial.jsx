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
    if (larguraTela < 950) {
      setQuantidadeSlides(1.8);
      setSlideCentralizado(false);
    } else if (larguraTela <= 1550) {
      setQuantidadeSlides(3);
      setSlideCentralizado(false);
    } else {
      setQuantidadeSlides(5);
      setSlideCentralizado(false);
    }
  }, [larguraTela]);

  const imagemCapa =
    'https://images4.alphacoders.com/122/thumbbig-1221834.webp';

  return (
    <section className={styles.sectionVideos}>
      <div className={styles.banner}>
        <img src={imagemCapa} className={styles.capa} />
      </div>

      {categorias.map((categoria, index) => (
        <section style={{ backgroundColor: categoria.corDeFundo }}>
          <div className={styles.categoria__info}>
            <h1 className={styles.categoria__nome}>{categoria.nome}</h1>
          </div>

          <Swiper
            slidesPerView={Number(quantidadeSlides)}
            spaceBetween={8}
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
