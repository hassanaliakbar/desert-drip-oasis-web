import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-drip-system.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Drip irrigation system in desert" 
          className="w-full h-full object-cover scale-105 animate-float"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-water-blue/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-40 left-10 w-24 h-24 bg-growth-green/30 rounded-full blur-2xl animate-float"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-4xl animate-fade-up">
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-water-blue/20 backdrop-blur-sm border border-water-blue/30 rounded-full text-primary-foreground text-sm font-medium mb-4">
              🌱 Transform Your Desert Land
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-8 leading-[0.9] text-balance">
            Desert to 
            <span className="gradient-text block mt-2"> Oasis Revolution</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-10 leading-relaxed max-w-2xl">
            Revolutionary drip irrigation systems designed for extreme desert environments. 
            <span className="text-sunset-gold font-semibold">Save up to 60% water</span> while maximizing crop yields.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 animate-slide-in-left">
            <Button 
              size="lg"
              onClick={() => window.open('https://wa.me/1234567890', '_blank')}
              className="bg-gradient-water hover:shadow-glow text-white text-lg px-10 py-7 rounded-xl transition-all duration-300 hover:scale-105 font-semibold"
            >
              <span className="mr-2">💬</span>
              Get Quote via WhatsApp
            </Button>
            
            <Button 
              size="lg"
              variant="outline"
              onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}
              className="glass-effect border-white/30 text-white hover:bg-white/20 text-lg px-10 py-7 rounded-xl transition-all duration-300 hover:scale-105 font-semibold"
            >
              <span className="mr-2">🖼️</span>
              View Gallery
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 animate-slide-in-right">
            <div className="text-center">
              <div className="text-4xl font-bold text-sunset-gold mb-2">500+</div>
              <div className="text-primary-foreground/80">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-water-blue mb-2">60%</div>
              <div className="text-primary-foreground/80">Water Savings</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-growth-green mb-2">15+</div>
              <div className="text-primary-foreground/80">Years Experience</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center backdrop-blur-sm">
          <div className="w-1 h-4 bg-white rounded-full mt-3 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;