import { useEffect, useRef, useState } from 'react';
import { UserRound, Microscope, Brain, Activity } from 'lucide-react';

interface TimelineItem {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ElementType;
  details: string[];
  quote?: string;
}

const timelineItems: TimelineItem[] = [
  {
    title: 'Projeto Onirium',
    subtitle: 'A Tecnologia Experimental',
    description: 'Uma tecnologia revolucionária desenvolvida pelo Dr. Dorian Krauss que permite transferir a consciência de um indivíduo para uma representação digitalizada de sua própria psique. O objetivo: uma terapia revolucionária onde pacientes enfrentam e "consertam" seus traumas diretamente na fonte.',
    icon: Microscope,
    details: [
      'Tecnologia de estimulação neural avançada',
      'Interface de controle: Sistema E.G.O.',
      'Representação visual da psique em tempo real',
      'Protocolos de segurança experimental',
    ],
  },
  {
    title: 'Dr. Dorian Krauss',
    subtitle: 'O Criador',
    description: 'Psiquiatra e neurocientista brilhante, mas de ética questionável. Dedicou sua vida a desvendar os mistérios da mente humana. Sua presença é mais conceitual — a "autoridade" por trás do inferno autoimposto. Suas gravações revelam teorias e, talvez, sua própria megalomania.',
    icon: UserRound,
    details: [
      'Pioneiro em mapeamento neural',
      'Criador do Projeto Onirium',
      'Métodos controversos de pesquisa',
      'Voz quase robótica, perturbadoramente calma',
    ],
    quote: 'Esta é, de fato, a representação visual e tangível do seu próprio subconsciente.',
  },
  {
    title: 'Isaac',
    subtitle: 'A Cobaia / O Protagonista',
    description: 'Indivíduo que sofre há muito tempo com problemas psicológicos profundos e persistentes, que nenhuma terapia convencional conseguiu aliviar. Desesperado por uma solução, aceitou o convite para ser a cobaia do Projeto Onirium, confiando plenamente em Liam.',
    icon: Brain,
    details: [
      'Sofre com problemas psicológicos persistentes',
      'Determinado a encontrar uma cura',
      'Facilmente sobrecarregado pelo terror psicológico',
      'Representa o aspecto "ID" e "Ego" imerso',
    ],
  },
  {
    title: 'Liam',
    subtitle: 'O Operador Ego / O Monitor',
    description: 'Amigo próximo de Isaac e assistente do Dr. Krauss. Acompanhou o sofrimento de Isaac de perto e, em um ato de esperança e desespero, recomendou-o como voluntário. Opera o sistema E.G.O. em uma sala de controle, monitorando sinais vitais e fluxo de dados psíquicos.',
    icon: Activity,
    details: [
      'Calmo, lógico e focado sob pressão',
      'Crescente preocupação à medida que a situação piora',
      'Conexão pessoal profunda com Isaac',
      'Representa o "Ego" e "Superego" que traz ordem',
    ],
  },
];

export function Mundo() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
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
      id="mundo"
      ref={sectionRef}
      className="relative min-h-screen w-full py-24 px-4 sm:px-6 lg:px-8 bg-abyss"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-abyss via-abyss-light/10 to-abyss" />
        {/* Subtle radial gradient */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(0, 212, 255, 0.05) 0%, transparent 70%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div 
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <span className="font-display text-xs tracking-[0.3em] text-cyan/60 mb-4 block animate-pulse">
            NARRATIVA
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 hover:scale-105 transition-transform duration-300">
            O <span className="text-gradient-cyan">MUNDO</span>
          </h2>
          <p className="font-body text-lg text-gray-400 max-w-3xl mx-auto">
            O jogo se desenrola inteiramente dentro da mente do protagonista, manifestada visualmente 
            como um complexo de instalações de segurança e pesquisa em ruínas — 
            externamente organizado, mas internamente caótico, cheio de bloqueios, memórias e medos.
          </p>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-cyan to-transparent mx-auto mt-6" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Central line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyan/30 to-transparent hidden md:block" />

          {/* Timeline items */}
          <div className="space-y-12 md:space-y-0">
            {timelineItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeIndex === index;
              const isLeft = index % 2 === 0;

              return (
                <div 
                  key={item.title}
                  className={`
                    relative md:grid md:grid-cols-2 md:gap-8 transition-all duration-700
                    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                  `}
                  style={{ transitionDelay: `${index * 200}ms` }}
                  onMouseEnter={() => setActiveIndex(index)}
                >
                  {/* Content side */}
                  <div 
                    className={`
                      ${isLeft ? 'md:text-right md:pr-12' : 'md:col-start-2 md:pl-12'}
                      mb-8 md:mb-0
                    `}
                  >
                    <div 
                      className={`
                        group cursor-pointer p-6 rounded-lg border transition-all duration-300
                        ${isActive 
                          ? 'bg-abyss-light/60 border-cyan/50 shadow-glow-cyan' 
                          : 'bg-abyss-light/30 border-white/10 hover:border-cyan/30'
                        }
                      `}
                    >
                      <div className={`flex items-center gap-3 mb-4 ${isLeft ? 'md:flex-row-reverse' : ''}`}>
                        <div className={`
                          p-3 rounded-lg transition-all duration-300
                          ${isActive ? 'bg-cyan/20' : 'bg-white/5'}
                        `}>
                          <Icon className={`w-6 h-6 ${isActive ? 'text-cyan' : 'text-gray-400'}`} />
                        </div>
                        <div className={isLeft ? 'md:text-right' : ''}>
                          <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                            {item.title}
                          </h3>
                          <span className="font-body text-sm text-cyan/60">{item.subtitle}</span>
                        </div>
                      </div>
                      
                      <p className="font-body text-gray-300 leading-relaxed mb-4">
                        {item.description}
                      </p>

                      <ul className={`space-y-2 ${isLeft ? 'md:text-right' : ''}`}>
                        {item.details.map((detail, i) => (
                          <li 
                            key={i}
                            className={`
                              font-body text-sm text-gray-400 flex items-center gap-2
                              ${isLeft ? 'md:flex-row-reverse md:justify-end' : ''}
                            `}
                          >
                            <span className="w-1 h-1 rounded-full bg-cyan/50" />
                            {detail}
                          </li>
                        ))}
                      </ul>

                      {item.quote && (
                        <blockquote className={`mt-4 pt-4 border-t border-white/10 ${isLeft ? 'md:text-right' : ''}`}>
                          <p className="font-body text-sm text-cyan/70 italic">&ldquo;{item.quote}&rdquo;</p>
                        </blockquote>
                      )}
                    </div>
                  </div>

                  {/* Center node */}
                  <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center justify-center">
                    <div 
                      className={`
                        w-4 h-4 rounded-full border-2 transition-all duration-300
                        ${isActive 
                          ? 'bg-cyan border-cyan scale-150 shadow-glow-cyan' 
                          : 'bg-abyss border-cyan/50'
                        }
                      `}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mission Quote */}
        <div 
          className={`
            mt-16 text-center transition-all duration-700 delay-800
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          `}
        >
          <Card className="p-8 bg-gradient-to-br from-cyan/10 to-abyss-light/50 border-cyan/30">
            <blockquote className="relative">
              <div className="absolute -top-2 -left-2 text-4xl text-cyan/30 font-serif">&ldquo;</div>
              <p className="font-body text-lg sm:text-xl text-gray-300 italic max-w-3xl mx-auto px-8 leading-relaxed">
                As salas são manifestações do seu próprio labirinto mental. 
                Sua missão é navegar por esse inferno pessoal. Cada sala que você 
                &ldquo;limpa&rdquo; ou &ldquo;compreende&rdquo;, resolvendo seus quebra-cabeças 
                e confrontando suas Manifestações Psíquicas, libera um &ldquo;Fragmento da Mente&rdquo; 
                — um insight, uma memória-chave ou uma ferramenta psicológica crucial.
              </p>
              <div className="absolute -bottom-4 -right-2 text-4xl text-cyan/30 font-serif">&rdquo;</div>
            </blockquote>
            <p className="font-display text-sm text-cyan/60 mt-6 tracking-wider">
              — LIAM, OPERADOR EGO
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}

import { Card } from '@/components/ui/card';
