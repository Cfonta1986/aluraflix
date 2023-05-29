import SeleccionaCategoria from "../componentes/inputs/InputCategoria.js"
import InputTitulo from "../componentes/inputs/InputTitulo"
import InputTexto from "../componentes/inputs/InputTexto.js"
import { Typography } from "@mui/material"
import { styled } from "styled-components"
import { gris2 } from "../componentes/UI/variables.js"
import { Container } from "../componentes/body/index.js"
import BtnLimpiar from "../componentes/Botones/BtnLimpiar.js"
import BtnAceptar from "../componentes/Botones/BtnAceptar.js"

export const TituloVideo = styled(Typography)`
    text-align: center;
    color: ${gris2} ;
`

export const StyledContainer = styled(Container)`
    width: 95%;
    display: flex;
    flex-direction: column;
`

const FormVideo = () => {
    return <StyledContainer>
        <form>
        <TituloVideo sx={{ 
            mb: 5
         }}
          variant="h2">Nuevo video</TituloVideo>
        <InputTitulo required/>
        <InputTitulo required/>
        <InputTitulo required/>
        <SeleccionaCategoria required /> 
        <InputTexto required />
        <InputTitulo required/>
        <div>
            <BtnAceptar></BtnAceptar>
            <BtnLimpiar></BtnLimpiar>
            <BtnAceptar></BtnAceptar>
        </div>
        </form>
    </StyledContainer>
}

export default FormVideo;