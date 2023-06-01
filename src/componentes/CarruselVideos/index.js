import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import styled from "@emotion/styled";
import { Button } from "@mui/material";
import ReactPlayer from "react-player";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { celeste } from "../UI/variables.js";




export const CajaVideo = styled.div`
    width: 93%;
    margin: -4rem 2rem 7rem 2rem;
    @media (max-width: 1200px) {
    margin-top: 0;
  }
`

export const VideoPequeño = styled(ReactPlayer)`
    border: 3px solid ${celeste};
    border-radius: 4px;
    margin-left: 1rem;
`

export const BtnGaleria = styled(Button)`
    margin-bottom: 1rem;
`

export const listaVideos = {
  videos:[
    {
      "link": "https://www.youtube.com/watch?v=PztCEdIJITY&t=27s",
      "categoria": "Front-End",
      "nombre": "Cuándo usar let, var y const?",
      "descripcion": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      "id": "d175a9f8-609c-45c7-8853-6399427ec9cb"
    },
    {
      "link": "https://www.youtube.com/watch?v=GJfOSoaXk4s",
      "categoria": "Front-End",
      "nombre": "¿Qué es JavaScript?",
      "descripcion": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      "id": "462957fd-dfcc-414d-b429-a53b7515922a"
    },
    {
      "link": "https://www.youtube.com/watch?v=rpvrLaBQwgg",
      "categoria": "Front-End",
      "nombre": "Equipo Front End",
      "descripcion": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      "id": "0cb78b22-85cd-4776-9a54-25daf0a23a1e"
    },
    {
      "link": "https://www.youtube.com/watch?v=UuAX5azcvDQ",
      "categoria": "Front-End",
      "nombre": "¿Cómo un desarrollador Front End utiliza el Figma?",
      "descripcion": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      "id": "a6f738be-71ec-4159-ab66-06b900cba4f2"
    },
    {
      "link": "https://www.youtube.com/watch?v=t-iqt1b2qqk",
      "categoria": "Back-End",
      "nombre": "Spring Framework. ¿Qué es ?",
      "descripcion": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      "id": "15db09c8-bed2-47aa-ba69-42b873846214"
    },
    {
      "link": "https://www.youtube.com/watch?v=cLLKVd5CNLcg",
      "categoria": "Back-End",
      "nombre": "¿Qué es SQL y NoSQL?",
      "descripcion": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      "id": "ed271bea-e6f5-4875-9afe-330875868205"
    },
    {
      "link": "https://www.youtube.com/watch?v=EoPvlE85XAQ",
      "categoria": "Back-End",
      "nombre": "Simplificando tu código en Java: Conoce los enum",
      "descripcion": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      "id": "2e6a45d5-3f18-45dc-8198-77b89f971eea"
    },
    {
      "link": "https://www.youtube.com/watch?v=-LmFK6skG7s",
      "categoria": "Back-End",
      "nombre": "Git y GitHub para Principiantes",
      "descripcion": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      "id": "caa85040-d535-4f1e-917c-fe0f7bdbedee"
    },
    {
      "link": "https://www.youtube.com/watch?v=vhwspfvI52k",
      "categoria": "Innovación y Gestión",
      "nombre": "¿Qué son las Soft Skills?",
      "descripcion": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      "id": "d3ce318d-ab2b-430d-9d8c-0ba57d3a8906"
    },
    {
      "link": "https://www.youtube.com/watch?v=YhR7Zp8NUzE",
      "categoria": "Innovación y Gestión",
      "nombre": "7 Soft Skills más deseadas por las empresas",
      "descripcion": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      "id": "a5591df8-1cac-47de-871f-ad65548165a6"
    },      
    {
      "link": "https://www.youtube.com/watch?v=6N3OkLCfK-0",
      "categoria": "Innovación y Gestión",
      "nombre": "¿Qué son las metodologias ágiles?",
      "descripcion": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      "id": "ed5088ce-0027-4d30-896d-951e64e02e90"
    },
    {
      "link": "https://www.youtube.com/watch?v=PEGmLW-a0h8",
      "categoria": "Innovación y Gestión",
      "nombre": "Marketing personal para programadores",
      "descripcion": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      "id": "658837c0-8eee-43cc-a1c2-8b5dd7ffd8ee"
    },
    {
      "link": "https://www.youtube.com/watch?v=ov7vA5HFe6w&t=9s",
      "categoria": "Entrevistas",
      "nombre": "que significa pensar como programador",
      "descripcion": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      "id": "658837c0-2Jjs-43cc-a1c2-8b5dd7ffd8ee"
    }
  ], 
  categorias: [
      {
      "categoria": "Front-End",
      "descripcion": "Formacion Back End de Alura Latam.",
      "id": "d175a9f8-609c-45c7-8853-6399427ec9cb"
    },
    {
      "categoria": "Back-End",
      "descripcion": "Formacion Back End de Alura Latam",
      "id": "d175a9f8-533c-45c7-8853-6399427ec9cb"
    },
    {
      "categoria": "Innovación y Gestión",
      "descripcion": "Formación Innovación y Gestión de Alura Latam",
      "id": "d175a9f8-609c-45c7-9273-6399427ec9cb"
    }
  ],}

const CarruselVideos = () => {
  
  const [categorias, setCategorias] = useState([]);
  const [videos, setVideos] = useState([]);


  const generarListaCategorias = () => {
    const listaCategorias = listaVideos.categorias.map((categoria) =>({
      categoria: categoria.categoria,
      descripcion: categoria.descripcion,
      id: categoria.id
    }));
    setCategorias(listaCategorias);
  };

  useEffect(() => {
    generarListaCategorias();
  }, []);

  const generarListaVideos = () => {
    const listaVideitos = listaVideos.videos.map((video) => ({
      nombre: video.nombre,
      link: video.link,
      id: video.id,
      categoria: video.categoria
    }));
    setVideos(listaVideitos);
  };

  useEffect(() => {
    generarListaVideos();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
      return (
      <>
        {categorias.map((categoria) => (
        <CajaVideo key={categoria.id}>
          <BtnGaleria variant="contained" >{categoria.categoria}</BtnGaleria>
          <Slider {...settings} >
          {videos
              .filter((video) => video.categoria === categoria.categoria)
              .map((video) => (
                <div key={video.id}>
                  <VideoPequeño
                    url={video.link}
                    className="react-player"
                    controls
                    preload="metadata"
                    width="432px"
                    height="260.85px"
                  />
                </div>
              ))}
          </Slider>
        </CajaVideo>      
      ))}
      </>
)};


export default CarruselVideos;

