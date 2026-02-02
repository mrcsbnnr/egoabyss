import { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { TrendingUp, Wallet, CreditCard, Landmark } from 'lucide-react';

interface EtapaOrcamento {
  nome: string;
  valor: string;
  itens: string[];
}

const etapas: EtapaOrcamento[] = [
  {
    nome: 'Pré-Produção',
    valor: 'R$ 16.000,00',
    itens: [
      'Artista Conceitual (ambientes, manifestações)',
      'Remuneração do Proponente (coordenação, roteiro, GDD)',
    ],
  },
  {
    nome: 'Produção / Execução',
    valor: 'R$ 106.800,00',
    itens: [
      'Artista 3D (modelagem, texturização, iluminação)',
      'Sound Designer (2 trilhas sonoras + SFX)',
      'Equipamentos de Informática (aluguel)',
      'Licenças de Software e Assets',
      'Game Designer (coordenação e direção)',
      'Programador (Unity/Unreal, sistemas, IA)',
    ],
  },
  {
    nome: 'Pós-Produção',
    valor: 'R$ 6.000,00',
    itens: [
      'Coordenação da finalização (QA)',
      'Ministração das 20h de oficinas',
    ],
  },
  {
    nome: 'Assessoria',
    valor: 'R$ 9.200,00',
    itens: [
      'Advogado (contratos)',
      'Contador (gestão da conta, prestação de contas - 18 meses)',
    ],
  },
  {
    nome: 'Contrapartidas Sociais',
    valor: 'R$ 7.200,00',
    itens: [
      'Legenda descritiva',
      'Intérprete de LIBRAS (40h de oficina)',
    ],
  },
  {
    nome: 'Administração do Projeto',
    valor: 'R$ 54.450,00',
    itens: [
      'Captação de recursos',
      'Custos de acessibilidade, comunicação e divulgação',
      'Custos de administração',
    ],
  },
];

export function Orcamento() {
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
      id="orcamento"
      ref={sectionRef}
      className="relative min-h-screen w-full py-24 px-4 sm:px-6 lg:px-8 bg-abyss"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-abyss via-abyss-light/10 to-abyss" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Section Header */}
        <div 
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <span className="font-display text-xs tracking-[0.3em] text-cyan/60 mb-4 block">
            INVESTMENT
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 hover:scale-105 transition-transform duration-300">
            PROJECT <span className="text-gradient-cyan">BUDGET</span>
          </h2>
          <p className="font-body text-lg text-gray-400 max-w-2xl mx-auto">
            Approved values for the development of the playable prototype 
            of the video game Ego's Abyss.
          </p>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-cyan to-transparent mx-auto mt-6" />
        </div>

        {/* Valor Total */}
        <div 
          className={`
            mb-12 transition-all duration-700 delay-200
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          `}
        >
          <Card className="p-8 bg-gradient-to-br from-cyan/20 to-alert/10 border-cyan/30 hover:border-cyan hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan/30">
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-3 mb-4">
                <Landmark className="w-8 h-8 text-cyan animate-pulse" />
                <span className="font-display text-sm text-cyan/60 tracking-wider">VALOR TOTAL APROVADO</span>
              </div>
              <span className="font-display text-5xl sm:text-6xl font-black text-white mb-2 hover:scale-110 transition-transform duration-300">
                R$ 199.650,00
              </span>
              <span className="font-body text-sm text-gray-400">
                PRONAC 2514086 • Lei Federal de Incentivo à Cultura
              </span>
            </div>
          </Card>
        </div>

        {/* Distribuição por Etapa */}
        <div 
          className={`
            mb-12 transition-all duration-700 delay-300
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          `}
        >
          <h3 className="font-display text-xl font-bold text-white text-center mb-8">
            DISTRIBUIÇÃO POR <span className="text-cyan">ETAPA</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {etapas.map((etapa, index) => (
              <div 
                key={etapa.nome}
                className={`
                  transition-all duration-700
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}
                `}
                style={{ transitionDelay: `${400 + index * 100}ms` }}
              >
                <Card className="h-full p-5 bg-abyss-light/50 border-white/10 hover:border-cyan/30 hover:scale-105 hover:shadow-lg hover:shadow-cyan/20 transition-all duration-300 group">
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-display text-sm font-bold text-white group-hover:text-cyan transition-colors duration-300">{etapa.nome}</span>
                    <span className="font-display text-lg font-bold text-cyan group-hover:scale-110 transition-transform duration-300">{etapa.valor}</span>
                  </div>
                  <ul className="space-y-1">
                    {etapa.itens.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-cyan/50 group-hover:bg-cyan mt-2 flex-shrink-0 transition-colors duration-300" />
                        <span className="font-body text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Benefícios Fiscais */}
        <div 
          className={`
            transition-all duration-700 delay-700
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          `}
        >
          <Card className="p-6 bg-gradient-to-br from-abyss-light/80 to-abyss-light/40 border-cyan/30">
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="w-6 h-6 text-cyan" />
              <h3 className="font-display text-lg font-bold text-white">
                BENEFÍCIOS FISCAIS PARA INCENTIVADORES
              </h3>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="p-4 rounded-lg bg-abyss/50 border border-white/10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-full bg-cyan/20 flex items-center justify-center">
                    <span className="font-display text-xl font-bold text-cyan">100%</span>
                  </div>
                  <div>
                    <span className="font-display text-xs text-cyan/60 tracking-wider block">DEDUÇÃO FISCAL</span>
                    <span className="font-body text-sm text-white">Do valor investido</span>
                  </div>
                </div>
                <p className="font-body text-xs text-gray-400">
                  O projeto possui enquadramento garantido no Artigo 18 da Lei nº 8.313/91, 
                  conferindo dedução fiscal de 100% do valor investido.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-abyss/50 border border-white/10">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-full bg-alert/20 flex items-center justify-center">
                    <CreditCard className="w-6 h-6 text-alert" />
                  </div>
                  <div>
                    <span className="font-display text-xs text-alert/60 tracking-wider block">LIMITE</span>
                    <span className="font-body text-sm text-white">Do IR devido</span>
                  </div>
                </div>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-cyan/50" />
                    <span className="font-body text-xs text-gray-400">
                      <strong className="text-white">4%</strong> para Pessoas Jurídicas (lucro real)
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-cyan/50" />
                    <span className="font-body text-xs text-gray-400">
                      <strong className="text-white">6%</strong> para Pessoas Físicas (modelo completo)
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>

        {/* CTA */}
        <div 
          className={`
            mt-12 text-center transition-all duration-700 delay-800
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          `}
        >
          <p className="font-body text-gray-400 mb-6">
            Transforme seu imposto de renda em cultura. Apoie o desenvolvimento de 
            jogos brasileiros independentes.
          </p>
          <button 
            onClick={() => document.getElementById('investir')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-cyan/20 hover:bg-cyan/30 text-cyan border border-cyan/50 hover:border-cyan transition-all duration-300 hover:shadow-glow-cyan font-display text-sm tracking-wider"
          >
            <Wallet className="w-4 h-4" />
            QUERO INVESTIR
          </button>
        </div>
      </div>
    </section>
  );
}
