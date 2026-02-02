import { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { User, Briefcase, Palette, Box, Music, Code, GraduationCap, Award, Cpu, Scale } from 'lucide-react';

interface TeamMember {
  name: string;
  role: string;
  description: string;
  credentials: string[];
  image?: string;
  icon: React.ElementType;
  isLeader?: boolean;
}

const teamMembers: TeamMember[] = [
  {
    name: 'Marcos Maciel Candido',
    role: 'Líder do Projeto',
    description: 'Mestre em Ciência da Computação com vasta experiência em desenvolvimento de jogos digitais, docência e gestão tecnológica. Especialista em Unity e Unreal Engine, lidera a visão criativa e técnica do Projeto Onirium.',
    credentials: [
      'Mestrado em Ciência da Computação – UEM (2021)',
      'Licenciatura e Bacharelado em Química – UEM (2017/2021)',
      'Graduação em Análise e Desenvolvimento de Sistemas – UniCV (2025)',
      'Pós-graduação em Tecnologias Aplicadas ao EAD (2024)',
      'Game Designer e Desenvolvedor na Indie Game Startup LLC',
    ],
    image: '/team_marcos.jpg',
    icon: User,
    isLeader: true,
  },
  {
    name: 'Alison Henrique Custódio',
    role: 'Desenvolvimento, Direção e Prestação de Contas',
    description: 'Profissional multifuncional e estrategista com mais de 15 anos de experiência. Analista de Sistemas e Gestor de TI de Infraestrutura, liderando projetos de modernização tecnológica e integração de sistemas.',
    credentials: [
      'MBA em Auditoria e Perícia Contábil – Centro Universitário de Maringá (2018)',
      'Bacharelado em Ciências Contábeis – Centro Universitário de Maringá (2014)',
      'Análise de Sistemas – Centro Universitário de Maringá',
      'Especialista em Java, React, HTML, CSS e SQL',
    ],
    icon: Cpu,
  },
  {
    name: 'Larissa Priscila Custódio',
    role: 'Contabilidade e Prestação de Contas',
    description: 'Contadora e Especialista em Cálculos Periciais Trabalhistas com mais de 15 anos de experiência. Reconhecida pela capacidade de otimizar processos contábeis e implementar melhorias operacionais.',
    credentials: [
      'Pós-graduação em Auditoria e Perícia Contábil – Faculdade Cidade Verde (2019)',
      'Bacharelado em Ciências Contábeis – UNICESUMAR (2009-2012)',
      'Inscrita no Conselho Federal de Contabilidade desde 2013',
      'Analista de Cálculos Sênior no setor sucroalcooleiro',
    ],
    icon: Briefcase,
  },
];

const productionRoles = [
  { role: 'Artista Conceitual', icon: Palette },
  { role: 'Artista 3D', icon: Box },
  { role: 'Sound Designer', icon: Music },
  { role: 'Programador', icon: Code },
  { role: 'Advogado', icon: Scale },
];

function TeamCard({ member, index, isVisible }: { member: TeamMember; index: number; isVisible: boolean }) {
  const [isHovered, setIsHovered] = useState(false);
  const Icon = member.icon;

  return (
    <div
      className={`
        transition-all duration-700
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}
      `}
      style={{ transitionDelay: `${index * 200}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card className={`
        relative overflow-hidden p-6
        ${member.isLeader 
          ? 'bg-gradient-to-br from-cyan/10 to-abyss-light/80 border-cyan/50' 
          : 'bg-abyss-light/50 border-white/10 hover:border-cyan/30'
        }
        transition-all duration-300
        ${isHovered ? 'shadow-glow-cyan' : ''}
      `}>
        {/* Hologram effect for leader */}
        {member.isLeader && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div 
              className={`
                absolute inset-0 bg-gradient-to-b from-transparent via-cyan/5 to-transparent
                transition-transform duration-2000
                ${isHovered ? 'translate-y-full' : '-translate-y-full'}
              `}
            />
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-6 items-start">
          {/* Avatar */}
          <div className={`
            relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0
            ${member.isLeader ? 'ring-2 ring-cyan/50' : ''}
          `}>
            {member.image ? (
              <>
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
                {/* Hologram overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-cyan/10 to-transparent mix-blend-overlay" />
                <div 
                  className="absolute inset-0"
                  style={{
                    background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 212, 255, 0.1) 2px, rgba(0, 212, 255, 0.1) 4px)',
                  }}
                />
              </>
            ) : (
              <div className="w-full h-full bg-abyss-light flex items-center justify-center">
                <Icon className="w-10 h-10 text-cyan/50" />
              </div>
            )}
          </div>

          {/* Info */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <div className={`p-2 rounded-lg ${member.isLeader ? 'bg-cyan/20' : 'bg-white/5'}`}>
                <Icon className={`w-4 h-4 ${member.isLeader ? 'text-cyan' : 'text-gray-400'}`} />
              </div>
              <span className={`
                font-display text-xs tracking-wider
                ${member.isLeader ? 'text-cyan' : 'text-gray-500'}
              `}>
                {member.role.toUpperCase()}
              </span>
            </div>
            
            <h3 className="font-display text-xl font-bold text-white mb-2">
              {member.name}
            </h3>
            
            <p className="font-body text-gray-300 text-sm leading-relaxed mb-4">
              {member.description}
            </p>

            {/* Credentials */}
            <div className="space-y-2">
              {member.credentials.map((cred, i) => (
                <div 
                  key={i}
                  className="flex items-start gap-2"
                >
                  <Award className="w-4 h-4 text-cyan/60 flex-shrink-0 mt-0.5" />
                  <span className="font-body text-xs text-gray-400">{cred}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Corner decorations for leader */}
        {member.isLeader && (
          <>
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyan" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan" />
          </>
        )}
      </Card>
    </div>
  );
}

export function Equipe() {
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
      id="equipe"
      ref={sectionRef}
      className="relative min-h-screen w-full py-24 px-4 sm:px-6 lg:px-8 bg-abyss"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-abyss via-abyss-light/10 to-abyss" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Section Header */}
        <div 
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <span className="font-display text-xs tracking-[0.3em] text-cyan/60 mb-4 block">
            QUEM SOMOS
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            EQUIPE <span className="text-gradient-cyan">TÉCNICA</span>
          </h2>
          <p className="font-body text-lg text-gray-400 max-w-2xl mx-auto">
            Profissionais dedicados a transformar esta visão em realidade. 
            Uma equipe multidisciplinar unida pela paixão em criar experiências 
            de jogos significativas e inovadoras.
          </p>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-cyan to-transparent mx-auto mt-6" />
        </div>

        {/* Team Members */}
        <div className="space-y-6 mb-12">
          {teamMembers.map((member, index) => (
            <TeamCard 
              key={member.name}
              member={member}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* Production Team */}
        <div 
          className={`
            transition-all duration-700 delay-400
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          `}
        >
          <Card className="p-6 bg-abyss-light/30 border-white/10">
            <h3 className="font-display text-lg font-bold text-white mb-4 text-center">
              Equipe de Produção
            </h3>
            <p className="font-body text-sm text-gray-400 text-center mb-6">
              Profissionais que integrarão a produção do projeto
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {productionRoles.map((role) => {
                const Icon = role.icon;
                return (
                  <div 
                    key={role.role}
                    className="flex flex-col items-center gap-3 p-4 rounded-lg bg-abyss/50 border border-white/5 hover:border-cyan/30 transition-all duration-300 group"
                  >
                    <div className="p-3 rounded-lg bg-cyan/10 group-hover:bg-cyan/20 transition-colors">
                      <Icon className="w-5 h-5 text-cyan" />
                    </div>
                    <span className="font-body text-xs text-gray-300 text-center">
                      {role.role}
                    </span>
                  </div>
                );
              })}
            </div>
          </Card>
        </div>

        {/* Technical Stack */}
        <div 
          className={`
            mt-8 transition-all duration-700 delay-500
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          `}
        >
          <Card className="p-6 bg-abyss-light/30 border-white/10">
            <div className="flex items-center justify-center gap-2 mb-4">
              <GraduationCap className="w-5 h-5 text-cyan" />
              <h3 className="font-display text-sm font-bold text-white">
                TECNOLOGIAS
              </h3>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {['Unity', 'Unreal Engine', 'C#', 'Python', 'Blender', 'FMOD', 'Git', 'Docker'].map((tech) => (
                <span 
                  key={tech}
                  className="px-3 py-1 rounded-full bg-cyan/10 text-cyan text-xs font-body"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
