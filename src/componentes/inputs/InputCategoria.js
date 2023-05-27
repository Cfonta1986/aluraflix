import { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import styled from '@emotion/styled';
import { gris2 } from '../UI/variables';


export const StyledInputLabel = styled(InputLabel)`
  color: ${gris2}
`

export const StyledSelect = styled(Select)`
  color: ${gris2};
`

export default function SeleccionaCategoria() {
  const [category, setCategory] = useState('');

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120,
    }}>
      <FormControl fullWidth>
        <StyledInputLabel id="demo-simple-select-label">Categoria</StyledInputLabel>
        <StyledSelect 
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          label="category"
          onChange={handleChange}
        >
          <MenuItem value={10}>Front End</MenuItem>
          <MenuItem value={20}>Back End</MenuItem>
          <MenuItem value={30}>Innovación y Gestión</MenuItem>
        </StyledSelect>
      </FormControl>
    </Box>
  );
}