import React from "react";
import styled from "@emotion/styled";
import fotoProgramador from "../../assets/progAlura.png"
import { negro3, celeste, gris3 } from "../UI/variables";
import { Button, Typography } from "@mui/material";
import ReactPlayer from "react-player";
import CarruselVideos from "../CarruselVideos/index.js"




export const Container = styled.div`
    width: 100%;
    margin: 0px;
    background-color: ${negro3};
`

export const Caja = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
`

export const CajaFoto = styled(Caja)`
    display: block;
    position: relative;
    width: 100%;
`

export const Foto = styled.img`
    opacity: .5;
    width: 100%;
    image-rendering: auto;
`

export const Subcaja = styled(Caja)`
    flex-direction: column;
    width: 35%;
    margin-top: 263px;
    margin-left: 26px;
    @media (max-width: 1100px) {
      margin-top: 2rem;
      width: 60%;
      text-align: center;
      align-items: center;
    }
`

export const CajaContenedora = styled(Caja)`   
    flex-direction: row;
    position: absolute;
    @media (max-width: 1100px) {
    flex-direction: column;
    align-items: center;
    }
    
`

export const Video = styled(ReactPlayer)`
    border: 4px solid ${celeste};
    border-radius: 4px;
    @media (max-width: 1050px) {
      display: none;
    }
`

export const BtnClase = styled(Button)`
  width: 200px;
`




const Body = ()=>{
    return <Container>      
      <Caja>
        <CajaFoto>
            <Foto src= {fotoProgramador} alt="programador programando" />
        </CajaFoto>
        <CajaContenedora>
        <Subcaja>
            <BtnClase variant="contained" >Front End</BtnClase>
            <Typography variant="h2" style={{ color: gris3 }} >Front End</Typography>
            <Typography variant="p" style={{ color: gris3 }} >Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.</Typography>
        </Subcaja>
        <Subcaja>
            <Video 
                url='https://www.youtube.com/watch?v=ov7vA5HFe6w&t=9s'
                className='react-player'
                controls
                preload="metadata"
                 />
        </Subcaja>
        </CajaContenedora>
        <Caja>
            <CarruselVideos />
        </Caja>
        
      </Caja>
    </Container>
}


export default Body