import React from "react";
import styled from "styled-components";
import { negro, azulPrimario, gris3 } from "../UI/variables";
import logo from "../../assets/logo.png";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";



export const StyledHeader = styled.header`
  background-color: ${negro};
  display: flex;
  justify-content: space-around;  
  align-items: center;
  height: 100px;
  border-bottom: 3px solid ${azulPrimario} ;
`

export const Loguito = styled.img`
  width: 168.45px;
  height: 40px;
`




const Header = () => {
  return (
    <StyledHeader>
      <Link to="/" ><Loguito src={logo} alt="aluraflix"/> </Link>
      <Link to="/agregarVideo"><Button variant="outlined" style={{ color: gris3 }} >Nuevo Video</Button></Link>
    </StyledHeader>
  );
};

export default Header;