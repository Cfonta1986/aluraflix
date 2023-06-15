import { Button } from "@mui/material";

const BtnAceptar = (props) =>{
    return <Button variant="contained" type={props.tipo} >{props.nombre}</Button>
}

export default BtnAceptar