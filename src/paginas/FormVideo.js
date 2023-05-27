import SeleccionaCategoria from "../componentes/inputs/InputCategoria.js"
import InputTitulo from "../componentes/inputs/InputTitulo"
import SeleccionarColor from "../componentes/inputs/InputColor.js"
import InputTexto from "../componentes/inputs/InputTexto.js"
import { Typography } from "@mui/material"
import { styled } from "styled-components"
import { gris2 } from "../componentes/UI/variables.js"
import { Container } from "../componentes/body/index.js"

export const TituloVideo = styled(Typography)`
    text-align: center;
    color: ${gris2} ;
`

const FormVideo = () => {
    return <Container>
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
        </form>
    </Container>
}

export default FormVideo;