import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, ExternalLink } from 'lucide-react';

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
  const [isLoaded, setIsLoaded] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsLoaded(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen w-full overflow-hidden bg-abyss"
    >
      {/* Background Images */}
      <div className="absolute inset-0 flex">
        {/* Left Side - The Abyss */}
        <div 
          className="relative h-full overflow-hidden transition-all duration-300 ease-out"
          style={{ 
            width: `${30 + mousePosition.x * 40}%`,
          }}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700"
            style={{ 
              backgroundImage: 'url(/hero_abyss.jpg)',
              transform: `scale(1.1) translate(${(mousePosition.x - 0.5) * -20}px, ${(mousePosition.y - 0.5) * -20}px)`,
            }}
          />
          {/* Vignette overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-abyss/90" />
          <div className="absolute inset-0 bg-gradient-to-t from-abyss/80 via-transparent to-abyss/40" />
        </div>

        {/* Right Side - The Interface */}
        <div 
          className="relative h-full overflow-hidden transition-all duration-300 ease-out"
          style={{ 
            width: `${70 - mousePosition.x * 40}%`,
          }}
        >
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700"
            style={{ 
              backgroundImage: 'url(/hero_interface.jpg)',
              transform: `scale(1.1) translate(${(mousePosition.x - 0.5) * 20}px, ${(mousePosition.y - 0.5) * 20}px)`,
            }}
          />
          {/* Scanline effect */}
          <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,212,255,0.03)_50%)] bg-[length:100%_4px]" />
          {/* Vignette overlay */}
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-abyss/90" />
          <div className="absolute inset-0 bg-gradient-to-t from-abyss/80 via-transparent to-abyss/40" />
        </div>
      </div>

      {/* Central Divider Line */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-cyan/50 to-transparent transition-all duration-300"
        style={{ 
          left: `${30 + mousePosition.x * 40}%`,
          boxShadow: '0 0 20px rgba(0, 212, 255, 0.5), 0 0 40px rgba(0, 212, 255, 0.3)',
        }}
      />

      {/* Grain overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg className="w-full h-full">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch"/>
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)"/>
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        {/* PRONAC Badge */}
        <div 
          className={`mb-6 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          style={{ transitionDelay: '200ms' }}
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-cyan/10 border border-cyan/30">
            <span className="font-display text-xs text-cyan/60 tracking-wider">PRONAC</span>
            <span className="font-display text-lg font-bold text-cyan">2514086</span>
          </div>
        </div>

        {/* Title */}
        <div 
          className={`text-center transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          style={{ transitionDelay: '300ms' }}
        >
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-wider mb-4 animate-in">
            <span className="text-white drop-shadow-[0_0_30px_rgba(0,212,255,0.5)] inline-block hover:scale-105 transition-transform duration-300">
              EGO'S
            </span>
            <br />
            <span className="text-gradient-cyan inline-block hover:scale-105 transition-transform duration-300">
              ABYSS
            </span>
          </h1>
        </div>

        {/* Subtitle */}
        <div 
          className={`max-w-3xl text-center transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          style={{ transitionDelay: '500ms' }}
        >
          <p className="font-body text-lg sm:text-xl md:text-2xl text-gray-300 tracking-wide leading-relaxed">
            Uma jornada perturbadora e introspectiva nas profundezas da mente humana.
          </p>
        </div>

        {/* Sinopse */}
        <div 
          className={`max-w-4xl text-center mt-6 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          style={{ transitionDelay: '600ms' }}
        >
          <p className="font-body text-base sm:text-lg text-gray-400 leading-relaxed">
            Um jogo de <span className="text-alert">terror psicológico cooperativo assimétrico</span> para dois jogadores. 
            A &ldquo;Cobaia&rdquo; (Isaac) imerge em seu próprio subconsciente — um labirinto distorcido de segurança e pesquisa em ruínas, 
            inspirado nos círculos do <span className="text-white">Inferno de Dante</span>. 
            O &ldquo;Operador Ego&rdquo; (Liam) monitora a Cobaia de uma sala de controle externa, utilizando o sistema 
            <span className="text-cyan"> E.G.O.</span> para analisar dados psíquicos em tempo real. 
            Juntos, devem resolver quebra-cabeças complexos e libertar &ldquo;Fragmentos da Mente&rdquo; 
            necessários para a cura, enquanto evitam as &ldquo;Manifestações Psíquicas&rdquo; — 
            encarnações físicas dos medos e traumas mais profundos.
          </p>
        </div>

        {/* Genre Tags */}
        <div 
          className={`flex flex-wrap justify-center gap-3 mt-6 mb-8 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          style={{ transitionDelay: '700ms' }}
        >
          {['Terror Psicológico', 'Cooperativo Assimétrico', 'Puzzle', 'Exploração'].map((tag) => (
            <span 
              key={tag}
              className="px-4 py-1.5 rounded-full border border-cyan/30 bg-cyan/10 text-cyan text-sm font-body tracking-wider"
            >
              {tag.toUpperCase()}
            </span>
          ))}
        </div>

        {/* Decorative line */}
        <div 
          className={`w-24 h-0.5 bg-gradient-to-r from-transparent via-cyan to-transparent mb-8 transition-all duration-1000 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}
          style={{ transitionDelay: '800ms' }}
        />

        {/* CTAs */}
        <div 
          className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          style={{ transitionDelay: '900ms' }}
        >
          <Button
            size="lg"
            onClick={() => scrollToSection('conceito')}
            className="font-display text-sm tracking-wider bg-cyan/20 hover:bg-cyan/30 text-cyan border border-cyan/50 hover:border-cyan transition-all duration-300 hover:shadow-glow-cyan hover:scale-105 px-8 py-6"
          >
            <ChevronDown className="w-4 h-4 mr-2 animate-bounce" />
            CONHEÇA O PROJETO
          </Button>
          <Button
            size="lg"
            onClick={() => scrollToSection('investir')}
            className="font-display text-sm tracking-wider bg-alert/20 hover:bg-alert/30 text-alert border border-alert/50 hover:border-alert transition-all duration-300 hover:shadow-glow-red hover:scale-105 px-8 py-6"
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            INVISTA VIA LEI ROUANET
          </Button>
        </div>

        {/* Side Labels */}
        <div 
          className={`absolute left-8 top-1/2 -translate-y-1/2 hidden lg:block transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          style={{ transitionDelay: '1100ms' }}
        >
          <div className="flex flex-col items-center gap-2">
            <div className="w-px h-16 bg-gradient-to-b from-transparent via-alert/50 to-transparent" />
            <span className="font-display text-xs text-alert/70 tracking-widest rotate-180 [writing-mode:vertical-lr]">
              A COBAIA
            </span>
          </div>
        </div>

        <div 
          className={`absolute right-8 top-1/2 -translate-y-1/2 hidden lg:block transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          style={{ transitionDelay: '1100ms' }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="font-display text-xs text-cyan/70 tracking-widest rotate-180 [writing-mode:vertical-lr]">
              O OPERADOR
            </span>
            <div className="w-px h-16 bg-gradient-to-b from-transparent via-cyan/50 to-transparent" />
          </div>
        </div>

        {/* Scroll indicator */}
        <div 
          className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          style={{ transitionDelay: '1300ms' }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="font-body text-xs text-gray-500 tracking-widest">SCROLL</span>
            <div className="w-px h-8 bg-gradient-to-b from-cyan/50 to-transparent animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
