import perolascultImg from '../img/perolas-cult.png';
import portfolioImg from '../img/portfolio.png';
import postogasolina from '../img/posto-gasolina.png';

const projects = [
  {
    image: perolascultImg,
    technologies: ['HTML 5',  'CSS 3'],
    githubLink: 'https://github.com/Lucasrfreir',
    deployLink: 'https://perolas-cult.vercel.app/',
    description: `Um site site inspirado no estilo da Netflix, focado em filmes cult, permitindo aos usuários explorar e assistir a filmes de diferentes gêneros.`,
  },
  {
    image: postogasolina,
    technologies: ['java', 'Orientação a objetos'],
    githubLink: 'https://github.com/Lucasrfreir',
    deployLink: 'https://github.com/Lucasrfreir/Posto-de-gasolina',
    description: `Uma aplicação em programação orientada a objetos, utilizando conceitos como enumerações, streams, e manipulação de listas. `,
  },
  {
    image: portfolioImg,
    technologies: ['ReactJs', 'React Hooks', 'Styled components', 'RTL'],
    githubLink:
      'https://github.com/Lucasrfreir',
    deployLink: 'http://localhost:3000/',
    description: `Meu portfolio, onde falo um pouco sobre eu mesmo e as tecnologias que conheço (esse site que você está utilizando)`,
  },
];

export default projects;
