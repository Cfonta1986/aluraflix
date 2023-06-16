import { useState, useEffect } from 'react';
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

  const videosEnLocalStorage = JSON.parse(localStorage.getItem("videosLocal"));

  const [categorias, setCategorias] = useState([]);

  const generarListaCategorias = () => {
    const listaCategorias = videosEnLocalStorage.categorias.map((categoria) =>({
      categoria: categoria.categoria,
      descripcion: categoria.descripcion,
      id: categoria.id
    }));
    setCategorias(listaCategorias);
  };

  useEffect(() => {
    generarListaCategorias();
  }, []);

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
        {categorias.map((categoria) => (
          <MenuItem key= {categoria.id} value= {categoria.categoria}>{categoria.categoria} </MenuItem>
        ))}
        </StyledSelect>
      </FormControl>
    </StyledBox>
  );
}