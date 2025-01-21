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
        Tenho 25 anos e nasci em Águas Lindas de Goiás, GO. Quando completei 17 
        anos, me mudei e passei por várias cidades e estados até os 21 anos, 
        quando voltei novamente para Águas Lindas. Gosto de jogar videogame, 
        assistir a séries com minha esposa e estudar (principalmente programação).
        </p>
        <p>
        Sou estudante de Análise e Desenvolvimento de Sistemas e atualmente estou
        no 5º e último semestre na faculdade Anhanguera. Também possuo cursos 
        extras, como Desenvolvimento Java com Orientação a Objetos, Estruturas 
        de Dados com Python, React do Zero à Maestria, entre outros.
        </p>
        <p>
        Além disso, trago um toque de bom humor, colaboração e gosto por compartilhar
        conhecimento e ideias de aprimoramento. Sou entusiasta de tecnologia e estou 
        sempre empolgado em expandir meus conhecimentos na área.
        </p>
      </section>
    </AboutStyled>
  );
};

export default About;
