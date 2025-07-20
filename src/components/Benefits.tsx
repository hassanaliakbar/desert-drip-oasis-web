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
    <section id="benefits" className="py-20 bg-gradient-to-b from-background to-desert-sand/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why Choose Our Drip Systems?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Engineered specifically for desert conditions, our systems deliver exceptional 
            performance where traditional irrigation fails.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-card">
              <CardContent className="p-8">
                <div className="bg-gradient-to-br from-desert-orange to-earth-brown w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {benefit.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">500+</div>
            <div className="text-muted-foreground">Installations</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">60%</div>
            <div className="text-muted-foreground">Water Saved</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">15+</div>
            <div className="text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-primary mb-2">98%</div>
            <div className="text-muted-foreground">Success Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;