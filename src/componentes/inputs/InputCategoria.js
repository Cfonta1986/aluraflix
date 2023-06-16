import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import styled from '@emotion/styled';
import { gris2 } from '../UI/variables';
import { StyledBox } from './InputTitulo';


export const StyledInputLabel = styled(InputLabel)`
  color: ${gris2}
`

export const StyledSelect = styled(Select)`
  color: ${gris2};
`


export default function SeleccionaCategoria(props) {
  const [category, setCategory] = useState('');

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <StyledBox sx={{ minWidth: 120, m: 2
    }}>
      <FormControl fullWidth>
        <StyledInputLabel id="demo-simple-select-label">Categoria</StyledInputLabel>
        <StyledSelect 
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          label="category"
          {...props.datos}
          onChange={handleChange}
        >
          <MenuItem value={"Front-End"}>Front End</MenuItem>
          <MenuItem value={"Back-End"}>Back End</MenuItem>
          <MenuItem value={"Innovación y Gestión"}>Innovación y Gestión</MenuItem>
        </StyledSelect>
      </FormControl>
    </StyledBox>
  );
}