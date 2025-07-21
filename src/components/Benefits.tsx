import { Wrench, Building2, Zap, FileText, Target, Settings } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const benefits = [
  {
    icon: Wrench,
    title: "Complete Project Management",
    description: "End-to-end drip irrigation project delivery from design to commissioning with expert supervision."
  },
  {
    icon: Building2,
    title: "Professional Installation",
    description: "Certified technicians ensure precise pipe laying and system installation for optimal performance."
  },
  {
    icon: Settings,
    title: "Quality Pipe Systems",
    description: "Premium grade drip pipes and fittings designed for harsh desert conditions and long-term durability."
  },
  {
    icon: Zap,
    title: "Smart Control Systems",
    description: "Automated irrigation control panels and monitoring systems for efficient project management."
  },
  {
    icon: FileText,
    title: "Project Documentation",
    description: "Complete project records, maintenance schedules, and technical documentation for all installations."
  },
  {
    icon: Target,
    title: "Turnkey Solutions",
    description: "Complete turnkey drip irrigation projects including site preparation, installation, and commissioning."
  }
];

const Benefits = () => {
  return (
    <section id="benefits" className="py-24 bg-gradient-subtle relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-growth-green/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-60 h-60 bg-water-blue/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20 animate-fade-up">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
            🏗️ Project Excellence
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Why Choose Our 
            <span className="gradient-text"> Drip Projects?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From initial design to final commissioning, we deliver complete drip irrigation projects 
            with professional pipe installation and ongoing support.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="group hover-lift border-0 shadow-card hover:shadow-elegant bg-card/80 backdrop-blur-sm animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="relative mb-6">
                  <div className="bg-gradient-water w-18 h-18 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg">
                    <benefit.icon className="h-9 w-9 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-sunset-gold rounded-full animate-pulse"></div>
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {benefit.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {benefit.description}
                </p>
                
                <div className="mt-6 h-1 w-0 bg-gradient-water rounded-full group-hover:w-full transition-all duration-500"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced Stats Section */}
        <div className="bg-gradient-hero rounded-3xl p-12 shadow-elegant animate-fade-up">
          <h3 className="text-3xl md:text-4xl font-bold text-center text-white mb-12">
            Our Project Portfolio
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="text-5xl md:text-6xl font-bold text-sunset-gold mb-3 group-hover:scale-110 transition-transform">500+</div>
              <div className="text-white/90 text-lg">Projects Completed</div>
            </div>
            <div className="text-center group">
              <div className="text-5xl md:text-6xl font-bold text-water-blue mb-3 group-hover:scale-110 transition-transform">2M+</div>
              <div className="text-white/90 text-lg">Meters of Pipe Installed</div>
            </div>
            <div className="text-center group">
              <div className="text-5xl md:text-6xl font-bold text-growth-green mb-3 group-hover:scale-110 transition-transform">15+</div>
              <div className="text-white/90 text-lg">Years of Expertise</div>
            </div>
            <div className="text-center group">
              <div className="text-5xl md:text-6xl font-bold text-white mb-3 group-hover:scale-110 transition-transform">24/7</div>
              <div className="text-white/90 text-lg">Project Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;