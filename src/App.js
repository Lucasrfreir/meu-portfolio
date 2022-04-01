import Header from './components/header/Header';
import Theme from './styles/theme';
import Hero from './components/hero/Hero';
import { Wrapper, TextSection } from './AppStyle';
import About from './components/about/About';
import Technologies from './components/technologies';
import Projects from './components/projects';
function App() {
  return (
    <div className="App">
      <Theme>
        <Header />
        <Wrapper>
          <Hero />
          <TextSection>
            <About />
            <Technologies />
            <Projects />
          </TextSection>
        </Wrapper>
      </Theme>
    </div>
  );
}

export default App;
