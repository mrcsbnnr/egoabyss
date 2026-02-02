import { useEffect, useRef, useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Brain, Users, Puzzle, Gamepad2, Eye, Radio, Target, Music, GraduationCap, Accessibility } from 'lucide-react';

const badges = [
  { text: 'TERROR PSICOLÓGICO', icon: Brain, color: 'alert' },
  { text: 'COOPERATIVO', icon: Users, color: 'cyan' },
  { text: 'PUZZLE', icon: Puzzle, color: 'cyan' },
  { text: 'EXPLORAÇÃO', icon: Gamepad2, color: 'cyan' },
];

const objetivos = [
  {
    icon: Gamepad2,
    title: 'Protótipo Jogável',
    description: 'Desenvolver protótipo (fatia vertical) com 2 salas completas: "O Véu da Sombra" e "O Espelho de Narciso"',
  },
  {
    icon: Users,
    title: 'Gameplay Assimétrico',
    description: 'Implementar sistemas de jogabilidade para os dois perfis: a "Cobaia" e o "Operador Ego"',
  },
  {
    icon: Music,
    title: 'Trilha Sonora',
    description: 'Compor e produzir 2 faixas da trilha sonora atmosférica original do jogo',
  },
  {
    icon: GraduationCap,
    title: 'Oficinas Gratuitas',
    description: 'Realizar 4 oficinas online gratuitas sobre Game Design Narrativo e Design Interativo',
  },
  {
    icon: Target,
    title: 'Distribuição Gratuita',
    description: 'Disponibilizar versão de demonstração do jogo em plataformas digitais de ampla circulação',
  },
  {
    icon: Accessibility,
    title: 'Acessibilidade',
    description: 'Implementar 4 medidas: legendas customizáveis, modo daltônico, controles remapeáveis e audiodescrição',
  },
];

export function Conceito() {
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="conceito"
      ref={sectionRef}
      className="relative min-h-screen w-full flex items-center justify-center py-24 px-4 sm:px-6 lg:px-8 bg-abyss"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-abyss via-abyss-light/20 to-abyss" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan/30 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div 
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <span className="font-display text-xs tracking-[0.3em] text-cyan/60 mb-4 block animate-pulse">
            HIGH CONCEPT
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 hover:scale-105 transition-transform duration-300">
            O <span className="text-gradient-cyan">CONCEITO</span>
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-cyan to-transparent mx-auto" />
        </div>

        {/* Main Text - High Concept */}
        <div 
          className={`text-center mb-12 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <p className="font-body text-xl sm:text-2xl md:text-3xl text-gray-300 leading-relaxed">
            <span className="text-white font-semibold">Ego&apos;s Abyss</span> é um jogo de{' '}
            <span className="text-alert">terror psicológico cooperativo assimétrico</span> onde um jogador se aventura nas profundezas de seu próprio{' '}
            <span className="text-cyan">subconsciente</span> — uma representação distorcida de um complexo de segurança inspirada nos{' '}
            <span className="text-white font-semibold">círculos do Inferno de Dante</span> — para confrontar traumas e medos, enquanto seu amigo, operando o{' '}
            <span className="text-cyan font-semibold">Sistema E.G.O.</span>, o monitora em tempo real através de dados psicológicos e físicos, guiando-o e protegendo-o das manifestações que tentam prender a mente em seu próprio inferno.
          </p>
        </div>

        {/* Badges */}
        <div 
          className={`flex flex-wrap justify-center gap-4 mb-16 transition-all duration-700 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <div
                key={badge.text}
                className={`group relative transition-all duration-500`}
                style={{ transitionDelay: `${400 + index * 100}ms` }}
              >
                <Badge 
                  variant="outline" 
                  className={`
                    font-display text-xs tracking-wider px-6 py-3 
                    border-${badge.color}/50 text-${badge.color}
                    hover:bg-${badge.color}/10 hover:border-${badge.color}
                    transition-all duration-300 cursor-default
                    ${badge.color === 'cyan' ? 'hover:shadow-glow-cyan' : 'hover:shadow-glow-red'}
                  `}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {badge.text}
                </Badge>
              </div>
            );
          })}
        </div>

        {/* Objetivos Específicos */}
        <div 
          className={`mb-16 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <h3 className="font-display text-xl font-bold text-white text-center mb-8">
            OBJETIVOS <span className="text-cyan">ESPECÍFICOS</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {objetivos.map((obj, idx) => {
              const Icon = obj.icon;
              return (
                <div 
                  key={obj.title}
                  className="p-4 rounded-lg bg-abyss-light/50 border border-white/10 hover:border-cyan/30 transition-all duration-300 group hover:scale-105 hover:shadow-lg hover:shadow-cyan/20"
                  style={{ 
                    animationDelay: `${idx * 100}ms`,
                    animation: isVisible ? 'fadeInUp 0.5s ease-out forwards' : 'none'
                  }}
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-cyan/10 group-hover:bg-cyan/20 transition-all duration-300 group-hover:scale-110">
                      <Icon className="w-5 h-5 text-cyan" />
                    </div>
                    <div>
                      <h4 className="font-display text-sm font-bold text-white mb-1">{obj.title}</h4>
                      <p className="font-body text-xs text-gray-400">{obj.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Two Columns - The Experience */}
        <div 
          className={`grid md:grid-cols-2 gap-8 mb-16 transition-all duration-700 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="p-6 rounded-lg bg-abyss-light/50 border border-alert/30 hover:border-alert hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-alert/20 group">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-lg bg-alert/20 group-hover:bg-alert/30 transition-all duration-300 group-hover:scale-110">
                <Eye className="w-6 h-6 text-alert" />
              </div>
              <h3 className="font-display text-xl font-bold text-white">A Cobaia</h3>
            </div>
            <p className="font-body text-gray-300 leading-relaxed">
              Mergulhe em primeira pessoa em um ambiente 3D imersivo e atmosférico. 
              Navegue por um complexo de instalações de segurança em ruínas que representa 
              sua própria mente — paredes rachadas, luzes tremeluzentes, servidores falhos 
              e um ar palpável de abandono e paranoia.
            </p>
          </div>

          <div className="p-6 rounded-lg bg-abyss-light/50 border border-cyan/30 hover:border-cyan hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-cyan/20 group">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-lg bg-cyan/20 group-hover:bg-cyan/30 transition-all duration-300 group-hover:scale-110">
                <Radio className="w-6 h-6 text-cyan" />
              </div>
              <h3 className="font-display text-xl font-bold text-white">O Operador Ego</h3>
            </div>
            <p className="font-body text-gray-300 leading-relaxed">
              Opere o <span className="text-cyan font-semibold">Sistema E.G.O.</span> — 
              Environmental Guidance Overview — uma interface complexa de monitoramento 
              com múltiplas câmeras, mapas holográficos, dados psíquicos em tempo real 
              e controle ambiental limitado para guiar e proteger sua parceira.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div 
          className={`grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-700 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          {[
            { value: '2', label: 'Jogadores', sublabel: 'Cooperativo Assimétrico' },
            { value: '9', label: 'Salas', sublabel: 'Do Labirinto Mental' },
            { value: '20-30', label: 'Minutos', sublabel: 'Duração da Demo' },
            { value: '16+', label: 'Classificação', sublabel: 'Indicativa' },
          ].map((stat, index) => (
            <div 
              key={stat.label}
              className="text-center group"
              style={{ transitionDelay: `${700 + index * 100}ms` }}
            >
              <div className="font-display text-4xl sm:text-5xl font-bold text-cyan mb-2 group-hover:text-shadow-glow transition-all duration-300">
                {stat.value}
              </div>
              <div className="font-body text-sm text-white tracking-wider">
                {stat.label}
              </div>
              <div className="font-body text-xs text-gray-500">
                {stat.sublabel}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
