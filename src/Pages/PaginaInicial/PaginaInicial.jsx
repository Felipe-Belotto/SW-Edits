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
  const [imagemCapaIndex, setImagemCapaIndex] = useState(0);
  const [quantidadeSlides, setQuantidadeSlides] = useState("")
  const [slideCentralizado, setslideCentralizado] = useState("")

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
      setslideCentralizado(false)
    } else {
      setQuantidadeSlides(1.5);
      setslideCentralizado(false)
    }
  }, [larguraTela]);
  
  const imagensCapa = [
    "https://media.tenor.com/jWGYirKr9TAAAAAC/luke-skywalker.gif",
    "https://media.tenor.com/mU8MpZmeQgYAAAAC/star-wars-rogue-one.gif",
    "https://media4.giphy.com/media/FHWLCr4nIJyOMar5eh/giphy.gif?cid=ecf05e47ca2f92c95i1xca6ut57ofruzrki00th9oqiyg6li&ep=v1_gifs_related&rid=giphy.gif&ct=g",
    "https://media1.giphy.com/media/5H9mE4GpY9UwTsIAXy/giphy.gif",
    "https://j.gifs.com/98W0lz@facebook.gif",
  ];

  useEffect(() => {
    const intervaloID = setInterval(() => {
      setImagemCapaIndex((index) => (index + 1) % imagensCapa.length);
    }, 5000);
    return () => clearInterval(intervaloID);
  }, []);

  return (
    <section className={styles.sectionVideos}>
      
      <div className={styles.banner}>
        <img src={imagensCapa[imagemCapaIndex]} className={styles.capa} />
      </div>
     

      {categorias.map((categoria, index) => (
        <section style={{ backgroundColor: categoria.corDeFundo}}>
          <div className={styles.categoria__info}>
            <h1 className={styles.categoria__nome}>{categoria.nome}</h1>
          </div>
          
          <Swiper
          slidesPerView={Number(quantidadeSlides)}
          spaceBetween={8}
          centeredSlides={slideCentralizado}
          className={styles.slider}
          >
          
          {videos.filter((video) => video.categoria === categoria.nome).map((video) => (
          <SwiperSlide className={styles.slide__card}>  <Card key={video.id} {...video} /></SwiperSlide>))}
          </Swiper>

          </section>     
      ))}
    </section>
  );
  
}
