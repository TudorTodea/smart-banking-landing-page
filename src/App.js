
import { Container } from '@mui/system';
import './App.css';
import MenuAppBar from './components/Appbar';
import Feature from './components/Feature';
import Hero from './components/Hero';
import Testimonial from './components/Testimonial';
import UnderHero from './components/UnderHero';

function App() {
  return (
    <>
      <Container>
        <MenuAppBar />
        <Hero />

      </Container>
      <UnderHero />
      <Container>
        <Testimonial />
      </Container>
      <Container maxWidth='xl'>
        <Feature />
      </Container>


    </>
  );
}

export default App;
