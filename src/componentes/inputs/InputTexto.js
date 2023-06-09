import { TextField, ThemeProvider } from "@mui/material";
import { StyledBox, theme } from "./InputTitulo";
import { gris2 } from "../UI/variables";


const InputTexto = (props) => {

  const errores = props.errors[props.valor]

    return <ThemeProvider theme={theme}>
    <StyledBox 
    sx={{
        m: 2,
      }} >
    <TextField fullWidth sx={{
          color: gris2,
        }} id="outlined-basic" label={props.valor} {...props.datos} InputLabelProps={{
          sx: { color: gris2 },
        }} variant="outlined" 
        multiline
        error={errores}
        helperText={errores ? props.helperText : ''} 
        />
    </StyledBox>
    </ThemeProvider>
  }

export default InputTexto;