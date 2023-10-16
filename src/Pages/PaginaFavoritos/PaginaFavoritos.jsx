import styles from './PaginaFavoritos.module.css';
import { useContext, useEffect, useState } from 'react';
import Card from '../../components/Card/Card';
import { FavoritosContext } from '../../context/FavoritadosContext';
import { ajustarOpacidade } from '../../function/ajustarOpacidade';
import apiCategorias from '../../function/apiCategorias';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

function PaginaFavoritos() {
  const { listaFavoritos, setListaFavoritos, adicionarVideo } =
    useContext(FavoritosContext);
  const [videos, setVideos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [quantidadeSlides, setQuantidadeSlides] = useState('');
  const [slideCentralizado, setSlideCentralizado] = useState('');

  useEffect(() => {
    setVideos(listaFavoritos);
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
      setQuantidadeSlides(2.5);
      setSlideCentralizado(false);
    } else if (larguraTela <= 1550) {
      setQuantidadeSlides(4);
      setSlideCentralizado(false);
    } else if (larguraTela <= 1920) {
      setQuantidadeSlides(6);
      setSlideCentralizado(false);
    } else {
      setQuantidadeSlides(8);
      setSlideCentralizado(false);
    }
  }, [larguraTela]);

  return (
    <>
      <h1 className={styles.titulo}>Videos favoritos</h1>

      <section className={styles.sectionVideos}>
        {categorias.map((categoria) => (
          <section>
            <div key={categoria.nome} className={styles.categoria__info}>
              <h1 className={styles.categoria__nome}>
                {' '}
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
    </>
  );
}

export default PaginaFavoritos;
