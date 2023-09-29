import { useState } from 'react'
import InputForm, { InputColor, TextAreaForm } from '../../components/InputForm/InputForm'
import styles from './PaginaNovaCategoria.module.css'
import { FormControl } from '@mui/base'

export default function PaginaNovaCategoria () {

    const [nome, setNome] = useState("")
    const [descricao, setDescricao] = useState("")
    const [cor, setCor] = useState()

  return (
    <section className={styles.formulario}>
      <h1 className={styles.titulo}>Nova Categoria</h1>

      <form className={styles.container}>

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

            <h1 style={{fontSize:"32px", color:"white"}}>{nome}</h1>
            <h1 style={{fontSize:"32px", color:"white"}}>{descricao}</h1>
            <h1 style={{fontSize:"32px", color:"white"}}>{cor}</h1>


      </form>

      
    </section>
  )
}