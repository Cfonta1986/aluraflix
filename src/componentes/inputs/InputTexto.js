import { TextField } from "@mui/material";
import { StyledBox } from "./InputTitulo";


const InputTexto = () => {
    return <StyledBox 
    sx={{
        m: 2,
      }} >
    <TextField fullWidth id="outlined-basic" label="Outlined" variant="outlined" multiline />
    </StyledBox>
}

export default InputTexto;