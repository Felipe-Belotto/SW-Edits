
import styles from './PaginaPesquisa.module.css';
import Card from '../../components/Card/Card';
import { useEffect, useState } from 'react';
import { InputPesquisa } from '../../components/InputPesquisa/InputPesquisa';

export default function PaginaPesquisa() {

  const [videosRelacionados, setVideosRelacionados] = useState([]);
  const [textoPesquisado, setTextoPesquisado] = useState("");
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  const carregarDados = async () => {
    try {
      const respostaVideos = await fetch(
        `https://6516db6809e3260018ca679b.mockapi.io/Edits`,
      );
      const dadosVideos = await respostaVideos.json();
      setVideos(dadosVideos);
    } catch (error) {
      console.error('Erro ao carregar dados:', error);
      setLoading(false);
    }}


  useEffect(() => {
    carregarDados();
  }, []);

  function localizaVideos() {
    const videosFiltrados = videos.filter((video) =>
      video.titulo.includes(textoPesquisado)
    );
    setVideosRelacionados((prevVideos) => [...videosFiltrados]);
    console.log(videosFiltrados);
  }
  
  function listarNomesPersonagens() {
    const nomesPersonagens = videos.map((video) => video.titulo);
    const nomesOrdenados = [...new Set(nomesPersonagens)].sort();
    return nomesOrdenados;
  }

   useEffect(() => {
     localizaVideos();
   }, [textoPesquisado, videos]);
  
  return (
  
    <section className={styles.container}>
      <div className={styles.container__inputPesquisa}>
      <InputPesquisa
  value={textoPesquisado}
  onChange={(value) => setTextoPesquisado(value)}
  opcoes={listarNomesPersonagens()}
/>

      </div>

      {textoPesquisado? (<div className={styles.informativo}>
        <span>Resultado de <strong>{textoPesquisado}</strong></span>
      </div>): ""}

      <div className={styles.container__cards}>
    {videosRelacionados.length > 0 && (
    videosRelacionados.map((videoAtual) => <Card key={videoAtual.id} {...videoAtual} />)
   )}
      </div>

    </section>
  
  );
}
