import React from "react";
import styled from "@emotion/styled";
import { negro, azulPrimario } from "../UI/variables";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

export const CajaFooter = styled.div`
    background-color: ${negro};
    display: flex;
    justify-content: space-around;  
    align-items: center;
    height: 110px;
    border-top: 3px solid ${azulPrimario};
    flex-direction: column;
`

export const LogoFooter = styled.img`
    width: 168.45px;
    height: 40px;
    margin-top: 1rem;
`

export const PFooter = styled.p`
    color: ${azulPrimario}
`


const Footer = () =>{

    return (
        <CajaFooter>
        <Link to="/" ><LogoFooter src={logo} alt="aluraflix" /></Link>
        <PFooter>Desarrollado por Cristian Fontanini</PFooter>
        </CajaFooter>
    )

}

export default Footer;