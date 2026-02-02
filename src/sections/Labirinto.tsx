import { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { DoorOpen, Skull, Server, Brain, Eye, Users, Package, RefreshCw, Baby, HeartCrack, Target } from 'lucide-react';

interface Room {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  freud: string;
  dante: string;
  challenge: string;
  icon: React.ElementType;
}

const rooms: Room[] = [
  {
    number: '01',
    title: 'O Véu da Sombra',
    subtitle: 'The Shadow\'s Veil',
    description: 'Uma sala de servidores labiríntica e massiva, com estantes empoeiradas repletas de dados ilegíveis e fiação exposta que forma uma teia confusa. Luzes de LEDs piscam erraticamente, e o ar é pesado, preenchido por um zumbido constante de máquinas.',
    freud: 'O Inconsciente — o reino de desejos, memórias e medos reprimidos, indizíveis e irracionais.',
    dante: 'O Limbo — uma área de incerteza e ausência de uma condenação clara, um lugar de "não-escolha" onde a mente ainda não se define.',
    challenge: 'Navegar por um labirinto de corredores de servidores com visibilidade limitada. Decifrar padrões nos ruídos dos servidores e nas distorções das câmeras para encontrar um painel de acesso que "ligue" a câmera principal da sala.',
    icon: Server,
  },
  {
    number: '02',
    title: 'Espelho de Narciso',
    subtitle: 'Narcissus\'s Mirror',
    description: 'Uma galeria de arte ou salão de espelhos, outrora opulento, mas agora em decadência. Espelhos grandes e ornamentados, a maioria rachada, embaçada ou coberta por tecidos, adornam as paredes. Estátuas de mármore perfeitas, mas com rostos desfigurados ou ausentes.',
    freud: 'O Ideal do Ego — a imagem de perfeição que o indivíduo aspira ser, muitas vezes levando a uma auto obsessão.',
    dante: 'A Gula / Segundo Círculo — a busca incessante por uma imagem idealizada e a auto obsessão narcisista, um apetite desmedido pelo eu.',
    challenge: 'Puzzles de luz e reflexão, onde a cobaia deve manipular espelhos para direcionar um feixe de luz ou uma projeção para um ponto específico, revelando uma imagem verdadeira ou um código.',
    icon: Eye,
  },
  {
    number: '03',
    title: 'Complexo de Édipo',
    subtitle: 'Oedipus\'s Complex',
    description: 'Um andar residencial fragmentado dentro do complexo, com vários apartamentos interligados por corredores sinuosos. Cada unidade é uma representação de um "espaço familiar", preenchido com móveis quebrados, brinquedos infantis espalhados e fotografias de família rasgadas ou viradas para a parede.',
    freud: 'O Complexo de Édipo — a base para a formação da identidade sexual e moral através da relação com as figuras parentais e os primeiros conflitos.',
    dante: 'A Traição aos Parentes (Antenora) — os laços familiares e as culpas, segredos e traições internas da família.',
    challenge: 'Resolver pequenos quebra-cabeças narrativos que envolvem a manipulação de objetos simbólicos ou a reconstituição de eventos familiares. A cobaia precisa "reconstituir" certas memórias ou "resolver" um conflito simbólico.',
    icon: Users,
  },
  {
    number: '04',
    title: 'O Peso da Repressão',
    subtitle: 'Repression\'s Weight',
    description: 'Um porão labiríntico e claustrofóbico, sobrecarregado com pilhas de caixas, documentos velhos e lixo eletrônico. O teto é baixo, as passagens são estreitas e o ar é denso, empoeirado e pesado.',
    freud: 'A Repressão — o mecanismo de defesa psicológico de afastar impulsos, pensamentos e memórias dolorosas ou inaceitáveis da consciência.',
    dante: 'A Avareza e Prodigalidade / Peso dos Hipócritas — o fardo esmagador do que é guardado e escondido, a acumulação de "lixo" mental que impede o movimento.',
    challenge: 'A cobaia sente o ambiente "pesado", movendo-se mais lentamente. Puzzles envolvem "desenterrar" itens ou informações de pilhas de entulho, com a ajuda de Liam que pode identificar "anomalias" nas leituras dos dados psíquicos.',
    icon: Package,
  },
  {
    number: '05',
    title: 'A Ascensão da Sublimação',
    subtitle: 'Sublimation\'s Ascent',
    description: 'Uma oficina ou laboratório abandonado, mas com potencial de reativação. Há ferramentas espalhadas, máquinas quebradas, bancadas com projetos incompletos e diagramas rabiscados nas paredes.',
    freud: 'A Sublimação — um mecanismo de defesa maduro onde impulsos e desejos inaceitáveis são transformados em comportamentos socialmente aceitáveis e produtivos.',
    dante: 'Purgatório (Ascensão) — o potencial de transcender ou transformar impulsos negativos em algo útil e construtivo, um local de esperança e trabalho árduo em direção à redenção.',
    challenge: 'A cobaia deve "canalizar" a energia de manifestações para um propósito construtivo. Por exemplo, uma manifestação de raiva pode ser "presa" em uma máquina para gerar energia que ativa um dispositivo.',
    icon: RefreshCw,
  },
  {
    number: '06',
    title: 'Estase da Fixação',
    subtitle: 'Fixation\'s Stasis',
    description: 'Uma série de escritórios ou cubículos idênticos, dispostos em um padrão repetitivo. Cada um contém os mesmos objetos fora do lugar: um computador desligado, uma planta murcha, um calendário com a mesma data marcada. O ar é denso e uma sensação de déjà vu constante permeia a sala.',
    freud: 'A Fixação — a permanência de uma energia libidinal em um estágio de desenvolvimento psicossexual anterior, resultando em padrões de comportamento repetitivos e imaturos.',
    dante: 'Inveja / Cólera / Apatia — a monotonia, a estagnação e o aprisionamento em ciclos viciosos, onde o movimento é restrito, sem propósito.',
    challenge: 'O jogador deve encontrar a anomalia sutil que quebra o ciclo. Liam, com sua visão de múltiplas câmeras e análise de dados, pode identificar a única diferença em um dos cubículos ou a inconsistência na gravação da câmera.',
    icon: Target,
  },
  {
    number: '07',
    title: 'Recuo da Regressão',
    subtitle: 'Regression\'s Retreat',
    description: 'Uma creche ou área de recreação infantil em um andar subterrâneo do complexo, mas tudo está em escala ligeiramente distorcida (brinquedos gigantes, portas minúsculas). O ambiente é caótico, com blocos de montar espalhados, rabiscos nas paredes e ruídos de choro ou riso distorcidos ecoando.',
    freud: 'A Regressão — um mecanismo de defesa em que um indivíduo, quando confrontado com estresse ou trauma, retorna a padrões de pensamento, sentimentos ou comportamentos de um estágio de desenvolvimento anterior.',
    dante: 'Luxúria (Tempestade Eterna) / Bestialidade — o retorno a estados mais primitivos e impulsivos da mente, a perda da racionalidade adulta em favor de comportamentos imaturos.',
    challenge: 'A cobaia é forçada a agir de forma mais "primitiva" ou intuitiva: rastejar, se esconder, ou usar objetos de forma não convencional para resolver puzzles (ex: encaixar blocos coloridos para formar uma chave).',
    icon: Baby,
  },
  {
    number: '08',
    title: 'O Abraço de Thanatos',
    subtitle: 'Thanatos\'s Embrace',
    description: 'Uma câmara de quarentena ou necrotério, com paredes de metal frias, luzes fluorescentes bruxuleantes e macas vazias ou cobertas por lençóis. O ar é pesado e cheira a desinfetante e ferrugem. Uma sensação avassaladora de desesperança e aniquilação paira no ar.',
    freud: 'O Thanatos (Impulso de Morte) — a pulsão de morte, a tendência inconsciente para a autodestruição, o retorno a um estado inorgânico e de ausência de tensão.',
    dante: 'Traição (Cocytus) / Desespero — o ambiente gélido, a ausência de vida e a profunda inação e desesperança se conectam diretamente ao Cocytus, o lago congelado do Nono Círculo.',
    challenge: 'A cobaia deve resistir ao impulso de desistir. Puzzles podem envolver "reiniciar" sistemas de suporte de vida (ventiladores, aquecedores, fontes de luz) para trazer uma faísca de "vida" ao ambiente.',
    icon: HeartCrack,
  },
  {
    number: '09',
    title: 'A Última Resistência do Ego',
    subtitle: 'The Ego\'s Last Stand',
    description: 'O escritório principal do Dr. Krauss ou a sala de controle central do complexo, mas em um estado de colapso e reconstrução simultânea. Partes das paredes de outras salas (servidores, galeria, creche) estão visíveis através de rachaduras ou seções colapsadas, mostrando a interconexão de todos os conceitos da mente.',
    freud: 'O Ego — o mediador entre o ID, o Superego e a realidade, responsável pela percepção, julgamento, memória e regulação dos impulsos. A fase de integração e confronto final com a realidade.',
    dante: 'O Centro / O Despertar — o ponto de convergência, onde todas as "punições" psicológicas se encontram para a integração final, o ponto de virada para a aceitação da realidade.',
    challenge: 'A prova final. A cobaia deve usar todos os Fragmentos da Mente coletados para estabilizar a sala. Liam deve "desfragmentar" os feeds das câmeras e dos dados psíquicos, ajudando a cobaia a identificar padrões e fraquezas na própria mente.',
    icon: Brain,
  },
];

export function Labirinto() {
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
      id="labirinto"
      ref={sectionRef}
      className="relative min-h-screen w-full py-24 px-4 sm:px-6 lg:px-8 bg-abyss"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-abyss via-abyss-light/10 to-abyss" />
        {/* Maze-like pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(0, 212, 255, 0.5) 1px, transparent 1px),
              linear-gradient(rgba(0, 212, 255, 0.5) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px',
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
            THE MENTAL LABYRINTH
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            THE <span className="text-gradient-cyan">NINE ROOMS</span>
          </h2>
          <p className="font-body text-lg text-gray-400 max-w-3xl mx-auto">
            Each room is a visual representation of an aspect of the protagonist's psyche, 
            distorted through the lens of a security complex. Each finds a dark echo 
            in one of Dante's circles of Hell and a connection with Freud's theory.
          </p>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-cyan to-transparent mx-auto mt-6" />
        </div>

        {/* Progress indicator */}
        <div 
          className={`
            flex items-center justify-center gap-4 mb-12
            transition-all duration-700 delay-200
            ${isVisible ? 'opacity-100' : 'opacity-0'}
          `}
        >
          <DoorOpen className="w-5 h-5 text-cyan/60" />
          <div className="flex gap-1">
            {Array.from({ length: 9 }).map((_, i) => (
              <div 
                key={i}
                className={`
                  w-2 h-2 rounded-full transition-all duration-300
                  ${i < 2 ? 'bg-cyan shadow-glow-cyan' : 'bg-white/20'}
                `}
              />
            ))}
          </div>
          <Skull className="w-5 h-5 text-alert/60" />
        </div>

        {/* Room cards */}
        <div className="space-y-8">
          {rooms.map((room, index) => {
            const Icon = room.icon;
            return (
              <div
                key={room.number}
                className={`
                  relative transition-all duration-700
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}
                `}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <Card className="relative overflow-hidden bg-abyss-light/50 border-white/10 hover:border-cyan/50 transition-all duration-500 group">
                  <div className="grid md:grid-cols-12 gap-6 p-6">
                    {/* Number & Icon */}
                    <div className="md:col-span-2 flex md:flex-col items-center md:items-start gap-4">
                      <span className="font-display text-5xl font-black text-cyan/30">
                        {room.number}
                      </span>
                      <div className="p-3 rounded-lg bg-cyan/20">
                        <Icon className="w-6 h-6 text-cyan" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="md:col-span-10">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <h3 className="font-display text-2xl font-bold text-white">
                          {room.title}
                        </h3>
                        <span className="font-body text-sm text-cyan/60 italic">
                          {room.subtitle}
                        </span>
                      </div>

                      <p className="font-body text-gray-300 leading-relaxed mb-4">
                        {room.description}
                      </p>

                      <div className="grid sm:grid-cols-2 gap-4 mb-4">
                        <div className="p-3 rounded-lg bg-abyss/50 border border-cyan/20">
                          <span className="font-display text-xs text-cyan/60 tracking-wider block mb-1">FREUD</span>
                          <p className="font-body text-sm text-gray-400">{room.freud}</p>
                        </div>
                        <div className="p-3 rounded-lg bg-abyss/50 border border-alert/20">
                          <span className="font-display text-xs text-alert/60 tracking-wider block mb-1">DANTE</span>
                          <p className="font-body text-sm text-gray-400">{room.dante}</p>
                        </div>
                      </div>

                      <div className="p-3 rounded-lg bg-cyan/5 border border-cyan/10">
                        <span className="font-display text-xs text-cyan/60 tracking-wider block mb-1">DESAFIO</span>
                        <p className="font-body text-sm text-gray-400">{room.challenge}</p>
                      </div>
                    </div>
                  </div>

                  {/* Bottom glow */}
                  <div className="h-0.5 bg-gradient-to-r from-transparent via-cyan/30 to-transparent" />
                </Card>
              </div>
            );
          })}
        </div>

        {/* Portal Logic Note */}
        <div 
          className={`
            mt-12 transition-all duration-700 delay-1000
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          `}
        >
          <Card className="p-6 bg-gradient-to-br from-cyan/10 to-alert/10 border-cyan/30">
            <h3 className="font-display text-lg font-bold text-white mb-4 flex items-center gap-3">
              <RefreshCw className="w-5 h-5 text-cyan" />
              Navegação: Portais Aleatórios
            </h3>
            <p className="font-body text-gray-300 leading-relaxed">
              O principal método de movimentação entre as salas. Ao ativar um portal, 
              a próxima sala é escolhida <span className="text-cyan font-semibold">aleatoriamente</span> dentro de um conjunto pré-definido. 
              Isso garante que cada &ldquo;corrida&rdquo; pelo labirinto mental seja imprevisível, 
              forçando a adaptação. Para acessar a Sala 9, a cobaia deve ter coletado 
              no mínimo <span className="text-cyan font-semibold">5 Fragmentos da Mente</span> de salas distintas.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
