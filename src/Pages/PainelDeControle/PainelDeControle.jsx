import styles from './PainelDeControle.module.css';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ajustarOpacidade } from '../../function/ajustarOpacidade';
import 'swiper/css';
import CardADM from '../../components/CardADM/CardADM';
import apiVideos from '../../function/apiVideos';
import apiCategorias from '../../function/apiCategorias'; // Importe a função apiCategorias
import CategoriaBotoes from '../../components/CategoriaBotoes/CategoriaBotoes';

export default function PainelDeControle() {
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
    if (larguraTela > 768) {
      setQuantidadeSlides(6);
      setSlideCentralizado(false);
    } else {
      setQuantidadeSlides(1.5);
      setSlideCentralizado(false);
    }
  }, [larguraTela]);

  return (
    <>
      <section className={styles.section__categorias}>
        <h1 className={styles.sectionTitulo}>Categorias</h1>
        {categorias.map((categoria, index) => (
          <section
            key={index}
            style={{ backgroundColor: categoria.corDeFundo }}
          >
            <div className={styles.categorias__layout}>
              <h1 className={styles.categoria__nome}>{categoria.nome}</h1>
              <CategoriaBotoes />
            </div>
          </section>
        ))}
      </section>

      <section className={styles.sectionVideos}>
        <h1 className={styles.sectionTitulo}>Vídeos</h1>
        {categorias.map((categoria) => (
          <section
            style={{ backgroundColor: categoria.corDeFundo }}
            key={categoria.id}
          >
            <div className={styles.categoria__info}>
              <h1 className={styles.categoria__nome}>{categoria.nome}</h1>
            </div>

            <Swiper
              slidesPerView={Number(quantidadeSlides)}
              spaceBetween={8}
              centeredSlides={slideCentralizado}
              className={styles.slider}
              key={categoria.id}
            >
              {videos
                .filter((video) => video.categoria === categoria.nome)
                .map((video) => (
                  <SwiperSlide key={video.id} className={styles.slide__card}>
                    <CardADM key={video.id} {...video} />
                  </SwiperSlide>
                ))}
            </Swiper>
          </section>
        ))}
      </section>
    </>
  );
}
