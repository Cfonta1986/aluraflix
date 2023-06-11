import { Button } from "@mui/material";

const BtnLimpiar = () =>{
    const limpiarInputs = () => {window.location.reload()};

    return <Button variant="outlined" onClick={limpiarInputs} >Limpiar</Button>
}

export default BtnLimpiar