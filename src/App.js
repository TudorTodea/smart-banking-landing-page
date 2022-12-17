
import { Container } from '@mui/system';
import './App.css';
import MenuAppBar from './components/Appbar';
import Hero from './components/Hero';
import UnderHero from './components/UnderHero';

function App() {
  return (
    <>
      <Container>
        <MenuAppBar />
        <Hero />

      </Container>
      <UnderHero />


    </>
  );
}

export default App;
