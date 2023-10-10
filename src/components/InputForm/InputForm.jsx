import {
  Box,
  FormControl,
  Input,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import styles from './InputForm.module.css';
import { Children, useEffect, useState } from 'react';
import apiCategorias from '../../function/apiCategorias';

export default function InputForm(props) {
  const labelStyles = {
    color: '#D7D8D7',
  };

  const inputStyles = {
    color: 'white',
  };

  return (
    <TextField
      name={props.id}
      id={props.id}
      label={props.label}
      variant="filled"
      className={styles.input}
      InputLabelProps={{
        style: labelStyles,
      }}
      inputProps={{ style: inputStyles }}
      autoComplete="off"
      onChange={props.onChange}
      value={props.value}
      required
    />
  );
}

export function TextAreaForm(props) {
  const labelStyles = {
    color: '#D7D8D7',
  };

  const inputStyles = {
    color: 'white',
  };

  return (
    <TextField
      name={props.id}
      id={props.id}
      label={props.label}
      variant="filled"
      className={styles.input}
      InputLabelProps={{
        style: labelStyles,
      }}
      inputProps={{ style: inputStyles }}
      autoComplete="off"
      multiline
      onChange={props.onChange}
      value={props.value}
      required
    />
  );
}

export function SelectFormCategorias(props) {
  const MenuLabel = {
    color: '#D7D8D7',
  };

  const SelectStyle = {
    color: 'white',
  };

  const SelectOption = {
    color:"white",
    backgroundColor:"#4c5055",
  }

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    apiCategorias((categoriasAtualizadas) => {
      setCategorias(categoriasAtualizadas);
    });
  }, []);

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth variant="filled" className={styles.input}>
        <InputLabel id="demo-simple-select-label" style={MenuLabel}>
          Escolha uma categoria
        </InputLabel>
        <Select
          id={props.id}
          label={props.id}
          style={SelectStyle}
          onChange={props.onChange}
          value={props.value}
          required
          MenuProps={{ PaperProps: { style: SelectOption } }}
        >
          {categorias.map((categoria) => {
            return (
            <MenuItem value={categoria.nome} >{categoria.nome}</MenuItem>
            )
          })}
        </Select>
      </FormControl>
    </Box>
  );
}

  export function InputColor (props) {
    const MenuLabel = {
      color: '#D7D8D7',
    };
    return (
      <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth  variant="filled" className={styles.inputColorContainer} >
      <InputLabel id="demo-simple-select-label" className={styles.inputColorLabel} style={MenuLabel}>
        Escolha uma cor
        </InputLabel>
        <Input type='color' value={props.value} defaultValue={"#ffffff"} onChange={props.onChange} id={props.id} />
        
      </FormControl>
    
    </Box>
  
  )}
