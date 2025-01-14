import React from 'react';
import GradientHead from '../GradientText';
import { AboutStyled } from './AboutStyle';
import SectionDivider from '../SectionDivider';

const About = () => {
  return (
    <AboutStyled id="about" className="section-spacing">
      <SectionDivider />
      <GradientHead text={'Sobre'} classes={'about-heading'} />
      <section className={'about-txt'}>
        <p>
          Tenho 25 anos e nasci em Águas Lindas de Goiás, GO. Quando completei
          meus 17 anos me mudei e passei por várias cidades e estados ate meus 
          21 anos, quando novamente voltei para Águas lindas. Gosto de jogar 
          vídeo game, assistir series com minha esposa, e estudar (principalmente 
          programação).
        </p>
        <p>
          Sou estudante de análise e desenvolvimento de sistemas. atualmente 
          estou em meu 5º e último semestre na faculdade anhanguera. também 
          tenho cursos extras como desenvolvimento java com orientação a objetos, 
          estruturas de dados com python, React do Zero a Maestria. entre algumas 
          outras.
        </p>
        <p>
          Além disso, trago um toque de bom humor, colaboração e gosto por
          compartilhar conhecimento e ideias de aprimoramento. Sou entusiasta de
          tecnologia e estou sempre empolgado em aprimorar meus conhecimentos na
          área.
        </p>
      </section>
    </AboutStyled>
  );
};

export default About;
