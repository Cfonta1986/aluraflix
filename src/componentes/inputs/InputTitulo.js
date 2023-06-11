import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material';
import { gris2 } from '../UI/variables';

export const StyledBox = styled(Box)`
  width: 95%;
  background-color: #53585D;
`

export const theme = createTheme({
  palette: {
    text: {
      primary: gris2,
    },
  },
});

const InputTitulo = (props) => {

  const errores = props.errors[props.valor]
  
    return (
      <ThemeProvider theme={theme}>
        <StyledBox
          
          sx={{
            m: 2,
          }}
          autoComplete="off"
        >
          <TextField
        fullWidth
        sx={{
          color: gris2,
        }}
        id="filled-basic"
        label={props.valor}
        type={props.type}
        error={errores}
        helperText={errores ? props.helperText : ''}

        {...props.datos}
        variant="filled"
        InputLabelProps={{
          sx: { color: gris2 },
        }}
      />
        </StyledBox>
      </ThemeProvider>
      );
}

export default InputTitulo;