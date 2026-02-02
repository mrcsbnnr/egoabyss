import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Conceito', href: '#conceito' },
  { label: 'Gameplay', href: '#gameplay' },
  { label: 'Mundo', href: '#mundo' },
  { label: 'Labirinto', href: '#labirinto' },
  { label: 'Impacto', href: '#impacto' },
  { label: 'Equipe', href: '#equipe' },
  { label: 'Roadmap', href: '#roadmap' },
  { label: 'Orçamento', href: '#orcamento' },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav 
        className={`
          fixed top-0 left-0 right-0 z-50 transition-all duration-500
          ${isScrolled 
            ? 'bg-abyss/90 backdrop-blur-md border-b border-white/10' 
            : 'bg-transparent'
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="font-display text-lg font-bold text-white hover:text-cyan transition-all duration-300 hover:scale-110"
            >
              EGO'S<span className="text-cyan">ABYSS</span>
            </button>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="font-display text-xs tracking-wider text-gray-400 hover:text-cyan px-3 py-2 transition-all duration-300 hover:scale-110"
                >
                  {item.label.toUpperCase()}
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button
                size="sm"
                onClick={() => scrollToSection('#investir')}
                className="font-display text-xs tracking-wider bg-alert/20 hover:bg-alert/30 text-alert border border-alert/50 hover:border-alert transition-all duration-300 hover:scale-110 hover:shadow-glow-red"
              >
                INVISTA
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-white hover:text-cyan transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div 
        className={`
          fixed inset-0 z-40 lg:hidden transition-all duration-300
          ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
        `}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-abyss/95 backdrop-blur-md"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        {/* Menu Content */}
        <div className="relative h-full flex flex-col items-center justify-center gap-6">
          {navItems.map((item, index) => (
            <button
              key={item.href}
              onClick={() => scrollToSection(item.href)}
              className={`
                font-display text-2xl text-white hover:text-cyan transition-all duration-300
                ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
              `}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {item.label.toUpperCase()}
            </button>
          ))}
          
          <Button
            size="lg"
            onClick={() => scrollToSection('#investir')}
            className={`
              mt-6 font-display text-sm tracking-wider bg-alert/20 hover:bg-alert/30 text-alert border border-alert/50 hover:border-alert transition-all duration-300
              ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}
            `}
            style={{ transitionDelay: `${navItems.length * 50}ms` }}
          >
            INVISTA VIA LEI ROUANET
          </Button>
        </div>
      </div>
    </>
  );
}
