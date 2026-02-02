import { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { GraduationCap, Accessibility, Globe, Heart, BookOpen, Users, Gamepad2, Code, Volume2, Eye, Hand, FileText } from 'lucide-react';

interface ImpactCard {
  title: string;
  description: string;
  icon: React.ElementType;
  stats?: string;
  details: string[];
}

const impactCards: ImpactCard[] = [
  {
    title: 'Oficinas Gratuitas',
    description: 'Formação profissional em Game Design Narrativo e Design Interativo para estudantes e interessados em desenvolvimento de jogos.',
    icon: GraduationCap,
    stats: '20h',
    details: [
      '4 oficinas síncronas online',
      'Prioridade para escolas públicas',
      'Certificação para participantes',
      'Material didático exclusivo',
    ],
  },
  {
    title: 'Acessibilidade',
    description: 'Compromisso com a inclusão e democratização do acesso à cultura digital para todos os públicos.',
    icon: Accessibility,
    details: [
      'Tradução em LIBRAS nas oficinas',
      'Legendas customizáveis no jogo',
      'Modo para daltônicos',
      'Controles remapeáveis',
      'Audiodescrição completa',
    ],
  },
  {
    title: 'Democratização',
    description: 'Distribuição gratuita do protótipo e conteúdos educacionais para fomentar a cultura digital brasileira.',
    icon: Globe,
    details: [
      'Protótipo gratuito em Steam e itch.io',
      'Meta: 2.000 downloads em 6 meses',
      'Gravações das oficinas liberadas',
      'Código-fonte documentado',
    ],
  },
];

const acessibilidadeMedidas = [
  {
    icon: Volume2,
    title: 'Legendas Customizáveis',
    description: 'Legendas em PT-BR para todas as falas e sons ambientes, com opções de tamanho e contraste ajustáveis.',
  },
  {
    icon: Eye,
    title: 'Modo para Daltônicos',
    description: 'Filtros e ajustes de interface que alteram a paleta de cores para diferentes tipos de daltonismo.',
  },
  {
    icon: Hand,
    title: 'Controles Remapeáveis',
    description: 'Reconfiguração livre do mapeamento de teclas e botões para periféricos adaptados.',
  },
  {
    icon: FileText,
    title: 'Audiodescrição',
    description: 'Narração descritiva em PT-BR para cenas não interativas, introdução e tutoriais.',
  },
];

export function Impacto() {
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
      id="impacto"
      ref={sectionRef}
      className="relative min-h-screen w-full py-24 px-4 sm:px-6 lg:px-8 bg-abyss"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-abyss via-abyss-light/10 to-abyss" />
        {/* Heart pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, rgba(0, 212, 255, 0.3) 1px, transparent 1px),
                              radial-gradient(circle at 75% 75%, rgba(255, 59, 59, 0.3) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div 
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <span className="font-display text-xs tracking-[0.3em] text-cyan/60 mb-4 block">
            LEI ROUANET
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            CULTURAL <span className="text-gradient-cyan">IMPACT</span>
          </h2>
          <p className="font-body text-lg text-gray-400 max-w-3xl mx-auto">
            Project approved by the Federal Law for Cultural Incentive (PRONAC 2514086) 
            with a commitment to democratize access to digital culture and train new 
            professionals for the Brazilian game industry.
          </p>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-cyan to-transparent mx-auto mt-6" />
        </div>

        {/* PRONAC Badge */}
        <div 
          className={`
            flex justify-center mb-12 transition-all duration-700 delay-200
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          `}
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-lg bg-gradient-to-r from-cyan/20 to-alert/20 border border-cyan/30">
            <BookOpen className="w-6 h-6 text-cyan" />
            <div className="text-center">
              <span className="font-display text-xs text-cyan/60 tracking-wider block">PRONAC</span>
              <span className="font-display text-2xl font-bold text-white">2514086</span>
            </div>
            <Heart className="w-6 h-6 text-alert" />
          </div>
        </div>

        {/* Impact Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {impactCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className={`
                  transition-all duration-700
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}
                `}
                style={{ transitionDelay: `${300 + index * 150}ms` }}
              >
                <Card className="h-full p-6 bg-abyss-light/50 border-white/10 hover:border-cyan/50 transition-all duration-300 hover:shadow-glow-cyan group">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-cyan/20 group-hover:bg-cyan/30 transition-colors">
                      <Icon className="w-6 h-6 text-cyan" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold text-white mb-1">
                        {card.title}
                      </h3>
                      {card.stats && (
                        <span className="font-display text-2xl font-bold text-cyan">
                          {card.stats}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <p className="font-body text-gray-300 text-sm leading-relaxed mb-4">
                    {card.description}
                  </p>

                  <ul className="space-y-2">
                    {card.details.map((detail, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-cyan/50" />
                        <span className="font-body text-xs text-gray-400">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Medidas de Acessibilidade */}
        <div 
          className={`
            mb-16 transition-all duration-700 delay-500
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          `}
        >
          <h3 className="font-display text-xl font-bold text-white text-center mb-8">
            MEDIDAS DE <span className="text-cyan">ACESSIBILIDADE</span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {acessibilidadeMedidas.map((medida) => {
              const Icon = medida.icon;
              return (
                <div 
                  key={medida.title}
                  className="p-4 rounded-lg bg-abyss-light/50 border border-white/10 hover:border-cyan/30 transition-all duration-300"
                >
                  <div className="p-3 rounded-lg bg-cyan/20 w-fit mb-3">
                    <Icon className="w-5 h-5 text-cyan" />
                  </div>
                  <h4 className="font-display text-sm font-bold text-white mb-2">{medida.title}</h4>
                  <p className="font-body text-xs text-gray-400">{medida.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Lei Rouanet Info */}
        <div 
          className={`
            transition-all duration-700 delay-600
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          `}
        >
          <Card className="p-8 bg-gradient-to-br from-abyss-light/80 to-abyss-light/40 border-cyan/30">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-display text-xl font-bold text-white mb-4 flex items-center gap-3">
                  <Users className="w-5 h-5 text-cyan" />
                  Como Funciona a Lei Rouanet
                </h3>
                <p className="font-body text-gray-300 leading-relaxed mb-4">
                  A Lei Federal de Incentivo à Cultura permite que empresas e pessoas físicas 
                  destinem parte de seus impostos de renda para projetos culturais aprovados 
                  pelo Ministério da Cultura. Seu investimento se transforma em cultura, 
                  educação e desenvolvimento artístico.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-full bg-cyan/20 flex items-center justify-center">
                      <span className="font-display text-sm text-cyan">4%</span>
                    </span>
                    <span className="font-body text-sm text-gray-300">
                      <strong className="text-white">Pessoas Jurídicas:</strong> Empresas tributadas com base no lucro real
                    </span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-full bg-cyan/20 flex items-center justify-center">
                      <span className="font-display text-sm text-cyan">6%</span>
                    </span>
                    <span className="font-body text-sm text-gray-300">
                      <strong className="text-white">Pessoas Físicas:</strong> Declarantes do Imposto de Renda modelo completo
                    </span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col justify-center">
                <div className="p-6 rounded-lg bg-abyss/50 border border-white/10">
                  <p className="font-body text-sm text-gray-400 mb-4">
                    Ao investir neste projeto cultural, você:
                  </p>
                  <ul className="space-y-3">
                    {[
                      'Transforma imposto em cultura e educação',
                      'Apoia a formação de novos talentos',
                      'Democratiza o acesso aos games independentes',
                      'Fortalece a indústria criativa brasileira',
                      'Contribui para a diversidade cultural',
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-alert" />
                        <span className="font-body text-sm text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Target Audience */}
        <div 
          className={`
            mt-12 transition-all duration-700 delay-700
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          `}
        >
          <Card className="p-6 bg-abyss-light/30 border-white/10">
            <h3 className="font-display text-lg font-bold text-white mb-4 text-center">
              PÚBLICO-ALVO DO PROJETO
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: Gamepad2, label: 'Gamers', desc: 'Narrativas profundas' },
                { icon: Users, label: 'Estudantes', desc: 'Formação técnica' },
                { icon: Code, label: 'Desenvolvedores', desc: 'Troca de conhecimento' },
                { icon: Heart, label: 'Comunidade', desc: 'Acesso à cultura' },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex flex-col items-center gap-2 p-4 rounded-lg bg-abyss/50">
                    <Icon className="w-6 h-6 text-cyan" />
                    <span className="font-body text-sm text-white text-center">{item.label}</span>
                    <span className="font-body text-xs text-gray-500 text-center">{item.desc}</span>
                  </div>
                );
              })}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
