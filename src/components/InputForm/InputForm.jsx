import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import styles from './InputForm.module.css';

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
    />
  );
}

export function SelectForm(props) {
  const MenuLabel = {
    color: '#D7D8D7',
  };

  const SelectStyle = {
    color: 'white',
  };

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
        >
          <MenuItem value={''}></MenuItem>
          <MenuItem value={'1'}>Exemplo 1</MenuItem>
          <MenuItem value={'2'}>Exemplo 2</MenuItem>
          <MenuItem value={'3'}>Exemplo 3</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
