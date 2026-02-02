import './App.css';
import { Navigation } from './sections/Navigation';
import { Hero } from './sections/Hero';
import { Conceito } from './sections/Conceito';
import { Gameplay } from './sections/Gameplay';
import { Mundo } from './sections/Mundo';
import { Labirinto } from './sections/Labirinto';
import { Impacto } from './sections/Impacto';
import { Equipe } from './sections/Equipe';
import { Roadmap } from './sections/Roadmap';
import { Orcamento } from './sections/Orcamento';
import { Footer } from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-abyss text-white overflow-x-hidden">
      <Navigation />
      <main>
        <Hero />
        <Conceito />
        <Gameplay />
        <Mundo />
        <Labirinto />
        <Impacto />
        <Equipe />
        <Roadmap />
        <Orcamento />
        <Footer />
      </main>
    </div>
  );
}

export default App;
