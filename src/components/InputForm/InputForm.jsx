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
          required
        >
          <MenuItem value={''}></MenuItem>
          <MenuItem value={'Jedi'}>Jedi</MenuItem>
          <MenuItem value={'Sith'}>Sith</MenuItem>
          <MenuItem value={'Mercenarios'}>Caçador de recompensa</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

  export function InputColor () {
    const MenuLabel = {
      color: '#D7D8D7',
    };
    return (
      <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth  className={styles.inputColorContainer}>
      <InputLabel id="demo-simple-select-label" className={styles.inputColorLabel} style={MenuLabel}>
          Escolha uma cor
        </InputLabel>
       <Input type='color' className={styles.inputColor}></Input>
      </FormControl>
    </Box>
  
  )}
