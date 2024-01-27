import React from 'react';
import styles from './InputPesquisa.module.css';
import { Autocomplete, TextField } from '@mui/material';

export const InputPesquisa = (props) => {
  const { value, onChange, opcoes } = props;

  const opcoesComVazio = [""].concat(opcoes);  

  return (
    <Autocomplete
      value={value}
      onChange={(event, newValue) => {
        onChange(newValue);
      }}
      disablePortal
      id="combo-box-demo"
      options={opcoesComVazio} 
      sx={{ width: 350, background: "#f4f4f4", borderRadius:"4px" }}
      ListboxProps={{ style: { background: "rgb(49, 49, 49)" } }}
      renderInput={(params) => (
        <TextField label="Pesquisa" {...params} variant='filled'/>
      )}
    />
  );
};
