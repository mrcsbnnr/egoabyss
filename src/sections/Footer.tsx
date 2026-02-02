import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Mail, Phone, ExternalLink, Heart, Landmark, FileText, Gamepad2 } from 'lucide-react';

export function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState('');
  const sectionRef = useRef<HTMLDivElement>(null);
  const fullText = 'INVISTA EM CULTURA';

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

  // Typewriter effect
  useEffect(() => {
    if (isVisible && typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [isVisible, typedText]);

  return (
    <footer 
      id="investir"
      ref={sectionRef}
      className="relative min-h-screen w-full py-24 px-4 sm:px-6 lg:px-8 bg-abyss"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-abyss via-abyss-light/20 to-abyss" />
        {/* Terminal-like grid */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 212, 255, 0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 212, 255, 0.5) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Terminal Header */}
        <div 
          className={`
            mb-12 transition-all duration-700
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          `}
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-alert" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            <span className="text-cyan">$</span> {typedText}
            <span className="animate-blink inline-block w-3 h-8 bg-cyan ml-2" />
          </h2>
          
          <p className="font-body text-lg text-gray-400 max-w-2xl">
            Transforme seu imposto de renda em cultura. Apoie o desenvolvimento de 
            jogos brasileiros independentes e a formação de novos talentos na indústria criativa.
          </p>
        </div>

        {/* PRONAC Info */}
        <div 
          className={`
            mb-8 transition-all duration-700 delay-200
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          `}
        >
          <div className="p-6 rounded-lg bg-abyss-light/50 border border-cyan/30 hover:border-cyan hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-cyan/20">
            <div className="flex items-center gap-3 mb-4">
              <Gamepad2 className="w-6 h-6 text-cyan animate-pulse" />
              <h3 className="font-display text-lg font-bold text-white">
                Informações do Projeto
              </h3>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <span className="font-display text-xs text-cyan/60 tracking-wider block mb-1">
                  PRONAC
                </span>
                <span className="font-body text-xl text-white">2514086</span>
              </div>
              <div>
                <span className="font-display text-xs text-cyan/60 tracking-wider block mb-1">
                  PROJETO
                </span>
                <span className="font-body text-white">
                  Desenvolvimento do Protótipo do Jogo Eletrônico Ego's Abyss
                </span>
              </div>
              <div>
                <span className="font-display text-xs text-cyan/60 tracking-wider block mb-1">
                  VALOR APROVADO
                </span>
                <span className="font-body text-xl text-cyan">R$ 199.650,00</span>
              </div>
              <div>
                <span className="font-display text-xs text-cyan/60 tracking-wider block mb-1">
                  PERÍODO
                </span>
                <span className="font-body text-white">01/01/2026 a 30/06/2027</span>
              </div>
            </div>
          </div>
        </div>

        {/* How to Invest */}
        <div 
          className={`
            mb-8 transition-all duration-700 delay-300
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          `}
        >
          <div className="p-6 rounded-lg bg-abyss-light/50 border border-white/10 hover:border-cyan/30 hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-cyan/20">
            <div className="flex items-center gap-3 mb-4">
              <FileText className="w-6 h-6 text-cyan" />
              <h3 className="font-display text-lg font-bold text-white">
                Como Apoiar
              </h3>
            </div>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-display text-sm text-cyan mb-2">Para Empresas</h4>
                <p className="font-body text-sm text-gray-300">
                  Empresas tributadas com base no <span className="text-white font-semibold">lucro real</span> podem destinar até{' '}
                  <span className="text-cyan font-semibold">4%</span> do imposto de renda devido para projetos culturais via Lei Rouanet, 
                  com <span className="text-cyan font-semibold">100% de dedução fiscal</span> do valor investido.
                </p>
              </div>
              
              <div className="w-full h-px bg-white/10" />
              
              <div>
                <h4 className="font-display text-sm text-cyan mb-2">Para Pessoas Físicas</h4>
                <p className="font-body text-sm text-gray-300">
                  Pessoas físicas que declaram Imposto de Renda no <span className="text-white font-semibold">modelo completo</span> podem destinar até{' '}
                  <span className="text-cyan font-semibold">6%</span> do imposto devido, 
                  com <span className="text-cyan font-semibold">100% de dedução fiscal</span> do valor investido.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div 
          className={`
            mb-12 transition-all duration-700 delay-400
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          `}
        >
          <div className="p-6 rounded-lg bg-gradient-to-br from-cyan/10 to-alert/10 border border-cyan/30 hover:border-cyan hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-cyan/20">
            <h3 className="font-display text-lg font-bold text-white mb-4 text-center">
              Entre em Contato
            </h3>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a 
                href="mailto:mrcsmcl@live.com"
                className="flex items-center gap-3 text-gray-300 hover:text-cyan transition-all duration-300 hover:scale-110"
              >
                <Mail className="w-5 h-5" />
                <span className="font-body">mrcsmcl@live.com</span>
              </a>
              
              <a 
                href="tel:+5544991238445"
                className="flex items-center gap-3 text-gray-300 hover:text-cyan transition-all duration-300 hover:scale-110"
              >
                <Phone className="w-5 h-5" />
                <span className="font-body">(44) 9912-38445</span>
              </a>
            </div>
          </div>
        </div>

        {/* CTA Buttons */}
        <div 
          className={`
            flex flex-col sm:flex-row gap-4 justify-center mb-16 transition-all duration-700 delay-500
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          `}
        >
          <Button
            size="lg"
            className="font-display text-sm tracking-wider bg-cyan/20 hover:bg-cyan/30 text-cyan border border-cyan/50 hover:border-cyan transition-all duration-300 hover:shadow-glow-cyan hover:scale-110 px-8 py-6"
            onClick={() => window.open('https://www.gov.br/cultura/pt-br', '_blank')}
          >
            <ExternalLink className="w-4 h-4 mr-2" />
            MINISTÉRIO DA CULTURA
          </Button>
          <Button
            size="lg"
            className="font-display text-sm tracking-wider bg-alert/20 hover:bg-alert/30 text-alert border border-alert/50 hover:border-alert transition-all duration-300 hover:shadow-glow-red hover:scale-110 px-8 py-6"
            onClick={() => window.open('https://www.gov.br/cultura/pt-br/assuntos/incentivo-a-cultura', '_blank')}
          >
            <Heart className="w-4 h-4 mr-2 animate-pulse" />
            LEI ROUANET
          </Button>
        </div>

        {/* Logos */}
        <div 
          className={`
            flex flex-col items-center gap-6 mb-12 transition-all duration-700 delay-600
            ${isVisible ? 'opacity-100' : 'opacity-0'}
          `}
        >
          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          
          <div className="flex flex-col sm:flex-row items-center gap-8">
            {/* Ministerio da Cultura */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-600 to-yellow-500 flex items-center justify-center">
                <Landmark className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="font-display text-xs text-gray-500 block">APOIO</span>
                <span className="font-body text-sm text-white">Ministério da Cultura</span>
              </div>
            </div>
            
            {/* Governo Federal */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-700 to-green-500 flex items-center justify-center">
                <span className="font-display text-lg font-bold text-white">BR</span>
              </div>
              <div>
                <span className="font-display text-xs text-gray-500 block">PATROCÍNIO</span>
                <span className="font-body text-sm text-white">Governo Federal</span>
              </div>
            </div>
          </div>
          
          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="font-body text-xs text-gray-500">
            © 2026 Ego's Abyss. Todos os direitos reservados.
          </p>
          <p className="font-body text-xs text-gray-600 mt-1">
            Projeto aprovado pela Lei Federal de Incentivo à Cultura — PRONAC 2514086
          </p>
        </div>
      </div>
    </footer>
  );
}
