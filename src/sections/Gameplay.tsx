import { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Eye, Radio, Shield, Activity, Camera, Map, Terminal } from 'lucide-react';

interface CardData {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  icon: React.ElementType;
  color: string;
  features: string[];
  abilities: string[];
}

const cards: CardData[] = [
  {
    title: 'ISAAC',
    subtitle: 'A Cobaia',
    description: 'Você é Isaac, um indivíduo que sofre há muito tempo com problemas psicológicos profundos. Desesperado por uma solução, aceitou ser a cobaia do Projeto Onirium. Agora sua consciência foi transferida para uma representação digitalizada de sua própria psique.',
    image: '/isaac_card.jpg',
    icon: Eye,
    color: 'alert',
    features: [
      'Visão em primeira pessoa (FPS) imersiva',
      'Exploração de ambientes 3D detalhados',
      'Resolução de puzzles físicos',
      'Fuga de Manifestações Psíquicas',
    ],
    abilities: [
      'Posicionar Câmeras Auxiliares (até 4 por sessão)',
      'Interagir com painéis e objetos',
      'Comunicação constante com o Operador',
      'Sobrevivência através de furtividade',
    ],
  },
  {
    title: 'LIAM',
    subtitle: 'O Operador Ego',
    description: 'Você é Liam, amigo próximo de Isaac e assistente do Dr. Krauss. Opera o Sistema E.G.O. — Environmental Guidance Overview — em uma sala de controle, monitorando os sinais vitais e o fluxo de dados psíquicos de Isaac em tempo real.',
    image: '/liam_card.jpg',
    icon: Radio,
    color: 'cyan',
    features: [
      'Interface complexa rica em dados',
      'Múltiplas visões de câmeras',
      'Mapa holográfico interativo 2D',
      'Análise de dados psíquicos e físicos',
    ],
    abilities: [
      'PPU: Feed de vídeo em tempo real da cobaia',
      'VMS: Central de controle de câmeras',
      'DSM/PSM: Dados físicos e psíquicos',
      'ENV-CTRL: Controle ambiental limitado',
    ],
  },
];

function GameplayCard({ card, index, isVisible }: { card: CardData; index: number; isVisible: boolean }) {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setMousePosition({ x, y });
    }
  };

  const Icon = card.icon;

  return (
    <div
      ref={cardRef}
      className={`
        relative transition-all duration-700
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}
      `}
      style={{ 
        transitionDelay: `${index * 200}ms`,
        perspective: '1000px',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePosition({ x: 0, y: 0 });
      }}
      onMouseMove={handleMouseMove}
    >
      <Card
        className={`
          relative overflow-hidden cursor-pointer
          bg-abyss-light/80 border-${card.color}/30
          transition-all duration-300
          ${isHovered ? `border-${card.color} shadow-glow-${card.color}` : ''}
        `}
        style={{
          transform: isHovered 
            ? `rotateY(${mousePosition.x * 10}deg) rotateX(${-mousePosition.y * 10}deg) scale(1.02)` 
            : `rotateY(${index === 0 ? -5 : 5}deg)`,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Image */}
        <div className="relative h-64 sm:h-80 overflow-hidden">
          <img
            src={card.image}
            alt={card.title}
            className="w-full h-full object-cover transition-transform duration-500"
            style={{
              transform: isHovered ? 'scale(1.1)' : 'scale(1)',
            }}
          />
          {/* Overlay gradient */}
          <div className={`absolute inset-0 bg-gradient-to-t from-abyss via-abyss/50 to-transparent`} />
          
          {/* Holographic sweep effect */}
          <div 
            className={`absolute inset-0 bg-gradient-to-b from-transparent via-${card.color}/20 to-transparent transition-transform duration-1000`}
            style={{
              transform: isHovered ? 'translateY(-100%)' : 'translateY(100%)',
            }}
          />

          {/* Title overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className={`p-2 rounded-lg bg-${card.color}/20`}>
                <Icon className={`w-5 h-5 text-${card.color}`} />
              </div>
              <span className={`font-display text-xs tracking-wider text-${card.color}`}>
                {card.subtitle.toUpperCase()}
              </span>
            </div>
            <h3 className="font-display text-3xl sm:text-4xl font-bold text-white">
              {card.title}
            </h3>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <p className="font-body text-gray-300 text-lg leading-relaxed mb-6">
            {card.description}
          </p>

          {/* Features */}
          <div className="mb-6">
            <h4 className="font-display text-sm text-white/60 tracking-wider mb-3">EXPERIÊNCIA</h4>
            <div className="space-y-2">
              {card.features.map((feature, i) => (
                <div 
                  key={feature}
                  className={`flex items-center gap-3 transition-all duration-300`}
                  style={{ transitionDelay: `${i * 50}ms` }}
                >
                  <div className={`w-1.5 h-1.5 rounded-full bg-${card.color}`} />
                  <span className="font-body text-sm text-gray-400">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Abilities */}
          <div>
            <h4 className="font-display text-sm text-white/60 tracking-wider mb-3">HABILIDADES</h4>
            <div className="space-y-2">
              {card.abilities.map((ability, i) => (
                <div 
                  key={ability}
                  className={`flex items-center gap-3 transition-all duration-300`}
                  style={{ transitionDelay: `${i * 50}ms` }}
                >
                  <div className={`w-1.5 h-1.5 rounded-full bg-${card.color}`} />
                  <span className="font-body text-sm text-gray-400">{ability}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Corner decorations */}
        <div className={`absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-${card.color}/50`} />
        <div className={`absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-${card.color}/50`} />
        <div className={`absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-${card.color}/50`} />
        <div className={`absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-${card.color}/50`} />
      </Card>
    </div>
  );
}

export function Gameplay() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="gameplay"
      ref={sectionRef}
      className="relative min-h-screen w-full py-24 px-4 sm:px-6 lg:px-8 bg-abyss"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-abyss via-abyss-light/10 to-abyss" />
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 212, 255, 0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 212, 255, 0.5) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div 
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <span className="font-display text-xs tracking-[0.3em] text-cyan/60 mb-4 block">
            GAMEPLAY
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            COOPERAÇÃO <span className="text-gradient-cyan">ASSIMÉTRICA</span>
          </h2>
          <p className="font-body text-lg text-gray-400 max-w-3xl mx-auto">
            O coração de Ego&apos;s Abyss. Dois jogadores, visões complementares, 
            habilidades distintas. A comunicação constante e o trabalho em equipe 
            são absolutamente essenciais para a sobrevivência.
          </p>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-cyan to-transparent mx-auto mt-6" />
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {cards.map((card, index) => (
            <GameplayCard 
              key={card.title} 
              card={card} 
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* System E.G.O. Modules */}
        <div 
          className={`
            mt-16 transition-all duration-700 delay-500
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          `}
        >
          <h3 className="font-display text-xl font-bold text-white text-center mb-8">
            MÓDULOS DO <span className="text-cyan">SISTEMA E.G.O.</span>
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: 'PPU', desc: 'Projeção Perceptiva', icon: Camera },
              { name: 'VMS', desc: 'Monitoramento Visual', icon: Activity },
              { name: 'NAV-OS', desc: 'Navegação Holográfica', icon: Map },
              { name: 'CMD', desc: 'Manipulação Cognitiva', icon: Terminal },
            ].map((module) => {
              const Icon = module.icon;
              return (
                <div 
                  key={module.name}
                  className="p-4 rounded-lg bg-abyss-light/50 border border-cyan/30 hover:border-cyan hover:shadow-glow-cyan transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <Icon className="w-5 h-5 text-cyan" />
                    <span className="font-display text-sm font-bold text-white">{module.name}</span>
                  </div>
                  <p className="font-body text-xs text-gray-400">{module.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Connection indicator */}
        <div 
          className={`
            flex justify-center mt-12 transition-all duration-700 delay-500
            ${isVisible ? 'opacity-100' : 'opacity-0'}
          `}
        >
          <div className="flex items-center gap-4">
            <Activity className="w-5 h-5 text-alert" />
            <div className="w-32 h-px bg-gradient-to-r from-alert/50 via-cyan/50 to-cyan/50" />
            <Shield className="w-5 h-5 text-cyan" />
          </div>
        </div>
      </div>
    </section>
  );
}
