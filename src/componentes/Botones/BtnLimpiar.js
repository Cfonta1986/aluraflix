import { Button } from "@mui/material";


const BtnLimpiar = () =>{
    const limpiarInputs = () => {window.location.reload()};

    const buttonStyle = {
        marginLeft: '1rem',
      };

    return <Button variant="outlined" style={buttonStyle} onClick={limpiarInputs} >Limpiar</Button>
}

export default BtnLimpiar