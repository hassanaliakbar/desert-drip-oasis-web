import { Droplets, Sprout, DollarSign, Zap, Clock, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const benefits = [
  {
    icon: Droplets,
    title: "60% Water Savings",
    description: "Precision water delivery directly to plant roots minimizes waste and maximizes efficiency."
  },
  {
    icon: Sprout,
    title: "40% Higher Yields",
    description: "Consistent moisture levels create optimal growing conditions for maximum productivity."
  },
  {
    icon: DollarSign,
    title: "Cost Effective",
    description: "Reduced water bills and increased crop yields provide excellent return on investment."
  },
  {
    icon: Zap,
    title: "Energy Efficient",
    description: "Low-pressure systems require minimal energy, perfect for remote desert locations."
  },
  {
    icon: Clock,
    title: "Time Saving",
    description: "Automated irrigation reduces manual labor and allows focus on other farm activities."
  },
  {
    icon: Award,
    title: "Proven Results",
    description: "Successfully implemented across 500+ desert farms with consistent results."
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
            🚀 Premium Benefits
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
            Why Choose Our 
            <span className="gradient-text"> Drip Systems?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Engineered specifically for extreme desert conditions, our systems deliver exceptional 
            performance where traditional irrigation fails.
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
            Proven Track Record
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="text-5xl md:text-6xl font-bold text-sunset-gold mb-3 group-hover:scale-110 transition-transform">500+</div>
              <div className="text-white/90 text-lg">Successful Installations</div>
            </div>
            <div className="text-center group">
              <div className="text-5xl md:text-6xl font-bold text-water-blue mb-3 group-hover:scale-110 transition-transform">60%</div>
              <div className="text-white/90 text-lg">Water Conservation</div>
            </div>
            <div className="text-center group">
              <div className="text-5xl md:text-6xl font-bold text-growth-green mb-3 group-hover:scale-110 transition-transform">15+</div>
              <div className="text-white/90 text-lg">Years of Excellence</div>
            </div>
            <div className="text-center group">
              <div className="text-5xl md:text-6xl font-bold text-white mb-3 group-hover:scale-110 transition-transform">98%</div>
              <div className="text-white/90 text-lg">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;