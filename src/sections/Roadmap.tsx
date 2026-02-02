import { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Target, Rocket, Cpu, Calendar } from 'lucide-react';

interface RoadmapPhase {
  title: string;
  subtitle: string;
  description: string;
  status: 'completed' | 'active' | 'pending';
  icon: React.ElementType;
  deliverables?: string[];
  period?: string;
}

const phases: RoadmapPhase[] = [
  {
    title: 'Pré-Produção',
    subtitle: 'Planejamento e Design',
    description: 'Revisão e fechamento do GDD, finalização do roteiro detalhado, criação da arte conceitual final e prototipagem inicial (greyboxing) das mecânicas.',
    status: 'active',
    icon: Target,
    deliverables: ['GDD Revisado', 'Arte Conceitual Final', 'Greyboxing', 'Roteiro Detalhado'],
    period: 'Jan/2026 - Mar/2026 (3 meses)',
  },
  {
    title: 'Produção / Execução',
    subtitle: 'Desenvolvimento Principal',
    description: 'Etapa principal de desenvolvimento. Contratação da equipe, modelagem 3D, programação dos sistemas, implementação da IA das Manifestações, trilha sonora e testes internos.',
    status: 'pending',
    icon: Rocket,
    deliverables: ['2 Salas Completas', 'Sistema E.G.O.', 'IA das Manifestações', '2 Faixas de Trilha Sonora'],
    period: 'Abr/2026 - Mar/2027 (12 meses)',
  },
  {
    title: 'Pós-Produção',
    subtitle: 'Polimento e Entrega',
    description: 'Fase intensiva de correção de bugs (QA), implementação das medidas de acessibilidade, realização das 4 oficinas, publicação do protótipo e preparação da prestação de contas.',
    status: 'pending',
    icon: Cpu,
    deliverables: ['QA Completo', 'Acessibilidade Implementada', '4 Oficinas Realizadas', 'Protótipo Publicado'],
    period: 'Abr/2027 - Jun/2027 (3 meses)',
  },
];

export function Roadmap() {
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
      id="roadmap"
      ref={sectionRef}
      className="relative min-h-screen w-full py-24 px-4 sm:px-6 lg:px-8 bg-abyss"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-abyss via-abyss-light/10 to-abyss" />
        {/* Constellation pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(0, 212, 255, 0.8) 1px, transparent 1px)`,
            backgroundSize: '30px 30px',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Section Header */}
        <div 
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <span className="font-display text-xs tracking-[0.3em] text-cyan/60 mb-4 block">
            CRONOGRAMA
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            ROADMAP <span className="text-gradient-cyan">& STATUS</span>
          </h2>
          <p className="font-body text-lg text-gray-400 max-w-2xl mx-auto">
            Follow the project development over 18 months 
            of the journey to bring Ego&apos;s Abyss to reality.
          </p>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-cyan to-transparent mx-auto mt-6" />
        </div>

        {/* Period Info */}
        <div 
          className={`
            mb-12 transition-all duration-700 delay-200
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          `}
        >
          <Card className="p-6 bg-gradient-to-br from-cyan/10 to-abyss-light/50 border-cyan/30">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <div className="p-4 rounded-full bg-cyan/20 animate-pulse-glow">
                <Calendar className="w-8 h-8 text-cyan" />
              </div>
              <div className="text-center sm:text-left">
                <span className="font-display text-xs text-cyan/60 tracking-wider block mb-1">
                  PERÍODO DE EXECUÇÃO
                </span>
                <h3 className="font-display text-2xl font-bold text-white mb-2">
                  18 Meses de Desenvolvimento
                </h3>
                <p className="font-body text-gray-300">
                  01/01/2026 a 30/06/2027
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-cyan/50 via-cyan/30 to-transparent hidden sm:block" />

          {/* Phases */}
          <div className="space-y-6">
            {phases.map((phase, index) => {
              const Icon = phase.icon;
              const isActive = phase.status === 'active';

              return (
                <div
                  key={phase.title}
                  className={`
                    relative transition-all duration-700
                    ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}
                  `}
                  style={{ transitionDelay: `${300 + index * 150}ms` }}
                >
                  <div className="flex items-start gap-6">
                    {/* Node */}
                    <div className="relative flex-shrink-0 hidden sm:block">
                      <div 
                        className={`
                          w-16 h-16 rounded-full flex items-center justify-center
                          transition-all duration-300
                          ${isActive 
                            ? 'bg-cyan/30 border-2 border-cyan animate-pulse-glow'
                            : 'bg-abyss-light border-2 border-white/20'
                          }
                        `}
                      >
                        <Icon className={`w-6 h-6 ${isActive ? 'text-cyan' : 'text-gray-500'}`} />
                      </div>
                      {/* Connection dot */}
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-cyan" />
                    </div>

                    {/* Content */}
                    <Card className={`
                      flex-1 p-5 transition-all duration-300
                      ${isActive 
                        ? 'bg-abyss-light/80 border-cyan/50 shadow-glow-cyan' 
                        : 'bg-abyss-light/40 border-white/10 hover:border-cyan/30'
                      }
                    `}>
                      <div className="flex items-start gap-4">
                        <div className={`
                          p-2 rounded-lg sm:hidden flex-shrink-0
                          ${isActive ? 'bg-cyan/20' : 'bg-white/5'}
                        `}>
                          <Icon className={`w-4 h-4 ${isActive ? 'text-cyan' : 'text-gray-500'}`} />
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-3 mb-2">
                            <h3 className="font-display text-lg font-bold text-white">
                              {phase.title}
                            </h3>
                            <span className="font-body text-xs text-cyan/60">{phase.subtitle}</span>
                          </div>
                          
                          {phase.period && (
                            <span className="inline-block px-2 py-0.5 rounded bg-cyan/10 text-cyan text-xs font-display tracking-wider mb-3">
                              {phase.period}
                            </span>
                          )}
                          
                          <span className={`
                            ml-2 px-2 py-0.5 rounded text-xs font-display tracking-wider
                            ${isActive 
                              ? 'bg-alert/20 text-alert'
                              : 'bg-white/10 text-gray-500'
                            }
                          `}>
                            {isActive ? 'EM ANDAMENTO' : 'PENDENTE'}
                          </span>
                          
                          <p className="font-body text-sm text-gray-300 leading-relaxed mb-3 mt-2">
                            {phase.description}
                          </p>
                          
                          {phase.deliverables && (
                            <div className="flex flex-wrap gap-2">
                              {phase.deliverables.map((deliverable, i) => (
                                <span 
                                  key={i}
                                  className="px-2 py-1 rounded bg-cyan/5 text-cyan/70 text-xs font-body"
                                >
                                  {deliverable}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Platform info */}
        <div 
          className={`
            mt-12 text-center transition-all duration-700 delay-700
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          `}
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-6 px-8 py-4 rounded-lg bg-abyss-light/30 border border-white/10">
            <div className="text-center">
              <span className="font-display text-xs text-gray-500 block mb-1">PLATAFORMA</span>
              <span className="font-body text-white">PC (Windows)</span>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div className="text-center">
              <span className="font-display text-xs text-gray-500 block mb-1">MOTOR</span>
              <span className="font-body text-white">Unity</span>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div className="text-center">
              <span className="font-display text-xs text-gray-500 block mb-1">DISTRIBUIÇÃO</span>
              <span className="font-body text-white">Steam / itch.io</span>
            </div>
            <div className="w-px h-8 bg-white/10" />
            <div className="text-center">
              <span className="font-display text-xs text-gray-500 block mb-1">DURAÇÃO</span>
              <span className="font-body text-cyan">20-30 min</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
