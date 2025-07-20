import { useState } from 'react';
import { Menu, X, Droplets } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-desert-orange to-earth-brown p-2 rounded-lg">
              <Droplets className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-foreground">DripTech Factory</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">Home</a>
            <a href="#products" className="text-foreground hover:text-primary transition-colors">Products</a>
            <a href="#gallery" className="text-foreground hover:text-primary transition-colors">Gallery</a>
            <a href="#benefits" className="text-foreground hover:text-primary transition-colors">Benefits</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
          </nav>

          {/* WhatsApp CTA */}
          <div className="hidden md:block">
            <Button 
              onClick={() => window.open('https://wa.me/1234567890', '_blank')}
              className="bg-growth-green hover:bg-growth-green/90 text-accent-foreground"
            >
              WhatsApp Us
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">Home</a>
              <a href="#products" className="text-foreground hover:text-primary transition-colors">Products</a>
              <a href="#gallery" className="text-foreground hover:text-primary transition-colors">Gallery</a>
              <a href="#benefits" className="text-foreground hover:text-primary transition-colors">Benefits</a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors">Contact</a>
              <Button 
                onClick={() => window.open('https://wa.me/1234567890', '_blank')}
                className="bg-growth-green hover:bg-growth-green/90 text-accent-foreground w-fit"
              >
                WhatsApp Us
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;