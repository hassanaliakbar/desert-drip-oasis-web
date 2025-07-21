import { useState, useEffect } from 'react';
import { Menu, X, Droplets, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'glass-effect shadow-elegant backdrop-blur-xl' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Enhanced Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-water rounded-xl flex items-center justify-center shadow-lg">
              <Droplets className="h-7 w-7 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">Drip Irrigation Solutions</h1>
              <p className="text-xs text-white/80">Premium Irrigation Solutions</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-white/90 hover:text-white transition-colors font-medium relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-water-blue transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('benefits')}
              className="text-white/90 hover:text-white transition-colors font-medium relative group"
            >
              Benefits
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-water-blue transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('gallery')}
              className="text-white/90 hover:text-white transition-colors font-medium relative group"
            >
              Gallery
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-water-blue transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-white/90 hover:text-white transition-colors font-medium relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-water-blue transition-all duration-300 group-hover:w-full"></span>
            </button>
          </nav>

          {/* Enhanced CTA Button */}
          <Button 
            onClick={() => window.open('https://wa.me/1234567890', '_blank')}
            className="hidden md:flex bg-gradient-water hover:shadow-glow text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            WhatsApp Quote
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2 rounded-lg glass-effect"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-6 glass-effect mt-2 rounded-xl animate-fade-up">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-white hover:text-water-blue transition-colors font-medium text-left"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('benefits')}
                className="text-white hover:text-water-blue transition-colors font-medium text-left"
              >
                Benefits
              </button>
              <button 
                onClick={() => scrollToSection('gallery')}
                className="text-white hover:text-water-blue transition-colors font-medium text-left"
              >
                Gallery
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-white hover:text-water-blue transition-colors font-medium text-left"
              >
                Contact
              </button>
              <Button 
                onClick={() => window.open('https://wa.me/1234567890', '_blank')}
                className="bg-gradient-water text-white w-fit px-6 py-3 rounded-xl font-semibold mt-4"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                WhatsApp Quote
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;