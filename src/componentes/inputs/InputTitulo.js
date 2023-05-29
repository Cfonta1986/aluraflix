import styled from '@emotion/styled';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export const StyledBox = styled(Box)`
  width: 95%;
`

const InputTitulo = () => {
    return (
        <StyledBox
          component="form"
          sx={{
            m: 2,
          }}
          noValidate
          autoComplete="off"
        >
          <TextField fullWidth id="filled-basic" label="Filled" variant="filled"  />
        </StyledBox>
      );
}

export default InputTitulo;