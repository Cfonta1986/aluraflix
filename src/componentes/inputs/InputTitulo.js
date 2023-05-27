import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const InputTitulo = () => {
    return (
        <Box
          component="form"
          sx={{
            m: 1,
            width: 1
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="filled-basic" label="Filled" variant="filled" />
        </Box>
      );
}

export default InputTitulo;