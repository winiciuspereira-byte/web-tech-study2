import React from 'react';
import Box from '../../Components/Box';
import Img1 from "../../assets/img/box-1.jpg";
import Img2 from "../../assets/img/box-2.jpg";



export default function index() {
  return (
    <main className="container">
      <section className="d-flex">
        <Box
          title="Titulo do componente"
          description="Este é um parágrafo de amplo para o componente."
          imagem={Img1}
        />
        <Box
          title="Titulo do componente"
          description="Este é um parágrafo de amplo para o componente."
          imagem={Img2}
        />
      </section>
    </main>
  );
}
