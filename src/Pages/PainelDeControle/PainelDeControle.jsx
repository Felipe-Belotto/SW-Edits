import styles from './PainelDeControle.module.css';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ajustarOpacidade } from '../../function/ajustarOpacidade';
import 'swiper/css';
import CardADM from '../../components/CardADM/CardADM';
import apiVideos from '../../function/apiVideos';
import apiCategorias from '../../function/apiCategorias'; // Importe a função apiCategorias
import CategoriaBotoes from '../../components/CategoriaBotoes/CategoriaBotoes';
import MenuItem from '../../components/MenuItem/MenuItem';
import LinkButton from '../../components/LinkButton/LinkButton';

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
    
    <section className={styles.nav__section}>
            <LinkButton
              label="Nova categoria"
              to="/novacategoria"
              img={<i className="fa-solid fa-list"></i>}
            />
            <LinkButton
              label="Novo video"
              to="/novovideo"
              img={<i className="fa-solid fa-video"></i>}
            />
          </section>

      <section className={styles.section__categorias}>
        <h1 className={styles.section__titulo}>Categorias</h1>
        {categorias.map((categoria, index) => (
          <section
            key={index}
            style={{ backgroundColor: ajustarOpacidade(categoria.corDeFundo, 0.5, 0.5)  }}
          >
            <div className={styles.categorias__layout}>
              <h1 className={styles.categoria__nome}>{categoria.nome}</h1>
              <CategoriaBotoes />
            </div>
          </section>
        ))}
      </section>

      <section className={styles.section__videos}>
        <h1 className={styles.section__titulo}>Vídeos</h1>
        {categorias.map((categoria) => (
          <section
            style={{ backgroundColor: ajustarOpacidade(categoria.corDeFundo, 0.5, 0.5) }}
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
