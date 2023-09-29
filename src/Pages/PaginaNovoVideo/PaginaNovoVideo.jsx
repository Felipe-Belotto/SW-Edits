import InputForm, {
  SelectForm,
  TextAreaForm,
} from '../../components/InputForm/InputForm';
import styles from './PaginaNovoVideo.module.css';
import { useEffect, useState } from 'react';
import Botao from '../../components/Botao/Botao';
import EnviarNovoVideo from './EnviarNovoVideo';
import { Link } from 'react-router-dom';

export default function PaginaNovoVideo() {
  const [titulo, setTitulo] = useState('');
  const [video, setVideo] = useState('');
  const [imagem, setImagem] = useState('');
  const [categoria, setCategoria] = useState('');
  const [descricao, setDescricao] = useState('');
  const [codigo, setCodigo] = useState('');
  const [dados, setDados] = useState([
    titulo,
    video,
    imagem,
    categoria,
    descricao,
    codigo,
  ]);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(dados);
    EnviarNovoVideo(titulo,video,imagem,categoria,descricao)
  };

  useEffect(() => {
    setDados([titulo, video, imagem, categoria, descricao, codigo]);
  });

  function limparDados() {
    setTitulo('');
    setVideo('');
    setImagem('');
    setCategoria('');
    setDescricao('');
    setCodigo('');
  }

  return (
    <section className={styles.formulario}>
      <h1 className={styles.titulo}>Novo vídeo</h1>

      <form className={styles.container} onSubmit={handleSubmit}>
        <InputForm
          id="titulo"
          label="Título"
          onChange={(event) => {
            setTitulo(event.target.value);
          }}
          value={titulo}
        />
        <InputForm
          id="linkVideo"
          label="Link do vídeo"
          onChange={(event) => {
            setVideo(event.target.value);
          }}
          value={video}
        />
        <InputForm
          id="imagemVideo"
          label="Imagem do vídeo"
          onChange={(event) => {
            setImagem(event.target.value);
          }}
          value={imagem}
        />
        <SelectForm
          id="categoria"
          label="Escolha uma categoria"
          onChange={(event) => {
            setCategoria(event.target.value);
          }}
          value={categoria}
        />
        <TextAreaForm
          id="descricao"
          label="Descrição"
          onChange={(event) => {
            setDescricao(event.target.value);
          }}
          value={descricao}
        ></TextAreaForm>
        <InputForm
          id="codigoSeguranca"
          label="Código de segurança"
          onChange={(event) => {
            setCodigo(event.target.value);
          }}
          value={codigo}
        />
        <div className={styles.botoes__container}>
          <div className={styles.botoesEsquerda}>
            <Botao label="Salvar" type="submit" />
            <Botao label="Limpar" color="error" onClick={limparDados} />
          </div>
          <Link to={"/novaCategoria"}>
          <Botao label="Nova categoria" />
          </Link>
          
        </div>
      </form>
    </section>
  );
}
