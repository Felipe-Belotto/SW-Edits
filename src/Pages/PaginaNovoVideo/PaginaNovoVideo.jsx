import InputForm, {
  SelectFormCategorias,
  TextAreaForm,
} from '../../components/InputForm/InputForm';
import styles from './PaginaNovoVideo.module.css';
import { useEffect, useState } from 'react';
import Botao from '../../components/Botao/Botao';
import EnviarNovoVideo from './EnviarNovoVideo';
import { Link } from 'react-router-dom';
import { Alert } from '@mui/material';

export default function PaginaNovoVideo() {
  const [titulo, setTitulo] = useState('');
  const [video, setVideo] = useState('');
  const [imagem, setImagem] = useState('');
  const [categoria, setCategoria] = useState('');
  const [descricao, setDescricao] = useState('');
  const [codigo, setCodigo] = useState('');
  const [codigoVideo, setCodigoVideo] = useState('');
  const [dados, setDados] = useState([
    titulo,
    video,
    imagem,
    categoria,
    descricao,
    codigo,
  ]);
  const[alertaSucesso,setAlertaSucesso] = useState(false)

  const submitEnviarNovoVideo = (event) => {
    event.preventDefault();
    EnviarNovoVideo(titulo,video,imagem,categoria,descricao)
    setTitulo('');
    setCodigoVideo('')
    setVideo('');
    setImagem('');
    setCategoria('');
    setDescricao('');
    setCodigo('');
    setAlertaSucesso(true)
    setTimeout(function() {
      setAlertaSucesso(false);
    }, 5000);
  };

  useEffect(() => {
    setImagem(`https://img.youtube.com/vi/${codigoVideo}/hqdefault.jpg`)
    setVideo(`https://www.youtube.com/embed/${codigoVideo}?si=m9cQpJWmBkCxIj8D`)
    setDados([titulo, video, imagem, categoria, descricao, codigo]);
  });

  const limparDados = () => {
    const confirmacao = confirm("Certeza que irá apagar todos os dados ?") 
    if(confirmacao) {
    setTitulo('');
    setCodigoVideo('')
    setVideo('');
    setImagem('');
    setCategoria('');
    setDescricao('');
    setCodigo('');
    }
}

  return (
    <section className={styles.formulario}>
      <h1 className={styles.titulo}>Novo vídeo</h1>

      <form className={styles.container} onSubmit={submitEnviarNovoVideo}>
        <InputForm
          id="titulo"
          label="Personagem"
          onChange={(event) => {
            setTitulo(event.target.value);
          }}
          value={titulo}
        />
        <InputForm
          id="codigoVideo"
          label="Código do video (Youtube)"
          onChange={(event) => {
          setCodigoVideo(event.target.value);
          }}
          value={codigoVideo}
        />
        
        <aside className={styles.preview__imagem__container}>
        <img src={imagem} className={styles.preview__imagem}/>
        </aside>
        
        <SelectFormCategorias
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
            <Botao label="Limpar" color="error" onClick={limparDados} />   
            <Botao label="Salvar" type="submit" />
        </div>
      </form>
      <Alert variant="outlined" severity="success" style={{display: alertaSucesso ? "flex" : "none"}}>
        Vídeo adicionado com sucesso
      </Alert>
    </section>
  );
}
