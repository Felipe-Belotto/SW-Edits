import { useEffect, useState } from 'react'
import InputForm, { InputColor, TextAreaForm } from '../../components/InputForm/InputForm'
import styles from './PaginaNovaCategoria.module.css'
import { FormControl } from '@mui/base'
import Botao from '../../components/Botao/Botao'
import EnviarNovaCategoria from './EnviarNovaCategoria'

export default function PaginaNovaCategoria () {

    const [nome, setNome] = useState("")
    const [descricao, setDescricao] = useState("")
    const [cor, setCor] = useState()
    const [dados, setDados] = useState([nome,descricao,cor])

    const[alertaSucesso,setAlertaSucesso] = useState(false)

    useEffect(() => {
      setDados([nome,descricao,cor])
    })

    const limparDados = () => {
        const confirmacao = confirm("Certeza que irá apagar todos os dados ?") 
        if(confirmacao) {
          setNome("")
          setDescricao("")
          setCor("")
        }
    }

    const aoEnviar = (event) => {
      event.preventDefault();
      EnviarNovaCategoria(nome,descricao,cor)
      setNome("")
      setDescricao("")
      setCor("")
      setAlertaSucesso(true)
      setTimeout(function() {
        setAlertaSucesso(false);
      }, 5000);
    };

  return (
    <section className={styles.formulario}>
      <h1 className={styles.titulo}>Nova Categoria</h1>

      <form className={styles.container} onSubmit={aoEnviar}>

        <InputForm
         id="nome"
          label="Nome da categoria"
          onChange={(event) => {
          setNome(event.target.value);
          }}
          value={nome} />

          <TextAreaForm 
          id="descricao"
          label="Descrição"
          onChange={(event) => {
            setDescricao(event.target.value);
          }}
          value={descricao}/>

          <InputColor id="cor" 
          value={cor} 
          onChange={(event) => {
            setCor(event.target.value);
          }}/>

          <div className={styles.botoesContainer}>
            <Botao label="Limpar" color="error" onClick={limparDados} />
            <Botao label="Salvar" type="submit" />
          </div>
      </form>


        <section className={styles.preview__container} style={{ backgroundColor: cor}}>

          <h1 className={styles.preview__nome}>
            {nome}
          </h1>
          <p className={styles.preview__descricao}>
            {descricao}
            </p>
        </section>
        <p className={styles.preview__legenda}>Visualização em tempo real</p>

        <Alert variant="outlined" severity="success" style={{display: alertaSucesso ? "flex" : "none"}}>
        Categoria adicionada com sucesso
      </Alert>

    </section>
    
  )
}