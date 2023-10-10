import styles from './PainelDeControle.module.css';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import CardADM from '../../components/CardADM/CardADM';

export default function PainelDeControle() {
  const [videos, setVideos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [quantidadeSlides, setQuantidadeSlides] = useState("")
  const [slideCentralizado, setslideCentralizado] = useState("")

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
            corDeFundo: ajustarOpacidade(categoria.cor, 0.8, 0.4),
          }))
        );
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

  return (
    <>
    <section className={styles.sectionVideos}>
      
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
          
          {videos
  .filter((video) => video.categoria === categoria.nome)
  .map((video) => (
    <SwiperSlide className={styles.slide__card}>  <CardADM key={video.id} {...video} /></SwiperSlide>
  ))}
          </Swiper>

          </section>     
      ))}
    </section>
    </>
  );
  
}
