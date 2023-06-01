import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from '@mui/material';
import { gris2 } from '../UI/variables';

export const StyledBox = styled(Box)`
  width: 95%;
  background-color: #53585D;
`

const theme = createTheme({
  palette: {
    text: {
      primary: gris2,
    },
  },
});

const InputTitulo = () => {
    return (
      <ThemeProvider theme={theme}>
        <StyledBox
          component="form"
          sx={{
            m: 2,
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
        fullWidth
        sx={{
          color: gris2,
        }}
        id="filled-basic"
        label="Info a cargar"
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